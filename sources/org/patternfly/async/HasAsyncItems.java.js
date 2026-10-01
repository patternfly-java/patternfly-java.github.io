goog.module('org.patternfly.async.HasAsyncItems');

goog.require('elemental2.promise.Promise.$Overlay');
goog.require('java.lang.Iterable');
goog.require('nativebootstrap.Util');
goog.require('org.patternfly.async.AsyncItems');
goog.require('org.patternfly.async.AsyncStatus');

const HasAsyncItems = goog.require('org.patternfly.async.HasAsyncItems$impl');
exports = HasAsyncItems;
