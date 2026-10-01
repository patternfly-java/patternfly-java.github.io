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
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class StylePropertyMap extends StylePropertyMapReadOnly {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface AppendValuesUnionType {
    @JsOverlay
    static StylePropertyMap.@Nullable AppendValuesUnionType of(@Nullable Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default @Nullable CSSStyleValue asCSSStyleValue() {
      return Js.cast(this);
    }

    @JsOverlay
    default @Nullable String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isCSSStyleValue() {
      return (Object) this instanceof CSSStyleValue;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface SetValuesUnionType {
    @JsOverlay
    static StylePropertyMap.@Nullable SetValuesUnionType of(@Nullable Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default @Nullable CSSStyleValue asCSSStyleValue() {
      return Js.cast(this);
    }

    @JsOverlay
    default @Nullable String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isCSSStyleValue() {
      return (Object) this instanceof CSSStyleValue;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  public native void append(
      String property, StylePropertyMap.@Nullable AppendValuesUnionType... values);

  @JsOverlay
  public final void append(String property, CSSStyleValue... values) {
    append(property, Js.<StylePropertyMap.@Nullable AppendValuesUnionType[]>uncheckedCast(values));
  }

  @JsOverlay
  public final void append(String property, String... values) {
    append(property, Js.<StylePropertyMap.@Nullable AppendValuesUnionType[]>uncheckedCast(values));
  }

  public native void append(String property);

  public native void clear();

  public native void delete(String property);

  @JsOverlay
  public final void set(String property, CSSStyleValue... values) {
    set(property, Js.<StylePropertyMap.@Nullable SetValuesUnionType[]>uncheckedCast(values));
  }

  public native void set(String property, StylePropertyMap.@Nullable SetValuesUnionType... values);

  @JsOverlay
  public final void set(String property, String... values) {
    set(property, Js.<StylePropertyMap.@Nullable SetValuesUnionType[]>uncheckedCast(values));
  }

  public native void set(String property);
}
