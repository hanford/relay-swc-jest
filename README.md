Repro of https://github.com/vercel/next.js/issues/35469

Currently SWC (with relay) doesn't seem to work with next/jest

If you using Relay and Next.js and want to test, you currently need to use `babel-plugin-relay` with `babel-jest` to get test files transformed.

Ideally, SWC & next/jest should transform test files using SWC (similar to local development and production builds).

To repro, install the deps:

```sh
pnpm install
```

Then comment out the "working config" inside of `jest.config.js` and uncomment the "failing config".

Finally run the test:

```sh
pnpm test
```
