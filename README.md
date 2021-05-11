array-utils
===========

The `array-utils` library adds new methods for array creation, modification
and other operations.


Installation
------------

Using npm:

```
npm i @suns-echoes/array-utils

npm i --save-dev @suns-echoes/array-utils
```


Usage
-----

As Node.js module (CJS):

```js
// Default import of the entire library:
const ArrayUtils = require('@suns-echoes/array-utils/cjs');
// Named import of the entire library:
const { ArrayUtils } = require('@suns-echoes/array-utils/cjs/array-utils');

// Import single util:
const { diff } = require('@suns-echoes/array-utils/cjs/utils/compare/diff');
```

As ES6 module (ESM):

```js
// Default import of the entire library:
import ArrayUtils from '@suns-echoes/array-utils/esm/index.js';
// Named import of the entire library:
import { ArrayUtils } from '@suns-echoes/array-utils/esm/array-utils.js';

// Import single util:
import { diff } from '@suns-echoes/array-utils/esm/utils/compare/diff.js';
```


ToC
---

<!-- @_METHOD_LIST -->


Methods
-------

<!-- @_METHOD_DOCUMENTATIONS -->


License
-------

Licensed under MIT

Copyright (c) 2020-2021 Aneta Suns
