import { ClientComponentOne } from "@/components/client-component-one"
import { ServerComponentOne } from "@/components/server-component-one"
export default function interLeavingPage() {
    return (
        <>
        <h1>InterLeaving Page</h1>
            <ClientComponentOne>
                <ServerComponentOne />
            </ClientComponentOne>
        </>
    )
}