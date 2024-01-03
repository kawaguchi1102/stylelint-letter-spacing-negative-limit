# stylelint-letter-spacing-negative-limit

Limit negative `letter-spacing` values.

```css
a {
  letter-spacing: -1px;
}
/**               ↑
 *                This negative value */
```

## Usage

```js
// .stylelintrc
{
    "plugins": [
        "stylelint-letter-spacing-negative-limit"
    ],
    "rules": {
        "plugin/stylelint-letter-spacing-negative-limit": [true]
    }
}
```

