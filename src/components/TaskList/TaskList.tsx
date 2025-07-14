import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Task, TaskUpdateData } from "../../types/task";
import css from "./TaskList.module.css";
import { deleteTask, updateTask } from "../../services/taskService";

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  const queryClient = useQueryClient();

  const deleteTaskMutation = useMutation({
    mutationFn: (taskId: string) => deleteTask(taskId),
    onSuccess() {
      // onSuccess(deletedTask) {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });

      // queryClient.setQueryData<Task[]>(["tasks"], (prevTasks) => {
      //   if (!prevTasks) return [];
      //   return prevTasks.filter((task) => task.id !== deletedTask.id);
      // });
    },
  });

  const handleDelete = (taskId: string) => {
    deleteTaskMutation.mutate(taskId);
  };

  const updateTaskMutation = useMutation({
    mutationFn: (updatedTask: TaskUpdateData) => updateTask(updatedTask),
    onSuccess(updatedTask) {
      queryClient.setQueryData<Task[]>(["tasks"], (prevTasks) => {
        if (!prevTasks) return [];

        return prevTasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        );
      });
    },
  });

  const handleUpdate = (task: Task) => {
    updateTaskMutation.mutate({
      id: task.id,
      completed: !task.completed,
    });
  };

  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li key={task.id} className={css.item}>
          <input
            type="checkbox"
            defaultChecked={task.completed}
            className={css.checkbox}
            onChange={() => handleUpdate(task)}
          />
          <span className={css.text}>{task.text}</span>
          <button
            type="button"
            className={css.button}
            onClick={() => handleDelete(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
