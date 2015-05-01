# `addClass`
To add classes to HTML elements flexibly. _Defined on line [541](../../F.js#L541)_.

## Use
```
addClass(_class, element);
```

### Parameters
* `_class` (_string_ or _array_): The class(es) to add.
* `element` (_string_ or _array_): The element(s) to target.

### Returns
* `Array`

## Example
```javascript
Expose('addClass');
```

```html
<div>I am a standalone div</div>
<p id="paragraph">I am a paragraph.</p>
```

```css
.sansserif {
	font-family: sans-serif;
}

.big {
	font-size: 1.5em;
}
```

```javascript
// Add one class to both elements
addClass('sansserif', ['div', '#paragraph']);

// Add many classes to both elements
addClass(['sansserif', 'big'], ['div', '#paragraph']);
```