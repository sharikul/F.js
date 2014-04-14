do ->

    F = 
        toArray: (nonArray) ->
            if not F.isArray nonArray
                array = []

                for key of nonArray
                    array[key] = nonArray[key]

                return array

            F._TypeError '[toArray] Argument 1 must be an array'


        forEach: (object, callback) ->
            if typeof object is 'object' and typeof callback is 'function'
                for key of object
                    callback object[key], key

                return yes

            # CoffeeScript interpolation instead of F.js string formatting
            F._TypeError "[forEach] Types of argument 1 and 2 must be object and function, but got: #{F.typeOf(object)} and #{F.typeOf(callback)}"


        Range: (first, second) ->
            if F.isNumber(first, second)
                if first > second
                    range = [first..second]
                else
                    range = [second..first]

                range

            F._TypeError "[Range] Arguments 1 and 2 must be numbers, but types on this call are: #{F.typeOf(first)} and #{f.typeOf(second)} respectively."
