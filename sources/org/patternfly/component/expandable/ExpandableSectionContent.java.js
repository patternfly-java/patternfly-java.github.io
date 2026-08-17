goog.module('org.patternfly.component.expandable.ExpandableSectionContent');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.ElementTextMethods');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.expandable.ExpandableSectionSubComponent');
goog.require('org.patternfly.core.Roles');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const ExpandableSectionContent = goog.require('org.patternfly.component.expandable.ExpandableSectionContent$impl');
exports = ExpandableSectionContent;
