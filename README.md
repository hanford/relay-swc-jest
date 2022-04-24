Currently SWC (with relay) doesn't seem to work with next/jest. If you using Relay and Next.js and want to test you currently need to use `babel-plugin-relay` with `babel-jest` to get test files transformed.

Ideally, SWC (with relay) should transform test files the same way it does for local development and production builds.

To reproduce the issue, comment out the "working config" inside of `jest.config.js` and uncomment the "failing config".

Finally run:

```sh
pnpm test
```
