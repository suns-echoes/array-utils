exclusive
---------
<!-- DEFINE @_SHORT_DESC="get non-intersecting elements from arrays" -->

Import/require path:
`@suns-echoes/array-utils/utils/<!-- @_UTIL_FILE_PATH -->`

Returns new array containing non-intersecting elements from arrays.
This method takes at least two arrays.

| Param | Type | Description |
|-|-|-|
| arrays | `any[][]` | The list of arrays. |

**Return** `any[]`.

### Example

```js
const a = [1, 2, 3];
const b = [2, 4, 6];
const c = [3, 5, 7];

const result = ArrayUtils.exclusive(a, b, c);

result ≡ [1, 4, 6, 5, 7];
```
