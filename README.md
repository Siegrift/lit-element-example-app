# start-lit-element

```
npm install -g polymer-cli
polymer serve
```

### Set up new app

Remember you need to set `lit-html` as a local dependency in
`lit-element`. You can use [this version](https://github.com/Siegrift/lit-element/tree/local-lit-html),
which already uses `lit-html` as local dep.

Unfortunatelly, `lit-html` is presented in node modules multiple times (one as a dependency of lit-element, another
is hoisted to app node_modules and allow s you to import things).
However if you import it from the hoisted version, unsafe html won't work. **Be sure to import it from
lit-element node_modules.**

### Build for production and serve locally

Build your project and serve the build locally:

```
polymer build
polymer serve build/default
```
