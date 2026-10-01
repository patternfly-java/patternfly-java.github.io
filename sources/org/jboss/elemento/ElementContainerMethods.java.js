goog.module('org.jboss.elemento.ElementContainerMethods');

goog.require('elemental2.dom.Document.$Overlay');
goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.Node.$Overlay');
goog.require('java.lang.Iterable');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.IsElement');
goog.require('org.jboss.elemento.TypedBuilder');
goog.require('vmbootstrap.Casts');

const ElementContainerMethods = goog.require('org.jboss.elemento.ElementContainerMethods$impl');
exports = ElementContainerMethods;
