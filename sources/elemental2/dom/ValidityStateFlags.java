/*
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package elemental2.dom;

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface ValidityStateFlags {
  @JsOverlay
  static ValidityStateFlags create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  boolean isBadInput();

  @JsProperty
  boolean isCustomError();

  @JsProperty
  boolean isPatternMismatch();

  @JsProperty
  boolean isRangeOverflow();

  @JsProperty
  boolean isRangeUnderflow();

  @JsProperty
  boolean isStepMismatch();

  @JsProperty
  boolean isTooLong();

  @JsProperty
  boolean isTooShort();

  @JsProperty
  boolean isTypeMismatch();

  @JsProperty
  boolean isValueMissing();

  @JsProperty
  void setBadInput(boolean badInput);

  @JsProperty
  void setCustomError(boolean customError);

  @JsProperty
  void setPatternMismatch(boolean patternMismatch);

  @JsProperty
  void setRangeOverflow(boolean rangeOverflow);

  @JsProperty
  void setRangeUnderflow(boolean rangeUnderflow);

  @JsProperty
  void setStepMismatch(boolean stepMismatch);

  @JsProperty
  void setTooLong(boolean tooLong);

  @JsProperty
  void setTooShort(boolean tooShort);

  @JsProperty
  void setTypeMismatch(boolean typeMismatch);

  @JsProperty
  void setValueMissing(boolean valueMissing);
}
