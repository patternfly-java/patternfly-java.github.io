goog.module('org.patternfly.component.KicHandler');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.EventListener.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.HTMLInputElement.$Overlay');
goog.require('elemental2.dom.HTMLTextAreaElement.$Overlay');
goog.require('java.lang.Object');
goog.require('java.util.ArrayList');
goog.require('java.util.List');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.EventType');
goog.require('org.jboss.elemento.TypedBuilder');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.handler.ChangeHandler');
goog.require('vmbootstrap.Casts');

const KicHandler = goog.require('org.patternfly.component.KicHandler$impl');
exports = KicHandler;
