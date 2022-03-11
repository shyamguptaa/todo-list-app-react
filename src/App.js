import { Footer } from "./MyComponents/Footer";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";

function App() {
  return (
    <>
      <Header title="My To Do List"/>
      <Todos/>
      <Footer/>
    </>
  );
}

export default App;
