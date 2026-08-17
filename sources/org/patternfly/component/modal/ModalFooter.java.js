goog.module('org.patternfly.component.modal.ModalFooter');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.MutationRecord.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.ArrayList');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Attachable');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.component.modal.Modal');
goog.require('org.patternfly.component.modal.ModalFooter.ButtonHandler');
goog.require('org.patternfly.component.modal.ModalSubComponent');
goog.require('org.patternfly.handler.ComponentHandler');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const ModalFooter = goog.require('org.patternfly.component.modal.ModalFooter$impl');
exports = ModalFooter;
