goog.module('java.io.StringWriter');

goog.require('java.io.IOUtils');
goog.require('java.io.Writer');
goog.require('java.lang.CharSequence');
goog.require('java.lang.String');
goog.require('java.lang.StringBuffer');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('javaemul.internal.Primitives');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.CharSequences');

const StringWriter = goog.require('java.io.StringWriter$impl');
exports = StringWriter;
