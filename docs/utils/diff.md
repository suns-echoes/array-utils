Diff
====

Method returns differences between arrays.


Usage
-----

```js
const differences = ArrayUtils.diff(left, right);
```


### Arguments

* `<array>` `left` - first array;
* `<array>` `right` - second array.


### Returns

* `<object>` - object with differences;
	* `<array>` `common` - common elements to both arrays;
	* `<array>` `deletions` - elements from first array but not included in second array;
	* `<array>` `insertions` - elements from second array but not included in first array.


Example
-------

```js
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
