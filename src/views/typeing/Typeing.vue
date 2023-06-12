<template>
    <nav-bar :language="language"></nav-bar>
    <div class="type-wrapper">
        <main>
          <div v-if="!isComplete">
            <h3 class="title">
              {{ `《${newContent?.title}》${newContent?.dynasty}·${newContent?.author}` }}
            </h3>
            <div class="content">
              <div
                v-for="item in newContent?.content"
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
            <div class="type-info" v-show="!isFirstKeyDown">
              <div>
                速度：<span>{{ speed }}</span>/分钟
              </div>
              <div>
                正确率：<span>{{ accuracy }}</span>%
              </div>
            </div>
          </div>
          <div class="complete" v-else="isComplete">
            <div class="complete-info" v-show="!isFirstKeyDown">
              <div>
                速度：<span>{{ speed }}</span>/分钟
              </div>
              <div>
                正确率：<span>{{ accuracy }}</span>%
              </div>
            </div>
            <CompletePage></CompletePage>
          </div>
        </main>
        <footer>
          <div class="progressBar-wrapper">
            <div class="progressBar" id="progressBar"></div>
          </div>
          <div class="footer-info" v-if="isComplete">
            <button class="start-again" @click="pageTurn(id)">再来一次R</button>
            <button class="go-on" @click="pageTurn(parseInt(id) + 1)">→继续</button>
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
  main{
    display: flex;
    position: relative;
    flex-direction: column;
    padding: 0 .4rem;
    min-height: 72vh;
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
    .type-info{
      position: absolute;
      right: .08rem;
      bottom: 0rem;
      color: #888888;
      span{
        font-size: 0.24rem;
        color: #fff;
      }
    }
    .complete{
      height: 100%;
      margin: auto 0;
      .complete-info{
        font-size: .32rem;
        text-align: center;
        color:#fff;
        div{
          width: 100%;
          margin: .12rem 0;
        }
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
    height: .72rem;
    background-color: #000;
    z-index: 99;
    .footer-info{
      display: flex;
      width: 100%;
      justify-content: center;
      .start-again{
        background: none;
        border: solid .01rem #ff9ac5;
        margin-right: .1rem;
        color: #fff;
      }
      .go-on{
        background-color: #ff9ac5;
      }
      button{
        padding: .08rem .16rem;
        border-radius: .03rem;
      }

    }
    .progressBar-wrapper{
      position: absolute;
      top: 0;
      width: 100%;
      height: .08rem;
      background-color: #3f3f3f;
      .progressBar{
        width:0;
        height: 100%;
        border-radius:0 .05rem .05rem 0 ;
        background-color: #ff9ac5;
        transition: width .2s ease;

      }
    }
  }
}
</style>

<script>
import { pinyin } from 'pinyin-pro';
import { nextTick, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import CompletePage from './CompletePage.vue';
import NavBar from './NavBar.vue';
// 汉字转拼音
const getPinyin = (contentInfo0) => {
  const ConvertChineseToPinyin = (contentInfo) => {
      const { language, title, dynasty, author, content } = contentInfo;
      if (language !== 'chinese') {
          return contentInfo;
      }
      // 将一整首古诗词的内容，按行分割成数组
      const contentArr = content.trim().split('\n');
      const contentArrLen = contentArr.length;
      const newContentArr = [];
      for (let i = 0; i < contentArrLen; i++) {
          // item 为每一行
          const item = contentArr[i].trim();
          const itemLen = item.length
          const itemArr = []
          for (let j = 0; j < itemLen; j++) {
              const itemItem = item[j]
              const itemItemObj = {
                  hanzi: itemItem,
                  pinyinTone: pinyin(itemItem),
                  pinyin: pinyin(itemItem, { toneType: 'none' , v: true})
              }
              itemArr.push(itemItemObj)
          }
          newContentArr.push(itemArr)
      }
      const newContentInfo = {
          language,
          title,
          dynasty,
          author,
          content:newContentArr,
      }
      return newContentInfo
  }
  const newContent = ConvertChineseToPinyin(contentInfo0);
  const { content } = newContent;
  function convertChinesePunctuation(input) {
    // 中文标点对应的正则表达式和替换字符映射
    const punctuationMap = {
      '，': ',',
      '。': '.',
      '？': '?',
      '！': '!',
      '；': ';',
      '：': ':',
      '“': '"',
      '”': '"',
      '‘': '\'',
      '’': '\'',
      '【': '[',
      '】': ']',
      '（': '(',
      '）': ')',
      '《': '<',
      '》': '>',
      '、': ','
    };
    // 使用正则表达式替换中文标点
    const converted = input.replace(/[，。？！；：“”‘’【】（）《》、]/g, function(match) {
      return punctuationMap[match];
    });
    return converted;
  }
  const pinyinArr = (function(){
    const pinyinArr = []
    for(let i=0; i < content.length; i++){
      for(let j=0; j < content[i].length; j++){
        for(let k=0; k < content[i][j].pinyin.length; k++){
          pinyinArr.push(convertChinesePunctuation(content[i][j].pinyin[k]))
        }
      }
    }
    return pinyinArr;
  })()
  return { newContent, pinyinArr }
}
// 打字效果
const useTypeEffect = (pinyinArr, isFirstKeyDown, accuracy, speed, isComplete) => {
  document.cookie = 'cookieName=value; SameSite=None; Secure';
  const correctAudio = new Audio('/audio/街机游戏按钮.mp3')
  const errorAudio = new Audio('/audio/koubanji.mp3')
  const removeAudio = new Audio('/audio/点击音效.mp3')
  const completeAudio = new Audio('/audio/胜利号角.mp3')

  let index = ref(0);  // 第几次按下
  let CorrectNumber = 0;  //正确的数量
  let startTime;  // 开始时间
  let TimeSpent;  //用时
  let progressBar;
  let pinyinDOMArr;
  let contentWrapper;

  // 页面自动滚动
  const contentScroll = () => {
    const activePinyin = document.querySelector('.pinyin .active');
    const rect = activePinyin?.getBoundingClientRect();
    const activeEleTop = rect?.top + contentWrapper?.scrollTop;
    const containerHeight = contentWrapper?.clientHeight;
    const childElementHeight = activePinyin?.clientHeight;
    // 滚动的距离
    const scrollDistance = activeEleTop - (containerHeight / 2) + (childElementHeight / 2);
    contentWrapper?.scrollTo({
      top: scrollDistance,
      behavior: 'smooth'
    });
  }
  nextTick(() => {
    progressBar = document.getElementById('progressBar');
    pinyinDOMArr = document.getElementsByClassName('py-item');
    contentWrapper = document.getElementsByClassName('content')[0];
    pinyinDOMArr[index.value]?.classList.add('active');

    // 初始化进度条和滚动条
    progressBar.style.width = '0%';
    contentScroll();
  })

  // 汉字输入完成改变背景颜色
  const changeHanziBgColor = (key) => {
    // 一个汉字拼音是否结束
    const nextPinyin = pinyinDOMArr[index.value].nextElementSibling;
    const hanziDOM = pinyinDOMArr[index.value].parentNode.nextElementSibling;
    if (!nextPinyin && key !== 'Backspace') {
      // 获取父元素的下一个兄弟节点
      hanziDOM.classList.add('pass');
      const pinyinItem = pinyinDOMArr[index.value]?.parentNode?.children;
      let CorrectPinyinInput = true;

      for(let i = 0; i < pinyinItem.length; i++){
        const hasClass = pinyinItem[i].classList.contains('correct');
        if (!hasClass) {
          CorrectPinyinInput = false;
          return;
        }
      }

      if (CorrectPinyinInput) {
        const char = hanziDOM.innerText;
        const hanzi = new Audio(`https://api.oick.cn/txt/apiz.php?text=${char}&spd=2`);
        hanzi.currentTime = 0;
        hanzi.play();
      }

    } else {
      hanziDOM.classList.remove('pass');
    }
  }
  // 键盘按下
  const keydown = (e) => {
    const { key } = e;
    if (key === ' ') e.preventDefault();
    if (key === 'Shift') return;
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
      changeHanziBgColor(key)
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
        correctAudio.play()
        correctAudio.currentTime = 0;
        pinyinDOMArr[index.value].classList.add('correct');
        CorrectNumber++;
      } else {
        errorAudio.play()
        errorAudio.currentTime = 0;
        pinyinDOMArr[index.value].classList.add('error');
      }
      changeHanziBgColor(key)
      index.value++;
    }

    // 计算进度
    const progress = (index.value / (pinyinArr.length / 100)).toFixed(2);
    progressBar.style.width = `${progress}%`
    // 计算正确率和速度
    accuracy.value = Math.floor(((CorrectNumber / index.value) * 100)) || 0;
    speed.value = Math.floor(index.value / (TimeSpent / 1000 / 60));
    // 判断是否输入完成
    if(index.value >= pinyinArr.length) {
      isComplete.value = true;
      document.onkeydown = null;
      completeAudio.play();
      progressBar.style.backgroundColor = '#458307';
    }
    contentScroll();
  }
  document.onkeydown = keydown;
  return { isFirstKeyDown, accuracy, speed, isComplete }
}

