import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function NoTask() {
  const filter = useSelector((state: RootState) => state.task.filter);
  return (
    <div className="h-14 px-3 w-full rounded-sm  dark:text-darkLightGrayishBlue text-darkVeryDesaturatedBlue bg-lightVeryLight dark:bg-darkVeryDesaturatedBlue  flex items-center gap-4">
      <label htmlFor="checkbox" className="h-full items-center flex">
        <input
          type="checkbox"
          name="checkbox"
          className="inputcheck"
          // checked={true}
        />
        <span className="w-5 border bg-transparent rounded-full h-5 border-lightDarkGrayishBlue dark:border-darkLightGrayishBlue"></span>
      </label>
      {filter === "all" && "No Tasks Added"}
      {filter === "active" && "No Active Tasks"}
      {filter === "completed" && "No Completed Tasks"}
    </div>
  );
}
