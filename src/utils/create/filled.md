filled
------
<!-- DEFINE @_SHORT_DESC="new array filled with static value" -->

Import/require path:
`@suns-echoes/array-utils/utils/<!-- @_UTIL_FILE_PATH -->`

Returns new array with given number of elements with static value.

| Param | Type | Description |
|-|-|-|
| length | `number` | The length of the array. |
| [value] | `any` | Optional value to fill the array with. |

**Return** `any[]`.

### Example

```js
const array = ArrayUtils.filled(3, 'N');

array ≡ ['N', 'N', 'N'];
```
