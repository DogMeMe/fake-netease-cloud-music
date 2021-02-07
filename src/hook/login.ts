import { getQrBase, getQrKey } from "@/api/login";
import { IQrBase } from "@/model/login";

export class QrLng {
  static async geneQr() {
    let qrurl = "";
    const res = await getQrKey();
    if (res?.data) {
      qrurl = ((await getQrBase(res.data.unikey)) as IQrBase).data.qrurl;
    }
    return {
      qrurl,
    };
  }
}
