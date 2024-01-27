import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{ margin: "5px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          // style: {
          //   fontSize: "1rem",
          //   backgroundColor: "hsl(235, 24%, 19%)",
          //   boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
          //   color: "hsl(236, 33%, 92%)",
          // },
          className:
            "dark:text-darkLightGrayishBlue bg-lightVeryLight dark:bg-darkVeryDesaturatedBlue text-lightVeryDarkGrayishBlue ",
        }}
      />
    </Provider>
  </React.StrictMode>,
);
