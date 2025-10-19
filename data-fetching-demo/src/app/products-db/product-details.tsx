"use client"

import { removeProduct } from "@/actions/products";
import { getProducts } from "@/prisma-db";
import Form from "next/form";
import Link from "next/link";
import { useOptimistic } from "react";
export type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null;
};


export const ProductDetails= ({products}: {products: Product []}) => {
    
    const [optimisticProducts, setOptimisticProducts] = useOptimistic(products, (currentProducts, productId) => {
        return currentProducts.filter(product => product.id !== productId);
    })

    const removeProductById = (productId: number) => {
        setOptimisticProducts(productId)
        removeProduct(productId);
    }

    return (
        <ul className="space-y-4 p-4">
            {optimisticProducts.map((product) => (
                <li key={product.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                    <Link href={`/products-db/${product.id}`}><h2 className="text-xl font-semibold">{product.title}</h2></Link>
                    <p>{product.description}</p>
                    <p className="text-lg font-medium">${product.price}</p>
                    <Form action={removeProductById.bind(null, product.id)}>
                        <button type="submit" className="bg-red-400 px-2 py-1 text-white-500 rounded-md cursor-pointer hover:bg-red-500">
                            Delete
                        </button>
                    </Form>

                </li>
            ))
            }
        </ul >
    )
}