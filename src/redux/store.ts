import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import pageReducer from './reducers/pageSlice';
import peopleReducer from './reducers/peopleSlice';
import loaderReducer from './reducers/loaderSlice';
import totalCountReducer from './reducers/totalCountSlice';

export const store = configureStore({
  reducer: {
    page: pageReducer,
    people: peopleReducer,
    isLoading: loaderReducer,
    totalCount: totalCountReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
