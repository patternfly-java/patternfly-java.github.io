// GENERATED CODE! Edit jre/java/javaemul/internal/primitives/primitive.impl.java.js.template instead!
goog.module('javaemul.internal.primitives.$byte$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const java_lang_Byte = goog.require('java.lang.Byte$impl');


/**
 * Placeholder class definition for the primitive class byte.
 *
 * Non-instantiable.
 */
class $byte {
  /**
   * Defines instance fields.
   */
  constructor() {}

  /**
   * Returns whether the provided instance is an instance of this class.
   * Note that this always return true, because it is only used for ArrayStoreException
   * purposes which never happens for primitive arrays as they are compile time checked.
   *
   * @param {*} instance
   * @return {boolean}
   * @public
   */
  static $isInstance(instance) { return true; }
};


/**
 * @nocollapse
 * @public {number}
 */
$byte.$initialArrayValue = 0;


$Util.$setClassMetadataForPrimitive($byte, java_lang_Byte, 'byte', 'B');


/**
 * Exported class.
 */
exports = $byte;
