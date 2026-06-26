import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  copiedCodes: [],        // tracks which coupon codes were copied this session
  savedCoupons: [],       // user-saved coupons (requires auth when backend ready)
  recentlyViewed: [],     // recently viewed store slugs
};

const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {
    markCopied(state, action) {
      const code = action.payload;
      if (!state.copiedCodes.includes(code)) {
        state.copiedCodes.push(code);
      }
    },
    saveCoupon(state, action) {
      const coupon = action.payload;
      const exists = state.savedCoupons.find((c) => c.id === coupon.id);
      if (!exists) state.savedCoupons.push(coupon);
    },
    removeSavedCoupon(state, action) {
      state.savedCoupons = state.savedCoupons.filter((c) => c.id !== action.payload);
    },
    addRecentStore(state, action) {
      const slug = action.payload;
      state.recentlyViewed = [slug, ...state.recentlyViewed.filter((s) => s !== slug)].slice(0, 10);
    },
    clearSession(state) {
      state.copiedCodes = [];
      state.recentlyViewed = [];
    },
  },
});

export const { markCopied, saveCoupon, removeSavedCoupon, addRecentStore, clearSession } =
  couponSlice.actions;

export default couponSlice.reducer;
