goog.module('javaemul.internal.Enums');

goog.require('java.lang.ClassCastException');
goog.require('java.lang.Double');
goog.require('java.lang.Enum');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('javaemul.internal.Constructor');
goog.require('javaemul.internal.Constructor.$Overlay');
goog.require('javaemul.internal.Enums.BoxedComparableLightEnum');
goog.require('javaemul.internal.Enums.BoxedLightEnum');
goog.require('javaemul.internal.Enums.NativeMap.$Overlay');
goog.require('javaemul.internal.Exceptions');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const Enums = goog.require('javaemul.internal.Enums$impl');
exports = Enums;
