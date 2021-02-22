import { getNewAlbum, getAlbumlist } from "@/api/discover";
import { IAlbum } from "@/model/discover";
import { computed, onMounted, ref } from "vue";
type TArea = "ALL" | "ZH" | "EA" | "KR" | "JP";

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

export const useAlbumlist = () => {
  const albumlist = ref([] as Array<IAlbum>);
  const area = ref("ALL" as TArea);
  const current = ref(1);
  const offset = computed(() => {
    return (current.value - 1) * 35;
  });
  const pages = ref(0);
  const _getAlbumlist = async () => {
    const res = await getAlbumlist(offset.value, area.value);
    if (res?.albums) {
      albumlist.value = res.albums;
      pages.value = Math.ceil((res.total || 0) / 35);
    }
  };
  onMounted(() => {
    _getAlbumlist();
  });
  const toPage = async (i: number) => {
    current.value = i;
    _getAlbumlist();
  };

  const getByArea = (category: TArea) => {
    area.value = category;
    current.value = 1;
    _getAlbumlist();
  };
  return {
    albumlist,
    area,
    current,
    pages,
    toPage,
    getByArea
  };
};
