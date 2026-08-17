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
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class PopStateEvent extends Event {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface PopStateEventEventInitDictType {
    @JsOverlay
    static PopStateEvent.PopStateEventEventInitDictType create() {
      return Js.uncheckedCast(JsPropertyMap.of());
    }

    @JsProperty
    @Nullable Object getState();

    @JsProperty
    void setState(@Nullable Object state);
  }

  public boolean hasUAVisualTransition;
  public @Nullable Object state;

  public PopStateEvent(String type, PopStateEvent.PopStateEventEventInitDictType eventInitDict) {
    // This super call is here only for the code to compile; it is never executed.
    super((String) null, (@Nullable EventInit) null);
  }

  public PopStateEvent(String type) {
    // This super call is here only for the code to compile; it is never executed.
    super((String) null, (@Nullable EventInit) null);
  }

  public native void initPopStateEvent(
      String typeArg, boolean canBubbleArg, boolean cancelableArg, @Nullable Object stateArg);
}
