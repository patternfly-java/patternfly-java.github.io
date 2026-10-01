goog.module('java.math.Conversion');

goog.require('java.lang.Character');
goog.require('java.lang.Integer');
goog.require('java.lang.Long');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.lang.StringBuilder');
goog.require('java.lang.System');
goog.require('java.math.BigInteger');
goog.require('java.math.Division');
goog.require('javaemul.internal.Primitives');
goog.require('javaemul.internal.primitives.$char');
goog.require('javaemul.internal.primitives.$int');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.LongUtils');

const Conversion = goog.require('java.math.Conversion$impl');
exports = Conversion;
