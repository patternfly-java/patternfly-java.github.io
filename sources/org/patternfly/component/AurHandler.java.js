goog.module('org.patternfly.component.AurHandler');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.Object');
goog.require('java.util.ArrayList');
goog.require('java.util.List');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.TypedBuilder');
goog.require('org.patternfly.component.AddItemHandler');
goog.require('org.patternfly.component.HasIdentifier');
goog.require('org.patternfly.component.HasItems');
goog.require('org.patternfly.component.RemoveItemHandler');
goog.require('org.patternfly.component.UpdateItemHandler');
goog.require('vmbootstrap.Casts');

const AurHandler = goog.require('org.patternfly.component.AurHandler$impl');
exports = AurHandler;
