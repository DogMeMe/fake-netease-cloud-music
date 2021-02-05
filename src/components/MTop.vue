<template>
  <div class="m-topbar">
    <div class="m-top">
      <div class="top-wrap bar-wrap">
        <div class="logo topbar-bg"></div>
        <div class="m-nav">
          <router-link
            v-for="({ name, href }, key) in navs"
            :key="key"
            :to="href"
            :class="{ active: route.path === href }"
          >
            {{ name }}
          </router-link>
          <sup class="hot topbar-bg"></sup>
        </div>
        <div class="m-srch">
          <div class="srch-wrap topbar-bg">
            <input placeholder="音乐/视频/电台/用户" />
          </div>
        </div>
        <router-link class="m-cretor" to="/creator">创作者中心</router-link>
        <div class="top-user">
          <a class="login">登录</a>
        </div>
      </div>
    </div>
    <div class="subnav" v-if="route.path === navs[0].href">
      <div class="bar-wrap"></div>
    </div>
    <div class="bar-divi" v-else></div>
  </div>
  <teleport to="body">
    <login />
  </teleport>
</template>
<script lang="ts">
import Login from "@/components/Login.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "MTop",
  components: {
    Login,
  },
  setup() {
    const navs = [
      { name: "发现音乐", href: "/", route: "discover" },
      { name: "我的音乐", href: "/my", route: "my" },
      { name: "朋友", href: "/friend", route: "friend" },
      { name: "商城", href: "/store", route: "store" },
      { name: "音乐人", href: "/musician", route: "musician" },
      { name: "下载客户端", href: "/download", route: "download" },
    ];
    const route = useRoute();

    return {
      navs,
      route,
    };
  },
};
</script>
<style lang="scss" scoped>
.m-topbar {
  .m-top {
    position: relative;
    z-index: 1000;
    height: 70px;
    box-sizing: border-box;
    background: #242424;
    border-bottom: 1px solid #000;
    .top-wrap {
      .logo {
        width: 176px;
        height: 69px;
        background-position: 0 0;
      }
      .m-nav {
        height: 70px;
        position: relative;
        a {
          color: inherit;
          line-height: 70px;
          padding: 0 19px;
          font-size: 14px;
          color: #ccc;
          height: 70px;
          display: inline-block;
          position: relative;
          &.active,
          &:hover {
            color: #fff;
            background: #000;
          }
          &.active:after {
            content: "";
            position: absolute;
            border-width: 7px 6px;
            border-color: transparent transparent #c20c0c transparent;
            border-style: solid;
            bottom: 0;
            left: 50%;
            margin-left: -6px;
          }
        }
        .hot {
          display: block;
          position: absolute;
          top: 21px;
          right: -20px;
          width: 28px;
          height: 19px;
          background-position: -190px 0;
        }
      }
      .m-srch {
        width: 158px;
        height: 32px;
        border-radius: 32px;
        background: #fff;
        margin: 0 12px 0 80px;
        .srch-wrap {
          background-position: 0 -99px;
          input {
            width: 122px;
            height: 16px;
            margin-top: 8px;
            margin-left: 30px;
          }
        }
      }
      .m-cretor {
        color: #ccc;
        width: 90px;
        height: 32px;
        border: 1px solid #4f4f4f;
        line-height: 33px;
        border-radius: 20px;
        text-align: center;
        &:hover {
          border-color: #fff;
          color: #fff;
          border-width: 0.5px;
        }
      }
      .top-user {
        padding: 0 20px;
        .login {
          color: #787878;
          &:hover {
            text-decoration: underline;
            color: #999;
          }
        }
      }
    }
  }
  .bar-wrap {
    width: 1100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  .bar-divi {
    height: 5px;
    background: #c20c0c;
  }
  .subnav {
    z-index: 90;
    height: 35px;
    box-sizing: border-box;
    background-color: #c20c0c;
    border-bottom: 1px solid #a40011;
  }
}
</style>
