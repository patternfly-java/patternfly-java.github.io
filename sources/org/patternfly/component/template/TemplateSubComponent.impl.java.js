goog.module('org.patternfly.component.template.TemplateSubComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');

/**
 * @abstract
 * @template E, B
 * @extends {SubComponent<E, B>}
 */
class TemplateSubComponent extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__org_patternfly_component_template_TemplateSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(/** ?string */ subComponentId, /** ?string */ subComponentName, /** E */ element) {
  this.$ctor__org_patternfly_component_SubComponent__org_patternfly_component_ComponentType__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(ComponentType.f__Template__org_patternfly_component_ComponentType, subComponentId, subComponentName, element);
 }
 /** @nodts */
 static $clinit() {
  TemplateSubComponent.$clinit = () =>{};
  TemplateSubComponent.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TemplateSubComponent;
 }
 /** @abstract @override @nodts @return {B} */
 m_that__org_jboss_elemento_TypedBuilder() {}
 
 /** @nodts */
 static $loadModules() {
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
 }
}
$Util.$setClassMetadata(TemplateSubComponent, 'org.patternfly.component.template.TemplateSubComponent');

exports = TemplateSubComponent;

//# sourceMappingURL=TemplateSubComponent.js.map
