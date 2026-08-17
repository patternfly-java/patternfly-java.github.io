goog.module('org.patternfly.component.help.HelperTextItem');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.ElementTextMethods');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.ComponentIcon');
goog.require('org.patternfly.component.ComponentIconAndText');
goog.require('org.patternfly.component.HasValue');
goog.require('org.patternfly.component.IconPosition');
goog.require('org.patternfly.component.ValidationStatus');
goog.require('org.patternfly.component.help.HelperTextSubComponent');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.icon.PredefinedIcon');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const HelperTextItem = goog.require('org.patternfly.component.help.HelperTextItem$impl');
exports = HelperTextItem;
