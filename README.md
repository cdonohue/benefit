[![Benefit Logo](benefit-logo.svg)](https://benefit.netlify.com)

---

## Style web applications using generated utility classes

`benefit` is a _5kb_, utility CSS framework that's fully compatible with TailwindCSS.

[Documentation](https://benefit.netlify.com)

- Small runtime
- No build step
- Element [normalization](/customization/normalize)
- Style isolation
- Fully [Customizable](/customization/overview)
- Works with [TailwindCSS](https://tailwindcss.com) class names out of box

And... it only inlines the CSS for the utilities that you actually use

`benefit` is framework agnostic, but also exports some react helpers.

---

### React-specific

#### Install dependencies

Add `benefit` to your project along with its peer dependencies.

```bash
yarn add benefit emotion react
```

#### Setup transpilation

Set the jsx pragma at the top of your source file where you intend to use `benefit`.

```js
/** @jsx jsx */
```

> Similar to a comment containing linter configuration, this configures the jsx babel plugin to use the `jsx` function instead of `React.createElement`.
>
> [JSX Pragma Documentation](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx#pragma)

Import the `jsx` function from `benefit`

```js
/** @jsx jsx */
import { jsx } from "benefit/react"
```

Now, you're free to use any available [utility classes](https://benefit.netlify.com/utilities) to style your components

```js
/** @jsx jsx */
import { jsx } from "benefit/react"

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

### Framework agnostic

Add `benefit` to your project along with its peer dependencies.

```bash
yarn add benefit emotion
```

Import and use the `benefit` function to create your utility classes

```
import benefit from "benefit"

const { styleWith } = benefit()
```

Use `styleWith(...)` to pass in [utility classes](https://benefit.netlify.com/utilities) and output `emotion` processed css classes

```
<div class={styleWith("p-4 bg-white text-blue-700")}>
  ...
</div>
```
