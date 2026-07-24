# Interleaving Server And Client Components

- Server Component Inside a Client Component

* You will see an error module not found can't resolve FS

- Becoz any component nested inside a client component automatically becomes a client component too.
- Since client components render after server components you can't import a server component directly into a client component event though server component one is defined as a server component when it is nested inside a client component it transforms into a client component which is executed client side. In the client enviroment there is no file system module and hence the error. So it is important to remember that importing a server component into a client component it's a pattern not supported in next js.


- WorkAround for unsupported Patterns

- But don't worry there is a neat workaround :-

- instead of nesting the server component pass it as a prop to the client component.
- a common approach is using react's children prop to create what is called a slot.
