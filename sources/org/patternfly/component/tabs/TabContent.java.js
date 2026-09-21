goog.module('org.patternfly.component.tabs.TabContent');

goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.HashMap');
goog.require('java.util.Map');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.ElementTextMethods');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.tabs.TabContentBody');
goog.require('org.patternfly.component.tabs.TabSubComponent');
goog.require('org.patternfly.core.Attributes');
goog.require('org.patternfly.core.ComponentContext');
goog.require('org.patternfly.core.Roles');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Modifiers.Disabled');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const TabContent = goog.require('org.patternfly.component.tabs.TabContent$impl');
exports = TabContent;
