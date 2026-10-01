goog.module('org.patternfly.filter.Filter$impl');

const Iterable = goog.require('java.lang.Iterable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let StreamSupport = goog.forwardDeclare('java.util.stream.StreamSupport$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let FilterAttribute = goog.forwardDeclare('org.patternfly.filter.FilterAttribute$impl');
let FilterAttributeModifier = goog.forwardDeclare('org.patternfly.filter.FilterAttributeModifier$impl');
let FilterChangeHandler = goog.forwardDeclare('org.patternfly.filter.FilterChangeHandler$impl');
let FilterOperator = goog.forwardDeclare('org.patternfly.filter.FilterOperator$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @implements {Iterable<FilterAttribute<T, ?>>}
 */
class Filter extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {FilterOperator} @nodts*/
  this.f_operator__org_patternfly_filter_Filter_;
  /**@type {Map<?string, FilterAttribute<T, ?>>} @nodts*/
  this.f_attributes__org_patternfly_filter_Filter_;
  /**@type {List<FilterChangeHandler<T>>} @nodts*/
  this.f_changeHandler__org_patternfly_filter_Filter_;
 }
 /** @nodts @template T @return {!Filter<T>} */
 static $create__org_patternfly_filter_FilterOperator(/** FilterOperator */ operator) {
  Filter.$clinit();
  let $instance = new Filter();
  $instance.$ctor__org_patternfly_filter_Filter__org_patternfly_filter_FilterOperator__void(operator);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_filter_Filter__org_patternfly_filter_FilterOperator__void(/** FilterOperator */ operator) {
  this.$ctor__java_lang_Object__void();
  this.f_operator__org_patternfly_filter_Filter_ = operator;
  this.f_attributes__org_patternfly_filter_Filter_ = (/**@type {!HashMap<?string, FilterAttribute<T, ?>>}*/ (HashMap.$create__()));
  this.f_changeHandler__org_patternfly_filter_Filter_ = (/**@type {!ArrayList<FilterChangeHandler<T>>}*/ (ArrayList.$create__()));
 }
 /** @nodts @template V @return {Filter<T>} */
 m_add__org_patternfly_filter_FilterAttribute__org_patternfly_filter_Filter(/** FilterAttribute<T, V> */ attribute) {
  this.f_attributes__org_patternfly_filter_Filter_.put(attribute.f_name__org_patternfly_filter_FilterAttribute, attribute);
  return this;
 }
 /** @override @return {?string} */
 toString() {
  return 'Filter(' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_attributes__org_patternfly_filter_Filter_.values()) + ')';
 }
 /** @override @nodts @return {Iterator<FilterAttribute<T, ?>>} */
 m_iterator__java_util_Iterator() {
  return this.f_attributes__org_patternfly_filter_Filter_.values().m_iterator__java_util_Iterator();
 }
 /** @nodts @return {List<T>} */
 m_filter__java_util_List__java_util_List(/** List<T> */ objects) {
  return this.m_filter__java_util_List__java_util_function_BiConsumer__java_util_List(objects, null);
 }
 /** @nodts @return {List<T>} */
 m_filter__java_util_List__java_util_function_BiConsumer__java_util_List(/** List<T> */ objects, /** BiConsumer<T, ?boolean> */ callback) {
  if (this.m_defined__boolean() && !$Equality.$same(objects, null)) {
   let matches = /**@type {!ArrayList<T>}*/ (ArrayList.$create__());
   for (let $iterator = objects.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let object = $iterator.m_next__java_lang_Object();
    {
     if (!$Equality.$same(object, null)) {
      let match = this.m_match__java_lang_Object__boolean(object);
      if (!$Equality.$same(callback, null)) {
       callback.m_accept__java_lang_Object__java_lang_Object__void(object, match);
      }
      if (match) {
       matches.add(object);
      }
     }
    }
   }
   return matches;
  }
  return objects;
 }
 /** @nodts @return {boolean} */
 m_match__java_lang_Object__boolean(/** T */ object) {
  if (this.m_defined__boolean()) {
   let matches = $Equality.$same(this.f_operator__org_patternfly_filter_Filter_, FilterOperator.f_AND__org_patternfly_filter_FilterOperator);
   for (let $iterator = this.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let filterAttribute = /**@type {FilterAttribute<T, *>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), FilterAttribute));
    {
     if (filterAttribute.m_defined__boolean()) {
      if ($Equality.$same(this.f_operator__org_patternfly_filter_Filter_, FilterOperator.f_AND__org_patternfly_filter_FilterOperator)) {
       matches = matches && filterAttribute.m_match__java_lang_Object__boolean(object);
      } else {
       matches = matches || filterAttribute.m_match__java_lang_Object__boolean(object);
      }
     }
    }
   }
   return matches;
  }
  return false;
 }
 /** @nodts @return {boolean} */
 m_defined__boolean() {
  for (let $iterator = this.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let filterAttribute = /**@type {FilterAttribute<T, *>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), FilterAttribute));
   {
    if (filterAttribute.m_defined__boolean()) {
     return true;
    }
   }
  }
  return false;
 }
 /** @nodts @return {boolean} */
 m_defined__java_lang_String__boolean(/** ?string */ name) {
  let filterAttribute = /**@type {FilterAttribute<T, *>}*/ ($Casts.$to(this.f_attributes__org_patternfly_filter_Filter_.get(name), FilterAttribute));
  if (!$Equality.$same(filterAttribute, null)) {
   return filterAttribute.m_defined__boolean();
  }
  return false;
 }
 /** @nodts @template V @return {FilterAttribute<T, V>} */
 m_get__java_lang_String__org_patternfly_filter_FilterAttribute(/** ?string */ name) {
  let filterAttribute = /**@type {FilterAttribute<T, *>}*/ ($Casts.$to(this.f_attributes__org_patternfly_filter_Filter_.get(name), FilterAttribute));
  if (!$Equality.$same(filterAttribute, null)) {
   return /**@type {FilterAttribute<T, V>}*/ (filterAttribute);
  }
  return null;
 }
 /** @nodts @template V */
 m_set__java_lang_String__java_lang_Object__void(/** ?string */ name, /** V */ value) {
  this.m_set__java_lang_String__java_lang_Object__org_patternfly_filter_FilterAttributeModifier__java_lang_String__void(name, value, FilterAttributeModifier.$adapt(/**  @return {V}*/ ((/** V */ v1, /** V */ v2) =>{
   return value;
  })), Filter.f_DEFAULT_ORIGIN__org_patternfly_filter_Filter);
 }
 /** @nodts @template V */
 m_set__java_lang_String__java_lang_Object__java_lang_String__void(/** ?string */ name, /** V */ value, /** ?string */ origin) {
  this.m_set__java_lang_String__java_lang_Object__org_patternfly_filter_FilterAttributeModifier__java_lang_String__void(name, value, FilterAttributeModifier.$adapt(/**  @return {V}*/ ((/** V */ v1, /** V */ v2) =>{
   return value;
  })), origin);
 }
 /** @nodts @template V */
 m_set__java_lang_String__java_lang_Object__org_patternfly_filter_FilterAttributeModifier__void(/** ?string */ name, /** V */ value, /** FilterAttributeModifier<V> */ modifier) {
  this.m_set__java_lang_String__java_lang_Object__org_patternfly_filter_FilterAttributeModifier__java_lang_String__void(name, value, modifier, Filter.f_DEFAULT_ORIGIN__org_patternfly_filter_Filter);
 }
 /** @nodts @template V */
 m_set__java_lang_String__java_lang_Object__org_patternfly_filter_FilterAttributeModifier__java_lang_String__void(/** ?string */ name, /** V */ value, /** FilterAttributeModifier<V> */ modifier, /** ?string */ origin) {
  let filterAttribute = /**@type {FilterAttribute<T, *>}*/ ($Casts.$to(this.f_attributes__org_patternfly_filter_Filter_.get(name), FilterAttribute));
  if (!$Equality.$same(filterAttribute, null)) {
   let tfa = /**@type {FilterAttribute<T, V>}*/ (filterAttribute);
   let newValue = modifier.m_modify__java_lang_Object__java_lang_Object__java_lang_Object(tfa.m_value__java_lang_Object(), value);
   if (tfa.m_set__java_lang_Object__boolean(newValue)) {
    this.m_notifyChangeHandlers__java_lang_String__void_$p_org_patternfly_filter_Filter(origin);
   }
  }
 }
 /** @nodts */
 m_reset__java_lang_String__void(/** ?string */ name) {
  this.m_reset__java_lang_String__java_lang_String__void(name, Filter.f_DEFAULT_ORIGIN__org_patternfly_filter_Filter);
 }
 /** @nodts */
 m_reset__java_lang_String__java_lang_String__void(/** ?string */ name, /** ?string */ origin) {
  if (this.m_resetInternal__java_lang_String__boolean_$p_org_patternfly_filter_Filter(name)) {
   this.m_notifyChangeHandlers__java_lang_String__void_$p_org_patternfly_filter_Filter(origin);
  }
 }
 /** @nodts */
 m_resetAll__void() {
  this.m_resetAll__java_lang_String__void(Filter.f_DEFAULT_ORIGIN__org_patternfly_filter_Filter);
 }
 /** @nodts */
 m_resetAll__java_lang_String__void(/** ?string */ origin) {
  let anyReset = false;
  for (let $iterator = this.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let filterAttribute = /**@type {FilterAttribute<T, *>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), FilterAttribute));
   {
    let attributeReset = filterAttribute.m_reset__boolean();
    anyReset = anyReset || attributeReset;
   }
  }
  if (anyReset) {
   this.m_notifyChangeHandlers__java_lang_String__void_$p_org_patternfly_filter_Filter(origin);
  }
 }
 /** @nodts @return {?string} */
 m_save__java_lang_String() {
  return /**@type {?string}*/ ($Casts.$to((/**@type {Stream<?string>}*/ ((/**@type {Stream<FilterAttribute<T, ?>>}*/ (StreamSupport.m_stream__java_util_Spliterator__boolean__java_util_stream_Stream(this.m_spliterator__java_util_Spliterator(), false))).m_filter__java_util_function_Predicate__java_util_stream_Stream(Predicate.$adapt(/**  @return {boolean}*/ ((/** FilterAttribute<T, ?> */ filterAttribute) =>{
   let filterAttribute_1 = /**@type {FilterAttribute<T, *>}*/ ($Casts.$to(filterAttribute, FilterAttribute));
   return filterAttribute_1.f_persistent__org_patternfly_filter_FilterAttribute && filterAttribute_1.m_defined__boolean();
  }))).m_map__java_util_function_Function__java_util_stream_Stream(j_u_function_Function.$adapt(/**  @return {?string}*/ ((/** FilterAttribute<T, ?> */ filterAttribute_2) =>{
   let filterAttribute_3 = /**@type {FilterAttribute<T, *>}*/ ($Casts.$to(filterAttribute_2, FilterAttribute));
   return j_l_String.m_valueOf__java_lang_Object__java_lang_String(filterAttribute_3.f_name__org_patternfly_filter_FilterAttribute) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Filter.f_NAME_VALUE_SEPARATOR__org_patternfly_filter_Filter_) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(filterAttribute_3.m_valueAsString__java_lang_String());
  }))))).m_collect__java_util_stream_Collector__java_lang_Object(Collectors.m_joining__java_lang_CharSequence__java_util_stream_Collector(Filter.f_FILTER_ATTRIBUTE_SEPARATOR__org_patternfly_filter_Filter_)), j_l_String));
 }
 /** @nodts */
 m_load__java_lang_String__void(/** ?string */ filter) {
  if (!$Equality.$same(filter, null) && !j_l_String.m_isEmpty__java_lang_String__boolean(j_l_String.m_trim__java_lang_String__java_lang_String(filter))) {
   let parts = j_l_String.m_split__java_lang_String__java_lang_String__arrayOf_java_lang_String(filter, Filter.f_FILTER_ATTRIBUTE_SEPARATOR_REGEX__org_patternfly_filter_Filter_);
   for (let $array = parts, $index = 0; $index < $array.length; $index++) {
    let part = $array[$index];
    {
     if (!$Equality.$same(part, null) && j_l_String.m_contains__java_lang_String__java_lang_CharSequence__boolean(part, Filter.f_NAME_VALUE_SEPARATOR__org_patternfly_filter_Filter_)) {
      let nv = j_l_String.m_split__java_lang_String__java_lang_String__int__arrayOf_java_lang_String(part, Filter.f_NAME_VALUE_SEPARATOR__org_patternfly_filter_Filter_, 2);
      let filterAttribute = /**@type {FilterAttribute<T, *>}*/ ($Casts.$to(this.f_attributes__org_patternfly_filter_Filter_.get(nv[0]), FilterAttribute));
      if (!$Equality.$same(filterAttribute, null)) {
       filterAttribute.m_loadValue__java_lang_String__void(nv[1]);
      }
     }
    }
   }
  }
 }
 /** @nodts @return {Filter<T>} */
 m_onChange__org_patternfly_filter_FilterChangeHandler__org_patternfly_filter_Filter(/** FilterChangeHandler<T> */ changeHandler) {
  this.f_changeHandler__org_patternfly_filter_Filter_.add(changeHandler);
  return this;
 }
 /** @nodts @return {boolean} */
 m_resetInternal__java_lang_String__boolean_$p_org_patternfly_filter_Filter(/** ?string */ name) {
  let filterAttribute = /**@type {FilterAttribute<T, *>}*/ ($Casts.$to(this.f_attributes__org_patternfly_filter_Filter_.get(name), FilterAttribute));
  if (!$Equality.$same(filterAttribute, null)) {
   return filterAttribute.m_reset__boolean();
  }
  return false;
 }
 /** @nodts */
 m_notifyChangeHandlers__java_lang_String__void_$p_org_patternfly_filter_Filter(/** ?string */ origin) {
  for (let $iterator = this.f_changeHandler__org_patternfly_filter_Filter_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let fch = /**@type {FilterChangeHandler<T>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), /**@type {Function}*/ (FilterChangeHandler)));
   {
    fch.m_onFilterChange__org_patternfly_filter_Filter__java_lang_String__void(this, origin);
   }
  }
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<FilterAttribute<T, ?>>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<FilterAttribute<T, ?>>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 /** @nodts */
 static $clinit() {
  Filter.$clinit = () =>{};
  Filter.$loadModules();
  j_l_Object.$clinit();
  Iterable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Filter;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Predicate = goog.module.get('java.util.function.Predicate$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  StreamSupport = goog.module.get('java.util.stream.StreamSupport$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  FilterAttribute = goog.module.get('org.patternfly.filter.FilterAttribute$impl');
  FilterAttributeModifier = goog.module.get('org.patternfly.filter.FilterAttributeModifier$impl');
  FilterChangeHandler = goog.module.get('org.patternfly.filter.FilterChangeHandler$impl');
  FilterOperator = goog.module.get('org.patternfly.filter.FilterOperator$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
Filter.f_DEFAULT_ORIGIN__org_patternfly_filter_Filter = 'org.patternfly.filter.defaultOrigin';
/**@const {string} @nodts*/
Filter.f_FILTER_ATTRIBUTE_SEPARATOR__org_patternfly_filter_Filter_ = '|';
/**@const {string} @nodts*/
Filter.f_FILTER_ATTRIBUTE_SEPARATOR_REGEX__org_patternfly_filter_Filter_ = '\\|';
/**@const {string} @nodts*/
Filter.f_NAME_VALUE_SEPARATOR__org_patternfly_filter_Filter_ = '=';
Iterable.$markImplementor(Filter);
$Util.$setClassMetadata(Filter, 'org.patternfly.filter.Filter');

exports = Filter;

//# sourceMappingURL=Filter.js.map
