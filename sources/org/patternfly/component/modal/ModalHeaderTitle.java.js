goog.module('org.patternfly.component.modal.ModalHeaderTitle');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.HTMLHeadingElement.$Overlay');
goog.require('java.lang.Runnable');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.ElementTextDelegate');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.ComponentIcon');
goog.require('org.patternfly.component.Severity');
goog.require('org.patternfly.component.modal.ModalSubComponent');
goog.require('org.patternfly.icon.PredefinedIcon');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.TypedModifier');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const ModalHeaderTitle = goog.require('org.patternfly.component.modal.ModalHeaderTitle$impl');
exports = ModalHeaderTitle;
