import React,{useState,useReducer} from "react";
const initialState = 0;
const reducerfn =(state,action) =>{
    switch(action){
        case "add":
            return state + 1;
        case "subract":
            return state - 1;
        default:
            return state
    }
}
const UseReducer = () => {
    // const [count,dispatch] = useReducer(reducerfn,initialState);
    const [count,setCount] = useState(initialState);
    return(
        <>
            <h1>Example for useReducer Hook</h1>
            <p className="bg-primary text-light text-center">{count}</p>
            {/* <button onClick={()=> dispatch("add")}>Add</button>
            <button onClick={()=> dispatch("subract")}>Subtract</button> */}
            <button onClick={()=>setCount(count+1)}>Add</button>
            <button onClick={()=>setCount(count-1)}>Subtract</button>
        </>
    )
}

export default UseReducer;