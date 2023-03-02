import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CrudState {
    rows: Array<Object>,
    row: Object,
    errorMessage: undefined,
    loadingData: true,
}
const initialState: CrudState = {
    rows: [],
    row: {},
    errorMessage: undefined,
    loadingData: true,
};

export const crudSlice = createSlice({
    name: 'crud',
    initialState,
    reducers: {
        onLoadResults: (state, action) => {
            state.rows = action.payload;
            state.row = {};
            state.errorMessage = undefined;
        },
        onLoadActiveResult: (state, action) => {
            state.row = state.rows.find((result) => result.id === action.payload);
        },
        onEditResultDetail: (state, { payload }) => {
            state.rows = state.rows.map((result) => result.id === payload.id ? { ...result, ...payload } : result);
            state.row = state.rows.find((result) => result.id === payload.id);
        },
        onEditResult: (state, { payload }) => {
            state.rows = state.rows.map((result) => result.id === payload.id ? { ...result, ...payload } : result);
        },
        onCleanState: (state) => {
            state.rows = [];
            state.row = {};
            state.errorMessage = undefined;
        },
        onLoadError: (state, action) => {
            state.rows = [];
            state.row = {};
            state.errorMessage = action.payload;
        },
        onLoadingData: (state, action) => {
            state.loadingData = action.payload;
        },
    },
});

export const {
    onLoadResults,
    onLoadActiveResult,
    onEditResultDetail,
    onEditResult,
    onCleanState,
    onLoadError,
    onLoadingData
} = crudSlice.actions;
