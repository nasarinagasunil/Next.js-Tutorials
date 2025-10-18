
import { getProducts } from "@/prisma-db";
import { ProductDetails } from "./product-details";
export type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null;
};

export default async function ProductsDBPage() {
    const products: Product[] = await getProducts();

    return <ProductDetails products={products} />
}