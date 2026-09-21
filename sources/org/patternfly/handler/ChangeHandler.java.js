goog.module('org.patternfly.handler.ChangeHandler');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('java.util.List');
goog.require('java.util.Objects');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Util');
goog.require('org.patternfly.handler.ChangeHandler.$LambdaAdaptor');
goog.require('vmbootstrap.Casts');

const ChangeHandler = goog.require('org.patternfly.handler.ChangeHandler$impl');
exports = ChangeHandler;
