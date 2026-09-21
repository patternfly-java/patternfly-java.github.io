goog.module('javaemul.internal.PrimitiveLists');

goog.require('java.lang.Object');
goog.require('javaemul.internal.JsUtils');
goog.require('javaemul.internal.PrimitiveLists.Byte.$Overlay');
goog.require('javaemul.internal.PrimitiveLists.Double.$Overlay');
goog.require('javaemul.internal.PrimitiveLists.Int.$Overlay');
goog.require('javaemul.internal.PrimitiveLists.Long.$Overlay');
goog.require('javaemul.internal.primitives.$byte');
goog.require('javaemul.internal.primitives.$double');
goog.require('javaemul.internal.primitives.$int');
goog.require('javaemul.internal.primitives.$long');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');

const PrimitiveLists = goog.require('javaemul.internal.PrimitiveLists$impl');
exports = PrimitiveLists;
