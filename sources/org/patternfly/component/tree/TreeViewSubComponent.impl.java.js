goog.module('org.patternfly.component.tree.TreeViewSubComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');

/**
 * @abstract
 * @template E, B
 * @extends {SubComponent<E, B>}
 */
class TreeViewSubComponent extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__org_patternfly_component_tree_TreeViewSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(/** ?string */ subComponentId, /** ?string */ subComponentName, /** E */ element) {
  this.$ctor__org_patternfly_component_SubComponent__org_patternfly_component_ComponentType__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(ComponentType.f_TreeView__org_patternfly_component_ComponentType, subComponentId, subComponentName, element);
 }
 /** @nodts */
 static $clinit() {
  TreeViewSubComponent.$clinit = () =>{};
  TreeViewSubComponent.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TreeViewSubComponent;
 }
 /** @abstract @override @nodts @return {B} */
 m_that__org_jboss_elemento_TypedBuilder() {}
 
 /** @nodts */
 static $loadModules() {
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
 }
}
$Util.$setClassMetadata(TreeViewSubComponent, 'org.patternfly.component.tree.TreeViewSubComponent');

exports = TreeViewSubComponent;

//# sourceMappingURL=TreeViewSubComponent.js.map
