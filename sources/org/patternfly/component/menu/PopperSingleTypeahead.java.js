goog.module('org.patternfly.component.menu.PopperSingleTypeahead');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.Node.$Overlay');
goog.require('elemental2.promise.Promise.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Function');
goog.require('java.util.function.Predicate');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.menu.Menu');
goog.require('org.patternfly.component.menu.MenuItem');
goog.require('org.patternfly.component.menu.MenuToggle');
goog.require('org.patternfly.component.menu.NoResults');
goog.require('org.patternfly.component.menu.PopperSingleMenuToggleMenu');
goog.require('org.patternfly.component.menu.PopperTypeahead');
goog.require('org.patternfly.component.menu.SearchFilter');
goog.require('org.patternfly.component.menu.TypeaheadSupport');
goog.require('org.patternfly.component.textinputgroup.BaseSearchInput');
goog.require('org.patternfly.component.textinputgroup.SearchInput');
goog.require('org.patternfly.handler.ChangeHandler');
goog.require('org.patternfly.popper.TriggerAction');
goog.require('vmbootstrap.Casts');

const PopperSingleTypeahead = goog.require('org.patternfly.component.menu.PopperSingleTypeahead$impl');
exports = PopperSingleTypeahead;
