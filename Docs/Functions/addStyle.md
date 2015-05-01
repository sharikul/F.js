# `addStyle`
To allow the CSS styling of elements in a flexible manner. _Defined on line [519](../../F.js#L519)_.

## Use
```
addStyle(element, style);
```

### Parameters
* `element` (_string_ or _array_): The element(s) to modify.
* `style` (_object_): The CSS stylings, provided with key value pairs (_where key is the property_).

### Returns
* `Array`

## Example
```javascript
Expose('addStyle');
```

```html
<button id="clickMe">Click</button>
```

```javascript
// Modify #clickMe
addStyle('#clickMe', {
	fontFamily: 'sans-serif',
	fontSize: 18
});
```