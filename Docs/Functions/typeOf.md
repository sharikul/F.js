# `typeOf`
To check the type of any object. _Defined on line [299](../../F.js#L299)_.

## Use
```
typeOf(element);
```

### Parameters
* `element` (_object_): The object to check.

### Returns
* `String`

## Example
```javascript
Expose('typeOf');

typeOf('string'); // string
typeOf([1,2]); // array
typeOf( document.querySelectorAll('div') ); // nodelist
```