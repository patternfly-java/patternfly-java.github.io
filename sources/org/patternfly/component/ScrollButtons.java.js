goog.module('org.patternfly.component.ScrollButtons');

goog.require('elemental2.dom.DomGlobal.$Overlay');
goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.EventListener.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.Boolean');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.EventType');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.core.LanguageDirection');
goog.require('org.patternfly.core.ObservableValue');
goog.require('org.patternfly.core.ObservableValue.Subscriber');
goog.require('org.patternfly.handler.ComponentHandler');
goog.require('org.patternfly.icon.IconSets.rhMicrons');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const ScrollButtons = goog.require('org.patternfly.component.ScrollButtons$impl');
exports = ScrollButtons;
