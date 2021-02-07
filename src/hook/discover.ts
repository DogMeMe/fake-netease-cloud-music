import { getBanner } from "@/api/discover/recommend";
import { IBanner } from "@/model/discover";
import { onMounted, onUnmounted, ref, watch } from "vue";
import Personal from "@/config/personal";
export const useBanner = () => {
  const banners: Array<IBanner> = [];
  const banner = ref({} as IBanner);
  const index = ref(0);
  const total = ref(0);
  let timer: number | undefined;

  const getIndexBan = (index: number): void => {
    banner.value = banners[index];
  };

  const preBan = () => {
    index.value = (index.value - 1 + total.value) % total.value;
  };

  const nextBan = () => {
    index.value = (index.value + 1 + total.value) % total.value;
  };

  const swipeBanner = (autoplay: number) => {
    timer = setInterval(() => {
      nextBan();
    }, autoplay | 3000);
  };

  watch(index, () => {
      getIndexBan(index.value)
  });

  onMounted(async () => {
    const res = await getBanner();
    if (res?.banners) {
      banners.push(...res.banners);
      total.value = res.banners.length;
      getIndexBan(0);
      swipeBanner(Personal.banner.autoplay);
    }
  });

  onUnmounted(() => {
    clearTimeout(timer);
  });

  return {
    banner,
    index,
    total,
    preBan,
    nextBan,
    getIndexBan,
  };
};
