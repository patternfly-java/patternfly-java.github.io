goog.module('org.patternfly.component.help.HelperText');

goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.Class');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.jboss.elemento.logger.Logger');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.ValidationStatus');
goog.require('org.patternfly.component.help.HelperTextItem');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const HelperText = goog.require('org.patternfly.component.help.HelperText$impl');
exports = HelperText;
