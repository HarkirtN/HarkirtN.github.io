//import { MouseEvent } from "react";
import { MouseEventHandler, useState } from "react";

// if you want different list, and dont want to make different listGroups
// use props first specify the object {items:[], heading: string }
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //let items = ["New Zealand", "New York", "Australia", "Scotland"]; moved to App.tsx
  //let selectedIndex = 0; // if you do 0 then first item is selected

  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //arr[0] // variable selectedIndex
  //arr[1] // updater function
  // reacts updates the DOM and the state of the compnent changing, that is why we
  // need useState = selectedIndex is the current index, setSelectedIndex help react update

  const onSubmitEvent = (event: MouseEvent) => console.log("clicked");
  //event handler
  // const handleClick = (event: MouseEvent) => console.log(event);
  // you will get error in TS if you dont specify type, need to import the type and then can acess
  //it using a function

  //const getMessage = () => {
  //  return items.length === 0 ? <p>No items found</p> : null;
  //}; use a function when you need to pass different parameters

  // if (items.length === 0);
  // return (
  //  <>
  //    <h1>List</h1>
  //    <p> No items found</p>
  //   </>
  // );

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li> // added {} because jsx/react only allows html elements or react components
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

// can add fragments  import {Fragments } from react
// wrap the text in <fragment> instead of divs as react only lies one element at a time

// need to add key because react needs unique key - when using map so it can keep track of items when
//adding or removing

// to add prettier go to view > command palette > configue > select prettier
