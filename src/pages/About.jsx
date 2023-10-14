import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function About() {
//     return (
//         <>
//             <h1>About</h1>
//         </>
//     )
// }

//testing react-router hook useNavigate

const navigate = useNavigate() 
useEffect(() => {
    const timeout =  setTimeout(() => {
        navigate('/')//navigate(to)
    }, 3000)

    return () => {
        clearTimeout(timeout)
    }
    },[])

    return <h1>About</h1>
}