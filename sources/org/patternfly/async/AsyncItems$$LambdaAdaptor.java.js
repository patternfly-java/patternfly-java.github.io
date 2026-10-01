goog.module('org.patternfly.async.AsyncItems.$LambdaAdaptor');

goog.require('elemental2.promise.Promise.$Overlay');
goog.require('java.lang.Iterable');
goog.require('java.lang.Object');
goog.require('java.util.function.Function');
goog.require('nativebootstrap.Util');
goog.require('org.patternfly.async.AsyncItems');

const $LambdaAdaptor = goog.require('org.patternfly.async.AsyncItems.$LambdaAdaptor$impl');
exports = $LambdaAdaptor;
