# `hasClass`
To check the existence of a class on an element. _Defined on line [562](../../F.js#L562)_.

## Use
```
hasClass(_class, element);
```

### Parameters
* `_class` (_string_ or _array_): The class(es) to check for.
* `element` (_string_ or _array_): The element(s) to target.

### Returns
* `Boolean`

## Example
```javascript
Expose(['addClass', 'hasClass']);
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

// Check if p#paragraph has the class .big
hasClass('big', '#paragraph'); // true

// Check if both elements have the class .sansserif
hasClass('sansserif', ['div', '#paragraph']); // true
```