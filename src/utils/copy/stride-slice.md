strideSlice
-----------
<!-- DEFINE @_SHORT_DESC="copy of strides from the source array" -->

Import/require path:
`@suns-echoes/array-utils/utils/<!-- @_UTIL_FILE_PATH -->`

Copies strides from source array into destination array.

| Param | Type | Description |
|-|-|-|
| src | `any[]` | Source array. |
| srcOffset | `number` | Index at which to start reading data. A negative index can be used, indicating an offset from the end of the sequence. |
| srcStride | `number` | Length of source stride. |
| dest | `any[]` | Destination array. |
| destOffset | `number` | Index at which to start writing data. A negative index can be used, indicating an offset from the end of the sequence. |
| destStride | `number` | Length of destination stride. |
| blockLength | `number` | Length of data block that will be copied. |
| blockCount | `number` | Number of blocks to copy. |
| defaultValue | `number` | Overwrites elements in stride of destination array between block end and stride end. If omitted original value will be preserved. |
| allowToExtendDest | `boolean` | Allows to expand destination array. |

**Return** `any[]`.

### Example

```js

TODO:

const src = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
const srcOffset = 0;
const srcStride = 4;
const destStride = 5;
const blockLength = 3;
const blockCount = 3;

const result = ArrayUtils.strideSlice(src, srcOffset, srcStride, destStride, blockLength, blockCount, '-');

result ≡ ['A', 'B', 'C', '-', '-', 'E', 'F', 'G', '-', '-', 'I', 'J', 'K', '-', '-'];
```
