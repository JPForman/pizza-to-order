import React, { useState, useEffect } from "react";

import WorkflowCard from "../components/WorkflowCard";
import "../scss/_storeApp.scss";

const StoreApp = ({ orderList, setOrderList }) => {
  const [preparingList, setPreparingList] = useState(orderList);
  const [bakingList, setBakingList] = useState(orderList);
  const [perfectingList, setPerfectingList] = useState(orderList);
  const [servingList, setServingList] = useState(orderList);

  // useEffect(() => {
  //   return () => {
  //     if (orderList.length === 1) {
  //       setPreparingList(orderList[0].filter((el) => el.status === 1));
  //     } else {
  //       setPreparingList();
  //     }
  //     if (orderList.length === 2) {
  //       setBakingList(orderList[0].filter((el) => el.status === 2));
  //     } else {
  //       setBakingList();
  //     }
  //     if (orderList.length === 3) {
  //       setPerfectingList(orderList[0].filter((el) => el.status === 3));
  //     } else {
  //       setPerfectingList();
  //     }
  //     if (orderList.length === 4) {
  //       setServingList(orderList[0].filter((el) => el.status === 4));
  //     } else {
  //       setServingList();
  //     }

  //   };
  // }, [setOrderList()]);

  console.log(
    "preparingList",
    preparingList[0],
    'bakingList', bakingList, 
    'orderList', orderList
    // orderList[0].filter((el) => el.status === 1)
  );

  if (orderList.length === 0) {
    return <h2>No Orders To Make :)</h2>;
  } else {
    return (
      <div className="store-app">
        <h2>The Pizza Workflow!</h2>
        <hr />
        <div className="phases">
          <div className="preparation">
            <h3>Preparing!</h3>
            {preparingList &&
              preparingList.map((order) =>
                order.map((za) => <WorkflowCard za={za} />)
              )}
          </div>
          <div className="baking">
            <h3>Baking!</h3>
            {bakingList &&
              bakingList.map((order) =>
                order.map((za) => <WorkflowCard za={za} />)
              )}
          </div>
          <div className="perfecting">
            <h3>Perfecting!</h3>
            {perfectingList.map((order) =>
              order.map((za) => <WorkflowCard za={za} />)
            )}
          </div>
          <div className="serving">
            <h3>Serving!</h3>
            {servingList.map((order) =>
              order.map((za) => <WorkflowCard za={za} />)
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default StoreApp;
