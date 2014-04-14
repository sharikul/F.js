# F.js
F.js is a function-only JavaScript library that offers a variety of functions for your use. With the exception of the `Expose` function, you are required to 'pull' functions into the specified scope to use. In total, there are **55** functions for your use.

## Loading functions
You use the global `Expose` function to load the specified function into the desired scope.

### Usage
```javascript
Expose(fn, scope);
```

#### Parameters
`fn`: Function to load. You can supply a string to load one function, or an array to load multiple functions at once.

`scope`: The scope that the functions should be available from. This is `window` by default.

#### Returns
Boolean

### Example
```javascript
Expose('inArray');

// Or

var scope = {};
Expose(['inArray', 'toArray', 'Format'], scope);
```

## Functions

### `toArray`
You can use `toArray` to convert array-like objects, such as a nodelist, to an array.

#### Usage
```javascript
toArray(nonArray);
```

#### Parameters
`nonArray`: The array-like object to convert.

#### Returns
Array or Error

#### Example
```javascript
Expose('toArray');

var divs = document.querySelectorAll('div'),
    arr_div = toArray(divs);
```

### `forEach`
You can use `forEach` to loop over an array or object (_or actually anything that can be looped through_).

#### Usage
```javascript
forEach(thing, callback);
```

#### Parameters
`thing`: The array or object (_or whatever_) to loop through.

`callback`: The function to execute upon looping. You can pass two parameters to the callback which are `value` and `key`.

#### Returns
Boolean or Error

#### Example
```javascript
Expose('forEach');

function consoleLogArguments() {
    forEach(arguments, function(value) {
        console.log('Argument: ' + value);
    });
}

consoleLogArguments('Hello');
```

### `Range`
`Range` can be used to generate a sequence of numbers.

#### Usage
```javascript
Range(first, second);
```

#### Parameters
`first`: The number to start the sequence.

`second`: The number that ends the sequence.

#### Returns
Array or Error

#### Example
```javascript
Expose('Range');

one210 = Range(1, 10); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
ten201 = Range(10, 1); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
```

### `Format`
You can use `Format` to create formatted strings. Instead of percentage-signified placeholders, `Format` searches for numerical indexes wrapped around in curly braces in the string provided.

#### Usage
```javascript
Format(string, param1, param2...);

// Or
Format(string, [param1, param2...]);
```

#### Parameters
`string`: The string to process and return.

`params`: The values of each numerical index in the string (_in order_). You can either provide the parameters as separate arguments after the string, or within an array after the string.

#### Returns
String or Error

#### Example
```javascript
Expose('Format');

Format('Hello, my name is {0} and I am {1} years old.', 'Sharikul', 18)

// Or
Format('Hello, my name is {0} and I am {1} years old.', ['Sharikul', 18]);

// Returns "Hello, my name is Sharikul and I am 18 years old."
```

### `Count`
You can use `Count` to return the length of the array or object provided.

#### Usage
```javascript
Count(objOrArray);
```

#### Parameters
`objOrArray`: The object or array to check.

#### Returns
Integer or Error

#### Example
```javascript
Expose('Count');

var obj = {name: 'Sharikul', age: 18},
    arr = ['name', 'Sharikul', 'age', 18];

Count(obj); // 2
Count(arr); // 4
```

### `Compare`
`Compare` allows you to check whether multiple variables meet the specified condition and are all equal to a particular value.

#### Usage
```javascript
Compare(var1, var2..., operator, value);
```

#### Parameters
`vars`: Since `Concat` doesn't hardcode the variables that it expects, you can provide any number of variables to check upon. 

`operator`: How you want to check the variables. You can supply: `=`, `!=`, `>`, `<`, `>=`, `<=`.

`value`: The value that you want to check is contained in the variables supplied.

#### Returns
Boolean or Error

#### Example
```javascript
Expose('Compare');

var var1 = 'Sharikul',
    var2 = 'Sharikul',
    var3 = 18,
    var4 = 19;

Compare(var1, var2, '=', 'Sharikul'); // true
Compare(var1, var2, var3, '=', 18); // false
Compare(var3, var4, '>', 15); // true
```

### `Concat`
You can use `Concat` to merge several arrays into one array.

#### Usage
```javascript
Concat(array1, array2...);
```

#### Parameters
`array`: Since `Concat` doesn't hardcode the number of arrays it requires, you can supply any number of arrays as arguments to merge.

#### Returns
Array or Error

#### Example
```javascript
Expose('Concat');

var array1 = [1,2]
    array2 = [3,4]
    array3 = ['Sharikul', 18];

Concat(array1, array2, array3); // [1, 2, 3, 4, 'Sharikul', 18];
```

### `attachEvent`
`attachEvent` allows you to attach an event listener to elements. The difference here is that you can attach one event with a callback to a variety of elements altogether.

#### Usage
```javascript
attachEvent(event, callback, elements, bubble);
```

#### Parameters
`event`: The name of the event listener to attach. Examples include `click`, `mouseover`.

`callback`: The function to execute when the event is fired.

`elements`: The elements that should have the event attached to. This can be supplied as a string, or an array containing a variety of elements.

`bubble`: Boolean to dictate whether to enable event bubbling. `false` by default.

#### Returns
Boolean or Error

#### Example
```javascript
Expose('attachEvent');
```

```html
<button id="button">Button</button>
<input type="button" id="ibutton">Input button
```

```javascript
attachEvent('click', function() {
    alert('You clicked!');
}, ['#button', '#ibutton']);

// Or
attachEvent('click', function() {
    alert('You clicked!'); 
}, '#button');
```

### `typeOf`
`typeOf` operates like `typeof`, but with support for a variety of types, including `array` and `nodelist`.

#### Usage
```javascript
typeOf(element);
```

#### Parameters
`element`: The element whose type should be checked.

#### Returns
String

#### Example
```javascript
Expose('typeOf');

typeOf('string'); // 'string'
typeOf([1,2]); // 'array'
typeOf( document.querySelectorAll('body') ); // 'nodelist'
```

### `Store`
`Store` acts as a wrapper around the HTML 5 specific `local` and `session` storage functions. 

#### Usage
```javascript
Store(access, key, value);
```

#### Parameters
`access`: A string representing the storage type and access method to use, separated by a dot (_period_).

`key`: A string that represents a record in the respective storage.

`value`: Only to be specified when creating a new record.

#### Returns
Mixed or Error

#### Example
```javascript
Expose('Store');

// Set an item in the local storage. Similar with session storage.
Store('session.set', 'name', 'Sharikul');

// Get the value of an item
Store('session.get', 'name'); // 'Sharikul'
```