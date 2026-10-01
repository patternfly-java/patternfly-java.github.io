goog.module('org.patternfly.extension.finder.FinderItem$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementTextDelegate = goog.require('org.jboss.elemento.ElementTextDelegate$impl');
const ComponentIcon = goog.require('org.patternfly.component.ComponentIcon$impl');
const HasIdentifier = goog.require('org.patternfly.component.HasIdentifier$impl');
const ComponentContext = goog.require('org.patternfly.core.ComponentContext$impl');
const FinderSubComponent = goog.require('org.patternfly.extension.finder.FinderSubComponent$impl');

let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Role = goog.forwardDeclare('org.jboss.elemento.Role$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let Severity = goog.forwardDeclare('org.patternfly.component.Severity$impl');
let EmptyState = goog.forwardDeclare('org.patternfly.component.emptystate.EmptyState$impl');
let EmptyStateBody = goog.forwardDeclare('org.patternfly.component.emptystate.EmptyStateBody$impl');
let Spinner = goog.forwardDeclare('org.patternfly.component.spinner.Spinner$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let Dataset = goog.forwardDeclare('org.patternfly.core.Dataset$impl');
let Finder = goog.forwardDeclare('org.patternfly.extension.finder.Finder$impl');
let FinderClasses = goog.forwardDeclare('org.patternfly.extension.finder.FinderClasses$impl');
let FinderColumn = goog.forwardDeclare('org.patternfly.extension.finder.FinderColumn$impl');
let FinderItemActions = goog.forwardDeclare('org.patternfly.extension.finder.FinderItemActions$impl');
let FinderItemDescription = goog.forwardDeclare('org.patternfly.extension.finder.FinderItemDescription$impl');
let PreviewHandler = goog.forwardDeclare('org.patternfly.extension.finder.PreviewHandler$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let rhMicrons = goog.forwardDeclare('org.patternfly.icon.IconSets.rhMicrons$impl');
let PredefinedIcon = goog.forwardDeclare('org.patternfly.icon.PredefinedIcon$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Modifiers = goog.forwardDeclare('org.patternfly.style.Modifiers$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {FinderSubComponent<HTMLElement, FinderItem>}
 * @implements {ComponentContext<HTMLElement, FinderItem>}
 * @implements {ComponentIcon<HTMLElement, FinderItem>}
 * @implements {ElementTextDelegate<HTMLElement, FinderItem>}
 * @implements {HasIdentifier<HTMLElement, FinderItem>}
 */
class FinderItem extends FinderSubComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {FinderColumn} @nodts*/
  this.f_column__org_patternfly_extension_finder_FinderItem;
  /**@type {?string} @nodts*/
  this.f_identifier__org_patternfly_extension_finder_FinderItem_;
  /**@type {Map<?string, *>} @nodts*/
  this.f_data__org_patternfly_extension_finder_FinderItem_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_clickHandler__org_patternfly_extension_finder_FinderItem_;
  /**@type {HTMLContainerBuilder<HTMLDivElement>} @nodts*/
  this.f_rc__org_patternfly_extension_finder_FinderItem_;
  /**@type {HTMLContainerBuilder<HTMLElement>} @nodts*/
  this.f_cc__org_patternfly_extension_finder_FinderItem_;
  /**@type {HTMLContainerBuilder<HTMLElement>} @nodts*/
  this.f_tc__org_patternfly_extension_finder_FinderItem_;
  /**@type {HTMLElement} @nodts*/
  this.f_ic__org_patternfly_extension_finder_FinderItem_;
  /**@type {PreviewHandler} @nodts*/
  this.f_previewHandler__org_patternfly_extension_finder_FinderItem_;
  /**@type {Supplier<FinderColumn>} @nodts*/
  this.f_nextColumn__org_patternfly_extension_finder_FinderItem_;
 }
 /** @nodts @return {FinderItem} */
 static m_finderItem__java_lang_String__org_patternfly_extension_finder_FinderItem(/** ?string */ identifier) {
  FinderItem.$clinit();
  return FinderItem.$create__java_lang_String(identifier);
 }
 /** @nodts @return {FinderItem} */
 static m_finderItem__java_lang_String__java_lang_String__org_patternfly_extension_finder_FinderItem(/** ?string */ identifier, /** ?string */ text) {
  FinderItem.$clinit();
  return /**@type {FinderItem}*/ ($Casts.$to(FinderItem.$create__java_lang_String(identifier).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(text), FinderItem));
 }
 /** @nodts @return {FinderItem} */
 static m_finderItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_extension_finder_FinderItem(/** ?string */ identifier, /** ?string */ text, /** ?string */ description) {
  FinderItem.$clinit();
  return (/**@type {FinderItem}*/ ($Casts.$to(FinderItem.$create__java_lang_String(identifier).m_text__java_lang_String__org_jboss_elemento_TypedBuilder(text), FinderItem))).m_addDescription__java_lang_String__org_patternfly_extension_finder_FinderItem(description);
 }
 /** @nodts @return {FinderItem} */
 static m_emptyItem__org_patternfly_component_emptystate_EmptyState__org_patternfly_extension_finder_FinderItem(/** EmptyState */ emptyState) {
  FinderItem.$clinit();
  let error = FinderItem.m_statusItem__java_lang_String__org_patternfly_extension_finder_FinderItem(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_TreeView__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType([FinderItem.f_SUB_COMPONENT_ID__org_patternfly_extension_finder_FinderItem, 'empty'], j_l_String))));
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(error.m_element__elemental2_dom_HTMLElement());
  error.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(emptyState);
  return error;
 }
 /** @nodts @return {FinderItem} */
 static m_loadingItem__org_patternfly_extension_finder_FinderItem() {
  FinderItem.$clinit();
  let loading = FinderItem.m_statusItem__java_lang_String__org_patternfly_extension_finder_FinderItem(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_Finder__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType([FinderItem.f_SUB_COMPONENT_ID__org_patternfly_extension_finder_FinderItem, 'loading'], j_l_String))));
  Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLDivElement}*/ ($Casts.$to(loading.f_rc__org_patternfly_extension_finder_FinderItem_.m_element__elemental2_dom_HTMLElement(), $Overlay)), Spinner.m_spinner__org_patternfly_style_Size__java_lang_String__org_patternfly_component_spinner_Spinner(Size.f_lg__org_patternfly_style_Size, 'sm').m_element__org_jboss_elemento_svg_SVGElement());
  return /**@type {FinderItem}*/ ($Casts.$to(loading.m_text__java_lang_String__org_jboss_elemento_TypedBuilder('Loading...'), FinderItem));
 }
 /** @nodts @return {FinderItem} */
 static m_errorItem__org_patternfly_extension_finder_FinderItem() {
  FinderItem.$clinit();
  let error = FinderItem.m_statusItem__java_lang_String__org_patternfly_extension_finder_FinderItem(Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(ComponentType.f_TreeView__org_patternfly_component_ComponentType.f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$stampType([FinderItem.f_SUB_COMPONENT_ID__org_patternfly_extension_finder_FinderItem, 'error'], j_l_String))));
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(error.m_element__elemental2_dom_HTMLElement());
  error.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder((/**@type {EmptyState}*/ ($Casts.$to(EmptyState.m_emptyState__org_patternfly_component_emptystate_EmptyState().m_size__org_patternfly_style_Size__org_patternfly_component_emptystate_EmptyState(Size.f_xs__org_patternfly_style_Size).m_status__org_patternfly_component_Severity__org_patternfly_component_emptystate_EmptyState(Severity.f_danger__org_patternfly_component_Severity).m_text__java_lang_String__org_jboss_elemento_TypedBuilder('Error'), EmptyState))).m_addBody__org_patternfly_component_emptystate_EmptyStateBody__org_patternfly_component_emptystate_EmptyState(/**@type {EmptyStateBody}*/ ($Casts.$to(EmptyStateBody.m_emptyStateBody__org_patternfly_component_emptystate_EmptyStateBody().m_text__java_lang_String__org_jboss_elemento_TypedBuilder('An error occurred while loading the data.'), EmptyStateBody))));
  return error;
 }
 /** @nodts @return {FinderItem} */
 static m_statusItem__java_lang_String__org_patternfly_extension_finder_FinderItem(/** ?string */ identifier) {
  let item = /**@type {FinderItem}*/ ($Casts.$to(FinderItem.$create__java_lang_String(identifier).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_status__org_patternfly_style_Classes)], j_l_String))), FinderItem));
  item.f_clickHandler__org_patternfly_extension_finder_FinderItem_.m_removeHandler__void();
  item.m_element__elemental2_dom_HTMLElement().removeAttribute(Attributes.f_role__org_patternfly_core_Attributes);
  item.m_element__elemental2_dom_HTMLElement().removeAttribute(Aria.f_selected__org_patternfly_core_Aria);
  item.m_element__elemental2_dom_HTMLElement().removeAttribute(Attributes.f_tabindex__org_patternfly_core_Attributes);
  return item;
 }
 /** @nodts @return {!FinderItem} */
 static $create__java_lang_String(/** ?string */ identifier) {
  FinderItem.$clinit();
  let $instance = new FinderItem();
  $instance.$ctor__org_patternfly_extension_finder_FinderItem__java_lang_String__void(identifier);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_extension_finder_FinderItem__java_lang_String__void(/** ?string */ identifier) {
  this.$ctor__org_patternfly_extension_finder_FinderSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(FinderItem.f_SUB_COMPONENT_ID__org_patternfly_extension_finder_FinderItem, FinderItem.f_SUB_COMPONENT_NAME__org_patternfly_extension_finder_FinderItem, /**@type {HTMLLIElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(FinderClasses.f_finder__org_patternfly_extension_finder_FinderClasses, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_apply__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((/** HTMLLIElement */ li) =>{
   let li_1 = /**@type {HTMLLIElement}*/ ($Casts.$to(li, HTMLLIElement_$Overlay));
   li_1.tabIndex = 0;
  })), HTMLContainerBuilder))).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_selected__org_patternfly_core_Aria, false), HTMLContainerBuilder))).m_data__java_lang_String__java_lang_String__org_jboss_elemento_TypedBuilder(Dataset.f_identifier__org_patternfly_core_Dataset, identifier), HTMLContainerBuilder))).m_role__org_jboss_elemento_Role__org_jboss_elemento_TypedBuilder(Role.f_treeitem__org_jboss_elemento_Role), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLLIElement_$Overlay)));
  this.f_identifier__org_patternfly_extension_finder_FinderItem_ = identifier;
  this.f_data__org_patternfly_extension_finder_FinderItem_ = (/**@type {!HashMap<?string, *>}*/ (HashMap.$create__()));
  this.f_clickHandler__org_patternfly_extension_finder_FinderItem_ = EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_gwtproject_event_shared_HandlerRegistration(this.m_element__elemental2_dom_HTMLElement(), EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ e) =>{
   let e_1 = /**@type {MouseEvent}*/ ($Casts.$to(e, MouseEvent_$Overlay));
   if (!$Equality.$same(this.f_column__org_patternfly_extension_finder_FinderItem, null) && !$Equality.$same(this.f_column__org_patternfly_extension_finder_FinderItem.f_finder__org_patternfly_extension_finder_FinderColumn, null)) {
    this.m_handleClick__org_patternfly_extension_finder_Finder__org_patternfly_extension_finder_FinderColumn__org_patternfly_extension_finder_FinderItem__void_$pp_org_patternfly_extension_finder(this.f_column__org_patternfly_extension_finder_FinderItem.f_finder__org_patternfly_extension_finder_FinderColumn, this.f_column__org_patternfly_extension_finder_FinderItem, this);
   }
  });
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_rc__org_patternfly_extension_finder_FinderItem_ = (/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(FinderClasses.f_finder__org_patternfly_extension_finder_FinderClasses, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_row__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_cc__org_patternfly_extension_finder_FinderItem_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(FinderClasses.f_finder__org_patternfly_extension_finder_FinderClasses, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_content__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_tc__org_patternfly_extension_finder_FinderItem_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(FinderClasses.f_finder__org_patternfly_extension_finder_FinderClasses, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_text__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)))), HTMLContainerBuilder)))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(FinderClasses.f_finder__org_patternfly_extension_finder_FinderClasses, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, FinderClasses.f_folder__org_patternfly_extension_finder_FinderClasses, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(fas.m_angleRight__org_patternfly_icon_PredefinedIcon()), HTMLContainerBuilder))), HTMLContainerBuilder))));
 }
 /** @override @nodts @return {Element} */
 m_textDelegate__elemental2_dom_Element() {
  return this.f_tc__org_patternfly_extension_finder_FinderItem_.m_element__elemental2_dom_HTMLElement();
 }
 /** @nodts @return {FinderItem} */
 m_addDescription__java_lang_String__org_patternfly_extension_finder_FinderItem(/** ?string */ description) {
  return this.m_add__org_patternfly_extension_finder_FinderItemDescription__org_patternfly_extension_finder_FinderItem(/**@type {FinderItemDescription}*/ ($Casts.$to(FinderItemDescription.m_finderItemDescription__org_patternfly_extension_finder_FinderItemDescription().m_text__java_lang_String__org_jboss_elemento_TypedBuilder(description), FinderItemDescription)));
 }
 /** @nodts @return {FinderItem} */
 m_addDescription__org_patternfly_extension_finder_FinderItemDescription__org_patternfly_extension_finder_FinderItem(/** FinderItemDescription */ description) {
  return this.m_add__org_patternfly_extension_finder_FinderItemDescription__org_patternfly_extension_finder_FinderItem(description);
 }
 /** @nodts @return {FinderItem} */
 m_add__org_patternfly_extension_finder_FinderItemDescription__org_patternfly_extension_finder_FinderItem(/** FinderItemDescription */ description) {
  this.f_cc__org_patternfly_extension_finder_FinderItem_.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(description.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {FinderItem} */
 m_addActions__org_patternfly_extension_finder_FinderItemActions__org_patternfly_extension_finder_FinderItem(/** FinderItemActions */ actions) {
  return this.m_add__org_patternfly_extension_finder_FinderItemActions__org_patternfly_extension_finder_FinderItem(actions);
 }
 /** @nodts @return {FinderItem} */
 m_add__org_patternfly_extension_finder_FinderItemActions__org_patternfly_extension_finder_FinderItem(/** FinderItemActions */ actions) {
  Elements.m_insertAfter__elemental2_dom_Element__elemental2_dom_Element__void(actions.m_element__elemental2_dom_HTMLElement(), this.f_cc__org_patternfly_extension_finder_FinderItem_.m_element__elemental2_dom_HTMLElement());
  return this;
 }
 /** @nodts @return {FinderItem} */
 m_folder__org_patternfly_extension_finder_FinderItem() {
  return this.m_folder__boolean__org_patternfly_extension_finder_FinderItem(true);
 }
 /** @nodts @return {FinderItem} */
 m_folder__boolean__org_patternfly_extension_finder_FinderItem(/** boolean */ folder) {
  this.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_expanded__org_patternfly_core_Aria, false);
  return /**@type {FinderItem}*/ ($Casts.$to(Modifiers.m_toggleModifier__org_jboss_elemento_TypedBuilder__elemental2_dom_Element__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(this, this.m_element__elemental2_dom_HTMLElement(), FinderClasses.f_folder__org_patternfly_extension_finder_FinderClasses, folder), FinderItem));
 }
 /** @nodts @return {FinderItem} */
 m_icon__elemental2_dom_Element__org_patternfly_extension_finder_FinderItem(/** Element */ icon) {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_ic__org_patternfly_extension_finder_FinderItem_);
  this.m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_extension_finder_FinderItem().appendChild(icon);
  return this;
 }
 /** @nodts @return {FinderItem} */
 m_nextColumn__java_util_function_Supplier__org_patternfly_extension_finder_FinderItem(/** Supplier<FinderColumn> */ column) {
  this.f_nextColumn__org_patternfly_extension_finder_FinderItem_ = column;
  return this.m_folder__boolean__org_patternfly_extension_finder_FinderItem(true);
 }
 /** @nodts @return {FinderItem} */
 m_removeIcon__org_patternfly_extension_finder_FinderItem() {
  Elements.m_failSafeRemoveFromParent__elemental2_dom_Element__boolean(this.f_ic__org_patternfly_extension_finder_FinderItem_);
  return this;
 }
 /** @nodts @template T @return {FinderItem} */
 m_store__java_lang_String__java_lang_Object__org_patternfly_extension_finder_FinderItem(/** ?string */ key, /** T */ value) {
  this.f_data__org_patternfly_extension_finder_FinderItem_.put(key, value);
  return this;
 }
 /** @nodts @return {FinderItem} */
 m_that__org_patternfly_extension_finder_FinderItem() {
  return this;
 }
 /** @nodts @return {FinderItem} */
 m_onPreview__org_patternfly_extension_finder_PreviewHandler__org_patternfly_extension_finder_FinderItem(/** PreviewHandler */ previewHandler) {
  this.f_previewHandler__org_patternfly_extension_finder_FinderItem_ = previewHandler;
  return this;
 }
 /** @nodts @return {FinderColumn} */
 m_column__org_patternfly_extension_finder_FinderColumn() {
  return this.f_column__org_patternfly_extension_finder_FinderItem;
 }
 /** @nodts @return {Finder} */
 m_finder__org_patternfly_extension_finder_Finder() {
  return this.f_column__org_patternfly_extension_finder_FinderItem.m_finder__org_patternfly_extension_finder_Finder();
 }
 /** @override @nodts @return {?string} */
 m_identifier__java_lang_String() {
  return this.f_identifier__org_patternfly_extension_finder_FinderItem_;
 }
 /** @override @nodts @return {boolean} */
 m_has__java_lang_String__boolean(/** ?string */ key) {
  return this.f_data__org_patternfly_extension_finder_FinderItem_.containsKey(key);
 }
 /** @override @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {
  if (this.f_data__org_patternfly_extension_finder_FinderItem_.containsKey(key)) {
   return /**@type {?T}*/ (this.f_data__org_patternfly_extension_finder_FinderItem_.get(key));
  }
  return null;
 }
 /** @nodts */
 m_handleClick__org_patternfly_extension_finder_Finder__org_patternfly_extension_finder_FinderColumn__org_patternfly_extension_finder_FinderItem__void_$pp_org_patternfly_extension_finder(/** Finder */ finder, /** FinderColumn */ column, /** FinderItem */ item) {
  if (this.m_isSelected__boolean_$pp_org_patternfly_extension_finder()) {
   finder.m_markActive__org_patternfly_extension_finder_FinderColumn__void_$pp_org_patternfly_extension_finder(column);
   this.m_previewItem__org_patternfly_extension_finder_Finder__org_patternfly_extension_finder_FinderColumn__org_patternfly_extension_finder_FinderItem__void_$pp_org_patternfly_extension_finder(finder, column, item);
   return;
  }
  finder.m_select__org_patternfly_extension_finder_FinderColumn__void_$pp_org_patternfly_extension_finder(column);
  column.m_select__org_patternfly_extension_finder_FinderItem__void(item);
  let nextColumn = this.m_supplyNextColumn__org_patternfly_extension_finder_FinderColumn_$pp_org_patternfly_extension_finder();
  if (!$Equality.$same(nextColumn, null)) {
   finder.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(nextColumn);
  }
  this.m_previewItem__org_patternfly_extension_finder_Finder__org_patternfly_extension_finder_FinderColumn__org_patternfly_extension_finder_FinderItem__void_$pp_org_patternfly_extension_finder(finder, column, item);
 }
 /** @nodts */
 m_markSelected__boolean__void_$pp_org_patternfly_extension_finder(/** boolean */ selected) {
  this.m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_selected__org_patternfly_core_Aria, selected);
  this.m_classList__org_jboss_elemento_ClassList().m_toggle__java_lang_String__boolean__void(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_selected__org_patternfly_style_Classes), selected);
 }
 /** @nodts @return {boolean} */
 m_isSelected__boolean_$pp_org_patternfly_extension_finder() {
  return Boolean.m_parseBoolean__java_lang_String__boolean(this.m_element__elemental2_dom_HTMLElement().getAttribute(Aria.f_selected__org_patternfly_core_Aria)) && this.m_classList__org_jboss_elemento_ClassList().m_contains__java_lang_String__boolean(Classes.m_modifier__java_lang_String__java_lang_String(Classes.f_selected__org_patternfly_style_Classes));
 }
 /** @nodts @return {boolean} */
 m_hasNext__boolean_$pp_org_patternfly_extension_finder() {
  return !$Equality.$same(this.f_nextColumn__org_patternfly_extension_finder_FinderItem_, null);
 }
 /** @nodts @return {FinderColumn} */
 m_supplyNextColumn__org_patternfly_extension_finder_FinderColumn_$pp_org_patternfly_extension_finder() {
  return !$Equality.$same(this.f_nextColumn__org_patternfly_extension_finder_FinderItem_, null) ? /**@type {FinderColumn}*/ ($Casts.$to(this.f_nextColumn__org_patternfly_extension_finder_FinderItem_.m_get__java_lang_Object(), FinderColumn)) : null;
 }
 /** @nodts */
 m_makePinnable__void_$pp_org_patternfly_extension_finder() {
  Elements.m_insertAfter__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLButtonElement}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to((/**@type {HTMLContainerBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(FinderClasses.f_finder__org_patternfly_extension_finder_FinderClasses, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, FinderClasses.f_pin__org_patternfly_extension_finder_FinderClasses], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (/** MouseEvent */ arg0) =>{
   let arg0_1 = /**@type {MouseEvent}*/ ($Casts.$to(arg0, MouseEvent_$Overlay));
   this.m_togglePin__elemental2_dom_Event__void_$pp_org_patternfly_extension_finder(arg0_1);
  }), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {PredefinedIcon}*/ ($Casts.$to(fas.m_thumbtack__org_patternfly_icon_PredefinedIcon().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(FinderClasses.f_finder__org_patternfly_extension_finder_FinderClasses, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, FinderClasses.f_pin__org_patternfly_extension_finder_FinderClasses, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))) + '--default'], j_l_String))), PredefinedIcon))), HTMLContainerBuilder))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {PredefinedIcon}*/ ($Casts.$to(rhMicrons.m_close__org_patternfly_icon_PredefinedIcon().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([j_l_String.m_valueOf__java_lang_Object__java_lang_String(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(FinderClasses.f_finder__org_patternfly_extension_finder_FinderClasses, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, FinderClasses.f_pin__org_patternfly_extension_finder_FinderClasses, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))) + '--pinned'], j_l_String))), PredefinedIcon))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement(), HTMLButtonElement_$Overlay)), this.f_cc__org_patternfly_extension_finder_FinderItem_.m_element__elemental2_dom_HTMLElement());
 }
 /** @nodts */
 m_togglePin__elemental2_dom_Event__void_$pp_org_patternfly_extension_finder(/** Event */ event) {
  event.stopPropagation();
 }
 /** @nodts */
 m_previewItem__org_patternfly_extension_finder_Finder__org_patternfly_extension_finder_FinderColumn__org_patternfly_extension_finder_FinderItem__void_$pp_org_patternfly_extension_finder(/** Finder */ finder, /** FinderColumn */ column, /** FinderItem */ item) {
  if (!$Equality.$same(finder.f_preview__org_patternfly_extension_finder_Finder, null)) {
   Elements.m_removeChildrenFrom__org_jboss_elemento_IsElement__void(finder.f_preview__org_patternfly_extension_finder_Finder);
   if (!$Equality.$same(this.f_previewHandler__org_patternfly_extension_finder_FinderItem_, null)) {
    this.f_previewHandler__org_patternfly_extension_finder_FinderItem_.m_onPreview__org_patternfly_extension_finder_FinderItem__org_patternfly_extension_finder_FinderPreview__void(item, finder.f_preview__org_patternfly_extension_finder_Finder);
   } else if (!$Equality.$same(column.f_previewHandler__org_patternfly_extension_finder_FinderColumn, null)) {
    column.f_previewHandler__org_patternfly_extension_finder_FinderColumn.m_onPreview__org_patternfly_extension_finder_FinderItem__org_patternfly_extension_finder_FinderPreview__void(item, finder.f_preview__org_patternfly_extension_finder_Finder);
   }
  }
 }
 /** @nodts @return {HTMLElement} */
 m_failSafeIconContainer__elemental2_dom_HTMLElement_$p_org_patternfly_extension_finder_FinderItem() {
  if ($Equality.$same(this.f_ic__org_patternfly_extension_finder_FinderItem_, null)) {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.f_rc__org_patternfly_extension_finder_FinderItem_.m_element__elemental2_dom_HTMLElement(), $Overlay)), this.f_ic__org_patternfly_extension_finder_FinderItem_ = (/**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(FinderClasses.f_finder__org_patternfly_extension_finder_FinderClasses, /**@type {!Array<?string>}*/ ($Arrays.$stampType([Classes.f_item__org_patternfly_style_Classes, Classes.f_icon__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder))).m_element__elemental2_dom_HTMLElement());
  }
  return this.f_ic__org_patternfly_extension_finder_FinderItem_;
 }
 //Bridge method.
 /** @final @override @nodts @return {FinderItem} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_extension_finder_FinderItem();
 }
 //Bridge method.
 /** @final @override @nodts @template T @return {FinderItem} */
 m_store__java_lang_String__java_lang_Object__org_jboss_elemento_TypedBuilder(/** ?string */ arg0, /** T */ arg1) {
  return this.m_store__java_lang_String__java_lang_Object__org_patternfly_extension_finder_FinderItem(arg0, arg1);
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
 /** @final @override @nodts @return {FinderItem} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(/** PredefinedIcon */ arg0) {
  return /**@type {FinderItem}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), FinderItem));
 }
 //Bridge method.
 /** @final @override @nodts @return {FinderItem} */
 m_icon__elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Element */ arg0) {
  return this.m_icon__elemental2_dom_Element__org_patternfly_extension_finder_FinderItem(arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {FinderItem} */
 m_removeIcon__org_jboss_elemento_TypedBuilder() {
  return this.m_removeIcon__org_patternfly_extension_finder_FinderItem();
 }
 //Bridge method.
 /** @final @override @nodts @return {FinderItem} */
 m_text__java_lang_String__org_jboss_elemento_TypedBuilder(/** ?string */ arg0) {
  return /**@type {FinderItem}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), FinderItem));
 }
 //Default method forwarding stub.
 /** @override @nodts @return {?string} */
 m_text__java_lang_String() {
  return ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String(this);
 }
 //Default method forwarding stub.
 /** @nodts @return {FinderItem} */
 m_icon__org_patternfly_icon_PredefinedIcon__org_patternfly_extension_finder_FinderItem(/** PredefinedIcon */ arg0) {
  return /**@type {FinderItem}*/ ($Casts.$to(ComponentIcon.m_icon__$default__org_patternfly_component_ComponentIcon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(this, arg0), FinderItem));
 }
 //Default method forwarding stub.
 /** @nodts @return {FinderItem} */
 m_text__java_lang_String__org_patternfly_extension_finder_FinderItem(/** ?string */ arg0) {
  return /**@type {FinderItem}*/ ($Casts.$to(ElementTextDelegate.m_text__$default__org_jboss_elemento_ElementTextDelegate__java_lang_String__org_jboss_elemento_TypedBuilder(this, arg0), FinderItem));
 }
 /** @nodts */
 static $clinit() {
  FinderItem.$clinit = () =>{};
  FinderItem.$loadModules();
  FinderSubComponent.$clinit();
  ComponentContext.$clinit();
  ComponentIcon.$clinit();
  ElementTextDelegate.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FinderItem;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Role = goog.module.get('org.jboss.elemento.Role$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  Severity = goog.module.get('org.patternfly.component.Severity$impl');
  EmptyState = goog.module.get('org.patternfly.component.emptystate.EmptyState$impl');
  EmptyStateBody = goog.module.get('org.patternfly.component.emptystate.EmptyStateBody$impl');
  Spinner = goog.module.get('org.patternfly.component.spinner.Spinner$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  Dataset = goog.module.get('org.patternfly.core.Dataset$impl');
  FinderClasses = goog.module.get('org.patternfly.extension.finder.FinderClasses$impl');
  FinderColumn = goog.module.get('org.patternfly.extension.finder.FinderColumn$impl');
  FinderItemDescription = goog.module.get('org.patternfly.extension.finder.FinderItemDescription$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  rhMicrons = goog.module.get('org.patternfly.icon.IconSets.rhMicrons$impl');
  PredefinedIcon = goog.module.get('org.patternfly.icon.PredefinedIcon$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Modifiers = goog.module.get('org.patternfly.style.Modifiers$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
FinderItem.f_SUB_COMPONENT_ID__org_patternfly_extension_finder_FinderItem = 'fi';
/**@const {string} @nodts*/
FinderItem.f_SUB_COMPONENT_NAME__org_patternfly_extension_finder_FinderItem = 'FinderItem';
ComponentContext.$markImplementor(FinderItem);
ComponentIcon.$markImplementor(FinderItem);
ElementTextDelegate.$markImplementor(FinderItem);
HasIdentifier.$markImplementor(FinderItem);
$Util.$setClassMetadata(FinderItem, 'org.patternfly.extension.finder.FinderItem');

exports = FinderItem;

//# sourceMappingURL=FinderItem.js.map
