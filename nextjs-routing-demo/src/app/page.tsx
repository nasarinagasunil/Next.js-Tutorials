import Link from "next/link"
export default function Home() {
    return (
        <>
            <h1>Welcome to the Home page</h1>
            <Link href="/blog">Blog</Link>
            <Link href="/products">Products</Link>
            <Link href="/articles/breaking-news-123?lang=en">News in English</Link>
            <Link href="/articles/breaking-news-123?lang=fr">News in French</Link>
        </>
        
    )
}