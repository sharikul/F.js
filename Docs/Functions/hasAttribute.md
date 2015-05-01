# `hasAttribute`
To check the existence of an attribute on an element. _Defined on line [642](../../F.js#L642)_.

## Use
```
hasAttribute(attribute, element);
```

### Parameters
* `attribute` (_string_ or _array_): The attribute(s) to check for.
* `element` (_string_ or _array_): The element(s) to target.

### Returns
* `Boolean`

## Example
```javascript
Expose(['setAttribute', 'hasAttribute']);
```

```html
<p>Please give me class.</p>
```

```css
.class {
	font-family: sans-serif;
	font-size: 20px;
	text-align: center;
}
```

```javascript
setAttribute('class', 'p');
```

```html
<-- In the DOM -->
<p class="class">Please give me class.</p>
```

```javascript
hasAttribute('class', 'p'); // true
hasAttribute('title', 'p'); // false
hasAttribute(['class', 'title'], 'p'); // false
```