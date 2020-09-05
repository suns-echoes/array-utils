union
=====

### `union`

Method returns new array containing items from input arrays but with no duplicate values.

Note: *This method takes at least two arrays.*


Usage
-----

```js
const result = ArrayUtils.union(...arrays);
```


### Arguments

* **`array`**: *`...array`* - input arrays


### Returns

* *`array`* - resulting array


Example
-------

```js
// Get items from all arrays:
const a = [1, 2, 3];
const b = [2, 3, 4];
const c = [3, 4, 5];

const result = ArrayUtils.union(a, b, c);

// "result" is equal to array below:
[1, 2, 3, 4, 5]
```
