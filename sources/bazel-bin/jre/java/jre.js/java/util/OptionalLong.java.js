goog.module('java.util.OptionalLong');

goog.require('java.lang.Long');
goog.require('java.lang.Object');
goog.require('java.lang.Runnable');
goog.require('java.lang.String');
goog.require('java.lang.Throwable');
goog.require('java.util.function.LongConsumer');
goog.require('java.util.function.LongSupplier');
goog.require('java.util.function.Supplier');
goog.require('java.util.stream.LongStream');
goog.require('javaemul.internal.Exceptions');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const OptionalLong = goog.require('java.util.OptionalLong$impl');
exports = OptionalLong;
