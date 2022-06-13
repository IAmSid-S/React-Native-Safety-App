import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { MockServiceProvider } from "../Services/MockServiceProvider";
import { ServiceProvider } from "../Services/ServiceProvider";
import { loggerMiddleware } from "./Middlewares/loggerMiddleware";
import { metaMiddleware } from "./Middlewares/metaMiddleware";
import { userMiddleware } from "./Middlewares/userMiddlewate";
import UserSlice from "./Slices/UserSlice";


const serviceProvider = new MockServiceProvider();

export const store = configureStore({
    reducer:{
        User: UserSlice
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(
            loggerMiddleware(serviceProvider),
            metaMiddleware(serviceProvider),
            userMiddleware(serviceProvider)
        )
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;