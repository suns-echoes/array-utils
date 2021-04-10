padStart
--------
<!-- DEFINE @_SHORT_DESC="add padding at the beginning of the array" -->

Import/require path:
`@suns-echoes/array-utils/utils/<!-- @_UTIL_FILE_PATH -->`

Pads the array with static value until it reaches the given length.
The padding is applied to the start of the array.
It modifies original array and returns it.

| Param | Type | Description |
|-|-|-|
| array | `any[]` | Array to be modified. |
| maxLength | `number` | Desired length of array. |
| [fillValue] | `any` | Optional value for padding. |

**Return** `any[]`.

### Example

```js
const array = ArrayUtils.padStart([1, 2], 4, 0);

array ≡ [0, 0, 1, 2];
```
