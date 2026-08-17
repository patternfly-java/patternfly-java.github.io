goog.module('java.math.Multiplication');

goog.require('java.lang.ArithmeticException');
goog.require('java.lang.Integer');
goog.require('java.lang.Object');
goog.require('java.math.BigInteger');
goog.require('java.math.BitLevel');
goog.require('javaemul.internal.Exceptions');
goog.require('javaemul.internal.Primitives');
goog.require('javaemul.internal.primitives.$int');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.LongUtils');

const Multiplication = goog.require('java.math.Multiplication$impl');
exports = Multiplication;
