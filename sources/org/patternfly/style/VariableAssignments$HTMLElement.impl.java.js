goog.module('org.patternfly.style.VariableAssignments.HTMLElement$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let Variable = goog.forwardDeclare('org.patternfly.style.Variable$impl');
let VariableAssignments = goog.forwardDeclare('org.patternfly.style.VariableAssignments$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class VariableAssignments_HTMLElement extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Variable} @nodts*/
  this.f_variable__org_patternfly_style_VariableAssignments_HTMLElement_;
  /**@type {HTMLElement} @nodts*/
  this.f_element__org_patternfly_style_VariableAssignments_HTMLElement_;
 }
 /** @nodts @return {!VariableAssignments_HTMLElement} */
 static $create__org_patternfly_style_Variable__elemental2_dom_HTMLElement(/** Variable */ variable, /** HTMLElement */ element) {
  VariableAssignments_HTMLElement.$clinit();
  let $instance = new VariableAssignments_HTMLElement();
  $instance.$ctor__org_patternfly_style_VariableAssignments_HTMLElement__org_patternfly_style_Variable__elemental2_dom_HTMLElement__void(variable, element);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_style_VariableAssignments_HTMLElement__org_patternfly_style_Variable__elemental2_dom_HTMLElement__void(/** Variable */ variable, /** HTMLElement */ element) {
  this.$ctor__java_lang_Object__void();
  this.f_variable__org_patternfly_style_VariableAssignments_HTMLElement_ = variable;
  this.f_element__org_patternfly_style_VariableAssignments_HTMLElement_ = element;
 }
 /** @nodts */
 m_set__int__void(/** number */ value) {
  if (this.f_variable__org_patternfly_style_VariableAssignments_HTMLElement_.f_valid__org_patternfly_style_Variable) {
   this.f_element__org_patternfly_style_VariableAssignments_HTMLElement_.style.setProperty(this.f_variable__org_patternfly_style_VariableAssignments_HTMLElement_.f_name__org_patternfly_style_Variable, j_l_String.m_valueOf__int__java_lang_String(value));
  }
 }
 /** @nodts */
 m_set__java_lang_String__void(/** ?string */ value) {
  if (this.f_variable__org_patternfly_style_VariableAssignments_HTMLElement_.f_valid__org_patternfly_style_Variable) {
   this.f_element__org_patternfly_style_VariableAssignments_HTMLElement_.style.setProperty(this.f_variable__org_patternfly_style_VariableAssignments_HTMLElement_.f_name__org_patternfly_style_Variable, value);
  }
 }
 /** @nodts @template V */
 m_set__org_patternfly_style_Breakpoints__void(/** Breakpoints<V> */ breakpoints) {
  this.m_set__org_patternfly_style_Breakpoints__java_util_function_Function__void(breakpoints, null);
 }
 /** @nodts @template V */
 m_set__org_patternfly_style_Breakpoints__java_util_function_Function__void(/** Breakpoints<V> */ breakpoints, /** j_u_function_Function<V, ?string> */ stringValue) {
  let /** CSSStyleDeclaration */ $$q;
  VariableAssignments.m_applyBreakpoints__org_patternfly_style_Variable__org_patternfly_style_Breakpoints__java_util_function_Function__java_util_function_BiConsumer__void(this.f_variable__org_patternfly_style_VariableAssignments_HTMLElement_, breakpoints, stringValue, ($$q = this.f_element__org_patternfly_style_VariableAssignments_HTMLElement_.style, BiConsumer.$adapt((/** ?string */ arg0, /** ?string */ arg1) =>{
   let arg0_1 = /**@type {?string}*/ ($Casts.$to(arg0, j_l_String));
   let arg1_1 = /**@type {?string}*/ ($Casts.$to(arg1, j_l_String));
   $$q.setProperty(arg0_1, arg1_1);
  })));
 }
 /** @nodts */
 static $clinit() {
  VariableAssignments_HTMLElement.$clinit = () =>{};
  VariableAssignments_HTMLElement.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof VariableAssignments_HTMLElement;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  BiConsumer = goog.module.get('java.util.function.BiConsumer$impl');
  VariableAssignments = goog.module.get('org.patternfly.style.VariableAssignments$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(VariableAssignments_HTMLElement, 'org.patternfly.style.VariableAssignments$HTMLElement');

exports = VariableAssignments_HTMLElement;

//# sourceMappingURL=VariableAssignments$HTMLElement.js.map
