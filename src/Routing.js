import { createBrowserRouter } from "react-router-dom"
import App from "./component/App";
import Home from "./component/Home"
import About from "./component/About"
import Contact from "./component/Contact"

const router = createBrowserRouter([
    { path: "", element: <App />, children: [
            { path: '', element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'contact', element: <Contact /> }
        ]
    }
]);

export default router