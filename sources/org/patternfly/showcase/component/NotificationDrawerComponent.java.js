goog.module('org.patternfly.showcase.component.NotificationDrawerComponent');

goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.Class');
goog.require('java.lang.String');
goog.require('java.util.function.Supplier');
goog.require('jsinterop.base.JsPropertyMap.$Overlay');
goog.require('nativebootstrap.Util');
goog.require('org.patternfly.component.Severity');
goog.require('org.patternfly.component.notification.NotificationDrawer');
goog.require('org.patternfly.component.notification.NotificationDrawerBody');
goog.require('org.patternfly.component.notification.NotificationDrawerHeader');
goog.require('org.patternfly.component.notification.NotificationDrawerItem');
goog.require('org.patternfly.component.notification.NotificationDrawerItemBody');
goog.require('org.patternfly.component.notification.NotificationDrawerList');
goog.require('org.patternfly.showcase.ApiDoc.Type');
goog.require('org.patternfly.showcase.BuildingBlocks');
goog.require('org.patternfly.showcase.Code');
goog.require('org.patternfly.showcase.Data');
goog.require('org.patternfly.showcase.LoremIpsum');
goog.require('org.patternfly.showcase.Snippet');
goog.require('org.patternfly.showcase.SnippetPage');
goog.require('org.patternfly.showcase.component.Component.$Overlay');
goog.require('vmbootstrap.Casts');

const NotificationDrawerComponent = goog.require('org.patternfly.showcase.component.NotificationDrawerComponent$impl');
exports = NotificationDrawerComponent;
