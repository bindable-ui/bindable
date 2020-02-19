# Bindable

Bindable is a design system that aims to provide the video products in <a href="https://www.verizondigitalmedia.com" target="_blank">Verizon Media</a> tools to build cohesive and consistent interfaces. Bindable will provide a common pattern for desginers and engineers to follow. Bindable is developed as an <a href="https://aurelia.io" target="_blank">Aurelia</a> plugin and built with the <a href="https://github.com/aurelia/cli" target="_blank">aurelia-cli</a>.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Background

We are a team of designers and engineers building online tools to help customers manage their video content. As our team expanded and the features we needed to build grew we needed something to help us stay on the same page. This started with a pattern library and it worked great for a while. Over time though we noticed different teams using the pattern library differently. We started to build Bindable to help with that. Instead of just a list of CSS classes Bindable provides a more structured way of building user interfaces. We have found this keeps us from rebuilding the wheel over and over. We are far from done but Bindable is now in a state where others might enjoying using it.

## Install

```bash
npm install git+ssh://git@github.com/bindable-ui/bindable.git
```

## Usage

### Project Setup

Add Bindable as a plugin into your Aurelia project:

```js
aurelia.use
    .standardConfiguration()
    .plugin(PLATFORM.moduleName('bindable'));
```

Depending on your Webpack config, you may be required to handle CSS imports from Bindable manually.

### Using Helper classes

```js
import {LocalStorageHelper} from 'bindable';
...
LocalStorageHelper.loadOrDefault('exampleKey', null);
```

### Using TS Interfaces

```js
import {CTableCol} from 'bindable';
...
public listCols: CTableCol[] = [];
```

### Import CSS Modules classes

If you need access to a specific class in a component, you can import the json file for it to get all of the style class names.

```js
import cTileCssJson from 'bindable/dist/native-modules/components/tile/c-tile/c-tile.css.json';
...
console.log(cTileCssJson.tile);
```

### Use Bindable ViewModels and Views

If you need to use a custom view and ViewModel (in a table for instance)

```js
import {CTableCol} from 'bindable';
...
public listCols: VTableCol[] = [
    {
        checkChanged: row => console.log(row),
        colClass: 't30',
        colHeadName: 'selected',
        colHeadSelectedChanged: isChecked => console.log(isChecked),
        colHeadSelectedVal: false,
        colHeadValue: 'Select',
        colWidth: 30,
        view: PLATFORM.moduleName('bindable/components/tables/td-contents/c-td-check/c-td-check.html'),
        viewModel: PLATFORM.moduleName('bindable/components/tables/td-contents/c-td-check/c-td-check'),
    }
];
```

## Contributing

This Aurelia plugin project has a built-in dev app to simplify development.

1. The local `src/` folder, is the source code for the plugin.
2. The local `dev-app/` folder, is the code for the dev app, just like a normal app bootstrapped by aurelia-cli.
3. You can use normal `npm start` and `npm test` in development just like developing an app.
4. To ensure compatibility to other apps, always use `PLATFORM.moduleName()` wrapper in files inside `src/`. You don't need to use the wrapper in `dev-app/` folder as CLI built-in bundler supports module name without the wrapper.

The dev-app contains the <a href="https://bindable.uplynk.com" target="_blank">docs</a>. Use that to view what parameters are available when using the components in Bindable.

### Run dev app

Run `npm start`, then open `http://localhost:9000`

### Unit tests

Run `npm test`

### Doc Updates
This is used when updating the docs.

```bash
npm run deploy
```

### Release
This is used when updating Bindable (not the docs).

With your changes update the version number in `dev-app/app.html` in the `title` attribute (around line 37). Then make a release on Github.

Update your app to point to the new release in package.json and package-lock.json and `npm install`.

Please refer to [the contributing.md file](Contributing.md) for information about how to get involved. We welcome issues, questions, and pull requests. Pull Requests are welcome.

## Maintainers

Luke Larsen: luke@lukelarsen.com

Joe Ipson: joe@ipson.me

## License

This project is licensed under the terms of the [MIT](LICENSE) open source license. Please refer to [LICENSE](LICENSE) for the full terms.
