<template>
  <nav>
    <div class="nav-left" @click="router.push({path: '/'})">
      <h1>打字网</h1>
    </div>
    <div class="nav-right">
      <div>
        <button class="select-content-btn">选择文章</button>
        <div class="selectContent-wrapper">
          <div class="triangle"></div>
          <div class="selectContent">
            <template v-for="content in ContentList"
              :key="content">
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
    cursor: pointer;
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
      top: 3;
      left: 50%;
      max-height: 0;
      transform: translateX(-50%);
      overflow: hidden;
      z-index: 99;
      transition: all .3s ease-in-out;
      box-sizing: border-box;
      .selectContent{
        width: 3rem;
        max-height: 60vh;
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
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
// 头部导航栏/添加内容
const useNavEffect = (router, warningHandleClick) => {
  const addContentIsShow = ref(false)
  const title = ref(null);
  const author = ref(null);
  const dynasty = ref(null);
  const content = ref(null);
  const addContentWrapper = ref(null);
  let keydown;
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
      addContentWrapper.value.close();
    } else {
      keydown = document.onkeydown;
      document.onkeydown = null;
      addContentWrapper.value.showModal();
    }
    addContentIsShow.value = !addContentIsShow.value;
  }
  // 切换内容/
  const changeContent = (id) => {
    router.replace({ path: `/typing/chinese/${id}` })
  }
  const addContent = () => {
    // id 是 localStorage 里面的内容数量
    // 校验数据
    if (!title.value.value) return warningHandleClick('请输入标题');
    if (!content.value.value) return warningHandleClick('请输入内容');

    const addContentInfo = {
      id: Object.keys(JSON.parse(localStorage.getItem('ContentInfoCN'))).length + 1,
      title: title.value.value,
      author: author.value.value,
      dynasty: dynasty.value.value,
      language: getRadioValue('language').value,
      content: content.value.value,
    }
    setLocalStorage(addContentInfo)
    addContentHandleClick();
    changeContent(addContentInfo.id)
  }
  return {
    addContentHandleClick,
    addContent,
    title,
    author,
    dynasty,
    content,
    changeContent,
    addContentWrapper
  }
}
// 获取内容列表
const getContentList = (language) => {
  let contentInfo;
  const ContentList = reactive([]);
  if (language === 'chinese') {
    contentInfo = JSON.parse(localStorage.getItem('ContentInfoCN'));
  } else if (language === 'english') {
    return getEnglishContentList();
  }
  for (let key in contentInfo) {
    const {  id, title, author, dynasty, language } = contentInfo[key];
    ContentList.push({ id, title, author, dynasty, language });
  }
  return ContentList;
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
      default: 'chinese'
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
      changeContent,
      addContentWrapper
    } = useNavEffect(router, warningHandleClick);

    return {
      router,
      addContentHandleClick,
      addContent,
      title,
      author,
      dynasty,
      content,
      changeContent,
      ContentList,
      addContentWrapper,
      warningWrapper,
      warningHandleClick,
      warningMessage
    }
  },
}
</script>
