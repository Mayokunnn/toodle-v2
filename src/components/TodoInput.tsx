import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";

function TodoInput() {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();
  function handleAddTaskButtonClick() {
    if (!taskName) return;
    const task = {
      taskName,
      completed: false,
      id: crypto.randomUUID(),
    };
    dispatch(addTask(task));
    setTaskName("");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!taskName) return;
    const task = {
      taskName,
      completed: false,
      id: crypto.randomUUID(),
    };
    dispatch(addTask(task));
    setTaskName("");
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="w-full h-14 px-5 sm:px-3 bg-lightVeryLight dark:bg-darkVeryDesaturatedBlue py-1 rounded-md grid grid-cols-[auto_1fr] items-center gap-4"
    >
      <div className="h-full items-center flex">
        <span
          onClick={handleAddTaskButtonClick}
          className="customcheckbox bg-gradient-to-b from-gradientFirst to-gradientSecond cursor-pointer w-5 border rounded-full h-5 border-lightDarkGrayishBlue dark:border-lightVeryLight"
        ></span>
      </div>
      <input
        type="text"
        className="w-full h-full outline-none bg-transparent text-lightVeryDarkGrayishBlue  dark:text-lightVeryLight dark:placeholder:text-lightVeryLight "
        placeholder="Add a task..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
    </form>
  );
}

export default TodoInput;
