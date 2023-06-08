import { reactive } from 'vue'

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
// 数据遍历存入localStorage
// 判断localStorage是否存在数据
if (!localStorage.getItem('ContentInfoObj')) {
  localStorage.setItem('ContentInfoObj', JSON.stringify(ContentInfoObj))
}
// 从localStorage中取出数据
const ContentInfoObjStorage = JSON.parse(localStorage.getItem('ContentInfoObj'))
// 将localStorage中的数据存入ContentInfoObj
for (let key in ContentInfoObjStorage) {
  ContentInfoObj[key] = ContentInfoObjStorage[key]
}
// 将ContentInfoObj暴露出去
export { ContentInfoObj }
