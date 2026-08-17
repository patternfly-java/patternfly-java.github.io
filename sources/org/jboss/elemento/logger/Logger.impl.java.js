goog.module('org.jboss.elemento.logger.Logger$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let Exceptions = goog.forwardDeclare('javaemul.internal.Exceptions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Category = goog.forwardDeclare('org.jboss.elemento.logger.Category$impl');
let Level = goog.forwardDeclare('org.jboss.elemento.logger.Level$impl');
let LevelOverrides = goog.forwardDeclare('org.jboss.elemento.logger.LevelOverrides$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Logger extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_formattedCategory__org_jboss_elemento_logger_Logger_;
  /**@type {Level} @nodts*/
  this.f_customLevel__org_jboss_elemento_logger_Logger_;
 }
 /** @nodts */
 static m_initFrom__elemental2_dom_Location__void(/** Location */ location) {
  Logger.$clinit();
  Logger.m_initFrom__elemental2_dom_Location__java_lang_String__void(location, Logger.f_LOG_LEVEL_PARAMETER__org_jboss_elemento_logger_Logger);
 }
 /** @nodts */
 static m_initFrom__elemental2_dom_Location__java_lang_String__void(/** Location */ location, /** ?string */ queryParameter) {
  Logger.$clinit();
  if (!j_l_String.m_isEmpty__java_lang_String__boolean(location.search)) {
   let query = new URLSearchParams(location.search);
   if (query.has(Logger.f_LOG_LEVEL_PARAMETER__org_jboss_elemento_logger_Logger)) {
    let logLevel = query.get(queryParameter);
    try {
     let level = Level.m_valueOf__java_lang_String__org_jboss_elemento_logger_Level(j_l_String.m_toUpperCase__java_lang_String__java_lang_String(logLevel));
     Logger.m_setLevel__org_jboss_elemento_logger_Level__void(level);
    } catch (__$jsexc) {
     let __$exc = Exceptions.m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(__$jsexc);
     if (IllegalArgumentException.$isInstance(__$exc)) {
      let e = /**@type {IllegalArgumentException}*/ (__$exc);
      goog.global.console.error('Cannot init log level from query parameter \'%s\'. Invalid level: \'%s\'', queryParameter, Logger.$static_level__org_jboss_elemento_logger_Logger);
     } else {
      throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(__$exc);
     }
    }
   }
  }
 }
 /** @nodts @return {Logger} */
 static m_getLogger__java_lang_String__org_jboss_elemento_logger_Logger(/** ?string */ category) {
  Logger.$clinit();
  let /** Logger */ logger;
  if ($Equality.$same(category, null) || j_l_String.m_isEmpty__java_lang_String__boolean(category)) {
   logger = Logger.f_ROOT_LOGGER__org_jboss_elemento_logger_Logger_;
  } else {
   logger = (/**@type {Logger}*/ ($Casts.$to(Logger.$static_loggers__org_jboss_elemento_logger_Logger.get(category), Logger)));
   if ($Equality.$same(logger, null)) {
    logger = Logger.$create__java_lang_String(category);
    Logger.$static_loggers__org_jboss_elemento_logger_Logger.put(category, logger);
    Logger.m_applyOverrides__void();
   }
  }
  return logger;
 }
 /** @nodts */
 static m_setLevel__org_jboss_elemento_logger_Level__void(/** Level */ level) {
  Logger.$clinit();
  Logger.$static_level__org_jboss_elemento_logger_Logger = level;
  goog.global.console.info('Set global log level to %s', level.name());
 }
 /** @nodts */
 static m_setLevel__java_lang_String__org_jboss_elemento_logger_Level__void(/** ?string */ category, /** Level */ level) {
  Logger.$clinit();
  Logger.$static_levelOverrides__org_jboss_elemento_logger_Logger.m_addLevel__java_lang_String__org_jboss_elemento_logger_Level__void_$pp_org_jboss_elemento_logger(category, level);
  Logger.m_applyOverrides__void();
  goog.global.console.info('Set log level for %s to %s', category, level.name());
 }
 
 static resetLevel(/** ?string */ category) {
  Logger.$clinit();
  Logger.$static_levelOverrides__org_jboss_elemento_logger_Logger.m_removeLevel__java_lang_String__void_$pp_org_jboss_elemento_logger(category);
  Logger.m_applyOverrides__void();
  goog.global.console.info('Log level for %s has been reset to global log level (%s)', category, Logger.$static_level__org_jboss_elemento_logger_Logger.name());
 }
 
 static setLevel(/** ?string */ category, /** ?string */ level) {
  Logger.$clinit();
  if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(typeof(level), 'undefined')) {
   try {
    Logger.m_setLevel__org_jboss_elemento_logger_Level__void(Level.m_valueOf__java_lang_String__org_jboss_elemento_logger_Level(j_l_String.m_toUpperCase__java_lang_String__java_lang_String(category)));
   } catch (__$jsexc) {
    let __$exc = Exceptions.m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(__$jsexc);
    if (IllegalArgumentException.$isInstance(__$exc)) {
     let e = /**@type {IllegalArgumentException}*/ (__$exc);
     goog.global.console.error('Cannot set global log level. Invalid level: \'%s\'', category);
    } else {
     throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(__$exc);
    }
   }
  } else {
   try {
    Logger.m_setLevel__java_lang_String__org_jboss_elemento_logger_Level__void(category, Level.m_valueOf__java_lang_String__org_jboss_elemento_logger_Level(j_l_String.m_toUpperCase__java_lang_String__java_lang_String(level)));
   } catch (__$jsexc_1) {
    let __$exc_1 = Exceptions.m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(__$jsexc_1);
    if (IllegalArgumentException.$isInstance(__$exc_1)) {
     let e_1 = /**@type {IllegalArgumentException}*/ (__$exc_1);
     goog.global.console.error('Cannot set log level for \'%s\'. Invalid level: \'%s\'', category, level);
    } else {
     throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(__$exc_1);
    }
   }
  }
 }
 /** @nodts */
 static m_applyOverrides__void() {
  for (let $iterator = Logger.$static_loggers__org_jboss_elemento_logger_Logger.entrySet().m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let entry = /**@type {Entry<?string, Logger>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), /**@type {Function}*/ (Entry)));
   {
    let category = /**@type {?string}*/ ($Casts.$to(entry.getKey(), j_l_String));
    let logger = /**@type {Logger}*/ ($Casts.$to(entry.getValue(), Logger));
    logger.f_customLevel__org_jboss_elemento_logger_Logger_ = Logger.$static_levelOverrides__org_jboss_elemento_logger_Logger.m_overriddenLevel__java_lang_String__org_jboss_elemento_logger_Level_$pp_org_jboss_elemento_logger(category);
   }
  }
 }
 /** @nodts @return {!Logger} */
 static $create__java_lang_String(/** ?string */ category) {
  let $instance = new Logger();
  $instance.$ctor__org_jboss_elemento_logger_Logger__java_lang_String__void(category);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_logger_Logger__java_lang_String__void(/** ?string */ category) {
  this.$ctor__java_lang_Object__void();
  this.f_formattedCategory__org_jboss_elemento_logger_Logger_ = Category.m_format__java_lang_String__int__java_lang_String(category, Logger.f_CATEGORY_LENGTH__org_jboss_elemento_logger_Logger_);
  this.f_customLevel__org_jboss_elemento_logger_Logger_ = null;
 }
 /** @nodts */
 m_debug__java_lang_String__arrayOf_java_lang_Object__void(/** ?string */ message, /** Array<*> */ params) {
  if (this.m_isEnabled__org_jboss_elemento_logger_Level__boolean(Level.f_DEBUG__org_jboss_elemento_logger_Level)) {
   let formatted = this.m_format__org_jboss_elemento_logger_Level__java_lang_String__java_lang_String_$p_org_jboss_elemento_logger_Logger(Level.f_DEBUG__org_jboss_elemento_logger_Level, message);
   if ($Equality.$same(params, null) || params.length == 0) {
    goog.global.console.debug(formatted);
   } else {
    let p = this.m_adjustParams__arrayOf_java_lang_Object__arrayOf_java_lang_Object_$p_org_jboss_elemento_logger_Logger(params);
    switch (params.length) {
     case 1:
      goog.global.console.debug(formatted, p[0]);
      break;
     case 2:
      goog.global.console.debug(formatted, p[0], p[1]);
      break;
     case 3:
      goog.global.console.debug(formatted, p[0], p[1], p[2]);
      break;
     case 4:
      goog.global.console.debug(formatted, p[0], p[1], p[2], p[3]);
      break;
     case 5:
      goog.global.console.debug(formatted, p[0], p[1], p[2], p[3], p[4]);
      break;
     case 6:
      goog.global.console.debug(formatted, p[0], p[1], p[2], p[3], p[4], p[5]);
      break;
     case 7:
      goog.global.console.debug(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6]);
      break;
     case 8:
      goog.global.console.debug(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7]);
      break;
     case 9:
      goog.global.console.debug(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8]);
      break;
     case 10:
      goog.global.console.debug(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9]);
      break;
     default:
      goog.global.console.debug(formatted, /**@type {Array<*>}*/ (JsArray_$Overlay.m_asJsArray__arrayOf_java_lang_Object__elemental2_core_JsArray(p)));
    }
   }
  }
 }
 /** @nodts */
 m_info__java_lang_String__arrayOf_java_lang_Object__void(/** ?string */ message, /** Array<*> */ params) {
  if (this.m_isEnabled__org_jboss_elemento_logger_Level__boolean(Level.f_INFO__org_jboss_elemento_logger_Level)) {
   let formatted = this.m_format__org_jboss_elemento_logger_Level__java_lang_String__java_lang_String_$p_org_jboss_elemento_logger_Logger(Level.f_INFO__org_jboss_elemento_logger_Level, message);
   if ($Equality.$same(params, null) || params.length == 0) {
    goog.global.console.info(formatted);
   } else {
    let p = this.m_adjustParams__arrayOf_java_lang_Object__arrayOf_java_lang_Object_$p_org_jboss_elemento_logger_Logger(params);
    switch (params.length) {
     case 1:
      goog.global.console.info(formatted, p[0]);
      break;
     case 2:
      goog.global.console.info(formatted, p[0], p[1]);
      break;
     case 3:
      goog.global.console.info(formatted, p[0], p[1], p[2]);
      break;
     case 4:
      goog.global.console.info(formatted, p[0], p[1], p[2], p[3]);
      break;
     case 5:
      goog.global.console.info(formatted, p[0], p[1], p[2], p[3], p[4]);
      break;
     case 6:
      goog.global.console.info(formatted, p[0], p[1], p[2], p[3], p[4], p[5]);
      break;
     case 7:
      goog.global.console.info(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6]);
      break;
     case 8:
      goog.global.console.info(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7]);
      break;
     case 9:
      goog.global.console.info(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8]);
      break;
     case 10:
      goog.global.console.info(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9]);
      break;
     default:
      goog.global.console.info(formatted, /**@type {Array<*>}*/ (JsArray_$Overlay.m_asJsArray__arrayOf_java_lang_Object__elemental2_core_JsArray(p)));
    }
   }
  }
 }
 /** @nodts */
 m_warn__java_lang_String__arrayOf_java_lang_Object__void(/** ?string */ message, /** Array<*> */ params) {
  if (this.m_isEnabled__org_jboss_elemento_logger_Level__boolean(Level.f_WARN__org_jboss_elemento_logger_Level)) {
   let formatted = this.m_format__org_jboss_elemento_logger_Level__java_lang_String__java_lang_String_$p_org_jboss_elemento_logger_Logger(Level.f_WARN__org_jboss_elemento_logger_Level, message);
   if ($Equality.$same(params, null) || params.length == 0) {
    goog.global.console.warn(formatted);
   } else {
    let p = this.m_adjustParams__arrayOf_java_lang_Object__arrayOf_java_lang_Object_$p_org_jboss_elemento_logger_Logger(params);
    switch (params.length) {
     case 1:
      goog.global.console.warn(formatted, p[0]);
      break;
     case 2:
      goog.global.console.warn(formatted, p[0], p[1]);
      break;
     case 3:
      goog.global.console.warn(formatted, p[0], p[1], p[2]);
      break;
     case 4:
      goog.global.console.warn(formatted, p[0], p[1], p[2], p[3]);
      break;
     case 5:
      goog.global.console.warn(formatted, p[0], p[1], p[2], p[3], p[4]);
      break;
     case 6:
      goog.global.console.warn(formatted, p[0], p[1], p[2], p[3], p[4], p[5]);
      break;
     case 7:
      goog.global.console.warn(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6]);
      break;
     case 8:
      goog.global.console.warn(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7]);
      break;
     case 9:
      goog.global.console.warn(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8]);
      break;
     case 10:
      goog.global.console.warn(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9]);
      break;
     default:
      goog.global.console.warn(formatted, /**@type {Array<*>}*/ (JsArray_$Overlay.m_asJsArray__arrayOf_java_lang_Object__elemental2_core_JsArray(p)));
    }
   }
  }
 }
 /** @nodts */
 m_error__java_lang_String__arrayOf_java_lang_Object__void(/** ?string */ message, /** Array<*> */ params) {
  if (this.m_isEnabled__org_jboss_elemento_logger_Level__boolean(Level.f_ERROR__org_jboss_elemento_logger_Level)) {
   let formatted = this.m_format__org_jboss_elemento_logger_Level__java_lang_String__java_lang_String_$p_org_jboss_elemento_logger_Logger(Level.f_ERROR__org_jboss_elemento_logger_Level, message);
   if ($Equality.$same(params, null) || params.length == 0) {
    goog.global.console.error(formatted);
   } else {
    let p = this.m_adjustParams__arrayOf_java_lang_Object__arrayOf_java_lang_Object_$p_org_jboss_elemento_logger_Logger(params);
    switch (params.length) {
     case 1:
      goog.global.console.error(formatted, p[0]);
      break;
     case 2:
      goog.global.console.error(formatted, p[0], p[1]);
      break;
     case 3:
      goog.global.console.error(formatted, p[0], p[1], p[2]);
      break;
     case 4:
      goog.global.console.error(formatted, p[0], p[1], p[2], p[3]);
      break;
     case 5:
      goog.global.console.error(formatted, p[0], p[1], p[2], p[3], p[4]);
      break;
     case 6:
      goog.global.console.error(formatted, p[0], p[1], p[2], p[3], p[4], p[5]);
      break;
     case 7:
      goog.global.console.error(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6]);
      break;
     case 8:
      goog.global.console.error(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7]);
      break;
     case 9:
      goog.global.console.error(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8]);
      break;
     case 10:
      goog.global.console.error(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9]);
      break;
     default:
      goog.global.console.error(formatted, /**@type {Array<*>}*/ (JsArray_$Overlay.m_asJsArray__arrayOf_java_lang_Object__elemental2_core_JsArray(p)));
    }
   }
  }
 }
 /** @nodts @return {boolean} */
 m_isEnabled__org_jboss_elemento_logger_Level__boolean(/** Level */ level) {
  let effectiveLevel = !$Equality.$same(this.f_customLevel__org_jboss_elemento_logger_Logger_, null) ? this.f_customLevel__org_jboss_elemento_logger_Logger_ : Logger.$static_level__org_jboss_elemento_logger_Logger;
  return effectiveLevel.ordinal() >= level.ordinal();
 }
 /** @nodts */
 m_groupDebug__java_lang_String__arrayOf_java_lang_Object__void(/** ?string */ message, /** Array<*> */ params) {
  if (this.m_isEnabled__org_jboss_elemento_logger_Level__boolean(Level.f_DEBUG__org_jboss_elemento_logger_Level)) {
   let formatted = this.m_format__org_jboss_elemento_logger_Level__java_lang_String__java_lang_String_$p_org_jboss_elemento_logger_Logger(Level.f_DEBUG__org_jboss_elemento_logger_Level, message);
   this.m_group__java_lang_String__arrayOf_java_lang_Object__void_$p_org_jboss_elemento_logger_Logger(formatted, params);
  }
 }
 /** @nodts */
 m_groupInfo__java_lang_String__arrayOf_java_lang_Object__void(/** ?string */ message, /** Array<*> */ params) {
  if (this.m_isEnabled__org_jboss_elemento_logger_Level__boolean(Level.f_INFO__org_jboss_elemento_logger_Level)) {
   let formatted = this.m_format__org_jboss_elemento_logger_Level__java_lang_String__java_lang_String_$p_org_jboss_elemento_logger_Logger(Level.f_INFO__org_jboss_elemento_logger_Level, message);
   this.m_group__java_lang_String__arrayOf_java_lang_Object__void_$p_org_jboss_elemento_logger_Logger(formatted, params);
  }
 }
 /** @nodts */
 m_groupWarn__java_lang_String__arrayOf_java_lang_Object__void(/** ?string */ message, /** Array<*> */ params) {
  if (this.m_isEnabled__org_jboss_elemento_logger_Level__boolean(Level.f_WARN__org_jboss_elemento_logger_Level)) {
   let formatted = this.m_format__org_jboss_elemento_logger_Level__java_lang_String__java_lang_String_$p_org_jboss_elemento_logger_Logger(Level.f_WARN__org_jboss_elemento_logger_Level, message);
   this.m_group__java_lang_String__arrayOf_java_lang_Object__void_$p_org_jboss_elemento_logger_Logger(formatted, params);
  }
 }
 /** @nodts */
 m_groupError__java_lang_String__arrayOf_java_lang_Object__void(/** ?string */ message, /** Array<*> */ params) {
  if (this.m_isEnabled__org_jboss_elemento_logger_Level__boolean(Level.f_ERROR__org_jboss_elemento_logger_Level)) {
   let formatted = this.m_format__org_jboss_elemento_logger_Level__java_lang_String__java_lang_String_$p_org_jboss_elemento_logger_Logger(Level.f_ERROR__org_jboss_elemento_logger_Level, message);
   this.m_group__java_lang_String__arrayOf_java_lang_Object__void_$p_org_jboss_elemento_logger_Logger(formatted, params);
  }
 }
 /** @nodts */
 m_groupEnd__void() {
  goog.global.console.groupEnd();
 }
 /** @nodts */
 m_group__java_lang_String__arrayOf_java_lang_Object__void_$p_org_jboss_elemento_logger_Logger(/** ?string */ formatted, /** Array<*> */ params) {
  if ($Equality.$same(params, null) || params.length == 0) {
   goog.global.console.group(formatted);
  } else {
   let p = this.m_adjustParams__arrayOf_java_lang_Object__arrayOf_java_lang_Object_$p_org_jboss_elemento_logger_Logger(params);
   switch (params.length) {
    case 1:
     goog.global.console.group(formatted, p[0]);
     break;
    case 2:
     goog.global.console.group(formatted, p[0], p[1]);
     break;
    case 3:
     goog.global.console.group(formatted, p[0], p[1], p[2]);
     break;
    case 4:
     goog.global.console.group(formatted, p[0], p[1], p[2], p[3]);
     break;
    case 5:
     goog.global.console.group(formatted, p[0], p[1], p[2], p[3], p[4]);
     break;
    case 6:
     goog.global.console.group(formatted, p[0], p[1], p[2], p[3], p[4], p[5]);
     break;
    case 7:
     goog.global.console.group(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6]);
     break;
    case 8:
     goog.global.console.group(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7]);
     break;
    case 9:
     goog.global.console.group(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8]);
     break;
    case 10:
     goog.global.console.group(formatted, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9]);
     break;
    default:
     goog.global.console.group(formatted, /**@type {Array<*>}*/ (JsArray_$Overlay.m_asJsArray__arrayOf_java_lang_Object__elemental2_core_JsArray(p)));
   }
  }
 }
 /** @nodts @return {?string} */
 m_timeDebug__java_lang_String__java_lang_String(/** ?string */ message) {
  if (this.m_isEnabled__org_jboss_elemento_logger_Level__boolean(Level.f_DEBUG__org_jboss_elemento_logger_Level)) {
   let timer = this.m_format__org_jboss_elemento_logger_Level__java_lang_String__java_lang_String_$p_org_jboss_elemento_logger_Logger(Level.f_DEBUG__org_jboss_elemento_logger_Level, message);
   goog.global.console.time(timer);
   return timer;
  }
  return null;
 }
 /** @nodts */
 m_timeDebugLog__java_lang_String__arrayOf_java_lang_Object__void(/** ?string */ timer, /** Array<*> */ params) {
  if (this.m_isEnabled__org_jboss_elemento_logger_Level__boolean(Level.f_DEBUG__org_jboss_elemento_logger_Level)) {
   this.m_timeLog__java_lang_String__arrayOf_java_lang_Object__void_$p_org_jboss_elemento_logger_Logger(timer, params);
  }
 }
 /** @nodts @return {?string} */
 m_timeInfo__java_lang_String__java_lang_String(/** ?string */ message) {
  if (this.m_isEnabled__org_jboss_elemento_logger_Level__boolean(Level.f_INFO__org_jboss_elemento_logger_Level)) {
   let timer = this.m_format__org_jboss_elemento_logger_Level__java_lang_String__java_lang_String_$p_org_jboss_elemento_logger_Logger(Level.f_INFO__org_jboss_elemento_logger_Level, message);
   goog.global.console.time(timer);
   return timer;
  }
  return null;
 }
 /** @nodts */
 m_timeInfoLog__java_lang_String__arrayOf_java_lang_Object__void(/** ?string */ timer, /** Array<*> */ params) {
  if (this.m_isEnabled__org_jboss_elemento_logger_Level__boolean(Level.f_INFO__org_jboss_elemento_logger_Level)) {
   this.m_timeLog__java_lang_String__arrayOf_java_lang_Object__void_$p_org_jboss_elemento_logger_Logger(timer, params);
  }
 }
 /** @nodts @return {?string} */
 m_timeWarn__java_lang_String__java_lang_String(/** ?string */ message) {
  if (this.m_isEnabled__org_jboss_elemento_logger_Level__boolean(Level.f_WARN__org_jboss_elemento_logger_Level)) {
   let timer = this.m_format__org_jboss_elemento_logger_Level__java_lang_String__java_lang_String_$p_org_jboss_elemento_logger_Logger(Level.f_WARN__org_jboss_elemento_logger_Level, message);
   goog.global.console.time(timer);
   return timer;
  }
  return null;
 }
 /** @nodts */
 m_timeWarnLog__java_lang_String__arrayOf_java_lang_Object__void(/** ?string */ timer, /** Array<*> */ params) {
  if (this.m_isEnabled__org_jboss_elemento_logger_Level__boolean(Level.f_WARN__org_jboss_elemento_logger_Level)) {
   this.m_timeLog__java_lang_String__arrayOf_java_lang_Object__void_$p_org_jboss_elemento_logger_Logger(timer, params);
  }
 }
 /** @nodts @return {?string} */
 m_timeError__java_lang_String__java_lang_String(/** ?string */ message) {
  if (this.m_isEnabled__org_jboss_elemento_logger_Level__boolean(Level.f_ERROR__org_jboss_elemento_logger_Level)) {
   let timer = this.m_format__org_jboss_elemento_logger_Level__java_lang_String__java_lang_String_$p_org_jboss_elemento_logger_Logger(Level.f_ERROR__org_jboss_elemento_logger_Level, message);
   goog.global.console.time(timer);
   return timer;
  }
  return null;
 }
 /** @nodts */
 m_timeErrorLog__java_lang_String__arrayOf_java_lang_Object__void(/** ?string */ timer, /** Array<*> */ params) {
  if (this.m_isEnabled__org_jboss_elemento_logger_Level__boolean(Level.f_ERROR__org_jboss_elemento_logger_Level)) {
   this.m_timeLog__java_lang_String__arrayOf_java_lang_Object__void_$p_org_jboss_elemento_logger_Logger(timer, params);
  }
 }
 /** @nodts */
 m_timeEnd__java_lang_String__void(/** ?string */ timer) {
  goog.global.console.timeEnd(timer);
 }
 /** @nodts */
 m_timeLog__java_lang_String__arrayOf_java_lang_Object__void_$p_org_jboss_elemento_logger_Logger(/** ?string */ timer, /** Array<*> */ params) {
  if ($Equality.$same(params, null) || params.length == 0) {
   goog.global.console.timeLog(timer);
  } else {
   let p = this.m_adjustParams__arrayOf_java_lang_Object__arrayOf_java_lang_Object_$p_org_jboss_elemento_logger_Logger(params);
   switch (params.length) {
    case 1:
     goog.global.console.timeLog(timer, p[0]);
     break;
    case 2:
     goog.global.console.timeLog(timer, p[0], p[1]);
     break;
    case 3:
     goog.global.console.timeLog(timer, p[0], p[1], p[2]);
     break;
    case 4:
     goog.global.console.timeLog(timer, p[0], p[1], p[2], p[3]);
     break;
    case 5:
     goog.global.console.timeLog(timer, p[0], p[1], p[2], p[3], p[4]);
     break;
    case 6:
     goog.global.console.timeLog(timer, p[0], p[1], p[2], p[3], p[4], p[5]);
     break;
    case 7:
     goog.global.console.timeLog(timer, p[0], p[1], p[2], p[3], p[4], p[5], p[6]);
     break;
    case 8:
     goog.global.console.timeLog(timer, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7]);
     break;
    case 9:
     goog.global.console.timeLog(timer, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8]);
     break;
    case 10:
     goog.global.console.timeLog(timer, p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9]);
     break;
    default:
     goog.global.console.timeLog(timer, /**@type {Array<*>}*/ (JsArray_$Overlay.m_asJsArray__arrayOf_java_lang_Object__elemental2_core_JsArray(p)));
   }
  }
 }
 /** @nodts @return {?string} */
 m_format__org_jboss_elemento_logger_Level__java_lang_String__java_lang_String_$p_org_jboss_elemento_logger_Logger(/** Level */ level, /** ?string */ message) {
  let iso = new Date().toISOString();
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.m_substring__java_lang_String__int__int__java_lang_String(iso, 11, 23)) + ' ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(level.f_label__org_jboss_elemento_logger_Level) + ' [' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(this.f_formattedCategory__org_jboss_elemento_logger_Logger_) + '] ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(message);
 }
 /** @nodts @return {Array<*>} */
 m_adjustParams__arrayOf_java_lang_Object__arrayOf_java_lang_Object_$p_org_jboss_elemento_logger_Logger(/** Array<*> */ params) {
  let p = new Array(params.length);
  for (let i = 0; i < params.length; i = i + 1 | 0) {
   if (this.m_jsNative__java_lang_Object__boolean_$p_org_jboss_elemento_logger_Logger(params[i])) {
    $Arrays.$set(p, i, params[i]);
   } else {
    try {
     $Arrays.$set(p, i, j_l_String.m_valueOf__java_lang_Object__java_lang_String(params[i]));
    } catch (__$jsexc) {
     let __$exc = Exceptions.m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(__$jsexc);
     {
      let t = /**@type {Throwable}*/ (__$exc);
      $Arrays.$set(p, i, 'error calling String.valueOf() for parameter #' + i + ': ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(t.m_getMessage__java_lang_String()));
     }
    }
   }
  }
  return p;
 }
 /** @nodts @return {boolean} */
 m_jsNative__java_lang_Object__boolean_$p_org_jboss_elemento_logger_Logger(/** * */ object) {
  if ($Equality.$same(object, null) || !j_l_String.m_equals__java_lang_String__java_lang_Object__boolean(typeof(object), 'object')) {
   return true;
  }
  try {
   let objectType = Object.prototype.toString.call(object);
   return !$Equality.$same(objectType, null) && j_l_String.m_startsWith__java_lang_String__java_lang_String__boolean(objectType, '[object ');
  } catch (__$jsexc) {
   let __$exc = Exceptions.m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(__$jsexc);
   {
    let t = /**@type {Throwable}*/ (__$exc);
    return false;
   }
  }
 }
 /** @nodts @return {Level} */
 static get f_DEFAULT_LEVEL__org_jboss_elemento_logger_Logger() {
  return (Logger.$clinit(), Logger.$static_DEFAULT_LEVEL__org_jboss_elemento_logger_Logger);
 }
 /** @nodts @return {Map<?string, Logger>} */
 static get f_loggers__org_jboss_elemento_logger_Logger() {
  return (Logger.$clinit(), Logger.$static_loggers__org_jboss_elemento_logger_Logger);
 }
 /** @nodts @return {LevelOverrides} */
 static get f_levelOverrides__org_jboss_elemento_logger_Logger() {
  return (Logger.$clinit(), Logger.$static_levelOverrides__org_jboss_elemento_logger_Logger);
 }
 /** @nodts @return {Level} */
 static get f_level__org_jboss_elemento_logger_Logger() {
  return (Logger.$clinit(), Logger.$static_level__org_jboss_elemento_logger_Logger);
 }
 /** @nodts */
 static set f_level__org_jboss_elemento_logger_Logger(/** Level */ value) {
  (Logger.$clinit(), Logger.$static_level__org_jboss_elemento_logger_Logger = value);
 }
 /** @nodts */
 static $clinit() {
  Logger.$clinit = () =>{};
  Logger.$loadModules();
  j_l_Object.$clinit();
  Logger.$static_DEFAULT_LEVEL__org_jboss_elemento_logger_Logger = Level.f_INFO__org_jboss_elemento_logger_Level;
  Logger.f_ROOT_LOGGER__org_jboss_elemento_logger_Logger_ = Logger.$create__java_lang_String(Logger.f_ROOT_CATEGORY__org_jboss_elemento_logger_Logger_);
  Logger.$static_loggers__org_jboss_elemento_logger_Logger = (/**@type {!HashMap<?string, Logger>}*/ (HashMap.$create__()));
  Logger.$static_levelOverrides__org_jboss_elemento_logger_Logger = LevelOverrides.$create__();
  Logger.$static_level__org_jboss_elemento_logger_Logger = Logger.$static_DEFAULT_LEVEL__org_jboss_elemento_logger_Logger;
  Logger.$static_loggers__org_jboss_elemento_logger_Logger.put(Logger.f_ROOT_CATEGORY__org_jboss_elemento_logger_Logger_, Logger.f_ROOT_LOGGER__org_jboss_elemento_logger_Logger_);
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Logger;
 }
 
 /** @nodts */
 static $loadModules() {
  JsArray_$Overlay = goog.module.get('elemental2.core.JsArray.$Overlay$impl');
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Entry = goog.module.get('java.util.Map.Entry$impl');
  Exceptions = goog.module.get('javaemul.internal.Exceptions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Category = goog.module.get('org.jboss.elemento.logger.Category$impl');
  Level = goog.module.get('org.jboss.elemento.logger.Level$impl');
  LevelOverrides = goog.module.get('org.jboss.elemento.logger.LevelOverrides$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@private {Level} @nodts*/
Logger.$static_DEFAULT_LEVEL__org_jboss_elemento_logger_Logger;
/**@const {string} @nodts*/
Logger.f_LOG_LEVEL_PARAMETER__org_jboss_elemento_logger_Logger = 'log-level';
/**@const {number} @nodts*/
Logger.f_CATEGORY_LENGTH__org_jboss_elemento_logger_Logger_ = 23;
/**@const {string} @nodts*/
Logger.f_ROOT_CATEGORY__org_jboss_elemento_logger_Logger_ = 'root';
/**@type {Logger} @nodts*/
Logger.f_ROOT_LOGGER__org_jboss_elemento_logger_Logger_;
/**@private {Map<?string, Logger>} @nodts*/
Logger.$static_loggers__org_jboss_elemento_logger_Logger;
/**@private {LevelOverrides} @nodts*/
Logger.$static_levelOverrides__org_jboss_elemento_logger_Logger;
/**@private {Level} @nodts*/
Logger.$static_level__org_jboss_elemento_logger_Logger;
$Util.$setClassMetadata(Logger, 'org.jboss.elemento.logger.Logger');

exports = Logger;

//# sourceMappingURL=Logger.js.map
