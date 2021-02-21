import { ICategoryData, IPlaylistData } from '@/model/discover';
import { reqGet } from '@/utils/http';
export const getPlaylistCateList = async () => {
    return reqGet<ICategoryData>('/playlist/catlist')
}

export const getPlaylist = async (offset = 0, cat = '全部', order?: string) => {
    return reqGet<IPlaylistData>(`/top/playlist?cat=${cat}&offset=${offset}&limit=35&order=${order}`)
} 