import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { logout } from "../auth/authSlice";
import axios from "axios";

const API_BASE_URL = "http://localhost:5173";
const ENDPOINTS = {
  courses: `${API_BASE_URL}/courses.json`,
};

const initialState = {
  courses: [],
};

// Thunk asynchrone pour récupérer les cours
export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(ENDPOINTS.courses);
      return response.data.courses;
    } catch (error) {
      console.error("Error fetching courses:", error);
      return thunkAPI.rejectWithValue("Failed to fetch courses");
    }
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    // Pour setter les cours manuellement si besoin
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.courses = action.payload;
      })
      .addCase(logout, () => initialState);
  },
});

// Export des actions
export const { setCourses } = coursesSlice.actions;

export default coursesSlice.reducer;
