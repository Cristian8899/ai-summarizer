import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const rapidApiKey= '7d1627a749mshbb55ad7b96cd488p1dc854jsnff6f8c0e6b4a';

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) =>{
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host','article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        }
    }),
    endpoints: (builder) =>({
        getSummary: builder.query({
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3` ,
        })
    })
});

export const { useLazyGetSummaryQuery } = articleApi