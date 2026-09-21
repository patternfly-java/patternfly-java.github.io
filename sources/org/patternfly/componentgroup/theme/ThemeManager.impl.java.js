goog.module('org.patternfly.componentgroup.theme.ThemeManager$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let MediaQueryListEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MediaQueryListEvent.$Overlay$impl');
let WebStorageWindow_$Overlay = goog.forwardDeclare('elemental2.webstorage.WebStorageWindow.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Enum = goog.forwardDeclare('java.lang.Enum$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let LinkedHashSet = goog.forwardDeclare('java.util.LinkedHashSet$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let SystemValue = goog.forwardDeclare('org.patternfly.componentgroup.theme.SystemValue$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template E
 */
class ThemeManager extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_storageKey__org_patternfly_componentgroup_theme_ThemeManager_;
  /**@type {Set<?string>} @nodts*/
  this.f_managedClasses__org_patternfly_componentgroup_theme_ThemeManager_;
  /**@type {j_u_function_Function<E, ?string>} @nodts*/
  this.f_cssMapping__org_patternfly_componentgroup_theme_ThemeManager_;
  /**@type {MediaQueryList} @nodts*/
  this.f_mediaQuery__org_patternfly_componentgroup_theme_ThemeManager_;
  /**@type {E} @nodts*/
  this.f_mediaQueryValue__org_patternfly_componentgroup_theme_ThemeManager_;
  /**@type {j_u_function_Function<E, ?string>} @nodts*/
  this.f_save__org_patternfly_componentgroup_theme_ThemeManager_;
  /**@type {HandlerRegistration} @nodts*/
  this.f_handlerRegistration__org_patternfly_componentgroup_theme_ThemeManager_;
  /**@type {E} @nodts*/
  this.f_value__org_patternfly_componentgroup_theme_ThemeManager;
 }
 /** @nodts @template E @return {!ThemeManager<E>} */
 static $create__java_lang_String__java_util_function_Function__java_lang_String__java_lang_Enum__java_lang_Enum__java_util_function_Function__java_util_function_Function__arrayOf_java_lang_Enum(/** ?string */ storageKey, /** j_u_function_Function<E, ?string> */ cssMapping, /** ?string */ mediaQuery, /** E */ defaultValue, /** E */ mediaQueryValue, /** j_u_function_Function<?string, E> */ load, /** j_u_function_Function<E, ?string> */ save, /** Array<E> */ allValues) {
  ThemeManager.$clinit();
  let $instance = new ThemeManager();
  $instance.$ctor__org_patternfly_componentgroup_theme_ThemeManager__java_lang_String__java_util_function_Function__java_lang_String__java_lang_Enum__java_lang_Enum__java_util_function_Function__java_util_function_Function__arrayOf_java_lang_Enum__void(storageKey, cssMapping, mediaQuery, defaultValue, mediaQueryValue, load, save, allValues);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_componentgroup_theme_ThemeManager__java_lang_String__java_util_function_Function__java_lang_String__java_lang_Enum__java_lang_Enum__java_util_function_Function__java_util_function_Function__arrayOf_java_lang_Enum__void(/** ?string */ storageKey, /** j_u_function_Function<E, ?string> */ cssMapping, /** ?string */ mediaQuery, /** E */ defaultValue, /** E */ mediaQueryValue, /** j_u_function_Function<?string, E> */ load, /** j_u_function_Function<E, ?string> */ save, /** Array<E> */ allValues) {
  this.$ctor__java_lang_Object__void();
  this.f_storageKey__org_patternfly_componentgroup_theme_ThemeManager_ = storageKey;
  this.f_cssMapping__org_patternfly_componentgroup_theme_ThemeManager_ = cssMapping;
  this.f_mediaQueryValue__org_patternfly_componentgroup_theme_ThemeManager_ = mediaQueryValue;
  this.f_save__org_patternfly_componentgroup_theme_ThemeManager_ = save;
  this.f_managedClasses__org_patternfly_componentgroup_theme_ThemeManager_ = (/**@type {!LinkedHashSet<?string>}*/ (LinkedHashSet.$create__()));
  for (let $array = allValues, $index = 0; $index < $array.length; $index++) {
   let val = $array[$index];
   {
    let css = /**@type {?string}*/ ($Casts.$to(cssMapping.m_apply__java_lang_Object__java_lang_Object(val), j_l_String));
    if (!$Equality.$same(css, null)) {
     this.f_managedClasses__org_patternfly_componentgroup_theme_ThemeManager_.add(css);
    }
   }
  }
  this.f_mediaQuery__org_patternfly_componentgroup_theme_ThemeManager_ = goog.global.window.matchMedia(mediaQuery);
  let eventListener = EventListener_$Overlay.$adapt__elemental2_dom_EventListener_$JsFunction__elemental2_dom_EventListener((/** Event */ event) =>{
   if (!$Equality.$same(this.f_value__org_patternfly_componentgroup_theme_ThemeManager, null) && (/**@type {!SystemValue}*/ ($Casts.$to(this.f_value__org_patternfly_componentgroup_theme_ThemeManager, /**@type {Function}*/ (SystemValue)))).m_systemValue__boolean()) {
    this.m_applySystemPreference__boolean__void_$p_org_patternfly_componentgroup_theme_ThemeManager((/**@type {MediaQueryListEvent}*/ ($Casts.$to(event, MediaQueryListEvent_$Overlay))).matches);
   }
  });
  this.f_mediaQuery__org_patternfly_componentgroup_theme_ThemeManager_.addEventListener(EventType.f_change__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, eventListener);
  this.f_handlerRegistration__org_patternfly_componentgroup_theme_ThemeManager_ = HandlerRegistration.$adapt(() =>{
   this.f_mediaQuery__org_patternfly_componentgroup_theme_ThemeManager_.removeEventListener(EventType.f_change__org_jboss_elemento_EventType.f_name__org_jboss_elemento_EventType, eventListener);
  });
  let item = WebStorageWindow_$Overlay.m_of__elemental2_dom_Window__elemental2_webstorage_WebStorageWindow(goog.global.window).localStorage.getItem(storageKey);
  if (!$Equality.$same(item, null)) {
   this.m_apply__java_lang_Enum__void_$pp_org_patternfly_componentgroup_theme(/**@type {E}*/ ($Casts.$to($Casts.$to(load.m_apply__java_lang_Object__java_lang_Object(item), Enum), /**@type {Function}*/ (SystemValue))));
  } else {
   this.m_apply__java_lang_Enum__void_$pp_org_patternfly_componentgroup_theme(defaultValue);
  }
 }
 /** @nodts */
 m_cleanup__void_$pp_org_patternfly_componentgroup_theme() {
  if (!$Equality.$same(this.f_handlerRegistration__org_patternfly_componentgroup_theme_ThemeManager_, null)) {
   this.f_handlerRegistration__org_patternfly_componentgroup_theme_ThemeManager_.m_removeHandler__void();
  }
 }
 /** @nodts */
 m_apply__java_lang_Enum__void_$pp_org_patternfly_componentgroup_theme(/** E */ value) {
  if (!$Equality.$same(value, null) && !$Equality.$same(value, this.f_value__org_patternfly_componentgroup_theme_ThemeManager)) {
   this.f_value__org_patternfly_componentgroup_theme_ThemeManager = value;
   let item = /**@type {?string}*/ ($Casts.$to(this.f_save__org_patternfly_componentgroup_theme_ThemeManager_.m_apply__java_lang_Object__java_lang_Object(this.f_value__org_patternfly_componentgroup_theme_ThemeManager), j_l_String));
   if (!$Equality.$same(item, null)) {
    WebStorageWindow_$Overlay.m_of__elemental2_dom_Window__elemental2_webstorage_WebStorageWindow(goog.global.window).localStorage.setItem(this.f_storageKey__org_patternfly_componentgroup_theme_ThemeManager_, item);
   }
   if ((/**@type {!SystemValue}*/ ($Casts.$to(this.f_value__org_patternfly_componentgroup_theme_ThemeManager, /**@type {Function}*/ (SystemValue)))).m_systemValue__boolean()) {
    this.m_applySystemPreference__boolean__void_$p_org_patternfly_componentgroup_theme_ThemeManager(this.f_mediaQuery__org_patternfly_componentgroup_theme_ThemeManager_.matches);
   } else {
    this.m_removeAllManagedClasses__void_$p_org_patternfly_componentgroup_theme_ThemeManager();
    let css = /**@type {?string}*/ ($Casts.$to(this.f_cssMapping__org_patternfly_componentgroup_theme_ThemeManager_.m_apply__java_lang_Object__java_lang_Object(this.f_value__org_patternfly_componentgroup_theme_ThemeManager), j_l_String));
    if (!$Equality.$same(css, null)) {
     DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.querySelector('html').classList.add(css);
    }
   }
  }
 }
 /** @nodts */
 m_applySystemPreference__boolean__void_$p_org_patternfly_componentgroup_theme_ThemeManager(/** boolean */ matches) {
  this.m_removeAllManagedClasses__void_$p_org_patternfly_componentgroup_theme_ThemeManager();
  if (matches) {
   let css = /**@type {?string}*/ ($Casts.$to(this.f_cssMapping__org_patternfly_componentgroup_theme_ThemeManager_.m_apply__java_lang_Object__java_lang_Object(this.f_mediaQueryValue__org_patternfly_componentgroup_theme_ThemeManager_), j_l_String));
   if (!$Equality.$same(css, null)) {
    DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.querySelector('html').classList.add(css);
   }
  }
 }
 /** @nodts */
 m_removeAllManagedClasses__void_$p_org_patternfly_componentgroup_theme_ThemeManager() {
  for (let $iterator = this.f_managedClasses__org_patternfly_componentgroup_theme_ThemeManager_.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let css = /**@type {?string}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), j_l_String));
   {
    DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.querySelector('html').classList.remove(css);
   }
  }
 }
 /** @nodts */
 static $clinit() {
  ThemeManager.$clinit = () =>{};
  ThemeManager.$loadModules();
  j_l_Object.$clinit();
  ThemeManager.f_logger__org_patternfly_componentgroup_theme_ThemeManager_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(ThemeManager).m_getName__java_lang_String());
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ThemeManager;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  EventListener_$Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  MediaQueryListEvent_$Overlay = goog.module.get('elemental2.dom.MediaQueryListEvent.$Overlay$impl');
  WebStorageWindow_$Overlay = goog.module.get('elemental2.webstorage.WebStorageWindow.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Enum = goog.module.get('java.lang.Enum$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  LinkedHashSet = goog.module.get('java.util.LinkedHashSet$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  HandlerRegistration = goog.module.get('org.gwtproject.event.shared.HandlerRegistration$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  SystemValue = goog.module.get('org.patternfly.componentgroup.theme.SystemValue$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {Logger} @nodts*/
ThemeManager.f_logger__org_patternfly_componentgroup_theme_ThemeManager_;
$Util.$setClassMetadata(ThemeManager, 'org.patternfly.componentgroup.theme.ThemeManager');

exports = ThemeManager;

//# sourceMappingURL=ThemeManager.js.map
