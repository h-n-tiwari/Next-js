// import { useState } from "react";

// export default function AboutPage() {
//     const [name, setName] = useState("");
//     console.log("About Server Components");
//     return <h1>About Page</h1>
// }


// STATIC RENDERING

// export default function AboutPage() {
//     console.log("About Server Components");
//     return <h1>About Page {new Date().toLocaleTimeString()}</h1>;
// }


// DYNAMIC RENDERING

import { cookies } from "next/headers";

export default async function AboutPage() {
    const cookieStore = await cookies();
    const theme = cookieStore.get("theme");
    console.log(theme);
    
    console.log("About Server Components");
    return <h1>About Page {new Date().toLocaleTimeString()}</h1>;
}

