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

import elemental2.core.Uint8Array;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class TextEncoder {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface EncodeIntoReturnType {
    @JsOverlay
    static TextEncoder.EncodeIntoReturnType create() {
      return Js.uncheckedCast(JsPropertyMap.of());
    }

    @JsProperty
    double getRead();

    @JsProperty
    double getWritten();

    @JsProperty
    void setRead(double read);

    @JsProperty
    void setWritten(double written);
  }

  public String encoding;

  public TextEncoder() {}

  public TextEncoder(String utfLabel) {}

  public native Uint8Array encode();

  public native Uint8Array encode(String input);

  public native TextEncoder.EncodeIntoReturnType encodeInto(String input, Uint8Array uint8Array);
}
