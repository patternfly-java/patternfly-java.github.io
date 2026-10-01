goog.module('org.patternfly.component.template.TemplateItem');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.EventListener.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.HashMap');
goog.require('java.util.Map');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.EventType');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.HasIdentifier');
goog.require('org.patternfly.component.template.TemplateSubComponent');
goog.require('org.patternfly.core.ComponentContext');
goog.require('org.patternfly.core.Dataset');
goog.require('org.patternfly.handler.ComponentHandler');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const TemplateItem = goog.require('org.patternfly.component.template.TemplateItem$impl');
exports = TemplateItem;
