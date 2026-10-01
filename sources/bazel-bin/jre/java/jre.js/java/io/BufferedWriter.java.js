goog.module('java.io.BufferedWriter');

goog.require('java.io.IOUtils');
goog.require('java.io.Writer');
goog.require('java.lang.String');
goog.require('java.lang.System');
goog.require('java.lang.Throwable');
goog.require('javaemul.internal.Exceptions');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('javaemul.internal.Primitives');
goog.require('javaemul.internal.primitives.$char');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');

const BufferedWriter = goog.require('java.io.BufferedWriter$impl');
exports = BufferedWriter;
