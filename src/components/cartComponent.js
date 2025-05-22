// import React from 'react';
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

// export default function CartComponent({ cartItems }) {
//   const totalAmount = cartItems.reduce((total, item) => total + parseFloat(item.offerprice), 0);

//   return (
//     <div style={{ padding: '20px', border: '1px solid #dcdcdc', borderRadius: '10px', marginTop: '20px' }}>
//       <h3>Cart</h3>
//       {cartItems.map((item) => (
//         <div key={item.Productid} style={{ marginBottom: '10px' }}>
//           <div>{item.Productname}</div>
//           <div>
//             <CurrencyRupeeIcon style={{ width: '15px' }} />
//             {item.offerprice}
//           </div>
//         </div>
//       ))}
//       <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
//         Total: <CurrencyRupeeIcon style={{ width: '15px' }} />
//         {totalAmount.toFixed(2)}
//       </div>
//     </div>
//   );
// }
