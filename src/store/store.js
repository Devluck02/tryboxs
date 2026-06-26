import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import couponReducer from "./slices/couponSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    coupon: couponReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore non-serializable static image imports in coupon savedCoupons
        ignoredPaths: ["coupon.savedCoupons"],
      },
    }),
});

/** @typedef {ReturnType<typeof store.getState>} RootState */
/** @typedef {typeof store.dispatch} AppDispatch */
