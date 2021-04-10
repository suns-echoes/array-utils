shuffle
-------
<!-- DEFINE @_SHORT_DESC="shuffle array elements" -->

Import/require path:
`@suns-echoes/array-utils/utils/<!-- @_UTIL_FILE_PATH -->`

Rearranges the elements in the range from start to end (exclusive) randomly, using random number generator.
It modifies original array and returns it.

| Param | Type | Description |
|-|-|-|
| array | `any[]` | Array to modify. |
| [start] | `number` | Optional. Start from this index. Default is 0. |
| [end] | `number` | Optional. End before this index. Default is array length. |
| [random] | `number` | Optional random function. Must return value between 0 and 1 (exclusive). Default is Math.random. |

**Return** `any[]`.

### Example

```js
const result = ArrayUtils.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 6);

result ≡ [1, 2, 3, 6, 4, 5, 7, 8, 9];
```
