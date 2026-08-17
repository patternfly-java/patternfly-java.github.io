goog.module('java.math.RoundingMode');

goog.require('java.lang.Enum');
goog.require('java.lang.IllegalArgumentException');
goog.require('javaemul.internal.Enums');
goog.require('javaemul.internal.Enums.NativeMap.$Overlay');
goog.require('javaemul.internal.Exceptions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');

const RoundingMode = goog.require('java.math.RoundingMode$impl');
exports = RoundingMode;
