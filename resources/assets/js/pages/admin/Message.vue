<template>
  <Card>
    <h2 class="i-md-content">消息中心</h2>
    <Collapse
      v-model="opened"
      accordion
      @on-change="changedOpen"
      v-if="messages.length > 0"
    >
      <Panel
        v-for="(item, index) in messages"
        :key="index"
        :name="String(index)"
      >
        <span>{{ item.title }}</span>
        <span :style="{ float: 'right', marginRight: '20px' }">
          <span>{{ item.create_at }}</span>
          <Badge
            v-if="item.status === 0"
            text="new"
            :style="{ marginLeft: '10px' }"
          ></Badge>
        </span>
        <div slot="content" class="message-content">
          <p>{{ item.content }}</p>
          <div class="message-footer">
            <Icon type="md-trash" class="trash-btn" @click="trashMessage" />
          </div>
        </div>
      </Panel>
    </Collapse>
    <Button type="error" @click="trashAllMessage" class="create-new-btn"
      >清空所有消息</Button
    >
    <Page
      :total="messages.length"
      :style="{ textAlign: 'center', marginTop: '20px' }"
    />
  </Card>
</template>

<script>
export default {
  name: "AdminMessage",
  data() {
    return {
      opened: "",
    };
  },
  computed: {
    messages() {
      return [
        {
          id: 1,
          title: "史蒂夫·乔布斯",
          content:
            "史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。",
          create_at: "2021-03-16 15:32:16",
          status: 0,
        },
        {
          id: 2,
          title: "斯蒂夫·盖瑞·沃兹尼亚克",
          content:
            "斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。",
          create_at: "2021-03-15 15:32:16",
          status: 0,
        },
        {
          id: 3,
          title: "乔纳森·伊夫",
          content:
            "乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。",
          create_at: "2021-03-14 15:32:16",
          status: 1,
        },
      ];
    },
  },
  methods: {
    changedOpen(keys) {
      let index = Number(keys[0]);
      if (keys.length > 0) {
        let item = this.messages[index];
        if (item.status === 0) {
          this.messages[index].status = 1;
        }
      }
    },
    trashMessage() {
      let index = Number(this.opened[0]);
      this.$Modal.confirm({
        title: "确定删除本条消息吗？",
        onOk: () => {
          this.messages.splice(index, 1);
          this.$Message.success("删除成功");
          this.opened = "";
          this.$forceUpdate();
        },
      });
    },
    trashAllMessage() {
      this.$Modal.confirm({
        title: "确定清空所有消息吗？",
        onOk: () => {
          this.messages.splice(0, this.messages.length);
          this.$Message.success("消息清空成功");
          this.opened = "";
          this.$forceUpdate();
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.message-content {
  .message-footer {
    width: 100%;
    line-height: 30px;
    border-top: 1px dashed #dcdee2;
    text-align: center;
    margin: 16px auto -16px auto;
  }
  .trash-btn {
    font-size: 20px;
    color: #a1a1a1;
    cursor: pointer;
  }

  .trash-btn:hover {
    color: #ff6d6d;
  }
}
</style>
