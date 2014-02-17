# Disallow Use of underscore methods which exist in ES5


```js
_.map([1,2.3], function(item) { return ii;});
_([1,2.3]).map(function(item) { return ii;});
```

## Rule Details

## When Not To Use It

When using IE <9 and not using ES5-Shim.

## Further Reading

https://github.com/es-shims/es5-shim
