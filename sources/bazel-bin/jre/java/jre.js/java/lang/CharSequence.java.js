goog.module('java.lang.CharSequence');

goog.require('java.lang.CharSequence.$1');
goog.require('java.lang.HasCharSequenceTypeMarker.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.Spliterator');
goog.require('java.util.Spliterator.OfInt');
goog.require('java.util.Spliterators');
goog.require('java.util.function.Supplier');
goog.require('java.util.stream.IntStream');
goog.require('java.util.stream.StreamSupport');
goog.require('javaemul.internal.Primitives');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.CharSequences');

const CharSequence = goog.require('java.lang.CharSequence$impl');
exports = CharSequence;
