goog.module('org.patternfly.style.Variable$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HTMLElementStyleMethods = goog.forwardDeclare('org.jboss.elemento.HTMLElementStyleMethods$impl');
let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let SVGElementStyleMethods = goog.forwardDeclare('org.jboss.elemento.svg.SVGElementStyleMethods$impl');
let Version = goog.forwardDeclare('org.patternfly.core.Version$impl');
let HTMLBuilder = goog.forwardDeclare('org.patternfly.style.VariableAssignments.HTMLBuilder$impl');
let VariableAssignments_HTMLElement = goog.forwardDeclare('org.patternfly.style.VariableAssignments.HTMLElement$impl');
let SVGBuilder = goog.forwardDeclare('org.patternfly.style.VariableAssignments.SVGBuilder$impl');
let VariableNames = goog.forwardDeclare('org.patternfly.style.VariableNames$impl');

class Variable extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_name__org_patternfly_style_Variable;
  /**@type {boolean} @nodts*/
  this.f_valid__org_patternfly_style_Variable = false;
 }
 /** @nodts @return {Variable} */
 static m_utilVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(/** ?string */ firstElement, /** Array<?string> */ otherElements) {
  Variable.$clinit();
  return Variable.$create__java_lang_String(VariableNames.m_utilName__java_lang_String__arrayOf_java_lang_String__java_lang_String(firstElement, otherElements));
 }
 /** @nodts @return {Variable} */
 static m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(/** ?string */ component, /** Array<?string> */ elements) {
  Variable.$clinit();
  let name = VariableNames.m_componentName__java_lang_String__arrayOf_java_lang_String__java_lang_String(component, elements);
  if (j_l_String.m_isEmpty__java_lang_String__boolean(name)) {
   Variable.f_logger__org_patternfly_style_Variable_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Component \'%s\' in Variable.componentVar(String) does not start with \'pf-%s-\'. Please use Classes.component(String) to build the component.', [component, Version.f_PATTERN_FLY_MAJOR_VERSION__org_patternfly_core_Version]);
  }
  return Variable.$create__java_lang_String(name);
 }
 /** @nodts @return {!Variable} */
 static $create__java_lang_String(/** ?string */ name) {
  Variable.$clinit();
  let $instance = new Variable();
  $instance.$ctor__org_patternfly_style_Variable__java_lang_String__void(name);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_style_Variable__java_lang_String__void(/** ?string */ name) {
  this.$ctor__java_lang_Object__void();
  this.f_name__org_patternfly_style_Variable = name;
  this.f_valid__org_patternfly_style_Variable = !j_l_String.m_isEmpty__java_lang_String__boolean(name);
 }
 /** @nodts @return {?string} */
 m_asVar__java_lang_String() {
  return 'var(' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_name__org_patternfly_style_Variable) + ')';
 }
 /** @nodts @template E, B @return {HTMLBuilder<E, B>} */
 m_applyTo__org_jboss_elemento_HTMLElementStyleMethods__org_patternfly_style_VariableAssignments_HTMLBuilder(/** HTMLElementStyleMethods<E, B> */ element) {
  return /**@type {!HTMLBuilder<E, B>}*/ (HTMLBuilder.$create__org_patternfly_style_Variable__org_jboss_elemento_HTMLElementStyleMethods(this, element));
 }
 /** @nodts @template E, B @return {SVGBuilder<E, B>} */
 m_applyTo__org_jboss_elemento_svg_SVGElementStyleMethods__org_patternfly_style_VariableAssignments_SVGBuilder(/** SVGElementStyleMethods<E, B> */ element) {
  return /**@type {!SVGBuilder<E, B>}*/ (SVGBuilder.$create__org_patternfly_style_Variable__org_jboss_elemento_svg_SVGElementStyleMethods(this, element));
 }
 /** @nodts @return {VariableAssignments_HTMLElement} */
 m_applyTo__elemental2_dom_HTMLElement__org_patternfly_style_VariableAssignments_HTMLElement(/** HTMLElement */ element) {
  return VariableAssignments_HTMLElement.$create__org_patternfly_style_Variable__elemental2_dom_HTMLElement(this, element);
 }
 /** @nodts */
 static $clinit() {
  Variable.$clinit = () =>{};
  Variable.$loadModules();
  j_l_Object.$clinit();
  Variable.f_logger__org_patternfly_style_Variable_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(Variable).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Variable;
 }
 
 /** @nodts */
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  Version = goog.module.get('org.patternfly.core.Version$impl');
  HTMLBuilder = goog.module.get('org.patternfly.style.VariableAssignments.HTMLBuilder$impl');
  VariableAssignments_HTMLElement = goog.module.get('org.patternfly.style.VariableAssignments.HTMLElement$impl');
  SVGBuilder = goog.module.get('org.patternfly.style.VariableAssignments.SVGBuilder$impl');
  VariableNames = goog.module.get('org.patternfly.style.VariableNames$impl');
 }
}
/**@type {Logger} @nodts*/
Variable.f_logger__org_patternfly_style_Variable_;
$Util.$setClassMetadata(Variable, 'org.patternfly.style.Variable');

exports = Variable;

//# sourceMappingURL=Variable.js.map
