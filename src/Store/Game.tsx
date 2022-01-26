import { createSlice } from "@reduxjs/toolkit";

type GameType = { games: { game_id: number; numbers: number | never[] }[] };
const games: GameType = { games: [] };

const GameSlice = createSlice({
  name: "counter",
  initialState: games,
  reducers: {
    saveGame(state, action) {
      state.games = action.payload;
    },
    // increase(state, action) {
    //   state.counter += action.payload;
    // },
    // toggleCounter(state) {
    //   state.showCounter = !state.showCounter;
    // },
  },
});
export const GameActions = GameSlice.actions;

export default GameSlice;
