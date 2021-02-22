import {
  ICatHot,
  IRecPlaylist,
  IAlbum,
  IToplist,
  IRecDJlist,
} from "@/model/discover";
import {
  getBanner,
  getCatHot,
  getRecPlaylist,
  getNewAlbum,
  getToplist,
  getPlaylistDetail,
  getRecDJlist
} from "@/api/discover";
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
    getIndexBan(index.value);
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

export const useCatHotlist = () => {
  const catHots = ref([] as Array<ICatHot>);
  onMounted(async () => {
    const res = await getCatHot();
    if (res?.tags) {
      catHots.value = res.tags;
    }
  });
  return {
    catHots,
  };
};

export const useRecList = () => {
  const recList = ref([] as Array<IRecPlaylist | IRecDJlist>);
  onMounted(async () => {
    Promise.all([getRecPlaylist(), getRecDJlist()]).then(([res, res2]) => {
      if (res?.result) {
        recList.value = res.result.splice(0, 5);
      }
      if (res2?.result) {
        recList.value.splice(3, 0, res2.result[0])
        recList.value.splice(5, 0, res2.result[1])
        recList.value.splice(7, 0, res2.result[2])
      }
    })
  });
  return {
    recList,
  };
};

export const useNewAlbum = () => {
  const newAlbum = ref([] as Array<IAlbum>);
  onMounted(async () => {
    const res = await getNewAlbum();
    if (res?.albums) {
      newAlbum.value = res.albums.splice(0, 10);
    }
  });
  return {
    newAlbum,
  };
};

export const useToplist = () => {
  const toplist = ref([] as Array<IToplist>);
  onMounted(async () => {
    const res = await getToplist();
    if (res?.list) {
      toplist.value = res.list.splice(0, 3);
      toplist.value.forEach(async ({ id }, index) => {
        const songRes = await getPlaylistDetail(id);
        if (songRes?.playlist) {
          toplist.value[index].tracks = songRes.playlist.tracks.splice(0, 10);
        }
      });
    }
  });
  return {
    toplist,
  };
};

