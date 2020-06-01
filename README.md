transpluck
----------


[![Build Status](https://travis-ci.org/DrPaulBrewer/transpluck.svg?branch=master)](https://travis-ci.org/DrPaulBrewer/transpluck)
[![Coverage Status](https://coveralls.io/repos/github/DrPaulBrewer/transpluck/badge.svg?branch=master)](https://coveralls.io/github/DrPaulBrewer/transpluck?branch=master)

Reformats csv-like array-of-array with header row into a dataframe-like object in a transpose/pluck-like operation

## Installation

`npm i transpluck -S`

## Dependencies

None.  Suitable for usage on nodejs or on the browser, via browserify.

## Initialization

`const transpluck = require('transpluck');`

## Usage

`transpluck(csvData)` uses first row as header row, starts decoding at 2nd row, extracts everything

```
csvData = [ 
	['a','b','c'],
	[1, 2, 3],
	[2, 7, 1],
	[8, 5, 6]
	];

seriesData = transpluck(csvData);
// {a: [1,2,8], b: [2,7,5], c: [3,1,6] }
```

`transpluck(csvData, {pluck: ['b']})` returns only the plucked columns, using `csvData[0]` as the header row.
The pluck property must be an array, and should consist of a subset of the column names from the 0th row of the data.
Missing items will be ignored, and will not appear as keys in the result.  

--> `{b: [2,7,5]}`

`transpluck(csvData, ['x','y','z'])` uses the explicit header `['x','y','z']`, treats all rows of `csvData` as data

--> `{x: ['a',1,2,8], y: ['b',2,7,5], z: ['c',3,1,6]}`

If an explicit header is supplied, a starting row index can also be supplied:

`transpluck(csvData, ['x','y','z'], 1)` 

--> `{x: [1,2,8], y: [2,7,5], z: [3,1,6] }`

Any explicitly undefined header slots are omitted in the returned object:

`transpluck(csvData, ['a',,'c'], 1)`

--> `{a: [1,2,8], c: [3,1,6]}`

You may use an object as the second parameter to request a sparse set of columns. The sparse header object format is `{colNumber: 'label', colNumber2: 'label2', ...}`.

`transpluck(csvData, {1:'bb'}, 1)

--> `{bb: [2,7,5]}`

Remember that any header row in the csvData array-of-arrays is ignored when an explicit header is used:

`transpluck(csvData, ['a','c'], 1)`

--> `{a: [1,2,8], c: [2,7,5] }`  not `c:[3,1,6]` because explicit header ['a','c'] means collect column 0 in property a, and column 1 in property c.  

Ill-formed calls return `undefined`

`transpluck() === undefined`

`transpluck([1,2,3,4,5,6]) === undefined` 

`transpluck({}) === undefined`

### Tests

Use mocha framework.

### Copyright

Copyright 2016 Paul Brewer, Economic and Financial Technology Consulting LLC

### License

MIT
