# Toolkit

[![Deploy to GitHub pages](https://github.com/eliandoran/toolkit/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/eliandoran/toolkit/actions/workflows/gh-pages.yml)`


A purely client-side application that offers various small tools that can be useful in day-to-day use, mostly for development.

To access the toolkit, visit [eliandoran.github.io/toolkit/](https://eliandoran.github.io/toolkit/).

One of the more distinct features is that most of the tools are bi-directional. Instead of having two different tools (e.g. one for encode, and one for decode of a particular format), there is a single tool and the user can type in both the input and the output.

Feel free to open an issue if you'd like a particular feature. Pull requests are also welcome.

As a general software design decision, the business logic of the application is kept to a minimum which is why it relies on libraries to the work. This makes the development of new tools much easier and easier to maintain.

## Currently supported tools

* Text tools:
    * Line operations: sort (ascending, descending), shuffle, reverse, deduplicate
    * Whitespace removal: trim lines, remove trailing whitespace, remove blank lines
    * Case convert: upper case, lower case.
* Text hash: MD5, SHA1, SHA256, SHA384, SHA512
* ANSI text viewer
* HTML to Markdown converter
* Calculators:
    * Percentage
    * Bitwise operations
* Unix timestamp
* JSON:
    * JSON formatter
    * JSON to YAML
    * JSON schema validator
* Encode/decode:
    * Base64
    * URL Encode
    * HTML Entity
    * String escape
    * PHP serialization
    * Morse code
* JavaScript keycode helper