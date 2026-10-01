goog.module('org.patternfly.showcase.component.HintComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Checkbox = goog.forwardDeclare('org.patternfly.component.form.Checkbox$impl');
let Hint = goog.forwardDeclare('org.patternfly.component.hint.Hint$impl');
let HintActions = goog.forwardDeclare('org.patternfly.component.hint.HintActions$impl');
let HintBody = goog.forwardDeclare('org.patternfly.component.hint.HintBody$impl');
let HintFooter = goog.forwardDeclare('org.patternfly.component.hint.HintFooter$impl');
let HintTitle = goog.forwardDeclare('org.patternfly.component.hint.HintTitle$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let BuildingBlocks = goog.forwardDeclare('org.patternfly.showcase.BuildingBlocks$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class HintComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!HintComponent} */
 static $create__() {
  HintComponent.$clinit();
  let $instance = new HintComponent();
  $instance.$ctor__org_patternfly_showcase_component_HintComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_HintComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'hint'), Component_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('hint-basic', 'Basic with title', Code.m_code__java_lang_String__java_lang_String('hint-basic'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Hint.m_hint__org_patternfly_component_hint_Hint().m_addActions__org_patternfly_component_hint_HintActions__org_patternfly_component_hint_Hint(/**@type {HintActions}*/ ($Casts.$to(HintActions.m_hintActions__org_patternfly_component_hint_HintActions().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(BuildingBlocks.m_mixedKebab__java_lang_String__org_patternfly_component_menu_Dropdown('hint-basic')), HintActions))).m_addTitle__org_patternfly_component_hint_HintTitle__org_patternfly_component_hint_Hint(/**@type {HintTitle}*/ ($Casts.$to(HintTitle.m_hintTitle__org_patternfly_component_hint_HintTitle().m_text__java_lang_String__org_jboss_elemento_TypedBuilder('Do more with Find it Fix it capabilities'), HintTitle))).m_addBody__org_patternfly_component_hint_HintBody__org_patternfly_component_hint_Hint(/**@type {HintBody}*/ ($Casts.$to(HintBody.m_hintBody__org_patternfly_component_hint_HintBody().m_text__java_lang_String__org_jboss_elemento_TypedBuilder('Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.'), HintBody))).m_addFooter__org_patternfly_component_hint_HintFooter__org_patternfly_component_hint_Hint(/**@type {HintFooter}*/ ($Casts.$to(HintFooter.m_hintFooter__org_patternfly_component_hint_HintFooter().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_link__org_patternfly_component_button_Button().m_inline__org_jboss_elemento_TypedBuilder(), Button))).m_text__java_lang_String__org_patternfly_component_button_Button('Try it for 90 days')), HintFooter)))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('hint-basic-no-title', 'Basic without title', Code.m_code__java_lang_String__java_lang_String('hint-basic-no-title'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Hint.m_hint__org_patternfly_component_hint_Hint().m_addBody__org_patternfly_component_hint_HintBody__org_patternfly_component_hint_Hint(/**@type {HintBody}*/ ($Casts.$to((/**@type {HintBody}*/ ($Casts.$to(HintBody.m_hintBody__org_patternfly_component_hint_HintBody().m_add__java_lang_String__org_jboss_elemento_TypedBuilder('Welcome to the new documentation experience. '), HintBody))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_link__org_patternfly_component_button_Button().m_inline__org_jboss_elemento_TypedBuilder(), Button))).m_text__java_lang_String__org_patternfly_component_button_Button('Learn more about the improved features.')), HintBody)))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Hint.m_hint__org_patternfly_component_hint_Hint().m_addActions__org_patternfly_component_hint_HintActions__org_patternfly_component_hint_Hint(/**@type {HintActions}*/ ($Casts.$to(HintActions.m_hintActions__org_patternfly_component_hint_HintActions().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(BuildingBlocks.m_mixedKebab__java_lang_String__org_patternfly_component_menu_Dropdown('hint-basic-no-title')), HintActions))).m_addBody__org_patternfly_component_hint_HintBody__org_patternfly_component_hint_Hint(/**@type {HintBody}*/ ($Casts.$to(HintBody.m_hintBody__org_patternfly_component_hint_HintBody().m_text__java_lang_String__org_jboss_elemento_TypedBuilder('Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.'), HintBody))).m_addFooter__org_patternfly_component_hint_HintFooter__org_patternfly_component_hint_Hint(/**@type {HintFooter}*/ ($Casts.$to(HintFooter.m_hintFooter__org_patternfly_component_hint_HintFooter().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_link__org_patternfly_component_button_Button().m_inline__org_jboss_elemento_TypedBuilder(), Button))).m_text__java_lang_String__org_patternfly_component_button_Button('Try it for 90 days')), HintFooter)))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('hint-with-action', 'With actions', Code.m_code__java_lang_String__java_lang_String('hint-with-action'), Supplier.$adapt(/**  @return {HTMLElement}*/ (() =>{
   let hintActions = HintActions.m_hintActions__org_patternfly_component_hint_HintActions();
   return /**@type {HTMLDivElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Checkbox.m_checkbox__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Checkbox('no-offset', 'no-offset', 'No actions offset').m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_form_Checkbox(ChangeHandler.$adapt((/** Event */ e, /** Checkbox */ c, /** ?boolean */ value) =>{
    let c_1 = /**@type {Checkbox}*/ ($Casts.$to(c, Checkbox));
    let value_1 = /**@type {?boolean}*/ ($Casts.$to(value, Boolean));
    hintActions.m_noOffset__boolean__org_jboss_elemento_TypedBuilder(Boolean.m_booleanValue__java_lang_Boolean__boolean(value_1));
   }))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder((/**@type {Hint}*/ ($Casts.$to(Hint.m_hint__org_patternfly_component_hint_Hint().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_util__java_lang_String__java_lang_String('mt-sm')], j_l_String))), Hint))).m_addActions__org_patternfly_component_hint_HintActions__org_patternfly_component_hint_Hint(/**@type {HintActions}*/ ($Casts.$to(hintActions.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to(Button.m_button__java_lang_String__org_patternfly_component_button_Button('Action').m_primary__org_jboss_elemento_TypedBuilder(), Button))), HintActions))).m_addTitle__org_patternfly_component_hint_HintTitle__org_patternfly_component_hint_Hint(/**@type {HintTitle}*/ ($Casts.$to(HintTitle.m_hintTitle__org_patternfly_component_hint_HintTitle().m_text__java_lang_String__org_jboss_elemento_TypedBuilder('Do more with Find it Fix it capabilities'), HintTitle))).m_addBody__org_patternfly_component_hint_HintBody__org_patternfly_component_hint_Hint(/**@type {HintBody}*/ ($Casts.$to(HintBody.m_hintBody__org_patternfly_component_hint_HintBody().m_text__java_lang_String__org_jboss_elemento_TypedBuilder('Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.'), HintBody)))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  }))));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(Hint));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(Hint), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(HintActions), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(HintBody), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(HintFooter), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(HintTitle), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  HintComponent.$clinit = () =>{};
  HintComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HintComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Checkbox = goog.module.get('org.patternfly.component.form.Checkbox$impl');
  Hint = goog.module.get('org.patternfly.component.hint.Hint$impl');
  HintActions = goog.module.get('org.patternfly.component.hint.HintActions$impl');
  HintBody = goog.module.get('org.patternfly.component.hint.HintBody$impl');
  HintFooter = goog.module.get('org.patternfly.component.hint.HintFooter$impl');
  HintTitle = goog.module.get('org.patternfly.component.hint.HintTitle$impl');
  ChangeHandler = goog.module.get('org.patternfly.handler.ChangeHandler$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  BuildingBlocks = goog.module.get('org.patternfly.showcase.BuildingBlocks$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(HintComponent, 'org.patternfly.showcase.component.HintComponent');

exports = HintComponent;

//# sourceMappingURL=HintComponent.js.map
