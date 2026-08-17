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

import elemental2.core.ArrayBuffer;
import elemental2.core.ArrayBufferView;
import elemental2.promise.Promise;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface MediaKeySession extends EventTarget {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface AddEventListenerListenerUnionType {
    @JsOverlay
    static MediaKeySession.@Nullable AddEventListenerListenerUnionType of(@Nullable Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default EventTarget.@Nullable AddEventListenerListenerFn asAddEventListenerListenerFn() {
      return Js.cast(this);
    }

    @JsOverlay
    default @Nullable EventListener asEventListener() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isAddEventListenerListenerFn() {
      return (Object) this instanceof EventTarget.AddEventListenerListenerFn;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GenerateRequestInitDataUnionType {
    @JsOverlay
    static MediaKeySession.GenerateRequestInitDataUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default ArrayBuffer asArrayBuffer() {
      return Js.cast(this);
    }

    @JsOverlay
    default ArrayBufferView asArrayBufferView() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isArrayBuffer() {
      return (Object) this instanceof ArrayBuffer;
    }

    @JsOverlay
    default boolean isArrayBufferView() {
      return (Object) this instanceof ArrayBufferView;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface RemoveEventListenerListenerUnionType {
    @JsOverlay
    static MediaKeySession.@Nullable RemoveEventListenerListenerUnionType of(@Nullable Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default @Nullable EventListener asEventListener() {
      return Js.cast(this);
    }

    @JsOverlay
    default EventTarget.@Nullable RemoveEventListenerListenerFn asRemoveEventListenerListenerFn() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isRemoveEventListenerListenerFn() {
      return (Object) this instanceof EventTarget.RemoveEventListenerListenerFn;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface UpdateResponseUnionType {
    @JsOverlay
    static MediaKeySession.UpdateResponseUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default ArrayBuffer asArrayBuffer() {
      return Js.cast(this);
    }

    @JsOverlay
    default ArrayBufferView asArrayBufferView() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isArrayBuffer() {
      return (Object) this instanceof ArrayBuffer;
    }

    @JsOverlay
    default boolean isArrayBufferView() {
      return (Object) this instanceof ArrayBufferView;
    }
  }

  void addEventListener(
      String type,
      MediaKeySession.@Nullable AddEventListenerListenerUnionType listener,
      EventTarget.AddEventListenerOptionsUnionType options);

  void addEventListener(
      String type, MediaKeySession.@Nullable AddEventListenerListenerUnionType listener);

  Promise close();

  boolean dispatchEvent(Event evt);

  @JsOverlay
  default Promise generateRequest(String initDataType, ArrayBuffer initData) {
    return generateRequest(
        initDataType, Js.<MediaKeySession.GenerateRequestInitDataUnionType>uncheckedCast(initData));
  }

  @JsOverlay
  default Promise generateRequest(String initDataType, ArrayBufferView initData) {
    return generateRequest(
        initDataType, Js.<MediaKeySession.GenerateRequestInitDataUnionType>uncheckedCast(initData));
  }

  Promise generateRequest(
      String initDataType, MediaKeySession.GenerateRequestInitDataUnionType initData);

  @JsProperty
  Promise getClosed();

  @JsProperty
  double getExpiration();

  @JsProperty
  MediaKeyStatusMap getKeyStatuses();

  @JsProperty
  String getSessionId();

  Promise<Boolean> load(String sessionId);

  Promise remove();

  void removeEventListener(
      String type,
      MediaKeySession.@Nullable RemoveEventListenerListenerUnionType listener,
      EventTarget.RemoveEventListenerOptionsUnionType options);

  void removeEventListener(
      String type, MediaKeySession.@Nullable RemoveEventListenerListenerUnionType listener);

  @JsOverlay
  default Promise update(ArrayBuffer response) {
    return update(Js.<MediaKeySession.UpdateResponseUnionType>uncheckedCast(response));
  }

  @JsOverlay
  default Promise update(ArrayBufferView response) {
    return update(Js.<MediaKeySession.UpdateResponseUnionType>uncheckedCast(response));
  }

  Promise update(MediaKeySession.UpdateResponseUnionType response);
}
