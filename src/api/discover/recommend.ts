import { IBannerData, ICatHotData, INewAlbumData, IRecPlaylistData, IToplistData, ITopPlayData } from "@/model/discover"
import { reqGet } from "@/utils/http"

export const getBanner = async () => {
    return await reqGet<IBannerData>('/banner')
}

export const getCatHot = async () => {
    return reqGet<ICatHotData>('/playlist/hot')
}

export const getRecPlaylist = async () => {
    return reqGet<IRecPlaylistData>('/personalized')
}

export const getNewAlbum = async () => {
    return reqGet<INewAlbumData>('/top/album')
}

export const getToplist = async () => {
    return reqGet<IToplistData>('/toplist')
}

export const getPlaylist =  async (id: number) => {
    return reqGet<ITopPlayData>(`/playlist/detail?&id=${id}`)
}