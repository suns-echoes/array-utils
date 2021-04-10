intersect
---------
<!-- DEFINE @_SHORT_DESC="get elements common to all input arrays" -->

Import/require path:
`@suns-echoes/array-utils/utils/<!-- @_UTIL_FILE_PATH -->`

Returns new array containing elements common to all input arrays.
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

const result = ArrayUtils.intersect(a, b, c);

result ≡ [3];
```
