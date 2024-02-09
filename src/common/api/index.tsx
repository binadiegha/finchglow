import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  // TODO: Convert base URL to .env value
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.travelden.com/api" }),
  endpoints: (builder) => ({
    // register endpoint
    register: builder.query({
      query: (reqBody) => ({
        url: `/register`,
        body: reqBody,
        method: "post",
      }),
    }),

    // login endpoint
    login: builder.query({
      query: (reqBody) => ({
        url: "/login",
        body: reqBody,
        method: "post",
      }),
    }),

    // verification endpoint
    verify: builder.query({
      query: ({ reqBody, id }) => ({
        url: `email/verify/${id}`,
        body: reqBody,
      }),
    }),

    // profile
  }),
});
