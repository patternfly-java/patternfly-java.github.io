goog.module('org.patternfly.component.notification.NotificationDrawer');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.ArrayList');
goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.Closeable');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.notification.NotificationDrawerBody');
goog.require('org.patternfly.component.notification.NotificationDrawerHeader');
goog.require('org.patternfly.handler.CloseHandler');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const NotificationDrawer = goog.require('org.patternfly.component.notification.NotificationDrawer$impl');
exports = NotificationDrawer;
