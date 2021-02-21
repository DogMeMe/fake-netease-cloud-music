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
    adjustedPlayCount: number
  }
}

export interface IRecPlaylistData extends IResponse {
  result: Array<IRecPlaylist>;
}

export interface IRecDJlistData extends IResponse {
  result: Array<IRecDJlist>;
}

export interface Artist {
  id: number;
  followed?: boolean;
  name: string;
  topicPerson: number;
}

export interface IAlbum {
  name: string;
  artists: Array<Artist>;
  picUrl: string;
  id: number;
}

export interface INewAlbumData extends IResponse {
  albums: Array<IAlbum>;
}

type ToplistType = "S" | "O" | "N";

export interface ITopSong {
  id: number;
  name: string;
}

export interface IToplist {
  id: number;
  name: string;
  ToplistType: ToplistType;
  coverImgUrl: string;
  tracks: Array<ITopSong>;
}

export interface IToplistData extends IResponse {
  list: Array<IToplist>;
}

export interface ITopPlayData extends IResponse {
  playlist: {
    id: number;
    name: string;
    ToplistType: ToplistType;
    tracks: Array<ITopSong>;
  };
}

export interface IPlaylist {
  id: number;
  name: string;
  playCount: number;
  creator: {
    id: number;
    nickname: string;
    avatarDetail?: {
      identityIconUrl: string
    }
  },
  coverImgUrl: string
}

export interface IPlaylistData extends IResponse {
  cat: string;
  playlists: Array<IPlaylist>;
  more: boolean,
  total: number
}

export interface ICategory {
  category: number;
  name: string
}

export interface ICategorys{
  [prop: string]: Array<ICategory>
}

export interface ICategoryData extends IResponse {
  sub: Array<ICategory>;
  categories: Array<string>;
}
