goog.module('java.util.Objects');

goog.require('java.lang.NullPointerException');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.util.Arrays');
goog.require('java.util.Comparator');
goog.require('java.util.function.Supplier');
goog.require('javaemul.internal.Exceptions');
goog.require('javaemul.internal.Platform');
goog.require('javaemul.internal.primitives.$boolean');
goog.require('javaemul.internal.primitives.$byte');
goog.require('javaemul.internal.primitives.$char');
goog.require('javaemul.internal.primitives.$double');
goog.require('javaemul.internal.primitives.$float');
goog.require('javaemul.internal.primitives.$int');
goog.require('javaemul.internal.primitives.$long');
goog.require('javaemul.internal.primitives.$short');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const Objects = goog.require('java.util.Objects$impl');
exports = Objects;
