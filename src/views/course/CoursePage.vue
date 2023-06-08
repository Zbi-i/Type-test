<template>
  <nav>
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
    <h1>{{ title }}</h1>
    <h3>{{ text }}</h3>
    <div class="wrapper">
        <div class="item"
          v-for="(item, key) in currentContent"
          :key="item.id"
          @click="courseHandleClick(key)">
            <div class="item-image">
                <img src="/imgs/course/course-icon-4.svg" alt="" srcset="">
            </div>
            <div class="item-text">
                <span>{{ item.title }}</span>
            </div>
        </div>
    </div>
    <img class="xingqiu" src="/imgs/course/course-star-bg-master.a932c4e5.svg" alt="" srcset="">
  </main>
</template>

<style scoped>

main{
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding: 30px;
    background: linear-gradient(45deg,#bb90ff,#e88b8b);
    color: #fff;
    margin: 0;
    box-sizing: border-box;
    overflow: hidden;
}
main h1{
    font-size: 56px;
}
main h3{
    font-size: 28px;
}
.wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    width: 100%;
    box-sizing: border-box;
    z-index: 1;
}
.xingqiu{
    display: block;
    position: absolute;
    top: 60px;
    right: -100px;
    z-index: 0;
    opacity: .6;
}
.wrapper .item{
    margin-top: 25px;
    margin-right: 25px;
    text-align: center;
    background-color: #000000;
    border: solid 5px #303030;
    transition: all 0.2s ease;
    z-index: 1;
}
.wrapper .item:hover{
    border-color: #f273a6;

}
.wrapper .item .item-text{
    width: 100%;
    padding: 8px 0;
    background-color: rgba(255,255,255, 0.2);
    box-sizing: border-box;
}
.wrapper .item .item-image{
    width: 160px;
    height: 150px;
    line-height: 180px;
    overflow: hidden;
}
nav{
    width: 100%;
    height: 60px;
    background-color: #000000;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
}
nav .nav-left{
    display: flex;
    align-items: center;
}
nav .nav-left h1{
    margin: 0;
    padding: 0;
    font-size: 24px;
}
nav .nav-right{
    display: flex;
    align-items: center;
}
nav .nav-right li{
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
nav .nav-right li img{
    display: block;
    position: absolute;
    left: -6px;
    bottom: 0;
}
nav .nav-right button{
    width: 100px;
    height: 28px;
    margin-right: 18px;
    background-color: #001529;
    color: #fff;
}
</style>

<script>
import { useRoute, useRouter } from 'vue-router'
export default {
  name: 'CoursePage',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const category = route.query?.category ? route.query.category : 'Basic';

    const pageInfo = {
      'Basic': {
        title: '新手基地',
        text: '基准键'
      },
      'Beginner': {
        title: '初学者乐园',
        text: '基准键'
      },
      'Advanced': {
        title: '十指如飞',
        text: '拼音'
      },
      'Master': {
        title: '盲打大师',
        text: '诗词歌赋'
      },
    }
    const courseList = {
      'Basic':{
        'ab': {
          title: '基准键a&b',
          content: ['a', 'b']
        },
        'fq': {
          title: '基准键f&q',
          content: ['f', 'q']
        },
        'cx': {
          title: '基准键c&x',
          content: ['c', 'x']
        },
        'uy': {
          title: '基准键u&y',
          content: ['u', 'y']
        },
        'pl': {
          title: '基准键p&l',
          content: ['p', 'l']
        },
      },
      'Beginner':{
        'abvt': {
          title: '基准键a&b&v&t',
          content: ['a', 'b', 'v', 't']
        },
        'cxnm': {
          title: '基准键c&x&n&m',
          content: ['c', 'x', 'n', 'm']
        },
        'dsrw': {
          title: '基准键d&s&r&w',
          content: ['d', 's', 'r', 'w']
        },
        'efgh': {
          title: '基准键e&f&g&h',
          content: ['e', 'f', 'g', 'h']
        },
        'ijkl': {
          title: '基准键i&j&k&l',
          content: ['i', 'j', 'k', 'l']
        },
      },
      'Advanced':{
        "声母": {
          "title": "声母",
          "content": ["b", "p", "m", "f", "d", "t", "n", "l"]
        },
        "韵母": {
          "title": "韵母",
          "content": ["a", "o", "e", "i", "u", "ü"]
        },
        "整体认读音节": {
          "title": "整体认读音节",
          "content": ["ai", "ei", "ui", "ao", "ou", "iu", "ie", "üe", "er", "an", "en", "in", "un", "ün", "ang", "eng"]
        },
        "拼音组合a": {
          "title": "拼音组合a",
          "content": ["ba", "pa", "ma", "fa", "da", "ta", "na", "la"]
        },
        "拼音组合b": {
          "title": "拼音组合b",
          "content": ["bo", "po", "mo", "fo", "do", "to", "no", "lo"]
        }
      },
      'Master':{
        "1": {
          id: 1,
          title: '将进酒',
        },
        "2": {
          id: 2,
          title: '归园田居·其三',
        },
        "3": {
          id: 3,
          title: '水调歌头·明月几时有',
        },
        "4": {
          id: 4,
          title: '陋室铭',
        }
      }
    }


    const courseHandleClick = (value) => {
      // 判断category是不是Master
      if(category === 'Master'){
        router.push({
          path: `/typing/chinese/${value}`
        })
      }else{
        router.push({
          path: `/typing/letter/${category}`,
          query: {
            val: value
          }
        })
      }
    }
    const currentContent = courseList[category];
    const { title, text} = pageInfo[category]
    return {
      router,
      title,
      text,
      currentContent,
      courseHandleClick
    }
  },
}
</script>
