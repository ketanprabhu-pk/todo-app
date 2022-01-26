import Todo from "./components/Todo";

function App() {
  return (
    <div className="app">
      <h1>To-Do</h1>
      <Todo title="React" text="liberary" />
      <Todo title="JS" text="Java Script" />
      <Todo title="Node" text="Node JS" />
      <Todo title="To-Do" text="APP Discription" />
    </div>
  );
}

export default App;
