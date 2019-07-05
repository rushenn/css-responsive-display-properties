# CSS Responsive Display Utilities
Responsive CSS display utility classes to show/hide content by device via media query.

## Installation
```bash
$ npm install css-responsive-display-utilities --save
```
## Usage

To use css-responsive-display-properties in your website, simply load the stylesheet in to your website's `<head>`

```html
<head>
  <link rel="stylesheet" href="css-responsive-display-utilities.min.css">
</head>
```

and use required CSS class with any elements.

```html
<div class="h-sm">
  Stay hidden when the screen size is in between 576px - 768px
</div>
```

## Available classes

### Hidden Classes

| Type        | Class    | Description            |
|-------------|--------------|------------------------|
| Hidden      | `.h-xs`      | Hidden only on xs      |
|             | `.h-sm`      | Hidden only on sm      |
|             | `.h-md`      | Hidden only on md      |
|             | `.h-lg`      | Hidden only on lg      |
|             | `.h-xl`      | Hidden only on xl      |
| Hidden Up   | `.h-sm-up`   | Hidden on sm and above |
|             | `.h-md-up`   | Hidden on md and above |
|             | `.h-lg-up`   | Hidden on lg and above |
|             | `.h-xl-up`   | Hidden on xl and above |
| Hidden Down | `.h-sm-down` | Hidden on sm and below |
|             | `.h-md-down` | Hidden on md and below |
|             | `.h-lg-down` | Hidden on lg and below |
|             | `.h-xl-down` | Hidden on xl and below |

### Visible Classes

| Type         | CSS Class                                                   | Description             |
|--------------|-------------------------------------------------------------|-------------------------|
| Visible      | `.v-xs-[block \| inline-block \| flex \| inline-flex]`      | Visible only on xs      |
|              | `.v-sm-[block \| inline-block \| flex \| inline-flex]`      | Visible only on sm      |
|              | `.v-md-[block \| inline-block \| flex \| inline-flex]`      | Visible only on md      |
|              | `.v-lg-[block \| inline-block \| flex \| inline-flex]`      | Visible only on lg      |
|              | `.v-xl-[block \| inline-block \| flex \| inline-flex]`      | Visible only on xl      |
| Visible Up   | `.v-sm-up-[block \| inline-block \| flex \| inline-flex]`   | Visible on sm and above |
|              | `.v-md-up-[block \| inline-block \| flex \| inline-flex]`   | Visible on md and above |
|              | `.v-lg-up-[block \| inline-block \| flex \| inline-flex]`   | Visible on lg and above |
|              | `.v-xl-up-[block \| inline-block \| flex \| inline-flex]`   | Visible on xl and above |
| Visible Down | `.v-sm-down-[block \| inline-block \| flex \| inline-flex]` | Visible on sm and below |
|              | `.v-md-down-[block \| inline-block \| flex \| inline-flex]` | Visible on md and below |
|              | `.v-lg-down-[block \| inline-block \| flex \| inline-flex]` | Visible on lg and below |
|              | `.v-xl-down-[block \| inline-block \| flex \| inline-flex]` | Visible on xl and below |

## License

CSS Responsive Display Utilities is licensed under the MIT license. (http://opensource.org/licenses/MIT)
