import { useState } from "react";

const getTimeFromDate = (date) => date.toISOString().substring(11, 19);

export const MyComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  setTimeout(() => {
    setCurrentDate(new Date());
  }, 1000);

  return <div>{getTimeFromDate()}</div>;
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
