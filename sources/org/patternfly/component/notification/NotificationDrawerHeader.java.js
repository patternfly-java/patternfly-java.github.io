goog.module('org.patternfly.component.notification.NotificationDrawerHeader');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.HTMLHeadingElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.ElementTextDelegate');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.component.menu.Dropdown');
goog.require('org.patternfly.component.notification.NotificationDrawer');
goog.require('org.patternfly.component.notification.NotificationDrawerSubComponent');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.handler.ComponentHandler');
goog.require('org.patternfly.icon.IconSets.rhMicrons');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const NotificationDrawerHeader = goog.require('org.patternfly.component.notification.NotificationDrawerHeader$impl');
exports = NotificationDrawerHeader;
