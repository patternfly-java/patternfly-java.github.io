goog.module('java.util.concurrent.atomic.AtomicLongArray');

goog.require('java.lang.Object');
goog.require('java.util.Arrays');
goog.require('java.util.function.LongBinaryOperator');
goog.require('java.util.function.LongUnaryOperator');
goog.require('javaemul.internal.primitives.$long');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.LongUtils');

const AtomicLongArray = goog.require('java.util.concurrent.atomic.AtomicLongArray$impl');
exports = AtomicLongArray;
