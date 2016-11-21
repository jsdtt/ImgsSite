/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _vueRouter = __webpack_require__(3);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _App = __webpack_require__(4);

	var _App2 = _interopRequireDefault(_App);

	var _Lading = __webpack_require__(6);

	var _Lading2 = _interopRequireDefault(_Lading);

	var _Categories = __webpack_require__(56);

	var _Categories2 = _interopRequireDefault(_Categories);

	var _Album = __webpack_require__(65);

	var _Album2 = _interopRequireDefault(_Album);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_vueRouter2.default);

	var router = new _vueRouter2.default({
	    routes: [{
	        path: '/',
	        component: _Lading2.default
	    }, {
	        path: '/category/:name',
	        component: _Categories2.default
	    }, {
	        path: '/album/:key',
	        component: _Album2.default
	    }]
	});

	new _vue2.default({
	    el: '#app',
	    router: router,
	    render: function render(h) {
	        return h('router-view');
	    }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*!
	 * Vue.js v2.0.5
	 * (c) 2014-2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';

	/*  */

	/**
	 * Convert a value to a string that is actually rendered.
	 */
	function _toString (val) {
	  return val == null
	    ? ''
	    : typeof val === 'object'
	      ? JSON.stringify(val, null, 2)
	      : String(val)
	}

	/**
	 * Convert a input value to a number for persistence.
	 * If the conversion fails, return original string.
	 */
	function toNumber (val) {
	  var n = parseFloat(val, 10);
	  return (n || n === 0) ? n : val
	}

	/**
	 * Make a map and return a function for checking if a key
	 * is in that map.
	 */
	function makeMap (
	  str,
	  expectsLowerCase
	) {
	  var map = Object.create(null);
	  var list = str.split(',');
	  for (var i = 0; i < list.length; i++) {
	    map[list[i]] = true;
	  }
	  return expectsLowerCase
	    ? function (val) { return map[val.toLowerCase()]; }
	    : function (val) { return map[val]; }
	}

	/**
	 * Check if a tag is a built-in tag.
	 */
	var isBuiltInTag = makeMap('slot,component', true);

	/**
	 * Remove an item from an array
	 */
	function remove$1 (arr, item) {
	  if (arr.length) {
	    var index = arr.indexOf(item);
	    if (index > -1) {
	      return arr.splice(index, 1)
	    }
	  }
	}

	/**
	 * Check whether the object has the property.
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn (obj, key) {
	  return hasOwnProperty.call(obj, key)
	}

	/**
	 * Check if value is primitive
	 */
	function isPrimitive (value) {
	  return typeof value === 'string' || typeof value === 'number'
	}

	/**
	 * Create a cached version of a pure function.
	 */
	function cached (fn) {
	  var cache = Object.create(null);
	  return function cachedFn (str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str))
	  }
	}

	/**
	 * Camelize a hyphen-delmited string.
	 */
	var camelizeRE = /-(\w)/g;
	var camelize = cached(function (str) {
	  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
	});

	/**
	 * Capitalize a string.
	 */
	var capitalize = cached(function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1)
	});

	/**
	 * Hyphenate a camelCase string.
	 */
	var hyphenateRE = /([^-])([A-Z])/g;
	var hyphenate = cached(function (str) {
	  return str
	    .replace(hyphenateRE, '$1-$2')
	    .replace(hyphenateRE, '$1-$2')
	    .toLowerCase()
	});

	/**
	 * Simple bind, faster than native
	 */
	function bind$1 (fn, ctx) {
	  function boundFn (a) {
	    var l = arguments.length;
	    return l
	      ? l > 1
	        ? fn.apply(ctx, arguments)
	        : fn.call(ctx, a)
	      : fn.call(ctx)
	  }
	  // record original fn length
	  boundFn._length = fn.length;
	  return boundFn
	}

	/**
	 * Convert an Array-like object to a real Array.
	 */
	function toArray (list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret
	}

	/**
	 * Mix properties into target object.
	 */
	function extend (to, _from) {
	  for (var key in _from) {
	    to[key] = _from[key];
	  }
	  return to
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */
	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 */
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	function isPlainObject (obj) {
	  return toString.call(obj) === OBJECT_STRING
	}

	/**
	 * Merge an Array of Objects into a single Object.
	 */
	function toObject (arr) {
	  var res = {};
	  for (var i = 0; i < arr.length; i++) {
	    if (arr[i]) {
	      extend(res, arr[i]);
	    }
	  }
	  return res
	}

	/**
	 * Perform no operation.
	 */
	function noop () {}

	/**
	 * Always return false.
	 */
	var no = function () { return false; };

	/**
	 * Generate a static keys string from compiler modules.
	 */
	function genStaticKeys (modules) {
	  return modules.reduce(function (keys, m) {
	    return keys.concat(m.staticKeys || [])
	  }, []).join(',')
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 */
	function looseEqual (a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (
	    isObject(a) && isObject(b)
	      ? JSON.stringify(a) === JSON.stringify(b)
	      : false
	  )
	  /* eslint-enable eqeqeq */
	}

	function looseIndexOf (arr, val) {
	  for (var i = 0; i < arr.length; i++) {
	    if (looseEqual(arr[i], val)) { return i }
	  }
	  return -1
	}

	/*  */

	var config = {
	  /**
	   * Option merge strategies (used in core/util/options)
	   */
	  optionMergeStrategies: Object.create(null),

	  /**
	   * Whether to suppress warnings.
	   */
	  silent: false,

	  /**
	   * Whether to enable devtools
	   */
	  devtools: process.env.NODE_ENV !== 'production',

	  /**
	   * Error handler for watcher errors
	   */
	  errorHandler: null,

	  /**
	   * Ignore certain custom elements
	   */
	  ignoredElements: null,

	  /**
	   * Custom user key aliases for v-on
	   */
	  keyCodes: Object.create(null),

	  /**
	   * Check if a tag is reserved so that it cannot be registered as a
	   * component. This is platform-dependent and may be overwritten.
	   */
	  isReservedTag: no,

	  /**
	   * Check if a tag is an unknown element.
	   * Platform-dependent.
	   */
	  isUnknownElement: no,

	  /**
	   * Get the namespace of an element
	   */
	  getTagNamespace: noop,

	  /**
	   * Check if an attribute must be bound using property, e.g. value
	   * Platform-dependent.
	   */
	  mustUseProp: no,

	  /**
	   * List of asset types that a component can own.
	   */
	  _assetTypes: [
	    'component',
	    'directive',
	    'filter'
	  ],

	  /**
	   * List of lifecycle hooks.
	   */
	  _lifecycleHooks: [
	    'beforeCreate',
	    'created',
	    'beforeMount',
	    'mounted',
	    'beforeUpdate',
	    'updated',
	    'beforeDestroy',
	    'destroyed',
	    'activated',
	    'deactivated'
	  ],

	  /**
	   * Max circular updates allowed in a scheduler flush cycle.
	   */
	  _maxUpdateCount: 100,

	  /**
	   * Server rendering?
	   */
	  _isServer: process.env.VUE_ENV === 'server'
	};

	/*  */

	/**
	 * Check if a string starts with $ or _
	 */
	function isReserved (str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F
	}

	/**
	 * Define a property.
	 */
	function def (obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Parse simple path.
	 */
	var bailRE = /[^\w.$]/;
	function parsePath (path) {
	  if (bailRE.test(path)) {
	    return
	  } else {
	    var segments = path.split('.');
	    return function (obj) {
	      for (var i = 0; i < segments.length; i++) {
	        if (!obj) { return }
	        obj = obj[segments[i]];
	      }
	      return obj
	    }
	  }
	}

	/*  */
	/* globals MutationObserver */

	// can we use __proto__?
	var hasProto = '__proto__' in {};

	// Browser environment sniffing
	var inBrowser =
	  typeof window !== 'undefined' &&
	  Object.prototype.toString.call(window) !== '[object Object]';

	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && /msie|trident/.test(UA);
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isEdge = UA && UA.indexOf('edge/') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	/* istanbul ignore next */
	function isNative (Ctor) {
	  return /native code/.test(Ctor.toString())
	}

	/**
	 * Defer a task to execute it asynchronously.
	 */
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;

	  function nextTickHandler () {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks.length = 0;
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }

	  // the nextTick behavior leverages the microtask queue, which can be accessed
	  // via either native Promise.then or MutationObserver.
	  // MutationObserver has wider support, however it is seriously bugged in
	  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
	  // completely stops working after triggering a few times... so, if native
	  // Promise is available, we will use it:
	  /* istanbul ignore if */
	  if (typeof Promise !== 'undefined' && isNative(Promise)) {
	    var p = Promise.resolve();
	    timerFunc = function () {
	      p.then(nextTickHandler);
	      // in problematic UIWebViews, Promise.then doesn't completely break, but
	      // it can get stuck in a weird state where callbacks are pushed into the
	      // microtask queue but the queue isn't being flushed, until the browser
	      // needs to do some other work, e.g. handle a timer. Therefore we can
	      // "force" the microtask queue to be flushed by adding an empty timer.
	      if (isIOS) { setTimeout(noop); }
	    };
	  } else if (typeof MutationObserver !== 'undefined' && (
	    isNative(MutationObserver) ||
	    // PhantomJS and iOS 7.x
	    MutationObserver.toString() === '[object MutationObserverConstructor]'
	  )) {
	    // use MutationObserver where native Promise is not available,
	    // e.g. PhantomJS IE11, iOS7, Android 4.4
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(String(counter));
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = String(counter);
	    };
	  } else {
	    // fallback to setTimeout
	    /* istanbul ignore next */
	    timerFunc = function () {
	      setTimeout(nextTickHandler, 0);
	    };
	  }

	  return function queueNextTick (cb, ctx) {
	    var func = ctx
	      ? function () { cb.call(ctx); }
	      : cb;
	    callbacks.push(func);
	    if (!pending) {
	      pending = true;
	      timerFunc();
	    }
	  }
	})();

	var _Set;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = (function () {
	    function Set () {
	      this.set = Object.create(null);
	    }
	    Set.prototype.has = function has (key) {
	      return this.set[key] !== undefined
	    };
	    Set.prototype.add = function add (key) {
	      this.set[key] = 1;
	    };
	    Set.prototype.clear = function clear () {
	      this.set = Object.create(null);
	    };

	    return Set;
	  }());
	}

	/* not type checking this file because flow doesn't play well with Proxy */

	var hasProxy;
	var proxyHandlers;
	var initProxy;

	if (process.env.NODE_ENV !== 'production') {
	  var allowedGlobals = makeMap(
	    'Infinity,undefined,NaN,isFinite,isNaN,' +
	    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
	    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
	    'require' // for Webpack/Browserify
	  );

	  hasProxy =
	    typeof Proxy !== 'undefined' &&
	    Proxy.toString().match(/native code/);

	  proxyHandlers = {
	    has: function has (target, key) {
	      var has = key in target;
	      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
	      if (!has && !isAllowed) {
	        warn(
	          "Property or method \"" + key + "\" is not defined on the instance but " +
	          "referenced during render. Make sure to declare reactive data " +
	          "properties in the data option.",
	          target
	        );
	      }
	      return has || !isAllowed
	    }
	  };

	  initProxy = function initProxy (vm) {
	    if (hasProxy) {
	      vm._renderProxy = new Proxy(vm, proxyHandlers);
	    } else {
	      vm._renderProxy = vm;
	    }
	  };
	}

	/*  */


	var uid$2 = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */
	var Dep = function Dep () {
	  this.id = uid$2++;
	  this.subs = [];
	};

	Dep.prototype.addSub = function addSub (sub) {
	  this.subs.push(sub);
	};

	Dep.prototype.removeSub = function removeSub (sub) {
	  remove$1(this.subs, sub);
	};

	Dep.prototype.depend = function depend () {
	  if (Dep.target) {
	    Dep.target.addDep(this);
	  }
	};

	Dep.prototype.notify = function notify () {
	  // stablize the subscriber list first
	  var subs = this.subs.slice();
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	var targetStack = [];

	function pushTarget (_target) {
	  if (Dep.target) { targetStack.push(Dep.target); }
	  Dep.target = _target;
	}

	function popTarget () {
	  Dep.target = targetStack.pop();
	}

	/*  */


	var queue = [];
	var has$1 = {};
	var circular = {};
	var waiting = false;
	var flushing = false;
	var index = 0;

	/**
	 * Reset the scheduler's state.
	 */
	function resetSchedulerState () {
	  queue.length = 0;
	  has$1 = {};
	  if (process.env.NODE_ENV !== 'production') {
	    circular = {};
	  }
	  waiting = flushing = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */
	function flushSchedulerQueue () {
	  flushing = true;

	  // Sort queue before flush.
	  // This ensures that:
	  // 1. Components are updated from parent to child. (because parent is always
	  //    created before the child)
	  // 2. A component's user watchers are run before its render watcher (because
	  //    user watchers are created before the render watcher)
	  // 3. If a component is destroyed during a parent component's watcher run,
	  //    its watchers can be skipped.
	  queue.sort(function (a, b) { return a.id - b.id; });

	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (index = 0; index < queue.length; index++) {
	    var watcher = queue[index];
	    var id = watcher.id;
	    has$1[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has$1[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn(
	          'You may have an infinite update loop ' + (
	            watcher.user
	              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
	              : "in a component render function."
	          ),
	          watcher.vm
	        );
	        break
	      }
	    }
	  }

	  // devtool hook
	  /* istanbul ignore if */
	  if (devtools && config.devtools) {
	    devtools.emit('flush');
	  }

	  resetSchedulerState();
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 */
	function queueWatcher (watcher) {
	  var id = watcher.id;
	  if (has$1[id] == null) {
	    has$1[id] = true;
	    if (!flushing) {
	      queue.push(watcher);
	    } else {
	      // if already flushing, splice the watcher based on its id
	      // if already past its id, it will be run next immediately.
	      var i = queue.length - 1;
	      while (i >= 0 && queue[i].id > watcher.id) {
	        i--;
	      }
	      queue.splice(Math.max(i, index) + 1, 0, watcher);
	    }
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushSchedulerQueue);
	    }
	  }
	}

	/*  */

	var uid$1 = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 */
	var Watcher = function Watcher (
	  vm,
	  expOrFn,
	  cb,
	  options
	) {
	  if ( options === void 0 ) options = {};

	  this.vm = vm;
	  vm._watchers.push(this);
	  // options
	  this.deep = !!options.deep;
	  this.user = !!options.user;
	  this.lazy = !!options.lazy;
	  this.sync = !!options.sync;
	  this.expression = expOrFn.toString();
	  this.cb = cb;
	  this.id = ++uid$1; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  // parse expression for getter
	  if (typeof expOrFn === 'function') {
	    this.getter = expOrFn;
	  } else {
	    this.getter = parsePath(expOrFn);
	    if (!this.getter) {
	      this.getter = function () {};
	      process.env.NODE_ENV !== 'production' && warn(
	        "Failed watching path: \"" + expOrFn + "\" " +
	        'Watcher only accepts simple dot-delimited paths. ' +
	        'For full control, use a function instead.',
	        vm
	      );
	    }
	  }
	  this.value = this.lazy
	    ? undefined
	    : this.get();
	};

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	Watcher.prototype.get = function get () {
	  pushTarget(this);
	  var value = this.getter.call(this.vm, this.vm);
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  popTarget();
	  this.cleanupDeps();
	  return value
	};

	/**
	 * Add a dependency to this directive.
	 */
	Watcher.prototype.addDep = function addDep (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Clean up for dependency collection.
	 */
	Watcher.prototype.cleanupDeps = function cleanupDeps () {
	    var this$1 = this;

	  var i = this.deps.length;
	  while (i--) {
	    var dep = this$1.deps[i];
	    if (!this$1.newDepIds.has(dep.id)) {
	      dep.removeSub(this$1);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 */
	Watcher.prototype.update = function update () {
	  /* istanbul ignore else */
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync) {
	    this.run();
	  } else {
	    queueWatcher(this);
	  }
	};

	/**
	 * Scheduler job interface.
	 * Will be called by the scheduler.
	 */
	Watcher.prototype.run = function run () {
	  if (this.active) {
	    var value = this.get();
	      if (
	        value !== this.value ||
	      // Deep watchers and watchers on Object/Arrays should fire even
	      // when the value is the same, because the value may
	      // have mutated.
	      isObject(value) ||
	      this.deep
	    ) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      if (this.user) {
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          process.env.NODE_ENV !== 'production' && warn(
	            ("Error in watcher \"" + (this.expression) + "\""),
	            this.vm
	          );
	          /* istanbul ignore else */
	          if (config.errorHandler) {
	            config.errorHandler.call(null, e, this.vm);
	          } else {
	            throw e
	          }
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	Watcher.prototype.evaluate = function evaluate () {
	  this.value = this.get();
	  this.dirty = false;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */
	Watcher.prototype.depend = function depend () {
	    var this$1 = this;

	  var i = this.deps.length;
	  while (i--) {
	    this$1.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subscriber list.
	 */
	Watcher.prototype.teardown = function teardown () {
	    var this$1 = this;

	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      remove$1(this.vm._watchers, this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this$1.deps[i].removeSub(this$1);
	    }
	    this.active = false;
	  }
	};

	/**
	 * Recursively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 */
	var seenObjects = new _Set();
	function traverse (val) {
	  seenObjects.clear();
	  _traverse(val, seenObjects);
	}

	function _traverse (val, seen) {
	  var i, keys;
	  var isA = Array.isArray(val);
	  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
	    return
	  }
	  if (val.__ob__) {
	    var depId = val.__ob__.dep.id;
	    if (seen.has(depId)) {
	      return
	    }
	    seen.add(depId);
	  }
	  if (isA) {
	    i = val.length;
	    while (i--) { _traverse(val[i], seen); }
	  } else {
	    keys = Object.keys(val);
	    i = keys.length;
	    while (i--) { _traverse(val[keys[i]], seen); }
	  }
	}

	/*
	 * not type checking this file because flow doesn't play well with
	 * dynamically accessing methods on Array prototype
	 */

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto);[
	  'push',
	  'pop',
	  'shift',
	  'unshift',
	  'splice',
	  'sort',
	  'reverse'
	]
	.forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator () {
	    var arguments$1 = arguments;

	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments$1[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break
	      case 'unshift':
	        inserted = args;
	        break
	      case 'splice':
	        inserted = args.slice(2);
	        break
	    }
	    if (inserted) { ob.observeArray(inserted); }
	    // notify change
	    ob.dep.notify();
	    return result
	  });
	});

	/*  */

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However when passing down props,
	 * we don't want to force conversion because the value may be a nested value
	 * under a frozen data structure. Converting it would defeat the optimization.
	 */
	var observerState = {
	  shouldConvert: true,
	  isSettingProps: false
	};

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 */
	var Observer = function Observer (value) {
	  this.value = value;
	  this.dep = new Dep();
	  this.vmCount = 0;
	  def(value, '__ob__', this);
	  if (Array.isArray(value)) {
	    var augment = hasProto
	      ? protoAugment
	      : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	};

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 */
	Observer.prototype.walk = function walk (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0; i < keys.length; i++) {
	    defineReactive$$1(obj, keys[i], obj[keys[i]]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 */
	Observer.prototype.observeArray = function observeArray (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 */
	function protoAugment (target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * istanbul ignore next
	 */
	function copyAugment (target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 */
	function observe (value) {
	  if (!isObject(value)) {
	    return
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (
	    observerState.shouldConvert &&
	    !config._isServer &&
	    (Array.isArray(value) || isPlainObject(value)) &&
	    Object.isExtensible(value) &&
	    !value._isVue
	  ) {
	    ob = new Observer(value);
	  }
	  return ob
	}

	/**
	 * Define a reactive property on an Object.
	 */
	function defineReactive$$1 (
	  obj,
	  key,
	  val,
	  customSetter
	) {
	  var dep = new Dep();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;

	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter () {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (Array.isArray(value)) {
	          dependArray(value);
	        }
	      }
	      return value
	    },
	    set: function reactiveSetter (newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return
	      }
	      if (process.env.NODE_ENV !== 'production' && customSetter) {
	        customSetter();
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}

	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 */
	function set (obj, key, val) {
	  if (Array.isArray(obj)) {
	    obj.length = Math.max(obj.length, key);
	    obj.splice(key, 1, val);
	    return val
	  }
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return
	  }
	  var ob = obj.__ob__;
	  if (obj._isVue || (ob && ob.vmCount)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Avoid adding reactive properties to a Vue instance or its root $data ' +
	      'at runtime - declare it upfront in the data option.'
	    );
	    return
	  }
	  if (!ob) {
	    obj[key] = val;
	    return
	  }
	  defineReactive$$1(ob.value, key, val);
	  ob.dep.notify();
	  return val
	}

	/**
	 * Delete a property and trigger change if necessary.
	 */
	function del (obj, key) {
	  var ob = obj.__ob__;
	  if (obj._isVue || (ob && ob.vmCount)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Avoid deleting properties on a Vue instance or its root $data ' +
	      '- just set it to null.'
	    );
	    return
	  }
	  if (!hasOwn(obj, key)) {
	    return
	  }
	  delete obj[key];
	  if (!ob) {
	    return
	  }
	  ob.dep.notify();
	}

	/**
	 * Collect dependencies on array elements when the array is touched, since
	 * we cannot intercept array element access like property getters.
	 */
	function dependArray (value) {
	  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
	    e = value[i];
	    e && e.__ob__ && e.__ob__.dep.depend();
	    if (Array.isArray(e)) {
	      dependArray(e);
	    }
	  }
	}

	/*  */

	function initState (vm) {
	  vm._watchers = [];
	  initProps(vm);
	  initData(vm);
	  initComputed(vm);
	  initMethods(vm);
	  initWatch(vm);
	}

	function initProps (vm) {
	  var props = vm.$options.props;
	  if (props) {
	    var propsData = vm.$options.propsData || {};
	    var keys = vm.$options._propKeys = Object.keys(props);
	    var isRoot = !vm.$parent;
	    // root instance props should be converted
	    observerState.shouldConvert = isRoot;
	    var loop = function ( i ) {
	      var key = keys[i];
	      /* istanbul ignore else */
	      if (process.env.NODE_ENV !== 'production') {
	        defineReactive$$1(vm, key, validateProp(key, props, propsData, vm), function () {
	          if (vm.$parent && !observerState.isSettingProps) {
	            warn(
	              "Avoid mutating a prop directly since the value will be " +
	              "overwritten whenever the parent component re-renders. " +
	              "Instead, use a data or computed property based on the prop's " +
	              "value. Prop being mutated: \"" + key + "\"",
	              vm
	            );
	          }
	        });
	      } else {
	        defineReactive$$1(vm, key, validateProp(key, props, propsData, vm));
	      }
	    };

	    for (var i = 0; i < keys.length; i++) loop( i );
	    observerState.shouldConvert = true;
	  }
	}

	function initData (vm) {
	  var data = vm.$options.data;
	  data = vm._data = typeof data === 'function'
	    ? data.call(vm)
	    : data || {};
	  if (!isPlainObject(data)) {
	    data = {};
	    process.env.NODE_ENV !== 'production' && warn(
	      'data functions should return an object.',
	      vm
	    );
	  }
	  // proxy data on instance
	  var keys = Object.keys(data);
	  var props = vm.$options.props;
	  var i = keys.length;
	  while (i--) {
	    if (props && hasOwn(props, keys[i])) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
	        "Use prop default value instead.",
	        vm
	      );
	    } else {
	      proxy(vm, keys[i]);
	    }
	  }
	  // observe data
	  observe(data);
	  data.__ob__ && data.__ob__.vmCount++;
	}

	var computedSharedDefinition = {
	  enumerable: true,
	  configurable: true,
	  get: noop,
	  set: noop
	};

	function initComputed (vm) {
	  var computed = vm.$options.computed;
	  if (computed) {
	    for (var key in computed) {
	      var userDef = computed[key];
	      if (typeof userDef === 'function') {
	        computedSharedDefinition.get = makeComputedGetter(userDef, vm);
	        computedSharedDefinition.set = noop;
	      } else {
	        computedSharedDefinition.get = userDef.get
	          ? userDef.cache !== false
	            ? makeComputedGetter(userDef.get, vm)
	            : bind$1(userDef.get, vm)
	          : noop;
	        computedSharedDefinition.set = userDef.set
	          ? bind$1(userDef.set, vm)
	          : noop;
	      }
	      Object.defineProperty(vm, key, computedSharedDefinition);
	    }
	  }
	}

	function makeComputedGetter (getter, owner) {
	  var watcher = new Watcher(owner, getter, noop, {
	    lazy: true
	  });
	  return function computedGetter () {
	    if (watcher.dirty) {
	      watcher.evaluate();
	    }
	    if (Dep.target) {
	      watcher.depend();
	    }
	    return watcher.value
	  }
	}

	function initMethods (vm) {
	  var methods = vm.$options.methods;
	  if (methods) {
	    for (var key in methods) {
	      vm[key] = methods[key] == null ? noop : bind$1(methods[key], vm);
	      if (process.env.NODE_ENV !== 'production') {
	        methods[key] == null && warn(
	          "method \"" + key + "\" has an undefined value in the component definition. " +
	          "Did you reference the function correctly?",
	          vm
	        );
	        hasOwn(Vue$1.prototype, key) && warn(
	          ("Avoid overriding Vue's internal method \"" + key + "\"."),
	          vm
	        );
	      }
	    }
	  }
	}

	function initWatch (vm) {
	  var watch = vm.$options.watch;
	  if (watch) {
	    for (var key in watch) {
	      var handler = watch[key];
	      if (Array.isArray(handler)) {
	        for (var i = 0; i < handler.length; i++) {
	          createWatcher(vm, key, handler[i]);
	        }
	      } else {
	        createWatcher(vm, key, handler);
	      }
	    }
	  }
	}

	function createWatcher (vm, key, handler) {
	  var options;
	  if (isPlainObject(handler)) {
	    options = handler;
	    handler = handler.handler;
	  }
	  if (typeof handler === 'string') {
	    handler = vm[handler];
	  }
	  vm.$watch(key, handler, options);
	}

	function stateMixin (Vue) {
	  // flow somehow has problems with directly declared definition object
	  // when using Object.defineProperty, so we have to procedurally build up
	  // the object here.
	  var dataDef = {};
	  dataDef.get = function () {
	    return this._data
	  };
	  if (process.env.NODE_ENV !== 'production') {
	    dataDef.set = function (newData) {
	      warn(
	        'Avoid replacing instance root $data. ' +
	        'Use nested data properties instead.',
	        this
	      );
	    };
	  }
	  Object.defineProperty(Vue.prototype, '$data', dataDef);

	  Vue.prototype.$set = set;
	  Vue.prototype.$delete = del;

	  Vue.prototype.$watch = function (
	    expOrFn,
	    cb,
	    options
	  ) {
	    var vm = this;
	    options = options || {};
	    options.user = true;
	    var watcher = new Watcher(vm, expOrFn, cb, options);
	    if (options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn () {
	      watcher.teardown();
	    }
	  };
	}

	function proxy (vm, key) {
	  if (!isReserved(key)) {
	    Object.defineProperty(vm, key, {
	      configurable: true,
	      enumerable: true,
	      get: function proxyGetter () {
	        return vm._data[key]
	      },
	      set: function proxySetter (val) {
	        vm._data[key] = val;
	      }
	    });
	  }
	}

	/*  */

	var VNode = function VNode (
	  tag,
	  data,
	  children,
	  text,
	  elm,
	  ns,
	  context,
	  componentOptions
	) {
	  this.tag = tag;
	  this.data = data;
	  this.children = children;
	  this.text = text;
	  this.elm = elm;
	  this.ns = ns;
	  this.context = context;
	  this.functionalContext = undefined;
	  this.key = data && data.key;
	  this.componentOptions = componentOptions;
	  this.child = undefined;
	  this.parent = undefined;
	  this.raw = false;
	  this.isStatic = false;
	  this.isRootInsert = true;
	  this.isComment = false;
	  this.isCloned = false;
	  this.isOnce = false;
	};

	var emptyVNode = function () {
	  var node = new VNode();
	  node.text = '';
	  node.isComment = true;
	  return node
	};

	// optimized shallow clone
	// used for static nodes and slot nodes because they may be reused across
	// multiple renders, cloning them avoids errors when DOM manipulations rely
	// on their elm reference.
	function cloneVNode (vnode) {
	  var cloned = new VNode(
	    vnode.tag,
	    vnode.data,
	    vnode.children,
	    vnode.text,
	    vnode.elm,
	    vnode.ns,
	    vnode.context,
	    vnode.componentOptions
	  );
	  cloned.isStatic = vnode.isStatic;
	  cloned.key = vnode.key;
	  cloned.isCloned = true;
	  return cloned
	}

	function cloneVNodes (vnodes) {
	  var res = new Array(vnodes.length);
	  for (var i = 0; i < vnodes.length; i++) {
	    res[i] = cloneVNode(vnodes[i]);
	  }
	  return res
	}

	/*  */

	function mergeVNodeHook (def, hookKey, hook, key) {
	  key = key + hookKey;
	  var injectedHash = def.__injected || (def.__injected = {});
	  if (!injectedHash[key]) {
	    injectedHash[key] = true;
	    var oldHook = def[hookKey];
	    if (oldHook) {
	      def[hookKey] = function () {
	        oldHook.apply(this, arguments);
	        hook.apply(this, arguments);
	      };
	    } else {
	      def[hookKey] = hook;
	    }
	  }
	}

	/*  */

	function updateListeners (
	  on,
	  oldOn,
	  add,
	  remove$$1,
	  vm
	) {
	  var name, cur, old, fn, event, capture;
	  for (name in on) {
	    cur = on[name];
	    old = oldOn[name];
	    if (!cur) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "Invalid handler for event \"" + name + "\": got " + String(cur),
	        vm
	      );
	    } else if (!old) {
	      capture = name.charAt(0) === '!';
	      event = capture ? name.slice(1) : name;
	      if (Array.isArray(cur)) {
	        add(event, (cur.invoker = arrInvoker(cur)), capture);
	      } else {
	        if (!cur.invoker) {
	          fn = cur;
	          cur = on[name] = {};
	          cur.fn = fn;
	          cur.invoker = fnInvoker(cur);
	        }
	        add(event, cur.invoker, capture);
	      }
	    } else if (cur !== old) {
	      if (Array.isArray(old)) {
	        old.length = cur.length;
	        for (var i = 0; i < old.length; i++) { old[i] = cur[i]; }
	        on[name] = old;
	      } else {
	        old.fn = cur;
	        on[name] = old;
	      }
	    }
	  }
	  for (name in oldOn) {
	    if (!on[name]) {
	      event = name.charAt(0) === '!' ? name.slice(1) : name;
	      remove$$1(event, oldOn[name].invoker);
	    }
	  }
	}

	function arrInvoker (arr) {
	  return function (ev) {
	    var arguments$1 = arguments;

	    var single = arguments.length === 1;
	    for (var i = 0; i < arr.length; i++) {
	      single ? arr[i](ev) : arr[i].apply(null, arguments$1);
	    }
	  }
	}

	function fnInvoker (o) {
	  return function (ev) {
	    var single = arguments.length === 1;
	    single ? o.fn(ev) : o.fn.apply(null, arguments);
	  }
	}

	/*  */

	function normalizeChildren (
	  children,
	  ns,
	  nestedIndex
	) {
	  if (isPrimitive(children)) {
	    return [createTextVNode(children)]
	  }
	  if (Array.isArray(children)) {
	    var res = [];
	    for (var i = 0, l = children.length; i < l; i++) {
	      var c = children[i];
	      var last = res[res.length - 1];
	      //  nested
	      if (Array.isArray(c)) {
	        res.push.apply(res, normalizeChildren(c, ns, ((nestedIndex || '') + "_" + i)));
	      } else if (isPrimitive(c)) {
	        if (last && last.text) {
	          last.text += String(c);
	        } else if (c !== '') {
	          // convert primitive to vnode
	          res.push(createTextVNode(c));
	        }
	      } else if (c instanceof VNode) {
	        if (c.text && last && last.text) {
	          last.text += c.text;
	        } else {
	          // inherit parent namespace
	          if (ns) {
	            applyNS(c, ns);
	          }
	          // default key for nested array children (likely generated by v-for)
	          if (c.tag && c.key == null && nestedIndex != null) {
	            c.key = "__vlist" + nestedIndex + "_" + i + "__";
	          }
	          res.push(c);
	        }
	      }
	    }
	    return res
	  }
	}

	function createTextVNode (val) {
	  return new VNode(undefined, undefined, undefined, String(val))
	}

	function applyNS (vnode, ns) {
	  if (vnode.tag && !vnode.ns) {
	    vnode.ns = ns;
	    if (vnode.children) {
	      for (var i = 0, l = vnode.children.length; i < l; i++) {
	        applyNS(vnode.children[i], ns);
	      }
	    }
	  }
	}

	/*  */

	function getFirstComponentChild (children) {
	  return children && children.filter(function (c) { return c && c.componentOptions; })[0]
	}

	/*  */

	var activeInstance = null;

	function initLifecycle (vm) {
	  var options = vm.$options;

	  // locate first non-abstract parent
	  var parent = options.parent;
	  if (parent && !options.abstract) {
	    while (parent.$options.abstract && parent.$parent) {
	      parent = parent.$parent;
	    }
	    parent.$children.push(vm);
	  }

	  vm.$parent = parent;
	  vm.$root = parent ? parent.$root : vm;

	  vm.$children = [];
	  vm.$refs = {};

	  vm._watcher = null;
	  vm._inactive = false;
	  vm._isMounted = false;
	  vm._isDestroyed = false;
	  vm._isBeingDestroyed = false;
	}

	function lifecycleMixin (Vue) {
	  Vue.prototype._mount = function (
	    el,
	    hydrating
	  ) {
	    var vm = this;
	    vm.$el = el;
	    if (!vm.$options.render) {
	      vm.$options.render = emptyVNode;
	      if (process.env.NODE_ENV !== 'production') {
	        /* istanbul ignore if */
	        if (vm.$options.template) {
	          warn(
	            'You are using the runtime-only build of Vue where the template ' +
	            'option is not available. Either pre-compile the templates into ' +
	            'render functions, or use the compiler-included build.',
	            vm
	          );
	        } else {
	          warn(
	            'Failed to mount component: template or render function not defined.',
	            vm
	          );
	        }
	      }
	    }
	    callHook(vm, 'beforeMount');
	    vm._watcher = new Watcher(vm, function () {
	      vm._update(vm._render(), hydrating);
	    }, noop);
	    hydrating = false;
	    // manually mounted instance, call mounted on self
	    // mounted is called for render-created child components in its inserted hook
	    if (vm.$vnode == null) {
	      vm._isMounted = true;
	      callHook(vm, 'mounted');
	    }
	    return vm
	  };

	  Vue.prototype._update = function (vnode, hydrating) {
	    var vm = this;
	    if (vm._isMounted) {
	      callHook(vm, 'beforeUpdate');
	    }
	    var prevEl = vm.$el;
	    var prevActiveInstance = activeInstance;
	    activeInstance = vm;
	    var prevVnode = vm._vnode;
	    vm._vnode = vnode;
	    if (!prevVnode) {
	      // Vue.prototype.__patch__ is injected in entry points
	      // based on the rendering backend used.
	      vm.$el = vm.__patch__(vm.$el, vnode, hydrating);
	    } else {
	      vm.$el = vm.__patch__(prevVnode, vnode);
	    }
	    activeInstance = prevActiveInstance;
	    // update __vue__ reference
	    if (prevEl) {
	      prevEl.__vue__ = null;
	    }
	    if (vm.$el) {
	      vm.$el.__vue__ = vm;
	    }
	    // if parent is an HOC, update its $el as well
	    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
	      vm.$parent.$el = vm.$el;
	    }
	    if (vm._isMounted) {
	      callHook(vm, 'updated');
	    }
	  };

	  Vue.prototype._updateFromParent = function (
	    propsData,
	    listeners,
	    parentVnode,
	    renderChildren
	  ) {
	    var vm = this;
	    var hasChildren = !!(vm.$options._renderChildren || renderChildren);
	    vm.$options._parentVnode = parentVnode;
	    vm.$options._renderChildren = renderChildren;
	    // update props
	    if (propsData && vm.$options.props) {
	      observerState.shouldConvert = false;
	      if (process.env.NODE_ENV !== 'production') {
	        observerState.isSettingProps = true;
	      }
	      var propKeys = vm.$options._propKeys || [];
	      for (var i = 0; i < propKeys.length; i++) {
	        var key = propKeys[i];
	        vm[key] = validateProp(key, vm.$options.props, propsData, vm);
	      }
	      observerState.shouldConvert = true;
	      if (process.env.NODE_ENV !== 'production') {
	        observerState.isSettingProps = false;
	      }
	      vm.$options.propsData = propsData;
	    }
	    // update listeners
	    if (listeners) {
	      var oldListeners = vm.$options._parentListeners;
	      vm.$options._parentListeners = listeners;
	      vm._updateListeners(listeners, oldListeners);
	    }
	    // resolve slots + force update if has children
	    if (hasChildren) {
	      vm.$slots = resolveSlots(renderChildren, vm._renderContext);
	      vm.$forceUpdate();
	    }
	  };

	  Vue.prototype.$forceUpdate = function () {
	    var vm = this;
	    if (vm._watcher) {
	      vm._watcher.update();
	    }
	  };

	  Vue.prototype.$destroy = function () {
	    var vm = this;
	    if (vm._isBeingDestroyed) {
	      return
	    }
	    callHook(vm, 'beforeDestroy');
	    vm._isBeingDestroyed = true;
	    // remove self from parent
	    var parent = vm.$parent;
	    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
	      remove$1(parent.$children, vm);
	    }
	    // teardown watchers
	    if (vm._watcher) {
	      vm._watcher.teardown();
	    }
	    var i = vm._watchers.length;
	    while (i--) {
	      vm._watchers[i].teardown();
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (vm._data.__ob__) {
	      vm._data.__ob__.vmCount--;
	    }
	    // call the last hook...
	    vm._isDestroyed = true;
	    callHook(vm, 'destroyed');
	    // turn off all instance listeners.
	    vm.$off();
	    // remove __vue__ reference
	    if (vm.$el) {
	      vm.$el.__vue__ = null;
	    }
	    // invoke destroy hooks on current rendered tree
	    vm.__patch__(vm._vnode, null);
	  };
	}

	function callHook (vm, hook) {
	  var handlers = vm.$options[hook];
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      handlers[i].call(vm);
	    }
	  }
	  vm.$emit('hook:' + hook);
	}

	/*  */

	var hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy$1 };
	var hooksToMerge = Object.keys(hooks);

	function createComponent (
	  Ctor,
	  data,
	  context,
	  children,
	  tag
	) {
	  if (!Ctor) {
	    return
	  }

	  if (isObject(Ctor)) {
	    Ctor = Vue$1.extend(Ctor);
	  }

	  if (typeof Ctor !== 'function') {
	    if (process.env.NODE_ENV !== 'production') {
	      warn(("Invalid Component definition: " + (String(Ctor))), context);
	    }
	    return
	  }

	  // resolve constructor options in case global mixins are applied after
	  // component constructor creation
	  resolveConstructorOptions(Ctor);

	  // async component
	  if (!Ctor.cid) {
	    if (Ctor.resolved) {
	      Ctor = Ctor.resolved;
	    } else {
	      Ctor = resolveAsyncComponent(Ctor, function () {
	        // it's ok to queue this on every render because
	        // $forceUpdate is buffered by the scheduler.
	        context.$forceUpdate();
	      });
	      if (!Ctor) {
	        // return nothing if this is indeed an async component
	        // wait for the callback to trigger parent update.
	        return
	      }
	    }
	  }

	  data = data || {};

	  // extract props
	  var propsData = extractProps(data, Ctor);

	  // functional component
	  if (Ctor.options.functional) {
	    return createFunctionalComponent(Ctor, propsData, data, context, children)
	  }

	  // extract listeners, since these needs to be treated as
	  // child component listeners instead of DOM listeners
	  var listeners = data.on;
	  // replace with listeners with .native modifier
	  data.on = data.nativeOn;

	  if (Ctor.options.abstract) {
	    // abstract components do not keep anything
	    // other than props & listeners
	    data = {};
	  }

	  // merge component management hooks onto the placeholder node
	  mergeHooks(data);

	  // return a placeholder vnode
	  var name = Ctor.options.name || tag;
	  var vnode = new VNode(
	    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
	    data, undefined, undefined, undefined, undefined, context,
	    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
	  );
	  return vnode
	}

	function createFunctionalComponent (
	  Ctor,
	  propsData,
	  data,
	  context,
	  children
	) {
	  var props = {};
	  var propOptions = Ctor.options.props;
	  if (propOptions) {
	    for (var key in propOptions) {
	      props[key] = validateProp(key, propOptions, propsData);
	    }
	  }
	  var vnode = Ctor.options.render.call(
	    null,
	    // ensure the createElement function in functional components
	    // gets a unique context - this is necessary for correct named slot check
	    bind$1(createElement, { _self: Object.create(context) }),
	    {
	      props: props,
	      data: data,
	      parent: context,
	      children: normalizeChildren(children),
	      slots: function () { return resolveSlots(children, context); }
	    }
	  );
	  if (vnode instanceof VNode) {
	    vnode.functionalContext = context;
	    if (data.slot) {
	      (vnode.data || (vnode.data = {})).slot = data.slot;
	    }
	  }
	  return vnode
	}

	function createComponentInstanceForVnode (
	  vnode, // we know it's MountedComponentVNode but flow doesn't
	  parent // activeInstance in lifecycle state
	) {
	  var vnodeComponentOptions = vnode.componentOptions;
	  var options = {
	    _isComponent: true,
	    parent: parent,
	    propsData: vnodeComponentOptions.propsData,
	    _componentTag: vnodeComponentOptions.tag,
	    _parentVnode: vnode,
	    _parentListeners: vnodeComponentOptions.listeners,
	    _renderChildren: vnodeComponentOptions.children
	  };
	  // check inline-template render functions
	  var inlineTemplate = vnode.data.inlineTemplate;
	  if (inlineTemplate) {
	    options.render = inlineTemplate.render;
	    options.staticRenderFns = inlineTemplate.staticRenderFns;
	  }
	  return new vnodeComponentOptions.Ctor(options)
	}

	function init (vnode, hydrating) {
	  if (!vnode.child || vnode.child._isDestroyed) {
	    var child = vnode.child = createComponentInstanceForVnode(vnode, activeInstance);
	    child.$mount(hydrating ? vnode.elm : undefined, hydrating);
	  }
	}

	function prepatch (
	  oldVnode,
	  vnode
	) {
	  var options = vnode.componentOptions;
	  var child = vnode.child = oldVnode.child;
	  child._updateFromParent(
	    options.propsData, // updated props
	    options.listeners, // updated listeners
	    vnode, // new parent vnode
	    options.children // new children
	  );
	}

	function insert (vnode) {
	  if (!vnode.child._isMounted) {
	    vnode.child._isMounted = true;
	    callHook(vnode.child, 'mounted');
	  }
	  if (vnode.data.keepAlive) {
	    vnode.child._inactive = false;
	    callHook(vnode.child, 'activated');
	  }
	}

	function destroy$1 (vnode) {
	  if (!vnode.child._isDestroyed) {
	    if (!vnode.data.keepAlive) {
	      vnode.child.$destroy();
	    } else {
	      vnode.child._inactive = true;
	      callHook(vnode.child, 'deactivated');
	    }
	  }
	}

	function resolveAsyncComponent (
	  factory,
	  cb
	) {
	  if (factory.requested) {
	    // pool callbacks
	    factory.pendingCallbacks.push(cb);
	  } else {
	    factory.requested = true;
	    var cbs = factory.pendingCallbacks = [cb];
	    var sync = true;

	    var resolve = function (res) {
	      if (isObject(res)) {
	        res = Vue$1.extend(res);
	      }
	      // cache resolved
	      factory.resolved = res;
	      // invoke callbacks only if this is not a synchronous resolve
	      // (async resolves are shimmed as synchronous during SSR)
	      if (!sync) {
	        for (var i = 0, l = cbs.length; i < l; i++) {
	          cbs[i](res);
	        }
	      }
	    };

	    var reject = function (reason) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "Failed to resolve async component: " + (String(factory)) +
	        (reason ? ("\nReason: " + reason) : '')
	      );
	    };

	    var res = factory(resolve, reject);

	    // handle promise
	    if (res && typeof res.then === 'function' && !factory.resolved) {
	      res.then(resolve, reject);
	    }

	    sync = false;
	    // return in case resolved synchronously
	    return factory.resolved
	  }
	}

	function extractProps (data, Ctor) {
	  // we are only extracting raw values here.
	  // validation and default values are handled in the child
	  // component itself.
	  var propOptions = Ctor.options.props;
	  if (!propOptions) {
	    return
	  }
	  var res = {};
	  var attrs = data.attrs;
	  var props = data.props;
	  var domProps = data.domProps;
	  if (attrs || props || domProps) {
	    for (var key in propOptions) {
	      var altKey = hyphenate(key);
	      checkProp(res, props, key, altKey, true) ||
	      checkProp(res, attrs, key, altKey) ||
	      checkProp(res, domProps, key, altKey);
	    }
	  }
	  return res
	}

	function checkProp (
	  res,
	  hash,
	  key,
	  altKey,
	  preserve
	) {
	  if (hash) {
	    if (hasOwn(hash, key)) {
	      res[key] = hash[key];
	      if (!preserve) {
	        delete hash[key];
	      }
	      return true
	    } else if (hasOwn(hash, altKey)) {
	      res[key] = hash[altKey];
	      if (!preserve) {
	        delete hash[altKey];
	      }
	      return true
	    }
	  }
	  return false
	}

	function mergeHooks (data) {
	  if (!data.hook) {
	    data.hook = {};
	  }
	  for (var i = 0; i < hooksToMerge.length; i++) {
	    var key = hooksToMerge[i];
	    var fromParent = data.hook[key];
	    var ours = hooks[key];
	    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
	  }
	}

	function mergeHook$1 (a, b) {
	  // since all hooks have at most two args, use fixed args
	  // to avoid having to use fn.apply().
	  return function (_, __) {
	    a(_, __);
	    b(_, __);
	  }
	}

	/*  */

	// wrapper function for providing a more flexible interface
	// without getting yelled at by flow
	function createElement (
	  tag,
	  data,
	  children
	) {
	  if (data && (Array.isArray(data) || typeof data !== 'object')) {
	    children = data;
	    data = undefined;
	  }
	  // make sure to use real instance instead of proxy as context
	  return _createElement(this._self, tag, data, children)
	}

	function _createElement (
	  context,
	  tag,
	  data,
	  children
	) {
	  if (data && data.__ob__) {
	    process.env.NODE_ENV !== 'production' && warn(
	      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
	      'Always create fresh vnode data objects in each render!',
	      context
	    );
	    return
	  }
	  if (!tag) {
	    // in case of component :is set to falsy value
	    return emptyVNode()
	  }
	  if (typeof tag === 'string') {
	    var Ctor;
	    var ns = config.getTagNamespace(tag);
	    if (config.isReservedTag(tag)) {
	      // platform built-in elements
	      return new VNode(
	        tag, data, normalizeChildren(children, ns),
	        undefined, undefined, ns, context
	      )
	    } else if ((Ctor = resolveAsset(context.$options, 'components', tag))) {
	      // component
	      return createComponent(Ctor, data, context, children, tag)
	    } else {
	      // unknown or unlisted namespaced elements
	      // check at runtime because it may get assigned a namespace when its
	      // parent normalizes children
	      var childNs = tag === 'foreignObject' ? 'xhtml' : ns;
	      return new VNode(
	        tag, data, normalizeChildren(children, childNs),
	        undefined, undefined, ns, context
	      )
	    }
	  } else {
	    // direct component options / constructor
	    return createComponent(tag, data, context, children)
	  }
	}

	/*  */

	function initRender (vm) {
	  vm.$vnode = null; // the placeholder node in parent tree
	  vm._vnode = null; // the root of the child tree
	  vm._staticTrees = null;
	  vm._renderContext = vm.$options._parentVnode && vm.$options._parentVnode.context;
	  vm.$slots = resolveSlots(vm.$options._renderChildren, vm._renderContext);
	  // bind the public createElement fn to this instance
	  // so that we get proper render context inside it.
	  vm.$createElement = bind$1(createElement, vm);
	  if (vm.$options.el) {
	    vm.$mount(vm.$options.el);
	  }
	}

	function renderMixin (Vue) {
	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };

	  Vue.prototype._render = function () {
	    var vm = this;
	    var ref = vm.$options;
	    var render = ref.render;
	    var staticRenderFns = ref.staticRenderFns;
	    var _parentVnode = ref._parentVnode;

	    if (vm._isMounted) {
	      // clone slot nodes on re-renders
	      for (var key in vm.$slots) {
	        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
	      }
	    }

	    if (staticRenderFns && !vm._staticTrees) {
	      vm._staticTrees = [];
	    }
	    // set parent vnode. this allows render functions to have access
	    // to the data on the placeholder node.
	    vm.$vnode = _parentVnode;
	    // render self
	    var vnode;
	    try {
	      vnode = render.call(vm._renderProxy, vm.$createElement);
	    } catch (e) {
	      if (process.env.NODE_ENV !== 'production') {
	        warn(("Error when rendering " + (formatComponentName(vm)) + ":"));
	      }
	      /* istanbul ignore else */
	      if (config.errorHandler) {
	        config.errorHandler.call(null, e, vm);
	      } else {
	        if (config._isServer) {
	          throw e
	        } else {
	          console.error(e);
	        }
	      }
	      // return previous vnode to prevent render error causing blank component
	      vnode = vm._vnode;
	    }
	    // return empty vnode in case the render function errored out
	    if (!(vnode instanceof VNode)) {
	      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
	        warn(
	          'Multiple root nodes returned from render function. Render function ' +
	          'should return a single root node.',
	          vm
	        );
	      }
	      vnode = emptyVNode();
	    }
	    // set parent
	    vnode.parent = _parentVnode;
	    return vnode
	  };

	  // shorthands used in render functions
	  Vue.prototype._h = createElement;
	  // toString for mustaches
	  Vue.prototype._s = _toString;
	  // number conversion
	  Vue.prototype._n = toNumber;
	  // empty vnode
	  Vue.prototype._e = emptyVNode;
	  // loose equal
	  Vue.prototype._q = looseEqual;
	  // loose indexOf
	  Vue.prototype._i = looseIndexOf;

	  // render static tree by index
	  Vue.prototype._m = function renderStatic (
	    index,
	    isInFor
	  ) {
	    var tree = this._staticTrees[index];
	    // if has already-rendered static tree and not inside v-for,
	    // we can reuse the same tree by doing a shallow clone.
	    if (tree && !isInFor) {
	      return Array.isArray(tree)
	        ? cloneVNodes(tree)
	        : cloneVNode(tree)
	    }
	    // otherwise, render a fresh tree.
	    tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
	    markStatic(tree, ("__static__" + index), false);
	    return tree
	  };

	  // mark node as static (v-once)
	  Vue.prototype._o = function markOnce (
	    tree,
	    index,
	    key
	  ) {
	    markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
	    return tree
	  };

	  function markStatic (tree, key, isOnce) {
	    if (Array.isArray(tree)) {
	      for (var i = 0; i < tree.length; i++) {
	        if (tree[i] && typeof tree[i] !== 'string') {
	          markStaticNode(tree[i], (key + "_" + i), isOnce);
	        }
	      }
	    } else {
	      markStaticNode(tree, key, isOnce);
	    }
	  }

	  function markStaticNode (node, key, isOnce) {
	    node.isStatic = true;
	    node.key = key;
	    node.isOnce = isOnce;
	  }

	  // filter resolution helper
	  var identity = function (_) { return _; };
	  Vue.prototype._f = function resolveFilter (id) {
	    return resolveAsset(this.$options, 'filters', id, true) || identity
	  };

	  // render v-for
	  Vue.prototype._l = function renderList (
	    val,
	    render
	  ) {
	    var ret, i, l, keys, key;
	    if (Array.isArray(val)) {
	      ret = new Array(val.length);
	      for (i = 0, l = val.length; i < l; i++) {
	        ret[i] = render(val[i], i);
	      }
	    } else if (typeof val === 'number') {
	      ret = new Array(val);
	      for (i = 0; i < val; i++) {
	        ret[i] = render(i + 1, i);
	      }
	    } else if (isObject(val)) {
	      keys = Object.keys(val);
	      ret = new Array(keys.length);
	      for (i = 0, l = keys.length; i < l; i++) {
	        key = keys[i];
	        ret[i] = render(val[key], key, i);
	      }
	    }
	    return ret
	  };

	  // renderSlot
	  Vue.prototype._t = function (
	    name,
	    fallback
	  ) {
	    var slotNodes = this.$slots[name];
	    // warn duplicate slot usage
	    if (slotNodes && process.env.NODE_ENV !== 'production') {
	      slotNodes._rendered && warn(
	        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
	        "- this will likely cause render errors.",
	        this
	      );
	      slotNodes._rendered = true;
	    }
	    return slotNodes || fallback
	  };

	  // apply v-bind object
	  Vue.prototype._b = function bindProps (
	    data,
	    value,
	    asProp
	  ) {
	    if (value) {
	      if (!isObject(value)) {
	        process.env.NODE_ENV !== 'production' && warn(
	          'v-bind without argument expects an Object or Array value',
	          this
	        );
	      } else {
	        if (Array.isArray(value)) {
	          value = toObject(value);
	        }
	        for (var key in value) {
	          if (key === 'class' || key === 'style') {
	            data[key] = value[key];
	          } else {
	            var hash = asProp || config.mustUseProp(key)
	              ? data.domProps || (data.domProps = {})
	              : data.attrs || (data.attrs = {});
	            hash[key] = value[key];
	          }
	        }
	      }
	    }
	    return data
	  };

	  // expose v-on keyCodes
	  Vue.prototype._k = function getKeyCodes (key) {
	    return config.keyCodes[key]
	  };
	}

	function resolveSlots (
	  renderChildren,
	  context
	) {
	  var slots = {};
	  if (!renderChildren) {
	    return slots
	  }
	  var children = normalizeChildren(renderChildren) || [];
	  var defaultSlot = [];
	  var name, child;
	  for (var i = 0, l = children.length; i < l; i++) {
	    child = children[i];
	    // named slots should only be respected if the vnode was rendered in the
	    // same context.
	    if ((child.context === context || child.functionalContext === context) &&
	        child.data && (name = child.data.slot)) {
	      var slot = (slots[name] || (slots[name] = []));
	      if (child.tag === 'template') {
	        slot.push.apply(slot, child.children);
	      } else {
	        slot.push(child);
	      }
	    } else {
	      defaultSlot.push(child);
	    }
	  }
	  // ignore single whitespace
	  if (defaultSlot.length && !(
	    defaultSlot.length === 1 &&
	    (defaultSlot[0].text === ' ' || defaultSlot[0].isComment)
	  )) {
	    slots.default = defaultSlot;
	  }
	  return slots
	}

	/*  */

	function initEvents (vm) {
	  vm._events = Object.create(null);
	  // init parent attached events
	  var listeners = vm.$options._parentListeners;
	  var on = bind$1(vm.$on, vm);
	  var off = bind$1(vm.$off, vm);
	  vm._updateListeners = function (listeners, oldListeners) {
	    updateListeners(listeners, oldListeners || {}, on, off, vm);
	  };
	  if (listeners) {
	    vm._updateListeners(listeners);
	  }
	}

	function eventsMixin (Vue) {
	  Vue.prototype.$on = function (event, fn) {
	    var vm = this;(vm._events[event] || (vm._events[event] = [])).push(fn);
	    return vm
	  };

	  Vue.prototype.$once = function (event, fn) {
	    var vm = this;
	    function on () {
	      vm.$off(event, on);
	      fn.apply(vm, arguments);
	    }
	    on.fn = fn;
	    vm.$on(event, on);
	    return vm
	  };

	  Vue.prototype.$off = function (event, fn) {
	    var vm = this;
	    // all
	    if (!arguments.length) {
	      vm._events = Object.create(null);
	      return vm
	    }
	    // specific event
	    var cbs = vm._events[event];
	    if (!cbs) {
	      return vm
	    }
	    if (arguments.length === 1) {
	      vm._events[event] = null;
	      return vm
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        cbs.splice(i, 1);
	        break
	      }
	    }
	    return vm
	  };

	  Vue.prototype.$emit = function (event) {
	    var vm = this;
	    var cbs = vm._events[event];
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        cbs[i].apply(vm, args);
	      }
	    }
	    return vm
	  };
	}

	/*  */

	var uid = 0;

	function initMixin (Vue) {
	  Vue.prototype._init = function (options) {
	    var vm = this;
	    // a uid
	    vm._uid = uid++;
	    // a flag to avoid this being observed
	    vm._isVue = true;
	    // merge options
	    if (options && options._isComponent) {
	      // optimize internal component instantiation
	      // since dynamic options merging is pretty slow, and none of the
	      // internal component options needs special treatment.
	      initInternalComponent(vm, options);
	    } else {
	      vm.$options = mergeOptions(
	        resolveConstructorOptions(vm.constructor),
	        options || {},
	        vm
	      );
	    }
	    /* istanbul ignore else */
	    if (process.env.NODE_ENV !== 'production') {
	      initProxy(vm);
	    } else {
	      vm._renderProxy = vm;
	    }
	    // expose real self
	    vm._self = vm;
	    initLifecycle(vm);
	    initEvents(vm);
	    callHook(vm, 'beforeCreate');
	    initState(vm);
	    callHook(vm, 'created');
	    initRender(vm);
	  };
	}

	function initInternalComponent (vm, options) {
	  var opts = vm.$options = Object.create(vm.constructor.options);
	  // doing this because it's faster than dynamic enumeration.
	  opts.parent = options.parent;
	  opts.propsData = options.propsData;
	  opts._parentVnode = options._parentVnode;
	  opts._parentListeners = options._parentListeners;
	  opts._renderChildren = options._renderChildren;
	  opts._componentTag = options._componentTag;
	  if (options.render) {
	    opts.render = options.render;
	    opts.staticRenderFns = options.staticRenderFns;
	  }
	}

	function resolveConstructorOptions (Ctor) {
	  var options = Ctor.options;
	  if (Ctor.super) {
	    var superOptions = Ctor.super.options;
	    var cachedSuperOptions = Ctor.superOptions;
	    var extendOptions = Ctor.extendOptions;
	    if (superOptions !== cachedSuperOptions) {
	      // super option changed
	      Ctor.superOptions = superOptions;
	      extendOptions.render = options.render;
	      extendOptions.staticRenderFns = options.staticRenderFns;
	      options = Ctor.options = mergeOptions(superOptions, extendOptions);
	      if (options.name) {
	        options.components[options.name] = Ctor;
	      }
	    }
	  }
	  return options
	}

	function Vue$1 (options) {
	  if (process.env.NODE_ENV !== 'production' &&
	    !(this instanceof Vue$1)) {
	    warn('Vue is a constructor and should be called with the `new` keyword');
	  }
	  this._init(options);
	}

	initMixin(Vue$1);
	stateMixin(Vue$1);
	eventsMixin(Vue$1);
	lifecycleMixin(Vue$1);
	renderMixin(Vue$1);

	var warn = noop;
	var formatComponentName;

	if (process.env.NODE_ENV !== 'production') {
	  var hasConsole = typeof console !== 'undefined';

	  warn = function (msg, vm) {
	    if (hasConsole && (!config.silent)) {
	      console.error("[Vue warn]: " + msg + " " + (
	        vm ? formatLocation(formatComponentName(vm)) : ''
	      ));
	    }
	  };

	  formatComponentName = function (vm) {
	    if (vm.$root === vm) {
	      return 'root instance'
	    }
	    var name = vm._isVue
	      ? vm.$options.name || vm.$options._componentTag
	      : vm.name;
	    return (
	      (name ? ("component <" + name + ">") : "anonymous component") +
	      (vm._isVue && vm.$options.__file ? (" at " + (vm.$options.__file)) : '')
	    )
	  };

	  var formatLocation = function (str) {
	    if (str === 'anonymous component') {
	      str += " - use the \"name\" option for better debugging messages.";
	    }
	    return ("\n(found in " + str + ")")
	  };
	}

	/*  */

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 */
	var strats = config.optionMergeStrategies;

	/**
	 * Options with restrictions
	 */
	if (process.env.NODE_ENV !== 'production') {
	  strats.el = strats.propsData = function (parent, child, vm, key) {
	    if (!vm) {
	      warn(
	        "option \"" + key + "\" can only be used during instance " +
	        'creation with the `new` keyword.'
	      );
	    }
	    return defaultStrat(parent, child)
	  };
	}

	/**
	 * Helper that recursively merges two data objects together.
	 */
	function mergeData (to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to
	}

	/**
	 * Data
	 */
	strats.data = function (
	  parentVal,
	  childVal,
	  vm
	) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn(
	        'The "data" option should be a function ' +
	        'that returns a per-instance value in component ' +
	        'definitions.',
	        vm
	      );
	      return parentVal
	    }
	    if (!parentVal) {
	      return childVal
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn () {
	      return mergeData(
	        childVal.call(this),
	        parentVal.call(this)
	      )
	    }
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn () {
	      // instance merge
	      var instanceData = typeof childVal === 'function'
	        ? childVal.call(vm)
	        : childVal;
	      var defaultData = typeof parentVal === 'function'
	        ? parentVal.call(vm)
	        : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData)
	      } else {
	        return defaultData
	      }
	    }
	  }
	};

	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	function mergeHook (
	  parentVal,
	  childVal
	) {
	  return childVal
	    ? parentVal
	      ? parentVal.concat(childVal)
	      : Array.isArray(childVal)
	        ? childVal
	        : [childVal]
	    : parentVal
	}

	config._lifecycleHooks.forEach(function (hook) {
	  strats[hook] = mergeHook;
	});

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	function mergeAssets (parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal
	    ? extend(res, childVal)
	    : res
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Watchers.
	 *
	 * Watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	strats.watch = function (parentVal, childVal) {
	  /* istanbul ignore if */
	  if (!childVal) { return parentVal }
	  if (!parentVal) { return childVal }
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !Array.isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent
	      ? parent.concat(child)
	      : [child];
	  }
	  return ret
	};

	/**
	 * Other object hashes.
	 */
	strats.props =
	strats.methods =
	strats.computed = function (parentVal, childVal) {
	  if (!childVal) { return parentVal }
	  if (!parentVal) { return childVal }
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret
	};

	/**
	 * Default strategy.
	 */
	var defaultStrat = function (parentVal, childVal) {
	  return childVal === undefined
	    ? parentVal
	    : childVal
	};

	/**
	 * Validate component names
	 */
	function checkComponents (options) {
	  for (var key in options.components) {
	    var lower = key.toLowerCase();
	    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
	      warn(
	        'Do not use built-in or reserved HTML elements as component ' +
	        'id: ' + key
	      );
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 */
	function normalizeProps (options) {
	  var props = options.props;
	  if (!props) { return }
	  var res = {};
	  var i, val, name;
	  if (Array.isArray(props)) {
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        name = camelize(val);
	        res[name] = { type: null };
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('props must be strings when using array syntax.');
	      }
	    }
	  } else if (isPlainObject(props)) {
	    for (var key in props) {
	      val = props[key];
	      name = camelize(key);
	      res[name] = isPlainObject(val)
	        ? val
	        : { type: val };
	    }
	  }
	  options.props = res;
	}

	/**
	 * Normalize raw function directives into object format.
	 */
	function normalizeDirectives (options) {
	  var dirs = options.directives;
	  if (dirs) {
	    for (var key in dirs) {
	      var def = dirs[key];
	      if (typeof def === 'function') {
	        dirs[key] = { bind: def, update: def };
	      }
	    }
	  }
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 */
	function mergeOptions (
	  parent,
	  child,
	  vm
	) {
	  if (process.env.NODE_ENV !== 'production') {
	    checkComponents(child);
	  }
	  normalizeProps(child);
	  normalizeDirectives(child);
	  var extendsFrom = child.extends;
	  if (extendsFrom) {
	    parent = typeof extendsFrom === 'function'
	      ? mergeOptions(parent, extendsFrom.options, vm)
	      : mergeOptions(parent, extendsFrom, vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      if (mixin.prototype instanceof Vue$1) {
	        mixin = mixin.options;
	      }
	      parent = mergeOptions(parent, mixin, vm);
	    }
	  }
	  var options = {};
	  var key;
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField (key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 */
	function resolveAsset (
	  options,
	  type,
	  id,
	  warnMissing
	) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return
	  }
	  var assets = options[type];
	  var res = assets[id] ||
	    // camelCase ID
	    assets[camelize(id)] ||
	    // Pascal Case ID
	    assets[capitalize(camelize(id))];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn(
	      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
	      options
	    );
	  }
	  return res
	}

	/*  */

	function validateProp (
	  key,
	  propOptions,
	  propsData,
	  vm
	) {
	  var prop = propOptions[key];
	  var absent = !hasOwn(propsData, key);
	  var value = propsData[key];
	  // handle boolean props
	  if (isBooleanType(prop.type)) {
	    if (absent && !hasOwn(prop, 'default')) {
	      value = false;
	    } else if (value === '' || value === hyphenate(key)) {
	      value = true;
	    }
	  }
	  // check default value
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop, key);
	    // since the default value is a fresh copy,
	    // make sure to observe it.
	    var prevShouldConvert = observerState.shouldConvert;
	    observerState.shouldConvert = true;
	    observe(value);
	    observerState.shouldConvert = prevShouldConvert;
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    assertProp(prop, key, value, vm, absent);
	  }
	  return value
	}

	/**
	 * Get the default value of a prop.
	 */
	function getPropDefaultValue (vm, prop, key) {
	  // no default, return undefined
	  if (!hasOwn(prop, 'default')) {
	    return undefined
	  }
	  var def = prop.default;
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Invalid default value for prop "' + key + '": ' +
	      'Props with type Object/Array must use a factory function ' +
	      'to return the default value.',
	      vm
	    );
	  }
	  // the raw prop value was also undefined from previous render,
	  // return previous default value to avoid unnecessary watcher trigger
	  if (vm && vm.$options.propsData &&
	    vm.$options.propsData[key] === undefined &&
	    vm[key] !== undefined) {
	    return vm[key]
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && prop.type !== Function
	    ? def.call(vm)
	    : def
	}

	/**
	 * Assert whether a prop is valid.
	 */
	function assertProp (
	  prop,
	  name,
	  value,
	  vm,
	  absent
	) {
	  if (prop.required && absent) {
	    warn(
	      'Missing required prop: "' + name + '"',
	      vm
	    );
	    return
	  }
	  if (value == null && !prop.required) {
	    return
	  }
	  var type = prop.type;
	  var valid = !type || type === true;
	  var expectedTypes = [];
	  if (type) {
	    if (!Array.isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    warn(
	      'Invalid prop: type check failed for prop "' + name + '".' +
	      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
	      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
	      vm
	    );
	    return
	  }
	  var validator = prop.validator;
	  if (validator) {
	    if (!validator(value)) {
	      warn(
	        'Invalid prop: custom validator check failed for prop "' + name + '".',
	        vm
	      );
	    }
	  }
	}

	/**
	 * Assert the type of a value
	 */
	function assertType (value, type) {
	  var valid;
	  var expectedType = getType(type);
	  if (expectedType === 'String') {
	    valid = typeof value === (expectedType = 'string');
	  } else if (expectedType === 'Number') {
	    valid = typeof value === (expectedType = 'number');
	  } else if (expectedType === 'Boolean') {
	    valid = typeof value === (expectedType = 'boolean');
	  } else if (expectedType === 'Function') {
	    valid = typeof value === (expectedType = 'function');
	  } else if (expectedType === 'Object') {
	    valid = isPlainObject(value);
	  } else if (expectedType === 'Array') {
	    valid = Array.isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  }
	}

	/**
	 * Use function string name to check built-in types,
	 * because a simple equality check will fail when running
	 * across different vms / iframes.
	 */
	function getType (fn) {
	  var match = fn && fn.toString().match(/^\s*function (\w+)/);
	  return match && match[1]
	}

	function isBooleanType (fn) {
	  if (!Array.isArray(fn)) {
	    return getType(fn) === 'Boolean'
	  }
	  for (var i = 0, len = fn.length; i < len; i++) {
	    if (getType(fn[i]) === 'Boolean') {
	      return true
	    }
	  }
	  /* istanbul ignore next */
	  return false
	}



	var util = Object.freeze({
		defineReactive: defineReactive$$1,
		_toString: _toString,
		toNumber: toNumber,
		makeMap: makeMap,
		isBuiltInTag: isBuiltInTag,
		remove: remove$1,
		hasOwn: hasOwn,
		isPrimitive: isPrimitive,
		cached: cached,
		camelize: camelize,
		capitalize: capitalize,
		hyphenate: hyphenate,
		bind: bind$1,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		toObject: toObject,
		noop: noop,
		no: no,
		genStaticKeys: genStaticKeys,
		looseEqual: looseEqual,
		looseIndexOf: looseIndexOf,
		isReserved: isReserved,
		def: def,
		parsePath: parsePath,
		hasProto: hasProto,
		inBrowser: inBrowser,
		UA: UA,
		isIE: isIE,
		isIE9: isIE9,
		isEdge: isEdge,
		isAndroid: isAndroid,
		isIOS: isIOS,
		devtools: devtools,
		nextTick: nextTick,
		get _Set () { return _Set; },
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		get warn () { return warn; },
		get formatComponentName () { return formatComponentName; },
		validateProp: validateProp
	});

	/*  */

	function initUse (Vue) {
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this
	  };
	}

	/*  */

	function initMixin$1 (Vue) {
	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };
	}

	/*  */

	function initExtend (Vue) {
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	  Vue.cid = 0;
	  var cid = 1;

	  /**
	   * Class inheritance
	   */
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn(
	          'Invalid component name: "' + name + '". Component names ' +
	          'can only contain alphanumeric characaters and the hyphen.'
	        );
	      }
	    }
	    var Sub = function VueComponent (options) {
	      this._init(options);
	    };
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(
	      Super.options,
	      extendOptions
	    );
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // keep a reference to the super options at extension time.
	    // later at instantiation we can check if Super's options have
	    // been updated.
	    Sub.superOptions = Super.options;
	    Sub.extendOptions = extendOptions;
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub
	  };
	}

	/*  */

	function initAssetRegisters (Vue) {
	  /**
	   * Create asset registration methods.
	   */
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (
	      id,
	      definition
	    ) {
	      if (!definition) {
	        return this.options[type + 's'][id]
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && config.isReservedTag(id)) {
	            warn(
	              'Do not use built-in or reserved HTML elements as component ' +
	              'id: ' + id
	            );
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = definition.name || id;
	          definition = Vue.extend(definition);
	        }
	        if (type === 'directive' && typeof definition === 'function') {
	          definition = { bind: definition, update: definition };
	        }
	        this.options[type + 's'][id] = definition;
	        return definition
	      }
	    };
	  });
	}

	var KeepAlive = {
	  name: 'keep-alive',
	  abstract: true,
	  created: function created () {
	    this.cache = Object.create(null);
	  },
	  render: function render () {
	    var vnode = getFirstComponentChild(this.$slots.default);
	    if (vnode && vnode.componentOptions) {
	      var opts = vnode.componentOptions;
	      var key = vnode.key == null
	        // same constructor may get registered as different local components
	        // so cid alone is not enough (#3269)
	        ? opts.Ctor.cid + '::' + opts.tag
	        : vnode.key;
	      if (this.cache[key]) {
	        vnode.child = this.cache[key].child;
	      } else {
	        this.cache[key] = vnode;
	      }
	      vnode.data.keepAlive = true;
	    }
	    return vnode
	  },
	  destroyed: function destroyed () {
	    var this$1 = this;

	    for (var key in this.cache) {
	      var vnode = this$1.cache[key];
	      callHook(vnode.child, 'deactivated');
	      vnode.child.$destroy();
	    }
	  }
	};

	var builtInComponents = {
	  KeepAlive: KeepAlive
	};

	/*  */

	function initGlobalAPI (Vue) {
	  // config
	  var configDef = {};
	  configDef.get = function () { return config; };
	  if (process.env.NODE_ENV !== 'production') {
	    configDef.set = function () {
	      warn(
	        'Do not replace the Vue.config object, set individual fields instead.'
	      );
	    };
	  }
	  Object.defineProperty(Vue, 'config', configDef);
	  Vue.util = util;
	  Vue.set = set;
	  Vue.delete = del;
	  Vue.nextTick = nextTick;

	  Vue.options = Object.create(null);
	  config._assetTypes.forEach(function (type) {
	    Vue.options[type + 's'] = Object.create(null);
	  });

	  extend(Vue.options.components, builtInComponents);

	  initUse(Vue);
	  initMixin$1(Vue);
	  initExtend(Vue);
	  initAssetRegisters(Vue);
	}

	initGlobalAPI(Vue$1);

	Object.defineProperty(Vue$1.prototype, '$isServer', {
	  get: function () { return config._isServer; }
	});

	Vue$1.version = '2.0.5';

	/*  */

	// attributes that should be using props for binding
	var mustUseProp = makeMap('value,selected,checked,muted');

	var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

	var isBooleanAttr = makeMap(
	  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
	  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
	  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
	  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
	  'required,reversed,scoped,seamless,selected,sortable,translate,' +
	  'truespeed,typemustmatch,visible'
	);

	var isAttr = makeMap(
	  'accept,accept-charset,accesskey,action,align,alt,async,autocomplete,' +
	  'autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,' +
	  'checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv,' +
	  'name,contenteditable,contextmenu,controls,coords,data,datetime,default,' +
	  'defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for,' +
	  'form,formaction,headers,<th>,height,hidden,high,href,hreflang,http-equiv,' +
	  'icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,' +
	  'manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,' +
	  'muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,' +
	  'preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,' +
	  'scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,' +
	  'spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,' +
	  'target,title,type,usemap,value,width,wrap'
	);



	var xlinkNS = 'http://www.w3.org/1999/xlink';

	var isXlink = function (name) {
	  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
	};

	var getXlinkProp = function (name) {
	  return isXlink(name) ? name.slice(6, name.length) : ''
	};

	var isFalsyAttrValue = function (val) {
	  return val == null || val === false
	};

	/*  */

	function genClassForVnode (vnode) {
	  var data = vnode.data;
	  var parentNode = vnode;
	  var childNode = vnode;
	  while (childNode.child) {
	    childNode = childNode.child._vnode;
	    if (childNode.data) {
	      data = mergeClassData(childNode.data, data);
	    }
	  }
	  while ((parentNode = parentNode.parent)) {
	    if (parentNode.data) {
	      data = mergeClassData(data, parentNode.data);
	    }
	  }
	  return genClassFromData(data)
	}

	function mergeClassData (child, parent) {
	  return {
	    staticClass: concat(child.staticClass, parent.staticClass),
	    class: child.class
	      ? [child.class, parent.class]
	      : parent.class
	  }
	}

	function genClassFromData (data) {
	  var dynamicClass = data.class;
	  var staticClass = data.staticClass;
	  if (staticClass || dynamicClass) {
	    return concat(staticClass, stringifyClass(dynamicClass))
	  }
	  /* istanbul ignore next */
	  return ''
	}

	function concat (a, b) {
	  return a ? b ? (a + ' ' + b) : a : (b || '')
	}

	function stringifyClass (value) {
	  var res = '';
	  if (!value) {
	    return res
	  }
	  if (typeof value === 'string') {
	    return value
	  }
	  if (Array.isArray(value)) {
	    var stringified;
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        if ((stringified = stringifyClass(value[i]))) {
	          res += stringified + ' ';
	        }
	      }
	    }
	    return res.slice(0, -1)
	  }
	  if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) { res += key + ' '; }
	    }
	    return res.slice(0, -1)
	  }
	  /* istanbul ignore next */
	  return res
	}

	/*  */

	var namespaceMap = {
	  svg: 'http://www.w3.org/2000/svg',
	  math: 'http://www.w3.org/1998/Math/MathML',
	  xhtml: 'http://www.w3.org/1999/xhtm'
	};

	var isHTMLTag = makeMap(
	  'html,body,base,head,link,meta,style,title,' +
	  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
	  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
	  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
	  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
	  'embed,object,param,source,canvas,script,noscript,del,ins,' +
	  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
	  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
	  'output,progress,select,textarea,' +
	  'details,dialog,menu,menuitem,summary,' +
	  'content,element,shadow,template'
	);

	var isUnaryTag = makeMap(
	  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
	  'link,meta,param,source,track,wbr',
	  true
	);

	// Elements that you can, intentionally, leave open
	// (and which close themselves)
	var canBeLeftOpenTag = makeMap(
	  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source',
	  true
	);

	// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
	// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
	var isNonPhrasingTag = makeMap(
	  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
	  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
	  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
	  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
	  'title,tr,track',
	  true
	);

	// this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	var isSVG = makeMap(
	  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font,' +
	  'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
	  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
	  true
	);



	var isReservedTag = function (tag) {
	  return isHTMLTag(tag) || isSVG(tag)
	};

	function getTagNamespace (tag) {
	  if (isSVG(tag)) {
	    return 'svg'
	  }
	  // basic support for MathML
	  // note it doesn't support other MathML elements being component roots
	  if (tag === 'math') {
	    return 'math'
	  }
	}

	var unknownElementCache = Object.create(null);
	function isUnknownElement (tag) {
	  /* istanbul ignore if */
	  if (!inBrowser) {
	    return true
	  }
	  if (isReservedTag(tag)) {
	    return false
	  }
	  tag = tag.toLowerCase();
	  /* istanbul ignore if */
	  if (unknownElementCache[tag] != null) {
	    return unknownElementCache[tag]
	  }
	  var el = document.createElement(tag);
	  if (tag.indexOf('-') > -1) {
	    // http://stackoverflow.com/a/28210364/1070244
	    return (unknownElementCache[tag] = (
	      el.constructor === window.HTMLUnknownElement ||
	      el.constructor === window.HTMLElement
	    ))
	  } else {
	    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
	  }
	}

	/*  */

	/**
	 * Query an element selector if it's not an element already.
	 */
	function query (el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn(
	        'Cannot find element: ' + selector
	      );
	      return document.createElement('div')
	    }
	  }
	  return el
	}

	/*  */

	function createElement$1 (tagName, vnode) {
	  var elm = document.createElement(tagName);
	  if (tagName !== 'select') {
	    return elm
	  }
	  if (vnode.data && vnode.data.attrs && 'multiple' in vnode.data.attrs) {
	    elm.setAttribute('multiple', 'multiple');
	  }
	  return elm
	}

	function createElementNS (namespace, tagName) {
	  return document.createElementNS(namespaceMap[namespace], tagName)
	}

	function createTextNode (text) {
	  return document.createTextNode(text)
	}

	function createComment (text) {
	  return document.createComment(text)
	}

	function insertBefore (parentNode, newNode, referenceNode) {
	  parentNode.insertBefore(newNode, referenceNode);
	}

	function removeChild (node, child) {
	  node.removeChild(child);
	}

	function appendChild (node, child) {
	  node.appendChild(child);
	}

	function parentNode (node) {
	  return node.parentNode
	}

	function nextSibling (node) {
	  return node.nextSibling
	}

	function tagName (node) {
	  return node.tagName
	}

	function setTextContent (node, text) {
	  node.textContent = text;
	}

	function childNodes (node) {
	  return node.childNodes
	}

	function setAttribute (node, key, val) {
	  node.setAttribute(key, val);
	}


	var nodeOps = Object.freeze({
		createElement: createElement$1,
		createElementNS: createElementNS,
		createTextNode: createTextNode,
		createComment: createComment,
		insertBefore: insertBefore,
		removeChild: removeChild,
		appendChild: appendChild,
		parentNode: parentNode,
		nextSibling: nextSibling,
		tagName: tagName,
		setTextContent: setTextContent,
		childNodes: childNodes,
		setAttribute: setAttribute
	});

	/*  */

	var ref = {
	  create: function create (_, vnode) {
	    registerRef(vnode);
	  },
	  update: function update (oldVnode, vnode) {
	    if (oldVnode.data.ref !== vnode.data.ref) {
	      registerRef(oldVnode, true);
	      registerRef(vnode);
	    }
	  },
	  destroy: function destroy (vnode) {
	    registerRef(vnode, true);
	  }
	};

	function registerRef (vnode, isRemoval) {
	  var key = vnode.data.ref;
	  if (!key) { return }

	  var vm = vnode.context;
	  var ref = vnode.child || vnode.elm;
	  var refs = vm.$refs;
	  if (isRemoval) {
	    if (Array.isArray(refs[key])) {
	      remove$1(refs[key], ref);
	    } else if (refs[key] === ref) {
	      refs[key] = undefined;
	    }
	  } else {
	    if (vnode.data.refInFor) {
	      if (Array.isArray(refs[key])) {
	        refs[key].push(ref);
	      } else {
	        refs[key] = [ref];
	      }
	    } else {
	      refs[key] = ref;
	    }
	  }
	}

	/**
	 * Virtual DOM patching algorithm based on Snabbdom by
	 * Simon Friis Vindum (@paldepind)
	 * Licensed under the MIT License
	 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
	 *
	 * modified by Evan You (@yyx990803)
	 *

	/*
	 * Not type-checking this because this file is perf-critical and the cost
	 * of making flow understand it is not worth it.
	 */

	var emptyNode = new VNode('', {}, []);

	var hooks$1 = ['create', 'update', 'remove', 'destroy'];

	function isUndef (s) {
	  return s == null
	}

	function isDef (s) {
	  return s != null
	}

	function sameVnode (vnode1, vnode2) {
	  return (
	    vnode1.key === vnode2.key &&
	    vnode1.tag === vnode2.tag &&
	    vnode1.isComment === vnode2.isComment &&
	    !vnode1.data === !vnode2.data
	  )
	}

	function createKeyToOldIdx (children, beginIdx, endIdx) {
	  var i, key;
	  var map = {};
	  for (i = beginIdx; i <= endIdx; ++i) {
	    key = children[i].key;
	    if (isDef(key)) { map[key] = i; }
	  }
	  return map
	}

	function createPatchFunction (backend) {
	  var i, j;
	  var cbs = {};

	  var modules = backend.modules;
	  var nodeOps = backend.nodeOps;

	  for (i = 0; i < hooks$1.length; ++i) {
	    cbs[hooks$1[i]] = [];
	    for (j = 0; j < modules.length; ++j) {
	      if (modules[j][hooks$1[i]] !== undefined) { cbs[hooks$1[i]].push(modules[j][hooks$1[i]]); }
	    }
	  }

	  function emptyNodeAt (elm) {
	    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
	  }

	  function createRmCb (childElm, listeners) {
	    function remove$$1 () {
	      if (--remove$$1.listeners === 0) {
	        removeElement(childElm);
	      }
	    }
	    remove$$1.listeners = listeners;
	    return remove$$1
	  }

	  function removeElement (el) {
	    var parent = nodeOps.parentNode(el);
	    // element may have already been removed due to v-html
	    if (parent) {
	      nodeOps.removeChild(parent, el);
	    }
	  }

	  function createElm (vnode, insertedVnodeQueue, nested) {
	    var i;
	    var data = vnode.data;
	    vnode.isRootInsert = !nested;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode); }
	      // after calling the init hook, if the vnode is a child component
	      // it should've created a child instance and mounted it. the child
	      // component also has set the placeholder vnode's elm.
	      // in that case we can just return the element and be done.
	      if (isDef(i = vnode.child)) {
	        initComponent(vnode, insertedVnodeQueue);
	        return vnode.elm
	      }
	    }
	    var children = vnode.children;
	    var tag = vnode.tag;
	    if (isDef(tag)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (
	          !vnode.ns &&
	          !(config.ignoredElements && config.ignoredElements.indexOf(tag) > -1) &&
	          config.isUnknownElement(tag)
	        ) {
	          warn(
	            'Unknown custom element: <' + tag + '> - did you ' +
	            'register the component correctly? For recursive components, ' +
	            'make sure to provide the "name" option.',
	            vnode.context
	          );
	        }
	      }
	      vnode.elm = vnode.ns
	        ? nodeOps.createElementNS(vnode.ns, tag)
	        : nodeOps.createElement(tag, vnode);
	      setScope(vnode);
	      createChildren(vnode, children, insertedVnodeQueue);
	      if (isDef(data)) {
	        invokeCreateHooks(vnode, insertedVnodeQueue);
	      }
	    } else if (vnode.isComment) {
	      vnode.elm = nodeOps.createComment(vnode.text);
	    } else {
	      vnode.elm = nodeOps.createTextNode(vnode.text);
	    }
	    return vnode.elm
	  }

	  function createChildren (vnode, children, insertedVnodeQueue) {
	    if (Array.isArray(children)) {
	      for (var i = 0; i < children.length; ++i) {
	        nodeOps.appendChild(vnode.elm, createElm(children[i], insertedVnodeQueue, true));
	      }
	    } else if (isPrimitive(vnode.text)) {
	      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
	    }
	  }

	  function isPatchable (vnode) {
	    while (vnode.child) {
	      vnode = vnode.child._vnode;
	    }
	    return isDef(vnode.tag)
	  }

	  function invokeCreateHooks (vnode, insertedVnodeQueue) {
	    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
	      cbs.create[i$1](emptyNode, vnode);
	    }
	    i = vnode.data.hook; // Reuse variable
	    if (isDef(i)) {
	      if (i.create) { i.create(emptyNode, vnode); }
	      if (i.insert) { insertedVnodeQueue.push(vnode); }
	    }
	  }

	  function initComponent (vnode, insertedVnodeQueue) {
	    if (vnode.data.pendingInsert) {
	      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
	    }
	    vnode.elm = vnode.child.$el;
	    if (isPatchable(vnode)) {
	      invokeCreateHooks(vnode, insertedVnodeQueue);
	      setScope(vnode);
	    } else {
	      // empty component root.
	      // skip all element-related modules except for ref (#3455)
	      registerRef(vnode);
	      // make sure to invoke the insert hook
	      insertedVnodeQueue.push(vnode);
	    }
	  }

	  // set scope id attribute for scoped CSS.
	  // this is implemented as a special case to avoid the overhead
	  // of going through the normal attribute patching process.
	  function setScope (vnode) {
	    var i;
	    if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    }
	    if (isDef(i = activeInstance) &&
	        i !== vnode.context &&
	        isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    }
	  }

	  function addVnodes (parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      nodeOps.insertBefore(parentElm, createElm(vnodes[startIdx], insertedVnodeQueue), before);
	    }
	  }

	  function invokeDestroyHook (vnode) {
	    var i, j;
	    var data = vnode.data;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
	      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
	    }
	    if (isDef(i = vnode.children)) {
	      for (j = 0; j < vnode.children.length; ++j) {
	        invokeDestroyHook(vnode.children[j]);
	      }
	    }
	  }

	  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      var ch = vnodes[startIdx];
	      if (isDef(ch)) {
	        if (isDef(ch.tag)) {
	          removeAndInvokeRemoveHook(ch);
	          invokeDestroyHook(ch);
	        } else { // Text node
	          nodeOps.removeChild(parentElm, ch.elm);
	        }
	      }
	    }
	  }

	  function removeAndInvokeRemoveHook (vnode, rm) {
	    if (rm || isDef(vnode.data)) {
	      var listeners = cbs.remove.length + 1;
	      if (!rm) {
	        // directly removing
	        rm = createRmCb(vnode.elm, listeners);
	      } else {
	        // we have a recursively passed down rm callback
	        // increase the listeners count
	        rm.listeners += listeners;
	      }
	      // recursively invoke hooks on child component root node
	      if (isDef(i = vnode.child) && isDef(i = i._vnode) && isDef(i.data)) {
	        removeAndInvokeRemoveHook(i, rm);
	      }
	      for (i = 0; i < cbs.remove.length; ++i) {
	        cbs.remove[i](vnode, rm);
	      }
	      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
	        i(vnode, rm);
	      } else {
	        rm();
	      }
	    } else {
	      removeElement(vnode.elm);
	    }
	  }

	  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
	    var oldStartIdx = 0;
	    var newStartIdx = 0;
	    var oldEndIdx = oldCh.length - 1;
	    var oldStartVnode = oldCh[0];
	    var oldEndVnode = oldCh[oldEndIdx];
	    var newEndIdx = newCh.length - 1;
	    var newStartVnode = newCh[0];
	    var newEndVnode = newCh[newEndIdx];
	    var oldKeyToIdx, idxInOld, elmToMove, before;

	    // removeOnly is a special flag used only by <transition-group>
	    // to ensure removed elements stay in correct relative positions
	    // during leaving transitions
	    var canMove = !removeOnly;

	    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
	      if (isUndef(oldStartVnode)) {
	        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
	      } else if (isUndef(oldEndVnode)) {
	        oldEndVnode = oldCh[--oldEndIdx];
	      } else if (sameVnode(oldStartVnode, newStartVnode)) {
	        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
	        oldStartVnode = oldCh[++oldStartIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else if (sameVnode(oldEndVnode, newEndVnode)) {
	        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
	        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
	        oldStartVnode = oldCh[++oldStartIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
	        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else {
	        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
	        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
	        if (isUndef(idxInOld)) { // New element
	          nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
	          newStartVnode = newCh[++newStartIdx];
	        } else {
	          elmToMove = oldCh[idxInOld];
	          /* istanbul ignore if */
	          if (process.env.NODE_ENV !== 'production' && !elmToMove) {
	            warn(
	              'It seems there are duplicate keys that is causing an update error. ' +
	              'Make sure each v-for item has a unique key.'
	            );
	          }
	          if (elmToMove.tag !== newStartVnode.tag) {
	            // same key but different element. treat as new element
	            nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          } else {
	            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
	            oldCh[idxInOld] = undefined;
	            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          }
	        }
	      }
	    }
	    if (oldStartIdx > oldEndIdx) {
	      before = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
	      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
	    } else if (newStartIdx > newEndIdx) {
	      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
	    }
	  }

	  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
	    if (oldVnode === vnode) {
	      return
	    }
	    // reuse element for static trees.
	    // note we only do this if the vnode is cloned -
	    // if the new node is not cloned it means the render functions have been
	    // reset by the hot-reload-api and we need to do a proper re-render.
	    if (vnode.isStatic &&
	        oldVnode.isStatic &&
	        vnode.key === oldVnode.key &&
	        (vnode.isCloned || vnode.isOnce)) {
	      vnode.elm = oldVnode.elm;
	      return
	    }
	    var i;
	    var data = vnode.data;
	    var hasData = isDef(data);
	    if (hasData && isDef(i = data.hook) && isDef(i = i.prepatch)) {
	      i(oldVnode, vnode);
	    }
	    var elm = vnode.elm = oldVnode.elm;
	    var oldCh = oldVnode.children;
	    var ch = vnode.children;
	    if (hasData && isPatchable(vnode)) {
	      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
	      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
	    }
	    if (isUndef(vnode.text)) {
	      if (isDef(oldCh) && isDef(ch)) {
	        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
	      } else if (isDef(ch)) {
	        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
	        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
	      } else if (isDef(oldCh)) {
	        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
	      } else if (isDef(oldVnode.text)) {
	        nodeOps.setTextContent(elm, '');
	      }
	    } else if (oldVnode.text !== vnode.text) {
	      nodeOps.setTextContent(elm, vnode.text);
	    }
	    if (hasData) {
	      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
	    }
	  }

	  function invokeInsertHook (vnode, queue, initial) {
	    // delay insert hooks for component root nodes, invoke them after the
	    // element is really inserted
	    if (initial && vnode.parent) {
	      vnode.parent.data.pendingInsert = queue;
	    } else {
	      for (var i = 0; i < queue.length; ++i) {
	        queue[i].data.hook.insert(queue[i]);
	      }
	    }
	  }

	  var bailed = false;
	  function hydrate (elm, vnode, insertedVnodeQueue) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (!assertNodeMatch(elm, vnode)) {
	        return false
	      }
	    }
	    vnode.elm = elm;
	    var tag = vnode.tag;
	    var data = vnode.data;
	    var children = vnode.children;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
	      if (isDef(i = vnode.child)) {
	        // child component. it should have hydrated its own tree.
	        initComponent(vnode, insertedVnodeQueue);
	        return true
	      }
	    }
	    if (isDef(tag)) {
	      if (isDef(children)) {
	        var childNodes = nodeOps.childNodes(elm);
	        // empty element, allow client to pick up and populate children
	        if (!childNodes.length) {
	          createChildren(vnode, children, insertedVnodeQueue);
	        } else {
	          var childrenMatch = true;
	          if (childNodes.length !== children.length) {
	            childrenMatch = false;
	          } else {
	            for (var i$1 = 0; i$1 < children.length; i$1++) {
	              if (!hydrate(childNodes[i$1], children[i$1], insertedVnodeQueue)) {
	                childrenMatch = false;
	                break
	              }
	            }
	          }
	          if (!childrenMatch) {
	            if (process.env.NODE_ENV !== 'production' &&
	                typeof console !== 'undefined' &&
	                !bailed) {
	              bailed = true;
	              console.warn('Parent: ', elm);
	              console.warn('Mismatching childNodes vs. VNodes: ', childNodes, children);
	            }
	            return false
	          }
	        }
	      }
	      if (isDef(data)) {
	        invokeCreateHooks(vnode, insertedVnodeQueue);
	      }
	    }
	    return true
	  }

	  function assertNodeMatch (node, vnode) {
	    if (vnode.tag) {
	      return (
	        vnode.tag.indexOf('vue-component') === 0 ||
	        vnode.tag === nodeOps.tagName(node).toLowerCase()
	      )
	    } else {
	      return _toString(vnode.text) === node.data
	    }
	  }

	  return function patch (oldVnode, vnode, hydrating, removeOnly) {
	    if (!vnode) {
	      if (oldVnode) { invokeDestroyHook(oldVnode); }
	      return
	    }

	    var elm, parent;
	    var isInitialPatch = false;
	    var insertedVnodeQueue = [];

	    if (!oldVnode) {
	      // empty mount, create new root element
	      isInitialPatch = true;
	      createElm(vnode, insertedVnodeQueue);
	    } else {
	      var isRealElement = isDef(oldVnode.nodeType);
	      if (!isRealElement && sameVnode(oldVnode, vnode)) {
	        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
	      } else {
	        if (isRealElement) {
	          // mounting to a real element
	          // check if this is server-rendered content and if we can perform
	          // a successful hydration.
	          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
	            oldVnode.removeAttribute('server-rendered');
	            hydrating = true;
	          }
	          if (hydrating) {
	            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
	              invokeInsertHook(vnode, insertedVnodeQueue, true);
	              return oldVnode
	            } else if (process.env.NODE_ENV !== 'production') {
	              warn(
	                'The client-side rendered virtual DOM tree is not matching ' +
	                'server-rendered content. This is likely caused by incorrect ' +
	                'HTML markup, for example nesting block-level elements inside ' +
	                '<p>, or missing <tbody>. Bailing hydration and performing ' +
	                'full client-side render.'
	              );
	            }
	          }
	          // either not server-rendered, or hydration failed.
	          // create an empty node and replace it
	          oldVnode = emptyNodeAt(oldVnode);
	        }
	        elm = oldVnode.elm;
	        parent = nodeOps.parentNode(elm);

	        createElm(vnode, insertedVnodeQueue);

	        // component root element replaced.
	        // update parent placeholder node element.
	        if (vnode.parent) {
	          vnode.parent.elm = vnode.elm;
	          if (isPatchable(vnode)) {
	            for (var i = 0; i < cbs.create.length; ++i) {
	              cbs.create[i](emptyNode, vnode.parent);
	            }
	          }
	        }

	        if (parent !== null) {
	          nodeOps.insertBefore(parent, vnode.elm, nodeOps.nextSibling(elm));
	          removeVnodes(parent, [oldVnode], 0, 0);
	        } else if (isDef(oldVnode.tag)) {
	          invokeDestroyHook(oldVnode);
	        }
	      }
	    }

	    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
	    return vnode.elm
	  }
	}

	/*  */

	var directives = {
	  create: updateDirectives,
	  update: updateDirectives,
	  destroy: function unbindDirectives (vnode) {
	    updateDirectives(vnode, emptyNode);
	  }
	};

	function updateDirectives (
	  oldVnode,
	  vnode
	) {
	  if (!oldVnode.data.directives && !vnode.data.directives) {
	    return
	  }
	  var isCreate = oldVnode === emptyNode;
	  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
	  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

	  var dirsWithInsert = [];
	  var dirsWithPostpatch = [];

	  var key, oldDir, dir;
	  for (key in newDirs) {
	    oldDir = oldDirs[key];
	    dir = newDirs[key];
	    if (!oldDir) {
	      // new directive, bind
	      callHook$1(dir, 'bind', vnode, oldVnode);
	      if (dir.def && dir.def.inserted) {
	        dirsWithInsert.push(dir);
	      }
	    } else {
	      // existing directive, update
	      dir.oldValue = oldDir.value;
	      callHook$1(dir, 'update', vnode, oldVnode);
	      if (dir.def && dir.def.componentUpdated) {
	        dirsWithPostpatch.push(dir);
	      }
	    }
	  }

	  if (dirsWithInsert.length) {
	    var callInsert = function () {
	      dirsWithInsert.forEach(function (dir) {
	        callHook$1(dir, 'inserted', vnode, oldVnode);
	      });
	    };
	    if (isCreate) {
	      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert, 'dir-insert');
	    } else {
	      callInsert();
	    }
	  }

	  if (dirsWithPostpatch.length) {
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
	      dirsWithPostpatch.forEach(function (dir) {
	        callHook$1(dir, 'componentUpdated', vnode, oldVnode);
	      });
	    }, 'dir-postpatch');
	  }

	  if (!isCreate) {
	    for (key in oldDirs) {
	      if (!newDirs[key]) {
	        // no longer present, unbind
	        callHook$1(oldDirs[key], 'unbind', oldVnode);
	      }
	    }
	  }
	}

	var emptyModifiers = Object.create(null);

	function normalizeDirectives$1 (
	  dirs,
	  vm
	) {
	  var res = Object.create(null);
	  if (!dirs) {
	    return res
	  }
	  var i, dir;
	  for (i = 0; i < dirs.length; i++) {
	    dir = dirs[i];
	    if (!dir.modifiers) {
	      dir.modifiers = emptyModifiers;
	    }
	    res[getRawDirName(dir)] = dir;
	    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
	  }
	  return res
	}

	function getRawDirName (dir) {
	  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
	}

	function callHook$1 (dir, hook, vnode, oldVnode) {
	  var fn = dir.def && dir.def[hook];
	  if (fn) {
	    fn(vnode.elm, dir, vnode, oldVnode);
	  }
	}

	var baseModules = [
	  ref,
	  directives
	];

	/*  */

	function updateAttrs (oldVnode, vnode) {
	  if (!oldVnode.data.attrs && !vnode.data.attrs) {
	    return
	  }
	  var key, cur, old;
	  var elm = vnode.elm;
	  var oldAttrs = oldVnode.data.attrs || {};
	  var attrs = vnode.data.attrs || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (attrs.__ob__) {
	    attrs = vnode.data.attrs = extend({}, attrs);
	  }

	  for (key in attrs) {
	    cur = attrs[key];
	    old = oldAttrs[key];
	    if (old !== cur) {
	      setAttr(elm, key, cur);
	    }
	  }
	  for (key in oldAttrs) {
	    if (attrs[key] == null) {
	      if (isXlink(key)) {
	        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
	      } else if (!isEnumeratedAttr(key)) {
	        elm.removeAttribute(key);
	      }
	    }
	  }
	}

	function setAttr (el, key, value) {
	  if (isBooleanAttr(key)) {
	    // set attribute for blank value
	    // e.g. <option disabled>Select one</option>
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, key);
	    }
	  } else if (isEnumeratedAttr(key)) {
	    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
	  } else if (isXlink(key)) {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
	    } else {
	      el.setAttributeNS(xlinkNS, key, value);
	    }
	  } else {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, value);
	    }
	  }
	}

	var attrs = {
	  create: updateAttrs,
	  update: updateAttrs
	};

	/*  */

	function updateClass (oldVnode, vnode) {
	  var el = vnode.elm;
	  var data = vnode.data;
	  var oldData = oldVnode.data;
	  if (!data.staticClass && !data.class &&
	      (!oldData || (!oldData.staticClass && !oldData.class))) {
	    return
	  }

	  var cls = genClassForVnode(vnode);

	  // handle transition classes
	  var transitionClass = el._transitionClasses;
	  if (transitionClass) {
	    cls = concat(cls, stringifyClass(transitionClass));
	  }

	  // set the class
	  if (cls !== el._prevClass) {
	    el.setAttribute('class', cls);
	    el._prevClass = cls;
	  }
	}

	var klass = {
	  create: updateClass,
	  update: updateClass
	};

	// skip type checking this file because we need to attach private properties
	// to elements

	function updateDOMListeners (oldVnode, vnode) {
	  if (!oldVnode.data.on && !vnode.data.on) {
	    return
	  }
	  var on = vnode.data.on || {};
	  var oldOn = oldVnode.data.on || {};
	  var add = vnode.elm._v_add || (vnode.elm._v_add = function (event, handler, capture) {
	    vnode.elm.addEventListener(event, handler, capture);
	  });
	  var remove = vnode.elm._v_remove || (vnode.elm._v_remove = function (event, handler) {
	    vnode.elm.removeEventListener(event, handler);
	  });
	  updateListeners(on, oldOn, add, remove, vnode.context);
	}

	var events = {
	  create: updateDOMListeners,
	  update: updateDOMListeners
	};

	/*  */

	function updateDOMProps (oldVnode, vnode) {
	  if (!oldVnode.data.domProps && !vnode.data.domProps) {
	    return
	  }
	  var key, cur;
	  var elm = vnode.elm;
	  var oldProps = oldVnode.data.domProps || {};
	  var props = vnode.data.domProps || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (props.__ob__) {
	    props = vnode.data.domProps = extend({}, props);
	  }

	  for (key in oldProps) {
	    if (props[key] == null) {
	      elm[key] = '';
	    }
	  }
	  for (key in props) {
	    // ignore children if the node has textContent or innerHTML,
	    // as these will throw away existing DOM nodes and cause removal errors
	    // on subsequent patches (#3360)
	    if ((key === 'textContent' || key === 'innerHTML') && vnode.children) {
	      vnode.children.length = 0;
	    }
	    cur = props[key];
	    if (key === 'value') {
	      // store value as _value as well since
	      // non-string values will be stringified
	      elm._value = cur;
	      // avoid resetting cursor position when value is the same
	      var strCur = cur == null ? '' : String(cur);
	      if (elm.value !== strCur && !elm.composing) {
	        elm.value = strCur;
	      }
	    } else {
	      elm[key] = cur;
	    }
	  }
	}

	var domProps = {
	  create: updateDOMProps,
	  update: updateDOMProps
	};

	/*  */

	var cssVarRE = /^--/;
	var setProp = function (el, name, val) {
	  /* istanbul ignore if */
	  if (cssVarRE.test(name)) {
	    el.style.setProperty(name, val);
	  } else {
	    el.style[normalize(name)] = val;
	  }
	};

	var prefixes = ['Webkit', 'Moz', 'ms'];

	var testEl;
	var normalize = cached(function (prop) {
	  testEl = testEl || document.createElement('div');
	  prop = camelize(prop);
	  if (prop !== 'filter' && (prop in testEl.style)) {
	    return prop
	  }
	  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
	  for (var i = 0; i < prefixes.length; i++) {
	    var prefixed = prefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixed
	    }
	  }
	});

	function updateStyle (oldVnode, vnode) {
	  if ((!oldVnode.data || !oldVnode.data.style) && !vnode.data.style) {
	    return
	  }
	  var cur, name;
	  var el = vnode.elm;
	  var oldStyle = oldVnode.data.style || {};
	  var style = vnode.data.style || {};

	  // handle string
	  if (typeof style === 'string') {
	    el.style.cssText = style;
	    return
	  }

	  var needClone = style.__ob__;

	  // handle array syntax
	  if (Array.isArray(style)) {
	    style = vnode.data.style = toObject(style);
	  }

	  // clone the style for future updates,
	  // in case the user mutates the style object in-place.
	  if (needClone) {
	    style = vnode.data.style = extend({}, style);
	  }

	  for (name in oldStyle) {
	    if (style[name] == null) {
	      setProp(el, name, '');
	    }
	  }
	  for (name in style) {
	    cur = style[name];
	    if (cur !== oldStyle[name]) {
	      // ie9 setting to null has no effect, must use empty string
	      setProp(el, name, cur == null ? '' : cur);
	    }
	  }
	}

	var style = {
	  create: updateStyle,
	  update: updateStyle
	};

	/*  */

	/**
	 * Add class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function addClass (el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !cls.trim()) {
	    return
	  }

	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
	    } else {
	      el.classList.add(cls);
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim());
	    }
	  }
	}

	/**
	 * Remove class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function removeClass (el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !cls.trim()) {
	    return
	  }

	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
	    } else {
	      el.classList.remove(cls);
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    el.setAttribute('class', cur.trim());
	  }
	}

	/*  */

	var hasTransition = inBrowser && !isIE9;
	var TRANSITION = 'transition';
	var ANIMATION = 'animation';

	// Transition property/event sniffing
	var transitionProp = 'transition';
	var transitionEndEvent = 'transitionend';
	var animationProp = 'animation';
	var animationEndEvent = 'animationend';
	if (hasTransition) {
	  /* istanbul ignore if */
	  if (window.ontransitionend === undefined &&
	    window.onwebkittransitionend !== undefined) {
	    transitionProp = 'WebkitTransition';
	    transitionEndEvent = 'webkitTransitionEnd';
	  }
	  if (window.onanimationend === undefined &&
	    window.onwebkitanimationend !== undefined) {
	    animationProp = 'WebkitAnimation';
	    animationEndEvent = 'webkitAnimationEnd';
	  }
	}

	var raf = (inBrowser && window.requestAnimationFrame) || setTimeout;
	function nextFrame (fn) {
	  raf(function () {
	    raf(fn);
	  });
	}

	function addTransitionClass (el, cls) {
	  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
	  addClass(el, cls);
	}

	function removeTransitionClass (el, cls) {
	  if (el._transitionClasses) {
	    remove$1(el._transitionClasses, cls);
	  }
	  removeClass(el, cls);
	}

	function whenTransitionEnds (
	  el,
	  expectedType,
	  cb
	) {
	  var ref = getTransitionInfo(el, expectedType);
	  var type = ref.type;
	  var timeout = ref.timeout;
	  var propCount = ref.propCount;
	  if (!type) { return cb() }
	  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
	  var ended = 0;
	  var end = function () {
	    el.removeEventListener(event, onEnd);
	    cb();
	  };
	  var onEnd = function (e) {
	    if (e.target === el) {
	      if (++ended >= propCount) {
	        end();
	      }
	    }
	  };
	  setTimeout(function () {
	    if (ended < propCount) {
	      end();
	    }
	  }, timeout + 1);
	  el.addEventListener(event, onEnd);
	}

	var transformRE = /\b(transform|all)(,|$)/;

	function getTransitionInfo (el, expectedType) {
	  var styles = window.getComputedStyle(el);
	  var transitioneDelays = styles[transitionProp + 'Delay'].split(', ');
	  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
	  var transitionTimeout = getTimeout(transitioneDelays, transitionDurations);
	  var animationDelays = styles[animationProp + 'Delay'].split(', ');
	  var animationDurations = styles[animationProp + 'Duration'].split(', ');
	  var animationTimeout = getTimeout(animationDelays, animationDurations);

	  var type;
	  var timeout = 0;
	  var propCount = 0;
	  /* istanbul ignore if */
	  if (expectedType === TRANSITION) {
	    if (transitionTimeout > 0) {
	      type = TRANSITION;
	      timeout = transitionTimeout;
	      propCount = transitionDurations.length;
	    }
	  } else if (expectedType === ANIMATION) {
	    if (animationTimeout > 0) {
	      type = ANIMATION;
	      timeout = animationTimeout;
	      propCount = animationDurations.length;
	    }
	  } else {
	    timeout = Math.max(transitionTimeout, animationTimeout);
	    type = timeout > 0
	      ? transitionTimeout > animationTimeout
	        ? TRANSITION
	        : ANIMATION
	      : null;
	    propCount = type
	      ? type === TRANSITION
	        ? transitionDurations.length
	        : animationDurations.length
	      : 0;
	  }
	  var hasTransform =
	    type === TRANSITION &&
	    transformRE.test(styles[transitionProp + 'Property']);
	  return {
	    type: type,
	    timeout: timeout,
	    propCount: propCount,
	    hasTransform: hasTransform
	  }
	}

	function getTimeout (delays, durations) {
	  /* istanbul ignore next */
	  while (delays.length < durations.length) {
	    delays = delays.concat(delays);
	  }

	  return Math.max.apply(null, durations.map(function (d, i) {
	    return toMs(d) + toMs(delays[i])
	  }))
	}

	function toMs (s) {
	  return Number(s.slice(0, -1)) * 1000
	}

	/*  */

	function enter (vnode) {
	  var el = vnode.elm;

	  // call leave callback now
	  if (el._leaveCb) {
	    el._leaveCb.cancelled = true;
	    el._leaveCb();
	  }

	  var data = resolveTransition(vnode.data.transition);
	  if (!data) {
	    return
	  }

	  /* istanbul ignore if */
	  if (el._enterCb || el.nodeType !== 1) {
	    return
	  }

	  var css = data.css;
	  var type = data.type;
	  var enterClass = data.enterClass;
	  var enterActiveClass = data.enterActiveClass;
	  var appearClass = data.appearClass;
	  var appearActiveClass = data.appearActiveClass;
	  var beforeEnter = data.beforeEnter;
	  var enter = data.enter;
	  var afterEnter = data.afterEnter;
	  var enterCancelled = data.enterCancelled;
	  var beforeAppear = data.beforeAppear;
	  var appear = data.appear;
	  var afterAppear = data.afterAppear;
	  var appearCancelled = data.appearCancelled;

	  // activeInstance will always be the <transition> component managing this
	  // transition. One edge case to check is when the <transition> is placed
	  // as the root node of a child component. In that case we need to check
	  // <transition>'s parent for appear check.
	  var transitionNode = activeInstance.$vnode;
	  var context = transitionNode && transitionNode.parent
	    ? transitionNode.parent.context
	    : activeInstance;

	  var isAppear = !context._isMounted || !vnode.isRootInsert;

	  if (isAppear && !appear && appear !== '') {
	    return
	  }

	  var startClass = isAppear ? appearClass : enterClass;
	  var activeClass = isAppear ? appearActiveClass : enterActiveClass;
	  var beforeEnterHook = isAppear ? (beforeAppear || beforeEnter) : beforeEnter;
	  var enterHook = isAppear ? (typeof appear === 'function' ? appear : enter) : enter;
	  var afterEnterHook = isAppear ? (afterAppear || afterEnter) : afterEnter;
	  var enterCancelledHook = isAppear ? (appearCancelled || enterCancelled) : enterCancelled;

	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl =
	    enterHook &&
	    // enterHook may be a bound method which exposes
	    // the length of original fn as _length
	    (enterHook._length || enterHook.length) > 1;

	  var cb = el._enterCb = once(function () {
	    if (expectsCSS) {
	      removeTransitionClass(el, activeClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, startClass);
	      }
	      enterCancelledHook && enterCancelledHook(el);
	    } else {
	      afterEnterHook && afterEnterHook(el);
	    }
	    el._enterCb = null;
	  });

	  if (!vnode.data.show) {
	    // remove pending leave element on enter by injecting an insert hook
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
	      var parent = el.parentNode;
	      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
	      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
	        pendingNode.elm._leaveCb();
	      }
	      enterHook && enterHook(el, cb);
	    }, 'transition-insert');
	  }

	  // start enter transition
	  beforeEnterHook && beforeEnterHook(el);
	  if (expectsCSS) {
	    addTransitionClass(el, startClass);
	    addTransitionClass(el, activeClass);
	    nextFrame(function () {
	      removeTransitionClass(el, startClass);
	      if (!cb.cancelled && !userWantsControl) {
	        whenTransitionEnds(el, type, cb);
	      }
	    });
	  }

	  if (vnode.data.show) {
	    enterHook && enterHook(el, cb);
	  }

	  if (!expectsCSS && !userWantsControl) {
	    cb();
	  }
	}

	function leave (vnode, rm) {
	  var el = vnode.elm;

	  // call enter callback now
	  if (el._enterCb) {
	    el._enterCb.cancelled = true;
	    el._enterCb();
	  }

	  var data = resolveTransition(vnode.data.transition);
	  if (!data) {
	    return rm()
	  }

	  /* istanbul ignore if */
	  if (el._leaveCb || el.nodeType !== 1) {
	    return
	  }

	  var css = data.css;
	  var type = data.type;
	  var leaveClass = data.leaveClass;
	  var leaveActiveClass = data.leaveActiveClass;
	  var beforeLeave = data.beforeLeave;
	  var leave = data.leave;
	  var afterLeave = data.afterLeave;
	  var leaveCancelled = data.leaveCancelled;
	  var delayLeave = data.delayLeave;

	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl =
	    leave &&
	    // leave hook may be a bound method which exposes
	    // the length of original fn as _length
	    (leave._length || leave.length) > 1;

	  var cb = el._leaveCb = once(function () {
	    if (el.parentNode && el.parentNode._pending) {
	      el.parentNode._pending[vnode.key] = null;
	    }
	    if (expectsCSS) {
	      removeTransitionClass(el, leaveActiveClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, leaveClass);
	      }
	      leaveCancelled && leaveCancelled(el);
	    } else {
	      rm();
	      afterLeave && afterLeave(el);
	    }
	    el._leaveCb = null;
	  });

	  if (delayLeave) {
	    delayLeave(performLeave);
	  } else {
	    performLeave();
	  }

	  function performLeave () {
	    // the delayed leave may have already been cancelled
	    if (cb.cancelled) {
	      return
	    }
	    // record leaving element
	    if (!vnode.data.show) {
	      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
	    }
	    beforeLeave && beforeLeave(el);
	    if (expectsCSS) {
	      addTransitionClass(el, leaveClass);
	      addTransitionClass(el, leaveActiveClass);
	      nextFrame(function () {
	        removeTransitionClass(el, leaveClass);
	        if (!cb.cancelled && !userWantsControl) {
	          whenTransitionEnds(el, type, cb);
	        }
	      });
	    }
	    leave && leave(el, cb);
	    if (!expectsCSS && !userWantsControl) {
	      cb();
	    }
	  }
	}

	function resolveTransition (def$$1) {
	  if (!def$$1) {
	    return
	  }
	  /* istanbul ignore else */
	  if (typeof def$$1 === 'object') {
	    var res = {};
	    if (def$$1.css !== false) {
	      extend(res, autoCssTransition(def$$1.name || 'v'));
	    }
	    extend(res, def$$1);
	    return res
	  } else if (typeof def$$1 === 'string') {
	    return autoCssTransition(def$$1)
	  }
	}

	var autoCssTransition = cached(function (name) {
	  return {
	    enterClass: (name + "-enter"),
	    leaveClass: (name + "-leave"),
	    appearClass: (name + "-enter"),
	    enterActiveClass: (name + "-enter-active"),
	    leaveActiveClass: (name + "-leave-active"),
	    appearActiveClass: (name + "-enter-active")
	  }
	});

	function once (fn) {
	  var called = false;
	  return function () {
	    if (!called) {
	      called = true;
	      fn();
	    }
	  }
	}

	var transition = inBrowser ? {
	  create: function create (_, vnode) {
	    if (!vnode.data.show) {
	      enter(vnode);
	    }
	  },
	  remove: function remove (vnode, rm) {
	    /* istanbul ignore else */
	    if (!vnode.data.show) {
	      leave(vnode, rm);
	    } else {
	      rm();
	    }
	  }
	} : {};

	var platformModules = [
	  attrs,
	  klass,
	  events,
	  domProps,
	  style,
	  transition
	];

	/*  */

	// the directive module should be applied last, after all
	// built-in modules have been applied.
	var modules = platformModules.concat(baseModules);

	var patch$1 = createPatchFunction({ nodeOps: nodeOps, modules: modules });

	/**
	 * Not type checking this file because flow doesn't like attaching
	 * properties to Elements.
	 */

	var modelableTagRE = /^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_-]*)?$/;

	/* istanbul ignore if */
	if (isIE9) {
	  // http://www.matts411.com/post/internet-explorer-9-oninput/
	  document.addEventListener('selectionchange', function () {
	    var el = document.activeElement;
	    if (el && el.vmodel) {
	      trigger(el, 'input');
	    }
	  });
	}

	var model = {
	  inserted: function inserted (el, binding, vnode) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (!modelableTagRE.test(vnode.tag)) {
	        warn(
	          "v-model is not supported on element type: <" + (vnode.tag) + ">. " +
	          'If you are working with contenteditable, it\'s recommended to ' +
	          'wrap a library dedicated for that purpose inside a custom component.',
	          vnode.context
	        );
	      }
	    }
	    if (vnode.tag === 'select') {
	      var cb = function () {
	        setSelected(el, binding, vnode.context);
	      };
	      cb();
	      /* istanbul ignore if */
	      if (isIE || isEdge) {
	        setTimeout(cb, 0);
	      }
	    } else if (
	      (vnode.tag === 'textarea' || el.type === 'text') &&
	      !binding.modifiers.lazy
	    ) {
	      if (!isAndroid) {
	        el.addEventListener('compositionstart', onCompositionStart);
	        el.addEventListener('compositionend', onCompositionEnd);
	      }
	      /* istanbul ignore if */
	      if (isIE9) {
	        el.vmodel = true;
	      }
	    }
	  },
	  componentUpdated: function componentUpdated (el, binding, vnode) {
	    if (vnode.tag === 'select') {
	      setSelected(el, binding, vnode.context);
	      // in case the options rendered by v-for have changed,
	      // it's possible that the value is out-of-sync with the rendered options.
	      // detect such cases and filter out values that no longer has a matching
	      // option in the DOM.
	      var needReset = el.multiple
	        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
	        : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
	      if (needReset) {
	        trigger(el, 'change');
	      }
	    }
	  }
	};

	function setSelected (el, binding, vm) {
	  var value = binding.value;
	  var isMultiple = el.multiple;
	  if (isMultiple && !Array.isArray(value)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
	      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
	      vm
	    );
	    return
	  }
	  var selected, option;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    option = el.options[i];
	    if (isMultiple) {
	      selected = looseIndexOf(value, getValue(option)) > -1;
	      if (option.selected !== selected) {
	        option.selected = selected;
	      }
	    } else {
	      if (looseEqual(getValue(option), value)) {
	        if (el.selectedIndex !== i) {
	          el.selectedIndex = i;
	        }
	        return
	      }
	    }
	  }
	  if (!isMultiple) {
	    el.selectedIndex = -1;
	  }
	}

	function hasNoMatchingOption (value, options) {
	  for (var i = 0, l = options.length; i < l; i++) {
	    if (looseEqual(getValue(options[i]), value)) {
	      return false
	    }
	  }
	  return true
	}

	function getValue (option) {
	  return '_value' in option
	    ? option._value
	    : option.value
	}

	function onCompositionStart (e) {
	  e.target.composing = true;
	}

	function onCompositionEnd (e) {
	  e.target.composing = false;
	  trigger(e.target, 'input');
	}

	function trigger (el, type) {
	  var e = document.createEvent('HTMLEvents');
	  e.initEvent(type, true, true);
	  el.dispatchEvent(e);
	}

	/*  */

	// recursively search for possible transition defined inside the component root
	function locateNode (vnode) {
	  return vnode.child && (!vnode.data || !vnode.data.transition)
	    ? locateNode(vnode.child._vnode)
	    : vnode
	}

	var show = {
	  bind: function bind (el, ref, vnode) {
	    var value = ref.value;

	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    if (value && transition && !isIE9) {
	      enter(vnode);
	    }
	    var originalDisplay = el.style.display === 'none' ? '' : el.style.display;
	    el.style.display = value ? originalDisplay : 'none';
	    el.__vOriginalDisplay = originalDisplay;
	  },
	  update: function update (el, ref, vnode) {
	    var value = ref.value;
	    var oldValue = ref.oldValue;

	    /* istanbul ignore if */
	    if (value === oldValue) { return }
	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    if (transition && !isIE9) {
	      if (value) {
	        enter(vnode);
	        el.style.display = el.__vOriginalDisplay;
	      } else {
	        leave(vnode, function () {
	          el.style.display = 'none';
	        });
	      }
	    } else {
	      el.style.display = value ? el.__vOriginalDisplay : 'none';
	    }
	  }
	};

	var platformDirectives = {
	  model: model,
	  show: show
	};

	/*  */

	// Provides transition support for a single element/component.
	// supports transition mode (out-in / in-out)

	var transitionProps = {
	  name: String,
	  appear: Boolean,
	  css: Boolean,
	  mode: String,
	  type: String,
	  enterClass: String,
	  leaveClass: String,
	  enterActiveClass: String,
	  leaveActiveClass: String,
	  appearClass: String,
	  appearActiveClass: String
	};

	// in case the child is also an abstract component, e.g. <keep-alive>
	// we want to recursively retrieve the real component to be rendered
	function getRealChild (vnode) {
	  var compOptions = vnode && vnode.componentOptions;
	  if (compOptions && compOptions.Ctor.options.abstract) {
	    return getRealChild(getFirstComponentChild(compOptions.children))
	  } else {
	    return vnode
	  }
	}

	function extractTransitionData (comp) {
	  var data = {};
	  var options = comp.$options;
	  // props
	  for (var key in options.propsData) {
	    data[key] = comp[key];
	  }
	  // events.
	  // extract listeners and pass them directly to the transition methods
	  var listeners = options._parentListeners;
	  for (var key$1 in listeners) {
	    data[camelize(key$1)] = listeners[key$1].fn;
	  }
	  return data
	}

	function placeholder (h, rawChild) {
	  return /\d-keep-alive$/.test(rawChild.tag)
	    ? h('keep-alive')
	    : null
	}

	function hasParentTransition (vnode) {
	  while ((vnode = vnode.parent)) {
	    if (vnode.data.transition) {
	      return true
	    }
	  }
	}

	var Transition = {
	  name: 'transition',
	  props: transitionProps,
	  abstract: true,
	  render: function render (h) {
	    var this$1 = this;

	    var children = this.$slots.default;
	    if (!children) {
	      return
	    }

	    // filter out text nodes (possible whitespaces)
	    children = children.filter(function (c) { return c.tag; });
	    /* istanbul ignore if */
	    if (!children.length) {
	      return
	    }

	    // warn multiple elements
	    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
	      warn(
	        '<transition> can only be used on a single element. Use ' +
	        '<transition-group> for lists.',
	        this.$parent
	      );
	    }

	    var mode = this.mode;

	    // warn invalid mode
	    if (process.env.NODE_ENV !== 'production' &&
	        mode && mode !== 'in-out' && mode !== 'out-in') {
	      warn(
	        'invalid <transition> mode: ' + mode,
	        this.$parent
	      );
	    }

	    var rawChild = children[0];

	    // if this is a component root node and the component's
	    // parent container node also has transition, skip.
	    if (hasParentTransition(this.$vnode)) {
	      return rawChild
	    }

	    // apply transition data to child
	    // use getRealChild() to ignore abstract components e.g. keep-alive
	    var child = getRealChild(rawChild);
	    /* istanbul ignore if */
	    if (!child) {
	      return rawChild
	    }

	    if (this._leaving) {
	      return placeholder(h, rawChild)
	    }

	    var key = child.key = child.key == null || child.isStatic
	      ? ("__v" + (child.tag + this._uid) + "__")
	      : child.key;
	    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
	    var oldRawChild = this._vnode;
	    var oldChild = getRealChild(oldRawChild);

	    // mark v-show
	    // so that the transition module can hand over the control to the directive
	    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
	      child.data.show = true;
	    }

	    if (oldChild && oldChild.data && oldChild.key !== key) {
	      // replace old child transition data with fresh one
	      // important for dynamic transitions!
	      var oldData = oldChild.data.transition = extend({}, data);

	      // handle transition mode
	      if (mode === 'out-in') {
	        // return placeholder node and queue update when leave finishes
	        this._leaving = true;
	        mergeVNodeHook(oldData, 'afterLeave', function () {
	          this$1._leaving = false;
	          this$1.$forceUpdate();
	        }, key);
	        return placeholder(h, rawChild)
	      } else if (mode === 'in-out') {
	        var delayedLeave;
	        var performLeave = function () { delayedLeave(); };
	        mergeVNodeHook(data, 'afterEnter', performLeave, key);
	        mergeVNodeHook(data, 'enterCancelled', performLeave, key);
	        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
	          delayedLeave = leave;
	        }, key);
	      }
	    }

	    return rawChild
	  }
	};

	/*  */

	// Provides transition support for list items.
	// supports move transitions using the FLIP technique.

	// Because the vdom's children update algorithm is "unstable" - i.e.
	// it doesn't guarantee the relative positioning of removed elements,
	// we force transition-group to update its children into two passes:
	// in the first pass, we remove all nodes that need to be removed,
	// triggering their leaving transition; in the second pass, we insert/move
	// into the final disired state. This way in the second pass removed
	// nodes will remain where they should be.

	var props = extend({
	  tag: String,
	  moveClass: String
	}, transitionProps);

	delete props.mode;

	var TransitionGroup = {
	  props: props,

	  render: function render (h) {
	    var tag = this.tag || this.$vnode.data.tag || 'span';
	    var map = Object.create(null);
	    var prevChildren = this.prevChildren = this.children;
	    var rawChildren = this.$slots.default || [];
	    var children = this.children = [];
	    var transitionData = extractTransitionData(this);

	    for (var i = 0; i < rawChildren.length; i++) {
	      var c = rawChildren[i];
	      if (c.tag) {
	        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
	          children.push(c);
	          map[c.key] = c
	          ;(c.data || (c.data = {})).transition = transitionData;
	        } else if (process.env.NODE_ENV !== 'production') {
	          var opts = c.componentOptions;
	          var name = opts
	            ? (opts.Ctor.options.name || opts.tag)
	            : c.tag;
	          warn(("<transition-group> children must be keyed: <" + name + ">"));
	        }
	      }
	    }

	    if (prevChildren) {
	      var kept = [];
	      var removed = [];
	      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
	        var c$1 = prevChildren[i$1];
	        c$1.data.transition = transitionData;
	        c$1.data.pos = c$1.elm.getBoundingClientRect();
	        if (map[c$1.key]) {
	          kept.push(c$1);
	        } else {
	          removed.push(c$1);
	        }
	      }
	      this.kept = h(tag, null, kept);
	      this.removed = removed;
	    }

	    return h(tag, null, children)
	  },

	  beforeUpdate: function beforeUpdate () {
	    // force removing pass
	    this.__patch__(
	      this._vnode,
	      this.kept,
	      false, // hydrating
	      true // removeOnly (!important, avoids unnecessary moves)
	    );
	    this._vnode = this.kept;
	  },

	  updated: function updated () {
	    var children = this.prevChildren;
	    var moveClass = this.moveClass || (this.name + '-move');
	    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
	      return
	    }

	    // we divide the work into three loops to avoid mixing DOM reads and writes
	    // in each iteration - which helps prevent layout thrashing.
	    children.forEach(callPendingCbs);
	    children.forEach(recordPosition);
	    children.forEach(applyTranslation);

	    // force reflow to put everything in position
	    var f = document.body.offsetHeight; // eslint-disable-line

	    children.forEach(function (c) {
	      if (c.data.moved) {
	        var el = c.elm;
	        var s = el.style;
	        addTransitionClass(el, moveClass);
	        s.transform = s.WebkitTransform = s.transitionDuration = '';
	        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
	          if (!e || /transform$/.test(e.propertyName)) {
	            el.removeEventListener(transitionEndEvent, cb);
	            el._moveCb = null;
	            removeTransitionClass(el, moveClass);
	          }
	        });
	      }
	    });
	  },

	  methods: {
	    hasMove: function hasMove (el, moveClass) {
	      /* istanbul ignore if */
	      if (!hasTransition) {
	        return false
	      }
	      if (this._hasMove != null) {
	        return this._hasMove
	      }
	      addTransitionClass(el, moveClass);
	      var info = getTransitionInfo(el);
	      removeTransitionClass(el, moveClass);
	      return (this._hasMove = info.hasTransform)
	    }
	  }
	};

	function callPendingCbs (c) {
	  /* istanbul ignore if */
	  if (c.elm._moveCb) {
	    c.elm._moveCb();
	  }
	  /* istanbul ignore if */
	  if (c.elm._enterCb) {
	    c.elm._enterCb();
	  }
	}

	function recordPosition (c) {
	  c.data.newPos = c.elm.getBoundingClientRect();
	}

	function applyTranslation (c) {
	  var oldPos = c.data.pos;
	  var newPos = c.data.newPos;
	  var dx = oldPos.left - newPos.left;
	  var dy = oldPos.top - newPos.top;
	  if (dx || dy) {
	    c.data.moved = true;
	    var s = c.elm.style;
	    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
	    s.transitionDuration = '0s';
	  }
	}

	var platformComponents = {
	  Transition: Transition,
	  TransitionGroup: TransitionGroup
	};

	/*  */

	// install platform specific utils
	Vue$1.config.isUnknownElement = isUnknownElement;
	Vue$1.config.isReservedTag = isReservedTag;
	Vue$1.config.getTagNamespace = getTagNamespace;
	Vue$1.config.mustUseProp = mustUseProp;

	// install platform runtime directives & components
	extend(Vue$1.options.directives, platformDirectives);
	extend(Vue$1.options.components, platformComponents);

	// install platform patch function
	Vue$1.prototype.__patch__ = config._isServer ? noop : patch$1;

	// wrap mount
	Vue$1.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && !config._isServer ? query(el) : undefined;
	  return this._mount(el, hydrating)
	};

	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue$1);
	    } else if (
	      process.env.NODE_ENV !== 'production' &&
	      inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)
	    ) {
	      console.log(
	        'Download the Vue Devtools for a better development experience:\n' +
	        'https://github.com/vuejs/vue-devtools'
	      );
	    }
	  }
	}, 0);

	module.exports = Vue$1;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * vue-router v2.0.1
	 * (c) 2016 Evan You
	 * @license MIT
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.VueRouter = factory());
	}(this, (function () { 'use strict';

	var View = {
	  name: 'router-view',
	  functional: true,
	  props: {
	    name: {
	      type: String,
	      default: 'default'
	    }
	  },
	  render: function render (h, ref) {
	    var props = ref.props;
	    var children = ref.children;
	    var parent = ref.parent;
	    var data = ref.data;

	    data.routerView = true

	    var route = parent.$route
	    var cache = parent._routerViewCache || (parent._routerViewCache = {})
	    var depth = 0
	    var inactive = false

	    while (parent) {
	      if (parent.$vnode && parent.$vnode.data.routerView) {
	        depth++
	      }
	      if (parent._inactive) {
	        inactive = true
	      }
	      parent = parent.$parent
	    }

	    data.routerViewDepth = depth
	    var matched = route.matched[depth]
	    if (!matched) {
	      return h()
	    }

	    var name = props.name
	    var component = inactive
	      ? cache[name]
	      : (cache[name] = matched.components[name])

	    if (!inactive) {
	      var hooks = data.hook || (data.hook = {})
	      hooks.init = function (vnode) {
	        matched.instances[name] = vnode.child
	      }
	      hooks.destroy = function (vnode) {
	        if (matched.instances[name] === vnode.child) {
	          matched.instances[name] = undefined
	        }
	      }
	    }

	    return h(component, data, children)
	  }
	}

	/*  */

	function resolvePath (
	  relative,
	  base,
	  append
	) {
	  if (relative.charAt(0) === '/') {
	    return relative
	  }

	  if (relative.charAt(0) === '?' || relative.charAt(0) === '#') {
	    return base + relative
	  }

	  var stack = base.split('/')

	  // remove trailing segment if:
	  // - not appending
	  // - appending to trailing slash (last segment is empty)
	  if (!append || !stack[stack.length - 1]) {
	    stack.pop()
	  }

	  // resolve relative path
	  var segments = relative.replace(/^\//, '').split('/')
	  for (var i = 0; i < segments.length; i++) {
	    var segment = segments[i]
	    if (segment === '.') {
	      continue
	    } else if (segment === '..') {
	      stack.pop()
	    } else {
	      stack.push(segment)
	    }
	  }

	  // ensure leading slash
	  if (stack[0] !== '') {
	    stack.unshift('')
	  }

	  return stack.join('/')
	}

	function parsePath (path) {
	  var hash = ''
	  var query = ''

	  var hashIndex = path.indexOf('#')
	  if (hashIndex >= 0) {
	    hash = path.slice(hashIndex)
	    path = path.slice(0, hashIndex)
	  }

	  var queryIndex = path.indexOf('?')
	  if (queryIndex >= 0) {
	    query = path.slice(queryIndex + 1)
	    path = path.slice(0, queryIndex)
	  }

	  return {
	    path: path,
	    query: query,
	    hash: hash
	  }
	}

	function cleanPath (path) {
	  return path.replace(/\/\//g, '/')
	}

	/*  */

	function assert (condition, message) {
	  if (!condition) {
	    throw new Error(("[vue-router] " + message))
	  }
	}

	function warn (condition, message) {
	  if (!condition) {
	    typeof console !== 'undefined' && console.warn(("[vue-router] " + message))
	  }
	}

	/*  */

	var encode = encodeURIComponent
	var decode = decodeURIComponent

	function resolveQuery (
	  query,
	  extraQuery
	) {
	  if ( extraQuery === void 0 ) extraQuery = {};

	  if (query) {
	    var parsedQuery
	    try {
	      parsedQuery = parseQuery(query)
	    } catch (e) {
	      warn(false, e.message)
	      parsedQuery = {}
	    }
	    for (var key in extraQuery) {
	      parsedQuery[key] = extraQuery[key]
	    }
	    return parsedQuery
	  } else {
	    return extraQuery
	  }
	}

	function parseQuery (query) {
	  var res = Object.create(null)

	  query = query.trim().replace(/^(\?|#|&)/, '')

	  if (!query) {
	    return res
	  }

	  query.split('&').forEach(function (param) {
	    var parts = param.replace(/\+/g, ' ').split('=')
	    var key = decode(parts.shift())
	    var val = parts.length > 0
	      ? decode(parts.join('='))
	      : null

	    if (res[key] === undefined) {
	      res[key] = val
	    } else if (Array.isArray(res[key])) {
	      res[key].push(val)
	    } else {
	      res[key] = [res[key], val]
	    }
	  })

	  return res
	}

	function stringifyQuery (obj) {
	  var res = obj ? Object.keys(obj).sort().map(function (key) {
	    var val = obj[key]

	    if (val === undefined) {
	      return ''
	    }

	    if (val === null) {
	      return encode(key)
	    }

	    if (Array.isArray(val)) {
	      var result = []
	      val.slice().forEach(function (val2) {
	        if (val2 === undefined) {
	          return
	        }
	        if (val2 === null) {
	          result.push(encode(key))
	        } else {
	          result.push(encode(key) + '=' + encode(val2))
	        }
	      })
	      return result.join('&')
	    }

	    return encode(key) + '=' + encode(val)
	  }).filter(function (x) { return x.length > 0; }).join('&') : null
	  return res ? ("?" + res) : ''
	}

	/*  */

	function createRoute (
	  record,
	  location,
	  redirectedFrom
	) {
	  var route = {
	    name: location.name || (record && record.name),
	    meta: (record && record.meta) || {},
	    path: location.path || '/',
	    hash: location.hash || '',
	    query: location.query || {},
	    params: location.params || {},
	    fullPath: getFullPath(location),
	    matched: record ? formatMatch(record) : []
	  }
	  if (redirectedFrom) {
	    route.redirectedFrom = getFullPath(redirectedFrom)
	  }
	  return Object.freeze(route)
	}

	// the starting route that represents the initial state
	var START = createRoute(null, {
	  path: '/'
	})

	function formatMatch (record) {
	  var res = []
	  while (record) {
	    res.unshift(record)
	    record = record.parent
	  }
	  return res
	}

	function getFullPath (ref) {
	  var path = ref.path;
	  var query = ref.query; if ( query === void 0 ) query = {};
	  var hash = ref.hash; if ( hash === void 0 ) hash = '';

	  return (path || '/') + stringifyQuery(query) + hash
	}

	var trailingSlashRE = /\/$/
	function isSameRoute (a, b) {
	  if (b === START) {
	    return a === b
	  } else if (!b) {
	    return false
	  } else if (a.path && b.path) {
	    return (
	      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query)
	    )
	  } else if (a.name && b.name) {
	    return (
	      a.name === b.name &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query) &&
	      isObjectEqual(a.params, b.params)
	    )
	  } else {
	    return false
	  }
	}

	function isObjectEqual (a, b) {
	  if ( a === void 0 ) a = {};
	  if ( b === void 0 ) b = {};

	  var aKeys = Object.keys(a)
	  var bKeys = Object.keys(b)
	  if (aKeys.length !== bKeys.length) {
	    return false
	  }
	  return aKeys.every(function (key) { return String(a[key]) === String(b[key]); })
	}

	function isIncludedRoute (current, target) {
	  return (
	    current.path.indexOf(target.path) === 0 &&
	    (!target.hash || current.hash === target.hash) &&
	    queryIncludes(current.query, target.query)
	  )
	}

	function queryIncludes (current, target) {
	  for (var key in target) {
	    if (!(key in current)) {
	      return false
	    }
	  }
	  return true
	}

	/*  */

	function normalizeLocation (
	  raw,
	  current,
	  append
	) {
	  var next = typeof raw === 'string' ? { path: raw } : raw
	  if (next.name || next._normalized) {
	    return next
	  }

	  var parsedPath = parsePath(next.path || '')
	  var basePath = (current && current.path) || '/'
	  var path = parsedPath.path
	    ? resolvePath(parsedPath.path, basePath, append)
	    : (current && current.path) || '/'
	  var query = resolveQuery(parsedPath.query, next.query)
	  var hash = next.hash || parsedPath.hash
	  if (hash && hash.charAt(0) !== '#') {
	    hash = "#" + hash
	  }

	  return {
	    _normalized: true,
	    path: path,
	    query: query,
	    hash: hash
	  }
	}

	/*  */

	// work around weird flow bug
	var toTypes = [String, Object]

	var Link = {
	  name: 'router-link',
	  props: {
	    to: {
	      type: toTypes,
	      required: true
	    },
	    tag: {
	      type: String,
	      default: 'a'
	    },
	    exact: Boolean,
	    append: Boolean,
	    replace: Boolean,
	    activeClass: String
	  },
	  render: function render (h) {
	    var this$1 = this;

	    var router = this.$router
	    var current = this.$route
	    var to = normalizeLocation(this.to, current, this.append)
	    var resolved = router.match(to)
	    var fullPath = resolved.redirectedFrom || resolved.fullPath
	    var base = router.history.base
	    var href = base ? cleanPath(base + fullPath) : fullPath
	    var classes = {}
	    var activeClass = this.activeClass || router.options.linkActiveClass || 'router-link-active'
	    var compareTarget = to.path ? createRoute(null, to) : resolved
	    classes[activeClass] = this.exact
	      ? isSameRoute(current, compareTarget)
	      : isIncludedRoute(current, compareTarget)

	    var on = {
	      click: function (e) {
	        // don't redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) { return }
	        // don't redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) { return }
	        // don't redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) { return }
	        e.preventDefault()
	        if (this$1.replace) {
	          router.replace(to)
	        } else {
	          router.push(to)
	        }
	      }
	    }

	    var data = {
	      class: classes
	    }

	    if (this.tag === 'a') {
	      data.on = on
	      data.attrs = { href: href }
	    } else {
	      // find the first <a> child and apply listener and href
	      var a = findAnchor(this.$slots.default)
	      if (a) {
	        var aData = a.data || (a.data = {})
	        aData.on = on
	        var aAttrs = aData.attrs || (aData.attrs = {})
	        aAttrs.href = href
	      } else {
	        // doesn't have <a> child, apply listener to self
	        data.on = on
	      }
	    }

	    return h(this.tag, data, this.$slots.default)
	  }
	}

	function findAnchor (children) {
	  if (children) {
	    var child
	    for (var i = 0; i < children.length; i++) {
	      child = children[i]
	      if (child.tag === 'a') {
	        return child
	      }
	      if (child.children && (child = findAnchor(child.children))) {
	        return child
	      }
	    }
	  }
	}

	function install (Vue) {
	  if (install.installed) { return }
	  install.installed = true

	  Object.defineProperty(Vue.prototype, '$router', {
	    get: function get () { return this.$root._router }
	  })

	  Object.defineProperty(Vue.prototype, '$route', {
	    get: function get$1 () { return this.$root._route }
	  })

	  Vue.mixin({
	    beforeCreate: function beforeCreate () {
	      if (this.$options.router) {
	        this._router = this.$options.router
	        this._router.init(this)
	        Vue.util.defineReactive(this, '_route', this._router.history.current)
	      }
	    }
	  })

	  Vue.component('router-view', View)
	  Vue.component('router-link', Link)
	}

	var __moduleExports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

	var isarray = __moduleExports

	/**
	 * Expose `pathToRegexp`.
	 */
	var index = pathToRegexp
	var parse_1 = parse
	var compile_1 = compile
	var tokensToFunction_1 = tokensToFunction
	var tokensToRegExp_1 = tokensToRegExp

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g')

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string} str
	 * @return {!Array}
	 */
	function parse (str) {
	  var tokens = []
	  var key = 0
	  var index = 0
	  var path = ''
	  var res

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0]
	    var escaped = res[1]
	    var offset = res.index
	    path += str.slice(index, offset)
	    index = offset + m.length

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1]
	      continue
	    }

	    var next = str[index]
	    var prefix = res[2]
	    var name = res[3]
	    var capture = res[4]
	    var group = res[5]
	    var modifier = res[6]
	    var asterisk = res[7]

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path)
	      path = ''
	    }

	    var partial = prefix != null && next != null && next !== prefix
	    var repeat = modifier === '+' || modifier === '*'
	    var optional = modifier === '?' || modifier === '*'
	    var delimiter = res[2] || '/'
	    var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?')

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: escapeGroup(pattern)
	    })
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index)
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path)
	  }

	  return tokens
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str) {
	  return tokensToFunction(parse(str))
	}

	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length)

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
	    }
	  }

	  return function (obj, opts) {
	    var path = ''
	    var data = obj || {}
	    var options = opts || {}
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i]

	      if (typeof token === 'string') {
	        path += token

	        continue
	      }

	      var value = data[token.name]
	      var segment

	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix
	          }

	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }

	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j])

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment
	        }

	        continue
	      }

	      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }

	      path += token.prefix + segment
	    }

	    return path
	  }
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys
	  return re
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g)

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      })
	    }
	  }

	  return attachKeys(path, keys)
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = []

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source)
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

	  return attachKeys(regexp, keys)
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  var tokens = parse(path)
	  var re = tokensToRegExp(tokens, options)

	  // Attach keys back to the regexp.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] !== 'string') {
	      keys.push(tokens[i])
	    }
	  }

	  return attachKeys(re, keys)
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}  tokens
	 * @param  {Object=} options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, options) {
	  options = options || {}

	  var strict = options.strict
	  var end = options.end !== false
	  var route = ''
	  var lastToken = tokens[tokens.length - 1]
	  var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken)

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i]

	    if (typeof token === 'string') {
	      route += escapeString(token)
	    } else {
	      var prefix = escapeString(token.prefix)
	      var capture = '(?:' + token.pattern + ')'

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*'
	      }

	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?'
	        } else {
	          capture = prefix + '(' + capture + ')?'
	        }
	      } else {
	        capture = prefix + '(' + capture + ')'
	      }

	      route += capture
	    }
	  }

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?'
	  }

	  if (end) {
	    route += '$'
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithSlash ? '' : '(?=\\/|$)'
	  }

	  return new RegExp('^' + route, flags(options))
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  keys = keys || []

	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys)
	    keys = []
	  } else if (!options) {
	    options = {}
	  }

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }

	  if (isarray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }

	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}

	index.parse = parse_1;
	index.compile = compile_1;
	index.tokensToFunction = tokensToFunction_1;
	index.tokensToRegExp = tokensToRegExp_1;

	/*  */

	function createRouteMap (routes) {
	  var pathMap = Object.create(null)
	  var nameMap = Object.create(null)

	  routes.forEach(function (route) {
	    addRouteRecord(pathMap, nameMap, route)
	  })

	  return {
	    pathMap: pathMap,
	    nameMap: nameMap
	  }
	}

	function addRouteRecord (
	  pathMap,
	  nameMap,
	  route,
	  parent,
	  matchAs
	) {
	  var path = route.path;
	  var name = route.name;
	  assert(path != null, "\"path\" is required in a route configuration.")

	  var record = {
	    path: normalizePath(path, parent),
	    components: route.components || { default: route.component },
	    instances: {},
	    name: name,
	    parent: parent,
	    matchAs: matchAs,
	    redirect: route.redirect,
	    beforeEnter: route.beforeEnter,
	    meta: route.meta || {}
	  }

	  if (route.children) {
	    // Warn if route is named and has a default child route.
	    // If users navigate to this route by name, the default child will
	    // not be rendered (GH Issue #629)
	    if (false) {}
	    route.children.forEach(function (child) {
	      addRouteRecord(pathMap, nameMap, child, record)
	    })
	  }

	  if (route.alias) {
	    if (Array.isArray(route.alias)) {
	      route.alias.forEach(function (alias) {
	        addRouteRecord(pathMap, nameMap, { path: alias }, parent, record.path)
	      })
	    } else {
	      addRouteRecord(pathMap, nameMap, { path: route.alias }, parent, record.path)
	    }
	  }

	  pathMap[record.path] = record
	  if (name) { nameMap[name] = record }
	}

	function normalizePath (path, parent) {
	  path = path.replace(/\/$/, '')
	  if (path[0] === '/') { return path }
	  if (parent == null) { return path }
	  return cleanPath(((parent.path) + "/" + path))
	}

	/*  */

	var regexpCache = Object.create(null)

	var regexpCompileCache = Object.create(null)

	function createMatcher (routes) {
	  var ref = createRouteMap(routes);
	  var pathMap = ref.pathMap;
	  var nameMap = ref.nameMap;

	  function match (
	    raw,
	    currentRoute,
	    redirectedFrom
	  ) {
	    var location = normalizeLocation(raw, currentRoute)
	    var name = location.name;

	    if (name) {
	      var record = nameMap[name]
	      if (record) {
	        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""))
	        return _createRoute(record, location, redirectedFrom)
	      }
	    } else if (location.path) {
	      location.params = {}
	      for (var path in pathMap) {
	        if (matchRoute(path, location.params, location.path)) {
	          return _createRoute(pathMap[path], location, redirectedFrom)
	        }
	      }
	    }
	    // no match
	    return _createRoute(null, location)
	  }

	  function redirect (
	    record,
	    location
	  ) {
	    var originalRedirect = record.redirect
	    var redirect = typeof originalRedirect === 'function'
	        ? originalRedirect(createRoute(record, location))
	        : originalRedirect

	    if (typeof redirect === 'string') {
	      redirect = { path: redirect }
	    }

	    if (!redirect || typeof redirect !== 'object') {
	      warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))))
	      return _createRoute(null, location)
	    }

	    var re = redirect
	    var name = re.name;
	    var path = re.path;
	    var query = location.query;
	    var hash = location.hash;
	    var params = location.params;
	    query = re.hasOwnProperty('query') ? re.query : query
	    hash = re.hasOwnProperty('hash') ? re.hash : hash
	    params = re.hasOwnProperty('params') ? re.params : params

	    if (name) {
	      // resolved named direct
	      var targetRecord = nameMap[name]
	      assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."))
	      return match({
	        _normalized: true,
	        name: name,
	        query: query,
	        hash: hash,
	        params: params
	      }, undefined, location)
	    } else if (path) {
	      // 1. resolve relative redirect
	      var rawPath = resolveRecordPath(path, record)
	      // 2. resolve params
	      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""))
	      // 3. rematch with existing query and hash
	      return match({
	        _normalized: true,
	        path: resolvedPath,
	        query: query,
	        hash: hash
	      }, undefined, location)
	    } else {
	      warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))))
	      return _createRoute(null, location)
	    }
	  }

	  function alias (
	    record,
	    location,
	    matchAs
	  ) {
	    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""))
	    var aliasedMatch = match({
	      _normalized: true,
	      path: aliasedPath
	    })
	    if (aliasedMatch) {
	      var matched = aliasedMatch.matched
	      var aliasedRecord = matched[matched.length - 1]
	      location.params = aliasedMatch.params
	      return _createRoute(aliasedRecord, location)
	    }
	    return _createRoute(null, location)
	  }

	  function _createRoute (
	    record,
	    location,
	    redirectedFrom
	  ) {
	    if (record && record.redirect) {
	      return redirect(record, redirectedFrom || location)
	    }
	    if (record && record.matchAs) {
	      return alias(record, location, record.matchAs)
	    }
	    return createRoute(record, location, redirectedFrom)
	  }

	  return match
	}

	function matchRoute (
	  path,
	  params,
	  pathname
	) {
	  var keys, regexp
	  var hit = regexpCache[path]
	  if (hit) {
	    keys = hit.keys
	    regexp = hit.regexp
	  } else {
	    keys = []
	    regexp = index(path, keys)
	    regexpCache[path] = { keys: keys, regexp: regexp }
	  }
	  var m = pathname.match(regexp)

	  if (!m) {
	    return false
	  } else if (!params) {
	    return true
	  }

	  for (var i = 1, len = m.length; i < len; ++i) {
	    var key = keys[i - 1]
	    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i]
	    if (key) { params[key.name] = val }
	  }

	  return true
	}

	function fillParams (
	  path,
	  params,
	  routeMsg
	) {
	  try {
	    var filler =
	      regexpCompileCache[path] ||
	      (regexpCompileCache[path] = index.compile(path))
	    return filler(params || {}, { pretty: true })
	  } catch (e) {
	    assert(false, ("missing param for " + routeMsg + ": " + (e.message)))
	    return ''
	  }
	}

	function resolveRecordPath (path, record) {
	  return resolvePath(path, record.parent ? record.parent.path : '/', true)
	}

	/*  */

	var inBrowser = typeof window !== 'undefined'

	var supportsHistory = inBrowser && (function () {
	  var ua = window.navigator.userAgent

	  if (
	    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
	    ua.indexOf('Mobile Safari') !== -1 &&
	    ua.indexOf('Chrome') === -1 &&
	    ua.indexOf('Windows Phone') === -1
	  ) {
	    return false
	  }

	  return window.history && 'pushState' in window.history
	})()

	/*  */

	function runQueue (queue, fn, cb) {
	  var step = function (index) {
	    if (index >= queue.length) {
	      cb()
	    } else {
	      if (queue[index]) {
	        fn(queue[index], function () {
	          step(index + 1)
	        })
	      } else {
	        step(index + 1)
	      }
	    }
	  }
	  step(0)
	}

	/*  */


	var History = function History (router, base) {
	  this.router = router
	  this.base = normalizeBase(base)
	  // start with a route object that stands for "nowhere"
	  this.current = START
	  this.pending = null
	};

	History.prototype.listen = function listen (cb) {
	  this.cb = cb
	};

	History.prototype.transitionTo = function transitionTo (location, cb) {
	    var this$1 = this;

	  var route = this.router.match(location, this.current)
	  this.confirmTransition(route, function () {
	    this$1.updateRoute(route)
	    cb && cb(route)
	    this$1.ensureURL()
	  })
	};

	History.prototype.confirmTransition = function confirmTransition (route, cb) {
	    var this$1 = this;

	  var current = this.current
	  if (isSameRoute(route, current)) {
	    this.ensureURL()
	    return
	  }

	  var ref = resolveQueue(this.current.matched, route.matched);
	    var deactivated = ref.deactivated;
	    var activated = ref.activated;

	  var queue = [].concat(
	    // in-component leave guards
	    extractLeaveGuards(deactivated),
	    // global before hooks
	    this.router.beforeHooks,
	    // enter guards
	    activated.map(function (m) { return m.beforeEnter; }),
	    // async components
	    resolveAsyncComponents(activated)
	  )

	  this.pending = route
	  var iterator = function (hook, next) {
	    if (this$1.pending !== route) { return }
	    hook(route, current, function (to) {
	      if (to === false) {
	        // next(false) -> abort navigation, ensure current URL
	        this$1.ensureURL()
	      } else if (typeof to === 'string' || typeof to === 'object') {
	        // next('/') or next({ path: '/' }) -> redirect
	        this$1.push(to)
	      } else {
	        // confirm transition and pass on the value
	        next(to)
	      }
	    })
	  }

	  runQueue(queue, iterator, function () {
	    var postEnterCbs = []
	    var enterGuards = extractEnterGuards(activated, postEnterCbs, function () {
	      return this$1.current === route
	    })
	    // wait until async components are resolved before
	    // extracting in-component enter guards
	    runQueue(enterGuards, iterator, function () {
	      if (this$1.pending === route) {
	        this$1.pending = null
	        cb(route)
	        this$1.router.app.$nextTick(function () {
	          postEnterCbs.forEach(function (cb) { return cb(); })
	        })
	      }
	    })
	  })
	};

	History.prototype.updateRoute = function updateRoute (route) {
	  var prev = this.current
	  this.current = route
	  this.cb && this.cb(route)
	  this.router.afterHooks.forEach(function (hook) {
	    hook && hook(route, prev)
	  })
	};

	function normalizeBase (base) {
	  if (!base) {
	    if (inBrowser) {
	      // respect <base> tag
	      var baseEl = document.querySelector('base')
	      base = baseEl ? baseEl.getAttribute('href') : '/'
	    } else {
	      base = '/'
	    }
	  }
	  // make sure there's the starting slash
	  if (base.charAt(0) !== '/') {
	    base = '/' + base
	  }
	  // remove trailing slash
	  return base.replace(/\/$/, '')
	}

	function resolveQueue (
	  current,
	  next
	) {
	  var i
	  var max = Math.max(current.length, next.length)
	  for (i = 0; i < max; i++) {
	    if (current[i] !== next[i]) {
	      break
	    }
	  }
	  return {
	    activated: next.slice(i),
	    deactivated: current.slice(i)
	  }
	}

	function extractLeaveGuards (matched) {
	  return flatMapComponents(matched, function (def, instance) {
	    var guard = def && def.beforeRouteLeave
	    if (guard) {
	      return function routeLeaveGuard () {
	        return guard.apply(instance, arguments)
	      }
	    }
	  }).reverse()
	}

	function extractEnterGuards (
	  matched,
	  cbs,
	  isValid
	) {
	  return flatMapComponents(matched, function (def, _, match, key) {
	    var guard = def && def.beforeRouteEnter
	    if (guard) {
	      return function routeEnterGuard (to, from, next) {
	        return guard(to, from, function (cb) {
	          next(cb)
	          if (typeof cb === 'function') {
	            cbs.push(function () {
	              // #750
	              // if a router-view is wrapped with an out-in transition,
	              // the instance may not have been registered at this time.
	              // we will need to poll for registration until current route
	              // is no longer valid.
	              poll(cb, match.instances, key, isValid)
	            })
	          }
	        })
	      }
	    }
	  })
	}

	function poll (cb, instances, key, isValid) {
	  if (instances[key]) {
	    cb(instances[key])
	  } else if (isValid()) {
	    setTimeout(function () {
	      poll(cb, instances, key, isValid)
	    }, 16)
	  }
	}

	function resolveAsyncComponents (matched) {
	  return flatMapComponents(matched, function (def, _, match, key) {
	    // if it's a function and doesn't have Vue options attached,
	    // assume it's an async component resolve function.
	    // we are not using Vue's default async resolving mechanism because
	    // we want to halt the navigation until the incoming component has been
	    // resolved.
	    if (typeof def === 'function' && !def.options) {
	      return function (to, from, next) {
	        var resolve = function (resolvedDef) {
	          match.components[key] = resolvedDef
	          next()
	        }

	        var reject = function (reason) {
	          warn(false, ("Failed to resolve async component " + key + ": " + reason))
	          next(false)
	        }

	        var res = def(resolve, reject)
	        if (res && typeof res.then === 'function') {
	          res.then(resolve, reject)
	        }
	      }
	    }
	  })
	}

	function flatMapComponents (
	  matched,
	  fn
	) {
	  return Array.prototype.concat.apply([], matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) { return fn(
	      m.components[key],
	      m.instances[key],
	      m, key
	    ); })
	  }))
	}

	/*  */

	function saveScrollPosition (key) {
	  if (!key) { return }
	  window.sessionStorage.setItem(key, JSON.stringify({
	    x: window.pageXOffset,
	    y: window.pageYOffset
	  }))
	}

	function getScrollPosition (key) {
	  if (!key) { return }
	  return JSON.parse(window.sessionStorage.getItem(key))
	}

	function getElementPosition (el) {
	  var docRect = document.documentElement.getBoundingClientRect()
	  var elRect = el.getBoundingClientRect()
	  return {
	    x: elRect.left - docRect.left,
	    y: elRect.top - docRect.top
	  }
	}

	function isValidPosition (obj) {
	  return isNumber(obj.x) || isNumber(obj.y)
	}

	function normalizePosition (obj) {
	  return {
	    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
	    y: isNumber(obj.y) ? obj.y : window.pageYOffset
	  }
	}

	function isNumber (v) {
	  return typeof v === 'number'
	}

	/*  */


	var genKey = function () { return String(Date.now()); }
	var _key = genKey()

	var HTML5History = (function (History) {
	  function HTML5History (router, base) {
	    var this$1 = this;

	    History.call(this, router, base)

	    this.transitionTo(getLocation(this.base))

	    var expectScroll = router.options.scrollBehavior
	    window.addEventListener('popstate', function (e) {
	      _key = e.state && e.state.key
	      var current = this$1.current
	      this$1.transitionTo(getLocation(this$1.base), function (next) {
	        if (expectScroll) {
	          this$1.handleScroll(next, current, true)
	        }
	      })
	    })

	    if (expectScroll) {
	      window.addEventListener('scroll', function () {
	        saveScrollPosition(_key)
	      })
	    }
	  }

	  if ( History ) HTML5History.__proto__ = History;
	  HTML5History.prototype = Object.create( History && History.prototype );
	  HTML5History.prototype.constructor = HTML5History;

	  HTML5History.prototype.go = function go (n) {
	    window.history.go(n)
	  };

	  HTML5History.prototype.push = function push (location) {
	    var this$1 = this;

	    var current = this.current
	    this.transitionTo(location, function (route) {
	      pushState(cleanPath(this$1.base + route.fullPath))
	      this$1.handleScroll(route, current, false)
	    })
	  };

	  HTML5History.prototype.replace = function replace (location) {
	    var this$1 = this;

	    var current = this.current
	    this.transitionTo(location, function (route) {
	      replaceState(cleanPath(this$1.base + route.fullPath))
	      this$1.handleScroll(route, current, false)
	    })
	  };

	  HTML5History.prototype.ensureURL = function ensureURL () {
	    if (getLocation(this.base) !== this.current.fullPath) {
	      replaceState(cleanPath(this.base + this.current.fullPath))
	    }
	  };

	  HTML5History.prototype.handleScroll = function handleScroll (to, from, isPop) {
	    var router = this.router
	    if (!router.app) {
	      return
	    }

	    var behavior = router.options.scrollBehavior
	    if (!behavior) {
	      return
	    }
	    assert(typeof behavior === 'function', "scrollBehavior must be a function")

	    // wait until re-render finishes before scrolling
	    router.app.$nextTick(function () {
	      var position = getScrollPosition(_key)
	      var shouldScroll = behavior(to, from, isPop ? position : null)
	      if (!shouldScroll) {
	        return
	      }
	      var isObject = typeof shouldScroll === 'object'
	      if (isObject && typeof shouldScroll.selector === 'string') {
	        var el = document.querySelector(shouldScroll.selector)
	        if (el) {
	          position = getElementPosition(el)
	        } else if (isValidPosition(shouldScroll)) {
	          position = normalizePosition(shouldScroll)
	        }
	      } else if (isObject && isValidPosition(shouldScroll)) {
	        position = normalizePosition(shouldScroll)
	      }

	      if (position) {
	        window.scrollTo(position.x, position.y)
	      }
	    })
	  };

	  return HTML5History;
	}(History));

	function getLocation (base) {
	  var path = window.location.pathname
	  if (base && path.indexOf(base) === 0) {
	    path = path.slice(base.length)
	  }
	  return (path || '/') + window.location.search + window.location.hash
	}

	function pushState (url, replace) {
	  // try...catch the pushState call to get around Safari
	  // DOM Exception 18 where it limits to 100 pushState calls
	  var history = window.history
	  try {
	    if (replace) {
	      history.replaceState({ key: _key }, '', url)
	    } else {
	      _key = genKey()
	      history.pushState({ key: _key }, '', url)
	    }
	    saveScrollPosition(_key)
	  } catch (e) {
	    window.location[replace ? 'assign' : 'replace'](url)
	  }
	}

	function replaceState (url) {
	  pushState(url, true)
	}

	/*  */


	var HashHistory = (function (History) {
	  function HashHistory (router, base, fallback) {
	    var this$1 = this;

	    History.call(this, router, base)

	    // check history fallback deeplinking
	    if (fallback && this.checkFallback()) {
	      return
	    }

	    ensureSlash()
	    this.transitionTo(getHash(), function () {
	      window.addEventListener('hashchange', function () {
	        this$1.onHashChange()
	      })
	    })
	  }

	  if ( History ) HashHistory.__proto__ = History;
	  HashHistory.prototype = Object.create( History && History.prototype );
	  HashHistory.prototype.constructor = HashHistory;

	  HashHistory.prototype.checkFallback = function checkFallback () {
	    var location = getLocation(this.base)
	    if (!/^\/#/.test(location)) {
	      window.location.replace(
	        cleanPath(this.base + '/#' + location)
	      )
	      return true
	    }
	  };

	  HashHistory.prototype.onHashChange = function onHashChange () {
	    if (!ensureSlash()) {
	      return
	    }
	    this.transitionTo(getHash(), function (route) {
	      replaceHash(route.fullPath)
	    })
	  };

	  HashHistory.prototype.push = function push (location) {
	    this.transitionTo(location, function (route) {
	      pushHash(route.fullPath)
	    })
	  };

	  HashHistory.prototype.replace = function replace (location) {
	    this.transitionTo(location, function (route) {
	      replaceHash(route.fullPath)
	    })
	  };

	  HashHistory.prototype.go = function go (n) {
	    window.history.go(n)
	  };

	  HashHistory.prototype.ensureURL = function ensureURL () {
	    if (getHash() !== this.current.fullPath) {
	      replaceHash(this.current.fullPath)
	    }
	  };

	  return HashHistory;
	}(History));

	function ensureSlash () {
	  var path = getHash()
	  if (path.charAt(0) === '/') {
	    return true
	  }
	  replaceHash('/' + path)
	  return false
	}

	function getHash () {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href
	  var index = href.indexOf('#')
	  return index === -1 ? '' : href.slice(index + 1)
	}

	function pushHash (path) {
	  window.location.hash = path
	}

	function replaceHash (path) {
	  var i = window.location.href.indexOf('#')
	  window.location.replace(
	    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
	  )
	}

	/*  */


	var AbstractHistory = (function (History) {
	  function AbstractHistory (router) {
	    History.call(this, router)
	    this.stack = []
	    this.index = -1
	  }

	  if ( History ) AbstractHistory.__proto__ = History;
	  AbstractHistory.prototype = Object.create( History && History.prototype );
	  AbstractHistory.prototype.constructor = AbstractHistory;

	  AbstractHistory.prototype.push = function push (location) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route)
	      this$1.index++
	    })
	  };

	  AbstractHistory.prototype.replace = function replace (location) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route)
	    })
	  };

	  AbstractHistory.prototype.go = function go (n) {
	    var this$1 = this;

	    var targetIndex = this.index + n
	    if (targetIndex < 0 || targetIndex >= this.stack.length) {
	      return
	    }
	    var route = this.stack[targetIndex]
	    this.confirmTransition(route, function () {
	      this$1.index = targetIndex
	      this$1.updateRoute(route)
	    })
	  };

	  AbstractHistory.prototype.ensureURL = function ensureURL () {
	    // noop
	  };

	  return AbstractHistory;
	}(History));

	/*  */

	var VueRouter = function VueRouter (options) {
	  if ( options === void 0 ) options = {};

	  this.app = null
	  this.options = options
	  this.beforeHooks = []
	  this.afterHooks = []
	  this.match = createMatcher(options.routes || [])

	  var mode = options.mode || 'hash'
	  this.fallback = mode === 'history' && !supportsHistory
	  if (this.fallback) {
	    mode = 'hash'
	  }
	  if (!inBrowser) {
	    mode = 'abstract'
	  }
	  this.mode = mode
	};

	var prototypeAccessors = { currentRoute: {} };

	prototypeAccessors.currentRoute.get = function () {
	  return this.history && this.history.current
	};

	VueRouter.prototype.init = function init (app /* Vue component instance */) {
	    var this$1 = this;

	  assert(
	    install.installed,
	    "not installed. Make sure to call `Vue.use(VueRouter)` " +
	    "before creating root instance."
	  )

	  this.app = app

	  var ref = this;
	    var mode = ref.mode;
	    var options = ref.options;
	    var fallback = ref.fallback;
	  switch (mode) {
	    case 'history':
	      this.history = new HTML5History(this, options.base)
	      break
	    case 'hash':
	      this.history = new HashHistory(this, options.base, fallback)
	      break
	    case 'abstract':
	      this.history = new AbstractHistory(this)
	      break
	    default:
	      assert(false, ("invalid mode: " + mode))
	  }

	  this.history.listen(function (route) {
	    this$1.app._route = route
	  })
	};

	VueRouter.prototype.beforeEach = function beforeEach (fn) {
	  this.beforeHooks.push(fn)
	};

	VueRouter.prototype.afterEach = function afterEach (fn) {
	  this.afterHooks.push(fn)
	};

	VueRouter.prototype.push = function push (location) {
	  this.history.push(location)
	};

	VueRouter.prototype.replace = function replace (location) {
	  this.history.replace(location)
	};

	VueRouter.prototype.go = function go (n) {
	  this.history.go(n)
	};

	VueRouter.prototype.back = function back () {
	  this.go(-1)
	};

	VueRouter.prototype.forward = function forward () {
	  this.go(1)
	};

	VueRouter.prototype.getMatchedComponents = function getMatchedComponents () {
	  if (!this.currentRoute) {
	    return []
	  }
	  return [].concat.apply([], this.currentRoute.matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) {
	      return m.components[key]
	    })
	  }))
	};

	Object.defineProperties( VueRouter.prototype, prototypeAccessors );

	VueRouter.install = install

	if (inBrowser && window.Vue) {
	  window.Vue.use(VueRouter)
	}

	return VueRouter;

	})));

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* template */
	var __vue_template__ = __webpack_require__(5)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "F:\\Filmy\\src\\component\\App.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-07081d49", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-07081d49", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] App.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', [_vm._h('router-view', {
	    attrs: {
	      "transition": "fade",
	      "transition-mode": "out-in"
	    }
	  })])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-07081d49", module.exports)
	  }
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(7)

	/* template */
	var __vue_template__ = __webpack_require__(55)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "F:\\Filmy\\src\\route-component\\Lading.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7a85123f", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-7a85123f", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Lading.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); //
	//
	//
	//
	//
	//
	//
	//
	//

	var _LandingView = __webpack_require__(8);

	var _LandingView2 = _interopRequireDefault(_LandingView);

	var _Content = __webpack_require__(15);

	var _Content2 = _interopRequireDefault(_Content);

	var _Config = __webpack_require__(25);

	var _Config2 = _interopRequireDefault(_Config);

	var _Categories = __webpack_require__(52);

	var _Categories2 = _interopRequireDefault(_Categories);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'LandingPage',
	    data: function data() {
	        return {
	            config: {},
	            categories: []
	        };
	    },

	    components: {
	        LandingView: _LandingView2.default,
	        LandingContent: _Content2.default
	    },
	    mounted: function mounted() {
	        this.$nextTick(function () {
	            var _this = this;

	            // 保证 this.$el 已经插入文档
	            Promise.all([_Config2.default.load(), _Categories2.default.load()]).then(function (_ref) {
	                var _ref2 = _slicedToArray(_ref, 2),
	                    config = _ref2[0],
	                    category = _ref2[1];

	                _this.config = config;
	                _this.categories = category;
	            });
	        });
	    }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(9)

	/* script */
	__vue_exports__ = __webpack_require__(13)

	/* template */
	var __vue_template__ = __webpack_require__(14)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "F:\\Filmy\\src\\component\\LandingView.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1ffa8304"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1ffa8304", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1ffa8304", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] LandingView.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1ffa8304&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LandingView.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1ffa8304&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LandingView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n#landing[data-v-1ffa8304] {\n  width: 100vw;\n  height: 100vh;\n  background: #333;\n  display: block;\n  margin-bottom: 10px;\n\n  /*规定一个动画完成的时间s*/\n  -webkit-animation-duration: 0.5s;\n  animation-duration: 0.5s;\n}\n#landing-title[data-v-1ffa8304] {\n  display: block;\n  border-left: 5px solid white;\n  padding-left: 8px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-family: \"Lantinghei SC\", \"Lantinghei TC\", \"Merriweather\", \"Open Sans\", sans-serif;\n  font-size: 3rem;\n  font-weight: normal;\n}\n#landing-desc[data-v-1ffa8304] {\n  display: block;\n  text-align: left;\n  font-family: \"Lantinghei SC\", \"Lantinghei TC\", \"Merriweather\", \"Open Sans\", sans-serif;\n  font-size: 18px;\n  line-height: 1.3rem;\n}\n#landing-background[data-v-1ffa8304] {\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  opacity: 0.6;\n  background-size: cover;\n  background-position: 50% 50%;\n}\n#landing-content[data-v-1ffa8304] {\n  color: white;\n  margin-left: 55.8vw;\n  margin-top: -44.2vh;\n  top: 0;\n  width: 35%;\n  position: relative;\n}\n@media only screen and (max-width: 900px) {\n#landing-content[data-v-1ffa8304] {\n    margin-top: -55.2vh;\n}\n#landing-title[data-v-1ffa8304] {\n    font-size: 2rem;\n    margin-top: -46.2vh;\n}\n.scroll-down[data-v-1ffa8304] {\n    bottom: 0;\n}\n}\n@media only screen and (max-width: 500px) {\n#landing-content[data-v-1ffa8304] {\n    width: 75%;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n}\n#landing-title[data-v-1ffa8304] {\n    font-size: 1.8rem;\n}\n}\n.scroll-down[data-v-1ffa8304] {\n  display: block;\n  position: absolute;\n  z-index: 100;\n  bottom: 10vh;\n  left: 50%;\n  margin-left: -16px;\n  width: 34px;\n  height: 34px;\n  font-size: 34px;\n  text-align: center;\n  text-decoration: none;\n  color: rgba(255,255,255,0.7);\n  -webkit-transform: rotate(-90deg);\n  -ms-transform: rotate(-90deg);\n  transform: rotate(-90deg);\n}\n.scroll-down[data-v-1ffa8304]:hover {\n  color: #fff;\n  -webkit-animation: none;\n  animation: none;\n}\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    // 父组件通过props传递config
	    props: ['config'],
	    computed: {
	        // 计算属性、从config中获取背景图片的参数同步渲染页面
	        backgroundStyle: function backgroundStyle() {
	            return {
	                backgroundImage: 'url(\'' + this.config.background + '\')'
	            };
	        }
	    },
	    filters: {
	        // 过滤器:处理网站简介中的换行符
	        cr2br: function cr2br(str) {
	            return str.replace(/\n/g, '<br />');
	        }
	    }
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    attrs: {
	      "id": "landing"
	    }
	  }, [_vm._h('div', {
	    style: (_vm.backgroundStyle),
	    attrs: {
	      "id": "landing-background"
	    }
	  }), " ", _vm._h('div', {
	    attrs: {
	      "id": "landing-content"
	    }
	  }, [(_vm.config.title) ? _vm._h('h1', {
	    attrs: {
	      "id": "landing-title"
	    }
	  }, [_vm._s(_vm.config.title)]) : _vm._e(), " ", _vm._h('p', {
	    attrs: {
	      "id": "landing-desc"
	    }
	  }, [_vm._s(_vm.config.description || '')])]), " ", _vm._m(0)])
	},staticRenderFns: [function (){var _vm=this;
	  return _vm._h('a', {
	    staticClass: "scroll-down icon-arrow-left"
	  })
	}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1ffa8304", module.exports)
	  }
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(16)

	/* script */
	__vue_exports__ = __webpack_require__(18)

	/* template */
	var __vue_template__ = __webpack_require__(24)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "F:\\Filmy\\src\\component\\Content.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-742438be"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-742438be", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-742438be", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Content.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-742438be&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Content.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-742438be&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Content.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n#content[data-v-742438be] {\n  overflow: hidden;\n  display: block;\n}\n#content.category-page[data-v-742438be] {\n  overflow: hidden;\n  padding: 0;\n}\n@media only screen and (min-width: 500px) {\n#content[data-v-742438be] {\n    overflow-x: scroll;\n    padding-left: 1vw;\n}\n#content-categories[data-v-742438be] {\n    margin-right: -1000%;\n}\n}\n.move-to-top-leave[data-v-742438be] {\n  position: absolute;\n  top: 0;\n}\n#home[data-v-742438be] {\n  cursor: pointer;\n  position: absolute;\n  z-index: 999;\n  color: white;\n  padding: 1rem;\n  font-family: Arial;\n}\n#home .icon-arrow-left[data-v-742438be] {\n  vertical-align: middle;\n}\n", ""]);

	// exports


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Category = __webpack_require__(19);

	var _Category2 = _interopRequireDefault(_Category);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  props: ['categories'],

	  components: {
	    CategoryItem: _Category2.default
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(20)

	/* script */
	__vue_exports__ = __webpack_require__(22)

	/* template */
	var __vue_template__ = __webpack_require__(23)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "F:\\Filmy\\src\\component\\Category.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3b7bfcf4"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3b7bfcf4", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3b7bfcf4", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Category.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3b7bfcf4&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Category.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3b7bfcf4&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Category.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n.content-category[data-v-3b7bfcf4] {\n  height: 98vh;\n  width: 42.55vh;\n  margin-bottom: 10px;\n  display: inline-block;\n  float: left;\n  position: relative;\n  background: white;\n\n  color: white;\n  text-shadow: 0 0 4px gray;\n\n  opacity: 0.75;\n  filter:alpha(opacity=75);\n\n  transition-property: all;\n  transition-duration: 1s;\n  \n\n  cursor: pointer;\n}\n.content-category[data-v-3b7bfcf4]:hover{\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n.content-category .card-image[data-v-3b7bfcf4] {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  background: #333;\n}\n.content-category .card-image img[data-v-3b7bfcf4] {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  object-fit: cover;\n  border: 0;\n\n  -webkit-transition: all 2s ease;\n  transition: all 2s ease;\n}\n.content-category[data-v-3b7bfcf4]:last-child {\n  margin-right: 2.5vh;\n}\n.card-title[data-v-3b7bfcf4] {\n  font-size: 2rem;\n  left: 1.5rem;\n  bottom: 0.8rem;\n  font-family: \"Lantinghei SC\", \"Lantinghei TC\", Arial, serif;\n  position: absolute;\n\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease;\n}\n.content-category.as-title[data-v-3b7bfcf4] {\n  float: none;\n}\n.content-category.as-title .card-title[data-v-3b7bfcf4] {\n  font-size: 2.5rem;\n  position: absolute;\n  margin-top: 0;\n  margin-left: 0;\n  top: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  height: 100%;\n  line-height: 20.275vh;\n}\n.card-desc[data-v-3b7bfcf4] {\n  display: none;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 1.1rem;\n  text-align: center;\n  line-height: 30vh;\n  font-family: \"Lantinghei SC\", \"Lantinghei TC\", Arial, serif;\n  text-shadow: 0 0 2px gray;\n}\n.content-category.as-title .card-desc[data-v-3b7bfcf4] {\n  display: block;\n}\n@media only screen and (min-width: 500px) {\n.content-category.as-title[data-v-3b7bfcf4] {\n    width: 100vw;\n    height: 13.55vw;\n    cursor: auto;\n}\n.content-category.as-title .card-title[data-v-3b7bfcf4] {\n    margin-left: 18vw;\n    text-align: left;\n    line-height: 17vh;\n}\n.content-category.as-title .card-desc[data-v-3b7bfcf4] {\n    text-align: left;\n    margin-left: 18vw;\n    line-height: 28vh;\n}\n}\n@media only screen and (max-width: 900px) {\n.card-title[data-v-3b7bfcf4] {\n    font-size: 1.5rem;\n}\n}\n@media only screen and (max-width: 500px) {\n.content-category[data-v-3b7bfcf4] {\n    width: 100vw;\n    height: 42.55vw;\n}\n.content-category[data-v-3b7bfcf4]:last-child {\n    margin-bottom: 2.5vh;\n}\n.card-title[data-v-3b7bfcf4] {\n    font-size: 1.3rem;\n}\n}\n", ""]);

	// exports


/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    props: ['category', 'asTitle']
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    staticClass: "content-category",
	    class: {
	      'as-title': _vm.asTitle
	    }
	  }, [_vm._h('div', {
	    staticClass: "card-image"
	  }, [_vm._h('img', {
	    attrs: {
	      "src": _vm.category.cover,
	      "alt": ""
	    }
	  }), " ", _vm._h('span', {
	    staticClass: "card-title"
	  }, [_vm._s(_vm.category.title)]), " ", _vm._h('span', {
	    staticClass: "card-desc"
	  }, [_vm._s(_vm.category.subtitle)])])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3b7bfcf4", module.exports)
	  }
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    attrs: {
	      "id": "content"
	    }
	  }, [_vm._h('div', {
	    attrs: {
	      "id": "content-categories"
	    }
	  }, [_vm._l((_vm.categories), function(category) {
	    return _vm._h('router-link', {
	      attrs: {
	        "to": '/category/' + category.getCacheData().name
	      }
	    }, [_vm._h('category-item', {
	      attrs: {
	        "category": category.getCacheData()
	      }
	    })])
	  })])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-742438be", module.exports)
	  }
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _qiniuBucket = __webpack_require__(26);

	var _qiniuBucket2 = _interopRequireDefault(_qiniuBucket);

	var _min = __webpack_require__(50);

	var _min2 = _interopRequireDefault(_min);

	var _store = __webpack_require__(51);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var STORE_KEY = 'filmh:config';

	var Config = {
	    load: function load() {
	        var silent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	        return _store2.default.exists(STORE_KEY).then(function (exists) {
	            if (exists) {
	                return _store2.default.hgetall(STORE_KEY);
	            } else {
	                return _qiniuBucket2.default.getFile('fig/config.json?v=0002').then(function (body) {
	                    return JSON.parse(body);
	                }).then(function (data) {
	                    try {
	                        _store2.default.saves(STORE_KEY, data);
	                    } catch (err) {
	                        console.log(err);
	                    }
	                    return data;
	                });
	            }
	        }).catch(function (error) {
	            if (!silent) alert('You must init Filmy with the administrator tools.');
	        });
	    }
	};

	exports.default = Config;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _qiniu = __webpack_require__(27);

	var _qiniu2 = _interopRequireDefault(_qiniu);

	var _crypto = __webpack_require__(28);

	var _crypto2 = _interopRequireDefault(_crypto);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var qiniuBucketUrl = null;

	/**
	 * location.protocol  获取Hppt Or Hppts
	 * location.host    获取域名，如www.baidu.com
	 */
	var filmyBucket = _qiniu2.default.bucket('filmybucket', {
	    url: qiniuBucketUrl ? qiniuBucketUrl : location.protocol + '//' + location.host
	});

	function getKeys(pswd) {
	    return filmyBucket.getFile('secret-' + pswd + '.json').then(function (body) {
	        return JSON.parse(body);
	    });
	}

	filmyBucket.fetchPutToken = function (password) {
	    var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	    var returnBody = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	    return (keys ? Promise.resolve(keys) : getKeys(password)).then(function (keys) {
	        var options = {
	            scope: 'filmy',
	            deadline: Math.floor(Date.now() / 1000) + 3600,
	            insertOnly: 1
	        };

	        if (returnBody) {
	            options.returnBody = returnBody;
	        }

	        var singture = safeEncode(JSON.stringify(options));

	        var encodeDigest = encodeSign(singture, keys.sk);

	        var token = keys.ak + ':' + encodeDigest + ':' + singture;

	        return token;
	    });
	};

	function safeEncode(str) {
	    return btoa(str).replace(/\//g, '_').replace(/\+/g, '-');
	}

	function encodeSign(str, key) {
	    return _crypto2.default.createHmac('sha1', key).update(str).digest('base64').replace(/\//g, '_').replace(/\+/g, '-');
	}

	exports.default = filmyBucket;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	    true ? module.exports = factory() :
	   typeof define === 'function' && define.amd ? define(factory) :
	   (global.qiniu = factory());
	}(this, function () { 'use strict';

	   var babelHelpers = {};
	   babelHelpers.typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	     return typeof obj;
	   } : function (obj) {
	     return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	   };

	   babelHelpers.classCallCheck = function (instance, Constructor) {
	     if (!(instance instanceof Constructor)) {
	       throw new TypeError("Cannot call a class as a function");
	     }
	   };

	   babelHelpers.createClass = function () {
	     function defineProperties(target, props) {
	       for (var i = 0; i < props.length; i++) {
	         var descriptor = props[i];
	         descriptor.enumerable = descriptor.enumerable || false;
	         descriptor.configurable = true;
	         if ("value" in descriptor) descriptor.writable = true;
	         Object.defineProperty(target, descriptor.key, descriptor);
	       }
	     }

	     return function (Constructor, protoProps, staticProps) {
	       if (protoProps) defineProperties(Constructor.prototype, protoProps);
	       if (staticProps) defineProperties(Constructor, staticProps);
	       return Constructor;
	     };
	   }();

	   babelHelpers.inherits = function (subClass, superClass) {
	     if (typeof superClass !== "function" && superClass !== null) {
	       throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	     }

	     subClass.prototype = Object.create(superClass && superClass.prototype, {
	       constructor: {
	         value: subClass,
	         enumerable: false,
	         writable: true,
	         configurable: true
	       }
	     });
	     if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	   };

	   babelHelpers.possibleConstructorReturn = function (self, call) {
	     if (!self) {
	       throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	     }

	     return call && (typeof call === "object" || typeof call === "function") ? call : self;
	   };

	   babelHelpers;

	   var slice = [].slice;

	   var nativeForEach = [].forEach || false;

	   var utils = {
	     slice: slice,
	     noop: function noop() {
	       return false;
	     },

	     // Class Inherits
	     inherits: function inherits(ctor, superCtor) {
	       ctor.super_ = superCtor;
	       ctor.prototype = utils.objCreate(utils.objExtend(utils.objClone(superCtor.prototype), {
	         constructor: {
	           value: ctor,
	           enumerable: false,
	           writable: true,
	           configurable: true
	         }
	       }));
	     },

	     isString: function isString(val) {
	       return typeof val == 'string';
	     },

	     isObject: function isObject(val) {
	       return val instanceof Object;
	     },

	     isArray: function isArray(val) {
	       return val instanceof Array;
	     },

	     isFunction: function isFunction(val) {
	       return val instanceof Function;
	     },

	     isUndefine: function isUndefine(val) {
	       return val === void 0;
	     },

	     objClone: function objClone(obj) {
	       if (!utils.isObject(obj)) return obj;
	       return utils.isArray(obj) ? obj.slice() : utils.objExtend({}, obj);
	     },

	     objExtend: function objExtend(obj) {
	       var sources = slice.call(arguments, 1);

	       for (var i = 0; i < sources.length; i++) {
	         (function (index) {
	           var source = sources[index];

	           if (source) {
	             for (var prop in source) {
	               if (source.hasOwnProperty(prop)) {
	                 obj[prop] = source[prop];
	               }
	             }
	           }
	         })(i);
	       }

	       return obj;
	     },

	     objCreate: function objCreate(o) {
	       if (arguments.length > 1) {
	         throw new Error('Object.create implementation only accepts the first parameter.');
	       }
	       function F() {}
	       F.prototype = o;
	       return new F();
	     },

	     objKeys: function objKeys(obj) {
	       if (utils.isFunction(obj.key)) {
	         return obj.keys();
	       } else {
	         var keys = [];

	         for (var key in obj) {
	           if (obj.hasOwnProperty(key)) {
	             keys.push(key);
	           }
	         }

	         return keys;
	       }
	     },

	     each: function each(obj, iterator, context) {
	       if (obj == null) return;
	       if (nativeForEach && obj.forEach === nativeForEach) {
	         obj.forEach(iterator, context);
	       } else if (obj.length === +obj.length) {
	         for (var i = 0, length = obj.length; i < length; i++) {
	           if (iterator.call(context, obj[i], i, obj) === false) return;
	         }
	       } else {
	         var keys = utils.objKeys(obj);
	         for (var i = 0, length = keys.length; i < length; i++) {
	           if (iterator.call(context, obj[keys[i]], keys[i], obj) === false) return;
	         }
	       }
	     },

	     format: function format(str) {
	       if (!utils.isString(str)) {
	         var objects = [];
	         for (var i = 0; i < arguments.length; i++) {
	           objects.push(arguments[i]);
	         }
	         return objects.join(' ');
	       }

	       var values = slice.call(arguments, 1);
	       var i = 0;
	       var len = arguments.length;
	       var formatRegExp = /%[sd%]/g;

	       var rtn = String(str).replace(formatRegExp, function (x) {

	         if (x === '%%') {
	           return '%';
	         }

	         if (i >= len) {
	           return x;
	         }
	         switch (x) {
	           case '%s':
	             return String(values[i++]);
	           case '%d':
	             return Number(values[i++]);
	           default:
	             return x;
	         }
	       });
	       /*      for (var x = arguments[i]; i < len; x = arguments[++i]) {
	             if (x === null || !utils.isObject(x)) {
	               rtn += ' ' + x;
	             }
	           }*/

	       return rtn;
	     },

	     safeEncode: function safeEncode(str) {
	       var encoded = btoa(str);
	       var rtn = encoded.replace(/\//g, '_').replace(/\+/g, '-');

	       return rtn;
	     },

	     css: function css(el, _css) {
	       if (el && el.style) {
	         var key, val;
	         for (key in _css) {
	           val = _css[key];
	           if (typeof val == 'number') val += 'px';
	           try {
	             el.style[key] = val;
	           } catch (e) {}
	         }
	       }
	     }

	   };

	   var imageViewTranslations = {
	     weight: 'w',
	     height: 'h',
	     quality: 'q'
	   };

	   var Fop = function () {
	     /**
	      * Fop Class
	      * @param {Asset} asset    asset
	      * @param {Object} _config config
	      */

	     function Fop(asset) {
	       var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	       babelHelpers.classCallCheck(this, Fop);

	       this.parent = asset;
	       this.config = config;

	       this.query = '';
	     }

	     /**
	      * custom fop
	      * @param  {String} str fop string
	      * @return {Fop}     fop
	      */


	     babelHelpers.createClass(Fop, [{
	       key: 'fop',
	       value: function fop(str) {
	         this.query += '|' + str;

	         return this;
	       }

	       /**
	        * Add imageInfo to the fop
	        * @return {Fop} fop
	        */

	     }, {
	       key: 'imageInfo',
	       value: function imageInfo() {
	         this.query += '|imageInfo';

	         return this;
	       }

	       /**
	        * Add exif to the fop
	        * @return {Fop} fop
	        */

	     }, {
	       key: 'exif',
	       value: function exif() {
	         this.query += '|exif';

	         return this;
	       }

	       /**
	        * Add imageView to the fop
	        * @param  {Object} opts options
	        * @return {Fop}      fop
	        */

	     }, {
	       key: 'imageView',
	       value: function imageView(opts) {
	         var mode = opts.mode;
	         delete opts.mode;

	         var url = this.url();
	         var params = {};

	         utils.each(opts, function (value, key) {
	           if (imageViewTranslations.hasOwnProperty(key)) {
	             key = imageViewTranslations[key];
	           }

	           params[key] = value;
	         });

	         this.query += utils.format('|imageView/%d%s', mode, genOptUrl(params));

	         return this;
	       }

	       /**
	        * Add imageMogr to the fop
	        * @param  {Object} opts options
	        * @return {Fop}      fop
	        */

	     }, {
	       key: 'imageMogr',
	       value: function imageMogr(opts) {
	         var params = {};

	         utils.objExtend(params, opts);

	         this.query += utils.format('|imageMogr/v2/auto-orient%s', genOptUrl(params));

	         return this;
	       }

	       /**
	        * Add watermark to the fop
	        * @param  {Object} opts options
	        * @return {Fop}      fop
	        */

	     }, {
	       key: 'watermark',
	       value: function watermark(opts) {
	         var params = {};
	         var mode = opts.mode;
	         delete opts.mode;

	         utils.objExtend(params, opts);

	         params.image = utils.safeEncode(params.image);

	         this.query += utils.format('|watermark/%d%s', mode, genOptUrl(params));

	         return this;
	       }

	       /**
	        * Add qrcode to the fop
	        * @param  {Object} opts options
	        * @return {Fop}      fop
	        */

	     }, {
	       key: 'qrcode',
	       value: function qrcode(opts) {
	         opts = opts || {
	           mode: 0,
	           level: 'L'
	         };

	         this.query += utils.format('|qrcode/%d/level/%s', this.url(), opts.mode, opts.level);

	         return this;
	       }

	       /**
	        * Markdown to HTML
	        * @param  {Object}   opts     options
	        * @return {Fop}           fop
	        */

	     }, {
	       key: 'md2html',
	       value: function md2html(opts) {
	         opts = opts || {
	           mode: false,
	           css: false
	         };

	         var url = '|md2html';

	         if (opts.css) {
	           url += utils.format('/%s', opts.mode);
	         }

	         if (opts.css) {
	           url += utils.format('/css/%s', utils.safeEncode(opts.css));
	         }

	         this.query += url;

	         return this;
	       }

	       /**
	        * get the url of the fop
	        * @return {String} url
	        */

	     }, {
	       key: 'url',
	       value: function url() {
	         return utils.format('%s?%s', this.parent.url(), this.query.substr(1));
	       }

	       /**
	        * return the image of the fop
	        * @return {Image} image
	        */

	     }, {
	       key: 'image',
	       value: function image() {
	         var image = new Image();
	         image.src = this.url();

	         return image;
	       }
	     }]);
	     return Fop;
	   }();

	   function genOptUrl(params) {
	     var url = "";

	     utils.each(params, function (value, key) {
	       url += utils.format('/%s/%s', key, value);
	     });

	     return url;
	   }

	   var configData = {};
	   function noop$1() {
	     return false;
	   }

	   var Asset$1 = function () {

	     /**
	      * Asset Class
	      * @param {String} key    Asset's key
	      * @param {Bucket} parent Bucket object
	      */

	     function Asset(key, parent) {
	       var config = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	       babelHelpers.classCallCheck(this, Asset);

	       this.key = key;
	       this.parent = parent;

	       this.config = config;
	     }

	     /**
	      * return the asset url
	      * @return {String} url
	      */


	     babelHelpers.createClass(Asset, [{
	       key: 'url',
	       value: function url() {
	         return this.parent.url() + '/' + this.key;
	       }

	       /**
	        * return the encoded entry url of the asset
	        * @return {String} entry url
	        */

	     }, {
	       key: 'entryUrl',
	       value: function entryUrl() {
	         return utils.safeEncode(utils.format('%s:%s', this.parent.name, this.key));
	       }

	       /**
	        * return the qrcode image of the asset
	        * @param  {Object}   opts     options
	        * @return {String}            url
	        */

	     }, {
	       key: 'qrcode',
	       value: function qrcode(opts, callback) {
	         switch (true) {
	           case utils.isFunction(opts):
	             callback = opts;
	             opts = { mode: 0, level: 'L' };
	             break;
	           case utils.isObject(opts) && utils.isUndefined(callback):
	             callback = noop$1;
	             break;
	           case utils.isUndefined(opts):
	             opts = { mode: 0, level: 'L' };
	             callback = noop$1;
	             break;
	         }

	         var url = utils.format('%s?qrcode/%d/level/%s', this.url(), opts.mode, opts.level);

	         var img = new Image();
	         img.src = img.url = url;

	         return img;
	       }
	     }, {
	       key: 'fop',
	       value: function fop(config) {
	         return new Fop(this, config);
	       }

	       /**
	        * return a image with a established format
	        * @param  {String}   alias    alias name
	        * @return {String}            url
	        */

	     }, {
	       key: 'alias',
	       value: function alias(_alias) {
	         var url = this.url();

	         url += utils.format('%s%s', this.config.separate, _alias);

	         return url;
	       }

	       /**
	        * Markdown to HTML
	        * @param  {Object}   opts     options
	        * @return {Promise}           promise object
	        */

	     }, {
	       key: 'md2html',
	       value: function md2html(opts) {
	         if (utils.isFunction(opts)) {
	           callback = opts;
	           opts = {
	             mode: false,
	             css: false
	           };
	         } else if (utils.isObject(opts)) {
	           callback = callback || noop$1;
	         } else {
	           callback = callback || noop$1;
	           opts = {
	             mode: false,
	             css: false
	           };
	         }

	         var url = this.url() + '?md2html';

	         if (opts.mode) {
	           url += utils.format('/%s', opts.mode);
	         }

	         if (opts.css) {
	           url += utils.format('/css/%s', utils.safeEncode(opts.css));
	         }

	         return url;
	       }
	     }]);
	     return Asset;
	   }();

	   function _Asset (config) {
	     configData = config;
	     return Asset$1;
	   }

	   /**!
	    * FileAPI — a set of tools for working with files
	    *
	    * @author  RubaXa  <trash@rubaxa.org>
	    * @build lib/canvas-to-blob lib/FileAPI.core lib/FileAPI.Image lib/FileAPI.Form lib/FileAPI.XHR lib/FileAPI.Flash
	    */ /*! fileapi 2.0.2 - BSD | git://github.com/mailru/FileAPI.git
	    * FileAPI — a set of  javascript tools for working with files. Multiupload, drag'n'drop and chunked file upload. Images: crop, resize and auto orientation by EXIF.
	    */window.FileAPI={staticPath:'http://iwillwen.u.qiniudn.com/',withCredentials:false}; /*jslint evil: true */ /*global window, URL, webkitURL, ActiveXObject */(function(window,undef){'use strict';var gid=1,noop=function noop(){},document=window.document,doctype=document.doctype||{},userAgent=window.navigator.userAgent, // https://github.com/blueimp/JavaScript-Load-Image/blob/master/load-image.js#L48
	   apiURL=window.createObjectURL&&window||window.URL&&URL.revokeObjectURL&&URL||window.webkitURL&&webkitURL,Blob=window.Blob,File=window.File,FileReader=window.FileReader,FormData=window.FormData,XMLHttpRequest=window.XMLHttpRequest,jQuery=window.jQuery,html5=!!(File&&FileReader&&(window.Uint8Array||FormData||XMLHttpRequest.prototype.sendAsBinary))&&!(/safari\//i.test(userAgent)&&!/chrome\//i.test(userAgent)&&/windows/i.test(userAgent)), // BugFix: https://github.com/mailru/FileAPI/issues/25
	   cors=html5&&'withCredentials' in new XMLHttpRequest(),chunked=html5&&!!Blob&&!!(Blob.prototype.webkitSlice||Blob.prototype.mozSlice||Blob.prototype.slice), // https://github.com/blueimp/JavaScript-Canvas-to-Blob
	   dataURLtoBlob=window.dataURLtoBlob,_rimg=/img/i,_rcanvas=/canvas/i,_rimgcanvas=/img|canvas/i,_rinput=/input/i,_rdata=/^data:[^,]+,/,Math=window.Math,_SIZE_CONST=function _SIZE_CONST(pow){pow=new window.Number(Math.pow(1024,pow));pow.from=function(sz){return Math.round(sz*this);};return pow;},_elEvents={}, // element event listeners
	   _infoReader=[], // list of file info processors
	   _readerEvents='abort progress error load loadend',_xhrPropsExport='status statusText readyState response responseXML responseText responseBody'.split(' '),currentTarget='currentTarget', // for minimize
	   preventDefault='preventDefault', // and this too
	   _isArray=function _isArray(ar){return ar&&'length' in ar;}, /**
	        * Iterate over a object or array
	        */_each=function _each(obj,fn,ctx){if(obj){if(_isArray(obj)){for(var i=0,n=obj.length;i<n;i++){if(i in obj){fn.call(ctx,obj[i],i,obj);}}}else {for(var key in obj){if(obj.hasOwnProperty(key)){fn.call(ctx,obj[key],key,obj);}}}}}, /**
	        * Merge the contents of two or more objects together into the first object
	        */_extend=function _extend(dst){var args=arguments,i=1,_ext=function _ext(val,key){dst[key]=val;};for(;i<args.length;i++){_each(args[i],_ext);}return dst;}, /**
	        * Add event listener
	        */_on=function _on(el,type,fn){if(el){var uid=api.uid(el);if(!_elEvents[uid]){_elEvents[uid]={};}_each(type.split(/\s+/),function(type){if(jQuery){jQuery.event.add(el,type,fn);}else {if(!_elEvents[uid][type]){_elEvents[uid][type]=[];}_elEvents[uid][type].push(fn);if(el.addEventListener){el.addEventListener(type,fn,false);}else if(el.attachEvent){el.attachEvent('on'+type,fn);}else {el['on'+type]=fn;}}});}}, /**
	        * Remove event listener
	        */_off=function _off(el,type,fn){if(el){var uid=api.uid(el),events=_elEvents[uid]||{};_each(type.split(/\s+/),function(type){if(jQuery){jQuery.event.remove(el,type,fn);}else {var fns=events[type]||[],i=fns.length;while(i--){if(fns[i]===fn){fns.splice(i,1);break;}}if(el.addEventListener){el.removeEventListener(type,fn,false);}else if(el.detachEvent){el.detachEvent('on'+type,fn);}else {el['on'+type]=null;}}});}},_one=function _one(el,type,fn){_on(el,type,function _(evt){_off(el,type,_);fn(evt);});},_fixEvent=function _fixEvent(evt){if(!evt.target){evt.target=window.event&&window.event.srcElement||document;}if(evt.target.nodeType===3){evt.target=evt.target.parentNode;}return evt;},_supportInputAttr=function _supportInputAttr(attr){var input=document.createElement('input');input.setAttribute('type',"file");return attr in input;}, /**
	        * FileAPI (core object)
	        */api={version:'2.0.2',cors:false,html5:true,media:false,formData:true,debug:false,pingUrl:false,multiFlash:false,flashAbortTimeout:0,withCredentials:true,staticPath:'./dist/',flashUrl:0, // @default: './FileAPI.flash.swf'
	   flashImageUrl:0, // @default: './FileAPI.flash.image.swf'
	   postNameConcat:function postNameConcat(name,idx){return name+(idx!=null?'['+idx+']':'');},ext2mime:{jpg:'image/jpeg',tif:'image/tiff',txt:'text/plain'}, // Fallback for flash
	   accept:{'image/*':'art bm bmp dwg dxf cbr cbz fif fpx gif ico iefs jfif jpe jpeg jpg jps jut mcf nap nif pbm pcx pgm pict pm png pnm qif qtif ras rast rf rp svf tga tif tiff xbm xbm xpm xwd','audio/*':'m4a flac aac rm mpa wav wma ogg mp3 mp2 m3u mod amf dmf dsm far gdm imf it m15 med okt s3m stm sfx ult uni xm sid ac3 dts cue aif aiff wpl ape mac mpc mpp shn wv nsf spc gym adplug adx dsp adp ymf ast afc hps xs','video/*':'m4v 3gp nsv ts ty strm rm rmvb m3u ifo mov qt divx xvid bivx vob nrg img iso pva wmv asf asx ogm m2v avi bin dat dvr-ms mpg mpeg mp4 mkv avc vp3 svq3 nuv viv dv fli flv wpl'},chunkSize:0,chunkUploadRetry:0,chunkNetworkDownRetryTimeout:2000, // milliseconds, don't flood when network is down
	   KB:_SIZE_CONST(1),MB:_SIZE_CONST(2),GB:_SIZE_CONST(3),TB:_SIZE_CONST(4),expando:'fileapi'+new Date().getTime(),uid:function uid(obj){return obj?obj[api.expando]=obj[api.expando]||api.uid():(++gid,api.expando+gid);},log:function log(){if(api.debug&&window.console&&console.log){if(console.log.apply){console.log.apply(console,arguments);}else {console.log([].join.call(arguments,' '));}}}, /**
	          * Create new image
	          *
	          * @param {String} [src]
	          * @param {Function} [fn]   1. error -- boolean, 2. img -- Image element
	          * @returns {HTMLElement}
	          */newImage:function newImage(src,fn){var img=document.createElement('img');if(fn){api.event.one(img,'error load',function(evt){fn(evt.type=='error',img);img=null;});}img.src=src;return img;}, /**
	          * Get XHR
	          * @returns {XMLHttpRequest}
	          */getXHR:function getXHR(){var xhr;if(XMLHttpRequest){xhr=new XMLHttpRequest();}else if(window.ActiveXObject){try{xhr=new ActiveXObject('MSXML2.XMLHttp.3.0');}catch(e){xhr=new ActiveXObject('Microsoft.XMLHTTP');}}return xhr;},isArray:_isArray,support:{dnd:cors&&'ondrop' in document.createElement('div'),cors:cors,html5:html5,chunked:chunked,dataURI:true,accept:_supportInputAttr('accept'),multiple:_supportInputAttr('multiple')},event:{on:_on,off:_off,one:_one,fix:_fixEvent},throttle:function throttle(fn,delay){var id,args;return function _throttle(){args=arguments;if(!id){fn.apply(window,args);id=setTimeout(function(){id=0;fn.apply(window,args);},delay);}};},F:function F(){},parseJSON:function parseJSON(str){var json;if(window.JSON&&JSON.parse){json=JSON.parse(str);}else {json=new Function('return ('+str.replace(/([\r\n])/g,'\\$1')+');')();}return json;},trim:function trim(str){str=String(str);return str.trim?str.trim():str.replace(/^\s+|\s+$/g,'');}, /**
	          * Simple Defer
	          * @return  {Object}
	          */defer:function defer(){var list=[],result,error,defer={resolve:function resolve(err,res){defer.resolve=noop;error=err||false;result=res;while(res=list.shift()){res(error,result);}},then:function then(fn){if(error!==undef){fn(error,result);}else {list.push(fn);}}};return defer;},queue:function queue(fn){var _idx=0,_length=0,_fail=false,_end=false,queue={inc:function inc(){_length++;},next:function next(){_idx++;setTimeout(queue.check,0);},check:function check(){_idx>=_length&&!_fail&&queue.end();},isFail:function isFail(){return _fail;},fail:function fail(){!_fail&&fn(_fail=true);},end:function end(){if(!_end){_end=true;fn();}}};return queue;}, /**
	          * For each object
	          *
	          * @param {Object|Array}  obj
	          * @param {Function}    fn
	          * @param {*}       [ctx]
	          */each:_each, /**
	          * Async for
	          * @param {Array} array
	          * @param {Function} callback
	          */afor:function afor(array,callback){var i=0,n=array.length;if(_isArray(array)&&n--){(function _next(){callback(n!=i&&_next,array[i],i++);})();}else {callback(false);}}, /**
	          * Merge the contents of two or more objects together into the first object
	          *
	          * @param {Object}  dst
	          * @return  {Object}
	          */extend:_extend, /**
	          * Is file instance
	          *
	          * @param  {File}  file
	          * @return {Boolean}
	          */isFile:function isFile(file){return html5&&file&&file instanceof File;}, /**
	          * Is canvas element
	          *
	          * @param {HTMLElement} el
	          * @return  {Boolean}
	          */isCanvas:function isCanvas(el){return el&&_rcanvas.test(el.nodeName);},getFilesFilter:function getFilesFilter(filter){filter=typeof filter=='string'?filter:filter.getAttribute&&filter.getAttribute('accept')||'';return filter?new RegExp('('+filter.replace(/\./g,'\\.').replace(/,/g,'|')+')$','i'):/./;}, /**
	          * Read as DataURL
	          *
	          * @param {File|Element} file
	          * @param {Function} fn
	          */readAsDataURL:function readAsDataURL(file,fn){if(api.isCanvas(file)){_emit(file,fn,'load',api.toDataURL(file));}else {_readAs(file,fn,'DataURL');}}, /**
	          * Read as Binary string
	          *
	          * @param {File} file
	          * @param {Function} fn
	          */readAsBinaryString:function readAsBinaryString(file,fn){if(_hasSupportReadAs('BinaryString')){_readAs(file,fn,'BinaryString');}else { // Hello IE10!
	   _readAs(file,function(evt){if(evt.type=='load'){try{ // dataURL -> binaryString
	   evt.result=api.toBinaryString(evt.result);}catch(e){evt.type='error';evt.message=e.toString();}}fn(evt);},'DataURL');}}, /**
	          * Read as ArrayBuffer
	          *
	          * @param {File} file
	          * @param {Function} fn
	          */readAsArrayBuffer:function readAsArrayBuffer(file,fn){_readAs(file,fn,'ArrayBuffer');}, /**
	          * Read as text
	          *
	          * @param {File} file
	          * @param {String} encoding
	          * @param {Function} [fn]
	          */readAsText:function readAsText(file,encoding,fn){if(!fn){fn=encoding;encoding='utf-8';}_readAs(file,fn,'Text',encoding);}, /**
	          * Convert image or canvas to DataURL
	          *
	          * @param   {Element}  el      Image or Canvas element
	          * @param   {String}   [type]  mime-type
	          * @return  {String}
	          */toDataURL:function toDataURL(el,type){if(typeof el=='string'){return el;}else if(el.toDataURL){return el.toDataURL(type||'image/png');}}, /**
	          * Canvert string, image or canvas to binary string
	          *
	          * @param   {String|Element} val
	          * @return  {String}
	          */toBinaryString:function toBinaryString(val){return window.atob(api.toDataURL(val).replace(_rdata,''));}, /**
	          * Read file or DataURL as ImageElement
	          *
	          * @param {File|String} file
	          * @param {Function}    fn
	          * @param {Boolean}   [progress]
	          */readAsImage:function readAsImage(file,fn,progress){if(api.isFile(file)){if(apiURL){ /** @namespace apiURL.createObjectURL */var data=apiURL.createObjectURL(file);if(data===undef){_emit(file,fn,'error');}else {api.readAsImage(data,fn,progress);}}else {api.readAsDataURL(file,function(evt){if(evt.type=='load'){api.readAsImage(evt.result,fn,progress);}else if(progress||evt.type=='error'){_emit(file,fn,evt,null,{loaded:evt.loaded,total:evt.total});}});}}else if(api.isCanvas(file)){_emit(file,fn,'load',file);}else if(_rimg.test(file.nodeName)){if(file.complete){_emit(file,fn,'load',file);}else {var events='error abort load';_one(file,events,function _fn(evt){if(evt.type=='load'&&apiURL){ /** @namespace apiURL.revokeObjectURL */apiURL.revokeObjectURL(file.src);}_off(file,events,_fn);_emit(file,fn,evt,file);});}}else if(file.iframe){_emit(file,fn,{type:'error'});}else { // Created image
	   var img=api.newImage(file.dataURL||file);api.readAsImage(img,fn,progress);}}, /**
	          * Make file by name
	          *
	          * @param {String}  name
	          * @return  {Array}
	          */checkFileObj:function checkFileObj(name){var file={},accept=api.accept;if((typeof name==='undefined'?'undefined':babelHelpers.typeof(name))=='object'){file=name;}else {file.name=(name+'').split(/\\|\//g).pop();}if(file.type==null){file.type=file.name.split('.').pop();}_each(accept,function(ext,type){ext=new RegExp(ext.replace(/\s/g,'|'),'i');if(ext.test(file.type)||api.ext2mime[file.type]){file.type=api.ext2mime[file.type]||type.split('/')[0]+'/'+file.type;}});return file;}, /**
	          * Get drop files
	          *
	          * @param {Event} evt
	          * @param {Function} callback
	          */getDropFiles:function getDropFiles(evt,callback){var files=[],dataTransfer=_getDataTransfer(evt),entrySupport=_isArray(dataTransfer.items)&&dataTransfer.items[0]&&_getAsEntry(dataTransfer.items[0]),queue=api.queue(function(){callback(files);});_each((entrySupport?dataTransfer.items:dataTransfer.files)||[],function(item){queue.inc();try{if(entrySupport){_readEntryAsFiles(item,function(err,entryFiles){if(err){api.log('[err] getDropFiles:',err);}else {files.push.apply(files,entryFiles);}queue.next();});}else {_isRegularFile(item,function(yes){yes&&files.push(item);queue.next();});}}catch(err){queue.next();api.log('[err] getDropFiles: ',err);}});queue.check();}, /**
	          * Get file list
	          *
	          * @param {HTMLInputElement|Event}  input
	          * @param {String|Function} [filter]
	          * @param {Function}      [callback]
	          * @return  {Array|Null}
	          */getFiles:function getFiles(input,filter,callback){var files=[];if(callback){api.filterFiles(api.getFiles(input),filter,callback);return null;}if(input.jquery){ // jQuery object
	   input.each(function(){files=files.concat(api.getFiles(this));});input=files;files=[];}if(typeof filter=='string'){filter=api.getFilesFilter(filter);}if(input.originalEvent){ // jQuery event
	   input=_fixEvent(input.originalEvent);}else if(input.srcElement){ // IE Event
	   input=_fixEvent(input);}if(input.dataTransfer){ // Drag'n'Drop
	   input=input.dataTransfer;}else if(input.target){ // Event
	   input=input.target;}if(input.files){ // Input[type="file"]
	   files=input.files;if(!html5){ // Partial support for file api
	   files[0].blob=input;files[0].iframe=true;}}else if(!html5&&isInputFile(input)){if(api.trim(input.value)){files=[api.checkFileObj(input.value)];files[0].blob=input;files[0].iframe=true;}}else if(_isArray(input)){files=input;}return api.filter(files,function(file){return !filter||filter.test(file.name);});}, /**
	          * Get total file size
	          * @param {Array} files
	          * @return  {Number}
	          */getTotalSize:function getTotalSize(files){var size=0,i=files&&files.length;while(i--){size+=files[i].size;}return size;}, /**
	          * Get image information
	          *
	          * @param {File}    file
	          * @param {Function}  fn
	          */getInfo:function getInfo(file,fn){var info={},readers=_infoReader.concat();if(api.isFile(file)){(function _next(){var reader=readers.shift();if(reader){if(reader.test(file.type)){reader(file,function(err,res){if(err){fn(err);}else {_extend(info,res);_next();}});}else {_next();}}else {fn(false,info);}})();}else {fn('not_support_info',info);}}, /**
	          * Add information reader
	          *
	          * @param {RegExp} mime
	          * @param {Function} fn
	          */addInfoReader:function addInfoReader(mime,fn){fn.test=function(type){return mime.test(type);};_infoReader.push(fn);}, /**
	          * Filter of array
	          *
	          * @param {Array}   input
	          * @param {Function}  fn
	          * @return  {Array}
	          */filter:function filter(input,fn){var result=[],i=0,n=input.length,val;for(;i<n;i++){if(i in input){val=input[i];if(fn.call(val,val,i,input)){result.push(val);}}}return result;}, /**
	          * Filter files
	          *
	          * @param {Array}   files
	          * @param {Function}  eachFn
	          * @param {Function}  resultFn
	          */filterFiles:function filterFiles(files,eachFn,resultFn){if(files.length){ // HTML5 or Flash
	   var queue=files.concat(),file,result=[],deleted=[];(function _next(){if(queue.length){file=queue.shift();api.getInfo(file,function(err,info){(eachFn(file,err?false:info)?result:deleted).push(file);_next();});}else {resultFn(result,deleted);}})();}else {resultFn([],files);}},upload:function upload(options){options=_extend({prepare:api.F,beforeupload:api.F,upload:api.F,fileupload:api.F,fileprogress:api.F,filecomplete:api.F,progress:api.F,complete:api.F,pause:api.F,imageOriginal:true,chunkSize:api.chunkSize,chunkUpoloadRetry:api.chunkUploadRetry},options);if(options.imageAutoOrientation&&!options.imageTransform){options.imageTransform={rotate:'auto'};}var proxyXHR=new api.XHR(options),dataArray=this._getFilesDataArray(options.files),_this=this,_total=0,_loaded=0,_nextFile2,_complete=false; // calc total size
	   _each(dataArray,function(data){_total+=data.size;}); // Array of files
	   proxyXHR.files=[];_each(dataArray,function(data){proxyXHR.files.push(data.file);}); // Set upload status props
	   proxyXHR.total=_total;proxyXHR.loaded=0;proxyXHR.filesLeft=dataArray.length; // emit "beforeupload"  event
	   options.beforeupload(proxyXHR,options); // Upload by file
	   _nextFile2=function _nextFile(){var data=dataArray.shift(),_file=data&&data.file,_fileLoaded=false,_fileOptions=_simpleClone(options);proxyXHR.filesLeft=dataArray.length;if(_file&&_file.name===api.expando){_file=null;api.log('[warn] FileAPI.upload() — called without files');}if((proxyXHR.statusText!='abort'||proxyXHR.current)&&data){ // Mark active job
	   _complete=false; // Set current upload file
	   proxyXHR.currentFile=_file; // Prepare file options
	   _file&&options.prepare(_file,_fileOptions);_this._getFormData(_fileOptions,data,function(form){if(!_loaded){ // emit "upload" event
	   options.upload(proxyXHR,options);}var xhr=new api.XHR(_extend({},_fileOptions,{upload:_file?function(){ // emit "fileupload" event
	   options.fileupload(_file,xhr,_fileOptions);}:noop,progress:_file?function(evt){if(!_fileLoaded){ // emit "fileprogress" event
	   options.fileprogress({type:'progress',total:data.total=evt.total,loaded:data.loaded=evt.loaded},_file,xhr,_fileOptions); // emit "progress" event
	   options.progress({type:'progress',total:_total,loaded:proxyXHR.loaded=_loaded+data.size*(evt.loaded/evt.total)|0},_file,xhr,_fileOptions);}}:noop,complete:function complete(err){ // fixed throttle event
	   _fileLoaded=true;_each(_xhrPropsExport,function(name){proxyXHR[name]=xhr[name];});if(_file){data.loaded=data.total; // emulate 100% "progress"
	   this.progress(data); // bytes loaded
	   _loaded+=data.size; // data.size != data.total, it's desirable fix this
	   proxyXHR.loaded=_loaded; // emit "filecomplete" event
	   options.filecomplete(err,xhr,_file,_fileOptions);} // upload next file
	   _nextFile2.call(_this);}})); // xhr
	   // ...
	   proxyXHR.abort=function(current){if(!current){dataArray.length=0;}this.current=current;xhr.abort();}; // Start upload
	   xhr.send(form);});}else {options.complete(proxyXHR.status==200||proxyXHR.status==201?false:proxyXHR.statusText||'error',proxyXHR,options); // Mark done state
	   _complete=true;}}; // Next tick
	   setTimeout(_nextFile2,0); // Append more files to the existing request
	   // first - add them to the queue head/tail
	   proxyXHR.append=function(files,first){files=api._getFilesDataArray([].concat(files));_each(files,function(data){_total+=data.size;proxyXHR.files.push(data.file);if(first){dataArray.unshift(data);}else {dataArray.push(data);}});proxyXHR.statusText="";if(_complete){_nextFile2.call(_this);}}; // Removes file from queue by file reference and returns it
	   proxyXHR.remove=function(file){var i=dataArray.length,_file;while(i--){if(dataArray[i].file==file){_file=dataArray.splice(i,1);_total-=_file.size;}}return _file;};return proxyXHR;},_getFilesDataArray:function _getFilesDataArray(data){var files=[],oFiles={};if(isInputFile(data)){var tmp=api.getFiles(data);oFiles[data.name||'file']=data.getAttribute('multiple')!==null?tmp:tmp[0];}else if(_isArray(data)&&isInputFile(data[0])){_each(data,function(input){oFiles[input.name||'file']=api.getFiles(input);});}else {oFiles=data;}_each(oFiles,function add(file,name){if(_isArray(file)){_each(file,function(file){add(file,name);});}else if(file&&(file.name||file.image)){files.push({name:name,file:file,size:file.size,total:file.size,loaded:0});}});if(!files.length){ // Create fake `file` object
	   files.push({file:{name:api.expando}});}return files;},_getFormData:function _getFormData(options,data,fn){var file=data.file,name=data.name,filename=file.name,filetype=file.type,trans=api.support.transform&&options.imageTransform,Form=new api.Form(),queue=api.queue(function(){fn(Form);}),isOrignTrans=trans&&_isOriginTransform(trans),postNameConcat=api.postNameConcat;(function _addFile(file /**Object*/){if(file.image){ // This is a FileAPI.Image
	   queue.inc();file.toData(function(err,image){ // @todo: error
	   filename=filename||new Date().getTime()+'.png';_addFile(image);queue.next();});}else if(api.Image&&trans&&(/^image/.test(file.type)||_rimgcanvas.test(file.nodeName))){queue.inc();if(isOrignTrans){ // Convert to array for transform function
	   trans=[trans];}api.Image.transform(file,trans,options.imageAutoOrientation,function(err,images){if(isOrignTrans&&!err){if(!dataURLtoBlob&&!api.flashEngine){ // Canvas.toBlob or Flash not supported, use multipart
	   Form.multipart=true;}Form.append(name,images[0],filename,trans[0].type||filetype);}else {var addOrigin=0;if(!err){_each(images,function(image,idx){if(!dataURLtoBlob&&!api.flashEngine){Form.multipart=true;}if(!trans[idx].postName){addOrigin=1;}Form.append(trans[idx].postName||postNameConcat(name,idx),image,filename,trans[idx].type||filetype);});}if(err||options.imageOriginal){Form.append(postNameConcat(name,addOrigin?'original':null),file,filename,filetype);}}queue.next();});}else if(filename!==api.expando){Form.append(name,file,filename);}})(file); // Append data
	   _each(options.data,function add(val,name){if((typeof val==='undefined'?'undefined':babelHelpers.typeof(val))=='object'){_each(val,function(v,i){add(v,postNameConcat(name,i));});}else {Form.append(name,val);}});queue.check();},reset:function reset(inp,notRemove){var parent,clone;if(jQuery){clone=jQuery(inp).clone(true).insertBefore(inp).val('')[0];if(!notRemove){jQuery(inp).remove();}}else {parent=inp.parentNode;clone=parent.insertBefore(inp.cloneNode(true),inp);clone.value='';if(!notRemove){parent.removeChild(inp);}_each(_elEvents[api.uid(inp)],function(fns,type){_each(fns,function(fn){_off(inp,type,fn);_on(clone,type,fn);});});}return clone;}, /**
	          * Load remote file
	          *
	          * @param   {String}    url
	          * @param   {Function}  fn
	          * @return  {XMLHttpRequest}
	          */load:function load(url,fn){var xhr=api.getXHR();if(xhr){xhr.open('GET',url,true);if(xhr.overrideMimeType){xhr.overrideMimeType('text/plain; charset=x-user-defined');}_on(xhr,'progress',function( /**Event*/evt){ /** @namespace evt.lengthComputable */if(evt.lengthComputable){fn({type:evt.type,loaded:evt.loaded,total:evt.total},xhr);}});xhr.onreadystatechange=function(){if(xhr.readyState==4){xhr.onreadystatechange=null;if(xhr.status==200){url=url.split('/'); /** @namespace xhr.responseBody */var file={name:url[url.length-1],size:xhr.getResponseHeader('Content-Length'),type:xhr.getResponseHeader('Content-Type')};file.dataURL='data:'+file.type+';base64,'+api.encode64(xhr.responseBody||xhr.responseText);fn({type:'load',result:file},xhr);}else {fn({type:'error'},xhr);}}};xhr.send(null);}else {fn({type:'error'});}return xhr;},encode64:function encode64(str){var b64='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',outStr='',i=0;if(typeof str!=='string'){str=String(str);}while(i<str.length){ //all three "& 0xff" added below are there to fix a known bug
	   //with bytes returned by xhr.responseText
	   var byte1=str.charCodeAt(i++)&0xff,byte2=str.charCodeAt(i++)&0xff,byte3=str.charCodeAt(i++)&0xff,enc1=byte1>>2,enc2=(byte1&3)<<4|byte2>>4,enc3,enc4;if(isNaN(byte2)){enc3=enc4=64;}else {enc3=(byte2&15)<<2|byte3>>6;enc4=isNaN(byte3)?64:byte3&63;}outStr+=b64.charAt(enc1)+b64.charAt(enc2)+b64.charAt(enc3)+b64.charAt(enc4);}return outStr;}} // api
	   ;function _emit(target,fn,name,res,ext){var evt={type:name.type||name,target:target,result:res};_extend(evt,ext);fn(evt);}function _hasSupportReadAs(as){return FileReader&&!!FileReader.prototype['readAs'+as];}function _readAs(file,fn,as,encoding){if(api.isFile(file)&&_hasSupportReadAs(as)){var Reader=new FileReader(); // Add event listener
	   _on(Reader,_readerEvents,function _fn(evt){var type=evt.type;if(type=='progress'){_emit(file,fn,evt,evt.target.result,{loaded:evt.loaded,total:evt.total});}else if(type=='loadend'){_off(Reader,_readerEvents,_fn);Reader=null;}else {_emit(file,fn,evt,evt.target.result);}});try{ // ReadAs ...
	   if(encoding){Reader['readAs'+as](file,encoding);}else {Reader['readAs'+as](file);}}catch(err){_emit(file,fn,'error',undef,{error:err.toString()});}}else {_emit(file,fn,'error',undef,{error:'filreader_not_support_'+as});}}function _isRegularFile(file,callback){ // http://stackoverflow.com/questions/8856628/detecting-folders-directories-in-javascript-filelist-objects
	   if(!file.type&&file.size%4096===0&&file.size<=102400){if(FileReader){try{var Reader=new FileReader();_one(Reader,_readerEvents,function(evt){var isFile=evt.type!='error';callback(isFile);if(isFile){Reader.abort();}});Reader.readAsDataURL(file);}catch(err){callback(false);}}else {callback(null);}}else {callback(true);}}function _getAsEntry(item){var entry;if(item.getAsEntry){entry=item.getAsEntry();}else if(item.webkitGetAsEntry){entry=item.webkitGetAsEntry();}return entry;}function _readEntryAsFiles(entry,callback){if(!entry){ // error
	   callback('invalid entry');}else if(entry.isFile){ // Read as file
	   entry.file(function(file){ // success
	   file.fullPath=entry.fullPath;callback(false,[file]);},function(err){ // error
	   callback('FileError.code: '+err.code);});}else if(entry.isDirectory){var reader=entry.createReader(),result=[];reader.readEntries(function(entries){ // success
	   api.afor(entries,function(next,entry){_readEntryAsFiles(entry,function(err,files){if(err){api.log(err);}else {result=result.concat(files);}if(next){next();}else {callback(false,result);}});});},function(err){ // error
	   callback('directory_reader: '+err);});}else {_readEntryAsFiles(_getAsEntry(entry),callback);}}function _simpleClone(obj){var copy={};_each(obj,function(val,key){if(val&&(typeof val==='undefined'?'undefined':babelHelpers.typeof(val))==='object'&&val.nodeType===void 0){val=_extend({},val);}copy[key]=val;});return copy;}function isInputFile(el){return _rinput.test(el&&el.tagName);}function _getDataTransfer(evt){return (evt.originalEvent||evt||'').dataTransfer||{};}function _isOriginTransform(trans){var key;for(key in trans){if(trans.hasOwnProperty(key)){if(!(trans[key] instanceof Object||key==='overlay'||key==='filter')){return true;}}}return false;} // Add default image info reader
	   api.addInfoReader(/^image/,function(file /**File*/,callback /**Function*/){if(!file.__dimensions){var defer=file.__dimensions=api.defer();api.readAsImage(file,function(evt){var img=evt.target;defer.resolve(evt.type=='load'?false:'error',{width:img.width,height:img.height});img=null;});}file.__dimensions.then(callback);}); /**
	      * Drag'n'Drop special event
	      *
	      * @param {HTMLElement} el
	      * @param {Function}    onHover
	      * @param {Function}    onDrop
	      */api.event.dnd=function(el,onHover,onDrop){var _id,_type;if(!onDrop){onDrop=onHover;onHover=api.F;}if(FileReader){_on(el,'dragenter dragleave dragover',function(evt){var types=_getDataTransfer(evt).types,i=types&&types.length,debounceTrigger=false;while(i--){if(~types[i].indexOf('File')){evt[preventDefault]();if(_type!==evt.type){_type=evt.type; // Store current type of event
	   if(_type!='dragleave'){onHover.call(evt[currentTarget],true,evt);}debounceTrigger=true;}break; // exit from "while"
	   }}if(debounceTrigger){clearTimeout(_id);_id=setTimeout(function(){onHover.call(evt[currentTarget],_type!='dragleave',evt);},50);}});_on(el,'drop',function(evt){evt[preventDefault]();_type=0;onHover.call(evt[currentTarget],false,evt);api.getDropFiles(evt,function(files){onDrop.call(evt[currentTarget],files,evt);});});}else {api.log("Drag'n'Drop -- not supported");}}; /**
	      * Remove drag'n'drop
	      * @param {HTMLElement} el
	      * @param {Function}    onHover
	      * @param {Function}    onDrop
	      */api.event.dnd.off=function(el,onHover,onDrop){_off(el,'dragenter dragleave dragover',onHover);_off(el,'drop',onDrop);}; // Support jQuery
	   if(jQuery&&!jQuery.fn.dnd){jQuery.fn.dnd=function(onHover,onDrop){return this.each(function(){api.event.dnd(this,onHover,onDrop);});};jQuery.fn.offdnd=function(onHover,onDrop){return this.each(function(){api.event.dnd.off(this,onHover,onDrop);});};} // @export
	   window.FileAPI=_extend(api,window.FileAPI); // Debug info
	   api.log('FileAPI: '+api.version);api.log('protocol: '+window.location.protocol);api.log('doctype: ['+doctype.name+'] '+doctype.publicId+' '+doctype.systemId); // @detect 'x-ua-compatible'
	   _each(document.getElementsByTagName('meta'),function(meta){if(/x-ua-compatible/i.test(meta.getAttribute('http-equiv'))){api.log('meta.http-equiv: '+meta.getAttribute('content'));}}); // @configuration
	   if(!api.flashUrl){api.flashUrl=api.staticPath+'FileAPI.flash.swf';}if(!api.flashImageUrl){api.flashImageUrl=api.staticPath+'FileAPI.flash.image.swf';}if(!api.flashWebcamUrl){api.flashWebcamUrl=api.staticPath+'FileAPI.flash.camera.swf';}})(window,void 0); /*global window, FileAPI, document */(function(api,document,undef){'use strict';var min=Math.min,round=Math.round,getCanvas=function getCanvas(){return document.createElement('canvas');},support=false,exifOrientation={8:270,3:180,6:90};try{support=getCanvas().toDataURL('image/png').indexOf('data:image/png')>-1;}catch(e){}function Image(file){if(file instanceof Image){var img=new Image(file.file);api.extend(img.matrix,file.matrix);return img;}else if(!(this instanceof Image)){return new Image(file);}this.file=file;this.matrix={sx:0,sy:0,sw:0,sh:0,dx:0,dy:0,dw:0,dh:0,resize:0, // min, max OR preview
	   deg:0,quality:1, // jpeg quality
	   filter:0};}Image.prototype={image:true,constructor:Image,set:function set(attrs){api.extend(this.matrix,attrs);return this;},crop:function crop(x,y,w,h){if(w===undef){w=x;h=y;x=y=0;}return this.set({sx:x,sy:y,sw:w,sh:h||w});},resize:function resize(w,h,type){if(typeof h=='string'){type=h;h=w;}return this.set({dw:w,dh:h,resize:type});},preview:function preview(w,h){return this.resize(w,h||w,'preview');},rotate:function rotate(deg){return this.set({deg:deg});},filter:function filter(_filter){return this.set({filter:_filter});},overlay:function overlay(images){return this.set({overlay:images});},clone:function clone(){return new Image(this);},_load:function _load(image,fn){var self=this;if(/img|video/i.test(image.nodeName)){fn.call(self,null,image);}else {api.readAsImage(image,function(evt){fn.call(self,evt.type!='load',evt.result);});}},_apply:function _apply(image,fn){var canvas=getCanvas(),m=this.getMatrix(image),ctx=canvas.getContext('2d'),width=image.videoWidth||image.width,height=image.videoHeight||image.height,deg=m.deg,dw=m.dw,dh=m.dh,w=width,h=height,filter=m.filter,copy // canvas copy
	   ,buffer=image,overlay=m.overlay,queue=api.queue(function(){fn(false,canvas);}),renderImageToCanvas=api.renderImageToCanvas; // For `renderImageToCanvas`
	   image._type=this.file.type;while(min(w/dw,h/dh)>2){w=w/2+0.5|0;h=h/2+0.5|0;copy=getCanvas();copy.width=w;copy.height=h;if(buffer!==image){renderImageToCanvas(copy,buffer,0,0,buffer.width,buffer.height,0,0,w,h);buffer=copy;}else {buffer=copy;renderImageToCanvas(buffer,image,m.sx,m.sy,m.sw,m.sh,0,0,w,h);m.sx=m.sy=m.sw=m.sh=0;}}canvas.width=deg%180?dh:dw;canvas.height=deg%180?dw:dh;canvas.type=m.type;canvas.quality=m.quality;ctx.rotate(deg*Math.PI/180);renderImageToCanvas(canvas,buffer,m.sx,m.sy,m.sw||buffer.width,m.sh||buffer.height,deg==180||deg==270?-dw:0,deg==90||deg==180?-dh:0,dw,dh);dw=canvas.width;dh=canvas.height; // Apply overlay
	   overlay&&api.each([].concat(overlay),function(over){queue.inc(); // preload
	   var img=new window.Image(),fn=function fn(){var x=over.x|0,y=over.y|0,w=over.w||img.width,h=over.h||img.height,rel=over.rel; // center  |  right  |  left
	   x=rel==1||rel==4||rel==7?(dw-w+x)/2:rel==2||rel==5||rel==8?dw-(w+x):x; // center  |  bottom  |  top
	   y=rel==3||rel==4||rel==5?(dh-h+y)/2:rel>=6?dh-(h+y):y;api.event.off(img,'error load abort',fn);try{ctx.globalAlpha=over.opacity||1;ctx.drawImage(img,x,y,w,h);}catch(er){}queue.next();};api.event.on(img,'error load abort',fn);img.src=over.src;if(img.complete){fn();}});if(filter){queue.inc();Image.applyFilter(canvas,filter,queue.next);}queue.check();},getMatrix:function getMatrix(image){var m=api.extend({},this.matrix),sw=m.sw=m.sw||image.videoWidth||image.naturalWidth||image.width,sh=m.sh=m.sh||image.videoHeight||image.naturalHeight||image.height,dw=m.dw=m.dw||sw,dh=m.dh=m.dh||sh,sf=sw/sh,df=dw/dh,type=m.resize;if(type=='preview'){if(dw!=sw||dh!=sh){ // Make preview
	   var w,h;if(df>=sf){w=sw;h=w/df;}else {h=sh;w=h*df;}if(w!=sw||h!=sh){m.sx=~ ~((sw-w)/2);m.sy=~ ~((sh-h)/2);sw=w;sh=h;}}}else if(type){if(!(sw>dw||sh>dh)){dw=sw;dh=sh;}else if(type=='min'){dw=round(sf<df?min(sw,dw):dh*sf);dh=round(sf<df?dw/sf:min(sh,dh));}else {dw=round(sf>=df?min(sw,dw):dh*sf);dh=round(sf>=df?dw/sf:min(sh,dh));}}m.sw=sw;m.sh=sh;m.dw=dw;m.dh=dh;return m;},_trans:function _trans(fn){this._load(this.file,function(err,image){if(err){fn(err);}else {this._apply(image,fn);}});},get:function get(fn){if(api.support.transform){var _this=this,matrix=_this.matrix;if(matrix.deg=='auto'){api.getInfo(_this.file,function(err,info){ // rotate by exif orientation
	   matrix.deg=exifOrientation[info&&info.exif&&info.exif.Orientation]||0;_this._trans(fn);});}else {_this._trans(fn);}}else {fn('not_support_transform');}},toData:function toData(fn){this.get(fn);}};Image.exifOrientation=exifOrientation;Image.transform=function(file,transform,autoOrientation,fn){function _transform(err,img){ // img -- info object
	   var images={},queue=api.queue(function(err){fn(err,images);});if(!err){api.each(transform,function(params,name){if(!queue.isFail()){var ImgTrans=new Image(img.nodeType?img:file);if(typeof params=='function'){params(img,ImgTrans);}else if(params.width){ImgTrans[params.preview?'preview':'resize'](params.width,params.height,params.type);}else {if(params.maxWidth&&(img.width>params.maxWidth||img.height>params.maxHeight)){ImgTrans.resize(params.maxWidth,params.maxHeight,'max');}}if(params.crop){var crop=params.crop;ImgTrans.crop(crop.x|0,crop.y|0,crop.w||crop.width,crop.h||crop.height);}if(params.rotate===undef&&autoOrientation){params.rotate='auto';}ImgTrans.set({deg:params.rotate,type:params.type||file.type||'image/png',quality:params.quality||1,overlay:params.overlay,filter:params.filter});queue.inc();ImgTrans.toData(function(err,image){if(err){queue.fail();}else {images[name]=image;queue.next();}});}});}else {queue.fail();}} // @todo: Оло-ло, нужно рефакторить это место
	   if(file.width){_transform(false,file);}else {api.getInfo(file,_transform);}}; // @const
	   api.each(['TOP','CENTER','BOTTOM'],function(x,i){api.each(['LEFT','CENTER','RIGHT'],function(y,j){Image[x+'_'+y]=i*3+j;Image[y+'_'+x]=i*3+j;});}); /**
	      * Trabsform element to canvas
	      *
	      * @param    {Image|HTMLVideoElement}   el
	      * @returns  {Canvas}
	      */Image.toCanvas=function(el){var canvas=document.createElement('canvas');canvas.width=el.videoWidth||el.width;canvas.height=el.videoHeight||el.height;canvas.getContext('2d').drawImage(el,0,0);return canvas;}; /**
	      * Create image from DataURL
	      * @param  {String}  dataURL
	      * @param  {Object}  size
	      * @param  {Function}  callback
	      */Image.fromDataURL=function(dataURL,size,callback){var img=api.newImage(dataURL);api.extend(img,size);callback(img);}; /**
	      * Apply filter (caman.js)
	      *
	      * @param  {Canvas|Image}   canvas
	      * @param  {String|Function}  filter
	      * @param  {Function}  doneFn
	      */Image.applyFilter=function(canvas,filter,doneFn){if(typeof filter=='function'){filter(canvas,doneFn);}else if(window.Caman){ // http://camanjs.com/guides/
	   window.Caman(canvas.tagName=='IMG'?Image.toCanvas(canvas):canvas,function(){if(typeof filter=='string'){this[filter]();}else {api.each(filter,function(val,method){this[method](val);},this);}this.render(doneFn);});}}; /**
	      * For load-image-ios.js
	      */api.renderImageToCanvas=function(canvas,img,sx,sy,sw,sh,dx,dy,dw,dh){canvas.getContext('2d').drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh);return canvas;}; // @export
	   api.support.canvas=api.support.transform=support;api.Image=Image;})(FileAPI,document); /*global window, FileAPI */(function(api,window){"use strict";var document=window.document,FormData=window.FormData,Form=function Form(){this.items=[];},encodeURIComponent=window.encodeURIComponent;Form.prototype={append:function append(name,blob,file,type){this.items.push({name:name,blob:blob&&blob.blob||(blob==void 0?'':blob),file:blob&&(file||blob.name),type:blob&&(type||blob.type)});},each:function each(fn){var i=0,n=this.items.length;for(;i<n;i++){fn.call(this,this.items[i]);}},toData:function toData(fn,options){ // allow chunked transfer if we have only one file to send
	   // flag is used below and in XHR._send
	   options._chunked=api.support.chunked&&options.chunkSize>0&&api.filter(this.items,function(item){return item.file;}).length==1;if(!api.support.html5){api.log('FileAPI.Form.toHtmlData');this.toHtmlData(fn);}else if(!api.formData||this.multipart||!FormData){api.log('FileAPI.Form.toMultipartData');this.toMultipartData(fn);}else if(options._chunked){api.log('FileAPI.Form.toPlainData');this.toPlainData(fn);}else {api.log('FileAPI.Form.toFormData');this.toFormData(fn);}},_to:function _to(data,complete,next,arg){var queue=api.queue(function(){complete(data);});this.each(function(file){next(file,data,queue,arg);});queue.check();},toHtmlData:function toHtmlData(fn){this._to(document.createDocumentFragment(),fn,function(file,data /**DocumentFragment*/){var blob=file.blob,hidden;if(file.file){api.reset(blob,true); // set new name
	   blob.name=file.name;data.appendChild(blob);}else {hidden=document.createElement('input');hidden.name=file.name;hidden.type='hidden';hidden.value=blob;data.appendChild(hidden);}});},toPlainData:function toPlainData(fn){this._to({},fn,function(file,data,queue){if(file.file){data.type=file.file;}if(file.blob.toBlob){ // canvas
	   queue.inc();_convertFile(file,function(file,blob){data.name=file.name;data.file=blob;data.size=blob.length;data.type=file.type;queue.next();});}else if(file.file){ // file
	   data.name=file.blob.name;data.file=file.blob;data.size=file.blob.size;data.type=file.type;}else { // additional data
	   if(!data.params){data.params=[];}data.params.push(encodeURIComponent(file.name)+"="+encodeURIComponent(file.blob));}data.start=-1;data.end=data.file&&data.file.FileAPIReadPosition||-1;data.retry=0;});},toFormData:function toFormData(fn){this._to(new FormData(),fn,function(file,data,queue){if(file.blob&&file.blob.toBlob){queue.inc();_convertFile(file,function(file,blob){data.append(file.name,blob,file.file);queue.next();});}else if(file.file){data.append(file.name,file.blob,file.file);}else {data.append(file.name,file.blob);}if(file.file){data.append('_'+file.name,file.file);}});},toMultipartData:function toMultipartData(fn){this._to([],fn,function(file,data,queue,boundary){queue.inc();_convertFile(file,function(file,blob){data.push('--_'+boundary+('\r\nContent-Disposition: form-data; name="'+file.name+'"'+(file.file?'; filename="'+encodeURIComponent(file.file)+'"':'')+(file.file?'\r\nContent-Type: '+(file.type||'application/octet-stream'):'')+'\r\n'+'\r\n'+(file.file?blob:encodeURIComponent(blob))+'\r\n'));queue.next();},true);},api.expando);}};function _convertFile(file,fn,useBinaryString){var blob=file.blob,filename=file.file;if(filename){if(!blob.toDataURL){ // The Blob is not an image.
	   api.readAsBinaryString(blob,function(evt){if(evt.type=='load'){fn(file,evt.result);}});return;}var mime={'image/jpeg':'.jpe?g','image/png':'.png'},type=mime[file.type]?file.type:'image/png',ext=mime[type]||'.png',quality=blob.quality||1;if(!filename.match(new RegExp(ext+'$','i'))){ // Does not change the current extension, but add a new one.
	   filename+=ext.replace('?','');}file.file=filename;file.type=type;if(!useBinaryString&&blob.toBlob){blob.toBlob(function(blob){fn(file,blob);},type,quality);}else {fn(file,api.toBinaryString(blob.toDataURL(type,quality)));}}else {fn(file,blob);}} // @export
	   api.Form=Form;})(FileAPI,window); /*global window, FileAPI, Uint8Array */(function(window,api){"use strict";var noop=function noop(){},document=window.document,XHR=function XHR(options){this.uid=api.uid();this.xhr={abort:noop,getResponseHeader:noop,getAllResponseHeaders:noop};this.options=options;},_xhrResponsePostfix={'':1,XML:1,Text:1,Body:1};XHR.prototype={status:0,statusText:'',constructor:XHR,getResponseHeader:function getResponseHeader(name){return this.xhr.getResponseHeader(name);},getAllResponseHeaders:function getAllResponseHeaders(){return this.xhr.getAllResponseHeaders()||{};},end:function end(status,statusText){var _this=this,options=_this.options;_this.end=_this.abort=noop;_this.status=status;if(statusText){_this.statusText=statusText;}api.log('xhr.end:',status,statusText);options.complete(status==200||status==201?false:_this.statusText||'unknown',_this);if(_this.xhr&&_this.xhr.node){setTimeout(function(){var node=_this.xhr.node;try{node.parentNode.removeChild(node);}catch(e){}try{delete window[_this.uid];}catch(e){}window[_this.uid]=_this.xhr.node=null;},9);}},abort:function abort(){this.end(0,'abort');if(this.xhr){this.xhr.aborted=true;this.xhr.abort();}},send:function send(FormData){var _this=this,options=this.options;FormData.toData(function(data){ // Start uploading
	   options.upload(options,_this);_this._send.call(_this,options,data);},options);},_send:function _send(options,data){var _this=this,xhr,uid=_this.uid,url=options.url;api.log('XHR._send:',data);if(!options.cache){ // No cache
	   url+=(~url.indexOf('?')?'&':'?')+api.uid();}if(data.nodeName){ // legacy
	   options.upload(options,_this);xhr=document.createElement('div');xhr.innerHTML='<form target="'+uid+'" action="'+url+'" method="POST" enctype="multipart/form-data" style="position: absolute; top: -1000px; overflow: hidden; width: 1px; height: 1px;">'+'<iframe name="'+uid+'" src="javascript:false;"></iframe>'+'<input value="'+uid+'" name="callback" type="hidden"/>'+'</form>';_this.xhr.abort=function(){var transport=xhr.getElementsByTagName('iframe')[0];if(transport){try{if(transport.stop){transport.stop();}else if(transport.contentWindow.stop){transport.contentWindow.stop();}else {transport.contentWindow.document.execCommand('Stop');}}catch(er){}}xhr=null;}; // append form-data
	   var form=xhr.getElementsByTagName('form')[0];form.appendChild(data);api.log(form.parentNode.innerHTML); // append to DOM
	   document.body.appendChild(xhr); // keep a reference to node-transport
	   _this.xhr.node=xhr; // jsonp-callack
	   window[uid]=function(status,statusText,response){_this.readyState=4;_this.responseText=response;_this.end(status,statusText);xhr=null;}; // send
	   _this.readyState=2; // loaded
	   form.submit();form=null;}else { // html5
	   if(this.xhr&&this.xhr.aborted){api.log("Error: already aborted");return;}xhr=_this.xhr=api.getXHR();if(data.params){url+=(url.indexOf('?')<0?"?":"&")+data.params.join("&");}xhr.open('POST',url,true);if(api.withCredentials){xhr.withCredentials="true";}if(!options.headers||!options.headers['X-Requested-With']){xhr.setRequestHeader('X-Requested-With','XMLHttpRequest');}api.each(options.headers,function(val,key){xhr.setRequestHeader(key,val);});if(options._chunked){ // chunked upload
	   if(xhr.upload){xhr.upload.addEventListener('progress',function( /**Event*/evt){if(!data.retry){ // show progress only for correct chunk uploads
	   options.progress({type:evt.type,total:data.size,loaded:data.start+evt.loaded,totalSize:data.size},_this,options);}},false);}xhr.onreadystatechange=function(){var lkb=parseInt(xhr.getResponseHeader('X-Last-Known-Byte'),10);_this.status=xhr.status;_this.statusText=xhr.statusText;_this.readyState=xhr.readyState;if(xhr.readyState==4){for(var k in _xhrResponsePostfix){_this['response'+k]=xhr['response'+k];}xhr.onreadystatechange=null;if(!xhr.status||xhr.status-201>0){api.log("Error: "+xhr.status); // some kind of error
	   // 0 - connection fail or timeout, if xhr.aborted is true, then it's not recoverable user action
	   // up - server error
	   if((!xhr.status&&!xhr.aborted||500==xhr.status||416==xhr.status)&&++data.retry<=options.chunkUploadRetry){ // let's try again the same chunk
	   // only applicable for recoverable error codes 500 && 416
	   var delay=xhr.status?0:api.chunkNetworkDownRetryTimeout; // inform about recoverable problems
	   options.pause(data.file,options); // smart restart if server reports about the last known byte
	   api.log("X-Last-Known-Byte: "+lkb);if(lkb){data.end=lkb;}else {data.end=data.start-1;}setTimeout(function(){_this._send(options,data);},delay);}else { // no mo retries
	   _this.end(xhr.status);}}else { // success
	   data.retry=0;if(data.end==data.size-1){ // finished
	   _this.end(xhr.status);}else { // next chunk
	   // shift position if server reports about the last known byte
	   api.log("X-Last-Known-Byte: "+lkb);if(lkb){data.end=lkb;}data.file.FileAPIReadPosition=data.end;setTimeout(function(){_this._send(options,data);},0);}}xhr=null;}};data.start=data.end+1;data.end=Math.max(Math.min(data.start+options.chunkSize,data.size)-1,data.start);var slice;(slice='slice') in data.file||(slice='mozSlice') in data.file||(slice='webkitSlice') in data.file;xhr.setRequestHeader("Content-Range","bytes "+data.start+"-"+data.end+"/"+data.size);xhr.setRequestHeader("Content-Disposition",'attachment; filename='+encodeURIComponent(data.name));xhr.setRequestHeader("Content-Type",data.type||"application/octet-stream");slice=data.file[slice](data.start,data.end+1);xhr.send(slice);slice=null;}else { // single piece upload
	   if(xhr.upload){ // https://github.com/blueimp/jQuery-File-Upload/wiki/Fixing-Safari-hanging-on-very-high-speed-connections-%281Gbps%29
	   xhr.upload.addEventListener('progress',api.throttle(function( /**Event*/evt){options.progress(evt,_this,options);},100),false);}xhr.onreadystatechange=function(){_this.status=xhr.status;_this.statusText=xhr.statusText;_this.readyState=xhr.readyState;if(xhr.readyState==4){for(var k in _xhrResponsePostfix){_this['response'+k]=xhr['response'+k];}xhr.onreadystatechange=null;_this.end(xhr.status);xhr=null;}};if(api.isArray(data)){ // multipart
	   xhr.setRequestHeader('Content-Type','multipart/form-data; boundary=_'+api.expando);data=data.join('')+'--_'+api.expando+'--'; /** @namespace  xhr.sendAsBinary  https://developer.mozilla.org/ru/XMLHttpRequest#Sending_binary_content */if(xhr.sendAsBinary){xhr.sendAsBinary(data);}else {var bytes=Array.prototype.map.call(data,function(c){return c.charCodeAt(0)&0xff;});xhr.send(new Uint8Array(bytes).buffer);}}else { // FormData 
	   xhr.send(data);}}}}}; // @export
	   api.XHR=XHR;})(window,FileAPI); /**
	    * @class FileAPI.Camera
	    * @author  RubaXa  <trash@rubaxa.org>
	    * @support Chrome 21+, FF 18+, Opera 12+
	    */ /*global window, FileAPI, jQuery */ /** @namespace LocalMediaStream -- https://developer.mozilla.org/en-US/docs/WebRTC/MediaStream_API#LocalMediaStream */(function(window,api){"use strict";var URL=window.URL||window.webkitURL,document=window.document,navigator=window.navigator,getMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,html5=!!getMedia; // Support "media"
	   api.support.media=html5;var Camera=function Camera(video){this.video=video;};Camera.prototype={isActive:function isActive(){return !!this._active;}, /**
	        * Start camera streaming
	        * @param {Function}  callback
	        */start:function start(callback){var _this=this,video=_this.video,_successId,_failId,_complete=function _complete(err){_this._active=!err;clearTimeout(_failId);clearTimeout(_successId); //          api.event.off(video, 'loadedmetadata', _complete);
	   callback&&callback(err,_this);};getMedia.call(navigator,{video:true},function(stream /**LocalMediaStream*/){ // Success
	   _this.stream=stream; //        api.event.on(video, 'loadedmetadata', function (){
	   //          _complete(null);
	   //        });
	   // Set camera stream
	   video.src=URL.createObjectURL(stream); // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
	   // See crbug.com/110938.
	   _successId=setInterval(function(){if(_detectVideoSignal(video)){_complete(null);}},1000);_failId=setTimeout(function(){_complete('timeout');},5000); // Go-go-go!
	   video.play();},_complete /*error*/);}, /**
	        * Stop camera streaming
	        */stop:function stop(){try{this._active=false;this.video.pause();this.stream.stop();}catch(err){}}, /**
	        * Create screenshot
	        * @return {FileAPI.Camera.Shot}
	        */shot:function shot(){return new Shot(this.video);}}; /**
	      * Get camera element from container
	      *
	      * @static
	      * @param {HTMLElement} el
	      * @return  {Camera}
	      */Camera.get=function(el){return new Camera(el.firstChild);}; /**
	      * Publish camera element into container
	      *
	      * @static
	      * @param {HTMLElement} el
	      * @param {Object}    options
	      * @param {Function}    [callback]
	      */Camera.publish=function(el,options,callback){if(typeof options=='function'){callback=options;options={};} // Dimensions of "camera"
	   options=api.extend({},{width:'100%',height:'100%',start:true},options);if(el.jquery){ // Extract first element, from jQuery collection
	   el=el[0];}var doneFn=function doneFn(err){if(err){callback(err);}else { // Get camera
	   var cam=Camera.get(el);if(options.start){cam.start(callback);}else {callback(null,cam);}}};el.style.width=_px(options.width);el.style.height=_px(options.height);if(api.html5&&html5){ // Create video element
	   var video=document.createElement('video'); // Set dimensions
	   video.style.width=_px(options.width);video.style.height=_px(options.height); // Clean container
	   if(window.jQuery){jQuery(el).empty();}else {el.innerHTML='';} // Add "camera" to container
	   el.appendChild(video); // end
	   doneFn();}else {Camera.fallback(el,options,doneFn);}};Camera.fallback=function(el,options,callback){callback('not_support_camera');}; /**
	      * @class FileAPI.Camera.Shot
	      */var Shot=function Shot(video){var canvas=video.nodeName?api.Image.toCanvas(video):video;var shot=api.Image(canvas);shot.type='image/png';shot.width=canvas.width;shot.height=canvas.height;shot.size=canvas.width*canvas.height*4;return shot;}; /**
	      * Add "px" postfix, if value is a number
	      *
	      * @private
	      * @param {*}  val
	      * @return  {String}
	      */function _px(val){return val>=0?val+'px':val;} /**
	      * @private
	      * @param {HTMLVideoElement} video
	      * @return  {Boolean}
	      */function _detectVideoSignal(video){var canvas=document.createElement('canvas'),ctx,res=false;try{ctx=canvas.getContext('2d');ctx.drawImage(video,0,0,1,1);res=ctx.getImageData(0,0,1,1).data[4]!=255;}catch(e){}return res;} // @export
	   Camera.Shot=Shot;api.Camera=Camera;})(window,FileAPI); /**
	    * FileAPI fallback to Flash
	    *
	    * @flash-developer  "Vladimir Demidov" <v.demidov@corp.mail.ru>
	    */ /*global window, ActiveXObject, FileAPI */(function(window,jQuery,api){"use strict";var document=window.document,location=window.location,navigator=window.navigator,_each=api.each,_cameraQueue=[];api.support.flash=function(){var mime=navigator.mimeTypes,has=false;if(navigator.plugins&&babelHelpers.typeof(navigator.plugins['Shockwave Flash'])=='object'){has=navigator.plugins['Shockwave Flash'].description&&!(mime&&mime['application/x-shockwave-flash']&&!mime['application/x-shockwave-flash'].enabledPlugin);}else {try{has=!!(window.ActiveXObject&&new ActiveXObject('ShockwaveFlash.ShockwaveFlash'));}catch(er){api.log('Flash -- does not supported.');}}if(has&&/^file:/i.test(location)){api.log('[warn] Flash does not work on `file:` protocol.');}return has;}();api.support.flash&&(0||!api.html5||!api.support.html5||api.cors&&!api.support.cors||api.media&&!api.support.media)&&function(){var _attr=api.uid(),_retry=0,_files={},_rhttp=/^https?:/i,flash={_fn:{}, /**
	            * Initialization & preload flash object
	            */init:function init(){var child=document.body&&document.body.firstChild;if(child){do {if(child.nodeType==1){api.log('FlashAPI.state: awaiting');var dummy=document.createElement('div');dummy.id='_'+_attr;_css(dummy,{top:1,right:1,width:5,height:5,position:'absolute',zIndex:1e6+'' // set max zIndex
	   });child.parentNode.insertBefore(dummy,child);flash.publish(dummy,_attr);return;}}while(child=child.nextSibling);}if(_retry<10){setTimeout(flash.init,++_retry*50);}}, /**
	            * Publish flash-object
	            *
	            * @param {HTMLElement} el
	            * @param {String} id
	            * @param {Object} [opts]
	            */publish:function publish(el,id,opts){opts=opts||{};el.innerHTML=_makeFlashHTML({id:id,src:_getUrl(api.flashUrl,'r='+api.version) //            , src: _getUrl('http://v.demidov.boom.corp.mail.ru/uploaderfileapi/FlashFileAPI.swf?1')
	   ,wmode:opts.camera?'':'transparent',flashvars:'callback='+(opts.onEvent||'FileAPI.Flash.onEvent')+'&flashId='+id+'&storeKey='+navigator.userAgent.match(/\d/ig).join('')+'_'+api.version+(flash.isReady||(api.pingUrl?'&ping='+api.pingUrl:''))+'&timeout='+api.flashAbortTimeout+(opts.camera?'&useCamera='+_getUrl(api.flashWebcamUrl):'') //              + '&debug=1'
	   },opts);},ready:function ready(){api.log('FlashAPI.state: ready');flash.ready=api.F;flash.isReady=true;flash.patch();api.event.on(document,'mouseover',flash.mouseover);api.event.on(document,'click',function(evt){if(flash.mouseover(evt)){evt.preventDefault?evt.preventDefault():evt.returnValue=true;}});},getEl:function getEl(){return document.getElementById('_'+_attr);},getWrapper:function getWrapper(node){do {if(/js-fileapi-wrapper/.test(node.className)){return node;}}while((node=node.parentNode)&&node!==document.body);},mouseover:function mouseover(evt){var target=api.event.fix(evt).target;if(/input/i.test(target.nodeName)&&target.type=='file'){var state=target.getAttribute(_attr),wrapper=flash.getWrapper(target);if(api.multiFlash){ // check state:
	   //   i — published
	   //   i — initialization
	   //   r — ready
	   if(state=='i'||state=='r'){ // publish fail
	   return false;}else if(state!='p'){ // set "init" state
	   target.setAttribute(_attr,'i');var dummy=document.createElement('div');if(!wrapper){api.log('[err] FlashAPI.mouseover: js-fileapi-wrapper not found');return;}_css(dummy,{top:0,left:0,width:target.offsetWidth+100,height:target.offsetHeight+100,zIndex:1e6+'' // set max zIndex
	   ,position:'absolute'});wrapper.appendChild(dummy);flash.publish(dummy,api.uid()); // set "publish" state
	   target.setAttribute(_attr,'p');}return true;}else if(wrapper){ // Use one flash element
	   var box=_getDimensions(wrapper);_css(flash.getEl(),box); // Set current input
	   flash.curInp=target;}}else if(!/object|embed/i.test(target.nodeName)){_css(flash.getEl(),{top:1,left:1,width:5,height:5});}},onEvent:function onEvent(evt){var type=evt.type;if(type=='ready'){try{ // set "ready" state
	   flash.getInput(evt.flashId).setAttribute(_attr,'r');}catch(e){}flash.ready();setTimeout(function(){flash.mouseenter(evt);},50);return true;}else if(type==='ping'){api.log('(flash -> js).ping:',[evt.status,evt.savedStatus],evt.error);}else if(type==='log'){api.log('(flash -> js).log:',evt.target);}else if(type in flash){setTimeout(function(){api.log('FlashAPI.event.'+evt.type+':',evt);flash[type](evt);},1);}},mouseenter:function mouseenter(evt){var node=flash.getInput(evt.flashId);if(node){ // Set multiple mode
	   flash.cmd(evt,'multiple',node.getAttribute('multiple')!=null); // Set files filter
	   var accept=[],exts={};_each((node.getAttribute('accept')||'').split(/,\s*/),function(mime){api.accept[mime]&&_each(api.accept[mime].split(' '),function(ext){exts[ext]=1;});});_each(exts,function(i,ext){accept.push(ext);});flash.cmd(evt,'accept',accept.length?accept.join(',')+','+accept.join(',').toUpperCase():'*');}},get:function get(id){return document[id]||window[id]||document.embeds[id];},getInput:function getInput(id){if(api.multiFlash){try{var node=flash.getWrapper(flash.get(id));if(node){return node.getElementsByTagName('input')[0];}}catch(e){api.log('[err] Can not find "input" by flashId:',id,e);}}else {return flash.curInp;}},select:function select(evt){var inp=flash.getInput(evt.flashId),uid=api.uid(inp),files=evt.target.files,event;_each(files,function(file){api.checkFileObj(file);});_files[uid]=files;if(document.createEvent){event=document.createEvent('Event');event.files=files;event.initEvent('change',true,true);inp.dispatchEvent(event);}else if(jQuery){jQuery(inp).trigger({type:'change',files:files});}else {event=document.createEventObject();event.files=files;inp.fireEvent('onchange',event);}},cmd:function cmd(id,name,data,last){try{api.log('(js -> flash).'+name+':',data);return flash.get(id.flashId||id).cmd(name,data);}catch(e){api.log('(js -> flash).onError:',e);if(!last){ // try again
	   setTimeout(function(){flash.cmd(id,name,data,true);},50);}}},patch:function patch(){api.flashEngine=api.support.transform=true; // FileAPI
	   _inherit(api,{getFiles:function getFiles(input,filter,callback){if(callback){api.filterFiles(api.getFiles(input),filter,callback);return null;}var files=api.isArray(input)?input:_files[api.uid(input.target||input.srcElement||input)];if(!files){ // Файлов нету, вызываем родительский метод
	   return this.parent.apply(this,arguments);}if(filter){filter=api.getFilesFilter(filter);files=api.filter(files,function(file){return filter.test(file.name);});}return files;},getInfo:function getInfo(file,fn){if(_isHtmlFile(file)){this.parent.apply(this,arguments);}else if(file.isShot){fn(null,file.info={width:file.width,height:file.height});}else {if(!file.__info){var defer=file.__info=api.defer();flash.cmd(file,'getFileInfo',{id:file.id,callback:_wrap(function _(err,info){_unwrap(_);defer.resolve(err,file.info=info);})});}file.__info.then(fn);}}}); // FileAPI.Image
	   api.support.transform=true;api.Image&&_inherit(api.Image.prototype,{get:function get(fn,scaleMode){this.set({scaleMode:scaleMode||'noScale'}); // noScale, exactFit
	   this.parent(fn);},_load:function _load(file,fn){api.log('FlashAPI.Image._load:',file);if(_isHtmlFile(file)){this.parent.apply(this,arguments);}else {var _this=this;api.getInfo(file,function(err){fn.call(_this,err,file);});}},_apply:function _apply(file,fn){api.log('FlashAPI.Image._apply:',file);if(_isHtmlFile(file)){this.parent.apply(this,arguments);}else {var m=this.getMatrix(file.info),doneFn=fn;flash.cmd(file,'imageTransform',{id:file.id,matrix:m,callback:_wrap(function _(err,base64){api.log('FlashAPI.Image._apply.callback:',err);_unwrap(_);if(err){doneFn(err);}else if(!api.support.html5&&(!api.support.dataURI||base64.length>3e4)){_makeFlashImage({width:m.deg%180?m.dh:m.dw,height:m.deg%180?m.dw:m.dh,scale:m.scaleMode},base64,doneFn);}else {if(m.filter){doneFn=function doneFn(err,img){if(err){fn(err);}else {api.Image.applyFilter(img,m.filter,function(){fn(err,this.canvas);});}};}api.newImage('data:'+file.type+';base64,'+base64,doneFn);}})});}},toData:function toData(fn){var file=this.file,info=file.info,matrix=this.getMatrix(info);if(_isHtmlFile(file)){this.parent.apply(this,arguments);}else {if(matrix.deg=='auto'){matrix.deg=api.Image.exifOrientation[info&&info.exif&&info.exif.Orientation]||0;}fn.call(this,!file.info,{id:file.id,flashId:file.flashId,name:file.name,type:file.type,matrix:matrix});}}});api.Image&&_inherit(api.Image,{fromDataURL:function fromDataURL(dataURL,size,callback){if(!api.support.dataURI||dataURL.length>3e4){_makeFlashImage(api.extend({scale:'exactFit'},size),dataURL.replace(/^data:[^,]+,/,''),function(err,el){callback(el);});}else {this.parent(dataURL,size,callback);}}}); // FileAPI.Camera:statics
	   api.Camera.fallback=function(el,options,callback){var camId=api.uid();api.log('FlashAPI.Camera.publish: '+camId);flash.publish(el,camId,api.extend(options,{camera:true,onEvent:_wrap(function _(evt){if(evt.type=='camera'){_unwrap(_);if(evt.error){api.log('FlashAPI.Camera.publish.error: '+evt.error);callback(evt.error);}else {api.log('FlashAPI.Camera.publish.success: '+camId);callback(null);}}})}));}; // Run
	   _each(_cameraQueue,function(args){api.Camera.fallback.apply(api.Camera,args);});_cameraQueue=[]; // FileAPI.Camera:proto
	   _inherit(api.Camera.prototype,{_id:function _id(){return this.video.id;},start:function start(callback){var _this=this;flash.cmd(this._id(),'camera.on',{callback:_wrap(function _(evt){_unwrap(_);if(evt.error){api.log('FlashAPI.camera.on.error: '+evt.error);callback(evt.error,_this);}else {api.log('FlashAPI.camera.on.success: '+_this._id());_this._active=true;callback(null,_this);}})});},stop:function stop(){this._active=false;flash.cmd(this._id(),'camera.off');},shot:function shot(){api.log('FlashAPI.Camera.shot:',this._id());var shot=flash.cmd(this._id(),'shot',{});shot.type='image/png';shot.flashId=this._id();shot.isShot=true;return new api.Camera.Shot(shot);}}); // FileAPI.Form
	   _inherit(api.Form.prototype,{toData:function toData(fn){var items=this.items,i=items.length;for(;i--;){if(items[i].file&&_isHtmlFile(items[i].blob)){return this.parent.apply(this,arguments);}}api.log('FlashAPI.Form.toData');fn(items);}}); // FileAPI.XHR
	   _inherit(api.XHR.prototype,{_send:function _send(options,formData){if(formData.nodeName||formData.append&&api.support.html5||api.isArray(formData)&&typeof formData[0]==='string'){ // HTML5, Multipart or IFrame
	   return this.parent.apply(this,arguments);}var data={},files={},_this=this,flashId,fileId;_each(formData,function(item){if(item.file){files[item.name]=item=_getFileDescr(item.blob);fileId=item.id;flashId=item.flashId;}else {data[item.name]=item.blob;}});if(!fileId){flashId=_attr;}if(!flashId){api.log('[err] FlashAPI._send: flashId -- undefined');return this.parent.apply(this,arguments);}else {api.log('FlashAPI.XHR._send: '+flashId+' -> '+fileId,files);}_this.xhr={headers:{},abort:function abort(){flash.cmd(flashId,'abort',{id:fileId});},getResponseHeader:function getResponseHeader(name){return this.headers[name];},getAllResponseHeaders:function getAllResponseHeaders(){return this.headers;}};var queue=api.queue(function(){flash.cmd(flashId,'upload',{url:_getUrl(options.url),data:data,files:fileId?files:null,headers:options.headers||{},callback:_wrap(function upload(evt){var type=evt.type,result=evt.result;api.log('FlashAPI.upload.'+type+':',evt);if(type=='progress'){evt.loaded=Math.min(evt.loaded,evt.total); // @todo fixme
	   evt.lengthComputable=true;options.progress(evt);}else if(type=='complete'){_unwrap(upload);if(typeof result=='string'){_this.responseText=result.replace(/%22/g,"\"").replace(/%5c/g,"\\").replace(/%26/g,"&").replace(/%25/g,"%");}_this.end(evt.status||200);}else if(type=='abort'||type=='error'){_this.end(evt.status||0,evt.message);_unwrap(upload);}})});}); // #2174: FileReference.load() call while FileReference.upload() or vice versa
	   _each(files,function(file){queue.inc();api.getInfo(file,queue.next);});queue.check();}});}};function _makeFlashHTML(opts){return ('<object id="#id#" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+(opts.width||'100%')+'" height="'+(opts.height||'100%')+'">'+'<param name="movie" value="#src#" />'+'<param name="flashvars" value="#flashvars#" />'+'<param name="swliveconnect" value="true" />'+'<param name="allowscriptaccess" value="always" />'+'<param name="allownetworking" value="all" />'+'<param name="menu" value="false" />'+'<param name="wmode" value="#wmode#" />'+'<embed flashvars="#flashvars#" swliveconnect="true" allownetworking="all" allowscriptaccess="always" name="#id#" src="#src#" width="'+(opts.width||'100%')+'" height="'+(opts.height||'100%')+'" menu="false" wmode="transparent" type="application/x-shockwave-flash"></embed>'+'</object>').replace(/#(\w+)#/ig,function(a,name){return opts[name];});}function _css(el,css){if(el&&el.style){var key,val;for(key in css){val=css[key];if(typeof val=='number'){val+='px';}try{el.style[key]=val;}catch(e){}}}}function _inherit(obj,methods){_each(methods,function(fn,name){var prev=obj[name];obj[name]=function(){this.parent=prev;return fn.apply(this,arguments);};});}function _isHtmlFile(file){return file&&!file.flashId;}function _wrap(fn){var id=fn.wid=api.uid();flash._fn[id]=fn;return 'FileAPI.Flash._fn.'+id;}function _unwrap(fn){try{flash._fn[fn.wid]=null;delete flash._fn[fn.wid];}catch(e){}}function _getUrl(url,params){if(!_rhttp.test(url)){if(/^\.\//.test(url)||'/'!=url.charAt(0)){var path=location.pathname;path=path.substr(0,path.lastIndexOf('/'));url=(path+'/'+url).replace('/./','/');}if('//'!=url.substr(0,2)){url='//'+location.host+url;}if(!_rhttp.test(url)){url=location.protocol+url;}}if(params){url+=(/\?/.test(url)?'&':'?')+params;}return url;}function _makeFlashImage(opts,base64,fn){var key,flashId=api.uid(),el=document.createElement('div'),attempts=10;for(key in opts){el.setAttribute(key,opts[key]);el[key]=opts[key];}_css(el,opts);opts.width='100%';opts.height='100%';el.innerHTML=_makeFlashHTML(api.extend({id:flashId,src:_getUrl(api.flashImageUrl,'r='+api.uid()),wmode:'opaque',flashvars:'scale='+opts.scale+'&callback='+_wrap(function _(){_unwrap(_);if(--attempts>0){_setImage();}return true;})},opts));function _setImage(){try{ // Get flash-object by id
	   var img=flash.get(flashId);img.setImage(base64);}catch(e){api.log('[err] FlashAPI.Preview.setImage -- can not set "base64":',e);}}fn(false,el);el=null;}function _getFileDescr(file){return {id:file.id,name:file.name,matrix:file.matrix,flashId:file.flashId};}function _getDimensions(el){var box=el.getBoundingClientRect(),body=document.body,docEl=(el&&el.ownerDocument).documentElement;return {top:box.top+(window.pageYOffset||docEl.scrollTop)-(docEl.clientTop||body.clientTop||0),left:box.left+(window.pageXOffset||docEl.scrollLeft)-(docEl.clientLeft||body.clientLeft||0),width:box.right-box.left,height:box.bottom-box.top};}api.Camera.fallback=function(){_cameraQueue.push(arguments);}; // @export
	   api.Flash=flash; // Check dataURI support
	   api.newImage('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==',function(err,img){api.support.dataURI=!(img.width!=1||img.height!=1);flash.init();});}();})(window,window.jQuery,FileAPI); /*
	    * JavaScript Load Image iOS scaling fixes 1.0.3
	    * https://github.com/blueimp/JavaScript-Load-Image
	    *
	    * Copyright 2013, Sebastian Tschan
	    * https://blueimp.net
	    *
	    * iOS image scaling fixes based on
	    * https://github.com/stomita/ios-imagefile-megapixel
	    *
	    * Licensed under the MIT license:
	    * http://www.opensource.org/licenses/MIT
	    */ /*jslint nomen: true, bitwise: true */ /*global FileAPI, window, document */(function(factory){'use strict';factory(FileAPI);})(function(loadImage){'use strict'; // Only apply fixes on the iOS platform:
	   if(!window.navigator||!window.navigator.platform||!/iP(hone|od|ad)/.test(window.navigator.platform)){return;}var originalRenderMethod=loadImage.renderImageToCanvas; // Detects subsampling in JPEG images:
	   loadImage.detectSubsampling=function(img){var canvas,context;if(img.width*img.height>1024*1024){ // only consider mexapixel images
	   canvas=document.createElement('canvas');canvas.width=canvas.height=1;context=canvas.getContext('2d');context.drawImage(img,-img.width+1,0); // subsampled image becomes half smaller in rendering size.
	   // check alpha channel value to confirm image is covering edge pixel or not.
	   // if alpha value is 0 image is not covering, hence subsampled.
	   return context.getImageData(0,0,1,1).data[3]===0;}return false;}; // Detects vertical squash in JPEG images:
	   loadImage.detectVerticalSquash=function(img,subsampled){var naturalHeight=img.naturalHeight||img.height,canvas=document.createElement('canvas'),context=canvas.getContext('2d'),data,sy,ey,py,alpha;if(subsampled){naturalHeight/=2;}canvas.width=1;canvas.height=naturalHeight;context.drawImage(img,0,0);data=context.getImageData(0,0,1,naturalHeight).data; // search image edge pixel position in case it is squashed vertically:
	   sy=0;ey=naturalHeight;py=naturalHeight;while(py>sy){alpha=data[(py-1)*4+3];if(alpha===0){ey=py;}else {sy=py;}py=ey+sy>>1;}return py/naturalHeight||1;}; // Renders image to canvas while working around iOS image scaling bugs:
	   // https://github.com/blueimp/JavaScript-Load-Image/issues/13
	   loadImage.renderImageToCanvas=function(canvas,img,sourceX,sourceY,sourceWidth,sourceHeight,destX,destY,destWidth,destHeight){if(img._type==='image/jpeg'){var context=canvas.getContext('2d'),tmpCanvas=document.createElement('canvas'),tileSize=1024,tmpContext=tmpCanvas.getContext('2d'),subsampled,vertSquashRatio,tileX,tileY;tmpCanvas.width=tileSize;tmpCanvas.height=tileSize;context.save();subsampled=loadImage.detectSubsampling(img);if(subsampled){sourceX/=2;sourceY/=2;sourceWidth/=2;sourceHeight/=2;}vertSquashRatio=loadImage.detectVerticalSquash(img,subsampled);if(subsampled||vertSquashRatio!==1){sourceY*=vertSquashRatio;destWidth=Math.ceil(tileSize*destWidth/sourceWidth);destHeight=Math.ceil(tileSize*destHeight/sourceHeight/vertSquashRatio);destY=0;tileY=0;while(tileY<sourceHeight){destX=0;tileX=0;while(tileX<sourceWidth){tmpContext.clearRect(0,0,tileSize,tileSize);tmpContext.drawImage(img,sourceX,sourceY,sourceWidth,sourceHeight,-tileX,-tileY,sourceWidth,sourceHeight);context.drawImage(tmpCanvas,0,0,tileSize,tileSize,destX,destY,destWidth,destHeight);tileX+=tileSize;destX+=destWidth;}tileY+=tileSize;destY+=destHeight;}context.restore();return canvas;}}return originalRenderMethod(canvas,img,sourceX,sourceY,sourceWidth,sourceHeight,destX,destY,destWidth,destHeight);};}); /*
	    * JavaScript Canvas to Blob 2.0.5
	    * https://github.com/blueimp/JavaScript-Canvas-to-Blob
	    *
	    * Copyright 2012, Sebastian Tschan
	    * https://blueimp.net
	    *
	    * Licensed under the MIT license:
	    * http://www.opensource.org/licenses/MIT
	    *
	    * Based on stackoverflow user Stoive's code snippet:
	    * http://stackoverflow.com/q/4998908
	    */ /*jslint nomen: true, regexp: true */ /*global window, atob, Blob, ArrayBuffer, Uint8Array */(function(window){'use strict';var CanvasPrototype=window.HTMLCanvasElement&&window.HTMLCanvasElement.prototype,hasBlobConstructor=window.Blob&&function(){try{return Boolean(new Blob());}catch(e){return false;}}(),hasArrayBufferViewSupport=hasBlobConstructor&&window.Uint8Array&&function(){try{return new Blob([new Uint8Array(100)]).size===100;}catch(e){return false;}}(),BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,dataURLtoBlob=(hasBlobConstructor||BlobBuilder)&&window.atob&&window.ArrayBuffer&&window.Uint8Array&&function(dataURI){var byteString,arrayBuffer,intArray,i,mimeString,bb;if(dataURI.split(',')[0].indexOf('base64')>=0){ // Convert base64 to raw binary data held in a string:
	   byteString=atob(dataURI.split(',')[1]);}else { // Convert base64/URLEncoded data component to raw binary data:
	   byteString=decodeURIComponent(dataURI.split(',')[1]);} // Write the bytes of the string to an ArrayBuffer:
	   arrayBuffer=new ArrayBuffer(byteString.length);intArray=new Uint8Array(arrayBuffer);for(i=0;i<byteString.length;i+=1){intArray[i]=byteString.charCodeAt(i);} // Separate out the mime component:
	   mimeString=dataURI.split(',')[0].split(':')[1].split(';')[0]; // Write the ArrayBuffer (or ArrayBufferView) to a blob:
	   if(hasBlobConstructor){return new Blob([hasArrayBufferViewSupport?intArray:arrayBuffer],{type:mimeString});}bb=new BlobBuilder();bb.append(arrayBuffer);return bb.getBlob(mimeString);};if(window.HTMLCanvasElement&&!CanvasPrototype.toBlob){if(CanvasPrototype.mozGetAsFile){CanvasPrototype.toBlob=function(callback,type,quality){if(quality&&CanvasPrototype.toDataURL&&dataURLtoBlob){callback(dataURLtoBlob(this.toDataURL(type,quality)));}else {callback(this.mozGetAsFile('blob',type));}};}else if(CanvasPrototype.toDataURL&&dataURLtoBlob){CanvasPrototype.toBlob=function(callback,type,quality){callback(dataURLtoBlob(this.toDataURL(type,quality)));};}}window.dataURLtoBlob=dataURLtoBlob;})(window);var file = FileAPI;

	   function createXHR() {
	     if (window.ActiveXObject) {
	       var xhr = new ActiveXObject("Microsoft.XMLHTTP");
	     } else if (window.XMLHttpRequest) {
	       var xhr = new XMLHttpRequest();
	     }

	     return xhr;
	   }

	   var ajax = {};

	   ajax.get = function (url, callback) {
	     var xhr = createXHR();

	     xhr.open('GET', url);
	     xhr.onreadystatechange = function () {
	       if (xhr.readyState !== 4) return;

	       if (xhr.status == 200) {
	         callback(null, xhr.responseText);
	       } else if (xhr.status != 304) {
	         callback(true);
	       }
	     };
	     xhr.send(null);

	     return xhr;
	   };

	   ajax.post = function (url, data, callback) {
	     var xhr = createXHR();

	     var query = '?';
	     for (var key in data) {
	       if (data.hasOwnProperty(key)) {
	         query += key + '=' + data[key];
	       }
	     }

	     xhr.open('POST', url);
	     xhr.onreadystatechange = function () {
	       if (xhr.readyState == 4 && xhr.status == 200) {
	         callback(null, xhr.responseText);
	       } else {
	         callback(true);
	       }
	     };
	     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	     xhr.send(query);

	     return xhr;
	   };

	   ajax.postBlob = function (url, blob, options, callback) {
	     var xhr = createXHR();

	     if (utils.isFunction(options)) {
	       callback = options;
	       options = {};
	     }

	     xhr.open('POST', url);
	     xhr.onreadystatechange = function () {
	       if (xhr.readyState == 4 && xhr.status == 200) {
	         callback(null.xhr.responseText);
	       } else {
	         callback(true);
	       }
	     };
	     if (options.headers) {
	       utils.each(options.headers, function (val, header) {
	         xhr.setRequestHeader(header, val);
	       });
	     }
	     xhr.send(blob);

	     return xhr;
	   };

	   var Asset$3 = _Asset({});

	   var imageViewTranslations$1 = {
	     weight: 'w',
	     height: 'h',
	     quality: 'q'
	   };

	   var _Image = function (_Asset2) {
	     babelHelpers.inherits(_Image, _Asset2);


	     /**
	      * Image Asset
	      * @param {String} key    key
	      * @param {Bucket} parent bucket object
	      */

	     function _Image(key, parent, _config) {
	       babelHelpers.classCallCheck(this, _Image);

	       var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(_Image).call(this));

	       var config = utils.objExtend(utils.objClone(parent.config), {
	         separate: '-'
	       }, _config);

	       _this.key = key;
	       _this.parent = parent;
	       _this.config = config;
	       return _this;
	     }

	     /**
	      * get the image's infomations
	      * @param  {Function} callback Callback
	      * @return {Promise}           promise object
	      */


	     babelHelpers.createClass(_Image, [{
	       key: 'imageInfo',
	       value: function imageInfo() {
	         var _this2 = this;

	         var callback = arguments.length <= 0 || arguments[0] === undefined ? noop$3 : arguments[0];

	         return new Promise(function (resolve, reject) {
	           var infoUrl = _this2.url() + '?imageInfo';

	           ajax.get(infoUrl, function (err, body) {
	             if (err) {
	               reject(err);
	               return callback(err);
	             }

	             var info = JSON.parse(body);

	             resolve(info);
	             callback(null, info);
	           });
	         });
	       }

	       /**
	        * get the exif infomation of the picture
	        * @param  {Function} callback Callback
	        * @return {Promise}           promise object
	        */

	     }, {
	       key: 'exif',
	       value: function exif() {
	         var _this3 = this;

	         var callback = arguments.length <= 0 || arguments[0] === undefined ? noop$3 : arguments[0];

	         return new Promise(function (resolve, reject) {
	           var infoUrl = _this3.url() + '?exif';

	           ajax.get(infoUrl, function (err, body) {
	             if (err) {
	               reject(err);
	               return callback(err);
	             }

	             var info = JSON.parse(body);

	             resolve(info);
	             callback(null, info);
	           });
	         });
	       }

	       /**
	        * return a thumbnail image
	        * @param  {Object}   opts     options
	        * @param  {Function} callback Callback
	        * @return {Promise}           promise
	        */

	     }, {
	       key: 'imageView',
	       value: function imageView(opts) {
	         var _this4 = this;

	         var callback = arguments.length <= 1 || arguments[1] === undefined ? noop$3 : arguments[1];

	         var promise = new Promise(function (resolve, reject) {

	           var mode = opts.mode;
	           delete opts.mode;

	           var url = _this4.url();
	           var params = {};

	           utils.each(opts, function (value, key) {
	             if (imageViewTranslations$1.hasOwnProperty(key)) {
	               key = imageViewTranslations$1[key];
	             }

	             params[key] = value;
	           });

	           url += utils.format('?imageView/%d%s', mode, genOptUrl$1(params));

	           var image = new Image();
	           image.src = url;

	           promise.image = image;

	           resolve(image);
	           callback(null, image);
	         });

	         return promise;
	       }

	       /**
	        * return a processed image
	        * @param  {Object}   opts     options
	        * @param  {Function} callback Callback
	        * @return {Promise}           promise
	        */

	     }, {
	       key: 'imageMogr',
	       value: function imageMogr(opts) {
	         var _this5 = this;

	         var callback = arguments.length <= 1 || arguments[1] === undefined ? noop$3 : arguments[1];

	         var promise = new Promise(function (resolve, reject) {
	           var url = _this5.url();
	           var params = {};

	           utils.objExtend(params, opts);

	           url += utils.format('?imageMogr/v2/auto-orient%s', genOptUrl$1(params));

	           var image = new Image();
	           image.src = url;

	           promise.image = image;

	           resolve(image);
	           callback(null, image);
	         });

	         return promise;
	       }

	       /**
	        * return a image with a watermark
	        * @param  {Object}   opts     options
	        * @param  {Function} callback Callback
	        * @return {Promise}           promise object
	        */

	     }, {
	       key: 'watermark',
	       value: function watermark(opts) {
	         var _this6 = this;

	         var callback = arguments.length <= 1 || arguments[1] === undefined ? noop$3 : arguments[1];

	         var promise = new Promise(function (resolve) {
	           var url = _this6.url();
	           var params = {};
	           var mode = opts.mode;
	           delete opts.mode;

	           utils.objExtend(params, opts);

	           params.image = utils.safeEncode(params.image);

	           url += utils.format('?watermark/%d%s', mode, genOptUrl$1(params));

	           var image = new Image();
	           image.src = url;

	           promise.image = image;

	           resolve(image);
	           callback(null, image);
	         });

	         return promise;
	       }
	     }]);
	     return _Image;
	   }(Asset$3);

	   _Image.extend = function (_file) {
	     _file.imageView = function (opts, callback) {
	       var _this7 = this;

	       callback = callback || noop$3;
	       return new Promise(function (resolve) {

	         var img = file.Image(_this7);

	         img._load(_this7, function (err, _img) {
	           if (err) {
	             callback(err);
	             return promise.reject(err);
	           }

	           var view = {};

	           opts.mode = opts.mode || 1;

	           switch (opts.mode) {
	             case 1:
	               utils.objExtend(view, {
	                 // 缩放
	                 dw: opts.width || opts.height,
	                 dh: opts.height || opts.width,
	                 resize: 'preview'
	               });
	               break;
	             case 2:
	               var scale = _img.width / _img.height;

	               var hasWidth = opts.hasOwnProperty('width');
	               var hasHeight = opts.hasOwnProperty('height');

	               switch (true) {
	                 case hasWidth && hasHeight:
	                   utils.objExtend(view, {
	                     dw: opts.width,
	                     dh: opts.height,
	                     resize: 'max'
	                   });
	                   break;
	                 case hasWidth && !hasHeight:
	                   utils.objExtend(view, {
	                     dw: opts.width,
	                     dh: opts.width / scale,
	                     resize: 'max'
	                   });
	                   break;
	                 case !hasWidth && hasHeight:
	                   utils.objExtend(view, {
	                     dw: opts.height * scale,
	                     dh: opts.height,
	                     resize: 'max'
	                   });
	                   break;
	               }
	           }

	           img.set(view).get(function (err, image) {
	             if (err) {
	               callback(err);
	               return reject(err);
	             }

	             callback(null, image);
	             resolve(image);
	           });
	         });
	       });
	     };

	     _file.imageMogr = function (opts, callback) {
	       var _this8 = this;

	       callback = callback || noop$3;

	       return new Promise(function (resolve, reject) {

	         var img = file.Image(_this8);

	         img._load(_this8, function (err, _img) {
	           if (err) {
	             callback(null);
	             return promise.reject(err);
	           }

	           var view = {};
	           var scale = _img.width / _img.height;

	           // Thumbnails
	           var thumbnail = opts.thumbnail;
	           switch (thumbnail.mode) {
	             case 1:
	               utils.objExtend(view, {
	                 // 缩放
	                 dw: thumbnail.width || thumbnail.height,
	                 dh: thumbnail.height || thumbnail.width,
	                 resize: 'preview',

	                 // 中央裁剪
	                 sx: (_img.width - thumbnail.width) / 2, // x
	                 sy: (_img.height - thumbnail.height) / 2, // y
	                 sw: thumbnail.width || thumbnail.height,
	                 sh: thumbnail.height || thumbnail.width
	               });
	               break;
	             case 2:
	               var thumbHasWidth = thumbnail.hasOwnProperty('width');
	               var thumbHasHeight = thumbnail.hasOwnProperty('height');

	               switch (true) {
	                 case thumbHasWidth && thumbHasHeight:
	                   utils.objExtend(view, {
	                     dw: thumbnail.width,
	                     dh: thumbnail.height,
	                     resize: 'max'
	                   });
	                   break;
	                 case thumbHasWidth && !thumbHasHeight:
	                   utils.objExtend(view, {
	                     dw: thumbnail.width,
	                     dh: thumbnail.width / scale,
	                     resize: 'max'
	                   });
	                   break;
	                 case !thumbHasWidth && thumbHasHeight:
	                   utils.objExtend(view, {
	                     dw: thumbnail.height * scale,
	                     dh: thumbnail.height,
	                     resize: 'max'
	                   });
	                   break;
	               }
	           }

	           // Crop
	           var crop = opts.crop;
	           var cropHasWidth = crop.hasOwnProperty('width');
	           var cropHasHeight = crop.hasOwnProperty('height');

	           crop.x = crop.x || 0;
	           crop.y = crop.y || 0;

	           if (crop.gravity) {
	             // TODOS
	           }

	           switch (true) {
	             case cropHasWidth && !cropHasHeight:
	               crop.height = crop.width / scale;
	               break;
	             case !cropHasWidth && cropHasHeight:
	               crop.width = crop.height * scale;
	               break;
	           }

	           crop.rotate = crop.rotate || 0;

	           utils.objExtend(view, {
	             sx: crop.x,
	             sy: crop.y,
	             sw: crop.width,
	             sh: crop.height,

	             deg: crop.rotate
	           });

	           img.set(view).get(function (err, image) {
	             if (err) {
	               callback(err);
	               return reject(err);
	             }

	             callback(null, image);
	             resolve(image);
	           });
	         });
	       });
	     };

	     _file.imageInfo = function (callback) {
	       var _this9 = this;

	       callback = callback || noop$3;

	       return new Promise(function (resolve, reject) {
	         var img = file.Image(_this9);

	         img._load(_this9, function (err, img) {
	           if (err) {
	             callback(err);
	             return reject(err);
	           }

	           var info = {
	             width: img.width,
	             height: img.height
	           };
	           callback(null, info);
	           resolve(info);
	         });
	       });
	     };

	     _file.getImage = function () {
	       return file.Image(this);
	     };

	     return _file;
	   };

	   function genOptUrl$1(params) {
	     var url = "";

	     utils.each(params, function (value, key) {
	       url += utils.format('/%s/%s', key, value);
	     });

	     return url;
	   }

	   function noop$3() {
	     return false;
	   }

	   var Asset$2 = null;

	   var globalConfig = null;

	   function noop$2() {
	     return false;
	   }

	   var Bucket$1 = function () {
	     /**
	      * Bucket
	      * Example:
	      * ```
	      * var imagesBucket = new qiniu.Bucket('images', {
	      *   // special option
	      * });
	      * ```
	      * @param {String} bucketName bucket's name
	      * @param {Object} config     config
	      */

	     function Bucket(name) {
	       var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	       babelHelpers.classCallCheck(this, Bucket);

	       this.name = name;
	       this.queue = [];
	       this.config = utils.objExtend(globalConfig, config, {
	         scope: name
	       });

	       if (this.config.url) {
	         if (/\/$/.test(this.config.url)) {
	           this.config.url = this.config.url.substr(0, this.config.url.length - 1);
	         }
	       } else {
	         throw new ReferenceError('You should set the url of the bucket.');
	       }
	     }

	     /**
	      * Upload a file
	      * Example:
	      * ```
	      * imagesBucket.putFile('example.jpg', __dirname + '/assert/example.jpg', function(err, reply) {
	      *   if (err) {
	      *     return console.error(err);
	      *   }
	      *  
	      *   console.dir(reply);
	      * });
	      * ```
	      * @param  {String}   key      key
	      * @param  {File}     file     file
	      * @param  {Object}   options  upload option
	      * @param  {Function} callback Callback
	      * @return {Promise}           Promise object
	      */


	     babelHelpers.createClass(Bucket, [{
	       key: 'putFile',
	       value: function putFile(key, _file, options, callback) {
	         var _arguments = arguments,
	             _this = this;

	         return new Promise(function (resolve, reject) {

	           switch (_arguments.length) {
	             case 3:
	               if (utils.isFunction(options)) {
	                 callback = options;
	                 options = {};
	               } else {
	                 callback = noop$2;
	               }
	               break;
	             case 2:
	               options = {};
	               callback = noop$2;
	               break;
	           }

	           var config = utils.objExtend(utils.objClone(_this.config), options);

	           var putToken = config.putToken;

	           // upload API
	           var uploadUrl = 'http://' + globalConfig.uploadUrl;

	           // isIE
	           var isIE = window.ActiveXObject ? true : false;

	           var data = {
	             token: putToken,
	             key: key
	           };

	           if (isIE) {
	             data.accept = 'text/plain; charset=utf-8';
	           }

	           // uploading
	           var xhr = file.upload({
	             url: uploadUrl,
	             data: data,
	             files: {
	               file: _file
	             },
	             upload: function upload(xhr, _options) {
	               (options.before && utils.isFunction(options.before) ? options.before : noop$2).call(null, xhr, key, _file);
	             },
	             progress: function progress(evt) {
	               var totalPercent = evt.loaded / evt.total * 100;(options.progress && utils.isFunction(options.progress) ? options.progress : noop$2).call(null, totalPercent, evt.loaded, evt.total);
	             },
	             complete: function complete(err, evt) {
	               if (err) {
	                 callback(err);
	                 return reject(err);
	               }

	               var reply = null;

	               if (window.JSON) {
	                 reply = JSON.parse(xhr.responseText);
	               } else {
	                 reply = xhr.responseText;
	               }

	               var asset = _this.key(key);

	               callback(null, reply, asset, xhr, evt);
	               resolve(reply, asset, xhr, evt);
	             }
	           });
	         });
	       }
	     }, {
	       key: 'putChunkedFile',
	       value: function putChunkedFile(key, _file, options, callback) {
	         var _this2 = this;

	         return new Promise(function (resolve, reject) {
	           var config = utils.objExtend(utils.objClone(_this2.config), options);

	           var putToken = _this2.config.putToken;

	           options.blockSize = options.blockSize || file.MB.form(5);

	           // upload API
	           var uploadUrl = 'http://' + globalConfig.uploadUrl + '/mkblk/' + options.blockSize;

	           // ctx
	           var blockCtxes = [];

	           if (utils.isFunction(_file.slice)) {
	             (function loop(url, start, _callback, host) {
	               var end = start + options.blockSize;

	               if (start < _file.size) {
	                 var blob = _file.slice(start, end);

	                 ajax.postBlob(url, blob, {
	                   headers: {
	                     'Content-Type': 'application/octet-stream',
	                     'Authorization': utils.format('UpToken %s', putToken)
	                   }
	                 }, function (err, reply) {
	                   if (err) {
	                     callback(err);
	                     return reject(err);
	                   }

	                   var replyData = eval(reply);

	                   blockCtxes.push(replyData.ctx);

	                   var host = replyData.host;

	                   loop(utils.format('%s/bput/%s/%s', host, replyData.ctx, end), end, _callback, host);
	                 });
	               } else {
	                 return _callback(host);
	               }
	             })(uploadUrl, 0, function (host) {
	               var asset = self.key(key);

	               var url = utils.format('%s/rs-mkfile/%s/fsize/%s/mimeType/%s', host, asset.entryUrl(), _file.size, _file.type);

	               if (options.params) {
	                 url, utils.format('/params/%s');
	               }

	               if (options.meta) {
	                 url += utils.format('/meta/%s', utils.safeEncode(options.meta));
	               }

	               if (options.customer) {
	                 url += utils.format('/customer/%s', options.customer);
	               }

	               if (options.rotate) {
	                 url += utils.format('/rotate/%s', options.rotate);
	               }

	               ajax.post();
	             });
	           } else {
	             var err = 'no support chunk';

	             reject(err);
	             callback(err);
	           }
	         });
	       }

	       /**
	        * Get a key
	        * @param  {String}   key      key
	        * @param  {Function} callback Callback
	        * @return {Promise}           Promise Object
	        */

	     }, {
	       key: 'getFile',
	       value: function getFile(key) {
	         var _this3 = this;

	         var callback = arguments.length <= 1 || arguments[1] === undefined ? noop$2 : arguments[1];

	         return new Promise(function (resolve, reject) {
	           // token
	           var getToken = _this3.config.getToken || '';

	           // key url
	           var url = null;
	           if (_this3.config.url) {
	             url = utils.format('%s/%s?e=3600&token=%s', _this3.url(), key, getToken);
	           } else {
	             url = utils.format('http://%s.qiniudn.com/%s?e=3600&token=%s', _this3.name, key, getToken);
	           }

	           ajax.get(url, function (err, body) {
	             if (err) {
	               callback(err);
	               return reject(err);
	             }

	             callback(null, body);
	             resolve(body);
	           });
	         });
	       }
	     }, {
	       key: 'url',
	       value: function url() {
	         return this.config.url;
	       }

	       /**
	        * return a asset object
	        * @param  {String} key key
	        * @return {Asset}      asset object
	        */

	     }, {
	       key: 'key',
	       value: function key(_key) {
	         return new Asset$2(_key, this);
	       }
	     }, {
	       key: 'image',
	       value: function image(key) {
	         return new _Image(key, this);
	       }
	     }]);
	     return Bucket;
	   }();

	   Bucket$1.Image = _Image;

	   function _Bucket (config) {
	     globalConfig = config;
	     Asset$2 = _Asset(config);
	     return Bucket$1;
	   }

	   // Copyright Joyent, Inc. and other Node contributors.
	   //
	   // Permission is hereby granted, free of charge, to any person obtaining a
	   // copy of this software and associated documentation files (the
	   // "Software"), to deal in the Software without restriction, including
	   // without limitation the rights to use, copy, modify, merge, publish,
	   // distribute, sublicense, and/or sell copies of the Software, and to permit
	   // persons to whom the Software is furnished to do so, subject to the
	   // following conditions:
	   //
	   // The above copyright notice and this permission notice shall be included
	   // in all copies or substantial portions of the Software.
	   //
	   // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	   // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	   // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	   // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	   // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	   // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	   // USE OR OTHER DEALINGS IN THE SOFTWARE.

	   function EventEmitter() {
	     this._events = this._events || {};
	     this._maxListeners = this._maxListeners || undefined;
	   }
	   // Backwards-compat with node 0.10.x
	   EventEmitter.EventEmitter = EventEmitter;

	   EventEmitter.prototype._events = undefined;
	   EventEmitter.prototype._maxListeners = undefined;

	   // By default EventEmitters will print a warning if more than 10 listeners are
	   // added to it. This is a useful default which helps finding memory leaks.
	   EventEmitter.defaultMaxListeners = 10;

	   // Obviously not all Emitters should be limited to 10. This function allows
	   // that to be increased. Set to zero for unlimited.
	   EventEmitter.prototype.setMaxListeners = function (n) {
	     if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
	     this._maxListeners = n;
	     return this;
	   };

	   EventEmitter.prototype.emit = function (type) {
	     var er, handler, len, args, i, listeners;

	     if (!this._events) this._events = {};

	     // If there is no 'error' event listener then throw.
	     if (type === 'error') {
	       if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
	         er = arguments[1];
	         if (er instanceof Error) {
	           throw er; // Unhandled 'error' event
	         }
	         throw TypeError('Uncaught, unspecified "error" event.');
	       }
	     }

	     handler = this._events[type];

	     if (isUndefined(handler)) return false;

	     if (isFunction(handler)) {
	       switch (arguments.length) {
	         // fast cases
	         case 1:
	           handler.call(this);
	           break;
	         case 2:
	           handler.call(this, arguments[1]);
	           break;
	         case 3:
	           handler.call(this, arguments[1], arguments[2]);
	           break;
	         // slower
	         default:
	           args = Array.prototype.slice.call(arguments, 1);
	           handler.apply(this, args);
	       }
	     } else if (isObject(handler)) {
	       args = Array.prototype.slice.call(arguments, 1);
	       listeners = handler.slice();
	       len = listeners.length;
	       for (i = 0; i < len; i++) {
	         listeners[i].apply(this, args);
	       }
	     }

	     return true;
	   };

	   EventEmitter.prototype.addListener = function (type, listener) {
	     var m;

	     if (!isFunction(listener)) throw TypeError('listener must be a function');

	     if (!this._events) this._events = {};

	     // To avoid recursion in the case that type === "newListener"! Before
	     // adding it to the listeners, first emit "newListener".
	     if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);

	     if (!this._events[type])
	       // Optimize the case of one listener. Don't need the extra array object.
	       this._events[type] = listener;else if (isObject(this._events[type]))
	       // If we've already got an array, just append.
	       this._events[type].push(listener);else
	       // Adding the second element, need to change to array.
	       this._events[type] = [this._events[type], listener];

	     // Check for listener leak
	     if (isObject(this._events[type]) && !this._events[type].warned) {
	       if (!isUndefined(this._maxListeners)) {
	         m = this._maxListeners;
	       } else {
	         m = EventEmitter.defaultMaxListeners;
	       }

	       if (m && m > 0 && this._events[type].length > m) {
	         this._events[type].warned = true;
	         console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
	         if (typeof console.trace === 'function') {
	           // not supported in IE 10
	           console.trace();
	         }
	       }
	     }

	     return this;
	   };

	   EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	   EventEmitter.prototype.once = function (type, listener) {
	     if (!isFunction(listener)) throw TypeError('listener must be a function');

	     var fired = false;

	     function g() {
	       this.removeListener(type, g);

	       if (!fired) {
	         fired = true;
	         listener.apply(this, arguments);
	       }
	     }

	     g.listener = listener;
	     this.on(type, g);

	     return this;
	   };

	   // emits a 'removeListener' event iff the listener was removed
	   EventEmitter.prototype.removeListener = function (type, listener) {
	     var list, position, length, i;

	     if (!isFunction(listener)) throw TypeError('listener must be a function');

	     if (!this._events || !this._events[type]) return this;

	     list = this._events[type];
	     length = list.length;
	     position = -1;

	     if (list === listener || isFunction(list.listener) && list.listener === listener) {
	       delete this._events[type];
	       if (this._events.removeListener) this.emit('removeListener', type, listener);
	     } else if (isObject(list)) {
	       for (i = length; i-- > 0;) {
	         if (list[i] === listener || list[i].listener && list[i].listener === listener) {
	           position = i;
	           break;
	         }
	       }

	       if (position < 0) return this;

	       if (list.length === 1) {
	         list.length = 0;
	         delete this._events[type];
	       } else {
	         list.splice(position, 1);
	       }

	       if (this._events.removeListener) this.emit('removeListener', type, listener);
	     }

	     return this;
	   };

	   EventEmitter.prototype.removeAllListeners = function (type) {
	     var key, listeners;

	     if (!this._events) return this;

	     // not listening for removeListener, no need to emit
	     if (!this._events.removeListener) {
	       if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
	       return this;
	     }

	     // emit removeListener for all listeners on all events
	     if (arguments.length === 0) {
	       for (key in this._events) {
	         if (key === 'removeListener') continue;
	         this.removeAllListeners(key);
	       }
	       this.removeAllListeners('removeListener');
	       this._events = {};
	       return this;
	     }

	     listeners = this._events[type];

	     if (isFunction(listeners)) {
	       this.removeListener(type, listeners);
	     } else if (listeners) {
	       // LIFO order
	       while (listeners.length) {
	         this.removeListener(type, listeners[listeners.length - 1]);
	       }
	     }
	     delete this._events[type];

	     return this;
	   };

	   EventEmitter.prototype.listeners = function (type) {
	     var ret;
	     if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
	     return ret;
	   };

	   EventEmitter.prototype.listenerCount = function (type) {
	     if (this._events) {
	       var evlistener = this._events[type];

	       if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
	     }
	     return 0;
	   };

	   EventEmitter.listenerCount = function (emitter, type) {
	     return emitter.listenerCount(type);
	   };

	   function isFunction(arg) {
	     return typeof arg === 'function';
	   }

	   function isNumber(arg) {
	     return typeof arg === 'number';
	   }

	   function isObject(arg) {
	     return (typeof arg === 'undefined' ? 'undefined' : babelHelpers.typeof(arg)) === 'object' && arg !== null;
	   }

	   function isUndefined(arg) {
	     return arg === void 0;
	   }

	   var _configData = {
	     uploadUrl: 'up.qiniu.com',
	     rsUrl: 'rs.qbox.me',
	     rsfUrl: 'rsf.qbox.me'
	   };

	   var Asset = _Asset(_configData);
	   var Bucket = _Bucket(_configData);
	   var qiniu = {};

	   /**
	    * Global Config
	    * Example:
	    * ```
	    * qiniu.config({
	    *   foo: '-----'
	    * });
	    *
	    * qiniu.config('foo', 'bar');
	    * qiniu.config('foo');
	    * ``` 
	    * @param  {String/Object} key   key of config
	    * @param  {Mix}           value value
	    */
	   qiniu.config = function (key, value) {
	     if (arguments.length > 1 && key instanceof String) {
	       // set config data normally
	       qiniu.set(key, value);
	     } else {
	       switch (true) {
	         case utils.isString(key):
	           // Get config data
	           return qiniu.get(key);
	           break;
	         case utils.isObject(key):
	           // Set config data with a object
	           for (var ii in key) {
	             (function (_key) {
	               qiniu.set(_key, key[_key]);
	             })(ii);
	           }
	           break;
	       }
	     }

	     return this;
	   };

	   /**
	    * Set config data
	    * @param  {String} key   key
	    * @param  {Mix}    value value
	    * @return {Object}       qiniu object
	    */
	   qiniu.set = function (key, value) {
	     _configData[key] = value;

	     return this;
	   };

	   /**
	    * Get config data
	    * @param  {String} key   key
	    * @return {Mix}          config value
	    */
	   qiniu.get = function (key) {
	     return _configData[key];
	   };

	   /**
	    * Binding the select button
	    * @param  {HTMLElement} el      select button
	    * @param  {Object} options options
	    * @return {Object}         qiniu
	    */
	   qiniu.bind = function (el, options) {
	     options = options || {};

	     var css = ".qiniu-transparent { \
	    z-index: 1000; \
	    zoom: 1; \
	    opacity: 0; \
	    -moz-opacity: 0; \
	    -khtml-opacity: 0; \
	    filter: 'alpha(opacity=0)'; \
	    *filter: alpha(opacity=0); \
	  }";
	     var head = document.getElementsByTagName('head')[0];
	     var style = document.createElement('style');

	     style.type = 'text/css';
	     if (style.styleSheet) {
	       style.styleSheet.cssText = css;
	     } else {
	       style.appendChild(document.createTextNode(css));
	     }

	     head.appendChild(style);

	     var tmp = document.createElement('div');
	     var html = '<div class="js-fileapi-wrapper qiniu-transparent"></div>';
	     tmp.innerHTML = html;
	     var wrapper = tmp.firstChild;

	     if (el.jquery) {
	       el.before(wrapper).addClass('select-btn');
	     } else {
	       var parentNode = el.parentNode;
	       parentNode.insertBefore(wrapper, el);
	     }

	     var input = document.createElement('input');
	     input.type = 'file';
	     input.className = 'qiniu-transparent';
	     input.multiple = true;

	     wrapper.appendChild(input);

	     el = el.jquery ? el.get(0) : el;

	     utils.css(wrapper, {
	       top: el.style.top,
	       right: el.style.right,
	       position: "absolute",
	       width: el.offsetWidth + 5,
	       height: el.offsetHeight + 5,
	       margin: el.style.margin
	     });
	     utils.css(input, {
	       width: el.offsetWidth + 5,
	       height: el.offsetHeight + 5,
	       position: 'relative'
	     });

	     file.event.on(input, 'change', function (evt) {
	       var files = file.getFiles(evt);
	       var filter = options.filter || false;

	       var filters = {
	         'image': /image/,
	         'audio': /audio/,
	         'video': /video/,
	         'media': /audio|video/
	       };

	       switch (true) {
	         case utils.isString(filter):
	           if (filters[filter]) {
	             files = file.filter(files, function (_file) {
	               return filters[filter].test(_file.type);
	             });
	           }
	           break;
	         case utils.isArray(filter):
	           for (var i = 0; i < filter.length; i++) {
	             (function (index) {
	               files = file.filter(files, function (_file) {
	                 return filters[filter[index]].test(_file.type);
	               });
	             })(i);
	           }
	           break;
	         case filter instanceof RegExp:
	           files = file.filter(files, function (_file) {
	             return filter.test(_file.type);
	           });
	           break;
	       }

	       for (var i = 0; i < files.length; i++) {
	         (function (index) {
	           qiniu.emit('file', _Image.extend(files[index]));
	         })(i);
	       }
	     });

	     return this;
	   };

	   /**
	    * Binding the drag and drop aera
	    * @param  {HTMLElement} el      aera
	    * @param  {Object} options options
	    * @return {Object}         qiniu
	    */
	   qiniu.bind.dnd = function (el, options) {
	     if (file.support.dnd) {
	       file.event.dnd(el.jquery ? el.get(0) : el, function (files) {
	         var filter = options.filter || false;

	         var filters = {
	           'image': /image/,
	           'audio': /audio/,
	           'video': /video/,
	           'media': /audio|video/
	         };

	         switch (true) {
	           case utils.isString(filter):
	             if (filters[filter]) {
	               files = file.filter(files, function (_file) {
	                 return filters[filter].test(_file.type);
	               });
	             }
	             break;
	           case utils.isArray(filter):
	             for (var i = 0; i < filter.length; i++) {
	               (function (index) {
	                 files = file.filter(files, function (_file) {
	                   return filters[filter[index]].test(_file.type);
	                 });
	               })(i);
	             }
	             break;
	           case filter instanceof RegExp:
	             files = file.filter(files, function (_file) {
	               return filter.test(_file.type);
	             });
	             break;
	         }

	         for (var i = 0; i < files.length; i++) {
	           (function (index) {
	             qiniu.emit('file', _Image.extend(files[index]));
	           })(i);
	         }
	       });

	       file.event.on(el.jquery ? el.get(0) : el, 'dragover dragleave', function (evt) {
	         switch (evt.type) {
	           case 'dragover':
	             (options.over && utils.isFunction(options.over) ? options.over : noop).call(null);

	             qiniu.emit('over');
	             break;
	           case 'dragleave':
	             (options.out && utils.isFunction(options.out) ? options.out : noop).call(null);

	             qiniu.emit('out');
	         }
	       });

	       (options.success && utils.isFunction(options.success) ? options.success : noop).call(null);
	       qiniu.emit('dnd.success');
	     } else {
	       qiniu.emit('dnd.error', 'no support');
	       (options.error && utils.isFunction(options.error) ? options.error : noop).call(null, 'no support');
	     }

	     return qiniu;
	   };

	   qiniu.supportDnd = file.support.dnd;

	   qiniu.bucket = function (bucket, config) {
	     return new Bucket(bucket, config);
	   };

	   qiniu.Asset = Asset;
	   qiniu.Bucket = Bucket;
	   qiniu.Image = _Image;

	   utils.objExtend(qiniu, EventEmitter.prototype);
	   EventEmitter.call(qiniu);

	   function noop() {
	     return false;
	   }

	   return qiniu;

	}));

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var rng = __webpack_require__(33)

	function error () {
	  var m = [].slice.call(arguments).join(' ')
	  throw new Error([
	    m,
	    'we accept pull requests',
	    'http://github.com/dominictarr/crypto-browserify'
	    ].join('\n'))
	}

	exports.createHash = __webpack_require__(35)

	exports.createHmac = __webpack_require__(47)

	exports.randomBytes = function(size, callback) {
	  if (callback && callback.call) {
	    try {
	      callback.call(this, undefined, new Buffer(rng(size)))
	    } catch (err) { callback(err) }
	  } else {
	    return new Buffer(rng(size))
	  }
	}

	function each(a, f) {
	  for(var i in a)
	    f(a[i], i)
	}

	exports.getHashes = function () {
	  return ['sha1', 'sha256', 'sha512', 'md5', 'rmd160']
	}

	var p = __webpack_require__(48)(exports)
	exports.pbkdf2 = p.pbkdf2
	exports.pbkdf2Sync = p.pbkdf2Sync


	// the least I can do is make error messages for the rest of the node.js/crypto api.
	each(['createCredentials'
	, 'createCipher'
	, 'createCipheriv'
	, 'createDecipher'
	, 'createDecipheriv'
	, 'createSign'
	, 'createVerify'
	, 'createDiffieHellman'
	], function (name) {
	  exports[name] = function () {
	    error('sorry,', name, 'is not implemented yet')
	  }
	})

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29).Buffer))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict'

	var base64 = __webpack_require__(30)
	var ieee754 = __webpack_require__(31)
	var isArray = __webpack_require__(32)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()

	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }

	  return that
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}

	Buffer.poolSize = 8192 // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}

	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }

	  return fromObject(that, value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}

	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)

	  var actual = that.write(string, encoding)

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }

	  return that
	}

	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}

	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)

	    if (that.length === 0) {
	      return that
	    }

	    obj.copy(that, 0, 0, len)
	    return that
	  }

	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }

	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}

	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }

	  var len = string.length
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength

	function slowToString (encoding, start, end) {
	  var loweredCase = false

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8'

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true

	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}

	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}

	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}

	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0

	  if (this === target) return 0

	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)

	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}

	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []

	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }

	    res.push(codePoint)
	    i += bytesPerSequence
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start
	  var i

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }

	  return len
	}

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0

	  if (!val) val = 0

	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }

	  return this
	}

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }

	    leadSurrogate = null

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29).Buffer, (function() { return this; }())))

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict'

	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray

	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}

	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63

	function placeHoldersCount (b64) {
	  var len = b64.length
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
	}

	function byteLength (b64) {
	  // base64 is 4/3 + up to two characters of the original data
	  return b64.length * 3 / 4 - placeHoldersCount(b64)
	}

	function toByteArray (b64) {
	  var i, j, l, tmp, placeHolders, arr
	  var len = b64.length
	  placeHolders = placeHoldersCount(b64)

	  arr = new Arr(len * 3 / 4 - placeHolders)

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len

	  var L = 0

	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }

	  parts.push(output)

	  return parts.join('')
	}


/***/ },
/* 31 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]

	  i += d

	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

	  value = Math.abs(value)

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }

	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 32 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, Buffer) {(function() {
	  var g = ('undefined' === typeof window ? global : window) || {}
	  _crypto = (
	    g.crypto || g.msCrypto || __webpack_require__(34)
	  )
	  module.exports = function(size) {
	    // Modern Browsers
	    if(_crypto.getRandomValues) {
	      var bytes = new Buffer(size); //in browserify, this is an extended Uint8Array
	      /* This will not work in older browsers.
	       * See https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues
	       */
	    
	      _crypto.getRandomValues(bytes);
	      return bytes;
	    }
	    else if (_crypto.randomBytes) {
	      return _crypto.randomBytes(size)
	    }
	    else
	      throw new Error(
	        'secure random number generation not supported by this browser\n'+
	        'use chrome, FireFox or Internet Explorer 11'
	      )
	  }
	}())

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(29).Buffer))

/***/ },
/* 34 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var createHash = __webpack_require__(36)

	var md5 = toConstructor(__webpack_require__(44))
	var rmd160 = toConstructor(__webpack_require__(46))

	function toConstructor (fn) {
	  return function () {
	    var buffers = []
	    var m= {
	      update: function (data, enc) {
	        if(!Buffer.isBuffer(data)) data = new Buffer(data, enc)
	        buffers.push(data)
	        return this
	      },
	      digest: function (enc) {
	        var buf = Buffer.concat(buffers)
	        var r = fn(buf)
	        buffers = null
	        return enc ? r.toString(enc) : r
	      }
	    }
	    return m
	  }
	}

	module.exports = function (alg) {
	  if('md5' === alg) return new md5()
	  if('rmd160' === alg) return new rmd160()
	  return createHash(alg)
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29).Buffer))

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var exports = module.exports = function (alg) {
	  var Alg = exports[alg]
	  if(!Alg) throw new Error(alg + ' is not supported (we accept pull requests)')
	  return new Alg()
	}

	var Buffer = __webpack_require__(29).Buffer
	var Hash   = __webpack_require__(37)(Buffer)

	exports.sha1 = __webpack_require__(38)(Buffer, Hash)
	exports.sha256 = __webpack_require__(42)(Buffer, Hash)
	exports.sha512 = __webpack_require__(43)(Buffer, Hash)


/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = function (Buffer) {

	  //prototype class for hash functions
	  function Hash (blockSize, finalSize) {
	    this._block = new Buffer(blockSize) //new Uint32Array(blockSize/4)
	    this._finalSize = finalSize
	    this._blockSize = blockSize
	    this._len = 0
	    this._s = 0
	  }

	  Hash.prototype.init = function () {
	    this._s = 0
	    this._len = 0
	  }

	  Hash.prototype.update = function (data, enc) {
	    if ("string" === typeof data) {
	      enc = enc || "utf8"
	      data = new Buffer(data, enc)
	    }

	    var l = this._len += data.length
	    var s = this._s = (this._s || 0)
	    var f = 0
	    var buffer = this._block

	    while (s < l) {
	      var t = Math.min(data.length, f + this._blockSize - (s % this._blockSize))
	      var ch = (t - f)

	      for (var i = 0; i < ch; i++) {
	        buffer[(s % this._blockSize) + i] = data[i + f]
	      }

	      s += ch
	      f += ch

	      if ((s % this._blockSize) === 0) {
	        this._update(buffer)
	      }
	    }
	    this._s = s

	    return this
	  }

	  Hash.prototype.digest = function (enc) {
	    // Suppose the length of the message M, in bits, is l
	    var l = this._len * 8

	    // Append the bit 1 to the end of the message
	    this._block[this._len % this._blockSize] = 0x80

	    // and then k zero bits, where k is the smallest non-negative solution to the equation (l + 1 + k) === finalSize mod blockSize
	    this._block.fill(0, this._len % this._blockSize + 1)

	    if (l % (this._blockSize * 8) >= this._finalSize * 8) {
	      this._update(this._block)
	      this._block.fill(0)
	    }

	    // to this append the block which is equal to the number l written in binary
	    // TODO: handle case where l is > Math.pow(2, 29)
	    this._block.writeInt32BE(l, this._blockSize - 4)

	    var hash = this._update(this._block) || this._hash()

	    return enc ? hash.toString(enc) : hash
	  }

	  Hash.prototype._update = function () {
	    throw new Error('_update must be implemented by subclass')
	  }

	  return Hash
	}


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
	 * in FIPS PUB 180-1
	 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for details.
	 */

	var inherits = __webpack_require__(39).inherits

	module.exports = function (Buffer, Hash) {

	  var A = 0|0
	  var B = 4|0
	  var C = 8|0
	  var D = 12|0
	  var E = 16|0

	  var W = new (typeof Int32Array === 'undefined' ? Array : Int32Array)(80)

	  var POOL = []

	  function Sha1 () {
	    if(POOL.length)
	      return POOL.pop().init()

	    if(!(this instanceof Sha1)) return new Sha1()
	    this._w = W
	    Hash.call(this, 16*4, 14*4)

	    this._h = null
	    this.init()
	  }

	  inherits(Sha1, Hash)

	  Sha1.prototype.init = function () {
	    this._a = 0x67452301
	    this._b = 0xefcdab89
	    this._c = 0x98badcfe
	    this._d = 0x10325476
	    this._e = 0xc3d2e1f0

	    Hash.prototype.init.call(this)
	    return this
	  }

	  Sha1.prototype._POOL = POOL
	  Sha1.prototype._update = function (X) {

	    var a, b, c, d, e, _a, _b, _c, _d, _e

	    a = _a = this._a
	    b = _b = this._b
	    c = _c = this._c
	    d = _d = this._d
	    e = _e = this._e

	    var w = this._w

	    for(var j = 0; j < 80; j++) {
	      var W = w[j] = j < 16 ? X.readInt32BE(j*4)
	        : rol(w[j - 3] ^ w[j -  8] ^ w[j - 14] ^ w[j - 16], 1)

	      var t = add(
	        add(rol(a, 5), sha1_ft(j, b, c, d)),
	        add(add(e, W), sha1_kt(j))
	      )

	      e = d
	      d = c
	      c = rol(b, 30)
	      b = a
	      a = t
	    }

	    this._a = add(a, _a)
	    this._b = add(b, _b)
	    this._c = add(c, _c)
	    this._d = add(d, _d)
	    this._e = add(e, _e)
	  }

	  Sha1.prototype._hash = function () {
	    if(POOL.length < 100) POOL.push(this)
	    var H = new Buffer(20)
	    //console.log(this._a|0, this._b|0, this._c|0, this._d|0, this._e|0)
	    H.writeInt32BE(this._a|0, A)
	    H.writeInt32BE(this._b|0, B)
	    H.writeInt32BE(this._c|0, C)
	    H.writeInt32BE(this._d|0, D)
	    H.writeInt32BE(this._e|0, E)
	    return H
	  }

	  /*
	   * Perform the appropriate triplet combination function for the current
	   * iteration
	   */
	  function sha1_ft(t, b, c, d) {
	    if(t < 20) return (b & c) | ((~b) & d);
	    if(t < 40) return b ^ c ^ d;
	    if(t < 60) return (b & c) | (b & d) | (c & d);
	    return b ^ c ^ d;
	  }

	  /*
	   * Determine the appropriate additive constant for the current iteration
	   */
	  function sha1_kt(t) {
	    return (t < 20) ?  1518500249 : (t < 40) ?  1859775393 :
	           (t < 60) ? -1894007588 : -899497514;
	  }

	  /*
	   * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	   * to work around bugs in some JS interpreters.
	   * //dominictarr: this is 10 years old, so maybe this can be dropped?)
	   *
	   */
	  function add(x, y) {
	    return (x + y ) | 0
	  //lets see how this goes on testling.
	  //  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
	  //  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	  //  return (msw << 16) | (lsw & 0xFFFF);
	  }

	  /*
	   * Bitwise rotate a 32-bit number to the left.
	   */
	  function rol(num, cnt) {
	    return (num << cnt) | (num >>> (32 - cnt));
	  }

	  return Sha1
	}


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};


	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  if (process.noDeprecation === true) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	};


	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};


	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;


	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = __webpack_require__(40);

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}


	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];

	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}


	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};


	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(41);

	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(2)))

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 41 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
	 * in FIPS 180-2
	 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 *
	 */

	var inherits = __webpack_require__(39).inherits

	module.exports = function (Buffer, Hash) {

	  var K = [
	      0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5,
	      0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
	      0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
	      0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
	      0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC,
	      0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
	      0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7,
	      0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967,
	      0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
	      0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
	      0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3,
	      0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
	      0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5,
	      0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
	      0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
	      0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2
	    ]

	  var W = new Array(64)

	  function Sha256() {
	    this.init()

	    this._w = W //new Array(64)

	    Hash.call(this, 16*4, 14*4)
	  }

	  inherits(Sha256, Hash)

	  Sha256.prototype.init = function () {

	    this._a = 0x6a09e667|0
	    this._b = 0xbb67ae85|0
	    this._c = 0x3c6ef372|0
	    this._d = 0xa54ff53a|0
	    this._e = 0x510e527f|0
	    this._f = 0x9b05688c|0
	    this._g = 0x1f83d9ab|0
	    this._h = 0x5be0cd19|0

	    this._len = this._s = 0

	    return this
	  }

	  function S (X, n) {
	    return (X >>> n) | (X << (32 - n));
	  }

	  function R (X, n) {
	    return (X >>> n);
	  }

	  function Ch (x, y, z) {
	    return ((x & y) ^ ((~x) & z));
	  }

	  function Maj (x, y, z) {
	    return ((x & y) ^ (x & z) ^ (y & z));
	  }

	  function Sigma0256 (x) {
	    return (S(x, 2) ^ S(x, 13) ^ S(x, 22));
	  }

	  function Sigma1256 (x) {
	    return (S(x, 6) ^ S(x, 11) ^ S(x, 25));
	  }

	  function Gamma0256 (x) {
	    return (S(x, 7) ^ S(x, 18) ^ R(x, 3));
	  }

	  function Gamma1256 (x) {
	    return (S(x, 17) ^ S(x, 19) ^ R(x, 10));
	  }

	  Sha256.prototype._update = function(M) {

	    var W = this._w
	    var a, b, c, d, e, f, g, h
	    var T1, T2

	    a = this._a | 0
	    b = this._b | 0
	    c = this._c | 0
	    d = this._d | 0
	    e = this._e | 0
	    f = this._f | 0
	    g = this._g | 0
	    h = this._h | 0

	    for (var j = 0; j < 64; j++) {
	      var w = W[j] = j < 16
	        ? M.readInt32BE(j * 4)
	        : Gamma1256(W[j - 2]) + W[j - 7] + Gamma0256(W[j - 15]) + W[j - 16]

	      T1 = h + Sigma1256(e) + Ch(e, f, g) + K[j] + w

	      T2 = Sigma0256(a) + Maj(a, b, c);
	      h = g; g = f; f = e; e = d + T1; d = c; c = b; b = a; a = T1 + T2;
	    }

	    this._a = (a + this._a) | 0
	    this._b = (b + this._b) | 0
	    this._c = (c + this._c) | 0
	    this._d = (d + this._d) | 0
	    this._e = (e + this._e) | 0
	    this._f = (f + this._f) | 0
	    this._g = (g + this._g) | 0
	    this._h = (h + this._h) | 0

	  };

	  Sha256.prototype._hash = function () {
	    var H = new Buffer(32)

	    H.writeInt32BE(this._a,  0)
	    H.writeInt32BE(this._b,  4)
	    H.writeInt32BE(this._c,  8)
	    H.writeInt32BE(this._d, 12)
	    H.writeInt32BE(this._e, 16)
	    H.writeInt32BE(this._f, 20)
	    H.writeInt32BE(this._g, 24)
	    H.writeInt32BE(this._h, 28)

	    return H
	  }

	  return Sha256

	}


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var inherits = __webpack_require__(39).inherits

	module.exports = function (Buffer, Hash) {
	  var K = [
	    0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
	    0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
	    0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
	    0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
	    0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
	    0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
	    0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
	    0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
	    0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
	    0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
	    0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
	    0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
	    0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
	    0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
	    0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
	    0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
	    0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
	    0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
	    0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
	    0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
	    0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
	    0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
	    0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
	    0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
	    0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
	    0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
	    0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
	    0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
	    0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
	    0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
	    0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
	    0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
	    0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
	    0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
	    0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
	    0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
	    0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
	    0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
	    0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
	    0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
	  ]

	  var W = new Array(160)

	  function Sha512() {
	    this.init()
	    this._w = W

	    Hash.call(this, 128, 112)
	  }

	  inherits(Sha512, Hash)

	  Sha512.prototype.init = function () {

	    this._a = 0x6a09e667|0
	    this._b = 0xbb67ae85|0
	    this._c = 0x3c6ef372|0
	    this._d = 0xa54ff53a|0
	    this._e = 0x510e527f|0
	    this._f = 0x9b05688c|0
	    this._g = 0x1f83d9ab|0
	    this._h = 0x5be0cd19|0

	    this._al = 0xf3bcc908|0
	    this._bl = 0x84caa73b|0
	    this._cl = 0xfe94f82b|0
	    this._dl = 0x5f1d36f1|0
	    this._el = 0xade682d1|0
	    this._fl = 0x2b3e6c1f|0
	    this._gl = 0xfb41bd6b|0
	    this._hl = 0x137e2179|0

	    this._len = this._s = 0

	    return this
	  }

	  function S (X, Xl, n) {
	    return (X >>> n) | (Xl << (32 - n))
	  }

	  function Ch (x, y, z) {
	    return ((x & y) ^ ((~x) & z));
	  }

	  function Maj (x, y, z) {
	    return ((x & y) ^ (x & z) ^ (y & z));
	  }

	  Sha512.prototype._update = function(M) {

	    var W = this._w
	    var a, b, c, d, e, f, g, h
	    var al, bl, cl, dl, el, fl, gl, hl

	    a = this._a | 0
	    b = this._b | 0
	    c = this._c | 0
	    d = this._d | 0
	    e = this._e | 0
	    f = this._f | 0
	    g = this._g | 0
	    h = this._h | 0

	    al = this._al | 0
	    bl = this._bl | 0
	    cl = this._cl | 0
	    dl = this._dl | 0
	    el = this._el | 0
	    fl = this._fl | 0
	    gl = this._gl | 0
	    hl = this._hl | 0

	    for (var i = 0; i < 80; i++) {
	      var j = i * 2

	      var Wi, Wil

	      if (i < 16) {
	        Wi = W[j] = M.readInt32BE(j * 4)
	        Wil = W[j + 1] = M.readInt32BE(j * 4 + 4)

	      } else {
	        var x  = W[j - 15*2]
	        var xl = W[j - 15*2 + 1]
	        var gamma0  = S(x, xl, 1) ^ S(x, xl, 8) ^ (x >>> 7)
	        var gamma0l = S(xl, x, 1) ^ S(xl, x, 8) ^ S(xl, x, 7)

	        x  = W[j - 2*2]
	        xl = W[j - 2*2 + 1]
	        var gamma1  = S(x, xl, 19) ^ S(xl, x, 29) ^ (x >>> 6)
	        var gamma1l = S(xl, x, 19) ^ S(x, xl, 29) ^ S(xl, x, 6)

	        // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
	        var Wi7  = W[j - 7*2]
	        var Wi7l = W[j - 7*2 + 1]

	        var Wi16  = W[j - 16*2]
	        var Wi16l = W[j - 16*2 + 1]

	        Wil = gamma0l + Wi7l
	        Wi  = gamma0  + Wi7 + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0)
	        Wil = Wil + gamma1l
	        Wi  = Wi  + gamma1  + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0)
	        Wil = Wil + Wi16l
	        Wi  = Wi  + Wi16 + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0)

	        W[j] = Wi
	        W[j + 1] = Wil
	      }

	      var maj = Maj(a, b, c)
	      var majl = Maj(al, bl, cl)

	      var sigma0h = S(a, al, 28) ^ S(al, a, 2) ^ S(al, a, 7)
	      var sigma0l = S(al, a, 28) ^ S(a, al, 2) ^ S(a, al, 7)
	      var sigma1h = S(e, el, 14) ^ S(e, el, 18) ^ S(el, e, 9)
	      var sigma1l = S(el, e, 14) ^ S(el, e, 18) ^ S(e, el, 9)

	      // t1 = h + sigma1 + ch + K[i] + W[i]
	      var Ki = K[j]
	      var Kil = K[j + 1]

	      var ch = Ch(e, f, g)
	      var chl = Ch(el, fl, gl)

	      var t1l = hl + sigma1l
	      var t1 = h + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0)
	      t1l = t1l + chl
	      t1 = t1 + ch + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0)
	      t1l = t1l + Kil
	      t1 = t1 + Ki + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0)
	      t1l = t1l + Wil
	      t1 = t1 + Wi + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0)

	      // t2 = sigma0 + maj
	      var t2l = sigma0l + majl
	      var t2 = sigma0h + maj + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0)

	      h  = g
	      hl = gl
	      g  = f
	      gl = fl
	      f  = e
	      fl = el
	      el = (dl + t1l) | 0
	      e  = (d + t1 + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0
	      d  = c
	      dl = cl
	      c  = b
	      cl = bl
	      b  = a
	      bl = al
	      al = (t1l + t2l) | 0
	      a  = (t1 + t2 + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0
	    }

	    this._al = (this._al + al) | 0
	    this._bl = (this._bl + bl) | 0
	    this._cl = (this._cl + cl) | 0
	    this._dl = (this._dl + dl) | 0
	    this._el = (this._el + el) | 0
	    this._fl = (this._fl + fl) | 0
	    this._gl = (this._gl + gl) | 0
	    this._hl = (this._hl + hl) | 0

	    this._a = (this._a + a + ((this._al >>> 0) < (al >>> 0) ? 1 : 0)) | 0
	    this._b = (this._b + b + ((this._bl >>> 0) < (bl >>> 0) ? 1 : 0)) | 0
	    this._c = (this._c + c + ((this._cl >>> 0) < (cl >>> 0) ? 1 : 0)) | 0
	    this._d = (this._d + d + ((this._dl >>> 0) < (dl >>> 0) ? 1 : 0)) | 0
	    this._e = (this._e + e + ((this._el >>> 0) < (el >>> 0) ? 1 : 0)) | 0
	    this._f = (this._f + f + ((this._fl >>> 0) < (fl >>> 0) ? 1 : 0)) | 0
	    this._g = (this._g + g + ((this._gl >>> 0) < (gl >>> 0) ? 1 : 0)) | 0
	    this._h = (this._h + h + ((this._hl >>> 0) < (hl >>> 0) ? 1 : 0)) | 0
	  }

	  Sha512.prototype._hash = function () {
	    var H = new Buffer(64)

	    function writeInt64BE(h, l, offset) {
	      H.writeInt32BE(h, offset)
	      H.writeInt32BE(l, offset + 4)
	    }

	    writeInt64BE(this._a, this._al, 0)
	    writeInt64BE(this._b, this._bl, 8)
	    writeInt64BE(this._c, this._cl, 16)
	    writeInt64BE(this._d, this._dl, 24)
	    writeInt64BE(this._e, this._el, 32)
	    writeInt64BE(this._f, this._fl, 40)
	    writeInt64BE(this._g, this._gl, 48)
	    writeInt64BE(this._h, this._hl, 56)

	    return H
	  }

	  return Sha512

	}


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
	 * Digest Algorithm, as defined in RFC 1321.
	 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for more info.
	 */

	var helpers = __webpack_require__(45);

	/*
	 * Calculate the MD5 of an array of little-endian words, and a bit length
	 */
	function core_md5(x, len)
	{
	  /* append padding */
	  x[len >> 5] |= 0x80 << ((len) % 32);
	  x[(((len + 64) >>> 9) << 4) + 14] = len;

	  var a =  1732584193;
	  var b = -271733879;
	  var c = -1732584194;
	  var d =  271733878;

	  for(var i = 0; i < x.length; i += 16)
	  {
	    var olda = a;
	    var oldb = b;
	    var oldc = c;
	    var oldd = d;

	    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
	    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
	    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
	    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
	    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
	    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
	    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
	    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
	    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
	    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
	    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
	    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
	    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
	    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
	    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
	    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

	    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
	    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
	    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
	    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
	    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
	    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
	    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
	    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
	    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
	    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
	    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
	    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
	    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
	    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
	    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
	    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

	    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
	    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
	    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
	    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
	    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
	    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
	    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
	    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
	    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
	    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
	    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
	    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
	    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
	    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
	    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
	    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

	    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
	    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
	    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
	    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
	    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
	    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
	    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
	    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
	    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
	    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
	    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
	    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
	    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
	    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
	    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
	    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

	    a = safe_add(a, olda);
	    b = safe_add(b, oldb);
	    c = safe_add(c, oldc);
	    d = safe_add(d, oldd);
	  }
	  return Array(a, b, c, d);

	}

	/*
	 * These functions implement the four basic operations the algorithm uses.
	 */
	function md5_cmn(q, a, b, x, s, t)
	{
	  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
	}
	function md5_ff(a, b, c, d, x, s, t)
	{
	  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
	}
	function md5_gg(a, b, c, d, x, s, t)
	{
	  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
	}
	function md5_hh(a, b, c, d, x, s, t)
	{
	  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
	}
	function md5_ii(a, b, c, d, x, s, t)
	{
	  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
	}

	/*
	 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	 * to work around bugs in some JS interpreters.
	 */
	function safe_add(x, y)
	{
	  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
	  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	  return (msw << 16) | (lsw & 0xFFFF);
	}

	/*
	 * Bitwise rotate a 32-bit number to the left.
	 */
	function bit_rol(num, cnt)
	{
	  return (num << cnt) | (num >>> (32 - cnt));
	}

	module.exports = function md5(buf) {
	  return helpers.hash(buf, core_md5, 16);
	};


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var intSize = 4;
	var zeroBuffer = new Buffer(intSize); zeroBuffer.fill(0);
	var chrsz = 8;

	function toArray(buf, bigEndian) {
	  if ((buf.length % intSize) !== 0) {
	    var len = buf.length + (intSize - (buf.length % intSize));
	    buf = Buffer.concat([buf, zeroBuffer], len);
	  }

	  var arr = [];
	  var fn = bigEndian ? buf.readInt32BE : buf.readInt32LE;
	  for (var i = 0; i < buf.length; i += intSize) {
	    arr.push(fn.call(buf, i));
	  }
	  return arr;
	}

	function toBuffer(arr, size, bigEndian) {
	  var buf = new Buffer(size);
	  var fn = bigEndian ? buf.writeInt32BE : buf.writeInt32LE;
	  for (var i = 0; i < arr.length; i++) {
	    fn.call(buf, arr[i], i * 4, true);
	  }
	  return buf;
	}

	function hash(buf, fn, hashSize, bigEndian) {
	  if (!Buffer.isBuffer(buf)) buf = new Buffer(buf);
	  var arr = fn(toArray(buf, bigEndian), buf.length * chrsz);
	  return toBuffer(arr, hashSize, bigEndian);
	}

	module.exports = { hash: hash };

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29).Buffer))

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {
	module.exports = ripemd160



	/*
	CryptoJS v3.1.2
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	/** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/

	// Constants table
	var zl = [
	    0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
	    7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
	    3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
	    1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
	    4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13];
	var zr = [
	    5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
	    6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
	    15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
	    8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
	    12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11];
	var sl = [
	     11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
	    7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
	    11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
	      11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
	    9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ];
	var sr = [
	    8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
	    9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
	    9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
	    15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
	    8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ];

	var hl =  [ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E];
	var hr =  [ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000];

	var bytesToWords = function (bytes) {
	  var words = [];
	  for (var i = 0, b = 0; i < bytes.length; i++, b += 8) {
	    words[b >>> 5] |= bytes[i] << (24 - b % 32);
	  }
	  return words;
	};

	var wordsToBytes = function (words) {
	  var bytes = [];
	  for (var b = 0; b < words.length * 32; b += 8) {
	    bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
	  }
	  return bytes;
	};

	var processBlock = function (H, M, offset) {

	  // Swap endian
	  for (var i = 0; i < 16; i++) {
	    var offset_i = offset + i;
	    var M_offset_i = M[offset_i];

	    // Swap
	    M[offset_i] = (
	        (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	        (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	    );
	  }

	  // Working variables
	  var al, bl, cl, dl, el;
	  var ar, br, cr, dr, er;

	  ar = al = H[0];
	  br = bl = H[1];
	  cr = cl = H[2];
	  dr = dl = H[3];
	  er = el = H[4];
	  // Computation
	  var t;
	  for (var i = 0; i < 80; i += 1) {
	    t = (al +  M[offset+zl[i]])|0;
	    if (i<16){
	        t +=  f1(bl,cl,dl) + hl[0];
	    } else if (i<32) {
	        t +=  f2(bl,cl,dl) + hl[1];
	    } else if (i<48) {
	        t +=  f3(bl,cl,dl) + hl[2];
	    } else if (i<64) {
	        t +=  f4(bl,cl,dl) + hl[3];
	    } else {// if (i<80) {
	        t +=  f5(bl,cl,dl) + hl[4];
	    }
	    t = t|0;
	    t =  rotl(t,sl[i]);
	    t = (t+el)|0;
	    al = el;
	    el = dl;
	    dl = rotl(cl, 10);
	    cl = bl;
	    bl = t;

	    t = (ar + M[offset+zr[i]])|0;
	    if (i<16){
	        t +=  f5(br,cr,dr) + hr[0];
	    } else if (i<32) {
	        t +=  f4(br,cr,dr) + hr[1];
	    } else if (i<48) {
	        t +=  f3(br,cr,dr) + hr[2];
	    } else if (i<64) {
	        t +=  f2(br,cr,dr) + hr[3];
	    } else {// if (i<80) {
	        t +=  f1(br,cr,dr) + hr[4];
	    }
	    t = t|0;
	    t =  rotl(t,sr[i]) ;
	    t = (t+er)|0;
	    ar = er;
	    er = dr;
	    dr = rotl(cr, 10);
	    cr = br;
	    br = t;
	  }
	  // Intermediate hash value
	  t    = (H[1] + cl + dr)|0;
	  H[1] = (H[2] + dl + er)|0;
	  H[2] = (H[3] + el + ar)|0;
	  H[3] = (H[4] + al + br)|0;
	  H[4] = (H[0] + bl + cr)|0;
	  H[0] =  t;
	};

	function f1(x, y, z) {
	  return ((x) ^ (y) ^ (z));
	}

	function f2(x, y, z) {
	  return (((x)&(y)) | ((~x)&(z)));
	}

	function f3(x, y, z) {
	  return (((x) | (~(y))) ^ (z));
	}

	function f4(x, y, z) {
	  return (((x) & (z)) | ((y)&(~(z))));
	}

	function f5(x, y, z) {
	  return ((x) ^ ((y) |(~(z))));
	}

	function rotl(x,n) {
	  return (x<<n) | (x>>>(32-n));
	}

	function ripemd160(message) {
	  var H = [0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0];

	  if (typeof message == 'string')
	    message = new Buffer(message, 'utf8');

	  var m = bytesToWords(message);

	  var nBitsLeft = message.length * 8;
	  var nBitsTotal = message.length * 8;

	  // Add padding
	  m[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	  m[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	      (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
	      (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
	  );

	  for (var i=0 ; i<m.length; i += 16) {
	    processBlock(H, m, i);
	  }

	  // Swap endian
	  for (var i = 0; i < 5; i++) {
	      // Shortcut
	    var H_i = H[i];

	    // Swap
	    H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	          (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	  }

	  var digestbytes = wordsToBytes(H);
	  return new Buffer(digestbytes);
	}



	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29).Buffer))

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var createHash = __webpack_require__(35)

	var zeroBuffer = new Buffer(128)
	zeroBuffer.fill(0)

	module.exports = Hmac

	function Hmac (alg, key) {
	  if(!(this instanceof Hmac)) return new Hmac(alg, key)
	  this._opad = opad
	  this._alg = alg

	  var blocksize = (alg === 'sha512') ? 128 : 64

	  key = this._key = !Buffer.isBuffer(key) ? new Buffer(key) : key

	  if(key.length > blocksize) {
	    key = createHash(alg).update(key).digest()
	  } else if(key.length < blocksize) {
	    key = Buffer.concat([key, zeroBuffer], blocksize)
	  }

	  var ipad = this._ipad = new Buffer(blocksize)
	  var opad = this._opad = new Buffer(blocksize)

	  for(var i = 0; i < blocksize; i++) {
	    ipad[i] = key[i] ^ 0x36
	    opad[i] = key[i] ^ 0x5C
	  }

	  this._hash = createHash(alg).update(ipad)
	}

	Hmac.prototype.update = function (data, enc) {
	  this._hash.update(data, enc)
	  return this
	}

	Hmac.prototype.digest = function (enc) {
	  var h = this._hash.digest()
	  return createHash(this._alg).update(this._opad).update(h).digest(enc)
	}


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29).Buffer))

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var pbkdf2Export = __webpack_require__(49)

	module.exports = function (crypto, exports) {
	  exports = exports || {}

	  var exported = pbkdf2Export(crypto)

	  exports.pbkdf2 = exported.pbkdf2
	  exports.pbkdf2Sync = exported.pbkdf2Sync

	  return exports
	}


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {module.exports = function(crypto) {
	  function pbkdf2(password, salt, iterations, keylen, digest, callback) {
	    if ('function' === typeof digest) {
	      callback = digest
	      digest = undefined
	    }

	    if ('function' !== typeof callback)
	      throw new Error('No callback provided to pbkdf2')

	    setTimeout(function() {
	      var result

	      try {
	        result = pbkdf2Sync(password, salt, iterations, keylen, digest)
	      } catch (e) {
	        return callback(e)
	      }

	      callback(undefined, result)
	    })
	  }

	  function pbkdf2Sync(password, salt, iterations, keylen, digest) {
	    if ('number' !== typeof iterations)
	      throw new TypeError('Iterations not a number')

	    if (iterations < 0)
	      throw new TypeError('Bad iterations')

	    if ('number' !== typeof keylen)
	      throw new TypeError('Key length not a number')

	    if (keylen < 0)
	      throw new TypeError('Bad key length')

	    digest = digest || 'sha1'

	    if (!Buffer.isBuffer(password)) password = new Buffer(password)
	    if (!Buffer.isBuffer(salt)) salt = new Buffer(salt)

	    var hLen, l = 1, r, T
	    var DK = new Buffer(keylen)
	    var block1 = new Buffer(salt.length + 4)
	    salt.copy(block1, 0, 0, salt.length)

	    for (var i = 1; i <= l; i++) {
	      block1.writeUInt32BE(i, salt.length)

	      var U = crypto.createHmac(digest, password).update(block1).digest()

	      if (!hLen) {
	        hLen = U.length
	        T = new Buffer(hLen)
	        l = Math.ceil(keylen / hLen)
	        r = keylen - (l - 1) * hLen

	        if (keylen > (Math.pow(2, 32) - 1) * hLen)
	          throw new TypeError('keylen exceeds maximum length')
	      }

	      U.copy(T, 0, 0, hLen)

	      for (var j = 1; j < iterations; j++) {
	        U = crypto.createHmac(digest, password).update(U).digest()

	        for (var k = 0; k < hLen; k++) {
	          T[k] ^= U[k]
	        }
	      }

	      var destPos = (i - 1) * hLen
	      var len = (i == l ? r : hLen)
	      T.copy(DK, destPos, 0, len)
	    }

	    return DK
	  }

	  return {
	    pbkdf2: pbkdf2,
	    pbkdf2Sync: pbkdf2Sync
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29).Buffer))

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * MinDB (version 0.1.16) - Database on JavaScript
	 * 
	 * Will Wen Gunn(iwillwen) and other contributors
	 * 
	 * @license MIT-license
	 * @copyright 2012-2015 iwillwen(willwengunn@gmail.com)
	 */
	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define("min",[],t):"object"==typeof exports?exports.min=t():e.min=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";e.exports=n(5)["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={noop:function(){return!1},inherits:function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})},extend:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;t>r;r++)n[r-1]=arguments[r];for(var i=0,s=n.length;s>i;i++)for(var u=Object.getOwnPropertyNames(n[i]||{}),o=0;o<u.length;o++)e[u[o]]=n[i][u[o]];return e},isNumber:function(e){return"[object Number]"==toString.call(e)},isUndefined:function(e){return void 0===e},isObject:function(e){return e===Object(e)},arrayUnique:function(e){for(var t={},r=[],i=0,s=e.length;s>i;++i)(!t.hasOwnProperty(e[i])||n.isObject(e[i]))&&(r.push(e[i]),t[e[i]]=1);return r},arrayInter:function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),i=1;t>i;i++)r[i-1]=arguments[i];return n.arrayUnique(e).filter(function(e){var t=!0,n=!0,i=!1,s=void 0;try{for(var u,o=r[Symbol.iterator]();!(n=(u=o.next()).done);n=!0){var a=u.value;a.indexOf(e)<0&&(t=!1)}}catch(c){i=!0,s=c}finally{try{!n&&o["return"]&&o["return"]()}finally{if(i)throw s}}return t})},arrayDiff:function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),i=1;t>i;i++)r[i-1]=arguments[i];var s=n.arrayInter.apply(n,[e].concat(r)),u=n.arrayUnique(e.concat.apply(e,r));return u.filter(function(e){return s.indexOf(e)<0})},flatten:function(e){function t(t,n,r,i){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t,n,r){for(var i=[],s=0,u=r||0,o=getLength(e);o>u;u++){var a=e[u];if(isArrayLike(a)&&(_.isArray(a)||_.isArguments(a))){t||(a=flatten(a,t,n));var c=0,l=a.length;for(i.length+=l;l>c;)i[s++]=a[c++]}else n||(i[s++]=a)}return i})};t["default"]=n},function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e){var t=null,n=l,r=l;return e=e||l,m?(t=new m(function(t,i){n=t,r=i,e(t,i)}),t.resolve=function(){for(var e=arguments.length,r=Array(e),i=0;e>i;i++)r[i]=arguments[i];n.apply(t,r)},t.reject=function(){for(var e=arguments.length,n=Array(e),i=0;e>i;i++)n[i]=arguments[i];r.apply(t,n)}):t=new v(e),t}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.EventEmitter=void 0,t.Promise=u;var a=n(1),c=r(a),l=c["default"].noop,f=10,h=t.EventEmitter=function(){function e(){s(this,e),this._events=this._events||{},this._maxListeners=this._maxListeners||f}return o(e,[{key:"setMaxListeners",value:function(e){if("number"!=typeof e||0>e)throw TypeError("n must be a positive number");this._maxListeners=e}},{key:"emit",value:function(e){var t=void 0,n=void 0,r=void 0,s=void 0,u=void 0,o=void 0;if(this._events||(this._events={}),"error"===e&&(!this._events.error||"object"===i(this._events.error)&&!this._events.error.length)){if(t=arguments[1],!this.domain)throw t instanceof Error?t:TypeError('Uncaught, unspecified "error" event.');return t||(t=new TypeError('Uncaught, unspecified "error" event.')),!1}if(n=this._events[e],"undefined"==typeof n)return!1;if("function"==typeof n)switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:for(r=arguments.length,s=new Array(r-1),u=1;r>u;u++)s[u-1]=arguments[u];n.apply(this,s)}else if("object"===("undefined"==typeof n?"undefined":i(n))){for(r=arguments.length,s=new Array(r-1),u=1;r>u;u++)s[u-1]=arguments[u];for(o=n.slice(),r=o.length,u=0;r>u;u++)o[u].apply(this,s)}return!0}},{key:"addListener",value:function(e,t){var n=void 0;if("function"!=typeof t)throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,"function"==typeof t.listener?t.listener:t),this._events[e]?"object"===i(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,"object"!==i(this._events[e])||this._events[e].warned||(n=this._maxListeners,n&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),console.trace())),this}},{key:"once",value:function(e,t){function n(){this.removeListener(e,n),t.apply(this,arguments)}if("function"!=typeof t)throw TypeError("listener must be a function");return n.listener=t,this.on(e,n),this}},{key:"removeListener",value:function(e,t){var n=void 0,r=void 0,s=void 0,u=void 0;if("function"!=typeof t)throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],s=n.length,r=-1,n===t||"function"==typeof n.listener&&n.listener===t)this._events[e]=void 0,this._events.removeListener&&this.emit("removeListener",e,t);else if("object"===("undefined"==typeof n?"undefined":i(n))){for(u=s;u-- >0;)if(n[u]===t||n[u].listener&&n[u].listener===t){r=u;break}if(0>r)return this;1===n.length?(n.length=0,this._events[e]=void 0):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this}},{key:"removeAllListeners",value:function(e){if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&(this._events[e]=void 0),this;if(0===arguments.length){for(var t=Object.keys(this._events),n=0;n<t.length;n++){var r=t[n];"removeListener"!==r&&this.removeAllListeners(r)}return this.removeAllListeners("removeListener"),this._events={},this}var i=this._events[e];if("function"==typeof i)this.removeListener(e,i);else for(;i.length;)this.removeListener(e,i[i.length-1]);return this._events[e]=void 0,this}},{key:"listeners",value:function(e){var t=void 0;return t=this._events&&this._events[e]?"function"==typeof this._events[e]?[this._events[e]]:this._events[e].slice():[]}}]),e}();h.prototype.on=h.prototype.addListener,h.listenerCount=function(e,t){var n=void 0;return n=e._events&&e._events[t]?"function"==typeof e._events[t]?1:e._events[t].length:0},h.inherits=function(e){c["default"].inherits(e,h)};var v=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?l:arguments[0];s(this,e),this._settled=!1,this._success=!1,this._args=[],this._callbacks=[],this._onReject=l,t(this.resolve.bind(this),this.reject.bind(this))}return o(e,[{key:"then",value:function(t){var n=this,r=arguments.length<=1||void 0===arguments[1]?l:arguments[1],i=new e;return this._onReject=r,this._callbacks.push(function(){for(var e=arguments.length,r=Array(e),s=0;e>s;s++)r[s]=arguments[s];var u=t.apply(n,r);u&&"function"==typeof u.then&&u.then(i.resolve.bind(i),i.reject.bind(i))}),this._settled&&(this._success?this.resolve.apply(this,this._args):this.onReject.apply(this,this._args)),i}},{key:"catch",value:function(e){return this._onReject=e,this}},{key:"resolve",value:function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];for(var r=0;r<this._callbacks.length;r++){var i=this._callbacks[r];i.apply(this,t)}this._args=t,this._settled=!0,this._success=!0}},{key:"reject",value:function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];this._onReject.apply(this,t),this._args=t,this._settled=!0}}]),e}(),m=(e||window).Promise||null}).call(t,function(){return this}())},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var i=function(){function e(e,t){var n=[],r=!0,i=!1,s=void 0;try{for(var u,o=e[Symbol.iterator]();!(r=(u=o.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(a){i=!0,s=a}finally{try{!r&&o["return"]&&o["return"]()}finally{if(i)throw s}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),u=r(s),o=n(2),a=u["default"].noop,c={};t["default"]=c,c.hset=function(e,t,n){var r=this,i=arguments.length<=3||void 0===arguments[3]?a:arguments[3],s=new o.Promise;return this.exists(e,function(u,o){if(u)return s.reject(u),i(u);if(o)r.get(e,function(u,o){return u?(s.reject(u),i(u)):(o[t]=n,void r.set(e,o,function(r){return r?(s.reject(r),i(r)):(s.resolve([e,t,n]),void i(null,e,t,n))}))});else{var a={};a[t]=n,r.set(e,a,function(u){return u?(reject(u),i(u)):(r._keys[e]=1,s.resolve([e,t,n]),void i(null,e,t,n))})}}),s.then(function(i){return r.emit("hset",e,t,n)}),s},c.hsetnx=function(e,t,n){var r=this,s=arguments.length<=3||void 0===arguments[3]?a:arguments[3],u=new o.Promise;return this.hexists(e,t,function(o,a){if(o)return u.reject(o),s(o);if(a){var c=new Error("The field of the hash is exists");return u.reject(c),s(c)}r.hset(e,t,n).then(function(e){var t=i(e,3),n=t[0],r=t[1],o=t[2];u.resolve([n,r,o]),s(null,n,r,o)})}),u},c.hmset=function(e,t){function n(){h.length>0?(s(h),u.reject(h)):(s(null,f),u.resolve(f))}var r=this,s=arguments.length<=2||void 0===arguments[2]?a:arguments[2],u=new o.Promise,c=Object.keys(t),l=0,f=[],h=[],v=function m(s,u){delete c[u],r.hset(e,s,t[s]).then(function(e){var t=i(e,3),r=t[0],s=t[1],u=t[2];f.push([r,s,u]),l++,c[l]?m(c[l],l):n()},function(e){return h.push(e),l++,c[l]?m(c[l],l):n()})};return v(c[l],l),u},c.hget=function(e,t){var n=this,r=arguments.length<=2||void 0===arguments[2]?a:arguments[2],i=new o.Promise;return this.hexists(e,t,function(s,u){if(s)return i.reject(s),r(s);if(u)n.get(e).then(function(e){var n=e[t];i.resolve(n),r(null,n)},function(e){i.reject(e),r(e)});else{var o=new Error("no such field");i.reject(o),r(o)}}),i},c.hmget=function(e,t){var n=arguments.length<=2||void 0===arguments[2]?a:arguments[2],r=new o.Promise,i=this.multi();return t.forEach(function(t){i.hget(e,t)}),i.exec(function(e,t){return e?(n(e),r.reject(e)):(r.resolve(t),void n(null,t))}),r},c.hgetall=function(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?a:arguments[1],r=new o.Promise;return this.exists(e,function(i,s){if(i)return n(i),r.reject(i);if(!s){var u=new Error("no such key");return n(u),r.reject(u)}t.get(e).then(function(e){r.resolve(e),n(null,e)})["catch"](function(e){r.reject(e),n(e)})}),r},c.hdel=function(e,t){var n=this,r=arguments.length<=2||void 0===arguments[2]?a:arguments[2],s=new o.Promise;return s.then(function(e){var t=i(e,3),r=t[0],s=t[1],u=t[2];n.emit("hdel",r,s,u)}),this.hexists(e,t,function(i,u){if(i)return r(i),s.reject(i);if(!u){var o=new Error("no such key");return r(o),s.reject(o)}n.get(e).then(function(i){var u=i[t];delete i[t],n.set(e,i).then(function(n){s.resolve([e,t,u]),r(null,e,t,u)},function(e){s.reject(e),r(e)})},function(e){return r(e)})}),s},c.hlen=function(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?a:arguments[1],r=new o.Promise;return this.exists(e,function(i,s){return i?(r.reject(i),n(i)):void(s?t.get(e).then(function(e){var t=Object.keys(e).length;r.resolve(t),n(null,t)},function(e){r.reject(e),n(e)}):(r.resolve(0),n(null,0)))}),r},c.hkeys=function(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?a:arguments[1],r=new o.Promise;return this.exists(e,function(i,s){return i?(r.reject(i),n(i)):void(s?t.get(e).then(function(e){var t=Object.keys(e);r.resolve(t),n(null,t)},function(e){r.reject(e),n(e)}):(r.resolve([]),n(null,[])))}),r},c.hexists=function(e,t){var n=this,r=arguments.length<=2||void 0===arguments[2]?a:arguments[2],i=new o.Promise;return this.exists(e).then(function(t){return t?n.get(e):(i.resolve(!1),void r(null,!1))}).then(function(e){e.hasOwnProperty(t)?(i.resolve(!0),r(null,!0)):(i.resolve(!1),r(null,!1))},function(e){i.reject(e),r(e)}),i},c.hincr=function(e,t){var n=this,r=arguments.length<=2||void 0===arguments[2]?a:arguments[2],s=new o.Promise;return s.then(function(r){return n.emit("hincr",e,t,r)}),this.hexists(e,t).then(function(r){if(r)return n.hget(e,t);var i=new o.Promise;return i.resolve(0),i}).then(function(i){if(isNaN(parseFloat(i))){var u=new Error("value wrong");return s.reject(u),r(u)}return i=parseFloat(i),n.hset(e,t,++i)}).then(function(e){var t=i(e,3),n=t[2];s.resolve(n),r(null,n)},function(e){s.reject(e),r(null,e)}),s},c.hincrby=function(e,t,n){var r=this,s=arguments.length<=3||void 0===arguments[3]?a:arguments[3],u=new o.Promise;return u.then(function(n){r.emit("hincr",e,t,n)}),this.hexists(e,t).then(function(n){if(n)return r.hget(e,t);var i=new o.Promise;return i.resolve(0),i}).then(function(i){if(isNaN(parseFloat(i))){var o=new Error("value wrong");return u.reject(o),s(o)}return i=parseFloat(i),r.hset(e,t,i+n)}).then(function(e){var t=i(e,3),n=t[2];u.resolve(n),s(null,n)},function(e){u.reject(e),s(null,e)}),u},c.hincrbyfloat=c.hincrby,c.hdecr=function(e,t){var n=this,r=arguments.length<=2||void 0===arguments[2]?a:arguments[2],s=new o.Promise;return s.then(function(r){n.emit("hdecr",e,t,r)}),this.hexists(e,t).then(function(r){if(r)return n.hget(e,t);var i=new o.Promise;return i.resolve(0),i}).then(function(i){if(isNaN(parseFloat(i))){var u=new Error("value wrong");return s.reject(u),r(u)}return i=parseFloat(i),n.hset(e,t,--i)}).then(function(e){var t=i(e,3),n=t[2];s.resolve(n),r(null,n)},function(e){s.reject(e),r(e)}),s},c.hdecrby=function(e,t,n){var r=this,s=arguments.length<=3||void 0===arguments[3]?a:arguments[3],u=new o.Promise;return u.then(function(n){return r.emit("hincr",e,t,n)}),this.hexists(e,t).then(function(n){if(n)return r.hget(e,t);var i=new o.Promise;return i.resolve(0),i}).then(function(i){if(isNaN(parseFloat(i))){var o=new Error("value wrong");return u.reject(o),s(o)}return i=parseFloat(i),r.hset(e,t,i-n)}).then(function(e){var t=i(e,3),n=t[2];u.resolve(n),s(null,n)},function(e){u.reject(e),s(null,e)}),u},c.hdecrbyfloat=c.hdecrby},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var s=function(){function e(e,t){var n=[],r=!0,i=!1,s=void 0;try{for(var u,o=e[Symbol.iterator]();!(r=(u=o.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(a){i=!0,s=a}finally{try{!r&&o["return"]&&o["return"]()}finally{if(i)throw s}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),o=r(u),a=n(2),c=o["default"].noop,l={};t["default"]=l,l.lpush=function(e){for(var t=this,n=arguments.length,r=Array(n>1?n-1:0),i=1;n>i;i++)r[i-1]=arguments[i];var s=new a.Promise,u=c;return r[r.length-1].apply&&(u=r.splice(r.length-1)[0]),s.then(function(n){return t.emit("lpush",e,r,n)}),this.exists(e,function(n,i){if(n)return s.reject(n),u(n);if(i)t.get(e,function(n,i){return n?(s.reject(n),u(n)):(i.unshift.apply(i,r),void t.set(e,i,function(e){if(e)return s.reject(e),u(e);var t=i.length;s.resolve(t),u(null,t)}))});else{var o=r.slice();t.set(e,o,function(n){return n?(s.reject(n),u(n)):(t._keys[e]=2,s.resolve(1),void u(null,1))})}}),s},l.lpushx=function(e){for(var t=this,n=arguments.length,r=Array(n>1?n-1:0),i=1;n>i;i++)r[i-1]=arguments[i];var s=new a.Promise,u=c;return r[r.length-1].apply&&(u=r.splice(r.length-1)[0]),s.then(function(n){return t.emit("lpush",e,r,n)}),this.exists(e,function(n,i){if(n)return s.reject(n),u(n);if(!i){var o=new Error("no such key");return u(o),s.reject(o)}t.get(e,function(n,i){if(n)return s.reject(n),u(n);if(!i.length){var n=new Error("The list is empty.");return u(n),s.reject(n)}i.unshift.apply(i,r),t.set(e,i,function(e){if(e)return s.reject(e),u(e);var t=i.length;s.resolve(t),u(null,t)})})}),s},l.rpush=function(e){for(var t=this,n=arguments.length,r=Array(n>1?n-1:0),i=1;n>i;i++)r[i-1]=arguments[i];var s=new a.Promise,u=c;return r[r.length-1].apply&&(u=r.splice(r.length-1)[0]),s.then(function(n){return t.emit("rpush",e,r,n)}),this.exists(e,function(n,i){if(n)return s.reject(n),u(n);if(i)t.get(e,function(n,i){return n?(s.reject(n),u(n)):(i.push.apply(i,r),void t.set(e,i,function(e){if(e)return s.reject(e),u(e);var t=i.length;s.resolve(t),u(null,t)}))});else{var o=r.slice();t.set(e,o,function(e){return e?(s.reject(e),u(e)):(s.resolve(1),void u(null,1))})}}),s},l.rpushx=function(e){for(var t=this,n=arguments.length,r=Array(n>1?n-1:0),i=1;n>i;i++)r[i-1]=arguments[i];var s=new a.Promise,u=c;return r[r.length-1].apply&&(u=r.splice(r.length-1)[0]),s.then(function(n){return t.emit("rpush",e,r,n)}),this.exists(e,function(n,i){if(n)return s.reject(n),u(n);if(!i){var o=new Error("no such key");return u(o),s.reject(o)}t.get(e,function(n,i){if(n)return s.reject(n),u(n);if(!i.length){var o=new Error("The list is empty.");return u(o),s.reject(o)}i.push.apply(i,r),t.set(e,i,function(e){if(e)return s.reject(e),u(e);var t=i.length;s.resolve(t),u(null,t)})})}),s},l.lpop=function(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?c:arguments[1],r=new a.Promise,i=null;return r.then(function(n){return t.emit("lpop",e,n)}),this.exists(e).then(function(i){return i?t.get(e):(r.resolve(null),void n(null,null))}).then(function(n){return i=n.shift(),t.set(e,n)}).then(function(e){r.resolve(i),n(null,i)},function(e){r.reject(e),n(e)}),r},l.rpop=function(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?c:arguments[1],r=new a.Promise;r.then(function(n){return t.emit("rpop",e,n)});var i=null;return this.exists(e).then(function(i){return i?t.get(e):(r.resolve(null),void n(null,null))}).then(function(n){return i=n.pop(),t.set(e,n)}).then(function(e){r.resolve(i),n(null,i)},function(e){r.reject(e),n(e)}),r},l.llen=function(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?c:arguments[1],r=new a.Promise;return this.exists(e,function(i,s){return i?(r.reject(i),n(i)):void(s?t.get(e,function(e,t){if(e)return r.reject(e),n(e);var i=t.length;r.resolve(i),n(null,i)}):(r.resolve(0),n(null,0)))}),r},l.lrange=function(e,t,n){var r=this,i=arguments.length<=3||void 0===arguments[3]?c:arguments[3],s=new a.Promise;return this.exists(e,function(u,o){return u?(s.reject(u),i(u)):void(o?r.get(e,function(e,r){if(e)return s.reject(e),i(e);0>n&&(n=r.length+n);var u=r.slice(t,n+1);s.resolve(u),i(null,u)}):(s.resolve([]),i(null,[])))}),s},l.lrem=function(e,t,n){var r=this,i=arguments.length<=3||void 0===arguments[3]?c:arguments[3],s=new a.Promise;s.then(function(i){return r.emit("lrem",e,t,n,i)});var u=0;return this.exists(e).then(function(t){return t?r.get(e):(s.resolve(0),void i(null,0))}).then(function(i){switch(!0){case t>0:for(var s=0;s<i.length&&t>u;s++)i[s]===n&&(i.splice(s,1)[0],u++);break;case 0>t:for(var s=i.length-1;s>=0&&-t>u;s--)i[s]===n&&(i.splice(s,1)[0],u++);break;case 0==t:for(var s=i.length-1;s>=0;s--)i[s]===n&&(i.splice(s,1)[0],u++)}return r.set(e,i)}).then(function(){s.resolve(u),i(null,u)})["catch"](function(e){s.reject(e),i(e)}),s},l.lset=function(e,t,n){var r=this,i=arguments.length<=3||void 0===arguments[3]?c:arguments[3],s=new a.Promise;return s.then(function(i){return r.emit("lset",e,t,n,i)}),this.exists(e).then(function(t){if(t)return r.get(e);throw new Error("no such key")}).then(function(i){if(0>t&&i.length>0&&(t=i.length+t),!i[t]||!i.length)throw new Error("Illegal index");return i.length==t?i.push(n):i[t]=n,r.set(e,i)}).then(function(){s.resolve(),i(null)})["catch"](function(e){s.reject(e),i(e)}),s},l.ltrim=function(e,t,n){var r=this,i=arguments.length<=3||void 0===arguments[3]?c:arguments[3],s=new a.Promise;return this.exists(e).then(function(t){if(!t)throw new Error("no such key");return r.get(e)}).then(function(i){0>t&&(t=i.length+t),0>n&&(n=i.length+n);var s=i.slice(t,n+1);return r.set(e,s)}).then(function(){return r.get(e)}).then(function(t){s.resolve(t),i(null,t,e)})["catch"](function(e){s.reject(e),i(e)}),s},l.lindex=function(e,t){var n=this,r=arguments.length<=2||void 0===arguments[2]?c:arguments[2],i=new a.Promise;return this.exists(e).then(function(t){if(!t){var s=new Error("no such key");return i.reject(s),r(s)}return n.get(e)}).then(function(e){if(t>e.length-1)throw new Error("Illegal index");var n=e[t];i.resolve(n),r(null,n)})["catch"](function(e){i.reject(e),r(e)}),i},l.linsertBefore=function(e,t,n){var r=this,s=arguments.length<=3||void 0===arguments[3]?c:arguments[3],u=new a.Promise;return u.then(function(i){return r.emit("linsertBefore",e,t,n,i)}),this.exists(e).then(function(t){if(t)return r.get(e);throw new Error("no such key")}).then(function(o){var a=o.indexOf(t);if(0>a)return u.resolve(-1),void s(null,-1);var c=o.slice(0,a),l=o.slice(a),f=c.slice();return f.push.apply(f,[n].concat(i(l))),r.set(e,f)}).then(function(e){return e.substr?r.get(e):void 0}).then(function(e){u.resolve(e.length),s(null,e.length)})["catch"](function(e){u.reject(e),s(e)}),u},l.linsertAfter=function(e,t,n){var r=this,s=arguments.length<=3||void 0===arguments[3]?c:arguments[3],u=new a.Promise;return u.then(function(i){return r.emit("linsertAfter",e,t,n,i)}),this.exists(e).then(function(t){if(t)return r.get(e);throw new Error("no such key")}).then(function(o){var a=o.indexOf(t)+1;if(0>a)return u.resolve(-1),void s(null,-1);var c=o.slice(0,a),l=o.slice(a),f=c.slice();return f.push.apply(f,[n].concat(i(l))),r.set(e,f)}).then(function(e){return e.substr?r.get(e):void 0}).then(function(e){u.resolve(e.length),s(null,e.length)})["catch"](function(e){u.reject(e),s(e)}),u},l.rpoplpush=function(e,t){var n=this,r=arguments.length<=2||void 0===arguments[2]?c:arguments[2],i=new a.Promise,u=null;return i.then(function(r){var i=s(r,2),u=i[0],o=i[1];return n.emit("rpoplpush",e,t,u,o)}),this.rpop(e).then(function(e){return n.lpush(t,u=e)}).then(function(e){i.resolve([u,e]),r(null,u,e)},function(e){r(e),i.reject(e)}),i},l.lpoprpush=function(e,t){var n=this,r=arguments.length<=2||void 0===arguments[2]?c:arguments[2],i=new a.Promise,s=null;return i.then(function(r,i){return n.emit("lpoprpush",e,t,r,i)}),this.lpop(e).then(function(e){return n.rpush(t,s=e)}).then(function(e){i.resolve(s,e),r(null,s,e)},function(e){r(e),i.reject(e)}),i}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var i=function(){function e(e,t){var n=[],r=!0,i=!1,s=void 0;try{for(var u,o=e[Symbol.iterator]();!(r=(u=o.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(a){i=!0,s=a}finally{try{!r&&o["return"]&&o["return"]()}finally{if(i)throw s}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Object.defineProperty(t,"__esModule",{value:!0}),n(11);var s=n(1),u=r(s),o=n(2),a=n(7),c=r(a),l=n(3),f=r(l),h=n(4),v=r(h),m=n(8),g=r(m),d=n(10),p=r(d),y=n(6),w=r(y),b=n(9),j=u["default"].noop,x={};t["default"]=x,u["default"].extend(x,o.EventEmitter.prototype),x.EventEmitter=o.EventEmitter,x.Promise=o.Promise,x.memStore=b.memStore,x.localStore=b.localStore,x.store=new b.localStore;var _=x._keys={},k=null,P={0:"mix",1:"hash",2:"list",3:"set",4:"zset"};x.fork=function(){for(var e={},t=Object.getOwnPropertyNames(this),n=0;n<t.length;n++){var r=t[n];this.hasOwnProperty(r)&&(e[r]=this[r])}return e},x.del=function(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?j:arguments[1],r=new o.Promise(j);r.then(function(){t.emit("del",e),k&&clearTimeout(k),k=setTimeout(t.save.bind(t),1e3)});var i=this.store,s="min-"+e;if(i.async){var u=function(){i.remove(s,function(i){return i?(r.reject(i),n(i)):(delete t._keys[e],r.resolve(e),void n(null,e))})};i.ready?u():i.on("ready",u)}else try{i.remove(s),delete this._keys[e],r.resolve(e),n(null,e)}catch(a){r.reject(a),n(a)}return r},x.exists=function(e){var t=arguments.length<=1||void 0===arguments[1]?j:arguments[1],n=new o.Promise;return this.get(e).then(function(e){n.resolve(!0),t(null,!0)})["catch"](function(e){return n.resolve(!1),t(null,!1)}),n},x.renamenx=function(e,t){var n=this,r=arguments.length<=2||void 0===arguments[2]?j:arguments[2],i=new o.Promise(j);i.then(function(r){n.emit("rename",e,t),k&&clearTimeout(k),k=setTimeout(n.save.bind(n),5e3)});try{!function(){var s=function(e){i.reject(e),r(e)},u=null,o=null;n.exists(e).then(function(t){if(t)return n.get(e);var r=new Error("no such key");s(r)}).then(function(t){return u=n._keys[e],o=t,n.del(e)}).then(function(e){return n.set(t,o,r)}).then(function(e){n._keys[t]=u,i.resolve("OK"),r(null,"OK")},s)}()}catch(s){reject(s)}return i},x.rename=function(e,t){var n=this,r=arguments.length<=2||void 0===arguments[2]?j:arguments[2],i=new o.Promise(j);i.then(function(r){n.emit("rename",e,t),k&&clearTimeout(k),k=setTimeout(n.save.bind(n),5e3)});var s=function(e){i.reject(e),r(e)};return e==t?s(new Error("The key is equal to the new key.")):this.renamenx.apply(this,arguments).then(i.resolve.bind(i),i.reject.bind(i)),i},x.keys=function(e){for(var t=arguments.length<=1||void 0===arguments[1]?j:arguments[1],n=new o.Promise,r=Object.keys(this._keys),i=new RegExp(e.replace("?","(.)").replace("*","(.*)")),s=[],u=0;u<r.length;u++)r[u].match(i)&&s.push(r[u]);return n.resolve(s),t(null,s),n},x.randomkey=function(){var e=arguments.length<=0||void 0===arguments[0]?j:arguments[0],t=new o.Promise(j),n=Object.keys(this._keys),r=Math.round(Math.random()*(n.length-1)),i=n[r];return t.resolve(i),e(null,i),t},x.type=function(e){var t=arguments.length<=1||void 0===arguments[1]?j:arguments[1],n=new o.Promise(j);return this._keys.hasOwnProperty(e)?(n.resolve(P[this._keys[e]]),t(null,t)):(n.resolve(null),t(null,null)),n},x.empty=function(){var e=this,t=arguments.length<=0||void 0===arguments[0]?j:arguments[0],n=new o.Promise,r=Object.keys(this._keys),i=0;n.then(function(t){e.emit("empty",t),k&&clearTimeout(k),k=setTimeout(e.save.bind(e),5e3)});var s=function u(s){s?e.del(s,function(e){e||i++,u(r.shift())}):(n.resolve(i),t(null,i))};return s(r.shift()),n},x.save=function(){var e=this,t=arguments.length<=0||void 0===arguments[0]?j:arguments[0],n=new o.Promise;return n.then(function(t){var n=i(t,2),r=n[0],s=n[1];e.emit("save",r,s)}),this.set("min_keys",JSON.stringify(this._keys)).then(function(t){return e.dump()}).then(function(e){var r=i(e,2),s=r[0],u=r[1];n.resolve([s,u]),t(s,u)},function(e){n.reject(e),t(e)}),n},x.dump=function(){var e=this,t=arguments.length<=0||void 0===arguments[0]?j:arguments[0],n=null,r=new o.Promise,i={};return this.keys("*",function(s,u){return s?(r.reject(s),t(s)):void(n=function(s){if(s)e.get(s).then(function(e){i[s]=e,n(u.shift())},function(e){r.reject(e),t(e)});else{var o=JSON.stringify(i);r.resolve([i,o]),t(null,i,o)}})(u.shift())}),r},x.restore=function(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?j:arguments[1],r=new o.Promise;r.then(function(e){t.save(function(e){t.emit("restore")})});var i=Object.keys(e),s=function(e){t.exists("min_keys").then(function(e){return e?t.get("min_keys"):(r.resolve(),void n())}).then(function(e){_=JSON.parse(e),r.resolve(),n()})["catch"](function(e){r.rejeect(e),n(e)})},u=function a(u){u?t.set(u,e[u]).then(function(e){a(i.shift())},function(e){r.reject(e),n(e)}):s()};return u(i.shift()),r};var O={};x.watch=function(e,t,n){var r=this;"undefined"==typeof n&&t.apply&&(n=t,t="set");var i=Math.random().toString(32).substr(2);return O[e]||(O[e]={}),O[e][i]=function(t){for(var i,s=arguments.length,u=Array(s>1?s-1:0),o=1;s>o;o++)u[o-1]=arguments[o];t===e&&(i=n).call.apply(i,[r].concat(u))},O[e][i].command=t,this.on(t,O[e][i]),i},x.unwatch=function(e,t,n){"undefined"==typeof n&&t&&(n=t,t="set"),this.removeListener(t,O[e][n])},x.unwatchForKey=function(e){var t=O[e];for(var n in t){var r=t[n];this.removeListener(r.command,r)}},u["default"].extend(x,f["default"]),u["default"].extend(x,v["default"]),u["default"].extend(x,g["default"]),u["default"].extend(x,p["default"]),u["default"].extend(x,w["default"]),u["default"].extend(x,c["default"]);var S=function(e,t){if(e||!t)return void(x._keys={});try{x._keys=JSON.parse(keys)}catch(e){x._keys={}}};if(x.store.async)x.store.get("min-min_keys",S);else try{var E=x.store.get("min-min_keys");S(null,E)}catch(A){S(A)}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),o=r(u),a=n(2),c=o["default"].noop,l={};t["default"]=l;var f=function(){function e(t){var n=this;i(this,e),this.queue=[],this.last=null,this.state=0,this.min=t;for(var r=Object.getOwnPropertyNames(t),s=0;s<r.length;s++){var u=r[s];"function"==typeof t[u]&&!function(e){n[e]=function(){for(var t=arguments.length,r=Array(t),i=0;t>i;i++)r[i]=arguments[i];return n.queue.push({method:e,args:r}),n}}(u)}}return s(e,[{key:"exec",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]?c:arguments[0],n=new a.Promise,r=[],i=function s(i){i?e.min[i.method].apply(e.min,i.args).then(function(){for(var t=arguments.length,n=Array(t),i=0;t>i;i++)n[i]=arguments[i];n.length>1?r.push(n):r.push(n[0]),s(e.queue.shift())})["catch"](function(e){n.reject(e),t(e,r)}):(n.resolve(r),t(null,r))};return i(this.queue.shift()),n}}]),e}();l.multi=function(){return new f(this)};var h=function(){function e(t,n){var r=this,s=arguments.length<=2||void 0===arguments[2]?c:arguments[2];i(this,e),this.min=n,this.callback=s,this.result=[],this.keys={},this.promise=new a.Promise(c),this.sortFn=function(e,t){return o["default"].isNumber(e)&&o["default"].isNumber(t)?e-t:JSON.stringify(e)>JSON.stringify(t)};var u=function(e){r.min.exists(t).then(function(e){return e?r.min.get(t):new Error("no such key")}).then(function(e){var t=new a.Promise(c);switch(!0){case Array.isArray(e):t.resolve(e);break;case e.ms&&Array.isArray(e.ms):t.resolve(e.ms);break;default:return new Error("content type wrong")}return t}).then(function(e){r.result=e.sort(r.sortFn),r.result.forEach(function(e){r.keys[e]=e}),r.promise.resolve(r.result),r.callback(null,r.result)})["catch"](function(e){r.promise.reject(e),r.callback(e)})},l=function f(e){var t=e.shift();t?(r[t]=function(){for(var e=arguments.length,n=Array(e),i=0;e>i;i++)n[i]=arguments[i];return r.promise[t].apply(r.promise,n)},f(e)):u()};l(["then","done"])}return s(e,[{key:"by",value:function(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?c:arguments[1],r={},i=[],s=null;if(e.indexOf("->")>0){var u=e.indexOf("->");s=e.substr(u+2),e=e.substr(0,e.length-u)}return this.min.keys(e).then(function(n){for(var s=new RegExp(e.replace("?","(.)").replace("*","(.*)")),u=0;u<n.length;u++){var o=s.exec(n[u])[1];t.result.indexOf(o)>=0&&(r[n[u]]=o)}return i=Object.keys(r),t.min.mget(i.slice())}).then(function(e){for(var s={},u=0;u<e.length;u++)s[JSON.stringify(e[u])]=i[u];e.sort(t.sortFn);var o=e.map(function(e){return s[JSON.stringify(e)]}).map(function(e){return r[e]});t.result=o,t.promise.resolve(o),n(null,o)})["catch"](function(e){t.promise.reject(e),n(e),t.callback(e)}),this}},{key:"asc",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]?c:arguments[0];this.sortFn=function(e,t){return o["default"].isNumber(e)&&o["default"].isNumber(t)?e-t:JSON.stringify(e)>JSON.stringify(t);
	};var n=function(n){e.result=n.sort(e.sortFn),e.promise.resolve(e.result),t(null,e.result)};return this.promise.ended?n(this.result):this.promise.once("resolve",n),this}},{key:"desc",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]?c:arguments[0];this.sortFn=function(e,t){return o["default"].isNumber(e)&&o["default"].isNumber(t)?t-e:JSON.stringify(e)<JSON.stringify(t)};var n=function(n){e.result=n.sort(e.sortFn),e.promise.resolve(e.result),t(null,e.result)};return this.promise.ended?n(this.result):this.promise.once("resolve",n),this}},{key:"get",value:function(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?c:arguments[1],r=function(r){var i=[],s=function u(r){var s=r.shift();if(o["default"].isUndefined(s))t.result=i,t.promise.resolve(i),n(null,i);else if(Array.isArray(s)){var a=t.keys[s[0]];t.min.get(e.replace("*",a)).then(function(e){s.push(e),i.push(s),u(r)},function(e){t.promise.reject(e),n(e)})}else(s.substr||o["default"].isNumber(s))&&!function(){var a=t.keys[s];t.min.get(e.replace("*",a)).then(function(e){i.push([e]),e.substr||o["default"].isNumber(e)?t.keys[e]=a:t.keys[JSON.stringify(e)]=a,u(r)},function(e){t.promise.reject(e),n(e)})}()};s(r.slice())};return this.promise.ended?r(this.result):this.promise.once("resolve",r),this}},{key:"hget",value:function(e,t){var n=this,r=arguments.length<=2||void 0===arguments[2]?c:arguments[2],i=function(i){var s=[],u=function a(i){var u=i.shift();if(o["default"].isUndefined(u))n.result=s,n.promise.resolve(s),r(null,s);else if(Array.isArray(u)){var c=n.keys[u[0]];n.min.hget(e.replace("*",c),t).then(function(e){u.push(e),s.push(u),a(i)},function(e){n.promise.reject(e),r(e)})}else(u.substr||o["default"].isNumber(u))&&!function(){var t=n.keys[u];n.min.hget(e.replace("*",t)).then(function(e){s.push([e]),e.substr||o["default"].isNumber(e)?n.keys[e]=t:n.keys[JSON.stringify(e)]=t,a(i)},function(e){n.promise.reject(e),r(e)})}()};u(i.slice())};return this.promise.ended?i(this.result):this.promise.once("resolve",i),this}},{key:"limit",value:function(e,t){var n=this,r=arguments.length<=2||void 0===arguments[2]?c:arguments[2],i=function(i){n.result=i.splice(e,t),n.promise.resolve(n.result),r(null,n.result)};return this.promise.ended?i(this.result):this.promise.once("resolve",i),this}},{key:"flatten",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]?c:arguments[0];if(this.promise.ended){for(var n=[],r=0;r<this.result.length;r++)for(var i=0;i<this.result[r].length;i++)n.push(this.result[r][i]);this.result=n,this.promise.resolve(n),t(null,n)}else this.promise.once("resolve",function(n){for(var r=[],i=0;i<n.length;i++)for(var s=0;s<n[i].length;s++)r.push(n[i][s]);e.result=r,e.promise.resolve(r),t(null,r)});return this}},{key:"store",value:function(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?c:arguments[1];return this.promise.ended?this.min.set(e,this.result).then(function(e){t.promise.resolve(t.result),n(null,t.result)},function(e){t.promise.reject(e),n(e)}):this.promise.once("resolve",function(r){t.min.set(e,r).then(function(e){t.promise.resolve(r),n(null,r)},function(e){t.promise.reject(e),n(e)})}),this}}]),e}();l.sort=function(e){var t=arguments.length<=1||void 0===arguments[1]?c:arguments[1];return new h(e,void 0,t)};var v=function(){function e(t,n,r,s){i(this,e),n=n||"*",this.cursor=t||0,this.pattern=new RegExp(n.replace("*","(.*)")),this.limit=r>-1?r:10,this.end=this.cursor,this.parent=s}return s(e,[{key:"scan",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]?c:arguments[0],n=[];return this.parent.get("min_keys").then(function(r){r=JSON.parse(r);var i=Object.keys(r),s=function u(r){var s=i[r];if(s&&e.pattern.test(s)&&"min_keys"!==s){if(n.push(s),++e.end-e.cursor>=e.limit)return t(null,n,e.end)}else if(!s)return e.end=0,t(null,n,e.end);return u(++r)};s(e.cursor)},function(e){t(e)}),this}},{key:"match",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?c:arguments[1];return this.pattern=new RegExp(e.replace("*","(.*)")),this.end=this.cursor,this.scan(t)}},{key:"count",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?c:arguments[1];return this.limit=e,this.end=this.cursor,this.scan(t)}}]),e}();l.scan=function(e){var t=arguments.length<=1||void 0===arguments[1]?c:arguments[1],n=new v(e,null,-1,void 0);return n.scan(t),n}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),s=r(i),u=n(2),o=s["default"].noop,a={};t["default"]=a;var c=null;a.set=function(e,t,n){var r=this,i=new u.Promise;i.then(function(n){r.emit("set",e,t),c&&clearTimeout(c),c=setTimeout(r.save.bind(r),1e3)});var o=this.store;n=n||s["default"].noop;var a="min-"+e;if(o.async){var l=function(s){var u=JSON.stringify(t);o.set(a,u,function(s){return s?(i.reject(s),n(s)):(r._keys[e]=0,i.resolve(e),void n(null,e,t))})};o.ready?l():o.on("ready",l)}else{var f=JSON.stringify(t);o.set(a,f),this._keys[e]=0,i.resolve(e),n(null,e,t)}return i},a.setnx=function(e,t){var n=this,r=arguments.length<=2||void 0===arguments[2]?o:arguments[2],i=new u.Promise;return this.exists(e,function(s,u){return s&&(r(s),i.reject(s)),u?i.reject(new Error("The key is exists.")):void n.set(e,t,r).then(function(e){r(null,e),i.resolve(e)},function(e){r(e),i.reject(e)})}),i},a.setex=function(e,t,n){var r=this,i=arguments.length<=3||void 0===arguments[3]?o:arguments[3],s=new u.Promise,a=function(t){r.del(e,o)};return this.set(e,n,function(e,n){setTimeout(a,1e3*t),i(e,n)}).then(function(e){setTimeout(a,1e3*t),s.resolve(e),i(null,e)})["catch"](function(e){s.reject(e),i(e)}),s},a.psetex=function(e,t,n){var r=this,i=arguments.length<=3||void 0===arguments[3]?o:arguments[3],a=new u.Promise,c=function(t){r.del(e,s["default"].noop)};return this.set(e,n,function(e,n){setTimeout(c,t),i(e,n)}).then(function(e){setTimeout(c,t),a.resolve(e),i(null,e)})["catch"](a.reject.bind(a)),a},a.mset=function(e){function t(){l.length>0?(r(l),i.reject(l)):(r(null,c),i.resolve(c))}var n=this,r=arguments.length<=1||void 0===arguments[1]?o:arguments[1],i=new u.Promise,s=Object.keys(e),a=0,c=[],l=[],f=function h(r,i){delete s[i],n.set(r,e[r]).then(function(e){c.push(e),a++,s[a]?h(s[a],a):t()},function(e){return l.push(e),a++,s[a]?h(s[a],a):t()})};return f(s[a],a),i},a.msetnx=function(e){function t(){return l.length?(r(l),i.reject(l)):(r(null,c),void i.resolve(c))}var n=this,r=arguments.length<=1||void 0===arguments[1]?o:arguments[1],i=new u.Promise,s=Object.keys(e),a=0,c=[],l=[],f=function h(r,i){delete s[i],n.setnx(r,e[r]).then(function(e){c.push(e),a++,s[a]?h(s[a],a):t()},function(e){l.push(e),t()})};return f(s[a],a),i},a.append=function(e,t){var n=this,r=arguments.length<=2||void 0===arguments[2]?o:arguments[2],i=new u.Promise;return this.exists(e).then(function(t){if(t)return n.get(e);var r=new u.Promise;return r.resolve(""),r}).then(function(r){return n.set(e,r+t)}).then(function(t){return n.strlen(e)}).then(function(e){i.resolve(e),r(null,e)})["catch"](function(e){i.reject(e),r(e)}),i},a.get=function(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?o:arguments[1],r=new u.Promise;r.then(function(n){return t.emit("get",e,n)});var i=this.store,s="min-"+e;if(i.async){var a=function(e){i.get(s,function(e,t){if(e){var i=new Error("no such key");return r.reject(i),n(i)}if(t)try{var s=JSON.parse(t);r.resolve(s),n(null,s)}catch(e){r.reject(e),n(e)}else{var u=new Error("no such key");r.reject(u),n(u)}})};i.ready?a():i.on("ready",a)}else try{var c=this.store.get(s);if(c)try{var l=JSON.parse(c);r.resolve(l),n(null,l)}catch(f){r.reject(f),n(f)}else{var f=new Error("no such key");r.reject(f),n(f)}}catch(f){r.reject(f),n(f)}return r},a.getrange=function(e,t,n){var r=this,i=arguments.length<=3||void 0===arguments[3]?o:arguments[3],s=new u.Promise;s.then(function(i){return r.emit("getrange",e,t,n,i)});var a=n-t+1;return this.get(e).then(function(e){var n=e.substr(t,a);s.resolve(n),i(null,n)},function(e){s.reject(e),i(e)}),s},a.mget=function(e){for(var t=arguments.length<=1||void 0===arguments[1]?o:arguments[1],n=new u.Promise,r=this.multi(),i=0;i<e.length;i++)r.get(e[i]);return r.exec(function(e,r){return e?(t(e),n.reject(e)):(t(e),void n.resolve(r))}),n},a.getset=function(e,t){var n=this,r=arguments.length<=2||void 0===arguments[2]?o:arguments[2],i=new u.Promise;i.then(function(r){return n.emit("getset",e,t,r)});var s=null;return this.get(e).then(function(r){return s=r,n.set(e,t)}).then(function(e){i.resolve(s),r(null,s)},function(e){i.reject(e),r(e)}),i},a.strlen=function(e){var t=arguments.length<=1||void 0===arguments[1]?o:arguments[1],n=new u.Promise;return this.get(e).then(function(e){if("string"==typeof e){var r=e.length;n.resolve(r),t(null,r)}else{var i=new TypeError;n.reject(i),t(i)}})["catch"](function(e){n.reject(e),t(e)}),n},a.incr=function(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?o:arguments[1],r=new u.Promise;return r.then(function(n){return t.emit("incr",e,n)}),this.exists(e).then(function(n){if(n)return t.get(e);var r=new u.Promise;return r.resolve(0),r}).then(function(i){return isNaN(parseInt(i))?(r.reject("value wrong"),n("value wrong")):(i=parseInt(i),t.set(e,++i))}).then(function(e){return t.get(e)}).then(function(t){r.resolve(t),n(null,t,e)})["catch"](function(e){r.reject(e),n(e)}),r},a.incrby=function(e,t){var n=this,r=arguments.length<=2||void 0===arguments[2]?o:arguments[2],i=new u.Promise;return i.then(function(r){return n.emit("incrby",e,t,r)}),this.exists(e).then(function(t){if(t)return n.get(e);var r=new u.Promise;return r.resolve(0),r}).then(function(s){return isNaN(parseFloat(s))?(i.reject("value wrong"),r("value wrong")):(s=parseFloat(s),n.set(e,s+t))}).then(function(e,t){i.resolve(t),r(null,t)})["catch"](function(e){i.reject(e),r(e)}),i},a.incrbyfloat=a.incrby,a.decr=function(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?o:arguments[1],r=new u.Promise;return r.then(function(n){return t.emit("decr",e,n)}),this.exists(e).then(function(n){if(n)return t.get(e);var r=new u.Promise;return r.resolve(0),r}).then(function(i){return isNaN(parseInt(i))?(r.reject("value wrong"),n("value wrong")):(i=parseInt(i),t.set(e,--i))}).then(function(e){return t.get(e)}).then(function(t){r.resolve(t),n(null,t,e)})["catch"](function(e){r.reject(e),n(e)}),r},a.decrby=function(e,t){var n=this,r=arguments.length<=2||void 0===arguments[2]?o:arguments[2],i=new u.Promise;return i.then(function(r){return n.emit("decrby",e,t,r)}),this.exists(e).then(function(t){if(t)return n.get(e);var r=new u.Promise;return r.resolve(0),r}).then(function(s){return isNaN(parseInt(s))?(i.reject("value wrong"),r("value wrong")):(s=parseInt(s),n.set(e,s-t))}).then(function(e,t){i.resolve(t),r(null,t)})["catch"](function(e){i.reject(e),r(e)}),i}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var s=function(){function e(e,t){var n=[],r=!0,i=!1,s=void 0;try{for(var u,o=e[Symbol.iterator]();!(r=(u=o.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(a){i=!0,s=a}finally{try{!r&&o["return"]&&o["return"]()}finally{if(i)throw s}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),o=r(u),a=n(2),c=o["default"].noop,l={};t["default"]=l,l.sadd=function(e){for(var t=this,n=arguments.length,r=Array(n>1?n-1:0),i=1;n>i;i++)r[i-1]=arguments[i];var s=new a.Promise(c);s.then(function(n){return t.emit("sadd",e,n)});var u=0,l=c;return r[r.length-1]instanceof Function&&(l=r.pop()),this.exists(e).then(function(n){if(n)return t.get(e);var i=o["default"].arrayUnique(r);return t.set(e,i)}).then(function(){if(Array.isArray(arguments[0])){var n=arguments[0],i=!0,o=!1,a=void 0;try{for(var c,f=r[Symbol.iterator]();!(i=(c=f.next()).done);i=!0){var h=c.value;n.indexOf(h)>=0||(n.push(h),u++)}}catch(v){o=!0,a=v}finally{try{!i&&f["return"]&&f["return"]()}finally{if(o)throw a}}return t.set(e,n)}"string"==typeof arguments[0]&&(u+=r.length,t._keys[e]=3,s.resolve(u),l(null,u))}).then(function(n){t._keys[e]=3,s.resolve(u),l(null,u)})["catch"](function(e){s.reject(e),l(e)}),s},l.srem=function(e){for(var t=this,n=arguments.length,r=Array(n>1?n-1:0),i=1;n>i;i++)r[i-1]=arguments[i];var s=new a.Promise(c),u=c;s.then(function(n){return t.emit("srem",e,r,n)});var o=0;return r[r.length-1]instanceof Function&&(u=r.pop()),this.exists(e).then(function(n){if(n)return t.get(e);throw new Error("no such key")}).then(function(n){var i=!0,s=!1,u=void 0;try{for(var a,c=r[Symbol.iterator]();!(i=(a=c.next()).done);i=!0){var l=a.value,f=n.indexOf(l);f>=0&&(n.splice(f,1),o++)}}catch(h){s=!0,u=h}finally{try{!i&&c["return"]&&c["return"]()}finally{if(s)throw u}}return t.set(e,n)}).then(function(n){t._keys[e]=3,s.resolve(o),u(null,o)})["catch"](function(e){s.reject(e),u(e)}),s},l.smembers=function(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?c:arguments[1],r=new a.Promise(c);return this.exists(e).then(function(n){if(n)return t.get(e);throw new Error("no such key")}).then(function(e){r.resolve(e),n(null,e)})["catch"](function(e){r.reject(e),n(e)}),r},l.sismember=function(e,t){var n=this,r=arguments.length<=2||void 0===arguments[2]?c:arguments[2],i=new a.Promise(c);return this.exists(e).then(function(t){if(t)return n.get(e);throw new Error("no such key")}).then(function(e){var n=e.indexOf(t)>=0?!0:!1;i.resolve(n),r(null,n)})["catch"](function(e){i.reject(e),r(e)}),i},l.scard=function(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?c:arguments[1],r=new a.Promise(c);return this.exists(e).then(function(n){if(n)return t.get(e);throw new Error("no such key")}).then(function(e){var t=e.length;r.resolve(t),n(null,t)})["catch"](function(e){r.reject(e),n(e)}),r},l.smove=function(e,t,n){var r=this,i=arguments.length<=3||void 0===arguments[3]?c:arguments[3],s=new a.Promise(c);return s.then(function(i){return r.emit("smove",e,t,n,i)}),this.exists(e).then(function(t){if(t)return r.sismember(e,n);throw new Error("no such key")}).then(function(t){if(t)return r.srem(e,n);throw new Error("no such member")}).then(function(){return r.sadd(t,n)}).then(function(e){r._keys[t]=3,s.resolve(1),i(null,1)})["catch"](function(e){s.reject(e),i(e)}),s},l.srandmember=function(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?c:arguments[1],r=new a.Promise(c);return this.exists(e).then(function(i){return i?t.get(e):(r.resolve(null),void n(null,null))}).then(function(e){var t=Math.floor(Math.random()*e.length)||0,i=e[t];r.resolve(i),n(null,i)})["catch"](function(e){r.reject(e),n(e)}),r},l.spop=function(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?c:arguments[1],r=new a.Promise(c);r.then(function(n){return t.emit("spop",e,n)});var i=null;return this.exists(e).then(function(i){return i?t.srandmember(e):(r.resolve(null),void n(null,null))}).then(function(n){return i=n,t.srem(e,i)}).then(function(e){r.resolve(i),n(null,i)})["catch"](function(e){r.reject(e),n(e)}),r},l.sunion=function(){for(var e=this,t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];var i=new a.Promise(c),s=c;n[n.length-1]instanceof Function&&(s=n.pop());var u=[],l=function f(t){var r=n[t];r?e.exists(r).then(function(n){return n?e.get(r):void f(++t)}).then(function(e){Array.isArray(e)&&(u=u.concat(e)),f(++t)},function(e){return i.reject(e),s(e)}):(u=o["default"].arrayUnique(u),i.resolve(u),s(null,u))};return l(0),i},l.sunionstore=function(e){for(var t=this,n=arguments.length,r=Array(n>1?n-1:0),u=1;n>u;u++)r[u-1]=arguments[u];var o=new a.Promise(c),l=c;o.then(function(n){var i=s(n,2),u=i[0],o=i[1];return t.emit("sunionstore",e,r,u,o)}),r[r.length-1]instanceof Function&&(l=r.pop());var f=null;return this.sunion.apply(this,r).then(function(n){return f=n,t.del(e)}).then(function(){return t.sadd.apply(t,[e].concat(i(f)))}).then(function(e){o.resolve([e,f]),l(null,e,f)})["catch"](function(e){o.reject(e),l(e)}),o},l.sinter=function(){for(var e=this,t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];var i=new a.Promise(c),s=c;n[n.length-1]instanceof Function&&(s=n.pop());var u=[],l=function f(t){var r=n[t];if(r)e.exists(r).then(function(n){return n?e.get(r):void f(++t)}).then(function(e){Array.isArray(e)&&u.push(e),f(++t)},function(e){return i.reject(e),s(e)});else{var a=o["default"].arrayInter.apply(o["default"],u);i.resolve(a),s(null,a)}};return l(0),i},l.sinterstore=function(e){for(var t=this,n=arguments.length,r=Array(n>1?n-1:0),u=1;n>u;u++)r[u-1]=arguments[u];var o=new a.Promise(c),l=c;r[r.length-1]instanceof Function&&(l=r.pop()),o.then(function(n){var i=s(n,2),u=i[0],o=i[1];return t.emit("sinterstore",e,r,u,o)});var f=null;return this.sinter.apply(this,r).then(function(n){return f=n,t.del(e)}).then(function(){return t.sadd.apply(t,[e].concat(i(f)))}).then(function(e){o.resolve([f.length,f]),l(null,f.length,f)})["catch"](function(e){o.reject(e),l(e)}),o},l.sdiff=function(){for(var e=this,t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];var i=new a.Promise(c),s=c;n[n.length-1]instanceof Function&&(s=n.pop());var u=[],l=function f(t){var r=n[t];if(r)e.exists(r).then(function(n){return n?e.get(r):void f(++t)}).then(function(e){Array.isArray(e)&&u.push(e),f(++t)})["catch"](function(e){return i.reject(e),s(e)});else{var a=o["default"].arrayDiff.apply(o["default"],u);i.resolve(a),s(null,a)}};return l(0),i},l.sdiffstore=function(e){for(var t=this,n=arguments.length,r=Array(n>1?n-1:0),u=1;n>u;u++)r[u-1]=arguments[u];var o=new a.Promise(c),l=c;r[r.length-1]instanceof Function&&(l=r.pop()),o.then(function(n){var i=s(n,2),u=i[0],o=i[1];return t.emit("sdiffstore",e,r,u,o)});var f=null;return this.sdiff.apply(this,r).then(function(n){return f=n,t.del(e)}).then(function(n){return t.sadd.apply(t,[e].concat(i(f)))}).then(function(e){o.resolve([e,f]),l(null,e,f)})["catch"](function(e){o.reject(e),l(e)}),o}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.memStore=function(){function e(){n(this,e)}return r(e,[{key:"get",value:function(e){return sessionStorage?sessionStorage.getItem(e):!1}},{key:"set",value:function(e,t){return sessionStorage?sessionStorage.setItem(e,t):!1}},{key:"remove",value:function(e){return sessionStorage?sessionStorage.removeItem(e):!1}}]),e}(),t.localStore=function(){function e(){n(this,e)}return r(e,[{key:"get",value:function(e){return localStorage?localStorage.getItem(e):!1}},{key:"set",value:function(e,t){return localStorage?localStorage.setItem(e,t):!1}},{key:"remove",value:function(e){return localStorage?localStorage.removeItem(e):!1}}]),e}()},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),u=r(s),o=n(2),a=u["default"].noop,c={};t["default"]=c,c.zadd=function(e,t,n){var r=this,s=arguments.length<=3||void 0===arguments[3]?a:arguments[3],u=new o.Promise(a);return u.then(function(i){return r.emit("zadd",e,t,n,i)}),this.exists(e).then(function(i){if(i)return r.get(e);var s={};return s[t]=[0],r.set(e,{ms:[n],hsm:{0:t},shm:s})}).then(function(o){if("string"==typeof o)r._keys[e]=4,u.resolve(1,1),s(null,1,1);else if("object"===("undefined"==typeof o?"undefined":i(o))){var a=o;if(a.ms.indexOf(n)>=0){var c=a.ms.length;return u.resolve(0,c),s(null,0,c)}var l=a.ms.length;return a.ms.push(n),a.hsm[l]=t,Array.isArray(a.shm[t])?a.shm[t].push(l):a.shm[t]=[l],r.set(e,a)}}).then(function(){return r.get(e)}).then(function(t){r._keys[e]=4;var n=t.ms.length;u.resolve(1,n),s(null,1,n)})["catch"](function(e){u.reject(e),s(e)}),u},c.zcard=function(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?a:arguments[1],r=new o.Promise(a);return this.exists(e).then(function(i){if(i)return t.get(e);var s=new Error("no such key");r.reject(s),n(s)}).then(function(e){var t=e.ms.filter(Boolean).length;r.resolve(t),n(null,t)})["catch"](function(e){r.reject(e),n(e)}),r},c.zcount=function(e,t,n){var r=this,i=arguments.length<=3||void 0===arguments[3]?a:arguments[3],s=new o.Promise(a);return s.then(function(i){return r.emit("zcount",e,t,n,value,i)}),this.exists(e).then(function(t){if(t)return r.get(e);var n=new Error("no such key");s.reject(n),i(n)}).then(function(e){var r=Object.keys(e.shm).filter(function(e){return e>=t&&n>=e}).map(function(t){return e.shm[t]}),u=r.map(function(e){return e.length}).reduce(function(e,t){return e+t});s.resolve(u),i(null,u)})["catch"](function(e){s.reject(e),i(e)}),s},c.zrem=function(e){for(var t=this,n=arguments.length,r=Array(n>1?n-1:0),i=1;n>i;i++)r[i-1]=arguments[i];var s=new o.Promise(a),u=a;r[r.length-1]instanceof Function&&(u=r.pop()),s.then(function(n){return t.emit("zrem",e,r,n)});var c=0;return this.exists(e).then(function(n){if(n)return t.get(e);var r=new Error("no such key");s.reject(r),u(r)}).then(function(e){var t=new o.Promise(a),n=!0,i=!1,s=void 0;try{for(var u,l=r[Symbol.iterator]();!(n=(u=l.next()).done);n=!0){var f=u.value,h=e.ms.indexOf(f);if(h>=0){delete e.ms[h];var v=e.hsm[h];delete e.hsm[h];var m=e.shm[String(v)].indexOf(h);m>=0&&e.shm[String(v)].splice(m,1),c++}}}catch(g){i=!0,s=g}finally{try{!n&&l["return"]&&l["return"]()}finally{if(i)throw s}}return t.resolve(e),t}).then(function(n){return t.set(e,n)}).then(function(e){s.resolve(c),u(null,c)})["catch"](function(e){s.reject(e),u(null,e)}),s},c.zscore=function(e,t){var n=this,r=arguments.length<=2||void 0===arguments[2]?a:arguments[2],i=new o.Promise(a);return this.exists(e).then(function(t){if(t)return n.get(e);var s=new Error("no such key");i.reject(s),r(s)}).then(function(e){var n=e.ms.indexOf(t);if(n>=0){var s=e.hsm[n];i.resolve(s),r(null,s)}else{var u=new Error("This member does not be in the set");i.reject(u),r(u)}}),i},c.zrange=function(e,t,n){var r=this,i=arguments.length<=3||void 0===arguments[3]?a:arguments[3],s=new o.Promise(a);return this.exists(e).then(function(t){if(t)return r.get(e);var n=new Error("no such key");s.reject(n),i(n)}).then(function(e){var r=Object.keys(e.shm).map(function(e){return parseFloat(e)}).sort().filter(function(e){return e>=t&&n>=e}).map(function(t){return e.shm[t]}),u=r.map(function(t){return t.map(function(t){return e.ms[t]})}).reduce(function(e,t){return e.concat(t)});s.resolve(u),i(null,u)})["catch"](function(e){s.reject(e),i(e)}),s.withScore=function(){var t=arguments.length<=0||void 0===arguments[0]?a:arguments[0],n=new o.Promise(a);return s.then(function(i){var s=r.multi();i.forEach(function(t){return s.zscore(e,t)}),s.exec(function(e,r){if(e)return t(e),n.reject(e);var s=r.map(function(e,t){return{member:i[t],score:e}});n.resolve(s),t(null,s)})}),n},s},c.zrevrange=function(e,t,n){var r=this,i=arguments.length<=3||void 0===arguments[3]?a:arguments[3],s=new o.Promise(a);return this.exists(e).then(function(t){if(t)return r.get(e);var n=new Error("no such key");s.reject(n),i(n)}).then(function(e){var r=Object.keys(e.shm).map(function(e){return parseFloat(e)}).sort(function(e,t){return t>e}).filter(function(e){return e>=t&&n>=e}).map(function(t){return e.shm[t]}),u=r.map(function(t){return t.map(function(t){return e.ms[t]})}).reduce(function(e,t){return e.concat(t)});s.resolve(u),i(null,u)},function(e){s.reject(e),i(e)}),s.withScore=function(){var t=arguments.length<=0||void 0===arguments[0]?a:arguments[0],n=new o.Promise(a);return s.then(function(i){var s=r.multi();i.forEach(function(t){return s.zscore(e,t)}),s.exec(function(e,r){if(e)return t(e),n.reject(e);var s=r.map(function(e,t){return{member:i[t],score:e}});n.resolve(s),t(null,s)})}),n},s},c.zincrby=function(e,t,n){var r=this,i=arguments.length<=3||void 0===arguments[3]?a:arguments[3],s=new o.Promise(a);s.then(function(i){return r.emit("zincrby",e,t,n,i)});var u=null;return this.exists(e).then(function(t){return t?r.zscore(e,n):void r.zadd(e,0,n,i).then(s.resolve.bind(s),s.reject.bind(s))}).then(function(t){return r.get(e)}).then(function(i){var s=i.ms.indexOf(n),o=i.hsm[s];u=o+t;var a=i.shm[o].indexOf(s);return i.shm[o].splice(a,1),i.hsm[s]=u,i.shm[u]?i.shm[u].push(s):i.shm[u]=[s],r.set(e,i)}).then(function(e){s.resolve(u),i(null,u)})["catch"](function(e){s.reject(e),i(e)}),s},c.zdecrby=function(e,t,n){var r=this,i=arguments.length<=3||void 0===arguments[3]?a:arguments[3],s=new o.Promise(a);s.then(function(e){return r.emit("zdecrby",keys,t,n,e)});var u=null;return this.exists(e).then(function(t){if(t)return r.zscore(e,n);var u=new Error("no such key");s.reject(u),i(u)}).then(function(t){return r.get(e)}).then(function(i){var s=i.ms.indexOf(n),o=i.hsm[s];u=o-t;var a=i.shm[o].indexOf(s);return i.shm[o].splice(a,1),i.hsm[s]=u,i.shm[u]?i.shm[u].push(s):i.shm[u]=[s],r.set(e,i)}).then(function(e){s.resolve(u),i(null,u)})["catch"](function(e){s.reject(e),i(e)}),s},c.zrank=function(e,t){var n=this,r=arguments.length<=2||void 0===arguments[2]?a:arguments[2],i=new o.Promise(a);return this.exists(e).then(function(t){if(t)return n.get(e);throw new Error("no such key")}).then(function(e){var n=Object.keys(e.shm).map(function(e){return parseFloat(e)}).sort(),s=parseFloat(e.hsm[e.ms.indexOf(t)]),u=n.indexOf(s)+1;i.resolve(u),r(null,u)})["catch"](function(e){i.reject(e),r(e)}),i},c.zrevrank=function(e,t){var n=this,r=arguments.length<=2||void 0===arguments[2]?a:arguments[2],i=new o.Promise(a);return this.exists(e).then(function(t){if(t)return n.get(e);throw new Error("no such key")}).then(function(e){var n=Object.keys(e.shm).map(function(e){return parseFloat(e)}).sort(),s=parseFloat(e.hsm[e.ms.indexOf(t)]),u=n.reverse().indexOf(s)+1;i.resolve(u),r(null,u)},function(e){i.reject(e),r(e)}),i}},function(e,t,n){"use strict";n(12)()||Object.defineProperty(n(15),"Symbol",{value:n(28),configurable:!0,enumerable:!1,writable:!0})},function(e,t){"use strict";e.exports=function(){var e;if("function"!=typeof Symbol)return!1;e=Symbol("test symbol");try{String(e)}catch(t){return!1}return"symbol"==typeof Symbol.iterator?!0:"object"!=typeof Symbol.isConcatSpreadable?!1:"object"!=typeof Symbol.iterator?!1:"object"!=typeof Symbol.toPrimitive?!1:"object"!=typeof Symbol.toStringTag?!1:"object"!=typeof Symbol.unscopables?!1:!0}},function(e,t){"use strict";e.exports=function(e){return e&&("symbol"==typeof e||"Symbol"===e["@@toStringTag"])||!1}},function(e,t,n){"use strict";var r,i=n(16),s=n(23),u=n(19),o=n(25);r=e.exports=function(e,t){var n,r,u,a,c;return arguments.length<2||"string"!=typeof e?(a=t,t=e,e=null):a=arguments[2],null==e?(n=u=!0,r=!1):(n=o.call(e,"c"),r=o.call(e,"e"),u=o.call(e,"w")),c={value:t,configurable:n,enumerable:r,writable:u},a?i(s(a),c):c},r.gs=function(e,t,n){var r,a,c,l;return"string"!=typeof e?(c=n,n=t,t=e,e=null):c=arguments[3],null==t?t=void 0:u(t)?null==n?n=void 0:u(n)||(c=n,n=void 0):(c=t,t=n=void 0),null==e?(r=!0,a=!1):(r=o.call(e,"c"),a=o.call(e,"e")),l={get:t,set:n,configurable:r,enumerable:a},c?i(s(c),l):l}},function(e,t){"use strict";e.exports=new Function("return this")()},function(e,t,n){"use strict";e.exports=n(17)()?Object.assign:n(18)},function(e,t){"use strict";e.exports=function(){var e,t=Object.assign;return"function"!=typeof t?!1:(e={foo:"raz"},t(e,{bar:"dwa"},{trzy:"trzy"}),e.foo+e.bar+e.trzy==="razdwatrzy")}},function(e,t,n){"use strict";var r=n(20),i=n(24),s=Math.max;e.exports=function(e,t){var n,u,o,a=s(arguments.length,2);for(e=Object(i(e)),o=function(r){try{e[r]=t[r]}catch(i){n||(n=i)}},u=1;a>u;++u)t=arguments[u],r(t).forEach(o);if(void 0!==n)throw n;return e}},function(e,t){"use strict";e.exports=function(e){return"function"==typeof e}},function(e,t,n){"use strict";e.exports=n(21)()?Object.keys:n(22)},function(e,t){"use strict";e.exports=function(){try{return Object.keys("primitive"),!0}catch(e){return!1}}},function(e,t){"use strict";var n=Object.keys;e.exports=function(e){return n(null==e?e:Object(e))}},function(e,t){"use strict";var n=Array.prototype.forEach,r=Object.create,i=function(e,t){var n;for(n in e)t[n]=e[n]};e.exports=function(e){var t=r(null);return n.call(arguments,function(e){null!=e&&i(Object(e),t)}),t}},function(e,t){"use strict";e.exports=function(e){if(null==e)throw new TypeError("Cannot use null or undefined");return e}},function(e,t,n){"use strict";e.exports=n(26)()?String.prototype.contains:n(27)},function(e,t){"use strict";var n="razdwatrzy";e.exports=function(){return"function"!=typeof n.contains?!1:n.contains("dwa")===!0&&n.contains("foo")===!1}},function(e,t){"use strict";var n=String.prototype.indexOf;e.exports=function(e){return n.call(this,e,arguments[1])>-1}},function(e,t,n){"use strict";var r,i,s,u=n(14),o=n(29),a=Object.create,c=Object.defineProperties,l=Object.defineProperty,f=Object.prototype,h=a(null);"function"==typeof Symbol&&(r=Symbol);var v=function(){var e=a(null);return function(t){for(var n,r,i=0;e[t+(i||"")];)++i;return t+=i||"",e[t]=!0,n="@@"+t,l(f,n,u.gs(null,function(e){r||(r=!0,l(this,n,u(e)),r=!1)})),n}}();s=function(e){if(this instanceof s)throw new TypeError("TypeError: Symbol is not a constructor");return i(e)},e.exports=i=function m(e){var t;if(this instanceof m)throw new TypeError("TypeError: Symbol is not a constructor");return t=a(s.prototype),e=void 0===e?"":String(e),c(t,{__description__:u("",e),__name__:u("",v(e))})},c(i,{"for":u(function(e){return h[e]?h[e]:h[e]=i(String(e))}),keyFor:u(function(e){var t;o(e);for(t in h)if(h[t]===e)return t}),hasInstance:u("",r&&r.hasInstance||i("hasInstance")),isConcatSpreadable:u("",r&&r.isConcatSpreadable||i("isConcatSpreadable")),iterator:u("",r&&r.iterator||i("iterator")),match:u("",r&&r.match||i("match")),replace:u("",r&&r.replace||i("replace")),search:u("",r&&r.search||i("search")),species:u("",r&&r.species||i("species")),split:u("",r&&r.split||i("split")),toPrimitive:u("",r&&r.toPrimitive||i("toPrimitive")),toStringTag:u("",r&&r.toStringTag||i("toStringTag")),unscopables:u("",r&&r.unscopables||i("unscopables"))}),c(s.prototype,{constructor:u(i),toString:u("",function(){return this.__name__})}),c(i.prototype,{toString:u(function(){return"Symbol ("+o(this).__description__+")"}),valueOf:u(function(){return o(this)})}),l(i.prototype,i.toPrimitive,u("",function(){return o(this)})),l(i.prototype,i.toStringTag,u("c","Symbol")),l(s.prototype,i.toPrimitive,u("c",i.prototype[i.toPrimitive])),l(s.prototype,i.toStringTag,u("c",i.prototype[i.toStringTag]))},function(e,t,n){"use strict";var r=n(13);e.exports=function(e){if(!r(e))throw new TypeError(e+" is not a symbol");return e}}])});
	//# sourceMappingURL=min.js.map

/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// 自己封装一个工具方法把

	var store = {};
	exports.default = store;
	/**
	 * 判定key在localstore中是否存在
	 * 
	 * @param {String} key
	 * @returns {Promise}
	 */

	store.exists = function (key) {
	    var promise = new Promise(function (resolve, reject) {
	        if (!localStorage.getItem(key)) {
	            resolve(false);
	        } else {
	            // 应该还要判断服务器上的内容是否有更新，加个标志好了
	            resolve(true);
	        }
	    });
	    return promise;
	};

	/**
	 * 保存数据到localstore
	 * 
	 * @param {String} key
	 * @param {JSON} data
	 */
	store.saves = function (key, data) {
	    localStorage.removeItem(key);

	    localStorage.setItem(key, JSON.stringify(data));
	};

	/**
	 * 从localstore获取数据
	 * 
	 * @param {any} key
	 * @returns
	 */
	store.hgetall = function (key) {
	    return JSON.parse(localStorage.getItem(key));
	};

	store.search = function (key) {};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _qiniuBucket = __webpack_require__(26);

	var _qiniuBucket2 = _interopRequireDefault(_qiniuBucket);

	var _minModel = __webpack_require__(53);

	var _minModel2 = _interopRequireDefault(_minModel);

	var _min = __webpack_require__(50);

	var _min2 = _interopRequireDefault(_min);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_minModel2.default.use(_min2.default);

	var Category = _minModel2.default.extend('category', {
	    title: String,
	    name: String,
	    subtitle: String,
	    cover: String
	});

	var ready = false;

	Category.load = function () {
	    return Category.allInstances().then(function (categories) {
	        if (categories.length > 0) {
	            ready = true;
	            return categories;
	        } else {
	            return _qiniuBucket2.default.getFile('fig/categories.json?v=0002').then(function (body) {
	                return JSON.parse(body);
	            });
	        }
	    }).then(function (categories) {
	        return Promise.all(categories.map(function (category) {
	            if (!ready) {
	                return new Promise(function (resolve) {
	                    var _category = new Category(category._key, category);
	                    _category.once('ready', function () {
	                        return resolve(_category);
	                    });
	                });
	            } else {
	                return category;
	            }
	        }));
	    }).then(function (categories) {
	        return categories.sort(function (a, b) {
	            return a.getCacheData().created_at < b.getCacheData().created_at;
	        });
	    }).catch(function (error) {
	        return [];
	    });
	};

	Category.loadIfNotInit = function () {
	    if (!ready) {
	        return Category.load();
	    } else {
	        return Promise.resolve();
	    }
	};

	exports.default = Category;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Model=t()}(this,function(){"use strict";function e(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/^\-/,"")}function t(e){return e=e.replace(/\-(\w{1})/g,function(e){return e[1].toUpperCase()}),e.replace(/^(\w{1})/,function(e){return e.toUpperCase()})}function r(e){return Ee.has(e)}function n(e){return Ee.has(e)?Ee.get(e):null}function o(e){if(Array.isArray(e))return Array;if(e instanceof Date)return Date;if(e instanceof RegExp)return RegExp;if(e instanceof Error)return Error;if(e instanceof(Map||Object))return Map||Object;if(e instanceof(WeakMap||Object))return WeakMap||Object;if(e instanceof(Set||Object))return Set||Object;if(e instanceof(WeakSet||Object))return WeakSet||Object;var t=!0,r=!1,n=void 0;try{for(var o,i=Ee.entries()[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var u=o.value;if(u[1]===("undefined"==typeof e?"undefined":Ae["typeof"](e)))return u[0]}}catch(a){r=!0,n=a}finally{try{!t&&i["return"]&&i["return"]()}finally{if(r)throw n}}return Object}function i(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;t>n;n++)r[n-1]=arguments[n];var o=!0,i=!1,u=void 0;try{for(var a,s=r[Symbol.iterator]();!(o=(a=s.next()).done);o=!0){var c=a.value,f=Object.keys(c),l=!0,h=!1,y=void 0;try{for(var p,v=f[Symbol.iterator]();!(l=(p=v.next()).done);l=!0){var d=p.value;c.hasOwnProperty(d)&&(e[d]=c[d])}}catch(m){h=!0,y=m}finally{try{!l&&v["return"]&&v["return"]()}finally{if(h)throw y}}}}catch(m){i=!0,u=m}finally{try{!o&&s["return"]&&s["return"]()}finally{if(i)throw u}}return e}function u(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function a(e){return"function"==typeof e}function s(e){return"number"==typeof e}function c(e){return"object"===("undefined"==typeof e?"undefined":Ae["typeof"](e))&&null!==e}function f(e){return void 0===e}function l(){this.__data__=[]}function h(e,t){return e===t||e!==e&&t!==t}function y(e,t){for(var r=e.length;r--;)if(h(e[r][0],t))return r;return-1}function p(e){var t=this.__data__,r=y(t,e);if(0>r)return!1;var n=t.length-1;return r==n?t.pop():Te.call(t,r,1),!0}function v(e){var t=this.__data__,r=y(t,e);return 0>r?void 0:t[r][1]}function d(e){return y(this.__data__,e)>-1}function m(e,t){var r=this.__data__,n=y(r,e);return 0>n?r.push([e,t]):r[n][1]=t,this}function _(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function b(){this.__data__=new _}function g(e){return this.__data__["delete"](e)}function w(e){return this.__data__.get(e)}function j(e){return this.__data__.has(e)}function k(e){var t="undefined"==typeof e?"undefined":Ae["typeof"](e);return!!e&&("object"==t||"function"==t)}function x(e){var t=k(e)?De.call(e):"";return t==qe||t==Re}function O(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(r){}return t}function C(e){if(null!=e){try{return Ue.call(e)}catch(t){}try{return e+""}catch(t){}}return""}function P(e){if(!k(e))return!1;var t=x(e)||O(e)?Ve:Be;return t.test(C(e))}function S(e,t){var r=e[t];return P(r)?r:void 0}function A(){this.__data__=Ke?Ke(null):{}}function E(e){return this.has(e)&&delete this.__data__[e]}function M(e){var t=this.__data__;if(Ke){var r=t[e];return r===ze?void 0:r}return Ge.call(t,e)?t[e]:void 0}function L(e){var t=this.__data__;return Ke?void 0!==t[e]:Ze.call(t,e)}function T(e,t){var r=this.__data__;return r[e]=Ke&&void 0===t?He:t,this}function q(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function R(e){return e&&e.Object===Object?e:null}function $(){this.__data__={hash:new q,map:new(ut||_),string:new q}}function D(e){var t="undefined"==typeof e?"undefined":Ae["typeof"](e);return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}function U(e,t){var r=e.__data__;return D(t)?r["string"==typeof t?"string":"hash"]:r.map}function N(e){return U(this,e)["delete"](e)}function B(e){return U(this,e).get(e)}function F(e){return U(this,e).has(e)}function I(e,t){return U(this,e).set(e,t),this}function W(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function V(e,t){var r=this.__data__;return r instanceof _&&r.__data__.length==at&&(r=this.__data__=new W(r.__data__)),r.set(e,t),this}function K(e){this.__data__=new _(e)}function z(e){return this.__data__.set(e,st),this}function J(e){return this.__data__.has(e)}function G(e){var t=-1,r=e?e.length:0;for(this.__data__=new W;++t<r;)this.add(e[t])}function Y(e,t){for(var r=-1,n=e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}function Z(e,t,r,n,o,i){var u=o&ft,a=e.length,s=t.length;if(a!=s&&!(u&&s>a))return!1;var c=i.get(e);if(c)return c==t;var f=-1,l=!0,h=o&ct?new G:void 0;for(i.set(e,t);++f<a;){var y=e[f],p=t[f];if(n)var v=u?n(p,y,f,t,e,i):n(y,p,f,e,t,i);if(void 0!==v){if(v)continue;l=!1;break}if(h){if(!Y(t,function(e,t){return h.has(t)||y!==e&&!r(y,e,n,o,i)?void 0:h.add(t)})){l=!1;break}}else if(y!==p&&!r(y,p,n,o,i)){l=!1;break}}return i["delete"](e),l}function H(e){var t=-1,r=Array(e.size);return e.forEach(function(e,n){r[++t]=[n,e]}),r}function Q(e){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r}function X(e,t,r,n,o,i,u){switch(r){case Ot:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case xt:return!(e.byteLength!=t.byteLength||!n(new ht(e),new ht(t)));case vt:case dt:return+e==+t;case mt:return e.name==t.name&&e.message==t.message;case bt:return e!=+e?t!=+t:e==+t;case gt:case jt:return e==t+"";case _t:var a=H;case wt:var s=i&pt;if(a||(a=Q),e.size!=t.size&&!s)return!1;var c=u.get(e);return c?c==t:(i|=yt,u.set(e,t),Z(a(e),a(t),n,o,i,u));case kt:if(Pt)return Pt.call(e)==Pt.call(t)}return!1}function ee(e){return St(Object(e))}function te(e,t){return Et.call(e,t)||"object"==("undefined"==typeof e?"undefined":Ae["typeof"](e))&&t in e&&null===ee(e)}function re(e){return Mt(Object(e))}function ne(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function oe(e){return function(t){return null==t?void 0:t[e]}}function ie(e){return"number"==typeof e&&e>-1&&e%1==0&&Tt>=e}function ue(e){return null!=e&&ie(Lt(e))&&!x(e)}function ae(e){return!!e&&"object"==("undefined"==typeof e?"undefined":Ae["typeof"](e))}function se(e){return ae(e)&&ue(e)}function ce(e){return se(e)&&$t.call(e,"callee")&&(!Ut.call(e,"callee")||Dt.call(e)==qt)}function fe(e){return"string"==typeof e||!Nt(e)&&ae(e)&&It.call(e)==Bt}function le(e){var t=e?e.length:void 0;return ie(t)&&(Nt(e)||fe(e)||ce(e))?ne(t,String):null}function he(e,t){return t=null==t?Wt:t,!!t&&("number"==typeof e||Vt.test(e))&&e>-1&&e%1==0&&t>e}function ye(e){var t=e&&e.constructor,r="function"==typeof t&&t.prototype||Kt;return e===r}function pe(e){var t=ye(e);if(!t&&!ue(e))return re(e);var r=le(e),n=!!r,o=r||[],i=o.length;for(var u in e)!te(e,u)||n&&("length"==u||he(u,i))||t&&"constructor"==u||o.push(u);return o}function ve(e,t,r,n,o,i){var u=o&zt,a=pe(e),s=a.length,c=pe(t),f=c.length;if(s!=f&&!u)return!1;for(var l=s;l--;){var h=a[l];if(!(u?h in t:te(t,h)))return!1}var y=i.get(e);if(y)return y==t;var p=!0;i.set(e,t);for(var v=u;++l<s;){h=a[l];var d=e[h],m=t[h];if(n)var _=u?n(m,d,h,t,e,i):n(d,m,h,e,t,i);if(!(void 0===_?d===m||r(d,m,n,o,i):_)){p=!1;break}v||(v="constructor"==h)}if(p&&!v){var b=e.constructor,g=t.constructor;b!=g&&"constructor"in e&&"constructor"in t&&!("function"==typeof b&&b instanceof b&&"function"==typeof g&&g instanceof g)&&(p=!1)}return i["delete"](e),p}function de(e){return or.call(e)}function me(e){return ae(e)&&ie(e.length)&&!!Rr[Dr.call(e)]}function _e(e,t,r,n,o,i){var u=Nt(e),a=Nt(t),s=Br,c=Br;u||(s=fr(e),s=s==Nr?Fr:s),a||(c=fr(t),c=c==Nr?Fr:c);var f=s==Fr&&!O(e),l=c==Fr&&!O(t),h=s==c;if(h&&!f)return i||(i=new K),u||me(e)?Z(e,t,r,n,o,i):X(e,t,s,r,n,o,i);if(!(o&Ur)){var y=f&&Wr.call(e,"__wrapped__"),p=l&&Wr.call(t,"__wrapped__");if(y||p){var v=y?e.value():e,d=p?t.value():t;return i||(i=new K),r(v,d,n,o,i)}}return h?(i||(i=new K),ve(e,t,r,n,o,i)):!1}function be(e,t,r,n,o){return e===t?!0:null==e||null==t||!k(e)&&!ae(t)?e!==e&&t!==t:_e(e,t,be,r,n,o)}function ge(e,t){return be(e,t)}function we(e){return"number"==typeof e||ae(e)&&zr.call(e)==Vr}function je(e){return e===!0||e===!1||ae(e)&&Yr.call(e)==Jr}function ke(e){for(var t=new Set,r=arguments.length,n=Array(r>1?r-1:0),o=1;r>o;o++)n[o-1]=arguments[o];if(0===n.length)return e;var i=!0,u=!1,a=void 0;try{for(var s,c=function(){var e=s.value;0==n.map(function(t){return t.has(e)?0:1}).reduce(function(e,t){return e+t})&&t.add(e)},f=e[Symbol.iterator]();!(i=(s=f.next()).done);i=!0)c()}catch(l){u=!0,a=l}finally{try{!i&&f["return"]&&f["return"]()}finally{if(u)throw a}}return t}function xe(e){return x(e.then)&&x(e["catch"])}function Oe(e,t){var r=Ce(),n=new u;return r.search=function(e,r){return Oe(new Promise(function(o,i){n.once("ready",function(n){t.search(e,r,n,t).then(o)["catch"](i)})}),t)},e.then(function(e){r.resolve(e),n.emit("ready",e)}),r}function Ce(){var e=null,t=null,r=new Promise(function(r,n){e=r,t=n});return r.resolve=function(){for(var t=arguments.length,n=Array(t),o=0;t>o;o++)n[o]=arguments[o];e.apply(r,n)},r.reject=function(){for(var e=arguments.length,n=Array(e),o=0;e>o;o++)n[o]=arguments[o];t.apply(r,n)},r}function Pe(e,t){on.set(e,t),on.set(n(e),t)}function Se(e,t){un.set(e,t)}var Ae={};Ae["typeof"]="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},Ae.classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Ae.createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Ae.defineProperty=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},Ae.inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},Ae.possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Ae.slicedToArray=function(){function e(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(n=(u=a.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(s){o=!0,i=s}finally{try{!n&&a["return"]&&a["return"]()}finally{if(o)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),Ae.toConsumableArray=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)};var Ee=new Map([[String,"string"],[Number,"number"],[Boolean,"boolean"],[Object,"object"],[Array,"array"],[Date,"date"],[RegExp,"regexp"],[Error,"error"]]);u.EventEmitter=u,u.prototype._events=void 0,u.prototype._maxListeners=void 0,u.defaultMaxListeners=10,u.prototype.setMaxListeners=function(e){if(!s(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},u.prototype.emit=function(e){var t,r,n,o,i,u;if(this._events||(this._events={}),"error"===e&&(!this._events.error||c(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;throw TypeError('Uncaught, unspecified "error" event.')}if(r=this._events[e],f(r))return!1;if(a(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:o=Array.prototype.slice.call(arguments,1),r.apply(this,o)}else if(c(r))for(o=Array.prototype.slice.call(arguments,1),u=r.slice(),n=u.length,i=0;n>i;i++)u[i].apply(this,o);return!0},u.prototype.addListener=function(e,t){var r;if(!a(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,a(t.listener)?t.listener:t),this._events[e]?c(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,c(this._events[e])&&!this._events[e].warned&&(r=f(this._maxListeners)?u.defaultMaxListeners:this._maxListeners,r&&r>0&&this._events[e].length>r&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},u.prototype.on=u.prototype.addListener,u.prototype.once=function(e,t){function r(){this.removeListener(e,r),n||(n=!0,t.apply(this,arguments))}if(!a(t))throw TypeError("listener must be a function");var n=!1;return r.listener=t,this.on(e,r),this},u.prototype.removeListener=function(e,t){var r,n,o,i;if(!a(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(r=this._events[e],o=r.length,n=-1,r===t||a(r.listener)&&r.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(c(r)){for(i=o;i-- >0;)if(r[i]===t||r[i].listener&&r[i].listener===t){n=i;break}if(0>n)return this;1===r.length?(r.length=0,delete this._events[e]):r.splice(n,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},u.prototype.removeAllListeners=function(e){var t,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(r=this._events[e],a(r))this.removeListener(e,r);else if(r)for(;r.length;)this.removeListener(e,r[r.length-1]);return delete this._events[e],this},u.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?a(this._events[e])?[this._events[e]]:this._events[e].slice():[]},u.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(a(t))return 1;if(t)return t.length}return 0},u.listenerCount=function(e,t){return e.listenerCount(t)};var Me=function(e){function t(){Ae.classCallCheck(this,t);var e=Ae.possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this));return e.__queue=[],e.running=!1,e}return Ae.inherits(t,e),Ae.createClass(t,[{key:"push",value:function(e,t){return this.__queue.push({task:e,callback:t}),this}},{key:"run",value:function(e){var t=this;if(e||!this.running){var r=this.__queue.shift();return r?!function(){t.running=!0;var e=r.task,n=r.callback;e().then(function(){for(var e=arguments.length,r=Array(e),o=0;e>o;o++)r[o]=arguments[o];n.apply(void 0,[null].concat(r)),t.run(t.running)})["catch"](function(e){n(e),t.run(t.running)})}():(this.running=!1,this.emit("idle")),this}}},{key:"hasNext",get:function(){return 0!==this.__queue.length}}]),t}(u),Le=Array.prototype,Te=Le.splice;_.prototype.clear=l,_.prototype["delete"]=p,_.prototype.get=v,_.prototype.has=d,_.prototype.set=m;var qe="[object Function]",Re="[object GeneratorFunction]",$e=Object.prototype,De=$e.toString,Ue=Function.prototype.toString,Ne=/[\\^$.*+?()[\]{}|]/g,Be=/^\[object .+?Constructor\]$/,Fe=Object.prototype,Ie=Function.prototype.toString,We=Fe.hasOwnProperty,Ve=RegExp("^"+Ie.call(We).replace(Ne,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ke=S(Object,"create"),ze="__lodash_hash_undefined__",Je=Object.prototype,Ge=Je.hasOwnProperty,Ye=Object.prototype,Ze=Ye.hasOwnProperty,He="__lodash_hash_undefined__";q.prototype.clear=A,q.prototype["delete"]=E,q.prototype.get=M,q.prototype.has=L,q.prototype.set=T;var Qe={"function":!0,object:!0},Xe=Qe[ false?"undefined":Ae["typeof"](exports)]&&exports&&!exports.nodeType?exports:void 0,et=Qe[ false?"undefined":Ae["typeof"](module)]&&module&&!module.nodeType?module:void 0,tt=R(Xe&&et&&"object"==("undefined"==typeof global?"undefined":Ae["typeof"](global))&&global),rt=R(Qe["undefined"==typeof self?"undefined":Ae["typeof"](self)]&&self),nt=R(Qe["undefined"==typeof window?"undefined":Ae["typeof"](window)]&&window),ot=R(Qe[Ae["typeof"](this)]&&this),it=tt||nt!==(ot&&ot.window)&&nt||rt||ot||Function("return this")(),ut=S(it,"Map");W.prototype.clear=$,W.prototype["delete"]=N,W.prototype.get=B,W.prototype.has=F,W.prototype.set=I;var at=200;K.prototype.clear=b,K.prototype["delete"]=g,K.prototype.get=w,K.prototype.has=j,K.prototype.set=V;var st="__lodash_hash_undefined__";G.prototype.add=G.prototype.push=z,G.prototype.has=J;var ct=1,ft=2,lt=it.Symbol,ht=it.Uint8Array,yt=1,pt=2,vt="[object Boolean]",dt="[object Date]",mt="[object Error]",_t="[object Map]",bt="[object Number]",gt="[object RegExp]",wt="[object Set]",jt="[object String]",kt="[object Symbol]",xt="[object ArrayBuffer]",Ot="[object DataView]",Ct=lt?lt.prototype:void 0,Pt=Ct?Ct.valueOf:void 0,St=Object.getPrototypeOf,At=Object.prototype,Et=At.hasOwnProperty,Mt=Object.keys,Lt=oe("length"),Tt=9007199254740991,qt="[object Arguments]",Rt=Object.prototype,$t=Rt.hasOwnProperty,Dt=Rt.toString,Ut=Rt.propertyIsEnumerable,Nt=Array.isArray,Bt="[object String]",Ft=Object.prototype,It=Ft.toString,Wt=9007199254740991,Vt=/^(?:0|[1-9]\d*)$/,Kt=Object.prototype,zt=2,Jt=S(it,"DataView"),Gt=S(it,"Promise"),Yt=S(it,"Set"),Zt=S(it,"WeakMap"),Ht="[object Map]",Qt="[object Object]",Xt="[object Promise]",er="[object Set]",tr="[object WeakMap]",rr="[object DataView]",nr=Object.prototype,or=nr.toString,ir=C(Jt),ur=C(ut),ar=C(Gt),sr=C(Yt),cr=C(Zt);(Jt&&de(new Jt(new ArrayBuffer(1)))!=rr||ut&&de(new ut)!=Ht||Gt&&de(Gt.resolve())!=Xt||Yt&&de(new Yt)!=er||Zt&&de(new Zt)!=tr)&&(de=function(e){var t=or.call(e),r=t==Qt?e.constructor:void 0,n=r?C(r):void 0;if(n)switch(n){case ir:return rr;case ur:return Ht;case ar:return Xt;case sr:return er;case cr:return tr}return t});var fr=de,lr="[object Arguments]",hr="[object Array]",yr="[object Boolean]",pr="[object Date]",vr="[object Error]",dr="[object Function]",mr="[object Map]",_r="[object Number]",br="[object Object]",gr="[object RegExp]",wr="[object Set]",jr="[object String]",kr="[object WeakMap]",xr="[object ArrayBuffer]",Or="[object DataView]",Cr="[object Float32Array]",Pr="[object Float64Array]",Sr="[object Int8Array]",Ar="[object Int16Array]",Er="[object Int32Array]",Mr="[object Uint8Array]",Lr="[object Uint8ClampedArray]",Tr="[object Uint16Array]",qr="[object Uint32Array]",Rr={};Rr[Cr]=Rr[Pr]=Rr[Sr]=Rr[Ar]=Rr[Er]=Rr[Mr]=Rr[Lr]=Rr[Tr]=Rr[qr]=!0,Rr[lr]=Rr[hr]=Rr[xr]=Rr[yr]=Rr[Or]=Rr[pr]=Rr[vr]=Rr[dr]=Rr[mr]=Rr[_r]=Rr[br]=Rr[gr]=Rr[wr]=Rr[jr]=Rr[kr]=!1;var $r=Object.prototype,Dr=$r.toString,Ur=2,Nr="[object Arguments]",Br="[object Array]",Fr="[object Object]",Ir=Object.prototype,Wr=Ir.hasOwnProperty,Vr="[object Number]",Kr=Object.prototype,zr=Kr.toString,Jr="[object Boolean]",Gr=Object.prototype,Yr=Gr.toString,Zr=function(e){function t(e,r,n,o){Ae.classCallCheck(this,t);var i=Ae.possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this));return i.sequence=e,i.prefix=r,i.key=n,i.__min=o,i.ready=!1,i}return Ae.inherits(t,e),Ae.createClass(t,[{key:"map",value:function(){var e=this;this.__min.exists(this.sequence).then(function(t){return t?e.__min.smembers(e.sequence):Promise.resolve([])}).then(function(t){var r=e.__min.multi();return t.forEach(function(t){return r.hget(e.prefix+":"+t,e.key)}),r.exec().then(function(e){return Promise.resolve(e.map(function(e,r){return[t[r],e]}))})}).then(function(t){return Promise.all(t.map(function(t){var r=Ae.slicedToArray(t,2),n=r[0],o=r[1],i=e.__min.multi(),u=e.indexMapper(o);if(Nt(u)){var a=u,s=!0,c=!1,f=void 0;try{for(var l,h=a[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var y=l.value;i.sadd(e.sequence+":"+e.key+":index:"+y,n)}}catch(p){c=!0,f=p}finally{try{!s&&h["return"]&&h["return"]()}finally{if(c)throw f}}return i.exec()}return xe(u)?u.then(function(t){var r=!0,o=!1,u=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var c=a.value;i.sadd(e.sequence+":"+e.key+":index:"+c,n)}}catch(f){o=!0,u=f}finally{try{!r&&s["return"]&&s["return"]()}finally{if(o)throw u}}return i.exec()}):void 0}))}).then(function(){e.ready=!0,e.emit("ready")})}},{key:"add",value:function(e,t){var r=this;return new Promise(function(e,n){var o=r.indexMapper(t);Nt(o)?e(o):xe(o)&&o.then(e)["catch"](n)}).then(function(t){var n=r.__min.multi(),o=!0,i=!1,u=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done);o=!0){var c=a.value;n.sadd(r.sequence+":"+r.key+":index:"+c,e)}}catch(f){i=!0,u=f}finally{try{!o&&s["return"]&&s["return"]()}finally{if(i)throw u}}return n.exec()})}},{key:"remove",value:function(e,t){var r=this;return new Promise(function(e,n){var o=r.indexMapper(t);if(Nt(o))e(o);else if(xe(o))return o.then(e)["catch"](n)}).then(function(t){var n=r.__min.multi(),o=!0,i=!1,u=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done);o=!0){var c=a.value;n.srem(r.sequence+":"+r.key+":index:"+c,e)}}catch(f){i=!0,u=f}finally{try{!o&&s["return"]&&s["return"]()}finally{if(i)throw u}}return n.exec()})}},{key:"reindex",value:function(e,t,r){var n=this;return this.remove(e,r).then(function(){return n.add(e,t)}).then(function(){return n.emit("updated"),Promise.resolve()})}},{key:"_search",value:function(e){var t=this,r=arguments.length<=1||void 0===arguments[1]?null:arguments[1];return new Promise(function(r,n){var o=t.indexMapper(e);Nt(o)?r(o):xe(o)&&o.then(function(e){r(e)})["catch"](n)}).then(function(e){return Promise.all(e.map(function(e){return t.__min.exists(t.sequence+":"+t.key+":index:"+e).then(function(r){return r?t.__min.smembers(t.sequence+":"+t.key+":index:"+e):Promise.resolve([])}).then(function(e){return Promise.resolve(new Set(e))})}))}).then(function(e){var n=ke.apply(void 0,Ae.toConsumableArray(e));return new Promise(function(e){r?e(r.map(function(e){return[e._key,e]})):t.__min.smembers(t.sequence).then(function(e){var r=t.__min.multi();return e.forEach(function(e){return r.hgetall(t.prefix+":"+e)}),r.exec().then(function(t){return Promise.resolve(t.map(function(t,r){return[e[r],t]}))})}).then(function(t){return e(t)})}).then(function(e){return Promise.resolve([e,n])})}).then(function(e){var t=Ae.slicedToArray(e,2),r=t[0],n=t[1];return Promise.resolve(r.filter(function(e){var t=Ae.slicedToArray(e,1),r=t[0];return n.has(r)}).map(function(e){var t=Ae.slicedToArray(e,2),r=t[0],n=t[1];return n._key=r,n}))})}},{key:"search",value:function(){return this._search.apply(this,arguments)}},{key:"indexMapper",value:function(){return[]}}]),t}(u),Hr=function(e){function t(){return Ae.classCallCheck(this,t),Ae.possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return Ae.inherits(t,e),Ae.createClass(t,[{key:"indexMapper",value:function(e){var t=new Set(e.split(/[\s,\.;\:"'!]/).filter(Boolean).map(function(e){return e.toLowerCase()}));return[].concat(Ae.toConsumableArray(t))}}]),t}(Zr),Qr=function(e){function t(){return Ae.classCallCheck(this,t),Ae.possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return Ae.inherits(t,e),Ae.createClass(t,[{key:"indexMapper",value:function(e){return[e%3,e%5,e%7]}},{key:"search",value:function(e,t){var r=this;return this._search(e,t).then(function(t){return Promise.resolve(t.filter(function(t){return t[r.key]===e}))})}}]),t}(Zr),Xr=function(e){function t(){return Ae.classCallCheck(this,t),Ae.possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return Ae.inherits(t,e),Ae.createClass(t,[{key:"indexMapper",value:function(e){return[e]}}]),t}(Zr),en=function(e){function t(){return Ae.classCallCheck(this,t),Ae.possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return Ae.inherits(t,e),Ae.createClass(t,[{key:"indexMapper",value:function(e){return Object.keys(e).map(function(t){return[t,JSON.stringify(e[t])]}).reduce(function(e,t){return e.concat(t)})}}]),t}(Zr),tn=function(e){function t(){return Ae.classCallCheck(this,t),Ae.possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return Ae.inherits(t,e),Ae.createClass(t,[{key:"indexMapper",value:function(e){return e.map(function(e){return JSON.stringify(e)})}}]),t}(Zr),rn=function(e){function t(){return Ae.classCallCheck(this,t),Ae.possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return Ae.inherits(t,e),Ae.createClass(t,[{key:"indexMapper",value:function(e){return[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCDay()]}},{key:"search",value:function(e,t){return this._search(e,t).then(function(t){return Promise.resolve(e.filter(function(t){return t.getTime()===e.getTime()}))})}}]),t}(Zr),nn=function(e){function t(){return Ae.classCallCheck(this,t),Ae.possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return Ae.inherits(t,e),Ae.createClass(t,[{key:"indexMapper",value:function(e){var t=new Set(e.message.split(/[\s,\.;\:"'!]/).filter(Boolean).map(function(e){return e.toLowerCase()}));return[].concat(Ae.toConsumableArray(t))}}]),t}(Zr),on=new Map([["string",Hr],[String,Hr],["number",Qr],[Number,Qr],["boolean",Xr],[Boolean,Xr],["object",en],[Object,en],["array",tn],[Array,tn],["date",rn],[Date,rn],["error",nn],[Error,nn]]),un=new Map,an=function(e){function t(e,r,n,o,i){Ae.classCallCheck(this,t);var u=Ae.possibleConstructorReturn(this,Object.getPrototypeOf(t).call(this));switch(u.sequence=e,u.prefix=r,u.key=n,u.type=o,u.ready=!1,u.indexer=null,!0){case un.has(e+":"+n):u.indexer=new(un.get(e+":"+n))(e,r,n,i);break;case on.has(o):u.indexer=new(on.get(o))(e,r,n,i);break;default:throw new Error("Not support for this type.")}return u.indexer.map(),u.indexer.on("ready",function(){u.ready=!0,u.emit("ready")}).on("updated",function(){return u.emit("updated")}),u}return Ae.inherits(t,e),Ae.createClass(t,[{key:"add",value:function(e,t){var r=this;if(!this.indexer)throw new ReferenceError("There not indexer available.");return this.ready?this.indexer.add(e,t):new Promise(function(n,o){r.indexer.once("ready",function(){r.indexer.add(e,t).then(n)["catch"](o)})})}},{key:"remove",value:function(e,t){var r=this;if(!this.indexer)throw new ReferenceError("There not indexer available.");return this.ready?this.indexer.remove(e,t):new Promise(function(n,o){r.indexer.once("ready",function(){r.indexer.remove(e,t).then(n)["catch"](o)})})}},{key:"reindex",value:function(e,t,r){var n=this;if(!this.indexer)throw new ReferenceError("There not indexer available.");return this.ready?this.indexer.reindex(e,t,r):new Promise(function(o,i){n.indexer.once("ready",function(){n.indexer.reindex(e,t,r).then(o)["catch"](i)})})}},{key:"search",value:function(e){var t=this,r=arguments.length<=1||void 0===arguments[1]?null:arguments[1],n=arguments[2];if(!this.indexer)throw new ReferenceError("There not indexer available.");return this.ready?Oe(this.indexer.search(e,r),n):Oe(new Promise(function(n,o){t.indexer.once("ready",function(){t.indexer.search(e,r).then(n)["catch"](o)})}),n)}}]),t}(u),sn=Symbol("prefix"),cn=Symbol("sequence"),fn=Symbol("cache"),ln=Symbol("indexers"),hn=function(n){function u(){var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0],t=arguments[1];Ae.classCallCheck(this,u);var r=Ae.possibleConstructorReturn(this,Object.getPrototypeOf(u).call(this));if(e&&t)r.key=e,r[fn]=t;else{if(t?r.key=e||Math.random().toString(32).substr(2):(t=e,r.key=Math.random().toString(32).substr(2)),r[fn]=i({},r.constructor.defaultData),r.$methods.beforeValidate){var n=r.$methods.beforeValidate.call(r,t);n&&(t=n)}var o=Object.keys(t),a=!0,s=!1,c=void 0;try{for(var f,l=o[Symbol.iterator]();!(a=(f=l.next()).done);a=!0){var h=f.value;if(!r.validate(h,t[h]))throw new TypeError('Type validate failed on column "'+h+'".')}}catch(y){s=!0,c=y}finally{try{!a&&l["return"]&&l["return"]()}finally{if(s)throw c}}r[fn]=i(r[fn],t)}var p=!0,v=!1,d=void 0;try{for(var m,_=function(){var e=m.value;r[e]=function(){for(var t,n=arguments.length,o=Array(n),i=0;n>i;i++)o[i]=arguments[i];return(t=r.constructor.$methods[e]).call.apply(t,[r].concat(o))}},b=Object.keys(r.constructor.$methods)[Symbol.iterator]();!(p=(m=b.next()).done);p=!0)_()}catch(y){v=!0,d=y}finally{try{!p&&b["return"]&&b["return"]()}finally{if(v)throw d}}return r.__queue.push(function(){return r.$methods.beforeStore&&r.$methods.beforeStore.call(r),r.__min.sadd(r.constructor.sequence,r.key).then(function(){return r.__min.hmset(r.hashKey,r[fn])}).then(function(){return Promise.all(Object.keys(r[fn]).map(function(e){return r.constructor[ln]&&r.constructor[ln].has(e)?r.constructor[ln].get(e).add(r.key,r[fn][e]):Promise.resolve()}))})},function(){r.$methods.ready&&r.$methods.ready.call(r),r.emit("ready",r)}),r.__queue.run(),r}return Ae.inherits(u,n),Ae.createClass(u,null,[{key:"use",value:function(e){this.__min=e}},{key:"setIndexer",value:function(e,t){Pe(e,t)}},{key:"setIndexerForColumn",value:function(e,t){Se(this.sequence+":"+e,t)}},{key:"extend",value:function(n,i){var a;if(n&&!i)throw new Error("Model.extend() should receive 2 arguments, but received 1.");if(!fe(n)&&!i)throw new Error("Model.extend() first argument must be a string.");var s=(a={},Ae.defineProperty(a,sn,e(n)),Ae.defineProperty(a,cn,e(n)+"s"),a),c={},f={},l={},h=!0,y=!1,p=void 0;try{for(var v,d=Object.keys(i)[Symbol.iterator]();!(h=(v=d.next()).done);h=!0){var m=v.value;!x(i[m])||r(i[m])?r(i[m])?(Nt(i[m])&&1===i[m].length&&x(i[m][0]),c[m]=i[m],f[m]=i[m]()):(c[m]=o(i[m]),f[m]=i[m]):l[m]=i[m]}}catch(_){y=!0,p=_}finally{try{!h&&d["return"]&&d["return"]()}finally{if(y)throw p}}var b=t(n),g=new Me,w=function(e){function t(){return Ae.classCallCheck(this,t),Ae.possibleConstructorReturn(this,Object.getPrototypeOf(t).apply(this,arguments))}return Ae.inherits(t,e),Ae.createClass(t,[{key:Symbol.toStringTag,get:function(){return b}},{key:"__min",get:function(){return this.constructor.__min}},{key:"__queue",get:function(){return g}}],[{key:"modelName",get:function(){return b}},{key:"prefix",get:function(){return s[sn]}},{key:"sequence",get:function(){return s[cn]}},{key:"validateData",get:function(){return c}},{key:"defaultData",get:function(){return f}},{key:"$methods",get:function(){return l}}]),t}(u);return w}},{key:"BaseIndexer",get:function(){return Zr}}]),Ae.createClass(u,[{key:"getCacheData",value:function(){var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return e?this[fn][e]:this[fn]}},{key:"get",value:function(e){var t=this;return this[fn][e]?Promise.resolve(this[fn][e]):this.__min.hget(this.hashKey,"key").then(function(r){return t[fn][e]=r,Promise.resolve(r)})}},{key:"set",value:function(e,t){var r=this;if(!this.validate(e,t))throw new TypeError("Type validate failed.");var n=this[fn][e];return this.$methods.beforeUpdate&&this.$methods.beforeUpdate.call(this,e,t,n),this[fn][e]=t,this.__min.hset(this.hashKey,e,t).then(function(){if(r.constructor[ln]&&r.constructor[ln].has(e)){var o=r.constructor[ln].get(e);return o.reindex(r.key,t,n)}return Promise.resolve()}).then(function(){r.$methods.afterUpdate&&r.$methods.afterUpdate.call(r,e,t,n),Promise.resolve([e,t])})}},{key:"reset",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];if(t)return this.set(t,this.constructor.defaultData[t]);var r=Object.keys(this.constructor.defaultData[t]);return Promise.all(r.map(function(t){return e.set(t,e.constructor.defaultData[t])}))}},{key:"remove",value:function(){var e=this;return this.$methods.beforeRemove&&this.$methods.beforeRemove.call(this),this.__min.srem(this.constructor.sequence,this.key).then(function(){
	return e.__min.del(e.hashKey)}).then(function(){return Promise.all(Object.keys(e[fn]).map(function(t){return e.constructor[ln]&&e.constructor[ln].has(t)?e.constructor[ln].get(t).remove(e.key,e[fn][t]):Promise.resolve()}))}).then(function(){return e.key=null,e[fn]=null,e.$methods.afterRemove&&e.$methods.afterRemove.call(e),Promise.resolve()})}},{key:"validate",value:function(e,t){switch(this.constructor.validateData[e]){case String:return fe(t);case Number:return we(t);case Boolean:return je(t);default:return t instanceof(this.constructor.validateData[e]||Object)}}},{key:"hashKey",get:function(){return this.constructor.prefix+":"+this.key}},{key:"$methods",get:function(){return this.constructor.$methods}}],[{key:"fetch",value:function(e){var t=this;return this.__min.sismember(this.sequence,e).then(function(r){return r?t.__min.hgetall(t.prefix+":"+e):Promise.reject(new Error("Object not found."))}).then(function(r){return Promise.resolve(new t(e,r))})}},{key:"setIndex",value:function(e){this[ln]||(this[ln]=new Map);var t=this.validateData[e],r=new an(this.sequence,this.prefix,e,t,this.__min);return this[ln].set(e,r),r}},{key:"search",value:function(e,t){var r=this,n=arguments.length<=2||void 0===arguments[2]?null:arguments[2];if(this[ln]&&this[ln].has(e)){var o=this[ln].get(e);return o.search(t,n,this).then(function(e){return e.map(function(e){return new r(e._key,e)})})}return this.__plainSearch(e,t,n).then(function(e){return e.map(function(e){return new r(e._key,e)})})}},{key:"__plainSearch",value:function(e,t){var r=this,n=arguments.length<=2||void 0===arguments[2]?null:arguments[2];return this.validateData[e]!==o(t)?Promise.reject(new TypeError("Type wrong")):Oe(new Promise(function(t,o){n?t(n.map(function(t){return[t._key,t[e]]})):r.__min.smembers(r.sequence).then(function(t){var n=r.__min.multi();return t.forEach(function(t){return n.hget(r.prefix+":"+t,e)}),n.exec().then(function(e){return Promise.resolve(e.map(function(e,r){return[t[r],e]}))})}).then(t)["catch"](o)}).then(function(n){return Promise.resolve(n.filter(function(n){var o=Ae.slicedToArray(n,2),i=(o[0],o[1]);return r.validateData[e]===String?i.includes(t):ge(i,t)}).map(function(e){var t=Ae.slicedToArray(e,2),r=t[0];t[1];return r}))}).then(function(e){var t=r.__min.multi();return e.forEach(function(e){return t.hgetall(r.prefix+":"+e)}),t.exec().then(function(t){return Promise.resolve(t.map(function(t,r){return t._key=e[r],t}))})}),this)}},{key:"dump",value:function(){var e=this;return this.__min.exists(this.sequence).then(function(t){return t?e.__min.smembers(e.sequence):Promise.resolve([])}).then(function(t){var r=e.__min.multi();return t.forEach(function(t){return r.hgetall(e.prefix+":"+t)}),r.exec().then(function(e){return Promise.resolve(e.map(function(e,r){return e._key=t[r],e}))})})}},{key:"allInstances",value:function(){var e=this;return this.dump().then(function(t){return Promise.resolve(t.map(function(t){return new e(t._key,t)}))})}}]),u}(u);return hn});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(54)(module), (function() { return this; }())))

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    attrs: {
	      "id": "landing"
	    }
	  }, [_vm._h('landing-view', {
	    attrs: {
	      "config": _vm.config
	    }
	  }), " ", " ", " ", _vm._h('LandingContent', {
	    attrs: {
	      "categories": _vm.categories
	    }
	  })])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-7a85123f", module.exports)
	  }
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(57)

	/* template */
	var __vue_template__ = __webpack_require__(64)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "F:\\Filmy\\src\\route-component\\Categories.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-aca3ec30", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-aca3ec30", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Categories.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); //
	//
	//
	//
	//
	//
	//
	//
	//

	var _Category = __webpack_require__(19);

	var _Category2 = _interopRequireDefault(_Category);

	var _Categories = __webpack_require__(52);

	var _Categories2 = _interopRequireDefault(_Categories);

	var _Album = __webpack_require__(58);

	var _Album2 = _interopRequireDefault(_Album);

	var _AlbumList = __webpack_require__(59);

	var _AlbumList2 = _interopRequireDefault(_AlbumList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'CategoryPage',
	    data: function data() {
	        return {
	            // 分类信息
	            category: {},
	            // 相册信息
	            albums: []
	        };
	    },

	    components: {
	        CategoryItem: _Category2.default,
	        AlbumsList: _AlbumList2.default
	    },
	    mounted: function mounted() {
	        this.$nextTick(function () {
	            var _this = this;

	            // 保证 this.$el 已经插入文档
	            // this.category.title = this.$route.params.category
	            Promise.all([_Categories2.default.loadIfNotInit().then(function () {
	                return _Categories2.default.search('name', _this.$route.params.name);
	            }).then(function (result) {
	                return result[0];
	            }), _Album2.default.fetchByCategory(this.$route.params.name)]).then(function (_ref) {
	                var _ref2 = _slicedToArray(_ref, 2),
	                    category = _ref2[0],
	                    album = _ref2[1];

	                _this.category = category.getCacheData();
	                _this.albums = album.map(function (n) {
	                    return n.getCacheData();
	                });
	            });
	        });
	    }
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _qiniuBucket = __webpack_require__(26);

	var _qiniuBucket2 = _interopRequireDefault(_qiniuBucket);

	var _minModel = __webpack_require__(53);

	var _minModel2 = _interopRequireDefault(_minModel);

	var _min = __webpack_require__(50);

	var _min2 = _interopRequireDefault(_min);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_minModel2.default.use(_min2.default); /**
	                                        * 相册数据Model
	                                        */

	var Album = _minModel2.default.extend('album', {
	    title: String,
	    content: String,
	    category: String,
	    created_at: Number,
	    photos: Array
	});
	var ready = false;

	exports.default = Album;

	/**
	 * 对数据进行载入
	 * 
	 * @returns 相册信息
	 */

	Album.load = function () {
	    return Album.allInstances().then(function (albums) {
	        if (albums.length > 0) {
	            ready = true;
	            return albums;
	        } else {
	            return _qiniuBucket2.default.getFile('fig/albums.json?v=0004').then(function (albums) {
	                return JSON.parse(albums);
	            });
	        }
	    }).then(function (albums) {
	        return Promise.all(albums.map(function (album) {
	            if (!ready) {
	                return new Promise(function (resolve) {
	                    var _album = new Album(album._key, album);
	                    _album.once('ready', function () {
	                        return resolve(_album);
	                    });
	                });
	            } else {
	                return album;
	            }
	        }));
	    });
	};

	Album.loadIfNotInit = function () {
	    if (!ready) {
	        return Album.load();
	    } else {
	        return Promise.resolve();
	    }
	};

	/**
	 * 检索出指定分类下的相册信息
	 * 
	 * @param {any} categoryName
	 * @returns
	 */
	Album.fetchByCategory = function (categoryName) {
	    return Album.loadIfNotInit().then(function () {
	        return Album.search('category', categoryName);
	    }).then(function (albums) {
	        return albums.sort(function (a, b) {
	            return a.getCacheData().created_at < b.getCacheData().created_at;
	        });
	    });
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(60)

	/* script */
	__vue_exports__ = __webpack_require__(62)

	/* template */
	var __vue_template__ = __webpack_require__(63)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "F:\\Filmy\\src\\component\\AlbumList.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0d52c4d5"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0d52c4d5", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-0d52c4d5", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] AlbumList.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(61);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0d52c4d5&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AlbumList.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0d52c4d5&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AlbumList.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n#category-albums[data-v-0d52c4d5] {\n    width: 100%;\n}\n.album[data-v-0d52c4d5] {\n    margin-bottom: 10px;\n    position: relative;\n    cursor: pointer;\n}\n.album-image[data-v-0d52c4d5] {\n    height: 65vw;\n}\n.album-image img[data-v-0d52c4d5] {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n}\n.album-title[data-v-0d52c4d5] {\n    position: absolute;\n    left: 1.5rem;\n    bottom: 0.8rem;\n    color: whitesmoke;\n    font-size: 1.4rem;\n    text-shadow: 0 0 2px gray;\n    font-family: \"Lantinghei SC\", \"Lantinghei TC\", Arial, serif;\n}\n@media only screen and (min-width: 500px) {\n#category-albums[data-v-0d52c4d5] {\n        width: 99vw;\n        margin: 0 auto;\n}\n#category[data-v-0d52c4d5] {\n        margin: 0 auto;\n        display: block;\n        overflow: hidden;\n}\n.album[data-v-0d52c4d5] {\n        width: 23.95vw;\n        height: 23.95vw;\n        margin: .4vw;\n        float: left;\n}\n.album-image[data-v-0d52c4d5] {\n        width: 100%;\n        height: 100%;\n}\n#category-albums[data-v-0d52c4d5] {\n        width: 99vw;\n        margin: 0 auto;\n}\n}\n#empty[data-v-0d52c4d5] {\n    width: 100%;\n    display: block;\n    color: #999;\n    text-align: center;\n    font-family: \"Lantinghei SC\", \"Lantinghei TC\", Arial, serif;\n    clear: both;\n}\n", ""]);

	// exports


/***/ },
/* 62 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    props: ['albums']
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    attrs: {
	      "id": "category-albums"
	    }
	  }, [_vm._l((_vm.albums), function(album) {
	    return _vm._h('router-link', {
	      staticClass: "album",
	      attrs: {
	        "to": ("/album/" + (album._key)),
	        "tag": "div"
	      }
	    }, [_vm._h('div', {
	      staticClass: "album-image"
	    }, [_vm._h('img', {
	      attrs: {
	        "src": album.photos[0],
	        "alt": ""
	      }
	    }), " ", _vm._h('span', {
	      staticClass: "album-title"
	    }, [_vm._s(album.title)])])])
	  }), " ", (_vm.albums.length == 0) ? _vm._h('span', {
	    attrs: {
	      "id": "empty"
	    }
	  }, ["No Albums"]) : _vm._e()])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0d52c4d5", module.exports)
	  }
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    attrs: {
	      "id": "category"
	    }
	  }, [_vm._h('category-item', {
	    attrs: {
	      "category": _vm.category,
	      "asTitle": true
	    }
	  }), " ", _vm._h('albums-list', {
	    attrs: {
	      "albums": _vm.albums
	    }
	  })])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-aca3ec30", module.exports)
	  }
	}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(66)

	/* script */
	__vue_exports__ = __webpack_require__(68)

	/* template */
	var __vue_template__ = __webpack_require__(80)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "F:\\Filmy\\src\\route-component\\Album.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-084731d3"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-084731d3", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-084731d3", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Album.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(67);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-084731d3&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Album.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-084731d3&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Album.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n#album[data-v-084731d3] {\n    width: 100%;\n    display: block;\n}\n#album-title[data-v-084731d3] {\n    margin: 0;\n    display: block;\n    padding: 3px 0 3px 1rem;\n    border-left: 5px solid #333;\n    font-family: \"Lantinghei SC\", \"Lantinghei TC\", Arial, serif;\n    background: white;\n}\n#back[data-v-084731d3] {\n    color: #666;\n    cursor: pointer;\n    padding: 1rem 0 1rem .5rem;\n    line-height: 1rem;\n    font-family: Arial;\n    text-decoration: none;\n    display: block;\n    background: white;\n}\n#back .icon-arrow-left[data-v-084731d3] {\n    vertical-align: middle;\n}\n@media only screen and (min-width: 500px) {\n#album[data-v-084731d3] {\n        width: 85%;\n        margin: 0 auto;\n}\n#back[data-v-084731d3] {\n        width: 63.75vw;\n        display: inline-block;\n}\n#album-title[data-v-084731d3] {\n        width: 63.75vw;\n        display: inline-block;\n}\n}\n", ""]);

	// exports


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _AlbumInfo = __webpack_require__(69);

	var _AlbumInfo2 = _interopRequireDefault(_AlbumInfo);

	var _Album = __webpack_require__(58);

	var _Album2 = _interopRequireDefault(_Album);

	var _PhotosList = __webpack_require__(74);

	var _PhotosList2 = _interopRequireDefault(_PhotosList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'AlbumPage',
	    data: function data() {
	        return {
	            album: {}
	        };
	    },

	    components: {
	        AlbumInfo: _AlbumInfo2.default,
	        PhotoList: _PhotosList2.default
	    },
	    mounted: function mounted() {
	        this.$nextTick(function () {
	            var _this = this;

	            _Album2.default.loadIfNotInit().then(function () {
	                return _Album2.default.fetch(_this.$route.params.key);
	            }).then(function (res) {
	                return res.getCacheData();
	            }).then(function (album) {
	                console.log(album);
	                _this.album = album;
	            });
	        });
	    }
	}; //
	//
	//
	//
	//
	//
	//

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(70)

	/* script */
	__vue_exports__ = __webpack_require__(72)

	/* template */
	var __vue_template__ = __webpack_require__(73)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "F:\\Filmy\\src\\component\\AlbumInfo.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-708e1e36"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-708e1e36", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-708e1e36", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] AlbumInfo.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(71);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-708e1e36&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AlbumInfo.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-708e1e36&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AlbumInfo.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n#album-info[data-v-708e1e36] {\n    width: 100%;\n    padding: .5rem .8rem;\n    background: white;\n}\n@media only screen and (min-width: 500px) {\n#album-info[data-v-708e1e36] {\n        width: 20.4vw;\n        float: right;\n}\n}\n", ""]);

	// exports


/***/ },
/* 72 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    props: ['content']
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('section', {
	    attrs: {
	      "id": "album-info"
	    }
	  }, [_vm._h('p', [_vm._s(_vm.content)])])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-708e1e36", module.exports)
	  }
	}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(75)

	/* script */
	__vue_exports__ = __webpack_require__(77)

	/* template */
	var __vue_template__ = __webpack_require__(79)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "F:\\Filmy\\src\\component\\PhotosList.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-ccc4f672"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-ccc4f672", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-ccc4f672", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] PhotosList.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(76);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-ccc4f672&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PhotosList.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-ccc4f672&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PhotosList.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n#album-photos[data-v-ccc4f672] {\n  width: 100%;\n  background: white;\n}\n.album-photo[data-v-ccc4f672] {\n  width: 100%;\n  margin-top: .8rem;\n}\n@media only screen and (min-width: 500px) {\n#album-photos[data-v-ccc4f672] {\n    width: 63.75vw;\n}\n}\n", ""]);

	// exports


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(78);

	exports.default = {
	    props: ['photos'],
	    computed: {
	        Photos: function Photos() {
	            return (this.photos || []).map(function (photo) {
	                return photo + '?imageMogr2/thumbnail/!1000x1000r';
	            });
	        }
	    }
	}; //
	//
	//
	//
	//

/***/ },
/* 78 */
/***/ function(module, exports) {

	/*! lazysizes - v2.0.7 */
	!function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}(window,function(a,b){"use strict";if(b.getElementsByClassName){var c,d=b.documentElement,e=a.Date,f=a.HTMLPictureElement,g="addEventListener",h="getAttribute",i=a[g],j=a.setTimeout,k=a.requestAnimationFrame||j,l=a.requestIdleCallback,m=/^picture$/i,n=["load","error","lazyincluded","_lazyloaded"],o={},p=Array.prototype.forEach,q=function(a,b){return o[b]||(o[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),o[b].test(a[h]("class")||"")&&o[b]},r=function(a,b){q(a,b)||a.setAttribute("class",(a[h]("class")||"").trim()+" "+b)},s=function(a,b){var c;(c=q(a,b))&&a.setAttribute("class",(a[h]("class")||"").replace(c," "))},t=function(a,b,c){var d=c?g:"removeEventListener";c&&t(a,b),n.forEach(function(c){a[d](c,b)})},u=function(a,c,d,e,f){var g=b.createEvent("CustomEvent");return g.initCustomEvent(c,!e,!f,d||{}),a.dispatchEvent(g),g},v=function(b,d){var e;!f&&(e=a.picturefill||c.pf)?e({reevaluate:!0,elements:[b]}):d&&d.src&&(b.src=d.src)},w=function(a,b){return(getComputedStyle(a,null)||{})[b]},x=function(a,b,d){for(d=d||a.offsetWidth;d<c.minSize&&b&&!a._lazysizesWidth;)d=b.offsetWidth,b=b.parentNode;return d},y=function(){var a,c,d=[],e=function(){var b;for(a=!0,c=!1;d.length;)b=d.shift(),b[0].apply(b[1],b[2]);a=!1},f=function(f){a?f.apply(this,arguments):(d.push([f,this,arguments]),c||(c=!0,(b.hidden?j:k)(e)))};return f._lsFlush=e,f}(),z=function(a,b){return b?function(){y(a)}:function(){var b=this,c=arguments;y(function(){a.apply(b,c)})}},A=function(a){var b,c=0,d=125,f=666,g=f,h=function(){b=!1,c=e.now(),a()},i=l?function(){l(h,{timeout:g}),g!==f&&(g=f)}:z(function(){j(h)},!0);return function(a){var f;(a=a===!0)&&(g=44),b||(b=!0,f=d-(e.now()-c),0>f&&(f=0),a||9>f&&l?i():j(i,f))}},B=function(a){var b,c,d=99,f=function(){b=null,a()},g=function(){var a=e.now()-c;d>a?j(g,d-a):(l||f)(f)};return function(){c=e.now(),b||(b=j(g,d))}},C=function(){var f,k,l,n,o,x,C,E,F,G,H,I,J,K,L,M=/^img$/i,N=/^iframe$/i,O="onscroll"in a&&!/glebot/.test(navigator.userAgent),P=0,Q=0,R=0,S=-1,T=function(a){R--,a&&a.target&&t(a.target,T),(!a||0>R||!a.target)&&(R=0)},U=function(a,c){var e,f=a,g="hidden"==w(b.body,"visibility")||"hidden"!=w(a,"visibility");for(F-=c,I+=c,G-=c,H+=c;g&&(f=f.offsetParent)&&f!=b.body&&f!=d;)g=(w(f,"opacity")||1)>0,g&&"visible"!=w(f,"overflow")&&(e=f.getBoundingClientRect(),g=H>e.left&&G<e.right&&I>e.top-1&&F<e.bottom+1);return g},V=function(){var a,e,g,i,j,m,n,p,q;if((o=c.loadMode)&&8>R&&(a=f.length)){e=0,S++,null==K&&("expand"in c||(c.expand=d.clientHeight>500&&d.clientWidth>500?500:370),J=c.expand,K=J*c.expFactor),K>Q&&1>R&&S>2&&o>2&&!b.hidden?(Q=K,S=0):Q=o>1&&S>1&&6>R?J:P;for(;a>e;e++)if(f[e]&&!f[e]._lazyRace)if(O)if((p=f[e][h]("data-expand"))&&(m=1*p)||(m=Q),q!==m&&(C=innerWidth+m*L,E=innerHeight+m,n=-1*m,q=m),g=f[e].getBoundingClientRect(),(I=g.bottom)>=n&&(F=g.top)<=E&&(H=g.right)>=n*L&&(G=g.left)<=C&&(I||H||G||F)&&(l&&3>R&&!p&&(3>o||4>S)||U(f[e],m))){if(ba(f[e]),j=!0,R>9)break}else!j&&l&&!i&&4>R&&4>S&&o>2&&(k[0]||c.preloadAfterLoad)&&(k[0]||!p&&(I||H||G||F||"auto"!=f[e][h](c.sizesAttr)))&&(i=k[0]||f[e]);else ba(f[e]);i&&!j&&ba(i)}},W=A(V),X=function(a){r(a.target,c.loadedClass),s(a.target,c.loadingClass),t(a.target,Z)},Y=z(X),Z=function(a){Y({target:a.target})},$=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},_=function(a){var b,d,e=a[h](c.srcsetAttr);(b=c.customMedia[a[h]("data-media")||a[h]("media")])&&a.setAttribute("media",b),e&&a.setAttribute("srcset",e),b&&(d=a.parentNode,d.insertBefore(a.cloneNode(),a),d.removeChild(a))},aa=z(function(a,b,d,e,f){var g,i,k,l,o,q;(o=u(a,"lazybeforeunveil",b)).defaultPrevented||(e&&(d?r(a,c.autosizesClass):a.setAttribute("sizes",e)),i=a[h](c.srcsetAttr),g=a[h](c.srcAttr),f&&(k=a.parentNode,l=k&&m.test(k.nodeName||"")),q=b.firesLoad||"src"in a&&(i||g||l),o={target:a},q&&(t(a,T,!0),clearTimeout(n),n=j(T,2500),r(a,c.loadingClass),t(a,Z,!0)),l&&p.call(k.getElementsByTagName("source"),_),i?a.setAttribute("srcset",i):g&&!l&&(N.test(a.nodeName)?$(a,g):a.src=g),(i||l)&&v(a,{src:g})),y(function(){a._lazyRace&&delete a._lazyRace,s(a,c.lazyClass),(!q||a.complete)&&(q?T(o):R--,X(o))})}),ba=function(a){var b,d=M.test(a.nodeName),e=d&&(a[h](c.sizesAttr)||a[h]("sizes")),f="auto"==e;(!f&&l||!d||!a.src&&!a.srcset||a.complete||q(a,c.errorClass))&&(b=u(a,"lazyunveilread").detail,f&&D.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,R++,aa(a,b,f,e,d))},ca=function(){if(!l){if(e.now()-x<999)return void j(ca,999);var a=B(function(){c.loadMode=3,W()});l=!0,c.loadMode=3,W(),i("scroll",function(){3==c.loadMode&&(c.loadMode=2),a()},!0)}};return{_:function(){x=e.now(),f=b.getElementsByClassName(c.lazyClass),k=b.getElementsByClassName(c.lazyClass+" "+c.preloadClass),L=c.hFac,i("scroll",W,!0),i("resize",W,!0),a.MutationObserver?new MutationObserver(W).observe(d,{childList:!0,subtree:!0,attributes:!0}):(d[g]("DOMNodeInserted",W,!0),d[g]("DOMAttrModified",W,!0),setInterval(W,999)),i("hashchange",W,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(a){b[g](a,W,!0)}),/d$|^c/.test(b.readyState)?ca():(i("load",ca),b[g]("DOMContentLoaded",W),j(ca,2e4)),f.length?V():W()},checkElems:W,unveil:ba}}(),D=function(){var a,d=z(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),m.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;g>f;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||v(a,c.detail)}),e=function(a,b,c){var e,f=a.parentNode;f&&(c=x(a,f,c),e=u(a,"lazybeforesizes",{width:c,dataAttr:!!b}),e.defaultPrevented||(c=e.detail.width,c&&c!==a._lazysizesWidth&&d(a,f,e,c)))},f=function(){var b,c=a.length;if(c)for(b=0;c>b;b++)e(a[b])},g=B(f);return{_:function(){a=b.getElementsByClassName(c.autosizesClass),i("resize",g)},checkElems:g,updateElem:e}}(),E=function(){E.i||(E.i=!0,D._(),C._())};return function(){var b,d={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2};c=a.lazySizesConfig||a.lazysizesConfig||{};for(b in d)b in c||(c[b]=d[b]);a.lazySizesConfig=c,j(function(){c.init&&E()})}(),{cfg:c,autoSizer:D,loader:C,init:E,uP:v,aC:r,rC:s,hC:q,fire:u,gW:x,rAF:y}}});

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('section', {
	    attrs: {
	      "id": "album-photos"
	    }
	  }, [_vm._l((_vm.photos), function(photo) {
	    return _vm._h('img', {
	      staticClass: "album-photo lazyload",
	      attrs: {
	        "data-src": photo
	      }
	    })
	  })])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-ccc4f672", module.exports)
	  }
	}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    attrs: {
	      "id": "album"
	    }
	  }, [_vm._h('h1', {
	    attrs: {
	      "id": "album-title"
	    }
	  }, [_vm._s(_vm.album.title)]), " ", _vm._h('album-info', {
	    attrs: {
	      "content": _vm.album.content
	    }
	  }), " ", _vm._h('photo-list', {
	    attrs: {
	      "photos": _vm.album.photos
	    }
	  })])
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-084731d3", module.exports)
	  }
	}

/***/ }
/******/ ]);