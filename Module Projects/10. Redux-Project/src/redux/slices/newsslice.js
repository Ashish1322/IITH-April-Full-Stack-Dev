import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getHeadlines = createAsyncThunk("headlines", async () => {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=00151aaf19ff445bb1a349b4cf6228c0"
  );

  return response.json();
});

export const fetchNews = createAsyncThunk("news", async (category) => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=00151aaf19ff445bb1a349b4cf6228c0`
  );

  return response.json();
});

const newsslice = createSlice({
  name: "News Slice",
  initialState: {
    headlines: [],
    news: [],
    categoris: [
      "business",
      "entertainment",
      "health",
      "science",
      "sports",
      "technology",
    ],
  },
  extraReducers: (builder) => {
    builder.addCase(getHeadlines.fulfilled, (state, action) => {
      state.headlines = action.payload.articles;
    }),
      builder.addCase(fetchNews.fulfilled, (state, action) => {
        state.news = action.payload.articles;
      });
  },
});

export default newsslice.reducer;
