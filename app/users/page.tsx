import React from "react";

interface User {
    id: number,
    name: string
}
const UsersPage = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users: User[] = await res.json()
    console.log(users)
    return (
        <>
            <h1>Users</h1>
            <ul>
                <p>{new Date().toLocaleTimeString()}</p>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}

export default UsersPage;