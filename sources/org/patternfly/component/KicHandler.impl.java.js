goog.module('org.patternfly.component.KicHandler$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let BaseComponent = goog.forwardDeclare('org.patternfly.component.BaseComponent$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template C
 */
class KicHandler extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {C} @nodts*/
  this.f_component__org_patternfly_component_KicHandler_;
  /**@type {HTMLInputElement} @nodts*/
  this.f_inputElement__org_patternfly_component_KicHandler_;
  /**@type {HTMLTextAreaElement} @nodts*/
  this.f_textAreaElement__org_patternfly_component_KicHandler_;
  /**@type {List<ChangeHandler<C, ?string>>} @nodts*/
  this.f_keydownHandlers__org_patternfly_component_KicHandler_;
  /**@type {List<ChangeHandler<C, ?string>>} @nodts*/
  this.f_keyupHandlers__org_patternfly_component_KicHandler_;
  /**@type {List<ChangeHandler<C, ?string>>} @nodts*/
  this.f_inputHandlers__org_patternfly_component_KicHandler_;
  /**@type {List<ChangeHandler<C, ?string>>} @nodts*/
  this.f_changeHandlers__org_patternfly_component_KicHandler_;
 }
 //Factory method corresponding to constructor 'KicHandler(BaseComponent, HTMLInputElement)'.
 /** @nodts @template C @return {!KicHandler<C>} */
 static $create__org_patternfly_component_BaseComponent__elemental2_dom_HTMLInputElement(/** C */ component, /** HTMLInputElement */ element) {
  KicHandler.$clinit();
  let $instance = new KicHandler();
  $instance.$ctor__org_patternfly_component_KicHandler__org_patternfly_component_BaseComponent__elemental2_dom_HTMLInputElement__void(component, element);
  return $instance;
 }
 //Initialization from constructor 'KicHandler(BaseComponent, HTMLInputElement)'.
 /** @nodts */
 $ctor__org_patternfly_component_KicHandler__org_patternfly_component_BaseComponent__elemental2_dom_HTMLInputElement__void(/** C */ component, /** HTMLInputElement */ element) {
  this.$ctor__org_patternfly_component_KicHandler__org_patternfly_component_BaseComponent__elemental2_dom_HTMLInputElement__elemental2_dom_HTMLTextAreaElement__void(component, element, null);
 }
 //Factory method corresponding to constructor 'KicHandler(BaseComponent, HTMLTextAreaElement)'.
 /** @nodts @template C @return {!KicHandler<C>} */
 static $create__org_patternfly_component_BaseComponent__elemental2_dom_HTMLTextAreaElement(/** C */ component, /** HTMLTextAreaElement */ element) {
  KicHandler.$clinit();
  let $instance = new KicHandler();
  $instance.$ctor__org_patternfly_component_KicHandler__org_patternfly_component_BaseComponent__elemental2_dom_HTMLTextAreaElement__void(component, element);
  return $instance;
 }
 //Initialization from constructor 'KicHandler(BaseComponent, HTMLTextAreaElement)'.
 /** @nodts */
 $ctor__org_patternfly_component_KicHandler__org_patternfly_component_BaseComponent__elemental2_dom_HTMLTextAreaElement__void(/** C */ component, /** HTMLTextAreaElement */ element) {
  this.$ctor__org_patternfly_component_KicHandler__org_patternfly_component_BaseComponent__elemental2_dom_HTMLInputElement__elemental2_dom_HTMLTextAreaElement__void(component, null, element);
 }
 //Factory method corresponding to constructor 'KicHandler(BaseComponent, HTMLInputElement, HTMLTextAreaElement)'.
 /** @nodts @template C @return {!KicHandler<C>} */
 static $create__org_patternfly_component_BaseComponent__elemental2_dom_HTMLInputElement__elemental2_dom_HTMLTextAreaElement(/** C */ component, /** HTMLInputElement */ element, /** HTMLTextAreaElement */ textAreaElement) {
  let $instance = new KicHandler();
  $instance.$ctor__org_patternfly_component_KicHandler__org_patternfly_component_BaseComponent__elemental2_dom_HTMLInputElement__elemental2_dom_HTMLTextAreaElement__void(component, element, textAreaElement);
  return $instance;
 }
 //Initialization from constructor 'KicHandler(BaseComponent, HTMLInputElement, HTMLTextAreaElement)'.
 /** @nodts */
 $ctor__org_patternfly_component_KicHandler__org_patternfly_component_BaseComponent__elemental2_dom_HTMLInputElement__elemental2_dom_HTMLTextAreaElement__void(/** C */ component, /** HTMLInputElement */ element, /** HTMLTextAreaElement */ textAreaElement) {
  this.$ctor__java_lang_Object__void();
  this.f_component__org_patternfly_component_KicHandler_ = component;
  this.f_inputElement__org_patternfly_component_KicHandler_ = element;
  this.f_textAreaElement__org_patternfly_component_KicHandler_ = textAreaElement;
  this.f_keydownHandlers__org_patternfly_component_KicHandler_ = (/**@type {!ArrayList<ChangeHandler<C, ?string>>}*/ (ArrayList.$create__()));
  this.f_keyupHandlers__org_patternfly_component_KicHandler_ = (/**@type {!ArrayList<ChangeHandler<C, ?string>>}*/ (ArrayList.$create__()));
  this.f_inputHandlers__org_patternfly_component_KicHandler_ = (/**@type {!ArrayList<ChangeHandler<C, ?string>>}*/ (ArrayList.$create__()));
  this.f_changeHandlers__org_patternfly_component_KicHandler_ = (/**@type {!ArrayList<ChangeHandler<C, ?string>>}*/ (ArrayList.$create__()));
 }
 /** @nodts @return {C} */
 m_onKeydown__org_patternfly_handler_ChangeHandler__org_patternfly_component_BaseComponent(/** ChangeHandler<C, ?string> */ changeHandler) {
  return this.m_on__java_util_List__java_lang_String__org_patternfly_handler_ChangeHandler__org_patternfly_component_BaseComponent_$p_org_patternfly_component_KicHandler(this.f_keydownHandlers__org_patternfly_component_KicHandler_, EventType.f_keydown__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, changeHandler);
 }
 /** @nodts @return {C} */
 m_onKeyup__org_patternfly_handler_ChangeHandler__org_patternfly_component_BaseComponent(/** ChangeHandler<C, ?string> */ changeHandler) {
  return this.m_on__java_util_List__java_lang_String__org_patternfly_handler_ChangeHandler__org_patternfly_component_BaseComponent_$p_org_patternfly_component_KicHandler(this.f_keyupHandlers__org_patternfly_component_KicHandler_, EventType.f_keyup__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, changeHandler);
 }
 /** @nodts @return {C} */
 m_onInput__org_patternfly_handler_ChangeHandler__org_patternfly_component_BaseComponent(/** ChangeHandler<C, ?string> */ changeHandler) {
  return this.m_on__java_util_List__java_lang_String__org_patternfly_handler_ChangeHandler__org_patternfly_component_BaseComponent_$p_org_patternfly_component_KicHandler(this.f_inputHandlers__org_patternfly_component_KicHandler_, EventType.f_input__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, changeHandler);
 }
 /** @nodts @return {C} */
 m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_BaseComponent(/** ChangeHandler<C, ?string> */ changeHandler) {
  return this.m_on__java_util_List__java_lang_String__org_patternfly_handler_ChangeHandler__org_patternfly_component_BaseComponent_$p_org_patternfly_component_KicHandler(this.f_changeHandlers__org_patternfly_component_KicHandler_, EventType.f_change__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, changeHandler);
 }
 /** @nodts */
 m_fireIfChanged__java_lang_String__void(/** ?string */ value) {
  ChangeHandler.m_fireIfChanged__java_lang_Object__java_lang_Object__java_lang_Object__java_util_List__void(/**@type {C}*/ ($Casts.$to((/**@type {!TypedBuilder<HTMLElement, C>}*/ (this.f_component__org_patternfly_component_KicHandler_)).m_that__org_jboss_elemento_TypedBuilder(), BaseComponent)), this.m_value__java_lang_String_$p_org_patternfly_component_KicHandler(), value, this.f_changeHandlers__org_patternfly_component_KicHandler_);
 }
 /** @nodts @return {C} */
 m_on__java_util_List__java_lang_String__org_patternfly_handler_ChangeHandler__org_patternfly_component_BaseComponent_$p_org_patternfly_component_KicHandler(/** List<ChangeHandler<C, ?string>> */ handlers, /** ?string */ eventType, /** ChangeHandler<C, ?string> */ handler) {
  let firstHandler = handlers.isEmpty();
  handlers.add(handler);
  if (firstHandler) {
   this.m_eventTarget__elemental2_dom_HTMLElement_$p_org_patternfly_component_KicHandler().addEventListener(eventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
    handlers.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** ChangeHandler<C, ?string> */ ch) =>{
     let ch_1 = /**@type {ChangeHandler<C, ?string>}*/ ($Casts.$to(ch, /**@type {Function}*/ (ChangeHandler)));
     ch_1.m_onChange__elemental2_dom_Event__java_lang_Object__java_lang_Object__void(e, /**@type {C}*/ ($Casts.$to((/**@type {!TypedBuilder<HTMLElement, C>}*/ (this.f_component__org_patternfly_component_KicHandler_)).m_that__org_jboss_elemento_TypedBuilder(), BaseComponent)), this.m_value__java_lang_String_$p_org_patternfly_component_KicHandler());
    }));
   }));
  }
  return /**@type {C}*/ ($Casts.$to((/**@type {!TypedBuilder<HTMLElement, C>}*/ (this.f_component__org_patternfly_component_KicHandler_)).m_that__org_jboss_elemento_TypedBuilder(), BaseComponent));
 }
 /** @nodts @return {HTMLElement} */
 m_eventTarget__elemental2_dom_HTMLElement_$p_org_patternfly_component_KicHandler() {
  return !$Equality.$same(this.f_inputElement__org_patternfly_component_KicHandler_, null) ? this.f_inputElement__org_patternfly_component_KicHandler_ : this.f_textAreaElement__org_patternfly_component_KicHandler_;
 }
 /** @nodts @return {?string} */
 m_value__java_lang_String_$p_org_patternfly_component_KicHandler() {
  if (!$Equality.$same(this.f_inputElement__org_patternfly_component_KicHandler_, null)) {
   return this.f_inputElement__org_patternfly_component_KicHandler_.value;
  } else if (!$Equality.$same(this.f_textAreaElement__org_patternfly_component_KicHandler_, null)) {
   return this.f_textAreaElement__org_patternfly_component_KicHandler_.value;
  }
  return null;
 }
 /** @nodts */
 static $clinit() {
  KicHandler.$clinit = () =>{};
  KicHandler.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof KicHandler;
 }
 
 /** @nodts */
 static $loadModules() {
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  BaseComponent = goog.module.get('org.patternfly.component.BaseComponent$impl');
  ChangeHandler = goog.module.get('org.patternfly.handler.ChangeHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(KicHandler, 'org.patternfly.component.KicHandler');

exports = KicHandler;

//# sourceMappingURL=KicHandler.js.map
