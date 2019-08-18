## Installation

```bash
yarn add benefit-react
```

## Setup transpilation

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
