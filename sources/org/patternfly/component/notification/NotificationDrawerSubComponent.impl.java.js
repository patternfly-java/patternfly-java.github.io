goog.module('org.patternfly.component.notification.NotificationDrawerSubComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');

/**
 * @abstract
 * @template E, B
 * @extends {SubComponent<E, B>}
 */
class NotificationDrawerSubComponent extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__org_patternfly_component_notification_NotificationDrawerSubComponent__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(/** ?string */ subComponentId, /** ?string */ subComponentName, /** E */ element) {
  this.$ctor__org_patternfly_component_SubComponent__org_patternfly_component_ComponentType__java_lang_String__java_lang_String__elemental2_dom_HTMLElement__void(ComponentType.f_NotificationDrawer__org_patternfly_component_ComponentType, subComponentId, subComponentName, element);
 }
 /** @nodts */
 static $clinit() {
  NotificationDrawerSubComponent.$clinit = () =>{};
  NotificationDrawerSubComponent.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NotificationDrawerSubComponent;
 }
 /** @abstract @override @nodts @return {B} */
 m_that__org_jboss_elemento_TypedBuilder() {}
 
 /** @nodts */
 static $loadModules() {
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
 }
}
$Util.$setClassMetadata(NotificationDrawerSubComponent, 'org.patternfly.component.notification.NotificationDrawerSubComponent');

exports = NotificationDrawerSubComponent;

//# sourceMappingURL=NotificationDrawerSubComponent.js.map
