/* Strict Mode */
"use strict";

/* LapysJS Object */
var LapysJS = {
    // Author
    author : "Lapys Dev Team",

    // Execution
    executed : false,

    // Name (Title)
    name : "LapysJS",

    // Strict Mode
    strictMode : (function() {
        // Return
        return !this
    })(),

    // Version
    version : "0.0.1"
}

/* Function */
    // $ [Get Element]
    var $ = function(selector, index) {
        /* Logic
                If
                    "selector" is a "string".
        */
        if (typeof(selector) == "string")
            /* Logic
                    If
                        "index" is not 0,

                    else if
                        the returned node list does not have a second member
            */
            if (index != 0) {
                /* Logic
                        If
                            "index" is "array" or an array,

                        else if
                            "index" is "length"

                        else if
                            "index" is a number,

                        else if
                            "index" is not defined.
                */
                if (index == "array")
                    // Return
                    return document.querySelectorAll(selector)

                else if (index == "length")
                    // Return
                    return document.querySelectorAll(selector).length

                else if (typeof(index) == "number")
                    // Return
                    return document.querySelectorAll(selector)[index]

                else if (!document.querySelectorAll(selector)[1])
                    // Return
                    return document.querySelector(selector)

                else
                    // Return
                    return document.querySelectorAll(selector)
            }

            else
                // Return
                return document.querySelector(selector)
    }

    // Array to String
    function arrayToString(array) {
        // Return
        return array.toString()
    }

    // Assert
    function assert(data) {
        console.assert(data)
    }

    // Clear
    function clear() {
        console.clear()
    }

    // Create
    function create(element) {
        // Return
        return document.createElement(element)
    }

    // Document Loader
    function documentLoader(innerHTML) {
        // Initialization   
            // Loader Element
            var loaderElement = document.createElement("div")

        // [if]
        document.body.children[0] ?
            // [true]
            document.body.insertBefore(loaderElement, document.body.children[0]) :

            // [false]
            document.body.append(loaderElement)

        // Modification
            // ID
            loaderElement.id = "documentLoader"

            // innerHTML
            loaderElement.innerHTML = (
                innerHTML ||
                '<div data-title="Loading, please wait…_center_top" style="font-size: medium; padding: 1%"> </div>'
            );

        // Style
            // Height
            (function() {
                loaderElement.style.height = (window.innerHeight + "px")
            })()

        // Event
            /* Logic
                    If
                        "addEventListener" exists.
            */
            if (document.addEventListener) {
                // Load
                window.addEventListener("load", function() {
                    // Deletion
                    loaderElement.parentNode.removeChild(loaderElement)
                }, false)

                // Resize
                window.addEventListener("resize", function() {
                    // Style
                        // Height
                        loaderElement.style.height = (window.innerHeight + "px")   
                }, false)
            }

            else {
                 // Load
                window.attachEvent("onload", function() {
                    // Deletion
                    loaderElement.parentNode.removeChild(loaderElement)
                })

                // Resize
                window.attachEvent("onresize", function() {
                    // Style
                        // Height
                        loaderElement.style.height = (window.innerHeight + "px")   
                })
            }
    }

    // Go To
    function goTo(directory) {
        location.assign(directory)
    }

    // Inform
    function inform(data) {
        console.info(data)
    }

    // Log
    function log(data) {
        console.log(data)
    }

    // On DOM Change
    function onDOMChange(func) {
        /* Logic
                If
                    "func" is a function.
        */
        if (typeof(func) == "function") {
            // Initialization
                // DOM Content
                var DOMContent = document.documentElement.outerHTML

                // Former DOM Content
                var formerDOMContent = DOMContent

                // DOM Nodes Length
                var DOMNodesLength = document.querySelectorAll("*").length

                // Former DOM Nodes Length
                var formerDOMNodesLength = DOMNodesLength

            // This function runs every .1 second(s).
            setInterval(function() {
                // Update
                    // DOM Content
                    DOMContent = document.documentElement.outerHTML

                    // DOM Nodes Length
                    DOMNodesLength = document.querySelectorAll("*").length

                /* Logic
                        If
                            "DOM Content" is not "Former DOM Content"
                                or
                            "DOM Nodes Length" is not "Former DOM Nodes Length".
                */
                if (
                    DOMContent != formerDOMContent ||
                    DOMNodesLength != formerDOMNodesLength
                ) {
                    // Function
                        // Function
                        func()

                    // Update
                        // Former DOM Content
                        formerDOMContent = DOMContent

                        // Former DOM Nodes Length
                        formerDOMNodesLength = DOMNodesLength
                }
            }, 100)
        }
    }

    // On DOM Node Added
    function onDOMNodeAdded(func) {
        /* Logic
                If
                    "func" is a function.
        */
        if (typeof(func) == "function") {
            // Initialization
                // DOM Nodes Length
                var DOMNodesLength = document.querySelectorAll("*").length

                // Former DOM Nodes Length
                var formerDOMNodesLength = DOMNodesLength

            // This function runs every .1 second(s).
            setInterval(function() {
                // Update
                    // DOM Nodes Length
                    DOMNodesLength = document.querySelectorAll("*").length

                /* Logic
                        If
                            "DOM Content" is greater than "Former DOM Content".
                */
                if (DOMNodesLength > formerDOMNodesLength) {
                    // Function
                        // Function
                        func()

                    // Update
                        // Former DOM Nodes Length
                        formerDOMNodesLength = DOMNodesLength
                }
            }, 100)
        }
    }

    // On DOM Node Count Change
    function onDOMNodeCountChange(func) {
        /* Logic
                If
                    "func" is a function.
        */
        if (typeof(func) == "function") {
            // Initialization
                // DOM Nodes Length
                var DOMNodesLength = document.querySelectorAll("*").length

                // Former DOM Nodes Length
                var formerDOMNodesLength = DOMNodesLength

            // This function runs every .1 second(s).
            setInterval(function() {
                // Update
                    // DOM Nodes Length
                    DOMNodesLength = document.querySelectorAll("*").length

                /* Logic
                        If
                            "DOM Content" is not "Former DOM Content".
                */
                if (DOMNodesLength != formerDOMNodesLength) {
                    // Function
                        // Function
                        func()

                    // Update
                        // Former DOM Nodes Length
                        formerDOMNodesLength = DOMNodesLength
                }
            }, 100)
        }
    }

    // On DOM Node Removed
    function onDOMNodeRemoved(func) {
        /* Logic
                If
                    "func" is a function.
        */
        if (typeof(func) == "function") {
            // Initialization
                // DOM Nodes Length
                var DOMNodesLength = document.querySelectorAll("*").length

                // Former DOM Nodes Length
                var formerDOMNodesLength = DOMNodesLength

            // This function runs every .1 second(s).
            setInterval(function() {
                // Update
                    // DOM Nodes Length
                    DOMNodesLength = document.querySelectorAll("*").length

                /* Logic
                        If
                            "DOM Content" is lesser than "Former DOM Content".
                */
                if (DOMNodesLength < formerDOMNodesLength) {
                    // Function
                        // Function
                        func()

                    // Update
                        // Former DOM Nodes Length
                        formerDOMNodesLength = DOMNodesLength
                }
            }, 100)
        }
    }

    // On DOM Ready
    function onDOMReady(func) {
        /* Logic
                If
                    "func" is a function.
        */
        if (typeof(func) == "function") {
            document.setEvent("DOMContentLoaded", function() {
                // Function
                    // Function
                    func()
            })
        }
    }

    // Parse String
    function parseString(data, important) {
        // Try
        try {
            /* Logic
                    If "important" is not specified
            */
            if (!important)
                /* Logic
                        If
                            "data" is an element.
                */
                if (typeof(data.tagName) == "string")
                    // Return
                    return data.outerHTML.toString().replace(/</g, "&lt;").replace(/>/g, "&gt;")

                else
                    // Return
                    return data.toString()

            else
                // Return
                return JSON.stringify(data).toString()
        }

        catch (error) {
            // Throw
            console.error("[LapysJS v" + LapysJS.version + "]: One argument required, but only 0 present.")
        }
    }

    // Refresh
    function refresh() {
        location.reload()
    }

    // Scroll To
    function scrollTo(element) {
        // Error
        try {
            // Return
            return element.scrollIntoView()
        }

        catch(error) {
            // Throw
            throw new SyntaxError("[LapysJS v" + LapysJS.version + "]: The element must not be \'undefined\'.")
        }
    }

    // String to Data
    function stringToData(string, data) {
        /* Logic
                If
                    "string" exists.
        */
        if (string)
            /* Logic
                    If
                        the "string" is a string.
            */
            if (typeof(string) == "string")
                /* Logic
                        If
                            the "data" is "array",
                            return an array,

                        else if
                            the "data" is "arrayString",
                            return an object,

                        else if
                            the "data" is "object",
                            return an object.
                */
                if (data == "array")
                    // Return
                    return JSON.parse("[" + string + "]")

                else if (data == "arrayString")
                    // Return
                    return string.split(/,/g)

                else if (data == "object")
                    // Return
                    return JSON.parse("{" + string + "}")

                else
                    // Throw
                    console.error("[LapysJS v" + LapysJS.version + "]: Two arguments required, but only 1 present.")

            else
                // Throw
                console.error("[LapysJS v" + LapysJS.version + "]: The first argument is a string, and the second the data type to be converted to.")

        else
            // Throw
            console.error("[LapysJS v" + LapysJS.version + "]: Two arguments required, but only 0 present.")
    }

    // Warn
    function warn(data) {
        console.warn(data)
    }

    // Write
    function write(data) {
        document.write(data)
    }

