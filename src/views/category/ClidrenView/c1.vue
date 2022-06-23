<template>
  <div>
    <fixed-nav :theme="theme"></fixed-nav>
  </div>
</template>

<script>
import fixedNav from '../childComp/fixedNav.vue'
export default {
  name: 'c1',
  components: {
    fixedNav
  },
  data () {
    return {
      theme: ['test1','test1','test1','test1','test1','test1','test1','test1',],
    }
  }
}
</script>

<style>

</style>