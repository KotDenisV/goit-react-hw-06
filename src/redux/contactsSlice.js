import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: [],

};

const slice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        deleteContacts: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        addContacts: (state, action) => {
            state.items.push(action.payload);
        },
    },
});

export const contactsReucer = slice.reducer;
export const { deleteContacts, addContacts } = slice.actions;