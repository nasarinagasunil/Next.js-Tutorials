import { Product } from "@/components/product"
import { Reviews } from "@/components/review"
import { Suspense } from "react"

export default function ProductReviews() {
    return(
        <div>
            <h1>Product Reviews</h1>
            <Suspense fallback="products loading...">
                <Product />
            </Suspense>
            <Suspense fallback="reviews loading...">
                <Reviews />
            </Suspense>
            
        </div>
    )
}