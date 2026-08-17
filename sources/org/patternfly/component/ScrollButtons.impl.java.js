goog.module('org.patternfly.component.ScrollButtons$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let LanguageDirection = goog.forwardDeclare('org.patternfly.core.LanguageDirection$impl');
let ObservableValue = goog.forwardDeclare('org.patternfly.core.ObservableValue$impl');
let Subscriber = goog.forwardDeclare('org.patternfly.core.ObservableValue.Subscriber$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let rhMicrons = goog.forwardDeclare('org.patternfly.icon.IconSets.rhMicrons$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ScrollButtons extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_scrollBackContainer__org_patternfly_component_ScrollButtons;
  /**@type {HTMLElement} @nodts*/
  this.f_scrollForwardContainer__org_patternfly_component_ScrollButtons;
  /**@type {Button} @nodts*/
  this.f_scrollBack__org_patternfly_component_ScrollButtons;
  /**@type {Button} @nodts*/
  this.f_scrollForward__org_patternfly_component_ScrollButtons;
  /**@type {HTMLElement} @nodts*/
  this.f_component__org_patternfly_component_ScrollButtons_;
  /**@type {HTMLElement} @nodts*/
  this.f_itemsContainer__org_patternfly_component_ScrollButtons_;
  /**@type {ObservableValue<?boolean>} @nodts*/
  this.f_enableScrollButtons__org_patternfly_component_ScrollButtons_;
  /**@type {ObservableValue<?boolean>} @nodts*/
  this.f_showScrollButtons__org_patternfly_component_ScrollButtons_;
  /**@type {ObservableValue<?boolean>} @nodts*/
  this.f_renderScrollButtons__org_patternfly_component_ScrollButtons_;
  /**@type {ObservableValue<?boolean>} @nodts*/
  this.f_disableBackScrollButton__org_patternfly_component_ScrollButtons_;
  /**@type {ObservableValue<?boolean>} @nodts*/
  this.f_disableForwardScrollButton__org_patternfly_component_ScrollButtons_;
  /**@type {number} @nodts*/
  this.f_scrollTimeout__org_patternfly_component_ScrollButtons_ = 0;
  /**@type {HandlerRegistration} @nodts*/
  this.f_scrollHandler__org_patternfly_component_ScrollButtons_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_resizeHandler__org_patternfly_component_ScrollButtons_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_transitionEndHandler__org_patternfly_component_ScrollButtons_;
 }
 /** @nodts @return {!ScrollButtons} */
 static $create__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__java_lang_String(/** HTMLElement */ component, /** HTMLElement */ itemsContainer, /** ?string */ css) {
  ScrollButtons.$clinit();
  let $instance = new ScrollButtons();
  $instance.$ctor__org_patternfly_component_ScrollButtons__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__java_lang_String__void(component, itemsContainer, css);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_ScrollButtons__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__java_lang_String__void(/** HTMLElement */ component, /** HTMLElement */ itemsContainer, /** ?string */ css) {
  this.$ctor__java_lang_Object__void();
  this.f_component__org_patternfly_component_ScrollButtons_ = component;
  this.f_itemsContainer__org_patternfly_component_ScrollButtons_ = itemsContainer;
  this.f_enableScrollButtons__org_patternfly_component_ScrollButtons_ = (/**@type {ObservableValue<?boolean>}*/ (ObservableValue.m_ov__java_lang_Object__org_patternfly_core_ObservableValue(false)));
  this.f_showScrollButtons__org_patternfly_component_ScrollButtons_ = (/**@type {ObservableValue<?boolean>}*/ (ObservableValue.m_ov__java_lang_Object__org_patternfly_core_ObservableValue(false)));
  this.f_renderScrollButtons__org_patternfly_component_ScrollButtons_ = (/**@type {ObservableValue<?boolean>}*/ (ObservableValue.m_ov__java_lang_Object__org_patternfly_core_ObservableValue(false)));
  this.f_disableBackScrollButton__org_patternfly_component_ScrollButtons_ = (/**@type {ObservableValue<?boolean>}*/ (ObservableValue.m_ov__java_lang_Object__org_patternfly_core_ObservableValue(false)));
  this.f_disableForwardScrollButton__org_patternfly_component_ScrollButtons_ = (/**@type {ObservableValue<?boolean>}*/ (ObservableValue.m_ov__java_lang_Object__org_patternfly_core_ObservableValue(false)));
  this.f_scrollBackContainer__org_patternfly_component_ScrollButtons = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([css], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_scrollBack__org_patternfly_component_ScrollButtons = (/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(rhMicrons.m_caretLeft__org_patternfly_icon_PredefinedIcon()), Button))).m_plain__org_jboss_elemento_TypedBuilder(), Button))).m_disabled__org_jboss_elemento_TypedBuilder(), Button))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Scroll back'), Button)))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.f_scrollForwardContainer__org_patternfly_component_ScrollButtons = (/**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([css], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_scrollForward__org_patternfly_component_ScrollButtons = (/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(rhMicrons.m_caretRight__org_patternfly_icon_PredefinedIcon()), Button))).m_plain__org_jboss_elemento_TypedBuilder(), Button))).m_disabled__org_jboss_elemento_TypedBuilder(), Button))).m_aria__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Aria.f_label__org_patternfly_core_Aria, 'Scroll forward'), Button)))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(this.f_scrollBackContainer__org_patternfly_component_ScrollButtons, false);
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(this.f_scrollForwardContainer__org_patternfly_component_ScrollButtons, false);
 }
 /** @nodts */
 m_attach__void() {
  this.f_scrollHandler__org_patternfly_component_ScrollButtons_ = EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(this.f_itemsContainer__org_patternfly_component_ScrollButtons_, EventType.f_scroll__org_jboss_elemento_EventType, (/** Event */ e) =>{
   this.m_updateScrollState__void();
  });
  this.f_scrollBack__org_patternfly_component_ScrollButtons.m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ e_1, /** Button */ b) =>{
   let b_1 = /**@type {Button}*/ ($Casts.$to(b, Button));
   this.m_scrollBack__void_$p_org_patternfly_component_ScrollButtons();
  }));
  this.f_scrollForward__org_patternfly_component_ScrollButtons.m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_button_Button(ComponentHandler.$adapt((/** Event */ e_2, /** Button */ b_2) =>{
   let b_3 = /**@type {Button}*/ ($Casts.$to(b_2, Button));
   this.m_scrollForward__void_$p_org_patternfly_component_ScrollButtons();
  }));
  this.f_enableScrollButtons__org_patternfly_component_ScrollButtons_.m_subscribe__org_patternfly_core_ObservableValue_Subscriber__org_patternfly_core_ObservableValue(Subscriber.$adapt((/** ?boolean */ current, /** ?boolean */ previous) =>{
   let current_1 = /**@type {?boolean}*/ ($Casts.$to(current, Boolean));
   let previous_1 = /**@type {?boolean}*/ ($Casts.$to(previous, Boolean));
   if (!Boolean.m_booleanValue__java_lang_Boolean__boolean(previous_1) && Boolean.m_booleanValue__java_lang_Boolean__boolean(current_1)) {
    this.f_renderScrollButtons__org_patternfly_component_ScrollButtons_.m_change__java_lang_Object__void(true);
    DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ __) =>{
     this.f_transitionEndHandler__org_patternfly_component_ScrollButtons_ = EventType.m_bind__org_jboss_elemento_IsElement__java_lang_String__elemental2_dom_EventListener__org_gwtproject_event_shared_HandlerRegistration(this.f_scrollBack__org_patternfly_component_ScrollButtons, 'transitionend', EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e_3) =>{
      this.m_hideScrollButtons__void_$p_org_patternfly_component_ScrollButtons();
     }));
     this.f_showScrollButtons__org_patternfly_component_ScrollButtons_.m_set__java_lang_Object__void(true);
    }, 100, []);
   } else if (Boolean.m_booleanValue__java_lang_Boolean__boolean(previous_1) && !Boolean.m_booleanValue__java_lang_Boolean__boolean(current_1)) {
    this.f_showScrollButtons__org_patternfly_component_ScrollButtons_.m_change__java_lang_Object__void(false);
   }
  }));
  this.f_showScrollButtons__org_patternfly_component_ScrollButtons_.m_subscribe__org_patternfly_core_ObservableValue_Subscriber__org_patternfly_core_ObservableValue(Subscriber.$adapt((/** ?boolean */ current_2, /** ?boolean */ ___1) =>{
   let current_3 = /**@type {?boolean}*/ ($Casts.$to(current_2, Boolean));
   let ___2 = /**@type {?boolean}*/ ($Casts.$to(___1, Boolean));
   this.f_component__org_patternfly_component_ScrollButtons_.classList.toggle(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_scrollable__org_patternfly_style_Classes), Boolean.m_booleanValue__java_lang_Boolean__boolean(current_3));
  }));
  this.f_renderScrollButtons__org_patternfly_component_ScrollButtons_.m_subscribe__org_patternfly_core_ObservableValue_Subscriber__org_patternfly_core_ObservableValue(Subscriber.$adapt((/** ?boolean */ current_4, /** ?boolean */ ___3) =>{
   let current_5 = /**@type {?boolean}*/ ($Casts.$to(current_4, Boolean));
   let ___4 = /**@type {?boolean}*/ ($Casts.$to(___3, Boolean));
   Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(this.f_scrollBackContainer__org_patternfly_component_ScrollButtons, Boolean.m_booleanValue__java_lang_Boolean__boolean(current_5));
   Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(this.f_scrollForwardContainer__org_patternfly_component_ScrollButtons, Boolean.m_booleanValue__java_lang_Boolean__boolean(current_5));
  }));
  this.f_disableBackScrollButton__org_patternfly_component_ScrollButtons_.m_subscribe__org_patternfly_core_ObservableValue_Subscriber__org_patternfly_core_ObservableValue(Subscriber.$adapt((/** ?boolean */ current_6, /** ?boolean */ ___5) =>{
   let current_7 = /**@type {?boolean}*/ ($Casts.$to(current_6, Boolean));
   let ___6 = /**@type {?boolean}*/ ($Casts.$to(___5, Boolean));
   this.f_scrollBack__org_patternfly_component_ScrollButtons.m_disabled__boolean__org_patternfly_component_button_Button(Boolean.m_booleanValue__java_lang_Boolean__boolean(current_7));
  }));
  this.f_disableForwardScrollButton__org_patternfly_component_ScrollButtons_.m_subscribe__org_patternfly_core_ObservableValue_Subscriber__org_patternfly_core_ObservableValue(Subscriber.$adapt((/** ?boolean */ current_8, /** ?boolean */ ___7) =>{
   let current_9 = /**@type {?boolean}*/ ($Casts.$to(current_8, Boolean));
   let ___8 = /**@type {?boolean}*/ ($Casts.$to(___7, Boolean));
   this.f_scrollForward__org_patternfly_component_ScrollButtons.m_disabled__boolean__org_patternfly_component_button_Button(Boolean.m_booleanValue__java_lang_Boolean__boolean(current_9));
  }));
  this.f_resizeHandler__org_patternfly_component_ScrollButtons_ = EventType.m_bind__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__org_gwtproject_event_shared_HandlerRegistration(goog.global.window, EventType.f_resize__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e_4) =>{
   this.m_updateScrollState__void();
  }));
  this.m_updateScrollState__void();
 }
 /** @nodts */
 m_detach__void() {
  goog.global.clearTimeout(this.f_scrollTimeout__org_patternfly_component_ScrollButtons_);
  if (!$Equality.$same(this.f_scrollHandler__org_patternfly_component_ScrollButtons_, null)) {
   this.f_scrollHandler__org_patternfly_component_ScrollButtons_.m_removeHandler__void();
  }
  if (!$Equality.$same(this.f_resizeHandler__org_patternfly_component_ScrollButtons_, null)) {
   this.f_resizeHandler__org_patternfly_component_ScrollButtons_.m_removeHandler__void();
  }
  if (!$Equality.$same(this.f_transitionEndHandler__org_patternfly_component_ScrollButtons_, null)) {
   this.f_transitionEndHandler__org_patternfly_component_ScrollButtons_.m_removeHandler__void();
  }
 }
 /** @nodts */
 m_updateScrollState__void() {
  goog.global.clearTimeout(this.f_scrollTimeout__org_patternfly_component_ScrollButtons_);
  this.f_scrollTimeout__org_patternfly_component_ScrollButtons_ = DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ __) =>{
   let overflowOnLeft = !Elements.m_isElementInView__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__boolean__boolean(this.f_itemsContainer__org_patternfly_component_ScrollButtons_, /**@type {HTMLElement}*/ ($Casts.$to(this.f_itemsContainer__org_patternfly_component_ScrollButtons_.firstElementChild, $Overlay)), false);
   let overflowOnRight = !Elements.m_isElementInView__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__boolean__boolean(this.f_itemsContainer__org_patternfly_component_ScrollButtons_, /**@type {HTMLElement}*/ ($Casts.$to(this.f_itemsContainer__org_patternfly_component_ScrollButtons_.lastElementChild, $Overlay)), false);
   this.f_enableScrollButtons__org_patternfly_component_ScrollButtons_.m_change__java_lang_Object__void(overflowOnLeft || overflowOnRight);
   this.f_disableBackScrollButton__org_patternfly_component_ScrollButtons_.m_change__java_lang_Object__void(!overflowOnLeft);
   this.f_disableForwardScrollButton__org_patternfly_component_ScrollButtons_.m_change__java_lang_Object__void(!overflowOnRight);
  }, 100, []);
 }
 /** @nodts */
 m_scrollBack__void_$p_org_patternfly_component_ScrollButtons() {
  let /** HTMLElement */ firstElementInView = null;
  let /** HTMLElement */ lastElementOutOfView = null;
  let children = this.f_itemsContainer__org_patternfly_component_ScrollButtons_.childNodes;
  for (let i = 0; i < children.length && $Equality.$same(firstElementInView, null); i = i + 1 | 0) {
   let child = /**@type {HTMLElement}*/ ($Casts.$to(children.item(i), $Overlay));
   if (Elements.m_isElementInView__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__boolean__boolean(this.f_itemsContainer__org_patternfly_component_ScrollButtons_, child, false)) {
    firstElementInView = child;
    lastElementOutOfView = (/**@type {HTMLElement}*/ ($Casts.$to(children.item(i - 1 | 0), $Overlay)));
   }
  }
  if (!$Equality.$same(lastElementOutOfView, null)) {
   if ($Equality.$same(LanguageDirection.m_languageDirection__elemental2_dom_HTMLElement__org_patternfly_core_LanguageDirection(this.f_component__org_patternfly_component_ScrollButtons_), LanguageDirection.f_ltr__org_patternfly_core_LanguageDirection)) {
    this.f_itemsContainer__org_patternfly_component_ScrollButtons_.scrollLeft -= lastElementOutOfView.scrollWidth;
   } else {
    this.f_itemsContainer__org_patternfly_component_ScrollButtons_.scrollLeft += lastElementOutOfView.scrollWidth;
   }
  }
 }
 /** @nodts */
 m_scrollForward__void_$p_org_patternfly_component_ScrollButtons() {
  let /** HTMLElement */ lastElementInView = null;
  let /** HTMLElement */ firstElementOutOfView = null;
  let children = this.f_itemsContainer__org_patternfly_component_ScrollButtons_.childNodes;
  for (let i = children.length - 1 | 0; i >= 0 && $Equality.$same(lastElementInView, null); i = i - 1 | 0) {
   let child = /**@type {HTMLElement}*/ ($Casts.$to(children.item(i), $Overlay));
   if (Elements.m_isElementInView__elemental2_dom_HTMLElement__elemental2_dom_HTMLElement__boolean__boolean(this.f_itemsContainer__org_patternfly_component_ScrollButtons_, child, false)) {
    lastElementInView = child;
    firstElementOutOfView = (/**@type {HTMLElement}*/ ($Casts.$to(children.item(i + 1 | 0), $Overlay)));
   }
  }
  if (!$Equality.$same(firstElementOutOfView, null)) {
   if ($Equality.$same(LanguageDirection.m_languageDirection__elemental2_dom_HTMLElement__org_patternfly_core_LanguageDirection(this.f_component__org_patternfly_component_ScrollButtons_), LanguageDirection.f_ltr__org_patternfly_core_LanguageDirection)) {
    this.f_itemsContainer__org_patternfly_component_ScrollButtons_.scrollLeft += firstElementOutOfView.scrollWidth;
   } else {
    this.f_itemsContainer__org_patternfly_component_ScrollButtons_.scrollLeft -= firstElementOutOfView.scrollWidth;
   }
  }
 }
 /** @nodts */
 m_hideScrollButtons__void_$p_org_patternfly_component_ScrollButtons() {
  if (!Boolean.m_booleanValue__java_lang_Boolean__boolean(/**@type {?boolean}*/ ($Casts.$to(this.f_enableScrollButtons__org_patternfly_component_ScrollButtons_.m_get__java_lang_Object(), Boolean))) && !Boolean.m_booleanValue__java_lang_Boolean__boolean(/**@type {?boolean}*/ ($Casts.$to(this.f_showScrollButtons__org_patternfly_component_ScrollButtons_.m_get__java_lang_Object(), Boolean))) && Boolean.m_booleanValue__java_lang_Boolean__boolean(/**@type {?boolean}*/ ($Casts.$to(this.f_renderScrollButtons__org_patternfly_component_ScrollButtons_.m_get__java_lang_Object(), Boolean)))) {
   this.f_renderScrollButtons__org_patternfly_component_ScrollButtons_.m_change__java_lang_Object__void(false);
  }
 }
 /** @nodts */
 static $clinit() {
  ScrollButtons.$clinit = () =>{};
  ScrollButtons.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ScrollButtons;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  LanguageDirection = goog.module.get('org.patternfly.core.LanguageDirection$impl');
  ObservableValue = goog.module.get('org.patternfly.core.ObservableValue$impl');
  Subscriber = goog.module.get('org.patternfly.core.ObservableValue.Subscriber$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  rhMicrons = goog.module.get('org.patternfly.icon.IconSets.rhMicrons$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ScrollButtons, 'org.patternfly.component.ScrollButtons');

exports = ScrollButtons;

//# sourceMappingURL=ScrollButtons.js.map
