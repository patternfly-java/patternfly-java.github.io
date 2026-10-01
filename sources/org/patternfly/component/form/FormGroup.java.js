goog.module('org.patternfly.component.form.FormGroup');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.HashMap');
goog.require('java.util.Map');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.jboss.elemento.Id');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.HasIdentifier');
goog.require('org.patternfly.component.form.FormGroupControl');
goog.require('org.patternfly.component.form.FormGroupLabel');
goog.require('org.patternfly.component.form.FormGroupRole');
goog.require('org.patternfly.component.form.FormSubComponent');
goog.require('org.patternfly.core.Attributes');
goog.require('org.patternfly.core.ComponentContext');
goog.require('org.patternfly.core.Dataset');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const FormGroup = goog.require('org.patternfly.component.form.FormGroup$impl');
exports = FormGroup;
