# Handling Errors In Nested Routes

- Errors always bubble up to find the closest parent error boundary

- An error.tsx file handles errors not just for its own folder, but for all the nested child segments below it too

- By stratehically placing error.tsx files at different levels in your route folders, you can control exactly how detailed your error handling gets

- Where you put your error.tsx file makes a huge difference - it determines exactly which parts of your UI gets affected when things go wrong.


# Handling Errors In Layouts

- An error.tsx file will handle errors for all its nested child segments

- There's an interesting catch with layout.tsx components in the same segment

- The error boundary won't catch errors thrown in layout.tsx within the same segment because of how the component hierarchy works

- The layout actually sits above the error boundary in the component tree

![alt text](errors.png)


# Handling Global Errors

- If an error boundary can't catch errors in the layout.tsx file from the same segment, what about errors in the root layout?

- It doesn't have a parent segment - how do we handle those errors?

- Next.js provides a special file called global-error.tsx that goes in your root app directory.

- This is your last line of defense when something goes catastrophically wrong at the highest level of your app.

    - works only in production mode
    - requires html and body tags to be rendered