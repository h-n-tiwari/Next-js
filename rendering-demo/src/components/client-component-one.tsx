"use client";

import { useState } from "react";
import { ServerComponentOne } from "./server-component-one";

export const ClientComponentOne = () => {
    const [name, setName] = useState("BatMan");
    return (
        <>
            <h1>Client Component One</h1>
            <ServerComponentOne />
        </>
    );
}