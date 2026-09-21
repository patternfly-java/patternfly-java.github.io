goog.module('java.io.Reader');

goog.require('java.io.IOException');
goog.require('java.lang.Object');
goog.require('javaemul.internal.Exceptions');
goog.require('javaemul.internal.Primitives');
goog.require('javaemul.internal.primitives.$char');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.LongUtils');

const Reader = goog.require('java.io.Reader$impl');
exports = Reader;
