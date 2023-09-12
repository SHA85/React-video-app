import { Key } from "react";

interface Props {
  key: Key;
  isActive?: boolean;
  label: string;
  onSelectItem: () => void;
}

function ListItem({ isActive = false, label, onSelectItem }: Props) {
  return (
    <li
      className={isActive ? "list-group-item active" : "list-group-item "}
      onClick={onSelectItem}
    >
      {label}
    </li>
  );
}

export default ListItem;
