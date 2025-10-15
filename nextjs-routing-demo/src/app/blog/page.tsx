import { Metadata } from "next"

export const metadata: Metadata = {
    title: {
        absolute: "Blog"
    }
}
export default async function Blog() {
    return (
        await new Promise((resolve) => setTimeout(() => resolve("intentional delay"), 2000)),
        <h1>Blog Page</h1>
    )
}