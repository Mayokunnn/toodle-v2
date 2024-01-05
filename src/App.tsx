import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TodoInput from "./components/TodoInput";
import "./index.css";

export default function App() {
  return (
    <div className="bg-contain contain bg-lightVeryLight bg-light-mode-mobile dark:bg-dark-mode-mobile md:dark:bg-dark-mode-desktop bg-no-repeat md:bg-light-mode-desktop font-josefin w-full  h-screen dark:bg-darkVeryBlue flex px-6 sm:px-16 py-12 sm:py-16">
      <div className="w-full mx-auto max-w-xl">
        <Header title="Todo" />
        <div className="mt-7 sm:mt-8 md:mt-12 flex flex-col gap-6 ">
          <TodoInput />
          <TaskList />
        </div>
      </div>
    </div>
  );
}
