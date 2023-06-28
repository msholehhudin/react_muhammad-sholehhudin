import Header from "./navbar/header";
import ListTodo from "./todo-list";

export default function ToDo({TodoList}){
    return(
        <>
        <Header />
        <ListTodo TodoList={TodoList} />
        </>
    )
}