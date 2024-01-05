import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface taskType {
  taskName: string; // Replace YourTaskType with the actual type
  completed: boolean;
  id: string;
}

const initialState: { task: taskType[] } = {
  task: [
    {
      taskName: "Complete frontend project",
      completed: false,
      id: crypto.randomUUID(),
    },

    { taskName: "Learn Vue.js", completed: true, id: crypto.randomUUID() },
    {
      taskName: "Implement responsive design",
      completed: true,
      id: crypto.randomUUID(),
    },
    {
      taskName: "Explore Node.js basics",
      completed: true,
      id: crypto.randomUUID(),
    },
    {
      taskName: "Practice CSS animations",
      completed: false,
      id: crypto.randomUUID(),
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<taskType>) {
      state.task.push(action.payload);
    },
    deleteTask(state, action: PayloadAction<string>) {
      state.task = state.task.filter((task) => task.id !== action.payload);
    },
    updateTask(state) {
      state.task = state.task.map((task) => ({
        ...task,
        completed: !task.completed,
      }));
    },
    setTask(state, action) {
      state.task = action.payload;
    },
    clearCompletedTasks(state) {
      state.task = state.task.filter((task) => task.completed === false);
    },
  },
});

export const { addTask, deleteTask, updateTask, setTask, clearCompletedTasks } =
  taskSlice.actions;

export default taskSlice.reducer;
