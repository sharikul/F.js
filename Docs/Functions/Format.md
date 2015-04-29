# `Format`
To create formatted strings with numbered indexes wrapped in curly braces. _Defined on line [102](../../F.js#L102)_.

## Use
```javascript
// Argument based formatting
Format(string, param1, param2, param3...);

// Array based formatting
Format(string, [param1, param2, param3...]);
```

### Parameters
* `string` (_string_): The string to format.
* _Parameters_ (_arguments_ or _array_): The value of each index supplied in order.

### Returns
* `String`
* `Error`

## Example
```javascript
Expose('Format');

var argument_formatting = Format('Hello, my name is {0} and I am {1} years old.', 'Sharikul', 19),
    array_formmating = Format('Hello, my name is {0} and I am {1} years old.', ['Sharikul', 19]);

console.log(argument_formatting); 
// Or
console.log(array_formatting);

// Returns "Hello, my name is Sharikul and I am 19 years old."
