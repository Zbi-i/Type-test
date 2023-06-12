<template>
  <h3 class="title">
    {{ `《${content?.title}》${content?.dynasty}·${content?.author}` }}
  </h3>
  <div class="content" id="content">
    <div
      v-for="item in content?.content"
      :key="item"
      class="content-item"
    >
        <div class="c-i-char" v-for="(itemItem, itemIndex) in item" :key="itemIndex">
            <div class="pinyin">
                <span v-for="(itemItemItem, itemItemIndex) in itemItem.pinyinTone"
                      :key="itemItemIndex"
                      class="py-item">
                    {{ itemItemItem }}
                </span>
            </div>
            <div class="hanzi">{{ itemItem.hanzi }}</div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title{
  color: rgb(255, 255, 255);
}
.content{
  max-width: 10rem;
  max-height: 4.5rem;
  font-size: .38rem;
  margin: 0 auto;
  padding: .12rem 0;
  overflow-y: scroll;
  transition: all 0.3s ease;
  border-bottom: solid .02rem #464646;
  &::-webkit-scrollbar{
    display: none;
  }
  .content-item{
    display: flex;
    flex-wrap: wrap;
    .c-i-char{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: .16rem;
      margin-left: 0;
    }
    .pinyin{
      span {
        display: inline-block;
        margin: .06rem .04rem;
        padding: .08rem;
        color: #fff;
      }
      span.active{
        padding-bottom: .06rem;
        background-color: #000;
        border-bottom: solid .02rem #9fed51;
        box-sizing: border-box;
      }
      span.correct{
        color: #4e9309;
        background: #9fed51;
      }
      span.error{
        color: #f4b6b6;
        background: #5b1d1d;
      }
    }
    .hanzi{
      width: 100%;
      text-align: center;
      color: #fff;
      background-color: #464646;
      transition: background-color .3s ease-in-out;
    }
    .hanzi.pass{
      background-color: transparent;
    }
  }
}
</style>

<script>
import { toRefs } from 'vue';

export default {
  props: {
    content: {
      type: Object,
      default: {}
    }
  },
  setup(props) {
    const { content } = toRefs(props);
    return {
      content
    }
  },
}
</script>

