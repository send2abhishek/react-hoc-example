import SearchBar from "./hoc/SearchBar";

const TodoList = (props) => {
  return <p>{props.title}</p>;
};

export default SearchBar(TodoList, {
  apiURl: "https://jsonplaceholder.typicode.com/todos",
  filterKey: "title",
});
