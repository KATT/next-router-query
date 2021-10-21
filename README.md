# `react-router-query`

Drop-in alternative of `useRouter().query` that tries it's best to get the query params on the first mount.


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