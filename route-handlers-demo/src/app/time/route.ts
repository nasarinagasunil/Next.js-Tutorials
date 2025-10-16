export const dynamic = "force-static";
export const revalidate = 10;
// npm run build to see the effect of revalidate
export async function GET() {
    return Response.json({ time: new Date().toLocaleTimeString() });
}