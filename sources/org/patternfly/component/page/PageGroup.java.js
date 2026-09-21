goog.module('org.patternfly.component.page.PageGroup');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.SubComponent');
goog.require('org.patternfly.component.page.PageSectionLike');
goog.require('org.patternfly.style.Breakpoint');
goog.require('org.patternfly.style.Breakpoints');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Sticky');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const PageGroup = goog.require('org.patternfly.component.page.PageGroup$impl');
exports = PageGroup;
