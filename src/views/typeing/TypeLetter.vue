<template>
  <div class="type-wrapper">
      <nav>
        <div class="nav-left">
          <h1>打字网</h1>
        </div>
        <div class="nav-right">
          <div>
            <button class="select-content-btn">选择文章</button>
            <div class="selectContent-wrapper">
              <div class="triangle"></div>
              <div class="selectContent">
                <template v-for="(content, index) in ContentList"
                  :key="index">
                  <div
                    class="selectContent-item"
                    v-if="content?.title !== '' && JSON.stringify(content?.title) !== '{}'"
                    @click="changeContent(content?.id)">
                    <div class="sc-i-title">《{{ content?.title }}》</div>
                    <div class="sc-i-author">{{ content.dynasty }}
                      <span v-if="content.dynasty && content.dynasty !== ''">·</span>
                      {{ content.author }}
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div>
            <button button @click="addContentHandleClick">导入文章</button>
          </div>
        </div>
        <div class="addContent" v-show="addContentIsShow">
          <h3>导入文章</h3>
          <span class="close" @click="addContentHandleClick">X</span>
          <div>
            <div>
              标题:<input type="text" name="title" ref="title" placeholder="请输入标题">
            </div>
            <div>
              作者:<input type="text" name="author" ref="author" placeholder="选填">
            </div>
            <div>
              朝代:<input type="text" name="dynasty" ref="dynasty" placeholder="选填">
            </div>
            <div>
              语言：中文<input type="radio" name="language"  checked>
              英文<input type="radio" name="language">
            </div>
            <div>
              正文: <textarea name="content" ref="content" placeholder="请输入内容"></textarea>
            </div>
            <input type="button" value="确定" @click="addContent">
          </div>
        </div>
      </nav>
      <main>
        <div class="content">
          <span v-for="(itemItemItem, itemItemIndex) in pinyinArr"
                :key="itemItemIndex"
                class="py-item">
              {{ itemItemItem }}
          </span>
        </div>
        <div class="type-info" v-show="!isFirstKeyDown">
          <div>
            速度：<span>{{ speed }}</span>/分钟
          </div>
          <div>
            正确率：<span>{{ accuracy }}</span>%
          </div>
        </div>
      </main>
      <footer>
        <div class="progressBar-wrapper">
          <div class="progressBar" id="progressBar"></div>
        </div>
        <div class="footer-info">
        </div>
      </footer>
  </div>
</template>

