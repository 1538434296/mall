<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="left">
        <svg
          t="1645520312855"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4542"
          display="block"
          width="44"
          height="44"
        >
          <path
            d="M512 114.5c-165.7 0-300 134.3-300 300 0 227.9 206.7 429.9 277 489 13.5 11.3 33 11.7 46.9 0.9C606.8 849 812 658.9 812 414.5c0-165.7-134.3-300-300-300z m0 452.5c-82.8 0-150-67.2-150-150s67.2-150 150-150 150 67.2 150 150-67.2 150-150 150z"
            fill="#ffffff"
            p-id="4543"
          ></path>
        </svg>
      </div>
      <div class="center" slot="center"><input type="text" name="nav-center"></div>
      <div slot="right">
        <svg
          t="1645519191855"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2904"
          display="block"
          width="45"
          height="44"
        >
          <path
            d="M492.307692 728.615385a236.307692 236.307692 0 1 1 0-472.615385 236.307692 236.307692 0 0 1 0 472.615385z m0-39.384616a196.923077 196.923077 0 1 0 0-393.846154 196.923077 196.923077 0 0 0 0 393.846154z"
            p-id="2905"
            fill="#ffffff"
          ></path>
          <path
            d="M616.487385 683.480615l111.458461 111.379693a19.692308 19.692308 0 1 0 27.844923-27.844923l-111.458461-111.419077a19.692308 19.692308 0 0 0-27.844923 27.884307z"
            p-id="2906"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </nav-bar>
    <home-swiper :slides="slides" />
    <home-recommend-view :category="category" />
    <feature-view :recommend="recommend" />
    <floor-view :floorName="floorName" :floorItem="floorItem" />
    <hot-goods-view :hotGoods="hotGoods" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

import { getHomeMultidata } from "network/home";

