Sort array in amoeba grow style
===============================

### `amoebaSort`

Method sorts input array, it starts from center and moves to random adjacent elements.

Note: *This method returns flat array even if 2D input array is provided.*


Usage
-----

```js
const amoeba = ArrayUtils.amoebaSort(left, right);
```


### Arguments

* **`array`**: *`array`* - 1D or 2D array to sort
* **`width`**: *`number`* - this parameter must be specified for 1D array
* **`height`**: *`number`* - this parameter must be specified for 1D array


### Returns

* *`array`* - 1D sorted array


Example
-------

```js
// Sort array:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const amoeba = ArrayUtils.amoebaSort(array, 3, 3);

// sorted array is similar to one below:
[5, 2, 6, 9, 4, 3, 8, 7, 1]
```
