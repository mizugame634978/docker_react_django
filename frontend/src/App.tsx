import axios from 'axios';
import { useState, useEffect } from 'react'
import './App.css'

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};
type insertTodo={
title:string;
completed:boolean;
};
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inserTodoData, setInsertTodoData] = useState<string>();
  const [deleteTodoData, setDeleteTodoData] = useState<number>();
  const [updateTodoData, setUpdateTodoData] = useState([]);
  // :todoを格納している変化があったときに再描画
  useEffect(() => {//Todo: delete時に再描画されないので修正
    axios.get<Todo[]>("//localhost:8000/api/todo/")//語尾にはスラッシュが必要（ DEFAULT_ROUTER や APIViewを使っているため）
      .then(res => {
        setTodos(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.error('APIエラー:', err);
      });
  }, []);
  // console.log(todos);

  const addTodo = (data: any) => {

    axios.post<Todo[]>("//localhost:8000/api/todo/", data)
      .then(() => {
        console.log("post success");
      })
      .catch(err => {
        console.log("error", err);
      })
  };

  const deleteTodo = (id: any) => {
    axios.delete<Todo[]>(`//localhost:8000/api/todo/${id}/`)
      .then(() => {
        console.log("delete success");
      })
      .catch(err => {
        console.log("error", err);
        console.log(id);
        
      })
  };

  const putTodo = (id: any) => {
    axios.put<Todo[]>(`//localhost:8000/api/todo/${4}/`, ({ "title": "puted" }))
      .then(() => {
        console.log("put success");
      })
      .catch(err => {
        console.log("error", err);
      })
  };
  //  


  return (
    <>
      <div>
        <h1>TODOアプリ</h1>
        <ul>
          {todos.map(todo => (
            // todo.id
            <li key={todo.id}>
              [{todo.completed ? '✅' : '　'}]{todo.title}{todo.id}
            </li>
          ))}
        </ul>
        <div>
          <input type="text" onChange={(event)=>setInsertTodoData(event.target.value)}/>
          <button onClick={() => addTodo({ "title": inserTodoData, "completed": false })}>
            insert
          </button><br />

          <input type="number"  onChange={(event) => setDeleteTodoData(Number(event.target.value))}/>
          <button onClick={() => deleteTodo(deleteTodoData)}>
            delete
          </button><br />
          <input type="number" />
          <input type="text" onChange={(event)=>setUpdateTodoData(event.target.value)}/>
          <button onClick={() => putTodo(4)}>
            put
          </button>
        </div>
      </div>
    </>
  )
}

export default App
