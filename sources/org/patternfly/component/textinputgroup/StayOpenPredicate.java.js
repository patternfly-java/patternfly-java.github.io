goog.module('org.patternfly.component.textinputgroup.StayOpenPredicate');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('java.util.Objects');
goog.require('nativebootstrap.Util');
goog.require('org.patternfly.component.menu.Menu');
goog.require('org.patternfly.component.textinputgroup.BaseSearchInput');
goog.require('org.patternfly.component.textinputgroup.StayOpenPredicate.$LambdaAdaptor');

const StayOpenPredicate = goog.require('org.patternfly.component.textinputgroup.StayOpenPredicate$impl');
exports = StayOpenPredicate;
