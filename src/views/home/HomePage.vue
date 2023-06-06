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
          <h3 class="title">
            {{ `《${newContent.title}》${newContent.dynasty}·${newContent.author}` }}
          </h3>
          <div class="content">
            <div
              v-for="(item, i) in newContent.content"
              :key="i"
              class="content-item"
            >
                <div class="c-i-char" v-for="(itemItem, itemIndex) in item" :key="itemIndex">
                    <div class="pinyin">
                        <span v-for="(itemItemItem, itemItemIndex) in itemItem.pinyinTone"
                              :key="itemItemIndex">
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
      max-width: 1000px;
      max-height: 450px;
      font-size: 38px;
      margin: 0 auto;
      padding: 12px 0;
      overflow-y: scroll;
      transition: all 0.3s ease;
      border-bottom: solid 2px #464646;
    }
    .content::-webkit-scrollbar{
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
        margin: 16px;
        margin-left: 0;
      }
      .pinyin{
        span {
          display: inline-block;
          margin: 6px 4px;
          padding: 8px;
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
import { pinyin } from 'pinyin-pro';
import { nextTick, reactive, ref, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
// 存 localStorage
const setLocalStorage = (addContentInfo) => {
  // 把内容缓存到本地
  // 先拿到本地的内容，然后把新的内容添加进去
  const localContentInfo = JSON.parse(localStorage.getItem('ContentInfoObj')) || {};
  localContentInfo[addContentInfo.id] = addContentInfo;
  localStorage.setItem('ContentInfoObj', JSON.stringify(localContentInfo));
}
// 汉字转拼音
const getPinyin = (id) => {
  const ContentInfoObj = reactive({
    "1": {
      id: 1,
      language:'chinese',
      title: '将进酒',
      dynasty: '唐',
      author: '李白',
      content: `
        君不见，黄河之水天上来，奔流到海不复回。
        君不见，高堂明镜悲白发，朝如青丝暮成雪。
        人生得意须尽欢，莫使金樽空对月。
        天生我材必有用，千金散尽还复来。
        烹羊宰牛且为乐，会须一饮三百杯。
        岑夫子，丹丘生，将进酒，杯莫停。
        与君歌一曲，请君为我倾耳听。
        钟鼓馔玉不足贵，但愿长醉不愿醒。
        古来圣贤皆寂寞，惟有饮者留其名。
        陈王昔时宴平乐，斗酒十千恣欢谑。
        主人何为言少钱，径须沽取对君酌。
        五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。`
    },
    "2": {
      id: 2,
      language:'chinese',
      title: '归园田居·其三',
      dynasty: '魏晋',
      author: '陶渊明',
      content: `
      种豆南山下，草盛豆苗稀。
      晨兴理荒秽，带月荷锄归。
      道狭草木长，夕露沾我衣。
      衣沾不足惜，但使愿无违。`
    },
    "3": {
      id: 3,
      language:'chinese',
      title: '水调歌头·明月几时有',
      dynasty: '宋',
      author: '苏轼',
      content: `
      丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。
      明月几时有？把酒问青天。不知天上宫阙，今夕是何年。
      我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。
      转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？
      人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。`
    },
    "4": {
      id: 4,
      language:'chinese',
      title: '陋室铭',
      dynasty: '唐',
      author: '刘禹锡',
      content: `
      山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？`
    }
  })
  // 存到 localStorage
  // 判断 localStorage 里面是否有 ContentInfoObj
  if (!localStorage.getItem('ContentInfoObj')) {
    localStorage.setItem('ContentInfoObj', JSON.stringify(ContentInfoObj));
  }
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
                  pinyin: pinyin(itemItem, { toneType: 'none' })
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
  const newContent = ConvertChineseToPinyin(ContentInfoObj[id]);
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
    console.log(radio)
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
    router.push({ path: `/${id}` })
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
  let index = ref(0);  // 第几次按下
  let beforePinyinCount = 0;  // 之前拼音的数量
  let CorrectNumber = 0;  //正确的数量
  let startTime;  // 开始时间
  let isFirstKeyDown = ref(true);  //第一次按下
  // 速度和正确率
  const accuracy = ref(0);
  const speed =  ref(0);
  let progressBar;
  let pinyinDOMArr;
  let contentWrapper;
  nextTick(() => {
    progressBar = document.getElementById('progressBar');
    pinyinDOMArr = document.querySelectorAll('.pinyin span');
    pinyinDOMArr[index.value].classList.add('active');
    contentWrapper = document.getElementsByClassName('content')[0];
  })
  // 页面自动滚动
  const contentScroll = () => {
    const activePinyin = document.querySelector('.pinyin .active');
    const rect = activePinyin?.getBoundingClientRect();
    if(rect.y > document.body.clientHeight/2){
      // 滚动的距离
      const scrollDistance = contentWrapper.scrollTop + 200;
      contentWrapper.scrollTo({
        top: scrollDistance,
        behavior: 'smooth'
      });
    }
  }
  // 键盘按下
  const keydown = (e) => {
    if(isFirstKeyDown.value){
      startTime = Date.now();
      isFirstKeyDown.value = false;
    }
    const currentTime = Date.now();
    const TimeSpent = currentTime - startTime;  //用时
    const currentPinyin = pinyinArr[index.value];
    const { key } = e;

    pinyinDOMArr[index.value].classList.remove('active');
    pinyinDOMArr[index.value+1]?.classList?.add('active');
    // 判断是否正确
    if (key === currentPinyin) {
      pinyinDOMArr[index.value].classList.add('correct');
      CorrectNumber++;
    } else {
      pinyinDOMArr[index.value].classList.add('error');
    }
    // 一个汉字拼音是否结束
    const nextPinyin = pinyinDOMArr[index.value].nextElementSibling;
    if (!nextPinyin) {
      // 获取父元素的下一个兄弟节点
      pinyinDOMArr[index.value].parentNode.nextElementSibling.classList.add('pass');
    }

    index.value++;

    // 计算进度
    const progress = (index.value / (pinyinArr.length / 100)).toFixed(2);
    progressBar.style.width = `${progress}%`
    // 计算正确率和速度
    accuracy.value = Math.floor(((CorrectNumber/index.value) * 100));
    speed.value = Math.floor(index.value/(TimeSpent/1000/60));
    contentScroll();
  }
  document.onkeydown = keydown;
  return { isFirstKeyDown, accuracy, speed, keydown, index, beforePinyinCount }
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
    name:'HomePage',
    setup() {
        const route = useRoute();
        const router = useRouter();
        const params = reactive(route.params);
        const id = route.params?.id ? route.params?.id : '1';

        const { newContent, pinyinArr } = getPinyin(id);
        const ContentList = getContentList();
        const { isFirstKeyDown, accuracy, speed, keydown, index, beforePinyinCount } = useTypeEffect(pinyinArr);
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
          ContentList,
          newContent,
          isFirstKeyDown,
          accuracy,
          speed,
          index,
          beforePinyinCount,
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
    },
}
</script>
