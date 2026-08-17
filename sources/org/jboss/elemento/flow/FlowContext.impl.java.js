goog.module('org.jboss.elemento.flow.FlowContext$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.promise.Promise.$Overlay$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let Stack = goog.forwardDeclare('java.util.Stack$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let FlowRunner = goog.forwardDeclare('org.jboss.elemento.flow.FlowRunner$impl');
let FlowStatus = goog.forwardDeclare('org.jboss.elemento.flow.FlowStatus$impl');
let Progress = goog.forwardDeclare('org.jboss.elemento.flow.Progress$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class FlowContext extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Stack<*>} @nodts*/
  this.f_stack__org_jboss_elemento_flow_FlowContext_;
  /**@type {Map<?string, *>} @nodts*/
  this.f_data__org_jboss_elemento_flow_FlowContext_;
  /**@type {Progress} @nodts*/
  this.f_progress__org_jboss_elemento_flow_FlowContext;
  /**@type {FlowStatus} @nodts*/
  this.f_status__org_jboss_elemento_flow_FlowContext;
  /**@type {?string} @nodts*/
  this.f_failure__org_jboss_elemento_flow_FlowContext;
 }
 /** @nodts @return {boolean} */
 static m_isTimeout__java_lang_Object__boolean(/** * */ error) {
  FlowContext.$clinit();
  return $Objects.m_equals__java_lang_Object__java_lang_Object__boolean(error, FlowRunner.f_TIMEOUT_ERROR__org_jboss_elemento_flow_FlowRunner);
 }
 //Factory method corresponding to constructor 'FlowContext()'.
 /** @nodts @return {!FlowContext} */
 static $create__() {
  FlowContext.$clinit();
  let $instance = new FlowContext();
  $instance.$ctor__org_jboss_elemento_flow_FlowContext__void();
  return $instance;
 }
 //Initialization from constructor 'FlowContext()'.
 /** @nodts */
 $ctor__org_jboss_elemento_flow_FlowContext__void() {
  this.$ctor__org_jboss_elemento_flow_FlowContext__org_jboss_elemento_flow_Progress__void(Progress.f_NOOP__org_jboss_elemento_flow_Progress);
 }
 //Factory method corresponding to constructor 'FlowContext(Progress)'.
 /** @nodts @return {!FlowContext} */
 static $create__org_jboss_elemento_flow_Progress(/** Progress */ progress) {
  FlowContext.$clinit();
  let $instance = new FlowContext();
  $instance.$ctor__org_jboss_elemento_flow_FlowContext__org_jboss_elemento_flow_Progress__void(progress);
  return $instance;
 }
 //Initialization from constructor 'FlowContext(Progress)'.
 /** @nodts */
 $ctor__org_jboss_elemento_flow_FlowContext__org_jboss_elemento_flow_Progress__void(/** Progress */ progress) {
  this.$ctor__java_lang_Object__void();
  this.f_progress__org_jboss_elemento_flow_FlowContext = progress;
  this.f_stack__org_jboss_elemento_flow_FlowContext_ = (/**@type {!Stack<*>}*/ (Stack.$create__()));
  this.f_data__org_jboss_elemento_flow_FlowContext_ = (/**@type {!HashMap<?string, *>}*/ (HashMap.$create__()));
  this.f_status__org_jboss_elemento_flow_FlowContext = FlowStatus.f_NOT_STARTED__org_jboss_elemento_flow_FlowStatus;
 }
 /** @nodts @template C @return {Promise<C>} */
 m_resolve__elemental2_promise_Promise() {
  return /**@type {Promise<C>}*/ (this.m_resolveInternal__elemental2_promise_Promise_$p_org_jboss_elemento_flow_FlowContext());
 }
 /** @nodts @template C, T @return {Promise<C>} */
 m_resolve__java_lang_Object__elemental2_promise_Promise(/** T */ value) {
  this.m_push__java_lang_Object__void(value);
  return /**@type {Promise<C>}*/ (this.m_resolveInternal__elemental2_promise_Promise_$p_org_jboss_elemento_flow_FlowContext());
 }
 /** @nodts @template C, T @return {Promise<C>} */
 m_resolve__java_lang_String__java_lang_Object__elemental2_promise_Promise(/** ?string */ key, /** T */ value) {
  this.m_set__java_lang_String__java_lang_Object__void(key, value);
  return /**@type {Promise<C>}*/ (this.m_resolveInternal__elemental2_promise_Promise_$p_org_jboss_elemento_flow_FlowContext());
 }
 /** @nodts @template C @return {Promise<C>} */
 m_reject__java_lang_Object__elemental2_promise_Promise(/** * */ error) {
  return /**@type {Promise<C>}*/ (this.m_rejectInternal__java_lang_Object__elemental2_promise_Promise_$p_org_jboss_elemento_flow_FlowContext(error));
 }
 /** @nodts @template C @return {Promise<C>} */
 m_resolveInternal__elemental2_promise_Promise_$p_org_jboss_elemento_flow_FlowContext() {
  return /**@type {!Promise<C>}*/ ($Overlay.m_resolve__java_lang_Object__elemental2_promise_Promise(this));
 }
 /** @nodts @template C @return {Promise<C>} */
 m_rejectInternal__java_lang_Object__elemental2_promise_Promise_$p_org_jboss_elemento_flow_FlowContext(/** * */ error) {
  return /**@type {!Promise<C>}*/ (Promise.reject(error));
 }
 /** @nodts @template T */
 m_push__java_lang_Object__void(/** T */ value) {
  this.f_stack__org_jboss_elemento_flow_FlowContext_.m_push__java_lang_Object__java_lang_Object(value);
 }
 /** @nodts @template T @return {T} */
 m_peek__java_lang_Object() {
  return /**@type {?T}*/ (this.f_stack__org_jboss_elemento_flow_FlowContext_.m_peek__java_lang_Object());
 }
 /** @nodts @template T @return {T} */
 m_pop__java_lang_Object() {
  return /**@type {?T}*/ (this.f_stack__org_jboss_elemento_flow_FlowContext_.m_pop__java_lang_Object());
 }
 /** @nodts @template T @return {T} */
 m_pop__java_lang_Object__java_lang_Object(/** T */ defaultValue) {
  return this.m_isStackEmpty__boolean() ? defaultValue : /**@type {?T}*/ (this.f_stack__org_jboss_elemento_flow_FlowContext_.m_pop__java_lang_Object());
 }
 /** @nodts @return {boolean} */
 m_isStackEmpty__boolean() {
  return this.f_stack__org_jboss_elemento_flow_FlowContext_.m_empty__boolean();
 }
 /** @nodts @template T */
 m_set__java_lang_String__java_lang_Object__void(/** ?string */ key, /** T */ value) {
  this.f_data__org_jboss_elemento_flow_FlowContext_.put(key, value);
 }
 /** @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object(/** ?string */ key) {
  return this.m_get__java_lang_String__java_lang_Object__java_lang_Object(key, null);
 }
 /** @nodts @template T @return {T} */
 m_get__java_lang_String__java_lang_Object__java_lang_Object(/** ?string */ key, /** T */ defaultValue) {
  return /**@type {?T}*/ (this.f_data__org_jboss_elemento_flow_FlowContext_.getOrDefault(key, defaultValue));
 }
 /** @nodts @return {Set<?string>} */
 m_keys__java_util_Set() {
  return this.f_data__org_jboss_elemento_flow_FlowContext_.keySet();
 }
 /** @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_data__org_jboss_elemento_flow_FlowContext_.isEmpty();
 }
 /** @nodts @return {Progress} */
 m_progress__org_jboss_elemento_flow_Progress() {
  return this.f_progress__org_jboss_elemento_flow_FlowContext;
 }
 /** @nodts @return {FlowStatus} */
 m_status__org_jboss_elemento_flow_FlowStatus() {
  return this.f_status__org_jboss_elemento_flow_FlowContext;
 }
 /** @nodts @return {boolean} */
 m_isSuccessful__boolean() {
  return $Equality.$same(this.f_status__org_jboss_elemento_flow_FlowContext, FlowStatus.f_SUCCESS__org_jboss_elemento_flow_FlowStatus);
 }
 /** @nodts @return {boolean} */
 m_isTimeout__boolean() {
  return $Equality.$same(this.f_status__org_jboss_elemento_flow_FlowContext, FlowStatus.f_TIMEOUT__org_jboss_elemento_flow_FlowStatus);
 }
 /** @nodts @return {boolean} */
 m_failure__boolean() {
  return $Equality.$same(this.f_status__org_jboss_elemento_flow_FlowContext, FlowStatus.f_FAILURE__org_jboss_elemento_flow_FlowStatus);
 }
 /** @nodts @return {?string} */
 m_failureReason__java_lang_String() {
  return this.f_failure__org_jboss_elemento_flow_FlowContext;
 }
 /** @override @return {?string} */
 toString() {
  let builder = StringBuilder.$create__().m_append__java_lang_String__java_lang_StringBuilder('FlowContext {');
  builder.m_append__java_lang_String__java_lang_StringBuilder('stack: ').m_append__java_lang_Object__java_lang_StringBuilder(this.f_stack__org_jboss_elemento_flow_FlowContext_).m_append__java_lang_String__java_lang_StringBuilder(', map: ').m_append__java_lang_Object__java_lang_StringBuilder(this.f_data__org_jboss_elemento_flow_FlowContext_).m_append__java_lang_String__java_lang_StringBuilder(', status: ').m_append__java_lang_Object__java_lang_StringBuilder(this.f_status__org_jboss_elemento_flow_FlowContext);
  if ($Equality.$same(this.f_status__org_jboss_elemento_flow_FlowContext, FlowStatus.f_FAILURE__org_jboss_elemento_flow_FlowStatus) && !$Equality.$same(this.f_failure__org_jboss_elemento_flow_FlowContext, null)) {
   builder.m_append__char__java_lang_StringBuilder(40 /* '(' */).m_append__java_lang_String__java_lang_StringBuilder(this.f_failure__org_jboss_elemento_flow_FlowContext).m_append__char__java_lang_StringBuilder(41 /* ')' */);
  }
  return builder.m_append__char__java_lang_StringBuilder(125 /* '}' */).toString();
 }
 /** @nodts */
 static $clinit() {
  FlowContext.$clinit = () =>{};
  FlowContext.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FlowContext;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.promise.Promise.$Overlay$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Stack = goog.module.get('java.util.Stack$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  FlowRunner = goog.module.get('org.jboss.elemento.flow.FlowRunner$impl');
  FlowStatus = goog.module.get('org.jboss.elemento.flow.FlowStatus$impl');
  Progress = goog.module.get('org.jboss.elemento.flow.Progress$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
$Util.$setClassMetadata(FlowContext, 'org.jboss.elemento.flow.FlowContext');

exports = FlowContext;

//# sourceMappingURL=FlowContext.js.map
