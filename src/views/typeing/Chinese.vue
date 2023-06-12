<template>
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
</template>

<style lang="scss" scoped>

</style>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {

  },
})
</script>

