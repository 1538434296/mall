<template>
  <div class="theme-list">
    <div class="fixed-nav" ref="fixednav">
      <div class="fixed-nav-content">
        <span v-for="(item, index) in theme" 
        :key="index" 
        :class="['tab-title', activedId === index && 'select-tab']"
        @click="changeTab(index, $event)">
          {{item}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fixedNav',
  data () {
        return {
          activedId: 0,
        }
      },
  props: {
    theme: {
      type: Array,
      default() {
        return [];
      }
    },
    
  },
  methods: {
    changeTab(id, event) {
      if(id !== this.activedId) {
        this.activedId = id;
        // 计算当前按钮位置,是否需要移动
        const spanLeft = event.clientX //当前点击元素左边距离
        const divBox = document.querySelector(".select-tab").clientWidth/2 //点击元素的一半
        const totalWidths = document.body.clientWidth //获取屏幕宽度
        const widths = totalWidths/2
        const spanRight = totalWidths -spanLeft
        const scrollBox = document.querySelector('.fixed-nav')
        const scrollL = scrollBox.scrollLeft
        if(spanRight < 100 || spanLeft < 100) {
          scrollBox.scrollLeft = scrollL + (spanLeft - widths) + divBox
        }
      }
    }
  }
}
</script>

<style scoped>
.fixed-nav {
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  border-bottom: #eee 1px solid;
}
.fixed-nav-content {
  display: flex;
}
.tab-title {
  padding: 0 13px;
  margin-right: 12px;
  color: #141414;
  border-radius: 13px;
  font-size: 12px;
  flex-shrink: 0;
  height: 38px;
  line-height: 38px;
}
.select-tab {
  color: red;
}
::-webkit-scrollbar {
  width: 0.1px;
  opacity: 0;
  display: none;
}
::-webkit-scrollbar-track {
  width: 0.1px;
  background-color: #fff;
  opacity: 0;
}
::-webkit-scrollbar-thumb {
  width: 0.1px;
  border-radius: 0.1px;
  opacity: 0;
}
</style>>