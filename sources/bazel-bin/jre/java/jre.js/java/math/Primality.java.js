goog.module('java.math.Primality');

goog.require('java.lang.Object');
goog.require('java.lang.System');
goog.require('java.math.BigInteger');
goog.require('java.math.Division');
goog.require('java.math.Elementary');
goog.require('java.util.Arrays');
goog.require('java.util.Random');
goog.require('javaemul.internal.Primitives');
goog.require('javaemul.internal.primitives.$boolean');
goog.require('javaemul.internal.primitives.$int');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');

const Primality = goog.require('java.math.Primality$impl');
exports = Primality;
