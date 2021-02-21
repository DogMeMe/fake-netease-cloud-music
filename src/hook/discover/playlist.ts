import { getPlaylistCateList, getPlaylist } from "@/api/discover/playlist"
import { ICategory, IPlaylist, ICategorys } from "@/model/discover"
import { computed, onMounted, reactive, Ref, ref, toRefs } from "vue"

type TPlaylist = 'hot' | 'new'

export const usePlaylistCateList = () => {
    const categoryObj = ref({} as ICategorys)
    onMounted(async () => {
        const res = await getPlaylistCateList()
        if (res?.categories) {
            res.sub.forEach(sub => {
                const category = res.categories[sub.category]
                let subs = categoryObj.value[category]
                if (!subs || !subs.length) {
                    subs = [] as Array<ICategory>
                }
                subs.push(sub)
                categoryObj.value[category] = subs

            })
        }
    })
    const categoryVisible = ref(false)
    const toggleCategory = () => {
        categoryVisible.value = !categoryVisible.value
    }
    return {
        categoryObj,
        toggleCategory,
        categoryVisible
    }
}

export const usePlaylist = (categoryVisible: Ref<boolean>) => {
    const state = reactive({
        playlist: [] as Array<IPlaylist>,
        pages: 0
    })
    const tag = ref("全部");
    const order = ref('hot' as TPlaylist)
    const current = ref(1)
    const offset = computed(() => {
        return (current.value - 1) * 35
    })

    const _getPlaylist = async () => {
        const res = await getPlaylist(offset.value, tag.value, order.value)
        if (res?.playlists) {
            state.playlist = res.playlists
            state.pages = Math.ceil(res.total / 35)
        }
    }
    const toPage = async (i: number) => {
        current.value = i
        _getPlaylist()
    }
    const getHot = () => {
        order.value = 'hot'
        _getPlaylist()
    }
    const getByCate = (category: string) => {
        tag.value = category
        categoryVisible.value = false
        _getPlaylist()
    }
    onMounted(async () => {
        _getPlaylist()
    })
    return {
        ...toRefs(state),
        toPage,
        current,
        tag,
        getHot,
        getByCate
    }
}