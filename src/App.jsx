import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Main from "./Layouts/Main/Main";
import Homepage from "./pages/Homepage/Homepage";
import Errorpage from "./pages/Errorpage/Errorpage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element = {<Main/>}>
          <Route path="/" element = {<Homepage/>}/>
        </Route>
        <Route path="*" element = {<Errorpage/>}/>
      </Route>
    )
  );
  return (
    <RouterProvider
    router={router}
  />
  )
}

export default App
