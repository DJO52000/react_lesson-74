import { Link, useLoaderData } from "react-router-dom"

//GO AROUND REFRESH PAGE Y USE LINK
export function TeamNav() {
    const teamMembers = useLoaderData()

    return (
        <nav>
            <ul>
                {teamMembers.map((member) => (
                    <li key={member.id}>
                        <Link to={member.id.toString()}>Team - {member.name}</Link>
                    </li>
                ))}
                <li>
                    <Link to="new">New Team Member</Link>
                </li>
            </ul>
        </nav>
    )
}
