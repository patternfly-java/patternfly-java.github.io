goog.module('java.util.Spliterator');

goog.require('java.lang.IllegalStateException');
goog.require('java.util.Comparator');
goog.require('java.util.function.Consumer');
goog.require('javaemul.internal.Exceptions');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');

const Spliterator = goog.require('java.util.Spliterator$impl');
exports = Spliterator;
