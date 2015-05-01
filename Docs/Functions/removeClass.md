# `removeClass`
To allow the removal of classes from elements. _Defined on line [581](../../F.js#L581)_.

## Use
```
removeClass(_class, element);
```

### Parameters
* `_class` (_string_ or _array_): The class(es) to remove.
* `element` (_string_ or _array_): The element(s) to target.

### Returns
* `Array`

## Example
```javascript
Expose('removeClass');
```

```html
<div id="myDiv" class="a class">This is a div. With class.</div>
```

```javascript
removeClass('a', '#myDiv');

// Or

removeClass(['a', 'class'], '#myDiv');
```