# `attachEvent`
To attach event listeners to HTML elements. _Defined on line [260](../../F.js#L260)_.

## Use
```
attachEvent(event, callback, element, bubble);
```

### Parameters
* `event` (_string_): The event to attach, such as `click` or `mouseover`.
* `callback` (_function_): The callback to execute in the execution of the event.
* `element` (_string_ or _array_): The element(s) to attach the event to, identified by name, id, or class (_or all in an array_).
* `bubble`: Enable or disable event bubbling. This is `false` (_disabled_) by default.

### Returns
* `Boolean`
* `Error`

## Example
```javascript
Expose('attachEvent');
```

```html
<button id="first">Click to show alert</button>
<button id="second">Click to show alert</button>
```

```javascript
attachEvent('click', function() {
  alert("You've clicked!");
}, ['#first', '#second']);

// Or
attachEvent('click', function() {
  alert("You've clicked");
}, 'button');
```
