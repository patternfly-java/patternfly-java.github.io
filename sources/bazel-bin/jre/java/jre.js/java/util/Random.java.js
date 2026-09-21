goog.module('java.util.Random');

goog.require('java.lang.Object');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('javaemul.internal.Primitives');
goog.require('javaemul.internal.primitives.$double');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.LongUtils');

const Random = goog.require('java.util.Random$impl');
exports = Random;
