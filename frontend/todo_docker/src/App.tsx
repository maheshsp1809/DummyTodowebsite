// App.tsx

import { useState, useEffect } from "react";
import { Todo } from "./interfaces";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]); // Define todos state

  useEffect(() => {
    // API call
    fetch("/api/todos")
      .then((res) => res.json())
      .then((data) => {
        // Set state to API response (Todo[])
        setTodos(data);
      });
  }, []);

  // Display todos
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
}

export default App;
