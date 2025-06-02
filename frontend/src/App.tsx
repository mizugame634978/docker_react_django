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
  console.log(todos);

  return (
    <>
      <div>
        <h1>TODOアプリ</h1>
        <ul>
        {todos.map(todo => (
          // todo.id
          <li key={todo.id}>
            {todo.title} [{todo.completed ? '✅' : '❌'}]
          </li>
        ))}
      </ul>
      </div>
    </>
  )
}

export default App
