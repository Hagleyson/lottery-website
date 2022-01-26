import { configureStore } from "@reduxjs/toolkit";
import GameSlice from "./Game";

const store = configureStore({
  reducer: { games: GameSlice.reducer },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
