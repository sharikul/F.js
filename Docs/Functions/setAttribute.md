# `setAttribute`
To add attributes to elements flexibly. _Defined on line [623](../../F.js#L623)_.

## Use
```
setAttribute(attribute, element);
```

### Parameters
* `attribute` (_string_ or _array_): The attribute(s) to add.
* `element` (_string_ or _array_): The element(s) to target.

### Returns
* `Array`

## Example
```javascript
Expose('setAttribute');
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