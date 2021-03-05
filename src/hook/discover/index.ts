import { getSongUrl } from "@/api/discover";

export const useSongUrl = (id: number) => {
  getSongUrl(id);
};
