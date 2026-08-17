goog.module('org.patternfly.showcase.markdown.MarkdownManifest$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Response_$Overlay = goog.forwardDeclare('elemental2.dom.Response.$Overlay$impl');
let Promise_$Overlay = goog.forwardDeclare('elemental2.promise.Promise.$Overlay$impl');
let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Exceptions = goog.forwardDeclare('javaemul.internal.Exceptions$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let LoadData = goog.forwardDeclare('org.jboss.elemento.router.LoadData$impl');
let Page = goog.forwardDeclare('org.jboss.elemento.router.Page$impl');
let Parameter = goog.forwardDeclare('org.jboss.elemento.router.Parameter$impl');
let Place = goog.forwardDeclare('org.jboss.elemento.router.Place$impl');
let PlaceManager = goog.forwardDeclare('org.jboss.elemento.router.PlaceManager$impl');
let Places = goog.forwardDeclare('org.jboss.elemento.router.Places$impl');
let ExpandableNavigationGroup = goog.forwardDeclare('org.patternfly.component.navigation.ExpandableNavigationGroup$impl');
let NavigationItem = goog.forwardDeclare('org.patternfly.component.navigation.NavigationItem$impl');
let Markdown = goog.forwardDeclare('org.patternfly.showcase.markdown.Markdown$impl');
let MarkdownPage = goog.forwardDeclare('org.patternfly.showcase.markdown.MarkdownPage$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 */
class MarkdownManifest extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Array<Object>} @nodts*/
  this.f_items__org_patternfly_showcase_markdown_MarkdownManifest_;
 }
 /** @nodts @return {Promise<MarkdownManifest>} */
 static m_load__elemental2_promise_Promise() {
  MarkdownManifest.$clinit();
  return /**@type {!Promise<!MarkdownManifest>}*/ ((/**@type {!Promise<!*>}*/ (DomGlobal_$Overlay.m_fetch__java_lang_String__elemental2_promise_Promise('/markdown/manifest.json').then(/**  @return {IThenable<*>}*/ ((/** Response */ arg0) =>{
   let arg0_1 = /**@type {Response}*/ ($Casts.$to(arg0, Response_$Overlay));
   return arg0_1.json();
  })))).then(/**  @return {IThenable<MarkdownManifest>}*/ ((/** * */ json) =>{
   let items = /**@type {Array<Object>}*/ ($Arrays.$castToNative(Js.m_cast__java_lang_Object__java_lang_Object(json)));
   return /**@type {!Promise<!MarkdownManifest>}*/ (Promise_$Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(MarkdownManifest.$create__arrayOf_org_patternfly_showcase_markdown_ManifestItem(items)));
  })));
 }
 /** @nodts @return {!MarkdownManifest} */
 static $create__arrayOf_org_patternfly_showcase_markdown_ManifestItem(/** Array<Object> */ items) {
  let $instance = new MarkdownManifest();
  $instance.$ctor__org_patternfly_showcase_markdown_MarkdownManifest__arrayOf_org_patternfly_showcase_markdown_ManifestItem__void(items);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_markdown_MarkdownManifest__arrayOf_org_patternfly_showcase_markdown_ManifestItem__void(/** Array<Object> */ items) {
  this.$ctor__java_lang_Object__void();
  this.f_items__org_patternfly_showcase_markdown_MarkdownManifest_ = items;
 }
 /** @nodts @return {Places} */
 m_places__org_jboss_elemento_router_Places() {
  let allPlaces = Places.m_places__org_jboss_elemento_router_Places();
  this.m_addPlaces__org_jboss_elemento_router_Places__arrayOf_org_patternfly_showcase_markdown_ManifestItem__void_$p_org_patternfly_showcase_markdown_MarkdownManifest(allPlaces, this.f_items__org_patternfly_showcase_markdown_MarkdownManifest_);
  return allPlaces;
 }
 /** @nodts */
 m_addPlaces__org_jboss_elemento_router_Places__arrayOf_org_patternfly_showcase_markdown_ManifestItem__void_$p_org_patternfly_showcase_markdown_MarkdownManifest(/** Places */ places, /** Array<Object> */ items) {
  for (let $array = items, $index = 0; $index < $array.length; $index++) {
   let item = $array[$index];
   {
    if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean('page', item.type)) {
     let markdownId = item.id;
     places.m_add__org_jboss_elemento_router_Place__java_util_function_Supplier__org_jboss_elemento_router_Places(Place.m_place__java_lang_String__org_jboss_elemento_router_Place(item.route).m_title__java_lang_String__org_jboss_elemento_router_Place(item.title).m_loader__org_jboss_elemento_router_LoadData__org_jboss_elemento_router_Place(MarkdownManifest.m_markdownLoader__java_lang_String__org_jboss_elemento_router_LoadData(markdownId)), Supplier.$adapt(/**  @return {Page}*/ (() =>{
      return MarkdownPage.$create__();
     })));
    } else if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean('group', item.type)) {
     if (!$Equality.$same(item.children, null)) {
      this.m_addPlaces__org_jboss_elemento_router_Places__arrayOf_org_patternfly_showcase_markdown_ManifestItem__void_$p_org_patternfly_showcase_markdown_MarkdownManifest(places, item.children);
     }
    }
   }
  }
 }
 /** @nodts @return {LoadData<Object>} */
 static m_markdownLoader__java_lang_String__org_jboss_elemento_router_LoadData(/** ?string */ markdownId) {
  return LoadData.$adapt(/**  @return {Promise<Object>}*/ ((/** Place */ place, /** Parameter */ parameter) =>{
   return Markdown.m_load__java_lang_String__elemental2_promise_Promise(markdownId);
  }));
 }
 /** @nodts @return {NavigationItem} */
 m_navItem__org_jboss_elemento_router_PlaceManager__java_lang_String__org_patternfly_component_navigation_NavigationItem(/** PlaceManager */ pm, /** ?string */ route) {
  let place = pm.m_place__java_lang_String__org_jboss_elemento_router_Place(route);
  return NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem(place.m_path__java_lang_String(), place.m_title__java_lang_String(), place.m_path__java_lang_String());
 }
 /** @nodts @return {ExpandableNavigationGroup} */
 m_navGroup__org_jboss_elemento_router_PlaceManager__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup(/** PlaceManager */ pm, /** ?string */ groupId) {
  let group = this.m_findGroup__java_lang_String__org_patternfly_showcase_markdown_ManifestItem_$p_org_patternfly_showcase_markdown_MarkdownManifest(groupId);
  if ($Equality.$same(group, null)) {
   throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(IllegalArgumentException.$create__java_lang_String('No manifest group found for id: ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(groupId)));
  }
  let navGroup = ExpandableNavigationGroup.m_expandableNavigationGroup__java_lang_String__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup(group.id, group.title);
  if (!$Equality.$same(group.children, null)) {
   for (let $array = group.children, $index = 0; $index < $array.length; $index++) {
    let child = $array[$index];
    {
     if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean('page', child.type)) {
      let place = pm.m_place__java_lang_String__org_jboss_elemento_router_Place(child.route);
      navGroup.m_addItem__org_patternfly_component_HasIdentifier__org_patternfly_component_HasItems(NavigationItem.m_navigationItem__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_navigation_NavigationItem(place.m_path__java_lang_String(), place.m_title__java_lang_String(), place.m_path__java_lang_String()));
     } else if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean('group', child.type)) {
      navGroup.m_addGroup__org_patternfly_component_navigation_ExpandableNavigationGroup__org_patternfly_component_navigation_ExpandableNavigationGroup(this.m_navGroup__org_jboss_elemento_router_PlaceManager__java_lang_String__org_patternfly_component_navigation_ExpandableNavigationGroup(pm, child.id));
     }
    }
   }
  }
  return navGroup;
 }
 /** @nodts @return {Object} */
 m_findGroup__java_lang_String__org_patternfly_showcase_markdown_ManifestItem_$p_org_patternfly_showcase_markdown_MarkdownManifest(/** ?string */ groupId) {
  return this.m_findGroup__arrayOf_org_patternfly_showcase_markdown_ManifestItem__java_lang_String__org_patternfly_showcase_markdown_ManifestItem_$p_org_patternfly_showcase_markdown_MarkdownManifest(this.f_items__org_patternfly_showcase_markdown_MarkdownManifest_, groupId);
 }
 /** @nodts @return {Object} */
 m_findGroup__arrayOf_org_patternfly_showcase_markdown_ManifestItem__java_lang_String__org_patternfly_showcase_markdown_ManifestItem_$p_org_patternfly_showcase_markdown_MarkdownManifest(/** Array<Object> */ items, /** ?string */ groupId) {
  for (let $array = items, $index = 0; $index < $array.length; $index++) {
   let item = $array[$index];
   {
    if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean('group', item.type) && j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(groupId, item.id)) {
     return item;
    }
    if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean('group', item.type) && !$Equality.$same(item.children, null)) {
     let found = this.m_findGroup__arrayOf_org_patternfly_showcase_markdown_ManifestItem__java_lang_String__org_patternfly_showcase_markdown_ManifestItem_$p_org_patternfly_showcase_markdown_MarkdownManifest(item.children, groupId);
     if (!$Equality.$same(found, null)) {
      return found;
     }
    }
   }
  }
  return null;
 }
 /** @nodts */
 static $clinit() {
  MarkdownManifest.$clinit = () =>{};
  MarkdownManifest.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MarkdownManifest;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Response_$Overlay = goog.module.get('elemental2.dom.Response.$Overlay$impl');
  Promise_$Overlay = goog.module.get('elemental2.promise.Promise.$Overlay$impl');
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  Exceptions = goog.module.get('javaemul.internal.Exceptions$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  LoadData = goog.module.get('org.jboss.elemento.router.LoadData$impl');
  Place = goog.module.get('org.jboss.elemento.router.Place$impl');
  Places = goog.module.get('org.jboss.elemento.router.Places$impl');
  ExpandableNavigationGroup = goog.module.get('org.patternfly.component.navigation.ExpandableNavigationGroup$impl');
  NavigationItem = goog.module.get('org.patternfly.component.navigation.NavigationItem$impl');
  Markdown = goog.module.get('org.patternfly.showcase.markdown.Markdown$impl');
  MarkdownPage = goog.module.get('org.patternfly.showcase.markdown.MarkdownPage$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(MarkdownManifest, 'org.patternfly.showcase.markdown.MarkdownManifest');

exports = MarkdownManifest;

//# sourceMappingURL=MarkdownManifest.js.map
