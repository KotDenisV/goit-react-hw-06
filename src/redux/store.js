import { configureStore } from "@reduxjs/toolkit";
import { contactsReucer } from "./contactsSlice";

export const store = configureStore({
    reducer: {
        contacts: contactsReucer,
    }
}) 