# React Pretty Number

Render pretty numbers with a suffix.


## Usage

```javascript
const PrettyNumber = require('react-pretty-number');
```

Then:

```html
<PrettyNumber number={1000} /> <!-- 1K -->
<PrettyNumber number={1500} /> <!-- 1.5K -->

<PrettyNumber number={100000} /> <!-- 100K -->
<PrettyNumber number={139000} /> <!-- 139K -->

<PrettyNumber number={1000000} /> <!-- 1M -->
<PrettyNumber number={1490000} /> <!-- 1.5M -->
```

You can also optionally supply an array of units (the default units are `['', 'K', 'M', 'B', 'T', 'Q']`):

```html
<PrettyNumber number={1000} units={['', 'KB', 'GB']} /> <!-- 1KB -->
<PrettyNumber number={1500} units={['', 'KB', 'GB']} /> <!-- 1.5KB -->

<PrettyNumber number={100000} units={['', 'KB', 'GB']} /> <!-- 100KB -->
<PrettyNumber number={139000} units={['', 'KB', 'GB']} /> <!-- 139KB -->

<PrettyNumber number={1000000} units={['', 'KB', 'GB']} /> <!-- 1GB -->
<PrettyNumber number={1490000} units={['', 'KB', 'GB']} /> <!-- 1.5GB -->
```
