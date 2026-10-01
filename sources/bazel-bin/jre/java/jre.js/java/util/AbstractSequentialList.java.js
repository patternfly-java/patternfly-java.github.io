goog.module('java.util.AbstractSequentialList');

goog.require('java.lang.IndexOutOfBoundsException');
goog.require('java.util.AbstractList');
goog.require('java.util.Collection');
goog.require('java.util.Iterator');
goog.require('java.util.NoSuchElementException');
goog.require('javaemul.internal.Exceptions');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');

const AbstractSequentialList = goog.require('java.util.AbstractSequentialList$impl');
exports = AbstractSequentialList;
