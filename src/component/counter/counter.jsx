import { useState } from "react"
import counter from "./counter.css"
export default function Counter(){
    const[count,setCount]=useState(0);


    function parentincrement(by){
        setCount(count+by)
    }
    function parentdeccrement(by){
        setCount(count-by)
    }
    function ResetButton(){
        setCount(0)
    }
    return(
        <>
        <div className="counting">{count}</div>
        <CounterButton by={1} inc={parentincrement} dec={parentdeccrement}/>
      <CounterButton by={2} inc={parentincrement} dec={parentdeccrement}/>
      <CounterButton by={5} inc={parentincrement} dec={parentdeccrement}/>
      <button className="reset" onClick={ResetButton}>Reset</button>
        
        
        </>
    )
}





 function CounterButton({by,inc,dec}){

// const dtyle={
//     fontSize:"50px",
//     padding:"15px 30px",
//     backgroundColor:"green"
// }


 const[count,setCount]=useState(0);

function incrementCount(){
    setCount(count+by)
    inc(by)
    
}
function decrementCount(){
    setCount(count-by)
    dec(by)
}


    return(
   
      <div className="Counter">
       
     
        <button className="Increment" 
        onClick={incrementCount}
        
        
        >Increment {by}</button>


<button className="Increment" 
        onClick={decrementCount}

        
        
        >Decrement {by}</button>


       
       



    
   
   
   </div>



    )

}