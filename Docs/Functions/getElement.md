# `getElement`
To retrieve HTML elements by name, id, or class. _Defined on line [486](../../F.js#L486)_.

## Use
```
getElement(element);
```

### Parameters
* `element` (_string_): The element to search for, provided by name, id, or class.

### Returns
* `Array`
* `Boolean`

## Example
```javascript
Expose('getElement');
```

```html
<div id="elem">Div Element</div>
<div id="element">A Div Element</div>
```

```javascript
// get div#elem
getElement('#elem');

// get all divs
getElement('div');
```
