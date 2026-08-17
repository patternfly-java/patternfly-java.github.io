goog.module('java.security.MessageDigestSpi');

goog.require('java.lang.Object');
goog.require('java.lang.System');
goog.require('java.security.DigestException');
goog.require('javaemul.internal.Exceptions');
goog.require('nativebootstrap.Util');

const MessageDigestSpi = goog.require('java.security.MessageDigestSpi$impl');
exports = MessageDigestSpi;
