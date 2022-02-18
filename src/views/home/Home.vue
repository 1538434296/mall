<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="left">定位</div>
      <div slot="center">首页</div>
      <div slot="right">查找</div>
    </nav-bar>
    <home-swiper :slides="slides" />
    <home-recommend-view :category="category" />
    <feature-view :recommend="recommend" />
    <floor-view :floorName="floorName" :floorItem="floorItem" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

import { getHomeMultidata, getHomeCatedata } from "network/home";

import HomeSwiper from "./childComp/HomeSwiper.vue";
import HomeRecommendView from "./childComp/HomeRecommendView.vue";
import FeatureView from "./childComp/FeatureView.vue";
import FloorView from "./childComp/FloorView.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    FloorView,
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
      recommend: [
        {
          goodsId: "238bc2e023844769a6b67d9a4c04b2ea",
          goodsName: "纳美小苏打源生护龈牙膏3010/支",
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/compressedPic/20180411083404_6619.jpg",
          mallPrice: 16.8,
          price: 16.8,
        },
        {
          goodsId: "24afea564e5248b5a2bc59da95f09911",
          goodsName: "果倍爽橙汁饮料330ml/瓶",
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/compressedPic/20180413093730_3138.jpg",
          mallPrice: 6,
          price: 6,
        },
        {
          goodsId: "418fc60784d04e71beffe1ce5174c947",
          goodsName: "睿嫣白檀香护发素500ml/瓶",
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/compressedPic/20180409155457_3302.jpg",
          mallPrice: 109,
          price: 109,
        },
      ],
      floorName: {},
      floorItem: {
        floor1: [
          {
            goodsId: "e53c046465204d4fb8f22431cc2807e7",
            image:
              "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/homeFloor/20180407/20180407180109_6316.jpg",
          },
          {
            goodsId: "f36f6dd8f62247d5846eaa9b3f269cbc",
            image:
              "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/homeFloor/20180407/20180407180151_6180.jpg",
          },
          {
            goodsId: "72a3ec63956347a2a9f113589fe79c03",
            image:
              "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/homeFloor/20180407/20180407180217_3970.jpg",
          },
          {
            goodsId: "a632bfb3818541da8e6843d6d0dbd917",
            image:
              "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/homeFloor/20180407/20180407180257_2378.jpg",
          },
          {
            goodsId: "6694401a30a940f6ae437d541b7fd26d",
            image:
              "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/homeFloor/20180407/20180407180427_8557.jpg",
          },
        ],
        floor2: [
          {
            goodsId: "d0fabe0c966043cb8313fa55de9c555b",
            image:
              "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/homeFloor/20180407/20180407180547_3253.jpg",
          },
          {
            goodsId: "36360da2ec084316a100c2df1c714e37",
            image:
              "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/homeFloor/20180407/20180407180631_4071.jpg",
          },
          {
            goodsId: "eb47b495b65d42b8a1fc5823dcd5589c",
            image:
              "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/homeFloor/20180407/20180407180705_7181.jpg",
          },
          {
            goodsId: "7f6e857e83b240508836717c8764a0b0",
            image:
              "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/homeFloor/20180407/20180407180736_2822.jpg",
          },
          {
            goodsId: "c7cb656294ea48d3b224ddee5fdd9647",
            image:
              "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/homeFloor/20180408/20180408081756_7181.jpg",
          },
        ],
        floor3: [
          {
            goodsId: "ae4e71807a91460792670b657fa3ed3a",
            image:
              "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/homeFloor/20180407/20180407181423_15.jpg",
          },
          {
            goodsId: "2a398a5048074fc3b36bc8026bf9dc65",
            image:
              "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/homeFloor/20180407/20180407181216_8263.jpg",
          },
          {
            goodsId: "b37577ce45ee4cc6ba162959933dbac8",
            image:
              "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/homeFloor/20180407/20180407181247_7554.jpg",
          },
          {
            goodsId: "43912e1f7b7842cab40fcdee9dbe8758",
            image:
              "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/homeFloor/20180407/20180407181316_6196.jpg",
          },
          {
            goodsId: "98922617593e44c9a5880329a4cf0fd0",
            image:
              "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/homeFloor/20180407/20180407181348_4054.jpg",
          },
        ],
      },

      hotgoods: [
        {
          goodsId: "fb0f913950944b66a97ae262ad14609a",
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/compressedPic/20180415120500_6504.jpg",
          mallPrice: 3.9,
          name: "美汁源果粒奶优水果饮料蜜桃450ml/瓶",
          price: 3.9,
        },
        {
          goodsId: "775e575ce28a4f89b1dfe2c99eb08ae7",
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/compressedPic/20180415115202_8432.jpg",
          mallPrice: 4.5,
          name: "阿华田麦芽乳饮品牛奶味250mL/盒",
          price: 4.5,
        },
        {
          goodsId: "e68d5293c0a04e99a3480aaaad101362",
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/compressedPic/20180415121351_6470.jpg",
          mallPrice: 3.7,
          name: "养元香浓六个核桃240ml/瓶",
          price: 3.7,
        },
      ],
    };
  },
  created() {
    // 1.请求多个数据
    getHomeMultidata().then((res) => {
      console.log(res, 1);
      this.floorName = res.data.floorName;
      
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
  padding-top: 44px;
}
.home-nav {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--color-tint);
  z-index: 9;
}
</style>
