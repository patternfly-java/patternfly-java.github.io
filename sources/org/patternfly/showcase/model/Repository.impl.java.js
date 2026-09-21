goog.module('org.patternfly.showcase.model.Repository$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Tuple = goog.forwardDeclare('org.patternfly.core.Tuple$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class Repository extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_showcase_model_Repository;
  /**@type {?string} @nodts*/
  this.f_name__org_patternfly_showcase_model_Repository;
  /**@type {number} @nodts*/
  this.f_branches__org_patternfly_showcase_model_Repository = 0;
  /**@type {number} @nodts*/
  this.f_pullRequests__org_patternfly_showcase_model_Repository = 0;
  /**@type {number} @nodts*/
  this.f_workspaces__org_patternfly_showcase_model_Repository = 0;
  /**@type {Date} @nodts*/
  this.f_lastCommit__org_patternfly_showcase_model_Repository;
  /**@type {?string} @nodts*/
  this.f_extraData__org_patternfly_showcase_model_Repository;
  /**@type {List<Repository>} @nodts*/
  this.f_children__org_patternfly_showcase_model_Repository;
 }
 /** @nodts @return {!Repository} */
 static $create__() {
  Repository.$clinit();
  let $instance = new Repository();
  $instance.$ctor__org_patternfly_showcase_model_Repository__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_model_Repository__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {List<Tuple<?string, ?string>>} */
 static get f_columns__org_patternfly_showcase_model_Repository() {
  return (Repository.$clinit(), Repository.$static_columns__org_patternfly_showcase_model_Repository);
 }
 /** @nodts */
 static $clinit() {
  Repository.$clinit = () =>{};
  Repository.$loadModules();
  j_l_Object.$clinit();
  Repository.$static_columns__org_patternfly_showcase_model_Repository = (/**@type {List<Tuple<?string, ?string>>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(/**@type {!Array<Tuple<?string, ?string>>}*/ ($Arrays.$stampType([/**@type {Tuple<?string, ?string>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String('Repository', /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), 'Repository')), /**@type {Tuple<?string, ?string>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String('Branches', /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), 'Branches')), /**@type {Tuple<?string, ?string>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String('Pull requests', /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), 'Pull requests')), /**@type {Tuple<?string, ?string>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String('Workspaces', /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), 'Workspaces')), /**@type {Tuple<?string, ?string>}*/ (Tuple.m_tuple__java_lang_Object__java_lang_Object__org_patternfly_core_Tuple(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String('Last commit', /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), 'Last commit'))], Tuple)))));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Repository;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Tuple = goog.module.get('org.patternfly.core.Tuple$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@private {List<Tuple<?string, ?string>>} @nodts*/
Repository.$static_columns__org_patternfly_showcase_model_Repository;
$Util.$setClassMetadata(Repository, 'org.patternfly.showcase.model.Repository');

exports = Repository;

//# sourceMappingURL=Repository.js.map
