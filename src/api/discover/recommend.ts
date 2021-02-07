import { IBannerData } from "@/model/discover"
import { reqGet } from "@/utils/http"

export const getBanner = async () => {
    return await reqGet<IBannerData>('/banner')
}