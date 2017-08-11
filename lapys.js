/* Strict Mode */
"use strict";

/* Window */
    /* Event */
        // Blur
            /* Set Timeout
                    --- NOTE ---
                        "setEvent()" needs to be defined before this function runs.
            */
            setTimeout(function() {
                window.setEvent("blur", function() {
                    /* Loop
                            Index all Select Boxes.
                    */
                    for (var j = 0; j < document.querySelectorAll("input.select-box[data-id]").length; j++)
                        // Modification
                            // Option Box
                                // Hide
                                document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[j].getAttribute('data-id') + '"]')[1].hidden = true
                })
            }, 0);

    /* Location */
        // Query Parameters
        location.queryParameters = (location.queryParameters || (function() {
            /* Logic
                    If
                        Location > Search is not 'empty'.
            */
            if (!!location.search.trim()) {
                // Initialization
                    // URL
                    var url = [];

                /* Loop
                        Index all Query Parameters.
                */
                for (var i = 0; i < location.search.replace("?", "").replace(/\&/g, ",").split(/,/g).length; i++)
                    // Update
                        // URL
                        url[i] = {
                            // Name
                            name: location.search.replace("?", "").replace(/\&/g, ",").split(/,/g)[i].slice(
                                0, location.search.replace("?", "").replace(/\&/g, ",").split(/,/g)[i].indexOf("=")
                            ),

                            // Value
                            value: location.search.replace("?", "").replace(/\&/g, ",").split(/,/g)[i].slice(
                                location.search.replace("?", "").replace(/\&/g, ",").split(/,/g)[i].indexOf("=") + "=".length
                            )
                        };

                // Return
                return url
            }
        })());

    // Name
    window.name = (window.name || document.title);

/* Custom Data */
    /* LapysJS */
        // Initialization
        var LapysJS = new (function LapysJS() {
            // Author
            this.author = "Lapys Dev Team";

            // Error
            this.error = function(data, metadata) {
                /* Function */
                    // Log LapysJS Error
                    function logLapysJSError(data) {
                        console.error("[LapysJS v0.0.1]: " + data)
                    };
                        // Log Help Sheet
                        function logLapysJSErrorLogHelpSheet() {
                            console.group("[LapysJS v0.0.1]: LapysJS Error Log Help Sheet: ");
                                console.info("~: Log this help sheet into the browser console.");
                                console.info("~h: Log this help sheet into the browser console.");
                                console.info("~help: Log this help sheet into the browser console.");
                                console.info("~0000: Log this help sheet into the browser console.");
                            console.groupEnd()
                        };

                /* Logic
                        If
                            the specified Data or "~" does not have a "~" character.
                */
                if ((data || "~").indexOf("~") <= -1)
                    // Log LapysJS Error
                    logLapysJSError(data);

                else {
                    /* Logic
                            Switch Data case to
                                "~", "~h", "~help" and "~0000".
                    */
                    switch (data) {
                        // ~
                        case "~":
                            // Log LapysJS Error > Log Help Sheet
                            logLapysJSErrorLogHelpSheet();
                            break;

                        // ~h
                        case "~h":
                            // Log LapysJS Error > Log Help Sheet
                            logLapysJSErrorLogHelpSheet();
                            break;

                        // ~help
                        case "~help":
                            // Log LapysJS Error > Log Help Sheet
                            logLapysJSErrorLogHelpSheet();
                            break;

                        // ~0000
                        case "~0000":
                            // Log LapysJS Error > Log Help Sheet
                            logLapysJSErrorLogHelpSheet();
                            break;

                        // [Default]
                        default:
                            // Log LapysJS Error > Log Help Sheet
                            logLapysJSErrorLogHelpSheet();
                            break;
                    }
                }
            };

            // Execution
            this.executed = false;

            // Name (Title)
            this.name = "LapysJS";

            // Strict Mode
            this.strictMode = (function() {
                // Return
                return !this
            })();

            // Version
            this.version = "0.0.1"
        });

/* Array Data */
    // Get Repeated Elements
     Array.prototype.getRepeatedElements || (Array.prototype.getRepeatedElements = function() {
        // Initialization
            // Repeated Elements
            var repeatedElements = [];

        /* Loop
                Index all members of the Target.
        */
        for (var i = 0; i < this.length - 1; i++)
            // Update
                // Repeated Elements
                !(this.slice().sort()[i + 1] == this.slice().sort()[i]) || repeatedElements.push(this.slice().sort()[i]);

        // Return
        return repeatedElements
    });

    /* Index Of
            --- NOTE ---
                Build for Internet Explorer 7 and 8.
    */
    Array.prototype.indexOf || (Array.prototype.indexOf = function(start, end) {
        /* --- NOTE ---
                This is a minified polyfill version of "indexOf" in non-supporting browsers.
        */
        if(null==this)throw new TypeError("'this' is null or not defined");var a,c=Object(this),b=c.length>>>0;if(0===b)return -1;a=+end||0;Infinity===Math.abs(a)&&(a=0);if(a>=b)return -1;for(a=Math.max(0<=a?a:b-Math.abs(a),0);a<b;){if(a in c&&c[a]===start)return a;a++}return -1
    });

    /* Last Index Of
            --- NOTE ---
                Build for Internet Explorer 7 and 8.
    */
    Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function(index) {
        /* --- NOTE ---
                This is a minified polyfill version of "lastIndexOf" in non-supporting browsers.
        */
        if(this===void 0||this===null){throw new TypeError()}var n,k,t=Object(this),len=t.length>>>0;if(len===0){return -1}n=len-1;if(arguments.length>1){n=Number(arguments[1]);if(n!=n){n=0}else if(n!=0&&n!=(1/0)&&n!=-(1/0)){n=(n>0||-1)*Math.floor(Math.abs(n))}}for(k=n>=0?Math.min(n,len-1):len-Math.abs(n);k>=0;k--){if(k in t&&t[k]===index){return k}}return -1
    });

    /* Remove Element
            --- NOTE ---
                Removes the first instance specified element of an array.
    */
    Array.prototype.removeElement || (Array.prototype.removeElement = function(element) {
        // Update
            // Target
            !(this.indexOf(element) > -1) || this.splice(this.indexOf(element), 1);

        // Return
        return this
    });

    // Remove Element From Back
    Array.prototype.removeElementFromBack || (Array.prototype.removeElementFromBack = (function() { return Array.prototype.removeElement })());

    /* Remove Element From Front
            --- NOTE ---
                Removes the last instance specified element of an array.
    */
     Array.prototype.removeElementFromFront || (Array.prototype.removeElementFromFront = function(element) {
        // Update
            // Target
            !(this.lastIndexOf(element) > -1) || this.splice(this.lastIndexOf(element), 1);

        // Return
        return this
    });

    // Remove Elements
    Array.prototype.removeElements || (Array.prototype.removeElements = function(element) {
        // Return
        return this.filter(function(data) {
            // Return
            return (data !== element)
        })
    });

    // Remove Falsy Elements
     Array.prototype.removeFalsyElements || (Array.prototype.removeFalsyElements = function() {
        // Return
        return this.filter(Boolean)
    });

    // Remove Repeated Elements
     Array.prototype.removeRepeatedElements || (Array.prototype.removeRepeatedElements = function() {
        // Initialization
            // Target
            var that = this;

        // Return
        return this.filter(function(element, index) {
            // Return
            return (that.indexOf(element) == index)
        })
    });

    // Remove Truthy Elements
     Array.prototype.removeTruthyElements || (Array.prototype.removeTruthyElements = function() {
        // Return
        return this.filter(function(data) {
            // Return
            return !data
        })
    });

/* Object Data */
    /* Lapys
            --- UPDATE REQUIRED ---
                Should be functional.

            --- NOTE ---
                Returns "EventTargets" or "Objects" of any function or method,
                examples of some use cases are:

                    "Some really long string".slice(lapys.indexOf("really"))
                        ("lapys" here returns the String initiating the "slice" method)

                    or

                    document.body.onscroll = function() { lapys.id = "scrolledElement" }
                        ("lapys" here returns the EventTarget initiating the "onscroll" method)

                    or

                    function callFunction() { return lapys }
                        ("lapys" here returns the "callFunction" function as it is).

            --- WARN ---
                Lapys should not be modifiable,
                and should not serve as a replacement for "this" except
                in cutting down code or other severe cases.
    */
    // Object.defineProperty(Object.prototype, "lapys", {
    //     // Configurable
    //     configurable: true,

    //     // Enumerable
    //     enumerable: true,

    //     // Get
    //     get: function() {
    //         /* Do something… */
    //     },

    //     // Set
    //     set: function() {
    //         /* Do something… */
    //     }
    // });

