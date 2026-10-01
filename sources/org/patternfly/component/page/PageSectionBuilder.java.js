goog.module('org.patternfly.component.page.PageSectionBuilder');

goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.ElementAttributeMethods');
goog.require('org.jboss.elemento.ElementClassListMethods');
goog.require('org.jboss.elemento.ElementConsumerMethods');
goog.require('org.jboss.elemento.ElementContainerMethods');
goog.require('org.jboss.elemento.ElementEventMethods');
goog.require('org.jboss.elemento.ElementIdMethods');
goog.require('org.jboss.elemento.ElementQueryMethods');
goog.require('org.jboss.elemento.ElementTextMethods');
goog.require('org.jboss.elemento.HTMLElementAttributeMethods');
goog.require('org.jboss.elemento.HTMLElementDataMethods');
goog.require('org.jboss.elemento.HTMLElementStyleMethods');
goog.require('org.jboss.elemento.HTMLElementVisibilityMethods');
goog.require('org.patternfly.component.page.PageSectionLike');
goog.require('org.patternfly.component.page.PageSubComponent');
goog.require('org.patternfly.style.Breakpoint');
goog.require('org.patternfly.style.Breakpoints');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Padding');
goog.require('org.patternfly.style.Sticky');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const PageSectionBuilder = goog.require('org.patternfly.component.page.PageSectionBuilder$impl');
exports = PageSectionBuilder;
