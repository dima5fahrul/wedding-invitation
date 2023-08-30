import "./App.css";
import { GlobalProvider } from "./context/GlobalContext";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <GlobalProvider>
        <MainPage />
      </GlobalProvider>
    </>
  );
}

export default App;
