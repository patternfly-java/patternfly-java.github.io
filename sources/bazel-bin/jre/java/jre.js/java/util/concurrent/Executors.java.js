goog.module('java.util.concurrent.Executors');

goog.require('java.lang.NullPointerException');
goog.require('java.lang.Object');
goog.require('java.lang.Runnable');
goog.require('java.util.concurrent.Callable');
goog.require('java.util.concurrent.Executors.RunnableAdapter');
goog.require('javaemul.internal.Exceptions');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');

const Executors = goog.require('java.util.concurrent.Executors$impl');
exports = Executors;
