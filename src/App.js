import TodoList from "./components/TodoList";
import UserList from "./components/UserList";

function App(props) {
  return (
    <div className="title">
      <TodoList />
      <UserList />
    </div>
  );
}

export default App;
