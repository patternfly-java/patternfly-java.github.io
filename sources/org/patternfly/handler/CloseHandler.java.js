goog.module('org.patternfly.handler.CloseHandler');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('java.util.List');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Util');
goog.require('org.patternfly.handler.CloseHandler.$LambdaAdaptor');
goog.require('vmbootstrap.Casts');

const CloseHandler = goog.require('org.patternfly.handler.CloseHandler$impl');
exports = CloseHandler;
