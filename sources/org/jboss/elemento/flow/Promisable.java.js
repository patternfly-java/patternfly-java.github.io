goog.module('org.jboss.elemento.flow.Promisable');

goog.require('elemental2.promise.IThenable.$Overlay');
goog.require('elemental2.promise.Promise.$Overlay');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.flow.FlowContext');

const Promisable = goog.require('org.jboss.elemento.flow.Promisable$impl');
exports = Promisable;
