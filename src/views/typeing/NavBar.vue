<template>
  <nav>
    <div class="nav-left">
      <div @click="router.push({path: '/'})">打字网</div>
    </div>
    <div class="nav-right">
      <div>
        <button class="select-content-btn">选择文章</button>
        <div class="selectContent-wrapper">
          <div class="triangle"></div>
          <div class="selectContent" ref="selectContent">
            <div class="selectContent-item"
              v-for="content in ContentList"
              :key="content.id"
              @click="changeContent(content?.id)">
                <div class="sc-i-title">《{{ content?.title }}》</div>
                <div class="sc-i-author">{{ content.dynasty }}
                  <span v-if="content.dynasty && content.dynasty !== ''">·</span>
                  {{ content.author }}
                </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button button @click="addContentHandleClick">导入文章</button>
      </div>
    </div>
    <dialog ref="addContentWrapper">
      <div class="addContent">
        <h3>导入文章</h3>
        <span class="close" @click="addContentHandleClick">X</span>
        <div class="form">
          <div class="title">
            <div>标题</div>
            <input type="text" name="title" ref="title" placeholder="请输入标题">
          </div>
          <div class="author">
            <div>作者</div>
            <input type="text" name="author" ref="author" placeholder="选填">
          </div>
          <div class="dynasty">
            <div>朝代</div>
            <select ref="dynasty" name="dynasty">
              <option value="先秦">先秦</option>
              <option value="两汉">两汉</option>
              <option value="魏晋">魏晋</option>
              <option value="南北朝">南北朝</option>
              <option value="隋">隋</option>
              <option value="唐">唐</option>
              <option value="宋">宋</option>
              <option value="元">元</option>
              <option value="明">明</option>
              <option value="清">清</option>
              <option value="近代">近代</option>
              <option value="现代">现代</option>
            </select>
          </div>
          <div class="language">
            <div>语言</div>
            中文<input type="radio" name="language" value="chinese" checked>
            英文<input type="radio" name="language" value="">
          </div>
          <div>
            <div>正文</div>
            <textarea name="content" ref="content" placeholder="请输入内容"></textarea>
          </div>
          <input type="button" value="确定" @click="addContent">
        </div>
        <dialog ref="warningWrapper" @click="warningHandleClick">
          <div class="warning">
            <div class="warning-title">提示</div>
            <div class="warning-content">{{ warningMessage }}</div>
          </div>
        </dialog>
      </div>
    </dialog>
  </nav>
</template>

