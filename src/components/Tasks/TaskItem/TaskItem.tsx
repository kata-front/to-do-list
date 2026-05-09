import { memo, useState, type ChangeEvent, type FC } from "react";
import type { Task } from "../../../utils/types";
import changeTaskSuccessedThunk from "../../../utils/thunks/changeTaskSuccessedTthunk";
import { useAppDispatch } from "../../../utils/store";

const TaskItem: FC<{
  task: Task;
}> = memo(({ task }) => {
  const dispatch = useAppDispatch();

  const [completed, setCompleted] = useState<boolean>(task.completed);
  const handler = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(changeTaskSuccessedThunk(task.id))
      setCompleted(e.target.checked);
  };

  return (
    <div>
      <span>{task.id}</span>
      <input type="checkbox" checked={completed} onChange={handler} />
      <span>{task.title}</span>
      <span>{task.createdAt}</span>
    </div>
  );
});

export default TaskItem;
