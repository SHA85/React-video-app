import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let cities = ["City 1", "City 2", "City 3"];
  let colors = ["Color 1", "Color 2", "Color 3"];
  let [alertVisible, setAlertVisiblity] = useState(false);
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        heading="Item List"
        items={cities}
        onSelectItem={handleSelectItem}
      />
      <ListGroup
        heading="Item List"
        items={colors}
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisiblity(false)}>
          Hello <span>Alert</span>
        </Alert>
      )}

      <Button onClick={() => setAlertVisiblity(true)}>Save</Button>
    </div>
  );
}

export default App;
