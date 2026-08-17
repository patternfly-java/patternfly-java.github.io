goog.module('javaemul.internal.JsIterableHelper.JsIterableAdapter');

goog.require('java.lang.Iterable');
goog.require('java.lang.Object');
goog.require('javaemul.internal.JsIterableHelper.JsIterable.$Overlay');
goog.require('javaemul.internal.JsIterableHelper.JsIterableIteratorAdapter');
goog.require('nativebootstrap.Util');

const JsIterableAdapter = goog.require('javaemul.internal.JsIterableHelper.JsIterableAdapter$impl');
exports = JsIterableAdapter;
