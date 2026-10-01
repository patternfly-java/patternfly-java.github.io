goog.module('java.security.SHA256Digest');

goog.require('java.lang.System');
goog.require('java.security.MessageDigest');
goog.require('java.util.Arrays');
goog.require('javaemul.internal.Primitives');
goog.require('javaemul.internal.primitives.$byte');
goog.require('javaemul.internal.primitives.$int');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.LongUtils');

const SHA256Digest = goog.require('java.security.SHA256Digest$impl');
exports = SHA256Digest;
