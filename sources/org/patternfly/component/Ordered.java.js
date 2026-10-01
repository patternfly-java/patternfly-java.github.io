goog.module('org.patternfly.component.Ordered');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.Node.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.Comparator');
goog.require('java.util.TreeSet');
goog.require('jsinterop.base.JsPropertyMap.$Overlay');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.ElementContainerMethods');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.IsElement');
goog.require('org.jboss.elemento.TypedBuilder');
goog.require('org.patternfly.component.HasIdentifier');
goog.require('org.patternfly.component.HasItems');
goog.require('vmbootstrap.Casts');

const Ordered = goog.require('org.patternfly.component.Ordered$impl');
exports = Ordered;
