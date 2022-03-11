import { Footer } from "./MyComponents/Footer";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";

function App() {
  let todos = [
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
  return (
    <>
      <Header title="My To Do List" searchBar={false} />
      <Todos todos={todos} />
      <Footer />
    </>
  );
}

export default App;
