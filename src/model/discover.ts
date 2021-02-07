import { IResponse } from "@/utils/http/type";

export interface IBannerData extends IResponse {
  banners: Array<IBanner>;
}

export interface IBanner {
  imageUrl: string;
  scm: string;
  typeTitle: string;
}
