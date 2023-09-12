//import { MouseEvent } from "react";

import { useState } from "react";
import ListItem from "./ListItem";

interface Props {
  heading: string;
  items: string[];
}

function ListGroup({ heading, items }: Props) {
  //const handleClick = (e: MouseEvent) => console.log(e);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <ListItem
            key={index}
            label={item}
            isActive={index === selectedIndex}
            onSelectItem={() => {
              setSelectedIndex(index);
            }}
          />
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
