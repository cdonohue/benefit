# Example app with [benefit](https://github.com/cdonohue/benefit)

## How to use

### Using `create-next-app`

Execute [`create-next-app`](https://github.com/segmentio/create-next-app) with [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) or [npx](https://github.com/zkat/npx#readme) to bootstrap the example:

```bash
npx create-next-app --example with-benefit with-benefit-app
# or
yarn create next-app --example with-benefit with-benefit-app
```

### Download manually

Download the example:

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/canary | tar -xz --strip=2 next.js-canary/examples/with-benefit
cd with-benefit
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```

## The idea behind the example

This example features how to use [benefit](https://github.com/cdonohue/benefit) as the styling solution instead of [styled-jsx](https://github.com/zeit/styled-jsx).

We are creating three `div` elements with custom styles being shared across the elements. The styles includes the use of pseedo-selector and CSS animations.

This is based off the with-glamorous example.
