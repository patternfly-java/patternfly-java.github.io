goog.module('java.util.concurrent.atomic.AtomicLong');

goog.require('java.io.Serializable');
goog.require('java.lang.Long');
goog.require('java.lang.Number');
goog.require('javaemul.internal.Primitives');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.LongUtils');

const AtomicLong = goog.require('java.util.concurrent.atomic.AtomicLong$impl');
exports = AtomicLong;
