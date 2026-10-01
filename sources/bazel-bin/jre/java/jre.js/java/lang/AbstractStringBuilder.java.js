goog.module('java.lang.AbstractStringBuilder');

goog.require('java.lang.Appendable');
goog.require('java.lang.CharSequence');
goog.require('java.lang.Character');
goog.require('java.lang.Integer');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.util.stream.IntStream');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('javaemul.internal.primitives.$char');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');

const AbstractStringBuilder = goog.require('java.lang.AbstractStringBuilder$impl');
exports = AbstractStringBuilder;
