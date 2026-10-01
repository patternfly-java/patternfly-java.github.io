goog.module('org.patternfly.component.HasItems');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.Node.$Overlay');
goog.require('java.lang.Iterable');
goog.require('java.util.ArrayList');
goog.require('java.util.List');
goog.require('java.util.function.BiConsumer');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.Function');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.IsElement');
goog.require('org.jboss.elemento.TypedBuilder');
goog.require('org.patternfly.component.AddItemHandler');
goog.require('org.patternfly.component.HasIdentifier');
goog.require('org.patternfly.component.RemoveItemHandler');
goog.require('org.patternfly.component.UpdateItemHandler');
goog.require('vmbootstrap.Casts');

const HasItems = goog.require('org.patternfly.component.HasItems$impl');
exports = HasItems;
