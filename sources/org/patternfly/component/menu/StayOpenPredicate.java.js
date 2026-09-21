goog.module('org.patternfly.component.menu.StayOpenPredicate');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('java.util.Objects');
goog.require('nativebootstrap.Util');
goog.require('org.patternfly.component.menu.Menu');
goog.require('org.patternfly.component.menu.MenuToggle');
goog.require('org.patternfly.component.menu.StayOpenPredicate.$LambdaAdaptor');

const StayOpenPredicate = goog.require('org.patternfly.component.menu.StayOpenPredicate$impl');
exports = StayOpenPredicate;
