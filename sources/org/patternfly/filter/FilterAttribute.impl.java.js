goog.module('org.patternfly.filter.FilterAttribute$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let FilterCondition = goog.forwardDeclare('org.patternfly.filter.FilterCondition$impl');

/**
 * @template T, V
 */
class FilterAttribute extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_name__org_patternfly_filter_FilterAttribute;
  /**@type {boolean} @nodts*/
  this.f_persistent__org_patternfly_filter_FilterAttribute = false;
  /**@type {FilterCondition<T, V>} @nodts*/
  this.f_condition__org_patternfly_filter_FilterAttribute_;
  /**@type {V} @nodts*/
  this.f_value__org_patternfly_filter_FilterAttribute_;
  /**@type {boolean} @nodts*/
  this.f_defined__org_patternfly_filter_FilterAttribute_ = false;
 }
 //Factory method corresponding to constructor 'FilterAttribute(String, FilterCondition)'.
 /** @nodts @template T, V @return {!FilterAttribute<T, V>} */
 static $create__java_lang_String__org_patternfly_filter_FilterCondition(/** ?string */ name, /** FilterCondition<T, V> */ condition) {
  FilterAttribute.$clinit();
  let $instance = new FilterAttribute();
  $instance.$ctor__org_patternfly_filter_FilterAttribute__java_lang_String__org_patternfly_filter_FilterCondition__void(name, condition);
  return $instance;
 }
 //Initialization from constructor 'FilterAttribute(String, FilterCondition)'.
 /** @nodts */
 $ctor__org_patternfly_filter_FilterAttribute__java_lang_String__org_patternfly_filter_FilterCondition__void(/** ?string */ name, /** FilterCondition<T, V> */ condition) {
  this.$ctor__org_patternfly_filter_FilterAttribute__java_lang_String__boolean__org_patternfly_filter_FilterCondition__void(name, false, condition);
 }
 //Factory method corresponding to constructor 'FilterAttribute(String, boolean, FilterCondition)'.
 /** @nodts @template T, V @return {!FilterAttribute<T, V>} */
 static $create__java_lang_String__boolean__org_patternfly_filter_FilterCondition(/** ?string */ name, /** boolean */ persistent, /** FilterCondition<T, V> */ condition) {
  FilterAttribute.$clinit();
  let $instance = new FilterAttribute();
  $instance.$ctor__org_patternfly_filter_FilterAttribute__java_lang_String__boolean__org_patternfly_filter_FilterCondition__void(name, persistent, condition);
  return $instance;
 }
 //Initialization from constructor 'FilterAttribute(String, boolean, FilterCondition)'.
 /** @nodts */
 $ctor__org_patternfly_filter_FilterAttribute__java_lang_String__boolean__org_patternfly_filter_FilterCondition__void(/** ?string */ name, /** boolean */ persistent, /** FilterCondition<T, V> */ condition) {
  this.$ctor__java_lang_Object__void();
  this.f_name__org_patternfly_filter_FilterAttribute = name;
  this.f_persistent__org_patternfly_filter_FilterAttribute = persistent;
  this.f_condition__org_patternfly_filter_FilterAttribute_ = condition;
  this.f_value__org_patternfly_filter_FilterAttribute_ = this.m_initialValue__java_lang_Object();
  this.f_defined__org_patternfly_filter_FilterAttribute_ = false;
 }
 /** @override @return {?string} */
 toString() {
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_name__org_patternfly_filter_FilterAttribute) + '=' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_defined__org_patternfly_filter_FilterAttribute_ ? this.f_value__org_patternfly_filter_FilterAttribute_ : 'UNDEFINED');
 }
 /** @nodts @return {boolean} */
 m_defined__boolean() {
  return this.f_defined__org_patternfly_filter_FilterAttribute_;
 }
 /** @nodts @return {V} */
 m_value__java_lang_Object() {
  return this.f_value__org_patternfly_filter_FilterAttribute_;
 }
 /** @nodts @return {boolean} */
 m_match__java_lang_Object__boolean(/** T */ object) {
  return this.f_condition__org_patternfly_filter_FilterAttribute_.m_match__java_lang_Object__java_lang_Object__boolean(object, this.f_value__org_patternfly_filter_FilterAttribute_);
 }
 /** @nodts @return {boolean} */
 m_set__java_lang_Object__boolean(/** V */ value) {
  if (Objects.m_equals__java_lang_Object__java_lang_Object__boolean(value, this.m_initialValue__java_lang_Object())) {
   return this.m_reset__boolean();
  } else {
   if (this.f_defined__org_patternfly_filter_FilterAttribute_) {
    let newValue = !Objects.m_equals__java_lang_Object__java_lang_Object__boolean(this.f_value__org_patternfly_filter_FilterAttribute_, value);
    if (newValue) {
     this.f_value__org_patternfly_filter_FilterAttribute_ = value;
    }
    return newValue;
   } else {
    this.f_value__org_patternfly_filter_FilterAttribute_ = value;
    this.f_defined__org_patternfly_filter_FilterAttribute_ = true;
    return true;
   }
  }
 }
 /** @nodts @return {boolean} */
 m_reset__boolean() {
  if (this.f_defined__org_patternfly_filter_FilterAttribute_) {
   this.f_value__org_patternfly_filter_FilterAttribute_ = this.m_initialValue__java_lang_Object();
   this.f_defined__org_patternfly_filter_FilterAttribute_ = false;
   return true;
  }
  return false;
 }
 /** @nodts @return {V} */
 m_initialValue__java_lang_Object() {
  return null;
 }
 /** @nodts @return {?string} */
 m_valueAsString__java_lang_String() {
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_value__org_patternfly_filter_FilterAttribute_);
 }
 /** @nodts */
 m_loadValue__java_lang_String__void(/** ?string */ value) {}
 /** @nodts */
 static $clinit() {
  FilterAttribute.$clinit = () =>{};
  FilterAttribute.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FilterAttribute;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Objects = goog.module.get('java.util.Objects$impl');
 }
}
$Util.$setClassMetadata(FilterAttribute, 'org.patternfly.filter.FilterAttribute');

exports = FilterAttribute;

//# sourceMappingURL=FilterAttribute.js.map
