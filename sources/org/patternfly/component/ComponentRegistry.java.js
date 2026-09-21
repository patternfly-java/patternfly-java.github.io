goog.module('org.patternfly.component.ComponentRegistry');

goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.util.HashMap');
goog.require('java.util.Map');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.TypedBuilder');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.SubComponent');
goog.require('vmbootstrap.Casts');

const ComponentRegistry = goog.require('org.patternfly.component.ComponentRegistry$impl');
exports = ComponentRegistry;
