goog.module('org.patternfly.style.VariableAssignments.SVGBuilder');

goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.util.function.BiConsumer');
goog.require('java.util.function.Function');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.TypedBuilder');
goog.require('org.jboss.elemento.svg.SVGElement.$Overlay');
goog.require('org.jboss.elemento.svg.SVGElementStyleMethods');
goog.require('org.patternfly.style.Breakpoints');
goog.require('org.patternfly.style.Variable');
goog.require('org.patternfly.style.VariableAssignments');
goog.require('vmbootstrap.Casts');

const SVGBuilder = goog.require('org.patternfly.style.VariableAssignments.SVGBuilder$impl');
exports = SVGBuilder;