import HomeSwiper from "./childComp/HomeSwiper.vue";
import HomeRecommendView from "./childComp/HomeRecommendView.vue";
import FeatureView from "./childComp/FeatureView.vue";
import FloorView from "./childComp/FloorView.vue";
import HotGoodsView from "./childComp/HotGoodsView.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    FloorView,
    HotGoodsView,
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

      hotGoods: [
        {
          mallPrice: 3.9,
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/compressedPic/20180415120500_6504.jpg",
          goodsId: "fb0f913950944b66a97ae262ad14609a",
          price: 3.9,
          name: "美汁源果粒奶优水果饮料蜜桃450ml/瓶",
        },
        {
          mallPrice: 4.5,
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/compressedPic/20180415115202_8432.jpg",
          goodsId: "775e575ce28a4f89b1dfe2c99eb08ae7",
          price: 4.5,
          name: "阿华田麦芽乳饮品牛奶味250mL/盒",
        },
        {
          mallPrice: 3.7,
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/compressedPic/20180415121351_6470.jpg",
          goodsId: "e68d5293c0a04e99a3480aaaad101362",
          price: 3.7,
          name: "养元香浓六个核桃240ml/瓶",
        },
        {
          mallPrice: 6.5,
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/compressedPic/20180415120956_8491.jpg",
          goodsId: "7c377350cc9342edba600f3f6a548bd0",
          price: 6.5,
          name: "名屋木瓜牛乳340ml/瓶",
        },
        {
          mallPrice: 3.9,
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/compressedPic/20180415120411_5740.jpg",
          goodsId: "f8c3f62810aa4ce781d14a885333a2b8",
          price: 3.9,
          name: "美汁源果粒奶优草莓味450ml/瓶",
        },
        {
          mallPrice: 7.5,
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/compressedPic/20180415120720_7233.jpg",
          goodsId: "85d4fece907a4170b4b27a22c035321d",
          price: 7.5,
          name: "名屋醇豆浆饮料485ml/瓶",
        },
        {
          mallPrice: 5,
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/compressedPic/20180103161335_9324.jpg",
          goodsId: "9abd33f0d2e4496f9c023a1dcfbfe2ad",
          price: 6.3,
          name: "李子园甜牛奶乳饮料450ml/瓶",
        },
        {
          mallPrice: 5,
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/compressedPic/20180415120239_7917.jpg",
          goodsId: "1258c2fd52844f679fad1ebf24764082",
          price: 5,
          name: "李子园草莓风味乳饮料450ml/瓶",
        },
        {
          mallPrice: 6.3,
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/compressedPic/20171224082006_6602.jpg",
          goodsId: "bd25fd5d128e41fd9a737e99f75f92f8",
          price: 8.5,
          name: "娃哈哈AD钙奶220ml*4/条",
        },
        {
          mallPrice: 6,
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/compressedPic/20180415121537_4372.jpg",
          goodsId: "cfbe6ec3101a414f9563a8c6624aec08",
          price: 6,
          name: "一榨鲜绿豆汁300ml/瓶",
        },
        {
          mallPrice: 5,
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/compressedPic/20180415120109_275.jpg",
          goodsId: "e9808eb0d3574c11971e38f75076f1a4",
          price: 5,
          name: "李子园朱古力风味乳饮料450ml/瓶",
        },
        {
          mallPrice: 7.5,
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/compressedPic/20180415120857_4885.jpg",
          goodsId: "a5d1130de39f434facc6d35514cea053",
          price: 7.5,
          name: "名屋黑豆浆饮料485ml/瓶",
        },
        {
          mallPrice: 4.5,
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/compressedPic/20180415114959_7217.jpg",
          goodsId: "06130c91497b4806bf2b3e538814bb66",
          price: 4.5,
          name: "阿华田麦芽乳饮品高钙味250mL/盒",
        },
        {
          mallPrice: 6.5,
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/compressedPic/20180415121108_2001.jpg",
          goodsId: "b75e437adc0540c6b30516537d759122",
          price: 6.5,
          name: "名屋香蕉牛乳340ml/瓶",
        },
        {
          mallPrice: 3.9,
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/compressedPic/20180415120608_2319.jpg",
          goodsId: "0d51d2863bdc485688c2fee2a165bb51",
          price: 3.9,
          name: "美汁源果粒奶优原味450ml/瓶",
        },
        {
          mallPrice: 7.4,
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/compressedPic/20171224082144_8430.jpg",
          goodsId: "85173b3ce7a24a44ac2ed960a3e431fc",
          price: 9,
          name: "旺仔牛奶125ml*4/条",
        },
        {
          mallPrice: 68,
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/compressedPic/20180415122117_1031.jpg",
          goodsId: "99e37959ae22433da7bb378a2d24c19c",
          price: 68,
          name: "同福阿胶粥300g/箱",
        },
        {
          mallPrice: 3.5,
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/compressedPic/20180415122256_2373.jpg",
          goodsId: "068fe09cf2a849b4b8c7ce3fea734072",
          price: 3.5,
          name: "银鹭桂圆莲子八宝粥360g/瓶",
        },
        {
          mallPrice: 14.5,
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/compressedPic/20180415121432_880.jpg",
          goodsId: "8172961149434b51865612820c7b8891",
          price: 14.5,
          name: "椰树牌椰汁饮料1L/瓶",
        },
        {
          mallPrice: 4.5,
          image:
            "http://imgs.ossjk.cn/stuImgs/stuImgs/tst/compressedPic/20180415115515_7254.jpg",
          goodsId: "a870459dfbba4df8af52e52aa6d0c426",
          price: 4.5,
          name: "豆本豆原味豆奶250ml/盒",
        },
      ],
    };
  },
  created() {
    // 1.请求多个数据
    getHomeMultidata().then((res) => {
      this.floorName = res.data.floorName;
      console.log(res);
    });
  },
};
</script>

<style scoped>
#home {
  background: #eee;
  padding-top: 44px;
  padding-bottom: 49px;
}
.home-nav {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--color-tint);
  z-index: 9;
}
.center input{
  width: 100%;
  height: 100%;
}
</style>
