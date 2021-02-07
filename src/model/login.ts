import { IResponse } from "@/utils/http/type";

export interface IQrKey extends IResponse {
  data: {
    code: number;
    unikey: string;
  };
}

export interface IQrBase extends IResponse {
  data: {
    qrimg: string;
    qrurl: string;
  };
}
