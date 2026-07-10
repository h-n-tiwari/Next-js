# Handling Route Conflicts

- src -> app -> profile -> page.tsx, route.ts

- In this case route.ts will takeover the page.tsx

- To Avoid This Conflicts Move route.ts (api) into subdirectory called api 

- src -> app -> profile -> page.tsx, api -> route.ts, 


# RENDERING

- Rendering is the process of transforming the component code you write into user interfaces that users can see and interact with

- In Next.js, the tricky part to building a performant application is figuring out when and where this transformation should happen

- CSR, SSR and RSCs ?

- Rendering in React -> Rendering in Next.js

- Sometimes it takes a couple of passes for these concepts to really sink in