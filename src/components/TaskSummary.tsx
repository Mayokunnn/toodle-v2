import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { clearCompletedTasks } from "../store/taskSlice";

export default function TaskSummary() {
  const dispatch = useDispatch();
  const tasksArr = useSelector((state: RootState) => state.task.task);
  const numTasks = tasksArr.length;

  return (
    <div className="px-3 py-3 text-sm w-full bg-transparent flex items-center gap-4 justify-between">
      <span className="text-sm sm:text-md text-darkVeryDesaturatedBlue dark:text-darkLightGrayishBlue">
        {numTasks} items left
      </span>
      <div className="flex items-center gap-1 sm:gap-2 font-semibold ">
        <span className="text-xs sm:text-md text-darkVeryDesaturatedBlue dark:text-darkLightGrayishBlue cursor-pointer hover:text-brightBlue dark:hover:text-brightBlue">
          All
        </span>
        <span className="text-xs sm:text-md text-darkVeryDesaturatedBlue dark:text-darkLightGrayishBlue cursor-pointer hover:text-brightBlue dark:hover:text-brightBlue">
          Active
        </span>
        <span className="text-xs sm:text-md text-darkVeryDesaturatedBlue dark:text-darkLightGrayishBlue cursor-pointer hover:text-brightBlue dark:hover:text-brightBlue">
          Completed
        </span>
      </div>
      <span
        onClick={() => dispatch(clearCompletedTasks())}
        className="text-xs sm:text-md text-darkVeryDesaturatedBlue dark:text-darkLightGrayishBlue cursor-pointer hover:text-brightBlue dark:hover:text-brightBlue"
      >
        Clear completed
      </span>
    </div>
  );
}
