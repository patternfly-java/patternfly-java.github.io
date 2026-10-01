goog.module('java.io.FilterOutputStream');

goog.require('java.io.IOException');
goog.require('java.io.IOUtils');
goog.require('java.io.OutputStream');
goog.require('java.lang.Throwable');
goog.require('javaemul.internal.Exceptions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');

const FilterOutputStream = goog.require('java.io.FilterOutputStream$impl');
exports = FilterOutputStream;
