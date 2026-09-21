goog.module('java.util.Iterator');

goog.require('java.lang.UnsupportedOperationException');
goog.require('java.util.function.Consumer');
goog.require('javaemul.internal.Exceptions');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('javaemul.internal.JsIterableHelper');
goog.require('javaemul.internal.JsIterableHelper.IIterableResult.$Overlay');
goog.require('javaemul.internal.JsIterableHelper.JsIterator.$Overlay');
goog.require('nativebootstrap.Util');

const j_u_Iterator = goog.require('java.util.Iterator$impl');
exports = j_u_Iterator;
