isSparse
--------
<!-- DEFINE @_SHORT_DESC="check if array is sparse (has empty elements)" -->

Import/require path:
`@suns-echoes/array-utils/utils/<!-- @_UTIL_FILE_PATH -->`

Returns true if array is sparse (has empty elements), otherwise return false.

| Param | Type | Description |
|-|-|-|
| array | `any[]` | Array to be checked. |

**Return** `boolean`.

### Example

```js
const array = new Array(3);

array[2] = 1;

const result = ArrayUtils.isSparse(array);

result ≡ true;
```
