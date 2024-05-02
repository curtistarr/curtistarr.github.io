# CurtisTarr.github.io

## Running

- `npm install`
- `npm run dev` - Starts a local web server with HMR for development
- `npm run build` - Build and output to `./dist`
- `npm run preview` - Starts a local web server that serves the built solution from `./dist`

## Adding New Links

To add new links to the application, update the `src/assets/links.json` file. Each link object should contain the following properties: `text`, `websiteLink`, `imageFile`, and optionally `username`. Here's an example of a link object:

```json
{
  "text": "Example",
  "websiteLink": "https://example.com/",
  "imageFile": "example-icon.svg",
  "username": "optionalUsername"
}
```

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
