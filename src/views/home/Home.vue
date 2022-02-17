<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="left">定位</div>
      <div slot="center">首页</div>
      <div slot="right">查找</div>
    </nav-bar>
    <home-swiper :slides="slides"></home-swiper>
    <home-recommend-view :category="category"></home-recommend-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { getHomeMultidata, getHomeCatedata } from "network/home";
import HomeSwiper from "./childComp/HomeSwiper.vue";
import HomeRecommendView from "./childComp/HomeRecommendView.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
  },
  data() {
    return {
      slides: [
        {
          goodsId: "b1195296679f482aa7d54d95ac2b4a94",
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/advertesPicture/20180407/20180407175040_1780.jpg",
        },
        {
          goodsId: "da34d6f381464a219b37a9ac0ad579e8",
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/advertesPicture/20180407/20180407175111_9509.jpg",
        },
        {
          goodsId: "ad176e397858448a854dc50371334faf",
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/advertesPicture/20180407/20180407175142_6947.jpg",
        },
      ],
      category: [
        {
          mallCategoryId: "1",
          mallCategoryName: "新鲜水果",
          comments: null,
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/firstCategoryPicture/20180408/20180408111959_2837.png",
        },
        {
          mallCategoryId: "2",
          mallCategoryName: "中外名酒",
          comments: null,
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/firstCategoryPicture/20180408/20180408112010_4489.png",
        },
        {
          mallCategoryId: "3",
          mallCategoryName: "营养奶品",
          comments: null,
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/firstCategoryPicture/20180408/20180408113102_1595.png",
        },
        {
          mallCategoryId: "5",
          mallCategoryName: "食品饮料",
          comments: null,
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/firstCategoryPicture/20180408/20180408113048_1276.png",
        },
        {
          mallCategoryId: "4",
          mallCategoryName: "个人护理",
          comments: null,
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/firstCategoryPicture/20180408/20180408112053_8191.png",
        },
      ],
      recommend: [],
    };
  },
  created() {
    // 1.请求多个数据
    getHomeMultidata().then((res) => {
      console.log(res, 1);
      this.recommend = res.data.recommend;
    });
    getHomeCatedata().then((res) => {
      console.log(res, 2);
    });
  },
};
</script>

<style scoped>
#home {
  background: #eee;
}
.home-nav {
  background-color: var(--color-tint);
}
</style>
