import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store from "./features/store.js";
import persistStore from "redux-persist/es/persistStore.js";
import { injectStore } from "./services/axiosInterceptor.js";

let persistor = persistStore(store);
injectStore(store);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);
