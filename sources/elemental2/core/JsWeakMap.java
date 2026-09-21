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
package elemental2.core;

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, name = "WeakMap", namespace = JsPackage.GLOBAL)
public class JsWeakMap<K extends @Nullable Object, V extends @Nullable Object> {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorIterableJsIterableTypeParameterArrayUnionType<
      K extends @Nullable Object, V extends @Nullable Object> {
    @JsOverlay
    static <K extends @Nullable Object, V extends @Nullable Object>
        JsWeakMap.ConstructorIterableJsIterableTypeParameterArrayUnionType<K, V> of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default K asK() {
      return Js.cast(this);
    }

    @JsOverlay
    default V asV() {
      return Js.cast(this);
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorIterableUnionType<
      K extends @Nullable Object, V extends @Nullable Object> {
    @JsOverlay
    static <K extends @Nullable Object, V extends @Nullable Object>
        JsWeakMap.@Nullable ConstructorIterableUnionType<K, V> of(@Nullable Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default @Nullable
        JsArray<JsArray<JsWeakMap.ConstructorIterableJsIterableTypeParameterArrayUnionType<K, V>>>
            asJsArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default @Nullable
        JsIterable<
                JsArray<JsWeakMap.ConstructorIterableJsIterableTypeParameterArrayUnionType<K, V>>,
                @Nullable Object,
                @Nullable Object>
            asJsIterable() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isJsArray() {
      return (Object) this instanceof JsArray;
    }
  }

  public JsWeakMap() {}

  public JsWeakMap(
      JsWeakMap.ConstructorIterableJsIterableTypeParameterArrayUnionType<K, V>[][] iterable) {}

  public JsWeakMap(JsWeakMap.@Nullable ConstructorIterableUnionType<K, V> iterable) {}

  public JsWeakMap(
      JsArray<JsArray<JsWeakMap.ConstructorIterableJsIterableTypeParameterArrayUnionType<K, V>>>
          iterable) {}

  public JsWeakMap(
      JsIterable<
              JsArray<JsWeakMap.ConstructorIterableJsIterableTypeParameterArrayUnionType<K, V>>,
              @Nullable Object,
              @Nullable Object>
          iterable) {}

  public native void clear();

  public native boolean delete(K key);

  public native V get(K key);

  public native boolean has(K key);

  public native JsWeakMap<K, V> set(K key, V value);
}
