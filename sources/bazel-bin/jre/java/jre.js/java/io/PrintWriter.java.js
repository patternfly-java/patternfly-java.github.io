goog.module('java.io.PrintWriter');

goog.require('java.io.IOException');
goog.require('java.io.OutputStream');
goog.require('java.io.OutputStreamWriter');
goog.require('java.io.Writer');
goog.require('java.lang.CharSequence');
goog.require('java.lang.String');
goog.require('javaemul.internal.Exceptions');
goog.require('javaemul.internal.Primitives');
goog.require('javaemul.internal.primitives.$char');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.CharSequences');

const PrintWriter = goog.require('java.io.PrintWriter$impl');
exports = PrintWriter;
