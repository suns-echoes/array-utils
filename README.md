Array Utilities
===============

`array-utils` library add new methods for array manipulation.


Installation
------------

`npm i @suns-echoes/array-utils`


Import
------

#### as Node.js module (CJS)

```js
// Import full library minimized distribution file:
import ArrayUtils from '@suns-echoes/array-utils';

// Import library from source:
import ArrayUtils from '@suns-echoes/array-utils/cjs';
// or named:
import { ArrayUtils } from '@suns-echoes/array-utils/cjs/array-utils';

// Import single util:
import { diff } from '@suns-echoes/array-utils/cjs/utils/diff';
```

#### as ES6 module (ESM)

```js
// Import library from source:
import ArrayUtils from '@suns-echoes/array-utils/esm/index.js';
// or named:
import { ArrayUtils } from '@suns-echoes/array-utils/esm/array-utils.js';

// Import single util:
import { diff } from '@suns-echoes/array-utils/esm/utils/diff.js';
```


Methods
-------

* [amoeba-sort](./docs/utils/amoeba-sort.md) - sort array in amoeba grow style
* [diff](./docs/utils/diff.md) - find differences between arrays
* [difference](./docs/utils/difference.md) - get items unique to first input array
* [exclusive](./docs/utils/exclusive.md) - get non-intersecting items from input arrays
* [intersect](./docs/utils/intersect.md) - get items common to all input arrays
* [union](./docs/utils/union.md) - get unique items from input arrays


License
-------

Licensed under MIT

Copyright (c) 2021 Aneta Suns
