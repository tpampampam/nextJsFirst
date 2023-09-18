import Link from "@/node_modules/next/link";
import React from "react";

const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60
        }
    })

    return response.json()
}

const BlogPage = async () => {

    const posts = await getData()
   
    return (
        <>
            <h3>Blog page</h3>
            {posts.map((post: any) => (
                <li key={posts.id}>
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </>
    )
}
export default BlogPage