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

import jsinterop.annotations.JsMethod;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Function {
  public @Nullable Object arguments;
  @Deprecated public double arity;
  public @Nullable Function caller;
  public @Nullable Object displayName;
  public int length;
  public String name;

  public Function(@Nullable Object... var_args) {}

  public native @Nullable Object apply(@Nullable Object... var_args);

  public native Function bind(@Nullable JsObject selfObj, @Nullable Object... var_args);

  @JsOverlay
  public final Function bind(@Nullable Object selfObj, @Nullable Object... var_args) {
    return bind(Js.<@Nullable JsObject>uncheckedCast(selfObj), var_args);
  }

  public native @Nullable Object call(@Nullable Object... var_args);

  @JsMethod(name = "toString")
  public native String toString_();
}
