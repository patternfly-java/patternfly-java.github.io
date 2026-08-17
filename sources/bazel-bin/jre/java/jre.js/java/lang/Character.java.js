goog.module('java.lang.Character');

goog.require('java.io.Serializable');
goog.require('java.lang.CaseMapper');
goog.require('java.lang.CharSequence');
goog.require('java.lang.Character.BoxedValues');
goog.require('java.lang.Character.CharSequenceAdapter');
goog.require('java.lang.Class');
goog.require('java.lang.Comparable');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('javaemul.internal.InternalPreconditions');
goog.require('javaemul.internal.NativeRegExp.$Overlay');
goog.require('javaemul.internal.Primitives');
goog.require('javaemul.internal.StringUtil');
goog.require('javaemul.internal.primitives.$char');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Long');
goog.require('nativebootstrap.Util');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.CharSequences');

const Character = goog.require('java.lang.Character$impl');
exports = Character;
