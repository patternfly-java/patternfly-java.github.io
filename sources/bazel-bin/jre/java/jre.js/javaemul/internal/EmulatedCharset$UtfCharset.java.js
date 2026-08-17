goog.module('javaemul.internal.EmulatedCharset.UtfCharset');

goog.require('java.lang.Character');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.IndexOutOfBoundsException');
goog.require('java.lang.String');
goog.require('javaemul.internal.ArrayHelper');
goog.require('javaemul.internal.EmulatedCharset');
goog.require('javaemul.internal.Exceptions');
goog.require('javaemul.internal.PrimitiveLists');
goog.require('javaemul.internal.PrimitiveLists.Byte.$Overlay');
goog.require('javaemul.internal.Primitives');
goog.require('javaemul.internal.primitives.$char');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');

const UtfCharset = goog.require('javaemul.internal.EmulatedCharset.UtfCharset$impl');
exports = UtfCharset;
