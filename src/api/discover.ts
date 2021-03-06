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
  IRecProgramData,
  IDJTopData,
  IDJCategoryData,
  IArtistData,
  IDJData,
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

export const getAlbumlist = async (offset = 0, area = "全部") => {
  return reqGet<INewAlbumData>(
    `/album/new?area=${area}&offset=${offset}&limit=35`
  );
};

export const getRecProgram = () => {
  return reqGet<IRecProgramData>("/program/recommend");
};

export const getDJTop = (limit: number) => {
  return reqGet<IDJTopData>(`/dj/program/toplist?limit=${limit}`);
};

export const getDJCategory = () => {
  return reqGet<IDJCategoryData>("/dj/catelist");
};

export const getDJByCategory = (type?: number) => {
  return reqGet<IDJData>(`/dj/recommend/type?type=${type}`);
};

export const getArtists = (
  initial: string,
  type = -1,
  area = -1,
  offset = 0,
  limit = 100
) => {
  return reqGet<IArtistData>(
    `/artist/list?type=${type}&area=${area}&limit=${limit}&offset=${offset}&initial=${initial}`
  );
};

export const getSongUrl = (id: number | string) => {
  reqGet(`/song/url?id=${id}`);
  reqGet(`/song/detail?ids=${id}`)
};
