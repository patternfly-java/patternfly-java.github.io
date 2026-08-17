goog.module('java.lang.IntegralToString');

goog.require('java.lang.Character');
goog.require('java.lang.IntegralToString.NativeNumber.$Overlay');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('javaemul.internal.JsUtils');
goog.require('javaemul.internal.Primitives');
goog.require('javaemul.internal.primitives.$char');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.LongUtils');

const IntegralToString = goog.require('java.lang.IntegralToString$impl');
exports = IntegralToString;
