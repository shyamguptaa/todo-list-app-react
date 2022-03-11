import { useState } from "react";
import { Footer } from "./MyComponents/Footer";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";

function App() {
  let data = [
    {
      sno: 1,
      title: "mareket",
      desc: "go market",
    },
    {
      sno: 2,
      title: "mall",
      desc: "go mall",
    },
    {
      sno: 3,
      title: "school",
      desc: "go school",
    },
    {
      sno: 4,
      title: "tv",
      desc: "go tv",
    },
  ];
  const [todos, setTodos] = useState(data);

  const deleteTodo = (id) => {
    console.log(id);
    let arr = todos.filter((single) => single.sno !== id);
    setTodos(arr);
  };

  return (
    <>
      <Header title="My To Do List" searchBar={false} />
      <Todos todos={todos} deleteTodo={deleteTodo} />
      <Footer />
    </>
  );
}

export default App;
