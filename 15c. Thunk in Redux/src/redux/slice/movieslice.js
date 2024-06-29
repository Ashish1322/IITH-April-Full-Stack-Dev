import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk("fetchMovies", async () => {
  const data = await fetch("http://www.omdbapi.com/?s=harry&apikey=1b4ecd2");
  return data.json();
});

const movieSlice = createSlice({
  name: "movie slice",
  initialState: {
    movies: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload.Search;
      state.loading = false;
    }),
      builder.addCase(fetchMovies.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
      }),
      builder.addCase(fetchMovies.pending, (state, action) => {
        state.loading = true;
      });
  },
});

export default movieSlice.reducer;
