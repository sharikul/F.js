/**
 * F.js JavaScript library. Authored in 2014 by Sharikul Islam.
 * @author Sharikul Islam
 */

(function() {

    var F = {

        /**
         * Simples, a -to-array converter, e.g. a nodelist.
         * @return array
         *
         * Usage:
         *      toArray(NodeList[5])
         *  
         *  Returns:
         *      Array[5]
         */

        toArray: function(nonArray) {
            var array = [];

            if(!F.isArray(nonArray)) {

                for(var key in nonArray) {
                    array[key] = nonArray[key];
                }
            }

            return array;
        },

        /**
         * Similar to Array.prototype.forEach, but supports objects and arrays.
         * @return mixed
         *
         * Usage:
         *      var obj = {name: 'Sharikul', age: 18}
         *      forEach(obj, function(value) {alert(value)});  
         */

        forEach: function(object, callback) {
            if(object && callback) {
                for(var key in object) {
                    callback(object[key], key);
                }

                return true;
            }

            throw F._TypeError('Types of arguments 1 and 2 must be object and function, but got: {0} and {1}, respectively.', F.typeOf(object), F.typeOf(callback));
        },

        /**
         * A range generator.
         * @return array
         *
         * Usage:
         *      Range(1,10)
         *
         *   Returns:
         *      [1,2,3,4,5,6,7,8,9,10]
         */

        Range: function(first, second) {
            if(F.isNumber(first, second)) {
                var range = [];

                if(first < second) {
                    for(var i = first; i <= second; ++i) {
                        range.push(i);
                    }
                }

                else {
                    for(var i = first; i >= second; --i) {
                        range.push(i);
                    }
                }

                return range;
            }



            throw TypeError(F.Format('Arguments 1 and 2 must be numbers, but type is: {0} and {1} respectively.', F.typeOf(first), F.typeOf(second)));
            return false;
        },

        /**
         * String formatter using numerical indexes representing arguments order after string.
         * @return string
         *
         * Usage:
         *      Format('Hello, {0}. You are {1} years old.', 'Sharikul', 18)
         *      == OR ==
         *      Format('Hello, {0}. You are {1} years old.', ['Sharikul', 18])
         *
         *   Returns:
         *      'Hello, Sharikul. You are 18 years old.'
         */

        Format: function(string) {
            if(F.isString(string)) {
                var args = arguments;
                return string.replace(/{([0-9]+)}/g, function(raw, number) {
                    number = Number(number);

                    if(F.isArray(args[1])) {
                        return !F.isUndefined(args[1][number]) ? args[1][number]: raw;
                    }

                    else if(!F.isUndefined(args[number + 1])) {
                        return args[number + 1];
                    }

                    else {
                        return raw;
                    }

                });
            }

            throw TypeError('Argument 1 must be a string.');
            return false;
        },

        /**
         * Returns the number of items in the array or object provided.
         * @return int
         *
         * Usage:
         *     Count(['name', 'Sharikul', 'age', 18]);
         *     Count({name: 'Sharikul', age: 18});
         *
         *  Returns:
         *      4
         *      2
         */
        
        Count: function(objOrArray) {
            var count = 0;

            if(F.isArray(objOrArray) || F.isObject(objOrArray)) {
                count = F.isArray(objOrArray) ? objOrArray.length: Object.keys(objOrArray).length;
            }

            return count;
        },

        /**
         * Array concatenator that can merge several arrays into one MASTER array.
         * @return array
         *
         * Definitions:
         *  A nested group array is one that retains the array quality of the subarrays and is presented like:
         *  [[Array 1], [Array 2]]
         *  The default behaviour is to extract their individual values and store them in the master array
         */

        Concat: function() {
            var masterArray = [];

            for(var i = 0; i < arguments.length; i++) {
                var argument = arguments[i],
                    nestedGroup = F.isBoolean(arguments[arguments.length - 1]) && arguments[arguments.length - 1] === true ? true: false;

                if(F.isArray(argument)) {
                    if(nestedGroup) {
                        masterArray.push(argument);
                    }

                    else {
                        argument.forEach(function(item) {
                            masterArray.push(item);
                        });
                    }
                }
            }

            return masterArray;
        },

        /**
         * Custom event handler register. Allows for an event with a callback to be attached to various elements.
         * @return boolean
         *
         * Usage:
         *      attachEvent('click', function() {
         *          alert('Stop clicking me!');
         *       }, ['#button', 'body']);
         */

        attachEvent: function(event, callback, element, bubble) {
            var elements = F.getElement(element), 
                successful = false;

            if(F.isUndefined(bubble)) {
                bubble = false;
            }

            if(F.Count(elements) > 0) {
                F.forEach(elements, function(item) {
                    if(item.addEventListener) {
                        item.addEventListener(event, callback, bubble);
                        successful = true;
                    }

                    else if(item.attachEvent) {
                        item.attachEvent('on' + event, callback);
                        successful = true;
                    }
                });
            }

            return successful;
        },

        /**
         * Custom type checker. Differentiate's between arrays and objects.
         * @return string
         *
         * Usage:
         *     typeOf([1,2])
         *     typeOf({name: 'Sharikul'})
         *     typeOf(document.querySelectorAll(query))
         *
         *  Returns:
         *      'array'
         *      'object'
         *      'nodelist'
         */

        typeOf: function(element) {
            return ({}).toString.call(element).match(/\[object (.*?)\]/)[1].toLowerCase();
        },

        /**
         * A wrapper around the local storage and session storage functions.
         * @return mixed
         *
         * Usage:
         *     Store('session.set', 'id', 8)
         *     Store('session.get', 'id')
         *
         *  Returns:
         *      '8'
         */

        Store: function(access, key, value) {
            if(F.isUndefined(window.localStorage, window.sessionStorage) || F.isUndefined(access, key)) {
                return false;
            }

            var split = access.split('.'),
                storage = split[0].toLowerCase(), // local or session?
                action = split[1].toLowerCase(); // get/set/remove?

            return window[storage + 'Storage'][action + 'Item'](key, value);
        },

        /**
         * Capitalize's the first letter of the word provided.
         * @return string|boolean
         * 
         * Usage:
         *     upperCaseFirst('sharikul')
         *
         *  Returns:
         *      'Sharikul'
         */
        
        upperCaseFirst: function(word) {
            if(F.isString(word)) {
                return word.charAt(0).match(/[A-z]/) ? word.charAt(0).toUpperCase() + word.slice(1): word;
            }

            return false;
        },

        /**
         * Capitalize's words in the provided string.
         * @return string|boolean
         *
         * Usage:
         *     Capitalize('hello, my name is sharikul')
         *
         *  Returns:
         *      'Hello, My Name Is Sharikul'
         */

        Capitalize: function(string) {
            if(F.isString(string)) {
                var sentence = '',
                    words = string.match(/\s/g) ? string.split(/\s+/g): string;

                if(F.isArray(words)) {
                    F.forEach(words, function(_word) {
                        sentence += F.upperCaseFirst(_word) + ' ';
                    });
                }

                else {
                    sentence = F.upperCaseFirst(words);
                }

                return F.Trim(sentence);
            }


            return false;
        },

        /**
         * Checks whether the string provided exists in the array provided.
         * @return boolean
         *
         * Usage:
         *     inArray(['sharikul', 18], 'sharikul')
         *
         *  Returns:
         *      true
         */
        
        inArray: function(array, value) {
            var successful = false;

            if(F.isArray(array) && value) {
                F.forEach(array, function(item) {
                    if(item === value) {
                        successful = true;
                    }
                });
            }

            return successful;
        },

        /**
         * Removes whitespace around the string provided.
         * @return string|boolean
         *
         * Usage:
         *     Trim('    Sharikul    ')
         *
         *  Returns:
         *      'Sharikul'
         */
        
        Trim: function(word) {
            return F.isString(word) ? word.replace(/^\s+|\s+$/g, ''): false;
        },

        /**
         * Removes whitespace at the beginning of the string provided only.
         * @return string|boolean
         *
         * Usage:
         *     lTrim('     Sharikul     ')
         *
         *  Returns:
         *      'Sharikul     '
         */
        
        lTrim: function(word) {
            return F.isString(word) ? word.replace(/^\s+/, ''): false;
        },

        /**
         * Removes whitespace at the end of the string provided only.
         * @return string|boolean
         *
         * Usage:
         *     rTrim('     Sharikul     ')
         *
         *  Returns:
         *      '     Sharikul'
         */
        
        rTrim: function(word) {
            return F.isString(word) ? word.replace(/\s+$/, ''): false;
        },

        /**
         * Checks if the function exists in the scope provided, window by default.
         * @return boolean
         *
         * Usage:
         *     function fn() {return 'fn';}
         *     functionExists('fn')
         *
         *  Returns:
         *      true
         */
        
        functionExists: function(fn, scope) {
            if(F.isString(fn)) {
                if(F.isUndefined(scope)) {
                    scope = window;
                }

                return !F.isUndefined(scope[fn]) && F.isFunction(scope[fn]);
            }

            return false;
        },

        /**
         * An element getter. Allows various types of elements to be retrieved.
         * @return array
         */
        
        getElement: function(element) {
            if(F.isUndefined(document.querySelectorAll, document.getElementsByName)) {
                return false;
            }

            var elements = [];

            if(F.isString(element)) {
                elements = F.Concat(elements, F.toArray(document.querySelectorAll(element)));

                if(document.getElementsByName(element)) {
                    elements = F.Concat(elements, F.toArray(document.getElementsByName(element)));
                }
            }

            else if(F.isArray(element)) {
                F.forEach(element, function(selector) {
                    elements = F.Concat(elements, F.toArray(document.querySelectorAll(selector)));

                    if(document.getElementsByName(element)) {
                        elements = F.Concat(elements, F.toArray(document.getElementsByName(selector)));
                    }
                });
            }

            return elements;
        },

        /**
         * Allows elements to be styled with CSS. Also allows styling of multiple elements in one go.
         * @return array
         */
        
        addStyle: function(element, style) {
            var elements = F.getElement(element);

            if(F.Count(elements) > 0) {
                if(F.isObject(style)) {

                    F.forEach(style, function(value, property) {
                        F.forEach(elements, function(elem) {
                            elem.style[property] = value;
                        });
                    });
                }
            }

            return elements;
        },

        /**
         * Add's classes to the elements specified.
         * @return array
         */

        addClass: function(_class, element) {
            if(F.isArray(_class)) {
                _class = _class.join(' ');
            }

            var elements = F.getElement(element);

            if(F.Count(elements) > 0) {
                F.forEach(elements, function(elem) {
                    elem.className += _class;
                });
            }

            return elements;
        },

        /**
         * Determine's whether elements specified contain the class(es) specified.
         * @return boolean
         */

        hasClass: function(_class, element) {
            if(F.isArray(_class)) {
                _class = _class.join(' ');
            }

            var hasClass = false;

            F.forEach(F.getElement(element), function(elem) {
                hasClass = elem.className.match(_class) ? true: false;
            });

            return hasClass;
        },

        /**
         * Removes the class(es) specified from the elements specified.
         * @return array
         */
        
        removeClass: function(_class, element) {
            if(F.isArray(_class)) {
                _class = _class.join(' ');
            }

            var elements = F.getElement(element);

            if(F.Count(elements) > 0) {
                F.forEach(elements, function(elem, order) {
                    if(elem.className.match(_class)) {
                        elements[order].className = F.Trim(elem.className.replace(_class, ''));
                    }
                });
            }

            return elements;
        },

        /**
         * Sets the attributes provided to the elements specified
         * @return array
         *
         * Usage:
         *     === HTML (Start) ===
         *       <button id="button">Button</button>
         *       <p id="paragraph">Paragraph</p>
         *     === HTML (End) ===
         *
         *     setAttribute({
         *         'class': 'class',
         *         contenteditable: false
         *     }, ['#button', '#paragraph'])
         *
         *      == OR ==
         *
         *     setAttribute({
         *         'class': 'class',
         *         contenteditable: false
         *     }, '#paragraph')
         */    
        

        setAttribute: function(attribute, element) {
            var elements = F.getElement(element);

            if(F.Count(attribute) > 0 && F.Count(elements) > 0) {
                F.forEach(attribute, function(value, attr) {
                    F.forEach(elements, function(elem) {
                        elem.setAttribute(attr, value);
                    });
                });
            }

            return elements;
        },

        /**
         * Checks whether the specified attribute(s) has been set on the element(s).
         * @return boolean
         */

        hasAttribute: function(attribute, element) {
            var hasAttribute = undefined,
                elements = F.getElement(element);

            if(F.Count(attribute) > 0 && F.Count(elements) > 0) {
                F.forEach(elements, function(elem) {
                    if(F.isString(attribute)) {
                        hasAttribute = hasAttribute !== false ? elem.hasAttribute(attribute): false;
                    }

                    else if(F.isArray(attribute)) {
                        F.forEach(attribute, function(attr) {
                            hasAttribute = hasAttribute !== false ? elem.hasAttribute(attr): false;
                        });
                    }
                });
            }

            return hasAttribute;
        },

        /**
         * Removes the specified attribute(s) from the element(s) provided.
         */

        removeAttribute: function(attribute, element) {
            var elements = F.getElement(element);

            if(F.Count(elements) > 0) {
                F.forEach(elements, function(elem) {
                    if(F.isString(attribute)) {
                        elem.removeAttribute(attribute);
                    }

                    else if(F.isArray(attribute)) {
                        F.forEach(attribute, function(attr) {
                            elem.removeAttribute(attr);
                        });
                    }
                });
            }

            return elements;
        }
    };

    /**
     * A loop to generate various type helpers, prefixed with 'is'.
     *
     * Functions that will be created are:
     *     isObject
     *     isString
     *     isNumber
     *     isBoolean
     *     isFunction
     *     isNull
     *     isArray
     *     isUndefined
     *
     * @uses F.typeOf
     * @return boolean
     *
     * Usage:
     *      isString('Sharikul')
     *      isBoolean(false)
     *      isArray([1,2])
     *
     *  Returns:
     *      true
     */
    
    F.forEach(['Object', 'String', 'Number', 'Boolean', 'Function', 'Null', 'Array', 'Undefined'], function(type) {

        if(typeof F['is' + type] !== 'function') {
            F['is' + type] = function() {
                if(arguments.length === 0) {
                    return false;
                }

                for(var i = 0; i < arguments.length; i++) {
                    if(F.typeOf(arguments[i]) !== type.toLowerCase()) {
                        return false;
                    }
                }

                return true;

            }
        }
        
    });

    /**
     * A loop to generate functional sugar wrappers around various events prefixed with 'on'.
     *
     * Functions that will be created are:
     *     onClick
     *     onMouseDown
     *     onMouseUp
     *     onMouseOut
     *     onMouseOver
     *     onDblClick
     *     onMouseMove
     *     onKeyDown
     *     onKeyPress
     *     onKeyUp
     *     onChange
     *     onSelect
     * 
     * @uses F.attachEvent
     * @return boolean
     *
     * Usage:
     *     onClick(function() {
     *         console.log('clicked!');
     *     }, ['#id', '.class', 'element'])
     */
    
    F.forEach(['Click', 'MouseDown', 'MouseUp', 'MouseOut', 'MouseOver', 'DblClick', 'MouseMove', 'KeyDown', 'KeyPress', 'KeyUp', 'Change', 'Select'], function(event) {

        if(!F.isFunction(F['on' + event])) {
            F['on' + event] = function(callback, element, bubble) {
                return F.attachEvent(event.toLowerCase(), callback, element, bubble);
            }
        }
    });

    /**
     * A loop to generate various error handlers, prefixed with '_' and supports formatted strings.
     *
     * Functions that will be created are:
     *     _SyntaxError
     *     _TypeError
     *     _ReferenceError
     *     _URIError
     *     _EvalError
     *     _EvalError
     *     _Error
     *     _RangeError
     *     
     * @uses F.Format, F.toArray
     *
     * Usage:
     *     _SyntaxError('Error message: {0}', 'Message')
     *
     *      OR
     *     _SyntaxError('Error message: {0}', ['Message'])
     */

    F.forEach(['SyntaxError', 'TypeError', 'ReferenceError', 'URIError', 'EvalError', 'Error', 'RangeError'], function(error) {

        if(!F.isFunction(F['_' + error])) {
            F['_' + error] = function(message) {
                var args = F.toArray(arguments).slice(1),
                    arg = F.isArray(args[0]) ? args[0]: args; 

                throw new window[error](F.Format(message, arg));
                return false;
            }
        }
    });

    /**
     * A loop to generate trim functions to be used on arrays.
     *
     * Functions that will be created are:
     *     arrayTrim
     *     arrayRTrim
     *     arrayLTrim
     *
     * @uses F.Trim, F.lTrim, F.rTrim
     * @return array
     */

    F.forEach(['Trim', 'rTrim', 'lTrim'], function(fn) {
        if(!F.isFunction(F['array' + F.upperCaseFirst(fn)])) {

            F['array' + F.upperCaseFirst(fn)] = function(array) {
                if(F.isArray(array)) {
                    F.forEach(array, function(value, key) {
                        array[key] = F[fn](value);
                    });
                }

                return array;
            }
        }
    });

    /**
     * Enables the individual loading of F.js functions. Available from the window scope by default.
     * @return mixed
     *
     * Usage:
     *      Expose(['isString', 'isNumber', 'isBoolean', 'isUndefined'])
     *      var obj = {}; Expose('Range', obj);
     *
     *  Returns:
     *      true
     */

    window.Expose = function(fn, scope) {
        if(F.isUndefined(scope)) {
            scope = window;
        }

        var failed = true;

        if(fn === '*') {
            F.forEach(F, function(func, name) {
                scope[name] = func;
                failed = false;
            });
        }

        else if(F.isString(fn) && fn !== '*') {
            scope[fn] = F[fn];
            failed = false;
        }

        else if(F.isArray(fn)) {
            fn.forEach(function(_fn) {
                scope[_fn] = F[_fn];
                failed = false;
            });
        }

        return failed === false;
    }



})();