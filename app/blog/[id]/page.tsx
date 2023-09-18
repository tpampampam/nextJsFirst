import React from "react";

const getData = async (id: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    })

    return response.json()
}

type Props ={
    params: {
        id: string
    }
}

const Post = async ({params: {id}}: Props) => {
    const post = await getData(id)
    return (
        <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </>
    )
}

export default Post