<style lang="scss" scoped>
dialog{
  padding: 0;
  border: none;
  background: none;
}
nav{
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: .6rem;
  padding: 0 .2rem;
  background-color: #000;
  z-index: 99;
  .nav-left{
    color:#fff;
    flex: 1;
    >div{
      cursor: pointer;
      width: .8rem;
      display: inline-block;
      position: relative;
      margin: 0 .12rem;
      font-size: .2rem;
      font-weight: bold;
      text-align: center;
    }
  }
  .nav-right{
    float: right;
    padding: 0 .2rem;
    >div{
      display: inline-block;
      position: relative;
      margin: 0 .12rem;
    }
    button{
      padding: .08rem .16rem;
      border-radius: .04rem;
      background-color: #fff;
      color: #000;
      cursor: pointer;
    }
    .selectContent-wrapper{
      position: absolute;
      left: 50%;
      max-height: .01vh;
      transform: translateX(-50%);
      overflow: hidden;
      opacity: 0;
      transition: all .3s ease-in-out;
      box-sizing: border-box;
      .selectContent{
        width: 3rem;
        max-height: 50vh;
        padding: .2rem;
        border-radius: .04rem;
        background-color: rgba($color: #fff, $alpha: .7);
        box-sizing: border-box;
        overflow-y: scroll;
        .selectContent-item{
          padding: .08rem;
          background-color: #fff;
          border-radius: .06rem;
          margin-bottom: .12rem;
          transition: background-color .2s ease;
          cursor: pointer;
          &:hover{
            background-color: #dde9f5;
          }
          &:last-of-type{
            margin-bottom: 0;
          }
          .sc-i-title{
            font-size: .14rem;
            font-weight: bold;
            margin-bottom: .04rem;
          }
          .sc-i-author{
            font-size: .14rem;
            text-align: right;
            color: #888888;
          }
        }
        &::-webkit-scrollbar{
          display: none;
        }
      }
      .triangle{
        width: 0;
        height: 0;
        padding: .01rem 0;
        margin: 0 auto;
        border-left: .1rem solid transparent;
        border-right: .1rem solid transparent;
        border-bottom: .1rem solid rgba($color: #fff, $alpha: .7);
      }
    }
    .select-content-btn:hover + .selectContent-wrapper,.selectContent-wrapper:hover{
      opacity: 1;
      max-height: 60vh;
    }
  }
}

.addContent{
  width: 4rem;
  padding: .2rem;
  background-color: #f6f8fa;
  border-radius: .03rem;
  h3{
    text-align: center;
  }
  .close{
    position: absolute;
    top: .08rem;
    right: .08rem;
    padding: .04rem .08rem;
    cursor: pointer;
  }
  .form{
    > div{
      padding: .08rem;
      div{
        font-size: .14rem;
        margin-bottom: .04rem;
      }
    }
    input[type="text"], textarea{
      width: 100%;
      padding: .08rem;
      border-radius: .04rem;
      border: solid .01rem #ccc;
      box-sizing: border-box;
    }
    input[type="radio"]{
      margin: 0 .04rem;
    }
    input[type="button"]{
      width: 100%;
      padding: .08rem;
      border-radius: .04rem;
      border: solid .01rem #ccc;
      box-sizing: border-box;
      cursor: pointer;
    }
    textarea{
      resize: none;
      width: 100%;
      height: 1rem;
    }
    select{
      width: 100%;
      padding: .08rem;
      border-radius: .04rem;
      border: solid .01rem #ccc;
      box-sizing: border-box;
      cursor: pointer;
      option{
        padding: .08rem;
      }
    }
  }
}
.warning{
  width: 1.2rem;
  padding: .2rem;
  border-radius: .04rem;
  background-color: #f6f8fa;
  text-align: center;
  .warning-title{
    font-size: .16rem;
    font-weight: bold;
    margin-bottom: .04rem;
  }
  .warning-content{
    font-size: .14rem;
    color: #888888;
  }
}
</style>

<script>
import { ref, reactive, nextTick } from 'vue';
import { useRouter } from 'vue-router';
// 存 localStorage
const setLocalStorage = (contentInfo, language) => {
  // 把内容缓存到本地
  // 先拿到本地的内容，然后把新的内容添加进去
  const contentName = language === 'cn' ? 'ContentInfoCN' : 'ContentInfoEN';
  const localContentInfo = JSON.parse(localStorage.getItem(contentName)) || {};
  localContentInfo[contentInfo.id] = contentInfo;
  localStorage.setItem(contentName, JSON.stringify(localContentInfo));
}
// 获取内容列表
const getContentList = (language) => {
  let contentInfo;
  const ContentList = reactive([]);
  if (language === 'cn') {
    contentInfo = JSON.parse(localStorage.getItem('ContentInfoCN'));
  } else if (language === 'en') {
    contentInfo = JSON.parse(localStorage.getItem('ContentInfoEN'));
  }
  for (let key in contentInfo) {
    const {  id, title, author, dynasty, language } = contentInfo[key];
    ContentList.push({ id, title, author, dynasty, language });
  }
  return ContentList;
}
// 头部导航栏/添加内容
const useNavEffect = (router, warningHandleClick, language, ContentList) => {
  const addContentIsShow = ref(false)
  const title = ref(null);
  const author = ref(null);
  const dynasty = ref(null);
  const content = ref(null);
  const addContentWrapper = ref(null);
  const selectContent = ref(null);
  let keydown;
  const getRadioValue = (name) => {
    const radio = document.getElementsByName(name);
    for (let i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
        return radio[i];
      }
    }
  }
  const changeContent = (id) => {
    console.log(id)
    router.replace({ path: `/typing/${language}/${id}` })
  }
  const addContentHandleClick = () => {
    if (addContentIsShow.value) {
      document.onkeydown = keydown;
      addContentWrapper.value.close();
    } else {
      keydown = document.onkeydown;
      document.onkeydown = null;
      addContentWrapper.value.showModal();
    }
    addContentIsShow.value = !addContentIsShow.value;
  }
  const addContent = () => {
    // id 是 localStorage 里面的内容数量
    // 校验数据
    if (!title.value.value) return warningHandleClick('请输入标题');
    if (!content.value.value) return warningHandleClick('请输入内容');
    const id = Object.keys(JSON.parse(localStorage.getItem('ContentInfoCN'))).length + 1;
    const addContentInfo = {
      id,
      title: title.value.value,
      author: author.value.value,
      dynasty: dynasty.value.value,
      language: getRadioValue('language').value,
      content: content.value.value,
    }
    setLocalStorage(addContentInfo, language)
    addContentHandleClick();
    ContentList.push({
      id,
      title: title.value.value,
      author: author.value.value,
      dynasty: dynasty.value.value,
      language: getRadioValue('language').value,
    });
    // 解决 元素的高度变化导致滚动条的计算出现问题，从而导致内容无法正常显示。
    nextTick(() => {
      // requestAnimationFrame(() => {
      //   selectContent.value.scrollTop = selectContent.value.scrollHeight;
      // });
      setTimeout(() => {
        selectContent.value.scrollTop = selectContent.value.scrollHeight;
      }, 500);
    })
    changeContent(addContentInfo.id)
  }
  return {
    addContentHandleClick,
    addContent,
    title,
    author,
    dynasty,
    content,
    addContentWrapper,
    changeContent,
    selectContent
  }
}
// warning
const useWarningEffect = () => {
  const warningIsShow = ref(false);
  const warningWrapper = ref(null);
  const warningMessage = ref(null);
  const warningHandleClick = (message) => {
    if (warningIsShow.value) {
      warningWrapper.value.close();
      warningIsShow.value = false;
    }else{
      warningMessage.value = message;
      warningWrapper.value.showModal();
      warningIsShow.value = true;
    }
  }
  return {
    warningWrapper,
    warningMessage,
    warningHandleClick
  }
}

export default {
  name: 'NavBar',
  props: {
    language: {
      type: String,
      default: 'cn'
    }
  },
  setup(props) {
    const router = useRouter();
    const { language } = props;
    const ContentList = getContentList(language);

    const {
      warningWrapper,
      warningHandleClick,
      warningMessage
    } = useWarningEffect();

    const {
      addContentHandleClick,
      addContent,
      title,
      author,
      dynasty,
      content,
      addContentWrapper,
      changeContent,
      selectContent
    } = useNavEffect(router, warningHandleClick, language, ContentList);

    return {
      router,
      addContentHandleClick,
      addContent,
      title,
      author,
      dynasty,
      content,
      ContentList,
      addContentWrapper,
      warningWrapper,
      warningHandleClick,
      warningMessage,
      language,
      changeContent,
      selectContent
    }
  },
}
</script>