/* Global Object Test
        Logic
            If
                the global 'window' object
                exists
                    and
                LapysJS has not been
                executed,

                do something.

            else if
                the global 'window' Object does not exist,
                throw an error.
*/
if (window && !LapysJS.executed) {
    /* Global Objects */
        // Browser
        var browser = {
            // Is Chrome?
            chrome: (function() {
                // Return
                    /* Logic
                            If
                                "chrome" and its "webstore" exist.
                    */
                    if (
                        !!window.chrome &&
                        !!window.chrome.webstore
                    )
                        // [true]
                        return true

                    else
                        // [false]
                        return false
            })(),

            // Is Edge?
            edge: (function() {
                // Return
                    /* Logic
                            If
                                Internet Explorer and "styleMedia" exist.
                    */
                    if (
                        !(
                            /*@cc_on!@*/ false ||
                            !!document.documentMode
                        ) &&
                        !window.StyleMedia
                    )
                        // [true]
                        return true

                    else
                        // [false]
                        return false
            })(),

            // Is Internet Explorer?
            internetExplorer: (function() {
                // Return
                    /* Logic
                            If
                                "documentMode" exist.
                    */
                    if (
                        /*@cc_on!@*/ false ||
                        !!document.documentMode
                    )
                        // [true]
                        return true

                    else
                        // [false]
                        return false
            })(),

            // Is Mozila?
            mozila: (function() {
                // Return
                    /* Logic
                            If
                                "InstallTrigger" is not "undefined".
                    */
                    if (typeof(InstallTrigger) !== "undefined")
                        // [true]
                        return true

                    else
                        // [false]
                        return false
            })(),

            // Is Opera?
            opera: (function() {
                // Return
                    /* Logic
                            If
                                "opr" and its "addons" exist
                                    or
                                "opera" exists
                                    or
                                the "userAgent" has "OPR/" in it.
                    */
                    if (
                        (
                            !!window.opr &&
                            !!opr.addons
                        ) ||
                        !!window.opera ||
                        navigator.userAgent.indexOf("OPR/") >= 0
                    )
                        // [true]
                        return true

                    else
                        // [false]
                        return false
            })(),

            // Is Safari?
            safari: (function() {
                // Return
                    /* Logic
                            If
                                [statement].
                    */
                    if (
                        /constructor/i.test(window.HTMLElement) ||
                        (function(data) {
                            return (data.toString() === "[object SafariRemoteNotification]" )
                        })(!window["safari"] || safari.pushNotification)
                    )
                        // [true]
                        return true

                    else
                        // [false]
                        return false
            })()
        }

        // CSS
        var css = {
            // Link
            link: function(dataID, array) {
                // Initialization
                    // <link>
                    var link = document.createElement("link")

                // Insertion
                document.head.append(link)

                // Modification
                    // Data ID
                    link.dataset.id = dataID

                    // [Attribute]
                        // Update
                            // Array
                            array = array.replace(/\'|\"/g, "").split(/,/g)

                            /* Loop
                                    Index all members of array.
                            */
                            for (var i = 0; i < array.length; i++)
                                link.setAttribute(
                                    array[i].slice(0, array[i].indexOf("=")),
                                    array[i].slice(array[i].indexOf("=") + "=".length)
                                )
            },
            
            // Style
            style: function(dataID, innerHTML) {
                // Initialization
                    // <style>
                    var style = document.createElement("style")

                // Insertion
                document.head.append(style)

                // Modification
                    // Data ID
                    style.dataset.id = dataID

                    // Inner HTML
                    style.innerHTML = ("\r\t" + innerHTML + "\n\r\t")
            }
        }

        // Delete
        var del = function(dataID) {
            /*  Logic
                    If
                        the element is a <link>,

                    else if
                        the element is a <style>,

                    else if
                        the element is a <script>.
            */
            if (document.querySelector('link[data-id="' + dataID + '"]'))
                document.querySelector('style[data-id="' + dataID + '"]').remove()

            else if (document.querySelector('style[data-id="' + dataID + '"]'))
                document.querySelector('style[data-id="' + dataID + '"]').remove()

            else if (document.querySelector('script[data-id="' + dataID + '"]'))
                document.querySelector('script[data-id="' + dataID + '"]').remove()

            else
                // Throw
                console.error("[LapysJS v" + LapysJS.version + "]: The element does not exist.")
        }

        // File
        var file = {
            // Name
            name: (function() {
                /* Logic
                        If
                            the "location" "pathname" modified is not
                            'empty',
                            modify it

                        else
                            modify it.
                */
                if (location.pathname.split("/").pop() != "")
                    // Return
                    return location.pathname.split("/").pop()
                
                else
                   return location.pathname.split("#").shift()
            })(),

            // Type
            type: (function() {
                // Return
                return (
                    // [if]
                    /[.]/.exec(
                        (function() {
                            /* Logic
                                    If
                                        the modified "location" "pathName" is
                                        not "",

                                        return the modified data.

                                    else
                                        return the modified data.
                            */
                            if (location.pathname.split("/").pop() != "")
                                return location.pathname.split("/").pop()
                
                            else
                                return location.pathname.split("#").shift()
                        })()
                    )
                ) ?
                    // [true]
                    /[^.]+$/.exec(
                        (function() {
                            /* Logic
                                    If
                                        the modified "location" "pathName" is
                                        not "",

                                        return the modified data.

                                    else
                                        return the modified data.
                            */
                            if (location.pathname.split("/").pop() != "")
                                return location.pathname.split("/").pop()
                
                            else
                                return location.pathname.split("#").shift()
                        })()
                    )[0] :
                
                    // [false]
                    undefined
            })()
        }

        // HTML Document Type
        var HTMLDoctype = (function() {
            /* Logic
                    If
                        the "doctype" exists.
            */
            if (document.doctype)
                // Return
                return (
                    '<!DOCTYPE ' +
                        (document.doctype.name) +
                        (document.doctype.publicId ?
                            ' PUBLIC "' + document.doctype.publicId + '"' :
                            ''
                        ) +
                        ((!document.doctype.publicId && document.doctype.systemId) ?
                            ' SYSTEM' :
                            ''
                        )  +
                        (document.doctype.systemId ?
                            ' "' + document.doctype.systemId + '"' :
                            ''
                        ) +
                    '>'
                )

            else
                // Return
                return
        })()

        // Location
            // Query Strings
            location.queryParameters = (function() {
                /* Logic
                        If
                            "search" exists.
                */
                if (location.search != "") {
                    // Initialization
                        // URL
                        var url = []

                        /* Loop
                                Index all Query Strings.
                        */
                        for (var i = 0; i < location.search.replace("?", "").replace(/\&/g, ",").split(/,/g).length; i++) {
                            // Update
                                // URL
                                    // Parameter
                                    url[i] = {
                                        // Name
                                        name: location.search.replace("?", "").replace(/\&/g, ",").split(/,/g)[i].slice(
                                            0, location.search.replace("?", "").replace(/\&/g, ",").split(/,/g)[i].indexOf("=")
                                        ),

                                        // Value
                                        value: location.search.replace("?", "").replace(/\&/g, ",").split(/,/g)[i].slice(
                                            location.search.replace("?", "").replace(/\&/g, ",").split(/,/g)[i].indexOf("=") + "=".length
                                        )
                                    }
                        }

                    // Return
                    return url
                }

                else
                    // Return
                    return ""
            })()

        // Javascript
        var js = {
            // Script
            script: function(dataID, innerHTML) {
                // Initialization
                    // <script>
                    var script = document.createElement("script")

                // Insertion
                document.head.append(script)

                // Modification
                    // Data ID
                    script.dataset.id = dataID

                    // Inner HTML
                    script.innerHTML = ("\r\t" + innerHTML + "\n\r\t")
            },
            
            // Source
            src: function(dataID, array) {
                // Initialization
                    // <script>
                    var script = document.createElement("script")

                // Insertion
                document.head.append(script)

                // Modification
                    // Data ID
                    script.dataset.id = dataID

                    // [Attribute]
                        // Update
                            // Array
                            array = array.replace(/\'|\"/g, "").split(/,/g)

                            /* Loop
                                    Index all members of array.
                            */
                            for (var i = 0; i < array.length; i++)
                                script.setAttribute(
                                    array[i].slice(0, array[i].indexOf("=")),
                                    array[i].slice(array[i].indexOf("=") + "=".length)
                                )
            }
        }

        // Operating System
        var operatingSystem = {
            // Is Macintosh?
            macintosh: (function() {
                // Return
                    /* Logic
                            If
                                the "appVersion" has "Mac" in it.
                    */
                    if (navigator.appVersion.indexOf("Mac") >= 0)
                        // [true]
                        return true

                    else
                        // [false]
                        return false
            })(),

            // Is Linux?
            linux: (function() {
                // Return
                    /* Logic
                            If
                                the "appVersion" has "Linux" in it.
                    */
                    if (navigator.appVersion.indexOf("Linux") >= 0)
                        // [true]
                        return true

                    else
                        // [false]
                        return false
            })(),

            // Is Unix?
            unix: (function() {
                // Return
                    /* Logic
                            If
                                the "appVersion" has "X11" in it.
                    */
                    if (navigator.appVersion.indexOf("X11") >= 0)
                        // [true]
                        return true

                    else
                        // [false]
                        return false
            })(),

            // Is Windows?
            windows: (function() {
                // Return
                    /* Logic
                            If
                                the "appVersion" has "Win" in it.
                    */
                    if (navigator.appVersion.indexOf("Win") >= 0)
                        // [true]
                        return true

                    else
                        // [false]
                        return false
            })()
        }

    /* Prototype */
        // Function
            // $ [Get Element]
                // Document
                document.constructor.prototype.$ = function(selector, index) {
                    /* Logic
                            If
                                "selector" is a "string".
                    */
                    if (typeof(selector) == "string")
                        /* Logic
                                If
                                    "index" is not 0,

                                else if
                                    the returned node list does not have a second member
                        */
                        if (index != 0) {
                            /* Logic
                                    If
                                        "index" is "array" or an array,

                                    else if
                                        "index" is "length"

                                    else if
                                        "index" is a number,

                                    else if
                                        "index" is not defined.
                            */
                            if (index == "array")
                                // Return
                                return document.querySelectorAll(selector)

                            else if (index == "length")
                                // Return
                                return document.querySelectorAll(selector).length

                            else if (typeof(index) == "number")
                                // Return
                                return document.querySelectorAll(selector)[index]

                            else if (!document.querySelectorAll(selector)[1])
                                // Return
                                return document.querySelector(selector)

                            else
                                // Return
                                return document.querySelectorAll(selector)
                        }

                        else
                            // Return
                            return document.querySelector(selector)
                }

            // Get Elements By Attribute Name
                // Document
                document.constructor.prototype.getElementsByAttributeName = function(name) {
                    // Try
                    try {
                        // Return
                        return this.querySelectorAll("[" + name.toString() + "]")
                    }

                    catch(error) {
                        // Error
                        console.error("[LapysJS v" + LapysJS.version + "]: '" + name + "' is not a valid selector.")
                    }
                }

            // Get Query String By Name
            constructor.prototype.getQueryParameterByName = function(name, url) {
                // Initialization
                    // Results
                    var  results = new RegExp("[?&]" + name.replace(/[\[\]]/g, "\\$&") + "(=([^&#]*)|&|#|$)").exec(
                        url || window.location.href
                    )

                /* Logic
                        If
                            "results" are "false".
                */
                if (!results)
                    // Return
                    return null

                /* Logic
                        If
                            "results" do not have a second character.
                */
                if (!results[2])
                    return ""

                // Return
                return decodeURIComponent(results[2].replace(/\+/g, " "))
            }

            // Set Event
            constructor.prototype.setEvent = function(type, listener, useCapture, wantsUntrusted) {
                // Update
                    // Type
                    type = type.replace(/ /g, "").split(/,/g)

                /* Loop
                        Index all '"type"'s.
                */
                for (var i = 0; i < type.length; i++)
                    // [if]
                    (window.addEventListener) ?
                        // [true]
                        this.addEventListener(type[i], listener, useCapture, wantsUntrusted) :

                        // [false]
                        this.attachEvent(("on" + type[i]), listener, useCapture, wantsUntrusted)
            }
                // Document
                document.constructor.prototype.setEvent = function(type, listener, useCapture, wantsUntrusted) {
                    // Update
                        // Type
                        type = type.replace(/ /g, "").split(/,/g)

                    /* Loop
                            Index all '"type"'s.
                    */
                    for (var i = 0; i < type.length; i++)
                        // [if]
                        (window.addEventListener) ?
                            // [true]
                            this.addEventListener(type[i], listener, useCapture, wantsUntrusted) :

                            // [false]
                            this.attachEvent(("on" + type[i]), listener, useCapture, wantsUntrusted)
                }

    /* Main
            --- NOTE ---
                This serves as the main module
                housing all LapysJS' Javascript functions.
    */
    onDOMReady(function() {
        /* Modification */
            // Window
                // Name
                    /* Logic
                            If
                                a <title> exists.
                    */
                    if (document.querySelector("title"))
                        /* Logic
                                If
                                    "name" is specified.
                        */
                        if (name)
                            name = document.title

            // Document
                // Main
                document.main = document.querySelector("main")

        /* LapysJS Elements */
            // Initialization
                // <lorem-ipsum>
                    // Definition
                    window.customElements.define("lorem-ipsum", class LoremIpsum extends HTMLElement {})

                    /* Loop
                            Index all <lorem-ipsum> elements.
                    */
                    for (var i = 0; i < document.getElementsByTagName("lorem-ipsum").length; i++)
                        // Modification
                            // Inner HTML
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
                                    document.getElementsByTagName("lorem-ipsum")[i].innerHTML = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."

                                    document.getElementsByTagName("lorem-ipsum")[i].removeAttribute("2")
                                    document.getElementsByTagName("lorem-ipsum")[i].removeAttribute("3")
                                    document.getElementsByTagName("lorem-ipsum")[i].removeAttribute("4")
                                    document.getElementsByTagName("lorem-ipsum")[i].removeAttribute("5")
                                }

                                else if (document.getElementsByTagName("lorem-ipsum")[i].hasAttribute("2")) {
                                    document.getElementsByTagName("lorem-ipsum")[i].innerHTML = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."

                                    document.getElementsByTagName("lorem-ipsum")[i].removeAttribute("1")
                                    document.getElementsByTagName("lorem-ipsum")[i].removeAttribute("3")
                                    document.getElementsByTagName("lorem-ipsum")[i].removeAttribute("4")
                                    document.getElementsByTagName("lorem-ipsum")[i].removeAttribute("5")
                                }

                                else if (document.getElementsByTagName("lorem-ipsum")[i].hasAttribute("3")) {
                                    document.getElementsByTagName("lorem-ipsum")[i].innerHTML = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."

                                    document.getElementsByTagName("lorem-ipsum")[i].removeAttribute("1")
                                    document.getElementsByTagName("lorem-ipsum")[i].removeAttribute("2")
                                    document.getElementsByTagName("lorem-ipsum")[i].removeAttribute("4")
                                    document.getElementsByTagName("lorem-ipsum")[i].removeAttribute("5")
                                }

                                else if (document.getElementsByTagName("lorem-ipsum")[i].hasAttribute("4")) {
                                    document.getElementsByTagName("lorem-ipsum")[i].innerHTML = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim."

                                    document.getElementsByTagName("lorem-ipsum")[i].removeAttribute("1")
                                    document.getElementsByTagName("lorem-ipsum")[i].removeAttribute("2")
                                    document.getElementsByTagName("lorem-ipsum")[i].removeAttribute("3")
                                    document.getElementsByTagName("lorem-ipsum")[i].removeAttribute("5")
                                }

                                else if (document.getElementsByTagName("lorem-ipsum")[i].hasAttribute("5")) {
                                    document.getElementsByTagName("lorem-ipsum")[i].innerHTML = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc."

                                    document.getElementsByTagName("lorem-ipsum")[i].removeAttribute("1")
                                    document.getElementsByTagName("lorem-ipsum")[i].removeAttribute("2")
                                    document.getElementsByTagName("lorem-ipsum")[i].removeAttribute("3")
                                    document.getElementsByTagName("lorem-ipsum")[i].removeAttribute("4")
                                }

                // <fav-icon>
                    // Definition
                    window.customElements.define("fav-icon", class FavIcon extends HTMLElement {})

                    /* Logic
                            If
                                the first <fav-icon> exists.
                    */
                    if (document.querySelector("fav-icon"))
                        /* Logic
                                If
                                    the element has the "src" attribute.
                        */
                        if (
                            document.querySelector("fav-icon").hasAttribute("src") ||
                            document.querySelector("fav-icon").src
                        )
                            document.querySelector("fav-icon").outerHTML = (
                                '\r<!-- Document Favicon -->' +
                                '\r<link href="' + (document.querySelector("fav-icon").getAttribute("src") || document.querySelector("fav-icon").src) + '" rel="icon" type="image/png">' +
                                '\r<link href="' + (document.querySelector("fav-icon").getAttribute("src") || document.querySelector("fav-icon").src) + '" rel="shortcut icon">'
                            )

                    /* Loop
                            Index all <fav-icon> elements.
                    */
                    for (var i = 0; i < document.getElementsByTagName("fav-icon").length; i++) {
                        // Deletion
                        document.getElementsByTagName("fav-icon")[i].remove()

                        // Update
                            // Loop Counter
                            i--
                    }

            // Function
                // Element Add On
                function elementAddOn() {
                    /* Loop
                            Index all elements.
                    */
                    for (var i = 0; i < document.querySelectorAll("*").length; i++) {
                        // Modification
                            // Initial Style
                            document.querySelectorAll("*")[i].initialStyle = {
                                // Animation
                                    // Delay
                                    animationDelay: parseFloat((document.querySelectorAll("*")[i].style.animationDelay || window.getComputedStyle(document.querySelectorAll("*")[i]).getPropertyValue("animation-delay")).replace(/ms|s/g, "")),

                                    // Duration
                                    animationDuration: parseFloat((document.querySelectorAll("*")[i].style.animationDuration || window.getComputedStyle(document.querySelectorAll("*")[i]).getPropertyValue("animation-duration")).replace(/ms|s/g, "")),

                                // Height
                                height: document.querySelectorAll("*")[i].clientHeight,

                                // Transition
                                    // Delay
                                    transitionDelay: parseFloat((document.querySelectorAll("*")[i].style.transitionDelay || window.getComputedStyle(document.querySelectorAll("*")[i]).getPropertyValue("transition-delay")).replace(/ms|s/g, "")),

                                    // Duration
                                    transitionDuration: parseFloat((document.querySelectorAll("*")[i].style.transitionDuration || window.getComputedStyle(document.querySelectorAll("*")[i]).getPropertyValue("transition-duration")).replace(/ms|s/g, "")),

                                // Width
                                width: document.querySelectorAll("*")[i].clientWidth
                            }
                    }
                }
                elementAddOn()
                onDOMNodeAdded(function() { elementAddOn() })

                // Modify Elements
                function modifyElements() {
                    /* Loop
                            Index all elements.
                    */
                    for (var i = 0; i < document.querySelectorAll("*").length; i++) {
                        /* Logic
                                If the elements have string-based tag names.
                        */
                        if (typeof(document.querySelectorAll("*")[i].tagName) == "string") {
                            // Modification
                                // $ [Get Element]
                                document.querySelectorAll("*")[i].constructor.prototype.$ = function(selector, index) {
                                    /* Logic
                                            If
                                                "selector" is a "string".
                                    */
                                    if (typeof(selector) == "string")
                                        /* Logic
                                                If
                                                    "index" is not 0,

                                                else if
                                                    the returned node list does not have a second member
                                        */
                                        if (index != 0) {
                                            /* Logic
                                                    If
                                                        "index" is "array" or an array,

                                                    else if
                                                        "index" is "length"

                                                    else if
                                                        "index" is a number,

                                                    else if
                                                        "index" is not defined.
                                            */
                                            if (index == "array")
                                                // Return
                                                return document.querySelectorAll(selector)

                                            else if (index == "length")
                                                // Return
                                                return document.querySelectorAll(selector).length

                                            else if (typeof(index) == "number")
                                                // Return
                                                return document.querySelectorAll(selector)[index]

                                            else if (!document.querySelectorAll(selector)[1])
                                                // Return
                                                return document.querySelector(selector)

                                            else
                                                // Return
                                                return document.querySelectorAll(selector)
                                        }

                                        else
                                            // Return
                                            return document.querySelector(selector)
                                }

                                // Add Class
                                document.querySelectorAll("*")[i].constructor.prototype.addClass = function(name) {
                                    /* Logic
                                            If
                                                the element does not have a class,

                                            else if
                                                the element has a single class only.
                                    */
                                    if (!this.classList[0])
                                        // Modification
                                            // Class
                                            this.className = name

                                    else if (!this.classList[1])
                                        // Modification
                                            // Class
                                            this.className += (" " + name)

                                    else
                                        // Try
                                        try {
                                            /* Logic
                                                    If
                                                        the class is the "name" specified.
                                            */
                                            if (!this.classList.contains(name))
                                                // Modification
                                                    // Class
                                                    this.classList.add(name)
                                        }

                                        catch (error) {
                                            // Throw
                                            console.error("[LapysJS v" + LapysJS.version + "]: " + error.toString().slice(error.toString().indexOf(":")))
                                        }

                                    // Modification
                                        // Class
                                        this.className = this.className.replace(/  /g, "")
                                }

                                // Add Event
                                document.querySelectorAll("*")[i].constructor.prototype.addEvent = function(type, listener) {
                                    // Modification
                                        // Events
                                        this.events = (document.querySelectorAll("*")[i].events || []).concat([type])

                                        // New Event
                                        this.newEvents[type] = document.createEvent("Event")
                                            // Initialize Event
                                            this.newEvents[type].initEvent(type, true, true)

                                    // Event
                                        // [New Event]
                                        this.addEventListener(type, listener, false)
                                }

                                // Append After
                                document.querySelectorAll("*")[i].constructor.prototype.appendAfter = function(sibling) {
                                    /* Logic
                                            If
                                                "sibling" is defined.
                                    */
                                    if (sibling)
                                        /* Logic
                                                If
                                                    "sibling" is an element.
                                        */
                                        if (typeof(sibling.tagName) == "string") {
                                            (
                                                this.parentElement ||
                                                this.parentNode
                                            ).insertBefore(this, sibling)

                                            (
                                                this.parentElement ||
                                                this.parentNode
                                            ).insertBefore(sibling, this)
                                        }

                                        else
                                            // Throw
                                            console.error("[LapysJS v" + LapysJS.version + "]: '" + sibling + "' is not a valid selector.")

                                    else
                                        // Throw
                                        console.error("[LapysJS v" + LapysJS.version + "]: The element must not be \'undefined\'.")
                                }

                                // Append Before
                                document.querySelectorAll("*")[i].constructor.prototype.appendBefore = function(sibling) {
                                    /* Logic
                                            If
                                                "sibling" is defined.
                                    */
                                    if (sibling)
                                        /* Logic
                                                If
                                                    "sibling" is an element.
                                        */
                                        if (typeof(sibling.tagName) == "string")
                                            (
                                                this.parentElement ||
                                                this.parentNode
                                            ).insertBefore(this, sibling)

                                        else
                                            // Throw
                                            console.error("[LapysJS v" + LapysJS.version + "]: '" + sibling + "' is not a valid selector.")

                                    else
                                        // Throw
                                        throw new SyntaxError("[LapysJS v" + LapysJS.version + "]: The element must not be \'undefined\'.")
                                }

                                // Child Identifier
                                document.querySelectorAll("*")[i].childID = {}
                                    // Length
                                    document.querySelectorAll("*")[i].childID.length = 0

                                    /* Loop
                                            Index all the element's children.
                                    */
                                    for (var j = 0; j < document.querySelectorAll("*")[i].querySelectorAll("*").length; j++) {
                                        /* Logic
                                                If
                                                    the child 'has' the "data-id" attribute

                                                else if
                                                    the child 'has' the "id" attribute.
                                        */
                                        if ((document.querySelectorAll("*")[i].querySelectorAll("*")[j].getAttribute("data-id") || "").replace(/ /g, "") != "") {
                                            // Update
                                                // Child Identifier
                                                document.querySelectorAll("*")[i].childID[
                                                    document.querySelectorAll("*")[i].querySelectorAll("*")[j].getAttribute("data-id")
                                                ] = document.querySelectorAll("*")[i].querySelectorAll("*")[j]
                                        }

                                        else if ((document.querySelectorAll("*")[i].querySelectorAll("*")[j].getAttribute("id") || "").replace(/ /g, "") != "") {
                                            // Update
                                                // Child Identifier
                                                document.querySelectorAll("*")[i].childID[
                                                    document.querySelectorAll("*")[i].querySelectorAll("*")[j].getAttribute("id")
                                                ] = document.querySelectorAll("*")[i].querySelectorAll("*")[j]
                                        }

                                        // Modification
                                            // Child Identifier
                                                // Length
                                                    document.querySelectorAll("*")[i].childID.length++
                                    }

                                // Class Sets
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
                                            }

                                        /* Loop
                                                Index all the element's class nodes.
                                        */
                                        for (var j = 0; j < document.querySelectorAll("*")[i].classList.length; j++) {
                                            // Flex-Basis Preset
                                            if (
                                                document.querySelectorAll("*")[i].classList[j].indexOf("flx-b_") == 0 ||
                                                document.querySelectorAll("*")[i].classList[j].indexOf("flex-basis_") == 0
                                            )
                                                classStyle.size = classStyle.size.concat(["flexBasis"])

                                            // Height Preset
                                            if (
                                                document.querySelectorAll("*")[i].classList[j].indexOf("h_") == 0 ||
                                                document.querySelectorAll("*")[i].classList[j].indexOf("height_") == 0
                                            )
                                                classStyle.size = classStyle.size.concat(["height"])

                                            // Max-Height Preset
                                            if (
                                                document.querySelectorAll("*")[i].classList[j].indexOf("max-h_") == 0 ||
                                                document.querySelectorAll("*")[i].classList[j].indexOf("max-height_") == 0
                                            )
                                                classStyle.size = classStyle.size.concat(["maxHeight"])

                                            // Max-Width Preset
                                            if (
                                                document.querySelectorAll("*")[i].classList[j].indexOf("max-w_") == 0 ||
                                                document.querySelectorAll("*")[i].classList[j].indexOf("max-width_") == 0
                                            )
                                                classStyle.size = classStyle.size.concat(["minWidth"])

                                            // Min-Height Preset
                                            if (
                                                document.querySelectorAll("*")[i].classList[j].indexOf("min-h_") == 0 ||
                                                document.querySelectorAll("*")[i].classList[j].indexOf("min-height_") == 0
                                            )
                                                classStyle.size = classStyle.size.concat(["minHeight"])

                                            // Min-Width Preset
                                            if (
                                                document.querySelectorAll("*")[i].classList[j].indexOf("min-w_") == 0 ||
                                                document.querySelectorAll("*")[i].classList[j].indexOf("min-width") == 0
                                            )
                                                classStyle.size = classStyle.size.concat(["minWidth"])

                                            // Width Preset
                                            if (
                                                document.querySelectorAll("*")[i].classList[j].indexOf("w_") == 0 ||
                                                document.querySelectorAll("*")[i].classList[j].indexOf("width_") == 0
                                            )
                                                classStyle.size = classStyle.size.concat(["width"])
                                        }

                                        // Style
                                            // Size
                                                /* Loop
                                                        Index all members of Class Style Size.
                                                */
                                                for (var j = 0; j < classStyle.size; j++) {
                                                    // height
                                                    if (document.querySelectorAll("*")[i].classList[j].indexOf("height") >= 0)
                                                        document.querySelectorAll("*")[i].style[classStyle.size] = (document.querySelectorAll("*")[i].initialStyle.height + "px")

                                                    // device-height
                                                    if (document.querySelectorAll("*")[i].classList[j].indexOf("device-height") >= 0)
                                                        document.querySelectorAll("*")[i].style[classStyle.size] = (window.innerHeight + "px")

                                                    // width
                                                    if (document.querySelectorAll("*")[i].classList[j].indexOf("width") >= 0)
                                                        document.querySelectorAll("*")[i].style[classStyle.size] = (document.querySelectorAll("*")[i].initialStyle.width + "px")

                                                    // device-width
                                                    if (document.querySelectorAll("*")[i].classList[j].indexOf("device-width") >= 0)
                                                        document.querySelectorAll("*")[i].style[classStyle.size] = (window.innerWidth + "px")

                                                    // match-parent
                                                    if (document.querySelectorAll("*")[i].classList[j].indexOf("match-parent") >= 0)
                                                        document.querySelectorAll("*")[i].style[classStyle.size] = (
                                                            (
                                                                document.querySelectorAll("*")[i].parentNode ||
                                                                document.querySelectorAll("*")[i].parentElement
                                                            ).style[classStyle.size] ||
                                                            window.getComputedStyle(document.querySelectorAll("*")[i].parentNode).getPropertyValue(classStyle.size)
                                                        )
                                                }
                                    }

                                // CSS Selector
                                document.querySelectorAll("*")[i].constructor.prototype.CSSSelector = function() {
                                    // Initialization
                                        // Target Element
                                        var targetElement = this

                                        // CSS Selector
                                        var CSSSelector = (
                                            targetElement.tagName.toLowerCase() +

                                            // Class
                                            (function() {
                                                /* Logic
                                                        If the element has a class.
                                                */
                                                if (targetElement.classList[0])
                                                    /* Loop
                                                            Index the element's class nodes.
                                                    */
                                                    for (var i = 0; i < targetElement.classList.length; i++)
                                                        // Return
                                                        return ("." + targetElement.classList[i])

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
                                                if (targetElement.id != "")
                                                    // Return
                                                    return ("#" + targetElement.id)

                                                else
                                                    // Return
                                                    return ""
                                            })() +

                                            // Attributes
                                            (function() {
                                                // Initialization
                                                    // Target Element
                                                        // Attributes
                                                        var targetElementAttributes = ""

                                                /* Loop
                                                        Index the element's attributes.
                                                */
                                                for (var i = 0; i < targetElement.attributes.length; i++)
                                                    /* Logic
                                                            If
                                                                the attribute name is not "class" and "id".
                                                    */
                                                    if (
                                                        targetElement.attributes[i].name != "class" &&
                                                        targetElement.attributes[i].name != "id"
                                                    )
                                                        // Update
                                                            // Attributes
                                                            targetElementAttributes = ('[' + targetElement.attributes[i].name + '="' + targetElement.attributes[i].value + '"]')

                                                // Return
                                                    // Attributes
                                                    return targetElementAttributes
                                            })()
                                        )

                                    // Return
                                        // CSS Selector
                                        return CSSSelector.replace(/=\"\"/g, "")
                                }

                                // Data Event Type
                                    /* Logic
                                            If
                                                the element has the "data-event-type" attribute.
                                    */
                                    if (document.querySelectorAll("*")[i].hasAttribute("data-event-type")) {
                                        // Modification
                                            // Events
                                            document.querySelectorAll("*")[i].events = (document.querySelectorAll("*")[i].events || []).concat(document.querySelectorAll("*")[i].getAttribute("data-event-type").split(/,|, /g))

                                            // Events By Type
                                            document.querySelectorAll("*")[i].eventsByType = document.querySelectorAll("*")[i].getAttribute("data-event-type").split(/,/g)
                                    }

                                // Data Event Function
                                    /* Logic
                                            If
                                                the element has the
                                                "data-event-function" attribute
                                                    and
                                                "data-event-type" attribute.
                                    */
                                    if (
                                        document.querySelectorAll("*")[i].hasAttribute("data-event-function") &&
                                        document.querySelectorAll("*")[i].hasAttribute("data-event-type")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.querySelectorAll("*")[i]

                                        // This function runs after a unit of time.
                                        setTimeout(function() {
                                            /* Loop
                                                    Index all the element's "eventsByType" attribute.
                                            */
                                            for (var j = 0; j < targetElement.eventsByType.length; j++)
                                                // Event
                                                    // [Events By Type]
                                                    targetElement.setEvent(
                                                        targetElement.eventsByType[j].replace(/ /g, ""),

                                                        function() {
                                                            // Try
                                                            try {
                                                                // Execution
                                                                eval(targetElement.getAttribute("data-event-function"))
                                                            }

                                                            catch(error) {
                                                                // Throw
                                                                console.error("[LapysJS v" + LapysJS.version + "]: " + error.toString().replace(/:|: /, " | "))
                                                            }
                                                        }
                                                    )
                                        }, 0)
                                    }

                                // Delete
                                document.querySelectorAll("*")[i].constructor.prototype.delete = function() {
                                    // Deletion
                                    this.remove()
                                }

                                // Delete Class
                                document.querySelectorAll("*")[i].constructor.prototype.delClass = function(name) {
                                    /* Logic
                                            If
                                                the element has a single class only.
                                    */
                                    if (!this.className[1])
                                        /* Logic
                                                If
                                                    the element's class is the specified "name".
                                        */
                                        if (this.classList[0] == name)
                                            // Modification
                                                // Class
                                                this.removeAttribute("class")

                                    else
                                        // Try
                                        try {
                                            /* Logic
                                                    If the class node is the specified "name".
                                            */
                                            if (this.classList.contains(name))
                                                // Modification
                                                    // Class
                                                    this.classList.remove(name)
                                        }

                                        catch (error) {
                                            // Throw
                                            console.error("[LapysJS v" + LapysJS.version + "]: " + error.toString().replace(/:|: /, " | "))
                                        }
                                }

                                // Delete Event
                                document.querySelectorAll("*")[i].constructor.prototype.delEvent = function(listener) {
                                    // Event
                                        // [Listener]
                                        this.removeEventListener(listener)
                                }

                                // Delete Inline Style
                                document.querySelectorAll("*")[i].constructor.prototype.delStyle = function(style) {
                                    /* Logic
                                            If
                                                the element has the "style" attribute.
                                    */
                                    if (this.hasAttribute("style")) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = this

                                        // Modification
                                            // Style
                                            targetElement.style = targetElement.getAttribute("style").replace(
                                                /* --- NOTE ---
                                                        Modify the element's "style" attribute.
                                                */
                                                targetElement.getAttribute("style").slice(
                                                    /* --- NOTE ---
                                                            The first instance of the style.
                                                    */
                                                        // [property]
                                                        targetElement.getAttribute("style").indexOf(style),
                                                    
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
                                                            if (targetElement.getAttribute("style").indexOf(style + ": " + (targetElement.style[style] || window.getComputedStyle(targetElement).getPropertyValue(style))) >= 0)
                                                                // Return
                                                                return (targetElement.getAttribute("style").indexOf(style) + (style + ": " + (targetElement.style[style] || window.getComputedStyle(targetElement).getPropertyValue(style))).toString().length)
                                                            
                                                            else if (targetElement.getAttribute("style").indexOf(style + ":" + (targetElement.style[style] || window.getComputedStyle(targetElement).getPropertyValue(style))) >= 0)
                                                                // Return
                                                                return (targetElement.getAttribute("style").indexOf(style) + (style + ":" + (targetElement.style[style] || window.getComputedStyle(targetElement).getPropertyValue(style))).toString().length)

                                                            else if (targetElement.getAttribute("style").indexOf(style + " :" + (targetElement.style[style] || window.getComputedStyle(targetElement).getPropertyValue(style))) >= 0)
                                                                // Return
                                                                return (targetElement.getAttribute("style").indexOf(style) + (style + " :" + (targetElement.style[style] || window.getComputedStyle(element).getPropertyValue(style))).toString().length)
                                                            
                                                            else if (targetElement.getAttribute("style").indexOf(style + " : " + (targetElement.style[style] || window.getComputedStyle(element).getPropertyValue(style))) >= 0)
                                                                // Return
                                                                return (targetElement.getAttribute("style").indexOf(style) + (style + " : " + (targetElement.style[style] || window.getComputedStyle(element).getPropertyValue(style))).toString().length)

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
                                                            if (targetElement.getAttribute("style").indexOf((targetElement.style[style] || window.getComputedStyle(targetElement).getPropertyValue(style)) + "; ") >= 0)
                                                                // Return
                                                                return (targetElement.getAttribute("style").indexOf(style) + "; ".length)

                                                            else if (targetElement.getAttribute("style").indexOf((targetElement.style[style] || window.getComputedStyle(targetElement).getPropertyValue(style)) + " ;") >= 0)
                                                                // Return
                                                                return (targetElement.getAttribute("style").indexOf(style) + " ;".length)

                                                            else if (targetElement.getAttribute("style").indexOf((targetElement.style[style] || window.getComputedStyle(targetElement).getPropertyValue(style)) + ";") >= 0)
                                                                // Return
                                                                return (targetElement.getAttribute("style").indexOf(style) + ";".length)

                                                            else if (targetElement.getAttribute("style").indexOf((targetElement.style[style] || window.getComputedStyle(targetElement).getPropertyValue(style)) + " ; ") >= 0)
                                                                // Return
                                                                return (targetElement.getAttribute("style").indexOf(style) + " ; ".length)

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
                                    }

                                    /* Logic
                                            If
                                                the element's "style" is 'empty'.
                                    */
                                    if (targetElement.getAttribute("style") == "")
                                        // Modification
                                            // Style
                                            targetElement.removeAttribute("style")
                                }

                                // Events
                                document.querySelectorAll("*")[i].events = (document.querySelectorAll("*")[i].events || [])

                                    /* Loop
                                            Index all the element's attributes.
                                    */
                                    for (j = 0; j < document.querySelectorAll("*")[i].attributes.length; j++)
                                        /* Logic
                                        */
                                        if (document.querySelectorAll("*")[i].attributes[j].name.indexOf("on") == 0)
                                            // Modification
                                                // Events
                                                document.querySelectorAll("*")[i].events = (document.querySelectorAll("*")[i].events || []).concat([document.querySelectorAll("*")[i].attributes[j].name.slice(2)])

                                    /* Loop
                                            Index all the element's events.
                                    */
                                    for (j = 0; j < document.querySelectorAll("*")[i].events.length; j++)
                                        // Modification
                                            // Events
                                            document.querySelectorAll("*")[i].events[j] = document.querySelectorAll("*")[i].events[j].replace(/ /g, "")

                                    // Update
                                    document.querySelectorAll("*")[i].events = document.querySelectorAll("*")[i].events.filter(function(element, index, self) {
                                        // Return
                                        return index == self.indexOf(element)
                                    })

                                // Get Attribute
                                document.querySelectorAll("*")[i].constructor.prototype.getAttr = function(name) {
                                    // Return
                                    return this.getAttribute(name)
                                }

                                // Get CSS
                                document.querySelectorAll("*")[i].constructor.prototype.getCSS = function(property) {
                                    /* Logic
                                            If
                                                the inline CSS property of the element is defined.
                                    */
                                    if (this.style[property] != "")
                                        // Return
                                        return this.style[property]

                                    else
                                        // Return
                                        return window.getComputedStyle(this).getPropertyValue(property)
                                }

                                // Get Elements By Attribute Name
                                document.querySelectorAll("*")[i].constructor.prototype.getElementsByAttributeName = function(name) {
                                    // Try
                                    try {
                                        // Return
                                        return this.querySelectorAll("[" + name.toString() + "]")
                                    }

                                    catch(error) {
                                        // Error
                                        console.error("[LapysJS v" + LapysJS.version + "]: '" + name + "' is not a valid selector.")
                                    }
                                }

                                // Hide
                                document.querySelectorAll("*")[i].constructor.prototype.hide = function() {
                                    this.hidden = true
                                }

                                // Node Index
                                document.querySelectorAll("*")[i].nodeIndex = i

                                // Parent
                                document.querySelectorAll("*")[i].parent = (
                                    document.querySelectorAll("*")[i].parentElement ||
                                    document.querySelectorAll("*")[i].parentNode
                                )

                                // Parents
                                document.querySelectorAll("*")[i].parentPath = (
                                    (function() {
                                        var targetElement = document.querySelectorAll("*")[i]
                                        var parents = []

                                        while (targetElement) {
                                            parents.unshift(targetElement)

                                            targetElement = (targetElement.parentNode || targetElement.parentElement)
                                        }

                                        parents.unshift(window)
                                        parents.reverse()

                                        return parents
                                    })()
                                )

                                // Run Event
                                document.querySelectorAll("*")[i].constructor.prototype.runEvent = function(type) {
                                    // Execution
                                        // [New Event]
                                        this.dispatchEvent(this.newEvents[type])
                                }

                                // Set Attribute
                                document.querySelectorAll("*")[i].constructor.prototype.setAttr = function(name, value) {
                                    this.setAttribute(name, (value || ""))
                                }

                                // Set Event
                                document.querySelectorAll("*")[i].constructor.prototype.setEvent = function(type, listener, useCapture, wantsUntrusted) {
                                    // Modification
                                        // Events
                                        this.events = this.events || [].concat(["type"]);

                                    // Update
                                        // Type
                                        type = type.replace(/ /g, "").split(/,/g)

                                    /* Loop
                                            Index all '"type"'s.
                                    */
                                    for (var i = 0; i < type.length; i++)
                                        // [if]
                                        (window.addEventListener) ?
                                            // [true]
                                            this.addEventListener(type[i], listener, useCapture, wantsUntrusted) :

                                            // [false]
                                            this.attachEvent(("on" + type[i]), listener, useCapture, wantsUntrusted)
                                }

                                // Show
                                document.querySelectorAll("*")[i].constructor.prototype.show = function() {
                                    this.hidden = false
                                }

                            /* Logic
                                    If the element is not a child of the <head> or the <head>.
                            */
                            if (
                                document.querySelectorAll("*")[i].tagName != "HEAD" &&
                                document.querySelectorAll("*")[i].parentNode != document.head
                            ) {
                                // Function
                                    // Close
                                    document.querySelectorAll("*")[i].constructor.prototype.close = function() {
                                        this.removeAttribute("data-open")
                                        this.setAttribute("data-close", "")
                                    }

                                    // Focused
                                    document.querySelectorAll("*")[i].focused = false
                                        // Event
                                            // Mouse Up
                                            document.querySelectorAll("*")[i].setEvent("mouseup", function() {
                                                /* Loop
                                                        Index all elements.
                                                */
                                                for (var i = 0; i < document.querySelectorAll("*").length; i++) {
                                                    // Modification
                                                        // Focused
                                                        document.querySelectorAll("*")[i].focused = false
                                                        document.querySelectorAll("*")[i].removeAttribute("data-focus")
                                                }

                                                // Modification
                                                    // Focused
                                                    event.path[0].focused = true
                                                    event.path[0].setAttribute("data-focus", "")
                                            })

                                    // Open
                                    document.querySelectorAll("*")[i].constructor.prototype.open = function() {
                                        this.removeAttribute("data-close")
                                        this.setAttribute("data-open", "")
                                    }
                            }

                            /* Logic
                                    If the element is a <br>.
                            */
                            if (document.querySelectorAll("*")[i].tagName == "BR") {
                                if (document.querySelectorAll("*")[i].hasAttribute("2"))
                                    document.querySelectorAll("*")[i].outerHTML = "<br> <br>"

                                else if (document.querySelectorAll("*")[i].hasAttribute("3"))
                                    document.querySelectorAll("*")[i].outerHTML = "<br> <br> <br>"
                            }

                            /* Logic
                                    If the element is a <form>.
                            */
                            else if (document.querySelectorAll("*")[i].tagName == "FORM") {
                                /* Loop
                                        Index all the element's children.
                                */
                                for (var j = 0; j < document.querySelectorAll("*")[i].querySelectorAll("*").length; j++)
                                    /* Logic
                                            If the element has a "name" attribute
                                                and
                                            its child does not have a "form" attribute
                                                and
                                            its children are <button>, <input>, <label>.
                                    */
                                    if (
                                        document.querySelectorAll("*")[i].hasAttribute("name") &&
                                        !document.querySelectorAll("*")[i].querySelectorAll("*")[j].hasAttribute("form") &&
                                        (
                                            document.querySelectorAll("*")[i].querySelectorAll("*")[j].tagName == "BUTTON" ||
                                            document.querySelectorAll("*")[i].querySelectorAll("*")[j].tagName == "INPUT" ||
                                            document.querySelectorAll("*")[i].querySelectorAll("*")[j].tagName == "LABEL"
                                        )
                                    )
                                        // Modification
                                            // Form
                                            document.querySelectorAll("*")[i].querySelectorAll("*")[j].setAttribute(
                                                "form",
                                                document.querySelectorAll("*")[i].getAttribute("name")
                                            )
                            }

                            /* Logic
                                    If the element is an <html>.
                            */
                            else if (document.querySelectorAll("*")[i].tagName == "HTML") {
                                /* Logic
                                        If the element does not have the "lang" attribute.
                                */
                                if (!document.querySelectorAll("*")[i].hasAttribute("lang"))
                                    document.querySelectorAll("*")[i].lang = window.navigator.languages.toString().replace(/,/g, ", ")
                            }

                            /* Logic
                                    If the element is an <input>.
                            */
                            else if (document.querySelectorAll("*")[i].tagName == "INPUT") {
                                /* Logic
                                        If
                                            the element has a value of "_lorem1",

                                        else if
                                            the element has a value of "_lorem2",

                                        else if
                                            the element has a value of "_lorem3",

                                        else if
                                            the element has a value of "_lorem4",

                                        else if
                                            the element has a value of "_lorem5".
                                */
                                if (document.querySelectorAll("*")[i].value == "_lorem1")
                                    document.querySelectorAll("*")[i].value = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."

                                else if (document.querySelectorAll("*")[i].value == "_lorem2")
                                    document.querySelectorAll("*")[i].value = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."

                                else if (document.querySelectorAll("*")[i].value == "_lorem3")
                                    document.querySelectorAll("*")[i].value = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."

                                else if (document.querySelectorAll("*")[i].value == "_lorem4")
                                    document.querySelectorAll("*")[i].value = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim."

                                else if (document.querySelectorAll("*")[i].value == "_lorem5")
                                    document.querySelectorAll("*")[i].value = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc."
                            }

                            /* Logic
                                    If the element is an <option>.
                            */
                            else if (document.querySelectorAll("*")[i].tagName == "OPTION") {
                                /* Logic
                                        If
                                            the element has a "label" attribute.
                                */
                                if (!document.querySelectorAll("*")[i].hasAttribute("label"))
                                    document.querySelectorAll("*")[i].setAttribute(
                                        "label",
                                        document.querySelectorAll("*")[i].innerText.replace(/ /g, "")
                                    )
                            }

                            /* Logic
                                    If the element is a <textarea>.
                            */
                            else if (document.querySelectorAll("*")[i].tagName == "TEXTAREA") {
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
                                    document.querySelectorAll("*")[i].value.indexOf("<lorem-ipsum 1") >= 0 &&
                                    document.querySelectorAll("*")[i].value.indexOf("</lorem-ipsum>") > document.querySelectorAll("*")[i].value.indexOf("<lorem-ipsum ")
                                )
                                    document.querySelectorAll("*")[i].value = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."

                                else if (
                                    document.querySelectorAll("*")[i].value.indexOf("<lorem-ipsum 2") >= 0 &&
                                    document.querySelectorAll("*")[i].value.indexOf("</lorem-ipsum>") > document.querySelectorAll("*")[i].value.indexOf("<lorem-ipsum ")
                                )
                                    document.querySelectorAll("*")[i].value = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."

                                else if (
                                    document.querySelectorAll("*")[i].value.indexOf("<lorem-ipsum 3") >= 0 &&
                                    document.querySelectorAll("*")[i].value.indexOf("</lorem-ipsum>") > document.querySelectorAll("*")[i].value.indexOf("<lorem-ipsum ")
                                )
                                    document.querySelectorAll("*")[i].value = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."

                                else if (
                                    document.querySelectorAll("*")[i].value.indexOf("<lorem-ipsum 4") >= 0 &&
                                    document.querySelectorAll("*")[i].value.indexOf("</lorem-ipsum>") > document.querySelectorAll("*")[i].value.indexOf("<lorem-ipsum ")
                                )
                                    document.querySelectorAll("*")[i].value = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim."

                                else if (
                                    document.querySelectorAll("*")[i].value.indexOf("<lorem-ipsum 5") >= 0 &&
                                    document.querySelectorAll("*")[i].value.indexOf("</lorem-ipsum>") > document.querySelectorAll("*")[i].value.indexOf("<lorem-ipsum ")
                                )
                                    document.querySelectorAll("*")[i].value = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc."
                            }
                        }
                    }
                }
                /* --- WARN ---
                        This function is required to run.
                */
                modifyElements()
                onDOMNodeAdded(function() { modifyElements() })

                // [Time]
                function time() {
                    /* Logic
                            If
                                a <time> element exists.
                    */
                    if (document.querySelector("time"))
                        try {
                            /* Loop
                                    Index all <time> elements.
                            */
                            for (var i = 0; i < document.getElementsByTagName("time").length; i++)
                                /* Logic
                                        [if:else if:else function].
                                */
                                    // Date
                                    if (
                                        document.getElementsByTagName("time")[i].classList.contains("dt") ||
                                        document.getElementsByTagName("time")[i].classList.contains("date")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs every 1 second.
                                        setInterval(function() {
                                            // Modification
                                                // Inner HTML
                                                targetElement.innerHTML = new Date().getDate()
                                        }, (1 * 1000))
                                    }

                                    // Octal UTC Date
                                    else if (
                                        document.getElementsByTagName("time")[i].classList.contains("dt_octal_utc") ||
                                        document.getElementsByTagName("time")[i].classList.contains("date_octal_utc") ||
                                        document.getElementsByTagName("time")[i].classList.contains("dt_utc_octal") ||
                                        document.getElementsByTagName("time")[i].classList.contains("date_utc_octal")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs every 1 second.
                                        setInterval(function() {
                                            /* Logic
                                                    If
                                                        the "data" does not have a second character.
                                            */
                                            if (!new Date().getDate().toString()[1])
                                                // Modification
                                                    // Inner HTML
                                                    targetElement.innerHTML = ("0" + new Date().getUTCDate())

                                            else
                                                // Modification
                                                    // Inner HTML
                                                    targetElement.innerHTML = new Date().getUTCDate()
                                        }, (1 * 1000))
                                    }

                                    // Octal Date
                                    else if (
                                        document.getElementsByTagName("time")[i].classList.contains("dt_octal") ||
                                        document.getElementsByTagName("time")[i].classList.contains("date_octal")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs every 1 second.
                                        setInterval(function() {
                                            /* Logic
                                                    If
                                                        the "data" does not have a second character.
                                            */
                                            if (!new Date().getDate().toString()[1])
                                                // Modification
                                                    // Inner HTML
                                                    targetElement.innerHTML = ("0" + new Date().getDate())

                                            else
                                                // Modification
                                                    // Inner HTML
                                                    targetElement.innerHTML = new Date().getDate()
                                        }, (1 * 1000))
                                    }

                                    // UTC Date
                                    else if (
                                        document.getElementsByTagName("time")[i].classList.contains("dt_utc") ||
                                        document.getElementsByTagName("time")[i].classList.contains("date_utc")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs every 1 second.
                                        setInterval(function() {
                                            // Modification
                                                // Inner HTML
                                                targetElement.innerHTML = new Date().getUTCDate()
                                        }, (1 * 1000))
                                    }

                                    // Day
                                    else if (
                                        document.getElementsByTagName("time")[i].classList.contains("dy") ||
                                        document.getElementsByTagName("time")[i].classList.contains("day")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs every 1 second.
                                        setInterval(function() {
                                            // Modification
                                                // Inner HTML
                                                targetElement.innerHTML = new Date().getDay()
                                        }, (1 * 1000))
                                    }

                                    // Octal UTC Day
                                    else if (
                                        document.getElementsByTagName("time")[i].classList.contains("dy_octal_utc") ||
                                        document.getElementsByTagName("time")[i].classList.contains("day_octal_utc") ||
                                        document.getElementsByTagName("time")[i].classList.contains("dy_utc_octal") ||
                                        document.getElementsByTagName("time")[i].classList.contains("day_utc_octal")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs every 1 second.
                                        setInterval(function() {
                                            /* Logic
                                                    If
                                                        the "data" does not have a second character.
                                            */
                                            if (!new Date().getUTCDay().toString()[1])
                                                // Modification
                                                    // Inner HTML
                                                    targetElement.innerHTML = ("0" + new Date().getUTCDay())

                                            else
                                                // Modification
                                                    // Inner HTML
                                                    targetElement.innerHTML = new Date().getUTCDay()
                                        }, (1 * 1000))
                                    }

                                    // Octal Day
                                    else if (
                                        document.getElementsByTagName("time")[i].classList.contains("dy_octal") ||
                                        document.getElementsByTagName("time")[i].classList.contains("day_octal")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs every 1 second.
                                        setInterval(function() {
                                            /* Logic
                                                    If
                                                        the "data" does not have a second character.
                                            */
                                            if (!new Date().getDay().toString()[1])
                                                // Modification
                                                    // Inner HTML
                                                    targetElement.innerHTML = ("0" + new Date().getDay())

                                            else
                                                // Modification
                                                    // Inner HTML
                                                    targetElement.innerHTML = new Date().getDay()
                                        }, (1 * 1000))
                                    }

                                    // UTC Day
                                    else if (
                                        document.getElementsByTagName("time")[i].classList.contains("dy_utc") ||
                                        document.getElementsByTagName("time")[i].classList.contains("day_utc")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs every 1 second.
                                        setInterval(function() {
                                            // Modification
                                                // Inner HTML
                                                targetElement.innerHTML = new Date().getUTCDay()
                                        }, (1 * 1000))
                                    }

                                    // Full Date
                                    else if (
                                        document.getElementsByTagName("time")[i].classList.contains("f-dt") ||
                                        document.getElementsByTagName("time")[i].classList.contains("full-date")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs every 1 second.
                                        setInterval(function() {
                                            // Modification
                                                // Inner HTML
                                                targetElement.innerHTML = Date()
                                        }, (1 * 1000))
                                    }

                                    // Full Year
                                    else if (
                                        document.getElementsByTagName("time")[i].classList.contains("f-yr") ||
                                        document.getElementsByTagName("time")[i].classList.contains("full-year")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs every 1 second.
                                        setInterval(function() {
                                            // Modification
                                                // Inner HTML
                                                targetElement.innerHTML = new Date().getFullYear()
                                        }, (1 * 1000))
                                    }

                                    // UTC Full Year
                                    else if (
                                        document.getElementsByTagName("time")[i].classList.contains("f-yr_utc") ||
                                        document.getElementsByTagName("time")[i].classList.contains("full-year_utc")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs every 1 second.
                                        setInterval(function() {
                                            // Modification
                                                // Inner HTML
                                                targetElement.innerHTML = new Date().getUTCFullYear()
                                        }, (1 * 1000))
                                    }

                                    // Hour
                                    else if (
                                        document.getElementsByTagName("time")[i].classList.contains("hr") ||
                                        document.getElementsByTagName("time")[i].classList.contains("hour")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs every 1 second.
                                        setInterval(function() {
                                            // Modification
                                                // Inner HTML
                                                targetElement.innerHTML = new Date().getHours()
                                        }, (1 * 1000))
                                    }

                                    // Octal UTC Hour
                                    else if (
                                        document.getElementsByTagName("time")[i].classList.contains("hr_octal_utc") ||
                                        document.getElementsByTagName("time")[i].classList.contains("hour_octal_utc") ||
                                        document.getElementsByTagName("time")[i].classList.contains("hr_utc_octal") ||
                                        document.getElementsByTagName("time")[i].classList.contains("hour_utc_octal")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs every 1 second.
                                        setInterval(function() {
                                            /* Logic
                                                    If
                                                        the "data" does not have a second character.
                                            */
                                            if (!new Date().getUTCHours().toString()[1])
                                                // Modification
                                                    // Inner HTML
                                                    targetElement.innerHTML = ("0" + new Date().getUTCHours())

                                            else
                                                // Modification
                                                    // Inner HTML
                                                    targetElement.innerHTML = new Date().getUTCHours()
                                        }, (1 * 1000))
                                    }

                                    // Octal Hour
                                    else if (
                                        document.getElementsByTagName("time")[i].classList.contains("hr_octal") ||
                                        document.getElementsByTagName("time")[i].classList.contains("hour_octal")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs every 1 second.
                                        setInterval(function() {
                                            /* Logic
                                                    If
                                                        the "data" does not have a second character.
                                            */
                                            if (!new Date().getHours().toString()[1])
                                                // Modification
                                                    // Inner HTML
                                                    targetElement.innerHTML = ("0" + new Date().getHours())

                                            else
                                                // Modification
                                                    // Inner HTML
                                                    targetElement.innerHTML = new Date().getHours()
                                        }, (1 * 1000))
                                    }

                                    // UTC Hour
                                    else if (
                                        document.getElementsByTagName("time")[i].classList.contains("hr_utc") ||
                                        document.getElementsByTagName("time")[i].classList.contains("hour_utc")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs every 1 second.
                                        setInterval(function() {
                                            // Modification
                                                // Inner HTML
                                                targetElement.innerHTML = new Date().getUTCHours()
                                        }, (1 * 1000))
                                    }

                                    // Milliseconds
                                    else if (
                                        document.getElementsByTagName("time")[i].classList.contains("mil") ||
                                        document.getElementsByTagName("time")[i].classList.contains("milliseconds")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs every 1 second.
                                        setInterval(function() {
                                            // Modification
                                                // Inner HTML
                                                targetElement.innerHTML = new Date().getMilliseconds()
                                        }, 100)
                                    }

                                    // UTC Milliseconds
                                    else if (
                                        document.getElementsByTagName("time")[i].classList.contains("mil_utc") ||
                                        document.getElementsByTagName("time")[i].classList.contains("milliseconds_utc")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs every 1 second.
                                        setInterval(function() {
                                            // Modification
                                                // Inner HTML
                                                targetElement.innerHTML = new Date().getUTCMilliseconds()
                                        }, 100)
                                    }

                                    // Minute
                                    else if (
                                        document.getElementsByTagName("time")[i].classList.contains("min") ||
                                        document.getElementsByTagName("time")[i].classList.contains("minute")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs every 1 second.
                                        setInterval(function() {
                                            // Modification
                                                // Inner HTML
                                                targetElement.innerHTML = new Date().getMinutes()
                                        }, (1 * 1000))
                                    }

                                    // Octal UTC Minute
                                    else if (
                                        document.getElementsByTagName("time")[i].classList.contains("min_octal_utc") ||
                                        document.getElementsByTagName("time")[i].classList.contains("minute_octal_utc") ||
                                        document.getElementsByTagName("time")[i].classList.contains("min_utc_octal") ||
                                        document.getElementsByTagName("time")[i].classList.contains("minute_utc_octal")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs every 1 second.
                                        setInterval(function() {
                                            /* Logic
                                                    If
                                                        the "data" does not have a second character.
                                            */
                                            if (!new Date().getUTCMinutes().toString()[1])
                                                // Modification
                                                    // Inner HTML
                                                    targetElement.innerHTML = ("0" + new Date().getUTCMinutes())

                                            else
                                                // Modification
                                                    // Inner HTML
                                                    targetElement.innerHTML = new Date().getUTCMinutes()
                                        }, (1 * 1000))
                                    }

                                    // Octal Minute
                                    else if (
                                        document.getElementsByTagName("time")[i].classList.contains("min_octal") ||
                                        document.getElementsByTagName("time")[i].classList.contains("minute_octal")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs every 1 second.
                                        setInterval(function() {
                                            /* Logic
                                                    If
                                                        the "data" does not have a second character.
                                            */
                                            if (!new Date().getMinutes().toString()[1])
                                                // Modification
                                                    // Inner HTML
                                                    targetElement.innerHTML = ("0" + new Date().getMinutes())

                                            else
                                                // Modification
                                                    // Inner HTML
                                                    targetElement.innerHTML = new Date().getMinutes()
                                        }, (1 * 1000))
                                    }

                                    // UTC Minute
                                    else if (
                                        document.getElementsByTagName("time")[i].classList.contains("min_utc") ||
                                        document.getElementsByTagName("time")[i].classList.contains("minute_utc")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs every 1 second.
                                        setInterval(function() {
                                            // Modification
                                                // Inner HTML
                                                targetElement.innerHTML = new Date().getUTCMinutes()
                                        }, (1 * 1000))
                                    }

                                    // Month
                                    else if (
                                        document.getElementsByTagName("time")[i].classList.contains("mth") ||
                                        document.getElementsByTagName("time")[i].classList.contains("month")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs every 1 second.
                                        setInterval(function() {
                                            // Modification
                                                // Inner HTML
                                                targetElement.innerHTML = new Date().getMonth()
                                        }, (1 * 1000))
                                    }

                                    // Octal UTC Month
                                    else if (
                                        document.getElementsByTagName("time")[i].classList.contains("mth_octal_utc") ||
                                        document.getElementsByTagName("time")[i].classList.contains("month_octal_utc") ||
                                        document.getElementsByTagName("time")[i].classList.contains("mth_utc_octal") ||
                                        document.getElementsByTagName("time")[i].classList.contains("month_utc_octal")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs  every 1 second.
                                        setInterval(function() {
                                            /* Logic
                                                    If
                                                        the "data" does not have a second character.
                                            */
                                            if (!new Date().getUTCMonth().toString()[1])
                                                // Modification
                                                    // Inner HTML
                                                    targetElement.innerHTML = ("0" + new Date().getUTCMonth())

                                            else
                                                // Modification
                                                    // Inner HTML
                                                    targetElement.innerHTML = new Date().getUTCMonth()
                                        }, (1 * 1000))
                                    }

                                    // Octal Month
                                    else if (
                                        document.getElementsByTagName("time")[i].classList.contains("mth_octal") ||
                                        document.getElementsByTagName("time")[i].classList.contains("month_octal")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs every 1 second.
                                        setInterval(function() {
                                            /* Logic
                                                    If
                                                        the "data" does not have a second character.
                                            */
                                            if (!new Date().getMonth().toString()[1])
                                                // Modification
                                                    // Inner HTML
                                                    targetElement.innerHTML = ("0" + new Date().getMonth())

                                            else
                                                // Modification
                                                    // Inner HTML
                                                    targetElement.innerHTML = new Date().getMonth()
                                        }, (1 * 1000))
                                    }

                                    // UTC Month
                                    else if (
                                        document.getElementsByTagName("time")[i].classList.contains("mth_utc") ||
                                        document.getElementsByTagName("time")[i].classList.contains("month_utc")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs every 1 second.
                                        setInterval(function() {
                                            // Modification
                                                // Inner HTML
                                                targetElement.innerHTML = new Date().getUTCMonth()
                                        }, (1 * 1000))
                                    }

                                    // Second
                                    else if (
                                        document.getElementsByTagName("time")[i].classList.contains("sec") ||
                                        document.getElementsByTagName("time")[i].classList.contains("second")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs every 1 second.
                                        setInterval(function() {
                                            // Modification
                                                // Inner HTML
                                                targetElement.innerHTML = new Date().getSeconds()
                                        }, (1 * 1000))
                                    }

                                    // Octal UTC Second
                                    else if (
                                        document.getElementsByTagName("time")[i].classList.contains("sec_octal_utc") ||
                                        document.getElementsByTagName("time")[i].classList.contains("second_octal_utc") ||
                                        document.getElementsByTagName("time")[i].classList.contains("sec_utc_octal") ||
                                        document.getElementsByTagName("time")[i].classList.contains("second_utc_octal")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs every 1 second.
                                        setInterval(function() {
                                            /* Logic
                                                    If
                                                        the "data" does not have a second character.
                                            */
                                            if (!new Date().getUTCSeconds().toString()[1])
                                                // Modification
                                                    // Inner HTML
                                                    targetElement.innerHTML = ("0" + new Date().getUTCSeconds())

                                            else
                                                // Modification
                                                    // Inner HTML
                                                    targetElement.innerHTML = new Date().getUTCSeconds()
                                        }, (1 * 1000))
                                    }

                                    // Octal Second
                                    else if (
                                        document.getElementsByTagName("time")[i].classList.contains("sec_octal") ||
                                        document.getElementsByTagName("time")[i].classList.contains("second_octal")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs every 1 second.
                                        setInterval(function() {
                                            /* Logic
                                                    If
                                                        the "data" does not have a second character.
                                            */
                                            if (!new Date().getSeconds().toString()[1])
                                                // Modification
                                                    // Inner HTML
                                                    targetElement.innerHTML = ("0" + new Date().getSeconds())

                                            else
                                                // Modification
                                                    // Inner HTML
                                                    targetElement.innerHTML = new Date().getSeconds()
                                        }, (1 * 1000))
                                    }

                                    // UTC Second
                                    else if (
                                        document.getElementsByTagName("time")[i].classList.contains("sec_utc") ||
                                        document.getElementsByTagName("time")[i].classList.contains("second_utc")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs every 1 second.
                                        setInterval(function() {
                                            // Modification
                                                // Inner HTML
                                                targetElement.innerHTML = new Date().getUTCSeconds()
                                        }, (1 * 1000))
                                    }

                                    // Time
                                    else if (document.getElementsByTagName("time")[i].classList.contains("time")) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs every 1 second.
                                        setInterval(function() {
                                            // Modification
                                                // Inner HTML
                                                targetElement.innerHTML = (+new Date() || new Date().getTime())
                                        }, (1 * 1000))
                                    }

                                    // Time Zone Offset
                                    else if (document.getElementsByTagName("time")[i].classList.contains("timezone-offset")) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        // This function runs every 1 second.
                                        setInterval(function() {
                                            // Modification
                                                // Inner HTML
                                                targetElement.innerHTML = new Date().getTimezoneOffset()
                                        }, (1 * 1000))
                                    }

                                    // Year
                                    else if (
                                        document.getElementsByTagName("time")[i].classList.contains("yr") ||
                                        document.getElementsByTagName("time")[i].classList.contains("year")
                                    ) {
                                        // Initialization
                                            // Target Element
                                            var targetElement = document.getElementsByTagName("time")[i]

                                        setInterval(function() {
                                            // Modification
                                                // Inner HTML
                                                targetElement.innerHTML = new Date().getYear()
                                        }, (1 * 1000))
                                    }
                        }

                        catch (error) {
                            /* Do nothing... */
                        }
                }
                time()
                onDOMNodeAdded(function() { time() })

        /* LapysJS Plug-Ins */
            // Function
                // Plug-Ins
                function plugIns() {
                    // Accordion
                        /* Loop
                                Index all Accordions.
                        */
                        for (var i = 0; i < document.querySelectorAll(".accordion").length; i++) {
                            // Close
                            document.getElementsByClassName("accordion")[i].close()

                            /* Logic
                                    If
                                        the Accordion has a Header and Content.
                            */
                            if (
                                document.getElementsByClassName('accordion')[i].querySelector('[data-id="content"]') &&
                                document.getElementsByClassName('accordion')[i].querySelector('[data-id="header"]')
                            ) {
                                // Definition
                                    // Content
                                    document.getElementsByClassName('accordion')[i].content = document.getElementsByClassName('accordion')[i].querySelectorAll('[data-id="content"]')

                                    // Header
                                    document.getElementsByClassName('accordion')[i].header = document.getElementsByClassName('accordion')[i].querySelector('[data-id="header"]')

                                /* Loop
                                        Index all Accordion children.
                                */
                                for (var j = 0; j < document.getElementsByClassName('accordion')[i].querySelectorAll('[data-id="content"], [data-id="header"]').length; j++)
                                    // Modification
                                        // Accordions
                                        document.getElementsByClassName('accordion')[i].querySelectorAll('[data-id="content"], [data-id="header"]')[j].accordion = document.getElementsByClassName("accordion")[i]

                                    // Header
                                        // Modification
                                            // Toggle
                                            document.getElementsByClassName("accordion")[i].header.toggle = false

                                        // Events
                                            // [Data Event Type] | Mouse Up
                                            document.getElementsByClassName("accordion")[i].header.setEvent(
                                                (document.getElementsByClassName("accordion")[i].getAttribute("data-event-type") || "mouseup"),

                                                function() {
                                                    // Toggle
                                                    if (!this.toggle)
                                                        // Open
                                                        this.accordion.open()

                                                    else
                                                        // Close
                                                        this.accordion.close()

                                                    this.toggle = !this.toggle
                                                }
                                            )
                            }
                        }

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
                                            the Carousel has the "data-auto" attribute.
                                */
                                if (document.getElementsByClassName("carousel")[i].hasAttribute("data-auto")) {
                                    // Initialization
                                        // Target Element
                                        var targetElement = document.getElementsByClassName("carousel")[i]

                                    // This function runs every Carousel's "data-auto-interval" unit or 3 seconds.
                                    setInterval(
                                        function() {
                                            /* Logic
                                                    If
                                                        the target element's "data-auto" attribute is "left".
                                            */
                                            if (targetElement.getAttribute("data-auto") == "left")
                                                // Previous
                                                targetElement.prev()

                                            else
                                                // Next
                                                targetElement.next()
                                        },

                                        (parseFloat(targetElement.getAttribute("data-auto-interval") * 1000) || (3 * 1000))
                                    )
                                }

                                // Prototype
                                    // Function
                                        // Previous
                                        document.getElementsByClassName("carousel")[i].constructor.prototype.prev = function() {
                                            /* Loop
                                                    Index all the target element's Slides.
                                            */
                                            for (var i = 0; i < this.slides.length; i++)
                                                /* Logic
                                                        If
                                                            the Slide is not hidden.
                                                */
                                                if (!this.slides[i].hidden) {
                                                    // Modification
                                                        // Hidden
                                                        this.slides[i].hidden = true;

                                                        // [Previous Sibling]
                                                            // Hidden
                                                            (this.slides[i].previousElementSibling || this.slides[this.slides.length - 1]).hidden = false

                                                    // End
                                                    i = this.slides.length
                                                }
                                        }

                                        // Next
                                        document.getElementsByClassName("carousel")[i].constructor.prototype.next = function() {
                                            /* Loop
                                                    Index all the target element's Slides.
                                            */
                                            for (var i = 0; i < this.slides.length; i++)
                                                /* Logic
                                                        If
                                                            the Slide is not hidden.
                                                */
                                                if (!this.slides[i].hidden) {
                                                    // Modification
                                                        // Hidden
                                                        this.slides[i].hidden = true;

                                                        // [Next Sibling]
                                                            // Hidden
                                                            (this.slides[i].nextElementSibling || this.slides[0]).hidden = false

                                                    // End
                                                    i = this.slides.length
                                                }
                                        }

                                        // Toggle
                                        document.getElementsByClassName("carousel")[i].constructor.prototype.toggle = function(index) {
                                            /* Loop
                                                    Index all the target element's Slides.
                                            */
                                            for (var i = 0; i < this.slides.length; i++)
                                                // Modification
                                                    // Hidden
                                                    this.slides[i].hidden = true;

                                            /* Logic
                                                    If
                                                        the specified slide exists.
                                            */
                                            if (this.slides[index])
                                                // Modification
                                                    // Hidden
                                                    this.slides[index].hidden = false
                                        }

                                // Children
                                document.getElementsByClassName('carousel')[i].innerHTML = (
                                    // Initialization
                                        /* Slides Container */
                                        '<div class="slides-container">' +
                                            (function() {
                                                // Initialization
                                                    // Slides
                                                    var slides = ""

                                                /* Loop
                                                        Index all Carousel children.
                                                */
                                                for (var j = 0; j < document.getElementsByClassName("carousel")[i].children.length; j++)
                                                    // Update
                                                        // Slides
                                                        slides += ("\n\r" + document.getElementsByClassName("carousel")[i].children[j].outerHTML)

                                                // Return
                                                    // Slides
                                                    return slides
                                            })() +
                                        '</div>' +

                                        /* --- NOTE --- 
                                                This function is for other controllers in the Carousel.
                                        */
                                        (function() {
                                            // Initialization
                                                // Carousel Controls
                                                var carouselControls = ""

                                            /* Logic
                                                    If
                                                        the Carousel has the "data-buttons" attribute.
                                            */
                                            if (document.getElementsByClassName("carousel")[i].hasAttribute("data-buttons"))
                                                // Update
                                                    // Carousel Controls
                                                    carouselControls += (
                                                        /* Buttons Container */
                                                        '<div class="buttons-container">' +
                                                            // Left Button
                                                            '<button class="button left-button"> ' + (document.getElementsByClassName('carousel')[i].getAttribute('data-button-left-inner-html') || '<span> < </span>') + ' </button>' +

                                                            // Right Button
                                                            '<button class="button right-button"> ' + (document.getElementsByClassName('carousel')[i].getAttribute('data-button-right-inner-html') || '<span> > </span>') + ' </button>' +
                                                        '</div>'
                                                    )

                                            /* Logic
                                                    If
                                                        the Carousel has the "data-indicators" attribute.
                                            */
                                            if (document.getElementsByClassName("carousel")[i].hasAttribute("data-indicators"))
                                                // Update
                                                    // Carousel Controls
                                                    carouselControls += (
                                                        /* Indicators Container */
                                                        '<div class="indicators-container">' +
                                                            (function() {
                                                                // Initialization
                                                                    // Indicators
                                                                    var indicators = ""

                                                                /* Loop
                                                                        Index all Carousel children.
                                                                */
                                                                for (var j = 0; j < document.getElementsByClassName("carousel")[i].children.length; j++)
                                                                    // Update
                                                                        // Indicators
                                                                        indicators += ('\n\r' + '<input class="indicator indicator-' + j + '" type="checkbox">')

                                                                // Return
                                                                    // Indicators
                                                                    return indicators
                                                            })() +
                                                        '</div>'
                                                    )

                                            // Return
                                                // Carousel Controls
                                                return carouselControls
                                        })()
                                )

                                // Modification
                                    // Slides Container
                                    document.getElementsByClassName("carousel")[i].slidesContainer = document.getElementsByClassName("carousel")[i].querySelector(".slides-container")
                                        // Slides
                                        document.getElementsByClassName("carousel")[i].slidesContainer.slides = document.getElementsByClassName("carousel")[i].slidesContainer.children

                                        /* Loop
                                                Index all the Slides Container's children.
                                        */
                                        for (var j = 0; j < document.getElementsByClassName("carousel")[i].slidesContainer.children.length; j++) {
                                            // Modification
                                                // Class
                                                document.getElementsByClassName("carousel")[i].slidesContainer.children[j].addClass("slide")
                                                document.getElementsByClassName("carousel")[i].slidesContainer.children[j].addClass("slide-" + j)

                                                // Container
                                                document.getElementsByClassName("carousel")[i].slidesContainer.children[j].container = document.getElementsByClassName("carousel")[i].slidesContainer

                                                // Hidden
                                                document.getElementsByClassName("carousel")[i].slidesContainer.children[j].hidden = true
                                        }

                                        // Children
                                            // [First Element Child]
                                                // Modification
                                                    // Hidden
                                                    document.getElementsByClassName("carousel")[i].slidesContainer.children[0].hidden = false

                                    // Slides
                                    document.getElementsByClassName("carousel")[i].slides = document.getElementsByClassName("carousel")[i].slidesContainer.slides

                                    // Buttons Container
                                    document.getElementsByClassName("carousel")[i].buttonsContainer = document.getElementsByClassName("carousel")[i].querySelector(".buttons-container")
                                    
                                    /* Logic
                                            If
                                                the Buttons Container exists.
                                    */
                                    if (document.getElementsByClassName("carousel")[i].buttonsContainer) {
                                        // Modification
                                            // Buttons Container
                                                // Buttons
                                                document.getElementsByClassName("carousel")[i].buttonsContainer.buttons = document.getElementsByClassName("carousel")[i].buttonsContainer.children

                                                // Button
                                                document.getElementsByClassName("carousel")[i].buttonsContainer.button = {
                                                    left: document.getElementsByClassName("carousel")[i].buttonsContainer.querySelector(".left-button"),

                                                    right: document.getElementsByClassName("carousel")[i].buttonsContainer.querySelector(".right-button")
                                                }

                                            // Carousel
                                                // Buttons
                                                document.getElementsByClassName("carousel")[i].buttons = document.getElementsByClassName("carousel")[i].buttonsContainer.buttons

                                                // Button
                                                document.getElementsByClassName("carousel")[i].button = document.getElementsByClassName("carousel")[i].buttonsContainer.button

                                                /* Loop
                                                        Index all Carousel Buttons.
                                                */
                                                for (var j = 0; j < document.getElementsByClassName("carousel")[i].buttons.length; j++)
                                                    // Modification
                                                        // Container
                                                        document.getElementsByClassName("carousel")[i].buttons[j].container = document.getElementsByClassName("carousel")[i].buttonsContainer
                                    }

                                    // Indicators Container
                                    document.getElementsByClassName("carousel")[i].indicatorsContainer = document.getElementsByClassName("carousel")[i].querySelector(".indicators-container")

                                    /* Logic
                                            If
                                                the Indicators Container
                                    */
                                    if (document.getElementsByClassName("carousel")[i].indicatorsContainer) {
                                        // Modification
                                            // Indicators Container
                                                // Indicators
                                                document.getElementsByClassName("carousel")[i].indicatorsContainer.indicators = document.getElementsByClassName("carousel")[i].indicatorsContainer.children

                                            // Carousel
                                                // Indicators
                                                document.getElementsByClassName("carousel")[i].indicators = document.getElementsByClassName("carousel")[i].indicatorsContainer.indicators
                                                    /* Loop
                                                            Index all the Carousel's Indicators.
                                                    */
                                                    for (var j = 0; j < document.getElementsByClassName("carousel")[i].indicators.length; j++)
                                                        // Modification
                                                            // Container
                                                            document.getElementsByClassName("carousel")[i].indicators[j].container = document.getElementsByClassName("carousel")[i].indicatorsContainer
                                    }

                                    /* Loop
                                            Index specified Carousel child elements.
                                    */
                                    for (j = 0; j < document.getElementsByClassName("carousel")[i].querySelectorAll(".button, .buttons-container, .indicator, .indicators-container, .slide, .slides-container").length; j++)
                                        // Modification
                                            // Carousel
                                            document.getElementsByClassName("carousel")[i].querySelectorAll(".button, .buttons-container, .indicator, .indicators-container, .slide, .slides-container")[j].carousel = document.getElementsByClassName("carousel")[i]

                                // Event
                                    // Buttons
                                        // Left
                                            // Mouse Up
                                            document.getElementsByClassName("carousel")[i].button.left.setEvent(
                                                (document.getElementsByClassName("carousel")[i].getAttribute("data-button-left-event-type") || "mouseup"),

                                                function() {
                                                    // Modification
                                                        // Carousel
                                                            // Previous
                                                            this.carousel.prev()
                                                }
                                            )

                                        // Right
                                            // Mouse Up
                                            document.getElementsByClassName("carousel")[i].button.right.setEvent(
                                                (document.getElementsByClassName("carousel")[i].getAttribute("data-button-right-event-type") || "mouseup"),

                                                function() {
                                                    // Modification
                                                        // Carousel
                                                            // Next
                                                            this.carousel.next()
                                                }
                                            )
                                
                                    // Indicators
                                    for (var j = 0; j < document.getElementsByClassName("carousel")[i].indicators.length; j++)
                                        // Mouse Up
                                        document.getElementsByClassName("carousel")[i].indicators[j].setEvent("mouseup", function() {
                                            this.carousel.toggle(parseInt(this.className.slice(this.className.indexOf("-") + "-".length)[0]))
                                        })
                            }

                            // Event
                                // [<body>]
                                    // Key Down
                                    document.body.setEvent("keydown", function(event) {
                                        // Update
                                            // Event
                                            event = (event || {})

                                        /* Loop
                                                Index all 'selected' Carousels.
                                        */
                                        for (var j = 0; j < document.querySelectorAll(".carousel[data-selected]").length; j++) {
                                            /* Logic
                                                    If
                                                        the "event" "code" is "ArrowRight",

                                                    else if
                                                        the "event" "code" is "ArrowLeft".
                                            */
                                            if (event.code == "ArrowRight")
                                                // Next
                                                document.querySelectorAll(".carousel[data-selected]")[j].next()

                                            else if (event.code == "ArrowLeft")
                                                // Previous
                                                document.querySelectorAll(".carousel[data-selected]")[j].prev()
                                        }
                                    })

                                    // Mouse Up
                                    document.body.setEvent("mouseup", function(event) {
                                        // Update Event
                                        event = (event || {})

                                        /* Loop
                                                Index all Carousels.
                                        */
                                        for (var j = 0; j < document.getElementsByClassName("carousel").length; j++) {
                                            // Modification
                                                // Selected
                                                document.getElementsByClassName("carousel")[j].selected = false

                                                // Data Selected
                                                document.getElementsByClassName("carousel")[j].removeAttribute("data-selected")
                                        }

                                        /* Loop
                                                Index all targets.
                                        */
                                        for (var j = 0; j < event.path.length; j++)
                                            /* Logic
                                                    If
                                                        the target is an element.
                                            */
                                            if (typeof(event.path[j].tagName) == "string")
                                                /* Logic
                                                        If
                                                            the target element is a "carousel" class element.
                                                */
                                                if (event.path[j].classList.contains("carousel")) {
                                                    // Modification
                                                        // Selected
                                                        event.path[j].selected = true

                                                        // Data Selected
                                                        event.path[j].setAttribute("data-selected", "")

                                                    // End
                                                    j = event.path.length
                                                }
                                    })
                        }

                    /* Clipboard
                            --- UPDATE REQUIRED ---
                                'Leak effect' should be nullified.
                    */
                        // Definition
                            // <clip-clone>
                            window.customElements.define("clip-clone", class ClipboardClone extends HTMLElement {})

                            // <clip-copy>
                            window.customElements.define("clip-copy", class ClipboardCopy extends HTMLElement {})

                            // <clip-cut>
                            window.customElements.define("clip-cut", class ClipboardCut extends HTMLElement {})

                            // <clip-paste>
                            window.customElements.define("clip-paste", class ClipboardPaste extends HTMLElement {})

                        // Update
                            /* Loop
                                    Index all <clip-clone> elements.
                            */
                            for (var i = 0; i < document.getElementsByTagName("clip-clone").length; i++) {
                                /* Logic
                                        If
                                            the element has a "data-id" attribute.
                                */
                                if (document.getElementsByTagName("clip-clone")[i].hasAttribute("data-id"))
                                    /* Logic
                                            If
                                                the element has the "data-unit" attribute
                                                    and
                                                the attribute is an integer.
                                    */
                                    if (
                                        document.getElementsByTagName("clip-clone")[i].hasAttribute("data-unit") &&
                                        typeof(parseInt(document.getElementsByTagName("clip-clone")[i].getAttribute("data-unit"))) == "number"
                                    ) {
                                        /* Logic
                                                If
                                                    the specified <clip-copy> or <clip-cut> element exists.
                                        */
                                        if (document.querySelector('clip-copy[data-id="' + document.getElementsByTagName('clip-clone')[i].getAttribute('data-id') + '"]') || document.querySelector('clip-cut[data-id="' + document.getElementsByTagName('clip-clone')[i].getAttribute('data-id') + '"]'))
                                            /* Loop
                                                    For the "data-unit" value specified.
                                            */
                                            for (var j = 0; j < parseInt(document.getElementsByTagName("clip-clone")[i].getAttribute("data-unit")); j++)
                                                // Adjacent Initialization
                                                document.getElementsByTagName('clip-clone')[i].insertAdjacentHTML(
                                                    'afterend',

                                                    // Initialization
                                                    (document.querySelector('clip-copy[data-id="' + document.getElementsByTagName('clip-clone')[i].getAttribute('data-id') + '"]') || document.querySelector('clip-cut[data-id="' + document.getElementsByTagName('clip-clone')[i].getAttribute('data-id') + '"]')).outerHTML.replace(/data-id=('|")[a-zA-Z0-9~!@#$%^&*\(\)_\+`\-=]{1,}('|")/, "data-cloned=\"\"").replace(/<clip-copy|<clip-cut/, "<div").replace(/<\/clip-copy|<\/clip-cut/, "</div")
                                                )
                                    }

                                    else
                                        /* Logic
                                                If
                                                    the specified <clip-copy> or <clip-cut> element exists.
                                        */
                                        if (document.querySelector('clip-copy[data-id="' + document.getElementsByTagName('clip-clone')[i].getAttribute('data-id') + '"]') || document.querySelector('clip-cut[data-id="' + document.getElementsByTagName('clip-clone')[i].getAttribute('data-id') + '"]'))
                                            // Deletion
                                            document.getElementsByTagName('clip-clone')[i].outerHTML = (document.querySelector('clip-copy[data-id="' + document.getElementsByTagName('clip-clone')[i].getAttribute('data-id') + '"]') || document.querySelector('clip-cut[data-id="' + document.getElementsByTagName('clip-clone')[i].getAttribute('data-id') + '"]')).outerHTML.replace(/data-id=('|")[a-zA-Z0-9~!@#$%^&*\(\)_\+`\-=]{1,}('|")/, "data-cloned=\"\"").replace(/<clip-copy|<clip-cut/, "<div").replace(/<\/clip-copy|<\/clip-cut/, "</div")
                            }

                            /* Loop
                                    Index all <clip-paste> elements.
                            */
                            for (var i = 0; i < document.getElementsByTagName("clip-paste").length; i++) {
                                /* Logic
                                        If
                                            the element has a "data-id" attribute.
                                */
                                if (document.getElementsByTagName("clip-paste")[i].hasAttribute("data-id"))
                                    /* Logic
                                            If
                                                the element has the "data-unit" attribute
                                                    and
                                                the attribute is an integer.
                                    */
                                    if (
                                        document.getElementsByTagName("clip-paste")[i].hasAttribute("data-unit") &&
                                        typeof(parseInt(document.getElementsByTagName("clip-paste")[i].getAttribute("data-unit"))) == "number"
                                    ) {
                                        /* Logic
                                                If
                                                    the specified <clip-copy> or <clip-cut> element exists.
                                        */
                                        if (document.querySelector('clip-copy[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]') || document.querySelector('clip-cut[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]'))
                                            /* Loop
                                                    For the "data-unit" value specified.
                                            */
                                            for (var j = 0; j < parseInt(document.getElementsByTagName("clip-paste")[i].getAttribute("data-unit")); j++)
                                                // Adjacent Initialization
                                                document.getElementsByTagName('clip-paste')[i].insertAdjacentHTML(
                                                    'afterend',

                                                    // Initialization
                                                    '<div data-pasted' +
                                                        (function() {
                                                            /* Loop
                                                                    Index all <clip-paste> elements.
                                                            */
                                                            for (var i = 0; i < document.getElementsByTagName("clip-paste").length; i++) {
                                                                // Initialization
                                                                    // Attributes
                                                                    var attributes = ""

                                                                /* Loop
                                                                        Index all the specified <clip-copy> or <clip-cut> attributes.
                                                                */
                                                                for (var j = 0; j < (document.querySelector('clip-copy[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]') || document.querySelector('clip-cut[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]')).attributes.length; j++)
                                                                    /* Logic
                                                                            If
                                                                                the attribute is not the following:
                                                                    */
                                                                    if (
                                                                        (document.querySelector('clip-copy[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]') || document.querySelector('clip-cut[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]')).attributes[j].name != "data-cloned" &&
                                                                        (document.querySelector('clip-copy[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]') || document.querySelector('clip-cut[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]')).attributes[j].name != "data-copied" &&
                                                                        (document.querySelector('clip-copy[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]') || document.querySelector('clip-cut[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]')).attributes[j].name != "data-id" &&
                                                                        (document.querySelector('clip-copy[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]') || document.querySelector('clip-cut[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]')).attributes[j].name != "data-pasted"
                                                                    )
                                                                        // Update
                                                                            // Attributes
                                                                            attributes += (" " + (document.querySelector('clip-copy[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]') || document.querySelector('clip-cut[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]')).attributes[j].name + "=\"" + (document.querySelector('clip-copy[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]') || document.querySelector('clip-cut[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]')).attributes[j].value + "\"")

                                                                // Return
                                                                    // Attributes
                                                                    return attributes
                                                            }
                                                        })() +
                                                    '>' +
                                                        (document.querySelector('clip-copy[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]') || document.querySelector('clip-cut[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]')).innerHTML +
                                                    '</div>'
                                                )
                                    }

                                    else
                                        /* Logic
                                                If
                                                    the specified <clip-copy> or <clip-cut> element exists.
                                        */
                                        if (document.querySelector('clip-copy[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]') || document.querySelector('clip-cut[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]'))
                                            // Deletion
                                            document.getElementsByTagName('clip-paste')[i].outerHTML = (
                                                // Initialization
                                                '<div data-pasted' +
                                                    (function() {
                                                            /* Loop
                                                                    Index all <clip-paste> elements.
                                                            */
                                                            for (var i = 0; i < document.getElementsByTagName("clip-paste").length; i++) {
                                                                // Initialization
                                                                    // Attributes
                                                                    var attributes = ""

                                                                /* Loop
                                                                        Index all the specified <clip-copy> or <clip-cut> attributes.
                                                                */
                                                                for (var j = 0; j < (document.querySelector('clip-copy[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]') || document.querySelector('clip-cut[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]')).attributes.length; j++)
                                                                    /* Logic
                                                                            If
                                                                                the attribute is not the following:
                                                                    */
                                                                    if (
                                                                        (document.querySelector('clip-copy[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]') || document.querySelector('clip-cut[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]')).attributes[j].name != "data-cloned" &&
                                                                        (document.querySelector('clip-copy[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]') || document.querySelector('clip-cut[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]')).attributes[j].name != "data-copied" &&
                                                                        (document.querySelector('clip-copy[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]') || document.querySelector('clip-cut[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]')).attributes[j].name != "data-id" &&
                                                                        (document.querySelector('clip-copy[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]') || document.querySelector('clip-cut[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]')).attributes[j].name != "data-pasted"
                                                                    )
                                                                        // Update
                                                                            // Attributes
                                                                            attributes += (" " + (document.querySelector('clip-copy[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]') || document.querySelector('clip-cut[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]')).attributes[j].name + "=\"" + (document.querySelector('clip-copy[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]') || document.querySelector('clip-cut[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]')).attributes[j].value + "\"")

                                                                // Return
                                                                    // Attributes
                                                                    return attributes
                                                            }
                                                        })() +
                                                '>' +
                                                    (document.querySelector('clip-copy[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]') || document.querySelector('clip-cut[data-id="' + document.getElementsByTagName('clip-paste')[i].getAttribute('data-id') + '"]')).innerHTML +
                                                '</div>'
                                            )
                            }

                            /* Loop
                                    Index all <clip-clone> elements.
                            */
                            for (var i = 0; i < document.getElementsByTagName("clip-clone").length; i++)
                                document.getElementsByTagName("clip-clone")[i].remove()

                            /* Loop
                                    Index all 'cloned' elements.
                            */
                            for (var i = 0; i < document.querySelectorAll("[data-cloned]").length; i++)
                                document.querySelectorAll("[data-cloned]")[i].insertAdjacentHTML(
                                    "afterend",

                                    document.querySelectorAll("[data-cloned]")[i].innerHTML
                                )

                            /* Loop
                                    Index all 'cloned' elements (thrice as much of its quantity).
                            */
                            for (var i = 0; i < (document.querySelectorAll("[data-cloned]").length * 3); i++)
                                for (var j = 0; j < document.querySelectorAll("[data-cloned]").length; j++)
                                    document.querySelectorAll("[data-cloned]")[j].remove()

                            /* Loop
                                    Index all <clip-copy> elements.
                            */
                            for (var i = 0; i < document.getElementsByTagName("clip-copy").length; i++) {
                                document.getElementsByTagName("clip-copy")[i].removeAttribute("data-id")
                                document.getElementsByTagName("clip-copy")[i].setAttribute("data-copied", "")
                            }

                            /* Loop
                                    Index all <clip-cut> elements (thrice as much of its quantity).
                            */
                            for (var i = 0; i < (document.getElementsByTagName("clip-cut").length * 3); i++)
                                for (var j = 0; j < document.getElementsByTagName("clip-cut").length; j++)
                                    document.getElementsByTagName("clip-cut")[j].remove()

                            /* Loop
                                    Index all <clip-paste> elements (thrice as much of its quantity).
                            */
                            for (var i = 0; i < (document.getElementsByTagName("clip-paste").length * 3); i++)
                                for (var j = 0; j < document.getElementsByTagName("clip-paste").length; j++)
                                    document.getElementsByTagName("clip-paste")[j].remove()

                    // Dropdown
                        // Events
                            // <body>
                                // Mouse Up
                                document.body.setEvent("mouseup", function(event) {
                                    // Update
                                        // Event
                                        event = (event || {})

                                    /* Loop
                                            Index all Dropdowns.
                                    */
                                    for (var i = 0; i < document.getElementsByClassName("dropdown").length; i++)
                                        // Close
                                        document.getElementsByClassName("dropdown")[i].close()

                                    /* Loop
                                            Index all targets.
                                    */
                                    for (var i = 0; i < event.path.length; i++)
                                        /* Loop
                                                If
                                                    the target is an element.
                                        */
                                        if (typeof(event.path[i].tagName) == "string")
                                            /* Logic
                                                    If
                                                        the target element is a "dropdown" class.
                                            */
                                            if (event.path[i].classList.contains("dropdown")) {
                                                    // Open
                                                    event.path[i].open()

                                                // End
                                                i = event.path.length
                                            }
                                })

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
                                    document.getElementsByClassName('dropdown')[i].content = document.querySelectorAll('[data-id="' + document.getElementsByClassName('dropdown')[i].getAttribute('data-id') + '"]:not(.dropdown)')

                                    // Close
                                    document.getElementsByClassName("dropdown")[i].close = function() {
                                        /* Loop
                                                Index all the Dropdown's content.
                                        */
                                        for (var j = 0; j < this.content.length; j++)
                                            // Modification
                                                // Hidden
                                                this.content[j].hidden = true
                                    }
                                    document.getElementsByClassName("dropdown")[i].close()

                                    // Open
                                    document.getElementsByClassName("dropdown")[i].open = function() {
                                        /* Loop
                                                Index all the Dropdown's content.
                                        */
                                        for (var j = 0; j < this.content.length; j++)
                                            // Modification
                                                // Hidden
                                                this.content[j].hidden = false
                                    }

                                    // Toggle
                                    document.getElementsByClassName("dropdown")[i].toggle = false
                            }

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
                                            this.close()
                                        })

                                        // Mouse Over
                                        document.getElementsByClassName("dropdown")[i].setEvent("mouseover", function() {
                                            // Open
                                            this.open()
                                        })
                                }

                                else
                                    // Event
                                        // [Data Event Type] | Mouse Up
                                        document.getElementsByClassName("dropdown")[i].setEvent(
                                            (document.getElementsByClassName("dropdown")[i].getAttribute("data-event-type") || "mouseup"),

                                            function() {
                                                // Toggle
                                                if (!this.toggle)
                                                    // Open
                                                    this.open()

                                                else
                                                    // Close
                                                    this.close()

                                                this.toggle = !this.toggle
                                            }
                                        )
                            }
                        }

                    // Dynamic Text
                        /* Loop
                                Index all Dynamic Texts.
                        */
                        for (var i = 0; i < document.getElementsByClassName("dynamic-text").length; i++) {
                            // Modification
                                // Content Editable
                                document.getElementsByClassName("dynamic-text")[i].contentEditable = false

                                // Data Animation Delay
                                document.getElementsByClassName("dynamic-text")[i].setAttribute(
                                    "data-animation-delay",
                                    (document.getElementsByClassName("dynamic-text")[i].getAttribute("data-animation-delay") || 2)
                                )

                                // Data Animation Duration
                                document.getElementsByClassName("dynamic-text")[i].setAttribute(
                                    "data-animation-duration",
                                    (document.getElementsByClassName("dynamic-text")[i].getAttribute("data-animation-duration") || 3)
                                )

                                // Data Text
                                document.getElementsByClassName("dynamic-text")[i].setAttribute(
                                    "data-text",
                                    (document.getElementsByClassName("dynamic-text")[i].getAttribute("data-text").toString() || "")
                                )

                                // Inner HTML
                                document.getElementsByClassName("dynamic-text")[i].innerHTML = ""

                                // Strings
                                document.getElementsByClassName("dynamic-text")[i].strings = document.getElementsByClassName("dynamic-text")[i].getAttribute("data-text").replace(/\n/g, "").split(/_/g)

                                // String Functions
                                document.getElementsByClassName("dynamic-text")[i].stringFunctions = document.getElementsByClassName("dynamic-text")[i].getAttribute("data-text-event-type").replace(/ /g, "").split(/([^_]*_[^_]*)_/gm).filter(function(element) {
                                    // Return
                                    return element
                                })

                                // Text
                                document.getElementsByClassName("dynamic-text")[i].text = {}


                                /* Logic
                                        If
                                            "Strings" and "String Functions" have equal length.
                                */
                                if (document.getElementsByClassName("dynamic-text")[i].strings.length == document.getElementsByClassName("dynamic-text")[i].stringFunctions.length)
                                    /* Loop
                                            Index all elements of "String".
                                    */
                                    for (var j = 0; j < document.getElementsByClassName("dynamic-text")[i].strings.length; j++) {
                                        // Update
                                            // Text
                                            document.getElementsByClassName("dynamic-text")[i].text[j] = {
                                                // Close Function
                                                closeFunction: document.getElementsByClassName("dynamic-text")[i].stringFunctions[j].slice(document.getElementsByClassName("dynamic-text")[i].stringFunctions[j].indexOf("_") + "_".length),

                                                // Initial Function
                                                initialFunction: document.getElementsByClassName("dynamic-text")[i].stringFunctions[j].slice(0, document.getElementsByClassName("dynamic-text")[i].stringFunctions[j].indexOf("_")),

                                                // Letters
                                                letters: document.getElementsByClassName("dynamic-text")[i].strings[j].split(""),

                                                // Value
                                                value: document.getElementsByClassName("dynamic-text")[i].strings[j]
                                            }
                                                // Length
                                                document.getElementsByClassName("dynamic-text")[i].text.length = (j + 1)
                                    }

                            // Function
                                // Backward Delete
                                document.getElementsByClassName("dynamic-text")[i].constructor.prototype.backwardDelete = function() {
                                    this.innerHTML = this.innerHTML.slice(0, -1)
                                }

                                // Forward Delete
                                document.getElementsByClassName("dynamic-text")[i].constructor.prototype.forwardDelete = function() {
                                    this.innerHTML = this.innerHTML.slice(1)
                                }

                                // Insert
                                document.getElementsByClassName("dynamic-text")[i].constructor.prototype.insert = function(letter) {
                                    this.innerHTML = (letter.toString()[0] + this.innerHTML)
                                }

                                // Type
                                document.getElementsByClassName("dynamic-text")[i].constructor.prototype.type = function(letter) {
                                    this.innerHTML += letter.toString()[0]
                                }

                            /* Logic
                                    If
                                        the Dynamic Text's "text" is defined.
                            */
                            if (document.getElementsByClassName("dynamic-text")[i].text[0]) {
                                // Modification
                                    // Current Letter
                                    document.getElementsByClassName("dynamic-text")[i].currentLetter = document.getElementsByClassName("dynamic-text")[i].text[0].letters[0]
                                        document.getElementsByClassName("dynamic-text")[i].currentLetterIndex = 0
                                        document.getElementsByClassName("dynamic-text")[i].currentLetterSetIndex = 0

                                    // Current Close Function
                                    document.getElementsByClassName("dynamic-text")[i].currentCloseFunction = document.getElementsByClassName("dynamic-text")[i].text[0].closeFunction
                                        document.getElementsByClassName("dynamic-text")[i].currentCloseFunctionIndex = 0

                                    // Current Initial Function
                                    document.getElementsByClassName("dynamic-text")[i].currentInitialFunction = document.getElementsByClassName("dynamic-text")[i].text[0].initialFunction
                                        document.getElementsByClassName("dynamic-text")[i].currentInitialFunctionIndex = 0

                                    // Current String
                                    document.getElementsByClassName("dynamic-text")[i].currentString = document.getElementsByClassName("dynamic-text")[i].text[0].value
                                        document.getElementsByClassName("dynamic-text")[i].currentStringIndex = 0

                                    // Key Interval
                                    document.getElementsByClassName("dynamic-text")[i].keyInterval = (
                                        parseFloat(document.getElementsByClassName("dynamic-text")[i].getAttribute("data-animation-duration")) /
                                        document.getElementsByClassName("dynamic-text")[i].currentString.length
                                    )
                            }

                            // Modification
                                // Key Press Count
                                document.getElementsByClassName("dynamic-text")[i].keyPressCount = 0

                                // Key Timer
                                document.getElementsByClassName("dynamic-text")[i].keyTimer = 0

                                // Paused
                                document.getElementsByClassName("dynamic-text")[i].paused = false

                            // Function
                                // Pause and Clear
                                document.getElementsByClassName("dynamic-text")[i].pauseAndClear = function() {
                                    // Initialization
                                        // Target Element
                                        var targetElement = this

                                    // Update
                                        // Paused
                                        this.paused = true

                                    // This function runs after the Dynamic Text's "data-animation-delay" unit.
                                    setTimeout(function() {
                                        // Modification
                                            // Inner HTML
                                            targetElement.innerHTML = ""

                                        // Update
                                            // Paused
                                            targetElement.paused = false
                                    }, ((parseFloat(this.getAttribute("data-animation-delay")) * 1000) || 0))
                                }

                                document.getElementsByClassName("dynamic-text")[i].constructor.prototype.completeInitialCommand = function() {
                                    // Initialization
                                        // Target Element
                                        var targetElement = this

                                    // Update
                                        // Paused
                                        this.paused = true

                                    // This function runs after the Dynamic Text's "data-animation-delay" unit.
                                    setTimeout(function() { 
                                        // Update
                                            // Initial Function Completed
                                            targetElement.initialFunctionCompleted = true

                                            // Current Letter Set Index
                                            targetElement.currentLetterSetIndex += 1

                                            /* Logic
                                                    If
                                                        "Current Letter Set Index" is greater than or equal to the length of "Strings".
                                            */
                                            if (targetElement.currentLetterSetIndex >= targetElement.strings.length) {
                                                // Update
                                                    // Current Letter
                                                    targetElement.currentLetter = targetElement.text[0].letters[0]

                                                    // Current Letter Set Index
                                                    targetElement.currentLetterSetIndex = 0
                                            }

                                            else
                                                // Update
                                                    // Current Letter
                                                    targetElement.currentLetter = targetElement.text[targetElement.currentLetterSetIndex].letters[0]

                                            // Current Initial Function Index
                                            targetElement.currentInitialFunctionIndex += 1

                                            /* Logic
                                                    If
                                                        "Current Initial Function Index" is greater than or equal to the length of "Strings".
                                            */
                                            if (targetElement.currentInitialFunctionIndex >= targetElement.strings.length) {
                                                // Update
                                                    // Current Initial Function
                                                    targetElement.currentInitialFunction = targetElement.text[0].initialFunction

                                                    // Current Initial Function Index
                                                    targetElement.currentInitialFunctionIndex = 0
                                            }

                                            else
                                                // Update
                                                    // Current Initial Function
                                                    targetElement.currentInitialFunction = targetElement.text[targetElement.currentInitialFunctionIndex].initialFunction

                                            // Current String Index
                                            targetElement.currentStringIndex += 1

                                            /* Logic
                                                    If
                                                        "Current Initial String Index" is greater than or equal to the length of "Strings".
                                            */
                                            if (targetElement.currentStringIndex >= targetElement.strings.length) {
                                                // Update
                                                    // Current String
                                                    targetElement.currentString = targetElement.text[0].value

                                                    // Current String Index
                                                    targetElement.currentStringIndex = 0
                                            }

                                        else
                                            // Update
                                                // Current String
                                                targetElement.currentString = targetElement.text[targetElement.currentStringIndex].value

                                        // Key Press Count
                                        targetElement.keyPressCount = 0

                                        // Paused
                                        targetElement.paused = false
                                    }, ((parseFloat(this.getAttribute("data-animation-delay")) * 1000) || 0))
                                }

                                document.getElementsByClassName("dynamic-text")[i].constructor.prototype.completeCloseCommand = function() {
                                    // Initialization
                                        // Target Element
                                        var targetElement = this

                                    // Update
                                        // Paused
                                        this.paused = true

                                    // This function runs after the Dynamic Text's "data-animation-delay" unit.
                                    setTimeout(function() {
                                        // Update
                                            // Initial Function Completed
                                            targetElement.initialFunctionCompleted = false

                                            // Current Close Function Index
                                            targetElement.currentCloseFunctionIndex += 1

                                            /* Logic
                                                    If
                                                        "Current Close Function Index" is greater than or equal to the length of "Strings".
                                            */
                                            if (targetElement.currentCloseFunctionIndex >= targetElement.strings.length) {
                                                // Update
                                                    // Current Close Function
                                                    targetElement.currentCloseFunction = targetElement.text[0].closeFunction

                                                    // Current Close Function Index
                                                    targetElement.currentCloseFunctionIndex = 0
                                            }

                                        else
                                            // Update
                                                // Current Close Function
                                                targetElement.currentCloseFunction = targetElement.text[targetElement.currentCloseFunctionIndex].closeFunction

                                        // Key Press Count
                                        targetElement.keyPressCount = 0

                                        // Paused
                                        targetElement.paused = false
                                    }, ((parseFloat(this.getAttribute("data-animation-delay")) * 1000) || 0))
                                }

                            /* Logic
                                    If
                                        the Dynamic Text's "data-text" attribute is not 'empty'.
                            */
                            if (document.getElementsByClassName("dynamic-text")[i].getAttribute("data-text") != "")
                                // This function runs every .1 second(s).
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
                                        if (document.getElementsByClassName("dynamic-text")[i].strings.length == document.getElementsByClassName("dynamic-text")[i].stringFunctions.length) {
                                            // Update
                                                // Key Timer
                                                document.getElementsByClassName("dynamic-text")[i].keyTimer += .1

                                            /* Logic
                                                    If
                                                        --- NOTE ---
                                                            The typing mechanism.
                                            */
                                            if (document.getElementsByClassName("dynamic-text")[i].keyTimer > document.getElementsByClassName("dynamic-text")[i].keyInterval) {
                                                // Update
                                                    // Key Press Count
                                                    document.getElementsByClassName("dynamic-text")[i].keyPressCount += 1

                                                    // Key Interval
                                                    document.getElementsByClassName("dynamic-text")[i].keyInterval = (
                                                        parseFloat(document.getElementsByClassName("dynamic-text")[i].getAttribute("data-animation-duration")) /
                                                        document.getElementsByClassName("dynamic-text")[i].currentString.length
                                                    )

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
                                                            if (document.getElementsByClassName("dynamic-text")[i].keyPressCount >= (parseFloat(document.getElementsByClassName("dynamic-text")[i].currentInitialFunction.replace(/[a-z]|[A-Z]|\(|\)/g, "")) + 1))
                                                                // Function
                                                                    // Complete Initial Command
                                                                    document.getElementsByClassName("dynamic-text")[i].completeInitialCommand()

                                                            /* Logic
                                                                    If
                                                                        the Dynamic Text's initial function is not complete.
                                                            */
                                                            if (!document.getElementsByClassName("dynamic-text")[i].initialFunctionCompleted) {
                                                                /* Logic
                                                                        If
                                                                            the Dynamic Text's "Current Initial Function" is "insert"

                                                                        else if
                                                                            the Dynamic Text's "Current Initial Function" is "type".
                                                                */
                                                                if (document.getElementsByClassName("dynamic-text")[i].currentInitialFunction.replace(/\([0-9]\)/g, "") == "insert") {
                                                                    /* Logic
                                                                            If
                                                                                the Dynamic Text is not 'paused'.
                                                                    */
                                                                    if (!document.getElementsByClassName("dynamic-text")[i].paused) {
                                                                        /* Logic
                                                                                If
                                                                                    the Dynamic Text's "Current Letter Index" is
                                                                                        less than 0
                                                                                            or
                                                                                        equal to 0.
                                                                        */
                                                                        if (document.getElementsByClassName("dynamic-text")[i].currentLetterIndex <= 0)
                                                                            // Update
                                                                                // Current Letter Index
                                                                                document.getElementsByClassName("dynamic-text")[i].currentLetterIndex = (document.getElementsByClassName("dynamic-text")[i].currentString.length - 1)

                                                                        else
                                                                            // Update
                                                                                // Current Letter Index
                                                                                document.getElementsByClassName("dynamic-text")[i].currentLetterIndex -= 1

                                                                        // Update
                                                                            // Current Letter
                                                                            document.getElementsByClassName("dynamic-text")[i].currentLetter = document.getElementsByClassName("dynamic-text")[i].text[document.getElementsByClassName("dynamic-text")[i].currentLetterSetIndex].letters[document.getElementsByClassName("dynamic-text")[i].currentLetterIndex]

                                                                        // Function
                                                                            // Insert
                                                                            document.getElementsByClassName("dynamic-text")[i].insert(document.getElementsByClassName("dynamic-text")[i].currentLetter)

                                                                        /* Logic
                                                                                If
                                                                                    the Dynamic Text's "innerHTML" has it "Current String" within.
                                                                        */
                                                                        if (document.getElementsByClassName("dynamic-text")[i].innerHTML.indexOf(document.getElementsByClassName("dynamic-text")[i].currentString) >= 0)
                                                                            // Function
                                                                                // Complete Initial Command
                                                                                document.getElementsByClassName("dynamic-text")[i].completeInitialCommand()
                                                                    }

                                                                    else
                                                                        // Update
                                                                            // Key Press Count
                                                                            document.getElementsByClassName("dynamic-text")[i].keyPressCount = -1
                                                                }

                                                                else if (document.getElementsByClassName("dynamic-text")[i].currentInitialFunction.replace(/\([0-9]\)/g, "") == "type") {
                                                                    /* Logic
                                                                            If
                                                                                the Dynamic Text is not 'paused'.
                                                                    */
                                                                    if (!document.getElementsByClassName("dynamic-text")[i].paused) {
                                                                        // Function
                                                                            // Type
                                                                            document.getElementsByClassName("dynamic-text")[i].type(document.getElementsByClassName("dynamic-text")[i].currentLetter)

                                                                        /* Logic
                                                                                If
                                                                                    the Dynamic Text's "Current Letter Index" is
                                                                                        greater than its "Current String"'s length minus 1
                                                                                            or
                                                                                        equal to its "Current String"'s length minus 1.
                                                                        */
                                                                        if (document.getElementsByClassName("dynamic-text")[i].currentLetterIndex >= (document.getElementsByClassName("dynamic-text")[i].currentString.length - 1))
                                                                            // Update
                                                                                // Current Letter Index
                                                                                document.getElementsByClassName("dynamic-text")[i].currentLetterIndex = 0

                                                                        else
                                                                            // Update
                                                                                // Current Letter Index
                                                                                document.getElementsByClassName("dynamic-text")[i].currentLetterIndex += 1

                                                                        // Update
                                                                            // Current Letter
                                                                            document.getElementsByClassName("dynamic-text")[i].currentLetter = document.getElementsByClassName("dynamic-text")[i].text[document.getElementsByClassName("dynamic-text")[i].currentLetterSetIndex].letters[document.getElementsByClassName("dynamic-text")[i].currentLetterIndex]

                                                                        /* Logic
                                                                                If
                                                                                    the Dynamic Text's "innerHTML" has it "Current String" within.
                                                                        */
                                                                        if (document.getElementsByClassName("dynamic-text")[i].innerHTML.indexOf(document.getElementsByClassName("dynamic-text")[i].currentString) >= 0)
                                                                            // Function
                                                                                // Complete Initial Command
                                                                                document.getElementsByClassName("dynamic-text")[i].completeInitialCommand()
                                                                    }

                                                                    else
                                                                        // Update
                                                                            // Key Press Count
                                                                            document.getElementsByClassName("dynamic-text")[i].keyPressCount = -1
                                                                }

                                                                else
                                                                    /* Logic
                                                                            If
                                                                                the Dynamic Text is not 'paused'.
                                                                    */
                                                                    if (!document.getElementsByClassName("dynamic-text")[i].paused) {
                                                                        // Function
                                                                            // Complete Initial Command
                                                                            document.getElementsByClassName("dynamic-text")[i].completeInitialCommand()
                                                                    }

                                                                    else
                                                                        // Update
                                                                            // Key Press Count
                                                                            document.getElementsByClassName("dynamic-text")[i].keyPressCount = -1
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
                                                                if (!document.getElementsByClassName("dynamic-text")[i].paused) {
                                                                    /* Logic
                                                                            If
                                                                                the Dynamic Text's "Current Letter Index" is
                                                                                    less than 0
                                                                                        or
                                                                                    equal to 0.
                                                                    */
                                                                    if (document.getElementsByClassName("dynamic-text")[i].currentLetterIndex <= 0)
                                                                        // Update
                                                                            // Current Letter Index
                                                                            document.getElementsByClassName("dynamic-text")[i].currentLetterIndex = (document.getElementsByClassName("dynamic-text")[i].currentString.length - 1)

                                                                    else
                                                                        // Update
                                                                            // Current Letter Index
                                                                            document.getElementsByClassName("dynamic-text")[i].currentLetterIndex -= 1

                                                                    // Update
                                                                        // Current Letter
                                                                        document.getElementsByClassName("dynamic-text")[i].currentLetter = document.getElementsByClassName("dynamic-text")[i].text[document.getElementsByClassName("dynamic-text")[i].currentLetterSetIndex].letters[document.getElementsByClassName("dynamic-text")[i].currentLetterIndex]

                                                                    // Function
                                                                        // Insert
                                                                        document.getElementsByClassName("dynamic-text")[i].insert(document.getElementsByClassName("dynamic-text")[i].currentLetter)

                                                                    /* Logic
                                                                            If
                                                                                the Dynamic Text's "innerHTML" has it "Current String" within.
                                                                    */
                                                                    if (document.getElementsByClassName("dynamic-text")[i].innerHTML.indexOf(document.getElementsByClassName("dynamic-text")[i].currentString) >= 0)
                                                                        // Function
                                                                            // Pause and Clear
                                                                            document.getElementsByClassName("dynamic-text")[i].pauseAndClear()
                                                                }

                                                                else
                                                                    // Update
                                                                        // Key Press Count
                                                                        document.getElementsByClassName("dynamic-text")[i].keyPressCount = -1
                                                            }

                                                            else if (document.getElementsByClassName("dynamic-text")[i].getAttribute("data-text-event-type").replace(/\([0-9]\)/g, "") == "type") {
                                                                /* Logic
                                                                        If
                                                                            the Dynamic Text is not 'paused'.
                                                                */
                                                                if (!document.getElementsByClassName("dynamic-text")[i].paused) {
                                                                    // Function
                                                                        // Type
                                                                        document.getElementsByClassName("dynamic-text")[i].type(document.getElementsByClassName("dynamic-text")[i].currentLetter)

                                                                    /* Logic
                                                                            If
                                                                                the Dynamic Text's "Current Letter Index" is
                                                                                    greater than its "Current String"'s length minus 1
                                                                                        or
                                                                                    equal to its "Current String"'s length minus 1.
                                                                    */
                                                                    if (document.getElementsByClassName("dynamic-text")[i].currentLetterIndex >= (document.getElementsByClassName("dynamic-text")[i].currentString.length - 1))
                                                                        // Update
                                                                            // Current Letter Index
                                                                            document.getElementsByClassName("dynamic-text")[i].currentLetterIndex = 0

                                                                    else
                                                                        // Update
                                                                            // Current Letter Index
                                                                            document.getElementsByClassName("dynamic-text")[i].currentLetterIndex += 1

                                                                    // Update
                                                                        // Current Letter
                                                                        document.getElementsByClassName("dynamic-text")[i].currentLetter = document.getElementsByClassName("dynamic-text")[i].text[document.getElementsByClassName("dynamic-text")[i].currentLetterSetIndex].letters[document.getElementsByClassName("dynamic-text")[i].currentLetterIndex]

                                                                    /* Logic
                                                                            If
                                                                                the Dynamic Text's "innerHTML" has it "Current String" within.
                                                                    */
                                                                    if (document.getElementsByClassName("dynamic-text")[i].innerHTML.indexOf(document.getElementsByClassName("dynamic-text")[i].currentString) >= 0)
                                                                        // Function
                                                                            // Pause and Clear
                                                                            document.getElementsByClassName("dynamic-text")[i].pauseAndClear()
                                                                }

                                                                else
                                                                    // Update
                                                                        // Key Press Count
                                                                        document.getElementsByClassName("dynamic-text")[i].keyPressCount = -1
                                                            }
                                                    }
                                                    initialFunction()

                                                    // Close Function
                                                    function closeFunction() {
                                                        /* Logic
                                                                If
                                                                    the Dynamic Text's
                                                                        "data-text" attribute has "_" in it
                                                                            or
                                                                        "data-text-event-type" attribute has "_" in it.
                                                        */
                                                        if (document.getElementsByClassName("dynamic-text")[i].keyPressCount >= (parseFloat(document.getElementsByClassName("dynamic-text")[i].currentCloseFunction.replace(/[a-z]|[A-Z]|\(|\)/g, "")) + 1))
                                                            // Function
                                                                // Complete Close Command
                                                                document.getElementsByClassName("dynamic-text")[i].completeCloseCommand()

                                                        /* Logic
                                                                If
                                                                    the Dynamic Text's "Current Close Function" is "backwardDelete"

                                                                else if
                                                                    the Dynamic Text's "Current Close Function" is "forwardDelete".
                                                        */
                                                        if (document.getElementsByClassName("dynamic-text")[i].currentCloseFunction.replace(/\([0-9]\)/g, "") == "backwardDelete") {
                                                            /* Logic
                                                                    If
                                                                        the Dynamic Text is not 'paused'.
                                                            */
                                                            if (!document.getElementsByClassName("dynamic-text")[i].paused) {
                                                                // Function
                                                                    // Backward Delete
                                                                    document.getElementsByClassName("dynamic-text")[i].backwardDelete()

                                                                /* Logic
                                                                        If
                                                                            the Dynamic Text's "innerHTML" is 'empty'.
                                                                */
                                                                if (document.getElementsByClassName("dynamic-text")[i].innerHTML == "")
                                                                    // Function
                                                                        // Complete Close Command
                                                                        document.getElementsByClassName("dynamic-text")[i].completeCloseCommand()
                                                            }

                                                            else
                                                                // Update
                                                                    // Key Press Count
                                                                    document.getElementsByClassName("dynamic-text")[i].keyPressCount = -1
                                                        }

                                                        else if (document.getElementsByClassName("dynamic-text")[i].currentCloseFunction.replace(/\([0-9]\)/g, "") == "forwardDelete") {
                                                            /* Logic
                                                                    If
                                                                        the Dynamic Text is not 'paused'.
                                                            */
                                                            if (!document.getElementsByClassName("dynamic-text")[i].paused) {
                                                                // Function
                                                                    // Forward Delete
                                                                    document.getElementsByClassName("dynamic-text")[i].forwardDelete()

                                                                /* Logic
                                                                        If
                                                                            the Dynamic Text's "innerHTML" is 'empty'.
                                                                */
                                                                if (document.getElementsByClassName("dynamic-text")[i].innerHTML == "")
                                                                    // Function
                                                                        // Complete Close Command
                                                                        document.getElementsByClassName("dynamic-text")[i].completeCloseCommand()
                                                            }

                                                            else
                                                                // Update
                                                                    // Key Press Count
                                                                    document.getElementsByClassName("dynamic-text")[i].keyPressCount = -1
                                                        }

                                                        else
                                                            /* Logic
                                                                    If
                                                                        the Dynamic Text is not 'paused'.
                                                            */
                                                            if (!document.getElementsByClassName("dynamic-text")[i].paused) {
                                                                // Function
                                                                    // Complete Close Command
                                                                    document.getElementsByClassName("dynamic-text")[i].completeCloseCommand()
                                                            }

                                                            else
                                                                // Update
                                                                    // Key Press Count
                                                                    document.getElementsByClassName("dynamic-text")[i].keyPressCount = -1
                                                    }

                                                    // Update
                                                        // Key Timer
                                                        document.getElementsByClassName("dynamic-text")[i].keyTimer = 0
                                                }
                                        }
                                }, 100)
                        }

                    /* Media
                            --- UPDATE REQUIRED ---
                                Media Console should still be visible on fullscreen with the Media.
                    */
                        /* Loop
                                Index all Media.
                        */
                        for (var i = 0; i < document.querySelectorAll("audio.media, video.media").length; i++) {
                            // Modification
                                // Controls
                                document.querySelectorAll("audio.media, video.media")[i].controls = false

                                /* Logic
                                        If
                                            the Media is 'muted'.
                                */
                                if (document.querySelectorAll("audio.media, video.media")[i].muted)
                                    // Volume
                                    document.querySelectorAll("audio.media, video.media")[i].volume = 0

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
                                    !document.querySelectorAll("audio.media, video.media")[i].hasPlayButton
                                ) {
                                    // Adjacent Initialization
                                    document.querySelectorAll('audio.media, video.media')[i].insertAdjacentHTML(
                                        'beforebegin',

                                        /* Play Button */
                                        '<button class="media-play-button" data-id="playButton"> ' +
                                            (document.querySelectorAll('audio.media, video.media')[i].getAttribute('data-play-button-inner-html') || '<span> &blacktriangleright; </span>') +
                                        ' </button>'
                                    )

                                    /* Loop
                                            Index all Play Buttons.
                                    */
                                    for (var j = 0; j < document.querySelectorAll("button.media-play-button").length; j++) {
                                        // Event
                                            // [Media]
                                                // Mouse Up
                                                document.querySelectorAll("button.media-play-button")[j].setEvent("mouseup", function() {
                                                    /* Logic
                                                            If
                                                                the respective Media is on 'autoplay'.
                                                    */
                                                    if (this.nextElementSibling.autoplay)
                                                        // Play
                                                        this.nextElementSibling.play()

                                                    else
                                                        // Pause
                                                        this.nextElementSibling.togglePlayMode()

                                                    // Style
                                                        // Display
                                                        this.style.display = "none"
                                                })

                                                // Play & Playing
                                                document.querySelectorAll("button.media-play-button")[j].nextElementSibling.setEvent("play, playing", function() {
                                                    // Style
                                                        // Display
                                                        this.previousElementSibling.style.display = "none"
                                                })

                                        /* Logic
                                                If
                                                    the respective Media has the "data-play-button-toggle" attribute.
                                        */
                                        if (document.querySelectorAll("button.media-play-button")[j].nextElementSibling.hasAttribute("data-play-button-toggle")) {
                                            // Event
                                                // [Media]
                                                    // Pause
                                                    document.querySelectorAll("button.media-play-button")[j].nextElementSibling.setEvent("pause", function() {
                                                        // Style
                                                        this.previousElementSibling.removeAttribute("style")
                                                    })
                                        }
                                    }

                                    // Modification
                                        // Has Play Button
                                        document.querySelectorAll("audio.media, video.media")[i].hasPlayButton = true
                                }

                            // Modification
                                // Information
                                document.querySelectorAll("audio.media, video.media")[i].info = {
                                    // Playing
                                    playing: false,

                                    // Speed
                                    speed: document.querySelectorAll("audio.media, video.media")[i].playbackRate,

                                    // Volume
                                    volume: document.querySelectorAll("audio.media, video.media")[i].volume
                                }

                                // Toggle
                                document.querySelectorAll("audio.media, video.media")[i].toggle = {
                                    // Play Mode
                                    playMode: (function() {
                                        /* Logic
                                                If
                                                    the Media is on 'autoplay'.
                                        */
                                        if (document.querySelectorAll("audio.media, video.media")[i].autoplay)
                                            // Return
                                            return false

                                        else
                                            // Return
                                            return true
                                    })(),

                                    // Screen Mode
                                    screenMode: false
                                }

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
                                    document.querySelectorAll('audio.media, video.media')[i].insertAdjacentHTML('afterend', '<div class="media-console"> </div>')

                                /* Loop
                                        Index all Media Consoles.
                                */
                                for (var j = 0; j < document.querySelectorAll("audio.media + div.media-console, video.media + div.media-console").length; j++) {
                                    // Modification
                                        // Inner HTML
                                        document.querySelectorAll('audio.media + div.media-console, video.media + div.media-console')[j].innerHTML = (
                                            /* Play Button */
                                            '<button class="button play-button" onmouseup="(this.parentElement || this.parentNode).previousElementSibling.togglePlayMode()"> ' +
                                                (document.querySelectorAll('audio.media + div.media-console, video.media + div.media-console')[j].previousElementSibling.getAttribute('data-controls-play-button-inner-html') || '&blacktriangleright;') +
                                            ' </button>' +

                                            /* Stop Button */
                                            '<button class="button stop-button" onmouseup="' +
                                                '\n\r\t(this.parentElement || this.parentNode).previousElementSibling.load(); ' +
                                                '\n\r\t(this.parentElement || this.parentNode).previousElementSibling.toggle.playMode = true' +
                                            '"> ' +
                                                (document.querySelectorAll('audio.media + div.media-console, video.media + div.media-console')[j].previousElementSibling.getAttribute('data-controls-stop-button-inner-html') || '&square;') +
                                            ' </button>' +

                                            /* Timeline */
                                            '<input ' + 
                                                'class="timeline" ' +
                                                'onchange="(this.parentElement || this.parentNode).previousElementSibling.seek(this)" ' +
                                                'oninput="(this.parentElement || this.parentNode).previousElementSibling.seek(this)" ' +
                                                'max="' + parseInt(document.querySelectorAll('audio.media + div.media-console, video.media + div.media-console')[j].previousElementSibling.duration) + '" ' +
                                                'min="0" ' +
                                                'type="range" ' +
                                                'value="0">' +

                                            /* Mute Volume */
                                            '<button ' +
                                                'class="button mute-button" ' +
                                                'onmouseup="' +
                                                    '\r\tif (!(this.parentElement || this.parentNode).previousElementSibling.toggle.volume)' +
                                                        '\r\t\t(this.parentElement || this.parentNode).previousElementSibling.volume = 0;' +

                                                    '\n\r\telse' +
                                                        '\r\t\t(this.parentElement || this.parentNode).previousElementSibling.volume = (this.parentElement || this.parentNode).previousElementSibling.info.volume;' +

                                                    '\n\r\t(this.parentElement || this.parentNode).previousElementSibling.toggle.volume = !(this.parentElement || this.parentNode).previousElementSibling.toggle.volume' +
                                                '"> ' +
                                                    (document.querySelectorAll('audio.media + div.media-console, video.media + div.media-console')[j].previousElementSibling.getAttribute('data-controls-mute-button-inner-html') || '<span style="font-family: Webdings; line-height: 50%"> X </span>') +
                                                ' </button>' +

                                                /* Volume Range */
                                                '<input ' +
                                                    'class="volume-range" ' +
                                                    'onchange="(this.parentElement || this.parentNode).previousElementSibling.setVolume(this)" ' +
                                                    'oninput="(this.parentElement || this.parentNode).previousElementSibling.setVolume(this)" ' +
                                                    'max="100" ' +
                                                    'min="0" ' +
                                                    'type="range" ' +
                                                    'value="' +
                                                        (function() {
                                                            if (document.querySelectorAll('audio.media + div.media-console, video.media + div.media-console')[j].previousElementSibling.muted)
                                                                return 0

                                                            else
                                                                return parseInt(document.querySelectorAll('audio.media + div.media-console, video.media + div.media-console')[j].previousElementSibling.volume * 100)
                                                        })() +
                                                    '">' +

                                                /* Download Button */
                                                '<button class="button download-button"> ' +
                                                    '<a download="' +
                                                        (function() {
                                                            return decodeURIComponent(
                                                                document.querySelectorAll('audio.media + div.media-console, video.media + div.media-console')[j].previousElementSibling.currentSrc.slice(
                                                                    document.querySelectorAll('audio.media + div.media-console, video.media + div.media-console')[j].previousElementSibling.currentSrc.lastIndexOf("/") + "/".length
                                                                ) ||
                                                                document.querySelectorAll('audio.media + div.media-console, video.media + div.media-console')[j].previousElementSibling.src.slice(
                                                                    document.querySelectorAll('audio.media + div.media-console, video.media + div.media-console')[j].previousElementSibling.src.lastIndexOf("/") + "/".length
                                                                )
                                                            )
                                                        })() +
                                                    '" ' +
                                                        (function() {
                                                            if (!document.querySelectorAll('audio.media + div.media-console, video.media + div.media-console')[j].previousElementSibling.hasAttribute("data-no-download"))
                                                                return ('href="' + (document.querySelectorAll('audio.media + div.media-console, video.media + div.media-console')[j].previousElementSibling.src || document.querySelectorAll('audio.media + div.media-console, video.media + div.media-console')[j].previousElementSibling.currentSrc) + '"')

                                                            else
                                                                return ''
                                                        })() +
                                                    '>  ' +
                                                        (document.querySelectorAll('audio.media + div.media-console, video.media + div.media-console')[j].previousElementSibling.getAttribute('data-controls-download-button-inner-html') || '<span style="font-family: Webdings; line-height: 50%"> 6 </span>') +
                                                    ' </a>' +
                                                ' </button>' +

                                                /* Fullscreen Button */
                                                '<button class="button fullscreen-button" onmouseup="(this.parentElement || this.parentNode).previousElementSibling.fullscreen()"> ' +
                                                    (document.querySelectorAll('audio.media + div.media-console, video.media + div.media-console')[j].previousElementSibling.getAttribute('data-controls-fullscreen-button-inner-html') || '&blacksquare;') +
                                                ' </button>' +

                                                /* Slow Playback Button */
                                                '<button class="button slow-playback-button" onmouseup="' +
                                                    '\r\t(this.parentElement || this.parentNode).previousElementSibling.playbackRate -= ((this.parentElement || this.parentNode).previousElementSibling.playbackRate / 2.5); ' +
                                                    '\n\r\tif ((this.parentElement || this.parentNode).previousElementSibling.playbackRate <= .027993599999999997)' +
                                                    '\r\t\t(this.parentElement || this.parentNode).previousElementSibling.playbackRate = .027993599999999997' +
                                                '"> ' +
                                                    (document.querySelectorAll('audio.media + div.media-console, video.media + div.media-console')[j].previousElementSibling.getAttribute('data-controls-slow-playback-button-inner-html') || '<span style="font-family: Webdings; line-height: 50%"> 3 </span>') +
                                                ' </button>' +

                                                /* Fast Playback Button */
                                                '<button class="button fast-playback-button" onmouseup="' +
                                                    '\r\t(this.parentElement || this.parentNode).previousElementSibling.playbackRate += ((this.parentElement || this.parentNode).previousElementSibling.playbackRate / 2.5); ' +
                                                    '\n\r\tif ((this.parentElement || this.parentNode).previousElementSibling.playbackRate >= 10.5413504)' +
                                                    '\r\t\t(this.parentElement || this.parentNode).previousElementSibling.playbackRate = 10.5413504' +
                                                '"> ' +
                                                    (document.querySelectorAll('audio.media + div.media-console, video.media + div.media-console')[j].previousElementSibling.getAttribute('data-controls-fast-playback-button-inner-html') || '<span style="font-family: Webdings; line-height: 50%"> 4 </span>') +
                                                ' </button>' +

                                                /* Playback Rate */
                                                '<div class="info playback-rate"> &times;1 </div>'
                                        )

                                    // Event
                                        // [<body>]
                                            // Key Down
                                            document.body.setEvent("keydown", function(event) {
                                                // Update
                                                    // Event
                                                    event = (event || {})

                                                /* Loop
                                                        Index all 'focused' Media.
                                                */
                                                for (var j = 0; j < document.querySelectorAll("audio.media[data-focus], video.media[data-focus]").length; j++) {
                                                    /* Logic
                                                            If
                                                                the "event" "code" is the Media's "data-play-event-key" attribute
                                                                    or
                                                                the "event" "code" is "Space",

                                                            else if
                                                                the "event" "ctrlKey" is 'active'
                                                                    or
                                                                the Media's "data-seekmore-meta-event-key" is 'active'
                                                                            and
                                                                the "event" "code" is the Media's "data-seekmore-left-event-key" attribute
                                                                    or
                                                                the "event" "code" is "ArrowLeft",

                                                            else if
                                                                the "event" "ctrlKey" is 'active'
                                                                    or
                                                                the Media's "data-seekmore-meta-event-key" is 'active'
                                                                            and
                                                                the "event" "code" is the Media's "data-seekmore-right-event-key" attribute
                                                                    or
                                                                the "event" "code" is "ArrowRight",

                                                            else if
                                                                the "event" "ctrlKey" is 'active'
                                                                    or
                                                                the Media's "data-seek-meta-event-key" is 'active'
                                                                            and
                                                                the "event" "code" is the Media's "data-seek-left-event-key" attribute
                                                                    or
                                                                the "event" "code" is "ArrowLeft",

                                                            else if
                                                                the "event" "ctrlKey" is 'active'
                                                                    or
                                                                the Media's "data-seek-meta-event-key" is 'active'
                                                                            and
                                                                the "event" "code" is the Media's "data-seek-right-event-key" attribute
                                                                    or
                                                                the "event" "code" is "ArrowRight",

                                                            the "event" "code" is the Media's "data-fullscreen-event-key" attribute
                                                                    or
                                                                the "event" "code" is "KeyF".
                                                    */
                                                    if (event.code == (document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].getAttribute("data-play-event-key") || "Space"))
                                                        // Function
                                                            // Toggle Play Mode
                                                            document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].togglePlayMode()

                                                    else if (
                                                        (event.ctrlKey || document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].hasAttribute("data-seek-meta-event-key")) &&
                                                        event.code == (document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].getAttribute("data-seekmore-left-event-key") || "ArrowLeft")
                                                    )
                                                        // Modification
                                                            // Current Time
                                                            document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].currentTime -= parseInt(
                                                                document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].duration * (5 / 100)
                                                            )

                                                    else if (
                                                        (event.ctrlKey || document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].hasAttribute("data-seek-meta-event-key")) &&
                                                        event.code == (document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].getAttribute("data-seekmore-right-event-key") || "ArrowRight")
                                                    )
                                                        // Modification
                                                            // Current Time
                                                            document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].currentTime += parseInt(
                                                                document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].duration * (5 / 100)
                                                            )

                                                    else if (
                                                        (event.shiftKey || document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].hasAttribute("data-seek-meta-event-key")) &&
                                                        event.code == (document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].getAttribute("data-seek-left-event-key") || "ArrowLeft")
                                                    )
                                                        // Modification
                                                            // Current Time
                                                            document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].currentTime -= parseInt(
                                                                document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].duration * (1 / 100)
                                                            )

                                                    else if (
                                                        (event.shiftKey || document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].hasAttribute("data-seek-meta-event-key")) &&
                                                        event.code == (document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].getAttribute("data-seek-right-event-key") || "ArrowRight")
                                                    )
                                                        // Modification
                                                            // Current Time
                                                            document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].currentTime += parseInt(
                                                                document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].duration * (1 / 100)
                                                            )

                                                    else if (event.code == (document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].getAttribute("data-fullscreen-event-key") || "KeyF"))
                                                        // Function
                                                            // Fullscreen
                                                            document.querySelectorAll("audio.media[data-focus], video.media[data-focus]")[i].fullscreen()
                                                }
                                            })

                                        // This function runs every .1 second(s).
                                        setInterval(function() {
                                            /* Loop
                                                    Index all Media.
                                            */
                                            for (var i = 0; i < document.querySelectorAll("audio.media, video.media").length; i++)
                                                /* Loop
                                                        Index all Media Consoles.
                                                */
                                                for (var j = 0; j < document.querySelectorAll("audio.media + div.media-console, video.media + div.media-console").length; j++) {
                                                    // Children
                                                        // Modification
                                                            // Playback Rate
                                                                // Inner HTML
                                                                document.querySelectorAll("audio.media + div.media-console, video.media + div.media-console")[j].querySelector("div.playback-rate").innerHTML = ("&times;" + document.querySelectorAll("audio.media + div.media-console, video.media + div.media-console")[j].previousElementSibling.playbackRate.toString().slice(0, 4))

                                                            // Timeline
                                                                // Maximum
                                                                document.querySelectorAll("audio.media + div.media-console, video.media + div.media-console")[j].querySelector("input.timeline").max = parseInt(document.querySelectorAll("audio.media + div.media-console, video.media + div.media-console")[j].previousElementSibling.duration)

                                                                // Value
                                                                document.querySelectorAll("audio.media + div.media-console, video.media + div.media-console")[j].querySelector("input.timeline").value = parseInt(document.querySelectorAll("audio.media + div.media-console, video.media + div.media-console")[j].previousElementSibling.currentTime)
                                                                document.querySelectorAll("audio.media + div.media-console, video.media + div.media-console")[j].querySelector("input.timeline").setAttribute("value", parseInt(document.querySelectorAll("audio.media + div.media-console, video.media + div.media-console")[j].previousElementSibling.currentTime))

                                                            // Volume Range
                                                                // Value
                                                                document.querySelectorAll("audio.media + div.media-console, video.media + div.media-console")[j].querySelector("input.volume-range").value = parseInt(document.querySelectorAll("audio.media + div.media-console, video.media + div.media-console")[j].previousElementSibling.volume * 100)
                                                                document.querySelectorAll("audio.media + div.media-console, video.media + div.media-console")[j].querySelector("input.volume-range").setAttribute("value", parseInt(document.querySelectorAll("audio.media + div.media-console, video.media + div.media-console")[j].previousElementSibling.volume * 100))
                                                }
                                        }, 100)
                                }

                                // Modification
                                    // Has Console
                                    document.querySelectorAll("audio.media, video.media")[i].hasConsole = true
                            }

                            // Function
                                // Fullscreen
                                document.querySelectorAll("audio.media, video.media")[i].constructor.prototype.fullscreen = function() {
                                    // Toggle
                                    if (!this.toggle.screenMode)
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
                                            this.requestFullscreen()

                                        else if (this.mozRequestFullScreen)
                                            // -moz- Request Fullscreen
                                            this.mozRequestFullScreen()

                                        else if (this.webkitRequestFullScreen)
                                            // -webkit- Request Fullscreen
                                            this.webkitRequestFullScreen()

                                        else if (this.msRequestFullscreen)
                                            // -ms- Request Fullscreen
                                            this.msRequestFullscreen()

                                        else {
                                            /* Do nothing... */
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
                                            this.exitFullscreen()

                                        else if (this.mozExitFullScreen)
                                            // -moz- Exit Fullscreen
                                            this.mozCancelFullScreen()

                                        else if (this.webkitExitFullscreen)
                                            // -webkit- Exit Fullscreen
                                            this.webkitExitFullscreen()

                                        else if (this.msExitFullscreen)
                                            // -ms- Exit Fullscreen
                                            this.msExitFullscreen()

                                    this.toggle.screenMode = !this.toggle.screenMode
                                }

                                // Seek
                                document.querySelectorAll("audio.media, video.media")[i].constructor.prototype.seek = function(range) {
                                    // Modification
                                        // Current Time
                                        this.currentTime = range.value

                                        // [Range]
                                            // Value
                                            range.value = this.currentTime
                                            range.setAttribute("value", this.currentTime)
                                }

                                // Set Volume
                                document.querySelectorAll("audio.media, video.media")[i].constructor.prototype.setVolume = function(range) {
                                    // Modification
                                        // Volume
                                        this.volume = (range.value / 100)

                                        // Information > Volume
                                        this.info.volume = this.volume

                                        // [Range]
                                            // Value
                                            range.value = (this.volume * 100)
                                            range.setAttribute("value", (this.volume * 100))
                                }

                                // Toggle Play Mode
                                document.querySelectorAll("audio.media, video.media")[i].constructor.prototype.togglePlayMode = function() {
                                    // Toggle
                                    if (!this.toggle.playMode) {
                                        // Pause
                                        this.pause()

                                        /* Logic
                                                If
                                                    the Media has a console.
                                        */
                                        if (this.hasConsole)
                                            // Media Console
                                                // Play Button
                                                    // Modification
                                                        // Inner HTML
                                                        this.nextElementSibling.querySelector(".play-button").innerHTML = (this.getAttribute("data-controls-pause-button-inner-html") || this.getAttribute("data-controls-play-button-inner-html") || "&blacktriangleright;")
                                    }

                                    else {
                                        // Play
                                        this.play()

                                        /* Logic
                                                If
                                                    the Media has a console.
                                        */
                                        if (this.hasConsole)
                                            // Media Console
                                                // Play Button
                                                    // Modification
                                                        // Inner HTML
                                                        this.nextElementSibling.querySelector(".play-button").innerHTML = (this.getAttribute("data-controls-play-button-inner-html") || "&blacktriangleright;")
                                    }

                                    this.toggle.playMode = !this.toggle.playMode
                                }

                            // Event
                                // Double Click
                                document.querySelectorAll("audio.media, video.media")[i].setEvent("dblclick", function() {
                                    // Function
                                        // Fullscreen
                                        this.fullscreen()
                                })

                                // Ended
                                document.querySelectorAll("audio.media, video.media")[i].setEvent("ended", function() {
                                    // Modification
                                        // Toggle > Play Mode
                                        this.toggle.playMode = !this.toggle.playMode
                                })

                                // Loaded Data
                                document.querySelectorAll("audio.media, video.media")[i].setEvent("loadeddata", function() {
                                    /* Logic
                                            If
                                                the target element does not have a "src" attribute.
                                    */
                                    if (!this.hasAttribute("src"))
                                        // Modification
                                            // Source
                                            this.src = this.currentSrc
                                })

                                // Mouse Up
                                document.querySelectorAll("audio.media, video.media")[i].setEvent("mouseup", function() {
                                    // Function
                                        // Toggle Play Mode
                                        this.togglePlayMode()
                                })

                                // Pause
                                document.querySelectorAll("audio.media, video.media")[i].setEvent("pause", function() {
                                    // Modification
                                        // Information > Playing
                                        this.info.playing = false
                                })

                                // Play
                                document.querySelectorAll("audio.media, video.media")[i].setEvent("play", function() {
                                    // Modification
                                        // Information > Playing
                                        this.info.playing = true
                                })

                                // Volume Change
                                document.querySelectorAll("audio.media, video.media")[i].setEvent("volumechange", function() {
                                    /* Logic
                                            If
                                                the target element's "volume" is not 0.
                                    */
                                    if (this.volume != 0) {
                                        // Modification
                                            // Muted
                                            this.muted = false
                                            this.removeAttribute("muted")
                                    }

                                    else {
                                        // Modification
                                            // Muted
                                            this.muted = true
                                            this.setAttribute("muted", "")
                                    }
                                })
                        }

                    // Screen Tip
                        // Definition
                        window.customElements.define("screen-tip", class ScreenTip extends HTMLElement {})

                        // Initialization
                        screen.tip = document.createElement("screen-tip")

                        // Insertion
                        document.body.append(screen.tip)

                        // Deletion
                        if (document.getElementsByTagName("screen-tip")[1])
                            document.getElementsByTagName("screen-tip")[1].remove()

                        // Modification
                            // ID
                            screen.tip.id = "screentip"

                            // Hidden
                            screen.tip.setAttribute("data-hidden", "")

                        // Events
                            // <body>
                                // Mouse Up
                                document.body.setEvent("click, keypress", function() {
                                    try {
                                        // Modification
                                            // Class
                                            screen.tip.removeAttribute("class")

                                            // Hidden
                                            screen.tip.setAttribute("data-hidden", "")

                                            // Style
                                            screen.tip.removeAttribute("style")

                                        // Style
                                            // Left
                                            screen.tip.style.left = ((screen.tip.margin.left + screen.tip.position.left) + "px")

                                            // Top
                                            screen.tip.style.top = ((screen.tip.margin.top + screen.tip.position.top) + "px")
                                    }

                                    catch (error) {
                                        // Update
                                            // Screentip
                                            screen.tip = document.querySelector("screen-tip#screentip")
                                    }
                                })

                        /* Loop
                                Index all 'Screen Tipped' elements.
                        */
                        for (var i = 0; i < document.querySelectorAll('[data-title]:not([data-title*="_hidden"])').length; i++) {
                            // Events
                                // Mouse Leave
                                document.querySelectorAll('[data-title]:not([data-title*="_hidden"])')[i].setEvent(
                                    "mouseleave",

                                    function() {
                                        // Try
                                        try {
                                            // Modification
                                                // Class
                                                screen.tip.removeAttribute("class")

                                                // Hidden
                                                screen.tip.setAttribute("data-hidden", "")

                                                // Style
                                                screen.tip.removeAttribute("style")

                                            // Style
                                                // Left
                                                screen.tip.style.left = ((screen.tip.margin.left + screen.tip.position.left) + "px")

                                                // Top
                                                screen.tip.style.top = ((screen.tip.margin.top + screen.tip.position.top) + "px")
                                        }

                                        catch (error) {
                                            // Update
                                                // Screentip
                                                screen.tip = document.querySelector("screen-tip#screentip")
                                        }
                                    }
                                )

                                // Mouse Over
                                document.querySelectorAll('[data-title]:not([data-title*="_hidden"])')[i].setEvent(
                                    "mouseover",

                                    function(event) {
                                        // Try
                                        try {
                                            // Initialization
                                                // Event
                                                var event = (event || {})

                                                // Target Element
                                                var targetElement = (this || screen.tip)

                                            // Modification
                                                // Class
                                                screen.tip.className = (targetElement.getAttribute("data-title-class") || "")

                                                // Inner HTML
                                                screen.tip.innerHTML = targetElement.getAttribute("data-title").slice(0, targetElement.getAttribute("data-title").indexOf("_"))

                                                // Style
                                                screen.tip.style = (targetElement.getAttribute("data-title-style") || "")

                                            // This function runs after the Screentip's CSS animation or transition delay.
                                            setTimeout(
                                                function() {
                                                    // Modification
                                                        // Hidden
                                                        screen.tip.removeAttribute("data-hidden")

                                                    // Initialization
                                                        // Screentip Margin
                                                        screen.tip.margin = {
                                                            // Left
                                                            left: 0,

                                                            // Top
                                                            top: 0
                                                        }
                                                            // Screentip Margin Former
                                                                // Left
                                                                var screenTipMarginLeft = 0

                                                                // Top
                                                                var screenTipMarginTop = 0

                                                        // Screentip Position
                                                        screen.tip.position = {
                                                            // Left
                                                            left: 0,

                                                            // Top
                                                            top: 0
                                                        }

                                                    // Update
                                                        // Screentip Margin > Left
                                                        screen.tip.margin.left = (targetElement.getBoundingClientRect().width * (5 / 100))

                                                        // Screentip Margin > Top
                                                        screen.tip.margin.top = (targetElement.getBoundingClientRect().height * (5 / 100))

                                                        // Screentip Position > Left
                                                        screen.tip.position.left = event.clientX

                                                        // Screentip Position > Top
                                                        screen.tip.position.top = event.clientY

                                                        /* Logic
                                                                [if:else if:else function]
                                                        */
                                                            // Bottom
                                                            if (targetElement.getAttribute("data-title").slice(targetElement.getAttribute("data-title").indexOf("_")) == "_bottom") {
                                                                // Screentip Margin > Left
                                                                screen.tip.margin.left = (targetElement.getBoundingClientRect().width * (5 / 100))

                                                                // Screentip Margin > Top
                                                                screen.tip.margin.top = (targetElement.getBoundingClientRect().height * (5 / 100))

                                                                // Screentip Position > Top
                                                                screen.tip.position.top = targetElement.getBoundingClientRect().bottom
                                                            }
                                                                // Bottom Center
                                                                else if (
                                                                    targetElement.getAttribute("data-title").slice(targetElement.getAttribute("data-title").indexOf("_")) == "_bottom_center" ||
                                                                    targetElement.getAttribute("data-title").slice(targetElement.getAttribute("data-title").indexOf("_")) == "_center_bottom"
                                                                ) {
                                                                    // Screentip Margin > Left
                                                                    screen.tip.margin.left = 0

                                                                    // Screentip Margin > Top
                                                                    screen.tip.margin.top = (targetElement.getBoundingClientRect().height * (5 / 100))

                                                                    // Screentip Position > Left
                                                                    screen.tip.position.left = (targetElement.getBoundingClientRect().left + (targetElement.clientWidth / 2)) - (screen.tip.clientWidth / 2)

                                                                    // Screentip Position > Top
                                                                    screen.tip.position.top = targetElement.getBoundingClientRect().bottom
                                                                }

                                                                // Bottom Left
                                                                else if (
                                                                    targetElement.getAttribute("data-title").slice(targetElement.getAttribute("data-title").indexOf("_")) == "_bottom_left" ||
                                                                    targetElement.getAttribute("data-title").slice(targetElement.getAttribute("data-title").indexOf("_")) == "_left_bottom"
                                                                ) {
                                                                    // Screentip Margin > Left
                                                                    screen.tip.margin.left = -(targetElement.getBoundingClientRect().width * (5 / 100))

                                                                    // Screentip Margin > Top
                                                                    screen.tip.margin.top = (targetElement.getBoundingClientRect().height * (5 / 100))

                                                                    // Screentip Position > Left
                                                                    screen.tip.position.left = targetElement.getBoundingClientRect().left

                                                                    // Screentip Position > Top
                                                                    screen.tip.position.top = targetElement.getBoundingClientRect().bottom
                                                                }

                                                                // Bottom Right
                                                                else if (
                                                                    targetElement.getAttribute("data-title").slice(targetElement.getAttribute("data-title").indexOf("_")) == "_bottom_right" ||
                                                                    targetElement.getAttribute("data-title").slice(targetElement.getAttribute("data-title").indexOf("_")) == "_right_bottom"
                                                                ) {
                                                                    // Screentip Position > Left
                                                                    screen.tip.position.left = targetElement.getBoundingClientRect().right

                                                                    // Screentip Margin > Top
                                                                    screen.tip.margin.top = (targetElement.getBoundingClientRect().height * (5 / 100))

                                                                    // Screentip Position > Top
                                                                    screen.tip.position.top = targetElement.getBoundingClientRect().bottom
                                                                }

                                                            // Center
                                                            else if (targetElement.getAttribute("data-title").slice(targetElement.getAttribute("data-title").indexOf("_")) == "_center") {
                                                                // Screentip Margin > Left
                                                                screen.tip.margin.left = 0

                                                                // Screentip Margin > Top
                                                                screen.tip.margin.top = 0

                                                                // Screentip Position > Left
                                                                screen.tip.position.left = (targetElement.getBoundingClientRect().left + (targetElement.clientWidth / 2)) - (screen.tip.clientWidth / 2)

                                                                // Screentip Position > Top
                                                                screen.tip.position.top = (targetElement.getBoundingClientRect().top + (targetElement.clientHeight / 2)) - (screen.tip.clientHeight / 2)
                                                            }
                                                                // Center Left
                                                                else if (
                                                                    targetElement.getAttribute("data-title").slice(targetElement.getAttribute("data-title").indexOf("_")) == "_center_left" ||
                                                                    targetElement.getAttribute("data-title").slice(targetElement.getAttribute("data-title").indexOf("_")) == "_left_center"
                                                                ) {
                                                                    // Screentip Margin > Left
                                                                    screen.tip.margin.left = -(targetElement.getBoundingClientRect().width * (5 / 100))

                                                                    // Screentip Margin > Top
                                                                    screen.tip.margin.top = 0

                                                                    // Screentip Position > Left
                                                                    screen.tip.position.left = targetElement.getBoundingClientRect().left

                                                                    // Screentip Position > Top
                                                                    screen.tip.position.top = (targetElement.getBoundingClientRect().top + (targetElement.clientHeight / 2)) - (screen.tip.clientHeight / 2)
                                                                }

                                                                // Center Right
                                                                else if (
                                                                    targetElement.getAttribute("data-title").slice(targetElement.getAttribute("data-title").indexOf("_")) == "_center_right" ||
                                                                    targetElement.getAttribute("data-title").slice(targetElement.getAttribute("data-title").indexOf("_")) == "_right_center"
                                                                ) {
                                                                    // Screentip Margin > Left
                                                                    screen.tip.margin.left = (targetElement.getBoundingClientRect().width * (5 / 100))

                                                                    // Screentip Margin > Top
                                                                    screen.tip.margin.top = 0

                                                                    // Screentip Position > Left
                                                                    screen.tip.position.left = targetElement.getBoundingClientRect().right

                                                                    // Screentip Position > Top
                                                                    screen.tip.position.top = (targetElement.getBoundingClientRect().top + (targetElement.clientHeight / 2)) - (screen.tip.clientHeight / 2)
                                                                }

                                                            // Top
                                                            else if (targetElement.getAttribute("data-title").slice(targetElement.getAttribute("data-title").indexOf("_")) == "_top") {
                                                                // Screentip Margin > Left
                                                                screen.tip.margin.left = (targetElement.getBoundingClientRect().width * (5 / 100))

                                                                // Screentip Margin > Top
                                                                screen.tip.margin.top = -(targetElement.getBoundingClientRect().height * (5 / 100))

                                                                // Screentip Position > Top
                                                                screen.tip.position.top = targetElement.getBoundingClientRect().top
                                                            }
                                                                // Top Center
                                                                else if (
                                                                    targetElement.getAttribute("data-title").slice(targetElement.getAttribute("data-title").indexOf("_")) == "_top_center" ||
                                                                    targetElement.getAttribute("data-title").slice(targetElement.getAttribute("data-title").indexOf("_")) == "_center_top"
                                                                ) {
                                                                    // Screentip Margin > Left
                                                                    screen.tip.margin.left = 0

                                                                    // Screentip Margin > Top
                                                                    screen.tip.margin.top = -(targetElement.getBoundingClientRect().height * (5 / 100))

                                                                    // Screentip Position > Left
                                                                    screen.tip.position.left = (targetElement.getBoundingClientRect().left + (targetElement.clientWidth / 2)) - (screen.tip.clientWidth / 2)

                                                                    // Screentip Position > Top
                                                                    screen.tip.position.top = targetElement.getBoundingClientRect().top
                                                                }

                                                                // Top Left
                                                                else if (
                                                                    targetElement.getAttribute("data-title").slice(targetElement.getAttribute("data-title").indexOf("_")) == "_top_left" ||
                                                                    targetElement.getAttribute("data-title").slice(targetElement.getAttribute("data-title").indexOf("_")) == "_left_top"
                                                                ) {
                                                                    // Screentip Margin > Left
                                                                    screen.tip.margin.left = -(targetElement.getBoundingClientRect().width * (5 / 100))

                                                                    // Screentip Margin > Top
                                                                    screen.tip.margin.top = (targetElement.getBoundingClientRect().height * (5 / 100))

                                                                    // Screentip Position > Left
                                                                    screen.tip.position.left = targetElement.getBoundingClientRect().left

                                                                    // Screentip Position > Top
                                                                    screen.tip.position.top = targetElement.getBoundingClientRect().top
                                                                }

                                                                // Top Right
                                                                else if (
                                                                    targetElement.getAttribute("data-title").slice(targetElement.getAttribute("data-title").indexOf("_")) == "_top_right" ||
                                                                    targetElement.getAttribute("data-title").slice(targetElement.getAttribute("data-title").indexOf("_")) == "_right_top"
                                                                ) {
                                                                    // Screentip Margin > Left
                                                                    screen.tip.margin.left = (targetElement.getBoundingClientRect().width * (5 / 100))

                                                                    // Screentip Margin > Top
                                                                    screen.tip.margin.top = (targetElement.getBoundingClientRect().height * (5 / 100))

                                                                    // Screentip Position > Left
                                                                    screen.tip.position.left = targetElement.getBoundingClientRect().right

                                                                    // Screentip Position > Top
                                                                    screen.tip.position.top = targetElement.getBoundingClientRect().top
                                                                }

                                                    // Style
                                                        // Left
                                                        screen.tip.style.left = ((screen.tip.margin.left + screen.tip.position.left) + "px")

                                                        // Top
                                                        screen.tip.style.top = ((screen.tip.margin.top + screen.tip.position.top) + "px")
                                                },

                                                (function() {
                                                    // Initialization
                                                        // Delay
                                                        var delay = 0

                                                    /* Loop
                                                            Index the Screentip's CSS "animation-delay" as an array.
                                                    */
                                                    for (var k = 0; k < screen.tip.getCSS("animation-delay").replace(/ms|s| /g, "").replace(/0\./g, ".").split(/,/g).length; k++)
                                                        // Update
                                                        delay += parseFloat(screen.tip.getCSS("animation-delay").replace(/ms|s| /g, "").replace(/0\./g, ".").split(/,/g)[k])

                                                    /* Loop
                                                            Index the Screentip's CSS "animation-duration" as an array.
                                                    */
                                                    for (var k = 0; k < screen.tip.getCSS("animation-duration").replace(/ms|s| /g, "").replace(/0\./g, ".").split(/,/g).length; k++)
                                                        // Update
                                                        delay += parseFloat(screen.tip.getCSS("animation-duration").replace(/ms|s| /g, "").replace(/0\./g, ".").split(/,/g)[k])

                                                    /* Loop
                                                            Index the Screentip's CSS "transition-delay" as an array.
                                                    */
                                                    for (var k = 0; k < screen.tip.getCSS("transition-delay").replace(/ms|s| /g, "").replace(/0\./g, ".").split(/,/g).length; k++)
                                                        // Update
                                                        delay += parseFloat(screen.tip.getCSS("transition-delay").replace(/ms|s| /g, "").replace(/0\./g, ".").split(/,/g)[k])

                                                    /* Loop
                                                            Index the Screentip's CSS "transition-duration" as an array.
                                                    */
                                                    for (var k = 0; k < screen.tip.getCSS("transition-duration").replace(/ms|s| /g, "").replace(/0\./g, ".").split(/,/g).length; k++)
                                                        // Update
                                                        delay += parseFloat(screen.tip.getCSS("transition-duration").replace(/ms|s| /g, "").replace(/0\./g, ".").split(/,/g)[k])

                                                    // Return
                                                    return ((delay * 1000) + 100)
                                                })()
                                            )
                                        }

                                        catch (error) {
                                            // Update
                                                // Screentip
                                                screen.tip = document.querySelector("screen-tip#screentip")
                                        }
                                    }
                                )
                        }

                    // Toast
                        // Definition
                        window.customElements.define("screen-toast", class ScreenToast extends HTMLElement {})

                        // Initialization
                        screen.toast = document.createElement("screen-toast")

                        // Insertion
                        document.body.append(screen.toast)

                        // Deletion
                        if (document.getElementsByTagName("screen-toast")[1])
                            document.getElementsByTagName("screen-toast")[1].remove()

                        // Modification
                            // ID
                            screen.toast.id = "toast"

                            // Hidden
                            screen.toast.setAttribute("data-hidden", "")

                        // Event
                            // <body>
                                // Mouse Up
                                document.body.setEvent("click, keypress", function() {
                                    try {
                                        // Modification
                                            // Class
                                            screen.toast.removeAttribute("class")

                                            // Hidden
                                            screen.toast.setAttribute("data-hidden", "")

                                            // Style
                                            screen.toast.removeAttribute("style")
                                    }

                                    catch (error) {
                                        // Update
                                            // Toast
                                            screen.toast = document.querySelector("screen-toast#toast")
                                    }
                                })

                        /* Loop
                                Index all 'Toasted' elements.
                        */
                        for (var i = 0; i < document.querySelectorAll('[data-toast]:not([data-toast*="_hidden"])').length; i++)
                            // Event
                            document.querySelectorAll('[data-toast]:not([data-toast*="_hidden"])')[i].setEvent(
                                // Data Toast Event Type | Mouse Up
                                (document.querySelectorAll('[data-toast]:not([data-toast*="_hidden"])')[i].getAttribute('data-toast-event-type') || 'mouseup'),

                                function() {
                                    // Initialization
                                        // Target Element
                                        var targetElement = this

                                    // Modification
                                        // Inner HTML
                                        screen.toast.innerHTML = this.getAttribute("data-toast").replace(
                                            this.getAttribute("data-toast").slice(this.getAttribute("data-toast").lastIndexOf("(")),
                                            ""
                                        )

                                    // This function runs after the specified data's unit or 0 seconds.
                                    setTimeout(function() {
                                        // Modification
                                            // Class
                                            screen.toast.className = targetElement.getAttribute("data-toast-class")

                                            // Data Hidden
                                            screen.toast.removeAttribute("data-hidden")

                                            // Style
                                            screen.toast.style = targetElement.getAttribute("data-toast-style")

                                        // This function runs after the specified data's unit or 0 seconds.
                                        setTimeout(function() {
                                            // Modification
                                                // Class
                                                screen.toast.removeAttribute("class")

                                                // Data Hidden
                                                screen.toast.setAttribute("data-hidden", "")

                                                // Style
                                                screen.toast.removeAttribute("style")
                                        },  ((parseFloat(targetElement.getAttribute("data-toast").replace(/([a-z]|[A-Z]|[0-9]| ){1,}\([0-9]{1,}_/, "").slice(0, -1)) * 1000) || 0))
                                    }, ((parseFloat(targetElement.getAttribute("data-toast").replace(/([a-z]|[A-Z]|[0-9]| ){1,}\(/, "").replace(/_[0-9]\)/, "")) * 1000) || 0))
                                }
                            )
                }
                plugIns()
                onDOMNodeAdded(function() { plugIns() })

        /* Execution
            --- WARN ---
                The LapysJS script must run only once.
        */
        LapysJS.executed = true
    })
}

else if (!window)
    // Error
    console.error("[LapysJS v" + LapysJS.version + "]: LapysJS v" + LapysJS.version + " does not function without the global 'window' object.")