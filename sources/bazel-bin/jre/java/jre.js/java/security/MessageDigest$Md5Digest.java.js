goog.module('java.security.MessageDigest.Md5Digest');

goog.require('java.lang.System');
goog.require('java.security.MessageDigest');
goog.require('javaemul.internal.Primitives');
goog.require('javaemul.internal.primitives.$byte');
goog.require('javaemul.internal.primitives.$int');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.LongUtils');

const Md5Digest = goog.require('java.security.MessageDigest.Md5Digest$impl');
exports = Md5Digest;
