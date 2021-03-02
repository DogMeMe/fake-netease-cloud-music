import { djtest, getDJCategory, getDJTop, getRecProgram } from "@/api/discover";
import { IDJCategory, IDJTop, IProgram } from "@/model/discover";
import { onMounted, ref } from "vue";

export const useRecProgram = () => {
  const programs = ref([] as Array<IProgram>);
  onMounted(async () => {
    const res = await getRecProgram();
    if (res?.programs) {
      programs.value = res.programs;
    }
  });
  return {
    programs,
  };
};

export const useDJTop = () => {
  const toplist = ref([] as Array<IDJTop>);
  onMounted(async () => {
    const res = await getDJTop();
    if (res?.toplist) {
      toplist.value = res.toplist.map((item) => {
        if (item.lastRank === -1) {
          item.icon = "new";
        } else {
          item.step = Math.abs(item.rank - item.lastRank);
          if (item.lastRank > item.rank) {
            item.icon = "progress";
          }
          if (item.rank > item.lastRank) {
            item.icon = "regress";
          }
          if (item.rank === item.lastRank) {
            item.icon = "same";
          }
        }
        return item;
      });
    }
  });
  return {
    toplist,
  };
};


export const useDJCategory = () => {
    const categories = ref([] as Array<IDJCategory>)
    onMounted(async () => {
        const res = await getDJCategory()
        if(res?.categories){
            categories.value = res.categories
        }
    })
    return {
        categories
    }
}

export const usedjtest = () => {
    djtest()
}