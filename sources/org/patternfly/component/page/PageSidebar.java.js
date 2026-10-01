goog.module('org.patternfly.component.page.PageSidebar');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.Node.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.ArrayList');
goog.require('java.util.List');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.ElementContainerDelegate');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.Expandable');
goog.require('org.patternfly.component.page.PageSidebarBody');
goog.require('org.patternfly.component.page.PageSubComponent');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.handler.ToggleHandler');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const PageSidebar = goog.require('org.patternfly.component.page.PageSidebar$impl');
exports = PageSidebar;
