import { getArtists } from "@/api/discover";
import { IArtist } from "@/model/discover";
import { onMounted, reactive, ref } from "vue";

export const useArtists = () => {
  const hotArtists = ref([] as Array<IArtist>);
  const artists = ref([] as Array<IArtist>);
  const areas = [
    { id: -1, name: "推荐" },
    { id: 7, name: "华语" },
    { id: 96, name: "欧美" },
    { id: 8, name: "日本" },
    { id: 16, name: "韩国" },
    { id: 0, name: "其他" },
  ];
  const types = [
    { id: -1, name: "歌手" },
    { id: 1, name: "男歌手" },
    { id: 2, name: "女歌手" },
    { id: 3, name: "组合/乐队" },
  ];
  const initials = [{ id: "-1", name: "热门" }];
  // 生成A-Z字母
  (() => {
    for (let a = 65; a < 91; a++) {
      initials.push({
        id: String.fromCharCode(a + 32),
        name: String.fromCharCode(a),
      });
    }
    initials.push({
      id: "0",
      name: "其他",
    });
  })();
  const selected = reactive({
    type: -1,
    area: -1,
    initial: "-1",
  });
  const _getArtists = async () => {
    const res = await getArtists(
      selected.initial,
      selected.type,
      selected.area
    );
    if (res?.artists) {
      hotArtists.value = res.artists.filter((item, index) => {
        if (index < 10) return item;
      });
      artists.value = res.artists.filter((item, index) => {
        if (index >= 10) return item;
      });
    }
  };
  const toSelect = (type: number, area: number) => {
    selected.type = type;
    selected.area = area;
    selected.initial = '-1'
    _getArtists();
  };
  const selectInitial = (initial: string) => {
    selected.initial = initial;
    _getArtists();
  };
  onMounted(async () => {
    _getArtists();
  });
  return {
    artists,
    hotArtists,
    areas,
    types,
    selected,
    toSelect,
    initials,
    selectInitial,
  };
};
