import Form from "next/form"
export const Search = () => {
    return (
        <>
        <Form action={"/products-db"} className="flex gap-2">
            <input name="query" placeholder="Search the product" className="px-4 py-2 focus:outline-none rounded-md border border-gray-300"/>
            <button type="submit" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md">
                Submit
            </button>
        </Form>
        
        
        </>
    )
}