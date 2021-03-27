<?php
namespace app\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ArticleController extends Controller
{
    public function getArticles(Request $request)
    {
        $page = intval($request->get('page', 1));
        $pageSize = 10;
        $start = ($page - 1) * $pageSize;
        $status = strval($request->get('status', 'all'));
        $daterange = $request->get('daterange', null);
        $keywords = strval($request->get('keyword', null));
        $article = new Article();

        if ($status == 'all') {
            $article = $article->where('status', '<>', '-1');
        } elseif ($status == 'draft') {
            $article = $article->where('status', '=', '0');
        } elseif ($status == 'trash') {
            $article = $article->where('status', '=', '-1');
        }

        if ($keywords != null) {
            $article = $article->where('title', 'like', '%' . $keywords . '%');
        }

        if ($daterange != null) {
            $article = $article->where('created_at', '>=', $daterange[0]);
            $article = $article->where('created_at', '<', $daterange[1]);
        }

        $totalCount = $article->count();
        $article = $article->orderBy('top', 'desc');
        $article = $article->orderBy('id', 'desc');
        $articles = $article->skip($start)->take($pageSize)->get();

        return $this->success([
            'total' => $totalCount,
            'articles' => $articles,
        ]);
    }

    public function getArticle($id)
    {
        $article = Article::find($id);

        if ($article) {
            $article['cates'] = DB::table('articles_categories')->where('article_id', $id)->pluck('category_id');
            $article['tags'] = DB::table('articles_tags')->where('article_id', $id)->pluck('tag_id');
            return $this->success($article);
        }
        return $this->error(-1, '文章不存在');
    }

    public function create(Request $request)
    {
        $action = $request->get('action');
        $article = new Article();

        $cateData = [];
        $tagData = [];

        $article->title = strval($request->get('title'));
        $article->desc = strval($request->get('desc'));
        $article->content = strval($request->get('content'));
        $article->status = intval($request->get('status'));

        try {
            // 开启事务
            DB::beginTransaction();
            // 更新文章
            $article->save();
            foreach ($request->get('cates') as $cate) {
                $cateData[] = [
                    'article_id' => $article->id,
                    'category_id' => $cate,
                ];
            }
            foreach ($request->get('tags') as $tag) {
                $tagData[] = [
                    'article_id' => $article->id,
                    'tag_id' => $tag,
                ];
            }
            // 重新添加文章分类关联数据
            DB::table("articles_categories")->insert($cateData);
            // 重新添加文章标签关联数据
            DB::table("articles_tags")->insert($tagData);
            // 事务提交
            DB::commit();
        } catch (QueryException $e) {
            // 事务回滚
            DB::rollBack();
            return $this->error(-1, $action === "save" ? "文章保存失败" : "文章发布失败");
        }

        return $this->success($article, $action === "save" ? "文章保存成功" : "文章发布成功");
    }

    public function update(Request $request)
    {
        $id = $request->get('id');
        $action = $request->get('action');
        $article = Article::find($id);
        if (!$article) {
            return $this->error(-1, '要编辑的文章不存在，编辑失败');
        }

        $cateData = [];
        $tagData = [];
        foreach ($request->get('cates') as $cate) {
            $cateData[] = [
                'article_id' => $id,
                'category_id' => $cate,
            ];
        }
        foreach ($request->get('tags') as $tag) {
            $tagData[] = [
                'article_id' => $id,
                'tag_id' => $tag,
            ];
        }

        $article->title = strval($request->get('title'));
        $article->desc = strval($request->get('desc'));
        $article->content = strval($request->get('content'));
        $article->status = intval($request->get('status'));

        try {
            // 开启事务
            DB::beginTransaction();
            // 更新文章
            $article->save();
            // 删除已存在的文章分类关联数据
            DB::table("articles_categories")->where("article_id", $id)->delete();
            // 删除已存在的文章标签关联数据
            DB::table("articles_tags")->where("article_id", $id)->delete();
            // 重新添加文章分类关联数据
            DB::table("articles_categories")->insert($cateData);
            // 重新添加文章标签关联数据
            DB::table("articles_tags")->insert($tagData);
            // 事务提交
            DB::commit();
        } catch (QueryException $e) {
            // 事务回滚
            DB::rollBack();
            return $this->error(-1, $action === "save" ? "文章保存失败" : "文章发布失败");
        }

        return $this->success($article, $action === "save" ? "文章保存成功" : "文章发布成功");
    }

    public function setTop(Request $request)
    {
        $id = $request->get('id');
        $top = intval($request->get('top'));
        $article = Article::find($id);
        $article->top = $top === 1 ? 0 : 1;

        $action = $top === 0 ? '置顶' : '取消置顶';

        if (!$article) {
            return $this->error(-1, '文章不存在，' . $action . '失败');
        }

        if ($article->save()) {
            return $this->success(['id' => $id], '文章' . $action . '成功');
        }
        return $this->error(-1, '文章' . $action . '失败');
    }

    public function delete($id)
    {
        $article = Article::find($id);

        if (!$article) {
            return $this->error(-1, '要删除的文章不存在，删除失败');
        }

        $article->status = -1;

        if ($article->save()) {
            return $this->success(['id' => $id], '文章删除成功');
        }
        return $this->error(-1, '文章删除失败');
    }

    public function recover($id)
    {
        $article = Article::find($id);

        if (!$article) {
            return $this->error(-1, '要恢复的文章不存在，恢复失败');
        }

        $article->status = 0;

        if ($article->save()) {
            return $this->success(['id' => $id], '文章恢复成功');
        }
        return $this->error(-1, '文章恢复失败');
    }
}
