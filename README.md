[![Benefit Logo](benefit-logo.svg)](https://benefit.netlify.com)

---

## Style web applications using generated utility classes

`benefit` is a utility CSS-in-JS library that provides a set of low-level, configurable, ready-to-use styles.

[Documentation](https://benefit.netlify.com)

`benefit` is framework agnostic, use `benefit-react` for additional enhancements for React.

---

### React-specific

#### Install dependencies

Add `benefit-react` to your project.

```bash
yarn add benefit-react
```

#### Setup transpilation

Set the jsx pragma at the top of your source file where you intend to use `benefit-react`.

> Similar to a comment containing linter configuration, this configures the jsx babel plugin to use the `jsx` function instead of `React.createElement`.
>
> [JSX Pragma Documentation](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx#pragma)

Import the `jsx` function from `benefit-react`

```js
/** @jsx jsx */
import { jsx } from "benefit-react"
```

Now, you're free to use any available [utility classes](https://benefit.netlify.com) to style your components

```js
/** @jsx jsx */
import { jsx } from "benefit-react"

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

### Framework agnostic

Add `benefit` to your project.

```bash
yarn add benefit
```

Import and use the `createBenefit` function to create your utility classes

```
import { createBenefit } from "benefit"

const { styleWith } = createBenefit()
```

Use `styleWith(...)` to pass in utility classes

```
<div class={styleWith("p-4 bg-white text-blue-700")}>
  ...
</div>
```
