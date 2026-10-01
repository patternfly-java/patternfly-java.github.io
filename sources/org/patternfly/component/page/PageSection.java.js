goog.module('org.patternfly.component.page.PageSection');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.Node.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.ElementContainerDelegate');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.page.PageSectionBuilder');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Modifiers.Fill');
goog.require('org.patternfly.style.Modifiers.Glass');
goog.require('org.patternfly.style.Modifiers.NoFill');
goog.require('org.patternfly.style.Modifiers.Secondary');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const PageSection = goog.require('org.patternfly.component.page.PageSection$impl');
exports = PageSection;
