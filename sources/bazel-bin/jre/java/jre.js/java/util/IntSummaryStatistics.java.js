goog.module('java.util.IntSummaryStatistics');

goog.require('java.lang.Integer');
goog.require('java.lang.Object');
goog.require('java.util.function.IntConsumer');
goog.require('javaemul.internal.Primitives');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.LongUtils');

const IntSummaryStatistics = goog.require('java.util.IntSummaryStatistics$impl');
exports = IntSummaryStatistics;
