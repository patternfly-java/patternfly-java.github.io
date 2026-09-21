goog.module('org.patternfly.style.VariableAssignments');

goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.util.function.BiConsumer');
goog.require('java.util.function.Function');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.patternfly.core.Tuple');
goog.require('org.patternfly.style.Breakpoint');
goog.require('org.patternfly.style.Breakpoints');
goog.require('org.patternfly.style.TypedModifier');
goog.require('org.patternfly.style.Variable');
goog.require('vmbootstrap.Casts');

const VariableAssignments = goog.require('org.patternfly.style.VariableAssignments$impl');
exports = VariableAssignments;
