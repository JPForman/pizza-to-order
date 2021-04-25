import React, { useState, useEffect } from "react";

import WorkflowCard from "../components/WorkflowCard";
import "../scss/_storeApp.scss";

const StoreApp = ({ orderList, setOrderList }) => {

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
            {orderList.map((order) =>
                order.map((za) => za.status === 1 && <WorkflowCard za={za} />)
              )}
          </div>
          <div className="baking">
            <h3>Baking!</h3>
            {orderList.map((order) =>
                order.map((za) => za.status === 2 && <WorkflowCard za={za} />)
              )}
          </div>
          <div className="perfecting">
            <h3>Perfecting!</h3>
            {orderList.map((order) =>
              order.map((za) => za.status === 3 && <WorkflowCard za={za} />)
            )}
          </div>
          <div className="serving">
            <h3>Serving!</h3>
            {orderList.map((order) =>
              order.map((za) => za.status === 4 && <WorkflowCard za={za} />)
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default StoreApp;
