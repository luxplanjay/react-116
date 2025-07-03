import axios from "axios";
import { useState, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import Timer from "./Timer";
import Sidebar from "./Sidebar";

export default function App() {
  const [clicks, setClicks] = useLocalStorage("my-clicks", 0);

  // const [clicks, setClicks] = useState(() => {
  //   const savedClicks = localStorage.getItem("my-clicks");
  //   if (savedClicks !== null) {
  //     return JSON.parse(savedClicks);
  //   }
  //   return 0;
  // });

  const [isVisible, setIsVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);

  const closeSidebar = () => setIsSidebarOpen(false);

  // useEffect(() => {
  //   localStorage.setItem("my-clicks", JSON.stringify(clicks));
  // }, [clicks]);

  // const [character, setCharacter] = useState(null);
  // const [count, setCount] = useState(1);

  // useEffect(() => {
  //   axios.get(`https://swapi.info/api/people/${count}`).then((response) => {
  //     setCharacter(response.data);
  //   });
  // }, [count]);

  return (
    <>
      <button onClick={() => setClicks(clicks + 1)}>Clicks {clicks}</button>
      <hr />
      <button onClick={openSidebar}>Open sidebar</button>
      {isSidebarOpen && <Sidebar onClose={closeSidebar} />}

      {/* <button onClick={() => setCount(count + 1)}>Count {count}</button>
      <pre>{JSON.stringify(character, null, 2)}</pre> */}
      <hr />
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible && <Timer />}
    </>
  );
}
