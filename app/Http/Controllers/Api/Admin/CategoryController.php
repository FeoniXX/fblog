<?php
namespace app\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CategoryRequest;
use App\Models\Category;

class CategoryController extends Controller
{
    public function getCates()
    {
        $cates = Category::all();
        return $this->success($cates);
    }

    public function getCate($id)
    {
        $cate = Category::find($id);
        if ($cate) {
            return $this->success($cate);
        }
        return $this->error(-1, '分类不存在');
    }

    public function create(CategoryRequest $request)
    {
        $cate = new Category();

        $cate->name = $request->input('name');
        $cate->desc = strval($request->input('desc'));
        $cate->status = $request->input('status');

        $c = Category::where('name', $cate->name)->first();
        if ($c) {
            return $this->error(-1, "该分类已存在，请勿重复添加");
        }

        if ($cate->save()) {
            return $this->success($cate, '分类添加成功');
        }
        return $this->error(-1, '分类添加失败');
    }

    public function update(CategoryRequest $request)
    {
        $id = $request->input('id');
        $cate = Category::find($id);

        if (!$cate) {
            return $this->error(-1, '要更新的分类不存在，更新失败');
        }

        $cate->name = $request->input('name');
        $cate->desc = strval($request->input('desc'));
        $cate->status = $request->input('status');

        $c = Category::where('name', $cate->name)->first();
        if ($c && $c->id != $id) {
            return $this->error(-1, "该分类名称与其他分类重复，修改失败");
        }

        if ($cate->save()) {
            return $this->success($cate, '分类更新成功');
        }
        return $this->error(-1, '分类更新失败');
    }

    public function delete($id)
    {
        $cate = Category::find($id);

        if (!$cate) {
            return $this->error(-1, '要删除的分类不存在，删除失败');
        }

        if ($cate->delete()) {
            return $this->success(['id' => $id], '分类删除成功');
        }
        return $this->error(-1, '分类删除失败');
    }
}
