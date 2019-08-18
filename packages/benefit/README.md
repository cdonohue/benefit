## Installation

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
