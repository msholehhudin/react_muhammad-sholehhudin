import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./storage";
import ToDo from "./todo-apps";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToDo />
      </PersistGate>
    </Provider>
  );
}

export default App;
