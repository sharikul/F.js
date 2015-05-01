# `Range`
To generate a sequence of numbers in any order. _Defined on line [67](../../F.js#L67)_.

## Use
```
Range(first, second);
```

### Parameters
* `first` (_number_): The starting number in the sequence.
* `second` (_number_): The last number in the sequence.

### Returns
* `Array`
* `Error`

## Example
```javascript
Expose('Range');

var one_to_ten = Range(1, 10), // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    ten_to_one = Range(10, 1); //  [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
```