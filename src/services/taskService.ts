import axios from "axios";
import type { NewTaskData, Task, TaskUpdateData } from "../types/task";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const getTasks = async (query: string) => {
  const res = await axios.get<Task[]>(`/tasks`, {
    params: {
      search: query,
    },
  });
  return res.data;
};

export const deleteTask = async (taskId: string) => {
  const res = await axios.delete(`/tasks/${taskId}`);
  return res.data;
};

export const addTask = async (taskData: NewTaskData) => {
  const res = await axios.post<Task>("/tasks", taskData);
  return res.data;
};

export const updateTask = async (updatedTask: TaskUpdateData) => {
  const res = await axios.put<Task>(`/tasks/${updatedTask.id}`, updatedTask);
  return res.data;
};
