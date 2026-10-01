goog.module('java.lang.System');

goog.require('java.io.PrintStream');
goog.require('java.lang.AssertionError');
goog.require('java.lang.Object');
goog.require('javaemul.internal.ArrayHelper');
goog.require('javaemul.internal.Exceptions');
goog.require('javaemul.internal.HashCodes');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('javaemul.internal.Primitives');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Objects');

const System = goog.require('java.lang.System$impl');
exports = System;
