# dev-console
disable window console log functions in production mode.


> This is just a simple wrapper for window console functions, make them dump in production mode.

## Install 

```html
<script src="https://cdn.rawgit.com/minhlucvan/dev-console/master/console.js"></script>
<script>
  window.DEBUG = true;
  console.log("oh, is is the DEBUG mode."); // working as normal
  
  window.DEBUG = false;
  console.log("oh, is is not the DEBUG mode."); //nothing be logged
 
</script>

```

## Supported functions

I wrapped ``console.log`` and ``console.debug`` functions, the other such as ``console.warn``, ``console.info`` ``console.error``are working as normal.

## Force logging

In case you want to log in production mode you can use ``console.flog`` and ``cosole.fdebug`` to call the original functions. 


### happy coding :heart:
