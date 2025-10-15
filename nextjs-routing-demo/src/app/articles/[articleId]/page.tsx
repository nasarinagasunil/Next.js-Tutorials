"use client"

import Link from "next/link";
import { use } from "react";
export default function NewsArticle({ params, searchParams }: {
    params: Promise<{ articleId: string }>;
    searchParams: Promise<{ lang?: "en" | "fr" | "es" }>;
}) {
    const { articleId } = use(params);
    const { lang = "en" } = use(searchParams);
    return (
        <>
            <h1>News Article {articleId}</h1>
            <p>Reading in Language {lang}</p>

            <div>
                <Link href={`/articles/${articleId}?lang=en`}>English</Link>
                <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
                <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>

            </div>
        </>

    )
}