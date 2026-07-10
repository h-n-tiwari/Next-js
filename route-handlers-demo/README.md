# Handling Route Conflicts

- src -> app -> profile -> page.tsx, route.ts

- In this case route.ts will takeover the page.tsx

- To Avoid This Conflicts Move route.ts (api) into subdirectory called api 

- src -> app -> profile -> page.tsx, api -> route.ts, 


# RENDERING in NEXT.JS

- Rendering is the process of transforming the component code you write into user interfaces that users can see and interact with

- In Next.js, the tricky part to building a performant application is figuring out when and where this transformation should happen

- CSR, SSR and RSCs ?

- Rendering in React -> Rendering in Next.js

- Sometimes it takes a couple of passes for these concepts to really sink in

# Rendering in React

- We need to look at how React's rendering has evolved over the past decade

- You probably remember when React was primarily used for building Single Page Application (SPAs)

# Client-Side Rendering (CSR)

- This whole approach - where your browser (the client) transforms React Components into what you see on scree - that's what we call client-side rendering (CSR)

- (CSR) became super popular for SPAs (Single page application), and everyone was using it

- It wasn't long before developers began noticing some inherent drawbacks to this approach