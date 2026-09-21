goog.module('javaemul.internal.Exceptions');

goog.require('java.lang.AutoCloseable');
goog.require('java.lang.Object');
goog.require('java.lang.Throwable');
goog.require('javaemul.internal.ThrowableUtils.JsObject.$Overlay');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');

const Exceptions = goog.require('javaemul.internal.Exceptions$impl');
exports = Exceptions;
