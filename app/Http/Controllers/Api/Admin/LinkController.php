<?php
namespace app\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\LinkRequest;
use App\Models\Link;

class LinkController extends Controller
{
    public function getLinks()
    {
        $links = Link::all();
        return $this->success($links);
    }

    public function getLink($id)
    {
        $link = Link::find($id);
        if ($link) {
            return $this->success($link);
        }
        return $this->error(-1, '友链不存在');
    }

    public function create(LinkRequest $request)
    {
        $link = new Link();

        $link->name = $request->input('name');
        $link->desc = $request->input('desc');
        $link->link = $request->input('link');

        if ($link->save()) {
            return $this->success($link, '友链添加成功');
        }
        return $this->error(-1, '友链添加失败');
    }

    public function update(LinkRequest $request)
    {
        $id = $request->input('id');
        $link = Link::find($id);

        if (!$link) {
            return $this->error(-1, '要更新的友链不存在，更新失败');
        }

        $link->name = $request->input('name');
        $link->desc = $request->input('desc');
        $link->link = $request->input('link');

        if ($link->save()) {
            return $this->success($link, '友链更新成功');
        }
        return $this->error(-1, '友链更新失败');
    }

    public function delete($id)
    {
        $link = Link::find($id);

        if (!$link) {
            return $this->error(-1, '要删除的友链不存在，删除失败');
        }

        if ($link->delete()) {
            return $this->success(['id' => $id], '友链删除成功');
        }
        return $this->error(-1, '友链删除失败');
    }
}
