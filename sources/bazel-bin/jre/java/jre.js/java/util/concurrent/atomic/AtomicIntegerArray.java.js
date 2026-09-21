goog.module('java.util.concurrent.atomic.AtomicIntegerArray');

goog.require('java.lang.Object');
goog.require('java.util.Arrays');
goog.require('java.util.function.IntBinaryOperator');
goog.require('java.util.function.IntUnaryOperator');
goog.require('javaemul.internal.primitives.$int');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');

const AtomicIntegerArray = goog.require('java.util.concurrent.atomic.AtomicIntegerArray$impl');
exports = AtomicIntegerArray;
