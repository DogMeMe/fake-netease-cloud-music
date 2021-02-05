import { getQrBase, getQrKey } from "@/api/login";
import { IQrBase } from "@/model/login";

export class QrLng {
  static async geneQr() {
    let qrurl = ''
    const res = await getQrKey();
    if (res) {
      qrurl = ((await getQrBase(res.unikey)) as IQrBase).qrurl;
    }
    return {
        qrurl
    }
  }
}
