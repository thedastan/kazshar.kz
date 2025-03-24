import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const getLocaleFromPathname = () => {
  if (typeof window !== "undefined") {
    const match = window.location.pathname.match(/^\/(ru|en|kk)/);
    return match ? match[1] : "ru";
  }
  return "ru"; // Фолбэк для SSR
};

const baseQueryExtended: BaseQueryFn = async (args, api, extraOptions) => {
  const locale = getLocaleFromPathname();
  const baseQuery = fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API}/${locale}/api/kashgar`,
  });

  return baseQuery(args, api, extraOptions);
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryExtended,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ["cards", "tools", "gallery", "contact_us", "rfc_proposal"],
  endpoints: () => ({}),
});
