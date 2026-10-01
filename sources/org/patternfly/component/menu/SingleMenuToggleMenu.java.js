goog.module('org.patternfly.component.menu.SingleMenuToggleMenu');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.TypedBuilder');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.SelectionMode');
goog.require('org.patternfly.component.menu.Menu');
goog.require('org.patternfly.component.menu.MenuContent');
goog.require('org.patternfly.component.menu.MenuItem');
goog.require('org.patternfly.component.menu.MenuList');
goog.require('org.patternfly.component.menu.MenuToggle');
goog.require('org.patternfly.component.menu.MenuToggleMenu');
goog.require('org.patternfly.component.menu.MenuType');
goog.require('org.patternfly.component.menu.SingleSelectMenu');
goog.require('org.patternfly.handler.SelectHandler');
goog.require('vmbootstrap.Casts');

const SingleMenuToggleMenu = goog.require('org.patternfly.component.menu.SingleMenuToggleMenu$impl');
exports = SingleMenuToggleMenu;
