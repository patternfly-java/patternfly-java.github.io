goog.module('java.lang.Long');

goog.require('java.lang.Class');
goog.require('java.lang.Comparable');
goog.require('java.lang.Integer');
goog.require('java.lang.IntegralToString');
goog.require('java.lang.Long.BoxedValues');
goog.require('java.lang.Math');
goog.require('java.lang.Number');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('javaemul.internal.Primitives');
goog.require('javaemul.internal.primitives.$long');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.LongUtils');

const Long = goog.require('java.lang.Long$impl');
exports = Long;
