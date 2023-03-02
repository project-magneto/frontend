import { configureStore } from '@reduxjs/toolkit';
import { crudSlice } from './crud';

export const store = configureStore({
    reducer: {
        crud: crudSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
