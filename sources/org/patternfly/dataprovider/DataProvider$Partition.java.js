goog.module('org.patternfly.dataprovider.DataProvider.Partition');

goog.require('java.lang.ArithmeticException');
goog.require('java.lang.IndexOutOfBoundsException');
goog.require('java.lang.Integer');
goog.require('java.util.AbstractList');
goog.require('java.util.List');
goog.require('javaemul.internal.Exceptions');
goog.require('javaemul.internal.Primitives');
goog.require('nativebootstrap.Util');

const Partition = goog.require('org.patternfly.dataprovider.DataProvider.Partition$impl');
exports = Partition;
