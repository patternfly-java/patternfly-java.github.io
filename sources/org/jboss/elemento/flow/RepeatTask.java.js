goog.module('org.jboss.elemento.flow.RepeatTask');

goog.require('elemental2.promise.Promise.$Overlay');
goog.require('java.lang.Object');
goog.require('java.util.function.Predicate');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.flow.Flow');
goog.require('org.jboss.elemento.flow.FlowContext');
goog.require('org.jboss.elemento.flow.Repeat');
goog.require('org.jboss.elemento.flow.Task');

const RepeatTask = goog.require('org.jboss.elemento.flow.RepeatTask$impl');
exports = RepeatTask;
