goog.module('org.patternfly.component.menu.MultiSelect');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.badge.Badge');
goog.require('org.patternfly.component.menu.Menu');
goog.require('org.patternfly.component.menu.MenuItem');
goog.require('org.patternfly.component.menu.MenuToggle');
goog.require('org.patternfly.component.menu.MultiMenuToggleMenu');
goog.require('org.patternfly.component.menu.StayOpenPredicate');

const MultiSelect = goog.require('org.patternfly.component.menu.MultiSelect$impl');
exports = MultiSelect;