export default {
    name:'Typeing',
    components: {
      CompletePage,
      NavBar,
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        let { id, language } = route.params;

        const newContent = ref({});
        const pinyinArr = ref([]);
        const isFirstKeyDown = ref(true);
        const accuracy = ref(0);
        const speed = ref(0);
        const isComplete = ref(false);
        const ContentInfo = ref({});
        const getNewContent = (newId) => {

          if (language === 'cn'){
            ContentInfo.value = JSON.parse(localStorage.getItem('ContentInfoCN'));
          }else if(language === 'en'){
            ContentInfo.value = JSON.parse(localStorage.getItem('ContentInfoEN'));
          }

          if(newId >= Object.keys(ContentInfo.value).length) return router.replace({ name: 'TypeChinese', params: { id: 1 } })

          if (language === 'cn'){
            const { newContent: a, pinyinArr: b } = getPinyin(ContentInfo.value[newId]);
            newContent.value = a;
            pinyinArr.value = b;
          }else if(language === 'en'){
            const contentArr = ContentInfo.value[newId].content.trim().split('\n');
            for(let i = 0; i < contentArr.length; i++){
              for(let j = 0; j < contentArr[i].content.length; j++){
                pinyinArr.push(contentArr[i].content[j]);
              }
              if (i < contentArr.content.length - 1) pinyinArr.push(' ');
            }
          }

          accuracy.value = 0;
          speed.value = 0;
          isComplete.value = false;
          isFirstKeyDown.value = true;
          useTypeEffect(pinyinArr.value, isFirstKeyDown, accuracy, speed, isComplete);
          id = newId;
        }
        getNewContent(id);

        const pageTurn = (value) => {
          router.replace({ name: 'TypeChinese', params: { id: value } });
        };

        watch(() => route.params, (params) => {
          const { id:newId } = params;
          // 在这里可以根据新的 id 值进行相应的处理
          getNewContent(newId);
        });

        return {
          pageTurn,
          id,
          language,
          route,
          router,
          newContent,
          isFirstKeyDown,
          accuracy,
          speed,
          isComplete,
        }
    },
}
</script>
