goog.module('javaemul.internal.ArrayIterator');

goog.require('java.lang.Object');
goog.require('java.lang.UnsupportedOperationException');
goog.require('java.util.Iterator');
goog.require('java.util.function.Consumer');
goog.require('javaemul.internal.Exceptions');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('javaemul.internal.JsIterableHelper.IIterableResult.$Overlay');
goog.require('nativebootstrap.Util');

const ArrayIterator = goog.require('javaemul.internal.ArrayIterator$impl');
exports = ArrayIterator;
