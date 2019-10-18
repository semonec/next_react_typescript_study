# Next.js with Typescript + Redux

<i> Referenced via 
- https://medium.com/@selvaganesh93/setup-next-js-with-typescript-integration-dece94e43cf5
- https://holywater-jeong.github.io/blog/next-js-redux/
- 
</i>

## Next JS Project Setup

<pre><code>yarn init --yes</code></pre>

> <i><b>--yes</b></i> means that will automatically answer yes to all questions which may have security implications.

<pre><code>
yarn add next react react-dom typescript
</code></pre>

> Install required dependencies

## Install required @types module


<pre><code>yarn add @types/next @types/react</code></pre>

> @types prefix means get the declaration files for packages
>
> Needed for Typescript
> @zeit/next-typescript is no longer needed since Next.js has built-in support for TypeScript now.

## Create configuration file

Create <b>`next.config.js`</b> in the project

<pre><code>// next.config.js
const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript()
</code></pre>

Create <b>`.babelrc`</b> in the project

<pre><code>{
  "presets": ["next/babel", "@zeit/next-typescript/babel"]
}
</code></pre>

Create <b>`tsconfig.json`</b> in the project

<pre><code>{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "jsx": "preserve",
    "lib": ["dom", "es2017"],
    "module": "esnext",
    "moduleResolution": "node",
    "noEmit": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "preserveConstEnums": true,
    "removeComments": false,
    "skipLibCheck": true,
    "sourceMap": true,
    "strict": true,
    "target": "esnext"
  }
}
</code></pre>

Add a `scripts` property to the `package.json` file.

> Include` a script to run a local server` for development

## Create shard layout


## Create pages Layout

Create a new `pages` directory, then create `tsx` file.

~~~
import React from 'react'
const Index: React.FunctionComponent = () => {
  return (
    <h1>Hello Next.js 👋</h1>
  )
}

export default Index
~~~

## Now run the dev deploy

~~~
yarn dev
~~~

or

~~~
npm run dev
~~~

## Install Redux

~~~
yarn add react-redux redux redux-thunk
~~~

> `react-redux` : Support react to use redux
> 
> `redux` : Redux, itself
> 
> `redux-thunk` : Library for asynchronous at redux

Also add `redux-devtools-extension` (redux dev toops https://d2.naver.com/helloworld/1848131)

~~~
yarn add redux-devtools-extension
~~~

### store initialize

### reducer initialize

### action initialize

<pre><code>
</code></pre>

<pre><code>
</code></pre>



<pre><code>
</code></pre>

<pre><code>
</code></pre>



<pre><code>
</code></pre>