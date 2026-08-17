goog.module('java.util.stream.TerminatableStream');

goog.require('java.lang.Error');
goog.require('java.lang.IllegalStateException');
goog.require('java.lang.Object');
goog.require('java.lang.Runnable');
goog.require('java.lang.RuntimeException');
goog.require('java.lang.String');
goog.require('java.lang.Throwable');
goog.require('java.util.ArrayList');
goog.require('java.util.List');
goog.require('java.util.function.Consumer');
goog.require('javaemul.internal.Asserts');
goog.require('javaemul.internal.Exceptions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Casts');

const TerminatableStream = goog.require('java.util.stream.TerminatableStream$impl');
exports = TerminatableStream;
