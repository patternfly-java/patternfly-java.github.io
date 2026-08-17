goog.module('org.patternfly.component.table.Cell');

goog.require('elemental2.dom.HTMLTableCellElement.$Overlay');
goog.require('java.util.HashMap');
goog.require('java.util.Map');
goog.require('java.util.function.Supplier');
goog.require('jsinterop.base.JsPropertyMap.$Overlay');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.ElementTextMethods');
goog.require('org.jboss.elemento.TypedBuilder');
goog.require('org.patternfly.component.HasIdentifier');
goog.require('org.patternfly.component.table.TableSubComponent');
goog.require('org.patternfly.component.table.TableText');
goog.require('org.patternfly.component.table.Wrap');
goog.require('org.patternfly.core.ComponentContext');
goog.require('org.patternfly.core.Dataset');
goog.require('org.patternfly.style.Modifiers.Center');
goog.require('org.patternfly.style.TypedModifier');
goog.require('org.patternfly.style.Width');
goog.require('vmbootstrap.Casts');

const Cell = goog.require('org.patternfly.component.table.Cell$impl');
exports = Cell;
