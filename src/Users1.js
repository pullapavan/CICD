// import React, { useCallback, useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import usePrompt from "./hooks";
// // import useBeforeUnload} from "./hooks";
// // import { UNSAFE_NavigationContext as NavigationContext } from "react-router-dom";
// // import {
// //   useBeforeUnload as _useBeforeUnload,
// //   unstable_usePrompt as usePrompt,
// // } from "react-router-dom";

// export default function Users() {
//   const [formChanged, setFormChanged] = useState(false);
//   const navigate = useNavigate();
//   const flag = useRef(false);
//   const initialInputValue = useRef("");

//   usePrompt();

//   //   useEffect(() => {
//   //     initialInputValue.current = ""; // Reset the initial value on mount
//   //   }, []);

//   //   useEffect(() => {
//   //     const unblock = navigate((location) => {
//   //         console.log("navigate function called");
//   //       if (formChanged) {
//   //         flag.current = true;
//   //         return "You have unsaved changes. Are you sure you want to leave this page?";
//   //       }
//   //       return true;
//   //     });

//   //     return () => {
//   //       if (flag.current) unblock();
//   //     };
//   //   }, [formChanged, navigate]);

//   return (
//     <div>
//       <input type="text" onChange={() => setFormChanged(true)} />
//     </div>
//   );
// }
