goog.module('org.patternfly.component.tooltip.TooltipToggle');

goog.require('elemental2.dom.DomGlobal.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.Class');
goog.require('java.lang.Object');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.logger.Logger');
goog.require('org.patternfly.component.tooltip.Tooltip');
goog.require('vmbootstrap.Casts');

const TooltipToggle = goog.require('org.patternfly.component.tooltip.TooltipToggle$impl');
exports = TooltipToggle;
