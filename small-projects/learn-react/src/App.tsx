import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Router } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MainLayout from "./layouts/MainLayout"
import JobsPage from "./pages/JobsPage"
import NotFound from "./pages/NotFound"
import JobPage from "./pages/JobPage"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout></MainLayout>}>
            <Route index element={<HomePage></HomePage>}></Route>
            <Route path="/jobs" element={<JobsPage></JobsPage>} ></Route>
            <Route path="/jobs/:id" element={<JobPage></JobPage>} ></Route>
            <Route path="*" element={<NotFound></NotFound>} ></Route>
        </Route>
    )
)

const App = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}

export default App
