# `next-router-query`

**Drop-in alternative of `useRouter().query` that tries it's best to get the query params on the first mount.**


> Have you ever gotten annoyed by the fact that `useRouter().query` is an empty object on the first mount? Great, then this is a library for you.

## Illustrating the difference

Given a page called `post/[id].jsx` that is called with `/post/myId?key=value`:

You will see something like this when first mounting the page:

```js
useRouter().query // result: {} // 😢 
```

With `next-router-query` you'll see the difference


```jsx
--------- Render #1  --------
useRouter().query result: {} // 😢 
useRouterQuery() result: {id: 'myId', key: 'value'} // 😻
```

Once the first render is done and `useRouter().query` returns data, we'll simply return that instead.

## Caveats

- Relies on `URLSearchParams` - you might need some polyfill
- Only works in the browser - server will not show the right result

## Install

```bash
yarn add next-router-query
# or 
npm i next-router-query
```

### Usage

```tsx
import { useRouterQuery } from 'next-router-query';

export function MyPage() {
  const routerQuery = useRouterQuery()

  // ...
}
```