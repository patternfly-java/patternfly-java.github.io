goog.module('java.util.Base64.Encoder');

goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.nio.charset.StandardCharsets');
goog.require('nativebootstrap.Util');

const Encoder = goog.require('java.util.Base64.Encoder$impl');
exports = Encoder;
