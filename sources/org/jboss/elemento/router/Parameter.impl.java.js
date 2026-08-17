goog.module('org.jboss.elemento.router.Parameter$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Exceptions = goog.forwardDeclare('javaemul.internal.Exceptions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JsUrlEncoder = goog.forwardDeclare('org.jboss.elemento.router.JsUrlEncoder$impl');
let Path = goog.forwardDeclare('org.jboss.elemento.router.Path$impl');
let UrlEncoder = goog.forwardDeclare('org.jboss.elemento.router.UrlEncoder$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Parameter extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Map<?string, ?string>} @nodts*/
  this.f_params__org_jboss_elemento_router_Parameter_;
  /**@type {Map<?string, ?string>} @nodts*/
  this.f_rawParams__org_jboss_elemento_router_Parameter_;
  /**@type {?string} @nodts*/
  this.f_path__org_jboss_elemento_router_Parameter_;
 }
 /** @nodts @return {?string} */
 static m_encode__java_lang_String__java_lang_String(/** ?string */ value) {
  Parameter.$clinit();
  if ($Equality.$same(value, null)) {
   throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(IllegalArgumentException.$create__java_lang_String('Value must not be null'));
  }
  return Parameter.$static_encoder__org_jboss_elemento_router_Parameter.m_encode__java_lang_String__java_lang_String(value);
 }
 /** @nodts @return {?string} */
 static m_decode__java_lang_String__java_lang_String(/** ?string */ value) {
  Parameter.$clinit();
  if ($Equality.$same(value, null)) {
   throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(IllegalArgumentException.$create__java_lang_String('Value must not be null'));
  }
  return Parameter.$static_encoder__org_jboss_elemento_router_Parameter.m_decode__java_lang_String__java_lang_String(value);
 }
 /** @nodts @return {?string} */
 static m_encodePath__java_lang_String__arrayOf_java_lang_String__java_lang_String(/** ?string */ route, /** Array<?string> */ values) {
  Parameter.$clinit();
  if ($Equality.$same(route, null)) {
   throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(IllegalArgumentException.$create__java_lang_String('Route must not be null'));
  }
  let normalizedRoute = Path.m_normalize__java_lang_String__java_lang_String(route);
  let parts = Path.m_split__java_lang_String__arrayOf_java_lang_String(normalizedRoute);
  let requiredParamIndices = /**@type {!ArrayList<Integer>}*/ (ArrayList.$create__());
  let optionalParamIndices = /**@type {!ArrayList<Integer>}*/ (ArrayList.$create__());
  for (let i = 0; i < parts.length; i = i + 1 | 0) {
   if (Parameter.m_isOptionalParameter__java_lang_String__boolean(parts[i])) {
    optionalParamIndices.add(Integer.valueOf(i));
   } else if (Parameter.m_isParameter__java_lang_String__boolean(parts[i])) {
    requiredParamIndices.add(Integer.valueOf(i));
   }
  }
  let requiredCount = requiredParamIndices.size();
  let totalParamCount = requiredCount + optionalParamIndices.size() | 0;
  let valueCount = $Equality.$same(values, null) ? 0 : values.length;
  if (valueCount < requiredCount || valueCount > totalParamCount) {
   throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(IllegalArgumentException.$create__java_lang_String('Expected ' + requiredCount + ' to ' + totalParamCount + ' parameter value(s), but got ' + valueCount));
  }
  if (totalParamCount == 0) {
   return normalizedRoute;
  }
  for (let i_1 = 0; i_1 < valueCount; i_1 = i_1 + 1 | 0) {
   if (i_1 < requiredCount && $Equality.$same(values[i_1], null)) {
    throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(IllegalArgumentException.$create__java_lang_String('Required parameter values must not be null'));
   }
  }
  let allParamIndices = /**@type {!ArrayList<Integer>}*/ (ArrayList.$create__java_util_Collection(requiredParamIndices));
  allParamIndices.addAll(optionalParamIndices);
  allParamIndices.m_sort__java_util_Comparator__void(Comparator.$adapt(/**  @return {number}*/ ((/** Integer */ arg0, /** Integer */ arg1) =>{
   let arg0_1 = /**@type {Integer}*/ ($Casts.$to(arg0, Integer));
   let arg1_1 = /**@type {Integer}*/ ($Casts.$to(arg1, Integer));
   return arg0_1.m_compareTo__java_lang_Integer__int(arg1_1);
  })));
  let suppliedOptionalCount = valueCount - requiredCount | 0;
  let totalSegments = parts.length - (optionalParamIndices.size() - suppliedOptionalCount) | 0;
  let result = /**@type {!Array<?string>}*/ ($Arrays.$create([totalSegments], j_l_String));
  let valueIdx = 0;
  let resultIdx = 0;
  for (let i_2 = 0; i_2 < parts.length && resultIdx < totalSegments; i_2 = i_2 + 1 | 0) {
   if (Parameter.m_isParameter__java_lang_String__boolean(parts[i_2])) {
    if (valueIdx < valueCount) {
     $Arrays.$set(result, resultIdx, Parameter.m_encode__java_lang_String__java_lang_String(values[valueIdx]));
     valueIdx = valueIdx + 1 | 0;
     resultIdx = resultIdx + 1 | 0;
    }
   } else {
    $Arrays.$set(result, resultIdx, parts[i_2]);
    resultIdx = resultIdx + 1 | 0;
   }
  }
  return '/' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.m_join__java_lang_CharSequence__arrayOf_java_lang_CharSequence__java_lang_String('/', result));
 }
 /** @nodts @return {boolean} */
 static m_isParameter__java_lang_String__boolean(/** ?string */ value) {
  Parameter.$clinit();
  if ($Equality.$same(value, null) || j_l_String.m_length__java_lang_String__int(value) < 2 || !j_l_String.m_startsWith__java_lang_String__java_lang_String__boolean(value, ':')) {
   return false;
  }
  let rest = j_l_String.m_endsWith__java_lang_String__java_lang_String__boolean(value, '?') ? j_l_String.m_substring__java_lang_String__int__int__java_lang_String(value, 1, j_l_String.m_length__java_lang_String__int(value) - 1 | 0) : j_l_String.m_substring__java_lang_String__int__java_lang_String(value, 1);
  return !j_l_String.m_isEmpty__java_lang_String__boolean(rest) && !j_l_String.m_startsWith__java_lang_String__java_lang_String__boolean(rest, ':');
 }
 /** @nodts @return {boolean} */
 static m_isOptionalParameter__java_lang_String__boolean(/** ?string */ value) {
  Parameter.$clinit();
  return !$Equality.$same(value, null) && j_l_String.m_endsWith__java_lang_String__java_lang_String__boolean(value, '?') && j_l_String.m_length__java_lang_String__int(value) > 2 && Parameter.m_isParameter__java_lang_String__boolean(value);
 }
 /** @nodts @return {?string} */
 static m_parameterName__java_lang_String__java_lang_String(/** ?string */ segment) {
  Parameter.$clinit();
  if (Parameter.m_isOptionalParameter__java_lang_String__boolean(segment)) {
   return j_l_String.m_substring__java_lang_String__int__int__java_lang_String(segment, 1, j_l_String.m_length__java_lang_String__int(segment) - 1 | 0);
  } else if (Parameter.m_isParameter__java_lang_String__boolean(segment)) {
   return j_l_String.m_substring__java_lang_String__int__java_lang_String(segment, 1);
  }
  return null;
 }
 /** @nodts @return {boolean} */
 static m_hasParameter__java_lang_String__boolean(/** ?string */ route) {
  Parameter.$clinit();
  if (!$Equality.$same(route, null) && !j_l_String.m_isEmpty__java_lang_String__boolean(route)) {
   if (j_l_String.m_contains__java_lang_String__java_lang_CharSequence__boolean(route, '/')) {
    let parts = j_l_String.m_split__java_lang_String__java_lang_String__arrayOf_java_lang_String(route, '/');
    for (let $array = parts, $index = 0; $index < $array.length; $index++) {
     let part = $array[$index];
     {
      if (Parameter.m_isParameter__java_lang_String__boolean(part)) {
       return true;
      }
     }
    }
   } else {
    return Parameter.m_isParameter__java_lang_String__boolean(route);
   }
  }
  return false;
 }
 /** @nodts @return {boolean} */
 static m_hasOptionalParameter__java_lang_String__boolean(/** ?string */ route) {
  Parameter.$clinit();
  if (!$Equality.$same(route, null) && !j_l_String.m_isEmpty__java_lang_String__boolean(route)) {
   if (j_l_String.m_contains__java_lang_String__java_lang_CharSequence__boolean(route, '/')) {
    let parts = j_l_String.m_split__java_lang_String__java_lang_String__arrayOf_java_lang_String(route, '/');
    for (let $array = parts, $index = 0; $index < $array.length; $index++) {
     let part = $array[$index];
     {
      if (Parameter.m_isOptionalParameter__java_lang_String__boolean(part)) {
       return true;
      }
     }
    }
   } else {
    return Parameter.m_isOptionalParameter__java_lang_String__boolean(route);
   }
  }
  return false;
 }
 /** @nodts */
 static m_validateOptionalParameters__java_lang_String__void(/** ?string */ route) {
  Parameter.$clinit();
  if (!$Equality.$same(route, null) && !j_l_String.m_isEmpty__java_lang_String__boolean(route)) {
   let parts = Path.m_split__java_lang_String__arrayOf_java_lang_String(route);
   let seenOptional = false;
   for (let $array = parts, $index = 0; $index < $array.length; $index++) {
    let part = $array[$index];
    {
     if (Parameter.m_isOptionalParameter__java_lang_String__boolean(part)) {
      seenOptional = true;
     } else if (seenOptional) {
      throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(IllegalArgumentException.$create__java_lang_String('Optional parameters must be trailing. Found non-optional segment \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(part) + '\' after optional parameter in route \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(route) + '\''));
     }
    }
   }
  }
 }
 /** @nodts @return {?string} */
 static m_stripOptionalParameters__java_lang_String__java_lang_String(/** ?string */ route) {
  Parameter.$clinit();
  let parts = Path.m_split__java_lang_String__arrayOf_java_lang_String(route);
  let sb = StringBuilder.$create__();
  for (let $array = parts, $index = 0; $index < $array.length; $index++) {
   let part = $array[$index];
   {
    if (!Parameter.m_isOptionalParameter__java_lang_String__boolean(part)) {
     sb.m_append__char__java_lang_StringBuilder(47 /* '/' */).m_append__java_lang_String__java_lang_StringBuilder(part);
    }
   }
  }
  return sb.m_length__int() == 0 ? '/' : sb.toString();
 }
 /** @nodts @return {boolean} */
 static m_match__java_lang_String__java_lang_String__boolean(/** ?string */ route, /** ?string */ path) {
  Parameter.$clinit();
  if (!$Equality.$same(route, null) && !$Equality.$same(path, null)) {
   let routeParts = Path.m_split__java_lang_String__arrayOf_java_lang_String(route);
   let pathParts = Path.m_split__java_lang_String__arrayOf_java_lang_String(path);
   let requiredCount = 0;
   for (let $array = routeParts, $index = 0; $index < $array.length; $index++) {
    let rp = $array[$index];
    {
     if (!Parameter.m_isOptionalParameter__java_lang_String__boolean(rp)) {
      requiredCount = requiredCount + 1 | 0;
     }
    }
   }
   if (pathParts.length < requiredCount || pathParts.length > routeParts.length) {
    return false;
   }
   for (let i = 0; i < pathParts.length; i = i + 1 | 0) {
    if (!Parameter.m_isParameter__java_lang_String__boolean(routeParts[i])) {
     if (!j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(routeParts[i], pathParts[i])) {
      return false;
     }
    }
   }
   for (let i_1 = pathParts.length; i_1 < routeParts.length; i_1 = i_1 + 1 | 0) {
    if (!Parameter.m_isOptionalParameter__java_lang_String__boolean(routeParts[i_1])) {
     return false;
    }
   }
   return true;
  }
  return false;
 }
 /** @nodts @return {!Parameter} */
 static $create__java_lang_String__java_lang_String(/** ?string */ route, /** ?string */ path) {
  Parameter.$clinit();
  let $instance = new Parameter();
  $instance.$ctor__org_jboss_elemento_router_Parameter__java_lang_String__java_lang_String__void(route, path);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_router_Parameter__java_lang_String__java_lang_String__void(/** ?string */ route, /** ?string */ path) {
  this.$ctor__java_lang_Object__void();
  this.f_path__org_jboss_elemento_router_Parameter_ = path;
  if (Parameter.m_match__java_lang_String__java_lang_String__boolean(route, path)) {
   this.f_params__org_jboss_elemento_router_Parameter_ = (/**@type {!HashMap<?string, ?string>}*/ (HashMap.$create__()));
   this.f_rawParams__org_jboss_elemento_router_Parameter_ = (/**@type {!HashMap<?string, ?string>}*/ (HashMap.$create__()));
   let routeParts = Path.m_split__java_lang_String__arrayOf_java_lang_String(route);
   let pathParts = Path.m_split__java_lang_String__arrayOf_java_lang_String(path);
   for (let i = 0; i < pathParts.length; i = i + 1 | 0) {
    if (Parameter.m_isParameter__java_lang_String__boolean(routeParts[i])) {
     let name = Parameter.m_parameterName__java_lang_String__java_lang_String(routeParts[i]);
     let rawValue = pathParts[i];
     this.f_rawParams__org_jboss_elemento_router_Parameter_.put(name, rawValue);
     this.f_params__org_jboss_elemento_router_Parameter_.put(name, Parameter.$static_encoder__org_jboss_elemento_router_Parameter.m_decode__java_lang_String__java_lang_String(rawValue));
    }
   }
  } else {
   this.f_params__org_jboss_elemento_router_Parameter_ = (/**@type {Map<?string, ?string>}*/ (Collections.m_emptyMap__java_util_Map()));
   this.f_rawParams__org_jboss_elemento_router_Parameter_ = (/**@type {Map<?string, ?string>}*/ (Collections.m_emptyMap__java_util_Map()));
  }
 }
 /** @nodts @return {boolean} */
 m_isEmpty__boolean() {
  return this.f_params__org_jboss_elemento_router_Parameter_.isEmpty();
 }
 /** @nodts @return {boolean} */
 m_has__java_lang_String__boolean(/** ?string */ name) {
  return this.f_params__org_jboss_elemento_router_Parameter_.containsKey(name);
 }
 /** @nodts @return {?string} */
 m_get__java_lang_String__java_lang_String(/** ?string */ name) {
  return /**@type {?string}*/ ($Casts.$to(this.f_params__org_jboss_elemento_router_Parameter_.get(name), j_l_String));
 }
 /** @nodts @return {?string} */
 m_getOrDefault__java_lang_String__java_lang_String__java_lang_String(/** ?string */ name, /** ?string */ defaultValue) {
  return /**@type {?string}*/ ($Casts.$to(this.f_params__org_jboss_elemento_router_Parameter_.getOrDefault(name, defaultValue), j_l_String));
 }
 /** @nodts @return {?string} */
 m_getRaw__java_lang_String__java_lang_String(/** ?string */ name) {
  return /**@type {?string}*/ ($Casts.$to(this.f_rawParams__org_jboss_elemento_router_Parameter_.get(name), j_l_String));
 }
 /** @nodts @return {?string} */
 m_path__java_lang_String() {
  return this.f_path__org_jboss_elemento_router_Parameter_;
 }
 /** @nodts @return {UrlEncoder} */
 static get f_encoder__org_jboss_elemento_router_Parameter() {
  return (Parameter.$clinit(), Parameter.$static_encoder__org_jboss_elemento_router_Parameter);
 }
 /** @nodts */
 static set f_encoder__org_jboss_elemento_router_Parameter(/** UrlEncoder */ value) {
  (Parameter.$clinit(), Parameter.$static_encoder__org_jboss_elemento_router_Parameter = value);
 }
 /** @nodts @return {Parameter} */
 static get f_EMPTY__org_jboss_elemento_router_Parameter() {
  return (Parameter.$clinit(), Parameter.$static_EMPTY__org_jboss_elemento_router_Parameter);
 }
 /** @nodts */
 static $clinit() {
  Parameter.$clinit = () =>{};
  Parameter.$loadModules();
  j_l_Object.$clinit();
  Parameter.$static_encoder__org_jboss_elemento_router_Parameter = JsUrlEncoder.$create__();
  Parameter.$static_EMPTY__org_jboss_elemento_router_Parameter = Parameter.$create__java_lang_String__java_lang_String(null, null);
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Parameter;
 }
 
 /** @nodts */
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  Comparator = goog.module.get('java.util.Comparator$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Exceptions = goog.module.get('javaemul.internal.Exceptions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  JsUrlEncoder = goog.module.get('org.jboss.elemento.router.JsUrlEncoder$impl');
  Path = goog.module.get('org.jboss.elemento.router.Path$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {UrlEncoder} @nodts*/
Parameter.$static_encoder__org_jboss_elemento_router_Parameter;
/**@private {Parameter} @nodts*/
Parameter.$static_EMPTY__org_jboss_elemento_router_Parameter;
$Util.$setClassMetadata(Parameter, 'org.jboss.elemento.router.Parameter');

exports = Parameter;

//# sourceMappingURL=Parameter.js.map
