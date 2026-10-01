goog.module('org.jboss.elemento.router.LoadedData$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

class LoadedData extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {*} @nodts*/
  this.f_data__org_jboss_elemento_router_LoadedData_;
 }
 /** @nodts @return {!LoadedData} */
 static $create__java_lang_Object(/** * */ data) {
  LoadedData.$clinit();
  let $instance = new LoadedData();
  $instance.$ctor__org_jboss_elemento_router_LoadedData__java_lang_Object__void(data);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_router_LoadedData__java_lang_Object__void(/** * */ data) {
  this.$ctor__java_lang_Object__void();
  this.f_data__org_jboss_elemento_router_LoadedData_ = data;
 }
 /** @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return !$Equality.$same(this.f_data__org_jboss_elemento_router_LoadedData_, null);
 }
 /** @nodts @template T @return {T} */
 m_get__java_lang_Object() {
  return /**@type {?T}*/ (this.f_data__org_jboss_elemento_router_LoadedData_);
 }
 /** @nodts @template T @return {T} */
 m_getOrDefault__java_lang_Object__java_lang_Object(/** T */ defaultValue) {
  if ($Equality.$same(this.f_data__org_jboss_elemento_router_LoadedData_, null)) {
   return defaultValue;
  }
  return /**@type {?T}*/ (this.f_data__org_jboss_elemento_router_LoadedData_);
 }
 /** @nodts @return {LoadedData} */
 static get f_NONE__org_jboss_elemento_router_LoadedData() {
  return (LoadedData.$clinit(), LoadedData.$static_NONE__org_jboss_elemento_router_LoadedData);
 }
 /** @nodts */
 static $clinit() {
  LoadedData.$clinit = () =>{};
  LoadedData.$loadModules();
  j_l_Object.$clinit();
  LoadedData.$static_NONE__org_jboss_elemento_router_LoadedData = LoadedData.$create__java_lang_Object(null);
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LoadedData;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
/**@private {LoadedData} @nodts*/
LoadedData.$static_NONE__org_jboss_elemento_router_LoadedData;
$Util.$setClassMetadata(LoadedData, 'org.jboss.elemento.router.LoadedData');

exports = LoadedData;

//# sourceMappingURL=LoadedData.js.map
