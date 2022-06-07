import { configureStore } from "@reduxjs/toolkit";
import { ServiceProvider } from "../Services/ServiceProvider";
import { loggerMiddleware } from "./Middlewares/loggerMiddleware";
import UserSlice from "./Slices/UserSlice";


const serviceProvider = new ServiceProvider();

export const store = configureStore({
    reducer:{
        User: UserSlice
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(
            loggerMiddleware(serviceProvider)
        )
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;