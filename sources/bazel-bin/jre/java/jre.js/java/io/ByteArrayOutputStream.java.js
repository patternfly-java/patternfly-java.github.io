goog.module('java.io.ByteArrayOutputStream');

goog.require('java.io.IOUtils');
goog.require('java.io.OutputStream');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.String');
goog.require('java.lang.System');
goog.require('java.nio.charset.Charset');
goog.require('javaemul.internal.Exceptions');
goog.require('javaemul.internal.Primitives');
goog.require('javaemul.internal.primitives.$byte');
goog.require('javaemul.internal.primitives.$char');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');

const ByteArrayOutputStream = goog.require('java.io.ByteArrayOutputStream$impl');
exports = ByteArrayOutputStream;
