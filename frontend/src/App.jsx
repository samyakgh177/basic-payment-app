import{
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import { Dashboard } from "./pages/Dashboard"
import { Signin } from "./pages/signin"
import { Signup } from "./pages/Signup"
import Home  from "./pages/Home"
import { SendMoney } from "./pages/SendMoney"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/send" element={<SendMoney />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
