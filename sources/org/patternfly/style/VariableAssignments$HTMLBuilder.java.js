goog.module('org.patternfly.style.VariableAssignments.HTMLBuilder');

goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.util.function.BiConsumer');
goog.require('java.util.function.Function');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.HTMLElementStyleMethods');
goog.require('org.jboss.elemento.TypedBuilder');
goog.require('org.patternfly.style.Breakpoints');
goog.require('org.patternfly.style.Variable');
goog.require('org.patternfly.style.VariableAssignments');
goog.require('vmbootstrap.Casts');

const HTMLBuilder = goog.require('org.patternfly.style.VariableAssignments.HTMLBuilder$impl');
exports = HTMLBuilder;
