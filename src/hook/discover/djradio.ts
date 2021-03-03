import {
  getDJByCategory,
  getDJCategory,
  getDJTop,
  getRecProgram,
} from "@/api/discover";
import { IDJ, IDJCategory, IDJTop, IProgram } from "@/model/discover";
import { onMounted, reactive, ref } from "vue";

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
  const categories = ref([] as Array<IDJCategory>);
  onMounted(async () => {
    const res = await getDJCategory();
    if (res?.categories) {
      categories.value = res.categories;
    }
  });
  return {
    categories,
  };
};

export const useDJHome = () => {
  const showIds = [
    {
      id: 2,
      name: "音乐故事",
    },
    {
      id: 6,
      name: "助眠解压",
    },
    {
      id: 3,
      name: "侃侃而谈",
    },
    {
      id: 2001,
      name: "创作翻唱",
    },
    {
      id: 11,
      name: "其他",
    },
  ];
  const show: any = {};
  showIds.forEach(({ name }) => {
    show[name] = [] as Array<IDJ>;
  });
  const showDjs = reactive(show);
  showIds.forEach(async ({ id, name }) => {
    const res = await getDJByCategory(id);
    if (res?.djRadios) {
      showDjs[name] = res.djRadios.splice(0, 4);
    }
  });
  return {
    showDjs,
  };
};

export const useDJByCategory = () => {
  const typeId = ref();
  const newDjs = ref([] as Array<IDJ>);
  // const listDjs = ref([] as Array<IDJ>);
  const _getNewDjs = async () => {
    const res = await getDJByCategory(typeId.value);
    if (res?.djRadios) {
      newDjs.value = res.djRadios.splice(0, 5);
    }
  };
  const changeType = (id: number) => {
    typeId.value = id;
    _getNewDjs()
  };
  return {
    typeId,
    changeType,
    newDjs,
    // listDjs,
  };
};
