// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/create.js":[function(require,module,exports) {
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var btnAdd = document.querySelector("#btnAdd");
var table = document.querySelector("#table");
var title = document.querySelector("#inpAddTitle");
var genre = document.querySelector("#inpAddGenre");
var director = document.querySelector("#inpAddDirector");
var year = document.querySelector("#inpAddYear");
var BASE_URL = "http://localhost:3000/movies";
function addMovie() {
  var addToMovies = {
    "title": "".concat(title.value),
    "genre": "".concat(genre.value),
    "director": "".concat(director.value),
    "year": "".concat(year.value)
  };
  var options = {
    method: "POST",
    body: JSON.stringify(addToMovies),
    headers: {
      "content-type": "application/json"
    }
  };
  fetch("".concat(BASE_URL), options);
  fetch("".concat(BASE_URL)).then(function (res) {
    return res.json();
  }).then(function (movies) {
    table.innerHTML = "\n        <tr>\n            <th>ID</th>\n            <th>Title</th>\n            <th>Genre</th>\n            <th>Director</th>\n            <th>Year</th>\n        </tr>";
    var numb = 1;
    var _iterator = _createForOfIteratorHelper(movies),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var i = _step.value;
        table.insertAdjacentHTML("beforeend", "\n          <tr>\n            <td>".concat(numb, "</td>\n            <td>").concat(i.title, "</td>\n            <td>").concat(i.genre, "</td>\n            <td>").concat(i.director, "</td>\n            <td>").concat(i.year, "</td>\n          </tr>"));
        numb += 1;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
}
btnAdd.addEventListener("click", addMovie);
},{}],"js/update.js":[function(require,module,exports) {
var btnUpdate = document.querySelector("#btnUpdate");
var table = document.querySelector("#table");
var id = document.querySelector("#inpUpId");
var title = document.querySelector("#inpUpdateTitle");
var genre = document.querySelector("#inpUpdateGenre");
var director = document.querySelector("#inpUpdateDirector");
var year = document.querySelector("#inpUpdateYear");
var BASE_URL = "http://localhost:3000/movies";
// ===============PUT===============

function updateMovies() {
  var movieToUpdate = {
    "title": "".concat(title.value),
    "genre": "".concat(genre.value),
    "director": "".concat(director.value),
    "year": "".concat(year.value)
  };
  fetch("".concat(BASE_URL)).then(function (res) {
    return res.json();
  }).then(function (movies) {
    var a = movies[Number.parseInt(id.value) - 1].id;
    var options = {
      method: "PUT",
      body: JSON.stringify(movieToUpdate),
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch("".concat(BASE_URL, "/").concat(a), options);
  });
}
btnUpdate.addEventListener("click", updateMovies);
},{}],"js/patch.js":[function(require,module,exports) {
var btnEdit = document.querySelector("#btnEdit");
var table = document.querySelector("#table");
var id = document.querySelector("#inpEditId");
var title = document.querySelector("#inpEditTitle");
var genre = document.querySelector("#inpEditGenre");
var director = document.querySelector("#inpEditDirector");
var year = document.querySelector("#inpEditYear");
var BASE_URL = "http://localhost:3000/movies";
function editMovies() {
  var movieToEdit = {};
  fetch("".concat(BASE_URL)).then(function (res) {
    return res.json();
  }).then(function (movies) {
    if (title.value !== "") {
      movieToEdit.title = "".concat(title.value);
    }
    if (genre.value !== "") {
      movieToEdit.genre = "".concat(genre.value);
    }
    if (director.value !== "") {
      movieToEdit.director = "".concat(director.value);
    }
    if (year.value !== "") {
      movieToEdit.year = "".concat(year.value);
    } else {
      movieToEdit.title = " ";
      movieToEdit.genre = " ";
      movieToEdit.director = " ";
      movieToEdit.year = " ";
    }
    var options = {
      method: "PUT",
      body: JSON.stringify(movieToEdit),
      headers: {
        "Content-Type": "application/json"
      }
    };
    var a = movies[Number.parseInt(id.value) - 1].id;
    fetch("".concat(BASE_URL, "/").concat(a), options);
  });
}
btnEdit.addEventListener("click", editMovies);
},{}],"js/delete.js":[function(require,module,exports) {
var id = document.querySelector("#inpDeleteId");
var btnDelete = document.querySelector("#btnDelete");
var BASE_URL = "http://localhost:3000/movies";
function deleteMovie() {
  fetch("".concat(BASE_URL)).then(function (res) {
    return res.json();
  }).then(function (movies) {
    return fetch("".concat(BASE_URL, "/").concat(movies[Number.parseInt(id.value) - 1].id), {
      method: "DELETE"
    });
  });
}
btnDelete.addEventListener("click", deleteMovie);
},{}],"js/get.js":[function(require,module,exports) {
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var btnRead = document.querySelector("#btnRead");
var table = document.querySelector("#table");
var BASE_URL = "http://localhost:3000/movies";
function getMovies() {
  fetch("".concat(BASE_URL)).then(function (res) {
    return res.json();
  }).then(function (movies) {
    table.innerHTML = "\n        <tr>\n            <th>ID</th>\n            <th>Title</th>\n            <th>Genre</th>\n            <th>Director</th>\n            <th>Year</th>\n        </tr>";
    var numb = 1;
    var _iterator = _createForOfIteratorHelper(movies),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var i = _step.value;
        table.insertAdjacentHTML("beforeend", "\n            <tr>\n                <td>".concat(numb, "</td>\n                <td>").concat(i.title, "</td>\n                <td>").concat(i.genre, "</td>\n                <td>").concat(i.director, "</td>\n                <td>").concat(i.year, "</td>\n            </tr>"));
        numb += 1;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
}
btnRead.addEventListener("click", getMovies);
},{}],"main.js":[function(require,module,exports) {
"use strict";

require("./js/create.js");
require("./js/update.js");
require("./js/patch.js");
require("./js/delete.js");
require("./js/get.js");
},{"./js/create.js":"js/create.js","./js/update.js":"js/update.js","./js/patch.js":"js/patch.js","./js/delete.js":"js/delete.js","./js/get.js":"js/get.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63399" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map