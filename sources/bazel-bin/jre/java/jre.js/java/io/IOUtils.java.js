goog.module('java.io.IOUtils');

goog.require('java.lang.IndexOutOfBoundsException');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('javaemul.internal.Exceptions');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('nativebootstrap.Util');

const IOUtils = goog.require('java.io.IOUtils$impl');
exports = IOUtils;
