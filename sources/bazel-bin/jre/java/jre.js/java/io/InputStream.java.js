goog.module('java.io.InputStream');

goog.require('java.io.Closeable');
goog.require('java.io.IOException');
goog.require('java.io.IOUtils');
goog.require('java.lang.Math');
goog.require('java.lang.Object');
goog.require('javaemul.internal.Exceptions');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('javaemul.internal.Primitives');
goog.require('javaemul.internal.primitives.$byte');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.LongUtils');

const InputStream = goog.require('java.io.InputStream$impl');
exports = InputStream;
