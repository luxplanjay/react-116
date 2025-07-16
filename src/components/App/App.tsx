import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import TaskList from "../TaskList/TaskList";
import Modal from "../Modal/Modal";
import TaskForm from "../TaskForm/TaskForm";
import { getTasks } from "../../services/taskService";
import css from "./App.module.css";

import { useDebouncedCallback } from "use-debounce";
import SearchBox from "../SearchBox/SearchBox";

const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return [isOpen, open, close];
};

export default function App() {
  const [isModalOpen, openModal, closeModal] = useToggle();

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

  const [searchQuery, setSearchQuery] = useState("");
  const updateSearchQuery = useDebouncedCallback(setSearchQuery, 300);

  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => getTasks(searchQuery),
  });

  return (
    <div className={css.container}>
      <header className={css.header}>
        <SearchBox value={searchQuery} onSearch={updateSearchQuery} />
        <button className={css.createButton} onClick={openModal}>
          Create task
        </button>
      </header>

      {isLoading && <strong className={css.loading}>Loading tasks...</strong>}
      {data && !isLoading && <TaskList tasks={data} />}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <TaskForm onSuccess={closeModal} />
        </Modal>
      )}
    </div>
  );
}
