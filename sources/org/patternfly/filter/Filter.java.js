goog.module('org.patternfly.filter.Filter');

goog.require('java.lang.Iterable');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.util.ArrayList');
goog.require('java.util.HashMap');
goog.require('java.util.Iterator');
goog.require('java.util.List');
goog.require('java.util.Map');
goog.require('java.util.Spliterator');
goog.require('java.util.function.BiConsumer');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.Function');
goog.require('java.util.function.Predicate');
goog.require('java.util.stream.Collectors');
goog.require('java.util.stream.Stream');
goog.require('java.util.stream.StreamSupport');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.patternfly.filter.FilterAttribute');
goog.require('org.patternfly.filter.FilterAttributeModifier');
goog.require('org.patternfly.filter.FilterChangeHandler');
goog.require('org.patternfly.filter.FilterOperator');
goog.require('vmbootstrap.Casts');

const Filter = goog.require('org.patternfly.filter.Filter$impl');
exports = Filter;
