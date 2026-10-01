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

import elemental2.core.JsObject;
import jsinterop.annotations.JsMethod;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Console {
  @JsMethod(name = "assert")
  public native void assert_(@Nullable Object condition, @Nullable Object... var_data);

  public native void clear();

  public native void count();

  public native void count(String label);

  public native void countReset();

  public native void countReset(String label);

  public native void debug(@Nullable Object... var_data);

  public native void dir(@Nullable Object item);

  public native void dirxml(@Nullable Object... var_data);

  public native void error(@Nullable Object... var_data);

  public native void group(@Nullable Object... var_data);

  public native void groupCollapsed(@Nullable Object... var_data);

  public native void groupEnd();

  public native void info(@Nullable Object... var_data);

  public native void log(@Nullable Object... var_data);

  public native void table(JsObject tabularData, @Nullable Object properties);

  public native void table(JsObject tabularData);

  @JsOverlay
  public final void table(Object tabularData, @Nullable Object properties) {
    table(Js.<JsObject>uncheckedCast(tabularData), properties);
  }

  @JsOverlay
  public final void table(Object tabularData) {
    table(Js.<JsObject>uncheckedCast(tabularData));
  }

  public native void time(String label);

  public native void timeEnd(String label);

  public native void timeLog(String label, @Nullable Object... data);

  public native void trace(@Nullable Object... var_data);

  public native void warn(@Nullable Object... var_data);
}
