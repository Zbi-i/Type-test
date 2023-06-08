<template>
  <div class="wrapper">
    <nav class="nav">
      <div class="nav-left">
          <h1>Type.fun</h1>
      </div>
      <ul class="nav-right">
          <li class="score">
              <img src="/imgs/nav/icon-nav-score.6df7b33b.svg" alt="" srcset="">
              <span>成绩单</span>
          </li>
          <li class="level">
              <img src="/imgs/nav/icon-nav-level.f3033bea.svg" alt="" srcset="">
              <span>等级：黄金</span>
          </li>
          <li class="point">
              <img src="/imgs/nav/icon-nav-point.133d7bd1.svg" alt="" srcset="">
              <span>积分：555</span>
          </li>
          <li class="user">
              <img src="/imgs/nav/avatar-01.a80cb886.png" alt="" srcset="">
              <span>姓名：照无眠</span>
          </li>
          <button @click="router.back()">← 返回</button>
          <button>设置</button>
      </ul>
    </nav>
    <main>
      <div class="item1" @click="router.push({
        path: '/course',
        query: { 'category': 'Basic' }
      })"></div>
      <div class="item2" @click="router.push({
        path: '/course',
        query: { 'category': 'Beginner' }
      })"></div>
      <div class="item3" @click="router.push({
        path: '/course',
        query: { 'category': 'Advanced' }
      })"></div>
      <div class="item4" @click="router.push({
        path: '/course',
        query: { 'category': 'Master' }
      })"></div>
      <div class="map-stars"></div>
      <div class="map-bg"></div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.wrapper{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.nav{
  width: 100%;
  height: 60px;
  background-color: #000000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  &-left {
    display: flex;
    align-items: center;
    img{
      width: 40px;
      margin-right: 12px;
    }
    h1{
      margin: 0;
      padding: 0;
      font-size: 24px;
    }
  }
  &-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      position: relative;
      height: 28px;
      line-height: 28px;
      margin-right: 20px;
      padding: 0 16px 0 32px;
      border-radius: 16px;
      color: #000;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
      cursor: pointer;
      transition: all 0.2s ease;
      img{
        display: block;
        position: absolute;
        left: -6px;
        bottom: 0;
      }
    }
    .score{
      background-color: #80de1e;
    }
    .level{
      background-color: #d84290;
    }
    .point{
      background-color: #ff6a48;
    }
    .user{
      background-color: rgb(76, 152, 227);
    }
    .user img{
      width: 32px;
      bottom: -5px!important;
      left: 0!important;
    }
    .score:hover{
      background-color: #a3f947;
    }
    .level:hover{
      background-color: #fe69b6;
    }
    .point:hover{
      background-color: #fe866a;
    }
    .user:hover{
      background-color: rgb(122, 188, 253);
    }
    button {
      width: 100px;
      height: 28px;
      margin-right: 18px;
      background-color: #001529;
      color: #fff;
    }
  }
}
main{
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  background: linear-gradient(45deg,#bb90ff,#e88b8b);
  overflow: hidden;
  div{
    height: 100%;
    background-color: rgba($color: #000, $alpha: .2);
    transition: all 0.3s ease;
  }
  div:hover{
    background-color: rgba($color: #fff, $alpha: .1);
  }
  .item1, .item2, .item3, .item4{
    z-index: 9;
    a{
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }
  .item1{
    width: 27%;
  }
  .item2{
    width: 20%;
  }
  .item3{
    width: 28%;
  }
  .item4{
    width: 25%;
  }
  .map-stars, .map-bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .map-stars{
    background: url('../../../public/imgs/map/map-s.71a61c66.png') no-repeat center center;
    background-size: cover;
  }
  .map-bg{
    background: url('../../../public/imgs/map/map-dark-bg.bbf9aa42.svg') no-repeat center center;
    background-size: cover;
  }
}
</style>

<script>
import { useRoute, useRouter } from 'vue-router';
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    return {
      router,
    };
  },
}
</script>
