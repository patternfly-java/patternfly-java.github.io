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

import elemental2.core.JsArray;
import elemental2.promise.Promise;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class ClipboardItem {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorItemsJsPropertyMapTypeParameterUnionType {
    @JsOverlay
    static ClipboardItem.ConstructorItemsJsPropertyMapTypeParameterUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default Blob asBlob() {
      return Js.cast(this);
    }

    @JsOverlay
    default Promise<@Nullable Object> asPromise() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isBlob() {
      return (Object) this instanceof Blob;
    }

    @JsOverlay
    default boolean isPromise() {
      return (Object) this instanceof Promise;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  public JsArray<String> types;

  public ClipboardItem(
      JsPropertyMap<ClipboardItem.ConstructorItemsJsPropertyMapTypeParameterUnionType> items,
      @Nullable ClipboardItemOptions options) {}

  public ClipboardItem(
      JsPropertyMap<ClipboardItem.ConstructorItemsJsPropertyMapTypeParameterUnionType> items) {}

  public native Promise<Blob> getType(String type);
}
