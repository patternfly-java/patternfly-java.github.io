goog.module('org.patternfly.componentgroup.theme.ThemeManager');

goog.require('elemental2.dom.DomGlobal.$Overlay');
goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.EventListener.$Overlay');
goog.require('elemental2.dom.MediaQueryList.$Overlay');
goog.require('elemental2.dom.MediaQueryListEvent.$Overlay');
goog.require('elemental2.webstorage.WebStorageWindow.$Overlay');
goog.require('java.lang.Class');
goog.require('java.lang.Enum');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.util.LinkedHashSet');
goog.require('java.util.Set');
goog.require('java.util.function.Function');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.event.shared.HandlerRegistration');
goog.require('org.jboss.elemento.EventType');
goog.require('org.jboss.elemento.logger.Logger');
goog.require('org.patternfly.componentgroup.theme.SystemValue');
goog.require('vmbootstrap.Casts');

const ThemeManager = goog.require('org.patternfly.componentgroup.theme.ThemeManager$impl');
exports = ThemeManager;
