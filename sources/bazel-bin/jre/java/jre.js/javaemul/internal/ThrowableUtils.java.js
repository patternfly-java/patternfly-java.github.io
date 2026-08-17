goog.module('javaemul.internal.ThrowableUtils');

goog.require('java.lang.Object');
goog.require('java.lang.Throwable');
goog.require('javaemul.internal.ThrowableUtils.HasJavaThrowable.$Overlay');
goog.require('javaemul.internal.ThrowableUtils.JsObject.$Overlay');
goog.require('javaemul.internal.ThrowableUtils.NativeError.$Overlay');
goog.require('javaemul.internal.ThrowableUtils.NativeTypeError.$Overlay');
goog.require('nativebootstrap.Util');

const ThrowableUtils = goog.require('javaemul.internal.ThrowableUtils$impl');
exports = ThrowableUtils;
