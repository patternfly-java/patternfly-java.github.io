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

@JsType(isNative = true, name = "Error", namespace = JsPackage.GLOBAL)
public class JsError {
  public static double stackTraceLimit;

  public static native void captureStackTrace(
      @Nullable JsObject error, @Nullable Function constructor);

  public static native void captureStackTrace(@Nullable JsObject error);

  @JsOverlay
  public static final void captureStackTrace(
      @Nullable Object error, @Nullable Function constructor) {
    captureStackTrace(Js.<@Nullable JsObject>uncheckedCast(error), constructor);
  }

  @JsOverlay
  public static final void captureStackTrace(@Nullable Object error) {
    captureStackTrace(Js.<@Nullable JsObject>uncheckedCast(error));
  }

  public @Nullable Object cause;
  public String description;
  public String fileName;
  public double lineNumber;
  public String message;
  public String name;
  public @Nullable Object sourceURL;
  public String stack;

  public JsError() {}

  public JsError(
      @Nullable Object message, @Nullable Object fileNameOrOptions, @Nullable Object line) {}

  public JsError(@Nullable Object message, @Nullable Object fileNameOrOptions) {}

  public JsError(@Nullable Object message) {}
}
