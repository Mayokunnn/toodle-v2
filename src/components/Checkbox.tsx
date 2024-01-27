import { useDispatch } from "react-redux";
import { TaskType } from "./TaskItem";
import { updateTask } from "../store/taskSlice";
import toast from "react-hot-toast";

interface checkBoxProps {
  task: TaskType;
}

export default function Checkbox({ task }: checkBoxProps) {
  const dispatch = useDispatch();
  return (
    <label htmlFor="checkbox" className="h-full items-center flex">
      <input
        type="checkbox"
        name="checkbox"
        className="inputcheck"
        // checked={true}
      />
      <span
        className={`customcheckbox bg-transparent ${
          task.completed ? "customcheckboxcomplete" : ""
        }  cursor-pointer w-5 border rounded-full h-5 border-lightDarkGrayishBlue dark:border-darkLightGrayishBlue`}
        onClick={() => {
          toast.success(
            <span
              style={{
                wordBreak: "break-word",
              }}
            >
              Task{" "}
              <span
                style={{
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  fontWeight: "bold",
                  fontStyle: "italic",
                }}
              >
                '{task.taskName}'
              </span>
              {!task.completed
                ? " marked as completed"
                : " task marked as uncompleted"}
            </span>,
          );
          dispatch(updateTask(task.id));
        }}
      ></span>
    </label>
  );
}

{
  /* <span
  className={`customcheckbox bg-transparent ${
    task.completed ? "customcheckboxcomplete" : ""
  }  cursor-pointer w-5 border rounded-full h-5 border-lightDarkGrayishBlue dark:border-darkLightGrayishBlue`}
  onClick={() => {
    dispatch(updateTask(task.id));
    dispatch(applyFilter(task.completed ? 'COMPLETED' : 'INCOMPLETE'));
  }} */
}
