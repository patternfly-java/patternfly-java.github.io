goog.module('org.patternfly.style.VariableAssignments.HTMLBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let HTMLElementStyleMethods = goog.forwardDeclare('org.jboss.elemento.HTMLElementStyleMethods$impl');
let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let Variable = goog.forwardDeclare('org.patternfly.style.Variable$impl');
let VariableAssignments = goog.forwardDeclare('org.patternfly.style.VariableAssignments$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template E, B
 */
class HTMLBuilder extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Variable} @nodts*/
  this.f_variable__org_patternfly_style_VariableAssignments_HTMLBuilder_;
  /**@type {HTMLElementStyleMethods<E, B>} @nodts*/
  this.f_element__org_patternfly_style_VariableAssignments_HTMLBuilder_;
 }
 /** @nodts @template E, B @return {!HTMLBuilder<E, B>} */
 static $create__org_patternfly_style_Variable__org_jboss_elemento_HTMLElementStyleMethods(/** Variable */ variable, /** HTMLElementStyleMethods<E, B> */ element) {
  HTMLBuilder.$clinit();
  let $instance = new HTMLBuilder();
  $instance.$ctor__org_patternfly_style_VariableAssignments_HTMLBuilder__org_patternfly_style_Variable__org_jboss_elemento_HTMLElementStyleMethods__void(variable, element);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_style_VariableAssignments_HTMLBuilder__org_patternfly_style_Variable__org_jboss_elemento_HTMLElementStyleMethods__void(/** Variable */ variable, /** HTMLElementStyleMethods<E, B> */ element) {
  this.$ctor__java_lang_Object__void();
  this.f_variable__org_patternfly_style_VariableAssignments_HTMLBuilder_ = variable;
  this.f_element__org_patternfly_style_VariableAssignments_HTMLBuilder_ = element;
 }
 /** @nodts @return {B} */
 m_set__int__org_jboss_elemento_TypedBuilder(/** number */ value) {
  if (this.f_variable__org_patternfly_style_VariableAssignments_HTMLBuilder_.f_valid__org_patternfly_style_Variable) {
   this.f_element__org_patternfly_style_VariableAssignments_HTMLBuilder_.m_style__java_lang_String__int__org_jboss_elemento_TypedBuilder(this.f_variable__org_patternfly_style_VariableAssignments_HTMLBuilder_.f_name__org_patternfly_style_Variable, value);
  }
  return this.f_element__org_patternfly_style_VariableAssignments_HTMLBuilder_.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @return {B} */
 m_set__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ value) {
  if (this.f_variable__org_patternfly_style_VariableAssignments_HTMLBuilder_.f_valid__org_patternfly_style_Variable) {
   this.f_element__org_patternfly_style_VariableAssignments_HTMLBuilder_.m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(this.f_variable__org_patternfly_style_VariableAssignments_HTMLBuilder_.f_name__org_patternfly_style_Variable, value);
  }
  return this.f_element__org_patternfly_style_VariableAssignments_HTMLBuilder_.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template V @return {B} */
 m_set__org_patternfly_style_Breakpoints__org_jboss_elemento_TypedBuilder(/** Breakpoints<V> */ breakpoints) {
  return this.m_set__org_patternfly_style_Breakpoints__java_util_function_Function__org_jboss_elemento_TypedBuilder(breakpoints, null);
 }
 /** @nodts @template V @return {B} */
 m_set__org_patternfly_style_Breakpoints__java_util_function_Function__org_jboss_elemento_TypedBuilder(/** Breakpoints<V> */ breakpoints, /** j_u_function_Function<V, ?string> */ stringValue) {
  let /** HTMLElementStyleMethods<E, B> */ $$q;
  VariableAssignments.m_applyBreakpoints__org_patternfly_style_Variable__org_patternfly_style_Breakpoints__java_util_function_Function__java_util_function_BiConsumer__void(this.f_variable__org_patternfly_style_VariableAssignments_HTMLBuilder_, breakpoints, stringValue, ($$q = this.f_element__org_patternfly_style_VariableAssignments_HTMLBuilder_, BiConsumer.$adapt((/** ?string */ arg0, /** ?string */ arg1) =>{
   let arg0_1 = /**@type {?string}*/ ($Casts.$to(arg0, j_l_String));
   let arg1_1 = /**@type {?string}*/ ($Casts.$to(arg1, j_l_String));
   $$q.m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(arg0_1, arg1_1);
  })));
  return this.f_element__org_patternfly_style_VariableAssignments_HTMLBuilder_.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts */
 static $clinit() {
  HTMLBuilder.$clinit = () =>{};
  HTMLBuilder.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HTMLBuilder;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  VariableAssignments = goog.module.get('org.patternfly.style.VariableAssignments$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(HTMLBuilder, 'org.patternfly.style.VariableAssignments$HTMLBuilder');

exports = HTMLBuilder;

//# sourceMappingURL=VariableAssignments$HTMLBuilder.js.map
