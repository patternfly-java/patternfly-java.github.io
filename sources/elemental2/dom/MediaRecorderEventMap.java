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

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface MediaRecorderEventMap {
  @JsProperty
  @Nullable BlobEvent getDataavailable();

  @JsProperty
  @Nullable Event getError();

  @JsProperty
  @Nullable Event getPause();

  @JsProperty
  @Nullable Event getResume();

  @JsProperty
  @Nullable Event getStart();

  @JsProperty
  @Nullable Event getStop();

  @JsProperty
  void setDataavailable(@Nullable BlobEvent dataavailable);

  @JsProperty
  void setError(@Nullable Event error);

  @JsProperty
  void setPause(@Nullable Event pause);

  @JsProperty
  void setResume(@Nullable Event resume);

  @JsProperty
  void setStart(@Nullable Event start);

  @JsProperty
  void setStop(@Nullable Event stop);
}
