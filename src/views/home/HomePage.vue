<template>
  <nav class="nav">
    <div class="left">
        <div>
            <img src="/imgs/nav/logo-big.svg" alt="">
        </div>
        <div>
            <h2>Type.fun</h2>
        </div>
    </div>
    <div class="right">
        <ul>
            <li>首页</li>
            <li>产品</li>
            <li>Type.fun博客</li>
            <li>
                <button @click="router.push({path: '/map'})">继续学习</button>
            </li>
        </ul>
    </div>
  </nav>
  <div class="home">
    <div class="SHOUPING">
      <div class="home-bg"></div>
      <h1>TypeFun 在线打字练习</h1>
      <h1>让打字变得更有趣</h1>
      <P>每天几分钟，让您成为打字高手</P>
      <p>丰富内容结构，科学的进阶方法，诗词歌赋，经典名著，让您在练习打字时收获更多</p>
      <p>可结合拼音跟读，轻松学会拼音，数十万用户的选择</p>
      <button @click="router.push({path: '/map'})">
        <i class="triangle"></i>继续学习
      </button>
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
    <div class="video-dome">
      <h1>如何使用打字网学习打字？</h1>
      <div>
        <video src="/video/get-started.41b49792.mp4" controls></video>
      </div>
    </div>
    <div class="why-select-our">
      <h1>选择Type.fun的6个理由</h1>
      <p>拼音练习版块让你能快速掌握26个字母，结合拼音跟读快速学会拼音</p>
      <h5>内含诗词歌赋，经典文学作品等，帮助您在打字的同时，高效记忆学习</h5>
      <div class="content">
        <div class="content-item">
          <div>
              <img src="/imgs/homepage/1.png" alt="" srcset="">
          </div>
          <div>
              <P>科学的打字课程设计</P>
              <P>快速形成肌肉记忆</P>
          </div>
        </div>
        <div class="content-item">
          <div>
              <img src="/imgs/homepage/2.png" alt="" srcset="">
          </div>
          <div>
              <P>规范的指法引导</P>
              <P>迅速提升打字速度</P>
          </div>
        </div>
        <div class="content-item">
          <div>
              <img src="/imgs/homepage/3.png" alt="" srcset="">
          </div>
          <div>
              <P>互动游戏体验</P>
              <P>学习过程轻松有趣</P>
          </div>
        </div>
        <div class="content-item">
          <div>
              <img src="/imgs/homepage/4.png" alt="" srcset="">
          </div>
          <div>
              <P>同时学习拼音和打字</P>
              <P>一举多得</P>
          </div>
        </div>
        <div class="content-item">
          <div>
              <img src="/imgs/homepage/5.png" alt="" srcset="">
          </div>
          <div>
              <P>实时数据统计</P>
              <P>随时掌握打字水平</P>
          </div>
        </div>
        <div class="content-item">
          <div>
              <img src="/imgs/homepage/6.png" alt="" srcset="">
          </div>
          <div>
              <P>免安装</P>
              <P>随时随地开始练习</P>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang = "scss" scoped>
.nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    color: #fff;
    background-color: #000;
    box-sizing: border-box;
    padding: 0 20px;
    .left {
      display: flex;
      align-items: center;
      img{
        width: 40px;
        margin-right: 12px;
      }
    }
    .right ul{
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        padding: 6px;
        margin: 0 10px;
      }
      button {
        width: 100px;
        height: 35px;
        border: none;
        border-radius: 3px;
        color: #fff;
        background-color: rgb(230, 94, 108);
      }
    }
}
.home{
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  min-height: 100vh;

  .SHOUPING{
    position: relative;
    width: 100%;
    height: 92vh;
    padding: 120px 120px 0;
    color: #fff;
    background: linear-gradient(45deg,#bb90ff,#e88b8b);
    box-sizing: border-box;
    overflow: hidden;
    h1{
      font-size: 56px;
      font-weight: bold;
      margin: 6px 0;
    }
    h1:last-of-type{
      margin-bottom: 20px;
    }
    p{
      font-size: 24px;
      margin: 6px 0;
    }
    button{
      position: relative;
      width: 200px;
      height: 50px;
      border-radius: 5px;
      font-size: 20px;
      font-weight: 700;
      margin-top: 20px;
      color: #f979e5;
      background-color: rgba($color: #fff, $alpha: 0.6);
      animation: startBtn 6s infinite ease-in-out;
      z-index: 99;
      i{
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        border: 10px solid transparent;
        border-left: 10px solid #f979e5;
      }
    }
    // 大星球飘动动画
    @keyframes startBtn{
      0%{
        transform: translateY(0);
      }
      50%{
        transform: translateY(16px);
      }
      100%{
        transform: translateY(0);
      }
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
      bottom: -1px;
      left: 0;
      width: 115%;
      height: 200px;
      background: url('../../../public/imgs/homepage/intro-cloud.0e2ec0ab.png');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      animation: home-bottom-bg 25s infinite ease-in-out;
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
      width: 320px;
      animation: huojian 10s infinite ease-in-out;
    }
    // 在空中飘动的动画
    @keyframes huojian{
      0%{
        transform: translate(0 , 0);
      }
      50%{
        transform: translate(60px, -50px);
      }
      100%{
        transform: translate(0, 0);
      }
    }
    .xingqiu-big{
      bottom: 0;
      right: 0;
      width: 260px;
      animation: xingqiuBig 10s infinite ease-in-out;
    }
    // 大星球飘动动画
    @keyframes xingqiuBig{
      0%{
        transform: translate(0, 0);
      }
      50%{
        transform: translate(15px, 25px);
      }
      100%{
        transform: translate(0, 0);
      }
    }
    .xingqiu-small{
      top: 30%;
      left: 60%;
      width: 120px;
      animation: xingqiu 15s infinite ease-in-out;
    }
    // 小星球 转动 + 飘动 + 放大 动画
    @keyframes xingqiu{
      0%{
        transform: translate(0, 0) rotate(0deg) scale(1);
      }
      50%{
        transform: translate(10px, -10px) rotate(80deg) scale(1.2);
      }
      100%{
        transform: translate(0, 0) rotate(360deg) scale(1);
      }
    }
  }
  .video-dome{
    width: 100%;
    height: 100vh;
    text-align: center;
    color: #000;
    background-color: #fff;
    h1{
      font-size: 48px;
      font-weight: bold;
      margin: 88px 0 56px;
    }
    > div{
      width: 888px;
      margin: 0 auto;
      border: solid 10px #fff;
      border-radius: 3px;
      // 阴影
      box-shadow: 0px 0px 5px rgba(0,0,0,.2);
      video{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

  }
  .why-select-our{
    width: 100%;
    height: 100vh;
    padding: 60px 0;
    text-align: center;
    h1{
      font-size: 48px;
      margin: 0 24px;
    }
  }
  .content{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 30px;
    max-width: 880px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    .content-item{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 12px;
      text-align: center;
      font-size: 18px;
      background-color: #fff;
      border-radius: 5px;
      transition: all .15s ease-in-out;
      cursor: pointer;
      img{
        width: 100%;
        margin-top: 16px;
      }
      p {
        margin: 8px 0;
      }
    }
    .content-item:hover{
      box-shadow: 0px 0px 5px rgba(0,0,0,.2);
      // 放大
      transform: scale(1.1);
    }
  }
}
</style>

<script>
import { useRouter  } from 'vue-router';
export default {
  name: 'HomePage',
  setup() {
    const router = useRouter();
    return {
      router
    }
  },
}
</script>
