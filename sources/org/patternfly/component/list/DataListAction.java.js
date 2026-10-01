goog.module('org.patternfly.component.list.DataListAction');

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
goog.require('org.patternfly.component.list.DataListSubComponent');
goog.require('org.patternfly.style.Breakpoints');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Visibility');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const DataListAction = goog.require('org.patternfly.component.list.DataListAction$impl');
exports = DataListAction;
