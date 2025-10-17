export const dynamicParams = true; 

// true: Nextjs statically renders pages on demand for any dynamic routes segments not includedin generateStaticParams
//false: Nextjs return 404 erroe for any dynamic segment not foundin pre- redered list

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