import TaskItem from "./TaskItem";
import TaskSummary from "./TaskSummary";
import { Reorder, useDragControls } from "framer-motion";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredTasks, setTask } from "../store/taskSlice";
import NoTask from "./NoTask";
import toast from "react-hot-toast";

// const tasksArr = [
//   { task: "Complete frontend project", completed: false },
//   { task: "Learn Vue.js", completed: true },
//   { task: "Implement responsive design", completed: false },
//   { task: "Explore Node.js basics", completed: true },
//   { task: "Practice CSS animations", completed: false },
// ];
export default function TaskList() {
  const tasksArr = useSelector(selectFilteredTasks);

  const dispatch = useDispatch();
  const controls = useDragControls();
  const constraintsRef = useRef(null);

  // function handleActiveFilter() {
  //    return tasksArr.filter((task) => task.completed === false);

  // }

  return (
    <div
      ref={constraintsRef}
      className="w-full shadow-2xl divide-y-[0.5px] rounded-md bg-lightVeryLight dark:bg-darkVeryDesaturatedBlue divide-darkVeryBlue dark:divide-darkGrayishBlue "
    >
      {tasksArr.length < 1 ? (
        <NoTask />
      ) : (
        <Reorder.Group
          axis="y"
          values={tasksArr}
          onReorder={(task) => {
            toast.success("Task moved successfully");
            dispatch(setTask(task));
          }}
          dragControls={controls}
          drag
          dragConstraints={constraintsRef}
          className="w-full divide-y-[0.5px] divide-darkVeryBlue dark:divide-darkGrayishBlue"
        >
          {tasksArr.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </Reorder.Group>
      )}
      <TaskSummary />
    </div>
  );
}
