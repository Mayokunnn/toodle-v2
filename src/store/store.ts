import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";

interface RootState {
  task: ReturnType<typeof taskReducer>;
}

const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});

export default store;
export type { RootState };
