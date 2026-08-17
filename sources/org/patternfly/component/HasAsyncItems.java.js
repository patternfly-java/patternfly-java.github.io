goog.module('org.patternfly.component.HasAsyncItems');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.promise.Promise.$Overlay');
goog.require('java.lang.Iterable');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.TypedBuilder');
goog.require('org.patternfly.component.AsyncItems');
goog.require('org.patternfly.component.HasIdentifier');
goog.require('org.patternfly.component.HasItems');
goog.require('org.patternfly.core.AsyncStatus');

const HasAsyncItems = goog.require('org.patternfly.component.HasAsyncItems$impl');
exports = HasAsyncItems;
