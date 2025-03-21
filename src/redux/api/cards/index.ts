
import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getCards: build.query<CARDS.GetCardsRes,CARDS.GetCardsReq>({
      query: () => ({
        url: `/cards/`,
        method: "GET",
      }),
      providesTags: ["cards"],
    }),

    getTools: build.query<CARDS.GetToolsRes, CARDS.GetToolsReq>({
      query: () => ({
        url: "/tools/",
        method: "GET",
      }),
      providesTags: ["tools"],
    }),

    getGallery: build.query<CARDS.GetGalleryRes, CARDS.GetGalleryReq>({
      query: () => ({
        url: "/gallery/",
        method: "GET",
      }),
      providesTags: ["gallery"],
    }),

  }),
});

export const { useGetCardsQuery, useGetToolsQuery, useGetGalleryQuery} = api;
 