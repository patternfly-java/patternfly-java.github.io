goog.module('org.patternfly.handler.CloseHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.patternfly.handler.CloseHandler.$LambdaAdaptor$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @template C
 */
class CloseHandler {
 /** @nodts @template C_1 @return {boolean} */
 static m_shouldClose__java_lang_Object__java_util_List__elemental2_dom_Event__boolean__boolean(/** C_1 */ component, /** List<CloseHandler<C_1>> */ closeHandler, /** Event */ event, /** boolean */ fireEvent) {
  CloseHandler.$clinit();
  if (fireEvent) {
   let shouldClose = true;
   for (let $iterator = closeHandler.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let ch = /**@type {CloseHandler<C_1>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), /**@type {Function}*/ (CloseHandler)));
    {
     shouldClose = shouldClose && ch.m_shouldClose__elemental2_dom_Event__java_lang_Object__boolean(event, component);
    }
   }
   return shouldClose;
  }
  return true;
 }
 /** @nodts @template C_1 */
 static m_fireEvent__java_lang_Object__java_util_List__elemental2_dom_Event__boolean__void(/** C_1 */ component, /** List<CloseHandler<C_1>> */ closeHandler, /** Event */ event, /** boolean */ fireEvent) {
  CloseHandler.$clinit();
  if (fireEvent) {
   closeHandler.m_forEach__java_util_function_Consumer__void(Consumer.$adapt((/** CloseHandler<C_1> */ ch) =>{
    let ch_1 = /**@type {CloseHandler<C_1>}*/ ($Casts.$to(ch, /**@type {Function}*/ (CloseHandler)));
    ch_1.m_onClose__elemental2_dom_Event__java_lang_Object__void(event, component);
   }));
  }
 }
 /** @abstract @nodts @return {boolean} */
 m_shouldClose__elemental2_dom_Event__java_lang_Object__boolean(/** Event */ event, /** C */ component) {}
 /** @abstract @nodts */
 m_onClose__elemental2_dom_Event__java_lang_Object__void(/** Event */ event, /** C */ component) {}
 /** @nodts @template C @return {!CloseHandler<C>} */
 static $adapt(/** ?function(Event, C):void */ fn) {
  CloseHandler.$clinit();
  return /**@type {!$LambdaAdaptor<C>}*/ (new $LambdaAdaptor(fn));
 }
 /** @nodts @template C @return {boolean} */
 static m_shouldClose__$default__org_patternfly_handler_CloseHandler__elemental2_dom_Event__java_lang_Object__boolean(/** !CloseHandler<C> */ $thisArg, /** Event */ event, /** C */ component) {
  CloseHandler.$clinit();
  return true;
 }
 /** @nodts */
 static $clinit() {
  CloseHandler.$clinit = () =>{};
  CloseHandler.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_handler_CloseHandler = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_handler_CloseHandler;
 }
 
 /** @nodts */
 static $loadModules() {
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $LambdaAdaptor = goog.module.get('org.patternfly.handler.CloseHandler.$LambdaAdaptor$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
CloseHandler.$markImplementor(/**@type {Function}*/ (CloseHandler));
$Util.$setClassMetadataForInterface(/**@type {Function}*/ (CloseHandler), 'org.patternfly.handler.CloseHandler');

exports = CloseHandler;

//# sourceMappingURL=CloseHandler.js.map