<style lang="scss" scoped>
.type-wrapper{
position: relative;
width: 100%;
height: 100vh;
background-color: #242424;
overflow: hidden;
nav{
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  background-color: #000;
  z-index: 99;
  .nav-left{
    color:#fff;
    flex: 1;
  }
  .nav-right{
    float: right;
    padding: 0 20px;
    >div{
      display: inline-block;
      position: relative;
      margin: 0 12px;
    }
    button{
      padding: 8px 16px;
      border-radius: 4px;
      background-color: #fff;
      color: #000;
      cursor: pointer;
    }
  }
}
.addContent{
  position: fixed;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 20px;
  transform: translate(-50%, -50%);
  background-color: #f6f8fa;
  z-index: 9;
  h3{
    text-align: center;
  }
  div{
    padding: 8px;
  }
  input[type="text"], textarea{
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: solid 1px #ccc;
    box-sizing: border-box;
  }
  input[type="radio"]{
    margin: 0 4px;
  }
  input[type="button"]{
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: solid 1px #ccc;
    box-sizing: border-box;
    cursor: pointer;
  }
  textarea
  {
    resize: none;
    width: 100%;
    height: 100px;
  }
  .close{
    position: absolute;
    top: 8px;
    right: 8px;
    padding: 4px 8px;
    cursor: pointer;
  }
}
main{
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 0 40px;
  .title{
    color: rgb(255, 255, 255);
  }
  .content{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-width: 1000px;
    max-height: 450px;
    font-size: 38px;
    margin: 0 auto;
    padding: 12px 0;
    overflow-y: scroll;
    transition: all 0.3s ease;
    border-bottom: solid 2px #464646;
    span {
      display: block;
      width: 42px;
      height: 62px;
      margin: 6px 4px;
      text-align: center;
      color: #fff;
    }
    span.active{
      padding-bottom: 6px;
      background-color: #000;
      border-bottom: solid 2px #9fed51;
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
  .content::-webkit-scrollbar{
    display: none;
  }
  .type-info{
    position: absolute;
    right: 88px;
    bottom: 30px;
    color: #888888;
    span{
      font-size: 24px;
      color: #fff;
    }
  }
}
footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 72px;
  background-color: #000;
  z-index: 99;
  .footer-info{
    color: #888888;
  }
  .progressBar-wrapper{
    position: absolute;
    top: 0;
    width: 100%;
    height: 8px;
    background-color: #3f3f3f;
    .progressBar{
      width:0;
      height: 100%;
      border-radius:0 5px 5px 0 ;
      background-color: #ff9ac5;
      transition: width .2s ease;

    }
  }
}
}
.selectContent-wrapper{
position: absolute;
top: 38px;
left: 50%;
max-height: 0;
transform: translateX(-50%);
overflow: hidden;
z-index: 99;
transition: all .3s ease-in-out;
box-sizing: border-box;
.selectContent{
  width: 300px;
  padding: 20px;
  border-radius: 4px;
  background-color: rgba($color: #fff, $alpha: .7);
  box-sizing: border-box;
  .selectContent-item{
    padding: 8px;
    background-color: #fff;
    border-radius: 6px;
    margin-bottom: 12px;
    transition: background-color .2s ease;
    cursor: pointer;
    &:hover{
      background-color: #dde9f5;
    }
    .sc-i-title{
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 4px;
    }
    .sc-i-author{
      font-size: 14px;
      text-align: right;
      color: #888888;
    }
  }
  .selectContent-item:last-of-type{
    margin-bottom: 0;
  }
}
.triangle{
  width: 0;
  height: 0;
  padding: 1px 0;
  margin: 0 auto;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid rgba($color: #fff, $alpha: .7);
}
}
.select-content-btn:hover + .selectContent-wrapper,.selectContent-wrapper:hover{
max-height: 60vh;
}
</style>

<script>
import { nextTick, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
// 头部导航栏/添加内容
const useNavEffect = (keydown, router) => {
const addContentIsShow = ref(false)
const title = ref(null);
const author = ref(null);
const dynasty = ref(null);
const language = ref('chinese');
const content = ref(null);
const getRadioValue = (name) => {
  const radio = document.getElementsByName(name);
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      return radio[i];
    }
  }
}
const addContentHandleClick = () => {
  if (addContentIsShow.value) {
    document.onkeydown = keydown;
  } else {
    document.onkeydown = null;
  }
  addContentIsShow.value = !addContentIsShow.value;
}
const addContent = () => {
  const addContentInfo = {
    title: title.value.value,
    author: author.value.value,
    dynasty: dynasty.value.value,
    language: language.value,
    content: content.value.value,
  }
  setLocalStorage(addContentInfo)
  addContentHandleClick();
}
// 切换内容/
const changeContent = (id) => {
  router.push({ path: `/typing/${id}` })
  .then(() => {
    window.location.reload();
  });
}
return {
  addContentIsShow,
  addContentHandleClick,
  addContent,
  title,
  author,
  dynasty,
  language,
  content,
  changeContent
}
}
// 打字效果
const useTypeEffect = (pinyinArr) => {
const correctAudio = new Audio('/audio/街机游戏按钮.mp3')
const errorAudio = new Audio('/audio/koubanji.mp3')
const removeAudio = new Audio('/audio/点击音效.mp3')
let index = ref(0);  // 第几次按下
let CorrectNumber = 0;  //正确的数量
let startTime;  // 开始时间
let isFirstKeyDown = ref(true);  //第一次按下
let TimeSpent;  //用时
// 速度和正确率
const accuracy = ref(0);
const speed =  ref(0);
let progressBar;
let pinyinDOMArr;
let contentWrapper;
nextTick(() => {
  progressBar = document.getElementById('progressBar');
  pinyinDOMArr = document.getElementsByClassName('py-item');
  contentWrapper = document.getElementsByClassName('content')[0];
  pinyinDOMArr[index.value]?.classList.add('active');
})
// 页面自动滚动
const contentScroll = () => {
  const activePinyin = document.querySelector('.pinyin .active');
  const rect = activePinyin?.getBoundingClientRect();
  const activeEleTop = rect.top + contentWrapper.scrollTop;
  const containerHeight = contentWrapper.clientHeight;
  const childElementHeight = activePinyin.clientHeight;
  // 滚动的距离
  const scrollDistance = activeEleTop - (containerHeight / 2) + (childElementHeight / 2);
  contentWrapper.scrollTo({
    top: scrollDistance,
    behavior: 'smooth'
  });
}
// 键盘按下
const keydown = (e) => {
  if (e.key === ' ') {
    e.preventDefault(); // 阻止默认行为
  }
  const { key } = e;
  if(key === 'Backspace') {
    removeAudio.play();
    removeAudio.currentTime = 0;
    if(index.value <= 0) return;
    index.value--;
    const classStyle = pinyinDOMArr[index.value].classList;
    if(classStyle[1] === 'correct'){
      pinyinDOMArr[index.value].classList.remove('correct');
      CorrectNumber--;
      if(CorrectNumber <= 0) CorrectNumber = 0;
    }else{
      pinyinDOMArr[index.value].classList.remove('error');
    }
    pinyinDOMArr[index.value+1].classList.remove('active');
    pinyinDOMArr[index.value]?.classList?.add('active');
  } else {
    if(isFirstKeyDown.value){
      startTime = Date.now();
      isFirstKeyDown.value = false;
    }
    const currentTime = Date.now();
    TimeSpent = currentTime - startTime ? currentTime - startTime : 1000;  //用时
    const currentPinyin = pinyinArr[index.value];
    pinyinDOMArr[index.value].classList.remove('active');
    pinyinDOMArr[index.value+1]?.classList?.add('active');
    // 判断是否正确
    if (key === currentPinyin) {
      correctAudio.currentTime = 0;
      correctAudio.play()
      pinyinDOMArr[index.value].classList.add('correct');
      CorrectNumber++;
    } else {
      errorAudio.currentTime = 0;
      errorAudio.play()
      pinyinDOMArr[index.value].classList.add('error');
    }
    index.value++;
  }

  // 计算进度
  const progress = (index.value / (pinyinArr.length / 100)).toFixed(2);
  progressBar.style.width = `${progress}%`
  // 计算正确率和速度
  accuracy.value = Math.floor(((CorrectNumber / index.value) * 100)) || 0;
  speed.value = Math.floor(index.value / (TimeSpent / 1000 / 60));
  contentScroll();
}
document.onkeydown = keydown;
return { isFirstKeyDown, accuracy, speed, keydown, index }
}
// 获取内容列表
const getContentList = () => {
const ContentInfoObj = JSON.parse(localStorage.getItem('ContentInfoObj'));
const ContentList = reactive([]);
for (let key in ContentInfoObj) {
  const {  id, title, author, dynasty, language } = ContentInfoObj[key];
  ContentList.push({ id, title, author, dynasty, language });
}
return ContentList;
}

export default {
  name:'TypeLetter',
  setup() {
      const route = useRoute();
      const router = useRouter();
      const pinyinArr = reactive([]);
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
        }
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
            "content": ["a", "o", "e", "i", "u", "v"]
          },
          "整体认读音节": {
            "title": "整体认读音节",
            "content": ["ai", "ei", "ui", "ao", "ou", "iu", "ie", "ve", "er", "an", "en", "in", "un", "vn", "ang", "eng"]
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
      }

      const category = route.params.category;
      const val = route.query.val;
      console.log(category, val)
      const contentArr = courseList[category][val];
      console.log(contentArr);
      const count = contentArr.content.length;
      // 生成 50 - 80 的随机数
      const forCount = Math.floor(Math.random() * 30) + 50;
      if(category === 'Advanced') {
        for(let i = 0; i < contentArr.content.length; i++){
          // 生成0 - count-1的随机数
          const index = Math.floor(Math.random() * count);
          for(let j = 0; j < contentArr.content[index].length; j++){
            pinyinArr.push(contentArr.content[index][j]);
          }
          if (i < contentArr.content.length - 1) pinyinArr.push(' ');
        }
      }else{
        for(let i = 0; i < forCount; i++){
          // 生成0 - count-1的随机数
          const index = Math.floor(Math.random() * count + 0.5);
          if (index >= contentArr.content.length) {
            pinyinArr.push(' ');
            continue;
          }
          pinyinArr.push(contentArr.content[index])
        }
      }

      nextTick(() => {
        document.querySelectorAll('.py-item')[0]?.classList.add('active')
      })

      const ContentList = getContentList();
      const {
        isFirstKeyDown,
        accuracy,
        speed,
        keydown,
        index,
      } = useTypeEffect(pinyinArr);
      const {
        addContentIsShow,
        addContentHandleClick,
        addContent,
        title,
        author,
        dynasty,
        language,
        content,
        changeContent
      } = useNavEffect(keydown, router);
      return {
        contentArr,
        ContentList,
        isFirstKeyDown,
        accuracy,
        speed,
        index,
        addContentIsShow,
        addContentHandleClick,
        addContent,
        title,
        author,
        dynasty,
        language,
        content,
        changeContent,
        pinyinArr
      }
  },
}
</script>
