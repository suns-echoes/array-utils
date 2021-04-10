range
-----
<!-- DEFINE @_SHORT_DESC="new array with range from start to stop (exclusive) values" -->

Import/require path:
`@suns-echoes/array-utils/utils/<!-- @_UTIL_FILE_PATH -->`

Returns an array of numbers from start value (inclusive) to end value (exclusive).
Consecutive numbers are increased (or decreased) by the step value.

| Param | Type | Description |
|-|-|-|
| start | `number` | Start value. |
| stop | `number` | Stop beforethis value. |
| [step] | `number` | Optional step value. Default is 1. |

**Return** `number[]`.

### Example

```js
const array = ArrayUtils.range(3, 4, 0.2);

array ≡ [3, 3.2, 3.4, 3.6, 3.8];
```
