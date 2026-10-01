goog.module('java.lang.Number');

goog.require('java.io.Serializable');
goog.require('java.lang.Character');
goog.require('java.lang.Double');
goog.require('java.lang.Long');
goog.require('java.lang.Number.JavaLangNumber.$Overlay');
goog.require('java.lang.Number.__Decode');
goog.require('java.lang.Number.__ParseLong');
goog.require('java.lang.NumberFormatException');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('javaemul.internal.Exceptions');
goog.require('javaemul.internal.NativeRegExp.$Overlay');
goog.require('javaemul.internal.Primitives');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.LongUtils');

const Number = goog.require('java.lang.Number$impl');
exports = Number;
