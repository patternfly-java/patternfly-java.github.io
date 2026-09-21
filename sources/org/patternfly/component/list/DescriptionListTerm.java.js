goog.module('org.patternfly.component.list.DescriptionListTerm');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.Node.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.ElementContainerDelegate');
goog.require('org.jboss.elemento.ElementTextDelegate');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.ComponentIcon');
goog.require('org.patternfly.component.list.DescriptionListSubComponent');
goog.require('org.patternfly.component.popover.Popover');
goog.require('org.patternfly.core.Attributes');
goog.require('org.patternfly.core.Roles');
goog.require('org.patternfly.icon.PredefinedIcon');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const DescriptionListTerm = goog.require('org.patternfly.component.list.DescriptionListTerm$impl');
exports = DescriptionListTerm;
