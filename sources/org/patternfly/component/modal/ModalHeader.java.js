goog.module('org.patternfly.component.modal.ModalHeader');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.Class');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.jboss.elemento.logger.Logger');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.component.modal.ModalHeaderDescription');
goog.require('org.patternfly.component.modal.ModalHeaderTitle');
goog.require('org.patternfly.component.modal.ModalSubComponent');
goog.require('org.patternfly.component.popover.Popover');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.icon.IconSets.patternfly');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const ModalHeader = goog.require('org.patternfly.component.modal.ModalHeader$impl');
exports = ModalHeader;
