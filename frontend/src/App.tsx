import axios from 'axios';
import { useState, useEffect } from 'react'
import './App.css'

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  // :todoを格納している変化があったときに再描画
  useEffect(() => {
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
      })
  };

  const putTodo = (id: any) => {
    axios.put<Todo[]>(`//localhost:8000/api/todo/${4}/`,({"title":"puted"}))
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
              [{todo.completed ? '✅' : '　'}]{todo.title}
            </li>
          ))}
        </ul>
        <div>
          <button onClick={()=>addTodo({ "title": "on", "completed": false })}>
            click me
          </button>
          
          <button onClick={()=>deleteTodo(5)}>
            delete
          </button>
          <button onClick={()=>putTodo(4)}>
            put
          </button>
        </div>
      </div>
    </>
  )
}

export default App
