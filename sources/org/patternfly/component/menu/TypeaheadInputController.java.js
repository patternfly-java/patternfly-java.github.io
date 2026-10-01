goog.module('org.patternfly.component.menu.TypeaheadInputController');

goog.require('elemental2.promise.IThenable.$Overlay');
goog.require('java.lang.Object');
goog.require('java.lang.Runnable');
goog.require('java.lang.String');
goog.require('java.lang.Void');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Callback');
goog.require('org.jboss.elemento.Scheduler');
goog.require('org.patternfly.async.ReloadStrategy');
goog.require('org.patternfly.component.menu.Menu');
goog.require('org.patternfly.component.menu.NoResults');
goog.require('org.patternfly.component.menu.SearchFilter');
goog.require('vmbootstrap.Casts');

const TypeaheadInputController = goog.require('org.patternfly.component.menu.TypeaheadInputController$impl');
exports = TypeaheadInputController;
