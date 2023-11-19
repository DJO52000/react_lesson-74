import { Navigate, Outlet, createBrowserRouter, redirect, useNavigate, useNavigation } from "react-router-dom"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./Navbar"
import { Team } from "./pages/Team"
import { TeamMember } from "./pages/TeamMember"
import { TeamNav } from "./TeamNav"
import { NewTeamMember } from "./pages/NewTeamMember"

export const router = createBrowserRouter([
    {
        element: <NavLayout />,
        children: [
            { path: "/", element: <Home /> },
            // { path: "/test/*", element: <h1>Test</h1> },//ability to add extra url text end not gate 404
            // { path: "*", element: <h1>404</h1> },//how to use it for deliberate 404
            { path: "*", element: <Navigate to="/" /> }, //how to use it for not login or...
            { path: "/store", element: <Store /> },
            { path: "/about", element: <About /> },
            {
                path: "/team",
                element: <TeamNavLayout />,
                loader: ({ request: { signal } }) =>
                    fetch("https://jsonplaceholder.typicode.com/users?_limit=2", {//look ?_limit=2 will gave only 2 team members
                        signal,
                    }),
                children: [
                    { index: true, element: <Team /> },
                    {
                        path: ":memberId",
                        loader: ({params, request: { signal }}) =>
                            fetch(`https://jsonplaceholder.typicode.com/users/${params.memberId}`, { signal })
                            .then( res => {//solve redirect when user not exist
                                if(res.status === 200) return res.json()

                                throw redirect("/team")
                            }),
                        element: <TeamMember />,
                    },
                    { path: "new", element: <NewTeamMember /> }, //router is more specific and be call first before :memberId
                ],
            },
        ],
    },
])

function NavLayout() {
    const {state} = useNavigation()//this gave you possibility to add control of text in loading faze, slow loading example
    
    return (
        <>
            <Navbar />
            {state === "loading"? <h1>Loading...</h1> : <Outlet />}
        </>
    )
}

function TeamNavLayout() {
    return (
        <>
            <TeamNav />
            <Outlet context="Hi from Outlet" />
        </>
    )
}
