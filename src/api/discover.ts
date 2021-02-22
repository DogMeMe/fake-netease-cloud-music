import {
  IBannerData,
  ICatHotData,
  INewAlbumData,
  IRecDJlistData,
  IRecPlaylistData,
  IToplistData,
  ITopPlayData,
  ICategoryData,
  IPlaylistData,
} from "@/model/discover";
import { reqGet } from "@/utils/http";

export const getBanner = async () => {
  return await reqGet<IBannerData>("/banner");
};

export const getCatHot = async () => {
  return reqGet<ICatHotData>("/playlist/hot");
};

export const getRecDJlist = async () => {
  return reqGet<IRecDJlistData>("/personalized/djprogram");
};

export const getRecPlaylist = async () => {
  return reqGet<IRecPlaylistData>("/personalized");
};

export const getNewAlbum = async () => {
  return reqGet<INewAlbumData>("/album/newest");
};

export const getToplist = async () => {
  return reqGet<IToplistData>("/toplist");
};

export const getPlaylistDetail = async (id: number) => {
  return reqGet<ITopPlayData>(`/playlist/detail?&id=${id}`);
};

export const getPlaylistCateList = async () => {
  return reqGet<ICategoryData>("/playlist/catlist");
};

export const getPlaylist = async (offset = 0, cat = "全部", order?: string) => {
  return reqGet<IPlaylistData>(
    `/top/playlist?cat=${cat}&offset=${offset}&limit=35&order=${order}`
  );
};

export const getAlbumlist = async(offset = 0, area = "全部") => {
  return reqGet<INewAlbumData>(
    `/album/new?area=${area}&offset=${offset}&limit=35`
  );
}
