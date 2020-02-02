Difference
==========

Method returns new array containing items exclusive to first array.

Note: *This method takes at least two arrays.*


Usage
-----

```js
const result = ArrayUtils.difference(a, b, c);
```


### Arguments

* `<...array>` `arrays` - input arrays.


### Returns

* `<array>` - resulting array.


Example
-------

```js
const a = [1, 2, 3];
const b = [2, 4, 6];
const c = [3, 5, 7];

const result = ArrayUtils.difference(a, b, c);

// "result" is equal to array below:
[1]
```
