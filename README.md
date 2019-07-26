# start-lit-element

A simple Hello World for LitElement.

https://start-lit-element.firebaseapp.com/

* [Quick start](#quick-start)
* [Detailed setup info](#detailed-setup-info)
* [Browser compatibility and performance](#browser-compatibility-and-performance)

## Quick start

```
npm install -g polymer-cli
git clone https://github.com/PolymerLabs/start-lit-element
cd start-lit-element
npm install
polymer serve
```

## Detailed setup info

* [Clone](#clone-this-repo)
* [Serve](#start-a-dev-server)
* [Setup](#set-up-new-app)
* [Build](#build-for-production-and-serve-locally)
* [Deploy](#deploy)

### Clone this repo

```
git clone https://github.com/PolymerLabs/start-lit-element
```

### Start a dev server

```
npm install -g polymer-cli
cd start-lit-element
npm install
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
