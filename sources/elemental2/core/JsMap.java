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
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, name = "Map", namespace = JsPackage.GLOBAL)
public class JsMap<K extends @Nullable Object, V extends @Nullable Object>
    implements ReadonlyMap<K, V> {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorIterableJsIterableTypeParameterArrayUnionType<
      K extends @Nullable Object, V extends @Nullable Object> {
    @JsOverlay
    static <K extends @Nullable Object, V extends @Nullable Object>
        JsMap.ConstructorIterableJsIterableTypeParameterArrayUnionType<K, V> of(Object o) {
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
        JsMap.@Nullable ConstructorIterableUnionType<K, V> of(@Nullable Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default @Nullable
        JsArray<JsArray<JsMap.ConstructorIterableJsIterableTypeParameterArrayUnionType<K, V>>>
            asJsArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default @Nullable
        JsIterable<
                JsArray<JsMap.ConstructorIterableJsIterableTypeParameterArrayUnionType<K, V>>,
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

  public int size;

  public JsMap() {}

  public JsMap(JsMap.ConstructorIterableJsIterableTypeParameterArrayUnionType<K, V>[][] iterable) {}

  public JsMap(JsMap.@Nullable ConstructorIterableUnionType<K, V> iterable) {}

  public JsMap(
      JsArray<JsArray<JsMap.ConstructorIterableJsIterableTypeParameterArrayUnionType<K, V>>>
          iterable) {}

  public JsMap(
      JsIterable<
              JsArray<JsMap.ConstructorIterableJsIterableTypeParameterArrayUnionType<K, V>>,
              @Nullable Object,
              @Nullable Object>
          iterable) {}

  public native void clear();

  public native boolean delete(K key);

  public native JsIteratorIterable<
          JsArray<ReadonlyMap.EntriesJsIteratorIterableTypeParameterArrayUnionType<K, V>>,
          @Nullable Object,
          @Nullable Object>
      entries();

  public native <THIS extends @Nullable Object> void forEach(
      ReadonlyMap.ForEachCallbackFn<? super K, ? super V> callback, THIS thisArg);

  public native void forEach(ReadonlyMap.ForEachCallbackFn<? super K, ? super V> callback);

  public native V get(K key);

  @JsProperty
  public native double getSize();

  public native boolean has(K key);

  public native JsIteratorIterable<K, @Nullable Object, @Nullable Object> keys();

  public native JsMap<K, V> set(K key, V value);

  public native JsIteratorIterable<V, @Nullable Object, @Nullable Object> values();
}
