goog.module('org.jboss.elemento.logger.LevelOverrides$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let Category = goog.forwardDeclare('org.jboss.elemento.logger.Category$impl');
let Level = goog.forwardDeclare('org.jboss.elemento.logger.Level$impl');
let $1 = goog.forwardDeclare('org.jboss.elemento.logger.LevelOverrides.$1$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class LevelOverrides extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<?string, Level>} @nodts*/
  this.f_levels__org_jboss_elemento_logger_LevelOverrides;
 }
 /** @nodts @return {!LevelOverrides} */
 static $create__() {
  LevelOverrides.$clinit();
  let $instance = new LevelOverrides();
  $instance.$ctor__org_jboss_elemento_logger_LevelOverrides__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_logger_LevelOverrides__void() {
  this.$ctor__java_lang_Object__void();
  this.f_levels__org_jboss_elemento_logger_LevelOverrides = $1.$create__org_jboss_elemento_logger_LevelOverrides(this);
 }
 /** @nodts */
 m_addLevel__java_lang_String__org_jboss_elemento_logger_Level__void_$pp_org_jboss_elemento_logger(/** ?string */ category, /** Level */ level) {
  this.f_levels__org_jboss_elemento_logger_LevelOverrides.put(category, level);
 }
 /** @nodts */
 m_removeLevel__java_lang_String__void_$pp_org_jboss_elemento_logger(/** ?string */ category) {
  this.f_levels__org_jboss_elemento_logger_LevelOverrides.remove(category);
 }
 /** @nodts @return {Level} */
 m_overriddenLevel__java_lang_String__org_jboss_elemento_logger_Level_$pp_org_jboss_elemento_logger(/** ?string */ category) {
  let length = 0;
  let /** Level */ level = null;
  for (let $iterator = this.f_levels__org_jboss_elemento_logger_LevelOverrides.entrySet().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let entry = /**@type {Entry<?string, Level>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), /**@type {Function}*/ (Entry)));
   {
    let parent = /**@type {?string}*/ ($Casts.$to(entry.getKey(), j_l_String));
    if (Category.m_isSubcategory__java_lang_String__java_lang_String__boolean(parent, category)) {
     if (j_l_String.m_length__java_lang_String__int(parent) > length) {
      level = (/**@type {Level}*/ ($Casts.$to(entry.getValue(), Level)));
      length = j_l_String.m_length__java_lang_String__int(parent);
     }
    }
   }
  }
  return level;
 }
 /** @nodts */
 static $clinit() {
  LevelOverrides.$clinit = () =>{};
  LevelOverrides.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LevelOverrides;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Entry = goog.module.get('java.util.Map.Entry$impl');
  Category = goog.module.get('org.jboss.elemento.logger.Category$impl');
  Level = goog.module.get('org.jboss.elemento.logger.Level$impl');
  $1 = goog.module.get('org.jboss.elemento.logger.LevelOverrides.$1$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(LevelOverrides, 'org.jboss.elemento.logger.LevelOverrides');

exports = LevelOverrides;

//# sourceMappingURL=LevelOverrides.js.map
