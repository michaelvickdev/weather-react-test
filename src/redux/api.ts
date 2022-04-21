import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = 'fcad233e7630208c70b7517a70ed81ab';
// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.weatheroptics.co" }),
  endpoints: (builder) => ({
    getForecast: builder.query({
      query: ({ latitude, longitude }) => `/weather/forecast?token=${token}&latitude=${latitude}&longitude=${longitude}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export default api;
