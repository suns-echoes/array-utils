amoebaSort
----------
<!-- DEFINE @_SHORT_DESC="sort array by simulating amoeba growth" -->

Import/require path:
`@suns-echoes/array-utils/utils/<!-- @_UTIL_FILE_PATH -->`

Returns sorted array. This function treats the source array as two-dimensional.
It starts from the center (or given startX and startY coordinates) and select random adjacent elements.
It modifies original array and returns it.

| Param | Type | Description |
|-|-|-|
| source | `any[]` | Source array. |
| [width] | `number` | Optional width of 2-D array representation. Default is source length. |
| [height] | `number` | Optional height of 2-D array representation. Default is ⌊source length / width⌋. |
| [startX] | `number` | Optional start position along x-axis in 2-D array representation. Default is ⌊width / 2⌋. |
| [startY] | `number` | Optional start position along y-axis in 2-D array representation. Default is ⌊height / 2⌋. |

**Return** `any[]`.

### Example

```js
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = ArrayUtils.amoebaSort(array, 3, 3);

result ≡ [5, 2, 6, 9, 4, 3, 8, 7, 1]
```
