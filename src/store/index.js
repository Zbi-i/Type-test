import { reactive } from 'vue'

const ContentInfoCN = reactive({
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
const ContentInfoEN = reactive({
  "1": {
    id: 1,
    language:'english',
    title: '十四行诗·一',
    author: '莎士比亚',
    content: `
      From fairest creatures we desire increase,
      That thereby beauty's rose might never die,
      But as the riper should by time decease,
      His tender heir might bear his memory:
      But thou contracted to thine own bright eyes,
      Feed'st thy light's flame with self-substantial fuel,
      Making a famine where abundance lies,
      Thy self thy foe, to thy sweet self too cruel:
      Thou that art now the world's fresh ornament,
      And only herald to the gaudy spring,
      Within thine own bud buriest thy content,
      And tender churl mak'st waste in niggarding:
      Pity the world, or else this glutton be,
      To eat the world's due, by the grave and thee.`
  },
  "2": {
    id: 2,
    language:'english',
    title: '十四行诗·二',
    author: '莎士比亚',
    content: `
      When forty winters shall besiege thy brow,
      And dig deep trenches in thy beauty's field,
      Thy youth's proud livery so gazed on now,
      Will be a tattered weed of small worth held:
      Then being asked, where all thy beauty lies,
      Where all the treasure of thy lusty days;
      To say within thine own deep sunken eyes,
      Were an all-eating shame, and thriftless praise.
      How much more praise deserved thy beauty's use,
      If thou couldst answer 'This fair child of mine
      Shall sum my count, and make my old excuse'
      Proving his beauty by succession thine.
      This were to be new made when thou art old,
      And see thy blood warm when thou feel'st it cold.`
  },
  "3": {
    id: 3,
    language:'english',
    title: '未选择的路',
    author: '罗伯特·弗罗斯特',
    content: `
    Two roads diverged1 in a yellow wood,
    And sorry I could not travel both,
    And be one traveler, long I stood,
    And looked down one as far as I could,
    To where it bent2 in the undergrowth.
    Then took the other, as just as fair,
    And having perhaps the better claim,
    Because it was grassy6 and wanted wear;
    Though as for that the passing there，
    Had worn8 them really about the same.
    And both that morning equally lay
    In leaves no step had trodden back.
    Oh, I kept the first for another day!
    Yet knowing how way leads on to way,
    I doubted if I should ever come back.
    I shall be telling this with a sigh,
    Somewhere ages and ages hence:
    Two roads diverged in a wood, and I--
    I took the one less traveled by,
    And that has made all the difference.`
  }
})
// 数据遍历存入localStorage
// 判断localStorage是否存在数据
if (!localStorage.getItem('ContentInfoCN')) {
  localStorage.setItem('ContentInfoCN', JSON.stringify(ContentInfoCN))
}
if (!localStorage.getItem('ContentInfoEN')) {
  localStorage.setItem('ContentInfoEN', JSON.stringify(ContentInfoEN))
}
// 从localStorage中取出数据
const ContentInfoCNStorage = JSON.parse(localStorage.getItem('ContentInfoCN'))
const ContentInfoENStorage = JSON.parse(localStorage.getItem('ContentInfoEN'))
// 将localStorage中的数据存入ContentInfoObj
for (let key in ContentInfoCNStorage) {
  ContentInfoCN[key] = ContentInfoCNStorage[key]
}
for (let key in ContentInfoENStorage) {
  ContentInfoEN[key] = ContentInfoENStorage[key]
}
// 将ContentInfoObj暴露出去
export { ContentInfoCN, ContentInfoEN }
