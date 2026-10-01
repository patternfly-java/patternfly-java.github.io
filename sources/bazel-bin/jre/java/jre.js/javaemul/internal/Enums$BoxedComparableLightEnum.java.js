goog.module('javaemul.internal.Enums.BoxedComparableLightEnum');

goog.require('java.lang.ClassCastException');
goog.require('java.lang.Comparable');
goog.require('javaemul.internal.Constructor');
goog.require('javaemul.internal.Constructor.$Overlay');
goog.require('javaemul.internal.Enums');
goog.require('javaemul.internal.Enums.BoxedLightEnum');
goog.require('javaemul.internal.Exceptions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const BoxedComparableLightEnum = goog.require('javaemul.internal.Enums.BoxedComparableLightEnum$impl');
exports = BoxedComparableLightEnum;
