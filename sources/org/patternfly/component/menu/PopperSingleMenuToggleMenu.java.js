goog.module('org.patternfly.component.menu.PopperSingleMenuToggleMenu');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.TypedBuilder');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.SelectionMode');
goog.require('org.patternfly.component.menu.Menu');
goog.require('org.patternfly.component.menu.MenuItem');
goog.require('org.patternfly.component.menu.MenuToggle');
goog.require('org.patternfly.component.menu.MenuType');
goog.require('org.patternfly.component.menu.PopperMenuToggleMenu');
goog.require('org.patternfly.handler.SelectHandler');
goog.require('org.patternfly.popper.TriggerAction');
goog.require('vmbootstrap.Casts');

const PopperSingleMenuToggleMenu = goog.require('org.patternfly.component.menu.PopperSingleMenuToggleMenu$impl');
exports = PopperSingleMenuToggleMenu;
