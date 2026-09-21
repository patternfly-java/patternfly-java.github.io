goog.module('java.lang.Integer');

goog.require('java.lang.Class');
goog.require('java.lang.Comparable');
goog.require('java.lang.Integer.BoxedValues');
goog.require('java.lang.Integer.ReverseNibbles');
goog.require('java.lang.IntegralToString');
goog.require('java.lang.Number');
goog.require('javaemul.internal.Primitives');
goog.require('javaemul.internal.primitives.$int');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const Integer = goog.require('java.lang.Integer$impl');
exports = Integer;
