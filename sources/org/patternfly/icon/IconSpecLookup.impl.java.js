goog.module('org.patternfly.icon.IconSpecLookup$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Exceptions = goog.forwardDeclare('javaemul.internal.Exceptions$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let IconSpec = goog.forwardDeclare('org.patternfly.icon.IconSpec$impl');
let IconSpecsFab0 = goog.forwardDeclare('org.patternfly.icon.IconSpecsFab0$impl');
let IconSpecsFab1 = goog.forwardDeclare('org.patternfly.icon.IconSpecsFab1$impl');
let IconSpecsFar = goog.forwardDeclare('org.patternfly.icon.IconSpecsFar$impl');
let IconSpecsFas0 = goog.forwardDeclare('org.patternfly.icon.IconSpecsFas0$impl');
let IconSpecsFas1 = goog.forwardDeclare('org.patternfly.icon.IconSpecsFas1$impl');
let IconSpecsFas2 = goog.forwardDeclare('org.patternfly.icon.IconSpecsFas2$impl');
let IconSpecsFas3 = goog.forwardDeclare('org.patternfly.icon.IconSpecsFas3$impl');
let IconSpecsPatternfly = goog.forwardDeclare('org.patternfly.icon.IconSpecsPatternfly$impl');
let IconSpecsRhMicrons = goog.forwardDeclare('org.patternfly.icon.IconSpecsRhMicrons$impl');
let IconSpecsRhStandard0 = goog.forwardDeclare('org.patternfly.icon.IconSpecsRhStandard0$impl');
let IconSpecsRhStandard1 = goog.forwardDeclare('org.patternfly.icon.IconSpecsRhStandard1$impl');
let IconSpecsRhUi0 = goog.forwardDeclare('org.patternfly.icon.IconSpecsRhUi0$impl');
let IconSpecsRhUi1 = goog.forwardDeclare('org.patternfly.icon.IconSpecsRhUi1$impl');

/**
 * @final
 */
class IconSpecLookup extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {IconSpec} */
 static m_find__java_lang_String__org_patternfly_icon_IconSpec(/** ?string */ name) {
  IconSpecLookup.$clinit();
  let group = 'fas';
  let iconName = name;
  if (j_l_String.m_contains__java_lang_String__java_lang_CharSequence__boolean(name, '.')) {
   group = j_l_String.m_substring__java_lang_String__int__int__java_lang_String(name, 0, j_l_String.m_indexOf__java_lang_String__int__int(name, 46 /* '.' */));
   iconName = j_l_String.m_substring__java_lang_String__int__java_lang_String(name, j_l_String.m_indexOf__java_lang_String__int__int(name, 46 /* '.' */) + 1 | 0);
  }
  switch (InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(group)) {
   case 'fab':
    try {
     return IconSpecsFab0.m_valueOf__java_lang_String__org_patternfly_icon_IconSpecsFab0(iconName).f_iconSpec__org_patternfly_icon_IconSpecsFab0;
    } catch (__$jsexc) {
     let __$exc = Exceptions.m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(__$jsexc);
     if (IllegalArgumentException.$isInstance(__$exc)) {} else {
      throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(__$exc);
     }
    }
    try {
     return IconSpecsFab1.m_valueOf__java_lang_String__org_patternfly_icon_IconSpecsFab1(iconName).f_iconSpec__org_patternfly_icon_IconSpecsFab1;
    } catch (__$jsexc_1) {
     let __$exc_1 = Exceptions.m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(__$jsexc_1);
     if (IllegalArgumentException.$isInstance(__$exc_1)) {} else {
      throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(__$exc_1);
     }
    }
    throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(IllegalArgumentException.$create__java_lang_String('Unknown icon: \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(name) + '\''));
   case 'far':
    return IconSpecsFar.m_valueOf__java_lang_String__org_patternfly_icon_IconSpecsFar(iconName).f_iconSpec__org_patternfly_icon_IconSpecsFar;
   case 'fas':
    try {
     return IconSpecsFas0.m_valueOf__java_lang_String__org_patternfly_icon_IconSpecsFas0(iconName).f_iconSpec__org_patternfly_icon_IconSpecsFas0;
    } catch (__$jsexc_2) {
     let __$exc_2 = Exceptions.m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(__$jsexc_2);
     if (IllegalArgumentException.$isInstance(__$exc_2)) {} else {
      throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(__$exc_2);
     }
    }
    try {
     return IconSpecsFas1.m_valueOf__java_lang_String__org_patternfly_icon_IconSpecsFas1(iconName).f_iconSpec__org_patternfly_icon_IconSpecsFas1;
    } catch (__$jsexc_3) {
     let __$exc_3 = Exceptions.m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(__$jsexc_3);
     if (IllegalArgumentException.$isInstance(__$exc_3)) {} else {
      throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(__$exc_3);
     }
    }
    try {
     return IconSpecsFas2.m_valueOf__java_lang_String__org_patternfly_icon_IconSpecsFas2(iconName).f_iconSpec__org_patternfly_icon_IconSpecsFas2;
    } catch (__$jsexc_4) {
     let __$exc_4 = Exceptions.m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(__$jsexc_4);
     if (IllegalArgumentException.$isInstance(__$exc_4)) {} else {
      throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(__$exc_4);
     }
    }
    try {
     return IconSpecsFas3.m_valueOf__java_lang_String__org_patternfly_icon_IconSpecsFas3(iconName).f_iconSpec__org_patternfly_icon_IconSpecsFas3;
    } catch (__$jsexc_5) {
     let __$exc_5 = Exceptions.m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(__$jsexc_5);
     if (IllegalArgumentException.$isInstance(__$exc_5)) {} else {
      throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(__$exc_5);
     }
    }
    throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(IllegalArgumentException.$create__java_lang_String('Unknown icon: \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(name) + '\''));
   case 'patternfly':
    return IconSpecsPatternfly.m_valueOf__java_lang_String__org_patternfly_icon_IconSpecsPatternfly(iconName).f_iconSpec__org_patternfly_icon_IconSpecsPatternfly;
   case 'rhMicrons':
    return IconSpecsRhMicrons.m_valueOf__java_lang_String__org_patternfly_icon_IconSpecsRhMicrons(iconName).f_iconSpec__org_patternfly_icon_IconSpecsRhMicrons;
   case 'rhStandard':
    try {
     return IconSpecsRhStandard0.m_valueOf__java_lang_String__org_patternfly_icon_IconSpecsRhStandard0(iconName).f_iconSpec__org_patternfly_icon_IconSpecsRhStandard0;
    } catch (__$jsexc_6) {
     let __$exc_6 = Exceptions.m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(__$jsexc_6);
     if (IllegalArgumentException.$isInstance(__$exc_6)) {} else {
      throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(__$exc_6);
     }
    }
    try {
     return IconSpecsRhStandard1.m_valueOf__java_lang_String__org_patternfly_icon_IconSpecsRhStandard1(iconName).f_iconSpec__org_patternfly_icon_IconSpecsRhStandard1;
    } catch (__$jsexc_7) {
     let __$exc_7 = Exceptions.m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(__$jsexc_7);
     if (IllegalArgumentException.$isInstance(__$exc_7)) {} else {
      throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(__$exc_7);
     }
    }
    throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(IllegalArgumentException.$create__java_lang_String('Unknown icon: \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(name) + '\''));
   case 'rhUi':
    try {
     return IconSpecsRhUi0.m_valueOf__java_lang_String__org_patternfly_icon_IconSpecsRhUi0(iconName).f_iconSpec__org_patternfly_icon_IconSpecsRhUi0;
    } catch (__$jsexc_8) {
     let __$exc_8 = Exceptions.m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(__$jsexc_8);
     if (IllegalArgumentException.$isInstance(__$exc_8)) {} else {
      throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(__$exc_8);
     }
    }
    try {
     return IconSpecsRhUi1.m_valueOf__java_lang_String__org_patternfly_icon_IconSpecsRhUi1(iconName).f_iconSpec__org_patternfly_icon_IconSpecsRhUi1;
    } catch (__$jsexc_9) {
     let __$exc_9 = Exceptions.m_toJava__javaemul_internal_ThrowableUtils_JsObject__java_lang_Throwable(__$jsexc_9);
     if (IllegalArgumentException.$isInstance(__$exc_9)) {} else {
      throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(__$exc_9);
     }
    }
    throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(IllegalArgumentException.$create__java_lang_String('Unknown icon: \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(name) + '\''));
   default:
    throw Exceptions.m_toJs__java_lang_Throwable__javaemul_internal_ThrowableUtils_JsObject(IllegalArgumentException.$create__java_lang_String('Unknown icon: \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(name) + '\''));
  }
 }
 /** @nodts @return {!IconSpecLookup} */
 static $create__() {
  let $instance = new IconSpecLookup();
  $instance.$ctor__org_patternfly_icon_IconSpecLookup__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_icon_IconSpecLookup__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  IconSpecLookup.$clinit = () =>{};
  IconSpecLookup.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IconSpecLookup;
 }
 
 /** @nodts */
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Exceptions = goog.module.get('javaemul.internal.Exceptions$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  IconSpecsFab0 = goog.module.get('org.patternfly.icon.IconSpecsFab0$impl');
  IconSpecsFab1 = goog.module.get('org.patternfly.icon.IconSpecsFab1$impl');
  IconSpecsFar = goog.module.get('org.patternfly.icon.IconSpecsFar$impl');
  IconSpecsFas0 = goog.module.get('org.patternfly.icon.IconSpecsFas0$impl');
  IconSpecsFas1 = goog.module.get('org.patternfly.icon.IconSpecsFas1$impl');
  IconSpecsFas2 = goog.module.get('org.patternfly.icon.IconSpecsFas2$impl');
  IconSpecsFas3 = goog.module.get('org.patternfly.icon.IconSpecsFas3$impl');
  IconSpecsPatternfly = goog.module.get('org.patternfly.icon.IconSpecsPatternfly$impl');
  IconSpecsRhMicrons = goog.module.get('org.patternfly.icon.IconSpecsRhMicrons$impl');
  IconSpecsRhStandard0 = goog.module.get('org.patternfly.icon.IconSpecsRhStandard0$impl');
  IconSpecsRhStandard1 = goog.module.get('org.patternfly.icon.IconSpecsRhStandard1$impl');
  IconSpecsRhUi0 = goog.module.get('org.patternfly.icon.IconSpecsRhUi0$impl');
  IconSpecsRhUi1 = goog.module.get('org.patternfly.icon.IconSpecsRhUi1$impl');
 }
}
$Util.$setClassMetadata(IconSpecLookup, 'org.patternfly.icon.IconSpecLookup');

exports = IconSpecLookup;

//# sourceMappingURL=IconSpecLookup.js.map
