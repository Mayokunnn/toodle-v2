import { Reorder } from "framer-motion";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../store/taskSlice";
import Checkbox from "./Checkbox";

interface TaskType {
  taskName: string;
  completed: boolean;
  id: string;
}

interface taskProps {
  task: TaskType;
}

function TaskItem({ task }: taskProps) {
  const dispatch = useDispatch();
  // const { task: todo } = task;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Reorder.Item
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      value={task}
      className="cursor-pointer h-14 px-3 w-full rounded-sm  bg-lightVeryLight dark:bg-darkVeryDesaturatedBlue hover:bg-lightVeryGrayishBlue dark:hover:bg-darkVeryBlue flex items-center gap-4"
    >
      <Checkbox task={task} />
      <div className="flex items-center justify-between w-full">
        <p
          className={`text-sm sm:text-md  ${
            task.completed
              ? "line-through dark:text-darkVeryGrayishBlue text-lightDarkGrayishBlue"
              : " dark:text-darkLightGrayishBlue text-darkVeryDesaturatedBlue"
          }`}
        >
          {task.taskName}
        </p>
        {isHovered && (
          <span
            onClick={() => dispatch(deleteTask(task.id))}
            className="px-5 text-2xl text-lightVeryDarkGrayishBlue dark:text-darkLightGrayishBlue"
          >
            &times;
          </span>
        )}
      </div>
    </Reorder.Item>
  );
}

export default TaskItem;
export type { TaskType };
