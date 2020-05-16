# Match Position

Moves one element to another element based on corner points.

It uses css transform property.

Demo: [https://cihad.github.io/match-position/demo](https://cihad.github.io/match-position/demo)

![animation of match position](https://raw.githubusercontent.com/cihad/match-position/master/demo/animated-demo.gif)


## For Installation

For node package:

```bash
npm install match-position
```

or for browser:
```html
<script src="http://unpkg.com/match-position"></script>
```

## Usage

Think you have two divs like this:

```html
<div id="a"></div>
<div id="b"></div>
```

You want to match div-a to div-b according corner points.

```js
const { a, b } = window

MatchPosition.matchPosition({ a, aPos: "lt", b, bPos: "rt" })
```

That's it. It's simply.