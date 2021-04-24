import React from "react";

import "../scss/_storeApp.scss";

const StoreApp = ({ orderList, setOrderList }) => {
  // console.log('orderList store', orderList[0][0].pizza);

  if (orderList.length === 0) {
    return <h2>No Orders To Make :)</h2>;
  } else {
    return (
      <div className="store-app">
        <h2>The Pizza Workflow!</h2>
        <div className="phases">
          <div className="preparation">
            <h3>Preparing!</h3>
            {orderList.map((order) => order.map((za) => <h1>{za.pizza}</h1>))}
          </div>
          <div className="baking">
            <h3>Baking!</h3>
          </div>
          <div className="perfecting">
            <h3>Perfecting!</h3>
          </div>
          <div className="serving">
            <h3>Serving!</h3>
          </div>
        </div>
      </div>
    );
  }
};

export default StoreApp;
