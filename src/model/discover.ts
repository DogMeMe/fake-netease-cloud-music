import { IResponse } from "@/utils/http/type";

export interface IBannerData extends IResponse {
  banners: Array<IBanner>;
}

export interface IBanner {
  imageUrl: string;
  scm: string;
  typeTitle: string;
}

export interface ICatHot {
  activity: boolean;
  category: number;
  createTime: number;
  hot: boolean;
  id: number;
  name: string;
  playlistTag: ICatHot;
  position: number;
  type: number;
  usedCount: number;
}

export interface ICatHotData extends IResponse {
  tags: Array<ICatHot>;
}

export interface IRecPlaylist {
  id: number;
  name: string;
  picUrl: string;
  playCount: number;
}

export interface IRecDJlist {
  id: number;
  name: string;
  picUrl: string;
  program: {
    adjustedPlayCount: number;
  };
}

export interface IRecPlaylistData extends IResponse {
  result: Array<IRecPlaylist>;
}

export interface IRecDJlistData extends IResponse {
  result: Array<IRecDJlist>;
}

export interface IArtist {
  id: number;
  followed?: boolean;
  name: string;
  accountId?: number;
  picUrl: string;
  img1v1Url?: string;
  topicPerson?: number;
  alias: Array<string>;
}

export interface IAlbum {
  name: string;
  artists: Array<IArtist>;
  picUrl: string;
  id: number;
}

export interface INewAlbumData extends IResponse {
  albums: Array<IAlbum>;
  total?: number;
}

type ToplistType = "S" | "O" | "N" | "H";
export interface ITopSong {
  id: number;
  name: string;
  ar: Array<IArtist>;
  arStr?: string;
  dt: number;
  alia: Array<string>;
  aliaStr: string;
  al?: {
    picUrl: string;
  };
}

export interface IToplist {
  id: number;
  name: string;
  ToplistType?: ToplistType;
  coverImgUrl: string;
  tracks: Array<ITopSong>;
  updateFrequency: string;
}

export interface IToplistData extends IResponse {
  list: Array<IToplist>;
}

export interface ITopPlay {
  id: number;
  name: string;
  ToplistType: ToplistType;
  tracks: Array<ITopSong>;
  commentCount: number;
  subscribedCount: number;
  shareCount: number;
  playCount: number;
  trackCount: number;
  coverImgUrl: string;
  updateTime: number;
  updateFrequency: string;
}

export interface ITopPlayData extends IResponse {
  playlist: ITopPlay;
}

export interface IPlaylist {
  id: number;
  name: string;
  playCount: number;
  creator: {
    id: number;
    nickname: string;
    avatarDetail?: {
      identityIconUrl: string;
    };
  };
  coverImgUrl: string;
}

export interface IPlaylistData extends IResponse {
  cat: string;
  playlists: Array<IPlaylist>;
  more: boolean;
  total: number;
}

export interface ICategory {
  category: number;
  name: string;
}

export interface ICategorys {
  [prop: string]: Array<ICategory>;
}

export interface ICategoryData extends IResponse {
  sub: Array<ICategory>;
  categories: Array<string>;
}

export interface IProgram {
  id: number;
  name: string;
  coverUrl: string;
  radio: {
    category: string;
    name: string;
  };
}

export interface IRecProgramData extends IResponse {
  programs: Array<IProgram>;
  name: string;
  more: boolean;
}

export interface IDJTop {
  step: number;
  icon: string;
  program: IProgram;
  rank: number;
  lastRank: number;
}
export interface IDJTopData extends IResponse {
  updateTime: number;
  toplist: Array<IDJTop>;
}

export interface IDJCategory {
  id: number;
  name: string;
  picWebUrl: string;
}

export interface IDJCategoryData extends IResponse {
  categories: Array<IDJCategory>;
}

export interface IDJ {
  id: number;
  name: string;
  picUrl: string;
  rcmdtext: string;
}

export interface IDJData extends IResponse {
  djRadios: Array<IDJ>;
}

export interface IArtistData extends IResponse {
  more: boolean;
  artists: Array<IArtist>;
}
