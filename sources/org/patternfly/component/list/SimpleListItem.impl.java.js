goog.module('org.patternfly.component.list.SimpleListItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementContainerDelegate = goog.require('org.jboss.elemento.ElementContainerDelegate$impl');
const ElementTextDelegate = goog.require('org.jboss.elemento.ElementTextDelegate$impl');
const HasIdentifier = goog.require('org.patternfly.component.HasIdentifier$impl');
const SimpleListSubComponent = goog.require('org.patternfly.component.list.SimpleListSubComponent$impl');
const ComponentContext = goog.require('org.patternfly.core.ComponentContext$impl');

let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let HTMLAnchorElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ButtonType = goog.forwardDeclare('org.jboss.elemento.ButtonType$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let SimpleList = goog.forwardDeclare('org.patternfly.component.list.SimpleList$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {SimpleListSubComponent<HTMLLIElement, SimpleListItem>}
 * @implements {ComponentContext<HTMLLIElement, SimpleListItem>}
 * @implements {ElementContainerDelegate<HTMLLIElement, SimpleListItem>}
 * @implements {ElementTextDelegate<HTMLLIElement, SimpleListItem>}
 * @implements {HasIdentifier<HTMLLIElement, SimpleListItem>}
 */
class SimpleListItem extends SimpleListSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_component_list_SimpleListItem_;
  /**@type {Map<?string, *>} @nodts*/
  this.f_data__org_patternfly_component_list_SimpleListItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_itemElement__org_patternfly_component_list_SimpleListItem_;
  /**@type {HTMLAnchorElement} @nodts*/
  this.f_anchorElement__org_patternfly_component_list_SimpleListItem_;
 }
 /** @nodts @return {SimpleListItem} */
 static m_simpleListItem__java_lang_String__org_patternfly_component_list_SimpleListItem(/** ?string */ identifier) {
  SimpleListItem.$clinit();
  return SimpleListItem.$create__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(identifier, Elements.m_button__org_jboss_elemento_ButtonType__org_jboss_elemento_HTMLContainerBuilder(ButtonType.f_button__org_jboss_elemento_ButtonType));
 }
 /** @nodts @return {SimpleListItem} */
 static m_simpleListItem__java_lang_String__java_lang_String__org_patternfly_component_list_SimpleListItem(/** ?string */ identifier, /** ?string */ text) {
  SimpleListItem.$clinit();
  return /**@type {SimpleListItem}*/ ($Casts.$to(SimpleListItem.$create__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(identifier, Elements.m_button__org_jboss_elemento_ButtonType__org_jboss_elemento_HTMLContainerBuilder(ButtonType.f_button__org_jboss_elemento_ButtonType)).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(text), SimpleListItem));
 }
 /** @nodts @return {SimpleListItem} */
 static m_simpleListItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_list_SimpleListItem(/** ?string */ identifier, /** ?string */ text, /** ?string */ href) {
  SimpleListItem.$clinit();
  return (/**@type {SimpleListItem}*/ ($Casts.$to(SimpleListItem.$create__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(identifier, /**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__org_jboss_elemento_HTMLContainerBuilder().m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** HTMLAnchorElement */ a) =>{
   let a_1 = /**@type {HTMLAnchorElement}*/ ($Casts.$to(a, HTMLAnchorElement_$Overlay));
   a_1.tabIndex = 0;
  })), HTMLContainerBuilder))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(text), SimpleListItem))).m_href__java_lang_String__org_patternfly_component_list_SimpleListItem(href);
 }
 /** @nodts @return {SimpleListItem} */
 static m_simpleListItem__java_lang_String__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_list_SimpleListItem(/** ?string */ identifier, /** ?string */ text, /** ?string */ href, /** ?string */ target) {
  SimpleListItem.$clinit();
  return (/**@type {SimpleListItem}*/ ($Casts.$to(SimpleListItem.$create__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(identifier, /**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__org_jboss_elemento_HTMLContainerBuilder().m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** HTMLAnchorElement */ a) =>{
   let a_1 = /**@type {HTMLAnchorElement}*/ ($Casts.$to(a, HTMLAnchorElement_$Overlay));
   a_1.tabIndex = 0;
  })), HTMLContainerBuilder))).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(text), SimpleListItem))).m_href__java_lang_String__org_patternfly_component_list_SimpleListItem(href).m_target__java_lang_String__org_patternfly_component_list_SimpleListItem(target);
 }
 /** @nodts @template E @return {SimpleListItem} */
 static m_simpleListItem__java_lang_String__org_jboss_elemento_HTMLContainerBuilder__org_patternfly_component_list_SimpleListItem(/** ?string */ identifier, /** HTMLContainerBuilder<E> */ builder) {
  SimpleListItem.$clinit();
  return SimpleListItem.$create__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(identifier, builder);
 }
 /** @nodts @template E @return {!SimpleListItem} */
 static $create__java_lang_String__org_jboss_elemento_HTMLContainerBuilder(/** ?string */ identifier, /** HTMLContainerBuilder<E> */ builder) {
  SimpleListItem.$clinit();
  let $instance = new SimpleListItem();
  $instance.$ctor__org_patternfly_component_list_SimpleListItem__java_lang_String__org_jboss_elemento_HTMLContainerBuilder__void(identifier, builder);
  return $instance;
 }
 /** @nodts @template E */
 $ctor__org_patternfly_component_list_SimpleListItem__java_lang_String__org_jboss_elemento_HTMLContainerBuilder__void(/** ?string */ identifier, /** HTMLContainerBuilder<E> */ builder) {
  this.$ctor__org_patternfly_component_list_SimpleListSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(SimpleListItem.f_SUB_COMPONENT_ID__org_patternfly_component_list_SimpleListItem, SimpleListItem.f_SUB_COMPONENT_NAME__org_patternfly_component_list_SimpleListItem, /**@type {HTMLLIElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_simpleList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_identifier__org_patternfly_core_Dataset, identifier), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  this.f_identifier__org_patternfly_component_list_SimpleListItem_ = identifier;
  this.f_data__org_patternfly_component_list_SimpleListItem_ = (/**@type {!HashMap<?string, *>}*/ (HashMap.$create__()));
  this.f_itemElement__org_patternfly_component_list_SimpleListItem_ = (/**@type {HTMLElement}*/ ((/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<E>}*/ ($Casts.$to(builder.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_simpleList__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_link__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   let simpleList = /**@type {SimpleList}*/ ($Casts.$to(this.m_lookupComponent__org_patternfly_component_BaseComponent(), SimpleList));
   simpleList.m_select__org_patternfly_component_list_SimpleListItem__void(this);
  }), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement()));
  this.f_anchorElement__org_patternfly_component_list_SimpleListItem_ = j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String__boolean(this.f_itemElement__org_patternfly_component_list_SimpleListItem_.tagName, 'a') ? /**@type {HTMLAnchorElement}*/ ($Casts.$to(this.f_itemElement__org_patternfly_component_list_SimpleListItem_, HTMLAnchorElement_$Overlay)) : null;
  (/**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay))).appendChild(this.f_itemElement__org_patternfly_component_list_SimpleListItem_);
 }
 /** @override @nodts @return {Element} */
 m_containerDelegate__elemental2_dom_Element() {
  return this.f_itemElement__org_patternfly_component_list_SimpleListItem_;
 }
 /** @override @nodts @return {Element} */
 m_textDelegate__elemental2_dom_Element() {
  return this.f_itemElement__org_patternfly_component_list_SimpleListItem_;
 }
 /** @nodts @return {SimpleListItem} */
 m_href__java_lang_String__org_patternfly_component_list_SimpleListItem(/** ?string */ href) {
  if (!$Equality.$same(this.f_anchorElement__org_patternfly_component_list_SimpleListItem_, null)) {
   this.f_anchorElement__org_patternfly_component_list_SimpleListItem_.href = href;
   this.f_anchorElement__org_patternfly_component_list_SimpleListItem_.classList.add(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_link__org_patternfly_style_Classes));
  } else {
   SimpleListItem.f_logger__org_patternfly_component_list_SimpleListItem_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Unable to set href on %o: This simple list item is not an <a/> item.', [/**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay))]);
  }
  return this;
 }
 /** @nodts @return {SimpleListItem} */
 m_target__java_lang_String__org_patternfly_component_list_SimpleListItem(/** ?string */ target) {
  if (!$Equality.$same(this.f_anchorElement__org_patternfly_component_list_SimpleListItem_, null)) {
   this.f_anchorElement__org_patternfly_component_list_SimpleListItem_.target = target;
  } else {
   SimpleListItem.f_logger__org_patternfly_component_list_SimpleListItem_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Unable to set target on %o: This simple list item is not an <a/> item.', [/**@type {HTMLLIElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay))]);
  }
  return this;
 }
 /** @nodts @template T @return {SimpleListItem} */
 m_store__java_lang_String__java_lang_Object__org_patternfly_component_list_SimpleListItem(/** ?string */ key, /** T */ value) {
  this.f_data__org_patternfly_component_list_SimpleListItem_.put(key, value);
  return this;
 }
 /** @nodts @return {SimpleListItem} */
 m_that__org_patternfly_component_list_SimpleListItem() {
  return this;
 }
 /** @nodts @return {SimpleListItem} */
 m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_list_SimpleListItem(/** ComponentHandler<SimpleListItem> */ actionHandler) {
  this.f_itemElement__org_patternfly_component_list_SimpleListItem_.addEventListener(EventType.f_click__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ e) =>{
   actionHandler.m_handle__elemental2_dom_Event__java_lang_Object__void(e, this);
  }));
  return this;
 }
 /** @override @nodts @return {?string} */
 m_identifier__java_lang_String() {
  return this.f_identifier__org_patternfly_component_list_SimpleListItem_;
 }
 /** @override @nodts @return {boolean} */
 m_has__java_lang_String__boolean(/** ?string */ key) {
  return this.f_data__org_patternfly_component_list_SimpleListItem_.containsKey(key);
 }
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {
  if (this.f_data__org_patternfly_component_list_SimpleListItem_.containsKey(key)) {
   return /**@type {?T}*/ (this.f_data__org_patternfly_component_list_SimpleListItem_.get(key));
  }
  return null;
 }
 /** @nodts */
 m_markSelected__boolean__void_$pp_org_patternfly_component_list(/** boolean */ selected) {
  this.f_itemElement__org_patternfly_component_list_SimpleListItem_.classList.toggle(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_current__org_patternfly_style_Classes), selected);
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleListItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_list_SimpleListItem();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {SimpleListItem} */
 m_store__java_lang_String__java_lang_Object__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** T */ arg1) {
  return this.m_store__java_lang_String__java_lang_Object__org_patternfly_component_list_SimpleListItem(arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object__java_lang_Object(/** ?string */ arg0, /** T */ arg1) {
  return ComponentContext.m_get__$default__org_patternfly_core_ComponentContext__java_lang_String__java_lang_Object__java_lang_Object(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_util_function_Supplier__java_lang_Object(/** ?string */ arg0, /** Supplier<T> */ arg1) {
  return ComponentContext.m_get__$default__org_patternfly_core_ComponentContext__java_lang_String__java_util_function_Supplier__java_lang_Object(this, arg0, arg1);
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleListItem} */
 m_add__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {SimpleListItem}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleListItem} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ arg0) {
  return /**@type {SimpleListItem}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleListItem} */
 m_add__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Node> */ arg0) {
  return /**@type {SimpleListItem}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {SimpleListItem} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {SimpleListItem}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListItem));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {SimpleListItem} */
 m_add__java_lang_String__org_patternfly_component_list_SimpleListItem(/** ?string */ arg0) {
  return /**@type {SimpleListItem}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {SimpleListItem} */
 m_add__elemental2_dom_Node__org_patternfly_component_list_SimpleListItem(/** Node */ arg0) {
  return /**@type {SimpleListItem}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {SimpleListItem} */
 m_add__java_util_function_Supplier__org_patternfly_component_list_SimpleListItem(/** Supplier<Node> */ arg0) {
  return /**@type {SimpleListItem}*/ ($Casts.$to(ElementContainerDelegate.m_add__$default__org_jboss_elemento_ElementContainerDelegate__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {SimpleListItem} */
 m_text__java_lang_String__org_patternfly_component_list_SimpleListItem(/** ?string */ arg0) {
  return /**@type {SimpleListItem}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), SimpleListItem));
 }
 /** @nodts */
 static $clinit() {
  SimpleListItem.$clinit = () =>{};
  SimpleListItem.$loadModules();
  SimpleListSubComponent.$clinit();
  ComponentContext.$clinit();
  ElementContainerDelegate.$clinit();
  ElementTextDelegate.$clinit();
  SimpleListItem.f_logger__org_patternfly_component_list_SimpleListItem_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(SimpleListItem).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SimpleListItem;
 }
 
 /** @nodts */
 static $loadModules() {
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  HTMLAnchorElement_$Overlay = goog.module.get('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ButtonType = goog.module.get('org.jboss.elemento.ButtonType$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  SimpleList = goog.module.get('org.patternfly.component.list.SimpleList$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
SimpleListItem.f_SUB_COMPONENT_ID__org_patternfly_component_list_SimpleListItem = 'sli';
/**@const {string} @nodts*/
SimpleListItem.f_SUB_COMPONENT_NAME__org_patternfly_component_list_SimpleListItem = 'SimpleListItem';
/**@type {Logger} @nodts*/
SimpleListItem.f_logger__org_patternfly_component_list_SimpleListItem_;
ComponentContext.$markImplementor(SimpleListItem);
ElementContainerDelegate.$markImplementor(SimpleListItem);
ElementTextDelegate.$markImplementor(SimpleListItem);
HasIdentifier.$markImplementor(SimpleListItem);
$Util.$setClassMetadata(SimpleListItem, 'org.patternfly.component.list.SimpleListItem');

exports = SimpleListItem;

//# sourceMappingURL=SimpleListItem.js.map
