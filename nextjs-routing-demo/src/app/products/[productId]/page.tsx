import { Metadata } from "next";

type props = {params: Promise<{productId: string}>}

export const generateMetadata = async ({params}: props): Promise<Metadata> => {
    const {productId} = await params;
    const title = await new Promise((resolve) => setTimeout(() => resolve(`product ${productId}`),1000));
    return {
        title: `Product ${title}`,
    }
}

export default async function ProductDetails({params}: props) {
    const {productId} =await params;
     return (
        <h1>
            Details About Product {productId}
        </h1>
    )
}