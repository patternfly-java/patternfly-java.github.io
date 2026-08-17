goog.module('org.jboss.elemento.flow.ParallelTasks');

goog.require('elemental2.promise.Promise.$Overlay');
goog.require('java.lang.Object');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.flow.Flow');
goog.require('org.jboss.elemento.flow.FlowContext');
goog.require('org.jboss.elemento.flow.Sequence');
goog.require('org.jboss.elemento.flow.Task');

const ParallelTasks = goog.require('org.jboss.elemento.flow.ParallelTasks$impl');
exports = ParallelTasks;
