goog.module('java.util.LongSummaryStatistics');

goog.require('java.lang.Long');
goog.require('java.lang.Math');
goog.require('java.lang.Object');
goog.require('java.util.function.IntConsumer');
goog.require('java.util.function.LongConsumer');
goog.require('javaemul.internal.Primitives');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.LongUtils');

const LongSummaryStatistics = goog.require('java.util.LongSummaryStatistics$impl');
exports = LongSummaryStatistics;
