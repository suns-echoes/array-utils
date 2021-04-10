union
-----
<!-- DEFINE @_SHORT_DESC="get elements from all arrays but excludes duplicates" -->

Import/require path:
`@suns-echoes/array-utils/utils/<!-- @_UTIL_FILE_PATH -->`

Returns a new array with elements from all arrays but excludes duplicates.
This method takes at least two arrays.

| Param | Type | Description |
|-|-|-|
| arrays | `any[][]` | The list of arrays. |

**Return** `any[]`.

### Example

```js
const a = [1, 2, 3];
const b = [2, 3, 4];
const c = [3, 4, 5];

const result = ArrayUtils.union(a, b, c);

result ≡ [1, 2, 3, 4, 5];
```
