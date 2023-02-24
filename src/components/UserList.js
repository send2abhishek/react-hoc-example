import SearchBar from "./hoc/SearchBar";

const UserList = (props) => {
  return <p>{props.username}</p>;
};

export default SearchBar(UserList, {
  apiURl: "https://jsonplaceholder.typicode.com/users",
  filterKey: "username",
});
