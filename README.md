# `<Benefit />`

### A utility system for decorating react components

`benefit` helps to solve the problem of React Components inheriting cumbersome styles from other CSS on the page. Component-level-resets and delightfully composable utility classes (inspired by [TailwindCSS](https://tailwindcss.com)) allow each component to render precisely as expected despite inherited CSS.

Another key feature of `benefit` is that _it only inlines the CSS for the utilities that you use_. So, whether you’re hardening/isolating a single React component or building a full responsive layout, only the CSS for the utilities you use get injected to the page.

You also have the ability to customize the configuration with your own design system rules. Extend the configuration and add your own colors and CSS utilities or start entirely from scratch. It's up to you.

### Install dependencies

First, add `benefit` to your project along with its peer dependencies.

```bash
yarn add benefit react emotion
```

### Setup transpilation

Next, set the jsx pragma at the top of your source file where you intend to use `benefit`.

```js
/** @jsx jsx */
```

> Similar to a comment containing linter configuration, this configures the jsx babel plugin to use the `jsx` function instead of `React.createElement`.
>
> [JSX Pragma Documentation](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx#pragma)

Import the `jsx` function from `benefit`

```js
/** @jsx jsx */
import { jsx } from "benefit"
```

### Use built in utility classes (or add your own)

Now, you're free to use any available utility classes to style your components

```js
/** @jsx jsx */
import { jsx } from "benefit"

function MyComponent() {
  return (
    <div className="p-4 bg-orange-300 rounded">
      <p className="p-4 bg-white shadow rounded-sm">
        Williamsburg stumptown iPhone, gastropub vegan banh mi
        microdosingpost-ironic pok pok +1 bespoke dreamcatcher bushwick brunch.
      </p>
    </div>
  )
}
```
![Benefit Example](/docs/images/benefit-example.png)
