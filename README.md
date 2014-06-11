# transformer.js-date-to-unix-time

[Transformer](http://github.com/jbenet/transformer) conversion: js-date to unix-time

This module is a transformer conversion, published on npm. Read more about transformer at:

- the transformer website: <http://transform.datadex.io>
- the transformer repository: <http://github.com/jbenet/transformer>

## Usage

Use this module through transformer.

### Javascript

```js
var transformer = require('dat-transformer');
var tJsDateToUnixTime = transformer('js-date', 'unix-time');
tJsDateToUnixTime(new Date("2014-05-07T01:10:45.000Z")); //  1399425045

```
