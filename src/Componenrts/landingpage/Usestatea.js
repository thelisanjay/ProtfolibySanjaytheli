
import React,{ useState } from "react";
  

const Usestatea = () => {
 const [count, setcount] = useState (0);
 return (
   <>
     <div>
       <label>Name :</label>
       <input placeholder=" enter name " />
       <lable>Password:</lable>
       <input placeholder=" enter name " />
       <div>count: {count}</div>
       <button onClick={() => setcount(count + 1)}>count</button>
     </div>
     <button onClick={() => setcount(count == 0 )}>count</button>
   </>
 );
}
export default Usestatea;