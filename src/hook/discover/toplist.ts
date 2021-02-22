import { getPlaylistDetail, getToplist } from "@/api/discover";
import { IToplist, ITopPlay } from "@/model/discover";
import { onMounted, ref } from "vue";

export const useToplist = () => {
  const cloudMusicToplist = ref([] as Array<IToplist>);
  const mediaToplist = ref([] as Array<IToplist>);
  const toplist = ref({} as ITopPlay);
  const selectedId = ref(0);
  const selectedFrequency = ref("");
  const _getToplistDetail = async () => {
    const res = await getPlaylistDetail(selectedId.value);
    if (res?.playlist) {
      toplist.value = res.playlist;
      toplist.value.tracks = res.playlist.tracks.map(item => {
          item.arStr = item.ar.reduce((pre, cur) => {
            return `${pre}${pre ? '/' : ''}${cur.name}`
          }, '')
          console.log(item.arStr)
          return item
      })
      toplist.value.updateFrequency = selectedFrequency.value;
    }
  };
  const getByToptype = (id: number, frequency: string) => {
    selectedId.value = id;
    selectedFrequency.value = frequency
    _getToplistDetail();
  };
  onMounted(async () => {
    const res = await getToplist();
    if (res?.list) {
      res.list.forEach((toplist) => {
        if (toplist.ToplistType) {
          cloudMusicToplist.value.push(toplist);
        } else {
          mediaToplist.value.push(toplist);
        }
      });
      selectedId.value = cloudMusicToplist.value[0].id;
      selectedFrequency.value = cloudMusicToplist.value[0].updateFrequency;
      _getToplistDetail();
    }
  });
  return {
    mediaToplist,
    cloudMusicToplist,
    selectedId,
    toplist,
    getByToptype
  };
};
