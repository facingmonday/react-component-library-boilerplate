# React Component Library Boilerplate

A boilerplate for building your own React component library. Comples for both CommonJS and UMD with Cosmos for component edititng.

```
git clone https://github.com/facingmonday/react-component-library-boilerplate.git MyComponentLibrary
cd MyComponentLibrary
npm install
```

### To Link in another package
Change the name in package.json to the name of you library.
Run `npm link` in that directory.
Then go to the project you want to include it in and run `npm link <modulename>`

```
npm run build:umd
npm run buld:lib
npm run cosmos
```