Exclusive
=========

Method returns new array containing items exclusive to all input arrays.

Note: *This method takes at least two arrays.*


Usage
-----

```js
const result = ArrayUtils.exclusive(a, b, c);
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

const result = ArrayUtils.exclusive(a, b, c);

// "result" is equal to array below:
[1, 4, 6, 5, 7]
```
