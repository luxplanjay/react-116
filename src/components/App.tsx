import { useState } from "react";
import ClickCounter from "./ClickCounter";
import CountDisplay from "./CountDisplay";
import Accordion from "./Accordion";
import TagManager from "./TagManager/TagManager";

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setClicks(clicks + 1);

  const toggleText = () => setIsOpen(!isOpen);

  return (
    <>
      <CountDisplay count={clicks} />
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <ClickCounter value={clicks} onUpdate={handleClick} />

      <hr />
      <button onClick={toggleText}>{isOpen ? "Close" : "Open"}</button>
      {isOpen && <p>You can see me!!!</p>}
      <hr />
      <Accordion
        items={[
          { title: "Section 1", content: "Content of section 1" },
          { title: "Section 2", content: "Content of section 2" },
          { title: "Section 3", content: "Content of section 3" },
          { title: "Section 4", content: "Content of section 4" },
          { title: "Section 5", content: "Content of section 5" },
        ]}
      />
      <hr />
      <TagManager />
    </>
  );
}
