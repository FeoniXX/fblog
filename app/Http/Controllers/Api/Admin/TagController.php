<?php
namespace app\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\TagRequest;
use App\Models\Tag;

class TagController extends Controller
{
    public function getTags()
    {
        $tags = Tag::all();
        return $this->success($tags);
    }

    public function create(TagRequest $request)
    {
        $tag = new Tag();
        $tag->name = $request->input("name");

        $t = Tag::where('name', $tag->name)->first();
        if ($t) {
            return $this->error(-1, "该标签已存在，请勿重复添加");
        }

        if ($tag->save()) {
            return $this->success($tag, '标签添加成功');
        }
        return $this->error(-1, '标签添加失败');
    }

    public function delete($id)
    {
        $tag = Tag::find($id);

        if (!$tag) {
            return $this->error(-1, '要删除的标签不存在，删除失败');
        }

        if ($tag->delete()) {
            return $this->success(['id' => $id], '标签删除成功');
        }
        return $this->error(-1, '标签删除失败');
    }
}
