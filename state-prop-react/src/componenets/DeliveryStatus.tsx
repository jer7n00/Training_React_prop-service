import React,{useState} from 'react';

// Define props for DeliveryStatus
// interface DeliveryStatusProps {
//   isTruckLeft: boolean;
//   onTruckDeparture: (count:number) => void; // Function to call when the truck leaves
// }

interface DeliveryStatusProps {
  onTruckDeparture: (count: number) => void; // Function to call when the truck leaves
}

// const DeliveryStatus: React.FC<DeliveryStatusProps> = ({ isTruckLeft, onTruckDeparture }) => {
//   const [dispatchCount, setDispatchCount] = useState<number>(5);

//   const handleDispatch = () => {
//     if (dispatchCount >= 5 && dispatchCount <= 20) {
//       onTruckDeparture(dispatchCount);
//     } else {
//       alert("Please enter a number between 5 and 20.");
//     }
//   };
//   return (
//     <div className="delivery-status">
//       <h2>Delivery Status</h2>
//       <p>{isTruckLeft ? "The truck has left the warehouse." : "The truck is still in the warehouse."}</p>
//       {/* Button to dispatch the truck */}
//       {!isTruckLeft && (
//         <>
//           <input
//             type="number"
//             value={dispatchCount}
//             min={5}
//             max={20}
//             onChange={(e) => setDispatchCount(Number(e.target.value))}
//           />
//           <button onClick={handleDispatch}>Dispatch Truck</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default DeliveryStatus;


const DeliveryStatus: React.FC<DeliveryStatusProps> = ({ onTruckDeparture }) => {
  const [dispatchCount, setDispatchCount] = useState<number>(5);

  const handleDispatch = () => {
    if (dispatchCount >= 5 && dispatchCount <= 20) {
      onTruckDeparture(dispatchCount);
      setDispatchCount(5); // Reset dispatch count after dispatch
    } else {
      alert("Please enter a number between 5 and 20.");
    }
  };

  return (
    <div className="delivery-status">
      <h2>Delivery Status</h2>
      <input
        type="number"
        value={dispatchCount}
        min={5}
        max={20}
        onChange={(e) => setDispatchCount(Number(e.target.value))}
      />
      <button onClick={handleDispatch}>Dispatch Truck</button>
    </div>
  );
};

export default DeliveryStatus;