/* String Data */
    // Function
        // Capitalize
        String.prototype.capital || (String.prototype.capital = function() {
            // Return
            return this.replace(/\b\w/g, function(data) {
                // Return
                return data.toUpperCase()
            })
        });

        // Get After Character
        String.prototype.getAfterChar || (String.prototype.getAfterChar = function(data) {
            /* Logic
                    Switch Data data type case to
                        "number" and "string".
            */
            switch (typeof data) {
                // Number
                case "number":
                    // Return
                    return this.slice(data);
                    break;

                // String
                case "string":
                    // Return
                    return this.slice(this.indexOf(data) + 1);
                    break;
            }
        });

        // Get Before Character
        String.prototype.getBeforeChar || (String.prototype.getBeforeChar = function(data) {
            /* Logic
                    Switch "data" data type case to
                        "number" and "string".
            */
            switch (typeof data) {
                // Number
                case "number":
                    // Return
                    return this.slice(0, data);
                    break;

                // String
                case "string":
                    // Return
                    return this.slice(0, this.indexOf(data));
                    break;
            }
        });

        /* Is Registered
                --- NOTE ---
                    Check if an element is registered.
        */
        String.prototype.isRegistered || Object.defineProperty(String.prototype, "isRegistered", {
            // Configurable
            configurable: true,

            // Enumerable
            enumerable: true,

            // Get
            get: function() { return (document.createElement(this).constructor !== HTMLElement) }
        });

        /* Lower
                --- NOTE ---
                    Shorter form of "toLowerCase()".
        */
        String.prototype.lower || (String.prototype.lower = function() {
            // Return
            return this.toLowerCase()
        });

        /* Markup To String
                --- CONSIDER ---
                    Are the replacing characters cross-platform supported?
        */
        String.prototype.markupToString || (String.prototype.markupToString = function() {
            // Return
            return this.replace(/</g, "&lt;").replace(/>/g, "&gt;")
        });

        // To Array
        String.prototype.toArray || (String.prototype.toArray = function() {
            // Return
            return JSON.parse("[" + this.replace(/'/g, "\"") + "]")
        });

        // To Object
        String.prototype.toObject || (String.prototype.toObject = function() {
            // Return
            return JSON.parse(this.replace(/'/g, "\""))
        });

        // To String Array
        String.prototype.toStringArray || (String.prototype.toStringArray = function() {
            // Return
            return this.split(/,/g)
        });

        /* Upper
                --- NOTE ---
                    Shorter form of "toUpperCase()".
        */
        String.prototype.upper || (String.prototype.upper = function() {
            // Return
            return this.toUpperCase()
        });

/* Function */
    // Assert
    constructor.prototype.assert || (constructor.prototype.assert = console.assert);

    // Clear
    constructor.prototype.clear || (constructor.prototype.clear = console.clear);

    // Create Element
     constructor.prototype.createElement || (constructor.prototype.createElement = function(element, CSSSelector, innerHTML) {
        // Initialization
            // New Element
            var newElement = document.createElement(element);

        // Modification
            // New Element
                // CSS Selector
                !CSSSelector || (newElement.CSSSelector = CSSSelector);

                // Inner HTML
                !innerHTML || (newElement.innerHTML = innerHTML);

        // Return
        return newElement
    });

    // Get Query String By Name
    constructor.prototype.getQueryParameterByName || (constructor.prototype.getQueryParameterByName = function(name, url) {
        // Return
        !(new RegExp("[?&]" + name.replace(/[\[\]]/g, "\\$&") + "(=([^&#]*)|&|#|$)").exec(url || location.href)) || (function() { return null })();

        // Return
        !(new RegExp("[?&]" + name.replace(/[\[\]]/g, "\\$&") + "(=([^&#]*)|&|#|$)").exec(url || location.href))[2] || (function() { return "" })();

        // Return
        return decodeURIComponent((new RegExp("[?&]" + name.replace(/[\[\]]/g, "\\$&") + "(=([^&#]*)|&|#|$)").exec(url || location.href))[2].replace(/\+/g, " "))
    });

    // Go To
    constructor.prototype.goTo || (constructor.prototype.goTo = function(directory) {
        // Location
            // Assign
            location.assign(directory)
    });

    // Log
    constructor.prototype.log || (constructor.prototype.log = console.log);

    // On DOM Change
    constructor.prototype.onDOMChange || (constructor.prototype.onDOMChange = function(func) {
        /* Logic
                If
                    "func" is a function.
        */
        if (typeof func == "function") {
            // Initialization
                // DOM Content
                var currentDOMContent = document.documentElement.outerHTML,
                    // Former DOM Content
                    formerDOMContent = currentDOMContent;

            // Set Interval
            setInterval(function() {
                // Update
                    // DOM Content
                    currentDOMContent = document.documentElement.outerHTML;

                /* Logic
                        If
                            "DOM Content" is not "Former DOM Content".
                */
                if (currentDOMContent != formerDOMContent) {
                    // Function
                        // Function
                        func();

                    // Update
                        // Former DOM Content
                        formerDOMContent = currentDOMContent
                }
            }, 100)
        }
    });

    // On DOM Node Added
    constructor.prototype.onDOMNodeAdded || (constructor.prototype.onDOMNodeAdded = function(func) {
        /* Logic
                If
                    "func" is a function.
        */
        if (typeof func == "function") {
            // Initialization
                // DOM Nodes Length
                var DOMNodesLength = document.querySelectorAll("*").length,
                    // Former DOM Nodes Length
                    formerDOMNodesLength = DOMNodesLength;

            // Set Interval
            setInterval(function() {
                // Update
                    // DOM Nodes Length
                    DOMNodesLength = document.querySelectorAll("*").length;

                /* Logic
                        If
                            "DOM Content" is greater than "Former DOM Content".
                */
                if (DOMNodesLength > formerDOMNodesLength) {
                    // Function
                    func();

                    // Update
                        // Former DOM Nodes Length
                        formerDOMNodesLength = DOMNodesLength
                }
            }, 100)
        }
    });

    // On DOM Node Count Change
    constructor.prototype.onDOMNodeCountChange || (constructor.prototype.onDOMNodeCountChange = function(func) {
        /* Logic
                If
                    "func" is a function.
        */
        if (typeof func == "function") {
            // Initialization
                // DOM Nodes Length
                var DOMNodesLength = document.querySelectorAll("*").length,
                    // Former DOM Nodes Length
                    formerDOMNodesLength = DOMNodesLength;

            // Set Interval
            setInterval(function() {
                // Update
                    // DOM Nodes Length
                    DOMNodesLength = document.querySelectorAll("*").length;

                /* Logic
                        If
                            "DOM Content" is not "Former DOM Content".
                */
                if (DOMNodesLength != formerDOMNodesLength) {
                    // Function
                    func();

                    // Update
                        // Former DOM Nodes Length
                        formerDOMNodesLength = DOMNodesLength
                }
            }, 100)
        }
    });

    // On DOM Node Removed
    constructor.prototype.onDOMNodeRemoved || (constructor.prototype.onDOMNodeRemoved = function(func) {
        /* Logic
                If
                    "func" is a function.
        */
        if (typeof func == "function") {
            // Initialization
                // DOM Nodes Length
                var DOMNodesLength = document.querySelectorAll("*").length,
                    // Former DOM Nodes Length
                    formerDOMNodesLength = DOMNodesLength;

            // Set Interval
            setInterval(function() {
                // Update
                    // DOM Nodes Length
                    DOMNodesLength = document.querySelectorAll("*").length;

                /* Logic
                        If
                            "DOM Content" is lesser than "Former DOM Content".
                */
                if (DOMNodesLength < formerDOMNodesLength) {
                    // Function
                    func();

                    // Update
                        // Former DOM Nodes Length
                        formerDOMNodesLength = DOMNodesLength
                }
            }, 100)
        }
    });

    // On DOM Ready
    constructor.prototype.onDOMReady || (constructor.prototype.onDOMReady = function(func) {
        // Event
        !(typeof func == "function") ||
            // [if]
            document.addEventListener ?
                // [true]
                    // DOM Content Loaded
                    document.addEventListener("DOMContentLoaded", function() {
                        // Function
                        func()
                    }) :

                    // On Ready State Change
                    document.attachEvent("onreadystatechange", function() {
                        // Function
                        !(document.readyState === "complete") || func()
                    })
    });

    /* Parse Number
            --- NOTE ---
                Useful for converting measurements to raw numbers.

            --- WARN ---
                This function will not return any falsy data except 0.
    */
    constructor.prototype.parseNumber || (constructor.prototype.parseNumber = function(data) {
        // Return
        return (parseFloat(
            data.toString().replace(
                data.toString().replace(/[0-9]|\./g, ""), ""
            )
        ) || 0)
    });

    // Register Element
    constructor.prototype.registerElement || (constructor.prototype.registerElement = function(element) {
        // Return
        return window.customElements.define(element, class customElement extends HTMLElement {})
    });

    // Reload
    constructor.prototype.reload || (constructor.prototype.reload = function() {
        // Location
            // Reload
            location.reload()
    });

    // Smooth Scroll To
    constructor.prototype.smoothScrollTo || (constructor.prototype.smoothScrollTo = function(element, scrollAmount) {
        // Events
            // <body>
                // Key Down, Mouse Down
                document.body.setEvent("keydown, mousedown", function clearSmoothScroll() {
                    // Clear Interval
                        // Smooth Scroll Top to Bottom
                        !smoothScrollTopToBottom || clearInterval(smoothScrollTopToBottom);

                    // Clear Interval
                        // Smooth Scroll Bottom to Top
                        !smoothScrollBottomToTop || clearInterval(smoothScrollBottomToTop);

                    // Clear Interval
                        // Smooth Scroll Left to Right
                        !smoothScrollLeftToRight || clearInterval(smoothScrollLeftToRight);

                    // Clear Interval
                        // Smooth Scroll Right to Left
                        !smoothScrollRightToLeft || clearInterval(smoothScrollRightToLeft);

                    // Events
                        // <body>
                            // Key Down
                            document.body.removeEventListener("keydown", clearSmoothScroll);

                            // Mouse Down
                            document.body.removeEventListener("mousedown", clearSmoothScroll)
                });

        /* Logic
                If
                    the Element is below the Target Element.
        */
        if (element.getBoundingClientRect().top > (this || event.target).getBoundingClientRect().top)
            // Initialization
                // Smooth Scroll Top to Bottom
                var smoothScrollTopToBottom = setInterval(function() {
                    // [if]
                    (window.scrollY >= element.getBoundingClientRect().top) ?
                        // [true]
                            // Clear Interval
                            clearInterval(smoothScrollTopToBottom) :

                        // [false]
                            // Scroll By
                            window.scrollBy(0, scrollAmount)
                }, 1);

        /* Logic
                If
                    the Element is above the Target Element.
        */
        if (element.getBoundingClientRect().top < (this || event.target).getBoundingClientRect().top)
            // Initialization
                // Smooth Scroll Bottom to Top
                var smoothScrollBottomToTop = setInterval(function() {
                    // [if]
                    (window.scrollY <= element.getBoundingClientRect().top) ?
                        // [true]
                            // Clear Interval
                            clearInterval(smoothScrollBottomToTop) :

                        // [false]
                            // Scroll By
                            window.scrollBy(0, -scrollAmount)
                }, 1);

        /* Logic
                If
                    the Element is in front of the Target Element.
        */
        if (element.getBoundingClientRect().left > (this || event.target).getBoundingClientRect().left)
            // Initialization
                // Smooth Scroll Left to Right
                var smoothScrollLeftToRight = setInterval(function() {
                    // [if]
                    (window.scrollX >= element.getBoundingClientRect().left) ?
                        // [true]
                            // Clear Interval
                            clearInterval(smoothScrollLeftToRight) :

                        // [false]
                            // Scroll By
                            window.scrollBy(scrollAmount, 0)
                }, 1);

        /* Logic
                If
                    the Element is behind the Target Element.
        */
        if (element.getBoundingClientRect().left < (this || event.target).getBoundingClientRect().left)
            // Initialization
                // Smooth Scroll Right to Left
                var smoothScrollRightToLeft = setInterval(function() {
                    // [if]
                    (window.scrollY <= element.getBoundingClientRect().left) ?
                        // [true]
                            // Clear Interval
                            clearInterval(smoothScrollRightToLeft) :

                        // [false]
                            // Scroll By
                            window.scrollBy(scrollAmount, 0)
                }, 1)
    });

    // Warn
    constructor.prototype.warn || (constructor.prototype.warn = console.warn);

    // Write
    constructor.prototype.write || (constructor.prototype.write = function(data) { document.write(data) });

/* Global Object Test
        Logic
            If
                the global 'window' object
                exists

                    and

                LapysJS has not been
                executed
                    and

                a <script> with "lapys.js"
                    or
                a <script> with "lapys.min.js"
                as its "src" exists,

                do something.

            else if
                the global 'window' Object does not exist,
                throw an error.
*/
if (
    window &&
    !LapysJS.executed &&
    (
        document.querySelector('script[src*="lapys.js"]') ||
        document.querySelector('script[src*="lapys.min.js"]')
    )
) {
    /* Custom Data */
        // Browser
        constructor.prototype.browser || (constructor.prototype.browser = new (function Browser() {
            // Is Chrome?
            this.chrome = (!!window.chrome && !!window.chrome.webstore) || false;

            // Is Edge?
            this.edge = (!(/*@cc_on!@*/ false || !!document.documentMode) && !window.StyleMedia) || false;

            // Is Internet Explorer?
            this.internetExplorer = (/*@cc_on!@*/ false || !!document.documentMode) || false;

            // Is Mozila?
            this.mozila = (typeof InstallTrigger !== "undefined") || false;

            // Is Opera?
            this.opera = ((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf("OPR/") >= 0) || false;

            // Is Safari?
            this.safari = (/constructor/i.test(window.HTMLElement) || (function(data) { return (data.toString() === "[object SafariRemoteNotification]" ) })(!window["safari"] || safari.pushNotification)) || false
        }));

        // CSS
        constructor.prototype.css || (constructor.prototype.css = new (function CSS() {
            // Link
            this.link = function(dataID, array) {
                // Initialization
                    // <link>
                    var link = document.createElement("link");

                // Insertion
                    // <link>
                    document.head.append(link);

                // Modification
                    // <link>
                        // Data ID
                        link.dataset.id = dataID;

                        // [Attribute]
                            // Update
                                // Array
                                array = array.replace(/\'|\"/g, "").split(/,/g);

                                /* Loop
                                        Index all members of array.
                                */
                                for (var i = 0; i < array.length; i++)
                                    link.setAttribute(
                                        array[i].slice(0, array[i].indexOf("=")).replace(/ /g, ""),
                                        array[i].slice(array[i].indexOf("=") + "=".length)
                                    )
            };

            // Style
            this.style = function(dataID, innerHTML) {
                // Initialization
                    // <style>
                    var style = document.createElement("style");

                // Insertion
                    // <style>
                    document.head.append(style);

                // Modification
                    // <style>
                        // Data ID
                        style.dataset.id = dataID;

                        // Inner HTML
                        style.innerHTML = ("\r\t" + innerHTML + "\n\r\t")
            }
        }));

        // Delete
        constructor.prototype.del || (constructor.prototype.del = function(dataID, element) {
            /* Logic
                    Switch "element" case to
                        "link", "style" and "script".
            */
            switch (element) {
                // <link>
                case "link":
                    // Deletion
                    (document.querySelector('link[data-id="' + dataID + '"]') || document.createElement("div")).remove();
                    break;

                // <style>
                case "style":
                    // Deletion
                    (document.querySelector('style[data-id="' + dataID + '"]') || document.createElement("div")).remove();
                    break;

                // <script>
                case "script":
                    // Deletion
                    (document.querySelector('script[data-id="' + dataID + '"]') || document.createElement("div")).remove();
                    break;

                // [Default]
                default:
                    (function() {
                        /*  Logic
                                If
                                    the element is a <link>,

                                else if
                                    the element is a <style>,

                                else if
                                    the element is a <script>.
                        */
                        if (document.querySelector('link[data-id="' + dataID + '"]'))
                            // Deletion
                            document.querySelector('link[data-id="' + dataID + '"]').remove();

                        else if (document.querySelector('style[data-id="' + dataID + '"]'))
                            // Deletion
                            document.querySelector('style[data-id="' + dataID + '"]').remove();

                        else if (document.querySelector('script[data-id="' + dataID + '"]'))
                            // Deletion
                            document.querySelector('script[data-id="' + dataID + '"]').remove()
                    })();
                    break;
            }
        });

        // File
        constructor.prototype.file || (constructor.prototype.file = new (function File() {
            // Full Name
            this.fullName = (location.pathname.split("/").pop() || location.pathname.split("#").shift());

            // Name
            this.name = (location.pathname.split("/").pop() || location.pathname.split("#").shift()).slice(
                0, (location.pathname.split("/").pop() || location.pathname.split("#").shift()).indexOf(".")
            );

            // Type
            this.type = (location.pathname.split("/").pop() || location.pathname.split("#").shift()).split(".").pop()
        }));

        // HTML Document Type
        constructor.prototype.HTMLDoctype || (constructor.prototype.HTMLDoctype = (function() {
            // Return
            return !document.doctype || (
                '<!DOCTYPE ' +
                    (document.doctype.name) +

                    // [if]
                    (document.doctype.publicId ?
                        // [true]
                        ' PUBLIC "' + document.doctype.publicId + '"' :

                        // [false]
                        ''
                    ) +

                    // [if]
                    ((!document.doctype.publicId && document.doctype.systemId) ?
                        // [true]
                        ' SYSTEM' :

                        // [false]
                        ''
                    )  +

                    // [if]
                    (document.doctype.systemId ?
                        // [true]
                        ' "' + document.doctype.systemId + '"' :

                        // [false]
                        ''
                    ) +
                '>'
            )
        })());

        // Javascript
        constructor.prototype.js || (constructor.prototype.js = new (function JS() {
            // Script
            this.script = function(dataID, innerHTML) {
                // Initialization
                    // <script>
                    var script = document.createElement("script");

                // Insertion
                    // <script>
                    document.head.append(script);

                // Modification
                    // <script>
                        // Data ID
                        script.dataset.id = dataID;

                        // Inner HTML
                        script.innerHTML = ("\r\t" + innerHTML + "\n\r\t")
            };

            // Source
            this.src = function(dataID, array) {
                // Initialization
                    // <script>
                    var script = document.createElement("script");

                // Insertion
                    // <script>
                    document.head.append(script);

                // Modification
                    // <script>
                        // Data ID
                        script.dataset.id = dataID;

                        // [Attribute]
                            // Update
                                // Array
                                array = array.replace(/\'|\"/g, "").split(/,/g);

                                /* Loop
                                        Index all members of array.
                                */
                                for (var i = 0; i < array.length; i++)
                                    // Modification
                                        // <script>
                                            // [Attribute]
                                            script.setAttribute(
                                                array[i].slice(0, array[i].indexOf("=")).replace(/ /g, ""),
                                                array[i].slice(array[i].indexOf("=") + "=".length)
                                            )
            }
        }));

        // Operating System
        constructor.prototype.operatingSystem || (constructor.prototype.operatingSystem = new (function operatingSystem() {
            // Is Macintosh?
            this.macintosh = ((navigator.appVersion.indexOf("Mac") >= 0) || false);

            // Is Linux?
            this.linux = ((navigator.appVersion.indexOf("Linux") >= 0) || false);

            // Is Unix?
            this.unix = ((navigator.appVersion.indexOf("X11") >= 0) || false);

            // Is Windows?
            this.windows = ((navigator.appVersion.indexOf("Win") >= 0) || false)
        }));

    /* Document */
        // Function
            // Get Elements By Attribute Name
            Document.prototype.getElementsByAttributeName || (Document.prototype.getElementsByAttributeName = function(name) { return this.querySelectorAll("[" + name + "]") });

            // Get Elements By Attribute Name and Value
            Document.prototype.getElementsByAttributeNameAndValue || (Document.prototype.getElementsByAttributeNameAndValue = function(name, value) { return this.querySelectorAll('[' + name + '="' + value + '"]') });

            // Get Elements By Attribute Name and Value except Value
            Document.prototype.getElementsByAttributeNameAndValueExceptValue || (Document.prototype.getElementsByAttributeNameAndValueExceptValue = function(name, value1, value2) { return this.querySelectorAll('[' + name + '="' + value1 + '"]:not([' + name + '="' + value2 + '"])') });

            // Get Elements By Attribute Name and Value without Value
            Document.prototype.getElementsByAttributeNameAndValueWithoutValue || (Document.prototype.getElementsByAttributeNameAndValueWithoutValue = function(name, value1, value2) { return this.querySelectorAll('[' + name + '="' + value1 + '"]:not([' + name + '*="' + value2 + '"])') });

            // Get Elements By Attribute Name except Value
            Document.prototype.getElementsByAttributeNameExceptValue || (Document.prototype.getElementsByAttributeNameExceptValue = function(name, value) { return this.querySelectorAll('[' + name + ']:not([' + name + '="' + value + '"])') });

            // Get Elements By Attribute Name with Value
            Document.prototype.getElementsByAttributeNameWithValue || (Document.prototype.getElementsByAttributeNameWithValue = function(name, value) { return this.querySelectorAll('[' + name + '*="' + value + '"]') });

            // Get Elements By Attribute Name with Value except Value
            Document.prototype.getElementsByAttributeNameWithValueExceptValue || (Document.prototype.getElementsByAttributeNameWithValueExceptValue = function(name, value1, value2) { return this.querySelectorAll('[' + name + '*="' + value1 + '"]:not([' + name + '="' + value2 + '"])') });

            // Get Elements By Attribute Name with Value without Value
            Document.prototype.getElementsByAttributeNameWithValueWithoutValue || (Document.prototype.getElementsByAttributeNameWithValueWithoutValue = function(name, value1, value2) { return this.querySelectorAll('[' + name + '*="' + value1 + '"]:not([' + name + '*="' + value2 + '"])') });

            // Get Elements By Attribute Name without Value
            Document.prototype.getElementsByAttributeNameWithoutValue || (Document.prototype.getElementsByAttributeNameWithoutValue = function(name, value) { return this.querySelectorAll('[' + name + ']:not([' + name + '*="' + value + '"])') });

            // <main>
            Document.prototype.main || (Document.prototype.main = document.querySelector("main"));

            // <title>
            Document.prototype.titleElement || (Document.prototype.titleElement = document.querySelector("title"));

    /* [Main]
            --- NOTE ---
                This serves as the main module
                housing all LapysJS' Javascript functions.
    */
        /* DOM Elements */
            // Initialization
                // <key-command>
                    // Registration
                    (document.createElement("key-command").constructor !== HTMLElement) || window.customElements.define("key-command", class KeyCommand extends HTMLElement {});

                    // On DOM Ready
                    onDOMReady(function() {
                        /* Loop
                                Index all <key-command> elements.
                        */
                        for (var i = 0; i < document.getElementsByTagName("key-command").length; i++)
                            // Event
                                // Document Element
                                    // Key Down
                                    !(document.getElementsByTagName("key-command")[i].hasAttribute("data-event-key")) || document.documentElement.setEvent("keydown", function() {
                                        /* Loop
                                                Index all <key-command> elements.
                                        */
                                        for (var i = 0; i < document.getElementsByTagName("key-command").length; i++)
                                            // Parse
                                            !(event.code == document.getElementsByTagName("key-command")[i].getAttribute("data-event-key")) || eval(document.getElementsByTagName("key-command")[i].getAttribute("data-event-function"))
                                    })
                    });

                // <lorem-ipsum>
                    // Registration
                    (document.createElement("lorem-ipsum").constructor !== HTMLElement) || window.customElements.define("lorem-ipsum", class LoremIpsum extends HTMLElement {});

                    // On DOM Ready
                    onDOMReady(function() {
                        /* Loop
                                Index all <lorem-ipsum> elements.
                        */
                        for (var i = 0; i < document.getElementsByTagName("lorem-ipsum").length; i++) {
                            // Modification
                                // <lorem-ipsum>
                                    /* Logic
                                            If
                                                the element has the "1" attribute,

                                            else if
                                                the element has the "2" attribute,

                                            else if
                                                the element has the "3" attribute,

                                            else if
                                                the element has the "4" attribute,

                                            else if
                                                the element has the "5" attribute.
                                    */
                                    if (document.getElementsByTagName("lorem-ipsum")[i].hasAttribute("1")) {
                                        // 2, 3, 4, 5
                                        document.getElementsByTagName("lorem-ipsum")[i].delAttr("2, 3, 4, 5");

                                        // Outer HTML
                                        document.getElementsByTagName("lorem-ipsum")[i].outerHTML = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
                                    }

                                    else if (document.getElementsByTagName("lorem-ipsum")[i].hasAttribute("2")) {
                                        // 1, 3, 4, 5
                                        document.getElementsByTagName("lorem-ipsum")[i].delAttr("1, 3, 4, 5");

                                        // Outer HTML
                                        document.getElementsByTagName("lorem-ipsum")[i].outerHTML = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
                                    }

                                    else if (document.getElementsByTagName("lorem-ipsum")[i].hasAttribute("3")) {
                                        // 1, 2, 4, 5
                                        document.getElementsByTagName("lorem-ipsum")[i].delAttr("1, 2, 4, 5");

                                        // Outer HTML
                                        document.getElementsByTagName("lorem-ipsum")[i].outerHTML = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
                                    }

                                    else if (document.getElementsByTagName("lorem-ipsum")[i].hasAttribute("4")) {
                                        // 1, 2, 3, 5
                                        document.getElementsByTagName("lorem-ipsum")[i].delAttr("1, 2, 3, 5");

                                        // Outer HTML
                                        document.getElementsByTagName("lorem-ipsum")[i].outerHTML = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim."
                                    }

                                    else if (document.getElementsByTagName("lorem-ipsum")[i].hasAttribute("5")) {
                                        // 1, 2, 3, 4
                                        document.getElementsByTagName("lorem-ipsum")[i].delAttr("1, 2, 3, 4");

                                        // Outer HTML
                                        document.getElementsByTagName("lorem-ipsum")[i].outerHTML = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc."
                                    };

                            // Update
                                // Loop Counter
                                i--
                        }
                    });

                // <fav-icon>
                    // Registration
                    (document.createElement("fav-icon").constructor !== HTMLElement) || window.customElements.define("fav-icon", class FavIcon extends HTMLElement {});

                    /* Logic
                            If
                                the first <fav-icon> with a Source exists.
                    */
                    if (
                        document.querySelector("fav-icon") &&
                        (document.querySelector("fav-icon") || document.createElement("fav-icon")).hasAttribute("src") ||
                        (document.querySelector("fav-icon") || document.createElement("fav-icon")).src
                    )
                        // Modification
                            // <head>
                                // Inner HTML
                                document.head.innerHTML += (
                                    '\n\r\t<!-- Document Favicon -->' +
                                    '\r\t<link href="' + (document.querySelector("fav-icon").getAttribute("src") || document.querySelector("fav-icon").src) + '" rel="icon" type="image/png">' +
                                    '\r\t<link href="' + (document.querySelector("fav-icon").getAttribute("src") || document.querySelector("fav-icon").src) + '" rel="shortcut icon">\r'
                                );

                    /* Loop
                            Index all <fav-icon> elements.
                    */
                    for (var i = 0; i < document.getElementsByTagName("fav-icon").length; i++) {
                        // <fav-icon>
                            // Deletion
                            document.getElementsByTagName("fav-icon")[i].remove();

                            // Update
                                // Loop Counter
                                i--
                    };

            // Modification
                // On DOM Ready
                onDOMReady(function() {
                    // On DOM Node Added
                    onDOMNodeAdded(function() {
                        /* Loop
                                Index all DOM elements.
                        */
                        for (var j = 0; j < document.querySelectorAll("*").length; j++) {
                            /* Data Event Function
                                    --- UPDATE REQUIRED ---
                                        If the element's "data-event-type" attribute is removed,
                                        then remove the event(s) attached to it.
                            */
                                /* Logic
                                        If
                                            the element has the
                                            "data-event-function" attribute
                                                and
                                            "data-event-type" attribute.
                                */
                                if (
                                    document.querySelectorAll("*")[j].hasAttribute("data-event-function") &&
                                    document.querySelectorAll("*")[j].hasAttribute("data-event-type")
                                ) {
                                    // Initialization
                                        // Target Element
                                        var that = document.querySelectorAll("*")[j];

                                    // Set Timeout
                                    setTimeout(function() {
                                        /* Loop
                                                Index all the Target Element's 'Event By Type''s members.
                                        */
                                        for (var j = 0; j < that.getAttribute("data-event-type").replace(/ /g, "").split(/,/g).removeRepeatedElements().length; j++)
                                            // Event
                                                // Target Element
                                                    // [Data Event Type]
                                                    that.setEvent(
                                                        that.getAttribute("data-event-type").replace(/ /g, "").split(/,/g).removeRepeatedElements()[j],

                                                        function eventByTypeFunction() {
                                                            // Parse
                                                            eval(that.getAttribute('data-event-function'))
                                                        }
                                                    )
                                    }, 0)
                                }
                        }
                    })
                });

            // Function
                // Modify DOM Elements
                function modifyDOMElements() {
                    // <body>
                        // Event
                            // Mouse Up
                                /* Set Timeout
                                        --- NOTE ---
                                            Allow "setEvent()" method to be defined.
                                */
                                setTimeout(function() {
                                    document.body.setEvent("mouseup", function() {
                                        /* Loop
                                                Index all elements.
                                        */
                                        for (var i = 0; i < document.querySelectorAll("*").length; i++)
                                            // Modification
                                                // Element
                                                    // Data Focus
                                                    document.querySelectorAll("*")[i].removeAttribute("data-focus");

                                        // Modification
                                            // Event Target
                                                // Data Focus
                                                event.path[0].setAttribute("data-focus", "")
                                    })
                                }, 100);

                    // <br>
                        /* Loop
                                Index all <br> elements.
                        */
                        for (var i = 0; i < document.getElementsByTagName("br").length; i++)
                            /* Logic
                                    If
                                        the element has an attribute of "2"
                                            or
                                        the element has an attribute of "3".
                            */
                            if (document.getElementsByTagName("br")[i].hasAttribute("2"))
                                // Modification
                                    // Outer HTML
                                    document.getElementsByTagName("br")[i].outerHTML = "<br> <br>";

                            else if (document.getElementsByTagName("br")[i].hasAttribute("3"))
                                // Modification
                                    // Outer HTML
                                    document.getElementsByTagName("br")[i].outerHTML = "<br> <br> <br>";

                    // <form>
                        /* Loop
                                Index all <form> elements.
                        */
                        for (var i = 0; i < document.getElementsByTagName("form").length; i++)
                            /* Loop
                                    Index all the element's children.
                            */
                            for (var j = 0; j < document.getElementsByTagName("form")[i].querySelectorAll("*").length; j++)
                                /* Logic
                                        If the element has a "name" attribute
                                            and
                                        its child does not have a "form" attribute
                                            and
                                        its children are <button>, <input>, <label>.
                                */
                                if (
                                    document.getElementsByTagName("form")[i].hasAttribute("name") &&
                                    !document.getElementsByTagName("form")[i].querySelectorAll("*")[j].hasAttribute("form") &&
                                    (
                                        document.getElementsByTagName("form")[i].querySelectorAll("*")[j].tagName == "BUTTON" ||
                                        document.getElementsByTagName("form")[i].querySelectorAll("*")[j].tagName == "FIELDSET" ||
                                        document.getElementsByTagName("form")[i].querySelectorAll("*")[j].tagName == "INPUT" ||
                                        document.getElementsByTagName("form")[i].querySelectorAll("*")[j].tagName == "LABEL"
                                    )
                                )
                                    // Modification
                                        // Form
                                        document.getElementsByTagName("form")[i].querySelectorAll("*")[j].setAttribute(
                                            "form",
                                            document.getElementsByTagName("form")[i].getAttribute("name")
                                        );

                    // <label>
                        /* Loop
                                Index all <label> elements.
                        */
                        for (var i = 0; i < document.getElementsByTagName("label").length; i++)
                            /* Logic
                                    If
                                        the element
                                        does not have a "for" attribute
                                            and
                                        does not have a "data-no-for" attribute.
                            */
                            if (
                                !document.getElementsByTagName("label")[i].hasAttribute("for") &&
                                !document.getElementsByTagName("label")[i].hasAttribute("data-no-for")
                            )
                                /* Logic
                                        If
                                            the element has an <input> child element with an ID,

                                        else if
                                            the element's next element sibling is an <input> with an ID,

                                        else if
                                            the element's previous element sibling is an <input> with an ID.
                                */
                                if ((document.getElementsByTagName("label")[i].querySelector("input") || document.createElement("input")).hasAttribute("id"))
                                    // Modification
                                        // For
                                        document.getElementsByTagName("label")[i].setAttribute("for", document.getElementsByTagName("label")[i].querySelector("input").id);

                                else if (
                                    (document.getElementsByTagName("label")[i].nextElementSibling || document.createElement("input")).tagName == "INPUT" &&
                                    (document.getElementsByTagName("label")[i].nextElementSibling || document.createElement("input")).hasAttribute("id")
                                )
                                    // Modification
                                        // For
                                        document.getElementsByTagName("label")[i].setAttribute("for", document.getElementsByTagName("label")[i].nextElementSibling.id);

                                else if (
                                    (document.getElementsByTagName("label")[i].previousElementSibling || document.createElement("input")).tagName == "INPUT" &&
                                    (document.getElementsByTagName("label")[i].previousElementSibling || document.createElement("input")).hasAttribute("id")
                                )
                                    // Modification
                                        // For
                                        document.getElementsByTagName("label")[i].setAttribute("for", document.getElementsByTagName("label")[i].previousElementSibling.id);

                    // <html>
                        // Modification
                            // Language
                            document.documentElement.lang = (document.documentElement.lang || window.navigator.languages.toString().replace(/, /, ",").replace(/,/g, ", "));

                    // <input>
                        /* Loop
                                Index all <input> elements.
                        */
                        for (var i = 0; i < document.getElementsByTagName("input").length; i++) {
                            /* Logic
                                    If
                                        the element has a type of "number"
                            */
                            if (
                                !document.getElementsByTagName("input")[i].min &&
                                document.getElementsByTagName("input")[i].type == "number"
                            )
                                // Modification
                                    // Minimum
                                    document.getElementsByTagName("input")[i].min = 0;

                                // Modification
                                    // Value
                                        /* Logic
                                                Switch <input> Value case to
                                                    "_lorem1", "_lorem2", "_lorem3", "_lorem4" and "_lorem5".
                                        */
                                        switch (document.getElementsByTagName("input")[i].value) {
                                            // _lorem1
                                            case "_lorem1":
                                                document.getElementsByTagName("input")[i].value = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.";
                                                break;

                                            // _lorem2
                                            case "_lorem2":
                                                document.getElementsByTagName("input")[i].value = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.";
                                                break;

                                            // _lorem3
                                            case "_lorem3":
                                                document.getElementsByTagName("input")[i].value = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.";
                                                break;

                                            // _lorem4
                                            case "_lorem4":
                                                document.getElementsByTagName("input")[i].value = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.";
                                                break;

                                            // _lorem5
                                            case "_lorem5":
                                                document.getElementsByTagName("input")[i].value = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.";
                                                break;
                                        }
                        };

                    // <option>
                        /* Loop
                                Index all <option> elements.
                        */
                        for (var i = 0; i < document.getElementsByTagName("option").length; i++)
                            // Modification
                                // Label
                                document.getElementsByTagName("option")[i].setAttribute(
                                    "label",
                                    (
                                        document.getElementsByTagName("option")[i].getAttribute("label") ||
                                        document.getElementsByTagName("option")[i].innerText.replace(/ /g, "")
                                    )
                                );

                    // <textarea>
                        /* Loop
                                Index all <textarea> elements.
                        */
                        for (var i = 0; i < document.getElementsByTagName("textarea").length; i++)
                            /* Logic
                                    If
                                        the element has a value of "<lorem-ipsum 1> </lorem-ipsum>",

                                    else if
                                        the element has a value of "<lorem-ipsum 2> </lorem-ipsum>",

                                    else if
                                        the element has a value of "<lorem-ipsum 3> </lorem-ipsum>",

                                    else if
                                        the element has a value of "<lorem-ipsum 4> </lorem-ipsum>",

                                    else if
                                        the element has a value of "<lorem-ipsum 5> </lorem-ipsum>".
                            */
                            if (
                                document.getElementsByTagName("textarea")[i].value.indexOf("<lorem-ipsum 1") >= 0 &&
                                document.getElementsByTagName("textarea")[i].value.indexOf("</lorem-ipsum>") > document.getElementsByTagName("textarea")[i].value.indexOf("<lorem-ipsum ")
                            )
                                document.getElementsByTagName("textarea")[i].value = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.";

                            else if (
                                document.getElementsByTagName("textarea")[i].value.indexOf("<lorem-ipsum 2") >= 0 &&
                                document.getElementsByTagName("textarea")[i].value.indexOf("</lorem-ipsum>") > document.getElementsByTagName("textarea")[i].value.indexOf("<lorem-ipsum ")
                            )
                                document.getElementsByTagName("textarea")[i].value = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.";

                            else if (
                                document.getElementsByTagName("textarea")[i].value.indexOf("<lorem-ipsum 3") >= 0 &&
                                document.getElementsByTagName("textarea")[i].value.indexOf("</lorem-ipsum>") > document.getElementsByTagName("textarea")[i].value.indexOf("<lorem-ipsum ")
                            )
                                document.getElementsByTagName("textarea")[i].value = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.";

                            else if (
                                document.getElementsByTagName("textarea")[i].value.indexOf("<lorem-ipsum 4") >= 0 &&
                                document.getElementsByTagName("textarea")[i].value.indexOf("</lorem-ipsum>") > document.getElementsByTagName("textarea")[i].value.indexOf("<lorem-ipsum ")
                            )
                                document.getElementsByTagName("textarea")[i].value = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.";

                            else if (
                                document.getElementsByTagName("textarea")[i].value.indexOf("<lorem-ipsum 5") >= 0 &&
                                document.getElementsByTagName("textarea")[i].value.indexOf("</lorem-ipsum>") > document.getElementsByTagName("textarea")[i].value.indexOf("<lorem-ipsum ")
                            )
                                document.getElementsByTagName("textarea")[i].value = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.";

                    // <time>
                        /* Set Timeout
                                --- WARN ---
                                    Allow for a few methods to be defined first.
                        */
                        setTimeout(function() {
                            /* Logic
                                    If
                                        a "non-dynamic time" <time> element exists.
                            */
                            if (document.querySelector("time:not(.dynamic-time)"))
                                /* Loop
                                        Index all <time> elements.
                                */
                                for (var i = 0; i < document.querySelectorAll("time:not(.dynamic-time)").length; i++)
                                    /* Logic
                                            [if:else if:else function].
                                    */
                                        // Date
                                        if (
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("dt") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("date")
                                        ) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                    // Inner HTML
                                                    that.innerHTML = new Date().getDate()
                                            }, (1 * 1000))
                                        }

                                        // Octal UTC Date
                                        else if (
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("dt_octal_utc") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("date_octal_utc") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("dt_utc_octal") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("date_utc_octal")
                                        ) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                /* Logic
                                                        If
                                                            the "data" does not have a second character.
                                                */
                                                if (!new Date().getDate().toString()[1])
                                                    // Modification
                                                        // Inner HTML
                                                        that.innerHTML = ("0" + new Date().getUTCDate());

                                                else
                                                    // Modification
                                                        // Inner HTML
                                                        that.innerHTML = new Date().getUTCDate()
                                            }, (1 * 1000))
                                        }

                                        // Octal Date
                                        else if (
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("dt_octal") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("date_octal")
                                        ) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                /* Logic
                                                        If
                                                            the "data" does not have a second character.
                                                */
                                                if (!new Date().getDate().toString()[1])
                                                    // Modification
                                                        // Inner HTML
                                                        that.innerHTML = ("0" + new Date().getDate());

                                                else
                                                    // Modification
                                                        // Inner HTML
                                                        that.innerHTML = new Date().getDate()
                                            }, (1 * 1000))
                                        }

                                        // UTC Date
                                        else if (
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("dt_utc") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("date_utc")
                                        ) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                    // Inner HTML
                                                    that.innerHTML = new Date().getUTCDate()
                                            }, (1 * 1000))
                                        }

                                        // Day
                                        else if (
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("dy") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("day")
                                        ) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                    // Inner HTML
                                                    that.innerHTML = new Date().getDay()
                                            }, (1 * 1000))
                                        }

                                        // Octal UTC Day
                                        else if (
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("dy_octal_utc") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("day_octal_utc") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("dy_utc_octal") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("day_utc_octal")
                                        ) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                /* Logic
                                                        If
                                                            the "data" does not have a second character.
                                                */
                                                if (!new Date().getUTCDay().toString()[1])
                                                    // Modification
                                                        // Inner HTML
                                                        that.innerHTML = ("0" + new Date().getUTCDay());

                                                else
                                                    // Modification
                                                        // Inner HTML
                                                        that.innerHTML = new Date().getUTCDay()
                                            }, (1 * 1000))
                                        }

                                        // Octal Day
                                        else if (
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("dy_octal") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("day_octal")
                                        ) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                /* Logic
                                                        If
                                                            the "data" does not have a second character.
                                                */
                                                if (!new Date().getDay().toString()[1])
                                                    // Modification
                                                        // Inner HTML
                                                        that.innerHTML = ("0" + new Date().getDay());

                                                else
                                                    // Modification
                                                        // Inner HTML
                                                        that.innerHTML = new Date().getDay()
                                            }, (1 * 1000))
                                        }

                                        // UTC Day
                                        else if (
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("dy_utc") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("day_utc")
                                        ) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                    // Inner HTML
                                                    that.innerHTML = new Date().getUTCDay()
                                            }, (1 * 1000))
                                        }

                                        // Full Date
                                        else if (
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("f-dt") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("full-date")
                                        ) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                    // Inner HTML
                                                    that.innerHTML = Date()
                                            }, (1 * 1000))
                                        }

                                        // Full Year
                                        else if (
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("f-yr") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("full-year")
                                        ) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                    // Inner HTML
                                                    that.innerHTML = new Date().getFullYear()
                                            }, (1 * 1000))
                                        }

                                        // UTC Full Year
                                        else if (
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("f-yr_utc") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("full-year_utc")
                                        ) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                    // Inner HTML
                                                    that.innerHTML = new Date().getUTCFullYear()
                                            }, (1 * 1000))
                                        }

                                        // Hour
                                        else if (
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("hr") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("hour")
                                        ) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                    // Inner HTML
                                                    that.innerHTML = new Date().getHours()
                                            }, (1 * 1000))
                                        }

                                        // Octal UTC Hour
                                        else if (
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("hr_octal_utc") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("hour_octal_utc") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("hr_utc_octal") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("hour_utc_octal")
                                        ) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                /* Logic
                                                        If
                                                            the "data" does not have a second character.
                                                */
                                                if (!new Date().getUTCHours().toString()[1])
                                                    // Modification
                                                        // Inner HTML
                                                        that.innerHTML = ("0" + new Date().getUTCHours());

                                                else
                                                    // Modification
                                                        // Inner HTML
                                                        that.innerHTML = new Date().getUTCHours()
                                            }, (1 * 1000))
                                        }

                                        // Octal Hour
                                        else if (
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("hr_octal") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("hour_octal")
                                        ) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                /* Logic
                                                        If
                                                            the "data" does not have a second character.
                                                */
                                                if (!new Date().getHours().toString()[1])
                                                    // Modification
                                                        // Inner HTML
                                                        that.innerHTML = ("0" + new Date().getHours());

                                                else
                                                    // Modification
                                                        // Inner HTML
                                                        that.innerHTML = new Date().getHours()
                                            }, (1 * 1000))
                                        }

                                        // UTC Hour
                                        else if (
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("hr_utc") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("hour_utc")
                                        ) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                    // Inner HTML
                                                    that.innerHTML = new Date().getUTCHours()
                                            }, (1 * 1000))
                                        }

                                        // Milliseconds
                                        else if (
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("mil") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("milliseconds")
                                        ) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                    // Inner HTML
                                                    that.innerHTML = new Date().getMilliseconds()
                                            }, 100)
                                        }

                                        // UTC Milliseconds
                                        else if (
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("mil_utc") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("milliseconds_utc")
                                        ) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                    // Inner HTML
                                                    that.innerHTML = new Date().getUTCMilliseconds()
                                            }, 100)
                                        }

                                        // Minute
                                        else if (
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("min") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("minute")
                                        ) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                    // Inner HTML
                                                    that.innerHTML = new Date().getMinutes()
                                            }, (1 * 1000))
                                        }

                                        // Octal UTC Minute
                                        else if (
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("min_octal_utc") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("minute_octal_utc") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("min_utc_octal") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("minute_utc_octal")
                                        ) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                /* Logic
                                                        If
                                                            the "data" does not have a second character.
                                                */
                                                if (!new Date().getUTCMinutes().toString()[1])
                                                    // Modification
                                                        // Inner HTML
                                                        that.innerHTML = ("0" + new Date().getUTCMinutes());

                                                else
                                                    // Modification
                                                        // Inner HTML
                                                        that.innerHTML = new Date().getUTCMinutes()
                                            }, (1 * 1000))
                                        }

                                        // Octal Minute
                                        else if (
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("min_octal") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("minute_octal")
                                        ) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                /* Logic
                                                        If
                                                            the "data" does not have a second character.
                                                */
                                                if (!new Date().getMinutes().toString()[1])
                                                    // Modification
                                                        // Inner HTML
                                                        that.innerHTML = ("0" + new Date().getMinutes());

                                                else
                                                    // Modification
                                                        // Inner HTML
                                                        that.innerHTML = new Date().getMinutes()
                                            }, (1 * 1000))
                                        }

                                        // UTC Minute
                                        else if (
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("min_utc") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("minute_utc")
                                        ) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                    // Inner HTML
                                                    that.innerHTML = new Date().getUTCMinutes()
                                            }, (1 * 1000))
                                        }

                                        // Month
                                        else if (
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("mth") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("month")
                                        ) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                    // Inner HTML
                                                    that.innerHTML = new Date().getMonth()
                                            }, (1 * 1000))
                                        }

                                        // Octal UTC Month
                                        else if (
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("mth_octal_utc") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("month_octal_utc") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("mth_utc_octal") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("month_utc_octal")
                                        ) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                /* Logic
                                                        If
                                                            the "data" does not have a second character.
                                                */
                                                if (!new Date().getUTCMonth().toString()[1])
                                                    // Modification
                                                        // Inner HTML
                                                        that.innerHTML = ("0" + new Date().getUTCMonth());

                                                else
                                                    // Modification
                                                        // Inner HTML
                                                        that.innerHTML = new Date().getUTCMonth()
                                            }, (1 * 1000))
                                        }

                                        // Octal Month
                                        else if (
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("mth_octal") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("month_octal")
                                        ) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                /* Logic
                                                        If
                                                            the "data" does not have a second character.
                                                */
                                                if (!new Date().getMonth().toString()[1])
                                                    // Modification
                                                        // Inner HTML
                                                        that.innerHTML = ("0" + new Date().getMonth());

                                                else
                                                    // Modification
                                                        // Inner HTML
                                                        that.innerHTML = new Date().getMonth()
                                            }, (1 * 1000))
                                        }

                                        // UTC Month
                                        else if (
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("mth_utc") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("month_utc")
                                        ) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                    // Inner HTML
                                                    that.innerHTML = new Date().getUTCMonth()
                                            }, (1 * 1000))
                                        }

                                        // Second
                                        else if (
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("sec") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("second")
                                        ) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                    // Inner HTML
                                                    that.innerHTML = new Date().getSeconds()
                                            }, (1 * 1000))
                                        }

                                        // Octal UTC Second
                                        else if (
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("sec_octal_utc") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("second_octal_utc") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("sec_utc_octal") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("second_utc_octal")
                                        ) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                /* Logic
                                                        If
                                                            the "data" does not have a second character.
                                                */
                                                if (!new Date().getUTCSeconds().toString()[1])
                                                    // Modification
                                                        // Inner HTML
                                                        that.innerHTML = ("0" + new Date().getUTCSeconds());

                                                else
                                                    // Modification
                                                        // Inner HTML
                                                        that.innerHTML = new Date().getUTCSeconds()
                                            }, (1 * 1000))
                                        }

                                        // Octal Second
                                        else if (
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("sec_octal") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("second_octal")
                                        ) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                /* Logic
                                                        If
                                                            the "data" does not have a second character.
                                                */
                                                if (!new Date().getSeconds().toString()[1])
                                                    // Modification
                                                        // Inner HTML
                                                        that.innerHTML = ("0" + new Date().getSeconds());

                                                else
                                                    // Modification
                                                        // Inner HTML
                                                        that.innerHTML = new Date().getSeconds()
                                            }, (1 * 1000))
                                        }

                                        // UTC Second
                                        else if (
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("sec_utc") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("second_utc")
                                        ) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                    // Inner HTML
                                                    that.innerHTML = new Date().getUTCSeconds()
                                            }, (1 * 1000))
                                        }

                                        // Time
                                        else if (document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("time")) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                    // Inner HTML
                                                    that.innerHTML = (+new Date() || new Date().getTime())
                                            }, 100)
                                        }

                                        // Time Zone Offset
                                        else if (document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("timezone-offset")) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                    // Inner HTML
                                                    that.innerHTML = new Date().getTimezoneOffset()
                                            }, (1 * 1000))
                                        }

                                        // Year
                                        else if (
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("yr") ||
                                            document.querySelectorAll("time:not(.dynamic-time)")[i].hasClass("year")
                                        ) {
                                            // Initialization
                                                // Target Element
                                                var that = document.querySelectorAll("time:not(.dynamic-time)")[i];

                                            // Set Interval
                                            setInterval(function() {
                                                // Modification
                                                    // Class
                                                    that.addClass("dynamic-time");

                                                    // Inner HTML
                                                    that.innerHTML = new Date().getYear()
                                            }, (1 * 1000))
                                        }
                        }, 100);

                    // Modification
                        // Element | EventTarget | HTML Collection | HTML Element | Node | NodeList
                            /* Has Class
                                    --- WARN ---
                                        Should be defined before the "addClass()" and "delClass()" methods.
                            */
                            Element.prototype.hasClass = function(name) {
                                // Initialization
                                    // Has Class
                                    var hasClass = false;

                                /* Logic
                                        If
                                            the Target Element has a class value.
                                */
                                if (this.getAttribute("class"))
                                    /* Loop
                                            Index all class values.
                                    */
                                    for (var i = 0; i < this.getAttribute("class").trim().split(/ /g).length; i++)
                                        /* Logic
                                                If
                                                    any of the values (modified) are the specified Name.
                                        */
                                        if (this.getAttribute("class").trim().split(/ /g)[i].trim() == name) {
                                            // Update
                                                // Has Class
                                                hasClass = true;

                                            // Break
                                            break
                                        };

                                // Return
                                return hasClass
                            };

                            // Close
                            Element.prototype.close = function() {
                                // Modification
                                    // Target Element
                                        // Data Open
                                        this.removeAttribute("data-open");

                                        // Data Close
                                        this.setAttribute("data-close", "")
                            };

                            // Add Class
                            Element.prototype.addClass = function(name) {
                                // Target Element
                                    // Definition
                                    var that = this;

                                    // Modification
                                        // Class
                                        (
                                            this.hasClass(name) ||
                                            (function() {
                                                /* Logic
                                                        If
                                                            the Target Element has a class value.
                                                */
                                                if (that.getAttribute("class"))
                                                    /* Logic
                                                            If
                                                                there are multiple class values.
                                                    */
                                                    if (that.getAttribute("class").indexOf(" ") >= 0)
                                                        // Return
                                                        return (that.getAttribute("class").indexOf(name) >= 0);

                                                    else
                                                        // Return
                                                        return that.hasClass(name);

                                                else
                                                    // Return
                                                    return that.hasClass(name)
                                            })()
                                        ) ||
                                        this.setAttribute(
                                            "class",
                                            ((this.getAttribute("class") || "") + " " + name).trim()
                                        )
                            };

                            // Delete Attribute
                            Element.prototype.delAttr = function(name) {
                                /* Logic
                                        If
                                            Name is not "_all".
                                */
                                if (name != "_all")
                                    /* Loop
                                            Index all Names.
                                    */
                                    for (var i = 0; i < name.replace(/ /g, "").split(/,/).length; i++)
                                        // Modification
                                            // Target Element
                                                // [Name]
                                                this.removeAttribute(name.replace(/ /g, "").split(/,/)[i]);

                                else
                                    /* Loop
                                            Index all the Target Element's attributes.
                                    */
                                    for (var i = 0; i < this.attributes.length; i++) {
                                        // Modification
                                            // Target Element
                                                // [Name]
                                                this.removeAttribute(this.attributes[i].name);

                                        // Update
                                            // Loop Counter
                                            i--
                                    }
                            };

                            // Delete Class
                            Element.prototype.delClass = function(data) {
                                // Target Element
                                    /* Logic
                                            If
                                                Data is "_all",

                                            else if
                                                Data is a "number"

                                            else if
                                                Data is a "string".
                                    */
                                    if (data == "_all")
                                        this.removeAttribute("class");

                                    else if (typeof data == "number") {
                                        /* Logic
                                                If
                                                    the element has a single class only.
                                        */
                                        if (
                                            this.getAttribute("class").indexOf(" ") <= -1 &&
                                            data == 0
                                        )
                                            // Modification
                                                // Class
                                                this.removeAttribute("class");

                                        else
                                            // Modification
                                                // Class
                                                this.setAttribute("class", this.getAttribute("class").replace((this.getAttribute("class").trim().split(/ /g)[data] || ""), "").trim())
                                    }

                                    else if (typeof data == "string") {
                                        /* Logic
                                                If
                                                    the element has a single class only.
                                        */
                                        if (this.getAttribute("class").indexOf(" ") <= -1) {
                                            /* Logic
                                                    If
                                                        the element's class is the specified "data".
                                            */
                                            if (this.getAttribute("class") == data)
                                                // Modification
                                                    // Class
                                                    this.removeAttribute("class")
                                        }

                                        else {
                                            var that = this;

                                            /* Logic
                                                    If the class node is the specified "data".
                                            */
                                            if (this.hasClass(data) || (function() { if (that.getAttribute("class")) if (that.getAttribute("class").indexOf(" ") >= 0) return (that.getAttribute("class").indexOf(data) >= 0); else return that.hasClass(data); else return that.hasClass(data) })())
                                                this.setAttribute("class", this.getAttribute("class").replace(data, "").trim())
                                        }
                                    };

                                    this.getAttribute("class") || this.removeAttribute("class")
                            };

                            // Delete (Inline) Style
                            Element.prototype.delStyle = function(style) {
                                /* Logic
                                        If
                                            Style is not "_all"
                                                and
                                            has a "style" attribute.
                                */
                                if (style != "_all" && this.getAttribute("style")) {
                                    /* Logic
                                            If
                                                the element has the "style" attribute.
                                    */
                                    if (this.hasAttribute("style")) {
                                        // Initialization
                                            // Target Element
                                            var that = this;

                                        // Modification
                                            // Style
                                            that.style = that.getAttribute("style").replace(
                                                /* --- NOTE ---
                                                        Modify the element's "style" attribute.
                                                */
                                                that.getAttribute("style").slice(
                                                    /* --- NOTE ---
                                                            The first instance of the style.
                                                    */
                                                        // [property]
                                                        that.getAttribute("style").indexOf(style),

                                                    /* --- NOTE ---
                                                            The length of the style and its value.
                                                    */
                                                        // [property: value]
                                                        (function() {
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
                                                            if (that.getAttribute("style").indexOf(style + ": " + (that.style[style] || window.getComputedStyle(that).getPropertyValue(style))) >= 0)
                                                                // Return
                                                                return (that.getAttribute("style").indexOf(style) + (style + ": " + (that.style[style] || window.getComputedStyle(that).getPropertyValue(style))).toString().length);

                                                            else if (that.getAttribute("style").indexOf(style + ":" + (that.style[style] || window.getComputedStyle(that).getPropertyValue(style))) >= 0)
                                                                // Return
                                                                return (that.getAttribute("style").indexOf(style) + (style + ":" + (that.style[style] || window.getComputedStyle(that).getPropertyValue(style))).toString().length);

                                                            else if (that.getAttribute("style").indexOf(style + " :" + (that.style[style] || window.getComputedStyle(that).getPropertyValue(style))) >= 0)
                                                                // Return
                                                                return (that.getAttribute("style").indexOf(style) + (style + " :" + (that.style[style] || window.getComputedStyle(element).getPropertyValue(style))).toString().length);

                                                            else if (that.getAttribute("style").indexOf(style + " : " + (that.style[style] || window.getComputedStyle(element).getPropertyValue(style))) >= 0)
                                                                // Return
                                                                return (that.getAttribute("style").indexOf(style) + (style + " : " + (that.style[style] || window.getComputedStyle(element).getPropertyValue(style))).toString().length);

                                                            else
                                                                // Return
                                                                return 0
                                                        })() +

                                                        // [value;]
                                                        (function() {
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
                                                            if (that.getAttribute("style").indexOf((that.style[style] || window.getComputedStyle(that).getPropertyValue(style)) + "; ") >= 0)
                                                                // Return
                                                                return (that.getAttribute("style").indexOf(style) + "; ".length);

                                                            else if (that.getAttribute("style").indexOf((that.style[style] || window.getComputedStyle(that).getPropertyValue(style)) + " ;") >= 0)
                                                                // Return
                                                                return (that.getAttribute("style").indexOf(style) + " ;".length);

                                                            else if (that.getAttribute("style").indexOf((that.style[style] || window.getComputedStyle(that).getPropertyValue(style)) + ";") >= 0)
                                                                // Return
                                                                return (that.getAttribute("style").indexOf(style) + ";".length);

                                                            else if (that.getAttribute("style").indexOf((that.style[style] || window.getComputedStyle(that).getPropertyValue(style)) + " ; ") >= 0)
                                                                // Return
                                                                return (that.getAttribute("style").indexOf(style) + " ; ".length);

                                                            else
                                                                // Return
                                                                return 0
                                                        })()
                                                ),

                                                /* --- NOTE ---
                                                        Replace with nothing.
                                                */
                                                ""
                                            )
                                    };

                                    /* Logic
                                            If
                                                the element's "style" is 'empty'.
                                    */
                                    if (that.getAttribute("style") == "")
                                    // Modification
                                        // Style
                                        that.removeAttribute("style")
                                }

                                else
                                    this.removeAttribute("style")
                            };

                            // Get Attribute
                            Element.prototype.getAttr = function(data) {
                                /* Logic
                                        If
                                            Data data type is a "number",

                                        else if
                                            Data data type is a "object",

                                        else if
                                            Data data type is a "string".
                                */
                                if (typeof data == "number")
                                    // Return
                                    return this.getAttribute((this.attributes[data] || document.createElement("div")).name);

                                else if (typeof data == "object") {
                                    // Initialization
                                        // Attributes
                                        var attributes = [];

                                    /* Loop
                                            Index all members of Data.
                                    */
                                    for (var i = 0; i < data.length; i++)
                                        // Update
                                            // Attributes
                                            attributes[i] = this.getAttribute((this.attributes[data[i]] || document.createElement("div")).name);

                                    // Return
                                    return attributes
                                }

                                else if (typeof data == "string")
                                    /* Logic
                                            If
                                                Data does not have a comma.
                                    */
                                    if (data.indexOf(",") <= -1)
                                        // Return
                                        return this.getAttribute(data);

                                    else {
                                        // Initialization
                                            // Attributes
                                            var attributes = [];

                                        /* Loop
                                                Index all members of Data.
                                        */
                                        for (var i = 0; i < (data.match(/,/g) || []).length + 1; i++)
                                            // Update
                                                // Attributes
                                                attributes[i] = this.getAttribute((data.replace(/ /g, "").split(/,/)[i] || ""));

                                        // Return
                                        return attributes
                                    }
                            };

                            // Get CSS
                            Element.prototype.getCSS = function(property) {
                                // Update
                                    // Property
                                    property = property.replace(/[A-Z]/g, function(data) {
                                        // Return
                                        return ("-" + data.toLowerCase())
                                    });

                                // Return
                                return (this.style[property] || window.getComputedStyle(this).getPropertyValue(property))
                            };

                            // Get Elements By Attribute Name
                            Element.prototype.getElementsByAttributeName = document.getElementsByAttributeName;

                            // Get Elements By Attribute Name and Value
                            Element.prototype.getElementsByAttributeNameAndValue = document.getElementsByAttributeNameAndValue;

                            // Get Elements By Attribute Name and Value except Value
                            Element.prototype.getElementsByAttributeNameAndValueExceptValue = document.getElementsByAttributeNameAndValueExceptValue;

                            // Get Elements By Attribute Name and Value without Value
                            Element.prototype.getElementsByAttributeNameAndValueWithoutValue = document.getElementsByAttributeNameAndValueWithoutValue;

                            // Get Elements By Attribute Name except Value
                            Element.prototype.getElementsByAttributeNameExceptValue = document.getElementsByAttributeNameExceptValue;

                            // Get Elements By Attribute Name with Value
                            Element.prototype.getElementsByAttributeNameWithValue = document.getElementsByAttributeNameWithValue;

                            // Get Elements By Attribute Name with Value except Value
                            Element.prototype.getElementsByAttributeNameWithValueExceptValue = document.getElementsByAttributeNameWithValueExceptValue;

                            // Get Elements By Attribute Name with Value without Value
                            Element.prototype.getElementsByAttributeNameWithValueWithoutValue = document.getElementsByAttributeNameWithValueWithoutValue;

                            // Get Elements By Attribute Name without Value
                            Element.prototype.getElementsByAttributeNameWithoutValue = document.getElementsByAttributeNameWithoutValue;

                            // Get Elements Related By Data ID
                            Element.prototype.getElementsRelatedByDataID = function() {
                                // Return
                                return document.querySelectorAll('[data-id="' + this.getAttribute('data-id') + '"]')
                            };

                            // Has Attribute
                            Element.prototype.hasAttr = function(name) {
                                // Return
                                return this.hasAttribute(name)
                            };

                            Element.prototype.hasChild = function(child) {
                                // Return
                                return (this != child && this.contains((child || document.createElement("div"))))
                            };

                            // Has Child (Element) By Query Selector
                            Element.prototype.hasChildByQuerySelector = function(selector) {
                                // Return
                                return !!this.querySelector(selector)
                            };

                            // Open
                            Element.prototype.open = function() {
                                // Modification
                                    // Target Element
                                        // Data Close
                                        this.removeAttribute("data-close");

                                        // Data Open
                                        this.setAttribute("data-open", "")
                            };

                            // Relate Element By Data ID
                            Element.prototype.relateElementByDataID = function(element) {
                                element.setAttribute("data-id", this.getAttribute("data-id"))
                            };

                            // Scroll To
                            Element.prototype.scrollToElement || (Element.prototype.scrollToElement = function() {
                                // Target Element
                                    // Scroll Into View
                                    this.scrollIntoView()
                            });

                            // Set Attribute
                            Element.prototype.setAttr = function(name, value) {
                                /* Loop
                                        Index all Names.
                                */
                                for (var i = 0; i < name.split(/,/g).length; i++)
                                    // Modification
                                        // Target Element
                                            // [Name]
                                            this.setAttribute(name.split(/,/g)[i], (value.split(/,/g)[i] || ""));

                                // Modification (if Name is "class" or "style")
                                    // Target Element
                                        // [Name]
                                        !(name == "class" || name == "style") || this.setAttribute(name, this.getAttribute(name).trim())
                            };

                            /* Attribute
                                    --- WARN ---
                                        This method can only be defined after the "getAttr()" and "setAttr()" method.
                            */
                            Element.prototype.attr = function(name, value) {
                                /* Logic
                                        If
                                            Value is specified.
                                */
                                if (value)
                                    // Modification
                                        // Target Element
                                            // [Name]
                                            this.setAttr(name, value);

                                else
                                    // Return
                                    return this.getAttr(name)
                            };

                            // Add Event
                            EventTarget.prototype.addEvent = function(type, listener) {
                                // Target Element
                                    // Modification
                                        // New Event
                                        this.customEvents = (this.customEvents || {});
                                            // Modification
                                                // [Type]
                                                this.customEvents[type] = document.createEvent("Event");
                                                    // Initialize Event
                                                    this.customEvents[type].initEvent(type, true, true);

                                    // Event
                                        // [New Event]
                                        this.addEventListener(type, listener, false)
                            };

                            // Delete Event
                            EventTarget.prototype.delEvent = function(type, listener) {
                                /* Loop
                                        Index all Types
                                */
                                for (var i = 0; i < type.replace(/ /g, "").split(/,/g).length; i++)
                                    // Event
                                        // [if]
                                        (window.removeEventListener) ?
                                            // [true]
                                                // [Type]
                                                (this || window).removeEventListener(type.replace(/ /g, "").split(/,/g)[i], listener) :

                                            // [false]
                                                // On [Type]
                                                (this || window).detachEvent(("on" + type.replace(/ /g, "").split(/,/g)[i]), listener)
                            };

                            // [Query Selector (All)]
                            EventTarget.prototype.$$ || (EventTarget.prototype.$$ = function(selector, index) {
                                // Update
                                    // Target
                                    var that = (this || document);
                                    (this == window) ? that = document : false;

                                /* Logic
                                        If
                                            "selector" is a "string".
                                */
                                if (typeof selector == "string")
                                    /* Logic
                                            If
                                                "index" is not 0,

                                            else if
                                                the returned node list does not have a second member
                                    */
                                    if (index != 0) {
                                        /* Logic
                                                Switch "index" case to
                                                    "array", "length" and "_length".
                                        */
                                        switch (index) {
                                            case "array":
                                                // Return
                                                return that.querySelectorAll(selector);
                                                break;

                                            case "length":
                                                // Return
                                                return that.querySelectorAll(selector).length;
                                                break;

                                            case "_length":
                                                // Return
                                                return (that.querySelectorAll(selector).length - 1);
                                                break;
                                        };

                                        /* Logic
                                                If
                                                    "index" is a number,

                                                else if
                                                    multiple instances of the specified element is not defined.
                                        */
                                        if (typeof index == "number")
                                            // Return
                                            return that.querySelectorAll(selector)[index];

                                        else if (!that.querySelectorAll(selector)[1])
                                            // Return
                                            return that.querySelector(selector);

                                        else
                                            // Return
                                            return that.querySelectorAll(selector);
                                    }

                                    else
                                        // Return
                                        return that.querySelector(selector)
                            });

                            // Run Event
                            EventTarget.prototype.runEvent = function(type) {
                                // Execution
                                    // Target Element
                                        // [New Event]
                                        this.dispatchEvent(this.customEvents[type])
                            };

                            // Set Event
                            EventTarget.prototype.setEvent || (EventTarget.prototype.setEvent = function(type, listener, useCapture, wantsUntrusted) {
                                /* Loop
                                        Index all Types.
                                */
                                for (var i = 0; i < type.replace(/ /g, "").split(/,/g).length; i++)
                                    // Event
                                        // [if]
                                        (window.addEventListener) ?
                                            // [true]
                                                // [Type]
                                                (this || window).addEventListener(type.replace(/ /g, "").split(/,/g)[i], listener, useCapture, wantsUntrusted) :

                                            // [false]
                                                // On [Type]
                                                (this || window).attachEvent(("on" + type.replace(/ /g, "").split(/,/g)[i]), listener, useCapture, wantsUntrusted)
                            });

                            // Add Class
                            HTMLCollection.prototype.addClass = function(name) {
                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Modification
                                        // Target Element
                                            // Class
                                            this[i].addClass(name)
                            };

                            // Add Event
                            HTMLCollection.prototype.addEvent = function(type, listener) {
                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Event
                                        // Target Element
                                            // [Type]
                                            this[i].addEvent(type, listener)
                            };

                            // Add Event Listener
                            HTMLCollection.prototype.addEventListener = function(type, listener, useCapture, wantsUntrusted) {
                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Event
                                        // Target Element
                                            // [Type]
                                            this[i].addEventListener(type, listener, useCapture, wantsUntrusted)
                            };

                            // Append After
                            HTMLCollection.prototype.appendAfter = function(sibling) {
                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Insertion
                                        // Target Element
                                        this[i].appendAfter(sibling)
                            };

                            // Append Before
                            HTMLCollection.prototype.appendBefore = function(sibling) {
                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Insertion
                                        // Target Element
                                    this[i].appendBefore(sibling)
                            };

                            // Close
                            HTMLCollection.prototype.close = function() {
                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Target Element
                                        // Close
                                        this[i].close()
                            };

                            // Delete
                            HTMLCollection.prototype.delete = function() {
                                /* Logic
                                        If
                                            the number of DOM Elements is greater than
                                            the number of members of the HTML Collection.
                                */
                                if (document.querySelectorAll("*").length > this.length) {
                                    // Initialization
                                        // Node List
                                        var nodeList = this;

                                    /* Loop
                                            Index all members of the HTML Collection.
                                    */
                                    for (var i = 0; i < this.length; i++)
                                        // Deletion
                                            // Target Element
                                            (nodeList[i] || document.createElement("div")).remove()
                                }

                                else
                                    // LapysJS > Error
                                    LapysJS.error("LapysJS cannot delete all DOM Elements.")
                            };

                            // Delete Attribute
                            HTMLCollection.prototype.delAttr = function(name) {
                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Modification
                                        // Target Element
                                            // [Name]
                                            this[i].delAttr(name)
                            };

                            // Delete Class
                            HTMLCollection.prototype.delClass = function(data) {
                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Modification
                                        // Target Element
                                            // Class
                                            this[i].delClass(data)
                            };

                            // Delete Event
                            HTMLCollection.prototype.delEvent = function(type, listener) {
                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Event
                                        // Target Element
                                            // [Type]
                                            this[i].delEvent(type, listener)
                            };

                            // Delete Style
                            HTMLCollection.prototype.delStyle = function(style) {
                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Modification
                                        // Target Element
                                            // Style
                                            this[i].delStyle(style)
                            };

                            /* Every
                                    --- CONSIDER ---
                                        Should be able to access DOM Elements within the NodeList
                                            or
                                        should have a global index to work with.
                            */
                            HTMLCollection.prototype.every = function(func, start, end) {
                                // Update
                                    // Start
                                        /* Logic
                                                If
                                                    Start is less than 0.
                                        */
                                        if (start < 0)
                                            start = 0;

                                    // End
                                        /* Logic
                                                If
                                                    End is greater than the Node List's length.
                                        */
                                        if (end > this.length)
                                            end = this.length;

                                /* Logic
                                        If
                                            Function data type is "function".
                                */
                                if (typeof func == "function")
                                    /* Loop
                                            [for]
                                    */
                                    for (var k = (start || 0); k < (end || this.length); k++)
                                        // Function
                                        func()
                            };

                            // Get Attr[ibute]
                            HTMLCollection.prototype.getAttr = function(name) {
                                // Initialization
                                    // Array
                                    var array = [];

                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Update
                                        // Array
                                        array[i] = this[i].getAttr(name);

                                // Return
                                return array
                            };

                            // Get Attribute
                            HTMLCollection.prototype.getAttribute = function(name) {
                                // Initialization
                                    // Array
                                    var array = [];

                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Update
                                        // Array
                                        array[i] = this[i].getAttribute(name);

                                // Return
                                return array
                            };

                            // Get CSS
                            HTMLCollection.prototype.getCSS = function(property) {
                                // Initialization
                                    // Array
                                    var array = [];

                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Update
                                        // Array
                                        array[i] = this[i].getCSS(property);

                                // Return
                                return array
                            };

                            // Get Elements By Attribute Name
                            HTMLCollection.prototype.getElementsByAttributeName = function(name) {
                                // Initialization
                                    // Array
                                    var array = [];

                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Update
                                        // Array
                                        array[i] = this[i].getElementsByAttributeName(name);

                                // Return
                                return array
                            };

                            // Get Elements By Attribute Name and Value
                            HTMLCollection.prototype.getElementsByAttributeNameAndValue = function(name, value) {
                                // Initialization
                                    // Array
                                    var array = [];

                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Update
                                        // Array
                                        array[i] = this[i].getElementsByAttributeNameAndValue(name, value);

                                // Return
                                return array
                            };

                            // Get Elements By Attribute Name and Value except Value
                            HTMLCollection.prototype.getElementsByAttributeNameAndValueExceptValue = function(name, value1, value2) {
                                // Initialization
                                    // Array
                                    var array = [];

                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Update
                                        // Array
                                        array[i] = this[i].getElementsByAttributeNameAndValueExceptValue(name, value1, value2);

                                // Return
                                return array
                            };

                            // Get Elements By Attribute Name and Value without Value
                            HTMLCollection.prototype.getElementsByAttributeNameAndValueWithoutValue = function(name, value1, value2) {
                                // Initialization
                                    // Array
                                    var array = [];

                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Update
                                        // Array
                                        array[i] = this[i].getElementsByAttributeNameAndValueWithoutValue(name, value1, value2);

                                // Return
                                return array
                            };

                            // Get Elements By Attribute Name except Value
                            HTMLCollection.prototype.getElementsByAttributeNameExceptValue = function(name, value) {
                                // Update
                                    // Array
                                    var array = [];

                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Update
                                        // Array
                                        array[i] = this[i].getElementsByAttributeNameExceptValue(name, value);

                                // Return
                                return array
                            };

                            // Get Elements By Attribute Name with Value
                            HTMLCollection.prototype.getElementsByAttributeNameWithValue = function(name, value) {
                                // Initialization
                                    // Array
                                    var array = [];

                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Update
                                        // Array
                                        array[i] = this[i].getElementsByAttributeNameWithValue(name, value);

                                // Return
                                return array
                            };

                            // Get Elements By Attribute Name with Value except Value
                            HTMLCollection.prototype.getElementsByAttributeNameWithValueExceptValue = function(name, value1, value2) {
                                // Initialization
                                    // Array
                                    var array = [];

                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Update
                                        // Array
                                        array[i] = this[i].getElementsByAttributeNameWithValueExceptValue(name, value1, value2);

                                // Return
                                return array
                            };

                            // Get Elements By Attribute Name with Value without Value
                            HTMLCollection.prototype.getElementsByAttributeNameWithValueWithoutValue = function(name, value1, value2) {
                                // Initialization
                                    // Array
                                    var array = [];

                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Update
                                        // Array
                                        array[i] = this[i].getElementsByAttributeNameWithValueWithoutValue(name, value1, value2);

                                // Return
                                return array
                            };

                            // Get Elements By Attribute Name without Value
                            HTMLCollection.prototype.getElementsByAttributeNameWithoutValue = function(name, value) {
                                // Initialization
                                    // Array
                                    var array = [];

                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Update
                                        // Array
                                        array[i] = this[i].getElementsByAttributeNameWithoutValue(name, value);

                                // Return
                                return array
                            };

                            // Get Elements Related By Data ID
                            HTMLCollection.prototype.getElementsRelatedByDataID = function() {
                                // Initialization
                                    // Array
                                    var array = [];

                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Update
                                        // Array
                                        array[i] = this[i].getElementsRelatedByDataID();

                                // Return
                                return array
                            };

                            // Has Attr[ibute]
                            HTMLCollection.prototype.hasAttr = function(name) {
                                // Initialization
                                    // Array
                                    var array = [];

                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Update
                                        // Array
                                        array[i] = this[i].hasAttr(name);

                                // Return
                                return array
                            };

                            // Has Attribute
                            HTMLCollection.prototype.hasAttribute = function(name) {
                                // Initialization
                                    // Array
                                    var array = [];

                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Update
                                        // Array
                                        array[i] = this[i].hasAttribute(name);

                                // Return
                                return array
                            };

                            // Has Class
                            HTMLCollection.prototype.hasClass = function(name) {
                                // Initialization
                                    // Array
                                    var array = [];

                                /* Loop
                                        Index all members of the HTMLCollection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Update
                                        // Array
                                        array[i] = this[i].hasClass(name);

                                // Return
                                return array
                            };

                            // Has Child (Element)
                            HTMLCollection.prototype.hasChild = function(child) {
                                // Initialization
                                    // Array
                                    var array = [];

                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Update
                                        // Array
                                        array[i] = this[i].hasChild(child);

                                // Return
                                return array
                            };

                            // Has Child By Query Selector
                            HTMLCollection.prototype.hasChildByQuerySelector = function(child) {
                                // Initialization
                                    // Array
                                    var array = [];

                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Update
                                        // Array
                                        array[i] = this[i].hasChildByQuerySelector(child);

                                // Return
                                return array
                            };

                            // Hide
                            HTMLCollection.prototype.hide = function(child) {
                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Modification
                                        // Target Element
                                            // Hidden
                                            this[i].hidden = true
                            };

                            // Open
                            HTMLCollection.prototype.open = function(child) {
                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Modification
                                        // Target Element
                                            // Open
                                            this[i].open()
                            };

                            // [Query Selector (All)]
                            HTMLCollection.prototype.$$ = function(selector, index) {
                                // Initialization
                                    // Array
                                    var array = [];

                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Update
                                        // Array
                                        array[i] = this[i].$$(selector, index);

                                // Return
                                return array
                            };

                            // Relate Element By Data ID
                            HTMLCollection.prototype.relateElementByDataID = function(element) {
                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Target Element
                                        // Relate Element By Data ID
                                        this[i].relateElementByDataID(element)
                            };

                            // Remove Attribute
                            HTMLCollection.prototype.removeAttribute = function(name) {
                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Modification
                                        // Target Element
                                            // [Name]
                                            this[i].removeAttribute(name)
                            };

                            // Remove Event Listener
                            HTMLCollection.prototype.removeEventListener = function(type, listener) {
                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Event
                                        // Target Element
                                            // [Type]
                                            this[i].removeEventListener(type, listener)
                            };

                            // Run Event
                            HTMLCollection.prototype.runEvent = function(type) {
                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Event
                                        // Target Element
                                            // [Type]
                                            this[i].runEvent(type)
                            };

                            // Set Attr[ibute]
                            HTMLCollection.prototype.setAttr = function(name, value) {
                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Modification
                                        // Target Element
                                            // [Name]
                                        this[i].setAttr(name, value)
                            };

                            // Set Attribute
                            HTMLCollection.prototype.setAttribute = function(name, value) {
                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Modification
                                        // Target Element
                                            // [Name]
                                            this[i].setAttribute(name, value)
                            };

                            // Attr[ibute]
                            HTMLCollection.prototype.attr = function(name, value) {
                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Modification
                                        // Target Element
                                            // [Name]
                                            this[i].attr(name, value)
                            };

                            // Set Event
                            HTMLCollection.prototype.setEvent = function(type, listener, useCapture, wantsUntrusted) {
                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Event
                                        // Target Element
                                            // [Type]
                                            this[i].setEvent(type, listener, useCapture, wantsUntrusted)
                            };

                            // Show
                            HTMLCollection.prototype.show = function() {
                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Target Element
                                        // Show
                                        this[i].show()
                            };

                            // Style
                            HTMLCollection.prototype.style = function(declaration, value) {
                                /* Loop
                                        Index all members of the HTML Collection.
                                */
                                for (var i = 0; i < this.length; i++)
                                    // Modification
                                        // Target Element
                                            // Style
                                                // [Declaration]
                                                this[i].style[declaration] = value
                            };

                            // Hide
                            HTMLElement.prototype.hide = function() {
                                // Modification
                                    // Target Element
                                        // Hidden
                                        this.hidden = true
                            };

                            // Show
                            HTMLElement.prototype.show = function() {
                                // Modification
                                    // Target Element
                                        // Hidden
                                        this.hidden = false
                            };

                            // Append After
                            Node.prototype.appendAfter = function(sibling) {
                                /* Logic
                                        If
                                            Sibling is defined.
                                */
                                if (sibling)
                                    /* Logic
                                            If
                                                Sibling is an element.
                                    */
                                    if (typeof sibling.tagName == "string") {
                                        // Insertion, Adjacent Initialization
                                            // Target Element
                                            (
                                                this.parentElement ||
                                                this.parentNode ||
                                                sibling.parentElement ||
                                                sibling.parentNode
                                            ).insertBefore(this, sibling);

                                            // Sibling
                                            (
                                                this.parentElement ||
                                                this.parentNode ||
                                                sibling.parentElement ||
                                                sibling.parentNode
                                            ).insertBefore(sibling, this)
                                    }
                            };

                            // Append Before
                            Node.prototype.appendBefore = function(sibling) {
                                /* Logic
                                        If
                                            Sibling is defined.
                                */
                                if (sibling)
                                    /* Logic
                                            If
                                                Sibling is an element.
                                    */
                                    if (typeof sibling.tagName == "string")
                                        // Insertion, Adjacent Initialization
                                            // Target Element
                                            (
                                                this.parentElement ||
                                                this.parentNode ||
                                                sibling.parentElement ||
                                                sibling.parentNode
                                            ).insertBefore(this, sibling)
                            };

                            // Delete
                            Node.prototype.delete = function() {
                                // Deletion
                                    // Target Element
                                    this.remove()
                            };

                            // Add Class
                            NodeList.prototype.addClass = HTMLCollection.prototype.addClass;

                            // Add Event
                            NodeList.prototype.addEvent = HTMLCollection.prototype.addEvent;

                            // Add Event Listener
                            NodeList.prototype.addEventListener = HTMLCollection.prototype.addEventListener;

                            // Append After
                            NodeList.prototype.appendAfter = HTMLCollection.prototype.appendAfter;

                            // Append Before
                            NodeList.prototype.appendBefore = HTMLCollection.prototype.appendBefore;

                            // Close
                            NodeList.prototype.close = HTMLCollection.prototype.close;

                            // Delete Attr[ibute]
                            NodeList.prototype.delAttr = HTMLCollection.prototype.delAttr;

                            // Delete Class
                            NodeList.prototype.delClass = HTMLCollection.prototype.delClass;

                            // Delete
                            NodeList.prototype.delete = HTMLCollection.prototype.delete;

                            // Delete Event
                            NodeList.prototype.delEvent = HTMLCollection.prototype.delEvent;

                            // Delete Style
                            NodeList.prototype.delStyle = HTMLCollection.prototype.delStyle;

                            // Every
                            NodeList.prototype.every = HTMLCollection.prototype.every;

                            // Get Attr[ibute]
                            NodeList.prototype.getAttr = HTMLCollection.prototype.getAttr;

                            // Get Attribute
                            NodeList.prototype.getAttribute = HTMLCollection.prototype.getAttribute;

                            // Get CSS
                            NodeList.prototype.getCSS = HTMLCollection.prototype.getCSS;

                            // Get Elements By Attribute Name
                            NodeList.prototype.getElementsByAttributeName = HTMLCollection.prototype.getElementsByAttributeName;

                            // Get Elements By Attribute Name and Value
                            NodeList.prototype.getElementsByAttributeNameAndValue = HTMLCollection.prototype.getElementsByAttributeNameAndValue;

                            // Get Elements By Attribute Name and Value except Value
                            NodeList.prototype.getElementsByAttributeNameAndValueExceptValue = HTMLCollection.prototype.getElementsByAttributeNameAndValueExceptValue;

                            // Get Elements By Attribute Name and Value without Value
                            NodeList.prototype.getElementsByAttributeNameAndValueWithoutValue = HTMLCollection.prototype.getElementsByAttributeNameAndValueWithoutValue;

                            // Get Elements By Attribute Name except Value
                            NodeList.prototype.getElementsByAttributeNameExceptValue = HTMLCollection.prototype.getElementsByAttributeNameExceptValue;

                            // Get Element By Attribute Name with Value
                            NodeList.prototype.getElementsByAttributeNameWithValue = HTMLCollection.prototype.getElementsByAttributeNameWithValue;

                            // Get Elements By Attribute Name with Value except Value
                            NodeList.prototype.getElementsByAttributeNameWithValueExceptValue = HTMLCollection.prototype.getElementsByAttributeNameWithValueExceptValue;

                            // Get Elements By Attribute Name with Value without Value
                            NodeList.prototype.getElementsByAttributeNameWithValueWithoutValue = HTMLCollection.prototype.getElementsByAttributeNameWithValueWithoutValue;

                            // Get Elements By Attribute Name without Value
                            NodeList.prototype.getElementsByAttributeNameWithoutValue = HTMLCollection.prototype.getElementsByAttributeNameWithoutValue;

                            // Get Elements Related By Data ID
                            NodeList.prototype.getElementsRelatedByDataID = HTMLCollection.prototype.getElementsRelatedByDataID;

                            // Has Attr[ibute]
                            NodeList.prototype.hasAttr = HTMLCollection.prototype.hasAttr;

                            // Has Attribute
                            NodeList.prototype.hasAttribute = HTMLCollection.prototype.hasAttribute;

                            // Has Child
                            NodeList.prototype.hasChild = HTMLCollection.prototype.hasChild;

                            // Has Child by Query Selector
                            NodeList.prototype.hasChildByQuerySelector = HTMLCollection.prototype.hasChildByQuerySelector;

                            // Has Class
                            NodeList.prototype.hasClass = HTMLCollection.prototype.hasClass;

                            // Hide
                            NodeList.prototype.hide = HTMLCollection.prototype.hide;

                            // Open
                            NodeList.prototype.open = HTMLCollection.prototype.open;

                            // [Query Selector (All)]
                            NodeList.prototype.$$ = HTMLCollection.prototype.$$;

                            // Relate Element By Data ID
                            NodeList.prototype.relateElementByDataID = HTMLCollection.prototype.relateElementByDataID;

                            // Remove Attribute
                            NodeList.prototype.removeAttribute = HTMLCollection.prototype.removeAttribute;

                            // Remove Event Listener
                            NodeList.prototype.removeEventListener = HTMLCollection.prototype.removeEventListener;

                            // Run Event
                            NodeList.prototype.runEvent = HTMLCollection.prototype.runEvent;

                            // Set Attr[ibute]
                            NodeList.prototype.setAttr = HTMLCollection.prototype.setAttr;

                            // Set Attribute
                            NodeList.prototype.setAttribute = HTMLCollection.prototype.setAttribute;

                            // Attr[ibute]
                            NodeList.prototype.attr = HTMLCollection.prototype.attr;

                            // Set Event
                            NodeList.prototype.setEvent = HTMLCollection.prototype.setEvent;

                            // Show
                            NodeList.prototype.show = HTMLCollection.prototype.show;

                            // Style
                            NodeList.prototype.style = HTMLCollection.prototype.style;

                            // Child ID
                            Object.defineProperty(Element.prototype, "childID", {
                                // Configurable
                                configurable: true,

                                // Enumerable
                                enumerable: true,

                                // Value
                                get: function() {
                                    // Initialization
                                        // Target Element
                                        var that = this.cloneNode();

                                    // Modification
                                        // Target Element
                                            // Child ID
                                            that.childElementsByID = new Object();

                                            // Inner HTML
                                            that.innerHTML = this.innerHTML;

                                    /* Loop
                                            Index all the Target Element's child elements.
                                    */
                                    for (var j = 0; j < that.querySelectorAll("*").length; j++)
                                        /* Logic
                                                If
                                                    the element has the "data-id" attribute,

                                                else if
                                                    the element has the "id" attribute.
                                        */
                                        if (!!(that.querySelectorAll("*")[j].getAttribute("data-id") || "").replace(/ /g, ""))
                                            // Update
                                                // Target Element
                                                    // Child ID
                                                    that.childElementsByID[
                                                        that.querySelectorAll("*")[j].getAttribute("data-id")
                                                    ] = that.querySelectorAll("*")[j];

                                        else if (!!(that.querySelectorAll("*")[j].getAttribute("id") || "").replace(/ /g, ""))
                                            // Update
                                                // Target Element
                                                    // Child ID
                                                    that.childElementsByID[
                                                        that.querySelectorAll("*")[j].getAttribute("id")
                                                    ] = that.querySelectorAll("*")[j];

                                    // Return
                                    return that.childElementsByID
                                },

                                set: function() {
                                    /* Do nothing… */
                                }
                            });

                            // CSS Selector
                            Object.defineProperty(Element.prototype, "CSSSelector", {
                                // Configurable
                                configurable: true,

                                // Enumerable
                                enumerable: true,

                                // Get
                                get: function() {
                                    // Initialization
                                        // Target Element
                                        var that = this;

                                        // CSS Selector
                                        var CSSSelector = (
                                            // Element Tag Name
                                            that.tagName.toLowerCase() +

                                            // Class
                                            (function() {
                                                /* Logic
                                                        If the element has a class.
                                                */
                                                if (that.getAttribute("class").indexOf(" ") <= -1)
                                                    /* Loop
                                                            Index the element's class nodes.
                                                    */
                                                    for (var i = 0; i < that.getAttribute("class").trim().split(/ /g).length; i++)
                                                        // Return
                                                        return ("." + that.getAttribute("class").trim().split(/ /g)[i]);

                                                else
                                                    // Return
                                                    return ""
                                            })() +

                                            // ID
                                            (function() {
                                                /* Logic
                                                        If
                                                            the element has an ID.
                                                */
                                                if (!!that.id)
                                                    // Return
                                                    return ("#" + that.id);

                                                else
                                                    // Return
                                                    return ""
                                            })() +

                                            // Attributes
                                            (function() {
                                                // Initialization
                                                    // Target Element
                                                        // Attributes
                                                        var thatAttributes = "";

                                                /* Loop
                                                        Index the element's attributes.
                                                */
                                                for (var i = 0; i < that.attributes.length; i++)
                                                    /* Logic
                                                            If
                                                                the attribute name is not "class" and "id" and "style".
                                                    */
                                                    if (
                                                        that.attributes[i].name != "class" &&
                                                        that.attributes[i].name != "id" &&
                                                        that.attributes[i].name != "style"
                                                    )
                                                        // Update
                                                            // Attributes
                                                            thatAttributes = ('[' + that.attributes[i].name + '="' + that.attributes[i].value + '"]');

                                                // Return
                                                    // Attributes
                                                    return thatAttributes
                                            })()
                                        );

                                    // Return
                                        // CSS Selector
                                        return CSSSelector.replace(/=\"\"/g, "")
                                },

                                // Set
                                set: function(CSSSelector) {
                                    CSSSelector = CSSSelector.replace(/ /g, "");

                                    /* Logic
                                            If
                                                the specified "CSSSelector" has "." in it.
                                    */
                                        // Class
                                        if (CSSSelector.indexOf(".") >= 0)
                                            /* Loop
                                                    For all existing class nodes.
                                            */
                                            for (var i = 0; i < CSSSelector.replace(/(\[([a-zA-Z0-9]|_|-|\=|"|'|){1,}\]|\#([a-zA-Z0-9]|_|-){1,})/g, "").trim().split(/\./).filter(function(data) { return !!data }).length; i++)
                                                // Modification
                                                    // Target Element
                                                        // Class
                                                        this.addClass(CSSSelector.replace(/(\[([a-zA-Z0-9]|_|-|\=|"|'|){1,}\]|\#([a-zA-Z0-9]|_|-){1,})/g, "").trim().split(/\./).filter(function(data) { return !!data })[i]);

                                    /* Logic
                                            If
                                                the specified "CSSSelector" has "." in it.
                                    */
                                        // ID
                                        if (CSSSelector.indexOf("#") >= 0)
                                            // Modification
                                                // Target Element
                                                    // ID
                                                    this.id = CSSSelector.replace(/(\[([a-zA-Z0-9]|_|-|\=|"|'|){1,}\]|\.([a-zA-Z0-9]|_|-){1,})|#/g, "");

                                    /* Logic
                                            If
                                                the specified "CSSSelector" has "[" in it
                                                    and
                                                the specified "CSSSelector" has "]" further than "[" in it.
                                    */
                                        // Attributes
                                        if (
                                            CSSSelector.indexOf("[") >= 0 &&
                                            CSSSelector.indexOf("]") >= 0
                                        )
                                            /* Loop
                                                    Index all existing attribute nodes that are not "class" or "id".
                                            */
                                            for (var i = 0; i < CSSSelector.replace(/(\.([a-zA-Z0-9]|_|-){1,}|\#([a-zA-Z0-9]|_|-){1,})|(\[([a-zA-Z0-9]|_|-|\=|"|'|)class([a-zA-Z0-9]|_|-|\=|"|'|){1,}\]|\[([a-zA-Z0-9]|_|-|\=|"|'|)id([a-zA-Z0-9]|_|-|\=|"|'|){1,}\])|(\[|\"|\')/g, "").split(/\]/).filter(function(data) { return !!data }).length; i++)
                                                // Modification
                                                    // Target Element
                                                        // 'Modified "CSSSelector"'
                                                        this.setAttribute(
                                                            CSSSelector.replace(/(\.([a-zA-Z0-9]|_|-){1,}|\#([a-zA-Z0-9]|_|-){1,})|(\[([a-zA-Z0-9]|_|-|\=|"|'|)class([a-zA-Z0-9]|_|-|\=|"|'|){1,}\]|\[([a-zA-Z0-9]|_|-|\=|"|'|)id([a-zA-Z0-9]|_|-|\=|"|'|){1,}\])|(\[|\"|\')/g, "").split(/\]/).filter(function(data) { return !!data })[i].slice(
                                                                0,
                                                                CSSSelector.replace(/(\.([a-zA-Z0-9]|_|-){1,}|\#([a-zA-Z0-9]|_|-){1,})|(\[([a-zA-Z0-9]|_|-|\=|"|'|)class([a-zA-Z0-9]|_|-|\=|"|'|){1,}\]|\[([a-zA-Z0-9]|_|-|\=|"|'|)id([a-zA-Z0-9]|_|-|\=|"|'|){1,}\])|(\[|\"|\')/g, "").split(/\]/).filter(function(data) { return !!data })[i].indexOf("=")
                                                            ),
                                                            CSSSelector.replace(/(\.([a-zA-Z0-9]|_|-){1,}|\#([a-zA-Z0-9]|_|-){1,})|(\[([a-zA-Z0-9]|_|-|\=|"|'|)class([a-zA-Z0-9]|_|-|\=|"|'|){1,}\]|\[([a-zA-Z0-9]|_|-|\=|"|'|)id([a-zA-Z0-9]|_|-|\=|"|'|){1,}\])|(\[|\"|\')/g, "").split(/\]/).filter(function(data) { return !!data })[i].slice(
                                                                CSSSelector.replace(/(\.([a-zA-Z0-9]|_|-){1,}|\#([a-zA-Z0-9]|_|-){1,})|(\[([a-zA-Z0-9]|_|-|\=|"|'|)class([a-zA-Z0-9]|_|-|\=|"|'|){1,}\]|\[([a-zA-Z0-9]|_|-|\=|"|'|)id([a-zA-Z0-9]|_|-|\=|"|'|){1,}\])|(\[|\"|\')/g, "").split(/\]/).filter(function(data) { return !!data })[i].indexOf("=") + "=".length
                                                            )
                                                        )
                                }
                            });

                            // Parent
                            Object.defineProperty(Element.prototype, "parent", {
                                // Configurable
                                configurable: true,

                                // Enumerable
                                enumerable: true,

                                get: function() {
                                    // Return
                                    return (this.parentElement || this.parentNode)
                                }
                            });

                            // Parent Path
                            Object.defineProperty(Element.prototype, "parentPath", {
                                // Configurable
                                configurable: true,

                                // Enumerable
                                enumerable: true,

                                // Get
                                get: function() {
                                    // Initialization
                                        // Target Element
                                        var that = this;

                                        // Parent Nodes
                                        var parents = [];

                                    /* Logic
                                            While
                                                the Target Element is still defined.
                                    */
                                    while (that) {
                                        // Update
                                            // Parent Nodes
                                            parents.unshift(that);

                                            // Target Element
                                            that = (that.parentNode || that.parentElement)
                                    };

                                    // Update
                                        // Parent Nodes
                                        parents.unshift(window);
                                        parents.reverse();

                                    // Return
                                    return parents
                                },

                                // Set
                                set: function() {
                                    /* Do nothing… */
                                }
                            });

                            // Role
                            Object.defineProperty(Element.prototype, "role", {
                                // Configurable
                                configurable: true,

                                // Enumerable
                                enumerable: true,

                                default: 2,

                                // Get
                                get: function() {
                                    // Return
                                    return this.getAttribute("role")
                                },

                                // Set
                                set: function(data) {
                                    // Modification
                                        // Target Element
                                            // Role
                                            this.setAttribute("role", data)
                                }
                            });

                            // Siblings
                            Object.defineProperty(Element.prototype, "siblings", {
                                // Configurable
                                configurable: true,

                                // Enumerable
                                enumerable: true,

                                // Get
                                get: function(number) {
                                    // Initialization
                                        // Target Element
                                        var that = this;

                                    // Return
                                    return Array.prototype.slice.call((this.parentElement || this.parentNode).children).filter(function(element) {
                                        // Return
                                        return element != that
                                    })
                                }
                            });

                            // Height
                            Object.defineProperty(HTMLCollection.prototype, "height", {
                                // Configurable
                                configurable: true,

                                // Enumerable
                                enumerable: true,

                                // Get
                                get: function() {
                                    // Initialization
                                        // Array
                                        var array = [];

                                    /* Loop
                                        Index all members of the HTML Collection.
                                */
                                    for (var i = 0; i < this.length; i++)
                                        // Update
                                            // Array
                                            array[i] = this[i].height;

                                    // Return
                                    return array
                                },

                                // Set
                                set: function(number) {
                                    /* Loop
                                            Index all members of the HTML Collection.
                                    */
                                    for (var i = 0; i < this.length; i++)
                                        // Style
                                            // Target Element
                                                // Height
                                                this[i].style.height = (number + "px");
                                }
                            });

                            // Offset
                            Object.defineProperty(HTMLCollection.prototype, "offset", {
                                // Configurable
                                configurable: true,

                                // Enumerable
                                enumerable: true,

                                // Get
                                get: function() {
                                    // Initialization
                                        // Array
                                        var array = [];

                                    /* Loop
                                            Index all members of the HTML Collection.
                                    */
                                    for (var i = 0; i < this.length; i++)
                                        // Update
                                            // Array
                                            array[i] = this[i].offset;

                                    // Return
                                    return array
                                }
                            });

                            // Parent
                            Object.defineProperty(HTMLCollection.prototype, "parent", {
                                // Configurable
                                configurable: true,

                                // Enumerable
                                enumerable: true,

                                // Get
                                get: function() {
                                    // Initialization
                                        // Array
                                        var array = [];

                                    /* Loop
                                            Index all members of the HTML Collection.
                                    */
                                    for (var i = 0; i < this.length; i++)
                                        // Update
                                            // Array
                                            array[i] = this[i].parent;

                                    // Return
                                    return array
                                }
                            });

                            // Parent Path
                            Object.defineProperty(HTMLCollection.prototype, "parentPath", {
                                // Configurable
                                configurable: true,

                                // Enumerable
                                enumerable: true,

                                // Get
                                get: function() {
                                    // Initialization
                                        // Array
                                        var array = [];

                                    /* Loop
                                            Index all members of the HTML Collection.
                                    */
                                    for (var i = 0; i < this.length; i++)
                                        // Update
                                            // Array
                                            array[i] = this[i].parentPath;

                                    // Return
                                    return array
                                }
                            });

                            // Role
                            Object.defineProperty(HTMLCollection.prototype, "role", {
                                // Configurable
                                configurable: true,

                                // Enumerable
                                enumerable: true,

                                // Get
                                get: function() {
                                    // Initialization
                                        // Array
                                        var array = [];

                                    /* Loop
                                            Index all members of the HTML Collection.
                                    */
                                    for (var i = 0; i < this.length; i++)
                                        // Update
                                            // Array
                                            array[i] = this[i].role;

                                    // Return
                                    return array
                                },

                                // Set
                                set: function(data) {
                                    /* Loop
                                            Index all members of the HTML Collection.
                                    */
                                    for (var i = 0; i < this.length; i++)
                                        // Modification
                                            // Target Element
                                                // Role
                                                this[i].role = data
                                }
                            });

                            // Siblings
                            Object.defineProperty(HTMLCollection.prototype, "siblings", {
                                // Configurable
                                configurable: true,

                                // Enumerable
                                enumerable: true,

                                // Get
                                get: function() {
                                    // Initialization
                                        // Array
                                        var array = [];

                                    /* Loop
                                            Index all members of the HTML Collection.
                                    */
                                    for (var i = 0; i < this.length; i++)
                                        // Update
                                            // Array
                                            array[i] = this[i].siblings;

                                    // Return
                                    return array
                                }
                            });

                            // Width
                            Object.defineProperty(HTMLCollection.prototype, "width", {
                                // Configurable
                                configurable: true,

                                // Enumerable
                                enumerable: true,

                                // Get
                                get: function() {
                                    // Initialization
                                    var array = [];

                                    /* Loop
                                            Index all members of the HTML Collection.
                                    */
                                    for (var i = 0; i < this.length; i++)
                                        // Update
                                            // Array
                                            array[i] = this[i].width;

                                    // Return
                                    return array
                                },

                                // Set
                                set: function(number) {
                                    /* Loop
                                            Index all members of the HTML Collection.
                                    */
                                    for (var i = 0; i < this.length; i++)
                                        // Style
                                            // Target Element
                                                // Width
                                                this[i].style.width = (number + "px")
                                }
                            });

                            // Height
                            Object.defineProperty(HTMLElement.prototype, "height", {
                                // Configurable
                                configurable: true,

                                // Enumerable
                                enumerable: true,

                                // Get
                                get: function() {
                                    // Return
                                    return this.clientHeight
                                },

                                // Set
                                set: function(number) {
                                    // Target Element
                                        // Style
                                            // Height
                                            this.style.height = (number + "px")
                                }
                            });

                            // Offset
                            Object.defineProperty(HTMLElement.prototype, "offset", {
                                // Configurable
                                configurable: true,

                                // Enumerable
                                enumerable: true,

                                // Get
                                get: function() {
                                    // Return
                                    return this.getBoundingClientRect()
                                }
                            });

                            // Width
                            Object.defineProperty(HTMLElement.prototype, "width", {
                                // Configurable
                                configurable: true,

                                // Enumerable
                                enumerable: true,

                                // Get
                                get: function() {
                                    // Return
                                    return this.clientWidth
                                },

                                // Set
                                set: function(number) {
                                    // Target Element
                                        // Style
                                            // Width
                                            this.style.width = (number + "px")
                                }
                            });

                            // Height
                            Object.defineProperty(NodeList.prototype, "height", {
                                // Configurable
                                configurable: true,

                                // Enumerable
                                enumerable: true,

                                // Get
                                get: function() {
                                    // Initialization
                                        // Array
                                        var array = [];

                                    /* Loop
                                            Index all members of the Node List.
                                    */
                                    for (var i = 0; i < this.length; i++)
                                        // Update
                                            // Array
                                            array[i] = this[i].height;

                                    // Return
                                    return array
                                },

                                // Set
                                set: function(number) {
                                    /* Loop
                                            Index all members of the Node List.
                                    */
                                    for (var i = 0; i < this.length; i++)
                                        // Style
                                            // Target Element
                                                // Height
                                                this[i].style.height = (number + "px");
                                }
                            });

                            // Offset
                            Object.defineProperty(NodeList.prototype, "offset", {
                                // Configurable
                                configurable: true,

                                // Enumerable
                                enumerable: true,

                                // Get
                                get: function() {
                                    // Initialization
                                        // Array
                                        var array = [];

                                    /* Loop
                                            Index all members of the Node List.
                                    */
                                    for (var i = 0; i < this.length; i++)
                                        // Update
                                            // Array
                                            array[i] = this[i].offset;

                                    // Return
                                    return array
                                }
                            });

                            // Parent
                            Object.defineProperty(NodeList.prototype, "parent", {
                                // Configurable
                                configurable: true,

                                // Enumerable
                                enumerable: true,

                                // Get
                                get: function() {
                                    // Initialization
                                        // Array
                                        var array = [];

                                    /* Loop
                                            Index all members of the Node List.
                                    */
                                    for (var i = 0; i < this.length; i++)
                                        // Update
                                            // Array
                                            array[i] = this[i].parent;

                                    // Return
                                    return array
                                }
                            });

                            // Parent Path
                            Object.defineProperty(NodeList.prototype, "parentPath", {
                                // Configurable
                                configurable: true,

                                // Enumerable
                                enumerable: true,

                                // Get
                                get: function() {
                                    // Initialization
                                        // Array
                                        var array = [];

                                    /* Loop
                                            Index all members of the Node List.
                                    */
                                    for (var i = 0; i < this.length; i++)
                                        // Update
                                            // Array
                                            array[i] = this[i].parentPath;

                                    // Return
                                    return array
                                }
                            });

                            // Role
                            Object.defineProperty(NodeList.prototype, "role", {
                                // Configurable
                                configurable: true,

                                // Enumerable
                                enumerable: true,

                                // Get
                                get: function() {
                                    // Initialization
                                        // Array
                                        var array = [];

                                    /* Loop
                                            Index all members of the Node List.
                                    */
                                    for (var i = 0; i < this.length; i++)
                                        // Update
                                            // Array
                                            array[i] = this[i].role;

                                    // Return
                                    return array
                                },

                                // Set
                                set: function(data) {
                                    /* Loop
                                            Index all members of the Node List.
                                    */
                                    for (var i = 0; i < this.length; i++)
                                        // Modification
                                            // Target Element
                                                // Role
                                                this[i].role = data
                                }
                            });

                            // Siblings
                            Object.defineProperty(NodeList.prototype, "siblings", {
                                // Configurable
                                configurable: true,

                                // Enumerable
                                enumerable: true,

                                // Get
                                get: function() {
                                    // Initialization
                                        // Array
                                        var array = [];

                                    /* Loop
                                            Index all members of the Node List.
                                    */
                                    for (var i = 0; i < this.length; i++)
                                        // Update
                                            // Array
                                            array[i] = this[i].siblings;

                                    // Return
                                    return array
                                }
                            });

                            // Width
                            Object.defineProperty(NodeList.prototype, "width", {
                                // Configurable
                                configurable: true,

                                // Enumerable
                                enumerable: true,

                                // Get
                                get: function() {
                                    // Initialization
                                        // Array
                                        var array = [];

                                    /* Loop
                                            Index all members of the Node List.
                                    */
                                    for (var i = 0; i < this.length; i++)
                                        // Update
                                            // Array
                                            array[i] = this[i].width;

                                    // Return
                                    return array
                                },

                                // Set
                                set: function(number) {
                                    /* Loop
                                            Index all members of the Node List.
                                    */
                                    for (var i = 0; i < this.length; i++)
                                        // Style
                                            // Target Element
                                                // Width
                                                this[i].style.width = (number + "px")
                                }
                            });

                    /* Loop
                            Index all elements.
                    */
                    for (var i = 0; i < document.querySelectorAll("*").length; i++) {
                        // Modification
                            // Class Sets
                                // On DOM Ready
                                onDOMReady(function() {
                                    // Set Timeout
                                    setTimeout(function() {
                                        /* Loop
                                                Index all DOM Elements.
                                        */
                                        for (var i = 0; i < document.querySelectorAll("*").length; i++)
                                            /* Logic
                                                    If
                                                        the element has the "class" attribute.
                                            */
                                            if (document.querySelectorAll("*")[i].hasAttribute("class")) {
                                                // Initialization
                                                    // Class Style
                                                    var classStyle = {
                                                        // Size
                                                        size: []
                                                    };

                                                /* Loop
                                                        Index all the element's class nodes.
                                                */
                                                for (var j = 0; j < document.querySelectorAll("*")[i].getAttribute("class").trim().split(/ /g).length; j++) {
                                                    // Flex-Basis Preset
                                                    if (
                                                        document.querySelectorAll("*")[i].getAttribute("class").trim().split(/ /g)[j].indexOf("flx-b_") == 0 ||
                                                        document.querySelectorAll("*")[i].getAttribute("class").trim().split(/ /g)[j].indexOf("flex-basis_") == 0
                                                    )
                                                        classStyle.size = classStyle.size.concat(["flexBasis"]);

                                                    // Height Preset
                                                    if (
                                                        document.querySelectorAll("*")[i].getAttribute("class").trim().split(/ /g)[j].indexOf("h_") == 0 ||
                                                        document.querySelectorAll("*")[i].getAttribute("class").trim().split(/ /g)[j].indexOf("height_") == 0
                                                    )
                                                        classStyle.size = classStyle.size.concat(["height"]);

                                                    // Max-Height Preset
                                                    if (
                                                        document.querySelectorAll("*")[i].getAttribute("class").trim().split(/ /g)[j].indexOf("max-h_") == 0 ||
                                                        document.querySelectorAll("*")[i].getAttribute("class").trim().split(/ /g)[j].indexOf("max-height_") == 0
                                                    )
                                                        classStyle.size = classStyle.size.concat(["maxHeight"]);

                                                    // Max-Width Preset
                                                    if (
                                                        document.querySelectorAll("*")[i].getAttribute("class").trim().split(/ /g)[j].indexOf("max-w_") == 0 ||
                                                        document.querySelectorAll("*")[i].getAttribute("class").trim().split(/ /g)[j].indexOf("max-width_") == 0
                                                    )
                                                        classStyle.size = classStyle.size.concat(["minWidth"]);

                                                    // Min-Height Preset
                                                    if (
                                                        document.querySelectorAll("*")[i].getAttribute("class").trim().split(/ /g)[j].indexOf("min-h_") == 0 ||
                                                        document.querySelectorAll("*")[i].getAttribute("class").trim().split(/ /g)[j].indexOf("min-height_") == 0
                                                    )
                                                        classStyle.size = classStyle.size.concat(["minHeight"]);

                                                    // Min-Width Preset
                                                    if (
                                                        document.querySelectorAll("*")[i].getAttribute("class").trim().split(/ /g)[j].indexOf("min-w_") == 0 ||
                                                        document.querySelectorAll("*")[i].getAttribute("class").trim().split(/ /g)[j].indexOf("min-width") == 0
                                                    )
                                                        classStyle.size = classStyle.size.concat(["minWidth"]);

                                                    // Width Preset
                                                    if (
                                                        document.querySelectorAll("*")[i].getAttribute("class").trim().split(/ /g)[j].indexOf("w_") == 0 ||
                                                        document.querySelectorAll("*")[i].getAttribute("class").trim().split(/ /g)[j].indexOf("width_") == 0
                                                    )
                                                        classStyle.size = classStyle.size.concat(["width"]);
                                                };

                                                // Style
                                                    // Size
                                                        /* Loop
                                                                Index all members of Class Style Size.
                                                        */
                                                        for (var j = 0; j < classStyle.size.length; j++)
                                                            /* Loop
                                                                    Index all class nodes of the element.
                                                            */
                                                            for (var k = 0; k < document.querySelectorAll("*")[i].getAttribute("class").trim().split(/ /g).length; k++) {
                                                                /* height
                                                                        --- CONSIDER ---
                                                                            The returned data should be the initial height of the element
                                                                            when the document is loaded,
                                                                            not its 'live' height.
                                                                */
                                                                if (document.querySelectorAll("*")[i].getAttribute("class").trim().split(/ /g)[k].indexOf("height") >= 0)
                                                                    document.querySelectorAll("*")[i].style[classStyle.size[j]] = (function() {
                                                                        // Modification
                                                                        document.querySelectorAll("*")[i]["LapysJS initialHeight"] = (document.querySelectorAll("*")[i]["LapysJS initialHeight"] || document.querySelectorAll("*")[i].clientHeight + "px");

                                                                        // Return
                                                                        return document.querySelectorAll("*")[i]["LapysJS initialHeight"]
                                                                    })();

                                                                // device-height
                                                                if (document.querySelectorAll("*")[i].getAttribute("class").trim().split(/ /g)[k].indexOf("device-height") >= 0)
                                                                    document.querySelectorAll("*")[i].style[classStyle.size[j]] = (window.innerHeight + "px");

                                                                /* width
                                                                        --- CONSIDER ---
                                                                            The returned data should be the initial width of the element
                                                                            when the document is loaded,
                                                                            not its 'live' width.
                                                                */
                                                                if (document.querySelectorAll("*")[i].getAttribute("class").trim().split(/ /g)[k].indexOf("width") >= 0)
                                                                    document.querySelectorAll("*")[i].style[classStyle.size[j]] = (function() {
                                                                        // Modification
                                                                        document.querySelectorAll("*")[i]["LapysJS initialWidth"] = (document.querySelectorAll("*")[i]["LapysJS initialWidth"] || document.querySelectorAll("*")[i].clientWidth + "px");

                                                                        // Return
                                                                        return document.querySelectorAll("*")[i]["LapysJS initialWidth"]
                                                                    })();

                                                                // device-width
                                                                if (document.querySelectorAll("*")[i].getAttribute("class").trim().split(/ /g)[k].indexOf("device-width") >= 0)
                                                                    document.querySelectorAll("*")[i].style[classStyle.size[j]] = (window.innerWidth + "px");

                                                                // fill-parent
                                                                if (document.querySelectorAll("*")[i].getAttribute("class").trim().split(/ /g)[k].indexOf("fill-parent") >= 0) {
                                                                    // Initialization
                                                                        // Fill Length
                                                                        var fillLength = 0;

                                                                    /* Loop
                                                                            Index all the element's parent's child elements.
                                                                    */
                                                                    for (var l = 0; l < (document.querySelectorAll("*")[i].parentElement || document.querySelectorAll("*")[i].parentNode).children.length; l++)
                                                                        /* Logic
                                                                                If
                                                                                    the parent's child element is not the element.
                                                                        */
                                                                        if ((document.querySelectorAll("*")[i].parentElement || document.querySelectorAll("*")[i].parentNode).children[l] != document.querySelectorAll("*")[i])
                                                                            // Update
                                                                                // Fill Length
                                                                                fillLength += parseNumber((document.querySelectorAll("*")[i].parentElement || document.querySelectorAll("*")[i].parentNode).children[l].getCSS(classStyle.size[j]));

                                                                    document.querySelectorAll("*")[i].style[classStyle.size[j]] = ((parseNumber((document.querySelectorAll("*")[i].parentElement || document.querySelectorAll("*")[i].parentNode).getCSS(classStyle.size[j])) - fillLength) + "px");
                                                                };

                                                                // match-parent
                                                                if (document.querySelectorAll("*")[i].getAttribute("class").trim().split(/ /g)[k].indexOf("match-parent") >= 0)
                                                                    document.querySelectorAll("*")[i].style[classStyle.size[j]] = (
                                                                        (
                                                                            document.querySelectorAll("*")[i].parentNode ||
                                                                            document.querySelectorAll("*")[i].parentElement
                                                                        ).style[classStyle.size[j]] ||
                                                                        window.getComputedStyle(document.querySelectorAll("*")[i].parentNode).getPropertyValue(classStyle.size[j])
                                                                    )
                                                            }
                                        }
                                    }, 100)
                                });

                            // Node Index
                            document.querySelectorAll("*")[i].nodeIndex = i;
                    }
                };
                modifyDOMElements();
                    // On DOM Node Added
                    onDOMNodeAdded(function() { modifyDOMElements() });

        /* LapysJS Plug-Ins
                --- WARN ---
                    This function is dependent on the "Modify DOM Element" module.
        */
            // Function
                // Plug-Ins
                function plugIns() {
                    // Accordion
                        /* Loop
                                Index all Accordions.
                        */
                        for (var i = 0; i < document.getElementsByClassName("accordion").length; i++) {
                            // Function
                                // Accordion
                                    // Close
                                    document.getElementsByClassName("accordion")[i].constructor.prototype["LapysJS close"] = function() {
                                        // Modification
                                            // Target Element
                                                // Data Open
                                                this.removeAttribute("data-open");

                                                // Data Close
                                                this.setAttribute("data-close", "")
                                    };
                                    document.getElementsByClassName("accordion")[i]["LapysJS close"]();

                                    // Open
                                    document.getElementsByClassName("accordion")[i].constructor.prototype["LapysJS open"] = function() {
                                        // Modification
                                            // Target Element
                                                // Data Close
                                                this.removeAttribute("data-close");

                                                // Data Open
                                                this.setAttribute("data-open", "")
                                    };

                            /* Logic
                                    If
                                        the Accordion has a Header and at least one Content.
                            */
                            if (
                                document.getElementsByClassName('accordion')[i].querySelector('[data-id="content"]') &&
                                document.getElementsByClassName('accordion')[i].querySelector('[data-id="header"]')
                            ) {
                                // Definition
                                    // Content
                                    document.getElementsByClassName('accordion')[i]["LapysJS content"] = document.getElementsByClassName('accordion')[i].querySelectorAll('[data-id="content"]');

                                    // Header
                                    document.getElementsByClassName('accordion')[i]["LapysJS header"] = document.getElementsByClassName('accordion')[i].querySelector('[data-id="header"]');

                                // Children
                                    /* Loop
                                            Index all Accordion Content and Accordion Headers.
                                    */
                                    for (var j = 0; j < document.getElementsByClassName('accordion')[i].querySelectorAll('[data-id="content"], [data-id="header"]').length; j++)
                                        // Modification
                                            // Content | Header
                                                // Accordion
                                                document.getElementsByClassName('accordion')[i].querySelectorAll('[data-id="content"], [data-id="header"]')[j]["LapysJS accordion"] = document.getElementsByClassName("accordion")[i];

                                    // Header
                                        // Events
                                            // [Data Event Type] | Mouse Up
                                            document.getElementsByClassName("accordion")[i]["LapysJS header"].setEvent(
                                                (
                                                    document.getElementsByClassName("accordion")[i].getAttribute("data-event-type") ||
                                                    document.getElementsByClassName("accordion")[i]["LapysJS header"].getAttribute("data-event-type") ||
                                                    "mouseup"
                                                ),

                                                function() {
                                                    // Toggle
                                                    !this["LapysJS toggle"] ? this["LapysJS accordion"]["LapysJS open"]() : this["LapysJS accordion"]["LapysJS close"]();

                                                    this["LapysJS toggle"] = !this["LapysJS toggle"]
                                                }
                                            )
                            }
                        };

                    // Carousel
                        /* Loop
                                Index all Carousels.
                        */
                        for (var i = 0; i < document.getElementsByClassName("carousel").length; i++) {
                            /* Logic
                                    If
                                        the Carousel has a child element.
                            */
                            if (document.getElementsByClassName("carousel")[i].children[0]) {
                                /* Logic
                                        If
                                            the Carousel is not 'modified'.
                                */
                                if (!document.getElementsByClassName("carousel")[i]["LapysJS isModified"]) {
                                    // Modification
                                        // Carousel
                                            // Current Slide Index
                                            document.getElementsByClassName("carousel")[i].constructor.prototype["LapysJS currentSlideIndex"] = 0;

                                            // Inner HTML
                                            document.getElementsByClassName("carousel")[i].innerHTML = (
                                                /* Slides Container */
                                                '\r<div class="slides-container">' +
                                                    (function() {
                                                        // Initialization
                                                            // Carousel Slides
                                                            var carouselSlides = "";

                                                        /* Loop
                                                                Index all Carousel child elements.
                                                        */
                                                        for (var j = 0; j < document.getElementsByClassName("carousel")[i].children.length; j++) {
                                                            // Modification
                                                                // Slide
                                                                    // Class
                                                                    document.getElementsByClassName("carousel")[i].children[j].className += " slide";
                                                                    document.getElementsByClassName("carousel")[i].children[j].className += (" slide-" + j);
                                                                    document.getElementsByClassName("carousel")[i].children[j].className = document.getElementsByClassName("carousel")[i].children[j].className.trim()
                                                        };

                                                        // Update
                                                            // Carousel Slides
                                                            carouselSlides += ('\r\t' + document.getElementsByClassName("carousel")[i].innerHTML);

                                                        // Return
                                                        return carouselSlides
                                                    })() +
                                                '\r</div>' +

                                                /* [Carousel Controls] */
                                                (function() {
                                                    // Initialization
                                                        // Carousel Controls
                                                        var carouselControls = "";

                                                    /* Logic
                                                            If
                                                                the Carousel has the "data-buttons" attribute.
                                                    */
                                                    if (document.getElementsByClassName("carousel")[i].hasAttribute("data-buttons"))
                                                        // Update
                                                            // Carousel Controls
                                                            carouselControls += (
                                                                /* Buttons Container */
                                                                '\n\r<div class="buttons-container">' +
                                                                    /* Left Button */
                                                                    '\r\t<button class="button left-button" onmouseup="((this.parentElement || this.parentNode).parentElement || (this.parentElement || this.parentNode).parentNode).prev()">' +
                                                                        (document.getElementsByClassName("carousel")[i].getAttribute("data-button-left-inner-html") || '<') +
                                                                    '\r\t</button>' +

                                                                    /* Right Button */
                                                                    '\r\t<button class="button right-button" onmouseup="((this.parentElement || this.parentNode).parentElement || (this.parentElement || this.parentNode).parentNode).next()">' +
                                                                        (document.getElementsByClassName("carousel")[i].getAttribute("data-button-right-inner-html") || '>') +
                                                                    '\r\t</button>' +
                                                                '\r</div>'
                                                            );

                                                    /* Logic
                                                            If
                                                                the Carousel has the "data-indicators" attribute.
                                                    */
                                                    if (document.getElementsByClassName("carousel")[i].hasAttribute("data-indicators"))
                                                        // Update
                                                            // Carousel Controls
                                                            carouselControls += (
                                                                /* Indicators Container */
                                                                '\n\r<div class="indicators-container">' +
                                                                    (function() {
                                                                        // Initialization
                                                                            // Carousel Indicators
                                                                            var carouselIndicators = "";

                                                                        /* Loop
                                                                                Index all Carousel child elements.
                                                                        */
                                                                        for (var j = 0; j < document.getElementsByClassName("carousel")[i].children.length; j++)
                                                                            // Update
                                                                                // Carousel Indicators
                                                                                carouselIndicators += (
                                                                                    '\r\t<input ' +
                                                                                        'class="indicator indicator-' + j + '" ' +
                                                                                        'onmouseup="' +
                                                                                            '((this.parentElement || this.parentNode).parentElement || (this.parentElement || this.parentNode).parentNode)[\'LapysJS toggle\'](' + j + ')' +
                                                                                        '" ' +
                                                                                        'type="checkbox">'
                                                                                );

                                                                        // Return
                                                                        return carouselIndicators
                                                                    })() +
                                                                '\r</div>'
                                                            );

                                                    // Return
                                                    return carouselControls
                                                })() +

                                                '\n'
                                            );

                                            // Is Modified
                                            document.getElementsByClassName("carousel")[i]["LapysJS isModified"] = true
                                };

                                /* Logic
                                        If
                                            the Carousel has the "data-auto" attribute.
                                */
                                if (document.getElementsByClassName("carousel")[i].hasAttribute("data-auto")) {
                                    // Modification
                                        // Carousel
                                            // Direction
                                            document.getElementsByClassName("carousel")[i]["LapysJS direction"] = (
                                                (
                                                    document.getElementsByClassName("carousel")[i].getAttribute("data-auto").slice(
                                                        0, document.getElementsByClassName("carousel")[i].getAttribute("data-auto").indexOf("_")
                                                    )
                                                ) ||
                                                "forward"
                                            );

                                            // Set Interval
                                            document.getElementsByClassName("carousel")[i]["LapysJS interval"] = (
                                                (
                                                    eval(
                                                        document.getElementsByClassName("carousel")[i].getAttribute("data-auto").slice(
                                                            document.getElementsByClassName("carousel")[i].getAttribute("data-auto").indexOf("_") +
                                                            "_".length
                                                        ).replace(/ /g, "")
                                                    ) *
                                                    1000
                                                ) ||
                                                (3 * 1000)
                                            );

                                    /* Logic
                                            If
                                                the Carousel's 'direction' is "forward"
                                                    or
                                                the Carousel's 'direction' is "right",

                                            else if
                                                the Carousel's 'direction' is "backward"
                                                    or
                                                the Carousel's 'direction' is "left".
                                    */
                                    if (
                                        document.getElementsByClassName("carousel")[i]["LapysJS direction"] == "forward" ||
                                        document.getElementsByClassName("carousel")[i]["LapysJS direction"] == "right"
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var that = document.getElementsByClassName("carousel")[i];

                                        /* Logic
                                                If
                                                    the Carousel does not have its 'Slide Interval set'.
                                        */
                                        if (!document.getElementsByClassName("carousel")[i]["LapysJS slideIntervalSet"])
                                            // Set Interval
                                            setInterval(function() {
                                                // Target Element
                                                    // Next
                                                    that["LapysJS next"]()
                                            }, document.getElementsByClassName("carousel")[i]["LapysJS interval"]);

                                        // Modification
                                            // Target Element
                                                // Slide Interval Set
                                                document.getElementsByClassName("carousel")[i]["LapysJS slideIntervalSet"] = true
                                    }

                                    else if (
                                        document.getElementsByClassName("carousel")[i]["LapysJS direction"] == "backward" ||
                                        document.getElementsByClassName("carousel")[i]["LapysJS direction"] == "left"
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var that = document.getElementsByClassName("carousel")[i];

                                        /* Logic
                                                If
                                                    the Carousel does not have its 'Slide Interval set'.
                                        */
                                        if (!document.getElementsByClassName("carousel")[i]["LapysJS slideIntervalSet"])
                                            // Set Interval
                                            setInterval(function() {
                                                // Target Element
                                                    // Previous
                                                    that["LapysJS prev"]()
                                            }, document.getElementsByClassName("carousel")[i]["LapysJS interval"]);

                                        // Modification
                                            // Target Element
                                                // Slide Interval Set
                                                document.getElementsByClassName("carousel")[i]["LapysJS slideIntervalSet"] = true
                                    }
                                };

                                // Function
                                    // Next
                                    document.getElementsByClassName("carousel")[i].constructor.prototype["LapysJS next"] = function() {
                                        /* Loop
                                                Index all the Carousel's 'Slide Container''s child elements.
                                        */
                                        for (var j = 0; j < this.querySelector(".slides-container").children.length; j++)
                                            // Slide
                                                // Modification
                                                    // Hide
                                                    this.querySelector(".slides-container").children[j].hidden = true;

                                                    // Show
                                                    this.querySelector(".slides-container").children[this["LapysJS currentSlideIndex"]].hidden = false;

                                        /* Logic
                                                If
                                                    [statement].
                                        */
                                        if (this["LapysJS currentSlideIndex"] >= (this.querySelector(".slides-container").children.length - 1))
                                            // Modification
                                                // Carousel
                                                    // Current Index
                                                    this["LapysJS currentSlideIndex"] = 0;

                                        else
                                            // Modification
                                                // Carousel
                                                    // Current Index
                                                    this["LapysJS currentSlideIndex"] += 1
                                    };

                                    // Previous
                                    document.getElementsByClassName("carousel")[i].constructor.prototype["LapysJS prev"] = function() {
                                        /* Loop
                                                Index all the Carousel's 'Slide Container''s child elements.
                                        */
                                        for (var j = 0; j < this.querySelector(".slides-container").children.length; j++)
                                            // Slide
                                                // Modification
                                                    // Hide
                                                    this.querySelector(".slides-container").children[j].hidden = true;

                                                    // Show
                                                    this.querySelector(".slides-container").children[this["LapysJS currentSlideIndex"]].hidden = false;

                                        /* Logic
                                                If
                                                    the Carousel's "Current Slide Index" is lesser than 0
                                                        or
                                                    the Carousel's "Current Slide Index" is equal to 0.
                                        */
                                        if (this["LapysJS currentSlideIndex"] <= 0)
                                            // Modification
                                                // Carousel
                                                    // Current Index
                                                    this["LapysJS currentSlideIndex"] = (this.querySelector(".slides-container").children.length - 1);

                                        else
                                            // Modification
                                                // Carousel
                                                    // Current Index
                                                    this["LapysJS currentSlideIndex"] -= 1
                                    };

                                    // Toggle
                                    document.getElementsByClassName("carousel")[i].constructor.prototype["LapysJS toggle"] = function(index) {
                                        /* Loop
                                                Index all the Carousel's 'Slide Container''s child elements.
                                        */
                                        for (var j = 0; j < this.querySelector(".slides-container").children.length; j++)
                                            // Slide
                                                // Modification
                                                    // Hide
                                                    this.querySelector(".slides-container").children[j].hidden = true;

                                                    // Show
                                                    this.querySelector(".slides-container").children[index].hidden = false;

                                        // Modification
                                            // Carousel
                                                // Current Index
                                                this["LapysJS currentSlideIndex"] = index
                                    }
                            }
                        };

                    // Clipboard
                        // Definition
                            // <clip-clone>
                            (document.createElement("clip-clone").constructor !== HTMLElement) || window.customElements.define("clip-clone", class ClipboardClone extends HTMLElement {});

                            // <clip-copy>
                            (document.createElement("clip-copy").constructor !== HTMLElement) || window.customElements.define("clip-copy", class ClipboardCopy extends HTMLElement {});

                            // <clip-cut>
                            (document.createElement("clip-cut").constructor !== HTMLElement) || window.customElements.define("clip-cut", class ClipboardCut extends HTMLElement {});

                            // <clip-paste>
                            (document.createElement("clip-paste").constructor !== HTMLElement) || window.customElements.define("clip-paste", class ClipboardPaste extends HTMLElement {});

                        /* Loop
                                Index all <clip-clone> elements.
                        */
                        for (var i = 0; i < document.getElementsByTagName("clip-clone").length; i++) {
                            // <clip-clone>
                                // Modification
                                    // Data Unit
                                    document.getElementsByTagName("clip-clone")[i].setAttribute(
                                        "data-unit",

                                        (parseInt(eval(document.getElementsByTagName("clip-clone")[i].getAttribute("data-unit"))) || 1)
                                    );

                                /* Loop
                                        For the amount unit of the element's "data-unit" attribute.
                                */
                                for (var j = 0; j < document.getElementsByTagName("clip-clone")[i].getAttribute("data-unit"); j++) {
                                    // Adjacent Initialization
                                    document.getElementsByTagName('clip-clone')[i].insertAdjacentHTML(
                                        'afterend',

                                        (
                                            document.querySelector('clip-copy[data-id="' + document.getElementsByTagName('clip-clone')[i].getAttribute('data-id') + '"]:not([data-copied])') ||
                                            document.querySelector('clip-cut[data-id="' + document.getElementsByTagName('clip-clone')[i].getAttribute('data-id') + '"]')
                                        ).outerHTML.replace(/<(clip-copy|clip-cut) /, function(data) {
                                            // Return
                                            return (data + 'data-cloned ')
                                        })
                                    )
                                };

                                // Deletion
                                    // <clip-clone>
                                    document.getElementsByTagName("clip-clone")[i].remove();

                                // Update
                                    // Loop Counter
                                    i--
                        };

                        /* Loop
                                Index all <clip-paste> elements.
                        */
                        for (var i = 0; i < document.getElementsByTagName("clip-paste").length; i++) {
                            // <clip-paste>
                                // Modification
                                    // Data Unit
                                    document.getElementsByTagName("clip-paste")[i].setAttribute(
                                        "data-unit",

                                        (parseInt(eval(document.getElementsByTagName("clip-paste")[i].getAttribute("data-unit"))) || 1)
                                    );

                                /* Loop
                                        For the amount unit of the element's "data-unit" attribute.
                                */
                                for (var j = 0; j < document.getElementsByTagName("clip-paste")[i].getAttribute("data-unit"); j++) {
                                    // Adjacent Initialization
                                    document.getElementsByTagName('clip-paste')[i].insertAdjacentHTML(
                                        'afterend',

                                        '<div data-pasted' +
                                            (function() {
                                                // Initialization
                                                    // Attributes
                                                    var attributes = '';

                                                /* Loop
                                                        Index all the <clip-paste>'s attributes.
                                                */
                                                for (var k = 0; k < document.getElementsByTagName('clip-paste')[i].attributes.length; k++)
                                                    // Update
                                                        // Attributes
                                                    attributes += (' ' + document.getElementsByTagName('clip-paste')[i].attributes[k].name + '="' + document.getElementsByTagName('clip-paste')[i].attributes[k].value + '"');

                                                /* Loop
                                                        Index all the (<clip-copy>'s or <clip-cut>'s) attributes.
                                                */
                                                for (var k = 0; k < (document.querySelector('clip-copy[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]') || document.querySelector('clip-cut[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]')).attributes.length; k++)
                                                    // Update
                                                        // Attributes
                                                        attributes += (' ' + (document.querySelector('clip-copy[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]') || document.querySelector('clip-cut[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]')).attributes[k].name + '="' + (document.querySelector('clip-copy[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]') || document.querySelector('clip-cut[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]')).attributes[k].value + '"');

                                                // Return
                                                return attributes
                                            })() +
                                        '>' +
                                            (
                                                document.querySelector('clip-copy[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]') ||
                                                document.querySelector('clip-cut[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]')
                                            ).innerHTML +
                                        '</div>'
                                    );
                                }

                                // Deletion
                                    // <clip-paste>
                                    document.getElementsByTagName("clip-paste")[i].remove();

                                // Update
                                    // Loop Counter
                                    i--
                        };

                        /* Loop
                                Index all <clip-copy> elements.
                        */
                        for (var i = 0; i < document.querySelectorAll("clip-copy:not([data-cloned]):not([data-copied]):not([data-pasted])").length; i++)
                            document.querySelectorAll("clip-copy:not([data-cloned]):not([data-copied]):not([data-pasted])")[i].setAttribute("data-copied", "");

                        /* Loop
                                Index all <clip-cut> elements.
                        */
                        for (var i = 0; i < document.getElementsByTagName("clip-cut").length; i++) {
                            // Deletion
                                // <clip-cut>
                                document.getElementsByTagName("clip-cut")[i].remove();

                            // Update
                                // Loop Counter
                                i--
                        };

                    // Dropdown
                        /* Loop
                                Index all Dropdowns.
                        */
                        for (var i = 0; i < document.getElementsByClassName("dropdown").length; i++) {
                            /* Loop
                                    If
                                        the Dropdown has the "data-id" attribute.
                            */
                            if (document.getElementsByClassName("dropdown")[i].hasAttribute("data-id")) {
                                // Modification
                                    // Content
                                    document.getElementsByClassName('dropdown')[i].constructor.prototype["LapysJS content"] = document.querySelectorAll('[data-id="' + document.getElementsByClassName('dropdown')[i].getAttribute('data-id') + '"]:not(.dropdown)');
                                        /* Loop
                                                Index all Dropdowns' content.
                                        */
                                        for (var j = 0; j < document.getElementsByClassName("dropdown")[i]["LapysJS content"].length; j++)
                                            document.getElementsByClassName("dropdown")[i]["LapysJS content"][j]["LapysJS dropdown"] = document.getElementsByClassName('dropdown')[i];

                                // Function
                                    // Close
                                    document.getElementsByClassName("dropdown")[i].constructor.prototype["LapysJS close"] = function() {
                                        /* Loop
                                                Index all the Dropdown's content.
                                        */
                                        for (var j = 0; j < this["LapysJS content"].length; j++)
                                            // Modification
                                                // Content
                                                    // Hidden
                                                    this["LapysJS content"][j].hidden = true
                                    };
                                    document.getElementsByClassName("dropdown")[i]["LapysJS close"]();

                                    // Open
                                    document.getElementsByClassName("dropdown")[i].constructor.prototype["LapysJS open"] = function() {
                                        /* Loop
                                                Index all the Dropdown's content.
                                        */
                                        for (var j = 0; j < this["LapysJS content"].length; j++)
                                            // Modification
                                                // Content
                                                    // Hidden
                                                    this["LapysJS content"][j].hidden = false
                                    }
                            };

                            /* Loop
                                    If
                                        the Dropdown has the "data-event-type" attribute.
                            */
                            if (document.getElementsByClassName("dropdown")[i].hasAttribute("data-event-type")) {
                                /* Logic
                                        If
                                            the Dropdown's "data-event-type" attribute is set to 'hover'.
                                */
                                if (document.getElementsByClassName("dropdown")[i].getAttribute("data-event-type") == "hover") {
                                    // Event
                                        // Mouse Leave
                                        document.getElementsByClassName("dropdown")[i].setEvent("mouseleave", function() {
                                            // Close
                                            this["LapysJS close"]()
                                        });

                                        // Mouse Over
                                        document.getElementsByClassName("dropdown")[i].setEvent("mouseover", function() {
                                            // Open
                                            this["LapysJS open"]()
                                        })
                                }

                                else
                                    // Event
                                        // [Data Event Type] | Mouse Up
                                        document.getElementsByClassName("dropdown")[i].setEvent(
                                            (document.getElementsByClassName("dropdown")[i].getAttribute("data-event-type") || "mouseup"),

                                            function() {
                                                // Toggle
                                                !this["LapysJS toggle"] ? this["LapysJS open"]() : this["LapysJS close"]();

                                                this["LapysJS toggle"] = !this["LapysJS toggle"]
                                            }
                                        )
                            }
                        };

                    // Dynamic Text
                        /* Loop
                                Index all Dynamic Texts.
                        */
                        for (var i = 0; i < document.getElementsByClassName("dynamic-text").length; i++)
                            /* Logic
                                    If
                                        the Dynamic Text has the "data-text" attribute
                                            and
                                        the Dynamic Text has the "data-text-event-type" attribute.
                            */
                            if (
                                document.getElementsByClassName("dynamic-text")[i].hasAttribute("data-text") &&
                                document.getElementsByClassName("dynamic-text")[i].hasAttribute("data-text-event-type")
                            ) {
                                // Dynamic Text
                                    // Modification
                                        // Content Editable
                                        document.getElementsByClassName("dynamic-text")[i].contentEditable = false;

                                        // Data Animation Delay
                                        document.getElementsByClassName("dynamic-text")[i].setAttribute(
                                            "data-animation-delay",
                                            (document.getElementsByClassName("dynamic-text")[i].getAttribute("data-animation-delay") || 2)
                                        );

                                        // Data Animation Duration
                                        document.getElementsByClassName("dynamic-text")[i].setAttribute(
                                            "data-animation-duration",
                                            (parseFloat(eval(document.getElementsByClassName("dynamic-text")[i].getAttribute("data-animation-duration"))) || 3)
                                        );

                                        // Data Text
                                        document.getElementsByClassName("dynamic-text")[i].setAttribute(
                                            "data-text",
                                            (document.getElementsByClassName("dynamic-text")[i].getAttribute("data-text").toString() || "")
                                        );

                                        // Inner HTML
                                        document.getElementsByClassName("dynamic-text")[i].innerHTML = "";

                                        // Strings
                                        document.getElementsByClassName("dynamic-text")[i].constructor.prototype["LapysJS strings"] = document.getElementsByClassName("dynamic-text")[i].getAttribute("data-text").replace(/\n/g, "").split(/_/g);

                                        // String Functions
                                        document.getElementsByClassName("dynamic-text")[i].constructor.prototype["LapysJS stringFunctions"] = document.getElementsByClassName("dynamic-text")[i].getAttribute("data-text-event-type").replace(/ /g, "").split(/([^_]*_[^_]*)_/gm).filter(function(element) {
                                            // Return
                                            return element
                                        });

                                        // Text
                                        document.getElementsByClassName("dynamic-text")[i].constructor.prototype["LapysJS text"] = {};
                                            /* Logic
                                                    If
                                                        "Strings" and "String Functions" have equal length.
                                            */
                                            if (document.getElementsByClassName("dynamic-text")[i]["LapysJS strings"].length == document.getElementsByClassName("dynamic-text")[i]["LapysJS stringFunctions"].length)
                                                /* Loop
                                                        Index all elements of "String".
                                                */
                                                for (var j = 0; j < document.getElementsByClassName("dynamic-text")[i]["LapysJS strings"].length; j++) {
                                                    // Update
                                                        // Text
                                                        document.getElementsByClassName("dynamic-text")[i]["LapysJS text"][j] = {
                                                            // Close Function
                                                            ["LapysJS closeFunction"]: document.getElementsByClassName("dynamic-text")[i]["LapysJS stringFunctions"][j].slice(document.getElementsByClassName("dynamic-text")[i]["LapysJS stringFunctions"][j].indexOf("_") + "_".length),

                                                            // Initial Function
                                                            ["LapysJS initialFunction"]: document.getElementsByClassName("dynamic-text")[i]["LapysJS stringFunctions"][j].slice(0, document.getElementsByClassName("dynamic-text")[i]["LapysJS stringFunctions"][j].indexOf("_")),

                                                            // Letters
                                                            ["LapysJS letters"]: document.getElementsByClassName("dynamic-text")[i]["LapysJS strings"][j].split(""),

                                                            // Value
                                                            ["LapysJS value"]: document.getElementsByClassName("dynamic-text")[i]["LapysJS strings"][j]
                                                        };
                                                            // Length
                                                            document.getElementsByClassName("dynamic-text")[i]["LapysJS text"].length = (j + 1)
                                                };

                                    // Function
                                        // Backward Delete
                                        document.getElementsByClassName("dynamic-text")[i].constructor.prototype["LapysJS backwardDelete"] = function() {
                                            this.innerHTML = this.innerHTML.slice(0, -1)
                                        };

                                        // Forward Delete
                                        document.getElementsByClassName("dynamic-text")[i].constructor.prototype["LapysJS forwardDelete"] = function() {
                                            this.innerHTML = this.innerHTML.slice(1)
                                        };

                                        // Insert
                                        document.getElementsByClassName("dynamic-text")[i].constructor.prototype["LapysJS insert"] = function(letter) {
                                            this.innerHTML = (letter.toString()[0] + this.innerHTML)
                                        };

                                        // Type
                                        document.getElementsByClassName("dynamic-text")[i].constructor.prototype["LapysJS type"] = function(letter) {
                                            this.innerHTML += letter.toString()[0]
                                        };

                                // Modification
                                    /* Logic
                                            If
                                                the Dynamic Text's "text" is defined.
                                    */
                                    if (document.getElementsByClassName("dynamic-text")[i]["LapysJS text"][0]) {
                                        // Modification
                                            // Current Letter
                                            document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetter"] = document.getElementsByClassName("dynamic-text")[i]["LapysJS text"][0]["LapysJS letters"][0];
                                                // Current Letter Index
                                                document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetterIndex"] = 0;

                                                // Current Letter Set Index
                                                document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetterSetIndex"] = 0;

                                            // Current Close Function
                                            document.getElementsByClassName("dynamic-text")[i].constructor.prototype["LapysJS currentCloseFunction"] = document.getElementsByClassName("dynamic-text")[i]["LapysJS text"][0]["LapysJS closeFunction"];
                                                // Current Close Function Index
                                                document.getElementsByClassName("dynamic-text")[i].constructor.prototype["LapysJS currentCloseFunctionIndex"] = 0;

                                            // Current Initial Function
                                            document.getElementsByClassName("dynamic-text")[i].constructor.prototype["LapysJS currentInitialFuntion"] = document.getElementsByClassName("dynamic-text")[i]["LapysJS text"][0]["LapysJS initialFunction"];
                                                // Current Initial Function Index
                                                document.getElementsByClassName("dynamic-text")[i].constructor.prototype["LapysJS currentInitialFuntionIndex"] = 0;

                                            // Current String
                                            document.getElementsByClassName("dynamic-text")[i].constructor.prototype["LapysJS currentString"] = document.getElementsByClassName("dynamic-text")[i]["LapysJS text"][0]["LapysJS value"];
                                                // Current String Index
                                                document.getElementsByClassName("dynamic-text")[i].constructor.prototype["LapysJS currentStringIndex"] = 0;

                                            // Key Interval
                                            document.getElementsByClassName("dynamic-text")[i].constructor.prototype["LapysJS keyInterval"] = (
                                                parseFloat(document.getElementsByClassName("dynamic-text")[i].getAttribute("data-animation-duration")) /
                                                document.getElementsByClassName("dynamic-text")[i]["LapysJS currentString"].length
                                            )
                                    };

                                    // Key Press Count
                                    document.getElementsByClassName("dynamic-text")[i].constructor.prototype["LapysJS keyPressCount"] = 0;

                                    // Key Timer
                                    document.getElementsByClassName("dynamic-text")[i].constructor.prototype["LapysJS keyTimer"] = 0;

                                    // Paused
                                    document.getElementsByClassName("dynamic-text")[i].constructor.prototype["LapysJS paused"] = false;

                                // Function
                                    // Pause and Clear
                                    document.getElementsByClassName("dynamic-text")[i].constructor.prototype["LapysJS pauseAndClear"] = function() {
                                        // Initialization
                                            // Target Element
                                            var that = this;

                                        // Update
                                            // Paused
                                            this["LapysJS paused"] = true;

                                        // Set Timeout
                                        setTimeout(function() {
                                            // Modification
                                                // Inner HTML
                                                that.innerHTML = "";

                                            // Update
                                                // Paused
                                                that["LapysJS paused"] = false
                                        }, ((parseFloat(this.getAttribute("data-animation-delay")) * 1000) || 0))
                                    };

                                    // Complete Initial Command
                                    document.getElementsByClassName("dynamic-text")[i].constructor.prototype["LapysJS completeInitialCommand"] = function() {
                                        // Initialization
                                            // Target Element
                                            var that = this;

                                        // Update
                                            // Paused
                                            this["LapysJS paused"] = true;

                                        // Set Timeout
                                        setTimeout(function() {
                                            // Update
                                                // Initial Function Completed
                                                that["LapysJS initialFunctionCompleted"] = true;

                                                // Current Letter Set Index
                                                that["LapysJS currentLetterSetIndex"] += 1;

                                                /* Logic
                                                        If
                                                            "Current Letter Set Index" is greater than or equal to the length of "Strings".
                                                */
                                                if (that["LapysJS currentLetterSetIndex"] >= that["LapysJS strings"].length) {
                                                    // Update
                                                        // Current Letter
                                                        that["LapysJS currentLetter"] = that["LapysJS text"][0]["LapysJS letters"][0];

                                                        // Current Letter Set Index
                                                        that["LapysJS currentLetterSetIndex"] = 0
                                                }

                                                else
                                                    // Update
                                                        // Current Letter
                                                        that["LapysJS currentLetter"] = that["LapysJS text"][that["LapysJS currentLetterSetIndex"]]["LapysJS letters"][0];

                                                // Current Initial Function Index
                                                that["LapysJS currentInitialFuntionIndex"] += 1;

                                                /* Logic
                                                        If
                                                            "Current Initial Function Index" is greater than or equal to the length of "Strings".
                                                */
                                                if (that["LapysJS currentInitialFuntionIndex"] >= that["LapysJS strings"].length) {
                                                    // Update
                                                        // Current Initial Function
                                                        that["LapysJS currentInitialFuntion"] = that["LapysJS text"][0]["LapysJS initialFunction"];

                                                        // Current Initial Function Index
                                                        that["LapysJS currentInitialFuntionIndex"] = 0
                                                }

                                                else
                                                    // Update
                                                        // Current Initial Function
                                                        that["LapysJS currentInitialFuntion"] = that["LapysJS text"][that["LapysJS currentInitialFuntionIndex"]]["LapysJS initialFunction"];

                                                // Current String Index
                                                that["LapysJS currentStringIndex"] += 1;

                                                /* Logic
                                                        If
                                                            "Current Initial String Index" is greater than or equal to the length of "Strings".
                                                */
                                                if (that["LapysJS currentStringIndex"] >= that["LapysJS strings"].length) {
                                                    // Update
                                                        // Current String
                                                        that["LapysJS currentString"] = that["LapysJS text"][0]["LapysJS value"];

                                                        // Current String Index
                                                        that["LapysJS currentStringIndex"] = 0
                                                }

                                            else
                                                // Update
                                                    // Current String
                                                    that["LapysJS currentString"] = that["LapysJS text"][that["LapysJS currentStringIndex"]]["LapysJS value"];

                                            // Key Press Count
                                            that["LapysJS keyPressCount"] = 0;

                                            // Paused
                                            that["LapysJS paused"] = false
                                        }, ((parseFloat(this.getAttribute("data-animation-delay")) * 1000) || 0))
                                    };

                                    // Complete Close Command
                                    document.getElementsByClassName("dynamic-text")[i].constructor.prototype["LapysJS completeCloseCommand"] = function() {
                                        // Initialization
                                            // Target Element
                                            var that = this;

                                        // Update
                                            // Paused
                                            this["LapysJS paused"] = true;

                                        // Set Timeout
                                        setTimeout(function() {
                                            // Update
                                                // Initial Function Completed
                                                that["LapysJS initialFunctionCompleted"] = false;

                                                // Current Close Function Index
                                                that["LapysJS currentCloseFunctionIndex"] += 1;

                                                /* Logic
                                                        If
                                                            "Current Close Function Index" is greater than or equal to the length of "Strings".
                                                */
                                                if (that["LapysJS currentCloseFunctionIndex"] >= that["LapysJS strings"].length) {
                                                    // Update
                                                        // Current Close Function
                                                        that["LapysJS currentCloseFunction"] = that["LapysJS text"][0]["LapysJS closeFunction"];

                                                        // Current Close Function Index
                                                        that["LapysJS currentCloseFunctionIndex"] = 0
                                                }

                                            else
                                                // Update
                                                    // Current Close Function
                                                    that["LapysJS currentCloseFunction"] = that["LapysJS text"][that["LapysJS currentCloseFunctionIndex"]]["LapysJS closeFunction"];

                                            // Key Press Count
                                            that["LapysJS keyPressCount"] = 0;

                                            // Paused
                                            that["LapysJS paused"] = false
                                        }, ((parseFloat(this.getAttribute("data-animation-delay")) * 1000) || 0))
                                    };

                                /* Logic
                                        If
                                            the Dynamic Text's "data-text" attribute is not 'empty'.
                                */
                                if (!!document.getElementsByClassName("dynamic-text")[i].getAttribute("data-text"))
                                    // Set Interval
                                    setInterval(function() {
                                        /* Loop
                                                Index all Dynamic Text
                                        */
                                        for (var i = 0; i < document.getElementsByClassName("dynamic-text").length; i++)
                                            /* Logic
                                                    If
                                                        the Dynamic Text's
                                                            "String" and "String Functions"
                                                            have the same length.
                                            */
                                            if (document.getElementsByClassName("dynamic-text")[i]["LapysJS strings"].length == document.getElementsByClassName("dynamic-text")[i]["LapysJS stringFunctions"].length) {
                                                // Update
                                                    // Key Timer
                                                    document.getElementsByClassName("dynamic-text")[i]["LapysJS keyTimer"] += .1;

                                                /* Logic
                                                        If
                                                            --- NOTE ---
                                                                The typing mechanism.
                                                */
                                                if (document.getElementsByClassName("dynamic-text")[i]["LapysJS keyTimer"] > document.getElementsByClassName("dynamic-text")[i]["LapysJS keyInterval"]) {
                                                    // Update
                                                        // Key Press Count
                                                        document.getElementsByClassName("dynamic-text")[i]["LapysJS keyPressCount"] += 1;

                                                        // Key Interval
                                                        document.getElementsByClassName("dynamic-text")[i]["LapysJS keyInterval"] = (
                                                            parseFloat(document.getElementsByClassName("dynamic-text")[i].getAttribute("data-animation-duration")) /
                                                            document.getElementsByClassName("dynamic-text")[i]["LapysJS currentString"].length
                                                        );

                                                    // Function
                                                        // Initial Function
                                                        function initialFunction() {
                                                            /* Logic
                                                                    If
                                                                        the Dynamic Text's
                                                                            "data-text" attribute has "_" in it
                                                                                or
                                                                            "data-text-event-type" attribute has "_" in it.
                                                            */
                                                            if (
                                                                document.getElementsByClassName("dynamic-text")[i].getAttribute("data-text").indexOf("_") >= 0 &&
                                                                document.getElementsByClassName("dynamic-text")[i].getAttribute("data-text-event-type").indexOf("_") >= 0
                                                            ) {
                                                                /* Logic
                                                                        If
                                                                            the Dynamic Text's "Key Press Count" is
                                                                                greater than the specified data
                                                                                    or
                                                                                equal to the specified data.
                                                                */
                                                                if (document.getElementsByClassName("dynamic-text")[i]["LapysJS keyPressCount"] >= (parseFloat(document.getElementsByClassName("dynamic-text")[i]["LapysJS currentInitialFuntion"].replace(/[a-z]|[A-Z]|\(|\)/g, "")) + 1))
                                                                    // Function
                                                                        // Complete Initial Command
                                                                        document.getElementsByClassName("dynamic-text")[i]["LapysJS completeInitialCommand"]();

                                                                /* Logic
                                                                        If
                                                                            the Dynamic Text's initial function is not complete.
                                                                */
                                                                if (!document.getElementsByClassName("dynamic-text")[i]["LapysJS initialFunctionCompleted"]) {
                                                                    /* Logic
                                                                            If
                                                                                the Dynamic Text's "Current Initial Function" is "insert"

                                                                            else if
                                                                                the Dynamic Text's "Current Initial Function" is "type".
                                                                    */
                                                                    if (document.getElementsByClassName("dynamic-text")[i]["LapysJS currentInitialFuntion"].replace(/\([0-9]\)/g, "") == "insert") {
                                                                        /* Logic
                                                                                If
                                                                                    the Dynamic Text is not 'paused'.
                                                                        */
                                                                        if (!document.getElementsByClassName("dynamic-text")[i]["LapysJS paused"]) {
                                                                            /* Logic
                                                                                    If
                                                                                        the Dynamic Text's "Current Letter Index" is
                                                                                            less than 0
                                                                                                or
                                                                                            equal to 0.
                                                                            */
                                                                            if (document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetterIndex"] <= 0)
                                                                                // Update
                                                                                    // Current Letter Index
                                                                                    document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetterIndex"] = (document.getElementsByClassName("dynamic-text")[i]["LapysJS currentString"].length - 1);

                                                                            else
                                                                                // Update
                                                                                    // Current Letter Index
                                                                                    document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetterIndex"] -= 1;

                                                                            // Update
                                                                                // Current Letter
                                                                                document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetter"] = document.getElementsByClassName("dynamic-text")[i]["LapysJS text"][document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetterSetIndex"]]["LapysJS letters"][document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetterIndex"]];

                                                                            // Function
                                                                                // Insert
                                                                                document.getElementsByClassName("dynamic-text")[i]["LapysJS insert"](document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetter"]);

                                                                            /* Logic
                                                                                    If
                                                                                        the Dynamic Text's "innerHTML" has it "Current String" within.
                                                                            */
                                                                            if (document.getElementsByClassName("dynamic-text")[i].innerHTML.indexOf(document.getElementsByClassName("dynamic-text")[i]["LapysJS currentString"]) >= 0)
                                                                                // Function
                                                                                    // Complete Initial Command
                                                                                    document.getElementsByClassName("dynamic-text")[i]["LapysJS completeInitialCommand"]()
                                                                        }

                                                                        else
                                                                            // Update
                                                                                // Key Press Count
                                                                                document.getElementsByClassName("dynamic-text")[i]["LapysJS keyPressCount"] = -1
                                                                    }

                                                                    else if (document.getElementsByClassName("dynamic-text")[i]["LapysJS currentInitialFuntion"].replace(/\([0-9]\)/g, "") == "type") {
                                                                        /* Logic
                                                                                If
                                                                                    the Dynamic Text is not 'paused'.
                                                                        */
                                                                        if (!document.getElementsByClassName("dynamic-text")[i]["LapysJS paused"]) {
                                                                            // Function
                                                                                // Type
                                                                                document.getElementsByClassName("dynamic-text")[i]["LapysJS type"](document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetter"]);

                                                                            /* Logic
                                                                                    If
                                                                                        the Dynamic Text's "Current Letter Index" is
                                                                                            greater than its "Current String"'s length minus 1
                                                                                                or
                                                                                            equal to its "Current String"'s length minus 1.
                                                                            */
                                                                            if (document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetterIndex"] >= (document.getElementsByClassName("dynamic-text")[i]["LapysJS currentString"].length - 1))
                                                                                // Update
                                                                                    // Current Letter Index
                                                                                    document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetterIndex"] = 0;

                                                                            else
                                                                                // Update
                                                                                    // Current Letter Index
                                                                                    document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetterIndex"] += 1;

                                                                            // Update
                                                                                // Current Letter
                                                                                document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetter"] = document.getElementsByClassName("dynamic-text")[i]["LapysJS text"][document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetterSetIndex"]]["LapysJS letters"][document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetterIndex"]];

                                                                            /* Logic
                                                                                    If
                                                                                        the Dynamic Text's "innerHTML" has it "Current String" within.
                                                                            */
                                                                            if (document.getElementsByClassName("dynamic-text")[i].innerHTML.indexOf(document.getElementsByClassName("dynamic-text")[i]["LapysJS currentString"]) >= 0)
                                                                                // Function
                                                                                    // Complete Initial Command
                                                                                    document.getElementsByClassName("dynamic-text")[i]["LapysJS completeInitialCommand"]()
                                                                        }

                                                                        else
                                                                            // Update
                                                                                // Key Press Count
                                                                                document.getElementsByClassName("dynamic-text")[i]["LapysJS keyPressCount"] = -1
                                                                    }

                                                                    else
                                                                        /* Logic
                                                                                If
                                                                                    the Dynamic Text is not 'paused'.
                                                                        */
                                                                        if (!document.getElementsByClassName("dynamic-text")[i]["LapysJS paused"]) {
                                                                            // Function
                                                                                // Complete Initial Command
                                                                                document.getElementsByClassName("dynamic-text")[i]["LapysJS completeInitialCommand"]()
                                                                        }

                                                                        else
                                                                            // Update
                                                                                // Key Press Count
                                                                                document.getElementsByClassName("dynamic-text")[i]["LapysJS keyPressCount"] = -1
                                                                }

                                                                else
                                                                    // Function
                                                                        // Close Function
                                                                        closeFunction()
                                                            }

                                                            else
                                                                /* Logic
                                                                        If
                                                                            the Dynamic Text's "Current Initial Function" is "insert"

                                                                        else if
                                                                            the Dynamic Text's "Current Initial Function" is "type".
                                                                */
                                                                if (document.getElementsByClassName("dynamic-text")[i].getAttribute("data-text-event-type").replace(/\([0-9]\)/g, "") == "insert") {
                                                                    /* Logic
                                                                            If
                                                                                the Dynamic Text is not 'paused'.
                                                                    */
                                                                    if (!document.getElementsByClassName("dynamic-text")[i]["LapysJS paused"]) {
                                                                        /* Logic
                                                                                If
                                                                                    the Dynamic Text's "Current Letter Index" is
                                                                                        less than 0
                                                                                            or
                                                                                        equal to 0.
                                                                        */
                                                                        if (document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetterIndex"] <= 0)
                                                                            // Update
                                                                                // Current Letter Index
                                                                                document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetterIndex"] = (document.getElementsByClassName("dynamic-text")[i]["LapysJS currentString"].length - 1);

                                                                        else
                                                                            // Update
                                                                                // Current Letter Index
                                                                                document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetterIndex"] -= 1;

                                                                        // Update
                                                                            // Current Letter
                                                                            document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetter"] = document.getElementsByClassName("dynamic-text")[i]["LapysJS text"][document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetterSetIndex"]]["LapysJS letters"][document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetterIndex"]];

                                                                        // Function
                                                                            // Insert
                                                                            document.getElementsByClassName("dynamic-text")[i]["LapysJS insert"](document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetter"]);

                                                                        /* Logic
                                                                                If
                                                                                    the Dynamic Text's "innerHTML" has it "Current String" within.
                                                                        */
                                                                        if (document.getElementsByClassName("dynamic-text")[i].innerHTML.indexOf(document.getElementsByClassName("dynamic-text")[i]["LapysJS currentString"]) >= 0)
                                                                            // Function
                                                                                // Pause and Clear
                                                                                document.getElementsByClassName("dynamic-text")[i]["LapysJS pauseAndClear"]()
                                                                    }

                                                                    else
                                                                        // Update
                                                                            // Key Press Count
                                                                            document.getElementsByClassName("dynamic-text")[i]["LapysJS keyPressCount"] = -1
                                                                }

                                                                else if (document.getElementsByClassName("dynamic-text")[i].getAttribute("data-text-event-type").replace(/\([0-9]\)/g, "") == "type") {
                                                                    /* Logic
                                                                            If
                                                                                the Dynamic Text is not 'paused'.
                                                                    */
                                                                    if (!document.getElementsByClassName("dynamic-text")[i]["LapysJS paused"]) {
                                                                        // Function
                                                                            // Type
                                                                            document.getElementsByClassName("dynamic-text")[i]["LapysJS type"](document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetter"]);

                                                                        /* Logic
                                                                                If
                                                                                    the Dynamic Text's "Current Letter Index" is
                                                                                        greater than its "Current String"'s length minus 1
                                                                                            or
                                                                                        equal to its "Current String"'s length minus 1.
                                                                        */
                                                                        if (document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetterIndex"] >= (document.getElementsByClassName("dynamic-text")[i]["LapysJS currentString"].length - 1))
                                                                            // Update
                                                                                // Current Letter Index
                                                                                document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetterIndex"] = 0;

                                                                        else
                                                                            // Update
                                                                                // Current Letter Index
                                                                                document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetterIndex"] += 1;

                                                                        // Update
                                                                            // Current Letter
                                                                            document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetter"] = document.getElementsByClassName("dynamic-text")[i]["LapysJS text"][document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetterSetIndex"]]["LapysJS letters"][document.getElementsByClassName("dynamic-text")[i]["LapysJS currentLetterIndex"]];

                                                                        /* Logic
                                                                                If
                                                                                    the Dynamic Text's "innerHTML" has it "Current String" within.
                                                                        */
                                                                        if (document.getElementsByClassName("dynamic-text")[i].innerHTML.indexOf(document.getElementsByClassName("dynamic-text")[i]["LapysJS currentString"]) >= 0)
                                                                            // Function
                                                                                // Pause and Clear
                                                                                document.getElementsByClassName("dynamic-text")[i]["LapysJS pauseAndClear"]()
                                                                    }

                                                                    else
                                                                        // Update
                                                                            // Key Press Count
                                                                            document.getElementsByClassName("dynamic-text")[i]["LapysJS keyPressCount"] = -1
                                                                }
                                                        }
                                                        initialFunction();

                                                        // Close Function
                                                        function closeFunction() {
                                                            /* Logic
                                                                    If
                                                                        the Dynamic Text's
                                                                            "data-text" attribute has "_" in it
                                                                                or
                                                                            "data-text-event-type" attribute has "_" in it.
                                                            */
                                                            if (document.getElementsByClassName("dynamic-text")[i]["LapysJS keyPressCount"] >= (parseFloat(document.getElementsByClassName("dynamic-text")[i]["LapysJS currentCloseFunction"].replace(/[a-z]|[A-Z]|\(|\)/g, "")) + 1))
                                                                // Function
                                                                    // Complete Close Command
                                                                    document.getElementsByClassName("dynamic-text")[i]["LapysJS completeCloseCommand"]();

                                                            /* Logic
                                                                    If
                                                                        the Dynamic Text's "Current Close Function" is "backwardDelete"

                                                                    else if
                                                                        the Dynamic Text's "Current Close Function" is "forwardDelete".
                                                            */
                                                            if (document.getElementsByClassName("dynamic-text")[i]["LapysJS currentCloseFunction"].replace(/\([0-9]\)/g, "") == "backwardDelete") {
                                                                /* Logic
                                                                        If
                                                                            the Dynamic Text is not 'paused'.
                                                                */
                                                                if (!document.getElementsByClassName("dynamic-text")[i]["LapysJS paused"]) {
                                                                    // Function
                                                                        // Backward Delete
                                                                        document.getElementsByClassName("dynamic-text")[i]["LapysJS backwardDelete"]();

                                                                    /* Logic
                                                                            If
                                                                                the Dynamic Text's "innerHTML" is 'empty'.
                                                                    */
                                                                    if (document.getElementsByClassName("dynamic-text")[i].innerHTML == "")
                                                                        // Function
                                                                            // Complete Close Command
                                                                            document.getElementsByClassName("dynamic-text")[i]["LapysJS completeCloseCommand"]();
                                                                }

                                                                else
                                                                    // Update
                                                                        // Key Press Count
                                                                        document.getElementsByClassName("dynamic-text")[i]["LapysJS keyPressCount"] = -1
                                                            }

                                                            else if (document.getElementsByClassName("dynamic-text")[i]["LapysJS currentCloseFunction"].replace(/\([0-9]\)/g, "") == "forwardDelete") {
                                                                /* Logic
                                                                        If
                                                                            the Dynamic Text is not 'paused'.
                                                                */
                                                                if (!document.getElementsByClassName("dynamic-text")[i]["LapysJS paused"]) {
                                                                    // Function
                                                                        // Forward Delete
                                                                        document.getElementsByClassName("dynamic-text")[i]["LapysJS forwardDelete"]();

                                                                    /* Logic
                                                                            If
                                                                                the Dynamic Text's "innerHTML" is 'empty'.
                                                                    */
                                                                    if (document.getElementsByClassName("dynamic-text")[i].innerHTML == "")
                                                                        // Function
                                                                            // Complete Close Command
                                                                            document.getElementsByClassName("dynamic-text")[i]["LapysJS completeCloseCommand"]()
                                                                }

                                                                else
                                                                    // Update
                                                                        // Key Press Count
                                                                        document.getElementsByClassName("dynamic-text")[i]["LapysJS keyPressCount"] = -1
                                                            }

                                                            else
                                                                /* Logic
                                                                        If
                                                                            the Dynamic Text is not 'paused'.
                                                                */
                                                                if (!document.getElementsByClassName("dynamic-text")[i]["LapysJS paused"])
                                                                    // Function
                                                                        // Complete Close Command
                                                                        document.getElementsByClassName("dynamic-text")[i]["LapysJS completeCloseCommand"]();

                                                                else
                                                                    // Update
                                                                        // Key Press Count
                                                                        document.getElementsByClassName("dynamic-text")[i]["LapysJS keyPressCount"] = -1;
                                                        };

                                                        // Update
                                                            // Key Timer
                                                            document.getElementsByClassName("dynamic-text")[i]["LapysJS keyTimer"] = 0
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
                        for (var i = 0; i < document.querySelectorAll("audio.media, video.media").length; i++) {
                            // Media
                                // Insertion
                                    /* Logic
                                            If
                                                the Media is not 'in a container'.
                                    */
                                    if (!document.querySelectorAll("audio.media, video.media")[i]["LapysJS inContainer"]) {
                                        // Modification
                                            // Media
                                                // Outer HTML
                                                document.querySelectorAll("audio.media, video.media")[i].outerHTML = (
                                                    '<div class="media-container">' +
                                                        document.querySelectorAll("audio.media, video.media")[i].outerHTML +
                                                    '</div>'
                                                );

                                                // In Container
                                                document.querySelectorAll("audio.media, video.media")[i]["LapysJS inContainer"] = true
                                    };

                            // Modification
                                // Console
                                document.querySelectorAll("audio.media, video.media")[i]["LapysJS console"] = (
                                    (function() {
                                        /* Logic
                                                If
                                                    the Media's next element sibling is a "media-console" class.
                                        */
                                        if (
                                            (
                                                document.querySelectorAll("audio.media, video.media")[i].nextElementSibling ||
                                                document.createElement("div")
                                            ).hasClass("media-console")
                                        )
                                            // Return
                                            return document.querySelectorAll("audio.media, video.media")[i].nextElementSibling;

                                        else
                                            // Return
                                            return document.createElement("div")
                                    })()
                                );

                                // Controls
                                document.querySelectorAll("audio.media, video.media")[i].controls = false;

                                // Volume
                                    /* Logic
                                            If
                                                the Media is 'muted',

                                            else if
                                                the Media has the "volume" attribute.
                                    */
                                    if (document.querySelectorAll("audio.media, video.media")[i].muted)
                                        document.querySelectorAll("audio.media, video.media")[i].volume = 0;

                                    else if (document.querySelectorAll("audio.media, video.media")[i].hasAttribute("volume")) {
                                        // Modification
                                            // Media
                                                // Volume
                                                document.querySelectorAll("audio.media, video.media")[i].setAttribute(
                                                    "volume",
                                                    eval(document.querySelectorAll("audio.media, video.media")[i].getAttribute("volume"))
                                                );

                                        /* Logic
                                                If
                                                    the Media "volume" attribute is a "number".
                                        */
                                        if (typeof parseFloat(document.querySelectorAll("audio.media, video.media")[i].getAttribute("volume")) == "number") {
                                            /* Logic
                                                    If
                                                        the Media "volume" attribute is greater than 1,

                                                    else if
                                                        the Media "volume" attribute is less than 0.
                                            */
                                            if (parseFloat(document.querySelectorAll("audio.media, video.media")[i].getAttribute("volume")) > 1)
                                                document.querySelectorAll("audio.media, video.media")[i].setAttribute("volume", 1);

                                            else if (parseFloat(document.querySelectorAll("audio.media, video.media")[i].getAttribute("volume")) < 0)
                                                document.querySelectorAll("audio.media, video.media")[i].setAttribute("volume", 0);

                                            // Modification
                                                // Volume
                                                document.querySelectorAll("audio.media, video.media")[i].volume = parseFloat(document.querySelectorAll("audio.media, video.media")[i].getAttribute("volume"))
                                        }
                                    }

                            // [Previous Element Sibling]
                                // Play Button
                                    /* Logic
                                            If
                                                the Media is a <video>.
                                    */
                                    if (document.querySelectorAll("audio.media, video.media")[i].tagName == "VIDEO")
                                        /* Logic
                                                If
                                                    the Media has the "data-play-button" attribute
                                                        and
                                                    does not have a play button.
                                        */
                                        if (
                                            document.querySelectorAll("audio.media, video.media")[i].hasAttribute("data-play-button") &&
                                            !document.querySelectorAll("audio.media, video.media")[i]["LapysJS hasPlayButton"]
                                        ) {
                                            // Adjacent Initialization
                                                // Play Button
                                                document.querySelectorAll('audio.media, video.media')[i].insertAdjacentHTML(
                                                    'beforebegin',

                                                    /* Play Button */
                                                    '<button class="media-play-button" data-id="playButton"> ' +
                                                        (document.querySelectorAll('audio.media, video.media')[i].getAttribute('data-play-button-inner-html') || '<span> &blacktriangleright; </span>') +
                                                    ' </button>'
                                                );

                                            // Modification
                                                // Media
                                                    // Play Button
                                                    document.querySelectorAll('audio.media, video.media')[i]["LapysJS playButton"] = document.querySelectorAll('audio.media, video.media')[i].previousElementSibling;

                                                // Event
                                                    // [Media]
                                                        // Mouse Up
                                                        document.querySelectorAll('audio.media, video.media')[i]["LapysJS playButton"].setEvent("mouseup", function() {
                                                            /* Logic
                                                                    If
                                                                        the respective Media is on 'autoplay'.
                                                            */
                                                            if (this.nextElementSibling.autoplay)
                                                                // Play
                                                                this.nextElementSibling.play();

                                                            else
                                                                // Pause
                                                                this.nextElementSibling["LapysJS togglePlayMode"]();

                                                            // Style
                                                                // Display
                                                                this.style.display = "none"
                                                        });

                                                        // Play & Playing
                                                        document.querySelectorAll('audio.media, video.media')[i].setEvent("play, playing", function() {
                                                            // Style
                                                                // Display
                                                                this.previousElementSibling.style.display = "none"
                                                        });

                                                /* Logic
                                                        If
                                                            the respective Media has the "data-play-button-toggle" attribute.
                                                */
                                                if (document.querySelectorAll('audio.media, video.media')[i].hasAttribute("data-play-button-toggle"))
                                                    // Event
                                                        // Media
                                                            // Pause
                                                            document.querySelectorAll('audio.media, video.media')[i].setEvent("pause", function() {
                                                                // Style
                                                                document.querySelectorAll('audio.media, video.media')[i]["LapysJS playButton"].removeAttribute("style")
                                                            });

                                            // Modification
                                                // Media
                                                    // Has Play Button
                                                    document.querySelectorAll("audio.media, video.media")[i]["LapysJS hasPlayButton"] = true
                                        };

                            // Modification
                                // Information
                                document.querySelectorAll("audio.media, video.media")[i]["LapysJS information"] = {
                                    // Playing
                                    playing: false,

                                    // Speed
                                    speed: document.querySelectorAll("audio.media, video.media")[i].playbackRate,

                                    // Volume
                                    volume: document.querySelectorAll("audio.media, video.media")[i].volume
                                };

                                // Toggle
                                document.querySelectorAll("audio.media, video.media")[i]["LapysJS toggle"] = {
                                    // Play Mode
                                    playMode: (function() {
                                        /* Logic
                                                If
                                                    the Media is on 'autoplay'.
                                        */
                                        if (document.querySelectorAll("audio.media, video.media")[i].autoplay)
                                            // Return
                                            return false;

                                        else
                                            // Return
                                            return true
                                    })(),

                                    // Screen Mode
                                    screenMode: false
                                };

                            // [Next Element Sibling]
                                // Console
                                    /* Logic
                                            If
                                                the Media has the "data-controls" attribute
                                                    and
                                                the Media does not have a console.
                                    */
                                    if (
                                        document.querySelectorAll("audio.media, video.media")[i].hasAttribute("data-controls") &&
                                        !document.querySelectorAll("audio.media, video.media")[i].hasConsole
                                    ) {
                                        // Adjacent Initialization
                                            // Media Console
                                            document.querySelectorAll('audio.media, video.media')[i].insertAdjacentHTML('afterend', '<div class="media-console"> </div>');

                                        // Modification
                                            // Media
                                                // Console
                                                document.querySelectorAll('audio.media, video.media')[i]["LapysJS console"] = document.querySelectorAll('audio.media, video.media')[i].nextElementSibling;
                                                    // Media
                                                    document.querySelectorAll('audio.media, video.media')[i]["LapysJS console"].media = document.querySelectorAll('audio.media, video.media')[i];

                                        // Modification
                                            // Inner HTML
                                            document.querySelectorAll('audio.media, video.media')[i]["LapysJS console"].innerHTML = (
                                                /* Play Button */
                                                '\r\t<!-- Play Button -->' +
                                                '\r\t<button class="button play-button" onmouseup="this.media[\'LapysJS togglePlayMode\']()">' +
                                                    (document.querySelectorAll('audio.media, video.media')[i].getAttribute('data-controls-play-button-inner-html') || '&blacktriangleright;') +
                                                '</button>' +

                                                /* Stop Button */
                                                '\n\r\t<!-- Stop Button -->' +
                                                '\r\t<button class="button stop-button" onmouseup="this.media.load(); this.media[\'LapysJS toggle\'].playMode = true">\r\t\t' +
                                                    (document.querySelectorAll('audio.media, video.media')[i].getAttribute('data-controls-stop-button-inner-html') || '<span style="zoom: 2"> &blacksquare; </span>') +
                                                ' \r\t</button>' +

                                                /* Timeline */
                                                '\n\r\t<!-- Timeline -->' +
                                                '\r\t<input ' +
                                                    '\r\t\tclass="timeline" ' +
                                                    '\r\t\tonchange="this.media[\'LapysJS seek\'](this)" ' +
                                                    '\r\t\toninput="this.media[\'LapysJS seek\'](this)" ' +
                                                    '\r\t\tmax="' + parseInt(document.querySelectorAll('audio.media, video.media')[i].duration) + '" ' +
                                                    '\r\t\tmin="0" ' +
                                                    '\r\t\ttype="range" ' +
                                                    '\r\t\tvalue="0">' +

                                                /* Mute Volume */
                                                '\n\r\t<!-- Mute Volume -->' +
                                                '\r\t<button ' +
                                                    '\r\t\tclass="button mute-button" ' +
                                                    '\r\t\tonmouseup="' +
                                                        '\r\t\tif (!this.media[\'LapysJS toggle\'].volume)' +
                                                            '\r\t\t\tthis.media.volume = 0;' +

                                                        '\n\r\t\telse' +
                                                            '\r\t\t\tthis.media.volume = this.media[\'LapysJS information\'].volume;' +

                                                        '\n\r\t\tthis.media[\'LapysJS toggle\'].volume = !this.media[\'LapysJS toggle\'].volume' +
                                                    '">\n\r\t\t' +
                                                        (document.querySelectorAll('audio.media, video.media')[i].getAttribute('data-controls-mute-button-inner-html') || '<span style="font-family: Webdings; line-height: 50%"> X </span>') +
                                                    '\r\t</button>' +

                                                    /* Volume Range */
                                                    '\n\r\t<!-- Volume Range -->' +
                                                    '\r\t<input ' +
                                                        '\r\t\tclass="volume-range" ' +
                                                        '\r\t\tonchange="this.media[\'LapysJS setVolume"\'](this)" ' +
                                                        '\r\t\toninput="this.media[\'LapysJS setVolume\'](this)" ' +
                                                        '\r\t\tmax="100" ' +
                                                        '\r\t\tmin="0" ' +
                                                        '\r\t\ttype="range" ' +
                                                        '\r\t\tvalue="' +
                                                            (function() {
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
                                                            })() +
                                                        '">' +

                                                    /* Decrease Volume Button */
                                                    '\n\r\t<!-- Decrease Volume Button -->' +
                                                    '\r\t<button class="button decrease-volume-button" onmouseup="this.media.volume -= .075">\r\t\t' +
                                                        (document.querySelectorAll('audio.media, video.media')[i].getAttribute('data-controls-volume-decrease-button-inner-html') || '<span style="font-family: Webdings; line-height: 50%"> V </span>') +
                                                    '\r\t</button>' +

                                                    /* Increase Volume Button */
                                                    '\n\r\t<!-- Increase Volume Button -->' +
                                                    '\r\t<button class="button increase-volume-button" onmouseup="this.media.volume += .075">\r\t\t' +
                                                        (document.querySelectorAll('audio.media, video.media')[i].getAttribute('data-controls-volume-decrease-button-inner-html') || '<span style="font-family: Webdings; line-height: 50%"> U </span>') +
                                                    '\r\t</button>' +

                                                    /* Download Button */
                                                    '\n\r\t<!-- Download Button -->' +
                                                    '\r\t<button class="button download-button"> ' +
                                                        '\r\t\t<a download="' +
                                                            (function() {
                                                                // Return
                                                                return decodeURIComponent(
                                                                    document.querySelectorAll('audio.media, video.media')[i].currentSrc.slice(
                                                                        document.querySelectorAll('audio.media, video.media')[i].currentSrc.lastIndexOf("/") + "/".length
                                                                    ) ||
                                                                    document.querySelectorAll('audio.media, video.media')[i].src.slice(
                                                                        document.querySelectorAll('audio.media, video.media')[i].src.lastIndexOf("/") + "/".length
                                                                    )
                                                                )
                                                            })() +
                                                        '" ' +
                                                            (function() {
                                                                /* Logic
                                                                        If
                                                                            the Media does not have a "data-no-download" attribute.
                                                                */
                                                                if (!document.querySelectorAll('audio.media, video.media')[i].hasAttribute("data-no-download"))
                                                                    // Return
                                                                    return ('href="' + (document.querySelectorAll('audio.media, video.media')[i].src || document.querySelectorAll('audio.media, video.media')[i].currentSrc) + '"');

                                                                else
                                                                    // Return
                                                                    return ''
                                                            })() +
                                                        '>\r\t\t\t' +
                                                            (document.querySelectorAll('audio.media, video.media')[i].getAttribute('data-controls-download-button-inner-html') || '<span style="font-family: Webdings; line-height: 50%"> 6 </span>') +
                                                        '\r\t\t</a>' +
                                                    '\r\t</button>' +

                                                    /* Fullscreen Button */
                                                    '\n\r\t<!-- Fullscreen Button -->' +
                                                    '\r\t<button class="button fullscreen-button" onmouseup="this.media[\'LapysJS fullscreen\']()">' +
                                                        (document.querySelectorAll('audio.media, video.media')[i].getAttribute('data-controls-fullscreen-button-inner-html') || '&blacksquare;') +
                                                    '\r\t</button>' +

                                                    /* Playback Range */
                                                    '\n\r\t<!-- Playback Range -->' +
                                                    '\r\t<input ' +
                                                        '\r\t\tclass="playback-range" ' +
                                                        '\r\t\tonchange="' +
                                                            '\r\t\tthis.media.playbackRate = (function() {' +
                                                                '\r\t\t\tif (event.target.value >= 500)' +
                                                                    '\r\t\t\t\treturn parseFloat((event.target.value - 500) / 50); ' +

                                                                '\r\t\t\telse' +
                                                                    '\r\t\t\t\treturn -parseFloat((event.target.value) / 100)' +
                                                            '\r\t\t})()' +
                                                        '" ' +
                                                        '\r\t\toninput="' +
                                                            '\r\t\tevent.target.media.playbackRate = (function() {' +
                                                                '\r\t\t\tif (event.target.value >= 500)' +
                                                                    '\r\t\t\t\treturn parseFloat((event.target.value - 500) / 50); ' +

                                                                '\r\t\t\telse' +
                                                                    '\r\t\t\t\treturn -parseFloat((event.target.value) / 100)' +
                                                            '\r\t\t})()' +
                                                        '" ' +
                                                        '\r\t\tmax="1000" ' +
                                                        '\r\t\tmin="0" ' +
                                                        '\r\t\ttype="range" ' +
                                                        '\r\t\tvalue="' +
                                                            (function() {
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
                                                            })() +
                                                        '">' +

                                                    /* Slow Playback Button */
                                                    '\n\r\t<!-- Slow Playback Button -->' +
                                                    '\r\t<button class="button slow-playback-button" onmouseup="' +
                                                        '\r\t\tthis.media.playbackRate -= (this.media.playbackRate / 2.5); ' +
                                                        '\n\r\t\tif (this.media.playbackRate <= .027993599999999997)' +
                                                        '\r\t\t\tthis.media.playbackRate = .027993599999999997' +
                                                    '">\r\t\t' +
                                                        (document.querySelectorAll('audio.media, video.media')[i].getAttribute('data-controls-slow-playback-button-inner-html') || '<span style="font-family: Webdings; line-height: 50%"> 3 </span>') +
                                                    '\r\t</button>' +

                                                    /* Fast Playback Button */
                                                    '\n\r\t<!-- Fast Playback Button -->' +
                                                    '\r\t<button class="button fast-playback-button" onmouseup="' +
                                                        '\r\t\tthis.media.playbackRate += (this.media.playbackRate / 2.5); ' +
                                                        '\n\r\t\tif (this.media.playbackRate >= 10.5413504)' +
                                                        '\r\t\t\tthis.media.playbackRate = 10.5413504' +
                                                    '">\r\t\t' +
                                                        (document.querySelectorAll('audio.media, video.media')[i].getAttribute('data-controls-fast-playback-button-inner-html') || '<span style="font-family: Webdings; line-height: 50%"> 4 </span>') +
                                                    '\r\t</button>' +

                                                    /* Playback Rate */
                                                    '\n\r\t<!-- Playback Rate -->' +
                                                    '\r\t<div class="info playback-rate"> &times;1 </div>' +

                                                    /* Miscellaneous */
                                                        /* Loading Widget */
                                                        (function() {
                                                            /* Logic
                                                                    If
                                                                        the Media has the "data-load" attribute.
                                                            */
                                                            if (document.querySelectorAll("audio.media, video.media")[i].hasAttribute("data-load"))
                                                                // Return
                                                                return (
                                                                    document.querySelectorAll("audio.media, video.media")[i].getAttribute("data-load") ||
                                                                    (
                                                                        '\n\r\t<!-- Loading Widget -->' +
                                                                        '\r\t<div class="loader-widget misc" data-title="Loading, please wait…_center_top" style="margin-top: ' + (document.querySelectorAll("audio.media, video.media")[i].getBoundingClientRect().top + (document.querySelectorAll("audio.media, video.media")[i].clientHeight / 2)) + 'px"> </div>'
                                                                    )
                                                                );

                                                            else
                                                                // Return
                                                                return ""
                                                        })()
                                            );

                                        // Modification
                                            // Media
                                                // Console
                                                    // Media
                                                        // Children
                                                            /* Loop
                                                                    Index all Console child elements.
                                                            */
                                                            for (var j = 0; j < document.querySelectorAll('audio.media, video.media')[i]["LapysJS console"].querySelectorAll("*").length; j++) {
                                                                // Modification
                                                                    // Child Element
                                                                        // Console
                                                                        document.querySelectorAll('audio.media, video.media')[i]["LapysJS console"].querySelectorAll("*")[j]["LapysJS console"] = document.querySelectorAll('audio.media, video.media')[i]["LapysJS console"];

                                                                        // Media
                                                                        document.querySelectorAll('audio.media, video.media')[i]["LapysJS console"].querySelectorAll("*")[j].media = document.querySelectorAll('audio.media, video.media')[i]
                                                            };

                                        // Event
                                            // Set Interval
                                            setInterval(function() {
                                                /* Loop
                                                        Index all Media.
                                                */
                                                for (var i = 0; i < document.querySelectorAll("audio.media, video.media").length; i++) {
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
                                                                        if (document.querySelectorAll('audio.media, video.media')[i]["LapysJS console"].querySelector("input.playback-range").value >= 500) {
                                                                            document.querySelectorAll('audio.media, video.media')[i]["LapysJS console"].querySelector("input.playback-range").value = ((document.querySelectorAll('audio.media, video.media')[i].playbackRate * 50) + 500);
                                                                            document.querySelectorAll('audio.media, video.media')[i]["LapysJS console"].querySelector("input.playback-range").setAttribute("value", ((document.querySelectorAll('audio.media, video.media')[i].playbackRate * 50) + 500))
                                                                        }

                                                                        else {
                                                                            document.querySelectorAll('audio.media, video.media')[i]["LapysJS console"].querySelector("input.playback-range").value = Math.abs(document.querySelectorAll('audio.media, video.media')[i].playbackRate * 100);
                                                                            document.querySelectorAll('audio.media, video.media')[i]["LapysJS console"].querySelector("input.playback-range").setAttribute("value", Math.abs(document.querySelectorAll('audio.media, video.media')[i].playbackRate * 100))
                                                                        };

                                                                // Playback Rate
                                                                    // Inner HTML
                                                                    document.querySelectorAll('audio.media, video.media')[i]["LapysJS console"].querySelector("div.playback-rate").innerHTML = (" &times;" + document.querySelectorAll('audio.media, video.media')[i].playbackRate.toString().slice(0, 4) + " ");

                                                                // Timeline
                                                                    // Maximum
                                                                    document.querySelectorAll('audio.media, video.media')[i]["LapysJS console"].querySelector("input.timeline").max = parseInt(document.querySelectorAll('audio.media, video.media')[i].duration);

                                                                    // Value
                                                                    document.querySelectorAll('audio.media, video.media')[i]["LapysJS console"].querySelector("input.timeline").value = parseInt(document.querySelectorAll('audio.media, video.media')[i].currentTime);
                                                                    document.querySelectorAll('audio.media, video.media')[i]["LapysJS console"].querySelector("input.timeline").setAttribute("value", parseInt(document.querySelectorAll('audio.media, video.media')[i].currentTime));

                                                                // Volume Range
                                                                    // Value
                                                                    document.querySelectorAll('audio.media, video.media')[i]["LapysJS console"].querySelector("input.volume-range").value = parseInt(document.querySelectorAll('audio.media, video.media')[i].volume * 100);
                                                                    document.querySelectorAll('audio.media, video.media')[i]["LapysJS console"].querySelector("input.volume-range").setAttribute("value", parseInt(document.querySelectorAll('audio.media, video.media')[i].volume * 100))
                                                }
                                            }, 100)
                                    };

                                    // Modification
                                        // Has Console
                                        document.querySelectorAll("audio.media, video.media")[i].hasConsole = true;

                            // Function
                                // Fullscreen
                                document.querySelectorAll("audio.media, video.media")[i].constructor.prototype["LapysJS fullscreen"] = function() {
                                    /* Logic
                                            If
                                                the Target Element is a <video>.
                                    */
                                    if (this.tagName == "VIDEO") {
                                        // Toggle
                                        if (!this["LapysJS toggle"].screenMode)
                                            /* Logic
                                                    If
                                                        "requestFullscreen" exists,

                                                    else if
                                                        "mozRequestFullScreen" exists,

                                                    else if
                                                        "webkitRequestFullScreen" exists,

                                                    else if
                                                        "msRequestFullscreen" exists.
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
                                                        "exitFullscreen" exists,

                                                    else if
                                                        "mozExitFullScreen" exists,

                                                    else if
                                                        "webkitExitFullscreen" exists,

                                                    else if
                                                        "msExitFullscreen" exists.
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

                                        this["LapysJS toggle"].screenMode = !this["LapysJS toggle"].screenMode
                                    }
                                };

                                // Seek
                                document.querySelectorAll("audio.media, video.media")[i].constructor.prototype["LapysJS seek"] = function(range) {
                                    // Modification
                                        // Current Time
                                        this.currentTime = range.value;

                                        // [Range]
                                            // Value
                                            range.value = this.currentTime;
                                            range.setAttribute("value", this.currentTime)
                                };

                                // Set Volume
                                document.querySelectorAll("audio.media, video.media")[i].constructor.prototype["LapysJS setVolume"] = function(range) {
                                    // Modification
                                        // Volume
                                        this.volume = (range.value / 100);

                                        // Information > Volume
                                        this["LapysJS information"].volume = this.volume;

                                        // [Range]
                                            // Value
                                            range.value = (this.volume * 100);
                                            range.setAttribute("value", (this.volume * 100))
                                };

                                // Toggle Play Mode
                                document.querySelectorAll("audio.media, video.media")[i].constructor.prototype["LapysJS togglePlayMode"] = function() {
                                    // Toggle
                                    if (!this["LapysJS toggle"].playMode) {
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
                                                        ((this.nextElementSibling || document.createElement("div")).querySelector(".play-button") || document.createElement("button")).innerHTML = (this.getAttribute("data-controls-pause-button-inner-html") || this.getAttribute("data-controls-play-button-inner-html") || "&blacktriangleright;")
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
                                                        ((this.nextElementSibling || document.createElement("div")).querySelector(".play-button") || document.createElement("button")).innerHTML = (this.getAttribute("data-controls-play-button-inner-html") || "&blacktriangleright;")
                                    };

                                    this["LapysJS toggle"].playMode = !this["LapysJS toggle"].playMode
                                };

                            // Event
                                // Set Timeout
                                setTimeout(function() {
                                    /* Loop
                                            Index all Media
                                    */
                                    for (var j = 0; j < document.querySelectorAll("audio.media, video.media").length; j++) {
                                        // Double Click
                                        document.querySelectorAll("audio.media, video.media")[j].setEvent("dblclick", function() {
                                            // Function
                                                // Target Element
                                                    // Fullscreen
                                                    this["LapysJS fullscreen"]()
                                        });

                                        // Ended
                                        document.querySelectorAll("audio.media, video.media")[j].setEvent("ended", function() {
                                            // Modification
                                                // Target Element
                                                    // Toggle > Play Mode
                                                    this["LapysJS toggle"].playMode = !this["LapysJS toggle"].playMode
                                        });

                                        // Loaded Data
                                        document.querySelectorAll("audio.media, video.media")[j].setEvent("loadeddata", function() {
                                            // Modification
                                                // Target Element
                                                    // Source
                                                        /* Logic
                                                                If
                                                                    the Target Element does not have a "src" attribute.
                                                        */
                                                        if (this.hasAttribute("src"))
                                                            this.src = this.currentSrc
                                        });

                                        // Loaded Data, Pause, Play
                                        document.querySelectorAll("audio.media, video.media")[j].setEvent("loadeddata, pause, play", function() {
                                            // Modification
                                                // Target Element
                                                    // Data Hidden
                                                    (this["LapysJS console"].querySelector(".loader-widget") || document.createElement("div")).setAttribute("data-hidden", "");

                                                    // Data Title
                                                    (this.getAttribute("data-load") == "") || (this["LapysJS console"].querySelector(".loader-widget") || document.createElement("div")).removeAttribute("data-title", "")
                                        });

                                        // Mouse Up
                                        document.querySelectorAll("audio.media, video.media")[j].setEvent("mouseup", function() {
                                            // Function
                                                // Target Element
                                                    // Toggle Play Mode
                                                    this["LapysJS togglePlayMode"]()
                                        });

                                        // Pause
                                        document.querySelectorAll("audio.media, video.media")[j].setEvent("pause", function() {
                                            // Modification
                                                // Target Element
                                                    // Information > Playing
                                                    this["LapysJS information"].playing = false
                                        });

                                        // Play
                                        document.querySelectorAll("audio.media, video.media")[j].setEvent("play", function() {
                                            // Modification
                                                // Target Element
                                                    // Information > Playing
                                                    this["LapysJS information"].playing = true
                                        });

                                        // Volume Change
                                        document.querySelectorAll("audio.media, video.media")[j].setEvent("volumechange", function() {
                                            // Modification
                                                // Target Element
                                                    // Muted
                                                        /* Logic
                                                                If
                                                                    the Target Element's "volume" is not 0.
                                                        */
                                                        if (this.volume != 0) {
                                                            this.muted = false;
                                                            this.removeAttribute("muted")
                                                        }

                                                        else {
                                                            this.muted = true;
                                                            this.setAttribute("muted", "")
                                                        }
                                        })
                                    }
                                }, 0)
                        };

                    // Placeholder
                        /* Loop
                                Index all Placeholder Elements
                        */
                        for (var i = 0; i < document.querySelectorAll("input[data-placeholder], textarea[data-placeholder]").length; i++) {
                            /* Logic
                                    If
                                        the Placeholder Element 'has a placeholder already'.
                            */
                            if (!document.querySelectorAll("input[data-placeholder], textarea[data-placeholder]")[i].hasPlaceholder) {
                                // Adjacent Initialization
                                document.querySelectorAll('input[data-placeholder], textarea[data-placeholder]')[i].insertAdjacentHTML(
                                    'beforebegin',

                                    /* Placeholder */
                                    '<label data-id="placeholder"' +
                                        (function() {
                                            /* Logic
                                                    If
                                                        the Placeholder Element has an ID.
                                            */
                                            if (document.querySelectorAll("input[data-placeholder], textarea[data-placeholder]")[i].hasAttribute("id"))
                                                // Return
                                                return ' for="' + document.querySelectorAll('input[data-placeholder], textarea[data-placeholder]')[i].id + '"';

                                            else
                                                // Return
                                                return ''
                                        })() +
                                    '> ' +
                                        document.querySelectorAll('input[data-placeholder], textarea[data-placeholder]')[i].getAttribute('data-placeholder') +
                                    ' </label>'
                                );

                                // Modification
                                    // Placeholder Element
                                        // Has Placeholder
                                        document.querySelectorAll("input[data-placeholder], textarea[data-placeholder]")[i].hasPlaceholder = true;

                                // Events
                                    // Placeholder Element
                                        // Blur
                                        document.querySelectorAll("input[data-placeholder], textarea[data-placeholder]")[i].setEvent("blur", function() {
                                            // Modification
                                                // [This]
                                                    // Data Selected
                                                    (
                                                        document.querySelector('label[data-id="placeholder"][for="' + this.id + '"]') ||
                                                        this.previousElementSibling
                                                    ).removeAttribute('data-selected')
                                        });

                                        // Focus
                                        document.querySelectorAll("input[data-placeholder], textarea[data-placeholder]")[i].setEvent("focus", function() {
                                            // Modification
                                                // [This]
                                                    // Data Selected
                                                    (
                                                        document.querySelector('label[data-id="placeholder"][for="' + this.id + '"]') ||
                                                        this.previousElementSibling
                                                    ).setAttribute('data-selected', '')
                                        });

                                // Set Interval
                                setInterval(function() {
                                    /* Loop
                                            Index all Placeholder Elements.
                                    */
                                    for (var i = 0; i < document.querySelectorAll("input[data-placeholder], textarea[data-placeholder]").length; i++) {
                                        /* Logic
                                                If
                                                    the Target Element's "value" is not 'empty'
                                                        and
                                                    its Placeholder is not 'selected'.
                                        */
                                        if (
                                            !!document.querySelectorAll("input[data-placeholder], textarea[data-placeholder]")[i].value &&
                                            !(
                                                document.querySelector('label[data-id="placeholder"][for="' + document.querySelectorAll("input[data-placeholder], textarea[data-placeholder]")[i].id + '"]') ||
                                                document.querySelectorAll("input[data-placeholder], textarea[data-placeholder]")[i].previousElementSibling
                                            ).hasAttribute("data-selected")
                                        )
                                            // Modification
                                                // [This]
                                                    // Data Input
                                                    (
                                                        document.querySelector('label[data-id="placeholder"][for="' + document.querySelectorAll("input[data-placeholder], textarea[data-placeholder]")[i].id + '"]') ||
                                                        document.querySelectorAll("input[data-placeholder], textarea[data-placeholder]")[i].previousElementSibling
                                                    ).setAttribute('data-input', 'true');

                                        else
                                            // Modification
                                                // [This]
                                                    // Data Input
                                                    (
                                                        document.querySelector('label[data-id="placeholder"][for="' + document.querySelectorAll("input[data-placeholder], textarea[data-placeholder]")[i].id + '"]') ||
                                                        document.querySelectorAll("input[data-placeholder], textarea[data-placeholder]")[i].previousElementSibling
                                                    ).removeAttribute('data-input')
                                    }
                                }, 100)
                            }
                        };

                    // Screen Tip
                        // Definition
                        (document.createElement("screen-tip").constructor !== HTMLElement) || window.customElements.define("screen-tip", class ScreenTip extends HTMLElement {});

                        // Initialization
                        screen.tip = document.createElement("screen-tip");

                        // Insertion
                        document.body.append(screen.tip);

                        // Deletion
                        (document.getElementsByTagName("screen-tip")[1] || document.createElement("div")).remove();

                        // Modification
                            // ID
                            screen.tip.id = "screentip";

                            // Hidden
                            screen.tip.setAttribute("data-hidden", "");

                        /* Loop
                                Index all 'Screen Tipped' elements.
                        */
                        for (var i = 0; i < document.querySelectorAll('[data-title]:not([data-title*="_hidden"])').length; i++) {
                            // Events
                                // Mouse Leave
                                document.querySelectorAll('[data-title]:not([data-title*="_hidden"])')[i].setEvent(
                                    "mouseleave",

                                    function() {
                                            // Update
                                                // Screentip
                                                screen.tip = document.querySelector("screen-tip#screentip");

                                            // Modification
                                                // Target Element
                                                    // [Formerly] Required
                                                        /* Logic
                                                                If
                                                                    the Target Element has the "formerlyRequired" property.
                                                        */
                                                        if (this.formerlyRequired) {
                                                            this.formerlyRequired = false;
                                                            this.required = true
                                                        }

                                                    // [Formerly] Title
                                                        /* Logic
                                                                If
                                                                    the Target Element has the "formerlyTitled" property.
                                                        */
                                                        if (this.formerlyTitled) {
                                                            this.setAttribute("title", this.formerlyTitled);
                                                            this.formerlyTitled = false
                                                        }

                                            // Modification
                                                // Class
                                                screen.tip.removeAttribute("class");

                                                // Data Hidden
                                                screen.tip.setAttribute("data-hidden", "");

                                                // Style
                                                screen.tip.removeAttribute("style");

                                            // Style
                                                // Left
                                                screen.tip.style.left = (((screen.tip.margin || document.createElement("div")).left + (screen.tip.position || document.createElement("div")).left) + "px");

                                                // Top
                                                screen.tip.style.top = (((screen.tip.margin || document.createElement("div")).top + (screen.tip.position || document.createElement("div")).top) + "px")
                                    }
                                );

                                // Mouse Over
                                document.querySelectorAll('[data-title]:not([data-title*="_hidden"])')[i].setEvent(
                                    "mouseover",

                                    function(event) {
                                            // Update
                                                // Screentip
                                                screen.tip = document.querySelector("screen-tip#screentip");

                                            // Modification
                                                // Target Element
                                                    // [Formerly] Required
                                                        /* Logic
                                                                If
                                                                    the Target Element has the "required" attribute.
                                                        */
                                                        if (this.hasAttribute("required")) {
                                                            this.formerlyRequired = true;
                                                            this.required = false
                                                        };

                                                    // [Formerly] Title
                                                        /* Logic
                                                                If
                                                                    the Target Element has the "title" attribute.
                                                        */
                                                        if (this.hasAttribute("title")) {
                                                            this.formerlyTitled = this.title;
                                                            this.removeAttribute("title")
                                                        }

                                            // Initialization
                                                // Target Element
                                                var that = (this || screen.tip);

                                            // Modification
                                                // Class
                                                screen.tip.className = (that.getAttribute("data-title-class") || "");

                                                // Inner HTML
                                                    /* Logic
                                                            If
                                                                the Target Element's "data-title" attribute has a "_" character.
                                                    */
                                                    if (that.getAttribute("data-title").indexOf("_") >= 0)
                                                        screen.tip.innerHTML = that.getAttribute("data-title").slice(0, that.getAttribute("data-title").indexOf("_"));

                                                    else
                                                        screen.tip.innerHTML = that.getAttribute("data-title");

                                                // Style
                                                screen.tip.style = (that.getAttribute("data-title-style") || "");

                                            /* Set Timeout
                                                    --- NOTE ---
                                                        This function runs after the Screentip's CSS animation or transition delay.
                                            */
                                            setTimeout(
                                                function() {
                                                    // Modification
                                                        // Hidden
                                                        screen.tip.removeAttribute("data-hidden");

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
                                                                var screenTipMarginLeft = 0;

                                                                // Top
                                                                var screenTipMarginTop = 0;

                                                        // Screentip Position
                                                        screen.tip.position = {
                                                            // Left
                                                            left: 0,

                                                            // Top
                                                            top: 0
                                                        };

                                                    // Update
                                                        // Screentip Margin > Left
                                                        screen.tip.margin.left = (that.getBoundingClientRect().width * (5 / 100));

                                                        // Screentip Margin > Top
                                                        screen.tip.margin.top = (that.getBoundingClientRect().height * (5 / 100));

                                                        // Screentip Position > Left
                                                        screen.tip.position.left = event.clientX;

                                                        // Screentip Position > Top
                                                        screen.tip.position.top = event.clientY;

                                                        /* Logic
                                                                [if:else if:else function]
                                                        */
                                                            // Bottom
                                                            if (that.getAttribute("data-title").slice(that.getAttribute("data-title").indexOf("_")) == "_bottom") {
                                                                // Screentip Margin > Left
                                                                screen.tip.margin.left = (that.getBoundingClientRect().width * (5 / 100));

                                                                // Screentip Margin > Top
                                                                screen.tip.margin.top = (that.getBoundingClientRect().height * (5 / 100));

                                                                // Screentip Position > Top
                                                                screen.tip.position.top = that.getBoundingClientRect().bottom
                                                            }
                                                                // Bottom Center
                                                                else if (
                                                                    that.getAttribute("data-title").slice(that.getAttribute("data-title").indexOf("_")) == "_bottom_center" ||
                                                                    that.getAttribute("data-title").slice(that.getAttribute("data-title").indexOf("_")) == "_center_bottom"
                                                                ) {
                                                                    // Screentip Margin > Left
                                                                    screen.tip.margin.left = 0;

                                                                    // Screentip Margin > Top
                                                                    screen.tip.margin.top = (that.getBoundingClientRect().height * (5 / 100));

                                                                    // Screentip Position > Left
                                                                    screen.tip.position.left = (that.getBoundingClientRect().left + (that.clientWidth / 2)) - (screen.tip.clientWidth / 2);

                                                                    // Screentip Position > Top
                                                                    screen.tip.position.top = that.getBoundingClientRect().bottom
                                                                }

                                                                // Bottom Left
                                                                else if (
                                                                    that.getAttribute("data-title").slice(that.getAttribute("data-title").indexOf("_")) == "_bottom_left" ||
                                                                    that.getAttribute("data-title").slice(that.getAttribute("data-title").indexOf("_")) == "_left_bottom"
                                                                ) {
                                                                    // Screentip Margin > Left
                                                                    screen.tip.margin.left = -(that.getBoundingClientRect().width * (5 / 100));

                                                                    // Screentip Margin > Top
                                                                    screen.tip.margin.top = (that.getBoundingClientRect().height * (5 / 100));

                                                                    // Screentip Position > Left
                                                                    screen.tip.position.left = that.getBoundingClientRect().left;

                                                                    // Screentip Position > Top
                                                                    screen.tip.position.top = that.getBoundingClientRect().bottom
                                                                }

                                                                // Bottom Right
                                                                else if (
                                                                    that.getAttribute("data-title").slice(that.getAttribute("data-title").indexOf("_")) == "_bottom_right" ||
                                                                    that.getAttribute("data-title").slice(that.getAttribute("data-title").indexOf("_")) == "_right_bottom"
                                                                ) {
                                                                    // Screentip Position > Left
                                                                    screen.tip.position.left = that.getBoundingClientRect().right;

                                                                    // Screentip Margin > Top
                                                                    screen.tip.margin.top = (that.getBoundingClientRect().height * (5 / 100));

                                                                    // Screentip Position > Top
                                                                    screen.tip.position.top = that.getBoundingClientRect().bottom
                                                                }

                                                            // Center
                                                            else if (that.getAttribute("data-title").slice(that.getAttribute("data-title").indexOf("_")) == "_center") {
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
                                                                    that.getAttribute("data-title").slice(that.getAttribute("data-title").indexOf("_")) == "_center_left" ||
                                                                    that.getAttribute("data-title").slice(that.getAttribute("data-title").indexOf("_")) == "_left_center"
                                                                ) {
                                                                    // Screentip Margin > Left
                                                                    screen.tip.margin.left = -(that.getBoundingClientRect().width * (5 / 100));

                                                                    // Screentip Margin > Top
                                                                    screen.tip.margin.top = 0;

                                                                    // Screentip Position > Left
                                                                    screen.tip.position.left = that.getBoundingClientRect().left;

                                                                    // Screentip Position > Top
                                                                    screen.tip.position.top = (that.getBoundingClientRect().top + (that.clientHeight / 2)) - (screen.tip.clientHeight / 2)
                                                                }

                                                                // Center Right
                                                                else if (
                                                                    that.getAttribute("data-title").slice(that.getAttribute("data-title").indexOf("_")) == "_center_right" ||
                                                                    that.getAttribute("data-title").slice(that.getAttribute("data-title").indexOf("_")) == "_right_center"
                                                                ) {
                                                                    // Screentip Margin > Left
                                                                    screen.tip.margin.left = (that.getBoundingClientRect().width * (5 / 100));

                                                                    // Screentip Margin > Top
                                                                    screen.tip.margin.top = 0;

                                                                    // Screentip Position > Left
                                                                    screen.tip.position.left = that.getBoundingClientRect().right;

                                                                    // Screentip Position > Top
                                                                    screen.tip.position.top = (that.getBoundingClientRect().top + (that.clientHeight / 2)) - (screen.tip.clientHeight / 2)
                                                                }

                                                            // Top
                                                            else if (that.getAttribute("data-title").slice(that.getAttribute("data-title").indexOf("_")) == "_top") {
                                                                // Screentip Margin > Left
                                                                screen.tip.margin.left = (that.getBoundingClientRect().width * (5 / 100));

                                                                // Screentip Margin > Top
                                                                screen.tip.margin.top = -(that.getBoundingClientRect().height * (5 / 100));

                                                                // Screentip Position > Top
                                                                screen.tip.position.top = that.getBoundingClientRect().top
                                                            }
                                                                // Top Center
                                                                else if (
                                                                    that.getAttribute("data-title").slice(that.getAttribute("data-title").indexOf("_")) == "_top_center" ||
                                                                    that.getAttribute("data-title").slice(that.getAttribute("data-title").indexOf("_")) == "_center_top"
                                                                ) {
                                                                    // Screentip Margin > Left
                                                                    screen.tip.margin.left = 0;

                                                                    // Screentip Margin > Top
                                                                    screen.tip.margin.top = -(that.getBoundingClientRect().height * (5 / 100));

                                                                    // Screentip Position > Left
                                                                    screen.tip.position.left = (that.getBoundingClientRect().left + (that.clientWidth / 2)) - (screen.tip.clientWidth / 2);

                                                                    // Screentip Position > Top
                                                                    screen.tip.position.top = that.getBoundingClientRect().top
                                                                }

                                                                // Top Left
                                                                else if (
                                                                    that.getAttribute("data-title").slice(that.getAttribute("data-title").indexOf("_")) == "_top_left" ||
                                                                    that.getAttribute("data-title").slice(that.getAttribute("data-title").indexOf("_")) == "_left_top"
                                                                ) {
                                                                    // Screentip Margin > Left
                                                                    screen.tip.margin.left = -(that.getBoundingClientRect().width * (5 / 100));

                                                                    // Screentip Margin > Top
                                                                    screen.tip.margin.top = (that.getBoundingClientRect().height * (5 / 100));

                                                                    // Screentip Position > Left
                                                                    screen.tip.position.left = that.getBoundingClientRect().left;

                                                                    // Screentip Position > Top
                                                                    screen.tip.position.top = that.getBoundingClientRect().top
                                                                }

                                                                // Top Right
                                                                else if (
                                                                    that.getAttribute("data-title").slice(that.getAttribute("data-title").indexOf("_")) == "_top_right" ||
                                                                    that.getAttribute("data-title").slice(that.getAttribute("data-title").indexOf("_")) == "_right_top"
                                                                ) {
                                                                    // Screentip Margin > Left
                                                                    screen.tip.margin.left = (that.getBoundingClientRect().width * (5 / 100));

                                                                    // Screentip Margin > Top
                                                                    screen.tip.margin.top = (that.getBoundingClientRect().height * (5 / 100));

                                                                    // Screentip Position > Left
                                                                    screen.tip.position.left = that.getBoundingClientRect().right;

                                                                    // Screentip Position > Top
                                                                    screen.tip.position.top = that.getBoundingClientRect().top
                                                                }

                                                    // Style
                                                        // Left
                                                        screen.tip.style.left = ((screen.tip.margin.left + screen.tip.position.left) + "px");

                                                        // Top
                                                        screen.tip.style.top = ((screen.tip.margin.top + screen.tip.position.top) + "px")
                                                },

                                                (function() {
                                                    // Initialization
                                                        // Delay
                                                        var delay = 0;

                                                    /* Loop
                                                            Index the Screentip's CSS "animation-delay" as an array.
                                                    */
                                                    for (var k = 0; k < screen.tip.getCSS("animation-delay").replace(/ms|s| /g, "").replace(/0\./g, ".").split(/,/g).length; k++)
                                                        // Update
                                                        delay += parseFloat(screen.tip.getCSS("animation-delay").replace(/ms|s| /g, "").replace(/0\./g, ".").split(/,/g)[k]);

                                                    /* Loop
                                                            Index the Screentip's CSS "animation-duration" as an array.
                                                    */
                                                    for (var k = 0; k < screen.tip.getCSS("animation-duration").replace(/ms|s| /g, "").replace(/0\./g, ".").split(/,/g).length; k++)
                                                        // Update
                                                        delay += parseFloat(screen.tip.getCSS("animation-duration").replace(/ms|s| /g, "").replace(/0\./g, ".").split(/,/g)[k]);

                                                    /* Loop
                                                            Index the Screentip's CSS "transition-delay" as an array.
                                                    */
                                                    for (var k = 0; k < screen.tip.getCSS("transition-delay").replace(/ms|s| /g, "").replace(/0\./g, ".").split(/,/g).length; k++)
                                                        // Update
                                                        delay += parseFloat(screen.tip.getCSS("transition-delay").replace(/ms|s| /g, "").replace(/0\./g, ".").split(/,/g)[k]);

                                                    /* Loop
                                                            Index the Screentip's CSS "transition-duration" as an array.
                                                    */
                                                    for (var k = 0; k < screen.tip.getCSS("transition-duration").replace(/ms|s| /g, "").replace(/0\./g, ".").split(/,/g).length; k++)
                                                        // Update
                                                        delay += parseFloat(screen.tip.getCSS("transition-duration").replace(/ms|s| /g, "").replace(/0\./g, ".").split(/,/g)[k]);

                                                    // Return
                                                    return (((delay * 1000) + 100) || 0)
                                                })()
                                            )
                                    }
                                )
                        }

                    // Select Box
                        /* Loop
                                Index all Select Boxes.
                        */
                        for (var i = 0; i < document.querySelectorAll("input.select-box").length; i++)
                            /* Logic
                                    If
                                        the Select Box has the "data-id" attribute.
                            */
                            if (document.querySelectorAll("input.select-box")[i].hasAttribute("data-id")) {
                                /* Logic
                                        If
                                            the Select Box has its respective Option Box.
                                */
                                if (document.querySelectorAll('input.select-box[data-id="' + document.querySelectorAll('input.select-box')[i].getAttribute('data-id') + '"]').length == document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[i].getAttribute('data-id') + '"]:not(input)').length) {
                                    // Option Box
                                        // Hide
                                        document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[i].getAttribute('data-id') + '"]')[1].hide();

                                        // Style
                                            // Width
                                                /* Logic
                                                        If
                                                            the Option Box has the "w_match-parent" class.
                                                */
                                                if (document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[i].getAttribute('data-id') + '"]')[1].hasClass("w_match-parent"))
                                                    // Set Interval
                                                    setInterval(function() {
                                                        /* Loop
                                                                Index all Select Boxes.
                                                        */
                                                        for (var i = 0; i < document.querySelectorAll("input.select-box").length; i++)
                                                            // Style
                                                                // Select Box
                                                                    // Width
                                                                    document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[i].getAttribute('data-id') + '"]')[1].style.width = (document.querySelectorAll("input.select-box")[i].clientWidth + "px")
                                                    }, 100);

                                    // Events
                                        // Select Box
                                            // Mouse Up
                                            document.querySelectorAll("input.select-box")[i].setEvent("mouseup", function() {
                                                // Option Box
                                                    // Show
                                                    document.querySelectorAll('[data-id="' + this.getAttribute('data-id') + '"]')[1].show()
                                            });

                                    // Option Box
                                        // Children
                                            /* Loop
                                                    Index all Option Box child elements.
                                            */
                                            for (var j = 0; j < document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[i].getAttribute('data-id') + '"]')[1].children.length; j++) {
                                                /* Logic
                                                        If
                                                            the element does not have the "data-value" attribute.
                                                */
                                                if (!document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[i].getAttribute('data-id') + '"]')[1].children[j].hasAttribute('data-value'))
                                                    // Child Element
                                                        // Modification
                                                            // Data Value
                                                            document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[i].getAttribute('data-id') + '"]')[1].children[j].setAttribute(
                                                                'data-value',
                                                                document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[i].getAttribute('data-id') + '"]')[1].children[j].innerHTML
                                                            );

                                                        // Event
                                                            // Mouse Up
                                                            document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[i].getAttribute('data-id') + '"]')[1].children[j].setEvent("mouseup", function() {
                                                                // Initialization
                                                                    // Target Element
                                                                    var that = this;

                                                                // Modification
                                                                    // Option Box
                                                                        // Children
                                                                            /* Loop
                                                                                    Index all Option Box child elements.
                                                                            */
                                                                            for (var j = 0; j < (this.parentElement || this.parentNode).children.length; j++)
                                                                                // Data Selected
                                                                                (this.parentElement || this.parentNode).children[j].removeAttribute("data-selected");

                                                                            // Data Selected
                                                                            this.setAttribute("data-selected", "");

                                                                // Set Timeout
                                                                setTimeout(function() {
                                                                    // Option Box
                                                                        // Hide
                                                                        (that.parentElement || that.parentNode).hide()
                                                                }, 100)
                                                            });

                                                            // [Data Option Event Type] | Mouse Up
                                                            document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[i].getAttribute('data-id') + '"]')[1].children[j].setEvent(
                                                                (document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[i].getAttribute('data-id') + '"]')[1].getAttribute('data-option-event-type') || 'mouseup'),

                                                                function() {
                                                                    // Modification
                                                                        // Select Box
                                                                            // Value
                                                                            document.querySelector('input.select-box[data-id="' + (this.parentElement || this.parentNode).getAttribute('data-id') + '"]').value = (
                                                                                this.getAttribute('data-value') || this.innerHTML
                                                                            )
                                                                }
                                                            )
                                    }
                                }
                            };

                    // Toast
                        // Definition
                        (document.createElement("screen-toast").constructor !== HTMLElement) || window.customElements.define("screen-toast", class ScreenToast extends HTMLElement {});

                        // Initialization
                        screen.toast = document.createElement("screen-toast");

                        // Insertion
                        document.body.append(screen.toast);

                        // Deletion
                        !(document.getElementsByTagName("screen-toast")[1]) || document.getElementsByTagName("screen-toast")[1].remove();

                        // Modification
                            // ID
                            screen.toast.id = "toast";

                            // Data Hidden
                            screen.toast.setAttribute("data-hidden", "");

                        /* Loop
                                Index all 'Toasted' elements.
                        */
                        for (var i = 0; i < document.querySelectorAll('[data-toast]:not([data-toast*="_hidden"])').length; i++)
                            // Event
                                // Data Toast Event Type | Mouse Up
                                document.querySelectorAll('[data-toast]:not([data-toast*="_hidden"])')[i].setEvent(
                                    (document.querySelectorAll('[data-toast]:not([data-toast*="_hidden"])')[i].getAttribute('data-toast-event-type') || 'mouseup'),

                                    function() {
                                        // Initialization
                                            // Target Element
                                            var that = this;

                                        // Modification
                                            // Inner HTML
                                            screen.toast.innerHTML = this.getAttribute("data-toast").replace(
                                                this.getAttribute("data-toast").slice(this.getAttribute("data-toast").lastIndexOf("(")),
                                                ""
                                            );

                                        // Set Timeout
                                        setTimeout(function() {
                                            // Modification
                                                // Class
                                                screen.toast.className = that.getAttribute("data-toast-class");

                                                // Data Hidden
                                                screen.toast.removeAttribute("data-hidden");

                                                // Style
                                                screen.toast.style = that.getAttribute("data-toast-style");

                                            // Set Timeout
                                            setTimeout(function() {
                                                // Modification
                                                    // Class
                                                    screen.toast.removeAttribute("class");

                                                    // Data Hidden
                                                    screen.toast.setAttribute("data-hidden", "");

                                                    // Style
                                                    screen.toast.removeAttribute("style")
                                            },  ((parseFloat(that.getAttribute("data-toast").replace(/([a-z]|[A-Z]|[0-9]| ){1,}\([0-9]{1,}_/, "").slice(0, -1)) * 1000) || 0))
                                        }, ((parseFloat(that.getAttribute("data-toast").replace(/([a-z]|[A-Z]|[0-9]| ){1,}\(/, "").replace(/_[0-9]\)/, "")) * 1000) || 0))
                                    }
                                );

                    // [Event]
                        // <body>
                            // Click, Mouse Up
                            document.body.setEvent("click, keypress", function() {
                                // Update
                                    // Toast
                                    screen.toast = document.querySelector("screen-toast#toast");

                                // Modification
                                    // Toast
                                        // Class
                                        screen.toast.removeAttribute("class");

                                        // Hidden
                                        screen.toast.setAttribute("data-hidden", "");

                                        // Style
                                        screen.toast.removeAttribute("style");
                            });

                            // Click, Key Press and Scroll
                            document.body.setEvent("click, keypress, scroll", function() {
                                // Update
                                    // Screentip
                                    screen.tip = document.querySelector("screen-tip#screentip");

                                // Modification
                                    // Class
                                    screen.tip.removeAttribute("class");

                                    // Hidden
                                    screen.tip.setAttribute("data-hidden", "");

                                    // Style
                                    screen.tip.removeAttribute("style");

                                // Style
                                    // Left
                                    screen.tip.style.left = (((screen.tip.margin || document.createElement("div")).left + (screen.tip.position || document.createElement("div")).left) + "px");

                                    // Top
                                    screen.tip.style.top = (((screen.tip.margin || document.createElement("div")).top + (screen.tip.position || document.createElement("div")).top) + "px")
                            });

                            // Key Down
                            document.body.setEvent("keydown", function() {
                                /* Logic
                                        If
                                            a Carousel is selected.

                                        --- UPDATE REQUIRED ---
                                            Should be able to route through all the Carousel Slides.
                                */
                                if (document.querySelector(".carousel[data-selected]"))
                                    /* Logic
                                            If
                                                the Event Code is "ArrowLeft",

                                            else if
                                                the Event Code is "ArrowRight".
                                    */
                                    if (event.code == "ArrowLeft")
                                        // Carousel [Selected]
                                            // Previous
                                            document.querySelector(".carousel[data-selected]").prev();

                                    else if (event.code == "ArrowRight")
                                        // Carousel [Selected]
                                            // Next
                                            document.querySelector(".carousel[data-selected]").next();

                                /* Loop
                                        Index all 'focused' Media.
                                */
                                for (var j = 0; j < document.querySelectorAll("audio.media[data-focus], video.media[data-focus]").length; j++) {
                                    /* Logic
                                            If
                                                the Event Code is the Media's "data-play-event-key" attribute
                                                    or
                                                the Event Code is "Space",

                                            else if
                                                the "event" "ctrlKey" is 'active'
                                                    or
                                                the Media's "data-seekmore-meta-event-key" is 'active'
                                                            and
                                                the Event Code is the Media's "data-seekmore-left-event-key" attribute
                                                    or
                                                the Event Code is "ArrowLeft",

                                            else if
                                                the "event" "ctrlKey" is 'active'
                                                    or
                                                the Media's "data-seekmore-meta-event-key" is 'active'
                                                            and
                                                the Event Code is the Media's "data-seekmore-right-event-key" attribute
                                                    or
                                                the Event Code is "ArrowRight",

                                            else if
                                                the "event" "shiftKey" is 'active'
                                                    or
                                                the Media's "data-seek-meta-event-key" is 'active'
                                                            and
                                                the Event Code is the Media's "data-seek-left-event-key" attribute
                                                    or
                                                the Event Code is "ArrowLeft",

                                            else if
                                                the "event" "shiftKey" is 'active'
                                                    or
                                                the Media's "data-seek-meta-event-key" is 'active'
                                                            and
                                                the Event Code is the Media's "data-seek-right-event-key" attribute
                                                    or
                                                the Event Code is "ArrowRight",

                                            else if
                                                the "event" "ctrlKey" is 'active'
                                                    or
                                                the Media's "data-volume-meta-event-key" is 'active'
                                                            and
                                                the Event Code is the Media's "data-volume-reduce-event-key" attribute
                                                    or
                                                the Event Code is "ArrowDown",

                                            else if
                                                the "event" "ctrlKey" is 'active'
                                                    or
                                                the Media's "data-volume-meta-event-key" is 'active'
                                                            and
                                                the Event Code is the Media's "data-volume-increase-event-key" attribute
                                                    or
                                                the Event Code is "ArrowUp",

                                            else if
                                                the Event Code is the Media's "data-fullscreen-event-key" attribute
                                                    or
                                                the Event Code is "KeyF".
                                    */
                                    if (event.code == (document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].getAttribute("data-play-event-key") || "Space"))
                                        // Function
                                            // Toggle Play Mode
                                            document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i]["LapysJS togglePlayMode"]();

                                    else if (
                                        (event.ctrlKey || document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].hasAttribute("data-seek-meta-event-key")) &&
                                        event.code == (document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].getAttribute("data-seekmore-left-event-key") || "ArrowLeft")
                                    )
                                        // Modification
                                            // Current Time
                                            document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].currentTime -= parseInt(
                                                document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].duration * (5 / 100)
                                            );

                                    else if (
                                        (event.ctrlKey || document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].hasAttribute("data-seek-meta-event-key")) &&
                                        event.code == (document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].getAttribute("data-seekmore-right-event-key") || "ArrowRight")
                                    )
                                        // Modification
                                            // Current Time
                                            document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].currentTime += parseInt(
                                                document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].duration * (5 / 100)
                                            );

                                    else if (
                                        (event.shiftKey || document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].hasAttribute("data-seek-meta-event-key")) &&
                                        event.code == (document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].getAttribute("data-seek-left-event-key") || "ArrowLeft")
                                    )
                                        // Modification
                                            // Current Time
                                            document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].currentTime -= parseInt(
                                                document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].duration * (1 / 100)
                                            );

                                    else if (
                                        (event.shiftKey || document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].hasAttribute("data-seek-meta-event-key")) &&
                                        event.code == (document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].getAttribute("data-seek-right-event-key") || "ArrowRight")
                                    )
                                        // Modification
                                            // Current Time
                                            document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].currentTime += parseInt(
                                                document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].duration * (1 / 100)
                                            );

                                    else if (
                                        (event.ctrlKey || document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].hasAttribute("data-volume-meta-event-key")) &&
                                        event.code == (document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].getAttribute("data-volume-reduce-event-key") || "ArrowDown")
                                    )
                                        // Modification
                                            // Volume
                                                /* Logic
                                                        If
                                                            the "createElement()" method is a function.
                                                */
                                                if (createElement.constructor.name == "Function")
                                                    // [if]
                                                    (createElement('div').constructor == document.createElement('div').constructor) ?
                                                        // [true]
                                                        document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i]["LapysJS setVolume"](createElement('input', '[value="' + (function() {
                                                            /* Logic
                                                                    If
                                                                        the modified data is lesser than 0.
                                                            */
                                                            if (((document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].volume * 100) - (document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].volume * 10)) < 0)
                                                                // Return
                                                                return 0;

                                                            else
                                                                // Return
                                                                return ((document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].volume * 100) - (document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].volume * 10))
                                                        })() + '"]')) :

                                                        // [false]
                                                        false;

                                    else if (
                                        (event.ctrlKey || document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].hasAttribute("data-volume-meta-event-key")) &&
                                        event.code == (document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].getAttribute("data-volume-increase-event-key") || "ArrowUp")
                                    )
                                        // Modification
                                            // Volume
                                                /* Logic
                                                        If
                                                            the "createElement()" method is a function.
                                                */
                                                if (createElement.constructor.name == "Function")
                                                    // [if]
                                                    (createElement('div').constructor == document.createElement('div').constructor) ?
                                                        document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i]["LapysJS setVolume"](createElement('input', '[value="' + (function() {
                                                            /* Logic
                                                                    If
                                                                        the Media's volume is not 0.
                                                            */
                                                            if (document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].volume != 0)
                                                                /* Logic
                                                                        If
                                                                            the modified data is greater than 100.
                                                                */
                                                                if (((document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].volume * 100) + (document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].volume * 10)) > 100)
                                                                    // Return
                                                                    return 100;

                                                                else
                                                                    // Return
                                                                    return ((document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].volume * 100) + (document.querySelectorAll('audio.media[data-focus], video.media[data-focus]')[i].volume * 10));

                                                            else
                                                                // Return
                                                                return 10
                                                        })() + '"]')) :
                                                        false;

                                    else if (event.code == (document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].getAttribute("data-fullscreen-event-key") || "KeyF"))
                                        // Function
                                            // Fullscreen
                                            document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i]["LapysJS fullscreen"]()
                                };

                                /* Loop
                                        Index all Select Boxes.
                                */
                                for (var j = 0; j < document.querySelectorAll("input.select-box[data-id]").length; j++) {
                                    /* Logic
                                            If
                                                the Event Code is "Escape",

                                            else if
                                                its respective Option Box exists.
                                    */
                                    if (event.code == "Escape")
                                        // Modification
                                            // Option Box
                                                // Hidden
                                                document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[j].getAttribute('data-id') + '"]')[1].hidden = true;

                                    else if (document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[j].getAttribute('data-id') + '"]:not([hidden])')[1]) {
                                        /* Logic
                                                Index all the Option Box's child elements.
                                        */
                                        for (var k = 0; k < document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[j].getAttribute('data-id') + '"]:not([hidden])')[1].children.length; k++)
                                            /* Logic
                                                    If
                                                        the child element has the "data-selected" attribute.
                                            */
                                            if (document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[j].getAttribute('data-id') + '"]:not([hidden])')[1].children[k].hasAttribute("data-selected")) {
                                                /* Logic
                                                        If
                                                            the Event Code is "ArrowDown",

                                                        else if
                                                            the Event Code is "ArrowUp",

                                                        else if
                                                            the Event Code is "Enter".
                                                */
                                                if (event.code == "ArrowDown") {
                                                    // Modification
                                                        // Data Selected
                                                        document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[j].getAttribute('data-id') + '"]:not([hidden])')[1].children[k].removeAttribute("data-selected");

                                                        // [Next Element Sibling]
                                                            // Data Selected
                                                            (
                                                                document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[j].getAttribute('data-id') + '"]:not([hidden])')[1].children[k].nextElementSibling ||
                                                                document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[j].getAttribute('data-id') + '"]:not([hidden])')[1].children[0]
                                                            ).setAttribute("data-selected", "");

                                                    // End
                                                    k = document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[j].getAttribute('data-id') + '"]:not([hidden])')[1].children.length
                                                }

                                                else if (event.code == "ArrowUp") {
                                                    // Modification
                                                        // Data Selected
                                                        document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[j].getAttribute('data-id') + '"]:not([hidden])')[1].children[k].removeAttribute("data-selected");

                                                        // [Previous Element Sibling]
                                                            // Data Selected
                                                            (
                                                                document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[j].getAttribute('data-id') + '"]:not([hidden])')[1].children[k].previousElementSibling ||
                                                                document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[j].getAttribute('data-id') + '"]:not([hidden])')[1].children[
                                                                    (document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[j].getAttribute('data-id') + '"]:not([hidden])')[1].children.length - 1)
                                                                ]
                                                            ).setAttribute("data-selected", "");

                                                    // End
                                                    k = document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[j].getAttribute('data-id') + '"]:not([hidden])')[1].children.length
                                                }

                                                else if (event.code == "Enter") {
                                                    // Modification
                                                        // [Select Box]
                                                            // Value
                                                            document.querySelectorAll("input.select-box[data-id]")[j].value = document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[j].getAttribute('data-id') + '"]:not([hidden])')[1].children[k].innerHTML;

                                                    // Option Box
                                                        // Hide
                                                        document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[j].getAttribute('data-id') + '"]:not([hidden])')[1].hide();

                                                    // Break
                                                    break
                                                }
                                            }

                                            else {
                                                /* Logic
                                                        If
                                                            "data-selected=""" is found within the Option Box's "innerHTML"
                                                                or
                                                            "data-selected=''" is found within the Option Box's "innerHTML".
                                                */
                                                if (
                                                    document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[j].getAttribute('data-id') + '"]:not([hidden])')[1].innerHTML.indexOf(" data-selected=\"\"") <= -1 &&
                                                    document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[j].getAttribute('data-id') + '"]:not([hidden])')[1].innerHTML.indexOf(" data-selected=''") <= -1
                                                ) {
                                                    /* Logic
                                                            If
                                                                the Event Code is "ArrowDown",

                                                            else if
                                                                the Event Code is "ArrowUp".
                                                    */
                                                    if (event.code == "ArrowDown") {
                                                        // Modification
                                                            // Data Selected
                                                            document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[j].getAttribute('data-id') + '"]:not([hidden])')[1].children[0].setAttribute("data-selected", "");

                                                        // End
                                                        k = document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[j].getAttribute('data-id') + '"]:not([hidden])')[1].children.length
                                                    }

                                                    else if (event.code == "ArrowUp") {
                                                        // Modification
                                                            // Data Selected
                                                            document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[j].getAttribute('data-id') + '"]:not([hidden])')[1].children[
                                                                (document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[j].getAttribute('data-id') + '"]:not([hidden])')[1].children.length - 1)
                                                            ].setAttribute("data-selected", "");

                                                        // End
                                                        k = document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[j].getAttribute('data-id') + '"]:not([hidden])')[1].children.length
                                                    }
                                                }
                                            }

                                        // End
                                        j = document.querySelectorAll("input.select-box[data-id]").length
                                    }
                                }
                            });

                            // Mouse Up
                            document.body.setEvent("mouseup", function() {
                                /* Loop
                                        Index all Carousels.
                                */
                                for (var i = 0; i < document.getElementsByClassName("carousel").length; i++)
                                    // Modification
                                        // Data Selected
                                        document.getElementsByClassName("carousel")[i].removeAttribute("data-selected");

                                /* Loop
                                        Index all Targets.
                                */
                                for (var i = 0; i < event.path.length; i++)
                                    /* Logic
                                            If
                                                the Target is an element.
                                    */
                                    if (typeof event.path[i].tagName == "string")
                                        /* Logic
                                                If
                                                    the Target Element is a Carousel.
                                        */
                                        if (event.path[i].hasClass("carousel")) {
                                            // Modification
                                                // Carousel
                                                    // Data Selected
                                                    event.path[i].setAttribute("data-selected", "");

                                            // End
                                            i = event.path.length
                                        };

                                /* Loop
                                        Index all Dropdowns.
                                */
                                for (var i = 0; i < document.getElementsByClassName("dropdown").length; i++)
                                    // Dropdown
                                        // Close
                                        document.getElementsByClassName("dropdown")[i]["LapysJS close"]();

                                /* Loop
                                        Index all Targets.
                                */
                                for (var i = 0; i < event.path.length; i++)
                                    /* Logic
                                            If
                                                the Target is an element.
                                    */
                                    if (typeof event.path[i].tagName == "string")
                                        /* Logic
                                                If
                                                    the Target Element is a Dropdown

                                                else if
                                                    the Target Element is a Dropdown Content.
                                        */
                                        if (event.path[i].hasClass("dropdown")) {
                                                // Dropdown
                                                    // Open
                                                    event.path[i]["LapysJS open"]();

                                            // End
                                            i = event.path.length
                                        }

                                        else if (event.path[i]["LapysJS dropdown"]) {
                                            // Dropdown
                                                // Open
                                                document.querySelector('.dropdown[data-id="' + event.path[i].getAttribute("data-id") + '"]')["LapysJS open"]();

                                            // End
                                            i = event.path.length
                                        };

                                /* Loop
                                        Index all targets.
                                */
                                for (var j = 0; j < event.path.length; j++)
                                    /* Loop
                                            Index all Select Boxes.
                                    */
                                    for (var k = 0; k < document.querySelectorAll("input.select-box").length; k++) {
                                        /* Logic
                                                If
                                                    the target is an element.
                                        */
                                        if (typeof event.path[j].tagName == "string")
                                            /* Logic
                                                    If
                                                        the Target Element
                                                        is a Select Box
                                                            or
                                                        is an Option Box.
                                            */
                                            if (
                                                event.path[j].hasClass("select-box") ||
                                                event.path[j] == document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[k].getAttribute('data-id') + '"]')[1]
                                            ) {
                                                // End
                                                k = document.querySelectorAll("input.select-box").length;

                                                // End
                                                j = event.path.length
                                            }

                                            else
                                                // Option Box
                                                    // Hide
                                                    document.querySelectorAll('[data-id="' + document.querySelectorAll('input.select-box')[k].getAttribute('data-id') + '"]')[1].hide()
                                    }
                            })
                };
                plugIns();
                onDOMNodeAdded(function() { plugIns() });

        /* Execution
            --- WARN ---
                The LapysJS script must run only once.
        */
        LapysJS.executed = true
}

else if (!window)
    // Error
    console.error("LapysJS v" + LapysJS.version + " does not function without the global 'window' object.")
