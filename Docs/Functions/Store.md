# `Store`
A wrapper around the HTML 5 local storage system. _Defined on line [315](../../F.js#L315)_.

## Use
```
Store(access, key, value);
```

### Parameters
* `access` (_string_): The access method, specifying the storage location and action, separated by a dot.
* `key` (_string_): The name of the record to be stored.
* `value` (_mixed_): The value that is stored in the record.

### Returns
* `Mixed`
* `Error`

## Example
```javascript
Expose('Store');

// Store a record in the session storage; similar functionality with local storage.
Store('session.set', 'name', 'Sharikul');
Store('session.set', 'age', 18);

// Retrieve a value from a record in the session storage; similar functionality with local storage.
Store('session.get', 'name');
Store('session.get', 'age');
```