import { notFound, redirect } from "next/navigation";
export default async function ReviewDetails({params}: {params: Promise<{productId: string, reviewId: string}>}) {
    const {productId, reviewId} = await params;
    if(parseInt(reviewId) > 1000){
        // notFound();
        redirect("/products")
    }
    const randomNumber = Math.floor(Math.random()*2);
    if (randomNumber === 1) {
        throw new Error("Random Error occured in Review");
    }
    return (
        <>
            
            <h1>Review {reviewId}  for product {productId}</h1>
        </>
        
    )
}