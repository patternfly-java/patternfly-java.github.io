goog.module('javaemul.internal.EmulatedCharset.LatinCharset');

goog.require('java.lang.String');
goog.require('javaemul.internal.ArrayHelper');
goog.require('javaemul.internal.EmulatedCharset');
goog.require('javaemul.internal.Primitives');
goog.require('javaemul.internal.primitives.$byte');
goog.require('javaemul.internal.primitives.$char');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');

const LatinCharset = goog.require('javaemul.internal.EmulatedCharset.LatinCharset$impl');
exports = LatinCharset;
