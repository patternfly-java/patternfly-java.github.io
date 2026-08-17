goog.module('org.patternfly.showcase.Snippet$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Content = goog.forwardDeclare('org.patternfly.component.content.Content$impl');
let ContentType = goog.forwardDeclare('org.patternfly.component.content.ContentType$impl');
let Tooltip = goog.forwardDeclare('org.patternfly.component.tooltip.Tooltip$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let CodeEditor = goog.forwardDeclare('org.patternfly.extension.codeeditor.CodeEditor$impl');
let CodeEditorAction = goog.forwardDeclare('org.patternfly.extension.codeeditor.CodeEditorAction$impl');
let CodeEditorActions = goog.forwardDeclare('org.patternfly.extension.codeeditor.CodeEditorActions$impl');
let CodeEditorHeader = goog.forwardDeclare('org.patternfly.extension.codeeditor.CodeEditorHeader$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let rhUi = goog.forwardDeclare('org.patternfly.icon.IconSets.rhUi$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let AlignItems = goog.forwardDeclare('org.patternfly.layout.flex.AlignItems$impl');
let Flex = goog.forwardDeclare('org.patternfly.layout.flex.Flex$impl');
let SpaceItems = goog.forwardDeclare('org.patternfly.layout.flex.SpaceItems$impl');
let Stack = goog.forwardDeclare('org.patternfly.layout.stack.Stack$impl');
let StackItem = goog.forwardDeclare('org.patternfly.layout.stack.StackItem$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsElement<HTMLElement>}
 */
class Snippet extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_showcase_Snippet;
  /**@type {?string} @nodts*/
  this.f_title__org_patternfly_showcase_Snippet;
  /**@type {Supplier<HTMLElement>} @nodts*/
  this.f_demoSupplier__org_patternfly_showcase_Snippet_;
  /**@type {HTMLElement} @nodts*/
  this.f_root__org_patternfly_showcase_Snippet_;
  /**@type {StackItem} @nodts*/
  this.f_preview__org_patternfly_showcase_Snippet_;
 }
 //Factory method corresponding to constructor 'Snippet(String, String, String, Supplier)'.
 /** @nodts @return {!Snippet} */
 static $create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier(/** ?string */ id, /** ?string */ title, /** ?string */ code, /** Supplier<HTMLElement> */ demo) {
  Snippet.$clinit();
  let $instance = new Snippet();
  $instance.$ctor__org_patternfly_showcase_Snippet__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier__void(id, title, code, demo);
  return $instance;
 }
 //Initialization from constructor 'Snippet(String, String, String, Supplier)'.
 /** @nodts */
 $ctor__org_patternfly_showcase_Snippet__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier__void(/** ?string */ id, /** ?string */ title, /** ?string */ code, /** Supplier<HTMLElement> */ demo) {
  this.$ctor__org_patternfly_showcase_Snippet__java_lang_String__java_lang_String__org_patternfly_component_content_Content__java_lang_String__java_util_function_Supplier__void(id, title, /**@type {Content}*/ (null), code, demo);
 }
 //Factory method corresponding to constructor 'Snippet(String, String, String, String, Supplier)'.
 /** @nodts @return {!Snippet} */
 static $create__java_lang_String__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier(/** ?string */ id, /** ?string */ title, /** ?string */ description, /** ?string */ code, /** Supplier<HTMLElement> */ demo) {
  Snippet.$clinit();
  let $instance = new Snippet();
  $instance.$ctor__org_patternfly_showcase_Snippet__java_lang_String__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier__void(id, title, description, code, demo);
  return $instance;
 }
 //Initialization from constructor 'Snippet(String, String, String, String, Supplier)'.
 /** @nodts */
 $ctor__org_patternfly_showcase_Snippet__java_lang_String__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier__void(/** ?string */ id, /** ?string */ title, /** ?string */ description, /** ?string */ code, /** Supplier<HTMLElement> */ demo) {
  this.$ctor__org_patternfly_showcase_Snippet__java_lang_String__java_lang_String__org_patternfly_component_content_Content__java_lang_String__java_util_function_Supplier__void(id, title, $Equality.$same(description, null) ? null : /**@type {Content}*/ ($Casts.$to(Content.m_content__org_patternfly_component_content_ContentType__org_patternfly_component_content_Content(ContentType.f_p__org_patternfly_component_content_ContentType).m_editorial__org_patternfly_component_content_Content().m_text__java_lang_String__org_jboss_elemento_TypedBuilder(description), Content)), code, demo);
 }
 //Factory method corresponding to constructor 'Snippet(String, String, Content, String, Supplier)'.
 /** @nodts @return {!Snippet} */
 static $create__java_lang_String__java_lang_String__org_patternfly_component_content_Content__java_lang_String__java_util_function_Supplier(/** ?string */ id, /** ?string */ title, /** Content */ description, /** ?string */ code, /** Supplier<HTMLElement> */ demo) {
  Snippet.$clinit();
  let $instance = new Snippet();
  $instance.$ctor__org_patternfly_showcase_Snippet__java_lang_String__java_lang_String__org_patternfly_component_content_Content__java_lang_String__java_util_function_Supplier__void(id, title, description, code, demo);
  return $instance;
 }
 //Initialization from constructor 'Snippet(String, String, Content, String, Supplier)'.
 /** @nodts */
 $ctor__org_patternfly_showcase_Snippet__java_lang_String__java_lang_String__org_patternfly_component_content_Content__java_lang_String__java_util_function_Supplier__void(/** ?string */ id, /** ?string */ title, /** Content */ description, /** ?string */ code, /** Supplier<HTMLElement> */ demo) {
  this.$ctor__java_lang_Object__void();
  this.f_id__org_patternfly_showcase_Snippet = id;
  this.f_title__org_patternfly_showcase_Snippet = title;
  this.f_demoSupplier__org_patternfly_showcase_Snippet_ = demo;
  let /** CodeEditor */ codeEditor;
  let codeId = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(id, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['code'], j_l_String)));
  let undoId = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(id, /**@type {!Array<?string>}*/ ($Arrays.$stampType(['undo'], j_l_String)));
  this.f_root__org_patternfly_showcase_Snippet_ = (/**@type {Stack}*/ ($Casts.$to(Stack.m_stack__org_patternfly_layout_stack_Stack().m_gutter__org_jboss_elemento_TypedBuilder(), Stack))).m_addItem__org_patternfly_layout_stack_StackItem__org_patternfly_layout_stack_Stack(/**@type {StackItem}*/ ($Casts.$to((/**@type {StackItem}*/ ($Casts.$to(StackItem.m_stackItem__org_patternfly_layout_stack_StackItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Flex}*/ ($Casts.$to(Flex.m_flex__org_patternfly_layout_flex_Flex().m_spaceItems__org_patternfly_layout_flex_SpaceItems__org_patternfly_layout_flex_Flex(SpaceItems.f_sm__org_patternfly_layout_flex_SpaceItems).m_alignItems__org_patternfly_layout_flex_AlignItems__org_patternfly_layout_flex_Flex(AlignItems.f_center__org_patternfly_layout_flex_AlignItems).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Content}*/ ($Casts.$to((/**@type {Content}*/ ($Casts.$to((/**@type {Content}*/ ($Casts.$to((/**@type {Content}*/ ($Casts.$to(Content.m_content__org_patternfly_component_content_ContentType__org_patternfly_component_content_Content(ContentType.f_h3__org_patternfly_component_content_ContentType).m_editorial__org_patternfly_component_content_Content().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['ws-heading'], j_l_String))), Content))).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(id), Content))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__org_jboss_elemento_HTMLContainerBuilder('#' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(id)).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['ws-heading-anchor'], j_l_String))), HTMLContainerBuilder))).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true), HTMLContainerBuilder))).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(Attributes.f_tabindex__org_patternfly_core_Attributes, -1), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {PredefinedIcon}*/ ($Casts.$to((/**@type {PredefinedIcon}*/ ($Casts.$to(fas.m_link__org_patternfly_icon_PredefinedIcon().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['ws-heading-anchor-icon'], j_l_String))), PredefinedIcon))).m_style__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder('vertical-align', 'middle'), PredefinedIcon))), HTMLContainerBuilder))), Content))).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(title), Content))), Flex))), StackItem))).m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** StackItem */ stackItem) =>{
   let stackItem_1 = /**@type {StackItem}*/ ($Casts.$to(stackItem, StackItem));
   if (!$Equality.$same(description, null)) {
    (/**@type {StackItem}*/ ($Casts.$to(stackItem_1.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Content}*/ ($Casts.$to(Content.m_content__org_patternfly_component_content_ContentType__org_patternfly_component_content_Content(ContentType.f_p__org_patternfly_component_content_ContentType).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['ws-p'], j_l_String))), Content))), StackItem))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(description);
   }
  })), StackItem))).m_addItem__org_patternfly_layout_stack_StackItem__org_patternfly_layout_stack_Stack(this.f_preview__org_patternfly_showcase_Snippet_ = (/**@type {StackItem}*/ ($Casts.$to(StackItem.m_stackItem__org_patternfly_layout_stack_StackItem().m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.m_demoElement__elemental2_dom_HTMLElement_$p_org_patternfly_showcase_Snippet()), StackItem)))).m_addItem__org_patternfly_layout_stack_StackItem__org_patternfly_layout_stack_Stack(/**@type {StackItem}*/ ($Casts.$to(StackItem.m_stackItem__org_patternfly_layout_stack_StackItem().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(codeEditor = (/**@type {CodeEditor}*/ ($Casts.$to(CodeEditor.m_codeEditor__org_patternfly_extension_codeeditor_CodeEditor().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['ws-code-editor'], j_l_String))), CodeEditor))).m_addHeader__org_patternfly_extension_codeeditor_CodeEditorHeader__org_patternfly_extension_codeeditor_CodeEditor((/**@type {CodeEditorHeader}*/ ($Casts.$to(CodeEditorHeader.m_codeEditorHeader__org_patternfly_extension_codeeditor_CodeEditorHeader().m_plain__org_jboss_elemento_TypedBuilder(), CodeEditorHeader))).m_addActions__org_patternfly_extension_codeeditor_CodeEditorActions__org_patternfly_extension_codeeditor_CodeEditorHeader(/**@type {CodeEditorActions}*/ ($Casts.$to((/**@type {CodeEditorActions}*/ ($Casts.$to(CodeEditorActions.m_codeEditorActions__org_patternfly_extension_codeeditor_CodeEditorActions().m_addAction__org_patternfly_extension_codeeditor_CodeEditorAction__org_patternfly_extension_codeeditor_CodeEditorActions(CodeEditorAction.m_codeEditorAction__org_patternfly_component_button_Button__org_patternfly_extension_codeeditor_CodeEditorAction(/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to((/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_id__java_lang_String__org_jboss_elemento_TypedBuilder(codeId), Button))).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['ws-code-editor-control'], j_l_String))), Button))).m_plain__org_jboss_elemento_TypedBuilder(), Button))).m_iconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_jboss_elemento_TypedBuilder(fas.m_code__org_patternfly_icon_PredefinedIcon(), 'Java'), Button))).m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_extension_codeeditor_CodeEditorAction(ComponentHandler.$adapt((/** Event */ event, /** CodeEditor */ ce) =>{
   let ce_1 = /**@type {CodeEditor}*/ ($Casts.$to(ce, CodeEditor));
   let mainElement = ce_1.m_querySelector__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_codeEditor__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_main__org_patternfly_style_Classes], j_l_String)))));
   Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(mainElement, !Elements.m_isVisible__elemental2_dom_HTMLElement__boolean(mainElement));
  }))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Tooltip.m_tooltip__org_jboss_elemento_By__java_lang_String__org_patternfly_component_tooltip_Tooltip(By.m_id__java_lang_String__org_jboss_elemento_By(codeId), 'Toggle Java code')), CodeEditorActions))).m_addAction__org_patternfly_extension_codeeditor_CodeEditorAction__org_patternfly_extension_codeeditor_CodeEditorActions(/**@type {CodeEditorAction}*/ ($Casts.$to(CodeEditorAction.m_codeEditorCopyToClipboardAction__java_lang_String__java_lang_String__org_patternfly_extension_codeeditor_CodeEditorAction('Copy code to clipboard', 'Code copied').m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['ws-code-editor-control'], j_l_String))), CodeEditorAction))).m_addAction__org_patternfly_extension_codeeditor_CodeEditorAction__org_patternfly_extension_codeeditor_CodeEditorActions((/**@type {CodeEditorAction}*/ ($Casts.$to((/**@type {CodeEditorAction}*/ ($Casts.$to(CodeEditorAction.m_codeEditorAction__org_patternfly_icon_PredefinedIcon__org_patternfly_extension_codeeditor_CodeEditorAction(rhUi.m_undo__org_patternfly_icon_PredefinedIcon()).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(undoId), CodeEditorAction))).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType(['ws-code-editor-control'], j_l_String))), CodeEditorAction))).m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_extension_codeeditor_CodeEditorAction(ComponentHandler.$adapt((/** Event */ event_1, /** CodeEditor */ codeEditorAction) =>{
   let codeEditorAction_1 = /**@type {CodeEditor}*/ ($Casts.$to(codeEditorAction, CodeEditor));
   this.m_undo__void_$p_org_patternfly_showcase_Snippet();
  }))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Tooltip.m_tooltip__org_jboss_elemento_By__java_lang_String__org_patternfly_component_tooltip_Tooltip(By.m_id__java_lang_String__org_jboss_elemento_By(undoId), 'Undo')), CodeEditorActions)))).m_code__java_lang_String__org_patternfly_extension_codeeditor_CodeEditor(code)), StackItem))).m_element__elemental2_dom_HTMLElement();
  let mainElement_1 = codeEditor.m_querySelector__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_codeEditor__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_main__org_patternfly_style_Classes], j_l_String)))));
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(mainElement_1, false);
 }
 /** @nodts */
 m_undo__void_$p_org_patternfly_showcase_Snippet() {
  Elements.m_removeChildrenFrom__org_jboss_elemento_IsElement__void(this.f_preview__org_patternfly_showcase_Snippet_);
  this.f_preview__org_patternfly_showcase_Snippet_.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.m_demoElement__elemental2_dom_HTMLElement_$p_org_patternfly_showcase_Snippet());
 }
 /** @nodts @return {HTMLElement} */
 m_element__elemental2_dom_HTMLElement() {
  return this.f_root__org_patternfly_showcase_Snippet_;
 }
 /** @nodts @return {Snippet} */
 m_style__java_lang_String__org_patternfly_showcase_Snippet(/** ?string */ style) {
  this.f_preview__org_patternfly_showcase_Snippet_.m_style__java_lang_String__org_jboss_elemento_TypedBuilder(style);
  return this;
 }
 /** @nodts @return {HTMLElement} */
 m_demoElement__elemental2_dom_HTMLElement_$p_org_patternfly_showcase_Snippet() {
  let element = /**@type {HTMLElement}*/ ($Casts.$to(this.f_demoSupplier__org_patternfly_showcase_Snippet_.m_get__java_lang_Object(), $Overlay));
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object__void(element.dataset, Snippet.f_DEMO_DATA__org_patternfly_showcase_Snippet_, '');
  return element;
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLElement} */
 m_element__elemental2_dom_Element() {
  return this.m_element__elemental2_dom_HTMLElement();
 }
 /** @nodts */
 static $clinit() {
  Snippet.$clinit = () =>{};
  Snippet.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Snippet;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Content = goog.module.get('org.patternfly.component.content.Content$impl');
  ContentType = goog.module.get('org.patternfly.component.content.ContentType$impl');
  Tooltip = goog.module.get('org.patternfly.component.tooltip.Tooltip$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  CodeEditor = goog.module.get('org.patternfly.extension.codeeditor.CodeEditor$impl');
  CodeEditorAction = goog.module.get('org.patternfly.extension.codeeditor.CodeEditorAction$impl');
  CodeEditorActions = goog.module.get('org.patternfly.extension.codeeditor.CodeEditorActions$impl');
  CodeEditorHeader = goog.module.get('org.patternfly.extension.codeeditor.CodeEditorHeader$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  rhUi = goog.module.get('org.patternfly.icon.IconSets.rhUi$impl');
  PredefinedIcon = goog.module.get('org.patternfly.icon.PredefinedIcon$impl');
  AlignItems = goog.module.get('org.patternfly.layout.flex.AlignItems$impl');
  Flex = goog.module.get('org.patternfly.layout.flex.Flex$impl');
  SpaceItems = goog.module.get('org.patternfly.layout.flex.SpaceItems$impl');
  Stack = goog.module.get('org.patternfly.layout.stack.Stack$impl');
  StackItem = goog.module.get('org.patternfly.layout.stack.StackItem$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
Snippet.f_DEMO_DATA__org_patternfly_showcase_Snippet_ = 'pfjDemo';
IsElement.$markImplementor(Snippet);
$Util.$setClassMetadata(Snippet, 'org.patternfly.showcase.Snippet');

exports = Snippet;

//# sourceMappingURL=Snippet.js.map
