diff
----
<!-- DEFINE @_SHORT_DESC="find the difference between the two arrays" -->

Import/require path:
`@suns-echoes/array-utils/utils/<!-- @_UTIL_FILE_PATH -->`

Returns an object containing the difference between the two arrays.

| Param | Type | Description |
|-|-|-|
| a | `any[]` | First array. |
| b | `any[]` | Second array. |

**Return** [`DiffResult`](#DiffResult).

### DiffResult

Object containing deletions, insertions and common elements.

| Prop | Type | Description |
|-|-|-|
| common | `any[]` | Elements common to both arrays. |
| deletions | `any[]` | Elements exclusive to first array. |
| insertions | `any[]` | Elements exclusive to second array. |

### Example

```js
const a = [1, 2, 3];
const b = [3, 4, 5];

const differences = ArrayUtils.diff(a, b);

differences ≡ {
	common: [3],
	deletions: [1, 2],
	insertions: [4, 5],
}
```
