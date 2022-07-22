import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const messageSlice = createSlice({
  name: "message",
  initialState: {
    message: "Nikhitha"
  },
  reducers: {
    setMessage(state, data) {
      state.message = data.payload
    }
  }
})

export const { setMessage } = messageSlice.actions
export default messageSlice.reducer