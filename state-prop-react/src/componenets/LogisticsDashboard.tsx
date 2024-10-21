import React, { useState } from 'react';

import '../App.css';
import WarehouseInventory from './WarehouseInventory';
import DeliveryStatus from './DeliveryStatus';

interface Truck {
  id: number;
  dispatchedCount: number;
}

const LogisticsDashboard: React.FC = () => {
  const [warehouseItems, setWarehouseItems] = useState<number>(100);
  //const [isTruckLeft, setIsTruckLeft] = useState<boolean>(false);
  const [trucks, setTrucks] = useState<Truck[]>([]); 

  // const handleTruckDeparture = (count: number) => {
  //   setWarehouseItems(prevItems => Math.max(prevItems - count, 0));
  //   setIsTruckLeft(true);
  // };

  const handleTruckDeparture = (count: number) => {
    if (warehouseItems >= count) {
      const newTruck: Truck = {
        id: trucks.length + 1,
        dispatchedCount: count,
      };
      setTrucks(prevTrucks => [...prevTrucks, newTruck]);
      setWarehouseItems(prevItems => prevItems - count);
    } else {
      alert("Not enough items in the warehouse to dispatch.");
    }
  };

//   return (
//     <div className="dashboard">
//       <h1>Logistics Dashboard</h1>
//       <div className="dashboard-content">
//         <WarehouseInventory itemCount={warehouseItems} />
//         <DeliveryStatus isTruckLeft={isTruckLeft} onTruckDeparture={handleTruckDeparture} />
//       </div>
//     </div>
//   );
// };

return (
  <div className="dashboard">
    <h1>Logistics Dashboard</h1>
    <div className="dashboard-content">
      <WarehouseInventory itemCount={warehouseItems} />
      <DeliveryStatus onTruckDeparture={handleTruckDeparture} />
    </div>
    <div className="truck-status">
      <h2>Dispatched Trucks</h2>
      {trucks.map(truck => (
        <p key={truck.id}>Truck {truck.id} has left with {truck.dispatchedCount} items.</p>
      ))}
    </div>
  </div>
);
};

export default LogisticsDashboard;
