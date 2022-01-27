import { createSlice } from "@reduxjs/toolkit";
import { GamesList } from "@api/Games";

type GameType = {
  list: {
    min_cart_value: number;
    types: {
      id: number;
      type: string;
      description: string;
      range: number;
      price: number;
      max_number: number;
      color: string;
    }[];
  };
};
const InitialValueGames: GameType = {
  list: {
    min_cart_value: 0,
    types: [],
  },
};

const Games = createSlice({
  name: "ListAndFilterGames",
  initialState: InitialValueGames,
  reducers: {
    GameSave(state, action) {
      state.list = action.payload;
    },
  },
});

export const ListGameActions = Games.actions;

export function FetchListGames() {
  return async (dispatch: any) => {
    let response = await GamesList();
    await dispatch(ListGameActions.GameSave(response));
  };
}
export default Games;
