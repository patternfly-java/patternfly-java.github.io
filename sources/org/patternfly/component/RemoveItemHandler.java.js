goog.module('org.patternfly.component.RemoveItemHandler');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.TypedBuilder');
goog.require('org.patternfly.component.HasIdentifier');
goog.require('org.patternfly.component.HasItems');
goog.require('org.patternfly.component.RemoveItemHandler.$LambdaAdaptor');

const RemoveItemHandler = goog.require('org.patternfly.component.RemoveItemHandler$impl');
exports = RemoveItemHandler;
