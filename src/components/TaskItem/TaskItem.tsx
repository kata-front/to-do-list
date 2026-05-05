import { memo, useState, type FC } from "react";
import type { Task } from "../../utils/types";

const TaskItem: FC<{
  task: Task;
}> = memo(({ task }) => {
  const [completed, setCompleted] = useState<boolean>(task.completed);

  return (
    <div>
      <span>{task.id}</span>
      <input type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
      <span>{task.title}</span>
      <span>{task.createdAt}</span>
    </div>
  );
});

export default TaskItem;
