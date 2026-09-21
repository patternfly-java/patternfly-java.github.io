goog.module('org.jboss.elemento.router.PlaceManager.PlaceManagerStruct$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let LoadedData = goog.forwardDeclare('org.jboss.elemento.router.LoadedData$impl');
let Page = goog.forwardDeclare('org.jboss.elemento.router.Page$impl');
let Parameter = goog.forwardDeclare('org.jboss.elemento.router.Parameter$impl');
let Place = goog.forwardDeclare('org.jboss.elemento.router.Place$impl');
let ErrorType = goog.forwardDeclare('org.jboss.elemento.router.PlaceManager.ErrorType$impl');

class PlaceManagerStruct extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Place} @nodts*/
  this.f_place__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_;
  /**@type {Parameter} @nodts*/
  this.f_parameter__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_;
  /**@type {LoadedData} @nodts*/
  this.f_data__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_;
  /**@type {Page} @nodts*/
  this.f_page__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_;
  /**@type {ErrorType} @nodts*/
  this.f_errorType__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_;
 }
 /** @nodts @return {!PlaceManagerStruct} */
 static $create__() {
  PlaceManagerStruct.$clinit();
  let $instance = new PlaceManagerStruct();
  $instance.$ctor__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct__void() {
  this.$ctor__java_lang_Object__void();
  this.f_parameter__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_ = Parameter.f_EMPTY__org_jboss_elemento_router_Parameter;
  this.f_data__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_ = LoadedData.f_NONE__org_jboss_elemento_router_LoadedData;
  this.f_errorType__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_ = ErrorType.f_NO_ERROR__org_jboss_elemento_router_PlaceManager_ErrorType;
 }
 /** @nodts @return {boolean} */
 m_ok__boolean_$pp_org_jboss_elemento_router() {
  return $Equality.$same(this.f_errorType__org_jboss_elemento_router_PlaceManager_PlaceManagerStruct_, ErrorType.f_NO_ERROR__org_jboss_elemento_router_PlaceManager_ErrorType);
 }
 /** @nodts */
 static $clinit() {
  PlaceManagerStruct.$clinit = () =>{};
  PlaceManagerStruct.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PlaceManagerStruct;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  LoadedData = goog.module.get('org.jboss.elemento.router.LoadedData$impl');
  Parameter = goog.module.get('org.jboss.elemento.router.Parameter$impl');
  ErrorType = goog.module.get('org.jboss.elemento.router.PlaceManager.ErrorType$impl');
 }
}
$Util.$setClassMetadata(PlaceManagerStruct, 'org.jboss.elemento.router.PlaceManager$PlaceManagerStruct');

exports = PlaceManagerStruct;

//# sourceMappingURL=PlaceManager$PlaceManagerStruct.js.map
