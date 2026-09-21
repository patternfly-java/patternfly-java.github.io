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
public class ElementInternals {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface SetFormValueStateUnionType {
    @JsOverlay
    static ElementInternals.@Nullable SetFormValueStateUnionType of(@Nullable Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default @Nullable File asFile() {
      return Js.cast(this);
    }

    @JsOverlay
    default @Nullable FormData asFormData() {
      return Js.cast(this);
    }

    @JsOverlay
    default @Nullable String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isFile() {
      return (Object) this instanceof File;
    }

    @JsOverlay
    default boolean isFormData() {
      return (Object) this instanceof FormData;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface SetFormValueValueUnionType {
    @JsOverlay
    static ElementInternals.@Nullable SetFormValueValueUnionType of(@Nullable Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default @Nullable File asFile() {
      return Js.cast(this);
    }

    @JsOverlay
    default @Nullable FormData asFormData() {
      return Js.cast(this);
    }

    @JsOverlay
    default @Nullable String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isFile() {
      return (Object) this instanceof File;
    }

    @JsOverlay
    default boolean isFormData() {
      return (Object) this instanceof FormData;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  public @Nullable HTMLFormElement form;
  public NodeList<HTMLLabelElement> labels;
  public @Nullable ShadowRoot shadowRoot;
  public CustomStateSet states;
  public String validationMessage;
  public ValidityState validity;
  public boolean willValidate;

  public native boolean checkValidity();

  public native boolean reportValidity();

  @JsOverlay
  public final @Nullable Object setFormValue(File value, File state) {
    return setFormValue(
        Js.<ElementInternals.@Nullable SetFormValueValueUnionType>uncheckedCast(value),
        Js.<ElementInternals.@Nullable SetFormValueStateUnionType>uncheckedCast(state));
  }

  @JsOverlay
  public final @Nullable Object setFormValue(File value, FormData state) {
    return setFormValue(
        Js.<ElementInternals.@Nullable SetFormValueValueUnionType>uncheckedCast(value),
        Js.<ElementInternals.@Nullable SetFormValueStateUnionType>uncheckedCast(state));
  }

  @JsOverlay
  public final @Nullable Object setFormValue(
      File value, ElementInternals.@Nullable SetFormValueStateUnionType state) {
    return setFormValue(
        Js.<ElementInternals.@Nullable SetFormValueValueUnionType>uncheckedCast(value), state);
  }

  @JsOverlay
  public final @Nullable Object setFormValue(File value, String state) {
    return setFormValue(
        Js.<ElementInternals.@Nullable SetFormValueValueUnionType>uncheckedCast(value),
        Js.<ElementInternals.@Nullable SetFormValueStateUnionType>uncheckedCast(state));
  }

  @JsOverlay
  public final @Nullable Object setFormValue(FormData value, File state) {
    return setFormValue(
        Js.<ElementInternals.@Nullable SetFormValueValueUnionType>uncheckedCast(value),
        Js.<ElementInternals.@Nullable SetFormValueStateUnionType>uncheckedCast(state));
  }

  @JsOverlay
  public final @Nullable Object setFormValue(FormData value, FormData state) {
    return setFormValue(
        Js.<ElementInternals.@Nullable SetFormValueValueUnionType>uncheckedCast(value),
        Js.<ElementInternals.@Nullable SetFormValueStateUnionType>uncheckedCast(state));
  }

  @JsOverlay
  public final @Nullable Object setFormValue(
      FormData value, ElementInternals.@Nullable SetFormValueStateUnionType state) {
    return setFormValue(
        Js.<ElementInternals.@Nullable SetFormValueValueUnionType>uncheckedCast(value), state);
  }

  @JsOverlay
  public final @Nullable Object setFormValue(FormData value, String state) {
    return setFormValue(
        Js.<ElementInternals.@Nullable SetFormValueValueUnionType>uncheckedCast(value),
        Js.<ElementInternals.@Nullable SetFormValueStateUnionType>uncheckedCast(state));
  }

  @JsOverlay
  public final @Nullable Object setFormValue(
      ElementInternals.@Nullable SetFormValueValueUnionType value, File state) {
    return setFormValue(
        value, Js.<ElementInternals.@Nullable SetFormValueStateUnionType>uncheckedCast(state));
  }

  @JsOverlay
  public final @Nullable Object setFormValue(
      ElementInternals.@Nullable SetFormValueValueUnionType value, FormData state) {
    return setFormValue(
        value, Js.<ElementInternals.@Nullable SetFormValueStateUnionType>uncheckedCast(state));
  }

  public native @Nullable Object setFormValue(
      ElementInternals.@Nullable SetFormValueValueUnionType value,
      ElementInternals.@Nullable SetFormValueStateUnionType state);

  @JsOverlay
  public final @Nullable Object setFormValue(
      ElementInternals.@Nullable SetFormValueValueUnionType value, String state) {
    return setFormValue(
        value, Js.<ElementInternals.@Nullable SetFormValueStateUnionType>uncheckedCast(state));
  }

  @JsOverlay
  public final @Nullable Object setFormValue(String value, File state) {
    return setFormValue(
        Js.<ElementInternals.@Nullable SetFormValueValueUnionType>uncheckedCast(value),
        Js.<ElementInternals.@Nullable SetFormValueStateUnionType>uncheckedCast(state));
  }

  @JsOverlay
  public final @Nullable Object setFormValue(String value, FormData state) {
    return setFormValue(
        Js.<ElementInternals.@Nullable SetFormValueValueUnionType>uncheckedCast(value),
        Js.<ElementInternals.@Nullable SetFormValueStateUnionType>uncheckedCast(state));
  }

  @JsOverlay
  public final @Nullable Object setFormValue(
      String value, ElementInternals.@Nullable SetFormValueStateUnionType state) {
    return setFormValue(
        Js.<ElementInternals.@Nullable SetFormValueValueUnionType>uncheckedCast(value), state);
  }

  @JsOverlay
  public final @Nullable Object setFormValue(String value, String state) {
    return setFormValue(
        Js.<ElementInternals.@Nullable SetFormValueValueUnionType>uncheckedCast(value),
        Js.<ElementInternals.@Nullable SetFormValueStateUnionType>uncheckedCast(state));
  }

  public native @Nullable Object setValidity(
      ValidityStateFlags flags, String message, HTMLElement anchor);
}
