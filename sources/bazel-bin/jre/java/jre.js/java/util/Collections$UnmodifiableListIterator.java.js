goog.module('java.util.Collections.UnmodifiableListIterator');

goog.require('java.lang.UnsupportedOperationException');
goog.require('java.util.Collections.UnmodifiableCollectionIterator');
goog.require('java.util.Iterator');
goog.require('java.util.ListIterator');
goog.require('javaemul.internal.Exceptions');
goog.require('nativebootstrap.Util');

const UnmodifiableListIterator = goog.require('java.util.Collections.UnmodifiableListIterator$impl');
exports = UnmodifiableListIterator;
