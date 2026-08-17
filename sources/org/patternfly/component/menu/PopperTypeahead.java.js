goog.module('org.patternfly.component.menu.PopperTypeahead');

goog.require('elemental2.promise.Promise.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Function');
goog.require('nativebootstrap.Util');
goog.require('org.patternfly.component.menu.MenuItem');
goog.require('org.patternfly.component.menu.NoResults');
goog.require('org.patternfly.component.menu.PopperMenuToggleMenu');
goog.require('org.patternfly.component.menu.SearchFilter');
goog.require('vmbootstrap.Casts');

const PopperTypeahead = goog.require('org.patternfly.component.menu.PopperTypeahead$impl');
exports = PopperTypeahead;
