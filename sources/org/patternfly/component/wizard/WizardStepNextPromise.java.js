goog.module('org.patternfly.component.wizard.WizardStepNextPromise');

goog.require('elemental2.promise.Promise.$Overlay');
goog.require('nativebootstrap.Util');
goog.require('org.patternfly.component.wizard.Wizard');
goog.require('org.patternfly.component.wizard.WizardStep');
goog.require('org.patternfly.component.wizard.WizardStepNextPromise.$LambdaAdaptor');

const WizardStepNextPromise = goog.require('org.patternfly.component.wizard.WizardStepNextPromise$impl');
exports = WizardStepNextPromise;
