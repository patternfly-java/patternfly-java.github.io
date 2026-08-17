goog.module('org.jboss.elemento.ElementContainerDelegate');

goog.require('elemental2.dom.Document.$Overlay');
goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.Node.$Overlay');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.ElementContainerMethods');
goog.require('org.jboss.elemento.TypedBuilder');
goog.require('vmbootstrap.Casts');

const ElementContainerDelegate = goog.require('org.jboss.elemento.ElementContainerDelegate$impl');
exports = ElementContainerDelegate;
