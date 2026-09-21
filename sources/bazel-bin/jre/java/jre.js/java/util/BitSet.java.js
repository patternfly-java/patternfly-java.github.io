goog.module('java.util.BitSet');

goog.require('java.lang.Byte');
goog.require('java.lang.Cloneable');
goog.require('java.lang.IndexOutOfBoundsException');
goog.require('java.lang.Integer');
goog.require('java.lang.Long');
goog.require('java.lang.Object');
goog.require('java.lang.StringBuilder');
goog.require('java.util.Arrays');
goog.require('javaemul.internal.ArrayHelper');
goog.require('javaemul.internal.Exceptions');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('javaemul.internal.Primitives');
goog.require('javaemul.internal.primitives.$byte');
goog.require('javaemul.internal.primitives.$int');
goog.require('javaemul.internal.primitives.$long');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.LongUtils');

const BitSet = goog.require('java.util.BitSet$impl');
exports = BitSet;
