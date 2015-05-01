# `Compare`
To check whether multiple variables match a certain condition and value. _Defined on line [174](../../F.js#L174)_.

## Use
```
Compare(var1, var2..., operator, value);
```

### Parameters
* _Variables_ (_mixed_): The thing (_doesn't have to be a variable_) to check on.
* `operator` (_string_): The method of comparison. You can supply: `=`, `!=`, `>`, `<`, `>=`, `<=`.
* `value` (_mixed_): The thing to compare variables against.

### Returns
* Boolean
* Error

## Example
```javascript
Expose('Compare');

var var1 = 'Sharikul',
    var2 = 19,
    var3 = 18,
    var4 = 'Sharikul';
    
Compare(var1, var4, '=', 'Sharikul'); // true
Compare(var1, var2, '=', 'Sharikul'); // false
Compare(var2, var3, '>', 10); // true
```