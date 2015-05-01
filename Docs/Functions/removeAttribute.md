# `removeAttribute`
To allow the removal of attributes from elements flexibly. _Defined on line [667](../../F.js#L667)_.

## Use
```
removeAttribute(attribute, element);
```

### Parameters
* `attribute` (_string_ or _array_): The attribute(s) to add.
* `element` (_string_ or _array_): The element(s) to target.

### Returns
* `Array`

## Example
```javascript
Expose('removeAttribute');
```

```html
<p title="I am a paragraph">Hover over me!</p>
```

```javascript
removeAttribute('title', 'p');
```