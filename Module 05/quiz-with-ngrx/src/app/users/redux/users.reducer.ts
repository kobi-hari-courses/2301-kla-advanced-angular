import { createReducer } from "@ngrx/store";
import { usersInitialState } from "./users.state";

export const usersReducer = createReducer(usersInitialState);