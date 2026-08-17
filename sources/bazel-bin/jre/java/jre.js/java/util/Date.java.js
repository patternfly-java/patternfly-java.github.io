goog.module('java.util.Date');

goog.require('java.io.Serializable');
goog.require('java.lang.Cloneable');
goog.require('java.lang.Comparable');
goog.require('java.lang.Double');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.Long');
goog.require('java.lang.Math');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.util.Date.NativeDate.$Overlay');
goog.require('java.util.Date.StringData');
goog.require('javaemul.internal.Exceptions');
goog.require('javaemul.internal.Primitives');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.LongUtils');

const j_u_Date = goog.require('java.util.Date$impl');
exports = j_u_Date;
