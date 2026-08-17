goog.module('org.patternfly.style.VariableAssignments$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Tuple = goog.forwardDeclare('org.patternfly.core.Tuple$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let TypedModifier = goog.forwardDeclare('org.patternfly.style.TypedModifier$impl');
let Variable = goog.forwardDeclare('org.patternfly.style.Variable$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class VariableAssignments extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!VariableAssignments} */
 static $create__() {
  VariableAssignments.$clinit();
  let $instance = new VariableAssignments();
  $instance.$ctor__org_patternfly_style_VariableAssignments__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_style_VariableAssignments__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {?string} */
 static m_propertyName__org_patternfly_style_Variable__org_patternfly_style_Breakpoint__java_lang_String(/** Variable */ variable, /** Breakpoint */ breakpoint) {
  VariableAssignments.$clinit();
  return $Equality.$same(breakpoint, Breakpoint.f_default___org_patternfly_style_Breakpoint) ? variable.f_name__org_patternfly_style_Variable : j_l_String.m_valueOf__java_lang_Object__java_lang_String(variable.f_name__org_patternfly_style_Variable) + '-on-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(breakpoint.f_value__org_patternfly_style_Breakpoint);
 }
 /** @nodts @template V @return {j_u_function_Function<V, ?string>} */
 static m_resolveStringValue__org_patternfly_style_Breakpoints__java_util_function_Function__java_util_function_Function(/** Breakpoints<V> */ breakpoints, /** j_u_function_Function<V, ?string> */ explicit) {
  VariableAssignments.$clinit();
  if (!$Equality.$same(explicit, null)) {
   return explicit;
  }
  if (breakpoints.m_typedModifier__boolean_$pp_org_patternfly_style()) {
   return j_u_function_Function.$adapt(/**  @return {?string}*/ ((/** V */ v) =>{
    return (/**@type {TypedModifier}*/ ($Casts.$to(v, /**@type {Function}*/ (TypedModifier)))).m_value__java_lang_String();
   }));
  }
  return j_u_function_Function.$adapt(/**  @return {?string}*/ ((/** V */ arg0) =>{
   return j_l_String.m_valueOf__java_lang_Object__java_lang_String(arg0);
  }));
 }
 /** @nodts @template V */
 static m_applyBreakpoints__org_patternfly_style_Variable__org_patternfly_style_Breakpoints__java_util_function_Function__java_util_function_BiConsumer__void(/** Variable */ variable, /** Breakpoints<V> */ breakpoints, /** j_u_function_Function<V, ?string> */ stringValue, /** BiConsumer<?string, ?string> */ applier) {
  VariableAssignments.$clinit();
  if (variable.f_valid__org_patternfly_style_Variable && !$Equality.$same(breakpoints, null) && !breakpoints.m_isEmpty__boolean()) {
   let fn = /**@type {j_u_function_Function<V, ?string>}*/ (VariableAssignments.m_resolveStringValue__org_patternfly_style_Breakpoints__java_util_function_Function__java_util_function_Function(breakpoints, stringValue));
   for (let $iterator = breakpoints.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
    let breakpoint = /**@type {Tuple<Breakpoint, V>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tuple));
    {
     applier.m_accept__java_lang_Object__java_lang_Object__void(VariableAssignments.m_propertyName__org_patternfly_style_Variable__org_patternfly_style_Breakpoint__java_lang_String(variable, /**@type {Breakpoint}*/ ($Casts.$to(breakpoint.f_key__org_patternfly_core_Tuple, Breakpoint))), /**@type {?string}*/ ($Casts.$to(fn.m_apply__java_lang_Object__java_lang_Object(breakpoint.f_value__org_patternfly_core_Tuple), j_l_String)));
    }
   }
  }
 }
 /** @nodts */
 static $clinit() {
  VariableAssignments.$clinit = () =>{};
  VariableAssignments.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof VariableAssignments;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Tuple = goog.module.get('org.patternfly.core.Tuple$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  TypedModifier = goog.module.get('org.patternfly.style.TypedModifier$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(VariableAssignments, 'org.patternfly.style.VariableAssignments');

exports = VariableAssignments;

//# sourceMappingURL=VariableAssignments.js.map
