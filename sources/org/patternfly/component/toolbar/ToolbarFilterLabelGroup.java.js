goog.module('org.patternfly.component.toolbar.ToolbarFilterLabelGroup');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.ArrayList');
goog.require('java.util.Collections');
goog.require('java.util.List');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.Function');
goog.require('java.util.function.Predicate');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.patternfly.component.label.Label');
goog.require('org.patternfly.component.label.LabelGroup');
goog.require('org.patternfly.component.toolbar.ToolbarItem');
goog.require('org.patternfly.component.toolbar.ToolbarSubComponent');
goog.require('org.patternfly.filter.Filter');
goog.require('org.patternfly.filter.FilterChangeHandler');
goog.require('org.patternfly.handler.CloseHandler');
goog.require('vmbootstrap.Casts');

const ToolbarFilterLabelGroup = goog.require('org.patternfly.component.toolbar.ToolbarFilterLabelGroup$impl');
exports = ToolbarFilterLabelGroup;
