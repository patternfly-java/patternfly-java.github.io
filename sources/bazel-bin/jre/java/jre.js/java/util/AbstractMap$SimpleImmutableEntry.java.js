goog.module('java.util.AbstractMap.SimpleImmutableEntry');

goog.require('java.lang.UnsupportedOperationException');
goog.require('java.util.AbstractMap.AbstractEntry');
goog.require('java.util.Map.Entry');
goog.require('javaemul.internal.Exceptions');
goog.require('nativebootstrap.Util');

const SimpleImmutableEntry = goog.require('java.util.AbstractMap.SimpleImmutableEntry$impl');
exports = SimpleImmutableEntry;
