export async function generateStaticParams() {
    return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

// for multiple dynamic routes products/[category]/[proudct]
// export async function generateStaticParams(){
//     return [
//         {category: "electronics", product: "smartphone"},
//         { category: "clothes", product: "Tshirt" },
//         { category: "footware", product: "shoes" },
//     ]
// }

export default async function ProductDetails({params}:{params:Promise<{id: string}>}){
    const {id} = await params;
    return (
        <h1>Product {id} rendered at {new Date().toLocaleTimeString()}</h1>
    )
}