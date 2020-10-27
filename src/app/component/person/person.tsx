import React from "react";

export interface PersonProps {
  name: string;
  age: number;
  click: (event: React.MouseEvent) => void;
}

export const Person = (props: PersonProps) => {
  return (
    <div>
      <div> Name is : {props.name}</div>
      <div> age is : {props.age}</div>
      <div> value is : {process.env.REACT_APP_VAL1}</div>
      <button onClick={props.click}>Increase Age</button>
    </div>
  );
};
