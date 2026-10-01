goog.module('org.patternfly.component.wizard.WizardHeader');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.component.wizard.Wizard');
goog.require('org.patternfly.component.wizard.WizardHeaderDescription');
goog.require('org.patternfly.component.wizard.WizardHeaderTitle');
goog.require('org.patternfly.component.wizard.WizardSubComponent');
goog.require('org.patternfly.handler.ComponentHandler');
goog.require('org.patternfly.icon.IconSets.rhMicrons');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const WizardHeader = goog.require('org.patternfly.component.wizard.WizardHeader$impl');
exports = WizardHeader;
