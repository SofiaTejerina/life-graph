"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/d3-dispatch";
exports.ids = ["vendor-chunks/d3-dispatch"];
exports.modules = {

/***/ "(ssr)/../node_modules/d3-dispatch/src/dispatch.js":
/*!***************************************************!*\
  !*** ../node_modules/d3-dispatch/src/dispatch.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar noop = {\n    value: ()=>{}\n};\nfunction dispatch() {\n    for(var i = 0, n = arguments.length, _ = {}, t; i < n; ++i){\n        if (!(t = arguments[i] + \"\") || t in _ || /[\\s.]/.test(t)) throw new Error(\"illegal type: \" + t);\n        _[t] = [];\n    }\n    return new Dispatch(_);\n}\nfunction Dispatch(_) {\n    this._ = _;\n}\nfunction parseTypenames(typenames, types) {\n    return typenames.trim().split(/^|\\s+/).map(function(t) {\n        var name = \"\", i = t.indexOf(\".\");\n        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);\n        if (t && !types.hasOwnProperty(t)) throw new Error(\"unknown type: \" + t);\n        return {\n            type: t,\n            name: name\n        };\n    });\n}\nDispatch.prototype = dispatch.prototype = {\n    constructor: Dispatch,\n    on: function(typename, callback) {\n        var _ = this._, T = parseTypenames(typename + \"\", _), t, i = -1, n = T.length;\n        // If no callback was specified, return the callback of the given type and name.\n        if (arguments.length < 2) {\n            while(++i < n)if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;\n            return;\n        }\n        // If a type was specified, set the callback for the given type and name.\n        // Otherwise, if a null callback was specified, remove callbacks of the given name.\n        if (callback != null && typeof callback !== \"function\") throw new Error(\"invalid callback: \" + callback);\n        while(++i < n){\n            if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);\n            else if (callback == null) for(t in _)_[t] = set(_[t], typename.name, null);\n        }\n        return this;\n    },\n    copy: function() {\n        var copy = {}, _ = this._;\n        for(var t in _)copy[t] = _[t].slice();\n        return new Dispatch(copy);\n    },\n    call: function(type, that) {\n        if ((n = arguments.length - 2) > 0) for(var args = new Array(n), i = 0, n, t; i < n; ++i)args[i] = arguments[i + 2];\n        if (!this._.hasOwnProperty(type)) throw new Error(\"unknown type: \" + type);\n        for(t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);\n    },\n    apply: function(type, that, args) {\n        if (!this._.hasOwnProperty(type)) throw new Error(\"unknown type: \" + type);\n        for(var t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);\n    }\n};\nfunction get(type, name) {\n    for(var i = 0, n = type.length, c; i < n; ++i){\n        if ((c = type[i]).name === name) {\n            return c.value;\n        }\n    }\n}\nfunction set(type, name, callback) {\n    for(var i = 0, n = type.length; i < n; ++i){\n        if (type[i].name === name) {\n            type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));\n            break;\n        }\n    }\n    if (callback != null) type.push({\n        name: name,\n        value: callback\n    });\n    return type;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dispatch);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2QzLWRpc3BhdGNoL3NyYy9kaXNwYXRjaC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBSUEsT0FBTztJQUFDQyxPQUFPLEtBQU87QUFBQztBQUUzQixTQUFTQztJQUNQLElBQUssSUFBSUMsSUFBSSxHQUFHQyxJQUFJQyxVQUFVQyxNQUFNLEVBQUVDLElBQUksQ0FBQyxHQUFHQyxHQUFHTCxJQUFJQyxHQUFHLEVBQUVELEVBQUc7UUFDM0QsSUFBSSxDQUFFSyxDQUFBQSxJQUFJSCxTQUFTLENBQUNGLEVBQUUsR0FBRyxFQUFDLEtBQU9LLEtBQUtELEtBQU0sUUFBUUUsSUFBSSxDQUFDRCxJQUFJLE1BQU0sSUFBSUUsTUFBTSxtQkFBbUJGO1FBQ2hHRCxDQUFDLENBQUNDLEVBQUUsR0FBRyxFQUFFO0lBQ1g7SUFDQSxPQUFPLElBQUlHLFNBQVNKO0FBQ3RCO0FBRUEsU0FBU0ksU0FBU0osQ0FBQztJQUNqQixJQUFJLENBQUNBLENBQUMsR0FBR0E7QUFDWDtBQUVBLFNBQVNLLGVBQWVDLFNBQVMsRUFBRUMsS0FBSztJQUN0QyxPQUFPRCxVQUFVRSxJQUFJLEdBQUdDLEtBQUssQ0FBQyxTQUFTQyxHQUFHLENBQUMsU0FBU1QsQ0FBQztRQUNuRCxJQUFJVSxPQUFPLElBQUlmLElBQUlLLEVBQUVXLE9BQU8sQ0FBQztRQUM3QixJQUFJaEIsS0FBSyxHQUFHZSxPQUFPVixFQUFFWSxLQUFLLENBQUNqQixJQUFJLElBQUlLLElBQUlBLEVBQUVZLEtBQUssQ0FBQyxHQUFHakI7UUFDbEQsSUFBSUssS0FBSyxDQUFDTSxNQUFNTyxjQUFjLENBQUNiLElBQUksTUFBTSxJQUFJRSxNQUFNLG1CQUFtQkY7UUFDdEUsT0FBTztZQUFDYyxNQUFNZDtZQUFHVSxNQUFNQTtRQUFJO0lBQzdCO0FBQ0Y7QUFFQVAsU0FBU1ksU0FBUyxHQUFHckIsU0FBU3FCLFNBQVMsR0FBRztJQUN4Q0MsYUFBYWI7SUFDYmMsSUFBSSxTQUFTQyxRQUFRLEVB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RUFBRSxFQUFFZSxJQUFJLEtBQUtBLE1BQU07WUFDL0IsT0FBT21CLEVBQUVwQyxLQUFLO1FBQ2hCO0lBQ0Y7QUFDRjtBQUVBLFNBQVM2QixJQUFJUixJQUFJLEVBQUVKLElBQUksRUFBRVMsUUFBUTtJQUMvQixJQUFLLElBQUl4QixJQUFJLEdBQUdDLElBQUlrQixLQUFLaEIsTUFBTSxFQUFFSCxJQUFJQyxHQUFHLEVBQUVELEVBQUc7UUFDM0MsSUFBSW1CLElBQUksQ0FBQ25CLEVBQUUsQ0FBQ2UsSUFBSSxLQUFLQSxNQUFNO1lBQ3pCSSxJQUFJLENBQUNuQixFQUFFLEdBQUdILE1BQU1zQixPQUFPQSxLQUFLRixLQUFLLENBQUMsR0FBR2pCLEdBQUdtQyxNQUFNLENBQUNoQixLQUFLRixLQUFLLENBQUNqQixJQUFJO1lBQzlEO1FBQ0Y7SUFDRjtJQUNBLElBQUl3QixZQUFZLE1BQU1MLEtBQUtpQixJQUFJLENBQUM7UUFBQ3JCLE1BQU1BO1FBQU1qQixPQUFPMEI7SUFBUTtJQUM1RCxPQUFPTDtBQUNUO0FBRUEsaUVBQWVwQixRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGxpZmUtZ3JhcGgvZnJvbnRlbmQyLy4uL25vZGVfbW9kdWxlcy9kMy1kaXNwYXRjaC9zcmMvZGlzcGF0Y2guanM/NTQwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbm9vcCA9IHt2YWx1ZTogKCkgPT4ge319O1xuXG5mdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgZm9yICh2YXIgaSA9IDAsIG4gPSBhcmd1bWVudHMubGVuZ3RoLCBfID0ge30sIHQ7IGkgPCBuOyArK2kpIHtcbiAgICBpZiAoISh0ID0gYXJndW1lbnRzW2ldICsgXCJcIikgfHwgKHQgaW4gXykgfHwgL1tcXHMuXS8udGVzdCh0KSkgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCB0eXBlOiBcIiArIHQpO1xuICAgIF9bdF0gPSBbXTtcbiAgfVxuICByZXR1cm4gbmV3IERpc3BhdGNoKF8pO1xufVxuXG5mdW5jdGlvbiBEaXNwYXRjaChfKSB7XG4gIHRoaXMuXyA9IF87XG59XG5cbmZ1bmN0aW9uIHBhcnNlVHlwZW5hbWVzKHR5cGVuYW1lcywgdHlwZXMpIHtcbiAgcmV0dXJuIHR5cGVuYW1lcy50cmltKCkuc3BsaXQoL158XFxzKy8pLm1hcChmdW5jdGlvbih0KSB7XG4gICAgdmFyIG5hbWUgPSBcIlwiLCBpID0gdC5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAoaSA+PSAwKSBuYW1lID0gdC5zbGljZShpICsgMSksIHQgPSB0LnNsaWNlKDAsIGkpO1xuICAgIGlmICh0ICYmICF0eXBlcy5oYXNPd25Qcm9wZXJ0eSh0KSkgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biB0eXBlOiBcIiArIHQpO1xuICAgIHJldHVybiB7dHlwZTogdCwgbmFtZTogbmFtZX07XG4gIH0pO1xufVxuXG5EaXNwYXRjaC5wcm90b3R5cGUgPSBkaXNwYXRjaC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBEaXNwYXRjaCxcbiAgb246IGZ1bmN0aW9uKHR5cGVuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBfID0gdGhpcy5fLFxuICAgICAgICBUID0gcGFyc2VUeXBlbmFtZXModHlwZW5hbWUgKyBcIlwiLCBfKSxcbiAgICAgICAgdCxcbiAgICAgICAgaSA9IC0xLFxuICAgICAgICBuID0gVC5sZW5ndGg7XG5cbiAgICAvLyBJZiBubyBjYWxsYmFjayB3YXMgc3BlY2lmaWVkLCByZXR1cm4gdGhlIGNhbGxiYWNrIG9mIHRoZSBnaXZlbiB0eXBlIGFuZCBuYW1lLlxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgICAgd2hpbGUgKCsraSA8IG4pIGlmICgodCA9ICh0eXBlbmFtZSA9IFRbaV0pLnR5cGUpICYmICh0ID0gZ2V0KF9bdF0sIHR5cGVuYW1lLm5hbWUpKSkgcmV0dXJuIHQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgYSB0eXBlIHdhcyBzcGVjaWZpZWQsIHNldCB0aGUgY2FsbGJhY2sgZm9yIHRoZSBnaXZlbiB0eXBlIGFuZCBuYW1lLlxuICAgIC8vIE90aGVyd2lzZSwgaWYgYSBudWxsIGNhbGxiYWNrIHdhcyBzcGVjaWZpZWQsIHJlbW92ZSBjYWxsYmFja3Mgb2YgdGhlIGdpdmVuIG5hbWUuXG4gICAgaWYgKGNhbGxiYWNrICE9IG51bGwgJiYgdHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgY2FsbGJhY2s6IFwiICsgY2FsbGJhY2spO1xuICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICBpZiAodCA9ICh0eXBlbmFtZSA9IFRbaV0pLnR5cGUpIF9bdF0gPSBzZXQoX1t0XSwgdHlwZW5hbWUubmFtZSwgY2FsbGJhY2spO1xuICAgICAgZWxzZSBpZiAoY2FsbGJhY2sgPT0gbnVsbCkgZm9yICh0IGluIF8pIF9bdF0gPSBzZXQoX1t0XSwgdHlwZW5hbWUubmFtZSwgbnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIGNvcHk6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb3B5ID0ge30sIF8gPSB0aGlzLl87XG4gICAgZm9yICh2YXIgdCBpbiBfKSBjb3B5W3RdID0gX1t0XS5zbGljZSgpO1xuICAgIHJldHVybiBuZXcgRGlzcGF0Y2goY29weSk7XG4gIH0sXG4gIGNhbGw6IGZ1bmN0aW9uKHR5cGUsIHRoYXQpIHtcbiAgICBpZiAoKG4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMikgPiAwKSBmb3IgKHZhciBhcmdzID0gbmV3IEFycmF5KG4pLCBpID0gMCwgbiwgdDsgaSA8IG47ICsraSkgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgaWYgKCF0aGlzLl8uaGFzT3duUHJvcGVydHkodHlwZSkpIHRocm93IG5ldyBFcnJvcihcInVua25vd24gdHlwZTogXCIgKyB0eXBlKTtcbiAgICBmb3IgKHQgPSB0aGlzLl9bdHlwZV0sIGkgPSAwLCBuID0gdC5sZW5ndGg7IGkgPCBuOyArK2kpIHRbaV0udmFsdWUuYXBwbHkodGhhdCwgYXJncyk7XG4gIH0sXG4gIGFwcGx5OiBmdW5jdGlvbih0eXBlLCB0aGF0LCBhcmdzKSB7XG4gICAgaWYgKCF0aGlzLl8uaGFzT3duUHJvcGVydHkodHlwZSkpIHRocm93IG5ldyBFcnJvcihcInVua25vd24gdHlwZTogXCIgKyB0eXBlKTtcbiAgICBmb3IgKHZhciB0ID0gdGhpcy5fW3R5cGVdLCBpID0gMCwgbiA9IHQubGVuZ3RoOyBpIDwgbjsgKytpKSB0W2ldLnZhbHVlLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBnZXQodHlwZSwgbmFtZSkge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IHR5cGUubGVuZ3RoLCBjOyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKChjID0gdHlwZVtpXSkubmFtZSA9PT0gbmFtZSkge1xuICAgICAgcmV0dXJuIGMudmFsdWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldCh0eXBlLCBuYW1lLCBjYWxsYmFjaykge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IHR5cGUubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKHR5cGVbaV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgdHlwZVtpXSA9IG5vb3AsIHR5cGUgPSB0eXBlLnNsaWNlKDAsIGkpLmNvbmNhdCh0eXBlLnNsaWNlKGkgKyAxKSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgaWYgKGNhbGxiYWNrICE9IG51bGwpIHR5cGUucHVzaCh7bmFtZTogbmFtZSwgdmFsdWU6IGNhbGxiYWNrfSk7XG4gIHJldHVybiB0eXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwYXRjaDtcbiJdLCJuYW1lcyI6WyJub29wIiwidmFsdWUiLCJkaXNwYXRjaCIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiXyIsInQiLCJ0ZXN0IiwiRXJyb3IiLCJEaXNwYXRjaCIsInBhcnNlVHlwZW5hbWVzIiwidHlwZW5hbWVzIiwidHlwZXMiLCJ0cmltIiwic3BsaXQiLCJtYXAiLCJuYW1lIiwiaW5kZXhPZiIsInNsaWNlIiwiaGFzT3duUHJvcGVydHkiLCJ0eXBlIiwicHJvdG90eXBlIiwiY29uc3RydWN0b3IiLCJvbiIsInR5cGVuYW1lIiwiY2FsbGJhY2siLCJUIiwiZ2V0Iiwic2V0IiwiY29weSIsImNhbGwiLCJ0aGF0IiwiYXJncyIsIkFycmF5IiwiYXBwbHkiLCJjIiwiY29uY2F0IiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/d3-dispatch/src/dispatch.js\n");

/***/ })

};
;