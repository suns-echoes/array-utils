intersect
=========

### `intersect`

Method returns new array containing items common to all input arrays.

Note: *This method takes at least two arrays.*


Usage
-----

```js
const result = ArrayUtils.intersect(...arrays);
```


### Arguments

* **`arrays`**: *`...array`* - input arrays


### Returns

* *`array`* - resulting array


Example
-------

```js
// Get elements that are present in every array:
const a = [1, 2, 3];
const b = [2, 3, 4];
const c = [3, 4, 5];

const result = ArrayUtils.intersect(a, b, c);

// "result" is equal to array below:
[3]
```
