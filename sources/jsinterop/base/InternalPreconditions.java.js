goog.module('jsinterop.base.InternalPreconditions');

goog.require('java.lang.AssertionError');
goog.require('java.lang.ClassCastException');
goog.require('java.lang.Exception');
goog.require('java.lang.Object');
goog.require('javaemul.internal.Exceptions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');

const InternalPreconditions = goog.require('jsinterop.base.InternalPreconditions$impl');
exports = InternalPreconditions;
