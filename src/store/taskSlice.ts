import { RootState } from "./store"; // Assuming RootState is your overall application state
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  taskName: string; // Replace YourTaskType with the actual type
  completed: boolean;
  id: string;
}

const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

interface taskState {
  task: Task[];
  filter: string;
}

const initialState: taskState = {
  task: savedTasks,
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.task.push(action.payload);
      // Update local storage after adding a task
      localStorage.setItem("tasks", JSON.stringify(state.task));
    },
    deleteTask(state, action: PayloadAction<string>) {
      state.task = state.task.filter((task) => task.id !== action.payload);
    },
    updateTask(state, action: PayloadAction<string>) {
      // state.task = state.task.map((task) => ({
      //   ...task,
      //   completed: !task.completed,
      // }));

      state.task = state.task.map((task) => {
        if (task.id === action.payload) {
          const updatedTask = {
            ...task,
            completed: !task.completed,
          };
          localStorage.setItem(
            "tasks",
            JSON.stringify(
              state.task.map((t) =>
                t.id === action.payload ? updatedTask : t,
              ),
            ),
          );
          return updatedTask;
        }
        return task;
      });
    },
    setTask(state, action) {
      state.task = action.payload;
      localStorage.setItem("tasks", JSON.stringify(state.task));
    },
    clearCompletedTasks(state) {
      state.task = state.task.filter((task) => task.completed === false);
      localStorage.setItem("tasks", JSON.stringify(state.task));
    },
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

export const {
  addTask,
  deleteTask,
  setFilter,
  updateTask,
  setTask,
  clearCompletedTasks,
} = taskSlice.actions;

export default taskSlice.reducer;

const selectTasks = (state: RootState) => state.task.task;
const selectFilter = (state: RootState) => state.task.filter;

export const selectFilteredTasks = createSelector(
  [selectTasks, selectFilter],
  (tasks, filter) => {
    if (filter === "all") {
      return tasks;
    } else if (filter === "active") {
      return tasks.filter((task) => !task.completed);
    } else {
      return tasks.filter((task) => task.completed);
    }
  },
);
