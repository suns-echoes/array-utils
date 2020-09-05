Difference between two arrays
=============================

### `diff`

Method returns differences between arrays.


Usage
-----

```js
const differences = ArrayUtils.diff(left, right);
```


### Arguments

* **`left`**: *`array`* - first array
* **`right`**: *`array`* - second array


### Returns

* *`object`* - object containing differences
	* **`common`**: *`array`* - elements common to both arrays
	* **`deletions`**: *`array`* - elements from first array but not present in second array
	* **`insertions`**: *`array`* - elements from second array but not present in first array


Example
-------

```js
// Get differences between arrays:
const left = [1, 2, 3];
const right = [3, 4, 5];

const differences = ArrayUtils.diff(left, right);

// "differences" is equal to object below:
{
	common: [3],
	deletions: [1, 2],
	insertions: [4, 5],
}
```
