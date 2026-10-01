goog.module('org.patternfly.async.AsyncItemsController$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.promise.Promise.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Runnable = goog.forwardDeclare('java.lang.Runnable$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let AsyncItems = goog.forwardDeclare('org.patternfly.async.AsyncItems$impl');
let AsyncStatus = goog.forwardDeclare('org.patternfly.async.AsyncStatus$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template C, S
 */
class AsyncItemsController extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {AsyncItems<C, S>} @nodts*/
  this.f_asyncItems__org_patternfly_async_AsyncItemsController_;
  /**@type {AsyncStatus} @nodts*/
  this.f_status__org_patternfly_async_AsyncItemsController_;
  /**@type {number} @nodts*/
  this.f_generation__org_patternfly_async_AsyncItemsController_ = 0;
 }
 /** @nodts @template C, S @return {!AsyncItemsController<C, S>} */
 static $create__() {
  AsyncItemsController.$clinit();
  let $instance = new AsyncItemsController();
  $instance.$ctor__org_patternfly_async_AsyncItemsController__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_async_AsyncItemsController__void() {
  this.$ctor__java_lang_Object__void();
  this.f_status__org_patternfly_async_AsyncItemsController_ = AsyncStatus.f_static___org_patternfly_async_AsyncStatus;
  this.f_generation__org_patternfly_async_AsyncItemsController_ = 0;
 }
 /** @nodts */
 m_set__org_patternfly_async_AsyncItems__void(/** AsyncItems<C, S> */ asyncItems) {
  this.f_asyncItems__org_patternfly_async_AsyncItemsController_ = asyncItems;
  this.f_status__org_patternfly_async_AsyncItemsController_ = AsyncStatus.f_pending__org_patternfly_async_AsyncStatus;
 }
 /** @nodts @return {Promise<Iterable<S>>} */
 m_load__java_lang_Object__java_util_function_Consumer__java_lang_Runnable__java_util_function_Consumer__java_lang_Runnable__java_lang_Runnable__elemental2_promise_Promise(/** C */ component, /** Consumer<S> */ onItem, /** Runnable */ onEmpty, /** Consumer<*> */ onError, /** Runnable */ onBefore, /** Runnable */ onAfter) {
  if ($Equality.$same(this.f_status__org_patternfly_async_AsyncItemsController_, AsyncStatus.f_pending__org_patternfly_async_AsyncStatus) && !$Equality.$same(this.f_asyncItems__org_patternfly_async_AsyncItemsController_, null)) {
   let currentGeneration = this.f_generation__org_patternfly_async_AsyncItemsController_ = this.f_generation__org_patternfly_async_AsyncItemsController_ + 1 | 0;
   if (!$Equality.$same(onBefore, null)) {
    onBefore.m_run__void();
   }
   return /**@type {!Promise<!Iterable<S>>}*/ ((/**@type {!Promise<!Iterable<S>>}*/ ((/**@type {Promise<Iterable<S>>}*/ ($Casts.$to(this.f_asyncItems__org_patternfly_async_AsyncItemsController_.m_apply__java_lang_Object__java_lang_Object(component), $Overlay))).then(/**  @return {IThenable<Iterable<S>>}*/ ((/** Iterable<S> */ items) =>{
    let items_1 = /**@type {Iterable<S>}*/ ($Casts.$to(items, /**@type {Function}*/ (Iterable)));
    if (currentGeneration != this.f_generation__org_patternfly_async_AsyncItemsController_) {
     return /**@type {!Promise<!Iterable<S>>}*/ ($Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(/**@type {Iterable<S>}*/ (Collections.m_emptyList__java_util_List())));
    }
    this.f_status__org_patternfly_async_AsyncItemsController_ = AsyncStatus.f_resolved__org_patternfly_async_AsyncStatus;
    if (!$Equality.$same(onAfter, null)) {
     onAfter.m_run__void();
    }
    let count = 0;
    for (let $iterator = items_1.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
     let item = $iterator.m_next__java_lang_Object();
     {
      onItem.m_accept__java_lang_Object__void(item);
      count = count + 1 | 0;
     }
    }
    if (count == 0 && !$Equality.$same(onEmpty, null)) {
     onEmpty.m_run__void();
    }
    return /**@type {!Promise<!Iterable<S>>}*/ ($Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(items_1));
   })))).catch(/**  @return {IThenable<Iterable<S>>}*/ ((/** !* */ err) =>{
    if (currentGeneration != this.f_generation__org_patternfly_async_AsyncItemsController_) {
     return /**@type {!Promise<!Iterable<S>>}*/ ($Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(/**@type {Iterable<S>}*/ (Collections.m_emptyList__java_util_List())));
    }
    this.f_status__org_patternfly_async_AsyncItemsController_ = AsyncStatus.f_rejected__org_patternfly_async_AsyncStatus;
    if (!$Equality.$same(onAfter, null)) {
     onAfter.m_run__void();
    }
    if (!$Equality.$same(onError, null)) {
     onError.m_accept__java_lang_Object__void(err);
    }
    return /**@type {!Promise<!Iterable<S>>}*/ (Promise.reject(err));
   })));
  }
  return /**@type {!Promise<!Iterable<S>>}*/ ($Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(/**@type {Iterable<S>}*/ (Collections.m_emptyList__java_util_List())));
 }
 /** @nodts */
 m_reset__java_lang_Runnable__void(/** Runnable */ onClear) {
  if (!$Equality.$same(this.f_status__org_patternfly_async_AsyncItemsController_, AsyncStatus.f_static___org_patternfly_async_AsyncStatus)) {
   this.f_generation__org_patternfly_async_AsyncItemsController_ = this.f_generation__org_patternfly_async_AsyncItemsController_ + 1 | 0;
   this.f_status__org_patternfly_async_AsyncItemsController_ = AsyncStatus.f_pending__org_patternfly_async_AsyncStatus;
   if (!$Equality.$same(onClear, null)) {
    onClear.m_run__void();
   }
  }
 }
 /** @nodts @return {Promise<Iterable<S>>} */
 m_reload__java_lang_Object__java_util_function_Consumer__java_lang_Runnable__java_util_function_Consumer__java_lang_Runnable__java_lang_Runnable__java_lang_Runnable__elemental2_promise_Promise(/** C */ component, /** Consumer<S> */ onItem, /** Runnable */ onEmpty, /** Consumer<*> */ onError, /** Runnable */ onBefore, /** Runnable */ onAfter, /** Runnable */ onClear) {
  this.m_reset__java_lang_Runnable__void(onClear);
  return this.m_load__java_lang_Object__java_util_function_Consumer__java_lang_Runnable__java_util_function_Consumer__java_lang_Runnable__java_lang_Runnable__elemental2_promise_Promise(component, onItem, onEmpty, onError, onBefore, onAfter);
 }
 /** @nodts @return {AsyncStatus} */
 m_status__org_patternfly_async_AsyncStatus() {
  return this.f_status__org_patternfly_async_AsyncItemsController_;
 }
 /** @nodts @return {boolean} */
 m_hasAsyncItems__boolean() {
  return !$Equality.$same(this.f_asyncItems__org_patternfly_async_AsyncItemsController_, null) && $Equality.$same(this.f_status__org_patternfly_async_AsyncItemsController_, AsyncStatus.f_pending__org_patternfly_async_AsyncStatus);
 }
 /** @nodts */
 static $clinit() {
  AsyncItemsController.$clinit = () =>{};
  AsyncItemsController.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AsyncItemsController;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.promise.Promise.$Overlay$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  AsyncStatus = goog.module.get('org.patternfly.async.AsyncStatus$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(AsyncItemsController, 'org.patternfly.async.AsyncItemsController');

exports = AsyncItemsController;

//# sourceMappingURL=AsyncItemsController.js.map
