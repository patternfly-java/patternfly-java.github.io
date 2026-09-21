goog.module('org.patternfly.component.expandable.ExpandableSection$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');
const Expandable = goog.require('org.patternfly.component.Expandable$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $double = goog.forwardDeclare('javaemul.internal.primitives.$double$impl');
let $int = goog.forwardDeclare('javaemul.internal.primitives.$int$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Level = goog.forwardDeclare('org.jboss.elemento.logger.Level$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let ExpandableSectionContent = goog.forwardDeclare('org.patternfly.component.expandable.ExpandableSectionContent$impl');
let ExpandableSectionToggle = goog.forwardDeclare('org.patternfly.component.expandable.ExpandableSectionToggle$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let ToggleHandler = goog.forwardDeclare('org.patternfly.handler.ToggleHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let Variable = goog.forwardDeclare('org.patternfly.style.Variable$impl');
let HTMLBuilder = goog.forwardDeclare('org.patternfly.style.VariableAssignments.HTMLBuilder$impl');
let Variables = goog.forwardDeclare('org.patternfly.style.Variables$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, ExpandableSection>}
 * @implements {Attachable}
 * @implements {Expandable<HTMLDivElement, ExpandableSection>}
 */
class ExpandableSection extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_contentId__org_patternfly_component_expandable_ExpandableSection_;
  /**@type {?string} @nodts*/
  this.f_toggleId__org_patternfly_component_expandable_ExpandableSection_;
  /**@type {List<ToggleHandler<ExpandableSection>>} @nodts*/
  this.f_toggleHandler__org_patternfly_component_expandable_ExpandableSection_;
  /**@type {number} @nodts*/
  this.f_truncate__org_patternfly_component_expandable_ExpandableSection_ = 0;
  /**@type {?string} @nodts*/
  this.f_ariaLabel__org_patternfly_component_expandable_ExpandableSection_;
  /**@type {boolean} @nodts*/
  this.f_wired__org_patternfly_component_expandable_ExpandableSection_ = false;
  /**@type {boolean} @nodts*/
  this.f_detached__org_patternfly_component_expandable_ExpandableSection_ = false;
  /**@type {boolean} @nodts*/
  this.f_directionUp__org_patternfly_component_expandable_ExpandableSection_ = false;
  /**@type {ExpandableSectionToggle} @nodts*/
  this.f_toggle__org_patternfly_component_expandable_ExpandableSection_;
  /**@type {ExpandableSectionContent} @nodts*/
  this.f_content__org_patternfly_component_expandable_ExpandableSection_;
  /**@type {HTMLElement} @nodts*/
  this.f_contentEsElement__org_patternfly_component_expandable_ExpandableSection_;
  /**@type {HTMLElement} @nodts*/
  this.f_contentElement__org_patternfly_component_expandable_ExpandableSection_;
  /**@type {HTMLElement} @nodts*/
  this.f_toggleButton__org_patternfly_component_expandable_ExpandableSection_;
 }
 /** @nodts @return {ExpandableSection} */
 static m_expandableSection__org_patternfly_component_expandable_ExpandableSection() {
  ExpandableSection.$clinit();
  return ExpandableSection.$create__java_lang_String(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_ExpandableSection__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))));
 }
 /** @nodts @return {ExpandableSection} */
 static m_expandableSection__java_lang_String__org_patternfly_component_expandable_ExpandableSection(/** ?string */ id) {
  ExpandableSection.$clinit();
  return ExpandableSection.$create__java_lang_String(id);
 }
 /** @nodts @return {!ExpandableSection} */
 static $create__java_lang_String(/** ?string */ id) {
  ExpandableSection.$clinit();
  let $instance = new ExpandableSection();
  $instance.$ctor__org_patternfly_component_expandable_ExpandableSection__java_lang_String__void(id);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_expandable_ExpandableSection__java_lang_String__void(/** ?string */ id) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_ExpandableSection__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_expandableSection__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_truncate__org_patternfly_component_expandable_ExpandableSection_ = 0;
  this.f_wired__org_patternfly_component_expandable_ExpandableSection_ = false;
  this.f_directionUp__org_patternfly_component_expandable_ExpandableSection_ = false;
  this.f_toggleId__org_patternfly_component_expandable_ExpandableSection_ = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(id, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['toggle'], j_l_String)));
  this.f_contentId__org_patternfly_component_expandable_ExpandableSection_ = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(id, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['content'], j_l_String)));
  this.f_toggleHandler__org_patternfly_component_expandable_ExpandableSection_ = (/**@type {!ArrayList<ToggleHandler<ExpandableSection>>}*/ (ArrayList.$create__()));
  this.m_storeComponent__void();
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  this.m_startWire__void_$p_org_patternfly_component_expandable_ExpandableSection();
 }
 /** @nodts @return {ExpandableSection} */
 m_addToggle__org_patternfly_component_expandable_ExpandableSectionToggle__org_patternfly_component_expandable_ExpandableSection(/** ExpandableSectionToggle */ toggle) {
  return this.m_add__org_patternfly_component_expandable_ExpandableSectionToggle__org_patternfly_component_expandable_ExpandableSection(toggle);
 }
 /** @nodts @return {ExpandableSection} */
 m_add__org_patternfly_component_expandable_ExpandableSectionToggle__org_patternfly_component_expandable_ExpandableSection(/** ExpandableSectionToggle */ toggle) {
  this.f_toggle__org_patternfly_component_expandable_ExpandableSection_ = toggle;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(toggle.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {ExpandableSection} */
 m_addContent__org_patternfly_component_expandable_ExpandableSectionContent__org_patternfly_component_expandable_ExpandableSection(/** ExpandableSectionContent */ content) {
  return this.m_add__org_patternfly_component_expandable_ExpandableSectionContent__org_patternfly_component_expandable_ExpandableSection(content);
 }
 /** @nodts @return {ExpandableSection} */
 m_add__org_patternfly_component_expandable_ExpandableSectionContent__org_patternfly_component_expandable_ExpandableSection(/** ExpandableSectionContent */ content) {
  this.f_content__org_patternfly_component_expandable_ExpandableSection_ = content;
  this.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLDivElement}*/ ($Casts.$to(content.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  return this;
 }
 /** @nodts @return {ExpandableSection} */
 m_detached__org_patternfly_component_expandable_ExpandableSection() {
  this.f_detached__org_patternfly_component_expandable_ExpandableSection_ = true;
  return this;
 }
 /** @nodts @return {ExpandableSection} */
 m_ariaLabel__java_lang_String__org_patternfly_component_expandable_ExpandableSection(/** ?string */ ariaLabel) {
  this.f_ariaLabel__org_patternfly_component_expandable_ExpandableSection_ = ariaLabel;
  return this;
 }
 /** @nodts @return {ExpandableSection} */
 m_indented__org_patternfly_component_expandable_ExpandableSection() {
  return this.m_indented__boolean__org_patternfly_component_expandable_ExpandableSection(true);
 }
 /** @nodts @return {ExpandableSection} */
 m_indented__boolean__org_patternfly_component_expandable_ExpandableSection(/** boolean */ indented) {
  if (indented) {
   (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_indented__org_patternfly_style_Classes));
  } else {
   (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_indented__org_patternfly_style_Classes));
  }
  return this;
 }
 /** @nodts @return {ExpandableSection} */
 m_disclosure__org_patternfly_component_expandable_ExpandableSection() {
  return this.m_disclosure__boolean__org_patternfly_component_expandable_ExpandableSection(true);
 }
 /** @nodts @return {ExpandableSection} */
 m_disclosure__boolean__org_patternfly_component_expandable_ExpandableSection(/** boolean */ disclosure) {
  if (disclosure) {
   (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).classList.add(Classes.m_modifier__java_lang_String__org_patternfly_style_Size__java_lang_String(Classes.f_display__org_patternfly_style_Classes, Size.f_lg__org_patternfly_style_Size), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_limitWidth__org_patternfly_style_Classes));
  } else {
   (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).classList.remove(Classes.m_modifier__java_lang_String__org_patternfly_style_Size__java_lang_String(Classes.f_display__org_patternfly_style_Classes, Size.f_lg__org_patternfly_style_Size), Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_limitWidth__org_patternfly_style_Classes));
  }
  return this;
 }
 /** @nodts @return {ExpandableSection} */
 m_truncate__org_patternfly_component_expandable_ExpandableSection() {
  return this.m_truncate__int__org_patternfly_component_expandable_ExpandableSection(ExpandableSection.f_DEFAULT_TRUNCATE__org_patternfly_component_expandable_ExpandableSection);
 }
 /** @nodts @return {ExpandableSection} */
 m_truncate__int__org_patternfly_component_expandable_ExpandableSection(/** number */ truncate) {
  if (truncate > 0) {
   this.f_truncate__org_patternfly_component_expandable_ExpandableSection_ = truncate;
   (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_truncate__org_patternfly_style_Classes));
  }
  return this;
 }
 /** @nodts @return {ExpandableSection} */
 m_that__org_patternfly_component_expandable_ExpandableSection() {
  return this;
 }
 /** @nodts @return {ExpandableSection} */
 m_onToggle__org_patternfly_handler_ToggleHandler__org_patternfly_component_expandable_ExpandableSection(/** ToggleHandler<ExpandableSection> */ toggleHandler) {
  this.f_toggleHandler__org_patternfly_component_expandable_ExpandableSection_.add(toggleHandler);
  return this;
 }
 /** @override @nodts */
 m_collapse__boolean__void(/** boolean */ fireEvent) {
  this.m_ouiaTransition__void();
  (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_style_Classes));
  if (!$Equality.$same(this.f_toggle__org_patternfly_component_expandable_ExpandableSection_, null)) {
   this.f_toggle__org_patternfly_component_expandable_ExpandableSection_.m_collapse__boolean__void_$pp_org_patternfly_component_expandable(this.f_directionUp__org_patternfly_component_expandable_ExpandableSection_);
  }
  if (!$Equality.$same(this.f_content__org_patternfly_component_expandable_ExpandableSection_, null)) {
   (/**@type {HTMLDivElement}*/ ($Casts.$to(this.f_content__org_patternfly_component_expandable_ExpandableSection_.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).hidden = true;
  } else if (this.f_detached__org_patternfly_component_expandable_ExpandableSection_) {
   this.f_contentEsElement__org_patternfly_component_expandable_ExpandableSection_.classList.remove(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_style_Classes));
  }
  if (fireEvent) {
   this.f_toggleHandler__org_patternfly_component_expandable_ExpandableSection_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ToggleHandler<ExpandableSection> */ th) =>{
    let th_1 = /**@type {ToggleHandler<ExpandableSection>}*/ ($Casts.$to(th, /**@type {Function}*/ (ToggleHandler)));
    th_1.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, false);
   }));
  }
 }
 /** @override @nodts */
 m_expand__boolean__void(/** boolean */ fireEvent) {
  this.m_ouiaTransition__void();
  (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_style_Classes));
  if (!$Equality.$same(this.f_toggle__org_patternfly_component_expandable_ExpandableSection_, null)) {
   this.f_toggle__org_patternfly_component_expandable_ExpandableSection_.m_expand__boolean__void_$pp_org_patternfly_component_expandable(this.f_directionUp__org_patternfly_component_expandable_ExpandableSection_);
  }
  if (!$Equality.$same(this.f_content__org_patternfly_component_expandable_ExpandableSection_, null)) {
   (/**@type {HTMLDivElement}*/ ($Casts.$to(this.f_content__org_patternfly_component_expandable_ExpandableSection_.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))).hidden = false;
  } else if (this.f_detached__org_patternfly_component_expandable_ExpandableSection_) {
   this.f_contentEsElement__org_patternfly_component_expandable_ExpandableSection_.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expanded__org_patternfly_style_Classes));
  }
  if (fireEvent) {
   this.f_toggleHandler__org_patternfly_component_expandable_ExpandableSection_.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ToggleHandler<ExpandableSection> */ th) =>{
    let th_1 = /**@type {ToggleHandler<ExpandableSection>}*/ ($Casts.$to(th, /**@type {Function}*/ (ToggleHandler)));
    th_1.m_onToggle__elemental2_dom_Event__java_lang_Object__boolean__void(new Event(''), this, true);
   }));
  }
 }
 /** @nodts @return {ExpandableSectionContent} */
 m_content__org_patternfly_component_expandable_ExpandableSectionContent() {
  return this.f_content__org_patternfly_component_expandable_ExpandableSection_;
 }
 /** @nodts */
 m_startWire__void_$p_org_patternfly_component_expandable_ExpandableSection() {
  let count = /**@type {!Array<number>}*/ ($Arrays.$stampType([0], $int));
  let handle = /**@type {!Array<number>}*/ ($Arrays.$stampType([0], $double));
  let wireFn = (.../** ...* */ __) =>{
   if (!this.f_wired__org_patternfly_component_expandable_ExpandableSection_ && count[0] < ExpandableSection.f_WIRE_ATTEMPTS__org_patternfly_component_expandable_ExpandableSection_) {
    this.m_wire__void_$p_org_patternfly_component_expandable_ExpandableSection();
    $Arrays.$set(count, 0, count[0] + 1 | 0);
   } else {
    goog.global.clearInterval(handle[0]);
    if (this.f_wired__org_patternfly_component_expandable_ExpandableSection_) {
     this.m_afterWire__void_$p_org_patternfly_component_expandable_ExpandableSection();
     if (this.f_detached__org_patternfly_component_expandable_ExpandableSection_ && ExpandableSection.f_logger__org_patternfly_component_expandable_ExpandableSection_.m_isEnabled__org_jboss_elemento_logger_Level__boolean(Level.f_DEBUG__org_jboss_elemento_logger_Level)) {
      ExpandableSection.f_logger__org_patternfly_component_expandable_ExpandableSection_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('Detached expandable section finished wiring: %o', [/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))]);
      ExpandableSection.f_logger__org_patternfly_component_expandable_ExpandableSection_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('Toggle: %o', [this.f_toggleButton__org_patternfly_component_expandable_ExpandableSection_]);
      ExpandableSection.f_logger__org_patternfly_component_expandable_ExpandableSection_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('Content: %o', [this.f_contentElement__org_patternfly_component_expandable_ExpandableSection_]);
      ExpandableSection.f_logger__org_patternfly_component_expandable_ExpandableSection_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('Content: %o', [this.f_contentElement__org_patternfly_component_expandable_ExpandableSection_]);
     }
    } else {
     ExpandableSection.f_logger__org_patternfly_component_expandable_ExpandableSection_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Expandable section %o failed to wire toggle and content!', [/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))]);
    }
   }
  };
  this.m_beforeWire__void_$p_org_patternfly_component_expandable_ExpandableSection();
  $Arrays.$set(handle, 0, DomGlobal_$Overlay.m_setInterval__elemental2_dom_DomGlobal_SetIntervalCallbackFn__double__arrayOf_java_lang_Object__double(wireFn, ExpandableSection.f_WIRE_INTERVAL__org_patternfly_component_expandable_ExpandableSection_, []));
 }
 /** @nodts */
 m_beforeWire__void_$p_org_patternfly_component_expandable_ExpandableSection() {
  if (this.f_detached__org_patternfly_component_expandable_ExpandableSection_) {
   if (!$Equality.$same(this.f_toggle__org_patternfly_component_expandable_ExpandableSection_, null)) {
    this.f_toggle__org_patternfly_component_expandable_ExpandableSection_.f_button__org_patternfly_component_expandable_ExpandableSectionToggle.m_id__java_lang_String__org_jboss_elemento_TypedBuilder(this.f_toggleId__org_patternfly_component_expandable_ExpandableSection_);
    this.f_toggle__org_patternfly_component_expandable_ExpandableSection_.f_button__org_patternfly_component_expandable_ExpandableSectionToggle.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_controls__org_patternfly_core_Aria, this.f_contentId__org_patternfly_component_expandable_ExpandableSection_);
    if (!$Equality.$same(this.f_ariaLabel__org_patternfly_component_expandable_ExpandableSection_, null)) {
     this.f_toggle__org_patternfly_component_expandable_ExpandableSection_.f_button__org_patternfly_component_expandable_ExpandableSectionToggle.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, this.f_ariaLabel__org_patternfly_component_expandable_ExpandableSection_);
    }
    this.f_toggleButton__org_patternfly_component_expandable_ExpandableSection_ = this.f_toggle__org_patternfly_component_expandable_ExpandableSection_.f_button__org_patternfly_component_expandable_ExpandableSectionToggle.m_element__elemental2_dom_HTMLElement();
   } else if (!$Equality.$same(this.f_content__org_patternfly_component_expandable_ExpandableSection_, null)) {
    this.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_detached__org_patternfly_style_Classes)], j_l_String)));
    this.f_content__org_patternfly_component_expandable_ExpandableSection_.m_id__java_lang_String__org_jboss_elemento_TypedBuilder(this.f_contentId__org_patternfly_component_expandable_ExpandableSection_);
    this.f_content__org_patternfly_component_expandable_ExpandableSection_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, this.f_toggleId__org_patternfly_component_expandable_ExpandableSection_);
    this.f_contentEsElement__org_patternfly_component_expandable_ExpandableSection_ = (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
    this.f_contentElement__org_patternfly_component_expandable_ExpandableSection_ = (/**@type {HTMLDivElement}*/ ($Casts.$to(this.f_content__org_patternfly_component_expandable_ExpandableSection_.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
   }
  } else {
   if (!$Equality.$same(this.f_toggle__org_patternfly_component_expandable_ExpandableSection_, null) && !$Equality.$same(this.f_content__org_patternfly_component_expandable_ExpandableSection_, null)) {
    this.f_toggle__org_patternfly_component_expandable_ExpandableSection_.f_button__org_patternfly_component_expandable_ExpandableSectionToggle.m_id__java_lang_String__org_jboss_elemento_TypedBuilder(this.f_toggleId__org_patternfly_component_expandable_ExpandableSection_);
    this.f_toggle__org_patternfly_component_expandable_ExpandableSection_.f_button__org_patternfly_component_expandable_ExpandableSectionToggle.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_controls__org_patternfly_core_Aria, this.f_contentId__org_patternfly_component_expandable_ExpandableSection_);
    if (!$Equality.$same(this.f_ariaLabel__org_patternfly_component_expandable_ExpandableSection_, null)) {
     this.f_toggle__org_patternfly_component_expandable_ExpandableSection_.f_button__org_patternfly_component_expandable_ExpandableSectionToggle.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, this.f_ariaLabel__org_patternfly_component_expandable_ExpandableSection_);
    }
    this.f_toggleButton__org_patternfly_component_expandable_ExpandableSection_ = this.f_toggle__org_patternfly_component_expandable_ExpandableSection_.f_button__org_patternfly_component_expandable_ExpandableSectionToggle.m_element__elemental2_dom_HTMLElement();
    this.f_content__org_patternfly_component_expandable_ExpandableSection_.m_id__java_lang_String__org_jboss_elemento_TypedBuilder(this.f_contentId__org_patternfly_component_expandable_ExpandableSection_);
    this.f_content__org_patternfly_component_expandable_ExpandableSection_.m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_labelledBy__org_patternfly_core_Aria, this.f_toggleId__org_patternfly_component_expandable_ExpandableSection_);
    this.f_contentEsElement__org_patternfly_component_expandable_ExpandableSection_ = (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
    this.f_contentElement__org_patternfly_component_expandable_ExpandableSection_ = (/**@type {HTMLDivElement}*/ ($Casts.$to(this.f_content__org_patternfly_component_expandable_ExpandableSection_.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
   } else {
    ExpandableSection.f_logger__org_patternfly_component_expandable_ExpandableSection_.m_error__java_lang_String__arrayOf_java_lang_Object__void('The expandable section %o must have a toggle and a content element', [/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))]);
   }
  }
 }
 /** @nodts */
 m_wire__void_$p_org_patternfly_component_expandable_ExpandableSection() {
  if (this.f_detached__org_patternfly_component_expandable_ExpandableSection_) {
   if (!$Equality.$same(this.f_toggle__org_patternfly_component_expandable_ExpandableSection_, null)) {
    this.f_contentElement__org_patternfly_component_expandable_ExpandableSection_ = Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, By.m_id__java_lang_String__org_jboss_elemento_By(this.f_contentId__org_patternfly_component_expandable_ExpandableSection_));
    this.f_contentEsElement__org_patternfly_component_expandable_ExpandableSection_ = (/**@type {HTMLElement}*/ ($Casts.$to(this.f_contentElement__org_patternfly_component_expandable_ExpandableSection_.closest('.' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_expandableSection__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))))), $Overlay)));
   } else if (!$Equality.$same(this.f_content__org_patternfly_component_expandable_ExpandableSection_, null)) {
    this.f_toggleButton__org_patternfly_component_expandable_ExpandableSection_ = Elements.m_querySelector__elemental2_dom_Node__org_jboss_elemento_By__elemental2_dom_HTMLElement(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay, By.m_id__java_lang_String__org_jboss_elemento_By(this.f_toggleId__org_patternfly_component_expandable_ExpandableSection_));
   }
  }
  this.f_wired__org_patternfly_component_expandable_ExpandableSection_ = !$Equality.$same(this.f_toggleButton__org_patternfly_component_expandable_ExpandableSection_, null) && !$Equality.$same(this.f_contentEsElement__org_patternfly_component_expandable_ExpandableSection_, null) && !$Equality.$same(this.f_contentElement__org_patternfly_component_expandable_ExpandableSection_, null);
 }
 /** @nodts */
 m_afterWire__void_$p_org_patternfly_component_expandable_ExpandableSection() {
  let order = this.f_toggleButton__org_patternfly_component_expandable_ExpandableSection_.compareDocumentPosition(this.f_contentElement__org_patternfly_component_expandable_ExpandableSection_);
  if (order == Node_$Overlay.f_DOCUMENT_POSITION_PRECEDING__elemental2_dom_Node_$Overlay) {
   this.f_directionUp__org_patternfly_component_expandable_ExpandableSection_ = true;
  } else if (order == Node_$Overlay.f_DOCUMENT_POSITION_FOLLOWING__elemental2_dom_Node_$Overlay) {
   this.f_directionUp__org_patternfly_component_expandable_ExpandableSection_ = false;
  }
  if (this.f_directionUp__org_patternfly_component_expandable_ExpandableSection_ && this.f_truncate__org_patternfly_component_expandable_ExpandableSection_ == 0) {
   this.f_contentEsElement__org_patternfly_component_expandable_ExpandableSection_.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_expandTop__org_patternfly_style_Classes));
  }
  if (this.f_truncate__org_patternfly_component_expandable_ExpandableSection_ > 0) {
   if (!$Equality.$same(this.f_toggle__org_patternfly_component_expandable_ExpandableSection_, null)) {
    this.f_toggle__org_patternfly_component_expandable_ExpandableSection_.m_truncate__void_$pp_org_patternfly_component_expandable();
   }
   if (this.f_truncate__org_patternfly_component_expandable_ExpandableSection_ != ExpandableSection.f_DEFAULT_TRUNCATE__org_patternfly_component_expandable_ExpandableSection && !$Equality.$same(this.f_content__org_patternfly_component_expandable_ExpandableSection_, null)) {
    (/**@type {HTMLBuilder<HTMLDivElement, ExpandableSectionContent>}*/ (Variable.m_componentVar__java_lang_String__arrayOf_java_lang_String__org_patternfly_style_Variable(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_expandableSection__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), /**@type {!Array<?string>}*/ ($Arrays.$stampType(['m-truncate__content', Variables.f_LineClamp__org_patternfly_style_Variables], j_l_String))).m_applyTo__org_jboss_elemento_HTMLElementStyleMethods__org_patternfly_style_VariableAssignments_HTMLBuilder(this.f_content__org_patternfly_component_expandable_ExpandableSection_))).m_set__int__org_jboss_elemento_TypedBuilder(this.f_truncate__org_patternfly_component_expandable_ExpandableSection_);
   }
  }
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {ExpandableSection} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_expandable_ExpandableSection();
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_toggle__void() {
  Expandable.m_toggle__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_toggle__boolean__void(/** boolean */ arg0) {
  Expandable.m_toggle__$default__org_patternfly_component_Expandable__boolean__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_collapse__void() {
  Expandable.m_collapse__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_expand__void() {
  Expandable.m_expand__$default__org_patternfly_component_Expandable__void(this);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {boolean} */
 m_expanded__boolean() {
  return Expandable.m_expanded__$default__org_patternfly_component_Expandable__boolean(this);
 }
 /** @nodts */
 static $clinit() {
  ExpandableSection.$clinit = () =>{};
  ExpandableSection.$loadModules();
  BaseComponent.$clinit();
  Attachable.$clinit();
  Expandable.$clinit();
  ExpandableSection.f_logger__org_patternfly_component_expandable_ExpandableSection_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(ExpandableSection).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ExpandableSection;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $double = goog.module.get('javaemul.internal.primitives.$double$impl');
  $int = goog.module.get('javaemul.internal.primitives.$int$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Level = goog.module.get('org.jboss.elemento.logger.Level$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  ToggleHandler = goog.module.get('org.patternfly.handler.ToggleHandler$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  Variable = goog.module.get('org.patternfly.style.Variable$impl');
  Variables = goog.module.get('org.patternfly.style.Variables$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {number} @nodts*/
ExpandableSection.f_WIRE_ATTEMPTS__org_patternfly_component_expandable_ExpandableSection_ = 10;
/**@const {number} @nodts*/
ExpandableSection.f_WIRE_INTERVAL__org_patternfly_component_expandable_ExpandableSection_ = 100;
/**@const {number} @nodts*/
ExpandableSection.f_DEFAULT_TRUNCATE__org_patternfly_component_expandable_ExpandableSection = 3;
/**@type {Logger} @nodts*/
ExpandableSection.f_logger__org_patternfly_component_expandable_ExpandableSection_;
Attachable.$markImplementor(ExpandableSection);
Expandable.$markImplementor(ExpandableSection);
$Util.$setClassMetadata(ExpandableSection, 'org.patternfly.component.expandable.ExpandableSection');

exports = ExpandableSection;

//# sourceMappingURL=ExpandableSection.js.map
