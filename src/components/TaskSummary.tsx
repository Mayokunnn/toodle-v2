import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { clearCompletedTasks, setFilter } from "../store/taskSlice";

const filters = ["all", "active", "completed"];

export default function TaskSummary() {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.task.task);
  const activeFilter = useSelector((state: RootState) => state.task.filter);

  const numTasks = tasks.filter((task) => task.completed === false).length;

  function handleFilterClick(filter: string) {
    dispatch(setFilter(filter));
  }

  return (
    <div className="px-3 py-3 text-sm w-full bg-transparent flex items-center gap-4 justify-between">
      <span className="text-sm sm:text-md text-darkVeryDesaturatedBlue dark:text-darkLightGrayishBlue">
        {numTasks > 0 ? `${numTasks} items left` : "No tasks left"}{" "}
      </span>
      <div className="flex items-center gap-1 sm:gap-2 font-semibold ">
        {filters.map((filter, i) => {
          console.log(`Filter: ${filter}, Active Filter: ${activeFilter}`);
          return (
            <span
              key={i}
              onClick={() => handleFilterClick(filter)}
              className={`text-xs sm:text-md capitalize  text-darkVeryDesaturatedBlue dark:text-darkLightGrayishBlue cursor-pointer hover:text-brightBlue dark:hover:text-brightBlue ${
                filter === activeFilter
                  ? "text-brightBlue dark:text-brightBlue"
                  : ""
              }`}
            >
              {filter}
            </span>
          );
        })}
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
