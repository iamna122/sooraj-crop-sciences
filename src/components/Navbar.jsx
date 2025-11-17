// // src/components/Navbar.jsx
// import React from "react";
// import { Link } from "react-router-dom";

// /** 
//  * Simple Navbar component — default export
//  */
// export default function Navbar() {
//   return (
//     <nav style={{borderBottom:"1px solid rgba(0,0,0,0.06)", padding:"14px 0"}}>
//       <div className="container" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
//         <div style={{display:"flex",alignItems:"center",gap:12}}>
//           <img src="/images/logo.png" alt="Sooraj Crop Sciences" style={{height:44}} onError={(e)=>{e.target.style.display='none'}}/>
//           <div style={{fontWeight:800,color:"var(--accent)"}}>Sooraj Crop Sciences</div>
//         </div>

//         <div style={{display:"flex",gap:14}}>
//           <Link to="/" style={{textDecoration:"none",color:"var(--muted)",fontWeight:600}}>Home</Link>
//           <Link to="/about" style={{textDecoration:"none",color:"var(--muted)",fontWeight:600}}>About</Link>
//           <Link to="/products" style={{textDecoration:"none",color:"var(--muted)",fontWeight:600}}>Products</Link>
//           <Link to="/contact" style={{textDecoration:"none",color:"var(--muted)",fontWeight:600}}>Contact</Link>
//           <Link to="/Faqs" style={{textDecoration:"none",color:"var(--muted)",fontWeight:600}}>Faqs</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }
