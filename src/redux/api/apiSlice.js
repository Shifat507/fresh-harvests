import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://code-commando.com/api/v1/' }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => 'category',
    }),
    getProducts: builder.query({
      query: () => 'products',
    }),
  }),
});

export const { useGetCategoriesQuery, useGetProductsQuery } = apiSlice;
