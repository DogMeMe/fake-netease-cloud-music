<template>
  <div class="m-ft">
    <div class="wrap">
      <div class="copyright">
        <p class="m-link">
          <router-link
            v-for="({ name, href }, key) in links"
            :key="key"
            :to="href"
            target="_blank"
            >{{ name }}
          </router-link>
        </p>
        <p>
          <span class="sep">网易公司版权所有©1997-2021</span>
          <span>杭州乐读科技有限公司运营：</span>
          <a
            href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"
            target="_blank"
          >
            浙网文[2018]3506-263号
          </a>
        </p>
        <p>
          <span class="sep">违法和不良信息举报电话：0571-89853516</span>
          <span> 举报邮箱：</span>
          <a href="mailto:ncm5990@163.com">ncm5990@163.com</a>
        </p>
        <p>
          <a
            class="sep"
            href="https://beian.miit.gov.cn/#/Integrated/index"
            target="_blank"
          >
            粤B2-20090191-18 工业和信息化部备案管理系统网站
          </a>
          <img src="~@/assets/foot/police.png" width="14" height="14" />
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564"
            target="_blank"
          >
            浙公网安备 33010902002564号
          </a>
        </p>
      </div>
      <ul class="ft-enter">
        <li v-for="({ href, iconPos, textPos }, key) in entries" :key="key">
          <a target="_blank" :href="href">
            <div
              class="foot-bg enter-icon"
              :style="{ backgroundPosition: iconPos }"
            ></div>
            <p
              class="foot-tbg enter-text"
              :style="{ backgroundPosition: textPos }"
            ></p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MFoot",
  setup() {
    const links = [
      {
        name: "服务条款",
        href: "//st.music.163.com/official-terms/service",
      },
      {
        name: "隐私政策",
        href: "//st.music.163.com/official-terms/privacy",
      },
      {
        name: "儿童隐私政策",
        href: "//st.music.163.com/official-terms/children",
      },
      {
        name: "版权投诉指引",
        href: "//music.163.com/st/staticdeal/complaints.html",
      },
      {
        name: "意见反馈",
        href: "#",
      },
    ];
    const entries = [
      {
        href: "https://web-amped.music.163.com/",
        iconPos: "-63px -456.5px",
        textPos: "0 -108px",
      },
      {
        href: "https://music.163.com/st/userbasic#/auth",
        iconPos: "-63px -101px",
        textPos: "-1px -91px",
      },
      {
        href: "https://music.163.com/st/musician",
        iconPos: "0 0",
        textPos: "0 0",
      },
      {
        href: "https://music.163.com/web/reward",
        iconPos: "-60px -50px",
        textPos: "0 -54px",
      },
      {
        href: "https://music.163.com/uservideo#/plan",
        iconPos: "0 -101px",
        textPos: "-1px -72px",
      },
    ];
    return {
      links,
      entries,
    };
  },
});
</script>
<style lang="scss" scoped>
.m-ft {
  position: relative;
  height: 172px;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
  .wrap {
    justify-content: space-between;
    .copyright {
      width: 520px;
      padding-top: 15px;
      line-height: 24px;
      .m-link {
        a {
          color: #999;
          padding-right: 10px;
          border-right: 1px solid #c2c2c2;
          margin-right: 8px;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      p {
        * {
          color: #666;
        }
        img {
          vertical-align: middle;
        }
        .sep {
          margin-right: 14px;
        }
      }
    }
    .ft-enter {
      display: flex;
      margin-top: 33px;
      justify-content: space-between;
      width: 430px;
      .enter-icon {
        width: 50px;
        height: 45px;
        margin: 0 auto;
      }
      .enter-text {
        display: inline-block;
        margin: 5px 5px 0;
        width: 52px;
        height: 14px;
      }
    }
  }
}
</style>
