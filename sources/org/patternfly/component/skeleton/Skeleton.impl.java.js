goog.module('org.patternfly.component.skeleton.Skeleton$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Shape = goog.forwardDeclare('org.patternfly.component.skeleton.Shape$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let Variable = goog.forwardDeclare('org.patternfly.style.Variable$impl');
let HTMLBuilder = goog.forwardDeclare('org.patternfly.style.VariableAssignments.HTMLBuilder$impl');
let Variables = goog.forwardDeclare('org.patternfly.style.Variables$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLElement, Skeleton>}
 */
class Skeleton extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Skeleton} */
 static m_skeleton__org_patternfly_component_skeleton_Skeleton() {
  Skeleton.$clinit();
  return Skeleton.$create__();
 }
 /** @nodts @return {!Skeleton} */
 static $create__() {
  Skeleton.$clinit();
  let $instance = new Skeleton();
  $instance.$ctor__org_patternfly_component_skeleton_Skeleton__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_skeleton_Skeleton__void() {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_Skeleton__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_skeleton__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), $Overlay)));
  this.m_ouiaSafe__boolean__void(false);
 }
 /** @nodts @return {Skeleton} */
 m_fontSize__org_patternfly_style_Size__org_patternfly_component_skeleton_Skeleton(/** Size */ size) {
  for (let $array = Size.m_values__arrayOf_org_patternfly_style_Size(), $index = 0; $index < $array.length; $index++) {
   let s = $array[$index];
   {
    this.m_classList__org_jboss_elemento_ClassList().m_remove__arrayOf_java_lang_String__void(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__org_patternfly_style_Size__java_lang_String(Classes.f_text__org_patternfly_style_Classes, s)], j_l_String)));
   }
  }
  return /**@type {Skeleton}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__org_patternfly_style_Size__java_lang_String(Classes.f_text__org_patternfly_style_Classes, size)], j_l_String))), Skeleton));
 }
 /** @nodts @return {Skeleton} */
 m_height__java_lang_String__org_patternfly_component_skeleton_Skeleton(/** ?string */ height) {
  return /**@type {Skeleton}*/ ($Casts.$to((/**@type {HTMLBuilder<HTMLElement, Skeleton>}*/ (Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_skeleton__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$stampType([Variables.f_Height__org_patternfly_style_Variables], j_l_String))).m_applyTo__org_jboss_elemento_HTMLElementStyleMethods__org_patternfly_style_VariableAssignments_HTMLBuilder(this))).m_set__java_lang_String__org_jboss_elemento_TypedBuilder(height), Skeleton));
 }
 /** @nodts @return {Skeleton} */
 m_shape__org_patternfly_component_skeleton_Shape__org_patternfly_component_skeleton_Skeleton(/** Shape */ shape) {
  return /**@type {Skeleton}*/ ($Casts.$to(this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([shape.f_modifier__org_patternfly_component_skeleton_Shape], j_l_String))), Skeleton));
 }
 /** @nodts @return {Skeleton} */
 m_width__java_lang_String__org_patternfly_component_skeleton_Skeleton(/** ?string */ width) {
  return /**@type {Skeleton}*/ ($Casts.$to((/**@type {HTMLBuilder<HTMLElement, Skeleton>}*/ (Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_skeleton__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$stampType([Variables.f_Width__org_patternfly_style_Variables], j_l_String))).m_applyTo__org_jboss_elemento_HTMLElementStyleMethods__org_patternfly_style_VariableAssignments_HTMLBuilder(this))).m_set__java_lang_String__org_jboss_elemento_TypedBuilder(width), Skeleton));
 }
 /** @nodts @return {Skeleton} */
 m_screenReaderText__java_lang_String__org_patternfly_component_skeleton_Skeleton(/** ?string */ text) {
  this.m_element__elemental2_dom_HTMLElement().appendChild((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_screenReader__org_patternfly_style_Classes], j_l_String))), HTMLContainerBuilder))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(text), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {Skeleton} */
 m_that__org_patternfly_component_skeleton_Skeleton() {
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {Skeleton} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_skeleton_Skeleton();
 }
 /** @nodts */
 static $clinit() {
  Skeleton.$clinit = () =>{};
  Skeleton.$loadModules();
  BaseComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Skeleton;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  Variable = goog.module.get('org.patternfly.style.Variable$impl');
  Variables = goog.module.get('org.patternfly.style.Variables$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(Skeleton, 'org.patternfly.component.skeleton.Skeleton');

exports = Skeleton;

//# sourceMappingURL=Skeleton.js.map
