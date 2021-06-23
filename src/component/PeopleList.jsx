import { useState, useReducer } from "react";

let initialState = [
  {
    _id: "60d0926f61cdb83f9eb04bce",
    index: 0,
    isActive: false,
    age: 29,
    eyeColor: "green",
    name: "Juarez Webb",
    email: "juarezwebb@ovation.com",
    phone: "+1 (830) 509-3108",
  },
  {
    _id: "60d0926fcab27f8380bc4ac8",
    index: 1,
    isActive: false,
    age: 34,
    eyeColor: "green",
    name: "Jaime Torres",
    email: "jaimetorres@ovation.com",
    phone: "+1 (821) 471-3827",
  },
  {
    _id: "60d0926f26b48dcdca8cb3e3",
    index: 2,
    isActive: true,
    age: 38,
    eyeColor: "blue",
    name: "Quinn Lee",
    email: "quinnlee@ovation.com",
    phone: "+1 (964) 561-2148",
  },
  {
    _id: "60d0926fd832704f70af264b",
    index: 3,
    isActive: true,
    age: 22,
    eyeColor: "blue",
    name: "Maryanne Cherry",
    email: "maryannecherry@ovation.com",
    phone: "+1 (864) 476-2504",
  },
  {
    _id: "60d0926f88c84e13c291960f",
    index: 4,
    isActive: true,
    age: 26,
    eyeColor: "green",
    name: "Sykes Combs",
    email: "sykescombs@ovation.com",
    phone: "+1 (925) 551-3902",
  },
];
let reducer = (state, action) => {
  let cloneState = [...state];
  switch (action.type) {
    case "changeStatus": {
      const cloneState = state.map((item) => {
        if (item._id === action.payload._id) {
          return { ...action.payload, isActive: !action.payload.isActive };
        } else return item;
      });
      return cloneState;
      //  console.log(action.payload._id);
    }

    default:
      return state;
  }
};

export default function PeopleList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {state.map((person) => {
        return (
          <ul>
            <li>name: {person.name}</li>;<li>age: {person.age}</li>;
            <li>email: {person.email}</li>;
            <li>status: {person.isActive ? "Active" : "Deactive"}</li>;
            <button
              onClick={() =>
                dispatch({ type: "changeStatus", payload: person })
              }
            >
              change status
            </button>
          </ul>
        );
      })}
    </>
  );
}
