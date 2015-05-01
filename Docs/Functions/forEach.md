# `forEach`
To loop over anything that can be looped through, mainly to be used with objects and arrays. _Defined on line [44](../../F.js#L44)_.

## Use
```
forEach(object, callback);
```

### Parameters
* `object` (_object_): The object to be looped through. Arrays are also objects.
* `callback` (_function_): The callback to be executed in each loop.

### Returns
* `Boolean`
* `Error`

## Example
```javascript
Expose('forEach');

function consoleLogArguments() {
  forEach(arguments, function(argument) {
    console.log('Argument: ' + argument);
  }
}

consoleLogArguments('I', 'Will', 'Be', 'Added', 'To', 'The', 'Browser', 'Console');
```