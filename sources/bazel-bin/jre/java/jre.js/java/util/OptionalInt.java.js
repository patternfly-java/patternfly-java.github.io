goog.module('java.util.OptionalInt');

goog.require('java.lang.Integer');
goog.require('java.lang.Object');
goog.require('java.lang.Runnable');
goog.require('java.lang.String');
goog.require('java.lang.Throwable');
goog.require('java.util.function.IntConsumer');
goog.require('java.util.function.IntSupplier');
goog.require('java.util.function.Supplier');
goog.require('java.util.stream.IntStream');
goog.require('javaemul.internal.Exceptions');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const OptionalInt = goog.require('java.util.OptionalInt$impl');
exports = OptionalInt;
