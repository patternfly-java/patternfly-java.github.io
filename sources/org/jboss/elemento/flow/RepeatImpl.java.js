goog.module('org.jboss.elemento.flow.RepeatImpl');

goog.require('elemental2.dom.DomGlobal.$Overlay');
goog.require('elemental2.promise.IThenable.$Overlay');
goog.require('elemental2.promise.Promise.$Overlay');
goog.require('elemental2.promise.Promise.PromiseExecutorCallbackFn.ResolveCallbackFn.$Overlay');
goog.require('elemental2.promise.Promise.PromiseExecutorCallbackFn.ResolveCallbackFn.ResolveUnionType.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Predicate');
goog.require('javaemul.internal.Primitives');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.flow.FlowContext');
goog.require('org.jboss.elemento.flow.FlowRunner');
goog.require('org.jboss.elemento.flow.Repeat');
goog.require('org.jboss.elemento.flow.Task');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.LongUtils');

const RepeatImpl = goog.require('org.jboss.elemento.flow.RepeatImpl$impl');
exports = RepeatImpl;
