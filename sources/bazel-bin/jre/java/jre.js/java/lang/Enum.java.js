goog.module('java.lang.Enum');

goog.require('java.io.Serializable');
goog.require('java.lang.Class');
goog.require('java.lang.Comparable');
goog.require('java.lang.Object');
goog.require('java.lang.UnsupportedOperationException');
goog.require('javaemul.internal.Exceptions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const Enum = goog.require('java.lang.Enum$impl');
exports = Enum;
