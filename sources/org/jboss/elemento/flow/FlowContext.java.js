goog.module('org.jboss.elemento.flow.FlowContext');

goog.require('elemental2.promise.Promise.$Overlay');
goog.require('java.lang.Object');
goog.require('java.lang.StringBuilder');
goog.require('java.util.HashMap');
goog.require('java.util.Map');
goog.require('java.util.Set');
goog.require('java.util.Stack');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.flow.FlowRunner');
goog.require('org.jboss.elemento.flow.FlowStatus');
goog.require('org.jboss.elemento.flow.Progress');
goog.require('vmbootstrap.Objects');

const FlowContext = goog.require('org.jboss.elemento.flow.FlowContext$impl');
exports = FlowContext;
