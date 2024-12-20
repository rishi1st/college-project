import { createSlice } from "@reduxjs/toolkit";
import {data} from '../data/studentdata'
const initialState = {
  students: data,
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers:{

  }
})

export const{} = studentSlice.actions
export default studentSlice.reducer
