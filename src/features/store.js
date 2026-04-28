import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import headMenu from "./slices/headMenu";
import footerMenu from "./slices/footerMenu";
import siteSettings from "./slices/siteSettings";
import blog from "./slices/blog";
import helpCenter from "./slices/helpCenter";
import team from "./slices/team";
import submission from "./slices/submission";
import dynamicRootPage from "./slices/dynamicRootPage";
import portfolio from "./slices/portfolio";
import home from "./slices/home";
import privacy from "./slices/privacy";
import intern from "./slices/intern";
import authentication from "./slices/authentication";
import countryStateCity from "./slices/countryStateCity";
import services from "./slices/services";
import dashboard from "./slices/dashboard";
import references from "./slices/references";

const rootReducer = combineReducers({
  headMenu,
  footerMenu,
  siteSettings,
  dynamicRootPage,
  blog,
  helpCenter,
  team,
  submission,
  portfolio,
  home,
  privacy,
  intern,
  countryStateCity,
  authentication,
  services,
  dashboard,
  references,
});

// Redux-persist configuration
const persistConfig = {
  key: "BABVIPSOFTWARES",
  version: 1,
  storage,
  transforms: [
    encryptTransform({
      secretKey: `${import.meta.env.VITE_REACT_APP_REDUX_PERSIST_SECRET_KEY}`,
      onError: (err) => {
        // Handle encryption errors if any
      },
    }),
  ],
};

// Persisted root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure and create the Redux store
const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
