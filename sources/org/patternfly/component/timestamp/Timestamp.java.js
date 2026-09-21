goog.module('org.patternfly.component.timestamp.Timestamp');

goog.require('elemental2.core.JsDate.$Overlay');
goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.Class');
goog.require('java.lang.String');
goog.require('java.util.Date');
goog.require('javaemul.internal.Primitives');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.ElementTextDelegate');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.jboss.elemento.logger.Logger');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.timestamp.CustomFormat.$Overlay');
goog.require('org.patternfly.component.timestamp.FormatOptions.$Overlay');
goog.require('org.patternfly.component.timestamp.LocaleOptions.$Overlay');
goog.require('org.patternfly.component.timestamp.TimestampFormat');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Timestamp = goog.require('org.patternfly.component.timestamp.Timestamp$impl');
exports = Timestamp;
