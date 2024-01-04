# stylelint-letter-spacing-negative-limit

Limit negative `letter-spacing` values.

```css
a {
  letter-spacing: -1px;
}
/**               ↑
 *                This negative value */
```
Exceptionally, the following patterns pass the rule.

```css
.class {
  --foo: -10px;
  letter-spacing: var(--foo);
}
/**                   ↑
 *                    This variable value is -10px */
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

