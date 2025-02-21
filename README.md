# TypeScript Project Setup

This repository contains a basic TypeScript setup with compilation and execution using Node.js.

## Prerequisites
- Install [Node.js](https://nodejs.org/) (includes npm)
- Install TypeScript globally:
  ```sh
  npm install typescript -g
  ```

## Initialize TypeScript Project
To set up a TypeScript project, initialize it with:
```sh
tsc --init
```
This creates a `tsconfig.json` file where you can configure TypeScript settings.

## Writing TypeScript Code
Create a `src` folder and add a TypeScript file `src/index.ts`:
```ts
const message: string = "Hello, TypeScript!";
console.log(message);
```

## Compiling TypeScript
To compile the TypeScript file manually, run:
```sh
tsc
// or tsc fileName
```
This generates a JavaScript file in the same directory.

## Watch Mode (Automatic Compilation)
To automatically compile TypeScript files on changes, use:
```sh
tsc --watch
```
This keeps watching for changes and recompiles automatically.

## Running the Compiled JavaScript File
Once compiled, run the JavaScript output using Node.js:
```sh
node fileName.js
```
(Modify the path based on your `tsconfig.json` output directory.)

## License
This project is open-source and available under the MIT License.

