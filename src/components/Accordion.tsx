import { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const changeIndex = (elIdx: number) => {
    setActiveIdx(activeIdx === elIdx ? null : elIdx);
  };

  return (
    <div>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <button onClick={() => changeIndex(index)}>{item.title}</button>
            {activeIdx === index && <p>{item.content}</p>}
          </div>
        );
      })}
    </div>
  );
}
