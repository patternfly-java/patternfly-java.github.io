goog.module('org.jboss.elemento.BodyObserver$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let MutationObserverInit_$Overlay = goog.forwardDeclare('elemental2.dom.MutationObserverInit.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Collector = goog.forwardDeclare('java.util.stream.Collector$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ElementObserver = goog.forwardDeclare('org.jboss.elemento.BodyObserver.ElementObserver$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ObserverCallback = goog.forwardDeclare('org.jboss.elemento.ObserverCallback$impl');
let Level = goog.forwardDeclare('org.jboss.elemento.logger.Level$impl');
let Logger = goog.forwardDeclare('org.jboss.elemento.logger.Logger$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 */
class BodyObserver extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!BodyObserver} */
 static $create__() {
  BodyObserver.$clinit();
  let $instance = new BodyObserver();
  $instance.$ctor__org_jboss_elemento_BodyObserver__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_BodyObserver__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static m_addAttachObserver__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback__void(/** HTMLElement */ element, /** ObserverCallback */ callback) {
  BodyObserver.$clinit();
  if (!BodyObserver.f_ready__org_jboss_elemento_BodyObserver_) {
   BodyObserver.m_startObserving__void();
  }
  let id = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String('a', /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)));
  BodyObserver.f_attachObservers__org_jboss_elemento_BodyObserver_.add(BodyObserver.m_createObserver__java_lang_String__elemental2_dom_HTMLElement__java_lang_String__org_jboss_elemento_ObserverCallback__org_jboss_elemento_BodyObserver_ElementObserver(id, element, BodyObserver.f_ATTACH_UID_KEY__org_jboss_elemento_BodyObserver_, callback));
  if (BodyObserver.f_logger__org_jboss_elemento_BodyObserver_.m_isEnabled__org_jboss_elemento_logger_Level__boolean(Level.f_DEBUG__org_jboss_elemento_logger_Level)) {
   BodyObserver.f_logger__org_jboss_elemento_BodyObserver_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('Add attach observer %s for %o %s', [id, element, BodyObserver.m_count__java_lang_String()]);
  }
 }
 /** @nodts */
 static m_removeAttachObserver__elemental2_dom_HTMLElement__void(/** HTMLElement */ element) {
  BodyObserver.$clinit();
  element.removeAttribute(BodyObserver.f_ATTACH_UID_KEY__org_jboss_elemento_BodyObserver_);
 }
 /** @nodts */
 static m_addDetachObserver__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback__void(/** HTMLElement */ element, /** ObserverCallback */ callback) {
  BodyObserver.$clinit();
  if (!BodyObserver.f_ready__org_jboss_elemento_BodyObserver_) {
   BodyObserver.m_startObserving__void();
  }
  let id = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String('d', /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String)));
  BodyObserver.f_detachObservers__org_jboss_elemento_BodyObserver_.add(BodyObserver.m_createObserver__java_lang_String__elemental2_dom_HTMLElement__java_lang_String__org_jboss_elemento_ObserverCallback__org_jboss_elemento_BodyObserver_ElementObserver(id, element, BodyObserver.f_DETACH_UID_KEY__org_jboss_elemento_BodyObserver_, callback));
  if (BodyObserver.f_logger__org_jboss_elemento_BodyObserver_.m_isEnabled__org_jboss_elemento_logger_Level__boolean(Level.f_DEBUG__org_jboss_elemento_logger_Level)) {
   BodyObserver.f_logger__org_jboss_elemento_BodyObserver_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('Add detach observer %s for %o %s', [id, element, BodyObserver.m_count__java_lang_String()]);
  }
 }
 /** @nodts */
 static m_removeDetachObserver__elemental2_dom_HTMLElement__void(/** HTMLElement */ element) {
  BodyObserver.$clinit();
  element.removeAttribute(BodyObserver.f_DETACH_UID_KEY__org_jboss_elemento_BodyObserver_);
 }
 /** @nodts */
 static m_startObserving__void() {
  let mutationObserver = new MutationObserver(/**  @return {*}*/ ((/** Array<MutationRecord> */ mutationRecords, /** MutationObserver */ observer) =>{
   let records = /**@type {Array<MutationRecord>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(mutationRecords));
   for (let $array = records, $index = 0; $index < $array.length; $index++) {
    let record = $array[$index];
    {
     if (record.removedNodes.length != 0) {
      BodyObserver.m_onElementsRemoved__elemental2_dom_MutationRecord__void(record);
     }
     if (record.addedNodes.length != 0) {
      BodyObserver.m_onElementsAppended__elemental2_dom_MutationRecord__void(record);
     }
    }
   }
   return null;
  }));
  let mutationObserverInit = MutationObserverInit_$Overlay.m_create__elemental2_dom_MutationObserverInit();
  mutationObserverInit.childList = true;
  mutationObserverInit.subtree = true;
  if ($Equality.$same(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body, null)) {
   BodyObserver.f_logger__org_jboss_elemento_BodyObserver_.m_error__java_lang_String__arrayOf_java_lang_Object__void('Cannot start observing elements. Document is not ready yet!', []);
  } else {
   BodyObserver.f_logger__org_jboss_elemento_BodyObserver_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('Start observing elements', []);
   mutationObserver.observe(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body, mutationObserverInit);
   BodyObserver.f_ready__org_jboss_elemento_BodyObserver_ = true;
  }
 }
 /** @nodts */
 static m_onElementsAppended__elemental2_dom_MutationRecord__void(/** MutationRecord */ record) {
  let elements = /**@type {List<HTMLElement>}*/ ($Casts.$to((/**@type {Stream<HTMLElement>}*/ ((/**@type {Stream<Node>}*/ (Elements.m_stream__jsinterop_base_JsArrayLike__java_util_stream_Stream(record.addedNodes))).m_filter__java_util_function_Predicate__java_util_stream_Stream(/**@type {Predicate<Node>}*/ (Elements.m_htmlElements__java_util_function_Predicate())).m_map__java_util_function_Function__java_util_stream_Stream(/**@type {j_u_function_Function<Node, HTMLElement>}*/ (Elements.m_asHtmlElement__java_util_function_Function())))).m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<HTMLElement, *, List<HTMLElement>>}*/ (Collectors.m_toList__java_util_stream_Collector())), /**@type {Function}*/ (List)));
  if (!elements.isEmpty()) {
   for (let iterator = BodyObserver.f_attachObservers__org_jboss_elemento_BodyObserver_.m_iterator__java_util_Iterator(); iterator.m_hasNext__boolean(); ) {
    let eo = /**@type {ElementObserver}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), ElementObserver));
    if ($Equality.$same(eo.f_element__org_jboss_elemento_BodyObserver_ElementObserver_, null)) {
     iterator.m_remove__void();
     if (BodyObserver.f_logger__org_jboss_elemento_BodyObserver_.m_isEnabled__org_jboss_elemento_logger_Level__boolean(Level.f_DEBUG__org_jboss_elemento_logger_Level)) {
      BodyObserver.f_logger__org_jboss_elemento_BodyObserver_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('Remove attach observer %s w/o element %s', [eo.f_id__org_jboss_elemento_BodyObserver_ElementObserver_, BodyObserver.m_count__java_lang_String()]);
     }
    } else {
     if (elements.contains(eo.f_element__org_jboss_elemento_BodyObserver_ElementObserver_) || BodyObserver.m_isChildOfObservedElement__java_util_List__java_lang_String__java_lang_String__boolean(elements, BodyObserver.f_ATTACH_UID_KEY__org_jboss_elemento_BodyObserver_, eo.f_id__org_jboss_elemento_BodyObserver_ElementObserver_)) {
      if (BodyObserver.f_logger__org_jboss_elemento_BodyObserver_.m_isEnabled__org_jboss_elemento_logger_Level__boolean(Level.f_DEBUG__org_jboss_elemento_logger_Level)) {
       BodyObserver.f_logger__org_jboss_elemento_BodyObserver_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('Call attach callback %s for %o', [eo.f_id__org_jboss_elemento_BodyObserver_ElementObserver_, eo.f_element__org_jboss_elemento_BodyObserver_ElementObserver_]);
      }
      eo.f_callback__org_jboss_elemento_BodyObserver_ElementObserver_.m_onObserved__elemental2_dom_MutationRecord__void(record);
      BodyObserver.m_removeId__elemental2_dom_HTMLElement__java_lang_String__java_lang_String__void(eo.f_element__org_jboss_elemento_BodyObserver_ElementObserver_, BodyObserver.f_ATTACH_UID_KEY__org_jboss_elemento_BodyObserver_, eo.f_id__org_jboss_elemento_BodyObserver_ElementObserver_);
      iterator.m_remove__void();
      if (BodyObserver.f_logger__org_jboss_elemento_BodyObserver_.m_isEnabled__org_jboss_elemento_logger_Level__boolean(Level.f_DEBUG__org_jboss_elemento_logger_Level)) {
       BodyObserver.f_logger__org_jboss_elemento_BodyObserver_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('Remove attach observer %s for %o %s', [eo.f_id__org_jboss_elemento_BodyObserver_ElementObserver_, eo.f_element__org_jboss_elemento_BodyObserver_ElementObserver_, BodyObserver.m_count__java_lang_String()]);
      }
     }
    }
   }
  }
 }
 /** @nodts */
 static m_onElementsRemoved__elemental2_dom_MutationRecord__void(/** MutationRecord */ record) {
  let elements = /**@type {List<HTMLElement>}*/ ($Casts.$to((/**@type {Stream<HTMLElement>}*/ ((/**@type {Stream<Node>}*/ (Elements.m_stream__jsinterop_base_JsArrayLike__java_util_stream_Stream(record.removedNodes))).m_filter__java_util_function_Predicate__java_util_stream_Stream(/**@type {Predicate<Node>}*/ (Elements.m_htmlElements__java_util_function_Predicate())).m_map__java_util_function_Function__java_util_stream_Stream(/**@type {j_u_function_Function<Node, HTMLElement>}*/ (Elements.m_asHtmlElement__java_util_function_Function())))).m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<HTMLElement, *, List<HTMLElement>>}*/ (Collectors.m_toList__java_util_stream_Collector())), /**@type {Function}*/ (List)));
  if (!elements.isEmpty()) {
   for (let iterator = BodyObserver.f_detachObservers__org_jboss_elemento_BodyObserver_.m_iterator__java_util_Iterator(); iterator.m_hasNext__boolean(); ) {
    let eo = /**@type {ElementObserver}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), ElementObserver));
    if ($Equality.$same(eo.f_element__org_jboss_elemento_BodyObserver_ElementObserver_, null)) {
     iterator.m_remove__void();
     if (BodyObserver.f_logger__org_jboss_elemento_BodyObserver_.m_isEnabled__org_jboss_elemento_logger_Level__boolean(Level.f_DEBUG__org_jboss_elemento_logger_Level)) {
      BodyObserver.f_logger__org_jboss_elemento_BodyObserver_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('Remove detach observer %s w/o element %s', [eo.f_id__org_jboss_elemento_BodyObserver_ElementObserver_, BodyObserver.m_count__java_lang_String()]);
     }
    } else {
     if (elements.contains(eo.f_element__org_jboss_elemento_BodyObserver_ElementObserver_) || BodyObserver.m_isChildOfObservedElement__java_util_List__java_lang_String__java_lang_String__boolean(elements, BodyObserver.f_DETACH_UID_KEY__org_jboss_elemento_BodyObserver_, eo.f_id__org_jboss_elemento_BodyObserver_ElementObserver_)) {
      if (BodyObserver.f_logger__org_jboss_elemento_BodyObserver_.m_isEnabled__org_jboss_elemento_logger_Level__boolean(Level.f_DEBUG__org_jboss_elemento_logger_Level)) {
       BodyObserver.f_logger__org_jboss_elemento_BodyObserver_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('Call detach callback %s for %o', [eo.f_id__org_jboss_elemento_BodyObserver_ElementObserver_, eo.f_element__org_jboss_elemento_BodyObserver_ElementObserver_]);
      }
      eo.f_callback__org_jboss_elemento_BodyObserver_ElementObserver_.m_onObserved__elemental2_dom_MutationRecord__void(record);
      BodyObserver.m_removeId__elemental2_dom_HTMLElement__java_lang_String__java_lang_String__void(eo.f_element__org_jboss_elemento_BodyObserver_ElementObserver_, BodyObserver.f_DETACH_UID_KEY__org_jboss_elemento_BodyObserver_, eo.f_id__org_jboss_elemento_BodyObserver_ElementObserver_);
      iterator.m_remove__void();
      if (BodyObserver.f_logger__org_jboss_elemento_BodyObserver_.m_isEnabled__org_jboss_elemento_logger_Level__boolean(Level.f_DEBUG__org_jboss_elemento_logger_Level)) {
       BodyObserver.f_logger__org_jboss_elemento_BodyObserver_.m_debug__java_lang_String__arrayOf_java_lang_Object__void('Remove detach observer %s for %o %s', [eo.f_id__org_jboss_elemento_BodyObserver_ElementObserver_, eo.f_element__org_jboss_elemento_BodyObserver_ElementObserver_, BodyObserver.m_count__java_lang_String()]);
      }
     }
    }
   }
  }
 }
 /** @nodts @return {boolean} */
 static m_isChildOfObservedElement__java_util_List__java_lang_String__java_lang_String__boolean(/** List<HTMLElement> */ elements, /** ?string */ attribute, /** ?string */ id) {
  for (let $iterator = elements.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let element = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), $Overlay));
   {
    if (!$Equality.$same(element.querySelector('[' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(attribute) + '~=\'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(id) + '\']'), null)) {
     return true;
    }
   }
  }
  return false;
 }
 /** @nodts @return {ElementObserver} */
 static m_createObserver__java_lang_String__elemental2_dom_HTMLElement__java_lang_String__org_jboss_elemento_ObserverCallback__org_jboss_elemento_BodyObserver_ElementObserver(/** ?string */ id, /** HTMLElement */ element, /** ?string */ attribute, /** ObserverCallback */ callback) {
  BodyObserver.m_addId__elemental2_dom_HTMLElement__java_lang_String__java_lang_String__void(element, attribute, id);
  return ElementObserver.$create__java_lang_String__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback(id, element, callback);
 }
 /** @nodts */
 static m_addId__elemental2_dom_HTMLElement__java_lang_String__java_lang_String__void(/** HTMLElement */ element, /** ?string */ attribute, /** ?string */ id) {
  let ids = BodyObserver.m_ids__elemental2_dom_HTMLElement__java_lang_String__elemental2_core_JsArray(element, attribute);
  ids.push(id);
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(element, attribute, ids.join(' '));
 }
 /** @nodts */
 static m_removeId__elemental2_dom_HTMLElement__java_lang_String__java_lang_String__void(/** HTMLElement */ element, /** ?string */ attribute, /** ?string */ id) {
  let ids = BodyObserver.m_ids__elemental2_dom_HTMLElement__java_lang_String__elemental2_core_JsArray(element, attribute);
  let index = ids.indexOf(id);
  if (index != -1) {
   ids.splice(index, 1);
  }
  if (ids.length == 0) {
   element.removeAttribute(attribute);
  } else {
   Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(element, attribute, ids.join(' '));
  }
 }
 /** @nodts @return {Array<?string>} */
 static m_ids__elemental2_dom_HTMLElement__java_lang_String__elemental2_core_JsArray(/** HTMLElement */ element, /** ?string */ attribute) {
  let ids = /**@type {!Array<?string>}*/ (new Array());
  if (element.hasAttribute(attribute)) {
   let value = element.getAttribute(attribute);
   if (!j_l_String.m_isEmpty__java_lang_String__boolean(j_l_String.m_trim__java_lang_String__java_lang_String(value))) {
    for (let $array = j_l_String.m_split__java_lang_String__java_lang_String__arrayOf_java_lang_String(value, ' '), $index = 0; $index < $array.length; $index++) {
     let id = $array[$index];
     {
      ids.push(id);
     }
    }
   }
  }
  return ids;
 }
 /** @nodts @return {?string} */
 static m_count__java_lang_String() {
  return '(a:' + BodyObserver.f_attachObservers__org_jboss_elemento_BodyObserver_.size() + '|d:' + BodyObserver.f_detachObservers__org_jboss_elemento_BodyObserver_.size() + ')';
 }
 /** @nodts */
 static $clinit() {
  BodyObserver.$clinit = () =>{};
  BodyObserver.$loadModules();
  j_l_Object.$clinit();
  BodyObserver.f_detachObservers__org_jboss_elemento_BodyObserver_ = (/**@type {!ArrayList<ElementObserver>}*/ (ArrayList.$create__()));
  BodyObserver.f_attachObservers__org_jboss_elemento_BodyObserver_ = (/**@type {!ArrayList<ElementObserver>}*/ (ArrayList.$create__()));
  BodyObserver.f_logger__org_jboss_elemento_BodyObserver_ = Logger.m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(Class.$get(BodyObserver).m_getName__java_lang_String());
  BodyObserver.f_ready__org_jboss_elemento_BodyObserver_ = false;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BodyObserver;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  MutationObserverInit_$Overlay = goog.module.get('elemental2.dom.MutationObserverInit.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  List = goog.module.get('java.util.List$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ElementObserver = goog.module.get('org.jboss.elemento.BodyObserver.ElementObserver$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Level = goog.module.get('org.jboss.elemento.logger.Level$impl');
  Logger = goog.module.get('org.jboss.elemento.logger.Logger$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
BodyObserver.f_ATTACH_UID_KEY__org_jboss_elemento_BodyObserver_ = 'on-attach-uid';
/**@const {string} @nodts*/
BodyObserver.f_DETACH_UID_KEY__org_jboss_elemento_BodyObserver_ = 'on-detach-uid';
/**@type {List<ElementObserver>} @nodts*/
BodyObserver.f_detachObservers__org_jboss_elemento_BodyObserver_;
/**@type {List<ElementObserver>} @nodts*/
BodyObserver.f_attachObservers__org_jboss_elemento_BodyObserver_;
/**@type {Logger} @nodts*/
BodyObserver.f_logger__org_jboss_elemento_BodyObserver_;
/**@type {boolean} @nodts*/
BodyObserver.f_ready__org_jboss_elemento_BodyObserver_ = false;
$Util.$setClassMetadata(BodyObserver, 'org.jboss.elemento.BodyObserver');

exports = BodyObserver;

//# sourceMappingURL=BodyObserver.js.map
