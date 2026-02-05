import React, { useState, useEffect } from "react";
import "./TodoList.css";

const TodoList = () => {
  const[val, setval] = useState("");
  const[res, setRes] = useState(()=>{
    const store = localStorage.getItem("todo-item");
    return store ? JSON.parse(store) : val;
  });

  useEffect(()=>{
    localStorage.setItem("todo-item", JSON.stringify(res));
  }, [res]);

  const handleClick = () => {
    if(!val.trim()) return;
    let newObj = {
      id: new Date(),
      text: val,
      completed: false
    }
    setRes([newObj, ...res]);
    console.log("res", res);
    setval("");
  }

  const deleteItem = (id) => {
    let deletedItems = res.filter((item)=> item.id !== id);
    setRes(deletedItems);
  }

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="form">
        <input value={val} onChange={(e)=>setval(e.target.value)} placeholder="Enter Task" type="text" className="input-field"/>
        <button className="btn" onClick={handleClick}>Add Task</button>
      </div>
      {
        res.length > 0 ?
         (<table className="result">
          <tbody>
          {
          res.map((item)=>{
            return(
              <tr key={item.id}>
                <td>
                  <span>{item.text}</span>
                  <span onClick={()=>deleteItem(item.id)}>❌</span>
                </td>
              </tr>
            )
          })
        }
     </tbody>
      </table>) : (<p className="form">No task Added!</p>)
       }
       <p className="form">Total: {res.length}</p>
    </div>
  );
};

export default TodoList;
