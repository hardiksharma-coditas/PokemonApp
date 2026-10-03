import { UserContextProvider } from "./Context/Pokemons.context";
import Login from "./pages/Login/Login";
import AppRoutes from "./routes/AppRoutes.routes";


const App = () => {
  return (
    <UserContextProvider>
    <AppRoutes />
    </UserContextProvider>
  )
}

export default App;