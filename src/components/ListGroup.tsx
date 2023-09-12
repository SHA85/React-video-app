//import { MouseEvent } from "react";

import { useState } from "react";

interface Props {
  heading: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup({ heading, items, onSelectItem }: Props) {
  //const handleClick = (e: MouseEvent) => console.log(e);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
