// import { ServerComponentOne } from "@/components/server-component-one";
import { ClientComponentOne } from "@/components/client-component-one";

export default function InterLeavingPage() {
    return (
        <>
            <h1>InterLeaving Page</h1>
            {/* <ServerComponentOne /> */}
            <ClientComponentOne />
        </>
    )
}