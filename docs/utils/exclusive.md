Exclusive
=========

### `exclusive`

Method returns new array containing non-intersecting items from input arrays.

Note: *This method takes at least two arrays.*


Usage
-----

```js
const result = ArrayUtils.exclusive(...arrays);
```


### Arguments

* **`arrays`**: *`...array`* - input arrays


### Returns

* *`array`* - resulting array


Example
-------

```js
// Get unique elements that are not duplicated between arrays:
const a = [1, 2, 3];
const b = [2, 4, 6];
const c = [3, 5, 7];

const result = ArrayUtils.exclusive(a, b, c);

// "result" is equal to array below:
[1, 4, 6, 5, 7]
```
