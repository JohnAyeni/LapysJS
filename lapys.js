/**
    @author: Lapys Dev Team
    @currentUpdate: <access-value>, <if>, <elif>, <else>, <for>, <foreach>, <switch>, <case>, <default> and <while> Elements installed.
    @description: LapysJS is a JavaScript library with its independent CSS framework designed to make JavaScript more forgiving and faster to script.
    @version: 0.0.1

        --- NOTE ---
            Use the 'Array.forEach' method for non-counter iterations.
*/
/* Strict Mode */
'use strict';

/* Global Data
        --- CONSIDER ---
            All Global Data here only act as fallback
            in severe cases.

            Although this really should be considered
            as majority of the variables declared here are
            built-in properties of the DOM.
*/
    // Event
    var event = window.event || new Event('') || [];
        // Code
        event.code = '';

        // Control Key
        event.ctrlKey;

        /* Fallback
                --- CONSIDER ---
                    This lets developers know that this is a fallback
                    'Event' object variable.
        */
        Event.prototype.fallback = false;
        event.fallback = true;

        // Meta Key
        event.metaKey;

        // Key
        event.key = '';

        // Shift Key
        event.shiftKey;

    // Global
    window.global || (window.global = window);

    // JSON
    var JSON = window.JSON || [];
        // Convert Arrays to Object
        JSON.convertArraysToObject || (JSON.convertArraysToObject = (arrayA, arrayB) => {
            /* Logic
                    If
                        Array A and Array B are both Arrays,

                    else if
                        Array B is not an Array,

                    else if
                        Array A is not an Array.
            */
            if (
                (arrayA || '').constructor.name === 'Array' &&
                (arrayB || '').constructor.name === 'Array'
            ) {
                // Modification > (Array A, Array B) > Length
                arrayA.length = max(arrayA.length, arrayB.length);
                arrayB.length = max(arrayA.length, arrayB.length);

                // Initialization > Object
                let object = {};

                /* Loop
                        Iterate over the length of Array A.

                    > Update > Object > [Array A > Element]
                */
                for (let i = 0; i < arrayA.length; i += 1)
                    object[String(arrayA[i])] = arrayB[i];

                // Return
                return object
            }

            else if ((arrayA || '').constructor.name === 'Array' && (arrayB || []).constructor.name !== 'Array')
                // LapysJS > Error
                LapysJS.error('The values (in a second array) need to be defined for the "JSON.convertArraysToObject()" method.');

            else if ((arrayA || []).constructor.name !== 'Array' && (arrayB || '').constructor.name === 'Array')
                // LapysJS > Error
                LapysJS.error('The keys (in the first array) need to be defined for the "JSON.convertArraysToObject()" method.');

            else
                // LapysJS > Error
                LapysJS.error('Invalid objects parsed in the "JSON.convertArraysToObject()" method, use arrays instead.')
        });

        // Parse
        JSON.parse = JSON.parse || ((data) => {
            // Return
            return data
        });

        // Stringify
        JSON.stringify = JSON.stringify || ((data) => {
            // Return
            return data
        });

    // String
    var String = window.String || window.toString || JSON.stringify || ((data) => {
        // Return
        return data
    });

/* Window */
    /* Event > Window > Blur > Set Timeout
            --- NOTE ---
                'setEvent()' needs to be defined before this function runs.
    */
    setTimeout(() => {
        window.setEvent('blur', (event) => {
            /* Loop
                    Index all Select Boxes.
            */
            for (let i = 0; i < document.querySelectorAll('input.select-box[data-id]').length; i += 1)
                // Modification > Option Box > Hide
                document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[i].getAttribute("data-id")}']`)[1].hidden = true
        })
    });

    // Console > Print
    console.print || (console.print = console.log);

    // Location > Query Parameters
    location.queryParameters || (location.queryParameters = (() => {
        /* Logic
                If
                    Location > Search is not "empty".
        */
        if (location.search.trim()) {
            // Initialization > URL
            let url = [];

            /* Loop
                    Index all Query Parameters.
            */
            for (let i = 0; i < location.search.replace('?', '').replace(/&/g, ',').split(/,/g).length; i += 1)
                // Update > URL
                url.push({
                    // Name
                    name: location.search.replace('?', '').replace(/&/g, ',').split(/,/g)[i].slice(0, location.search.replace('?', '').replace(/&/g, ',').split(/,/g)[i].indexOf('=')),

                    // Value
                    value: location.search.replace('?', '').replace(/&/g, ',').split(/,/g)[i].slice(location.search.replace('?', '').replace(/&/g, ',').split(/,/g)[i].indexOf('=') + '='.length)
               });

            // Return
            return url
        }

        else
            // Return
            return []
    })());

    // Math
        // Range
        (Math.random || []).range || (Math.random.range = (start, end) => {
            /* Logic
                    If
                        Start is a number
                            and
                        End is a number.

                > Return
            */
            if ((typeof start === 'number') && (typeof end === 'number'))
                return (Math.random() * end) + start
        });

        // Root
        Math.root || (Math.root = (data, power) => {
            /* Logic
                    If
                        Data is a number
                            and
                        Power is a number.

                > Return
            */
            if ((typeof data === 'number') && (typeof power === 'number'))
                return data ** (1 / power);

            else
                return NaN
        });

    // Boolean
    window.bool || (window.bool = (data) => {
        // Return
        return !!data
    });

    // Ceiling
    window.ceil || (window.ceil = (data, invert) => {
        /* Logic
                If
                    Data is a number.
        */
        if (typeof data === 'number') {
            /* Logic
                    If
                        Invert is false.

                > Return
            */
            if (!invert && Math.ceil)
                /* Logic
                        If
                            'Math.ceil' is defined.
                */
                if (Math.ceil)
                    // Return
                    return Math.ceil(data);

                else
                    /* Logic
                            If
                                there"s a decimal in the Data.

                        > Return
                    */
                    if (String(data).getAfterChar('.'))
                        return parseFloat(String(data).getBeforeChar('.')) + 1;

                    else
                        return parseFloat(String(data).getBeforeChar('.'));

            else
                /* Logic
                        If
                            'Math.floor' is defined.

                    > Return
                */
                if (Math.floor)
                    return Math.floor(data);

                else
                    return parseFloat(String(data).getBeforeChar('.'))
        }
    });

    /* Cookie
            --- CONSIDER ---
                Should this just point to the Document"s Cookie property.
    */
    window.$_COOKIE || (window.$_COOKIE = document.cookie);

    // Cube Root
    window.cbrt || (window.cbrt = Math.cbrt || function cbrt(data) {
        /* Logic
                If
                    Data is a number.

            > Return
        */
        if (typeof data === 'number')
            return data ** 0.3333333333333333;

        else
            return NaN
    });

    // Date
    window.date || (window.date = new Date());
        // Date
        date.date = (utc) => {
            /* Logic
                    If
                        UTC is false.

                > Return
            */
            if (!utc)
                return new Date().getDate();

            else
                return new Date().getUTCDate()
        };

        // Day
        date.day = () => {
            /* Logic
                    Switch
                        case to the Day of the Week"s Index.

                > Return
            */
            switch (new Date().getDay()) {
                // 0
                case 0:
                    return 'Sunday';
                    break;

                // 1
                case 1:
                    return 'Monday';
                    break;

                // 2
                case 2:
                    return 'Tuesday';
                    break;

                // 3
                case 3:
                    return 'Wednesday';
                    break;

                // 4
                case 4:
                    return 'Thursday';
                    break;

                // 5
                case 5:
                    return 'Friday';
                    break;

                // 6
                case 6:
                    return 'Saturday'
            }
        };

        // Hours
        date.hours = (utc) => {
            /* Logic
                    If
                        UTC is false.

                > Return
            */
            if (!utc)
                return new Date().getHours();

            else
                return new Date().getUTCHours()
        };

        // Milli-Seconds
        date.mSecs = (utc) => {
            /* Logic
                    If
                        UTC is false.

                > Return
            */
            if (!utc)
                return new Date().getMilliseconds();

            else
                return new Date().getUTCMilliseconds()
        };

        // Minutes
        date.mins = (utc) => {
            /* Logic
                    If
                        UTC is false.

                > Return
            */
            if (!utc)
                return new Date().getMinutes();

            else
                return new Date().getUTCMinutes()
        };

        // Month
        date.month = (utc) => {
            /* Logic
                    If
                        UTC is false.

                > Return
            */
            if (!utc)
                return new Date().getMonth();

            else
                return new Date().getUTCMonth()
        };

        // Seconds
        date.secs = (utc) => {
            /* Logic
                    If
                        UTC is false.

                > Return
            */
            if (!utc)
                return new Date().getSeconds();

            else
                return new Date().getUTCSeconds()
        };

        // Time
        date.time = () => {
            // Return
            return new Date().getTime()
        };

        // Year
        date.year = (utc) => {
            /* Logic
                    If
                        UTC is false.

                > Return
            */
            if (!utc)
                return new Date().getFullYear();

            else
                return new Date().getUTCFullYear()
        };

    // Decimal Point
    window.dp || (window.dp = (data, placeholder = 0) => {
        // Update > Placeholder
        (placeholder <= 20) || (placeholder = 20);

        /* Logic
                If
                    Data is a Number.

            > Return
        */
        if (typeof data === 'number')
            return parseFloat(data .toFixed(placeholder));

        else
            return NaN
    });

    // Execute
    window.exec || (window.exec = window.eval);

    // Fixed
    window.fix || (window.fix = (data, placeholder = 0) => {
        // Update > Placeholder
        (placeholder <= 20) || (placeholder = 20);

        /* Logic
                If
                    Data is a Number.

            > Return
        */
        if (typeof data === 'number')
            return parseFloat(data .toFixed(placeholder));

        else
            return NaN
    });

    // Float
    window.float || (window.float = parseFloat);

    // Floor
    window.floor || (window.floor = (data, invert) => {
        /* Logic
                If
                    Data is a number.
        */
        if (typeof data === 'number') {
            /* Logic
                    If
                        Invert is false.

                > Return
            */
            if (!invert && Math.floor)
                /* Logic
                        If
                            'Math.floor' is defined.

                    > Return
                */
                if (Math.floor)
                    return Math.floor(data);

                else
                    return parseFloat(String(data).getBeforeChar('.'));

            else
                /* Logic
                        If
                            'Math.ceil' is defined.
                */
                if (Math.ceil)
                    // Return
                    return Math.ceil(data);

                else
                    /* Logic
                            If
                                there"s a decimal in the Data.

                        > Return
                    */
                    if (String(data).getAfterChar('.'))
                        return parseFloat(String(data).getBeforeChar('.')) + 1;

                    else
                        return parseFloat(String(data).getBeforeChar('.'))
        }
    });

    // Get
    window.$_GET || (window.$_GET = (() => {
        /* Logic
                If
                    Location > Search is not "empty".
        */
        if (location.search.trim()) {
            // Initialization > URL
            let url = [];

            /* Loop
                    Index all Query Parameters.
            */
            for (let i = 0; i < location.search.replace('?', '').replace(/&/g, ',').split(/,/g).length; i += 1)
                // Update > URL
                url[location.search.replace('?', '').replace(/&/g, ',').split(/,/g)[i].slice(0, location.search.replace('?', '').replace(/&/g, ',').split(/,/g)[i].indexOf('='))] = location.search.replace('?', '').replace(/&/g, ',').split(/,/g)[i].slice(location.search.replace('?', '').replace(/&/g, ',').split(/,/g)[i].indexOf('=') + '='.length);

            // Return
            return url
        }

        else
            // Return
            return []
    })());

    // Globals
        // Set Timeout
        setTimeout(() => {
            window.$GLOBALS || (window.$GLOBALS = {
                // Cookie
                _COOKIE: $_COOKIE,

                // Get
                _GET: $_GET,

                // Request
                _REQUEST: $_REQUEST,

                // Server
                _SERVER: $_SERVER,
            })
        });

    // Integer
    window.int || (window.int = parseInt);

    // Length
    window.len || (window.len = (data) => {
        /* Logic
                If
                    Data"s length is a number.
        */
        if (typeof (data || new Object()).length === 'number')
            // Return
            return data.length;

        // Return
        return
    });

    // Left Trim
    window.ltrim || (window.ltrim = (data) => {
        /* Logic
                If
                    Data is String.
        */
        if (typeof data === 'string')
            /* Logic
                    If Data has white-spaces within it first.

                > Return
            */
            if (data[0] === ' ')
                return data.replace(/\ {1,}([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\*\(\)\_\-\+\=\[\]\{\}\|\\\:\;\'\"\<\,\>\.\?\/]|\ |\n|\t)/, (data) => {
                    // Return
                    return data.replace(/\ /g, '')
                });

            else
                return data;

        else
            // Return
            LapysJS.error('You can only trim Strings.')
    });

    // Max
    window.max || (window.max = Math.max || ((...data) => {
            // Initialization > Result
            let result = data[0];

            /* Loop
                    Index all Data elements.

                > Update > Result
            */
            for (let i = 0; i < data.length; i += 1)
                (result >= data[i]) || (result = data[i]);

            // Return
            return result
        }));

    // Min
    window.min || (window.min = Math.min || ((...data) => {
            // Initialization > Result
            let result = data[0];

            /* Loop
                    Index all Data elements.

                > Update > Result
            */
            for (let i = 0; i < data.length; i += 1)
                (result <= data[i]) || (result = data[i]);

            // Return
            return result
        }));

    // Name
    window.name || (window.name = document.title);

    // PI
    window.PI || (window.PI = Math.PI || 3.141592653589793);

    // Power
    window.pow || (window.pow = (((data, power) => {
            /* Logic
                    If
                        both parameters are numbers.

                > Return
            */
            if ((typeof data === 'number') && (typeof power === 'number'))
                return data ** power
        })));

    // Precision
    window.prec || (window.prec = (data, placeholder = 1) => {
        // Update > Placeholder
        ((placeholder >= 1) || (placeholder = 1)) && ((placeholder <= 20) || (placeholder = 20));

        /* Logic
                If
                    Data is a Number.

            > Return
        */
        if (typeof data === 'number')
            return data .toPrecision(placeholder);

        else
            return NaN
    });

    // Random
    window.rand || (window.rand = (data) => {
        /* Logic
                If
                    Data is defined.

            > Return
        */
        if (data)
            return parseInt(Math.random() * 10);

        else
            return Math.random()
    });
        // Range
        rand.range || (rand.range = (start, end) => {
            /* Logic
                    If
                        Start is a number
                            and
                        End is a number.

                > Return
            */
            if ((typeof start === 'number') && (typeof end === 'number'))
                return (Math.random() * end) + start
        });

    // Request
    window.$_REQUEST || (window.$_REQUEST = (() => {
        /* Logic
                If
                    Location > Search is not "empty".
        */
        if (location.search.trim()) {
            // Initialization > URL
            let url = [];

            /* Loop
                    Index all Query Parameters.
            */
            for (let i = 0; i < location.search.replace('?', '').replace(/&/g, ',').split(/,/g).length; i += 1)
                // Update > URL
                url[location.search.replace('?', '').replace(/&/g, ',').split(/,/g)[i].slice(0, location.search.replace('?', '').replace(/&/g, ',').split(/,/g)[i].indexOf('='))] =  location.search.replace('?', '').replace(/&/g, ',').split(/,/g)[i].slice(location.search.replace('?', '').replace(/&/g, ',').split(/,/g)[i].indexOf('=') + '='.length);

            // Return
            return url
        }

        else
            // Return
            return []
    })());

    /* Round
            --- WARN ---
                Should be defined after 'ceil()' and 'floor()' functions.
    */
    window.round || (window.round = Math.round || ((data) => {
            /* Logic
                    [if:else if:else statement].

                > Return
            */
            if (parseInt(String(data).getAfterChar('.')[0]) > 4)
                return window.ceil(data);

            else
                return window.floor(data)
        }));

    // Right Trim
    window.rtrim || (window.rtrim = (data) => {
        /* Logic
                If
                    Data is String.
        */
        if (typeof data === 'string')
            // Return
            return data.replace(/\ {1,}([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\*\(\)\_\-\+\=\[\]\{\}\|\\\:\;\'\"\<\,\>\.\?\/]|\ |\n|\t)/, (data) => {
                // Return
                return data.replace(/\ /g, '~:~:lapys:~:~!@#$%^&*())(*&^%$#@!~:~:lapys:~:~')
            }).trim().replace(/\~\:\~\:lapys\:\~\:\~\!\@\#\$\%\^&\*\(\)\)\(\*&\^\%\$\#\@\!\~\:\~\:lapys\:\~\:\~/g, ' ');

        else
            // Return
            LapysJS.error('You can only trim Strings.')
    });

    /* Run Interval
            --- WARN ---
                This function must be defined as such
                and should not be mutable until this script file ends.
    */
    window.runInterval = (func, interval) => {
        /* Logic
                If
                    the Function is a function.
        */
        if (typeof func === 'function') {
            // Function > Function
            func();

            // Set Interval > Function > Function
            setInterval(func, interval)
        }
    };

    // Square Root
    window.sqrt || (window.sqrt = Math.sqrt || ((data) => {
            /* Logic
                    If
                        Data is a number.

                > Return
            */
            if (typeof data === 'number')
                return data ** 0.5;

            else
                return NaN
        }));

    // Server
    window.$_SERVER || (window.$_SERVER = {
        // HTTP User Agent
        HTTP_USER_AGENT: navigator.userAgent,

        // Query String
        QUERY_STRING: location.search,

        // Request URI
        REQUEST_URI: location.pathname.split('/').pop() || location.pathname.split('#').shift(),

        // Server Name
        SERVER_NAME: location.host,

        // Server Protocol
        SERVER_PROTOCOL: location.protocol
    });

    // String
    window.str || (window.str = (data) => {
        /* Logic
                If
                    Data is an Object.
        */
        if ((data || []).constructor.name === 'Object')
            return JSON.stringify(data).slice(1, -1);

        else {
            // Initialization > Stringify
            let stringify = window.String || window.toString || JSON.stringify;

            /* Logic
                    Switch
                        case to Stringify.

                > Return
            */
            switch (stringify) {
                // Window > String
                case window.String:
                    return String(data);
                    break;

                // Window > To String
                case window.toString:
                    return data.toString();
                    break;

                // JSON > Stringify
                case JSON.stringify:
                    return JSON.stringify(data)
            }
        }
    });

    // Trim
    window.trim || (window.trim = (data) => {
        /* Logic
                If
                    Data is String.
        */
        if (typeof data === 'string')
            // Return
            return data.trim();

        else
            // LapysJS > Error
            LapysJS.error('You can only trim Strings.')
    });

/* Custom Data */
    /* LapysJS */
        // Initialization
        var LapysJS = new (function LapysJS() {
            // Initialization > Version Number
            let VER_NUMBER = '0.0.1';

            // Author
            this.author = 'Lapys Dev Team';

            // Error
            this.error = (data = '~', metadata) => {
                /* Function */
                    // Log LapysJS Error
                    const logLapysJSError = (data) => {
                        console.error(`[LapysJS v${VER_NUMBER}]: ${data}`)
                    };
                        // Log Help Sheet
                        const logLapysJSErrorLogHelpSheet = () => {
                            /* Console */
                                // Group
                                    // LapysJS Error Log Help Sheet
                                    console.group(`[LapysJS v${VER_NUMBER}]: LapysJS Error Log Help Sheet: `);
                                        console.info('~: Log this help sheet into the browser console.');
                                        console.info('~h: Log this help sheet into the browser console.');
                                        console.info('~help: Log this help sheet into the browser console.');
                                        console.info('~0000: Log this help sheet into the browser console.');
                                    console.groupEnd()
                        };

                /* Logic
                        If
                            the specified Data does not have a '~' character
                                or
                            '~' does not have a '~' character.
                */
                if (data.indexOf('~') < 0)
                    // Log LapysJS Error
                    logLapysJSError(data);

                else {
                    /* Logic
                            Switch Data case to
                                '~', '~h', '~help' and '~0000'.
                    */
                    switch (data) {
                        // ~
                        case '~':
                            // Log LapysJS Error > Log Help Sheet
                            logLapysJSErrorLogHelpSheet();
                            break;

                        // ~h
                        case '~h':
                            // Log LapysJS Error > Log Help Sheet
                            logLapysJSErrorLogHelpSheet();
                            break;

                        // ~help
                        case '~help':
                            // Log LapysJS Error > Log Help Sheet
                            logLapysJSErrorLogHelpSheet();
                            break;

                        // ~0000
                        case '~0000':
                            // Log LapysJS Error > Log Help Sheet
                            logLapysJSErrorLogHelpSheet();
                            break;

                        // [Default]
                        default:
                            // Log LapysJS Error > Log Help Sheet
                            logLapysJSErrorLogHelpSheet()
                    }
                }
            };

            // Execution
            this.executed = false;

            // Name (Title)
            this.name = 'LapysJS';

            /* Script
                    --- WARN ---
                        This property can easily be voided by file modifications.

                        The 'data-enable' attribute that comes with the <script> element is
                        not dynamic and must be pre-decided for now.
            */
            this.script = document.querySelector("script[src*='lapys.'][src*='.js']") || ((document.scripts || [])[(document.scripts || [0]).length - 1] || document.querySelectorAll('script')[document.querySelectorAll('script').length - 1]);

            // Strict Mode
            this.strictMode = (function() {
                // Return
                return !this
            })();

            // Version
            this.version = VER_NUMBER;

            // Warn
            this.warn = (data = '~', metadata) => {
                /* Function */
                    // Log LapysJS Warning
                    const logLapysJSWarning = (data) => {
                        console.warn(`[LapysJS v${VER_NUMBER}]: ${data}`)
                    };
                        // Log Help Sheet
                        const logLapysJSWarningLogHelpSheet = () => {
                            /* Console */
                                // Group
                                    // LapysJS Warning Log Help Sheet
                                    console.group(`[LapysJS v${VER_NUMBER}]: LapysJS Warning Log Help Sheet: `);
                                        console.info('~: Log this help sheet into the browser console.');
                                        console.info('~h: Log this help sheet into the browser console.');
                                        console.info('~help: Log this help sheet into the browser console.');
                                        console.info('~0000: Log this help sheet into the browser console.');
                                    console.groupEnd()
                        };

                /* Logic
                        If
                            the specified Data does not have a '~' character
                                or
                            '~' does not have a '~' character.
                */
                if (data.indexOf('~') < 0)
                    // Log LapysJS Warning
                    logLapysJSWarning(data);

                else {
                    /* Logic
                            Switch Data case to
                                '~', '~h', '~help' and '~0000'.
                    */
                    switch (data) {
                        // ~
                        case '~':
                            // Log LapysJS Warning > Log Help Sheet
                            logLapysJSWarningLogHelpSheet();
                            break;

                        // ~h
                        case '~h':
                            // Log LapysJS Warning > Log Help Sheet
                            logLapysJSWarningLogHelpSheet();
                            break;

                        // ~help
                        case '~help':
                            // Log LapysJS Warning > Log Help Sheet
                            logLapysJSWarningLogHelpSheet();
                            break;

                        // ~0000
                        case '~0000':
                            // Log LapysJS Warning > Log Help Sheet
                            logLapysJSWarningLogHelpSheet();
                            break;

                        // [Default]
                        default:
                            // Log LapysJS Warning > Log Help Sheet
                            logLapysJSWarningLogHelpSheet()
                    }
                }
            };

            // Ready
            this.ready = false
        });
            // Script
                // Modification
                    // $$
                        // Set Timeout
                        setTimeout(() => {
                            LapysJS.querySelector = (selector, index) => {
                                // Return
                                return $$(selector, index)
                            }
                        });

                    // Data Enable
                    ((LapysJS.script.getAttribute('data-enable') || '').indexOf('_null') < 0) || LapysJS.script.removeAttribute('data-enable');

                    // Disable
                    Object.defineProperty(LapysJS.script.constructor.prototype, 'disable', {
                        // Configurable
                        configurable: true,

                        // Enumerable
                        enumerable: true,

                        // Set
                        set: function setDisable(data) {
                            /* Logic
                                    If
                                        Data is '_all',

                                    else if
                                        Data contains a comma.
                            */
                            if (data === '_all')
                                // Modification > Target > Data Enable
                                this.removeAttribute('data-enable');

                            else if (data.indexOf(',') > -1)
                                /* Loop
                                        Index all members of the comma group of Data.

                                    > Modification > Target > Data Enable
                                */
                                for (let i = 0; i < data.replace(/\ /g, '').split(/,/g).length; i += 1)
                                    ((this.getAttribute('data-enable') || '').indexOf(data.replace(/\ /g, '').split(/,/g)[i]) < 0) || this.setAttribute('data-enable', (this.getAttribute('data-enable') || '').replace(data.replace(/\ /g, '').split(/,/g)[i], ''));

                            else
                                // Modification > Target > Data Enable
                                this.setAttribute('data-enable', (this.getAttribute('data-enable') || '').replace(data, '').trim());

                            // Modification > Target > Data Enable
                            ((this.getAttribute('data-enable') || '').trim()[0] !== ',') || this.setAttribute('data-enable', (this.getAttribute('data-enable') || '').getAfterChar(','));
                            this.setAttribute('data-enable', (this.getAttribute('data-enable') || '').trim());
                            this.getAttribute('data-enable') || this.removeAttribute('data-enable')
                        }
                    });

                    // Enable
                    Object.defineProperty(LapysJS.script.constructor.prototype, 'enable', {
                        // Configurable
                        configurable: true,

                        // Enumerable
                        enumerable: true,

                        // Set
                        set: function setEnable(data) {
                            /* Logic
                                    [if:else if:else statement]

                                > Modification > Target > Data Enable
                            */
                            if (data === '_null')
                                this.removeAttribute('data-enable');

                            else if (
                                (
                                    (data === 'classSets' || data === 'dataFocus' || data === 'HTMLJavaScript' || data === 'nodeIndex' || data === 'styleAttributes') ||
                                    (
                                        data.indexOf(',') > -1 &&
                                        (data.indexOf('classSets') > -1 || data.indexOf('dataFocus') > -1 || data.indexOf('HTMLJavaScript') > -1 || data.indexOf('nodeIndex') > -1 || data.indexOf('styleAttributes') > -1)
                                    )
                                ) &&
                                ((this.getAttribute('data-enable') || '').indexOf('classSets') < 0 || (this.getAttribute('data-enable') || '').indexOf('dataFocus') < 0 || (this.getAttribute('data-enable') || '').indexOf('HTMLJavaScript') < 0 || (this.getAttribute('data-enable') || '').indexOf('nodeIndex') < 0 || (this.getAttribute('data-enable') || '').indexOf('styleAttributes') < 0)
                            )
                                this.setAttribute('data-enable', `${(this.getAttribute('data-enable') || '').replace('undefined', '')}, ${data}`);

                            // Modification > Target > Data Enable
                            ((this.getAttribute('data-enable') || '').trim()[0] !== ',') || this.setAttribute('data-enable', (this.getAttribute('data-enable') || '').getAfterChar(','));
                            this.setAttribute('data-enable', (this.getAttribute('data-enable') || '').trim());
                            this.getAttribute('data-enable') || this.removeAttribute('data-enable')
                        }
                    });

                    // Enabled
                    Object.defineProperty(LapysJS.script.constructor.prototype, 'enabled', {
                        // Configurable
                        configurable: true,

                        // Enumerable
                        enumerable: true,

                        // Get
                        get: function getEnabled() {
                            // Return
                            return new (function LapysJSScriptEnablerMap() {
                                /* Loop
                                        [for statement]
                                */
                                for (let i = 0; i < (LapysJS.script.getAttribute('data-enable') || '').replace(/\ /g, '').split(/,/g).length; i += 1)
                                    // Modification > (LapysJS > Script) > [Data Enable]
                                    !((String(LapysJS.script.getAttribute('data-enable') || '').replace(/\ /g, '').split(/,/g)[i])) || (this[(String(LapysJS.script.getAttribute('data-enable') || '').replace(/\ /g, '').split(/,/g)[i])] = {
                                        name: (String(LapysJS.script.getAttribute('data-enable') || '').replace(/\ /g, '').split(/,/g)[i]),
                                        value: true
                                    })
                            })
                        }
                    });

/* Array Data */
    // Add Element
    Array.prototype.addElement || (Array.prototype.addElement = function addElement(...element) {
        // Initialization > Array
        let array = [];

        /* Loop
                Index all elements of Element.

            > Update > Array.
        */
        for (let i = 0; i < element.length; i += 1)
            array.push(element[i]);

        // Return
        return array.concat(this)
    });

    // Add Element To Back
    Array.prototype.addElementToBack || (Array.prototype.addElementToBack = function addElementToBack(...element) {
        // Initialization > Array
        let array = [];

        /* Loop
                Index all elements of Element.

            > Update > Array.
        */
        for (let i = 0; i < element.length; i += 1)
            array.push(element[i]);

        // Return
        return array.concat(this)
    });

    // Add Element To Front
    Array.prototype.addElementToFront || (Array.prototype.addElementToFront = function addElementToFront(...element) {
        // Initialization > Array
        let array = [];

        /* Loop
                Index all elements of Element.

            > Update > Array.
        */
        for (let i = 0; i < element.length; i += 1)
            array.push(element[i]);

        // Return
        return this.concat(array)
    });

    // Empty
    Array.prototype.empty || (Array.prototype.empty = function empty() {
        // Return
        return !this[0] || false
    });

    // First Element
    Array.prototype.firstElement || Object.defineProperty(Array.prototype, 'firstElement', {
        // Configurable
        configurable: true,

        // Enumerable
        enumerable: true,

        // Get
        get: function getFirstElement() {
            // Return
            return this[0]
        }
    });

    // Get Repeated Elements
     Array.prototype.getRepeatedElements || (Array.prototype.getRepeatedElements = function getRepeatedElements() {
        // Initialization > Repeated Elements
        let repeatedElements = [];

        /* Loop
                Index all members of the Target.
        */
        for (let i = 0; i < this.length - 1; i += 1)
            // Update > Repeated Elements
            (this.slice().sort()[i + 1] !== this.slice().sort()[i]) || repeatedElements.push(this.slice().sort()[i]);

        // Return
        return repeatedElements
    });

     // Has Element
     Array.prototype.hasElement || (Array.prototype.hasElement = function hasElement(...element) {
        let definedElement = false;
        /* Logic
                If
                    the first element in Element exists.
        */
        for (let i = 0; i < element.length; i += 1) {
            // Return
            return !(!(element[0] in this) || false);

            // Update > Defined Element
            definedElement = true;

            // Break
            break
        }

        // LapysJS > Error
        definedElement || LapysJS.error('Element not specified in "hasElement()" method.')
    });

    /* Index Of
            --- NOTE ---
                Build for Internet Explorer 7 and 8.
    */
    Array.prototype.indexOf || (Array.prototype.indexOf = function indexOf(start, end) {
        /* --- NOTE ---
                This is a minified polyfill version of 'indexOf' in non-supporting browsers.
        */
        if(null===this)throw TypeError('"this" is null or not defined');var a,c=Object(this),b=c.length>>>0;if(0===b)return -1;a=parseFloat(end)||0;Infinity===Math.abs(a)&&(a=0);if(a>=b)return -1;for(a=Math.max(0<=a?a:b-Math.abs(a),0);a<b;){if(a in c&&c[a]===start)return a;a += 1}return -1
    });

    // Last Element
    Array.prototype.lastElement || Object.defineProperty(Array.prototype, 'lastElement', {
        // Configurable
        configurable: true,

        // Enumerable
        enumerable: true,

        // Get
        get: function getLastElement() {
            // Return
            return this[this.length - 1]
        }
    });

    /* Last Index Of
            --- NOTE ---
                Build for Internet Explorer 7 and 8.
    */
    Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function lastIndexOf(index) {
        /* --- NOTE ---
                This is a minified polyfill version of 'lastIndexOf' in non-supporting browsers.
        */
        if(this===void 0||this===null){throw TypeError()}var n,k,t=Object(this),len=t.length>>>0;if(len===0){return -1}n=len-1;if(arguments.length>1){n=Number(arguments[1]);if(n!==n){n=0}else if(n!==0&&n!==(1/0)&&n!==-(1/0)){n=(n>0||-1)*Math.floor(Math.abs(n))}}for(k=n>=0?Math.min(n,len-1):len-Math.abs(n);k>=0;k -= 1){if(k in t&&t[k]===index){return k}}return -1
    });

    /* Remove Element
            --- NOTE ---
                Removes the first instance specified element of an array.
    */
    Array.prototype.removeElement || (Array.prototype.removeElement = function removeElement(...element) {
        /* Loop
                Index all elements of Element.
        */
        for (let i = 0; i < element.length; i += 1)
            // Update > Target
            (this.indexOf(element[i]) < 0) || this.splice(this.indexOf(element[i]), 1);

        // Return
        return this
    });

    // Remove Element From Back
    Array.prototype.removeElementFromBack || (Array.prototype.removeElementFromBack = function removeElementFromBack(...element) {
        /* Loop
                Index all elements of Element.
        */
        for (let i = 0; i < element.length; i += 1)
            // Update > Target
            (this.indexOf(element[i]) < 0) || this.splice(this.indexOf(element[i]), 1);

        // Return
        return this
    });

    /* Remove Element From Front
            --- NOTE ---
                Removes the last instance specified element of an array.
    */
     Array.prototype.removeElementFromFront || (Array.prototype.removeElementFromFront = function removeElementFromFront(...element) {
        /* Loop
                Index all elements of Element.
        */
        for (let i = 0; i < element.length; i += 1)
            // Update > Target
            (this.lastIndexOf(element[i]) <= -1) || this.splice(this.lastIndexOf(element[i]), 1);

        // Return
        return this
    });

    // Remove Elements
    Array.prototype.removeElements || (Array.prototype.removeElements = function removeElements(...element) {
        // Initialization > Target
        let that = this;

        // Function > Remove Element
        function removeElement() {
            /* Loop
                    Index all elements of Element.
            */
            for (let i = 0; i < element.length; i += 1) {
                // Update > Target
                (that.indexOf(element[0]) <= -1) || that.splice(that.indexOf(element[0]), 1);

                // Break
                break
            };

            // Function > Remove Element
            (that.indexOf(element[0]) <= -1) || removeElement()
        };
        removeElement();

        // Return
        return this
    });

    // Remove Falsy Elements
     Array.prototype.removeFalsyElements || (Array.prototype.removeFalsyElements = function removeFalsyElements() {
        /* Loop
                Index all elements of Target.
        */
        for (let i = 0; i < this.length; i += 1)
            // Update > Target
            this.push(!!this[i]);

        // Update > Target
        this.removeElements(false);

        // Return
        return this
    });

    // Remove Repeated Elements
     Array.prototype.removeRepeatedElements || (Array.prototype.removeRepeatedElements = function removeRepeatedElements() {
        // Initialization
            // Target
            let that = this;

            // Scanned Element
            let scannedElement = ['::lapys_null::'];

            // Delete Elements
            let deleteElements = [];

        /* Loop
                Index all elements of Target.
        */
        for (let i = 0; i < this.length; i += 1) {
            /* Loop
                    Index all elements of Scanned Element.
            */
            for (let j = 0; j < scannedElement.length; j += 1)
                // Update > Delete Elements
                !(scannedElement[j] === this[i] && deleteElements.indexOf(this[i]) < 0) || deleteElements.push(this[i]);

            // Update > Scanned Elements
            scannedElement.push(this[i])
        };

        /* Loop
                Index all elements of Delete Elements
        */
        for (let i = 0; i < deleteElements.length; i += 1)
            // Update > Target
            this.removeElements(deleteElements[i]);

        // Return
        return this
    });

    // Remove Truthy Elements
     Array.prototype.removeTruthyElements || (Array.prototype.removeTruthyElements = function removeTruthyElements() {
        /* Loop
                Index all elements of Target.
        */
        for (let i = 0; i < this.length; i += 1)
            // Update > Target
            this.push(!!this[i]);

        // Update > Target
        this.removeElements(true);

        // Return
        return this
    });

/* Object Data */
    // Define
     Object.prototype.def || (Object.prototype.def = function def(name, value) {
        /* Logic
                If
                    Value is defined.
        */
        if (typeof value !== 'undefined')
            /* Logic
                    If
                        the '.' character is not in Name
                            and
                        the '[' and ']' character is not in Name
                            and
                        the Name is not 'def'.
            */
            if (
                String(name).indexOf('.') < 0 &&
                (
                    String(name).indexOf('[') < 0 &&
                    String(name).indexOf(']') < 0
                ) &&
                String(name) !== 'def'
            ) {
                // Modification > (Target, Window) > [Name]
                (this || window)[String(name)] = value;

                // Return
                return (this || window)[String(name)]
            }

            else
                /* Logic
                        If
                            Name is 'def'.

                    > LapysJS > Error
                */
                if (String(name) === 'def')
                    LapysJS.error('This function can not override itself.');

                else
                    LapysJS.error(`"${name}" is not a valid variable name.`)
     });

    // Empty
    Object.prototype.empty || (Object.prototype.empty = function empty() {
        return !JSON.stringify(this).slice(1, -1).replace(/('|")([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\(\)\_\-\+\=\[\]\{\}\|\\\:\;\<\,\>\.\?\/]|(\.\.\.|&hellip;|…)|(&rsquo;|’)|(&amp;|&)|\ |\n|\t|\r|){1,}('|"):/, (data) => {
            // Return
            return data.replace(/('|")/g, '')
        }).slice(0, JSON.stringify(this).slice(1, -1).replace(/('|")([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\(\)\_\-\+\=\[\]\{\}\|\\\:\;\<\,\>\.\?\/]|(\.\.\.|&hellip;|…)|(&rsquo;|’)|(&amp;|&)|\ |\n|\t|\r|){1,}('|"):/, (data) => {
            // Return
            return data.replace(/('|")/g, '')
        }).indexOf(':'))
    });

    // For Each
    Object.prototype.foreach || (Object.prototype.foreach = function foreach(func) {
        /* Logic
                If
                    Function is a function.
        */
        if (typeof func === 'function')
            /* Loop
                    Iterate over the length of the Target.

                > Function > Function
            */
            for (let i = 0; i < this.length; i += 1)
                func()
    });

    // Is Array
    Object.prototype.isArray || (Object.defineProperty(Object.prototype, 'isArray', {
        // Configurable
        configurable: true,

        // Enumerable
        enumerable: true,

        // Get
        get: function getIsArray() {
            // Return
            return this.constructor.name === 'Array'
        }
    }));

    // Is Double
    Object.prototype.isDouble || (Object.defineProperty(Object.prototype, 'isDouble', {
        // Configurable
        configurable: true,

        // Enumerable
        enumerable: true,

        // Get
        get: function getIsDouble() {
            /* Logic
                    If
                        the Target is a Number.

                > Return
            */
            if (this.constructor.name === 'Number')
                return String(this).indexOf('.') > -1 && String(this).slice(String(this).indexOf('.') + '.'.length).length > 1;

            else
                return false
        }
    }));

    // Is Float
    Object.prototype.isFloat || (Object.defineProperty(Object.prototype, 'isFloat', {
        // Configurable
        configurable: true,

        // Enumerable
        enumerable: true,

        // Get
        get: function getIsFloat() {
            /* Logic
                    If
                        the Target is a Number.

                > Return
            */
            if (this.constructor.name === 'Number')
                return ((String(this).indexOf('.') > -1) && String(this).slice(String(this).indexOf('.') + '.'.length).length === 1);

            else
                return false
        }
    }));

    // Is Function
    Object.prototype.isFunction || (Object.defineProperty(Object.prototype, 'isFunction', {
        // Configurable
        configurable: true,

        // Enumerable
        enumerable: true,

        // Get
        get: function getIsFunction() {
            // Return
            return this.constructor.name === 'Function'
        }
    }));

    // Is HTMLCollection
    Object.prototype.isHTMLCollection || (Object.defineProperty(Object.prototype, 'isHTMLCollection', {
        // Configurable
        configurable: true,

        // Enumerable
        enumerable: true,

        // Get
        get: function getIsHTMLCollection() {
            // Return
            return this.constructor.name === 'HTMLCollection'
        }
    }));

    // Is Integer
    Object.prototype.isInteger || (Object.defineProperty(Object.prototype, 'isInteger', {
        // Configurable
        configurable: true,

        // Enumerable
        enumerable: true,

        // Get
        get: function getIsInteger() {
            /* Logic
                    If
                        the Target is a Number.

                > Return
            */
            if (this.constructor.name === 'Number')
                return String(this).indexOf('.') < 0;

            else
                return false
        }
    }));

    // Is NodeList
    Object.prototype.isNodeList || (Object.defineProperty(Object.prototype, 'isNodeList', {
        // Configurable
        configurable: true,

        // Enumerable
        enumerable: true,

        // Get
        get: function getIsNodeList() {
            // Return
            return (this.constructor.name === 'NodeList')
        }
    }));

    // Is Number
    Object.prototype.isNumber || (Object.defineProperty(Object.prototype, 'isNumber', {
        // Configurable
        configurable: true,

        // Enumerable
        enumerable: true,

        // Get
        get: function getIsNumber() {
            // Return
            return this.constructor.name === 'Number'
        }
    }));

    // Is Object
    Object.prototype.isObject || (Object.defineProperty(Object.prototype, 'isObject', {
        // Configurable
        configurable: true,

        // Enumerable
        enumerable: true,

        // Get
        get: function getIsObject() {
            // Return
            return this.constructor.name === 'Object'
        }
    }));

    // Is Regular Expression
    Object.prototype.isRegExp || (Object.defineProperty(Object.prototype, 'isRegExp', {
        // Configurable
        configurable: true,

        // Enumerable
        enumerable: true,

        // Get
        get: function getIsRegExp() {
            // Return
            return this.constructor.name === 'RegExp'
        }
    }));

    // Is String
    Object.prototype.isString || (Object.defineProperty(Object.prototype, 'isString', {
        // Configurable
        configurable: true,

        // Enumerable
        enumerable: true,

        // Get
        get: function getIsString() {
            // Return
            return this.constructor.name === 'String'
        }
    }));

    // Length
    Object.prototype.length || (Object.defineProperty(Object.prototype, 'length', {
        // Configurable
        configurable: true,

        // Enumerable
        enumerable: true,

        // Get
        get: function getLength() {
            // Initialization > Loop Counter
            var j = 0;

            /* Loop
                    Index all the Target"s properties.
            */
            for (let i in this)
                /* Logic
                        [if:else if:else statement]

                    > Update > Loop Counter
                */
                if (i !== 'addElement' && i !== 'addElementToBack' && i !== 'addElementToFront' && i !== 'def' && i !== 'empty' && i !== 'firstElement' && i !== 'foreach' && i !== 'getRepeatedElements' && i !== 'hasElement' && i !== 'isArray' && i !== 'isDouble' && i !== 'isFloat' && i !== 'isFunction' && i !== 'isHTMLCollection' && i !== 'isInteger' && i !== 'isNodeList' && i !== 'isNumber' && i !== 'isObject' && i !== 'isRegex' && i !== 'isRegExp' && i !== 'isString' && i !== 'keys' && i !== 'lastElement' && i !== 'length' && i !== 'removeElement' && i !== 'removeElementFromBack' && i !== 'removeElementFromFront' && i !== 'removeElements' && i !== 'removeFalsyElements' && i !== 'removeRepeatedElements' && i !== 'removeTruthyElements' && i !== 'undef' && i !== 'values')
                    j += 1;

            // Return
            return j
        }
    }));

    // Number
    Object.prototype.number || (Object.prototype.toNumber = function toNumber() {
        // Return
        return Number.parseFloat(String(this).replace(/\ /g, "")) || 0
    });

    // Undefine
    Object.prototype.undef || (Object.prototype.undef = function undef(name) {
        /* Logic
                If
                    the '.' character is not in Name
                        and
                    the '[' and ']' character is not in Name
                        and
                    the Name is not 'undef'.
        */
        if (
            String(name).indexOf('.') < 0 &&
            (
                String(name).indexOf('[') < 0 &&
                String(name).indexOf(']') < 0
            ) &&
            String(name) !== 'undef'
        )
            // Update > (Target, Window) > [Name]
            !(this || window)[String(name)] || delete (this || window)[String(name)];

        else
            /* Logic
                    If
                        Name is 'undef'.

                > LapysJS > Error
            */
            if (String(name) === 'undef')
                LapysJS.error('This function can not override itself.');

            else
                LapysJS.error(`"${name}" is not a valid variable name.`)
     });

    // Keys
    Object.prototype.keys || (Object.prototype.keys = function keys() {
        return Object.keys(this)
    });

    // Values
    Object.prototype.values || (Object.prototype.values = function values() {
        return Object.values(this)
    });

    /* Lapys
            --- UPDATE REQUIRED ---
                Should be functional.

            --- NOTE ---
                Returns 'EventTargets' or 'Objects' of any function or method,
                examples of some use cases are:

                    'Some really long string'.slice(lapys.indexOf('really'))
                        ('lapys' here returns the String initiating the 'slice' method)

                    or

                    document.body.onscroll = function() { lapys.id = 'scrolledElement' }
                        ('lapys' here returns the EventTarget initiating the 'onscroll' method)

                    or

                    function callFunction() { return lapys }
                        ('lapys' here returns the 'callFunction' function as it is).

            --- WARN ---
                Lapys should not be modifiable,
                and should not serve as a replacement for 'this' except
                in cutting down code or other severe cases.
    */
    const lapys = window;

/* String Data */
    // Capitalize
    String.prototype.capital || (String.prototype.capital = function capital() {
        // Return
        return this.replace(/\b\w/g, (data) => {
            // Return
            return data.toUpperCase()
        })
    });

    // Count
    String.prototype.count || (String.prototype.count = function count(data) {
        /* Logic
                If
                    Target is defined.

            > Return
        */
        if (this)
            return (this.match(RegExp(String(data).replace(/(\(|\)|\{|\}|\:|\<|\>|\[|\]|\.|\+|\*|\\|\-|&|\$)/g, '\\$&'), 'g')) || []).length;

        else
            return
    });

    /* Empty
            --- CONSIDER ---
                This method apparently removes a pre-built 'empty()' String method.
    */
    String.prototype.empty = function empty() {
        // Return
        return !this[0] || false
    };

    // First Character
    String.prototype.firstChar || Object.defineProperty(String.prototype, 'firstChar', {
        // Configurable
        configurable: true,

        // Enumerable
        enumerable: true,

        // Get
        get: function firstChar() {
            // Return
            return this[0]
        }
    });

    // Get After Character
    String.prototype.getAfterChar || (String.prototype.getAfterChar = function getAfterChar(data) {
        /* Logic
                Switch Data data type case to
                    'number' and 'string'.
        */
        switch (typeof data) {
            // Number
            case 'number':
                // Return
                return this.slice(data);
                break;

            // String
            case 'string':
                /* Logic
                        If
                            the Target has the Data.

                    > Return
                */
                if (this.indexOf(data) > -1)
                    return this.slice(this.indexOf(data) + data.length);

                else
                    return ''
        }
    });

    // Get Before Character
    String.prototype.getBeforeChar || (String.prototype.getBeforeChar = function getBeforeChar(data) {
        // Initialization > Target
        let that = this;

        /* Logic
                Switch 'data' data type case to
                    'number' and 'string'.

            > Return
        */
        switch (typeof data) {
            // Number
            case 'number':
                return this.slice(0, data);
                break;

            // String
            case 'string':
                return (() => {
                    /* Logic
                            If
                                the Target has the Data in it.

                        > Return
                    */
                    if (that.indexOf(data) > -1)
                        return that.slice(0, that.indexOf(data));

                    else
                        return that
                })()
        }
    });

    // Has Text
    String.prototype.hasText || (String.prototype.hasText = function hasText(data) {
        // Return
        return !((this.indexOf(data) <= -1) || false)
    });

    // HTML
    String.prototype.html || Object.defineProperty(String.prototype, 'html', {
        // Configurable
        configurable: true,

        // Enumerable
        enumerable: true,

        // Get
        get: function getHtml() {
            try {
                // Return
                return document.createElement(this)
            }

            catch (error) {}
        }
    });

    /* Is Registered
            --- NOTE ---
                Check if an element is registered.
    */
    String.prototype.isRegistered || Object.defineProperty(String.prototype, 'isRegistered', {
        // Configurable
        configurable: true,

        // Enumerable
        enumerable: true,

        // Get
        get: function getIsRegistered() {
            // Return
            return (String(document.createElement(this.toLowerCase()).constructor.name).indexOf('HTML') <= String(document.createElement(this.toLowerCase()).constructor.name).indexOf('Element')) && (String(document.createElement(this.toLowerCase()).constructor.name).indexOf('HTMLElement') < 0) && (String(document.createElement(this.toLowerCase()).constructor.name).indexOf('HTMLUnknownElement') < 0)
        }
    });

    // Last Character
    String.prototype.lastChar || Object.defineProperty(String.prototype, 'lastChar', {
        // Configurable
        configurable: true,

        // Enumerable
        enumerable: true,

        // Get
        get: function getLastChar() {
            // Return
            return this[this.length - 1]
        }
    });

    /* Lower
            --- NOTE ---
                Shorter form of 'toLowerCase()'.
    */
    String.prototype.lower || (String.prototype.lower = String.prototype.toLowerCase);

    /* Markup To String
            --- CONSIDER ---
                Are the replacing characters cross-platform supported?
    */
    String.prototype.markupToString || (String.prototype.markupToString = function markupToString() {
        // Return
        return this.replace(/(<|>)/g, (data) => {
            /* Logic
                    Switch
                        case to Data.

                > Return
            */
            switch (data) {
                // <
                case '<':
                    return '&lt;';
                    break;

                // >
                case '>':
                    return '&gt;'
            }
        })
    });

    // To Array
    String.prototype.toArray || (String.prototype.toArray = function toArray() {
        // Return
        return JSON.parse(`[${this.replace(/"/g, '\'')}]`)
    });

    // To Object
    String.prototype.toObject || (String.prototype.toObject = function toObject() {
        // Initialization > Target
        let that = this;

        // Return
        return JSON.parse(`{${(() => {
                // Initialization > Array
                let array = [];

                /* Loop
                        Index all ',' characters in That.

                    > Update > Array
                */
                for (let i = 0; i < that.split(/,/g).length; i += 1)
                    array.push(`'${that.split(/,/g)[i].trim().getBeforeChar(':').replace(/\'/g, '')}':${that.split(/,/g)[i].trim().getAfterChar(':')}`);

                /* Logic
                        If
                            [if:else if:else statement]

                    > Return
                */
                if (array[0] !== '\'\':')
                    return String(array).replace(/\"/g, '\'');

                else
                    return ''
            })()}}`)
    });

    // To String Array
    String.prototype.toStringArray || (String.prototype.toStringArray = function toStringArray() {
        // Return
        return this.split(/,/g)
    });

    /* Upper
            --- NOTE ---
                Shorter form of 'toUpperCase()'.
    */
    String.prototype.upper || (String.prototype.upper = String.prototype.toUpperCase);

/* Function */
    // Absolute
    constructor.prototype.abs || (constructor.prototype.abs = Math.abs);

    /* Array
            --- NOTE ---
                Made for converting HTMLCollections, NodeLists & Objects into arrays.
    */
    constructor.prototype.array || (constructor.prototype.array = function array(data) {
        // Initialization > Array
        let array = [];

        /* Logic
                If
                    Data has a length.
        */
        if (data.length)
            /* Logic
                    If
                        Data is not an object,

                    else if
                        Data is an array,

                    else if
                        Data is a String.
            */
            if (
                data.constructor.name !== 'Array' &&
                data.constructor.name !== 'Object' &&
                data.constructor.name !== 'String'
            )
                // Return
                return [...data];

            else if (data.constructor.name === 'Array')
                // Return
                return [...data];

            else if (data.constructor.name === 'String')
                // Return
                return data.split(/(?:)/g);

            else {
                // Initialization > Loop Counter
                let j = 0;

                /* Loop
                        Index all properties of Data.
                */
                for (let i in data)
                    /* Logic
                            [if:else if:else statement]
                    */
                    if (i !== 'addElement' && i !== 'addElementToBack' && i !== 'addElementToFront' && i !== 'def' && i !== 'empty' && i !== 'firstElement' && i !== 'foreach' && i !== 'getRepeatedElements' && i !== 'hasElement' && i !== 'isArray' && i !== 'isDouble' && i !== 'isFloat' && i !== 'isFunction' && i !== 'isHTMLCollection' && i !== 'isInteger' && i !== 'isNodeList' && i !== 'isNumber' && i !== 'isObject' && i !== 'isRegex' && i !== 'isRegExp' && i !== 'isString' && i !== 'keys' && i !== 'lastElement' && i !== 'length' && i !== 'removeElement' && i !== 'removeElementFromBack' && i !== 'removeElementFromFront' && i !== 'removeElements' && i !== 'removeFalsyElements' && i !== 'removeRepeatedElements' && i !== 'removeTruthyElements' && i !== 'undef' && i !== 'values') {
                        // Update > (Array, Loop Counter)
                        array.push(`'${data.keys()[j]}':${data.values()[j]}`);

                        // Update > Loop Counter
                        j += 1
                    };

                // Return
                return array
            }

        // Return
        return array
    });

    // Assert
    constructor.prototype.assert || (constructor.prototype.assert = console.assert);

    // Clear
    constructor.prototype.clear || (constructor.prototype.clear = console.clear);

    // Compare
    constructor.prototype.compare || (constructor.prototype.compare = (value1, value2) => {
        // Return
        return Object.is(value1, value2)
    });

    // Create Element
     constructor.prototype.createElement || (constructor.prototype.createElement = (element, CSSSelector, innerHTML) => {
        // Initialization
            // New Element
            let newElement = document.createElement(element);

        // Modification
            // New Element
                // CSS Selector
                !CSSSelector || (newElement.CSSSelector = CSSSelector);

                // Inner HTML
                !innerHTML || (newElement.innerHTML = innerHTML);

        // Return
        return newElement
    });

     // Get
     constructor.prototype.get || (constructor.prototype.get = (name) => {
        /* Logic
                If
                    the '.' character is not in Name
                        and
                    the '[' and ']' character is not in Name.
        */
        if (
            String(name).indexOf('.') < 0 &&
            (
                String(name).indexOf('[') < 0 &&
                String(name).indexOf(']') < 0
            )
        )
            // Return
            return window[String(name)];

        else {
            // Initialization > Data
            let data = '';

            // Update > Name
            name = name.replace(/\[([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\*\(\)\_\-\+\=\{\}\|\\\.\:\;\'\"\<\,\>\?\/]){1,}\]/g, (data) => {
                // Return
                return `.${data.slice(2, -2)}`
            });

            /* Loop
                    Index all "properties" of Name.

                > Update > Name
            */
            for (let i = 0; i < name.split(/\./g).length; i += 1)
                name = name.replace(/\.([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\*\(\)\_\-\+\=\[\]\{\}\|\\\:\;\'\"\<\,\>\?\/]){1,}/g, (data) => {
                    // Return
                    return `${data.replace('.', '["')}'"]'`
                });

            /* Loop
                    Index all "properties" of Name.
            */
            for (let i = 0; i < name.split(/\[/g).length; i += 1)
                /* Logic
                        If
                            Loop Counter is 0.

                    > Update > Data
                */
                if (!i)
                    data = window[String(name.slice(0, name.indexOf('[') + '['.length - 1))];

                else
                    data = data[String(name.split(/\[/g)[i].slice(1, -2))];

            // Return
            return data
        }
     });

    // Get Query String By Name
    constructor.prototype.getQueryParameterByName || (constructor.prototype.getQueryParameterByName = (name, url) => {
        // Return
        !(RegExp(`[?&]${name.replace(/[\[\]]/g, '\\$&')}(=([^&#]*)|&|#|$)`).exec(url || location.href)) || (() => {
            // Return
            return null
        })();

        // Return
        !(RegExp(`[?&]${name.replace(/[\[\]]/g, '\\$&')}(=([^&#]*)|&|#|$)`).exec(url || location.href))[2] || (() => {
            // Return
            return ''
        })();

        // Return
        return decodeURIComponent((RegExp(`[?&]${name.replace(/[\[\]]/g, '\\$&')}(=([^&#]*)|&|#|$)`).exec(url || location.href))[2].replace(/\+/g, ' '))
    });

    // Log
    constructor.prototype.log || (constructor.prototype.log = console.log);

    // Objectify
    constructor.prototype.objectify || (constructor.prototype.objectify = JSON.convertArraysToObject);

    // On DOM Change
    constructor.prototype.onDOMChange || (constructor.prototype.onDOMChange = (func) => {
        /* Logic
                If
                    'func' is a function.
        */
        if (typeof func === 'function') {
            // Initialization > DOM Content
            let currentDOMContent = document.documentElement.outerHTML,
                // Former DOM Content
                formerDOMContent = currentDOMContent;

            // Set Interval
            runInterval(() => {
                // Update > DOM Content
                currentDOMContent = (document.documentElement || document.createElement('a')).outerHTML;

                /* Logic
                        If
                            'DOM Content' is not 'Former DOM Content'.
                */
                if (currentDOMContent !== formerDOMContent) {
                    // Function > Function
                    func();

                    // Update > Former DOM Content
                    formerDOMContent = currentDOMContent
                }
            }, 100)
        }
    });

    // On DOM Node Added
    constructor.prototype.onDOMNodeAdded || (constructor.prototype.onDOMNodeAdded = (func) => {
        /* Logic
                If
                    'func' is a function.
        */
        if (typeof func === 'function') {
            // Initialization > DOM Nodes Length
            let DOMNodesLength = document.querySelectorAll('*').length,
                // Former DOM Nodes Length
                formerDOMNodesLength = DOMNodesLength;

            // Set Interval
            runInterval(() => {
                // Update > DOM Nodes Length
                DOMNodesLength = document.querySelectorAll('*').length;

                /* Logic
                        If
                            'DOM Content' is greater than 'Former DOM Content'.
                */
                if (DOMNodesLength > formerDOMNodesLength) {
                    // Function
                    func();

                    // Update > Former DOM Nodes Length
                    formerDOMNodesLength = DOMNodesLength
                }
            }, 100)
        }
    });

    // On DOM Node Count Change
    constructor.prototype.onDOMNodeCountChange || (constructor.prototype.onDOMNodeCountChange = (func) => {
        /* Logic
                If
                    'func' is a function.
        */
        if (typeof func === 'function') {
            // Initialization > DOM Nodes Length
            let DOMNodesLength = document.querySelectorAll('*').length,
                // Former DOM Nodes Length
                formerDOMNodesLength = DOMNodesLength;

            // Set Interval
            runInterval(() => {
                // Update > DOM Nodes Length
                DOMNodesLength = document.querySelectorAll('*').length;

                /* Logic
                        If
                            'DOM Content' is not 'Former DOM Content'.
                */
                if (DOMNodesLength !== formerDOMNodesLength) {
                    // Function
                    func();

                    // Update > Former DOM Nodes Length
                    formerDOMNodesLength = DOMNodesLength
                }
            }, 100)
        }
    });

    // On DOM Node Removed
    constructor.prototype.onDOMNodeRemoved || (constructor.prototype.onDOMNodeRemoved = (func) => {
        /* Logic
                If
                    'func' is a function.
        */
        if (typeof func === 'function') {
            // Initialization > DOM Nodes Length
            let DOMNodesLength = document.querySelectorAll('*').length,
                // Former DOM Nodes Length
                formerDOMNodesLength = DOMNodesLength;

            // Set Interval
            runInterval(() => {
                // Update > DOM Nodes Length
                DOMNodesLength = document.querySelectorAll('*').length;

                /* Logic
                        If
                            'DOM Content' is lesser than 'Former DOM Content'.
                */
                if (DOMNodesLength < formerDOMNodesLength) {
                    // Function
                    func();

                    // Update > Former DOM Nodes Length
                    formerDOMNodesLength = DOMNodesLength
                }
            }, 100)
        }
    });

    // On DOM Ready
    constructor.prototype.onDOMReady || (constructor.prototype.onDOMReady = (func, timeout) => {
        // Event
        !(typeof func === 'function') ||
            // [if]
            document.addEventListener ?
                // [true]
                    // DOM Content Loaded
                    document.addEventListener('DOMContentLoaded', () => {
                        // Set Timeout
                        setTimeout(func, parseFloat(timeout) || 0)
                    }) :

                // [false]
                    // On Ready State Change
                    document.attachEvent('onreadystatechange', () => {
                        // Set Timeout
                        setTimeout(() => {
                            // Function
                            (document.readyState !== 'complete') || func()
                        }, parseFloat(timeout) || 0)
                    })
    });

    /* Parse Number
            --- NOTE ---
                Useful for converting measurements to raw numbers.

            --- WARN ---
                This function will not return any falsy data except 0.
    */
    constructor.prototype.parseNumber || (constructor.prototype.parseNumber = (data) => {
        // Return
        return Number(String(data).replace(/\ /g, "").replace(String(data).replace(/[0-9]|\./g, ''), '')) || 0
    });

    // Redirect
    constructor.prototype.redirect || (constructor.prototype.redirect = (directory) => {
        // Location > Assign
        location.assign(directory)
    });

    // Register Element
    constructor.prototype.registerElement || (constructor.prototype.registerElement = (...element) => {
        /* Loop
                Index all members of Element.
        */
        for (let i = 0; i < element.length; i += 1)
            /* Logic
                    If
                        Custom Elements is defined.

                > Return
            */
            if (window.customElements)
                return window.customElements.define(element[i], class HTMLCustomElement extends HTMLElement {})
    });

    // Reload
    constructor.prototype.reload || (constructor.prototype.reload = () => {
        // Location > Reload
        location.reload()
    });

    // Repeat
    constructor.prototype.repeat || (constructor.prototype.repeat = (func, start = 0, end = 0) => {
        /* Logic
                If
                    Function is a function.
        */
        if (typeof func === 'function')
            /* Loop
                    [for statement]

                > Function > Function
            */
            for (let i = (parseInt(start) || 0); i < (parseInt(end) || 0); i += 1)
                func()
    });

    // Warn
    constructor.prototype.warn || (constructor.prototype.warn = console.warn);

    // Write
    constructor.prototype.write || (constructor.prototype.write = (data) => { document.write(data) });

/* Global Object Test
        Logic
            If
                the global "window" object
                exists

                    and

                LapysJS has not been
                executed
                    and

                a <script> with 'lapys.js'
                    or
                a <script> with 'lapys.min.js'
                as its 'src' exists,

                do something.

            else if
                the global "window" Object does not exist,
                throw an error.
*/
if (
    window &&
    !LapysJS.executed &&
    (
        document.querySelector("script[src*='lapys.js'") ||
        document.querySelector("script[src*='lapys.min.js'")
    )
) {
    /* Custom Data */
        // App
        constructor.prototype.app || (constructor.prototype.app = new (function Application() {
            // Initialization > Name
            let name = '';

            // Author
            this.author = (document.querySelector('meta[name=author') || document.createElement('a')).content || '';

            // Character Set
            this.charset = (document.querySelector('meta[charset') || document.createElement('a')).getAttribute('charset') || '';

            // Name
            Object.defineProperty(this, 'name', {
                // Configurable
                configurable: true,

                // Enumerable
                enumerable: true,

                // Get
                get: () => {
                    // Return
                    return name || document.title
                },

                // Set
                set: (data) => {
                    // Update > Name
                    name = data
                }
            });

            // Navigator
            this.navigator = navigator || window.navigator || [];

            // Theme Color
            this.themeColor = (document.querySelector('meta[name=theme-color') || document.createElement('a')).content || '';

            // Viewport
            this.viewport = {
                // Height
                height: (document.querySelector('meta[name=viewport') || document.createElement('a')).content.getAfterChar('height').getBeforeChar(',').replace('=', '') || '',

                // Initial Scale
                intialScale: (document.querySelector('meta[name=viewport') || document.createElement('a')).content.getAfterChar('initial-scale').getBeforeChar(',').replace('=', '') || '',

                // Maximum Scale
                maximumScale: (document.querySelector('meta[name=viewport') || document.createElement('a')).content.getAfterChar('maximum-scale').getBeforeChar(',').replace('=', '') || '',

                /* Minimal UI
                        --- UPDATE REQUIRED ---
                            This still needs a bit of tweaking.
                */
                minimalUI: ((document.querySelector('meta[name=viewport') || document.createElement('a')).content.getAfterChar('minimal-ui')) || '',

                // Minimum Scale
                minimumScale: (document.querySelector('meta[name=viewport') || document.createElement('a')).content.getAfterChar('minimum-scale').getBeforeChar(',').replace('=', '') || '',

                // User Scalable
                userScalable: (document.querySelector('meta[name=viewport') || document.createElement('a')).content.getAfterChar('user-scalable').getBeforeChar(',').replace('=', '') || '',

                // Width
                width: (document.querySelector('meta[name=viewport') || document.createElement('a')).content.getAfterChar('width').getBeforeChar(',').replace('=', '') || ''
            };

            // Version
            this.version = '0.0.1'
        })());

        // Browser
        constructor.prototype.browser || (constructor.prototype.browser = new (function Browser() {
            // Is Chrome?
            this.chrome = (!!window.chrome && !!window.chrome.webstore) || false;

            // Is Edge?
            this.edge = (!(/*@cc_on!@*/ false || !!document.documentMode) && !window.StyleMedia) || false;

            // Is Internet Explorer?
            this.internetExplorer = (/*@cc_on!@*/ false || !!document.documentMode) || false;

            // Is Mozila?
            this.mozila = (typeof InstallTrigger !== 'undefined') || false;

            // Is Opera?
            this.opera = ((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf('OPR/') > -1) || false;

            // Is Safari?
            this.safari = (/constructor/i.test(window.HTMLElement) || ((data) => {
                // Return
                return (data.toString() === '[object SafariRemoteNotification]' )
            })(!window['safari'] || safari.pushNotification)) || false
        }));

        // CSS
        constructor.prototype.css || (constructor.prototype.css = new (function CSS() {
            // Link
            this.link = (dataID, array) => {
                // Initialization > <link>
                let link = document.createElement('a');

                // Insertion > <link>
                document.head.appendChild(link);

                // Modification > <link>
                    // Data ID
                    link.dataset.id = dataID;

                    // [Attribute] > Update > Array
                    ((array.indexOf('.css') > -1) || LapysJS.warn('The "css.link()" method is meant for importing stylesheets.'));
                    array = array.replace(/\"|\'/g, '').split(/,/g);
                        /* Loop
                                Index all members of array.
                        */
                        for (let i = 0; i < array.length; i += 1)
                            link.setAttribute(array[i].slice(0, array[i].indexOf('=')).replace(/\ /g, ''), array[i].slice(array[i].indexOf('=') + '='.length))
            };

            // Style
            this.style = (dataID, innerHTML) => {
                // Initialization > <style>
                let style = document.createElement('a');

                // Insertion > <style>
                document.head.appendChild(style);

                // Modification > <style>
                    // Data ID
                    style.dataset.id = dataID;

                    // Inner HTML
                    style.innerHTML = (`\r\t${innerHTML}\n\r\t`)
            }
        }));

        // Delete
        constructor.prototype.del || (constructor.prototype.del = (dataID, element) => {
            /* Logic
                    Switch 'element' case to
                        'link', 'style' and 'script'.
            */
            switch (element.toLowerCase()) {
                // <link>
                case 'link':
                    // Deletion
                    (document.querySelector(`link[data-id='${dataID}']`) || document.createElement('a')).remove();
                    break;

                // <style>
                case 'style':
                    // Deletion
                    (document.querySelector(`style[data-id='${dataID}']`) || document.createElement('a')).remove();
                    break;

                // <script>
                case 'script':
                    // Deletion
                    (document.querySelector(`script[data-id='${dataID}']`) || document.createElement('a')).remove();
                    break;

                // [Default]
                default:
                    (() => {
                        /*  Logic
                                If
                                    the element is a <link>,

                                else if
                                    the element is a <style>,

                                else if
                                    the element is a <script>.

                            > Deletion
                        */
                        if (document.querySelector(`link[data-id='${dataID}']`))
                            document.querySelector(`link[data-id='${dataID}']`).remove();

                        else if (document.querySelector(`style[data-id='${dataID}']`))
                            document.querySelector(`style[data-id='${dataID}']`).remove();

                        else if (document.querySelector(`script[data-id='${dataID}']`))
                            document.querySelector(`script[data-id='${dataID}']`).remove()
                    })()
            }
        });

        // File
        constructor.prototype.file || (constructor.prototype.file = new (function File() {
            // Full Name
            this.fullName = (() => {
                /* Logic
                        If
                            the following data contains '/'.

                    > Return
                */
                if ((location.pathname.split('/').pop() || location.pathname.split('#').shift()).indexOf('/') > -1)
                    return;

                else
                    return location.pathname.split('/').pop() || location.pathname.split('#').shift()
            })();

            // Name
            this.name = (() => {
                /* Logic
                        If
                            the following data contains '/'.

                    > Return
                */
                if ((location.pathname.split('/').pop() || location.pathname.split('#').shift()).indexOf('/') > -1)
                    return;

                else
                    return (location.pathname.split('/').pop() || location.pathname.split('#').shift()).slice(0, (location.pathname.split('/').pop() || location.pathname.split('#').shift()).indexOf('.'))
            })();

            // Type
            this.type = (() => {
                /* Logic
                        If
                            the following data contains '/'.

                    > Return
                */
                if ((location.pathname.split('/').pop() || location.pathname.split('#').shift()).indexOf('/') > -1)
                    return;

                else
                    return (location.pathname.split('/').pop() || location.pathname.split('#').shift()).split('.').pop()
            })()
        }));

        // HTML Document Type
        constructor.prototype.HTMLDoctype || (constructor.prototype.HTMLDoctype = (() => {
            // Return
            return (!document.doctype || String(
                (
                    `<!DOCTYPE ${(document.doctype.name)}${
                        // [if]
                        (document.doctype.publicId ?
                            // [true]
                            ` PUBLIC '${document.doctype.publicId}'` :

                            // [false]
                            ""
                        ) +

                        // [if]
                        ((!document.doctype.publicId && document.doctype.systemId) ?
                            // [true]
                            " SYSTEM" :

                            // [false]
                            ""
                        ) +

                        // [if]
                        (document.doctype.systemId ?
                            // [true]
                            ` '${document.doctype.systemId}'` :

                            // [false]
                            ""
                        )
                    }>`
                ))
            ).replace('true', '')
        })());

        // JavaScript
        constructor.prototype.js || (constructor.prototype.js = new (function JS() {
            // Script
            this.script = (dataID, innerHTML) => {
                // Initialization > <script>
                let script = document.createElement('a');

                // Insertion > <script>
                document.head.appendChild(script);

                // Modification > <script>
                    // Data ID
                    script.dataset.id = dataID;

                    // Inner HTML
                    script.innerHTML = (`\r\t${innerHTML}\n\r\t`)
            };

            // Source
            this.src = (dataID, array) => {
                // Initialization > <script>
                let script = document.createElement('a');

                // Insertion > <script>
                document.head.appendChild(script);

                // Modification > <script>
                    // Data ID
                    script.dataset.id = dataID;

                    // [Attribute]
                        // Update
                            // Array
                            ((array.indexOf('.js') > -1) || LapysJS.warn('The "css.link()" method is meant for importing JavaScript files.'));
                            array = array.replace(/\"|\'/g, '').split(/,/g);

                            /* Loop
                                    Index all members of array.
                            */
                            for (let i = 0; i < array.length; i += 1)
                                // Modification
                                    // <script>
                                        // [Attribute]
                                        script.setAttribute(
                                            array[i].slice(0, array[i].indexOf('=')).replace(/\ /g, ''),
                                            array[i].slice(array[i].indexOf('=') + '='.length)
                                        )
            }
        }));

        // Operating System
        constructor.prototype.operatingSystem || (constructor.prototype.operatingSystem = new (function operatingSystem() {
            // Is Macintosh?
            this.macintosh = navigator.appVersion.indexOf('Mac') > -1;

            // Is Linux?
            this.linux = navigator.appVersion.indexOf('Linux') > -1;

            // Is Unix?
            this.unix = navigator.appVersion.indexOf('X11') > -1;

            // Is Windows?
            this.windows = navigator.appVersion.indexOf('Win') > -1
        }));

    /* Document */
        // Function
            // Get Elements By Attribute Name
            Document.prototype.getElementsByAttributeName || (Document.prototype.getElementsByAttributeName = function getElementsByAttributeName(name) {
                /* Logic
                        If
                            the Name is not '*'.
                */
                if (name !== '*')
                    // Return
                    return this.querySelectorAll(`[${name}]`);

                else {
                    // Initialization > Array
                    let array = [];

                    /* Loop
                            Index all DOM Elements.
                    */
                    for (let i = 0; i < document.querySelectorAll('*').length; i += 1)
                        /* Logic
                                If
                                    the element has an attribute.

                            > Update > Array
                        */
                        if (document.querySelectorAll('*')[i].attributes.length > 0)
                            array.push(document.querySelectorAll('*')[i]);

                        else
                            array.push('falsy');

                    // Return
                    return array.filter((data) => {
                        // Return
                        return !Object.is(data, 'falsy')
                    })
                }
            });

            // Get Elements By Attribute Name and Value
            Document.prototype.getElementsByAttributeNameAndValue || (Document.prototype.getElementsByAttributeNameAndValue = function getElementsByAttributeNameAndValue(name, value = '') {
                /* Logic
                        If
                            the Name is not '*',

                        else if
                            the Name is '*' and
                            the Value is specified.
                */
                if (name !== '*')
                    // Return
                    return this.querySelectorAll(`[${name}='${value}']`);

                else if (
                    name === '*' &&
                    String(value)
                ) {
                    // Initialization > Array
                    let array = [];

                    /* Loop
                            Index all DOM Elements.
                    */
                    for (let i = 0; i < document.querySelectorAll('*').length; i += 1) {
                        /* Logic
                                If
                                    the element has an attribute.
                        */
                        if (document.querySelectorAll('*')[i].attributes.length > 0)
                            /* Loop
                                    Index all the element"s attributes.
                            */
                            for (let j = 0; j < document.querySelectorAll('*')[i].attributes.length; j += 1)
                                // Update > Array
                                (document.querySelectorAll('*')[i].attributes[j].value !== value) || array.push(document.querySelectorAll('*')[i]);

                        else
                            // Update > Array
                            array.push('falsy')
                    };

                    // Return
                    return array.filter((data) => {
                        // Return
                        return !Object.is(data, 'falsy')
                    })
                }

                else {
                    // Initialization > Array
                    let array = [];

                    /* Loop
                            Index all DOM Elements.
                    */
                    for (let i = 0; i < document.querySelectorAll('*').length; i += 1) {
                        /* Logic
                                If
                                    the element has an attribute.
                        */
                        if (document.querySelectorAll('*')[i].attributes.length > 0)
                            /* Loop
                                    Index all the element"s attributes.
                            */
                            for (let j = 0; j < document.querySelectorAll('*')[i].attributes.length; j += 1)
                                // Update > Array
                                !document.querySelectorAll('*')[i].attributes[j].value || array.push(document.querySelectorAll('*')[i]);

                        else
                            // Update > Array
                            array.push('falsy')
                    };

                    // Return
                    return array.filter((data) => {
                        // Return
                        return !Object.is(data, 'falsy')
                    })
                }
            });

            // Get Elements By Attribute Name and Value except Value
            Document.prototype.getElementsByAttributeNameAndValueExceptValue || (Document.prototype.getElementsByAttributeNameAndValueExceptValue = function getElementsByAttributeNameAndValueExceptValue(name, value1 = '', value2 = '') {
                /* Logic
                        If
                            the Name is not '*',

                        else if
                            the Name is '*'
                                and
                            Value 1 is specified
                                and
                            Value 2 is not specified,

                        else if
                            the Name is '*'
                                and
                            Value 1 is not specified
                                and
                            Value 2 is specified,

                        else if
                            the Name is '*'
                                and
                            Value 1 is specified
                                and
                            Value 2 is specified.
                */
                if (name !== '*')
                    // Return
                    return this.querySelectorAll(`[${name}='${value1}']:not([${name}='${value2}'])`);

                else if (
                    name === '*' &&
                    String(value1) &&
                    !value2
                )
                    // Return
                    return document.getElementsByAttributeNameAndValue(name, value1);

                else if (
                    name === '*' &&
                    String(value2) &&
                    !value1
                ) {
                    // Initialization > Array
                    let array = [];

                    /* Loop
                            Index all DOM Elements.
                    */
                    for (let i = 0; i < document.querySelectorAll('*').length; i += 1) {
                        /* Logic
                                If
                                    the element has an attribute.
                        */
                        if (document.querySelectorAll('*')[i].attributes.length > 0)
                            /* Loop
                                    Index all the element"s attributes.
                            */
                            for (let j = 0; j < document.querySelectorAll('*')[i].attributes.length; j += 1)
                                // Update > Array
                                (document.querySelectorAll('*')[i].attributes[j].value === value2) || array.push(document.querySelectorAll('*')[i]);

                        else
                            // Update > Array
                            array.push('falsy')
                    };

                    // Return
                    return array.filter((data) => {
                        // Return
                        return !Object.is(data, 'falsy')
                    })
                }

                else if (
                    name === '*' &&
                    String(value1) &&
                    String(value2)
                ) {
                    // Initialization > Array
                    let array = [];

                    /* Loop
                            Index all DOM Elements.
                    */
                    for (let i = 0; i < document.querySelectorAll('*').length; i += 1) {
                        /* Logic
                                If
                                    the element has an attribute.
                        */
                        if (document.querySelectorAll('*')[i].attributes.length > 0)
                            /* Loop
                                    Index all the element"s attributes.
                            */
                            for (let j = 0; j < document.querySelectorAll('*')[i].attributes.length; j += 1)
                                // Update > Array
                                !(
                                    document.querySelectorAll('*')[i].attributes[j].value === value1 &&
                                    document.querySelectorAll('*')[i].attributes[j].value !== value2
                                ) || array.push(document.querySelectorAll('*')[i]);

                        else
                            // Update > Array
                            array.push('falsy')
                    };

                    // Return
                    return array.filter((data) => {
                        // Return
                        return !Object.is(data, 'falsy')
                    })
                }

                else {
                    // Initialization > (Array, Count)
                        let array = [];

                    /* Loop
                            Index all DOM Elements.
                    */
                    for (let i = 0; i < document.querySelectorAll('*').length; i += 1)
                        /* Logic
                                If
                                    the element has an attribute.
                        */
                        if (document.querySelectorAll('*')[i].attributes.length > 0)
                            /* Loop
                                    Index all the element"s attributes.
                            */
                            for (let j = 0; j < document.querySelectorAll('*')[i].attributes.length; j += 1)
                                // Update > Array
                                !document.querySelectorAll('*')[i].attributes[j].value || array.push(document.querySelectorAll('*')[i]);

                        else
                            // Update > Array
                            array.push('falsy');

                    // Return
                    return array.filter((data) => {
                        // Return
                        return !Object.is(data, 'falsy')
                    })
                }
            });

            // Get Elements By Attribute Name and Value without Value
            Document.prototype.getElementsByAttributeNameAndValueWithoutValue || (Document.prototype.getElementsByAttributeNameAndValueWithoutValue = function getElementsByAttributeNameAndValueWithoutValue(name, value1 = '', value2 = '') {
                /* Logic
                        If
                            the Name is not '*',

                        else if
                            the Name is '*'
                                and
                            Value 1 is specified
                                and
                            Value 2 is not specified,

                        else if
                            the Name is '*'
                                and
                            Value 1 is not specified
                                and
                            Value 2 is specified,

                        else if
                            the Name is '*'
                                and
                            Value 1 is specified
                                and
                            Value 2 is specified.
                */
                if (name !== '*')
                    // Return
                    return this.querySelectorAll(`[${name}='${value1}']:not([${name}*='${value2}'])`);

                else if (
                    name === '*' &&
                    String(value1) &&
                    !value2
                )
                    // Return
                    return document.getElementsByAttributeNameAndValue(name, value1);

                else if (
                    name === '*' &&
                    String(value2) &&
                    !value1
                ) {
                    // Initialization > Array
                    let array = [];

                    /* Loop
                            Index all DOM Elements.
                    */
                    for (let i = 0; i < document.querySelectorAll('*').length; i += 1)
                        /* Logic
                                If
                                    the element has an attribute.
                        */
                        if (document.querySelectorAll('*')[i].attributes.length > 0)
                            /* Loop
                                    Index all the element"s attributes.
                            */
                            for (let j = 0; j < document.querySelectorAll('*')[i].attributes.length; j += 1)
                                // Update > Array
                                (document.querySelectorAll('*')[i].attributes[j].value.indexOf(value2) >= 0) || array.push(document.querySelectorAll('*')[i]);

                        else
                            // Update > Array
                            array.push('falsy');

                    // Return
                    return array.filter((data) => {
                        // Return
                        return !Object.is(data, 'falsy')
                    })
                }

                else if (
                    name === '*' &&
                    String(value1) &&
                    String(value2)
                ) {
                    // Initialization > Array
                    let array = [];

                    /* Loop
                            Index all DOM Elements.
                    */
                    for (let i = 0; i < document.querySelectorAll('*').length; i += 1)
                        /* Logic
                                If
                                    the element has an attribute.
                        */
                        if (document.querySelectorAll('*')[i].attributes.length > 0)
                            /* Loop
                                    Index all the element"s attributes.
                            */
                            for (let j = 0; j < document.querySelectorAll('*')[i].attributes.length; j += 1)
                                // Update > Array
                                !(
                                    document.querySelectorAll('*')[i].attributes[j].value === value1 &&
                                    document.querySelectorAll('*')[i].attributes[j].value.indexOf(value2) < 0
                                ) || array.push(document.querySelectorAll('*')[i]);

                        else
                            // Update > Array
                            array.push('falsy');

                    // Return
                    return array.filter((data) => {
                        // Return
                        return !Object.is(data, 'falsy')
                    })
                }

                else {
                    // Initialization > Array
                    let array = [];

                    /* Loop
                            Index all DOM Elements.
                    */
                    for (let i = 0; i < document.querySelectorAll('*').length; i += 1)
                        /* Logic
                                If
                                    the element has an attribute.
                        */
                        if (document.querySelectorAll('*')[i].attributes.length > 0)
                            /* Loop
                                    Index all the element"s attributes.
                            */
                            for (let j = 0; j < document.querySelectorAll('*')[i].attributes.length; j += 1)
                                // Update > Array
                                !document.querySelectorAll('*')[i].attributes[j].value || array.push(document.querySelectorAll('*')[i]);

                        else
                            // Update > Array
                            array.push('falsy');

                    // Return
                    return array.filter((data) => {
                        // Return
                        return !Object.is(data, 'falsy')
                    })
                }
            });

            // Get Elements By Attribute Name except Value
            Document.prototype.getElementsByAttributeNameExceptValue || (Document.prototype.getElementsByAttributeNameExceptValue = function getElementsByAttributeNameExceptValue(name, value = '') {
                /* Logic
                        If
                            the Name is not '*',

                        else if
                            the Name is '*'
                                and
                            Value is specified.
                */
                if (name !== '*')
                    // Return
                    return this.querySelectorAll(`[${name}]:not([${name}='${value}'])`);

                else if (
                    name === '*' &&
                    String(value)
                ) {
                    // Initialization > Array
                    let array = [];

                    /* Loop
                            Index all DOM Elements.
                    */
                    for (let i = 0; i < document.querySelectorAll('*').length; i += 1)
                        /* Logic
                                If
                                    the element has an attribute.
                        */
                        if (document.querySelectorAll('*')[i].attributes.length > 0)
                            /* Loop
                                    Index all the element"s attributes.
                            */
                            for (let j = 0; j < document.querySelectorAll('*')[i].attributes.length; j += 1)
                                // Update > Array
                                (document.querySelectorAll('*')[i].attributes[j].value === value) || array.push(document.querySelectorAll('*')[i]);

                        else
                            // Update > Array
                            array.push('falsy');

                    // Return
                    return array.filter((data) => {
                        // Return
                        return !Object.is(data, 'falsy')
                    })
                }

                else {
                    // Initialization > Array
                    let array = [];

                    /* Loop
                            Index all DOM Elements.
                    */
                    for (let i = 0; i < document.querySelectorAll('*').length; i += 1)
                        /* Logic
                                If
                                    the element has an attribute.

                            > Update > Array
                        */
                        if (document.querySelectorAll('*')[i].attributes.length > 0)
                            array.push(document.querySelectorAll('*')[i]);

                        else
                            array.push('falsy');

                    // Return
                    return array.filter((data) => {
                        // Return
                        return !Object.is(data, 'falsy')
                    })
                }
            });

            // Get Elements By Attribute Name with Value
            Document.prototype.getElementsByAttributeNameWithValue || (Document.prototype.getElementsByAttributeNameWithValue = function getElementsByAttributeNameWithValue(name, value = '') {
                /* Logic
                        If
                            the Name is not '*',

                        else if
                            the Name is '*'
                                and
                            Value is specified.
                */
                if (name !== '*')
                    // Return
                    return this.querySelectorAll(`[${name}*='${value}']`);

                else if (
                    name === '*' &&
                    String(value)
                ) {
                    // Initialization > Array
                    let array = [];

                    /* Loop
                            Index all DOM Elements.
                    */
                    for (let i = 0; i < document.querySelectorAll('*').length; i += 1)
                        /* Logic
                                If
                                    the element has an attribute.
                        */
                        if (document.querySelectorAll('*')[i].attributes.length > 0)
                            /* Loop
                                    Index all the element"s attributes.
                            */
                            for (let j = 0; j < document.querySelectorAll('*')[i].attributes.length; j += 1)
                                // Update > Array
                                !document.querySelectorAll('*')[i].attributes[j].value.indexOf(value) || array.push(document.querySelectorAll('*')[i]);

                        else
                            // Update > Array
                            array.push('falsy');

                    // Return
                    return array.filter((data) => {
                        // Return
                        return !Object.is(data, 'falsy')
                    })
                }

                else {
                    // Initialization > Array
                    let array = [];

                    /* Loop
                            Index all DOM Elements.
                    */
                    for (let i = 0; i < document.querySelectorAll('*').length; i += 1)
                        /* Logic
                                If
                                    the element has an attribute.

                            > Update > Array
                        */
                        if (document.querySelectorAll('*')[i].attributes.length > 0)
                            array.push(document.querySelectorAll('*')[i]);

                        else
                            array.push('falsy');

                    // Return
                    return array.filter((data) => {
                        // Return
                        return !Object.is(data, 'falsy')
                    })
                }
            });

            // Get Elements By Attribute Name with Value except Value
            Document.prototype.getElementsByAttributeNameWithValueExceptValue || (Document.prototype.getElementsByAttributeNameWithValueExceptValue = function getElementsByAttributeNameWithValueExceptValue(name, value1 = '', value2 = '') {
                /* Logic
                        If
                            the Name is not '*',

                        else if
                            the Name is '*'
                                and
                            Value 1 is specified
                                and
                            Value 2 is not specified,

                        else if
                            the Name is '*'
                                and
                            Value 1 is not specified
                                and
                            Value 2 is specified,

                        else if
                            the Name is '*'
                                and
                            Value 1 is specified
                                and
                            Value 2 is specified.
                */
                if (name !== '*')
                    // Return
                    return this.querySelectorAll(`[${name}*='${value1}']:not([${name}='${value2}'])`);

                else if (
                    name === '*' &&
                    String(value1) &&
                    !value2
                ) {
                    // Initialization > Array
                    let array = [];

                    /* Loop
                            Index all DOM Elements.
                    */
                    for (let i = 0; i < document.querySelectorAll('*').length; i += 1)
                        /* Logic
                                If
                                    the element has an attribute.
                        */
                        if (document.querySelectorAll('*')[i].attributes.length > 0)
                            /* Loop
                                    Index all the element"s attributes.
                            */
                            for (let j = 0; j < document.querySelectorAll('*')[i].attributes.length; j += 1)
                                // Update > Array
                                (document.querySelectorAll('*')[i].attributes[j].value !== value1) || array.push(document.querySelectorAll('*')[i]);

                        else
                            // Update > Array
                            array.push('falsy');

                    // Return
                    return array.filter((data) => {
                        // Return
                        return !Object.is(data, 'falsy')
                    })
                }

                else if (
                    name === '*' &&
                    String(value2) &&
                    !value1
                ) {
                    // Initialization > Array
                    let array = [];

                    /* Loop
                            Index all DOM Elements.
                    */
                    for (let i = 0; i < document.querySelectorAll('*').length; i += 1) {
                        /* Logic
                                If
                                    the element has an attribute.
                        */
                        if (document.querySelectorAll('*')[i].attributes.length > 0)
                            /* Loop
                                    Index all the element"s attributes.
                            */
                            for (let j = 0; j < document.querySelectorAll('*')[i].attributes.length; j += 1)
                                // Update > Array
                                (document.querySelectorAll('*')[i].attributes[j].value === value2) || array.push(document.querySelectorAll('*')[i]);

                        else
                            // Update > Array
                            array.push('falsy')
                    };

                    // Return
                    return array.filter((data) => {
                        // Return
                        return !Object.is(data, 'falsy')
                    })
                }

                else if (
                    name === '*' &&
                    String(value1) &&
                    String(value2)
                ) {
                    // Initialization > Array
                    let array = [];

                    /* Loop
                            Index all DOM Elements.
                    */
                    for (let i = 0; i < document.querySelectorAll('*').length; i += 1) {
                        /* Logic
                                If
                                    the element has an attribute.
                        */
                        if (document.querySelectorAll('*')[i].attributes.length > 0)
                            /* Loop
                                    Index all the element"s attributes.
                            */
                            for (let j = 0; j < document.querySelectorAll('*')[i].attributes.length; j += 1)
                                // Update > Array
                                !(
                                    document.querySelectorAll('*')[i].attributes[j].value === value1 &&
                                    document.querySelectorAll('*')[i].attributes[j].value !== value2
                                ) || array.push(document.querySelectorAll('*')[i]);

                        else
                            // Update > Array
                            array.push('falsy')
                    };

                    // Return
                    return array.filter((data) => {
                        // Return
                        return !Object.is(data, 'falsy')
                    })
                }

                else {
                    // Initialization > Array
                    let array = [];

                    /* Loop
                            Index all DOM Elements.
                    */
                    for (let i = 0; i < document.querySelectorAll('*').length; i += 1)
                        /* Logic
                                If
                                    the element has an attribute.

                            > Update > Array
                        */
                        if (document.querySelectorAll('*')[i].attributes.length > 0)
                            array.push(document.querySelectorAll('*')[i]);

                        else
                            array.push('falsy');

                    // Return
                    return array.filter((data) => {
                        // Return
                        return !Object.is(data, 'falsy')
                    })
                }
            });

            // Get Elements By Attribute Name with Value without Value
            Document.prototype.getElementsByAttributeNameWithValueWithoutValue || (Document.prototype.getElementsByAttributeNameWithValueWithoutValue = function getElementsByAttributeNameWithValueWithoutValue(name, value1 = '', value2 = '') {
                /* Logic
                        If
                            the Name is not '*',

                        else if
                            the Name is '*'
                                and
                            Value 1 is specified
                                and
                            Value 2 is not specified,

                        else if
                            the Name is '*'
                                and
                            Value 1 is not specified
                                and
                            Value 2 is specified,

                        else if
                            the Name is '*'
                                and
                            Value 1 is specified
                                and
                            Value 2 is specified.
                */
                if (name !== '*')
                    // Return
                    return this.querySelectorAll(`[${name}*='${value1}']:not([${name}*='${value2}'])`);

                else if (
                    name === '*' &&
                    String(value1) &&
                    !value2
                ) {
                    // Initialization > Array
                    let array = [];

                    /* Loop
                            Index all DOM Elements.
                    */
                    for (let i = 0; i < document.querySelectorAll('*').length; i += 1) {
                        /* Logic
                                If
                                    the element has an attribute.
                        */
                        if (document.querySelectorAll('*')[i].attributes.length > 0)
                            /* Loop
                                    Index all the element"s attributes.
                            */
                            for (let j = 0; j < document.querySelectorAll('*')[i].attributes.length; j += 1)
                                // Update > Array
                                (document.querySelectorAll('*')[i].attributes[j].value !== value1) || array.push(document.querySelectorAll('*')[i]);

                        else
                            // Update > Array
                            array.push('falsy')
                    };

                    // Return
                    return array.filter((data) => {
                        // Return
                        return !Object.is(data, 'falsy')
                    })
                }

                else if (
                    name === '*' &&
                    String(value2) &&
                    !value1
                ) {
                    // Initialization > Array
                    let array = [];

                    /* Loop
                            Index all DOM Elements.
                    */
                    for (let i = 0; i < document.querySelectorAll('*').length; i += 1) {
                        /* Logic
                                If
                                    the element has an attribute.
                        */
                        if (document.querySelectorAll('*')[i].attributes.length > 0)
                            /* Loop
                                    Index all the element"s attributes.
                            */
                            for (let j = 0; j < document.querySelectorAll('*')[i].attributes.length; j += 1)
                                // Update > Array
                                (document.querySelectorAll('*')[i].attributes[j].value.indexOf(value2) >= 0) || array.push(document.querySelectorAll('*')[i]);

                        else
                            // Update > Array
                            array.push('falsy')
                    };

                    // Return
                    return array.filter((data) => {
                        // Return
                        return !Object.is(data, 'falsy')
                    })
                }

                else if (
                    name === '*' &&
                    String(value1) &&
                    String(value2)
                ) {
                    // Initialization > Array
                    let array = [];

                    /* Loop
                            Index all DOM Elements.
                    */
                    for (let i = 0; i < document.querySelectorAll('*').length; i += 1)
                        /* Logic
                                If
                                    the element has an attribute.
                        */
                        if (document.querySelectorAll('*')[i].attributes.length > 0)
                            /* Loop
                                    Index all the element"s attributes.
                            */
                            for (let j = 0; j < document.querySelectorAll('*')[i].attributes.length; j += 1)
                                // Update > Array
                                !(
                                    document.querySelectorAll('*')[i].attributes[j].value === value1 &&
                                    document.querySelectorAll('*')[i].attributes[j].value.indexOf(value2) < 0
                                ) || array.push(document.querySelectorAll('*')[i]);

                        else
                            // Update > Array
                            array.push('falsy');

                    // Return
                    return array.filter((data) => {
                        // Return
                        return !Object.is(data, 'falsy')
                    })
                }

                else {
                    // Initialization > Array
                    let array = [];

                    /* Loop
                            Index all DOM Elements.
                    */
                    for (let i = 0; i < document.querySelectorAll('*').length; i += 1)
                        /* Logic
                                If
                                    the element has an attribute.
                        */
                        if (document.querySelectorAll('*')[i].attributes.length > 0)
                            // Update > Array
                            array.push(document.querySelectorAll('*')[i]);

                        else
                            // Update > Array
                            array.push('falsy');

                    // Return
                    return array.filter((data) => {
                        // Return
                        return !Object.is(data, 'falsy')
                    })
                }
            });

            // Get Elements By Attribute Name without Value
            Document.prototype.getElementsByAttributeNameWithoutValue || (Document.prototype.getElementsByAttributeNameWithoutValue = function getElementsByAttributeNameWithoutValue(name, value = '') {
                /* Logic
                        If
                            the Name is not '*',

                        else if
                            the Name is '*'
                                and
                            Value is specified.
                */
                if (name !== '*')
                    // Return
                    return this.querySelectorAll(`[${name}]:not([${name}*='${value}'])`);

                else if (
                    name === '*' &&
                    String(value)
                ) {
                    // Initialization > Array
                    let array = [];

                    /* Loop
                            Index all DOM Elements.
                    */
                    for (let i = 0; i < document.querySelectorAll('*').length; i += 1)
                        /* Logic
                                If
                                    the element has an attribute.
                        */
                        if (document.querySelectorAll('*')[i].attributes.length > 0)
                            /* Loop
                                    Index all the element"s attributes.
                            */
                            for (let j = 0; j < document.querySelectorAll('*')[i].attributes.length; j += 1)
                                // Update > Array
                                (document.querySelectorAll('*')[i].attributes[j].value.indexOf(value) >= 0) || array.push(document.querySelectorAll('*')[i]);

                        else
                            // Update > Array
                            array.push('falsy');

                    // Return
                    return array.filter((data) => {
                        // Return
                        return !Object.is(data, 'falsy')
                    })
                }

                else {
                    // Initialization > (Array, Count)
                    let array = [];

                    /* Loop
                            Index all DOM Elements.
                    */
                    for (let i = 0; i < document.querySelectorAll('*').length; i += 1)
                        /* Logic
                                If
                                    the element has an attribute.

                            > Update > Array
                        */
                        if (document.querySelectorAll('*')[i].attributes.length > 0)
                            array.push(document.querySelectorAll('*')[i]);

                        else
                            array.push('falsy');

                    // Return
                    return array.filter((data) => {
                        // Return
                        return data !== 'falsy'
                    })
                }
            });

            // <main>
            Document.prototype.main || (Document.prototype.main = document.querySelector('main'));

            // <title>
            Document.prototype.titleElement || (Document.prototype.titleElement = document.querySelector('title'));

    /* [Main]
            --- NOTE ---
                This serves as the main module
                housing all LapysJS" JavaScript functions.
    */
        /* DOM Elements */
            // Initialization
                // <key-command>
                    // Registration
                    (!window.customElements || (document.createElement('key-command').constructor !== HTMLElement) || window.customElements.define('key-command', class HTMLKeyCommandElement extends HTMLElement {}));

                    // On DOM Ready
                    onDOMReady(() => {
                        /* Loop
                                Index all <key-command> elements.
                        */
                        for (let i = 0; i < document.getElementsByTagName('key-command').length; i += 1)
                            // Event > Document Element > Key Down
                            !document.getElementsByTagName('key-command')[i].hasAttribute('data-event-key') || document.documentElement.setEvent('keydown', (event) => {
                                /* Loop
                                        Index all <key-command> elements.
                                */
                                for (let i = 0; i < document.getElementsByTagName('key-command').length; i += 1)
                                    // Execution
                                    (event.code !== document.getElementsByTagName('key-command')[i].getAttribute('data-event-key')) || eval(document.getElementsByTagName('key-command')[i].getAttribute('data-event-function'))
                            })
                    });

                    // Modification
                        // Function
                        Object.defineProperty(new (document.createElement('key-command')).constructor().constructor.prototype, 'function', {
                            // Configurable
                            configurable: true,

                            // Enumerable
                            enumerable: true,

                            // Get
                            get: function getFunction() {
                                // Return
                                return this.getAttribute('data-event-function')
                            },

                            // Set
                            set: function setFunction(data) {
                                // Modification > Target > Data Event Function
                                this.setAttribute('data-event-function', data)
                            }
                        });

                        // Key
                        Object.defineProperty(new (document.createElement('key-command')).constructor().constructor.prototype, 'key', {
                            // Configurable
                            configurable: true,

                            // Enumerable
                            enumerable: true,

                            // Get
                            get: function getKey() {
                                // Return
                                return this.getAttribute('data-event-key')
                            },

                            // Set
                            set: function setKey(data) {
                                // Modification > Target > Data Event Key
                                this.setAttribute('data-event-key', data)
                            }
                        });

                // <lorem-ipsum>
                    // Registration
                    (!window.customElements ||  (document.createElement('lorem-ipsum').constructor !== HTMLElement) || window.customElements.define('lorem-ipsum', class HTMLLoremIpsumElement extends HTMLElement {}));

                    // Modification
                        // Value Length
                        Object.defineProperty(new (document.createElement('lorem-ipsum')).constructor().constructor.prototype, 'valLength', {
                            // Configurable
                            configurable: true,

                            // Enumerable
                            enumerable: true,

                            // Get
                            get: function getValLength() {
                                // Return
                                return this.hasAttribute('1') || this.hasAttribute('2') || this.hasAttribute('3') || this.hasAttribute('4') || this.hasAttribute('5')
                            },

                            // Set
                            set: function setValLength(data) {
                                // Modification > Target > [Data]
                                !(data === 1 || data === 2 || data === 3 || data === 4 || data === 5) || this.setAttribute(String(data), '')
                            }
                        });

                    /* Set Timeout
                            --- NOTE ---
                                'delAttr()' method should be defined.
                    */
                    setTimeout(() => {
                        /* Loop
                                Index all <lorem-ipsum> elements.
                        */
                        for (let i = 0; i < document.getElementsByTagName('lorem-ipsum').length; i += 1) {
                            // Modification > <lorem-ipsum>
                                /* Logic
                                        If
                                            the element has the '1' attribute,

                                        else if
                                            the element has the '2' attribute,

                                        else if
                                            the element has the '3' attribute,

                                        else if
                                            the element has the '4' attribute,

                                        else if
                                            the element has the '5' attribute.

                                    > Outer HTML
                                */
                                if (document.getElementsByTagName('lorem-ipsum')[i].hasAttribute('1'))
                                    document.getElementsByTagName('lorem-ipsum')[i].outerHTML = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.';

                                else if (document.getElementsByTagName('lorem-ipsum')[i].hasAttribute('2'))
                                    document.getElementsByTagName('lorem-ipsum')[i].outerHTML = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.';

                                else if (document.getElementsByTagName('lorem-ipsum')[i].hasAttribute('3'))
                                    document.getElementsByTagName('lorem-ipsum')[i].outerHTML = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.';

                                else if (document.getElementsByTagName('lorem-ipsum')[i].hasAttribute('4'))
                                    document.getElementsByTagName('lorem-ipsum')[i].outerHTML = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.';

                                else if (document.getElementsByTagName('lorem-ipsum')[i].hasAttribute('5'))
                                    document.getElementsByTagName('lorem-ipsum')[i].outerHTML = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.';

                            // Update > Loop Counter
                            i -= 1
                        }
                    });

                // <fav-icon>
                    // Registration
                    (!window.customElements || (document.createElement('fav-icon').constructor !== HTMLElement) || customElements.define('fav-icon', class HTMLFavIconElement extends HTMLElement {}));

                    // Modification
                        // <fav-icon> > Source
                        Object.defineProperty(new (document.createElement('fav-icon')).constructor().constructor.prototype, 'src', {
                            // Configurable
                            configurable: true,

                            // Enumerable
                            enumerable: true,

                            // Get
                            get: function getSrc() {
                                // Return
                                return this.getAttribute('src')
                            },

                            // Set
                            set: function setSrc(data) {
                                // Modification > Target > Source
                                this.setAttribute('src', data)
                            }
                        });

                        // <head> > Inner HTML
                        !(
                            document.querySelector('fav-icon') &&
                            (document.querySelector('fav-icon') || document.createElement('fav-icon')).hasAttribute('src') ||
                            (document.querySelector('fav-icon') || document.createElement('fav-icon')).src
                        ) || (document.head.innerHTML += `\n\r\t<! -= 1 Document Favicon  -= 1>\r\t<link href='${document.querySelector('fav-icon').getAttribute('src') || document.querySelector('fav-icon').src}' rel='icon' type='image/png'>\r\t<link href='${document.querySelector('fav-icon').getAttribute('src') || document.querySelector('fav-icon').src}' rel='shortcut icon'>\r`);

                    /* Loop
                            Index all <fav-icon> elements.
                    */
                    for (let i = 0; i < document.getElementsByTagName('fav-icon').length; i += 1) {
                        // Modification > <fav-icon> > Source
                        !document.getElementsByTagName('fav-icon')[i].getAttribute('src') || (document.getElementsByTagName('fav-icon')[i].src = (document.getElementsByTagName('fav-icon')[i].src || document.getElementsByTagName('fav-icon')[i].getAttribute('src')));
                        !document.getElementsByTagName('fav-icon')[i].src || document.getElementsByTagName('fav-icon')[i].setAttribute('src', (document.getElementsByTagName('fav-icon')[i].getAttribute('src') || document.getElementsByTagName('fav-icon')[i].src));

                        // Deletion > <fav-icon>
                        document.getElementsByTagName('fav-icon')[i--].remove()
                    };

            // Modification > On DOM Node Added > Data Event
            onDOMNodeAdded(() => {
                /* Loop
                        Index all Data Event Element
                */
                for (let j = 0; j < document.querySelectorAll('[data-event-function][data-event-type]').length; j += 1)
                    /* Loop
                            Index all Data Event Element Event Attributes
                    */
                    for (let k = 0; k < document.querySelectorAll('[data-event-function][data-event-type]')[j].getAttribute('data-event-type').replace(/\ /g, '').split(/,/g).length; k += 1) {
                        // Event > Data Event Element > [Event Attribute]
                        document.querySelectorAll('[data-event-function][data-event-type]')[j][`LapysJS ${document.querySelectorAll('[data-event-function][data-event-type]')[j].getAttribute('data-event-type').replace(/\ /g, '').split(/,/g)[k]} EventSet`] || document.querySelectorAll('[data-event-function][data-event-type]')[j].setEvent(
                            document.querySelectorAll('[data-event-function][data-event-type]')[j].getAttribute('data-event-type').replace(/\ /g, '').split(/,/g)[k],

                            function(event) {
                                eval(this.getAttribute('data-event-function'))
                            }
                        );
                        document.querySelectorAll('[data-event-function][data-event-type]')[j][`LapysJS ${document.querySelectorAll('[data-event-function][data-event-type]')[j].getAttribute('data-event-type').replace(/\ /g, '').split(/,/g)[k]} EventSet`] = true
                    }
            });

            /* Function > Modify DOM Elements
                    --- WARN ---
                        Heavy on performance, must reduce lag here.
            */
            function modifyDOMElements() {
                /* Loop
                        Index all items of the LapysJS script"s 'data-enable' attribute.
                */
                for (let j = 0; j < (LapysJS.script.getAttribute('data-enable') || '').replace(/\ /g, '').split(/,/g).length; j += 1)
                    /* Logic
                            If
                                the LapysJS script has '_all' enabled or
                                the LapysJS script has 'dataFocus' enabled.
                    */
                    if (
                        (LapysJS.script.getAttribute('data-enable') || '').replace(/\ /g, '').split(/,/g)[j] === '_all' ||
                        (LapysJS.script.getAttribute('data-enable') || '').replace(/\ /g, '').split(/,/g)[j] === 'dataFocus'
                    ) {
                        /* Set Timeout
                                --- NOTE ---
                                    'setEvent()' method should be defined.
                        */
                        setTimeout(() => {
                            document.body.setEvent('mouseup', (event) => {
                                /* Loop
                                        Index all elements.
                                */
                                for (let i = 0; i < document.querySelectorAll('[data-focus]').length; i += 1)
                                    // Modification
                                        // Element
                                            // Data Focus
                                            document.querySelectorAll('[data-focus]')[i].removeAttribute('data-focus');

                                // Modification
                                    // Event Target
                                        // Data Focus
                                        event.path[0].setAttribute('data-focus', '')
                            })
                        }, 100);

                        // Break
                        break
                    };

                // <br>
                    /* Loop
                            Index all <br> elements.
                    */
                    for (let i = 0; i < document.getElementsByTagName('br').length; i += 1)
                        /* Logic
                                If
                                    the element has an attribute of '2'
                                        or
                                    the element has an attribute of '3'.

                            > Modification > Outer HTML
                        */
                        if (document.getElementsByTagName('br')[i].hasAttribute('2'))
                            document.getElementsByTagName('br')[i].outerHTML = '<br> <br>';

                        else if (document.getElementsByTagName('br')[i].hasAttribute('3'))
                            document.getElementsByTagName('br')[i].outerHTML = '<br> <br> <br>';

                // <form>
                    /* Loop
                            Index all <form> elements.
                    */
                    for (let i = 0; i < document.getElementsByTagName('form').length; i += 1)
                        /* Loop
                                Index all the element"s children.
                        */
                        for (let j = 0; j < document.getElementsByTagName('form')[i].querySelectorAll('*').length; j += 1)
                            /* Logic
                                    If the element has a 'name' attribute
                                        and
                                    its child does not have a 'form' attribute
                                        and
                                    its children are <button>, <input>, <label>.
                            */
                            if (
                                document.getElementsByTagName('form')[i].hasAttribute('name') &&
                                !document.getElementsByTagName('form')[i].querySelectorAll('*')[j].hasAttribute('form') &&
                                (
                                    document.getElementsByTagName('form')[i].querySelectorAll('*')[j].tagName === 'BUTTON' ||
                                    document.getElementsByTagName('form')[i].querySelectorAll('*')[j].tagName === 'FIELDSET' ||
                                    document.getElementsByTagName('form')[i].querySelectorAll('*')[j].tagName === 'INPUT' ||
                                    document.getElementsByTagName('form')[i].querySelectorAll('*')[j].tagName === 'LABEL'
                                )
                            )
                                // Modification > Form
                                document.getElementsByTagName('form')[i].querySelectorAll('*')[j].setAttribute('form', document.getElementsByTagName('form')[i].getAttribute('name'));

                // <label>
                    /* Loop
                            Index all <label> elements.
                    */
                    for (let i = 0; i < document.getElementsByTagName('label').length; i += 1)
                        /* Logic
                                If
                                    the element
                                    does not have a 'for' attribute
                                        and
                                    does not have a 'data-no-for' attribute.
                        */
                        if (
                            !document.getElementsByTagName('label')[i].hasAttribute('for') &&
                            !document.getElementsByTagName('label')[i].hasAttribute('data-no-for')
                        )
                            /* Logic
                                    If
                                        the element has an <input> child element with an ID,

                                    else if
                                        the element"s next element sibling is an <input> with an ID,

                                    else if
                                        the element"s previous element sibling is an <input> with an ID.
                            */
                            if ((document.getElementsByTagName('label')[i].querySelector('input') || document.createElement('a')).hasAttribute('id'))
                                // Modification > For
                                document.getElementsByTagName('label')[i].setAttribute('for', document.getElementsByTagName('label')[i].querySelector('input').id);

                            else if (
                                (document.getElementsByTagName('label')[i].nextElementSibling || document.createElement('a')).tagName === 'INPUT' &&
                                (document.getElementsByTagName('label')[i].nextElementSibling || document.createElement('a')).hasAttribute('id')
                            )
                                // Modification > For
                                document.getElementsByTagName('label')[i].setAttribute('for', document.getElementsByTagName('label')[i].nextElementSibling.id);

                            else if (
                                (document.getElementsByTagName('label')[i].previousElementSibling || document.createElement('a')).tagName === 'INPUT' &&
                                (document.getElementsByTagName('label')[i].previousElementSibling || document.createElement('a')).hasAttribute('id')
                            )
                                // Modification > For
                                document.getElementsByTagName('label')[i].setAttribute('for', document.getElementsByTagName('label')[i].previousElementSibling.id);

                // <html>
                    // Modification > Language
                    (document.documentElement || document.createElement('a')).lang = ((document.documentElement || document.createElement('a')).lang || String(navigator.languages || '').replace(/, /, ',').replace(/,/g, ', '));

                // <img>
                    // On DOM Ready
                    onDOMReady(() => {
                        let lazyAnimate = () => {
                            /* Loop
                                    Index all "lazy" <img> elements.

                                > Logic
                                        If
                                            the <img> is in view.
                            */
                            for (let i = 0; i < document.querySelectorAll('[lazy-animate]').length; i += 1)
                                if ((window.innerHeight + window.scrollY) >= document.querySelectorAll('[lazy-animate]')[i].getBoundingClientRect().top) {
                                    // Modification > <img> > (Lazy Loaded, Source)
                                    document.querySelectorAll('[lazy-animate]')[i].setAttribute('lazy-animated', '');
                                    document.querySelectorAll('[lazy-animate]')[i].style.animation = document.querySelectorAll('[lazy-animate]')[i].getAttribute('lazy-animate')
                                };

                            /* Loop
                                    Index all "lazy" <img> elements.

                                > Logic
                                        If
                                            the <img> is in view.

                                > Modification > <img> > Lazy Load
                            */
                            for (let i = 0; i < document.querySelectorAll('[lazy-animate]').length; i += 1)
                                ((window.innerHeight + window.scrollY) < document.querySelectorAll('[lazy-animate]')[i].getBoundingClientRect().top) || document.querySelectorAll('[lazy-animate]')[i--].removeAttribute('lazy-animate')
                        };
                        lazyAnimate();
                        window.setEvent('scroll', lazyAnimate);

                        // Function > Lazy Load Images
                        let lazyLoadImages = () => {
                            /* Loop
                                    Index all "lazy" <img> elements.

                                > Logic
                                        If
                                            the <img> is in view.
                            */
                            for (let i = 0; i < document.querySelectorAll('img[lazy-load]').length; i += 1)
                                if ((window.innerHeight + window.scrollY) >= document.querySelectorAll('img[lazy-load]')[i].getBoundingClientRect().top) {
                                    // Modification > <img> > (Lazy Loaded, Source)
                                    document.querySelectorAll('img[lazy-load]')[i].setAttribute('lazy-loaded', '');
                                    document.querySelectorAll('img[lazy-load]')[i].src = document.querySelectorAll('img[lazy-load]')[i].getAttribute('lazy-load')
                                };

                            /* Loop
                                    Index all "lazy" <img> elements.

                                > Logic
                                        If
                                            the <img> is in view.

                                > Modification > <img> > Lazy Load
                            */
                            for (let i = 0; i < document.querySelectorAll('img[lazy-load]').length; i += 1)
                                ((window.innerHeight + window.scrollY) < document.querySelectorAll('img[lazy-load]')[i].getBoundingClientRect().top) || document.querySelectorAll('img[lazy-load]')[i--].removeAttribute('lazy-load')
                        };
                        lazyLoadImages();
                        window.setEvent('scroll', lazyLoadImages)
                    });

                // <input>
                    /* Loop
                            Index all <input> elements.
                    */
                    for (let i = 0; i < document.getElementsByTagName('input').length; i += 1) {
                        /* Logic
                                If
                                    the element has a type of 'number'
                        */
                        if (
                            !document.getElementsByTagName('input')[i].min &&
                            (
                                document.getElementsByTagName('input')[i].type === 'meter' ||
                                document.getElementsByTagName('input')[i].type === 'number' ||
                                document.getElementsByTagName('input')[i].type === 'range'
                            )
                        )
                            // Modification
                                // Minimum
                                document.getElementsByTagName('input')[i].min = 0;

                                // Value
                                    /* Logic
                                            Switch <input> Value case to
                                                '_lorem1', '_lorem2', '_lorem3', '_lorem4' and '_lorem5'.
                                    */
                                    switch (document.getElementsByTagName('input')[i].value) {
                                        // _lorem1
                                        case '_lorem1':
                                            document.getElementsByTagName('input')[i].value = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.';
                                            break;

                                        // _lorem2
                                        case '_lorem2':
                                            document.getElementsByTagName('input')[i].value = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.';
                                            break;

                                        // _lorem3
                                        case '_lorem3':
                                            document.getElementsByTagName('input')[i].value = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.';
                                            break;

                                        // _lorem4
                                        case '_lorem4':
                                            document.getElementsByTagName('input')[i].value = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.';
                                            break;

                                        // _lorem5
                                        case '_lorem5':
                                            document.getElementsByTagName('input')[i].value = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.'
                                    }
                    };

                // <option>
                    /* Loop
                            Index all <option> elements.
                    */
                    for (let i = 0; i < document.getElementsByTagName('option').length; i += 1)
                        // Modification
                            // Label
                            document.getElementsByTagName('option')[i].setAttribute(
                                'label',
                                (
                                    document.getElementsByTagName('option')[i].getAttribute('label') ||
                                    document.getElementsByTagName('option')[i].innerText.replace(/\ /g, '')
                                )
                            );

                // <textarea>
                    /* Loop
                            Index all <textarea> elements.
                    */
                    for (let i = 0; i < document.getElementsByTagName('textarea').length; i += 1)
                        /* Logic
                                If
                                    the element has a value of '<lorem-ipsum 1> </lorem-ipsum>',

                                else if
                                    the element has a value of '<lorem-ipsum 2> </lorem-ipsum>',

                                else if
                                    the element has a value of '<lorem-ipsum 3> </lorem-ipsum>',

                                else if
                                    the element has a value of '<lorem-ipsum 4> </lorem-ipsum>',

                                else if
                                    the element has a value of '<lorem-ipsum 5> </lorem-ipsum>'.
                        */
                        if (
                            document.getElementsByTagName('textarea')[i].value.indexOf('<lorem-ipsum 1') > -1 &&
                            document.getElementsByTagName('textarea')[i].value.indexOf('</lorem-ipsum>') > document.getElementsByTagName('textarea')[i].value.indexOf('<lorem-ipsum ')
                        )
                            document.getElementsByTagName('textarea')[i].value = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.';

                        else if (
                            document.getElementsByTagName('textarea')[i].value.indexOf('<lorem-ipsum 2') > -1 &&
                            document.getElementsByTagName('textarea')[i].value.indexOf('</lorem-ipsum>') > document.getElementsByTagName('textarea')[i].value.indexOf('<lorem-ipsum ')
                        )
                            document.getElementsByTagName('textarea')[i].value = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.';

                        else if (
                            document.getElementsByTagName('textarea')[i].value.indexOf('<lorem-ipsum 3') > -1 &&
                            document.getElementsByTagName('textarea')[i].value.indexOf('</lorem-ipsum>') > document.getElementsByTagName('textarea')[i].value.indexOf('<lorem-ipsum ')
                        )
                            document.getElementsByTagName('textarea')[i].value = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.';

                        else if (
                            document.getElementsByTagName('textarea')[i].value.indexOf('<lorem-ipsum 4') > -1 &&
                            document.getElementsByTagName('textarea')[i].value.indexOf('</lorem-ipsum>') > document.getElementsByTagName('textarea')[i].value.indexOf('<lorem-ipsum ')
                        )
                            document.getElementsByTagName('textarea')[i].value = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.';

                        else if (
                            document.getElementsByTagName('textarea')[i].value.indexOf('<lorem-ipsum 5') > -1 &&
                            document.getElementsByTagName('textarea')[i].value.indexOf('</lorem-ipsum>') > document.getElementsByTagName('textarea')[i].value.indexOf('<lorem-ipsum ')
                        )
                            document.getElementsByTagName('textarea')[i].value = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.';

                // <time>
                    /* Set Timeout
                            --- WARN ---
                                Allow for a few methods to be defined first.
                    */
                    setTimeout(() => {
                        /* Logic
                                If
                                    a 'non-dynamic time' <time> element exists.
                        */
                        if (document.querySelector('time:not(.dynamic-time)'))
                            /* Loop
                                    Index all <time> elements.
                            */
                            for (let i = 0; i < document.querySelectorAll('time:not(.dynamic-time)').length; i += 1)
                                /* Logic
                                        [if:else if:else function].
                                */
                                    // Date
                                    if (
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('dt') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('date')
                                    ) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                                // Inner HTML
                                                that.innerHTML = new Date().getDate()
                                        }, (1 * 1000))
                                    }

                                    // Octal UTC Date
                                    else if (
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('dt_octal_utc') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('date_octal_utc') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('dt_utc_octal') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('date_utc_octal')
                                    ) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                            /* Logic
                                                    If
                                                        the 'data' does not have a second character.
                                            */
                                            if (String(!new Date().getDate())[1])
                                                // Modification
                                                    // Inner HTML
                                                    that.innerHTML = `0${new Date().getUTCDate()}`;

                                            else
                                                // Modification
                                                    // Inner HTML
                                                    that.innerHTML = new Date().getUTCDate()
                                        }, (1 * 1000))
                                    }

                                    // Octal Date
                                    else if (
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('dt_octal') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('date_octal')
                                    ) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                            /* Logic
                                                    If
                                                        the 'data' does not have a second character.
                                            */
                                            if (String(!new Date().getDate())[1])
                                                // Modification
                                                    // Inner HTML
                                                    that.innerHTML = `0${new Date().getDate()}`;

                                            else
                                                // Modification
                                                    // Inner HTML
                                                    that.innerHTML = new Date().getDate()
                                        }, (1 * 1000))
                                    }

                                    // UTC Date
                                    else if (
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('dt_utc') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('date_utc')
                                    ) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                                // Inner HTML
                                                that.innerHTML = new Date().getUTCDate()
                                        }, (1 * 1000))
                                    }

                                    // Day
                                    else if (
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('dy') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('day')
                                    ) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                                // Inner HTML
                                                that.innerHTML = new Date().getDay()
                                        }, (1 * 1000))
                                    }

                                    // Octal UTC Day
                                    else if (
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('dy_octal_utc') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('day_octal_utc') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('dy_utc_octal') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('day_utc_octal')
                                    ) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                            /* Logic
                                                    If
                                                        the 'data' does not have a second character.
                                            */
                                            if (String(!new Date().getUTCDay())[1])
                                                // Modification
                                                    // Inner HTML
                                                    that.innerHTML = `0${new Date().getUTCDay()}`;

                                            else
                                                // Modification
                                                    // Inner HTML
                                                    that.innerHTML = new Date().getUTCDay()
                                        }, (1 * 1000))
                                    }

                                    // Octal Day
                                    else if (
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('dy_octal') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('day_octal')
                                    ) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                            /* Logic
                                                    If
                                                        the 'data' does not have a second character.
                                            */
                                            if (String(!new Date().getDay())[1])
                                                // Modification
                                                    // Inner HTML
                                                    that.innerHTML = `0${new Date().getDay()}`;

                                            else
                                                // Modification
                                                    // Inner HTML
                                                    that.innerHTML = new Date().getDay()
                                        }, (1 * 1000))
                                    }

                                    // UTC Day
                                    else if (
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('dy_utc') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('day_utc')
                                    ) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                                // Inner HTML
                                                that.innerHTML = new Date().getUTCDay()
                                        }, (1 * 1000))
                                    }

                                    // Full Date
                                    else if (
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('f-dt') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('full-date')
                                    ) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                                // Inner HTML
                                                that.innerHTML = Date()
                                        }, (1 * 1000))
                                    }

                                    // Full Year
                                    else if (
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('f-yr') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('full-year')
                                    ) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                                // Inner HTML
                                                that.innerHTML = new Date().getFullYear()
                                        }, (1 * 1000))
                                    }

                                    // UTC Full Year
                                    else if (
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('f-yr_utc') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('full-year_utc')
                                    ) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                                // Inner HTML
                                                that.innerHTML = new Date().getUTCFullYear()
                                        }, (1 * 1000))
                                    }

                                    // Hour
                                    else if (
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('hr') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('hour')
                                    ) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                                // Inner HTML
                                                that.innerHTML = new Date().getHours()
                                        }, (1 * 1000))
                                    }

                                    // Octal UTC Hour
                                    else if (
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('hr_octal_utc') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('hour_octal_utc') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('hr_utc_octal') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('hour_utc_octal')
                                    ) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                            /* Logic
                                                    If
                                                        the 'data' does not have a second character.
                                            */
                                            if (String(!new Date().getUTCHours())[1])
                                                // Modification
                                                    // Inner HTML
                                                    that.innerHTML = `0${new Date().getUTCHours()}`;

                                            else
                                                // Modification
                                                    // Inner HTML
                                                    that.innerHTML = new Date().getUTCHours()
                                        }, (1 * 1000))
                                    }

                                    // Octal Hour
                                    else if (
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('hr_octal') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('hour_octal')
                                    ) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                            /* Logic
                                                    If
                                                        the 'data' does not have a second character.
                                            */
                                            if (String(!new Date().getHours())[1])
                                                // Modification
                                                    // Inner HTML
                                                    that.innerHTML = `0${new Date().getHours()}`;

                                            else
                                                // Modification
                                                    // Inner HTML
                                                    that.innerHTML = new Date().getHours()
                                        }, (1 * 1000))
                                    }

                                    // UTC Hour
                                    else if (
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('hr_utc') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('hour_utc')
                                    ) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                                // Inner HTML
                                                that.innerHTML = new Date().getUTCHours()
                                        }, (1 * 1000))
                                    }

                                    // Milliseconds
                                    else if (
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('mil') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('milliseconds')
                                    ) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                                // Inner HTML
                                                that.innerHTML = new Date().getMilliseconds()
                                        }, 100)
                                    }

                                    // UTC Milliseconds
                                    else if (
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('mil_utc') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('milliseconds_utc')
                                    ) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                                // Inner HTML
                                                that.innerHTML = new Date().getUTCMilliseconds()
                                        }, 100)
                                    }

                                    // Minute
                                    else if (
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('min') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('minute')
                                    ) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                                // Inner HTML
                                                that.innerHTML = new Date().getMinutes()
                                        }, (1 * 1000))
                                    }

                                    // Octal UTC Minute
                                    else if (
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('min_octal_utc') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('minute_octal_utc') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('min_utc_octal') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('minute_utc_octal')
                                    ) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                            /* Logic
                                                    If
                                                        the 'data' does not have a second character.
                                            */
                                            if (String(!new Date().getUTCMinutes())[1])
                                                // Modification
                                                    // Inner HTML
                                                    that.innerHTML = `0${new Date().getUTCMinutes()}`;

                                            else
                                                // Modification
                                                    // Inner HTML
                                                    that.innerHTML = new Date().getUTCMinutes()
                                        }, (1 * 1000))
                                    }

                                    // Octal Minute
                                    else if (
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('min_octal') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('minute_octal')
                                    ) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                            /* Logic
                                                    If
                                                        the 'data' does not have a second character.
                                            */
                                            if (String(!new Date().getMinutes())[1])
                                                // Modification
                                                    // Inner HTML
                                                    that.innerHTML = `0${new Date().getMinutes()}`;

                                            else
                                                // Modification
                                                    // Inner HTML
                                                    that.innerHTML = new Date().getMinutes()
                                        }, (1 * 1000))
                                    }

                                    // UTC Minute
                                    else if (
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('min_utc') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('minute_utc')
                                    ) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                                // Inner HTML
                                                that.innerHTML = new Date().getUTCMinutes()
                                        }, (1 * 1000))
                                    }

                                    // Month
                                    else if (
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('mth') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('month')
                                    ) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                                // Inner HTML
                                                that.innerHTML = new Date().getMonth()
                                        }, (1 * 1000))
                                    }

                                    // Octal UTC Month
                                    else if (
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('mth_octal_utc') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('month_octal_utc') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('mth_utc_octal') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('month_utc_octal')
                                    ) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                            /* Logic
                                                    If
                                                        the 'data' does not have a second character.
                                            */
                                            if (String(!new Date().getUTCMonth())[1])
                                                // Modification
                                                    // Inner HTML
                                                    that.innerHTML = `0${new Date().getUTCMonth()}`;

                                            else
                                                // Modification
                                                    // Inner HTML
                                                    that.innerHTML = new Date().getUTCMonth()
                                        }, (1 * 1000))
                                    }

                                    // Octal Month
                                    else if (
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('mth_octal') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('month_octal')
                                    ) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                            /* Logic
                                                    If
                                                        the 'data' does not have a second character.
                                            */
                                            if (String(!new Date().getMonth())[1])
                                                // Modification
                                                    // Inner HTML
                                                    that.innerHTML = `0${new Date().getMonth()}`;

                                            else
                                                // Modification
                                                    // Inner HTML
                                                    that.innerHTML = new Date().getMonth()
                                        }, (1 * 1000))
                                    }

                                    // UTC Month
                                    else if (
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('mth_utc') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('month_utc')
                                    ) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                                // Inner HTML
                                                that.innerHTML = new Date().getUTCMonth()
                                        }, (1 * 1000))
                                    }

                                    // Second
                                    else if (
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('sec') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('second')
                                    ) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                                // Inner HTML
                                                that.innerHTML = new Date().getSeconds()
                                        }, (1 * 1000))
                                    }

                                    // Octal UTC Second
                                    else if (
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('sec_octal_utc') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('second_octal_utc') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('sec_utc_octal') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('second_utc_octal')
                                    ) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                            /* Logic
                                                    If
                                                        the 'data' does not have a second character.
                                            */
                                            if (String(!new Date().getUTCSeconds())[1])
                                                // Modification
                                                    // Inner HTML
                                                    that.innerHTML = `0${new Date().getUTCSeconds()}`;

                                            else
                                                // Modification
                                                    // Inner HTML
                                                    that.innerHTML = new Date().getUTCSeconds()
                                        }, (1 * 1000))
                                    }

                                    // Octal Second
                                    else if (
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('sec_octal') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('second_octal')
                                    ) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                            /* Logic
                                                    If
                                                        the 'data' does not have a second character.
                                            */
                                            if (String(!new Date().getSeconds())[1])
                                                // Modification
                                                    // Inner HTML
                                                    that.innerHTML = `0${new Date().getSeconds()}`;

                                            else
                                                // Modification
                                                    // Inner HTML
                                                    that.innerHTML = new Date().getSeconds()
                                        }, (1 * 1000))
                                    }

                                    // UTC Second
                                    else if (
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('sec_utc') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('second_utc')
                                    ) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                                // Inner HTML
                                                that.innerHTML = new Date().getUTCSeconds()
                                        }, (1 * 1000))
                                    }

                                    // Time
                                    else if (document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('time')) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                                // Inner HTML
                                                that.innerHTML = +new Date() || new Date().getTime()
                                        }, 100)
                                    }

                                    // Time Zone Offset
                                    else if (document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('timezone-offset')) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                                // Inner HTML
                                                that.innerHTML = new Date().getTimezoneOffset()
                                        }, (1 * 1000))
                                    }

                                    // Year
                                    else if (
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('yr') ||
                                        document.querySelectorAll('time:not(.dynamic-time)')[i].hasClass('year')
                                    ) {
                                        // Initialization > Target
                                        let that = document.querySelectorAll('time:not(.dynamic-time)')[i];

                                        // Run Interval
                                        runInterval(() => {
                                            // Modification
                                                // Class
                                                that.addClass('dynamic-time');

                                                // Inner HTML
                                                that.innerHTML = new Date().getYear()
                                        }, (1 * 1000))
                                    }
                    }, 100);

                // Modification
                    // Element | EventTarget | HTML Collection | HTML (*) Element | Node | NodeList
                        /* Has Class
                                --- WARN ---
                                    Should be defined before the 'addClass()' and 'delClass()' methods.
                        */
                        Element.prototype.hasClass || (Element.prototype.hasClass = function hasClass(...name) {
                            /* Logic
                                    If
                                        the Target has a class.
                            */
                            if (this.getAttribute('class')) {
                                // Update > Name
                                name || (name = []);

                                /* Loop
                                        Index all elements of Name.
                                */
                                for (let i = 0; i < name.length; i += 1)
                                    // Update > Name Element
                                    name[i] = String(name[i]);

                                // Initialization > (Has Class, Input Class)
                                let hasClass = [],
                                    inputClass = name;

                                /* Loop
                                        Index all elements of Name
                                */
                                for (let i = 0; i < name.length; i += 1)
                                    /* Logic
                                            If
                                                the the element has white-space.
                                    */
                                    if (name[i].split(/\ /g).length > 1)
                                        /* Loop
                                                Index all split elements of that element.
                                        */
                                        for (let j = 0; j < name[i].split(/\ /g).length; j += 1)
                                            // Update > Input Class
                                            inputClass.push(name[i].split(/\ /g)[j]);

                                // Update > Input Class
                                inputClass = inputClass.removeRepeatedElements().filter((data) => {
                                    // Return
                                    return data.indexOf(' ') < 0
                                });

                                /* Loop
                                        Index all elements of Input Class.
                                */
                                for (let i = 0; i < inputClass.length; i += 1)
                                    // Update > Has Class
                                    hasClass.push(this.getAttribute('class').trim().split(/\ /g).indexOf(inputClass[i]) > -1);

                                // Return
                                return hasClass.indexOf(false) < 0
                            }

                            else
                                // Return
                                return false
                        });

                        // Add Class
                        Element.prototype.addClass || (Element.prototype.addClass = function addClass(...name) {
                            /* Loop
                                    Index all elements of Name.
                            */
                            for (let i = 0; i < name.length; i += 1) {
                                // Initialization > Target
                                let that = this;

                                /* Loop
                                        Iterate over the number of white-spaces Name has.
                                */
                                for (let j = 0; j < name[i].split(/\ /g).length; j += 1)
                                    // Update > Name
                                    ((this.getAttribute('class') || '').trim().split(/\ /g).indexOf(name[i].split(/\ /g)[j]) <= -1) || (name[i] = name[i].replace(name[i].split(/\ /g)[j], ''));

                                // Update > Name
                                name[i] = name[i].trim();

                                // Modification > Target > Class
                                (
                                    this.hasClass(name[i]) ||
                                    (() => {
                                        /* Logic
                                                If
                                                    the Target has a class value.
                                        */
                                        if (that.getAttribute('class'))
                                            /* Logic
                                                    If
                                                        there are multiple class values.

                                                > Return
                                            */
                                            if (that.getAttribute('class').indexOf(' ') > -1)
                                                return (that.getAttribute('class').indexOf(name[i]) > -1);

                                            else
                                                return that.hasClass(name[i]);

                                        else
                                            // Return
                                            return that.hasClass(name[i])
                                    })()
                                ) ||
                                this.setAttribute(
                                    'class',
                                    (`${(this.getAttribute('class') || '')} ${name[i]}`).trim()
                                );
                                !(name[i] === '' && void name[i] !== false) || (this.getAttribute('class') || this.removeAttribute('class'))
                            }
                        });

                        // Close
                        Element.prototype.close || (Element.prototype.close = function close() {
                            // Modification > Target
                                // Data Open
                                this.removeAttribute('data-open');

                                // Data Close
                                this.setAttribute('data-close', '')
                        });

                        // Delete Attribute
                        Element.prototype.delAttr || (Element.prototype.delAttr = function delAttr(...name) {
                            /* Logic
                                    If
                                        Name is not '_all'.
                            */
                            if (name[0] !== '_all')
                                /* Loop
                                        Index all Names.
                                */
                                for (let i = 0; i < name.length; i += 1)
                                    // Modification > Target > [Name]
                                    this.removeAttribute(name[i]);

                            else
                                /* Loop
                                        Index all the Target"s attributes.
                                */
                                for (let i = 0; i < this.attributes.length; i += 1)
                                    // Modification > Target > [Name]
                                    this.removeAttribute(this.attributes[i--].name)
                        });

                        // Delete Class
                        Element.prototype.delClass || (Element.prototype.delClass = function delClass(...data) {
                            /* Loop
                                    Index all elements of Data.
                            */
                            for (let i = 0; i < data.length; i += 1)
                                /* Logic
                                        If
                                            Target has a class.
                                */
                                if (this.getAttribute('class')) {
                                    // Target
                                        /* Logic
                                                If
                                                    Data is '_all',

                                                else if
                                                    Data is a 'number'

                                                else if
                                                    Data is a 'string'.
                                        */
                                        if (data[0] === '_all')
                                            this.removeAttribute('class');

                                        else if (typeof data[i] === 'number') {
                                            /* Logic
                                                    If
                                                        the element has a single class only.

                                                > Modification > Target > Class
                                            */
                                            if (
                                                this.getAttribute('class').indexOf(' ') < 0 &&
                                                data[i] === 0
                                            )
                                                this.removeAttribute('class');

                                            else
                                                this.setAttribute('class', String(this.getAttribute('class').trim().split(/\ /g).removeElement(this.getAttribute('class').trim().split(/\ /g)[data[i]])).replace(/,/g, ' ').trim())
                                        }

                                        else if (typeof data[i] === 'string')
                                            /* Loop
                                                    Index all Data class values.

                                                > Modification > Target > Class
                                            */
                                            for (let j = 0; j < data[i].trim().split(/\ /g).length; j += 1)
                                                this.setAttribute('class', String(this.getAttribute('class').trim().split(/\ /g).removeElement(data[i].trim().split(/\ /g)[j])).replace(/,/g, ' ').trim());

                                        // Modification > Target > Class
                                        this.getAttribute('class') || this.removeAttribute('class')
                                }
                        });

                        // Delete (Inline) Style
                        Element.prototype.delStyle || (Element.prototype.delStyle = function delStyle(...style) {
                            /* Loop
                                    Index all elements of Style.
                            */
                            for (let i = 0; i < style.length; i += 1) {
                                /* Logic
                                        If
                                            Style is not '_all'
                                                and
                                            has a 'style' attribute.
                                */
                                if (style[0] !== '_all' && this.getAttribute('style')) {
                                    /* Logic
                                            If
                                                the element has the 'style' attribute.
                                    */
                                    if (this.hasAttribute('style')) {
                                        // Initialization > Target
                                        var that = this;

                                        /* Logic
                                                [if:else if:else] statement.

                                            > Modification > Style
                                        */
                                        if (
                                            (style[i] !== 'animation' && that.getAttribute('style').indexOf('animation') < 0) &&
                                            (style[i] !== 'background' && that.getAttribute('style').indexOf('background') < 0) &&
                                            (style[i] !== 'border' && that.getAttribute('style').indexOf('border') < 0) &&
                                            (style[i] !== 'flex' && that.getAttribute('style').indexOf('flex') < 0) &&
                                            (style[i] !== 'font' && that.getAttribute('style').indexOf('font') < 0) &&
                                            (style[i] !== 'transition' && that.getAttribute('style').indexOf('transition') < 0)
                                        )
                                            this.style = this.getAttribute('style').replace(
                                                /* --- NOTE ---
                                                        Modify the element"s 'style' attribute.
                                                */
                                                that.getAttribute('style').slice(
                                                    /* --- NOTE ---
                                                            The first instance of the style.
                                                    */
                                                        // [property]
                                                        that.getAttribute('style').indexOf(style[i]),

                                                    /* --- NOTE ---
                                                            The length of the style and its value.
                                                    */
                                                        // [property: value]
                                                        (() => {
                                                            /* Logic
                                                                    If
                                                                        [property: value],

                                                                    else if
                                                                        [property:value],

                                                                    else if
                                                                        [property :value],

                                                                    else if
                                                                        [property : value].
                                                            */
                                                            if (that.getAttribute('style').indexOf(`${style[i]}: ${(that.style[style[i]] || getComputedStyle(that).getPropertyValue(style[i]))}`) > -1)
                                                                // Return
                                                                return (that.getAttribute('style').indexOf(style[i]) + String(`${style[i]}: ${(that.style[style[i]] || getComputedStyle(that).getPropertyValue(style[i]))}`).length);

                                                            else if (that.getAttribute('style').indexOf(`${style[i]}:${(that.style[style[i]] || getComputedStyle(that).getPropertyValue(style[i]))}`) > -1)
                                                                // Return
                                                                return (that.getAttribute('style').indexOf(style[i]) + String(`${style[i]}:${(that.style[style[i]] || getComputedStyle(that).getPropertyValue(style[i]))}`).length);

                                                            else if (that.getAttribute('style').indexOf(`${style[i]} :${(that.style[style[i]] || getComputedStyle(that).getPropertyValue(style[i]))}`) > -1)
                                                                // Return
                                                                return (that.getAttribute('style').indexOf(style[i]) + String(`${style[i]} :${(that.style[style[i]] || getComputedStyle(that).getPropertyValue(style[i]))}`).length);

                                                            else if (that.getAttribute('style').indexOf(`${style[i]} : ${(that.style[style[i]] || getComputedStyle(that).getPropertyValue(style[i]))}`) > -1)
                                                                // Return
                                                                return (that.getAttribute('style').indexOf(style[i]) + String(`${style[i]} : ${(that.style[style[i]] || getComputedStyle(that).getPropertyValue(style[i]))}`).length);

                                                            else
                                                                // Return
                                                                return 0
                                                        })() +

                                                        // [value;]
                                                        (() => {
                                                            /* Logic
                                                                    If
                                                                        [value; ],

                                                                    else if
                                                                        [value ;],

                                                                    else if
                                                                        [value;],

                                                                    else if
                                                                        [value ; ].
                                                            */
                                                            if (that.getAttribute('style').indexOf(`${(that.style[style[i]] || getComputedStyle(that).getPropertyValue(style[i]))}; `) > -1)
                                                                // Return
                                                                return (that.getAttribute('style').indexOf(style[i]) + '; '.length);

                                                            else if (that.getAttribute('style').indexOf(`${(that.style[style[i]] || getComputedStyle(that).getPropertyValue(style[i]))} ;`) > -1)
                                                                // Return
                                                                return (that.getAttribute('style').indexOf(style[i]) + ' ;'.length);

                                                            else if (that.getAttribute('style').indexOf(`${(that.style[style[i]] || getComputedStyle(that).getPropertyValue(style[i]))};`) > -1)
                                                                // Return
                                                                return (that.getAttribute('style').indexOf(style[i]) + ';'.length);

                                                            else if (that.getAttribute('style').indexOf(`${(that.style[style[i]] || getComputedStyle(that).getPropertyValue(style[i]))} ; `) > -1)
                                                                // Return
                                                                return (that.getAttribute('style').indexOf(style[i]) + ' ; '.length);

                                                            else
                                                                // Return
                                                                return 0
                                                        })()
                                                ),

                                                /* --- NOTE ---
                                                        Replace with nothing.
                                                */
                                                ''
                                            );

                                        else
                                            this.style[style[i]] = ''
                                    };

                                    // Modification > Target > Style
                                    that.getAttribute('style') || that.removeAttribute('style')
                                }

                                else
                                    // Modification > Target > Style
                                    this.removeAttribute('style')
                            }
                        });

                        // Get Attribute
                        Element.prototype.getAttr || (Element.prototype.getAttr = function getAttr(...data) {
                            // Initialization > (Target, Attributes)
                            let that = this,
                                Attributes = [];

                            /* Loop
                                    Index all members of Data.
                            */
                            for (let i = 0; i < data.length; i += 1) {
                                /* Logic
                                        If
                                            Data data type is a 'number',

                                        else if
                                            Data data type is a 'object',

                                        else if
                                            Data data type is a 'string'.
                                */
                                if (typeof data[i] === 'number')
                                    // Update > Attributes
                                    Attributes.push(that.getAttribute((that.attributes[data[i]] || document.createElement('a')).name));

                                else if (typeof data[i] === 'string')
                                    /* Logic
                                            If
                                                Data is '_all' and
                                                the element does not have an '_all' attribute,

                                            else if
                                                Data does not have a comma.
                                    */
                                    if (
                                        data[0] === '_all' &&
                                        !that.hasAttribute('_all')
                                    )
                                        /* Loop
                                                Index all the Target"s attributes.

                                            > Update > Attributes
                                        */
                                        for (let j = 0; j < that.attributes.length; j += 1)
                                            Attributes = Attributes.concat(that.attributes[j].value);

                                    else
                                        // Update > Attributes
                                        Attributes.push(that.getAttribute(data[i]))
                            };

                            /* Logic
                                    If
                                        Attributes has more than 1 member.

                                > Return
                            */
                            if (Attributes[1])
                                return Attributes;

                            else
                                return Attributes[0]
                        });

                        // Get CSS
                        Element.prototype.getCSS || (Element.prototype.getCSS = function getCSS(...property) {
                            // Initialization > Array
                            let array = [];

                            /* Loop
                                    Index all elements of Property.
                            */
                            for (let i = 0; i < property.length; i += 1)
                                // Return
                                array.push(
                                    this.style[property[i].replace(/[A-Z]/g, (data) => {
                                        // Return
                                        return `-${data.toLowerCase()}`
                                    })] || getComputedStyle(this).getPropertyValue(property[i].replace(/[A-Z]/g, (data) => {
                                        // Return
                                        return `-${data.toLowerCase()}`
                                    }))
                                );

                            /* Logic
                                    If the Array has multiple elements.

                                > Return
                            */
                            if (array[1])
                                return array;

                            else
                                return array[0]
                        });

                        // Get Elements By Attribute Name
                        Element.prototype.getElementsByAttributeName || (Element.prototype.getElementsByAttributeName = document.getElementsByAttributeName);

                        // Get Elements By Attribute Name and Value
                        Element.prototype.getElementsByAttributeNameAndValue || (Element.prototype.getElementsByAttributeNameAndValue = document.getElementsByAttributeNameAndValue);

                        // Get Elements By Attribute Name and Value except Value
                        Element.prototype.getElementsByAttributeNameAndValueExceptValue || (Element.prototype.getElementsByAttributeNameAndValueExceptValue = document.getElementsByAttributeNameAndValueExceptValue);

                        // Get Elements By Attribute Name and Value without Value
                        Element.prototype.getElementsByAttributeNameAndValueWithoutValue || (Element.prototype.getElementsByAttributeNameAndValueWithoutValue = document.getElementsByAttributeNameAndValueWithoutValue);

                        // Get Elements By Attribute Name except Value
                        Element.prototype.getElementsByAttributeNameExceptValue || (Element.prototype.getElementsByAttributeNameExceptValue = document.getElementsByAttributeNameExceptValue);

                        // Get Elements By Attribute Name with Value
                        Element.prototype.getElementsByAttributeNameWithValue || (Element.prototype.getElementsByAttributeNameWithValue = document.getElementsByAttributeNameWithValue);

                        // Get Elements By Attribute Name with Value except Value
                        Element.prototype.getElementsByAttributeNameWithValueExceptValue || (Element.prototype.getElementsByAttributeNameWithValueExceptValue = document.getElementsByAttributeNameWithValueExceptValue);

                        // Get Elements By Attribute Name with Value without Value
                        Element.prototype.getElementsByAttributeNameWithValueWithoutValue || (Element.prototype.getElementsByAttributeNameWithValueWithoutValue = document.getElementsByAttributeNameWithValueWithoutValue);

                        // Get Elements By Attribute Name without Value
                        Element.prototype.getElementsByAttributeNameWithoutValue || (Element.prototype.getElementsByAttributeNameWithoutValue = document.getElementsByAttributeNameWithoutValue);

                        // Get Elements Related By Data ID
                        Element.prototype.getElementsRelatedByDataID || (Element.prototype.getElementsRelatedByDataID = function getElementsRelatedByDataID() {
                            // Return
                            return document.querySelectorAll(`[data-id='${this.getAttribute("data-id")}']`)
                        });

                        // Has Attribute
                        Element.prototype.hasAttr || (Element.prototype.hasAttr = function hasAttr(...name) {
                            // Initialization > Array
                            let array = [];

                            /* Loop
                                    Index all elements of Name.
                            */
                            for (let i = 0; i < name.length; i += 1)
                                // Update > Array
                                array.push(this.hasAttribute(name));

                            /* Logic
                                    If
                                        the Array has multiple elements.

                                > Return
                            */
                            if (array[1])
                                return array;

                            else
                                return array[0]
                        });

                        Element.prototype.hasChild || (Element.prototype.hasChild = function hasChild(child) {
                            // Return
                            return (this !== child && (this.con || this.contains)((child || document.createElement('a'))))
                        });

                        // Has Child (Element) By Query Selector
                        Element.prototype.hasChildByQuerySelector || (Element.prototype.hasChildByQuerySelector = function hasChildByQuerySelector(selector) {
                            // Return
                            return !!this.querySelector(selector)
                        });

                        // Node Index
                            /* Logic
                                    If
                                        "Element.prototype.nodeIndex" is undefined.
                            */
                            if (!Element.prototype.nodeIndex)
                                /* Loop
                                        Index all items of the LapysJS script"s 'data-enable' attribute.
                                */
                                for (let j = 0; j < (LapysJS.script.getAttribute('data-enable') || '').replace(/\ /g, '').split(/,/g).length; j += 1)
                                    /* Logic
                                            If
                                                the LapysJS script has '_all' enabled or
                                                the LapysJS script has 'nodeIndex' enabled.
                                    */
                                    if (
                                        (LapysJS.script.getAttribute('data-enable') || '').replace(/\ /g, '').split(/,/g)[j] === '_all' ||
                                        (LapysJS.script.getAttribute('data-enable') || '').replace(/\ /g, '').split(/,/g)[j] === 'nodeIndex'
                                    ) {
                                        /* Loop
                                                Index all DOM Elements.
                                        */
                                        for (let i = 0; i < document.querySelectorAll('*').length; i += 1)
                                            // Modification > DOM Element > Node Index
                                            document.querySelectorAll('*')[i].nodeIndex = i;

                                        // Break
                                        break
                                    };

                        // Open
                        Element.prototype.open || (Element.prototype.open = function open() {
                            // Modification > Target
                                // Data Close
                                this.removeAttribute('data-close');

                                // Data Open
                                this.setAttribute('data-open', '')
                        });

                        // Relate Element By Data ID
                        Element.prototype.relateElementByDataID || (Element.prototype.relateElementByDataID = function relateElementByDataID(element) {
                            element.setAttribute('data-id', this.getAttribute('data-id'))
                        });

                        // Replace Attribute
                        Element.prototype.replaceAttribute || (HTMLElement.prototype.replaceAttribute = function replaceAttribute(oldAttribute, newAttribute, value) {
                            // Modification > Target > [New Attribute]
                            this.removeAttribute(oldAttribute);
                            this.setAttribute(newAttribute, value || '')
                        });

                        // Scroll To
                        Element.prototype.scrollToElement || (Element.prototype.scrollToElement = Element.prototype.scrollIntoView);

                        // Set Attribute
                        Element.prototype.setAttr || (Element.prototype.setAttr = function setAttr(name, value) {
                            /* Loop
                                    Index all Names.
                            */
                            for (let i = 0; i < name.split(/,/g).length; i += 1)
                                // Modification
                                    // Target
                                        // [Name]
                                        this.setAttribute(name.split(/,/g)[i], ((value.split(/,/g) || [])[i] || ''));

                            // Modification (if Name is 'class' or 'style')
                                // Target
                                    // [Name]
                                    !(name === 'class' || name === 'style') || this.setAttribute(name, this.getAttribute(name).trim())
                        });

                        /* Attribute
                                --- WARN ---
                                    This method can only be defined after the 'getAttr()' and 'setAttr()' method.
                        */
                        Element.prototype.attr || (Element.prototype.attr = function attr(name, value) {
                            /* Logic
                                    If
                                        Value is specified.
                            */
                            if (value)
                                // Modification
                                    // Target
                                        // [Name]
                                        this.setAttr(name, value);

                            else
                                // Return
                                return this.getAttr(name)
                        });

                        // Set CSS
                        Element.prototype.setCSS || (Element.prototype.setCSS = function setCSS(property, value) {
                            // Style > Target > Property
                            this.style[
                                property.replace(/[A-Z]/g, (data) => {
                                    return `-${data.toLowerCase()}`
                                })
                            ] = String(value)
                        });

                        // Add Event
                        EventTarget.prototype.addEvent || (EventTarget.prototype.addEvent = function addEvent(type, ...listener) {
                            for (let i = 0; i < listener.length; i += 1)
                                /* Logic
                                        If
                                            'EventTarget.prototype.customEvents' is undefined.
                                */
                                if (!(this || window).customEvents) {
                                    // Modification > Target > New Event
                                        (this || window).customEvents = (this || window).customEvents || {};
                                            // Modification > [Type]
                                            (this || window).customEvents[type] = document.createEvent('Event');
                                                // Initialize Event
                                                (this || window).customEvents[type].initEvent(type, true, true);

                                    // Event > Target > [New Event]
                                    (this || window).addEventListener(type, listener[i], false)
                                }
                        });

                        // Delete Event
                        EventTarget.prototype.delEvent || (EventTarget.prototype.delEvent = function delEvent(type, ...listener) {
                            /* Loop
                                    Index all Types
                            */
                            for (let i = 0; i < type.replace(/\ /g, '').split(/,/g).length; i += 1)
                                for (let j = 0; j < listener.length; j += 1)
                                    // Event
                                        // [if]
                                        (document.removeEventListener) ?
                                            // [true]
                                                // [Type]
                                                (this || window).removeEventListener(type.replace(/\ /g, '').split(/,/g)[i], listener[j]) :

                                            // [false]
                                                // On [Type]
                                                (this || window).detachEvent(`on${type.replace(/\ /g, '').split(/,/g)[i], listener[j]}`)
                        });

                        // Event Listeners
                        EventTarget.prototype.eventListeners || (EventTarget.prototype.eventListeners = function eventListeners() {
                            /* Logic
                                    If
                                        'getEventListeners()' is defined.
                            */
                            if (getEventListeners)
                                // Return
                                return getEventListeners(this);

                            else
                                LapysJS.error('Sorry, your browser does not support the "getEventListeners()" function.')
                        });

                        // [Query Selector (All)]
                        EventTarget.prototype.$$ || (EventTarget.prototype.$$ = function LapysJSQuerySelector(selector, index) {
                            // Update > Target
                            let that = this || document;
                            (this !== window) || (that = document);

                            // Update > Selector
                            selector = selector.replace(/\$\$([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\*\(\)\_\-\+\=\[\]\{\}\|\\\:\;\'\"\<\,\>\.\?\/]|\ |\n|){1,}\;/g, (data) => {
                                // Return
                                return `[data-id='${data.slice('$$'.length, -';'.length)}']`
                            });

                            /* Logic
                                    If
                                        'selector' is a 'string'.
                            */
                            if (typeof selector === 'string') {
                                /* Logic
                                        If
                                            [if:else if:else statement].
                                */
                                if (
                                    selector !== '[]' &&
                                    selector !== '[*]' &&
                                    selector !== '[=]' &&
                                    selector !== '[*=]' &&
                                    selector !== '[=]:not([])' &&
                                    selector !== '[=]:not([=])' &&
                                    selector !== '[=]:not([*=])' &&
                                    selector !== '[*=]:not([])' &&
                                    selector !== '[*=]:not([=])' &&
                                    selector !== '[*=]:not([*=])' &&
                                    selector !== ':not([])' &&
                                    selector !== ':not([=])' &&
                                    selector !== ':not([*=])'
                                ) {
                                    /* Logic
                                            If
                                                'index' is not 0,

                                            else if
                                                the returned node list does not have a second member
                                    */
                                    if (index !== 0) {
                                        /* Logic
                                                Switch 'index' case to
                                                    'array', 'length' and '_length'.
                                        */
                                        switch (index) {
                                            case 'array':
                                                // Return
                                                return that.querySelectorAll(selector);
                                                break;

                                            case 'length':
                                                // Return
                                                return that.querySelectorAll(selector).length;
                                                break;

                                            case '_length':
                                                // Return
                                                return (that.querySelectorAll(selector).length - 1)
                                        };

                                        /* Logic
                                                [if:else if:else statement]

                                            > Return
                                        */
                                        if (typeof index === 'number')
                                            return that.querySelectorAll(selector)[index];

                                        else if (!that.querySelectorAll(selector)[1])
                                            return that.querySelector(selector);

                                        else
                                            return that.querySelectorAll(selector);
                                    }

                                    else
                                        // Return
                                        return that.querySelector(selector)
                                };

                                /* Logic
                                        If
                                            [switch statement].
                                */
                                switch (selector) {
                                    // []
                                    case '[]':
                                        // Return
                                        return document.getElementsByAttributeName('*');
                                        break;

                                    // [*]
                                    case '[*]':
                                        // Return
                                        return document.getElementsByAttributeName('*');
                                        break;

                                    // [=]
                                    case '[=]':
                                        // Return
                                        return document.getElementsByAttributeNameAndValue('*');
                                        break;

                                    // [*=]
                                    case '[*=]':
                                        // Return
                                        return document.getElementsByAttributeNameWithValue('*');
                                        break;

                                    // [=]:not([])
                                    case '[=]:not([])':
                                        // Return
                                        return [];
                                        break;

                                    // [*=]:not([])
                                    case '[*=]:not([])':
                                        // Return
                                        return [];
                                        break;

                                    // [*=]:not([*=])
                                    case '[*=]:not([*=])':
                                        // Return
                                        return [];
                                        break;

                                    // [=]:not([=])
                                    case '[=]:not([=])':
                                        // Return
                                        return document.getElementsByAttributeNameAndValueExceptValue('*');
                                        break;

                                    // [*=]:not([=])
                                    case '[*=]:not([=])':
                                        // Return
                                        return document.getElementsByAttributeNameWithValueExceptValue('*');
                                        break;

                                    // [=]:not([*=])
                                    case '[=]:not([*=])':
                                        // Return
                                        return document.getElementsByAttributeNameAndValueWithoutValue('*');
                                        break;

                                    // [*=]:not([*=])
                                    case '[*=]:not([*=])':
                                        // Return
                                        return document.getElementsByAttributeNameWithValueWithoutValue('*');
                                        break;

                                    // :not([])
                                    case ':not([])':
                                        // Return
                                        return [];
                                        break;

                                    // :not([=])
                                    case ':not([=])':
                                        // Return
                                        return document.getElementsByAttributeNameExceptValue('*');
                                        break;

                                    // :not([*=])
                                    case ':not([*=])':
                                        // Return
                                        return document.getElementsByAttributeNameWithoutValue('*')
                                }
                            }
                        });
                            // [Child Element Query Selector All]
                            EventTarget.prototype._$ || (EventTarget.prototype._$ = function LapysJSQuerySelector(selector, index) {
                                // Initialization > (Array, Target)
                                let array = [],
                                    that = document.createElement((this || document.createElement("a")).tagName.toLowerCase());
                                        // Modification > Target > Inner HTML
                                        that.innerHTML = (this || document.createElement("a")).innerHTML;

                                /* Loop
                                        Index all children of the Target.

                                    > Modification > Target Child > Inner HTML
                                */
                                for (let i = 0; i < that.children.length; i++)
                                    that.children[i].innerHTML = "";

                                /* Loop
                                        Index all children of the Target.

                                    > Loop
                                        Index all children of the Target.

                                    > Update > Array
                                */
                                for (let i = 0; i < that.children.length; i++)
                                    for (let j = 0; j < (this || document.createElement("a")).$$(selector).length; j++)
                                        ((this || document.createElement("a")).$$(selector)[j].cloneNode().outerHTML != that.children[i].outerHTML) || array.push((this || document.createElement("a")).$$(selector)[j]);

                                /* Logic
                                        If
                                            Array has multiple elements.

                                    > Return
                                */
                                if (array[1])
                                    return array;

                                else
                                    return array[0] || null;

                                // Return
                                return null
                            });

                        // Run Event
                        EventTarget.prototype.runEvent || (EventTarget.prototype.runEvent = function runEvent(...type) {
                            /* Loop
                                    Index all elements of Type.

                                > Execution > Target > [New Event]
                            */
                            for (let i = 0; i < type.length; i += 1)
                                (this || window).dispatchEvent((this || window).customEvents[type[i]])
                        });

                        /* Set Event
                                --- UPDATE REQUIRED ---
                                    The 'events' property of all Event Targets
                                    needs to be debugged,

                                    and a default 'events' property should be
                                    specified on Nodes without event handlers/ listeners.
                        */
                        EventTarget.prototype.setEvent || (EventTarget.prototype.setEvent = function setEvent(type, listener, useCapture, wantsUntrusted) {
                            /* Loop
                                    Index all Types.

                                > Update > Type
                            */
                            for (let i = 0; i < type.replace(/\ /g, '').split(/,/g).length; i += 1) {
                                !(type.replace(/\ /g, '').split(/,/g)[i] === '_hover') || (type = type.replace('_hover', 'mouseleave, mouseover'));
                                !(type.replace(/\ /g, '').split(/,/g)[i] === '_update') || (type = type.replace('_update', 'change, input'))
                            };

                            // Modification > Target > Events
                            (this || window).events = ((this || window).events || new (function LapysJSEventMap() {}));

                            /* Loop
                                    Index all Types.
                            */
                            for (let i = 0; i < type.replace(/\ /g, '').split(/,/g).length; i += 1) {
                                // Modification > Target > Events
                                (this || window).events[
                                    ((i) => {
                                        /* Logic
                                                If
                                                    the Type is not 'online'.
                                        */
                                        if (type.replace(/\ /g, '').split(/,/g)[i] !== 'online')
                                            // Return
                                            return type.replace(/\ /g, '').split(/,/g)[i].replace('on', '');

                                        else
                                            // Return
                                            return type.replace(/\ /g, '').split(/,/g)[i]
                                    })(i)
                                ] = ((this || window).events[(() => { if (type.replace(/\ /g, '').split(/,/g)[i] !== 'online') return type.replace(/\ /g, '').split(/,/g)[i].replace('on', ''); else return type.replace(/\ /g, '').split(/,/g)[i] })()] || []);

                                // Update > Target > Events
                                (this || window).events[(() => { if (type.replace(/\ /g, '').split(/,/g)[i] !== 'online') return type.replace(/\ /g, '').split(/,/g)[i].replace('on', ''); else return type.replace(/\ /g, '').split(/,/g)[i] })()].push({
                                    // Listener
                                    listener: listener,

                                    // Type
                                    type: ((i) => { if (type.replace(/\ /g, '').split(/,/g)[i] !== 'online') return type.replace(/\ /g, '').split(/,/g)[i].replace('on', ''); else return type.replace(/\ /g, '').split(/,/g)[i] })(i),

                                    // Use Capture
                                    useCapture: useCapture || false,

                                    // Wants Untrusted
                                    wantsUntrusted: wantsUntrusted || false
                                });

                                // Event > [if]
                                (document.addEventListener) ?
                                    // [true] > [Type]
                                    (this || window).addEventListener(type.replace(/\ /g, '').split(/,/g)[i], listener, useCapture, wantsUntrusted) :

                                    // [false] > On [Type]
                                    (this || window).attachEvent(`on${type.replace(/\ /g, '').split(/,/g)[i]}`, listener, useCapture, wantsUntrusted)
                            }
                        });

                        // Add Class
                        HTMLCollection.prototype.addClass || (HTMLCollection.prototype.addClass = function addClass(...name) {
                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                /* Loop
                                        Index all elements of Name.
                                */
                                for (let j = 0; j < name.length; j += 1)
                                    // Modification > Target > Class
                                    this[i].addClass(name[j])
                        });

                        // Add Event
                        HTMLCollection.prototype.addEvent || (HTMLCollection.prototype.addEvent = function addEvent(type, ...listener) {
                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                /* Loop
                                        Index all elements of Listener.
                                */
                                for (let j = 0; j < listener.length; j += 1)
                                    // Event > Target > [Type]
                                    this[i].addEvent(type, listener[j])
                        });

                        // Add Event Listener
                        HTMLCollection.prototype.addEventListener || (HTMLCollection.prototype.addEventListener = function addEventListener(type, listener, useCapture, wantsUntrusted) {
                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Event > Target > [Type]
                                this[i].addEventListener(type, listener, useCapture, wantsUntrusted)
                        });

                        // Clear HTML
                        HTMLCollection.prototype.clearHTML || (HTMLCollection.prototype.clearHTML = function clearHTML() {
                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Target > Clear HTML
                                this[i].clearHTML()
                        });

                        // Close
                        HTMLCollection.prototype.close || (HTMLCollection.prototype.close = function close() {
                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Target > Close
                                this[i].close()
                        });

                        // CSS Selector
                        HTMLCollection.prototype.CSSSelector || (HTMLCollection.prototype.CSSSelector = function CSSSelector(value) {
                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Modification > Target > CSS Selector
                                this[i].CSSSelector = value
                        });

                        // Delete
                        HTMLCollection.prototype.delete || (HTMLCollection.prototype.delete = function Delete() {
                            /* Logic
                                    If
                                        the number of DOM Elements is greater than
                                        the number of members of the HTML Collection.
                            */
                            if (document.querySelectorAll('*').length > this.length) {
                                // Initialization > Node List
                                let nodeList = this;

                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (let i = 0; i < this.length; i += 1)
                                    // Deletion > Target
                                    (nodeList[i] || document.createElement('a')).remove()
                            }

                            else
                                // LapysJS > Error
                                LapysJS.error('LapysJS cannot delete all DOM Elements.')
                        });

                        // Delete Attribute
                        HTMLCollection.prototype.delAttr || (HTMLCollection.prototype.delAttr = function delAttr(...name) {
                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                /* Loop
                                        Index all members of Name.
                                */
                                for (let j = 0; j < name.length; j += 1)
                                    // Modification > Target > [Name]
                                    this[i].delAttr(name)
                        });

                        // Delete Class
                        HTMLCollection.prototype.delClass || (HTMLCollection.prototype.delClass = function delClass(...data) {
                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                for (let j = 0; j < data.length; j += 1)
                                    // Modification > Target > Class
                                    this[i].delClass(data[j])
                        });

                        // Delete Event
                        HTMLCollection.prototype.delEvent || (HTMLCollection.prototype.delEvent = function delEvent(type, ...listener) {
                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                for (let j = 0; j < listener.length; j += 1)
                                    // Event > Target > [Type]
                                    this[i].delEvent(type, listener[j])
                        });

                        // Delete Style
                        HTMLCollection.prototype.delStyle || (HTMLCollection.prototype.delStyle = function delStyle(...style) {
                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                for (let j = 0; j < style.length; j += 1)
                                    // Modification > Target > Style
                                    this[i].delStyle(style[j])
                        });

                        /* Empty
                                --- CONSIDER ---
                                    This method apparently removes a pre-built 'empty()' String method.
                        */
                        HTMLCollection.prototype.empty = function empty() {
                            // Return
                            return !this[0] || true
                        };

                        // Get Attr[ibute]
                        HTMLCollection.prototype.getAttr || (HTMLCollection.prototype.getAttr = function getAttr(...name) {
                            let Array = [];

                            /* Loop
                                    Index all elements of Name.
                            */
                            for (let i = 0; i < name.length; i += 1) {
                                // Initialization > Array
                                let array = [];

                                /* Loop
                                        Index all members of the HTML Collection.

                                    > Update > Array
                                */
                                for (let j = 0; j < this.length; j += 1)
                                    array.push(this[j].getAttr(name[i]));

                                // Return
                                if (array[1])
                                    Array.push(array);

                                else
                                    Array.push(array[0])
                            };

                            return Array
                        });

                        // Get Attribute
                        HTMLCollection.prototype.getAttribute || (HTMLCollection.prototype.getAttribute = function getAttribute(name) {
                            // Initialization > Array
                            let array = [];

                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Update > Array
                                array.push(this[i].getAttribute(name));

                            // Return
                            return array
                        });

                        // Get CSS
                        HTMLCollection.prototype.getCSS || (HTMLCollection.prototype.getCSS = function getCSS(property) {
                            // Initialization > Array
                            let array = [];

                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Update > Array
                                    array.push(this[i].getCSS(property));

                            // Return
                            return array
                        });

                        // Get Elements By Attribute Name
                        HTMLCollection.prototype.getElementsByAttributeName || (HTMLCollection.prototype.getElementsByAttributeName = function getElementsByAttributeName(name) {
                            // Initialization > Array
                            let array = [];

                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Update > Array
                                array.push(this[i].getElementsByAttributeName(name));

                            // Return
                            return array
                        });

                        // Get Elements By Attribute Name and Value
                        HTMLCollection.prototype.getElementsByAttributeNameAndValue || (HTMLCollection.prototype.getElementsByAttributeNameAndValue = function getElementsByAttributeNameAndValue(name, value = '') {
                            // Initialization > Array
                            let array = [];

                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Update > Array
                                array.push(this[i].getElementsByAttributeNameAndValue(name, value));

                            // Return
                            return array
                        });

                        // Get Elements By Attribute Name and Value except Value
                        HTMLCollection.prototype.getElementsByAttributeNameAndValueExceptValue || (HTMLCollection.prototype.getElementsByAttributeNameAndValueExceptValue = function getElementsByAttributeNameAndValueExceptValue(name, value1 = '', value2 = '') {
                            // Initialization > Array
                            let array = [];

                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Update > Array
                                array.push(this[i].getElementsByAttributeNameAndValueExceptValue(name, value1, value2));

                            // Return
                            return array
                        });

                        // Get Elements By Attribute Name and Value without Value
                        HTMLCollection.prototype.getElementsByAttributeNameAndValueWithoutValue || (HTMLCollection.prototype.getElementsByAttributeNameAndValueWithoutValue = function getElementsByAttributeNameAndValueWithoutValue(name, value1 = '', value2 = '') {
                            // Initialization > Array
                            let array = [];

                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Update > Array
                                array.push(this[i].getElementsByAttributeNameAndValueWithoutValue(name, value1, value2));

                            // Return
                            return array
                        });

                        // Get Elements By Attribute Name except Value
                        HTMLCollection.prototype.getElementsByAttributeNameExceptValue || (HTMLCollection.prototype.getElementsByAttributeNameExceptValue = function getElementsByAttributeNameExceptValue(name, value = '') {
                            // Initialization > Array
                            let array = [];

                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Update > Array
                                array.push(this[i].getElementsByAttributeNameExceptValue(name, value));

                            // Return
                            return array
                        });

                        // Get Elements By Attribute Name with Value
                        HTMLCollection.prototype.getElementsByAttributeNameWithValue || (HTMLCollection.prototype.getElementsByAttributeNameWithValue = function getElementsByAttributeNameWithValue(name, value = '') {
                            // Initialization > Array
                            let array = [];

                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Update > Array
                                array.push(this[i].getElementsByAttributeNameWithValue(name, value));

                            // Return
                            return array
                        });

                        // Get Elements By Attribute Name with Value except Value
                        HTMLCollection.prototype.getElementsByAttributeNameWithValueExceptValue || (HTMLCollection.prototype.getElementsByAttributeNameWithValueExceptValue = function getElementsByAttributeNameWithValueExceptValue(name, value1 = '', value2 = '') {
                            // Initialization > Array
                            let array = [];

                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Update > Array
                                array.push(this[i].getElementsByAttributeNameWithValueExceptValue(name, value1, value2));

                            // Return
                            return array
                        });

                        // Get Elements By Attribute Name with Value without Value
                        HTMLCollection.prototype.getElementsByAttributeNameWithValueWithoutValue || (HTMLCollection.prototype.getElementsByAttributeNameWithValueWithoutValue = function getElementsByAttributeNameWithValueWithoutValue(name, value1 = '', value2 = '') {
                            // Initialization > Array
                            let array = [];

                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Update > Array
                                array.push(this[i].getElementsByAttributeNameWithValueWithoutValue(name, value1, value2));

                            // Return
                            return array
                        });

                        // Get Elements By Attribute Name without Value
                        HTMLCollection.prototype.getElementsByAttributeNameWithoutValue || (HTMLCollection.prototype.getElementsByAttributeNameWithoutValue = function getElementsByAttributeNameWithoutValue(name, value = '') {
                            // Initialization > Array
                            let array = [];

                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Update > Array
                                array.push(this[i].getElementsByAttributeNameWithoutValue(name, value));

                            // Return
                            return array
                        });

                        // Get Elements Related By Data ID
                        HTMLCollection.prototype.getElementsRelatedByDataID || (HTMLCollection.prototype.getElementsRelatedByDataID = function getElementsRelatedByDataID() {
                            // Initialization > Array
                            let array = [];

                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Update > Array
                                array.push(this[i].getElementsRelatedByDataID());

                            // Return
                            return array
                        });

                        // Has Attr[ibute]
                        HTMLCollection.prototype.hasAttr || (HTMLCollection.prototype.hasAttr = function hasAttr(name) {
                            // Initialization > Array
                            let array = [];

                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Update > Array
                                array.push(this[i].hasAttr(name));

                            // Return
                            return array
                        });

                        // Has Attribute
                        HTMLCollection.prototype.hasAttribute || (HTMLCollection.prototype.hasAttribute = function hasAttribute(name) {
                            // Initialization > Array
                            let array = [];

                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Update > Array
                                array.push(this[i].hasAttribute(name));

                            // Return
                            return array
                        });

                        // Has Class
                        HTMLCollection.prototype.hasClass || (HTMLCollection.prototype.hasClass = function hasClass(name) {
                            // Initialization > Array
                            let array = [];

                            /* Loop
                                    Index all members of the HTMLCollection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Update > Array
                                array.push(this[i].hasClass(name));

                            // Return
                            return array
                        });

                        // Has Child (Element)
                        HTMLCollection.prototype.hasChild || (HTMLCollection.prototype.hasChild = function hasChild(child) {
                            // Initialization > Array
                            let array = [];

                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Update > Array
                                array.push(this[i].hasChild(child));

                            // Return
                            return array
                        });

                        // Has Child By Query Selector
                        HTMLCollection.prototype.hasChildByQuerySelector || (HTMLCollection.prototype.hasChildByQuerySelector = function hasChildByQuerySelector(child) {
                            // Initialization > Array
                            let array = [];

                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Update > Array
                                array.push(this[i].hasChildByQuerySelector(child));

                            // Return
                            return array
                        });

                        // Hide
                        HTMLCollection.prototype.hide || (HTMLCollection.prototype.hide = function hide(child) {
                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Modification > Target > Hidden
                                this[i].hidden = true
                        });

                        // Open
                        HTMLCollection.prototype.open || (HTMLCollection.prototype.open = function open(child) {
                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Modification > Target > Open
                                this[i].open()
                        });

                        // [Query Selector (All)]
                        HTMLCollection.prototype.$$ || (HTMLCollection.prototype.$$ = function LapysJSQuerySelector(selector, index) {
                            // Initialization > Array
                            let array = [];

                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Update > Array
                                array.push(this[i].$$(selector, index));

                            // Return
                            return array
                        });

                        // Relate Element By Data ID
                        HTMLCollection.prototype.relateElementByDataID || (HTMLCollection.prototype.relateElementByDataID = function relateElementByDataID(element) {
                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Target > Relate Element By Data ID
                                this[i].relateElementByDataID(element)
                        });

                        // Remove Attribute
                        HTMLCollection.prototype.removeAttribute || (HTMLCollection.prototype.removeAttribute = function removeAttribute(name) {
                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Modification > Target > [Name]
                                this[i].removeAttribute(name)
                        });

                        // Remove Event Listener
                        HTMLCollection.prototype.removeEventListener || (HTMLCollection.prototype.removeEventListener = function removeEventListener(type, listener) {
                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Event > Target > [Type]
                                this[i].removeEventListener(type, listener)
                        });

                        // Run Event
                        HTMLCollection.prototype.runEvent || (HTMLCollection.prototype.runEvent = function runEvent(type) {
                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Event > Target > [Type]
                                this[i].runEvent(type)
                        });

                        // Set Attr[ibute]
                        HTMLCollection.prototype.setAttr || (HTMLCollection.prototype.setAttr = function setAttr(name, value) {
                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Modification > Target > [Name]
                                this[i].setAttr(name, value)
                        });

                        // Set Attribute
                        HTMLCollection.prototype.setAttribute || (HTMLCollection.prototype.setAttribute = function setAttribute(name, value) {
                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Modification > Target > [Name]
                                this[i].setAttribute(name, value)
                        });

                        // Attr[ibute]
                        HTMLCollection.prototype.attr || (HTMLCollection.prototype.attr = function attr(name, value) {
                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Modification > Target > [Name]
                                this[i].attr(name, value)
                        });

                        // Insert
                        HTMLCollection.prototype.insertChild || (HTMLCollection.prototype.insertChild = function insertChild(position, element) {
                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Insertion > Element
                                this[i].insertChild(position, element)
                        });

                        // Get CSS
                        HTMLCollection.prototype.setCSS || (HTMLCollection.prototype.setCSS = function setCSS(property, value) {
                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Style > Target > [Property]
                                this[i].setCSS(property, value)
                        });

                        // Set Event
                        HTMLCollection.prototype.setEvent || (HTMLCollection.prototype.setEvent = function setEvent(type, listener, useCapture, wantsUntrusted) {
                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Event > Target > [Type]
                                this[i].setEvent(type, listener, useCapture, wantsUntrusted)
                        });

                        // Show
                        HTMLCollection.prototype.show || (HTMLCollection.prototype.show = function show() {
                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Target > Show
                                this[i].show()
                        });

                        // Style
                        HTMLCollection.prototype.style || (HTMLCollection.prototype.style = function style(declaration, value) {
                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Modification > Target > Style > [Declaration]
                                this[i].style[declaration] = value
                        });

                        // To Array
                        HTMLCollection.prototype.toArray || (HTMLCollection.prototype.toArray = function toArray() {
                            // Initialization > Array
                            let array = [];

                            /* Loop
                                    Index all members of the HTML Collection.
                            */
                            for (let i = 0; i < this.length; i += 1)
                                // Update > Array
                                array.push(this[i]);

                            // Return
                            return array
                        });

                        // Clear HTML
                        HTMLElement.prototype.clearHTML || (HTMLElement.prototype.clearHTML = function clearHTML() {
                            // Modification > Target > (Inner HTML, Value)
                            !this.innerHTML || (this.innerHTML = '');
                            !this.value || (this.value = '')
                        });

                        // Hide
                        HTMLElement.prototype.hide || (HTMLElement.prototype.hide = function hide() {
                            // Modification > Target > Hidden
                            this.hidden = true
                        });

                        // Show
                        HTMLElement.prototype.show || (HTMLElement.prototype.show = function show() {
                            // Modification > Target > Hidden
                            this.hidden = false
                        });

                        // Load
                        HTMLHeadElement.prototype.load || (HTMLHeadElement.prototype.load = function load(dataID, array) {
                            /* Logic
                                    If
                                        Array has '.css' in it,

                                    else if
                                        Array has '.js' in it.
                            */
                            if (array.indexOf('.css') > -1)
                                css.link(dataID, array);

                            else if (array.indexOf('.js') > -1)
                                js.src(dataID, array);

                            else
                                LapysJS.warn('The "load()" method can only call to ".css" and ".js" files.')
                        });

                        // Delete
                        Node.prototype.delete || (Node.prototype.delete = function Delete() {
                            // Deletion
                                // Target
                                this.remove()
                        });

                        // Insert Child
                        Node.prototype.insertChild || (Node.prototype.insertChild = function insertChild(position, element) {
                            // Insertion > Element
                            this[(str((position !== 'begin') || str((!this.prepend || 'prepend')).replace('true', 'cloneNode')).replace('true', str((position !== 'end') || str((!this.append || 'append')).replace('true', 'appendChild')).replace('true', '')) || 'cloneNode')](element)
                        });

                        // Add Class
                        NodeList.prototype.addClass || (NodeList.prototype.addClass = HTMLCollection.prototype.addClass);

                        // Add Event
                        NodeList.prototype.addEvent || (NodeList.prototype.addEvent = HTMLCollection.prototype.addEvent);

                        // Add Event Listener
                        NodeList.prototype.addEventListener || (NodeList.prototype.addEventListener = HTMLCollection.prototype.addEventListener);

                        // Close
                        NodeList.prototype.close || (NodeList.prototype.close = HTMLCollection.prototype.close);

                        // Clear HTML
                        NodeList.prototype.clearHTML || (NodeList.prototype.clearHTML = HTMLCollection.prototype.clearHTML);

                        // CSS Selector
                        NodeList.prototype.CSSSelector || (NodeList.prototype.CSSSelector = HTMLCollection.prototype.CSSSelector);

                        // Delete Attr[ibute]
                        NodeList.prototype.delAttr || (NodeList.prototype.delAttr = HTMLCollection.prototype.delAttr);

                        // Delete Class
                        NodeList.prototype.delClass || (NodeList.prototype.delClass = HTMLCollection.prototype.delClass);

                        // Delete
                        NodeList.prototype.delete || (NodeList.prototype.delete = HTMLCollection.prototype.delete);

                        // Delete Event
                        NodeList.prototype.delEvent || (NodeList.prototype.delEvent = HTMLCollection.prototype.delEvent);

                        // Delete Style
                        NodeList.prototype.delStyle || (NodeList.prototype.delStyle = HTMLCollection.prototype.delStyle);

                        // Empty
                        NodeList.prototype.empty = HTMLCollection.prototype.empty;

                        // Get Attr[ibute]
                        NodeList.prototype.getAttr || (NodeList.prototype.getAttr = HTMLCollection.prototype.getAttr);

                        // Get Attribute
                        NodeList.prototype.getAttribute || (NodeList.prototype.getAttribute = HTMLCollection.prototype.getAttribute);

                        // Get CSS
                        NodeList.prototype.getCSS || (NodeList.prototype.getCSS = HTMLCollection.prototype.getCSS);

                        // Get Elements By Attribute Name
                        NodeList.prototype.getElementsByAttributeName || (NodeList.prototype.getElementsByAttributeName = HTMLCollection.prototype.getElementsByAttributeName);

                        // Get Elements By Attribute Name and Value
                        NodeList.prototype.getElementsByAttributeNameAndValue || (NodeList.prototype.getElementsByAttributeNameAndValue = HTMLCollection.prototype.getElementsByAttributeNameAndValue);

                        // Get Elements By Attribute Name and Value except Value
                        NodeList.prototype.getElementsByAttributeNameAndValueExceptValue || (NodeList.prototype.getElementsByAttributeNameAndValueExceptValue = HTMLCollection.prototype.getElementsByAttributeNameAndValueExceptValue);

                        // Get Elements By Attribute Name and Value without Value
                        NodeList.prototype.getElementsByAttributeNameAndValueWithoutValue || (NodeList.prototype.getElementsByAttributeNameAndValueWithoutValue = HTMLCollection.prototype.getElementsByAttributeNameAndValueWithoutValue);

                        // Get Elements By Attribute Name except Value
                        NodeList.prototype.getElementsByAttributeNameExceptValue || (NodeList.prototype.getElementsByAttributeNameExceptValue = HTMLCollection.prototype.getElementsByAttributeNameExceptValue);

                        // Get Element By Attribute Name with Value
                        NodeList.prototype.getElementsByAttributeNameWithValue || (NodeList.prototype.getElementsByAttributeNameWithValue = HTMLCollection.prototype.getElementsByAttributeNameWithValue);

                        // Get Elements By Attribute Name with Value except Value
                        NodeList.prototype.getElementsByAttributeNameWithValueExceptValue || (NodeList.prototype.getElementsByAttributeNameWithValueExceptValue = HTMLCollection.prototype.getElementsByAttributeNameWithValueExceptValue);

                        // Get Elements By Attribute Name with Value without Value
                        NodeList.prototype.getElementsByAttributeNameWithValueWithoutValue || (NodeList.prototype.getElementsByAttributeNameWithValueWithoutValue = HTMLCollection.prototype.getElementsByAttributeNameWithValueWithoutValue);

                        // Get Elements By Attribute Name without Value
                        NodeList.prototype.getElementsByAttributeNameWithoutValue || (NodeList.prototype.getElementsByAttributeNameWithoutValue = HTMLCollection.prototype.getElementsByAttributeNameWithoutValue);

                        // Get Elements Related By Data ID
                        NodeList.prototype.getElementsRelatedByDataID || (NodeList.prototype.getElementsRelatedByDataID = HTMLCollection.prototype.getElementsRelatedByDataID);

                        // Has Attr[ibute]
                        NodeList.prototype.hasAttr || (NodeList.prototype.hasAttr = HTMLCollection.prototype.hasAttr);

                        // Has Attribute
                        NodeList.prototype.hasAttribute || (NodeList.prototype.hasAttribute = HTMLCollection.prototype.hasAttribute);

                        // Has Child
                        NodeList.prototype.hasChild || (NodeList.prototype.hasChild = HTMLCollection.prototype.hasChild);

                        // Has Child by Query Selector
                        NodeList.prototype.hasChildByQuerySelector || (NodeList.prototype.hasChildByQuerySelector = HTMLCollection.prototype.hasChildByQuerySelector);

                        // Has Class
                        NodeList.prototype.hasClass || (NodeList.prototype.hasClass = HTMLCollection.prototype.hasClass);

                        // Hide
                        NodeList.prototype.hide || (NodeList.prototype.hide = HTMLCollection.prototype.hide);

                        // Insert
                        NodeList.prototype.insertChild || (NodeList.prototype.insertChild = HTMLCollection.prototype.insertChild);

                        // Open
                        NodeList.prototype.open || (NodeList.prototype.open = HTMLCollection.prototype.open);

                        // [Query Selector (All)]
                        NodeList.prototype.$$ || (NodeList.prototype.$$ = HTMLCollection.prototype.$$);

                        // Relate Element By Data ID
                        NodeList.prototype.relateElementByDataID || (NodeList.prototype.relateElementByDataID = HTMLCollection.prototype.relateElementByDataID);

                        // Remove Attribute
                        NodeList.prototype.removeAttribute || (NodeList.prototype.removeAttribute = HTMLCollection.prototype.removeAttribute);

                        // Remove Event Listener
                        NodeList.prototype.removeEventListener || (NodeList.prototype.removeEventListener = HTMLCollection.prototype.removeEventListener);

                        // Run Event
                        NodeList.prototype.runEvent || (NodeList.prototype.runEvent = HTMLCollection.prototype.runEvent);

                        // Set Attr[ibute]
                        NodeList.prototype.setAttr || (NodeList.prototype.setAttr = HTMLCollection.prototype.setAttr);

                        // Set Attribute
                        NodeList.prototype.setAttribute || (NodeList.prototype.setAttribute = HTMLCollection.prototype.setAttribute);

                        // Attr[ibute]
                        NodeList.prototype.attr || (NodeList.prototype.attr = HTMLCollection.prototype.attr);

                        // Set CSS
                        NodeList.prototype.setCSS || (NodeList.prototype.setCSS = HTMLCollection.prototype.setCSS);

                        // Set Event
                        NodeList.prototype.setEvent || (NodeList.prototype.setEvent = HTMLCollection.prototype.setEvent);

                        // Show
                        NodeList.prototype.show || (NodeList.prototype.show = HTMLCollection.prototype.show);

                        // Style
                        NodeList.prototype.style || (NodeList.prototype.style = HTMLCollection.prototype.style);

                        // To Array
                        NodeList.prototype.toArray || (NodeList.prototype.toArray = HTMLCollection.prototype.toArray);

                        // Child Node Index
                        document.createElement('a').childNodeIndex || (Object.defineProperty(Element.prototype, 'childNodeIndex', {
                            configurable: true,
                            enumerable: true,
                            get: function getChildNodeIndex() {
                                /* Loop
                                        Index all children of the Target"s parent.
                                */
                                for (let i = 0; i < ((this.parentElement || this.parentNode || []).children || []).length; i += 1)
                                    /* Logic
                                            If
                                                the indexed child is the Target.
                                    */
                                    if (((this.parentElement || this.parentNode || []).children || [])[i] === this) {
                                        // Return
                                        return i;

                                        // Break
                                        break
                                    }
                            }
                        }));

                        /* CSS Selector
                                --- WARN ---
                                    Strings cannot be placed as values in attributes.
                        */
                        document.createElement('a').CSSSelector || (Object.defineProperty(Element.prototype, 'CSSSelector', {
                            // Configurable
                            configurable: true,

                            // Enumerable
                            enumerable: true,

                            // Get
                            get: function getCSSSelector() {
                                // Initialization
                                    // Target
                                    let that = this;

                                    // CSS Selector
                                    let CSSSelector = (
                                        // Element Tag Name
                                        that.tagName.toLowerCase() +

                                        // Class
                                        (() => {
                                            /* Logic
                                                    If the element has a class.
                                            */
                                            if ((that.getAttribute('class') || ' ').indexOf(' ') < 0)
                                                /* Loop
                                                        Index the element"s class nodes.
                                                */
                                                for (let i = 0; i < (that.getAttribute('class') || ' ').trim().split(/\ /g).length; i += 1)
                                                    // Return
                                                    return `.${that.getAttribute('class') || ' '}`.trim().split(/\ /g)[i];

                                            else
                                                // Return
                                                return ''
                                        })() +

                                        // ID
                                        (() => {
                                            /* Logic
                                                    If
                                                        the element has an ID.
                                            */
                                            if (that.id)
                                                // Return
                                                return (`#${that.id}`);

                                            else
                                                // Return
                                                return ''
                                        })() +

                                        // Attributes
                                        (() => {
                                            // Initialization
                                                // Target
                                                    // Attributes
                                                    let thatAttributes = '';

                                            /* Loop
                                                    Index the element"s attributes.
                                            */
                                            for (let i = 0; i < that.attributes.length; i += 1)
                                                /* Logic
                                                        If
                                                            the attribute name is not 'class' and 'id'.
                                                */
                                                if (
                                                    that.attributes[i].name !== 'class' &&
                                                    that.attributes[i].name !== 'id'
                                                )
                                                    // Update
                                                        // Attributes
                                                        thatAttributes += `[${that.attributes[i].name}='${(that.attributes[i].value || '').replace(/'/g, "\"")}']`;

                                            // Return
                                                // Attributes
                                                return thatAttributes
                                        })()
                                    );

                                // Return
                                    // CSS Selector
                                    return CSSSelector.replace(/=\'\'/g, '')
                            },

                            // Set
                            set: function setCSSSelector(CSSSelector) {
                                // Update > CSS Selector
                                CSSSelector = CSSSelector.replace(/\=([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\(\)\_\-\+\=\[\]\{\}\|\\\*\:\;\'\"\<\,\>\.\?\/]|(\.\.\.|&hellip;|…)|(&rsquo;|’)|(&amp;|&)|\ |\n|\t|\r|){1,}\]/g, (data) => {
                                    /* Logic
                                            [if:else if:else statement]

                                        > Return
                                    */
                                    if (
                                        data.replace(/\ /g, '')[1] !== '\'' &&
                                        data.replace(/\ /g, '')[1] !== '"'
                                    )
                                        return `='${data.replace('=', '')}'`;

                                    else
                                        return data
                                }).replace(/('|")([a-z]|[A-Z]|[0-9]|[\~\`\!\@\*\#\$\%\^&\(\)\_\-\+\=\[\]\{\}\|\\\:\;\<\,\>\.\?\/]|(\.\.\.|&hellip;|…)|(&rsquo;|’)|(&amp;|&)|\ |\n|\t|\r|){1,}('|")/g, (data) => {
                                    // Return
                                    return `'${data.slice('\''.length, -'\''.length).replace(/('|")/g, (data) => {
                                        // Return
                                        return String((data !== '\'') || '::lapys_string_2::').replace('true', '::lapys_string_1::');
                                    }).replace(/#/g, '::lapys_hash_2::')}'`
                                }).replace(/('|")([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\(\)\_\-\+\=\[\]\{\}\|\\\:\;\'\"\<\,\>\.\?\/]|(\.\.\.|&hellip;|…)|(&rsquo;|’)|(&amp;|&)|\ |\n|\t|\r|){1,}\.([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\(\)\_\-\+\=\[\]\{\}\|\\\:\;\'\"\<\,\>\.\?\/]|(\.\.\.|&hellip;|…)|(&rsquo;|’)|(&amp;|&)|\ |\n|\t|\r|){1,}('|")/g, (data) => {
                                    // Return
                                    return data.replace(/\./g, '::lapys_period::')
                                }).replace(/\.( |){1,}\./g, '.').replace(/#( |){1,}#/g, '#').replace(/#([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\(\)\_\-\+\=\{\}\|\\\:\;\'\"\<\,\>\?\/]|(\.\.\.|&hellip;|…)|(&rsquo;|’)|(&amp;|&)|\ |\n|\t|\r|){1,}/, (data) => {
                                    // Return
                                    return data.replace('#', '::lapys_hash::')
                                }).replace(/#([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\(\)\_\-\+\=\{\}\|\\\:\;\'\"\<\,\>\?\/]|(\.\.\.|&hellip;|…)|(&rsquo;|’)|(&amp;|&)|\ |\n|\t|\r|){1,}/, '').replace(/::lapys_hash::([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\(\)\_\-\+\=\{\}\|\\\:\;\'\"\<\,\>\?\/]|(\.\.\.|&hellip;|…)|(&rsquo;|’)|(&amp;|&)|\ |\n|\t|\r|){1,}/, (data) => {
                                    // Return
                                    return data.replace('::lapys_hash::', '#')
                                }).replace(/\[( |){1,}\]/g, '');

                                /* Loop
                                        Index all classes in the CSS Selector.
                                */
                                for (let i = 1; i < CSSSelector.replace(/\[('|"|)([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\(\)\_\-\+\=\[\]\{\}\|\\\*\:\;\'\"\<\,\>\.\?\/]|(\.\.\.|&hellip;|…)|(&rsquo;|’)|(&amp;|&)|\ |\n|\t|\r|){1,}('|"|)\]/g, '').replace(/#([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\(\)\_\-\+\=\{\}\|\\\:\;\'\"\<\,\>\?\/]|(\.\.\.|&hellip;|…)|(&rsquo;|’)|(&amp;|&)|\ |\n|\t|\r|){1,}/g, '').split(/\./g).length; i += 1)
                                    this.addClass(CSSSelector.replace(/\[('|"|)([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\(\)\_\-\+\=\[\]\{\}\|\\\*\:\;\'\"\<\,\>\.\?\/]|(\.\.\.|&hellip;|…)|(&rsquo;|’)|(&amp;|&)|\ |\n|\t|\r|){1,}('|"|)\]/g, '').replace(/#([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\(\)\_\-\+\=\{\}\|\\\:\;\'\"\<\,\>\?\/]|(\.\.\.|&hellip;|…)|(&rsquo;|’)|(&amp;|&)|\ |\n|\t|\r|){1,}/g, '').split(/\./g)[i]);

                                // Modification > Target > ID
                                !(CSSSelector.indexOf('#') > -1) || (this.id = CSSSelector.replace(/\.([a-z]|[A-Z]|[0-9]|[\~\`\!\@\.\$\%\^&\(\)\_\-\+\=\{\}\|\\\:\;\'\"\<\,\>\?\/]|(\.\.\.|&hellip;|…)|(&rsquo;|’)|(&amp;|&)|\ |\n|\t|\r|){1,}/g, '').replace(/\[('|"|)([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\(\)\_\-\+\=\[\]\{\}\|\\\*\:\;\'\"\<\,\>\.\?\/]|(\.\.\.|&hellip;|…)|(&rsquo;|’)|(&amp;|&)|\ |\n|\t|\r|){1,}('|"|)\]/g, '').slice(1));

                                /* Loop
                                        Index all attributes except Class, ID & Style in the CSS Selector.
                                */
                                for (let i = 1; i < CSSSelector.replace(/\.([a-z]|[A-Z]|[0-9]|[\~\`\!\@\.\$\%\^&\(\)\_\-\+\=\{\}\|\\\:\;\'\"\<\,\>\?\/]|(\.\.\.|&hellip;|…)|(&rsquo;|’)|(&amp;|&)|\ |\n|\t|\r|){1,}/g, '').replace(/#([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\(\)\_\-\+\=\{\}\|\\\:\;\'\"\<\,\>\?\/]|(\.\.\.|&hellip;|…)|(&rsquo;|’)|(&amp;|&)|\ |\n|\t|\r|){1,}/g, '').replace(/\[(class|id)(=|)('|"|)([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\(\)\_\-\+\=\{\}\|\\\:\;\'\"\<\,\>\.\?\/]|(\.\.\.|&hellip;|…)|(&rsquo;|’)|(&amp;|&)|\ |\n|\t|\r|){1,}('|"|)\]/g, '').replace(/\]/g, '').split(/\[/g).length; i += 1)
                                    !CSSSelector.replace(/\.([a-z]|[A-Z]|[0-9]|[\~\`\!\@\.\$\%\^&\(\)\_\-\+\=\{\}\|\\\:\;\'\"\<\,\>\?\/]|(\.\.\.|&hellip;|…)|(&rsquo;|’)|(&amp;|&)|\ |\n|\t|\r|){1,}/g, '').replace(/#([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\(\)\_\-\+\=\{\}\|\\\:\;\'\"\<\,\>\?\/]|(\.\.\.|&hellip;|…)|(&rsquo;|’)|(&amp;|&)|\ |\n|\t|\r|){1,}/g, '').replace(/\[(class|id)(=|)('|"|)([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\(\)\_\-\+\=\{\}\|\\\:\;\'\"\<\,\>\.\?\/]|(\.\.\.|&hellip;|…)|(&rsquo;|’)|(&amp;|&)|\ |\n|\t|\r|){1,}('|"|)\]/g, '').replace(/\]/g, '').split(/\[/g)[i].replace(/\ /g, '') || this.setAttribute(CSSSelector.replace(/\.([a-z]|[A-Z]|[0-9]|[\~\`\!\@\.\$\%\^&\(\)\_\-\+\=\{\}\|\\\:\;\'\"\<\,\>\?\/]|(\.\.\.|&hellip;|…)|(&rsquo;|’)|(&amp;|&)|\ |\n|\t|\r|){1,}/g, '').replace(/#([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\(\)\_\-\+\=\{\}\|\\\:\;\'\"\<\,\>\?\/]|(\.\.\.|&hellip;|…)|(&rsquo;|’)|(&amp;|&)|\ |\n|\t|\r|){1,}/g, '').replace(/\[(class|id)(=|)('|"|)([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\(\)\_\-\+\=\{\}\|\\\:\;\'\"\<\,\>\.\?\/]|(\.\.\.|&hellip;|…)|(&rsquo;|’)|(&amp;|&)|\ |\n|\t|\r|){1,}('|"|)\]/g, '').replace(/\]/g, '').split(/\[/g)[i].getBeforeChar('='), CSSSelector.replace(/\.([a-z]|[A-Z]|[0-9]|[\~\`\!\@\.\$\%\^&\(\)\_\-\+\=\{\}\|\\\:\;\'\"\<\,\>\?\/]|(\.\.\.|&hellip;|…)|(&rsquo;|’)|(&amp;|&)|\ |\n|\t|\r|){1,}/g, '').replace(/#([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\(\)\_\-\+\=\{\}\|\\\:\;\'\"\<\,\>\?\/]|(\.\.\.|&hellip;|…)|(&rsquo;|’)|(&amp;|&)|\ |\n|\t|\r|){1,}/g, '').replace(/\[(class|id)(=|)('|"|)([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\(\)\_\-\+\=\{\}\|\\\:\;\'\"\<\,\>\.\?\/]|(\.\.\.|&hellip;|…)|(&rsquo;|’)|(&amp;|&)|\ |\n|\t|\r|){1,}('|"|)\]/g, '').replace(/\]/g, '').split(/\[/g)[i].replace(/=('|"|)([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\(\)\_\-\+\'\"\[\]\{\}\|\\\:\;\<\,\>\.\?\/]|(\.\.\.|&hellip;|…)|(&rsquo;|’)|(&amp;|&)|\ |\n|\t|\r|){1,}('|"|)/, (data) => {
                                            // Return
                                            return data.replace(/('|")/g, '')
                                        }).getAfterChar('=').replace(/::lapys_period::/g, '.').replace(/::lapys_hash_2::/g, '#').replace(/::lapys_string_1::/g, '"').replace(/::lapys_string_2::/g, '\'')
                                    )
                            }
                        }));

                        // Parent
                        document.createElement('a').parent || (Object.defineProperty(Element.prototype, 'parent', {
                            // Configurable
                            configurable: true,

                            // Enumerable
                            enumerable: true,

                            get: function getParent() {
                                // Return
                                return this.parentElement || this.parentNode
                            }
                        }));

                        // Parent Path
                        document.createElement('a').parentPath || (Object.defineProperty(Element.prototype, 'parentPath', {
                            // Configurable
                            configurable: true,

                            // Enumerable
                            enumerable: true,

                            // Get
                            get: function getParentPath() {
                                // Initialization
                                    // Target
                                    let that = this;

                                    // Parent Nodes
                                    let parents = [];

                                /* Logic
                                        While
                                            the Target is still defined.
                                */
                                while (that) {
                                    // Update
                                        // Parent Nodes
                                        parents.unshift(that);

                                        // Target
                                        that = (that.parentNode || that.parentElement)
                                };

                                // Update > Parent Nodes
                                parents.unshift(window);
                                parents.reverse();

                                // Return
                                return parents
                            },

                            // Set
                            set: () => {}
                        }));

                        // Role
                        document.createElement('a').role || (Object.defineProperty(Element.prototype, 'role', {
                            // Configurable
                            configurable: true,

                            // Enumerable
                            enumerable: true,

                            default: 2,

                            // Get
                            get: function getRole() {
                                // Return
                                return this.getAttribute('role')
                            },

                            // Set
                            set: function setRole(data) {
                                // Modification > Target > Role
                                this.setAttribute('role', data)
                            }
                        }));

                        /* Siblings
                                --- NOTE ---
                                    The property here should be volatile.
                        */
                        Object.defineProperty(Element.prototype, 'siblings', {
                            // Configurable
                            configurable: true,

                            // Enumerable
                            enumerable: true,

                            // Get
                            get: function getSiblings(number) {
                                // Initialization > (Target, Array)
                                let that = this,
                                    array = [];

                                for (let i = 0; i < ((this.parentElement || this.parentNode).children || []).length; i += 1)
                                    array.push((this.parentElement || this.parentNode).children[i]);

                                // Return
                                return array.filter((data) => {
                                    // Return
                                    return data !== that
                                })
                            }
                        });

                        // Height
                        document.getElementsByTagName('html').height || (Object.defineProperty(HTMLCollection.prototype, 'height', {
                            // Configurable
                            configurable: true,

                            // Enumerable
                            enumerable: true,

                            // Get
                            get: function getHeight() {
                                // Initialization > Array
                                let array = [];

                                /* Loop
                                        Index all members of the HTML Collection.

                                    > Update > Array
                                */
                                for (let i = 0; i < this.length; i += 1)
                                    array.push(this[i].height);

                                // Return
                                return array
                            },

                            // Set
                            set: function setHeight(number) {
                                /* Loop
                                        Index all members of the HTML Collection.

                                    > Style > Target > Height
                                */
                                for (let i = 0; i < this.length; i += 1)
                                    this[i].style.height = `${number}px`;
                            }
                        }));

                        // Node Index
                        document.getElementsByTagName('html').nodeIndex || (Object.defineProperty(HTMLCollection.prototype, 'nodeIndex', {
                            // Configurable
                            configurable: true,

                            // Enumerable
                            enumerable: true,

                            // Get
                            get: function getNodeIndex() {
                                // Initialization > Array
                                let array = [];

                                /* Loop
                                    Index all members of the HTML Collection.
                                */
                                for (let i = 0; i < this.length; i += 1)
                                    // Update > Array
                                    array.push(this[i].nodeIndex);

                                // Return
                                return array
                            },

                            // Set
                            set: () => {}
                        }));

                        // Offset
                        document.getElementsByTagName('html').offset || (Object.defineProperty(HTMLCollection.prototype, 'offset', {
                            // Configurable
                            configurable: true,

                            // Enumerable
                            enumerable: true,

                            // Get
                            get: function getOffset() {
                                // Initialization > Array
                                let array = [];

                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (let i = 0; i < this.length; i += 1)
                                    // Update > Array
                                    array.push(this[i].offset);

                                // Return
                                return array
                            }
                        }));

                        // Parent
                        document.getElementsByTagName('html').parent || (Object.defineProperty(HTMLCollection.prototype, 'parent', {
                            // Configurable
                            configurable: true,

                            // Enumerable
                            enumerable: true,

                            // Get
                            get: function getParent() {
                                // Initialization > Array
                                let array = [];

                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (let i = 0; i < this.length; i += 1)
                                    // Update > Array
                                    array.push(this[i].parent);

                                // Return
                                return array
                            }
                        }));

                        // Parent Path
                        document.getElementsByTagName('html').parentPath || (Object.defineProperty(HTMLCollection.prototype, 'parentPath', {
                            // Configurable
                            configurable: true,

                            // Enumerable
                            enumerable: true,

                            // Get
                            get: function getParentPath() {
                                // Initialization > Array
                                let array = [];

                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (let i = 0; i < this.length; i += 1)
                                    // Update > Array
                                    array.push(this[i].parentPath);

                                // Return
                                return array
                            }
                        }));

                        // Role
                        document.getElementsByTagName('html').role || (Object.defineProperty(HTMLCollection.prototype, 'role', {
                            // Configurable
                            configurable: true,

                            // Enumerable
                            enumerable: true,

                            // Get
                            get: function getRole() {
                                // Initialization > Array
                                let array = [];

                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (let i = 0; i < this.length; i += 1)
                                    // Update > Array
                                    array.push(this[i].role);

                                // Return
                                return array
                            },

                            // Set
                            set: function setRole(data) {
                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (let i = 0; i < this.length; i += 1)
                                    // Modification > Target > Role
                                    this[i].role = data
                            }
                        }));

                        // Siblings
                        document.getElementsByTagName('html').siblings || (Object.defineProperty(HTMLCollection.prototype, 'siblings', {
                            // Configurable
                            configurable: true,

                            // Enumerable
                            enumerable: true,

                            // Get
                            get: function getSiblings() {
                                // Initialization > Array
                                let array = [];

                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (let i = 0; i < this.length; i += 1)
                                    // Update > Array
                                    array.push(this[i].siblings);

                                // Return
                                return array
                            }
                        }));

                        // Width
                        document.getElementsByTagName('html').width || (Object.defineProperty(HTMLCollection.prototype, 'width', {
                            // Configurable
                            configurable: true,

                            // Enumerable
                            enumerable: true,

                            // Get
                            get: function getWidth() {
                                // Initialization
                                let array = [];

                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (let i = 0; i < this.length; i += 1)
                                    // Update > Array
                                        array.push(this[i].width);

                                // Return
                                return array
                            },

                            // Set
                            set: function setWidth(number) {
                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (let i = 0; i < this.length; i += 1)
                                    // Style > Target > Width
                                    this[i].style.width = `${number}px`
                            }
                        }));

                        // Height
                        document.createElement('a').height || (Object.defineProperty(HTMLElement.prototype, 'height', {
                            // Configurable
                            configurable: true,

                            // Enumerable
                            enumerable: true,

                            // Get
                            get: function getHeight() {
                                // Return
                                return this.clientHeight
                            },

                            // Set
                            set: function setHeight(number) {
                                // Target > Style > Height
                                this.style.height = `${number}px`
                            }
                        }));

                        // Offset
                        document.createElement('a').offset || (Object.defineProperty(HTMLElement.prototype, 'offset', {
                            // Configurable
                            configurable: true,

                            // Enumerable
                            enumerable: true,

                            // Get
                            get: function getOffset() {
                                // Return
                                return this.getBoundingClientRect()
                            }
                        }));

                        // Width
                        document.createElement('a').width || (Object.defineProperty(HTMLElement.prototype, 'width', {
                            // Configurable
                            configurable: true,

                            // Enumerable
                            enumerable: true,

                            // Get
                            get: function getWidth() {
                                // Return
                                return this.clientWidth
                            },

                            // Set
                            set: function setWidth(number) {
                                // Target
                                    // Style
                                        // Width
                                        this.style.width = `${number}px`
                            }
                        }));

                        // Height
                        document.querySelectorAll('html').height || (Object.defineProperty(NodeList.prototype, 'height', {
                            // Configurable
                            configurable: true,

                            // Enumerable
                            enumerable: true,

                            // Get
                            get: function getHeight() {
                                // Initialization > Array
                                let array = [];

                                /* Loop
                                        Index all members of the Node List.
                                */
                                for (let i = 0; i < this.length; i += 1)
                                    // Update > Array
                                    array.push(this[i].height);

                                // Return
                                return array
                            },

                            // Set
                            set: function setHeight(number) {
                                /* Loop
                                        Index all members of the Node List.
                                */
                                for (let i = 0; i < this.length; i += 1)
                                    // Style
                                        // Target
                                            // Height
                                            this[i].style.height = `${number}px`;
                            }
                        }));

                        // Node Index
                        document.querySelectorAll('html').nodeIndex || (Object.defineProperty(NodeList.prototype, 'nodeIndex', {
                            // Configurable
                            configurable: true,

                            // Enumerable
                            enumerable: true,

                            // Get
                            get: function getNodeIndex() {
                                // Initialization > Array
                                let array = [];

                                /* Loop
                                    Index all members of the HTML Collection.
                                */
                                for (let i = 0; i < this.length; i += 1)
                                    // Update > Array
                                    array.push(this[i].nodeIndex);

                                // Return
                                return array
                            },

                            // Set
                            set: () => {}
                        }));

                        // Offset
                        document.querySelectorAll('html').offset || (Object.defineProperty(NodeList.prototype, 'offset', {
                            // Configurable
                            configurable: true,

                            // Enumerable
                            enumerable: true,

                            // Get
                            get: function getOffset() {
                                // Initialization > Array
                                let array = [];

                                /* Loop
                                        Index all members of the Node List.
                                */
                                for (let i = 0; i < this.length; i += 1)
                                    // Update > Array
                                    array.push(this[i].offset);

                                // Return
                                return array
                            }
                        }));

                        // Parent
                        document.querySelectorAll('html').parent || (Object.defineProperty(NodeList.prototype, 'parent', {
                            // Configurable
                            configurable: true,

                            // Enumerable
                            enumerable: true,

                            // Get
                            get: function getParent() {
                                // Initialization > Array
                                let array = [];

                                /* Loop
                                        Index all members of the Node List.
                                */
                                for (let i = 0; i < this.length; i += 1)
                                    // Update > Array
                                    array.push(this[i].parent);

                                // Return
                                return array
                            }
                        }));

                        // Parent Path
                        document.querySelectorAll('html').parentPath || (Object.defineProperty(NodeList.prototype, 'parentPath', {
                            // Configurable
                            configurable: true,

                            // Enumerable
                            enumerable: true,

                            // Get
                            get: function getParentPath() {
                                // Initialization > Array
                                let array = [];

                                /* Loop
                                        Index all members of the Node List.
                                */
                                for (let i = 0; i < this.length; i += 1)
                                    // Update > Array
                                    array.push(this[i].parentPath);

                                // Return
                                return array
                            }
                        }));

                        // Role
                        document.querySelectorAll('html').role || (Object.defineProperty(NodeList.prototype, 'role', {
                            // Configurable
                            configurable: true,

                            // Enumerable
                            enumerable: true,

                            // Get
                            get: function getRole() {
                                // Initialization > Array
                                let array = [];

                                /* Loop
                                        Index all members of the Node List.
                                */
                                for (let i = 0; i < this.length; i += 1)
                                    // Update > Array
                                    array.push(this[i].role);

                                // Return
                                return array
                            },

                            // Set
                            set: function setRole(data) {
                                /* Loop
                                        Index all members of the Node List.
                                */
                                for (let i = 0; i < this.length; i += 1)
                                    // Modification
                                        // Target
                                            // Role
                                            this[i].role = data
                            }
                        }));

                        // Siblings
                        document.querySelectorAll('html').siblings || (Object.defineProperty(NodeList.prototype, 'siblings', {
                            // Configurable
                            configurable: true,

                            // Enumerable
                            enumerable: true,

                            // Get
                            get: function getSiblings() {
                                // Initialization > Array
                                let array = [];

                                /* Loop
                                        Index all members of the Node List.
                                */
                                for (let i = 0; i < this.length; i += 1)
                                    // Update > Array
                                    array.push(this[i].siblings);

                                // Return
                                return array
                            }
                        }));

                        // Width
                        document.querySelectorAll('html').width || (Object.defineProperty(NodeList.prototype, 'width', {
                            // Configurable
                            configurable: true,

                            // Enumerable
                            enumerable: true,

                            // Get
                            get: function getWidth() {
                                // Initialization > Array
                                let array = [];

                                /* Loop
                                        Index all members of the Node List.
                                */
                                for (let i = 0; i < this.length; i += 1)
                                    // Update > Array
                                    array.push(this[i].width);

                                // Return
                                return array
                            },

                            // Set
                            set: function setWidth(number) {
                                /* Loop
                                        Index all members of the Node List.
                                */
                                for (let i = 0; i < this.length; i += 1)
                                    // Style
                                        // Target
                                            // Width
                                            this[i].style.width = `${number}px`
                            }
                        }));

                // Data Event Type, On[*]
                    /* Loop
                            Index all Event-Handling elements.
                    */
                    for (let i = 0; i < document.querySelectorAll('[onabort], [onautocomplete], [onautocompleteerror], [onblur], [oncancel], [oncanplay], [oncanplaythrough], [onchange], [onclick], [onclose], [oncontextmenu], [oncuechange], [ondblclick], [ondrag], [ondragend], [ondragenter], [ondragexit], [ondragleave], [ondragover], [ondragstart], [ondrop], [ondurationchange], [onempty], [onended], [onerror], [onfocus], [oninput], [oninvalid], [onkeydown], [onkeypress], [onkeyup], [onload], [onloadeddata], [onloadedmetadata], [onloadstart], [onmousedown], [onmouseenter], [onmouseleave], [onmousemove], [onmouseout], [onmouseover], [onmouseup], [onmousewheel], [onoffline], [ononline], [onpause], [onplay], [onplaying], [onprogress], [onratechange], [onreadystatechange], [onreset], [onresize], [onscroll], [onseeked], [onseeking], [onselect], [onshow], [onsort], [onstalled], [onsubmit], [onsuspend], [ontimeupdate], [ontoggle], [onvolumechange], [onwaiting]').length; i += 1) {
                        // Modification > Event-Handling Element > Events
                        document.querySelectorAll('[onabort], [onautocomplete], [onautocompleteerror], [onblur], [oncancel], [oncanplay], [oncanplaythrough], [onchange], [onclick], [onclose], [oncontextmenu], [oncuechange], [ondblclick], [ondrag], [ondragend], [ondragenter], [ondragexit], [ondragleave], [ondragover], [ondragstart], [ondrop], [ondurationchange], [onempty], [onended], [onerror], [onfocus], [oninput], [oninvalid], [onkeydown], [onkeypress], [onkeyup], [onload], [onloadeddata], [onloadedmetadata], [onloadstart], [onmousedown], [onmouseenter], [onmouseleave], [onmousemove], [onmouseout], [onmouseover], [onmouseup], [onmousewheel], [onoffline], [ononline], [onpause], [onplay], [onplaying], [onprogress], [onratechange], [onreadystatechange], [onreset], [onresize], [onscroll], [onseeked], [onseeking], [onselect], [onshow], [onsort], [onstalled], [onsubmit], [onsuspend], [ontimeupdate], [ontoggle], [onvolumechange], [onwaiting]')[i].events = (document.querySelectorAll('[onabort], [onautocomplete], [onautocompleteerror], [onblur], [oncancel], [oncanplay], [oncanplaythrough], [onchange], [onclick], [onclose], [oncontextmenu], [oncuechange], [ondblclick], [ondrag], [ondragend], [ondragenter], [ondragexit], [ondragleave], [ondragover], [ondragstart], [ondrop], [ondurationchange], [onempty], [onended], [onerror], [onfocus], [oninput], [oninvalid], [onkeydown], [onkeypress], [onkeyup], [onload], [onloadeddata], [onloadedmetadata], [onloadstart], [onmousedown], [onmouseenter], [onmouseleave], [onmousemove], [onmouseout], [onmouseover], [onmouseup], [onmousewheel], [onoffline], [ononline], [onpause], [onplay], [onplaying], [onprogress], [onratechange], [onreadystatechange], [onreset], [onresize], [onscroll], [onseeked], [onseeking], [onselect], [onshow], [onsort], [onstalled], [onsubmit], [onsuspend], [ontimeupdate], [ontoggle], [onvolumechange], [onwaiting]')[i].events || new (function LapysJSEventMap() {}));

                        /* Loop
                                Index all Event-Handling Element attributes.
                        */
                        for (let j = 0; j < document.querySelectorAll('[onabort], [onautocomplete], [onautocompleteerror], [onblur], [oncancel], [oncanplay], [oncanplaythrough], [onchange], [onclick], [onclose], [oncontextmenu], [oncuechange], [ondblclick], [ondrag], [ondragend], [ondragenter], [ondragexit], [ondragleave], [ondragover], [ondragstart], [ondrop], [ondurationchange], [onempty], [onended], [onerror], [onfocus], [oninput], [oninvalid], [onkeydown], [onkeypress], [onkeyup], [onload], [onloadeddata], [onloadedmetadata], [onloadstart], [onmousedown], [onmouseenter], [onmouseleave], [onmousemove], [onmouseout], [onmouseover], [onmouseup], [onmousewheel], [onoffline], [ononline], [onpause], [onplay], [onplaying], [onprogress], [onratechange], [onreadystatechange], [onreset], [onresize], [onscroll], [onseeked], [onseeking], [onselect], [onshow], [onsort], [onstalled], [onsubmit], [onsuspend], [ontimeupdate], [ontoggle], [onvolumechange], [onwaiting]')[i].attributes.length; j += 1)
                            /* Logic
                                    If
                                        the attribute begins with 'on'.
                            */
                            if (
                                document.querySelectorAll('[onabort], [onautocomplete], [onautocompleteerror], [onblur], [oncancel], [oncanplay], [oncanplaythrough], [onchange], [onclick], [onclose], [oncontextmenu], [oncuechange], [ondblclick], [ondrag], [ondragend], [ondragenter], [ondragexit], [ondragleave], [ondragover], [ondragstart], [ondrop], [ondurationchange], [onempty], [onended], [onerror], [onfocus], [oninput], [oninvalid], [onkeydown], [onkeypress], [onkeyup], [onload], [onloadeddata], [onloadedmetadata], [onloadstart], [onmousedown], [onmouseenter], [onmouseleave], [onmousemove], [onmouseout], [onmouseover], [onmouseup], [onmousewheel], [onoffline], [ononline], [onpause], [onplay], [onplaying], [onprogress], [onratechange], [onreadystatechange], [onreset], [onresize], [onscroll], [onseeked], [onseeking], [onselect], [onshow], [onsort], [onstalled], [onsubmit], [onsuspend], [ontimeupdate], [ontoggle], [onvolumechange], [onwaiting]')[i].attributes[j].name[0] === 'o' &&
                                document.querySelectorAll('[onabort], [onautocomplete], [onautocompleteerror], [onblur], [oncancel], [oncanplay], [oncanplaythrough], [onchange], [onclick], [onclose], [oncontextmenu], [oncuechange], [ondblclick], [ondrag], [ondragend], [ondragenter], [ondragexit], [ondragleave], [ondragover], [ondragstart], [ondrop], [ondurationchange], [onempty], [onended], [onerror], [onfocus], [oninput], [oninvalid], [onkeydown], [onkeypress], [onkeyup], [onload], [onloadeddata], [onloadedmetadata], [onloadstart], [onmousedown], [onmouseenter], [onmouseleave], [onmousemove], [onmouseout], [onmouseover], [onmouseup], [onmousewheel], [onoffline], [ononline], [onpause], [onplay], [onplaying], [onprogress], [onratechange], [onreadystatechange], [onreset], [onresize], [onscroll], [onseeked], [onseeking], [onselect], [onshow], [onsort], [onstalled], [onsubmit], [onsuspend], [ontimeupdate], [ontoggle], [onvolumechange], [onwaiting]')[i].attributes[j].name[1] === 'n'
                            )
                                /* Logic
                                        If
                                            the Event-Handling Element has the specified attribute.
                                */
                                if (document.querySelectorAll('[onabort], [onautocomplete], [onautocompleteerror], [onblur], [oncancel], [oncanplay], [oncanplaythrough], [onchange], [onclick], [onclose], [oncontextmenu], [oncuechange], [ondblclick], [ondrag], [ondragend], [ondragenter], [ondragexit], [ondragleave], [ondragover], [ondragstart], [ondrop], [ondurationchange], [onempty], [onended], [onerror], [onfocus], [oninput], [oninvalid], [onkeydown], [onkeypress], [onkeyup], [onload], [onloadeddata], [onloadedmetadata], [onloadstart], [onmousedown], [onmouseenter], [onmouseleave], [onmousemove], [onmouseout], [onmouseover], [onmouseup], [onmousewheel], [onoffline], [ononline], [onpause], [onplay], [onplaying], [onprogress], [onratechange], [onreadystatechange], [onreset], [onresize], [onscroll], [onseeked], [onseeking], [onselect], [onshow], [onsort], [onstalled], [onsubmit], [onsuspend], [ontimeupdate], [ontoggle], [onvolumechange], [onwaiting]')[i].hasAttribute(`on${document.querySelectorAll('[onabort], [onautocomplete], [onautocompleteerror], [onblur], [oncancel], [oncanplay], [oncanplaythrough], [onchange], [onclick], [onclose], [oncontextmenu], [oncuechange], [ondblclick], [ondrag], [ondragend], [ondragenter], [ondragexit], [ondragleave], [ondragover], [ondragstart], [ondrop], [ondurationchange], [onempty], [onended], [onerror], [onfocus], [oninput], [oninvalid], [onkeydown], [onkeypress], [onkeyup], [onload], [onloadeddata], [onloadedmetadata], [onloadstart], [onmousedown], [onmouseenter], [onmouseleave], [onmousemove], [onmouseout], [onmouseover], [onmouseup], [onmousewheel], [onoffline], [ononline], [onpause], [onplay], [onplaying], [onprogress], [onratechange], [onreadystatechange], [onreset], [onresize], [onscroll], [onseeked], [onseeking], [onselect], [onshow], [onsort], [onstalled], [onsubmit], [onsuspend], [ontimeupdate], [ontoggle], [onvolumechange], [onwaiting]')[i].attributes[j].name.slice(2)}`)
                                ) {
                                    // Update > Event-Handling Element > Event
                                    document.querySelectorAll('[onabort], [onautocomplete], [onautocompleteerror], [onblur], [oncancel], [oncanplay], [oncanplaythrough], [onchange], [onclick], [onclose], [oncontextmenu], [oncuechange], [ondblclick], [ondrag], [ondragend], [ondragenter], [ondragexit], [ondragleave], [ondragover], [ondragstart], [ondrop], [ondurationchange], [onempty], [onended], [onerror], [onfocus], [oninput], [oninvalid], [onkeydown], [onkeypress], [onkeyup], [onload], [onloadeddata], [onloadedmetadata], [onloadstart], [onmousedown], [onmouseenter], [onmouseleave], [onmousemove], [onmouseout], [onmouseover], [onmouseup], [onmousewheel], [onoffline], [ononline], [onpause], [onplay], [onplaying], [onprogress], [onratechange], [onreadystatechange], [onreset], [onresize], [onscroll], [onseeked], [onseeking], [onselect], [onshow], [onsort], [onstalled], [onsubmit], [onsuspend], [ontimeupdate], [ontoggle], [onvolumechange], [onwaiting]')[i].events[document.querySelectorAll('[onabort], [onautocomplete], [onautocompleteerror], [onblur], [oncancel], [oncanplay], [oncanplaythrough], [onchange], [onclick], [onclose], [oncontextmenu], [oncuechange], [ondblclick], [ondrag], [ondragend], [ondragenter], [ondragexit], [ondragleave], [ondragover], [ondragstart], [ondrop], [ondurationchange], [onempty], [onended], [onerror], [onfocus], [oninput], [oninvalid], [onkeydown], [onkeypress], [onkeyup], [onload], [onloadeddata], [onloadedmetadata], [onloadstart], [onmousedown], [onmouseenter], [onmouseleave], [onmousemove], [onmouseout], [onmouseover], [onmouseup], [onmousewheel], [onoffline], [ononline], [onpause], [onplay], [onplaying], [onprogress], [onratechange], [onreadystatechange], [onreset], [onresize], [onscroll], [onseeked], [onseeking], [onselect], [onshow], [onsort], [onstalled], [onsubmit], [onsuspend], [ontimeupdate], [ontoggle], [onvolumechange], [onwaiting]')[i].attributes[j].name.slice(2)] = [];
                                    document.querySelectorAll('[onabort], [onautocomplete], [onautocompleteerror], [onblur], [oncancel], [oncanplay], [oncanplaythrough], [onchange], [onclick], [onclose], [oncontextmenu], [oncuechange], [ondblclick], [ondrag], [ondragend], [ondragenter], [ondragexit], [ondragleave], [ondragover], [ondragstart], [ondrop], [ondurationchange], [onempty], [onended], [onerror], [onfocus], [oninput], [oninvalid], [onkeydown], [onkeypress], [onkeyup], [onload], [onloadeddata], [onloadedmetadata], [onloadstart], [onmousedown], [onmouseenter], [onmouseleave], [onmousemove], [onmouseout], [onmouseover], [onmouseup], [onmousewheel], [onoffline], [ononline], [onpause], [onplay], [onplaying], [onprogress], [onratechange], [onreadystatechange], [onreset], [onresize], [onscroll], [onseeked], [onseeking], [onselect], [onshow], [onsort], [onstalled], [onsubmit], [onsuspend], [ontimeupdate], [ontoggle], [onvolumechange], [onwaiting]')[i].events[document.querySelectorAll('[onabort], [onautocomplete], [onautocompleteerror], [onblur], [oncancel], [oncanplay], [oncanplaythrough], [onchange], [onclick], [onclose], [oncontextmenu], [oncuechange], [ondblclick], [ondrag], [ondragend], [ondragenter], [ondragexit], [ondragleave], [ondragover], [ondragstart], [ondrop], [ondurationchange], [onempty], [onended], [onerror], [onfocus], [oninput], [oninvalid], [onkeydown], [onkeypress], [onkeyup], [onload], [onloadeddata], [onloadedmetadata], [onloadstart], [onmousedown], [onmouseenter], [onmouseleave], [onmousemove], [onmouseout], [onmouseover], [onmouseup], [onmousewheel], [onoffline], [ononline], [onpause], [onplay], [onplaying], [onprogress], [onratechange], [onreadystatechange], [onreset], [onresize], [onscroll], [onseeked], [onseeking], [onselect], [onshow], [onsort], [onstalled], [onsubmit], [onsuspend], [ontimeupdate], [ontoggle], [onvolumechange], [onwaiting]')[i].attributes[j].name.slice(2)].push({type: document.querySelectorAll('[onabort], [onautocomplete], [onautocompleteerror], [onblur], [oncancel], [oncanplay], [oncanplaythrough], [onchange], [onclick], [onclose], [oncontextmenu], [oncuechange], [ondblclick], [ondrag], [ondragend], [ondragenter], [ondragexit], [ondragleave], [ondragover], [ondragstart], [ondrop], [ondurationchange], [onempty], [onended], [onerror], [onfocus], [oninput], [oninvalid], [onkeydown], [onkeypress], [onkeyup], [onload], [onloadeddata], [onloadedmetadata], [onloadstart], [onmousedown], [onmouseenter], [onmouseleave], [onmousemove], [onmouseout], [onmouseover], [onmouseup], [onmousewheel], [onoffline], [ononline], [onpause], [onplay], [onplaying], [onprogress], [onratechange], [onreadystatechange], [onreset], [onresize], [onscroll], [onseeked], [onseeking], [onselect], [onshow], [onsort], [onstalled], [onsubmit], [onsuspend], [ontimeupdate], [ontoggle], [onvolumechange], [onwaiting]')[i].attributes[j].name.slice(2), listener: () => { document.querySelectorAll('[onabort], [onautocomplete], [onautocompleteerror], [onblur], [oncancel], [oncanplay], [oncanplaythrough], [onchange], [onclick], [onclose], [oncontextmenu], [oncuechange], [ondblclick], [ondrag], [ondragend], [ondragenter], [ondragexit], [ondragleave], [ondragover], [ondragstart], [ondrop], [ondurationchange], [onempty], [onended], [onerror], [onfocus], [oninput], [oninvalid], [onkeydown], [onkeypress], [onkeyup], [onload], [onloadeddata], [onloadedmetadata], [onloadstart], [onmousedown], [onmouseenter], [onmouseleave], [onmousemove], [onmouseout], [onmouseover], [onmouseup], [onmousewheel], [onoffline], [ononline], [onpause], [onplay], [onplaying], [onprogress], [onratechange], [onreadystatechange], [onreset], [onresize], [onscroll], [onseeked], [onseeking], [onselect], [onshow], [onsort], [onstalled], [onsubmit], [onsuspend], [ontimeupdate], [ontoggle], [onvolumechange], [onwaiting]')[i].getAttribute(`on${document.querySelectorAll('[onabort], [onautocomplete], [onautocompleteerror], [onblur], [oncancel], [oncanplay], [oncanplaythrough], [onchange], [onclick], [onclose], [oncontextmenu], [oncuechange], [ondblclick], [ondrag], [ondragend], [ondragenter], [ondragexit], [ondragleave], [ondragover], [ondragstart], [ondrop], [ondurationchange], [onempty], [onended], [onerror], [onfocus], [oninput], [oninvalid], [onkeydown], [onkeypress], [onkeyup], [onload], [onloadeddata], [onloadedmetadata], [onloadstart], [onmousedown], [onmouseenter], [onmouseleave], [onmousemove], [onmouseout], [onmouseover], [onmouseup], [onmousewheel], [onoffline], [ononline], [onpause], [onplay], [onplaying], [onprogress], [onratechange], [onreadystatechange], [onreset], [onresize], [onscroll], [onseeked], [onseeking], [onselect], [onshow], [onsort], [onstalled], [onsubmit], [onsuspend], [ontimeupdate], [ontoggle], [onvolumechange], [onwaiting]')[i].attributes[j].name.slice(2)}`) }, wantsUntrusted: false, useCapture: false})
                                }
                    }

                // Class Sets
                    /* Loop
                            Index all items of the LapysJS script"s 'data-enable' attribute.
                    */
                    for (let j = 0; j < (LapysJS.script.getAttribute('data-enable') || '').replace(/\ /g, '').split(/,/g).length; j += 1)
                        /* Logic
                                If
                                    the LapysJS script has '_all' enabled or
                                    the LapysJS script has 'classSets' enabled.
                        */
                        if (
                            (LapysJS.script.getAttribute('data-enable') || '').replace(/\ /g, '').split(/,/g)[j] === '_all' ||
                            (LapysJS.script.getAttribute('data-enable') || '').replace(/\ /g, '').split(/,/g)[j] === 'classSets'
                        ) {
                            function classSets() {
                                /* Loop
                                        Index all DOM Class Elements.
                                */
                                for (let i = 0; i < document.querySelectorAll('[class]').length; i += 1)
                                    /* Logic
                                            If
                                                the DOM Class Element has '-' in its class
                                                    and
                                                the DOM Class Element has '_' in its class.
                                    */
                                    if (document.querySelectorAll('[class]')[i].getAttribute('class').indexOf('_') > -1)
                                        /* Loop
                                                Index all the DOM Class Element"s class nodes.
                                        */
                                        for (let k = 0; k < document.querySelectorAll('[class]')[i].getAttribute('class').split(/\ /g).length; k += 1) {
                                            /* Logic
                                                    Switch case to
                                                        Flex, Maximum and Minimum.
                                            */
                                            switch (document.querySelectorAll('[class]')[i].getAttribute('class').split(/\ /g)[k].replace(document.querySelectorAll('[class]')[i].getAttribute('class').split(/\ /g)[k].slice(document.querySelectorAll('[class]')[i].getAttribute('class').split(/\ /g)[k].indexOf('_')), '').slice(0, document.querySelectorAll('[class]')[i].getAttribute('class').split(/\ /g)[k].replace(document.querySelectorAll('[class]')[i].getAttribute('class').split(/\ /g)[k].slice( document.querySelectorAll('[class]')[i].getAttribute('class').split(/\ /g)[k].indexOf('_')), '').indexOf('-'))) {
                                                // Flex
                                                case ('flex' || 'flx'):
                                                    document.querySelectorAll('[class]')[i].classSetMetadata = 'flex';
                                                    break;

                                                // Maximum
                                                case 'max':
                                                    document.querySelectorAll('[class]')[i].classSetMetadata = 'max';
                                                    break;

                                                // Minimum
                                                case 'min':
                                                    document.querySelectorAll('[class]')[i].classSetMetadata = 'min';
                                                    break;

                                                // [Default]
                                                default:
                                                    document.querySelectorAll('[class]')[i].classSetMetadata = ''
                                            };

                                            /* Logic
                                                    Switch case to
                                                        Basis, Height and Width.
                                            */
                                            switch (document.querySelectorAll('[class]')[i].getAttribute('class').split(/\ /g)[k].replace(document.querySelectorAll('[class]')[i].getAttribute('class').split(/\ /g)[k].slice(document.querySelectorAll('[class]')[i].getAttribute('class').split(/\ /g)[k].indexOf('_')), '').slice(document.querySelectorAll('[class]')[i].getAttribute('class').split(/\ /g)[k].replace(document.querySelectorAll('[class]')[i].getAttribute('class').split(/\ /g)[k].slice(document.querySelectorAll('[class]')[i].getAttribute('class').split(/\ /g)[k].indexOf('_')), '').indexOf('-') + '-'.length)) {
                                                case 'b':
                                                    document.querySelectorAll('[class]')[i].classSetData = 'basis';
                                                    break;

                                                case 'basis':
                                                    document.querySelectorAll('[class]')[i].classSetData = 'basis';
                                                    break;

                                                case 'h':
                                                    document.querySelectorAll('[class]')[i].classSetData = 'height';
                                                    break;

                                                case 'height':
                                                    document.querySelectorAll('[class]')[i].classSetData = 'height';
                                                    break;

                                                case 'w':
                                                    document.querySelectorAll('[class]')[i].classSetData = 'width';
                                                    break;

                                                case 'width':
                                                    document.querySelectorAll('[class]')[i].classSetData = 'width';
                                                    break;

                                                // [Default]
                                                default:
                                                    document.querySelectorAll('[class]')[i].classSetData = ''
                                            };

                                            /* Logic
                                                    If
                                                        the class set metadata is defined.
                                            */
                                            if (document.querySelectorAll('[class]')[i].classSetMetadata)
                                                // Modification > Element > Class Set
                                                document.querySelectorAll('[class]')[i].classSet = (
                                                    document.querySelectorAll('[class]')[i].classSetMetadata +
                                                    (
                                                        document.querySelectorAll('[class]')[i].classSetData[0].toUpperCase() +
                                                        document.querySelectorAll('[class]')[i].classSetData.slice(1)
                                                    )
                                                );

                                            else
                                                // Modification > Element > Class Set
                                                document.querySelectorAll('[class]')[i].classSet = document.querySelectorAll('[class]')[i].classSetData;

                                            /* Logic
                                                    If
                                                        the Class Set is 'eval'.
                                            */
                                            if (document.querySelectorAll('[class]')[i].getAttribute('class').split(/\ /g)[k].slice(document.querySelectorAll('[class]')[i].getAttribute('class').split(/\ /g)[k].indexOf('_') + '_'.length).indexOf('eval(') > -1)
                                                // Style > DOM Class Element > [Class Set]
                                                document.querySelectorAll('[class]')[i].style[document.querySelectorAll('[class]')[i].classSet] = eval(document.querySelectorAll('[class]')[i].getAttribute('class').replace(`${document.querySelectorAll('[class]')[i].classSet}_eval`, '::lapys::').replace(/\:\:lapys\:\:\(([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\*\(\)\_\-\+\=\[\]\{\}\|\\\:\;\'\"\<\,\>\.\?\/]|\ |\n|)\{1,}\)/g, '').slice(document.querySelectorAll('[class]')[i].getAttribute('class').replace(`${document.querySelectorAll('[class]')[i].classSet}_eval`, '::lapys::').replace(/\:\:lapys\:\:\(([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\*\(\)\_\-\+\=\[\]\{\}\|\\\:\;\'\"\<\,\>\.\?\/]|\ |\n|)\{1,}\)/g, '').indexOf('(') + '('.length, -1));

                                            /* Logic
                                                    Switch case to
                                                        [case]
                                            */
                                            switch (document.querySelectorAll('[class]')[i].getAttribute('class').split(/\ /g)[k].slice(document.querySelectorAll('[class]')[i].getAttribute('class').split(/\ /g)[k].indexOf('_') + '_'.length)) {
                                                // Device Height
                                                case 'device-height':
                                                    document.querySelectorAll('[class]')[i].style[document.querySelectorAll('[class]')[i].classSet] = `${screen.availHeight}px`;
                                                    break;

                                                // Device Width
                                                case 'device-width':
                                                    document.querySelectorAll('[class]')[i].style[document.querySelectorAll('[class]')[i].classSet] = `${screen.availWidth}px`;
                                                    break;

                                                // Height
                                                case 'height':
                                                    document.querySelectorAll('[class]')[i].style[document.querySelectorAll('[class]')[i].classSet] = `${parseNumber(document.querySelectorAll('[class]')[i].getCSS('height'))}px`;
                                                    break;

                                                // Fill Parent
                                                case 'fill-parent':
                                                    document.querySelectorAll('[class]')[i].style[document.querySelectorAll('[class]')[i].classSet] = (() => {
                                                        /* Logic
                                                                If
                                                                        the DOM Class Element"s parent has a 'flex-direction' of 'column',
                                                                            or
                                                                        the DOM Class Element"s parent has a 'flex-direction' of 'column-reverse',

                                                                        or
                                                                    the DOM Class Element 'height' in its Class Set,

                                                                else if
                                                                        the DOM Class Element"s parent has a 'flex-direction' of 'auto',
                                                                            or
                                                                        the DOM Class Element"s parent has a 'flex-direction' of 'initial',
                                                                            or
                                                                        the DOM Class Element"s parent has a 'flex-direction' of 'inherit',
                                                                            or
                                                                        the DOM Class Element"s parent has a 'flex-direction' of 'row',
                                                                            or
                                                                        the DOM Class Element"s parent has a 'flex-direction' of 'row-reverse',

                                                                        or
                                                                    the DOM Class Element 'width' in its Class Set.
                                                        */
                                                        if (
                                                            document.querySelectorAll('[class]')[i].parent.getCSS('flex-direction').indexOf('column') > -1 ||
                                                            document.querySelectorAll('[class]')[i].classSet.toLowerCase().indexOf('height') > -1
                                                        )
                                                            // Return
                                                            return `${(
                                                                parseNumber(document.querySelectorAll('[class]')[i].parent.getCSS('border-bottom-width')) +
                                                                parseNumber(document.querySelectorAll('[class]')[i].parent.getCSS('border-top-width')) +
                                                                parseNumber(document.querySelectorAll('[class]')[i].parent.getCSS('padding-bottom')) +
                                                                parseNumber(document.querySelectorAll('[class]')[i].parent.getCSS('padding-top')) +
                                                                parseNumber(document.querySelectorAll('[class]')[i].parent.getCSS('height'))
                                                            )}px`;

                                                        else if (
                                                            document.querySelectorAll('[class]')[i].parent.getCSS('flex-direction') === 'auto' ||
                                                            document.querySelectorAll('[class]')[i].parent.getCSS('flex-direction') === 'initial' ||
                                                            document.querySelectorAll('[class]')[i].parent.getCSS('flex-direction') === 'inherit' ||
                                                            document.querySelectorAll('[class]')[i].parent.getCSS('flex-direction').indexOf('row') > -1 ||
                                                            document.querySelectorAll('[class]')[i].classSet.toLowerCase().indexOf('width') > -1
                                                        )
                                                            // Return
                                                            return `${(
                                                                parseNumber(document.querySelectorAll('[class]')[i].parent.getCSS('border-left-width')) +
                                                                parseNumber(document.querySelectorAll('[class]')[i].parent.getCSS('border-right-width')) +
                                                                parseNumber(document.querySelectorAll('[class]')[i].parent.getCSS('padding-left')) +
                                                                parseNumber(document.querySelectorAll('[class]')[i].parent.getCSS('padding-right')) +
                                                                parseNumber(document.querySelectorAll('[class]')[i].parent.getCSS('width'))
                                                            )}px`
                                                    })();
                                                    break;

                                                // Match Parent
                                                case 'match-parent':
                                                    document.querySelectorAll('[class]')[i].style[document.querySelectorAll('[class]')[i].classSet] = `${parseNumber((document.querySelectorAll('[class]')[i].parentElement || document.querySelectorAll('[class]')[i].parentNode).getCSS(document.querySelectorAll('[class]')[i].classSet))}px`;
                                                    break;

                                                // Width
                                                case 'width':
                                                    document.querySelectorAll('[class]')[i].style[document.querySelectorAll('[class]')[i].classSet] = `${parseNumber(document.querySelectorAll('[class]')[i].getCSS('width'))}px`;
                                                    break;

                                                // Window Height
                                                case 'window-height':
                                                    document.querySelectorAll('[class]')[i].style[document.querySelectorAll('[class]')[i].classSet] = `${innerHeight}px`;
                                                    break;

                                                // Window Width
                                                case 'window-width':
                                                    document.querySelectorAll('[class]')[i].style[document.querySelectorAll('[class]')[i].classSet] = `${innerWidth}px`
                                            };

                                            delete document.querySelectorAll('[class]')[i].classSet;
                                            delete document.querySelectorAll('[class]')[i].classSetMetadata;
                                            delete document.querySelectorAll('[class]')[i].classSetData
                                        }
                            };
                            classSets();
                            window.setEvent('resize', () => { classSets() })
                        };

                // HTML JavaScript
                    /* Loop
                            Index all items of the LapysJS script"s 'data-enable' attribute.
                    */
                    for (let j = 0; j < (LapysJS.script.getAttribute('data-enable') || '').replace(/\ /g, '').split(/,/g).length; j += 1)
                        /* Logic
                                If
                                    the LapysJS script has '_all' enabled or
                                    the LapysJS script has 'HTMLJavaScript' enabled.
                        */
                        if (
                            (
                                (LapysJS.script.getAttribute('data-enable') || '').replace(/\ /g, '').split(/,/g)[j] === '_all' ||
                                (LapysJS.script.getAttribute('data-enable') || '').replace(/\ /g, '').split(/,/g)[j] === 'HTMLJavaScript'
                            )
                        ) {
                            /* <access-value>
                                    --- NOTE ---
                                        For outputting JavaScript values to the DOM.
                            */
                        };

                // Style
                    /* Loop
                            Index all items of the LapysJS script"s 'data-enable' attribute.
                    */
                    for (let j = 0; j < (LapysJS.script.getAttribute('data-enable') || '').replace(/\ /g, '').split(/,/g).length; j += 1)
                        /* Logic
                                If
                                    the LapysJS script has '_all' enabled or
                                    the LapysJS script has 'styleAttributes' enabled.
                        */
                        if (
                            (LapysJS.script.getAttribute('data-enable') || '').replace(/\ /g, '').split(/,/g)[j] === '_all' ||
                            (LapysJS.script.getAttribute('data-enable') || '').replace(/\ /g, '').split(/,/g)[j] === 'styleAttributes'
                        ) {
                            /* Loop
                                    Index all 'css-style' attributed DOM Elements.
                            */
                            for (let i = 0; i < document.querySelectorAll('[css-style]').length; i += 1) {
                                /* Loop
                                        Index all 'css-style' CSS declarations.
                                */
                                for (let k = 0; k < document.querySelectorAll('[css-style]')[i].getAttribute('css-style').split(/;/g).length; k += 1)
                                    // Style > Element > [CSS Style]
                                    document.querySelectorAll('[css-style]')[i].style[document.querySelectorAll('[css-style]')[i].getAttribute('css-style').split(/;/g)[k].trim().slice(0, document.querySelectorAll('[css-style]')[i].getAttribute('css-style').split(/;/g)[k].trim().indexOf(':')).replace(/[a-z]\-[a-z]/g, (data) => { return (data.replace('-', '').slice(0, -1) + data[data.length - 1].toUpperCase()) })] = document.querySelectorAll('[css-style]')[i].getAttribute('css-style').split(/;/g)[k].trim().slice(document.querySelectorAll('[css-style]')[i].getAttribute('css-style').split(/;/g)[k].trim().indexOf(':') + ':'.length).trim();

                                // Modification > Element > CSS Style
                                document.querySelectorAll('[css-style]')[i].removeAttribute('css-style')
                            };

                            /* Loop
                                    Index all 'js-style' attributed DOM Elements.
                            */
                            for (let i = 0; i < document.querySelectorAll('[js-style]').length; i += 1) {
                                // Modification > Element > JS Style
                                document.querySelectorAll('[js-style]')[i].setAttribute('js-style', document.querySelectorAll('[js-style]')[i].getAttribute('js-style').replace(/\(([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\*\(\)\_\-\+\=\[\]\{\}\|\\\:\'\"\<\,\>\.\?\/]|\ |\n|);([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\*\(\)\_\-\+\=\[\]\{\}\|\\\:\'\"\<\,\>\.\?\/]|\ |\n|){1,}\)/g, (data) => { return data.replace(/\;/g, '::semi-colon::') }));

                                /* Loop
                                        Index all 'js-style' CSS declarations.
                                */
                                for (let k = 0; k < document.querySelectorAll('[js-style]')[i].getAttribute('js-style').split(/;/g).length; k += 1)
                                    // Style > Element > [CSS Style]
                                    document.querySelectorAll('[js-style]')[i].style[document.querySelectorAll('[js-style]')[i].getAttribute('js-style').split(/;/g)[k].trim().slice(0, document.querySelectorAll('[js-style]')[i].getAttribute('js-style').split(/;/g)[k].trim().indexOf(':')).replace(/[a-z]\-[a-z]/g, (data) => { return (data.replace('-', '').slice(0, -1) + data[data.length - 1].toUpperCase()) })] = eval(document.querySelectorAll('[js-style]')[i].getAttribute('js-style').split(/;/g)[k].trim().slice(document.querySelectorAll('[js-style]')[i].getAttribute('js-style').split(/;/g)[k].trim().indexOf(':') + ':'.length).trim());

                                // Modification > Element > JS Style
                                document.querySelectorAll('[js-style]')[i].removeAttribute('js-style')
                            }
                        }
            };
            modifyDOMElements();
            onDOMChange(modifyDOMElements);

        /* LapysJS Plug-Ins
                --- WARN ---
                    This function is dependent on the 'Modify DOM Element' module.
        */
            // Function
                // Plug-Ins
                function plugIns() {
                    // Accordion
                        /* Loop
                                Index all Accordions.
                        */
                        for (let i = 0; i < document.getElementsByClassName('accordion').length; i += 1) {
                            // Function
                                // Accordion
                                    // Close
                                    document.getElementsByClassName('accordion')[i].constructor.prototype['LapysJS close'] = function close() {
                                        // Modification > Target
                                            // Data Open
                                            this.removeAttribute('data-open');

                                            // Data Close
                                            this.setAttribute('data-close', '')
                                    };
                                    document.getElementsByClassName('accordion')[i]['LapysJS close']();

                                    // Open
                                    document.getElementsByClassName('accordion')[i].constructor.prototype['LapysJS open'] = function open() {
                                        // Modification > Target
                                            // Data Close
                                            this.removeAttribute('data-close');

                                            // Data Open
                                            this.setAttribute('data-open', '')
                                    };

                            /* Logic
                                    If
                                        the Accordion has a Header and at least one Content.
                            */
                            if (
                                document.getElementsByClassName("accordion")[i].querySelector("[data-id='content']") &&
                                document.getElementsByClassName("accordion")[i].querySelector("[data-id='header']")
                            ) {
                                // Definition
                                    // Content
                                    document.getElementsByClassName("accordion")[i]['LapysJS content'] = document.getElementsByClassName("accordion")[i].querySelectorAll("[data-id='content']");

                                    // Header
                                    document.getElementsByClassName("accordion")[i]['LapysJS header'] = document.getElementsByClassName("accordion")[i].querySelector("[data-id='header']");

                                // Children
                                    /* Loop
                                            Index all Accordion Content and Accordion Headers.
                                    */
                                    for (let j = 0; j < document.getElementsByClassName("accordion")[i].querySelectorAll("[data-id='content'], [data-id='header']").length; j += 1)
                                        // Modification
                                            // Content | Header
                                                // Accordion
                                                document.getElementsByClassName("accordion")[i].querySelectorAll("[data-id='content'], [data-id='header']")[j]['LapysJS accordion'] = document.getElementsByClassName('accordion')[i];

                                    // Header > Events > [Data Event Type] | Mouse Up
                                    document.getElementsByClassName('accordion')[i]['LapysJS header']['LapysJS accordionHeaderHasEventSet'] || document.getElementsByClassName('accordion')[i]['LapysJS header'].setEvent(
                                        (
                                            document.getElementsByClassName('accordion')[i].getAttribute('data-event-type') ||
                                            document.getElementsByClassName('accordion')[i]['LapysJS header'].getAttribute('data-event-type') ||
                                            'mouseup'
                                        ),

                                        function toggleAccordion() {
                                            // Toggle
                                            !this['LapysJS toggle'] ? this['LapysJS accordion']['LapysJS open']() : this['LapysJS accordion']['LapysJS close']();

                                            this['LapysJS toggle'] = !this['LapysJS toggle']
                                        }
                                    );

                                    document.getElementsByClassName('accordion')[i]['LapysJS header']['LapysJS accordionHeaderHasEventSet'] = true
                            }
                        };

                    // Carousel
                        /* Loop
                                Index all Carousels.
                        */
                        for (let i = 0; i < document.getElementsByClassName('carousel').length; i += 1) {
                            /* Logic
                                    If
                                        the Carousel has a child element.
                            */
                            if (document.getElementsByClassName('carousel')[i].children[0]) {
                                /* Logic
                                        If
                                            the Carousel is not "modified".
                                */
                                if (!document.getElementsByClassName('carousel')[i]['LapysJS isModified']) {
                                    // Modification
                                        // Carousel
                                            // Current Slide Index
                                            document.getElementsByClassName('carousel')[i].constructor.prototype['LapysJS currentSlideIndex'] = 0;

                                            // Inner HTML
                                            document.getElementsByClassName('carousel')[i].innerHTML = (
                                                /* Slides Container */
                                                `\r<div class='slides-container'>${(() => {
                                                    // Initialization
                                                        // Carousel Slides
                                                        let carouselSlides = '';

                                                    /* Loop
                                                            Index all Carousel child elements.
                                                    */
                                                    for (let j = 0; j < document.getElementsByClassName('carousel')[i].children.length; j += 1) {
                                                        // Modification
                                                            // Slide
                                                                // Class
                                                                document.getElementsByClassName('carousel')[i].children[j].className += ' slide';
                                                                document.getElementsByClassName('carousel')[i].children[j].className += ` slide-${j}`;
                                                                document.getElementsByClassName('carousel')[i].children[j].className = document.getElementsByClassName('carousel')[i].children[j].className.trim()
                                                    };

                                                    // Update
                                                        // Carousel Slides
                                                        carouselSlides += `\r\t${document.getElementsByClassName('carousel')[i].innerHTML}`;

                                                    // Return
                                                    return carouselSlides
                                                })()}\r</div>` +

                                                /* [Carousel Controls] */
                                                (() => {
                                                    // Initialization
                                                        // Carousel Controls
                                                        let carouselControls = '';

                                                    /* Logic
                                                            If
                                                                the Carousel has the 'data-buttons' attribute.
                                                    */
                                                    if (document.getElementsByClassName('carousel')[i].hasAttribute('data-buttons'))
                                                        // Update
                                                            // Carousel Controls
                                                            carouselControls +=
                                                                /* Buttons Container */
                                                                "\n\r<div class='buttons-container'>" +
                                                                    /* Left Button */
                                                                    "\r\t<button class='button left-button' onclick='this.parentElement.parentElement[\"LapysJS prev\"]()'>" +
                                                                        (document.getElementsByClassName('carousel')[i].getAttribute('data-button-left-inner-html') || "<") +
                                                                    "\r\t</button>" +

                                                                    /* Right Button */
                                                                    "\r\t<button class='button right-button' onclick='this.parentElement.parentElement[\"LapysJS next\"]()'>" +
                                                                        (document.getElementsByClassName('carousel')[i].getAttribute('data-button-right-inner-html') || ">") +
                                                                    "\r\t</button>" +
                                                                "\r</div>";

                                                    /* Logic
                                                            If
                                                                the Carousel has the 'data-indicators' attribute.
                                                    */
                                                    if (document.getElementsByClassName('carousel')[i].hasAttribute('data-indicators'))
                                                        // Update
                                                            // Carousel Controls
                                                            carouselControls += `\n\r<div class='indicators-container'>${(() => {
                                                                // Initialization
                                                                    // Carousel Indicators
                                                                    let carouselIndicators = '';

                                                                /* Loop
                                                                        Index all Carousel child elements.
                                                                */
                                                                for (let j = 0; j < document.getElementsByClassName('carousel')[i].children.length; j += 1)
                                                                    // Update
                                                                        // Carousel Indicators
                                                                        carouselIndicators += `\r\t<input class='indicator indicator-${j}' onclick='((this.parentElement || this.parentNode).parentElement || (this.parentElement || this.parentNode).parentNode)["LapysJS toggle"](${j})' type=checkbox>`;

                                                                // Return
                                                                return carouselIndicators
                                                            })()}\r</div>`;

                                                    // Return
                                                    return carouselControls
                                                })() +

                                                "\n"
                                            );

                                            // Is Modified
                                            document.getElementsByClassName('carousel')[i]['LapysJS isModified'] = true
                                };

                                /* Logic
                                        If
                                            the Carousel has the 'data-auto' attribute.
                                */
                                if (document.getElementsByClassName('carousel')[i].hasAttribute('data-auto')) {
                                    // Modification
                                        // Carousel
                                            // Direction
                                            document.getElementsByClassName('carousel')[i]['LapysJS direction'] = document.getElementsByClassName('carousel')[i].getAttribute('data-auto').slice(0, document.getElementsByClassName('carousel')[i].getAttribute('data-auto').indexOf('_')) || 'forward';

                                            // Set Interval
                                            document.getElementsByClassName('carousel')[i]['LapysJS interval'] = eval(document.getElementsByClassName('carousel')[i].getAttribute('data-auto').slice(document.getElementsByClassName('carousel')[i].getAttribute('data-auto').indexOf('_') + '_'.length).replace(/\ /g, '')) * 1000 || 3 * 1000;

                                    /* Logic
                                            If
                                                the Carousel"s "direction" is 'forward'
                                                    or
                                                the Carousel"s "direction" is 'right',

                                            else if
                                                the Carousel"s "direction" is 'backward'
                                                    or
                                                the Carousel"s "direction" is 'left'.
                                    */
                                    if (
                                        document.getElementsByClassName('carousel')[i]['LapysJS direction'] === 'forward' ||
                                        document.getElementsByClassName('carousel')[i]['LapysJS direction'] === 'right'
                                    ) {
                                        // Initialization
                                            // Target
                                            let that = document.getElementsByClassName('carousel')[i];

                                        /* Logic
                                                If
                                                    the Carousel does not have its "Slide Interval set".
                                        */
                                        if (!document.getElementsByClassName('carousel')[i]['LapysJS slideIntervalSet'])
                                            // Set Interval
                                            setInterval(() => {
                                                // Target
                                                    // Next
                                                    that['LapysJS next']()
                                            }, document.getElementsByClassName('carousel')[i]['LapysJS interval']);

                                        // Modification
                                            // Target
                                                // Slide Interval Set
                                                document.getElementsByClassName('carousel')[i]['LapysJS slideIntervalSet'] = true
                                    }

                                    else if (
                                        document.getElementsByClassName('carousel')[i]['LapysJS direction'] === 'backward' ||
                                        document.getElementsByClassName('carousel')[i]['LapysJS direction'] === 'left'
                                    ) {
                                        // Initialization
                                            // Target
                                            let that = document.getElementsByClassName('carousel')[i];

                                        /* Logic
                                                If
                                                    the Carousel does not have its "Slide Interval set".
                                        */
                                        if (!document.getElementsByClassName('carousel')[i]['LapysJS slideIntervalSet'])
                                            // Set Interval
                                            setInterval(() => {
                                                // Target
                                                    // Previous
                                                    that['LapysJS prev']()
                                            }, document.getElementsByClassName('carousel')[i]['LapysJS interval']);

                                        // Modification
                                            // Target
                                                // Slide Interval Set
                                                document.getElementsByClassName('carousel')[i]['LapysJS slideIntervalSet'] = true
                                    }
                                };

                                // Function
                                    // Next
                                    document.getElementsByClassName('carousel')[i].constructor.prototype['LapysJS next'] = function next() {
                                        /* Logic
                                                If
                                                    [statement].
                                        */
                                        if (this['LapysJS currentSlideIndex'] >= this.querySelector('.slides-container').children.length - 1)
                                            // Modification
                                                // Carousel
                                                    // Current Index
                                                    this['LapysJS currentSlideIndex'] = 0;

                                        else
                                            // Modification
                                                // Carousel
                                                    // Current Index
                                                    this['LapysJS currentSlideIndex'] += 1;

                                        /* Loop
                                                Index all the Carousel"s "Slide Container""s child elements.
                                        */
                                        for (let j = 0; j < this.querySelector('.slides-container').children.length; j += 1)
                                            // Slide
                                                // Modification
                                                    // Hide
                                                    this.querySelector('.slides-container').children[j].hidden = true;

                                                    // Show
                                                    this.querySelector('.slides-container').children[this['LapysJS currentSlideIndex']].hidden = false
                                    };

                                    // Previous
                                    document.getElementsByClassName('carousel')[i].constructor.prototype['LapysJS prev'] = function prev() {
                                        /* Logic
                                                If
                                                    the Carousel"s 'Current Slide Index' is lesser than 0
                                                        or
                                                    the Carousel"s 'Current Slide Index' is equal to 0.
                                        */
                                        if (this['LapysJS currentSlideIndex'] <= 0)
                                            // Modification
                                                // Carousel
                                                    // Current Index
                                                    this['LapysJS currentSlideIndex'] = this.querySelector('.slides-container').children.length - 1;

                                        else
                                            // Modification
                                                // Carousel
                                                    // Current Index
                                                    this['LapysJS currentSlideIndex'] -= 1;

                                        /* Loop
                                                Index all the Carousel"s "Slide Container""s child elements.
                                        */
                                        for (let j = 0; j < this.querySelector('.slides-container').children.length; j += 1)
                                            // Slide
                                                // Modification
                                                    // Hide
                                                    this.querySelector('.slides-container').children[j].hidden = true;

                                                    // Show
                                                    this.querySelector('.slides-container').children[this['LapysJS currentSlideIndex']].hidden = false;
                                    };

                                    // Toggle
                                    document.getElementsByClassName('carousel')[i].constructor.prototype['LapysJS toggle'] = function toggle(index) {
                                        /* Loop
                                                Index all the Carousel"s "Slide Container""s child elements.
                                        */
                                        for (let j = 0; j < this.querySelector('.slides-container').children.length; j += 1)
                                            // Slide
                                                // Modification
                                                    // Hide
                                                    this.querySelector('.slides-container').children[j].hidden = true;

                                                    // Show
                                                    this.querySelector('.slides-container').children[index].hidden = false;

                                        // Modification
                                            // Carousel
                                                // Current Index
                                                this['LapysJS currentSlideIndex'] = index
                                    }
                            }
                        };

                    // Clipboard
                        // Definition
                            // <clip-clone>
                            (!window.customElements || (document.createElement('clip-clone').constructor !== HTMLElement) || window.customElements.define('clip-clone', class HTMLClipboardCloneElement extends HTMLElement {}));

                            // <clip-copy>
                            (!window.customElements || (document.createElement('clip-copy').constructor !== HTMLElement) || window.customElements.define('clip-copy', class HTMLClipboardCopyElement extends HTMLElement {}));

                            // <clip-cut>
                            (!window.customElements || (document.createElement('clip-cut').constructor !== HTMLElement) || window.customElements.define('clip-cut', class HTMLClipboardCutElement extends HTMLElement {}));

                            // <clip-paste>
                            (!window.customElements || (document.createElement('clip-paste').constructor !== HTMLElement) || window.customElements.define('clip-paste', class HTMLClipboardPasteElement extends HTMLElement {}));

                        // Modification
                            // <clip-copy>, <clip-cut>
                                // Unit
                                Object.defineProperty(new (document.createElement('clip-copy')).constructor().constructor.prototype, 'unit', {
                                    // Configurable
                                    configurable: true,

                                    // Enumerable
                                    enumerable: true,

                                    // Get
                                    get: function getUnit() {
                                        // Return
                                        return this.getAttribute('unit')
                                    },

                                    // Set
                                    set: function setUnit(data) {
                                        // Modification > Target > Data Unit
                                        this.setAttribute('data-unit', data)
                                    }
                                });

                                Object.defineProperty(new (document.createElement('clip-cut')).constructor().constructor.prototype, 'unit', {
                                    // Configurable
                                    configurable: true,

                                    // Enumerable
                                    enumerable: true,

                                    // Get
                                    get: function getUnit() {
                                        // Return
                                        return this.getAttribute('unit')
                                    },

                                    // Set
                                    set: function setUnit(data) {
                                        // Modification > Target > Data Unit
                                        this.setAttribute('data-unit', data)
                                    }
                                });

                        /* Loop
                                Index all <clip-clone> elements.
                        */
                        for (let i = 0; i < document.getElementsByTagName('clip-clone').length; i += 1) {
                            // <clip-clone>
                                // Modification
                                    // Data Unit
                                    document.getElementsByTagName('clip-clone')[i].setAttribute(
                                        'data-unit',
                                        parseInt(eval(document.getElementsByTagName('clip-clone')[i].getAttribute('data-unit'))) || 1
                                    );

                                /* Loop
                                        Iterate over the amount unit of the element"s 'data-unit' attribute.
                                */
                                for (let j = 0; j < document.getElementsByTagName('clip-clone')[i].getAttribute('data-unit'); j += 1)
                                    // Adjacent Initialization
                                    document.getElementsByTagName("clip-clone")[i].insertAdjacentHTML(
                                        "afterend",
                                        (
                                            document.querySelector(`clip-copy[data-id='${document.getElementsByTagName("clip-clone")[i].getAttribute("data-id")}']:not([data-copied])`) ||
                                            document.querySelector(`clip-cut[data-id='${document.getElementsByTagName("clip-clone")[i].getAttribute("data-id")}']`)
                                        ).outerHTML.replace(/<(clip-copy|clip-cut)([a-z]|[A-Z]|[0-9]|[\~\`\!\@\#\$\%\^&\*\(\)\_\-\+\=\[\]\{\}\|\\\:\;\'\"\<\,\.\?\/]|\ |\n|\t){1,}>/, '').replace(/<\/clip-copy>|<\/clip-cut>/, '')
                                    );

                                // Deletion
                                    // <clip-clone>
                                    document.getElementsByTagName('clip-clone')[i--].remove()
                        };

                        /* Loop
                                Index all <clip-paste> elements.
                        */
                        for (let i = 0; i < document.getElementsByTagName('clip-paste').length; i += 1) {
                            // <clip-paste>
                                // Modification
                                    // Data Unit
                                    document.getElementsByTagName('clip-paste')[i].setAttribute(
                                        'data-unit',

                                        parseInt(eval(document.getElementsByTagName('clip-paste')[i].getAttribute('data-unit'))) || 1
                                    );

                                /* Loop
                                        Iterate over the amount unit of the element"s 'data-unit' attribute.
                                */
                                for (let j = 0; j < document.getElementsByTagName('clip-paste')[i].getAttribute('data-unit'); j += 1) {
                                    // Adjacent Initialization
                                    document.getElementsByTagName("clip-paste")[i].insertAdjacentHTML(
                                        "afterend",

                                        "<div data-pasted" +
                                            (() => {
                                                // Initialization
                                                    // Attributes
                                                    let attributes = '';

                                                /* Loop
                                                        Index all the <clip-paste>"s attributes.
                                                */
                                                for (let k = 0; k < document.getElementsByTagName("clip-paste")[i].attributes.length; k += 1)
                                                    // Update
                                                        // Attributes
                                                    attributes += ` ${document.getElementsByTagName("clip-paste")[i].attributes[k].name}='${document.getElementsByTagName("clip-paste")[i].attributes[k].value}'`;

                                                /* Loop
                                                        Index all the (<clip-copy>"s or <clip-cut>"s) attributes.
                                                */
                                                for (let k = 0; k < (document.querySelector(`clip-copy[data-id='${document.getElementsByTagName("clip-paste")[i].getAttribute("data-id")}']`) || document.querySelector(`clip-cut[data-id='${document.getElementsByTagName("clip-paste")[i].getAttribute("data-id")}']`)).attributes.length; k += 1)
                                                    // Update
                                                        // Attributes
                                                        attributes += ` ${(document.querySelector(`clip-copy[data-id='${document.getElementsByTagName("clip-paste")[i].getAttribute("data-id")}']`) || document.querySelector(`clip-cut[data-id='${document.getElementsByTagName("clip-paste")[i].getAttribute("data-id")}']`)).attributes[k].name}='${(document.querySelector(`clip-copy[data-id='${document.getElementsByTagName("clip-paste")[i].getAttribute("data-id")}']`) || document.querySelector(`clip-cut[data-id='${document.getElementsByTagName("clip-paste")[i].getAttribute("data-id")}']`)).attributes[k].value}'`;

                                                // Return
                                                return attributes
                                            })() +
                                        ">" +
                                            (
                                                document.querySelector(`clip-copy[data-id='${document.getElementsByTagName("clip-paste")[i].getAttribute("data-id")}']`) ||
                                                document.querySelector(`clip-cut[data-id='${document.getElementsByTagName("clip-paste")[i].getAttribute("data-id")}']`)
                                            ).innerHTML +
                                        "</div>"
                                    );
                                }

                                // Deletion
                                    // <clip-paste>
                                    document.getElementsByTagName('clip-paste')[i--].remove()
                        };

                        /* Loop
                                Index all <clip-copy> elements.
                        */
                        for (let i = 0; i < document.querySelectorAll('clip-copy:not([data-cloned]):not([data-copied]):not([data-pasted])').length; i += 1)
                            document.querySelectorAll('clip-copy:not([data-cloned]):not([data-copied]):not([data-pasted])')[i].setAttribute('data-copied', '');

                        /* Loop
                                Index all <clip-cut> elements.
                        */
                        for (let i = 0; i < document.getElementsByTagName('clip-cut').length; i += 1) {
                            // Deletion
                                // <clip-cut>
                                document.getElementsByTagName('clip-cut')[i--].remove()
                        };

                    // Dropdown
                        /* Loop
                                Index all Dropdowns.
                        */
                        for (let i = 0; i < document.getElementsByClassName('dropdown').length; i += 1) {
                            /* Loop
                                    If
                                        the Dropdown has the 'data-id' attribute.
                            */
                            if (document.getElementsByClassName('dropdown')[i].hasAttribute('data-id')) {
                                // Modification
                                    // Content
                                    document.getElementsByClassName("dropdown")[i].constructor.prototype['LapysJS content'] = document.querySelectorAll(`[data-id='${document.getElementsByClassName("dropdown")[i].getAttribute("data-id")}']:not(.dropdown)`);
                                        /* Loop
                                                Index all Dropdowns" content.
                                        */
                                        for (let j = 0; j < document.getElementsByClassName('dropdown')[i]['LapysJS content'].length; j += 1)
                                            document.getElementsByClassName('dropdown')[i]['LapysJS content'][j]['LapysJS dropdown'] = document.getElementsByClassName("dropdown")[i];

                                // Function
                                    // Close
                                    document.getElementsByClassName('dropdown')[i].constructor.prototype['LapysJS close'] = function close() {
                                        /* Loop
                                                Index all the Dropdown"s content.
                                        */
                                        for (let j = 0; j < this['LapysJS content'].length; j += 1)
                                            // Modification
                                                // Content
                                                    // Hidden
                                                    this['LapysJS content'][j].hidden = true
                                    };
                                    document.getElementsByClassName('dropdown')[i]['LapysJS close']();

                                    // Open
                                    document.getElementsByClassName('dropdown')[i].constructor.prototype['LapysJS open'] = function open() {
                                        /* Loop
                                                Index all the Dropdown"s content.
                                        */
                                        for (let j = 0; j < this['LapysJS content'].length; j += 1)
                                            // Modification
                                                // Content
                                                    // Hidden
                                                    this['LapysJS content'][j].hidden = false
                                    }
                            };

                            /* Loop
                                    If
                                        the Dropdown has the 'data-event-type' attribute.
                            */
                            if (document.getElementsByClassName('dropdown')[i].hasAttribute('data-event-type')) {
                                /* Logic
                                        If
                                            the Dropdown"s 'data-event-type' attribute is set to "hover".
                                */
                                if (document.getElementsByClassName('dropdown')[i].getAttribute('data-event-type') === 'hover') {
                                    // Event
                                        // Mouse Leave
                                        document.getElementsByClassName('dropdown')[i].setEvent('mouseleave, mouseout', function close() {
                                            // Close
                                            this['LapysJS close']()
                                        });

                                        // Mouse Over
                                        document.getElementsByClassName('dropdown')[i].setEvent('mouseover', function open() {
                                            // Open
                                            this['LapysJS open']()
                                        })
                                }

                                else {
                                    // Event > [Data Event Type] | Mouse Up
                                    document.getElementsByClassName('dropdown')[i].constructor.prototype['LapysJS hasDropdownEventSet'] || document.getElementsByClassName('dropdown')[i].setEvent(
                                        (document.getElementsByClassName('dropdown')[i].getAttribute('data-event-type') || 'mouseup'),

                                        function toggleDropdown() {
                                            // Toggle
                                            !this['LapysJS toggle'] ? this['LapysJS open']() : this['LapysJS close']();

                                            this['LapysJS toggle'] = !this['LapysJS toggle'];

                                            // Modification
                                            this['LapysJS toggle'] || this.setAttribute('data-selected', '');
                                            !this['LapysJS toggle'] || this.removeAttribute('data-selected')
                                        }
                                    );

                                    // Update > Dropdown > Has Dropdown Event Set
                                    document.getElementsByClassName('dropdown')[i].constructor.prototype['LapysJS hasDropdownEventSet'] = true
                                }
                            }
                        };

                    // Dynamic Text
                        /* Loop
                                Index all Dynamic Texts.
                        */
                        for (let i = 0; i < document.getElementsByClassName('dynamic-text').length; i += 1)
                            /* Logic
                                    If
                                        the Dynamic Text has the 'data-text' attribute
                                            and
                                        the Dynamic Text has the 'data-text-event-type' attribute.
                            */
                            if (
                                document.getElementsByClassName('dynamic-text')[i].hasAttribute('data-text') &&
                                document.getElementsByClassName('dynamic-text')[i].hasAttribute('data-text-event-type')
                            ) {
                                // Dynamic Text
                                    // Modification
                                        // Content Editable
                                        document.getElementsByClassName('dynamic-text')[i].contentEditable = false;

                                        // Data Animation Delay
                                        document.getElementsByClassName('dynamic-text')[i].setAttribute(
                                            'data-animation-delay',
                                            (document.getElementsByClassName('dynamic-text')[i].getAttribute('data-animation-delay') || 2)
                                        );

                                        // Data Animation Duration
                                        document.getElementsByClassName('dynamic-text')[i].setAttribute(
                                            'data-animation-duration',
                                            (parseFloat(eval(document.getElementsByClassName('dynamic-text')[i].getAttribute('data-animation-duration'))) || 3)
                                        );

                                        // Data Text
                                        document.getElementsByClassName('dynamic-text')[i].setAttribute(
                                            'data-text',
                                            String(document.getElementsByClassName('dynamic-text')[i].getAttribute('data-text')) || ''
                                        );

                                        // Inner HTML
                                        document.getElementsByClassName('dynamic-text')[i].innerHTML = '';

                                        // Strings
                                        document.getElementsByClassName('dynamic-text')[i].constructor.prototype['LapysJS strings'] = document.getElementsByClassName('dynamic-text')[i].getAttribute('data-text').replace(/\n/g, '').split(/_/g);

                                        // String Functions
                                        document.getElementsByClassName('dynamic-text')[i].constructor.prototype['LapysJS stringFunctions'] = document.getElementsByClassName('dynamic-text')[i].getAttribute('data-text-event-type').replace(/\ /g, '').split(/([^_]*_[^_]*)_/gm).filter((element) => {
                                            // Return
                                            return element
                                        });

                                        // Text
                                        document.getElementsByClassName('dynamic-text')[i].constructor.prototype['LapysJS text'] = {};
                                            /* Logic
                                                    If
                                                        'Strings' and 'String Functions' have equal length.
                                            */
                                            if (document.getElementsByClassName('dynamic-text')[i]['LapysJS strings'].length === document.getElementsByClassName('dynamic-text')[i]['LapysJS stringFunctions'].length)
                                                /* Loop
                                                        Index all elements of 'String'.
                                                */
                                                for (let j = 0; j < document.getElementsByClassName('dynamic-text')[i]['LapysJS strings'].length; j += 1) {
                                                    // Update
                                                        // Text
                                                        document.getElementsByClassName('dynamic-text')[i]['LapysJS text'][j] = {
                                                            // Close Function
                                                            ['LapysJS closeFunction']: document.getElementsByClassName('dynamic-text')[i]['LapysJS stringFunctions'][j].slice(document.getElementsByClassName('dynamic-text')[i]['LapysJS stringFunctions'][j].indexOf('_') + '_'.length),

                                                            // Initial Function
                                                            ['LapysJS initialFunction']: document.getElementsByClassName('dynamic-text')[i]['LapysJS stringFunctions'][j].slice(0, document.getElementsByClassName('dynamic-text')[i]['LapysJS stringFunctions'][j].indexOf('_')),

                                                            // Letters
                                                            ['LapysJS letters']: document.getElementsByClassName('dynamic-text')[i]['LapysJS strings'][j].split(''),

                                                            // Value
                                                            ['LapysJS value']: document.getElementsByClassName('dynamic-text')[i]['LapysJS strings'][j]
                                                        };
                                                            // Length
                                                            document.getElementsByClassName('dynamic-text')[i]['LapysJS text'].length = j + 1
                                                };

                                    // Function
                                        // Backward Delete
                                        document.getElementsByClassName('dynamic-text')[i].constructor.prototype['LapysJS backwardDelete'] = function backwardDelete() {
                                            this.innerHTML = this.innerHTML.slice(0, -1)
                                        };

                                        // Forward Delete
                                        document.getElementsByClassName('dynamic-text')[i].constructor.prototype['LapysJS forwardDelete'] = function forwardDelete() {
                                            this.innerHTML = this.innerHTML.slice(1)
                                        };

                                        // Insert
                                        document.getElementsByClassName('dynamic-text')[i].constructor.prototype['LapysJS insert'] = function insert(letter) {
                                            this.innerHTML = String(letter)[0] + this.innerHTML
                                        };

                                        // Type
                                        document.getElementsByClassName('dynamic-text')[i].constructor.prototype['LapysJS type'] = function type(letter) {
                                            this.innerHTML += String(letter)[0]
                                        };

                                // Modification
                                    /* Logic
                                            If
                                                the Dynamic Text"s 'text' is defined.
                                    */
                                    if (document.getElementsByClassName('dynamic-text')[i]['LapysJS text'][0]) {
                                        // Modification
                                            // Current Letter
                                            document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetter'] = document.getElementsByClassName('dynamic-text')[i]['LapysJS text'][0]['LapysJS letters'][0];
                                                // Current Letter Index
                                                document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetterIndex'] = 0;

                                                // Current Letter Set Index
                                                document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetterSetIndex'] = 0;

                                            // Current Close Function
                                            document.getElementsByClassName('dynamic-text')[i].constructor.prototype['LapysJS currentCloseFunction'] = document.getElementsByClassName('dynamic-text')[i]['LapysJS text'][0]['LapysJS closeFunction'];
                                                // Current Close Function Index
                                                document.getElementsByClassName('dynamic-text')[i].constructor.prototype['LapysJS currentCloseFunctionIndex'] = 0;

                                            // Current Initial Function
                                            document.getElementsByClassName('dynamic-text')[i].constructor.prototype['LapysJS currentInitialFuntion'] = document.getElementsByClassName('dynamic-text')[i]['LapysJS text'][0]['LapysJS initialFunction'];
                                                // Current Initial Function Index
                                                document.getElementsByClassName('dynamic-text')[i].constructor.prototype['LapysJS currentInitialFuntionIndex'] = 0;

                                            // Current String
                                            document.getElementsByClassName('dynamic-text')[i].constructor.prototype['LapysJS currentString'] = document.getElementsByClassName('dynamic-text')[i]['LapysJS text'][0]['LapysJS value'];
                                                // Current String Index
                                                document.getElementsByClassName('dynamic-text')[i].constructor.prototype['LapysJS currentStringIndex'] = 0;

                                            // Key Interval
                                            document.getElementsByClassName('dynamic-text')[i].constructor.prototype['LapysJS keyInterval'] = parseFloat(document.getElementsByClassName('dynamic-text')[i].getAttribute('data-animation-duration')) / document.getElementsByClassName('dynamic-text')[i]['LapysJS currentString'].length
                                    };

                                    // Key Press Count
                                    document.getElementsByClassName('dynamic-text')[i].constructor.prototype['LapysJS keyPressCount'] = 0;

                                    // Key Timer
                                    document.getElementsByClassName('dynamic-text')[i].constructor.prototype['LapysJS keyTimer'] = 0;

                                    // Paused
                                    document.getElementsByClassName('dynamic-text')[i].constructor.prototype['LapysJS paused'] = false;

                                // Function
                                    // Pause and Clear
                                    document.getElementsByClassName('dynamic-text')[i].constructor.prototype['LapysJS pauseAndClear'] = function pauseAndClear() {
                                        // Initialization
                                            // Target
                                            let that = this;

                                        // Update
                                            // Paused
                                            this['LapysJS paused'] = true;

                                        // Set Timeout
                                        setTimeout(() => {
                                            // Modification
                                                // Inner HTML
                                                that.innerHTML = '';

                                            // Update
                                                // Paused
                                                that['LapysJS paused'] = false
                                        }, (parseFloat(this.getAttribute('data-animation-delay')) * 1000) || 0)
                                    };

                                    // Complete Initial Command
                                    document.getElementsByClassName('dynamic-text')[i].constructor.prototype['LapysJS completeInitialCommand'] = function completeInitialCommand() {
                                        // Initialization
                                            // Target
                                            let that = this;

                                        // Update
                                            // Paused
                                            this['LapysJS paused'] = true;

                                        // Set Timeout
                                        setTimeout(() => {
                                            // Update
                                                // Initial Function Completed
                                                that['LapysJS initialFunctionCompleted'] = true;

                                                // Current Letter Set Index
                                                that['LapysJS currentLetterSetIndex'] += 1;

                                                /* Logic
                                                        If
                                                            'Current Letter Set Index' is greater than or equal to the length of 'Strings'.
                                                */
                                                if (that['LapysJS currentLetterSetIndex'] >= that['LapysJS strings'].length) {
                                                    // Update
                                                        // Current Letter
                                                        that['LapysJS currentLetter'] = that['LapysJS text'][0]['LapysJS letters'][0];

                                                        // Current Letter Set Index
                                                        that['LapysJS currentLetterSetIndex'] = 0
                                                }

                                                else
                                                    // Update
                                                        // Current Letter
                                                        that['LapysJS currentLetter'] = that['LapysJS text'][that['LapysJS currentLetterSetIndex']]['LapysJS letters'][0];

                                                // Current Initial Function Index
                                                that['LapysJS currentInitialFuntionIndex'] += 1;

                                                /* Logic
                                                        If
                                                            'Current Initial Function Index' is greater than or equal to the length of 'Strings'.
                                                */
                                                if (that['LapysJS currentInitialFuntionIndex'] >= that['LapysJS strings'].length) {
                                                    // Update
                                                        // Current Initial Function
                                                        that['LapysJS currentInitialFuntion'] = that['LapysJS text'][0]['LapysJS initialFunction'];

                                                        // Current Initial Function Index
                                                        that['LapysJS currentInitialFuntionIndex'] = 0
                                                }

                                                else
                                                    // Update
                                                        // Current Initial Function
                                                        that['LapysJS currentInitialFuntion'] = that['LapysJS text'][that['LapysJS currentInitialFuntionIndex']]['LapysJS initialFunction'];

                                                // Current String Index
                                                that['LapysJS currentStringIndex'] += 1;

                                                /* Logic
                                                        If
                                                            'Current Initial String Index' is greater than or equal to the length of 'Strings'.
                                                */
                                                if (that['LapysJS currentStringIndex'] >= that['LapysJS strings'].length) {
                                                    // Update
                                                        // Current String
                                                        that['LapysJS currentString'] = that['LapysJS text'][0]['LapysJS value'];

                                                        // Current String Index
                                                        that['LapysJS currentStringIndex'] = 0
                                                }

                                            else
                                                // Update
                                                    // Current String
                                                    that['LapysJS currentString'] = that['LapysJS text'][that['LapysJS currentStringIndex']]['LapysJS value'];

                                            // Key Press Count
                                            that['LapysJS keyPressCount'] = 0;

                                            // Paused
                                            that['LapysJS paused'] = false
                                        }, ((parseFloat(this.getAttribute('data-animation-delay')) * 1000) || 0))
                                    };

                                    // Complete Close Command
                                    document.getElementsByClassName('dynamic-text')[i].constructor.prototype['LapysJS completeCloseCommand'] = function completeCloseCommand() {
                                        // Initialization
                                            // Target
                                            let that = this;

                                        // Update
                                            // Paused
                                            this['LapysJS paused'] = true;

                                        // Set Timeout
                                        setTimeout(() => {
                                            // Update
                                                // Initial Function Completed
                                                that['LapysJS initialFunctionCompleted'] = false;

                                                // Current Close Function Index
                                                that['LapysJS currentCloseFunctionIndex'] += 1;

                                                /* Logic
                                                        If
                                                            'Current Close Function Index' is greater than or equal to the length of 'Strings'.
                                                */
                                                if (that['LapysJS currentCloseFunctionIndex'] >= that['LapysJS strings'].length) {
                                                    // Update
                                                        // Current Close Function
                                                        that['LapysJS currentCloseFunction'] = that['LapysJS text'][0]['LapysJS closeFunction'];

                                                        // Current Close Function Index
                                                        that['LapysJS currentCloseFunctionIndex'] = 0
                                                }

                                            else
                                                // Update
                                                    // Current Close Function
                                                    that['LapysJS currentCloseFunction'] = that['LapysJS text'][that['LapysJS currentCloseFunctionIndex']]['LapysJS closeFunction'];

                                            // Key Press Count
                                            that['LapysJS keyPressCount'] = 0;

                                            // Paused
                                            that['LapysJS paused'] = false
                                        }, ((parseFloat(this.getAttribute('data-animation-delay')) * 1000) || 0))
                                    };

                                /* Logic
                                        If
                                            the Dynamic Text"s 'data-text' attribute is not "empty".
                                */
                                if (document.getElementsByClassName('dynamic-text')[i].getAttribute('data-text'))
                                    // Set Interval
                                    setInterval(() => {
                                        /* Loop
                                                Index all Dynamic Text
                                        */
                                        for (let i = 0; i < document.getElementsByClassName('dynamic-text').length; i += 1)
                                            /* Logic
                                                    If
                                                        the Dynamic Text"s
                                                            'String' and 'String Functions'
                                                            have the same length.
                                            */
                                            if (document.getElementsByClassName('dynamic-text')[i]['LapysJS strings'].length === document.getElementsByClassName('dynamic-text')[i]['LapysJS stringFunctions'].length) {
                                                // Update
                                                    // Key Timer
                                                    document.getElementsByClassName('dynamic-text')[i]['LapysJS keyTimer'] += 0.1;

                                                /* Logic
                                                        If
                                                            --- NOTE ---
                                                                The typing mechanism.
                                                */
                                                if (document.getElementsByClassName('dynamic-text')[i]['LapysJS keyTimer'] > document.getElementsByClassName('dynamic-text')[i]['LapysJS keyInterval']) {
                                                    // Update
                                                        // Key Press Count
                                                        document.getElementsByClassName('dynamic-text')[i]['LapysJS keyPressCount'] += 1;

                                                        // Key Interval
                                                        document.getElementsByClassName('dynamic-text')[i]['LapysJS keyInterval'] = parseFloat(document.getElementsByClassName('dynamic-text')[i].getAttribute('data-animation-duration')) / document.getElementsByClassName('dynamic-text')[i]['LapysJS currentString'].length;

                                                    // Function
                                                        // Initial Function
                                                        function initialFunction() {
                                                            /* Logic
                                                                    If
                                                                        the Dynamic Text"s
                                                                            'data-text' attribute has '_' in it
                                                                                or
                                                                            'data-text-event-type' attribute has '_' in it.
                                                            */
                                                            if (
                                                                document.getElementsByClassName('dynamic-text')[i].getAttribute('data-text').indexOf('_') > -1 &&
                                                                document.getElementsByClassName('dynamic-text')[i].getAttribute('data-text-event-type').indexOf('_') > -1
                                                            ) {
                                                                /* Logic
                                                                        If
                                                                            the Dynamic Text"s 'Key Press Count' is
                                                                                greater than the specified data
                                                                                    or
                                                                                equal to the specified data.
                                                                */
                                                                if (document.getElementsByClassName('dynamic-text')[i]['LapysJS keyPressCount'] >= parseFloat(document.getElementsByClassName('dynamic-text')[i]['LapysJS currentInitialFuntion'].replace(/[a-z]|[A-Z]|\(|\)/g, '')) + 1)
                                                                    // Function
                                                                        // Complete Initial Command
                                                                        document.getElementsByClassName('dynamic-text')[i]['LapysJS completeInitialCommand']();

                                                                /* Logic
                                                                        If
                                                                            the Dynamic Text"s initial function is not complete.
                                                                */
                                                                if (!document.getElementsByClassName('dynamic-text')[i]['LapysJS initialFunctionCompleted']) {
                                                                    /* Logic
                                                                            If
                                                                                the Dynamic Text"s 'Current Initial Function' is 'insert'

                                                                            else if
                                                                                the Dynamic Text"s 'Current Initial Function' is 'type'.
                                                                    */
                                                                    if (document.getElementsByClassName('dynamic-text')[i]['LapysJS currentInitialFuntion'].replace(/\([0-9]\)/g, '') === 'insert') {
                                                                        /* Logic
                                                                                If
                                                                                    the Dynamic Text is not "paused".
                                                                        */
                                                                        if (!document.getElementsByClassName('dynamic-text')[i]['LapysJS paused']) {
                                                                            /* Logic
                                                                                    If
                                                                                        the Dynamic Text"s 'Current Letter Index' is
                                                                                            less than 0
                                                                                                or
                                                                                            equal to 0.
                                                                            */
                                                                            if (document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetterIndex'] <= 0)
                                                                                // Update
                                                                                    // Current Letter Index
                                                                                    document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetterIndex'] = document.getElementsByClassName('dynamic-text')[i]['LapysJS currentString'].length - 1;

                                                                            else
                                                                                // Update
                                                                                    // Current Letter Index
                                                                                    document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetterIndex'] -= 1;

                                                                            // Update
                                                                                // Current Letter
                                                                                document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetter'] = document.getElementsByClassName('dynamic-text')[i]['LapysJS text'][document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetterSetIndex']]['LapysJS letters'][document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetterIndex']];

                                                                            // Function
                                                                                // Insert
                                                                                document.getElementsByClassName('dynamic-text')[i]['LapysJS insert'](document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetter']);

                                                                            /* Logic
                                                                                    If
                                                                                        the Dynamic Text"s 'innerHTML' has it 'Current String' within.
                                                                            */
                                                                            if (document.getElementsByClassName('dynamic-text')[i].innerHTML.indexOf(document.getElementsByClassName('dynamic-text')[i]['LapysJS currentString']) > -1)
                                                                                // Function
                                                                                    // Complete Initial Command
                                                                                    document.getElementsByClassName('dynamic-text')[i]['LapysJS completeInitialCommand']()
                                                                        }

                                                                        else
                                                                            // Update
                                                                                // Key Press Count
                                                                                document.getElementsByClassName('dynamic-text')[i]['LapysJS keyPressCount'] = -1
                                                                    }

                                                                    else if (document.getElementsByClassName('dynamic-text')[i]['LapysJS currentInitialFuntion'].replace(/\([0-9]\)/g, '') === 'type') {
                                                                        /* Logic
                                                                                If
                                                                                    the Dynamic Text is not "paused".
                                                                        */
                                                                        if (!document.getElementsByClassName('dynamic-text')[i]['LapysJS paused']) {
                                                                            // Function
                                                                                // Type
                                                                                document.getElementsByClassName('dynamic-text')[i]['LapysJS type'](document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetter']);

                                                                            /* Logic
                                                                                    If
                                                                                        the Dynamic Text"s 'Current Letter Index' is
                                                                                            greater than its 'Current String'"s length minus 1
                                                                                                or
                                                                                            equal to its 'Current String'"s length minus 1.
                                                                            */
                                                                            if (document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetterIndex'] >= document.getElementsByClassName('dynamic-text')[i]['LapysJS currentString'].length - 1)
                                                                                // Update
                                                                                    // Current Letter Index
                                                                                    document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetterIndex'] = 0;

                                                                            else
                                                                                // Update
                                                                                    // Current Letter Index
                                                                                    document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetterIndex'] += 1;

                                                                            // Update
                                                                                // Current Letter
                                                                                document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetter'] = document.getElementsByClassName('dynamic-text')[i]['LapysJS text'][document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetterSetIndex']]['LapysJS letters'][document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetterIndex']];

                                                                            /* Logic
                                                                                    If
                                                                                        the Dynamic Text"s 'innerHTML' has it 'Current String' within.
                                                                            */
                                                                            if (document.getElementsByClassName('dynamic-text')[i].innerHTML.indexOf(document.getElementsByClassName('dynamic-text')[i]['LapysJS currentString']) > -1)
                                                                                // Function
                                                                                    // Complete Initial Command
                                                                                    document.getElementsByClassName('dynamic-text')[i]['LapysJS completeInitialCommand']()
                                                                        }

                                                                        else
                                                                            // Update
                                                                                // Key Press Count
                                                                                document.getElementsByClassName('dynamic-text')[i]['LapysJS keyPressCount'] = -1
                                                                    }

                                                                    else
                                                                        /* Logic
                                                                                If
                                                                                    the Dynamic Text is not "paused".
                                                                        */
                                                                        if (!document.getElementsByClassName('dynamic-text')[i]['LapysJS paused']) {
                                                                            // Function
                                                                                // Complete Initial Command
                                                                                document.getElementsByClassName('dynamic-text')[i]['LapysJS completeInitialCommand']()
                                                                        }

                                                                        else
                                                                            // Update
                                                                                // Key Press Count
                                                                                document.getElementsByClassName('dynamic-text')[i]['LapysJS keyPressCount'] = -1
                                                                }

                                                                else
                                                                    // Function
                                                                        // Close Function
                                                                        closeFunction()
                                                            }

                                                            else
                                                                /* Logic
                                                                        If
                                                                            the Dynamic Text"s 'Current Initial Function' is 'insert'

                                                                        else if
                                                                            the Dynamic Text"s 'Current Initial Function' is 'type'.
                                                                */
                                                                if (document.getElementsByClassName('dynamic-text')[i].getAttribute('data-text-event-type').replace(/\([0-9]\)/g, '') === 'insert') {
                                                                    /* Logic
                                                                            If
                                                                                the Dynamic Text is not "paused".
                                                                    */
                                                                    if (!document.getElementsByClassName('dynamic-text')[i]['LapysJS paused']) {
                                                                        /* Logic
                                                                                If
                                                                                    the Dynamic Text"s 'Current Letter Index' is
                                                                                        less than 0
                                                                                            or
                                                                                        equal to 0.
                                                                        */
                                                                        if (document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetterIndex'] <= 0)
                                                                            // Update
                                                                                // Current Letter Index
                                                                                document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetterIndex'] = document.getElementsByClassName('dynamic-text')[i]['LapysJS currentString'].length - 1;

                                                                        else
                                                                            // Update
                                                                                // Current Letter Index
                                                                                document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetterIndex'] -= 1;

                                                                        // Update
                                                                            // Current Letter
                                                                            document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetter'] = document.getElementsByClassName('dynamic-text')[i]['LapysJS text'][document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetterSetIndex']]['LapysJS letters'][document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetterIndex']];

                                                                        // Function
                                                                            // Insert
                                                                            document.getElementsByClassName('dynamic-text')[i]['LapysJS insert'](document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetter']);

                                                                        /* Logic
                                                                                If
                                                                                    the Dynamic Text"s 'innerHTML' has it 'Current String' within.
                                                                        */
                                                                        if (document.getElementsByClassName('dynamic-text')[i].innerHTML.indexOf(document.getElementsByClassName('dynamic-text')[i]['LapysJS currentString']) > -1)
                                                                            // Function
                                                                                // Pause and Clear
                                                                                document.getElementsByClassName('dynamic-text')[i]['LapysJS pauseAndClear']()
                                                                    }

                                                                    else
                                                                        // Update
                                                                            // Key Press Count
                                                                            document.getElementsByClassName('dynamic-text')[i]['LapysJS keyPressCount'] = -1
                                                                }

                                                                else if (document.getElementsByClassName('dynamic-text')[i].getAttribute('data-text-event-type').replace(/\([0-9]\)/g, '') === 'type') {
                                                                    /* Logic
                                                                            If
                                                                                the Dynamic Text is not "paused".
                                                                    */
                                                                    if (!document.getElementsByClassName('dynamic-text')[i]['LapysJS paused']) {
                                                                        // Function
                                                                            // Type
                                                                            document.getElementsByClassName('dynamic-text')[i]['LapysJS type'](document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetter']);

                                                                        /* Logic
                                                                                If
                                                                                    the Dynamic Text"s 'Current Letter Index' is
                                                                                        greater than its 'Current String'"s length minus 1
                                                                                            or
                                                                                        equal to its 'Current String'"s length minus 1.
                                                                        */
                                                                        if (document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetterIndex'] >= document.getElementsByClassName('dynamic-text')[i]['LapysJS currentString'].length - 1)
                                                                            // Update
                                                                                // Current Letter Index
                                                                                document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetterIndex'] = 0;

                                                                        else
                                                                            // Update
                                                                                // Current Letter Index
                                                                                document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetterIndex'] += 1;

                                                                        // Update
                                                                            // Current Letter
                                                                            document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetter'] = document.getElementsByClassName('dynamic-text')[i]['LapysJS text'][document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetterSetIndex']]['LapysJS letters'][document.getElementsByClassName('dynamic-text')[i]['LapysJS currentLetterIndex']];

                                                                        /* Logic
                                                                                If
                                                                                    the Dynamic Text"s 'innerHTML' has it 'Current String' within.
                                                                        */
                                                                        if (document.getElementsByClassName('dynamic-text')[i].innerHTML.indexOf(document.getElementsByClassName('dynamic-text')[i]['LapysJS currentString']) > -1)
                                                                            // Function
                                                                                // Pause and Clear
                                                                                document.getElementsByClassName('dynamic-text')[i]['LapysJS pauseAndClear']()
                                                                    }

                                                                    else
                                                                        // Update
                                                                            // Key Press Count
                                                                            document.getElementsByClassName('dynamic-text')[i]['LapysJS keyPressCount'] = -1
                                                                }
                                                        }
                                                        initialFunction();

                                                        // Close Function
                                                        function closeFunction() {
                                                            /* Logic
                                                                    If
                                                                        the Dynamic Text"s
                                                                            'data-text' attribute has '_' in it
                                                                                or
                                                                            'data-text-event-type' attribute has '_' in it.
                                                            */
                                                            if (document.getElementsByClassName('dynamic-text')[i]['LapysJS keyPressCount'] >= parseFloat(document.getElementsByClassName('dynamic-text')[i]['LapysJS currentCloseFunction'].replace(/[a-z]|[A-Z]|\(|\)/g, '')) + 1)
                                                                // Function
                                                                    // Complete Close Command
                                                                    document.getElementsByClassName('dynamic-text')[i]['LapysJS completeCloseCommand']();

                                                            /* Logic
                                                                    If
                                                                        the Dynamic Text"s 'Current Close Function' is 'backwardDelete'

                                                                    else if
                                                                        the Dynamic Text"s 'Current Close Function' is 'forwardDelete'.
                                                            */
                                                            if (document.getElementsByClassName('dynamic-text')[i]['LapysJS currentCloseFunction'].replace(/\([0-9]\)/g, '') === 'backwardDelete') {
                                                                /* Logic
                                                                        If
                                                                            the Dynamic Text is not "paused".
                                                                */
                                                                if (!document.getElementsByClassName('dynamic-text')[i]['LapysJS paused']) {
                                                                    // Function
                                                                        // Backward Delete
                                                                        document.getElementsByClassName('dynamic-text')[i]['LapysJS backwardDelete']();

                                                                    /* Logic
                                                                            If
                                                                                the Dynamic Text"s 'innerHTML' is "empty".
                                                                    */
                                                                    if (document.getElementsByClassName('dynamic-text')[i].innerHTML === '')
                                                                        // Function
                                                                            // Complete Close Command
                                                                            document.getElementsByClassName('dynamic-text')[i]['LapysJS completeCloseCommand']();
                                                                }

                                                                else
                                                                    // Update
                                                                        // Key Press Count
                                                                        document.getElementsByClassName('dynamic-text')[i]['LapysJS keyPressCount'] = -1
                                                            }

                                                            else if (document.getElementsByClassName('dynamic-text')[i]['LapysJS currentCloseFunction'].replace(/\([0-9]\)/g, '') === 'forwardDelete') {
                                                                /* Logic
                                                                        If
                                                                            the Dynamic Text is not "paused".
                                                                */
                                                                if (!document.getElementsByClassName('dynamic-text')[i]['LapysJS paused']) {
                                                                    // Function
                                                                        // Forward Delete
                                                                        document.getElementsByClassName('dynamic-text')[i]['LapysJS forwardDelete']();

                                                                    /* Logic
                                                                            If
                                                                                the Dynamic Text"s 'innerHTML' is "empty".
                                                                    */
                                                                    if (document.getElementsByClassName('dynamic-text')[i].innerHTML === '')
                                                                        // Function
                                                                            // Complete Close Command
                                                                            document.getElementsByClassName('dynamic-text')[i]['LapysJS completeCloseCommand']()
                                                                }

                                                                else
                                                                    // Update
                                                                        // Key Press Count
                                                                        document.getElementsByClassName('dynamic-text')[i]['LapysJS keyPressCount'] = -1
                                                            }

                                                            else
                                                                /* Logic
                                                                        If
                                                                            the Dynamic Text is not "paused".
                                                                */
                                                                if (!document.getElementsByClassName('dynamic-text')[i]['LapysJS paused'])
                                                                    // Function
                                                                        // Complete Close Command
                                                                        document.getElementsByClassName('dynamic-text')[i]['LapysJS completeCloseCommand']();

                                                                else
                                                                    // Update
                                                                        // Key Press Count
                                                                        document.getElementsByClassName('dynamic-text')[i]['LapysJS keyPressCount'] = -1;
                                                        };

                                                        // Update
                                                            // Key Timer
                                                            document.getElementsByClassName('dynamic-text')[i]['LapysJS keyTimer'] = 0
                                                    }
                                            }
                                    }, 100)
                            };

                    /* Media
                            --- CONSIDER ---
                                Using some more aesthetically forgiving icons, maybe?

                            --- UPDATE REQUIRED ---
                                Components Required:
                                    1. Video Frames & Thumbnails
                                    2. Console on Fullscreen
                    */
                        /* Loop
                                Index all Media.
                        */
                        for (let i = 0; i < document.querySelectorAll('audio.media, video.media').length; i += 1) {
                            // Media
                                // Insertion
                                    /* Logic
                                            If
                                                the Media is not "in a container".
                                    */
                                    if (!document.querySelectorAll('audio.media, video.media')[i]['LapysJS inContainer']) {
                                        // Modification
                                            // Media
                                                // Outer HTML
                                                document.querySelectorAll('audio.media, video.media')[i].outerHTML = `<div class='media-container'>${document.querySelectorAll('audio.media, video.media')[i].outerHTML}</div>`;

                                                // In Container
                                                document.querySelectorAll('audio.media, video.media')[i]['LapysJS inContainer'] = true
                                    };

                            // Modification
                                // Console
                                document.querySelectorAll('audio.media, video.media')[i]['LapysJS console'] = (() => {
                                    /* Logic
                                            If
                                                the Media"s next element sibling is a 'media-console' class.
                                    */
                                    if (
                                        (
                                            document.querySelectorAll('audio.media, video.media')[i].nextElementSibling ||
                                            document.createElement('a')
                                        ).hasClass('media-console')
                                    )
                                        // Return
                                        return document.querySelectorAll('audio.media, video.media')[i].nextElementSibling;

                                    else
                                        // Return
                                        return document.createElement('nav')
                                })();

                                // Controls
                                document.querySelectorAll('audio.media, video.media')[i].controls = false;

                                // Volume
                                    /* Logic
                                            If
                                                the Media is "muted",

                                            else if
                                                the Media has the 'volume' attribute.
                                    */
                                    if (document.querySelectorAll('audio.media, video.media')[i].muted)
                                        document.querySelectorAll('audio.media, video.media')[i].volume = 0;

                                    else if (document.querySelectorAll('audio.media, video.media')[i].hasAttribute('volume')) {
                                        // Modification
                                            // Media
                                                // Volume
                                                document.querySelectorAll('audio.media, video.media')[i].setAttribute(
                                                    'volume',
                                                    eval(document.querySelectorAll('audio.media, video.media')[i].getAttribute('volume'))
                                                );

                                        /* Logic
                                                If
                                                    the Media 'volume' attribute is a 'number'.
                                        */
                                        if (typeof parseFloat(document.querySelectorAll('audio.media, video.media')[i].getAttribute('volume')) === 'number') {
                                            /* Logic
                                                    If
                                                        the Media 'volume' attribute is greater than 1,

                                                    else if
                                                        the Media 'volume' attribute is less than 0.
                                            */
                                            if (parseFloat(document.querySelectorAll('audio.media, video.media')[i].getAttribute('volume')) > 1)
                                                document.querySelectorAll('audio.media, video.media')[i].setAttribute('volume', 1);

                                            else if (parseFloat(document.querySelectorAll('audio.media, video.media')[i].getAttribute('volume')) < 0)
                                                document.querySelectorAll('audio.media, video.media')[i].setAttribute('volume', 0);

                                            // Modification
                                                // Volume
                                                document.querySelectorAll('audio.media, video.media')[i].volume = parseFloat(document.querySelectorAll('audio.media, video.media')[i].getAttribute('volume'))
                                        }
                                    }

                            // [Previous Element Sibling]
                                // Play Button
                                    /* Logic
                                            If
                                                the Media is a <video>.
                                    */
                                    if (document.querySelectorAll('audio.media, video.media')[i].tagName === 'VIDEO')
                                        /* Logic
                                                If
                                                    the Media has the 'data-play-button' attribute
                                                        and
                                                    does not have a play button.
                                        */
                                        if (
                                            document.querySelectorAll('audio.media, video.media')[i].hasAttribute('data-play-button') &&
                                            !document.querySelectorAll('audio.media, video.media')[i]['LapysJS hasPlayButton']
                                        ) {
                                            // Adjacent Initialization
                                                // Play Button
                                                document.querySelectorAll('audio.media, video.media')[i].insertAdjacentHTML(
                                                    "beforebegin",

                                                    /* Play Button */
                                                    "<button class='media-play-button' data-id='playButton'> " +
                                                        (document.querySelectorAll('audio.media, video.media')[i].getAttribute("data-play-button-inner-html") || "<span> &blacktriangleright; </span>") +
                                                    " </button>"
                                                );

                                            // Modification
                                                // Media
                                                    // Play Button
                                                    document.querySelectorAll('audio.media, video.media')[i]['LapysJS playButton'] = document.querySelectorAll('audio.media, video.media')[i].previousElementSibling;

                                                // Event
                                                    // [Media]
                                                        // Mouse Up
                                                        document.querySelectorAll('audio.media, video.media')[i]['LapysJS playButton'].setEvent('mouseup', function playMedia() {
                                                            /* Logic
                                                                    If
                                                                        the respective Media is on "autoplay".
                                                            */
                                                            if (this.nextElementSibling.autoplay)
                                                                // Play
                                                                this.nextElementSibling.play();

                                                            else
                                                                // Pause
                                                                this.nextElementSibling['LapysJS togglePlayMode']();

                                                            // Style
                                                                // Display
                                                                this.style.display = 'none'
                                                        });

                                                        // Play & Playing
                                                        document.querySelectorAll('audio.media, video.media')[i].setEvent('play, playing', function clearPlayButton() {
                                                            // Style
                                                                // Display
                                                                this.previousElementSibling.style.display = 'none'
                                                        });

                                                /* Logic
                                                        If
                                                            the respective Media has the 'data-play-button-toggle' attribute.
                                                */
                                                if (document.querySelectorAll('audio.media, video.media')[i].hasAttribute('data-play-button-toggle'))
                                                    // Event
                                                        // Media
                                                            // Pause
                                                            document.querySelectorAll('audio.media, video.media')[i].setEvent('pause', function displayPlayButton() {
                                                                // Style
                                                                this['LapysJS playButton'].removeAttribute('style')
                                                            });

                                            // Modification
                                                // Media
                                                    // Has Play Button
                                                    document.querySelectorAll('audio.media, video.media')[i]['LapysJS hasPlayButton'] = true
                                        };

                            // Modification
                                // Information
                                document.querySelectorAll('audio.media, video.media')[i]['LapysJS information'] = {
                                    // Playing
                                    playing: false,

                                    // Speed
                                    speed: document.querySelectorAll('audio.media, video.media')[i].playbackRate,

                                    // Volume
                                    volume: document.querySelectorAll('audio.media, video.media')[i].volume
                                };

                                // Toggle
                                document.querySelectorAll('audio.media, video.media')[i]['LapysJS toggle'] = {
                                    // Play Mode
                                    playMode: ((i) => {
                                        /* Logic
                                                If
                                                    the Media is on "autoplay".
                                        */
                                        if (document.querySelectorAll('audio.media, video.media')[i].autoplay)
                                            // Return
                                            return false;

                                        else
                                            // Return
                                            return true
                                    })(i),

                                    // Screen Mode
                                    screenMode: false
                                };

                            // [Next Element Sibling]
                                // Console
                                    /* Logic
                                            If
                                                the Media has the 'data-controls' attribute
                                                    and
                                                the Media does not have a console.
                                    */
                                    if (
                                        document.querySelectorAll('audio.media, video.media')[i].hasAttribute('data-controls') &&
                                        !document.querySelectorAll('audio.media, video.media')[i].hasConsole
                                    ) {
                                        // Adjacent Initialization
                                            // Media Console
                                            document.querySelectorAll('audio.media, video.media')[i].insertAdjacentHTML("afterend", "<div class='media-console'> </div>");

                                        // Modification
                                            // Media
                                                // Console
                                                document.querySelectorAll('audio.media, video.media')[i]['LapysJS console'] = document.querySelectorAll('audio.media, video.media')[i].nextElementSibling;
                                                    // Media
                                                    document.querySelectorAll('audio.media, video.media')[i]['LapysJS console'].media = document.querySelectorAll('audio.media, video.media')[i];

                                        // Modification
                                            // Inner HTML
                                            document.querySelectorAll('audio.media, video.media')[i]['LapysJS console'].innerHTML = (
                                                /* Play Button */
                                                "\r\t<! -= 1 Play Button  -= 1>" +
                                                "\r\t<button class='button play-button' onmouseup='this.media[\"LapysJS togglePlayMode\"]()'>" +
                                                    (document.querySelectorAll('audio.media, video.media')[i].getAttribute("data-controls-play-button-inner-html") || "&blacktriangleright;") +
                                                "</button>" +

                                                /* Stop Button */
                                                "\n\r\t<! -= 1 Stop Button  -= 1>" +
                                                "\r\t<button class='button stop-button' onmouseup='this.media.load(); this.media[\"LapysJS toggle\"].playMode = true'>\r\t\t" +
                                                    (document.querySelectorAll('audio.media, video.media')[i].getAttribute("data-controls-stop-button-inner-html") || "<span style='zoom: 2'> &blacksquare; </span>") +
                                                " \r\t</button>" +

                                                /* Timeline */
                                                "\n\r\t<! -= 1 Timeline  -= 1>" +
                                                "\r\t<input " +
                                                    "\r\t\tclass='timeline' " +
                                                    "\r\t\tonchange='this.media[\"LapysJS seek\"](this)' " +
                                                    "\r\t\toninput='this.media[\"LapysJS seek\"](this)' " +
                                                    "\r\t\tmax='" + parseInt(document.querySelectorAll('audio.media, video.media')[i].duration) + "' " +
                                                    "\r\t\tmin='0' " +
                                                    "\r\t\ttype='range' " +
                                                    "\r\t\tvalue='0'>" +

                                                /* Mute Volume */
                                                "\n\r\t<! -= 1 Mute Volume  -= 1>" +
                                                "\r\t<button " +
                                                    "\r\t\tclass='button mute-button' " +
                                                    "\r\t\tonmouseup='" +
                                                        "\r\t\tif (!this.media[\"LapysJS toggle\"].volume)" +
                                                            "\r\t\t\tthis.media.volume = 0;" +

                                                        "\n\r\t\telse" +
                                                            "\r\t\t\tthis.media.volume = this.media[\"LapysJS information\"].volume;" +

                                                        "\n\r\t\tthis.media[\"LapysJS toggle\"].volume = !this.media[\"LapysJS toggle\"].volume" +
                                                    "'>\n\r\t\t" +
                                                        (document.querySelectorAll('audio.media, video.media')[i].getAttribute("data-controls-mute-button-inner-html") || "<span style='font-family: Webdings; line-height: 50%'> X </span>") +
                                                    "\r\t</button>" +

                                                    /* Volume Range */
                                                    "\n\r\t<! -= 1 Volume Range  -= 1>" +
                                                    "\r\t<input " +
                                                        "\r\t\tclass='volume-range' " +
                                                        "\r\t\tonchange='this.media[\"LapysJS setVolume'\"](this)' " +
                                                        "\r\t\toninput='this.media[\"LapysJS setVolume\"](this)' " +
                                                        "\r\t\tmax='100' " +
                                                        "\r\t\tmin='0' " +
                                                        "\r\t\ttype='range' " +
                                                        "\r\t\tvalue='" +
                                                            ((i) => {
                                                                /* Logic
                                                                        If
                                                                            the Media is muted.
                                                                */
                                                                if (document.querySelectorAll('audio.media, video.media')[i].muted)
                                                                    // Return
                                                                    return 0;

                                                                else
                                                                    // Return
                                                                    return parseInt(document.querySelectorAll('audio.media, video.media')[i].volume * 100)
                                                            })(i) +
                                                        "'>" +

                                                    /* Decrease Volume Button */
                                                    "\n\r\t<! -= 1 Decrease Volume Button  -= 1>" +
                                                    "\r\t<button class='button decrease-volume-button' onmouseup='this.media.volume -= 0.075'>\r\t\t" +
                                                        (document.querySelectorAll('audio.media, video.media')[i].getAttribute("data-controls-volume-decrease-button-inner-html") || "<span style='font-family: Webdings; line-height: 50%'> V </span>") +
                                                    "\r\t</button>" +

                                                    /* Increase Volume Button */
                                                    "\n\r\t<! -= 1 Increase Volume Button  -= 1>" +
                                                    "\r\t<button class='button increase-volume-button' onmouseup='this.media.volume += 0.075'>\r\t\t" +
                                                        (document.querySelectorAll('audio.media, video.media')[i].getAttribute("data-controls-volume-decrease-button-inner-html") || "<span style='font-family: Webdings; line-height: 50%'> U </span>") +
                                                    "\r\t</button>" +

                                                    /* Download Button */
                                                    "\n\r\t<! -= 1 Download Button  -= 1>" +
                                                    "\r\t<button class='button download-button'> " +
                                                        "\r\t\t<a download='" +
                                                            ((i) => {
                                                                // Return
                                                                return decodeURIComponent(
                                                                    document.querySelectorAll('audio.media, video.media')[i].currentSrc.slice(
                                                                        document.querySelectorAll('audio.media, video.media')[i].currentSrc.lastIndexOf('/') + '/'.length
                                                                    ) ||
                                                                    document.querySelectorAll('audio.media, video.media')[i].src.slice(
                                                                        document.querySelectorAll('audio.media, video.media')[i].src.lastIndexOf('/') + '/'.length
                                                                    )
                                                                )
                                                            })(i) +
                                                        "' " +
                                                            ((i) => {
                                                                /* Logic
                                                                        If
                                                                            the Media does not have a 'data-no-download' attribute.
                                                                */
                                                                if (!document.querySelectorAll('audio.media, video.media')[i].hasAttribute('data-no-download'))
                                                                    // Return
                                                                    return (`href='${(document.querySelectorAll('audio.media, video.media')[i].src || document.querySelectorAll('audio.media, video.media')[i].currentSrc)}'`);

                                                                else
                                                                    // Return
                                                                    return ""
                                                            })(i) +
                                                        ">\r\t\t\t" +
                                                            (document.querySelectorAll('audio.media, video.media')[i].getAttribute("data-controls-download-button-inner-html") || "<span style='font-family: Webdings; line-height: 50%'> 6 </span>") +
                                                        "\r\t\t</a>" +
                                                    "\r\t</button>" +

                                                    /* Fullscreen Button */
                                                    "\n\r\t<! -= 1 Fullscreen Button  -= 1>" +
                                                    "\r\t<button class='button fullscreen-button' onmouseup='this.media[\"LapysJS fullscreen\"]()'>" +
                                                        (document.querySelectorAll('audio.media, video.media')[i].getAttribute("data-controls-fullscreen-button-inner-html") || "&blacksquare;") +
                                                    "\r\t</button>" +

                                                    /* Playback Range */
                                                    "\n\r\t<! -= 1 Playback Range  -= 1>" +
                                                    "\r\t<input " +
                                                        "\r\t\tclass='playback-range' " +
                                                        "\r\t\tonchange='" +
                                                            "\r\t\tthis.media.playbackRate = (() => {" +
                                                                "\r\t\t\tif ((event.target || []).value >= 500)" +
                                                                    "\r\t\t\t\treturn parseFloat(((event.target || []).value - 500) / 50); " +

                                                                "\r\t\t\telse" +
                                                                    "\r\t\t\t\treturn -parseFloat(((event.target || []).value) / 100)" +
                                                            "\r\t\t})()" +
                                                        "' " +
                                                        "\r\t\toninput='" +
                                                            "\r\t\t(event.target || []).media.playbackRate = (() => {" +
                                                                "\r\t\t\tif ((event.target || []).value >= 500)" +
                                                                    "\r\t\t\t\treturn parseFloat(((event.target || []).value - 500) / 50); " +

                                                                "\r\t\t\telse" +
                                                                    "\r\t\t\t\treturn -parseFloat(((event.target || []).value) / 100)" +
                                                            "\r\t\t})()" +
                                                        "' " +
                                                        "\r\t\tmax='1000' " +
                                                        "\r\t\tmin='0' " +
                                                        "\r\t\ttype='range' " +
                                                        "\r\t\tvalue='" +
                                                            ((i) => {
                                                                /* Logic
                                                                        If
                                                                            the Media has a playback rate greater than 1
                                                                                or
                                                                            the Media has a playback rate equal to 1.
                                                                */
                                                                if (document.querySelectorAll('audio.media, video.media')[i].playbackRate >= 1)
                                                                    // Return
                                                                    return ((document.querySelectorAll('audio.media, video.media')[i].playbackRate * 50) + 500);

                                                                else
                                                                    // Return
                                                                    return Math.abs(document.querySelectorAll('audio.media, video.media')[i].playbackRate * 100)
                                                            })(i) +
                                                        "'>" +

                                                    /* Slow Playback Button */
                                                    "\n\r\t<! -= 1 Slow Playback Button  -= 1>" +
                                                    "\r\t<button class='button slow-playback-button' onmouseup='" +
                                                        "\r\t\tthis.media.playbackRate -= this.media.playbackRate / 2.5; " +
                                                        "\n\r\t\tif (this.media.playbackRate <= 0.027993599999999997)" +
                                                        "\r\t\t\tthis.media.playbackRate = 0.027993599999999997" +
                                                    "'>\r\t\t" +
                                                        (document.querySelectorAll('audio.media, video.media')[i].getAttribute("data-controls-slow-playback-button-inner-html") || "<span style='font-family: Webdings; line-height: 50%'> 3 </span>") +
                                                    "\r\t</button>" +

                                                    /* Fast Playback Button */
                                                    "\n\r\t<! -= 1 Fast Playback Button  -= 1>" +
                                                    "\r\t<button class='button fast-playback-button' onmouseup='" +
                                                        "\r\t\tthis.media.playbackRate += this.media.playbackRate / 2.5; " +
                                                        "\n\r\t\tif (this.media.playbackRate >= 10.5413504)" +
                                                        "\r\t\t\tthis.media.playbackRate = 10.5413504" +
                                                    "'>\r\t\t" +
                                                        (document.querySelectorAll('audio.media, video.media')[i].getAttribute("data-controls-fast-playback-button-inner-html") || "<span style='font-family: Webdings; line-height: 50%'> 4 </span>") +
                                                    "\r\t</button>" +

                                                    /* Playback Rate */
                                                    "\n\r\t<! -= 1 Playback Rate  -= 1>" +
                                                    "\r\t<div class='info playback-rate'> &times;1 </div>" +

                                                    /* Miscellaneous */
                                                        /* Loading Widget */
                                                        ((i) => {
                                                            /* Logic
                                                                    If
                                                                        the Media has the 'data-load' attribute.
                                                            */
                                                            if (document.querySelectorAll('audio.media, video.media')[i].hasAttribute('data-load'))
                                                                // Return
                                                                return (
                                                                    document.querySelectorAll('audio.media, video.media')[i].getAttribute('data-load') ||
                                                                    (
                                                                        "\n\r\t<! -= 1 Loading Widget  -= 1>" +
                                                                        `\r\t<div class='loader-widget misc' data-title='Loading, please wait…_center_top' style='margin-top: ${(document.querySelectorAll('audio.media, video.media')[i].getBoundingClientRect().top + (document.querySelectorAll('audio.media, video.media')[i].clientHeight / 2))}px'> </div>`
                                                                    )
                                                                );

                                                            else
                                                                // Return
                                                                return ''
                                                        })(i)
                                            );

                                        // Modification
                                            // Media
                                                // Console
                                                    // Media
                                                        // Children
                                                            /* Loop
                                                                    Index all Console child elements.
                                                            */
                                                            for (let j = 0; j < document.querySelectorAll('audio.media, video.media')[i]['LapysJS console'].querySelectorAll('*').length; j += 1) {
                                                                // Modification
                                                                    // Child Element
                                                                        // Console
                                                                        document.querySelectorAll('audio.media, video.media')[i]['LapysJS console'].querySelectorAll('*')[j]['LapysJS console'] = document.querySelectorAll('audio.media, video.media')[i]['LapysJS console'];

                                                                        // Media
                                                                        document.querySelectorAll('audio.media, video.media')[i]['LapysJS console'].querySelectorAll('*')[j].media = document.querySelectorAll('audio.media, video.media')[i]
                                                            };

                                        // Event
                                            // Set Interval
                                            setInterval(() => {
                                                /* Loop
                                                        Index all Media.
                                                */
                                                for (let i = 0; i < document.querySelectorAll('audio.media, video.media').length; i += 1) {
                                                    // Media
                                                        // Children
                                                            // Modification
                                                                // Playback Range
                                                                    // Value
                                                                        /* Logic
                                                                                If
                                                                                    the Media Console Playback Range has a value greater than 500
                                                                                        or
                                                                                    the Media Console Playback Range has a value equal to 500.
                                                                        */
                                                                        if (document.querySelectorAll('audio.media, video.media')[i]['LapysJS console'].querySelector('input.playback-range').value >= 500) {
                                                                            document.querySelectorAll('audio.media, video.media')[i]['LapysJS console'].querySelector('input.playback-range').value = (document.querySelectorAll('audio.media, video.media')[i].playbackRate * 50) + 500;
                                                                            document.querySelectorAll('audio.media, video.media')[i]['LapysJS console'].querySelector('input.playback-range').setAttribute('value', ((document.querySelectorAll('audio.media, video.media')[i].playbackRate * 50) + 500))
                                                                        }

                                                                        else {
                                                                            document.querySelectorAll('audio.media, video.media')[i]['LapysJS console'].querySelector('input.playback-range').value = Math.abs(document.querySelectorAll('audio.media, video.media')[i].playbackRate * 100);
                                                                            document.querySelectorAll('audio.media, video.media')[i]['LapysJS console'].querySelector('input.playback-range').setAttribute('value', Math.abs(document.querySelectorAll('audio.media, video.media')[i].playbackRate * 100))
                                                                        };

                                                                // Playback Rate
                                                                    // Inner HTML
                                                                    document.querySelectorAll('audio.media, video.media')[i]['LapysJS console'].querySelector('div.playback-rate').innerHTML = ` &times;${String(document.querySelectorAll('audio.media, video.media')[i].playbackRate).slice(0, 4)} `;

                                                                // Timeline
                                                                    // Maximum
                                                                    document.querySelectorAll('audio.media, video.media')[i]['LapysJS console'].querySelector('input.timeline').max = parseInt(document.querySelectorAll('audio.media, video.media')[i].duration);

                                                                    // Value
                                                                    document.querySelectorAll('audio.media, video.media')[i]['LapysJS console'].querySelector('input.timeline').value = parseInt(document.querySelectorAll('audio.media, video.media')[i].currentTime);
                                                                    document.querySelectorAll('audio.media, video.media')[i]['LapysJS console'].querySelector('input.timeline').setAttribute('value', parseInt(document.querySelectorAll('audio.media, video.media')[i].currentTime));

                                                                // Volume Range
                                                                    // Value
                                                                    document.querySelectorAll('audio.media, video.media')[i]['LapysJS console'].querySelector('input.volume-range').value = parseInt(document.querySelectorAll('audio.media, video.media')[i].volume * 100);
                                                                    document.querySelectorAll('audio.media, video.media')[i]['LapysJS console'].querySelector('input.volume-range').setAttribute('value', parseInt(document.querySelectorAll('audio.media, video.media')[i].volume * 100))
                                                }
                                            }, 100)
                                    };

                                    // Modification
                                        // Has Console
                                        document.querySelectorAll('audio.media, video.media')[i].hasConsole = true;

                            // Function
                                // Fullscreen
                                document.querySelectorAll('audio.media, video.media')[i].constructor.prototype['LapysJS fullscreen'] = function fullscreen() {
                                    /* Logic
                                            If
                                                the Target is a <video>.
                                    */
                                    if (this.tagName === 'VIDEO') {
                                        // Toggle
                                        if (!this['LapysJS toggle'].screenMode)
                                            /* Logic
                                                    If
                                                        'requestFullscreen' exists,

                                                    else if
                                                        'mozRequestFullScreen' exists,

                                                    else if
                                                        'webkitRequestFullScreen' exists,

                                                    else if
                                                        'msRequestFullscreen' exists.
                                            */
                                            if (this.requestFullscreen)
                                                // Request Fullscreen
                                                this.requestFullscreen();

                                            else if (this.mozRequestFullScreen)
                                                // -moz- Request Fullscreen
                                                this.mozRequestFullScreen();

                                            else if (this.webkitRequestFullScreen)
                                                // -webkit- Request Fullscreen
                                                this.webkitRequestFullScreen();

                                            else if (this.msRequestFullscreen)
                                                // -ms- Request Fullscreen
                                                this.msRequestFullscreen();

                                            else {
                                                /* Do nothing… */
                                            }

                                        else
                                            /* Logic
                                                    If
                                                        'exitFullscreen' exists,

                                                    else if
                                                        'mozExitFullScreen' exists,

                                                    else if
                                                        'webkitExitFullscreen' exists,

                                                    else if
                                                        'msExitFullscreen' exists.
                                            */
                                            if (this.exitFullscreen)
                                                // Exit Fullscreen
                                                this.exitFullscreen();

                                            else if (this.mozExitFullScreen)
                                                // -moz- Exit Fullscreen
                                                this.mozCancelFullScreen();

                                            else if (this.webkitExitFullscreen)
                                                // -webkit- Exit Fullscreen
                                                this.webkitExitFullscreen();

                                            else if (this.msExitFullscreen)
                                                // -ms- Exit Fullscreen
                                                this.msExitFullscreen();

                                        this['LapysJS toggle'].screenMode = !this['LapysJS toggle'].screenMode
                                    }
                                };

                                // Seek
                                document.querySelectorAll('audio.media, video.media')[i].constructor.prototype['LapysJS seek'] = function seek(range) {
                                    // Modification
                                        // Current Time
                                        this.currentTime = range.value;

                                        // [Range]
                                            // Value
                                            range.value = this.currentTime;
                                            range.setAttribute('value', this.currentTime)
                                };

                                // Set Volume
                                document.querySelectorAll('audio.media, video.media')[i].constructor.prototype['LapysJS setVolume'] = function setVolume(range) {
                                    // Modification
                                        // Volume
                                        this.volume = range.value / 100;

                                        // Information > Volume
                                        this['LapysJS information'].volume = this.volume;

                                        // [Range]
                                            // Value
                                            range.value = this.volume * 100;
                                            range.setAttribute('value', (this.volume * 100))
                                };

                                // Toggle Play Mode
                                document.querySelectorAll('audio.media, video.media')[i].constructor.prototype['LapysJS togglePlayMode'] = function togglePlayMode() {
                                    // Toggle
                                    if (!this['LapysJS toggle'].playMode) {
                                        // Pause
                                        this.pause();

                                        /* Logic
                                                If
                                                    the Media has a console.
                                        */
                                        if (this.hasConsole)
                                            // Media Console
                                                // Play Button
                                                    // Modification
                                                        // Inner HTML
                                                        ((this.nextElementSibling || document.createElement('a')).querySelector('.play-button') || document.createElement('a')).innerHTML = this.getAttribute('data-controls-pause-button-inner-html') || this.getAttribute('data-controls-play-button-inner-html') || '&blacktriangleright;'
                                    }

                                    else {
                                        // Play
                                        this.play();

                                        /* Logic
                                                If
                                                    the Media has a console.
                                        */
                                        if (this.hasConsole)
                                            // Media Console
                                                // Play Button
                                                    // Modification
                                                        // Inner HTML
                                                        ((this.nextElementSibling || document.createElement('a')).querySelector('.play-button') || document.createElement('a')).innerHTML = this.getAttribute('data-controls-play-button-inner-html') || '&blacktriangleright;'
                                    };

                                    this['LapysJS toggle'].playMode = !this['LapysJS toggle'].playMode
                                };

                            // Event
                                // Set Timeout
                                setTimeout(() => {
                                    /* Loop
                                            Index all Media
                                    */
                                    for (let j = 0; j < document.querySelectorAll('audio.media, video.media').length; j += 1) {
                                        // Double Click
                                        document.querySelectorAll('audio.media, video.media')[j].setEvent('dblclick', function expandScreen() {
                                            // Function
                                                // Target
                                                    // Fullscreen
                                                    this['LapysJS fullscreen']()
                                        });

                                        // Ended
                                        document.querySelectorAll('audio.media, video.media')[j].setEvent('ended', function togglePlayMode() {
                                            // Modification
                                                // Target
                                                    // Toggle > Play Mode
                                                    this['LapysJS toggle'].playMode = !this['LapysJS toggle'].playMode
                                        });

                                        // Loaded Data, Pause, Play
                                        document.querySelectorAll('audio.media, video.media')[j].setEvent('loadeddata, pause, play', function clearLoaderWidget() {
                                            // Modification
                                                // Target
                                                    // Data Hidden
                                                    (this['LapysJS console'].querySelector('.loader-widget') || document.createElement('a')).setAttribute('data-hidden', '');

                                                    // Data Title
                                                    (this.getAttribute('data-load') === '') || (this['LapysJS console'].querySelector('.loader-widget') || document.createElement('a')).removeAttribute('data-title', '')
                                        });

                                        // Mouse Up
                                        document.querySelectorAll('audio.media, video.media')[j].setEvent('mouseup', function togglePlayMode() {
                                            // Function
                                                // Target
                                                    // Toggle Play Mode
                                                    this['LapysJS togglePlayMode']()
                                        });

                                        // Pause
                                        document.querySelectorAll('audio.media, video.media')[j].setEvent('pause', function togglePlaying() {
                                            // Modification
                                                // Target
                                                    // Information > Playing
                                                    this['LapysJS information'].playing = false
                                        });

                                        // Play
                                        document.querySelectorAll('audio.media, video.media')[j].setEvent('play', function togglePlaying() {
                                            // Modification
                                                // Target
                                                    // Information > Playing
                                                    this['LapysJS information'].playing = true
                                        });

                                        // Volume Change
                                        document.querySelectorAll('audio.media, video.media')[j].setEvent('volumechange', function changeVolume() {
                                            // Modification
                                                // Target
                                                    // Muted
                                                        /* Logic
                                                                If
                                                                    the Target"s 'volume' is not 0.
                                                        */
                                                        if (this.volume !== 0) {
                                                            this.muted = false;
                                                            this.removeAttribute('muted')
                                                        }

                                                        else {
                                                            this.muted = true;
                                                            this.setAttribute('muted', '')
                                                        }
                                        })
                                    }
                                })
                        };

                    // Placeholder
                        /* Loop
                                Index all Placeholder Elements
                        */
                        for (let i = 0; i < document.querySelectorAll('input[data-placeholder], textarea[data-placeholder]').length; i += 1) {
                            /* Logic
                                    If
                                        the Placeholder Element "has a placeholder already".
                            */
                            if (!document.querySelectorAll('input[data-placeholder], textarea[data-placeholder]')[i].hasPlaceholder) {
                                // Adjacent Initialization
                                document.querySelectorAll("input[data-placeholder], textarea[data-placeholder]")[i].insertAdjacentHTML(
                                    "beforebegin",

                                    /* Placeholder */
                                    "<label data-id='placeholder'" +
                                        ((i) => {
                                            /* Logic
                                                    If
                                                        the Placeholder Element has an ID.
                                            */
                                            if (document.querySelectorAll('input[data-placeholder], textarea[data-placeholder]')[i].hasAttribute('id'))
                                                // Return
                                                return ` for='${document.querySelectorAll("input[data-placeholder], textarea[data-placeholder]")[i].id}'`;

                                            else
                                                // Return
                                                return ""
                                        })(i) +
                                    "> " +
                                        document.querySelectorAll("input[data-placeholder], textarea[data-placeholder]")[i].getAttribute("data-placeholder") +
                                    " </label>"
                                );

                                // Modification
                                    // Placeholder Element
                                        // Has Placeholder
                                        document.querySelectorAll('input[data-placeholder], textarea[data-placeholder]')[i].hasPlaceholder = true;

                                        // Placeholder Element
                                        document.querySelectorAll('input[data-placeholder], textarea[data-placeholder]')[i].placeholderElement = document.querySelectorAll('input[data-placeholder], textarea[data-placeholder]')[i].previousElementSibling;

                                // Events
                                    // Placeholder Element
                                        // Blur
                                        document.querySelectorAll('input[data-placeholder], textarea[data-placeholder]')[i].setEvent('blur', () => {
                                            // Modification
                                                // [This]
                                                    // Data Selected
                                                    (
                                                        document.querySelector(`label[data-id='placeholder'][for='${this.id}']`) ||
                                                        this.previousElementSibling
                                                    ).removeAttribute("data-selected")
                                        });

                                        // Focus
                                        document.querySelectorAll('input[data-placeholder], textarea[data-placeholder]')[i].setEvent('focus', () => {
                                            // Modification
                                                // [This]
                                                    // Data Selected
                                                    (
                                                        document.querySelector(`label[data-id='placeholder'][for='${this.id}']`) ||
                                                        this.previousElementSibling
                                                    ).setAttribute("data-selected", "")
                                        });

                                // Set Interval
                                setInterval(() => {
                                    /* Loop
                                            Index all Placeholder Elements.
                                    */
                                    for (let i = 0; i < document.querySelectorAll('input[data-placeholder], textarea[data-placeholder]').length; i += 1) {
                                        /* Logic
                                                If
                                                    the Target"s 'value' is not "empty"
                                                        and
                                                    its Placeholder is not "selected".
                                        */
                                        if (
                                            !!document.querySelectorAll('input[data-placeholder], textarea[data-placeholder]')[i].value &&
                                            !(
                                                document.querySelector(`label[data-id='placeholder'][for='${document.querySelectorAll('input[data-placeholder], textarea[data-placeholder]')[i].id}']`) ||
                                                document.querySelectorAll('input[data-placeholder], textarea[data-placeholder]')[i].previousElementSibling
                                            ).hasAttribute('data-selected')
                                        )
                                            // Modification
                                                // [This]
                                                    // Data Input
                                                    (
                                                        document.querySelector(`label[data-id='placeholder'][for='${document.querySelectorAll('input[data-placeholder], textarea[data-placeholder]')[i].id}']`) ||
                                                        document.querySelectorAll('input[data-placeholder], textarea[data-placeholder]')[i].previousElementSibling
                                                    ).setAttribute("data-input", "true");

                                        else
                                            // Modification
                                                // [This]
                                                    // Data Input
                                                    (
                                                        document.querySelector(`label[data-id='placeholder'][for='${document.querySelectorAll('input[data-placeholder], textarea[data-placeholder]')[i].id}']`) ||
                                                        document.querySelectorAll('input[data-placeholder], textarea[data-placeholder]')[i].previousElementSibling
                                                    ).removeAttribute("data-input")
                                    }
                                }, 100)
                            }
                        };

                    // Screen Tip
                        // Definition
                        (!window.customElements || (document.createElement('screen-tip').constructor !== HTMLElement) || customElements.define('screen-tip', class HTMLScreenTipElement extends HTMLElement {}));

                        // Initialization
                        screen.tip = document.createElement('screen-tip');

                        // Insertion
                        document.body.appendChild(screen.tip);

                        // Deletion
                        (document.getElementsByTagName('screen-tip')[1] || document.createElement('a')).remove();

                        // Modification
                            // ID
                            screen.tip.id = 'screentip';

                            // Hidden
                            screen.tip.setAttribute('data-hidden', '');

                        /* Loop
                                Index all "Screen Tipped" elements.
                        */
                        for (let i = 0; i < document.querySelectorAll("[data-title]:not([data-title*='_hidden'])").length; i += 1) {
                            // Events
                                // Mouse Leave
                                document.querySelectorAll("[data-title]:not([data-title*='_hidden'])")[i].setEvent(
                                    'mouseleave, mouseout',

                                    function clearScreenTip() {
                                            // Update
                                                // Screentip
                                                screen.tip = document.querySelector('screen-tip#screentip');

                                            // Modification
                                                // Target
                                                    // [Formerly] Required
                                                        /* Logic
                                                                If
                                                                    the Target has the 'formerlyRequired' property.
                                                        */
                                                        if (this.formerlyRequired) {
                                                            this.formerlyRequired = false;
                                                            this.required = true
                                                        }

                                                    // [Formerly] Title
                                                        /* Logic
                                                                If
                                                                    the Target has the 'formerlyTitled' property.
                                                        */
                                                        if (this.formerlyTitled) {
                                                            this.setAttribute('title', this.formerlyTitled);
                                                            this.formerlyTitled = false
                                                        }

                                            // Modification
                                                // Class
                                                screen.tip.removeAttribute('class');

                                                // Data Hidden
                                                screen.tip.setAttribute('data-hidden', '');

                                                // Style
                                                screen.tip.removeAttribute('style');

                                            // Style
                                                // Left
                                                screen.tip.style.left = `${((screen.tip.margin || document.createElement('a')).left + (screen.tip.position || document.createElement('a')).left)}px`;

                                                // Top
                                                screen.tip.style.top = `${((screen.tip.margin || document.createElement('a')).top + (screen.tip.position || document.createElement('a')).top)}px`
                                    }
                                );

                                // Mouse Enter, Mouse Over
                                document.querySelectorAll("[data-title]:not([data-title*='_hidden'])")[i].setEvent(
                                    'mouseenter, mouseover',

                                    function displayScreenTip() {
                                            // Update
                                                // Screentip
                                                screen.tip = document.querySelector('screen-tip#screentip');

                                            // Modification
                                                // Target
                                                    // [Formerly] Required
                                                        /* Logic
                                                                If
                                                                    the Target has the 'required' attribute.
                                                        */
                                                        if (this.hasAttribute('required')) {
                                                            this.formerlyRequired = true;
                                                            this.required = false
                                                        };

                                                    // [Formerly] Title
                                                        /* Logic
                                                                If
                                                                    the Target has the 'title' attribute.
                                                        */
                                                        if (this.hasAttribute('title')) {
                                                            this.formerlyTitled = this.title;
                                                            this.removeAttribute('title')
                                                        }

                                            // Initialization
                                                // Target
                                                let that = this || screen.tip;

                                                // X, Y
                                                let X = event.clientX,
                                                    Y = event.clientY;

                                            // Modification
                                                // Class
                                                screen.tip.className = that.getAttribute('data-title-class') || '';

                                                // Inner HTML
                                                    /* Logic
                                                            If
                                                                the Target"s 'data-title' attribute has a '_' character.
                                                    */
                                                    if (that.getAttribute('data-title').indexOf('_') > -1)
                                                        screen.tip.innerHTML = that.getAttribute('data-title').slice(0, that.getAttribute('data-title').indexOf('_'));

                                                    else
                                                        screen.tip.innerHTML = that.getAttribute('data-title');

                                                // Style
                                                screen.tip.style = that.getAttribute('data-title-style') || '';

                                            /* Set Timeout
                                                    --- NOTE ---
                                                        This function runs after the Screentip"s CSS animation or transition delay.
                                            */
                                            setTimeout(
                                                () => {
                                                    // Modification
                                                        // Hidden
                                                        screen.tip.removeAttribute('data-hidden');

                                                    // Initialization
                                                        // Screentip Margin
                                                        screen.tip.margin = {
                                                            // Left
                                                            left: 0,

                                                            // Top
                                                            top: 0
                                                        };
                                                            // Screentip Margin Former
                                                                // Left
                                                                let screenTipMarginLeft = 0;

                                                                // Top
                                                                let screenTipMarginTop = 0;

                                                        // Screentip Position
                                                        screen.tip.position = {
                                                            // Left
                                                            left: 0,

                                                            // Top
                                                            top: 0
                                                        };

                                                    // Update
                                                        // Screentip Margin > Left
                                                        screen.tip.margin.left = that.getBoundingClientRect().width * (5 / 100);

                                                        // Screentip Margin > Top
                                                        screen.tip.margin.top = that.getBoundingClientRect().height * (5 / 100);

                                                        // Screentip Position > Left
                                                        screen.tip.position.left = X || 0;

                                                        // Screentip Position > Top
                                                        screen.tip.position.top = Y || 0;

                                                        /* Logic
                                                                [if:else if:else statement]
                                                        */
                                                            // Bottom
                                                            if (that.getAttribute('data-title').slice(that.getAttribute('data-title').indexOf('_')) === '_bottom') {
                                                                // Screentip Margin > Left
                                                                screen.tip.margin.left = that.getBoundingClientRect().width * (5 / 100);

                                                                // Screentip Margin > Top
                                                                screen.tip.margin.top = that.getBoundingClientRect().height * (5 / 100);

                                                                // Screentip Position > Top
                                                                screen.tip.position.top = that.getBoundingClientRect().bottom
                                                            }
                                                                // Bottom Center
                                                                else if (
                                                                    that.getAttribute('data-title').slice(that.getAttribute('data-title').indexOf('_')) === '_bottom_center' ||
                                                                    that.getAttribute('data-title').slice(that.getAttribute('data-title').indexOf('_')) === '_center_bottom'
                                                                ) {
                                                                    // Screentip Margin > Left
                                                                    screen.tip.margin.left = 0;

                                                                    // Screentip Margin > Top
                                                                    screen.tip.margin.top = that.getBoundingClientRect().height * (5 / 100);

                                                                    // Screentip Position > Left
                                                                    screen.tip.position.left = (that.getBoundingClientRect().left + (that.clientWidth / 2)) - (screen.tip.clientWidth / 2);

                                                                    // Screentip Position > Top
                                                                    screen.tip.position.top = that.getBoundingClientRect().bottom
                                                                }

                                                                // Bottom Left
                                                                else if (
                                                                    that.getAttribute('data-title').slice(that.getAttribute('data-title').indexOf('_')) === '_bottom_left' ||
                                                                    that.getAttribute('data-title').slice(that.getAttribute('data-title').indexOf('_')) === '_left_bottom'
                                                                ) {
                                                                    // Screentip Margin > Left
                                                                    screen.tip.margin.left = -that.getBoundingClientRect().width * (5 / 100);

                                                                    // Screentip Margin > Top
                                                                    screen.tip.margin.top = that.getBoundingClientRect().height * (5 / 100);

                                                                    // Screentip Position > Left
                                                                    screen.tip.position.left = that.getBoundingClientRect().left;

                                                                    // Screentip Position > Top
                                                                    screen.tip.position.top = that.getBoundingClientRect().bottom
                                                                }

                                                                // Bottom Right
                                                                else if (
                                                                    that.getAttribute('data-title').slice(that.getAttribute('data-title').indexOf('_')) === '_bottom_right' ||
                                                                    that.getAttribute('data-title').slice(that.getAttribute('data-title').indexOf('_')) === '_right_bottom'
                                                                ) {
                                                                    // Screentip Position > Left
                                                                    screen.tip.position.left = that.getBoundingClientRect().right;

                                                                    // Screentip Margin > Top
                                                                    screen.tip.margin.top = that.getBoundingClientRect().height * (5 / 100);

                                                                    // Screentip Position > Top
                                                                    screen.tip.position.top = that.getBoundingClientRect().bottom
                                                                }

                                                            // Center
                                                            else if (that.getAttribute('data-title').slice(that.getAttribute('data-title').indexOf('_')) === '_center') {
                                                                // Screentip Margin > Left
                                                                screen.tip.margin.left = 0;

                                                                // Screentip Margin > Top
                                                                screen.tip.margin.top = 0;

                                                                // Screentip Position > Left
                                                                screen.tip.position.left = (that.getBoundingClientRect().left + (that.clientWidth / 2)) - (screen.tip.clientWidth / 2);

                                                                // Screentip Position > Top
                                                                screen.tip.position.top = (that.getBoundingClientRect().top + (that.clientHeight / 2)) - (screen.tip.clientHeight / 2)
                                                            }
                                                                // Center Left
                                                                else if (
                                                                    that.getAttribute('data-title').slice(that.getAttribute('data-title').indexOf('_')) === '_center_left' ||
                                                                    that.getAttribute('data-title').slice(that.getAttribute('data-title').indexOf('_')) === '_left_center'
                                                                ) {
                                                                    // Screentip Margin > Left
                                                                    screen.tip.margin.left = -that.getBoundingClientRect().width * (5 / 100);

                                                                    // Screentip Margin > Top
                                                                    screen.tip.margin.top = 0;

                                                                    // Screentip Position > Left
                                                                    screen.tip.position.left = that.getBoundingClientRect().left;

                                                                    // Screentip Position > Top
                                                                    screen.tip.position.top = (that.getBoundingClientRect().top + (that.clientHeight / 2)) - (screen.tip.clientHeight / 2)
                                                                }

                                                                // Center Right
                                                                else if (
                                                                    that.getAttribute('data-title').slice(that.getAttribute('data-title').indexOf('_')) === '_center_right' ||
                                                                    that.getAttribute('data-title').slice(that.getAttribute('data-title').indexOf('_')) === '_right_center'
                                                                ) {
                                                                    // Screentip Margin > Left
                                                                    screen.tip.margin.left = that.getBoundingClientRect().width * (5 / 100);

                                                                    // Screentip Margin > Top
                                                                    screen.tip.margin.top = 0;

                                                                    // Screentip Position > Left
                                                                    screen.tip.position.left = that.getBoundingClientRect().right;

                                                                    // Screentip Position > Top
                                                                    screen.tip.position.top = (that.getBoundingClientRect().top + (that.clientHeight / 2)) - (screen.tip.clientHeight / 2)
                                                                }

                                                            // Top
                                                            else if (that.getAttribute('data-title').slice(that.getAttribute('data-title').indexOf('_')) === '_top') {
                                                                // Screentip Margin > Left
                                                                screen.tip.margin.left = that.getBoundingClientRect().width * (5 / 100);

                                                                // Screentip Margin > Top
                                                                screen.tip.margin.top = -that.getBoundingClientRect().height * (5 / 100);

                                                                // Screentip Position > Top
                                                                screen.tip.position.top = that.getBoundingClientRect().top
                                                            }
                                                                // Top Center
                                                                else if (
                                                                    that.getAttribute('data-title').slice(that.getAttribute('data-title').indexOf('_')) === '_top_center' ||
                                                                    that.getAttribute('data-title').slice(that.getAttribute('data-title').indexOf('_')) === '_center_top'
                                                                ) {
                                                                    // Screentip Margin > Left
                                                                    screen.tip.margin.left = 0;

                                                                    // Screentip Margin > Top
                                                                    screen.tip.margin.top = -that.getBoundingClientRect().height * (5 / 100);

                                                                    // Screentip Position > Left
                                                                    screen.tip.position.left = (that.getBoundingClientRect().left + (that.clientWidth / 2)) - (screen.tip.clientWidth / 2);

                                                                    // Screentip Position > Top
                                                                    screen.tip.position.top = that.getBoundingClientRect().top
                                                                }

                                                                // Top Left
                                                                else if (
                                                                    that.getAttribute('data-title').slice(that.getAttribute('data-title').indexOf('_')) === '_top_left' ||
                                                                    that.getAttribute('data-title').slice(that.getAttribute('data-title').indexOf('_')) === '_left_top'
                                                                ) {
                                                                    // Screentip Margin > Left
                                                                    screen.tip.margin.left = -that.getBoundingClientRect().width * (5 / 100);

                                                                    // Screentip Margin > Top
                                                                    screen.tip.margin.top = that.getBoundingClientRect().height * (5 / 100);

                                                                    // Screentip Position > Left
                                                                    screen.tip.position.left = that.getBoundingClientRect().left;

                                                                    // Screentip Position > Top
                                                                    screen.tip.position.top = that.getBoundingClientRect().top
                                                                }

                                                                // Top Right
                                                                else if (
                                                                    that.getAttribute('data-title').slice(that.getAttribute('data-title').indexOf('_')) === '_top_right' ||
                                                                    that.getAttribute('data-title').slice(that.getAttribute('data-title').indexOf('_')) === '_right_top'
                                                                ) {
                                                                    // Screentip Margin > Left
                                                                    screen.tip.margin.left = that.getBoundingClientRect().width * (5 / 100);

                                                                    // Screentip Margin > Top
                                                                    screen.tip.margin.top = that.getBoundingClientRect().height * (5 / 100);

                                                                    // Screentip Position > Left
                                                                    screen.tip.position.left = that.getBoundingClientRect().right;

                                                                    // Screentip Position > Top
                                                                    screen.tip.position.top = that.getBoundingClientRect().top
                                                                };

                                                    // Style
                                                        // Left
                                                        screen.tip.style.left = `${screen.tip.margin.left + screen.tip.position.left + parseFloat((Math.random()).toFixed(2))}px`;

                                                        // Top
                                                        screen.tip.style.top = `${screen.tip.margin.top + screen.tip.position.top + parseFloat((Math.random()).toFixed(2))}px`
                                                },

                                                (() => {
                                                    // Initialization
                                                        // Delay
                                                        let delay = 0;

                                                    /* Loop
                                                            Index the Screentip"s CSS 'animation-delay' as an array.
                                                    */
                                                    for (let k = 0; k < screen.tip.getCSS('animation-delay').replace(/ms|s| /g, '').replace(/0\./g, '.').split(/,/g).length; k += 1)
                                                        // Update
                                                        delay += parseFloat(screen.tip.getCSS('animation-delay').replace(/ms|s| /g, '').replace(/0\./g, '.').split(/,/g)[k]);

                                                    /* Loop
                                                            Index the Screentip"s CSS 'animation-duration' as an array.
                                                    */
                                                    for (let k = 0; k < screen.tip.getCSS('animation-duration').replace(/ms|s| /g, '').replace(/0\./g, '.').split(/,/g).length; k += 1)
                                                        // Update
                                                        delay += parseFloat(screen.tip.getCSS('animation-duration').replace(/ms|s| /g, '').replace(/0\./g, '.').split(/,/g)[k]);

                                                    /* Loop
                                                            Index the Screentip"s CSS 'transition-delay' as an array.
                                                    */
                                                    for (let k = 0; k < screen.tip.getCSS('transition-delay').replace(/ms|s| /g, '').replace(/0\./g, '.').split(/,/g).length; k += 1)
                                                        // Update
                                                        delay += parseFloat(screen.tip.getCSS('transition-delay').replace(/ms|s| /g, '').replace(/0\./g, '.').split(/,/g)[k]);

                                                    /* Loop
                                                            Index the Screentip"s CSS 'transition-duration' as an array.
                                                    */
                                                    for (let k = 0; k < screen.tip.getCSS('transition-duration').replace(/ms|s| /g, '').replace(/0\./g, '.').split(/,/g).length; k += 1)
                                                        // Update
                                                        delay += parseFloat(screen.tip.getCSS('transition-duration').replace(/ms|s| /g, '').replace(/0\./g, '.').split(/,/g)[k]);

                                                    // Return
                                                    return ((delay * 1000) + 100) || 0
                                                })()
                                            )
                                    }
                                )
                        };

                    // Select Box
                        /* Loop
                                Index all Select Boxes.
                        */
                        for (let i = 0; i < document.querySelectorAll('input.select-box').length; i += 1)
                            /* Logic
                                    If
                                        the Select Box has the 'data-id' attribute.
                            */
                            if (document.querySelectorAll('input.select-box')[i].hasAttribute('data-id')) {
                                /* Logic
                                        If
                                            the Select Box has its respective Option Box.
                                */
                                if (document.querySelectorAll(`input.select-box[data-id='${document.querySelectorAll("input.select-box")[i].getAttribute("data-id")}']`).length === document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[i].getAttribute("data-id")}']:not(input)`).length) {
                                    // Option Box
                                        // Hide
                                        document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[i].getAttribute("data-id")}']`)[1].hide();

                                        // Style
                                            // Width
                                                /* Logic
                                                        If
                                                            the Option Box has the 'w_match-parent' class.
                                                */
                                                if (document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[i].getAttribute("data-id")}']`)[1].hasClass('w_match-parent'))
                                                    // Set Interval
                                                    setInterval(() => {
                                                        /* Loop
                                                                Index all Select Boxes.
                                                        */
                                                        for (let i = 0; i < document.querySelectorAll('input.select-box').length; i += 1)
                                                            // Style
                                                                // Select Box
                                                                    // Width
                                                                    document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[i].getAttribute("data-id")}']`)[1].style.width = `${document.querySelectorAll('input.select-box')[i].clientWidth}px`
                                                    }, 100);

                                    // Events
                                        // Select Box
                                            // Mouse Up
                                            document.querySelectorAll('input.select-box')[i].setEvent('mouseup', function displayOptionBox() {
                                                // Option Box
                                                    // Show
                                                    document.querySelectorAll(`[data-id='${this.getAttribute("data-id")}']`)[1].show()
                                            });

                                    // Option Box
                                        // Children
                                            /* Loop
                                                    Index all Option Box child elements.
                                            */
                                            for (let j = 0; j < document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[i].getAttribute("data-id")}']`)[1].children.length; j += 1) {
                                                /* Logic
                                                        If
                                                            the element does not have the 'data-value' attribute.
                                                */
                                                if (!document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[i].getAttribute("data-id")}']`)[1].children[j].hasAttribute("data-value"))
                                                    // Child Element
                                                        // Modification
                                                            // Data Value
                                                            document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[i].getAttribute("data-id")}']`)[1].children[j].setAttribute(
                                                                "data-value",
                                                                document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[i].getAttribute("data-id")}']`)[1].children[j].innerHTML
                                                            );

                                                        // Event
                                                            // Mouse Up
                                                            document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[i].getAttribute("data-id")}']`)[1].children[j].setEvent('mouseup', function clearOptionBox() {
                                                                // Initialization
                                                                    // Target
                                                                    let that = this;

                                                                // Modification
                                                                    // Option Box
                                                                        // Children
                                                                            /* Loop
                                                                                    Index all Option Box child elements.
                                                                            */
                                                                            for (let j = 0; j < (this.parentElement || this.parentNode).children.length; j += 1)
                                                                                // Data Selected
                                                                                (this.parentElement || this.parentNode).children[j].removeAttribute('data-selected');

                                                                            // Data Selected
                                                                            this.setAttribute('data-selected', '');

                                                                // Set Timeout
                                                                setTimeout(() => {
                                                                    // Option Box
                                                                        // Hide
                                                                        (that.parentElement || that.parentNode).hide()
                                                                }, 100)
                                                            });

                                                            // [Data Option Event Type] | Mouse Up
                                                            document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[i].getAttribute("data-id")}']`)[1].children[j].setEvent(
                                                                (document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[i].getAttribute("data-id")}']`)[1].getAttribute("data-option-event-type") || "mouseup"),

                                                                function changeSelectBoxValue() {
                                                                    // Modification
                                                                        // Select Box
                                                                            // Value
                                                                            document.querySelector(`input.select-box[data-id='${(this.parentElement || this.parentNode).getAttribute('data-id')}']`).value = this.getAttribute("data-value") || this.innerHTML
                                                                }
                                                            )
                                    }
                                }
                            };

                    // Toast
                        // Definition
                        (!window.customElements || (document.createElement('screen-toast').constructor !== HTMLElement) || customElements.define('screen-toast', class HTMLScreenToastElement extends HTMLElement {}));

                        // Initialization
                        screen.toast = document.createElement('screen-toast');

                        // Insertion
                        document.body.appendChild(screen.toast);

                        // Deletion
                        !(document.getElementsByTagName('screen-toast')[1]) || document.getElementsByTagName('screen-toast')[1].remove();

                        // Modification
                            // ID
                            screen.toast.id = 'toast';

                            // Data Hidden
                            screen.toast.setAttribute('data-hidden', '');

                        /* Loop
                                Index all "Toasted" elements.
                        */
                        for (let i = 0; i < document.querySelectorAll("[data-toast]:not([data-toast*='_hidden'])").length; i += 1)
                            // Event
                                // Data Toast Event Type | Mouse Up
                                document.querySelectorAll("[data-toast]:not([data-toast*='_hidden'])")[i].setEvent(
                                    (document.querySelectorAll("[data-toast]:not([data-toast*='_hidden'])")[i].getAttribute("data-toast-event-type") || "mouseup"),

                                    function displayScreenToast() {
                                        // Initialization
                                            // Target
                                            let that = this;

                                        // Modification
                                            // Inner HTML
                                            screen.toast.innerHTML = this.getAttribute('data-toast').slice(0, -(this.getAttribute('data-toast').slice(this.getAttribute('data-toast').lastIndexOf('_') + '_'.length).length + 1));

                                        // Set Timeout
                                        setTimeout(() => {
                                            // Modification
                                                // Class
                                                screen.toast.className = that.getAttribute('data-toast-class');

                                                // Data Hidden
                                                screen.toast.removeAttribute('data-hidden');

                                                // Style
                                                screen.toast.style = that.getAttribute('data-toast-style');

                                            // Set Timeout
                                            setTimeout(() => {
                                                // Modification
                                                    // Class
                                                    screen.toast.removeAttribute('class');

                                                    // Data Hidden
                                                    screen.toast.setAttribute('data-hidden', '');

                                                    // Style
                                                    screen.toast.removeAttribute('style')
                                            }, ((parseFloat(that.getAttribute('data-toast').slice(that.getAttribute('data-toast').lastIndexOf('_') + '_'.length)) * 1000) || 0))
                                        }, ((parseFloat(that.getAttribute('data-toast').slice(that.getAttribute('data-toast').lastIndexOf('_') + '_'.length)) * 1000) || 0))
                                    }
                                );

                    // [Event]
                        // Window
                            // Click, Key Down and Scroll
                            window.setEvent('click, keydown, scroll', () => {
                                // Update
                                    // Screentip
                                    screen.tip = document.querySelector('screen-tip#screentip');

                                // Modification
                                    // Class
                                    screen.tip.removeAttribute('class');

                                    // Hidden
                                    screen.tip.setAttribute('data-hidden', '');

                                    // Style
                                    screen.tip.removeAttribute('style');

                                // Style
                                    // Left
                                    screen.tip.style.left = `${((screen.tip.margin || document.createElement('a')).left + (screen.tip.position || document.createElement('a')).left)}px`;

                                    // Top
                                    screen.tip.style.top = `${((screen.tip.margin || document.createElement('a')).top + (screen.tip.position || document.createElement('a')).top)}px`
                            });

                        // <body>
                            // Click, Mouse Up
                            document.body.setEvent('click, keypress', () => {
                                // Update
                                    // Toast
                                    screen.toast = document.querySelector('screen-toast#toast');

                                // Modification
                                    // Toast
                                        // Class
                                        screen.toast.removeAttribute('class');

                                        // Hidden
                                        screen.toast.setAttribute('data-hidden', '');

                                        // Style
                                        screen.toast.removeAttribute('style');
                            });

                            // Key Down
                            document.body.setEvent('keydown', (event) => {
                                /* Logic
                                        If
                                            a Carousel is selected.
                                */
                                if (document.querySelector('.carousel[data-selected]'))
                                    /* Logic
                                            If
                                                the Event Code is 'ArrowLeft',

                                            else if
                                                the Event Code is 'ArrowRight'.
                                    */
                                    if ((event.code || '') === 'ArrowLeft')
                                        // Carousel [Selected]
                                            // Previous
                                            document.querySelector('.carousel[data-selected]')['LapysJS next']();

                                    else if ((event.code || '') === 'ArrowRight')
                                        // Carousel [Selected]
                                            // Next
                                            document.querySelector('.carousel[data-selected]')['LapysJS prev']();

                                /* Loop
                                        Index all "focused" Media.
                                */
                                for (let j = 0; j < document.querySelectorAll('audio.media[data-focus], video.media[data-focus]').length; j += 1) {
                                    /* Logic
                                            If
                                                the Event Code is the Media"s 'data-play-event-key' attribute
                                                    or
                                                the Event Code is 'Space',

                                            else if
                                                the 'event' 'ctrlKey' is "active"
                                                    or
                                                the Media"s 'data-seekmore-meta-event-key' is "active"
                                                            and
                                                the Event Code is the Media"s 'data-seekmore-left-event-key' attribute
                                                    or
                                                the Event Code is 'ArrowLeft',

                                            else if
                                                the 'event' 'ctrlKey' is "active"
                                                    or
                                                the Media"s 'data-seekmore-meta-event-key' is "active"
                                                            and
                                                the Event Code is the Media"s 'data-seekmore-right-event-key' attribute
                                                    or
                                                the Event Code is 'ArrowRight',

                                            else if
                                                the 'event' 'shiftKey' is "active"
                                                    or
                                                the Media"s 'data-seek-meta-event-key' is "active"
                                                            and
                                                the Event Code is the Media"s 'data-seek-left-event-key' attribute
                                                    or
                                                the Event Code is 'ArrowLeft',

                                            else if
                                                the 'event' 'shiftKey' is "active"
                                                    or
                                                the Media"s 'data-seek-meta-event-key' is "active"
                                                            and
                                                the Event Code is the Media"s 'data-seek-right-event-key' attribute
                                                    or
                                                the Event Code is 'ArrowRight',

                                            else if
                                                the 'event' 'ctrlKey' is "active"
                                                    or
                                                the Media"s 'data-volume-meta-event-key' is "active"
                                                            and
                                                the Event Code is the Media"s 'data-volume-reduce-event-key' attribute
                                                    or
                                                the Event Code is 'ArrowDown',

                                            else if
                                                the 'event' 'ctrlKey' is "active"
                                                    or
                                                the Media"s 'data-volume-meta-event-key' is "active"
                                                            and
                                                the Event Code is the Media"s 'data-volume-increase-event-key' attribute
                                                    or
                                                the Event Code is 'ArrowUp',

                                            else if
                                                the Event Code is the Media"s 'data-fullscreen-event-key' attribute
                                                    or
                                                the Event Code is 'KeyF'.
                                    */
                                    if ((event.code || '') === (document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].getAttribute('data-play-event-key') || 'Space'))
                                        // Function
                                            // Toggle Play Mode
                                            document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i]['LapysJS togglePlayMode']();

                                    else if (
                                        ((event.ctrlKey || false) || document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].hasAttribute('data-seek-meta-event-key')) &&
                                        (event.code || '') === (document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].getAttribute('data-seekmore-left-event-key') || 'ArrowLeft')
                                    )
                                        // Modification
                                            // Current Time
                                            document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].currentTime -= parseInt(
                                                document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].duration * (5 / 100)
                                            );

                                    else if (
                                        ((event.ctrlKey || false) || document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].hasAttribute('data-seek-meta-event-key')) &&
                                        (event.code || '') === (document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].getAttribute('data-seekmore-right-event-key') || 'ArrowRight')
                                    )
                                        // Modification
                                            // Current Time
                                            document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].currentTime += parseInt(
                                                document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].duration * (5 / 100)
                                            );

                                    else if (
                                        (event.shiftKey || document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].hasAttribute('data-seek-meta-event-key')) &&
                                        (event.code || '') === (document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].getAttribute('data-seek-left-event-key') || 'ArrowLeft')
                                    )
                                        // Modification
                                            // Current Time
                                            document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].currentTime -= parseInt(
                                                document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].duration * (1 / 100)
                                            );

                                    else if (
                                        (event.shiftKey || document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].hasAttribute('data-seek-meta-event-key')) &&
                                        (event.code || '') === (document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].getAttribute('data-seek-right-event-key') || 'ArrowRight')
                                    )
                                        // Modification
                                            // Current Time
                                            document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].currentTime += parseInt(
                                                document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].duration * (1 / 100)
                                            );

                                    else if (
                                        ((event.ctrlKey || false) || document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].hasAttribute('data-volume-meta-event-key')) &&
                                        (event.code || '') === (document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].getAttribute('data-volume-reduce-event-key') || 'ArrowDown')
                                    )
                                        // Modification
                                            // Volume
                                                /* Logic
                                                        If
                                                            the 'createElement()' method is a function.
                                                */
                                                if (createElement.constructor.name === 'Function')
                                                    // [if]
                                                    (createElement("div").constructor === document.createElement("div").constructor) ?
                                                        // [true]
                                                        document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i]['LapysJS setVolume'](createElement("input", `[value='${((i) => {
                                                            /* Logic
                                                                    If
                                                                        the modified data is lesser than 0.
                                                            */
                                                            if (((document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].volume * 100) - (document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].volume * 10)) < 0)
                                                                // Return
                                                                return 0;

                                                            else
                                                                // Return
                                                                return ((document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].volume * 100) - (document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].volume * 10))
                                                        })(i)}']`)) :

                                                        // [false]
                                                        false;

                                    else if (
                                        ((event.ctrlKey || false) || document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].hasAttribute('data-volume-meta-event-key')) &&
                                        (event.code || '') === (document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].getAttribute('data-volume-increase-event-key') || 'ArrowUp')
                                    )
                                        // Modification
                                            // Volume
                                                /* Logic
                                                        If
                                                            the 'createElement()' method is a function.
                                                */
                                                if (createElement.constructor.name === 'Function')
                                                    // [if]
                                                    (createElement("div").constructor === document.createElement("div").constructor) ?
                                                        document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i]['LapysJS setVolume'](createElement("input", `[value='${((i) => {
                                                            /* Logic
                                                                    If
                                                                        the Media"s volume is not 0.
                                                            */
                                                            if (document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].volume !== 0)
                                                                /* Logic
                                                                        If
                                                                            the modified data is greater than 100.
                                                                */
                                                                if (((document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].volume * 100) + (document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].volume * 10)) > 100)
                                                                    // Return
                                                                    return 100;

                                                                else
                                                                    // Return
                                                                    return ((document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].volume * 100) + (document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].volume * 10));

                                                            else
                                                                // Return
                                                                return 10
                                                        })(i)}']`)) :
                                                        false;

                                    else if ((event.code || '') === (document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].getAttribute('data-fullscreen-event-key') || 'KeyF'))
                                        // Function
                                            // Fullscreen
                                            document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i]['LapysJS fullscreen']()
                                };

                                /* Loop
                                        Index all Select Boxes.
                                */
                                for (let j = 0; j < document.querySelectorAll('input.select-box[data-id]').length; j += 1) {
                                    /* Logic
                                            If
                                                the Event Code is 'Escape',

                                            else if
                                                its respective Option Box exists.
                                    */
                                    if ((event.code || '') === 'Escape')
                                        // Modification
                                            // Option Box
                                                // Hidden
                                                document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[j].getAttribute("data-id")}']`)[1].hidden = true;

                                    else if (document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[j].getAttribute("data-id")}']:not([hidden])`)[1]) {
                                        /* Logic
                                                Index all the Option Box"s child elements.
                                        */
                                        for (let k = 0; k < document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[j].getAttribute("data-id")}']:not([hidden])`)[1].children.length; k += 1)
                                            /* Logic
                                                    If
                                                        the child element has the 'data-selected' attribute.
                                            */
                                            if (document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[j].getAttribute("data-id")}']:not([hidden])`)[1].children[k].hasAttribute('data-selected')) {
                                                /* Logic
                                                        If
                                                            the Event Code is 'ArrowDown',

                                                        else if
                                                            the Event Code is 'ArrowUp',

                                                        else if
                                                            the Event Code is 'Enter'.
                                                */
                                                if ((event.code || '') === 'ArrowDown') {
                                                    // Modification
                                                        // Data Selected
                                                        document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[j].getAttribute("data-id")}']:not([hidden])`)[1].children[k].removeAttribute('data-selected');

                                                        // [Next Element Sibling]
                                                            // Data Selected
                                                            (
                                                                document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[j].getAttribute("data-id")}']:not([hidden])`)[1].children[k].nextElementSibling ||
                                                                document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[j].getAttribute("data-id")}']:not([hidden])`)[1].children[0]
                                                            ).setAttribute('data-selected', '');

                                                    // End
                                                    k = document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[j].getAttribute("data-id")}']:not([hidden])`)[1].children.length
                                                }

                                                else if ((event.code || '') === 'ArrowUp') {
                                                    // Modification
                                                        // Data Selected
                                                        document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[j].getAttribute("data-id")}']:not([hidden])`)[1].children[k].removeAttribute('data-selected');

                                                        // [Previous Element Sibling]
                                                            // Data Selected
                                                            (
                                                                document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[j].getAttribute("data-id")}']:not([hidden])`)[1].children[k].previousElementSibling ||
                                                                document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[j].getAttribute("data-id")}']:not([hidden])`)[1].children[
                                                                    (document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[j].getAttribute("data-id")}']:not([hidden])`)[1].children.length - 1)
                                                                ]
                                                            ).setAttribute('data-selected', '');

                                                    // End
                                                    k = document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[j].getAttribute("data-id")}']:not([hidden])`)[1].children.length
                                                }

                                                else if ((event.code || '') === 'Enter') {
                                                    // Modification
                                                        // [Select Box]
                                                            // Value
                                                            document.querySelectorAll('input.select-box[data-id]')[j].value = document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[j].getAttribute("data-id")}']:not([hidden])`)[1].children[k].innerHTML;

                                                    // Option Box
                                                        // Hide
                                                        document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[j].getAttribute("data-id")}']:not([hidden])`)[1].hide();

                                                    // Break
                                                    break
                                                }
                                            }

                                            else {
                                                /* Logic
                                                        If
                                                            'data-selected=''' is found within the Option Box"s 'innerHTML'
                                                                or
                                                            'data-selected=""' is found within the Option Box"s 'innerHTML'.
                                                */
                                                if (
                                                    document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[j].getAttribute("data-id")}']:not([hidden])`)[1].innerHTML.indexOf(' data-selected=\'\'') < 0 &&
                                                    document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[j].getAttribute("data-id")}']:not([hidden])`)[1].innerHTML.indexOf(' data-selected=""') < 0
                                                ) {
                                                    /* Logic
                                                            If
                                                                the Event Code is 'ArrowDown',

                                                            else if
                                                                the Event Code is 'ArrowUp'.
                                                    */
                                                    if ((event.code || '') === 'ArrowDown') {
                                                        // Modification
                                                            // Data Selected
                                                            document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[j].getAttribute("data-id")}']:not([hidden])`)[1].children[0].setAttribute('data-selected', '');

                                                        // End
                                                        k = document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[j].getAttribute("data-id")}']:not([hidden])`)[1].children.length
                                                    }

                                                    else if ((event.code || '') === 'ArrowUp') {
                                                        // Modification
                                                            // Data Selected
                                                            document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[j].getAttribute("data-id")}']:not([hidden])`)[1].children[
                                                                (document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[j].getAttribute("data-id")}']:not([hidden])`)[1].children.length - 1)
                                                            ].setAttribute('data-selected', '');

                                                        // End
                                                        k = document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[j].getAttribute("data-id")}']:not([hidden])`)[1].children.length
                                                    }
                                                }
                                            }

                                        // End
                                        j = document.querySelectorAll('input.select-box[data-id]').length
                                    }
                                }
                            });

                            // Mouse Up
                            document.body.setEvent('mouseup', (event) => {
                                /* Loop
                                        Index all Carousels.
                                */
                                for (let i = 0; i < document.getElementsByClassName('carousel').length; i += 1)
                                    // Modification
                                        // Data Selected
                                        document.getElementsByClassName('carousel')[i].removeAttribute('data-selected');

                                /* Loop
                                        Index all Targets.
                                */
                                for (let i = 0; i < (event.path || []).length; i += 1)
                                    /* Logic
                                            If
                                                the Target is an element.
                                    */
                                    if (typeof (event.path || [])[i].tagName === 'string')
                                        /* Logic
                                                If
                                                    the Target is a Carousel.
                                        */
                                        if ((event.path || [])[i].hasClass('carousel')) {
                                            // Modification
                                                // Carousel
                                                    // Data Selected
                                                    (event.path || [])[i].setAttribute('data-selected', '');

                                            // End
                                            i = (event.path || []).length
                                        };

                                /* Loop
                                        Index all Dropdowns.
                                */
                                for (let i = 0; i < document.getElementsByClassName('dropdown').length; i += 1)
                                    // Dropdown
                                        // Close
                                        document.getElementsByClassName('dropdown')[i]['LapysJS close']();

                                /* Loop
                                        Index all Targets.
                                */
                                for (let i = 0; i < (event.path || []).length; i += 1)
                                    /* Logic
                                            If
                                                the Target is an element.
                                    */
                                    if (typeof (event.path || [])[i].tagName === 'string')
                                        /* Logic
                                                If
                                                    the Target is a Dropdown

                                                else if
                                                    the Target is a Dropdown Content.
                                        */
                                        if ((event.path || [])[i].hasClass('dropdown')) {
                                                // Dropdown
                                                    // Open
                                                    (event.path || [])[i]['LapysJS open']();

                                            // End
                                            i = (event.path || []).length
                                        }

                                        else if ((event.path || [])[i]['LapysJS dropdown']) {
                                            // Dropdown
                                                // Open
                                                document.querySelector(`.dropdown[data-id='${(event.path || [])[i].getAttribute('data-id')}']`)['LapysJS open']();

                                            // End
                                            i = (event.path || []).length
                                        };

                                /* Loop
                                        Index all targets.
                                */
                                for (let j = 0; j < (event.path || []).length; j += 1)
                                    /* Loop
                                            Index all Select Boxes.
                                    */
                                    for (let k = 0; k < document.querySelectorAll('input.select-box').length; k += 1) {
                                        /* Logic
                                                If
                                                    the target is an element.
                                        */
                                        if (typeof (event.path || [])[j].tagName === 'string')
                                            /* Logic
                                                    If
                                                        the Target
                                                        is a Select Box
                                                            or
                                                        is an Option Box.
                                            */
                                            if (
                                                (event.path || [])[j].hasClass('select-box') ||
                                                (event.path || [])[j] === document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[k].getAttribute("data-id")}']`)[1]
                                            ) {
                                                // End
                                                k = document.querySelectorAll('input.select-box').length;

                                                // End
                                                j = (event.path || []).length
                                            }

                                            else
                                                // Option Box
                                                    // Hide
                                                    document.querySelectorAll(`[data-id='${document.querySelectorAll("input.select-box")[k].getAttribute("data-id")}']`)[1].hide()
                                    }
                            })
                };
                plugIns();
                onDOMNodeAdded(plugIns);

        /* Execution
            --- WARN ---
                The LapysJS script must run only once.
        */
        LapysJS.executed = true;

        // LapysJS > Ready
        LapysJS.ready = LapysJS.executed
}

else if (!window)
    // Error
    LapysJS.error('LapysJS does not function without the global "window" object.')
