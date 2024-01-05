import TaskItem from "./TaskItem";
import TaskSummary from "./TaskSummary";
import { Reorder, useDragControls } from "framer-motion";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setTask } from "../store/taskSlice";

// const tasksArr = [
//   { task: "Complete frontend project", completed: false },
//   { task: "Learn Vue.js", completed: true },
//   { task: "Implement responsive design", completed: false },
//   { task: "Explore Node.js basics", completed: true },
//   { task: "Practice CSS animations", completed: false },
// ];
export default function TaskList() {
  const tasksArr = useSelector((state: RootState) => state.task.task);
  const tasks =
    tasksArr.length > 0 ? tasksArr : [{ taskName: "Add a task", id: 0 }];

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
      <Reorder.Group
        axis="y"
        values={tasksArr}
        onReorder={(task) => dispatch(setTask(task))}
        dragControls={controls}
        drag={tasks.some((task) => task.id === 1)}
        dragConstraints={constraintsRef}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        dragElastic={0.5}
        className="w-full divide-y-[0.5px] divide-darkVeryBlue dark:divide-darkGrayishBlue"
      >
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </Reorder.Group>
      <TaskSummary />
    </div>
  );
}
