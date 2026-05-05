import { memo, type FC } from "react";
import { useSelector } from "react-redux";
import tasksSlice from "../TaskComponent/tasks.slice.";
import TaskItem from "../TaskItem/TaskItem";

const TaskList: FC = memo(() => {
  const tasks = useSelector(tasksSlice.selectors.getTasks);

  return (
    <div>
      {tasks.length ? (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))
      ) : (
        <h1>No tasks</h1>
      )}
    </div>
  );
});

export default TaskList;
