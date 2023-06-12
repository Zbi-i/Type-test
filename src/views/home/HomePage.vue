<template>
  <nav>
    <div>
      打字练习
    </div>
    <div>2977743612@qq.com</div>
  </nav>
  <main>
    <div class="content">
      <h1>选择练习</h1>
      <div class="wrapper">
        <div class="item" @click="router.push({
          name: 'TypeChinese',
          params: {
            id: '1',
          },
        })">
          <div>
            <img src="" alt="" srcset="">
          </div>
          <div>中文练习</div>
        </div>
        <div class="item" @click="router.push({
          name: 'TypeLetter',
          params: {
            id: '1',
          },
        })">
          <div>
            <img src="" alt="" srcset="">
          </div>
          <div>英文练习</div>
        </div>
      </div>
    </div>
    <div class="ui-img">
      <div class="home-bg"></div>
      <div class="xingqiu-big">
          <img src="/imgs/homepage/intro-star-big.037e68e1.svg" alt="">
      </div>
      <div class="xingqiu-small">
        <img src="/imgs/homepage/intro-star-small.1eda1e4b.svg" alt="">
      </div>
      <div class="huojian">
        <img src="/imgs/homepage/intro-rocket.d4e5f0f1.svg" alt="">
      </div>
      <div class="home-bottom-bg"></div>
      </div>
    <section>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </section>
  </main>
</template>

<style lang="scss" scoped>
nav{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: .6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 .3rem;
  background: #000000;
  color: #fff;
  z-index: 99;
  box-sizing: border-box;
  overflow: hidden;
  div:nth-of-type(1) {
    font-size: .18rem;
  }
  div:nth-of-type(2) {
    font-size: .14rem;
    color: #ccc;
  }
}
main {
  position: relative;
  width: 100%;
  height: 100vh;
  color: #fff;
  background: linear-gradient(45deg,#bb90ff,#e88b8b);
  overflow: hidden;
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 9;
    h1 {
      font-size: .2rem;
      margin-bottom: .2rem;
    }
    .wrapper {
      display: flex;
      width: 4.5rem;
      height: 2.4rem;
      max-width: 100vw;
      padding: .2rem;
      .item {
        flex: 1;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 .1rem;
        padding: .1rem;
        background: #000000;
        border-radius: .08rem;
        overflow: hidden;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
          box-shadow: 0 0 .05rem #ccc;
          transform: scale(1.1);
        }
        // 伪元素
        &::before {
          content: '';
          display: block;
          width: 80%;
          height: 140%;
          position: absolute;
          background: linear-gradient(45deg,#d7bfff,#fcb5b5);
          border-radius: .08rem;
          // 旋转动画
          animation: rotate 5s linear infinite;
        }
        &::after {
          content: '';
          display: block;
          position: absolute;
          inset: .05rem;
          background-color: #000000;
          border-radius: .05rem;
        }
        div {
          margin-top: 1rem;
          z-index: 1;
          font-size: .18rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      }
    }
  }
  .ui-img{
    div{
      z-index: 1;
    }
    .home-bg{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('../../../public/imgs/homepage/intro-star-bg.9e1f9ec5.svg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
    .home-bottom-bg{
      position: absolute;
      bottom: -.1rem;
      left: 0;
      width: 115%;
      height: 26%;
      background: url('../../../public/imgs/homepage/intro-cloud.0e2ec0ab.png');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      animation: home-bottom-bg 20s infinite ease-in-out;
    }
    .huojian, .xingqiu-big, .xingqiu-small{
      position: absolute;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .huojian{
      top: 25%;
      right: 15%;
      animation: huojian 10s infinite ease-in-out;
    }
    .xingqiu-big{
      bottom: 0;
      right: 0;
      animation: xingqiuBig 20s infinite ease-in-out;
    }

    .xingqiu-small{
      top: 30%;
      left: 60%;
      animation: xingqiu 15s infinite ease-in-out;
    }

    // 云朵动画 移动+缩放
    @keyframes home-bottom-bg{
      0%{
        transform: translateX(0) scale(1);
      }
      50%{
        transform: translateX(-15%) scale(1.1);
      }
      100%{
        transform: translateX(0) scale(1);
      }
    }
    // 在空中飘动的动画
    @keyframes huojian{
      0%{
        transform: translate(0 , 0);
      }
      50%{
        transform: translate(.6rem, -.5rem);
      }
      100%{
        transform: translate(0, 0);
      }
    }
    // 大星球飘动动画
    @keyframes xingqiuBig{
      0%{
        transform: translate(0, 0);
      }
      50%{
        transform: translate(.25rem, .35rem);
      }
      100%{
        transform: translate(0, 0);
      }
    }
    // 小星球 转动 + 飘动 + 放大 动画
    @keyframes xingqiu{
      0%{
        transform: translate(0, 0) rotate(0deg) scale(1);
      }
      50%{
        transform: translate(.2rem, -.2rem) rotate(180deg) scale(1.1);
      }
      100%{
        transform: translate(0, 0) rotate(360deg) scale(1);
      }
    }
  }
  section{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: animateBg 20s linear infinite;
  }
  @keyframes animateBg{
    0%, 100%{
        transform: scale(1);
    }
    50%{
        transform: scale(1.2);
    }
  }
  span{
    position: absolute;
    top: 50%;
    left: 50%;
    width :.04rem;
    height: .04rem;
    background: #fff;
    border-radius: .5rem;
    box-shadow: 0 0 0 4px rgba(255,255,255,0.1),
    0 0 0 8px rgba(255,255,255,0.1),
    0 0 20px rgba(255,255,255,1);
    animation: animate 6s linear infinite;
  }
  span::before{
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 300px;
    height: 1px;
    background: linear-gradient(90deg,#fff,transparent);
  }
  @keyframes animate{
    0%{
      transform: rotate(315deg) translateX(0);
      opacity: 1;
    }
    70%{
      opacity: 1;
    }
    100%{
      transform: rotate(315deg) translateX(-10rem);
      opacity: 0;
    }
  }
  span:nth-child(1){
    top: 0;
    right: 0;
    animation-delay: 0;
    animation-duration: 1s;
  }
  span:nth-child(2){
    top: 0;
    right: 80px;
    left: initial;
    animation-delay: 0.2s;
    animation-duration: 3s;
  }
  span:nth-child(3){
    top: 80px;
    right: 0;
    left: initial;
    animation-delay: 0.4s;
    animation-duration: 2s;
  }
  span:nth-child(4){
    top: 0;
    right: 180px;
    left: initial;
    animation-delay: 0.6s;
    animation-duration: 1.5s;
  }
  span:nth-child(5){
    top: 0;
    right: 400px;
    left: initial;
    animation-delay: 0.8s;
    animation-duration: 2.5s;
  }
  span:nth-child(6){
    top: 0;
    right: 600px;
    left: initial;
    animation-delay: 1s;
    animation-duration: 3s;
  }
  span:nth-child(7){
    top: 300px;
    right: 0;
    left: initial;
    animation-delay: 1.2s;
    animation-duration: 1.75s;
  }
}
</style>

<script>
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
}
</script>
