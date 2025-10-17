import { cookies } from "next/headers"

export default async function AboutPage() {
    
    const cookiesStore = await cookies()
    const theme = cookiesStore.get('theme')
    console.log(theme)
    return <h1>About Page {new Date().toLocaleTimeString()}</h1> // use npm run build and npm run start to verify static server rendering
}


//Nextjs automaticcally enables it when it encounters a dynamic functions like cookies, headers, connection, 
 // draftMode, after or searchParams props