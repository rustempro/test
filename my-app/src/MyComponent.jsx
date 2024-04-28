import { useState } from "react";

const getTimeFromDate = (date) => date.toISOString().substring(11, 19);

export const MyComponent = () => {
  const [obj, setObj] = useState({ a: 10, b: 15, c: 30 });

  // obj.a =20 // это иммутабельность

  if (obj.c === 30) {
    setObj({ ...obj, c: 50 });
  }

  return <div>{obj.c}</div>;
};

// const getValue = () => 123;

// export const MyComponent = (props) => {
//   const tagName = "div";

//   return (
//     <>
//       <label>document</label>

//       <div
//         className={tagName + "Element"}
//         style={{ width: "100px", marginTop: "10px" }}
//       >
//         {getValue()}
//       </div>
//     </>
//   );
// };
