"use client";

import { Children, useState } from "react";

export const ClientComponentOne = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [name, setName] = useState("BatMan");
    return (
        <>
            <h1>Client Component One</h1>
            {Children}
        </>
    );
}