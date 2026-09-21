goog.module('java.math.MathContext');

goog.require('java.io.Serializable');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.Integer');
goog.require('java.lang.Object');
goog.require('java.lang.RuntimeException');
goog.require('java.lang.String');
goog.require('java.math.RoundingMode');
goog.require('javaemul.internal.Exceptions');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const MathContext = goog.require('java.math.MathContext$impl');
exports = MathContext;
