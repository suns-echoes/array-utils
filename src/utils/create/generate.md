generate
--------
<!-- DEFINE @_SHORT_DESC="new array filled with dynamically generated values" -->

Import/require path:
`@suns-echoes/array-utils/utils/<!-- @_UTIL_FILE_PATH -->`

Returns new array with given number of elements with dynamically generated values.

| Param | Type | Description |
|-|-|-|
| length | `number` | The length of the array. |
| generator | `ValueGenerator` | Value generator function. |

**Return** `any[]`.

### ValueGenerator

Returns value for element index.

| Param | Type | Description |
|-|-|-|
| index | `number` | Element index. |

**Return** `any`.


### Example

```js
const array = ArrayUtils.filled(3, (index) => i * 2);

array ≡ [0, 2, 4];
```
