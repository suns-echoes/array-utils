Difference
==========

### `difference`

Method returns new array containing items unique to first input array.

Note: *This method takes at least two arrays.*


Usage
-----

```js
const result = ArrayUtils.difference(...arrays);
```


### Arguments

* **`arrays`**: *`...array`* - input arrays


### Returns

* *`array`* - resulting array


Example
-------

```js
// Get itms from first array except those present in other arrays:
const a = [1, 2, 3];
const b = [2, 4, 6];
const c = [3, 5, 7];

const result = ArrayUtils.difference(a, b, c);

// "result" is equal to array below:
[1]
```
