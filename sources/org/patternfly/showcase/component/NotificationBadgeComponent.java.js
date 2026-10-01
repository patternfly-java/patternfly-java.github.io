goog.module('org.patternfly.showcase.component.NotificationBadgeComponent');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.Class');
goog.require('java.lang.Integer');
goog.require('java.lang.String');
goog.require('java.util.function.Supplier');
goog.require('jsinterop.base.JsPropertyMap.$Overlay');
goog.require('nativebootstrap.Util');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.component.notification.NotificationBadge');
goog.require('org.patternfly.core.ObservableValue');
goog.require('org.patternfly.core.ObservableValue.Subscriber');
goog.require('org.patternfly.handler.ComponentHandler');
goog.require('org.patternfly.layout.flex.Flex');
goog.require('org.patternfly.layout.flex.Gap');
goog.require('org.patternfly.layout.stack.Stack');
goog.require('org.patternfly.layout.stack.StackItem');
goog.require('org.patternfly.showcase.ApiDoc.Type');
goog.require('org.patternfly.showcase.Code');
goog.require('org.patternfly.showcase.Data');
goog.require('org.patternfly.showcase.Snippet');
goog.require('org.patternfly.showcase.SnippetPage');
goog.require('org.patternfly.showcase.component.Component.$Overlay');
goog.require('vmbootstrap.Casts');

const NotificationBadgeComponent = goog.require('org.patternfly.showcase.component.NotificationBadgeComponent$impl');
exports = NotificationBadgeComponent;
