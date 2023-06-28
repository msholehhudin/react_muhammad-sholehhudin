import { TodoList } from "./MockData"
import ToDo from "./components"

function App() {

  return (
    <>
      <ToDo TodoList={TodoList} />
    </>
  )
}

export default App
