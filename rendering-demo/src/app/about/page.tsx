export default function AboutPage() {
    console.log("rendering server component")
    return <h1>About Page {new Date().toLocaleTimeString()}</h1> // use npm run build and npm run start to verify static server rendering
}