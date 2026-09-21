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

import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class MediaStreamTrackGenerator<T extends @Nullable Object> extends MediaStreamTrack {
  @JsFunction
  public interface OnaddtrackFn {
    @Nullable Object onInvoke(MediaStreamTrackEvent p0);
  }

  @JsFunction
  public interface OnremovetrackFn {
    @Nullable Object onInvoke(MediaStreamTrackEvent p0);
  }

  public MediaStreamTrackGenerator.@Nullable OnaddtrackFn onaddtrack;
  public MediaStreamTrackGenerator.@Nullable OnremovetrackFn onremovetrack;
  public ReadableStream readableControl;
  public WritableStream<T> writable;

  public MediaStreamTrackGenerator(MediaStreamTrackGeneratorInit kind) {}
}
