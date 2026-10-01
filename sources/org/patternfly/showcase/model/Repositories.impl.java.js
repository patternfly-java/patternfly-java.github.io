goog.module('org.patternfly.showcase.model.Repositories$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Random = goog.forwardDeclare('java.util.Random$impl');
let $double = goog.forwardDeclare('javaemul.internal.primitives.$double$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let LoremIpsum = goog.forwardDeclare('org.patternfly.showcase.LoremIpsum$impl');
let Repository = goog.forwardDeclare('org.patternfly.showcase.model.Repository$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class Repositories extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Repositories} */
 static $create__() {
  Repositories.$clinit();
  let $instance = new Repositories();
  $instance.$ctor__org_patternfly_showcase_model_Repositories__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_model_Repositories__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {List<Repository>} */
 static m_repositories__int__java_util_List(/** number */ number_1) {
  Repositories.$clinit();
  return Repositories.m_repositories__int__int__int__java_util_List(number_1, 0, 0);
 }
 /** @nodts @return {List<Repository>} */
 static m_repositories__int__int__java_util_List(/** number */ number_1, /** number */ levels) {
  Repositories.$clinit();
  return Repositories.m_repositories__int__int__int__java_util_List(number_1, 0, levels);
 }
 /** @nodts @return {List<Repository>} */
 static m_repositories__int__int__int__java_util_List(/** number */ number_1, /** number */ level, /** number */ levels) {
  let repositories = /**@type {!ArrayList<Repository>}*/ (ArrayList.$create__());
  for (let i = 0; i < number_1; i = i + 1 | 0) {
   let repository = Repository.$create__();
   repository.f_id__org_patternfly_showcase_model_Repository = Id.m_uuid__java_lang_String();
   repository.f_name__org_patternfly_showcase_model_Repository = j_l_String.m_valueOf__java_lang_Object__java_lang_String(LoremIpsum.m_word__java_lang_String()) + '/' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(LoremIpsum.m_word__java_lang_String());
   repository.f_branches__org_patternfly_showcase_model_Repository = 1 + Random.$create__().m_nextInt__int__int(10) | 0;
   repository.f_pullRequests__org_patternfly_showcase_model_Repository = 5 + Random.$create__().m_nextInt__int__int(50) | 0;
   repository.f_workspaces__org_patternfly_showcase_model_Repository = 1 + Random.$create__().m_nextInt__int__int(5) | 0;
   let start = Date.now() - Repositories.f_DELTAS__org_patternfly_showcase_model_Repositories_[Random.$create__().m_nextInt__int__int(Repositories.f_DELTAS__org_patternfly_showcase_model_Repositories_.length)];
   repository.f_lastCommit__org_patternfly_showcase_model_Repository = new Date(start + Math.random() * (Date.now() - start));
   repository.f_extraData__org_patternfly_showcase_model_Repository = LoremIpsum.m_paragraphs__int__java_lang_String(10);
   repositories.add(repository);
   if (level < levels) {
    repository.f_children__org_patternfly_showcase_model_Repository = Repositories.m_repositories__int__int__int__java_util_List(Random.$create__().m_nextInt__int__int(8), level + 1 | 0, levels);
   }
  }
  return repositories;
 }
 /** @nodts */
 static $clinit() {
  Repositories.$clinit = () =>{};
  Repositories.$loadModules();
  j_l_Object.$clinit();
  Repositories.f_DELTAS__org_patternfly_showcase_model_Repositories_ = (/**@type {!Array<number>}*/ ($Arrays.$stampType([Repositories.f_ONE_MONTH__org_patternfly_showcase_model_Repositories_, Repositories.f_ONE_WEEK__org_patternfly_showcase_model_Repositories_, Repositories.f_ONE_DAY__org_patternfly_showcase_model_Repositories_], $double)));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Repositories;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Random = goog.module.get('java.util.Random$impl');
  $double = goog.module.get('javaemul.internal.primitives.$double$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  LoremIpsum = goog.module.get('org.patternfly.showcase.LoremIpsum$impl');
  Repository = goog.module.get('org.patternfly.showcase.model.Repository$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {number} @nodts*/
Repositories.f_ONE_MONTH__org_patternfly_showcase_model_Repositories_ = 2.629746E9;
/**@const {number} @nodts*/
Repositories.f_ONE_WEEK__org_patternfly_showcase_model_Repositories_ = 604800000;
/**@const {number} @nodts*/
Repositories.f_ONE_DAY__org_patternfly_showcase_model_Repositories_ = 86400000;
/**@type {Array<number>} @nodts*/
Repositories.f_DELTAS__org_patternfly_showcase_model_Repositories_;
$Util.$setClassMetadata(Repositories, 'org.patternfly.showcase.model.Repositories');

exports = Repositories;

//# sourceMappingURL=Repositories.js.map
