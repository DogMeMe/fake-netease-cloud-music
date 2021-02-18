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

export interface IRecPlaylistData extends IResponse {
  result: Array<IRecPlaylist>;
}

export interface Artist {
  id: number;
  followed: boolean;
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
  monthData: Array<IAlbum>;
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
// export interface ISinger {
//   id: number;
//   name: string;
//   picUrl: string;
// }

// export interface ISingerData extends IResponse {
//   artists: Array<ISinger>;
// }
