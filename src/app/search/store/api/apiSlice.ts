import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetHotelListSearchParams } from "./interface";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/uhotelzkk" }),
  endpoints: (builder) => ({
    getHotelList: builder.query<void, GetHotelListSearchParams>({
      query: (searchParam) => ({
        url: "/search/gethotellist",
        params: searchParam,
      }),
    }),
  }),
});
