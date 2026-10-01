goog.module('org.patternfly.extension.finder.ResolvedFinderSegment$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let FinderColumn = goog.forwardDeclare('org.patternfly.extension.finder.FinderColumn$impl');
let FinderItem = goog.forwardDeclare('org.patternfly.extension.finder.FinderItem$impl');

class ResolvedFinderSegment extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {FinderColumn} @nodts*/
  this.f_column__org_patternfly_extension_finder_ResolvedFinderSegment;
  /**@type {FinderItem} @nodts*/
  this.f_item__org_patternfly_extension_finder_ResolvedFinderSegment;
 }
 /** @nodts @return {!ResolvedFinderSegment} */
 static $create__org_patternfly_extension_finder_FinderColumn__org_patternfly_extension_finder_FinderItem(/** FinderColumn */ column, /** FinderItem */ item) {
  ResolvedFinderSegment.$clinit();
  let $instance = new ResolvedFinderSegment();
  $instance.$ctor__org_patternfly_extension_finder_ResolvedFinderSegment__org_patternfly_extension_finder_FinderColumn__org_patternfly_extension_finder_FinderItem__void(column, item);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_extension_finder_ResolvedFinderSegment__org_patternfly_extension_finder_FinderColumn__org_patternfly_extension_finder_FinderItem__void(/** FinderColumn */ column, /** FinderItem */ item) {
  this.$ctor__java_lang_Object__void();
  this.f_column__org_patternfly_extension_finder_ResolvedFinderSegment = column;
  this.f_item__org_patternfly_extension_finder_ResolvedFinderSegment = item;
 }
 /** @override @return {?string} */
 toString() {
  if (!$Equality.$same(this.f_item__org_patternfly_extension_finder_ResolvedFinderSegment, null)) {
   return j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_column__org_patternfly_extension_finder_ResolvedFinderSegment.m_identifier__java_lang_String()) + '=' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_item__org_patternfly_extension_finder_ResolvedFinderSegment.m_identifier__java_lang_String());
  }
  return this.f_column__org_patternfly_extension_finder_ResolvedFinderSegment.m_identifier__java_lang_String();
 }
 /** @nodts */
 static $clinit() {
  ResolvedFinderSegment.$clinit = () =>{};
  ResolvedFinderSegment.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ResolvedFinderSegment;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
$Util.$setClassMetadata(ResolvedFinderSegment, 'org.patternfly.extension.finder.ResolvedFinderSegment');

exports = ResolvedFinderSegment;

//# sourceMappingURL=ResolvedFinderSegment.js.map
