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
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface MediaKeys {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface SetServerCertificateServerCertificateUnionType {
    @JsOverlay
    static MediaKeys.SetServerCertificateServerCertificateUnionType of(Object o) {
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

  MediaKeySession createSession();

  MediaKeySession createSession(String sessionType);

  @JsOverlay
  default Promise setServerCertificate(ArrayBuffer serverCertificate) {
    return setServerCertificate(
        Js.<MediaKeys.SetServerCertificateServerCertificateUnionType>uncheckedCast(
            serverCertificate));
  }

  @JsOverlay
  default Promise setServerCertificate(ArrayBufferView serverCertificate) {
    return setServerCertificate(
        Js.<MediaKeys.SetServerCertificateServerCertificateUnionType>uncheckedCast(
            serverCertificate));
  }

  Promise setServerCertificate(
      MediaKeys.SetServerCertificateServerCertificateUnionType serverCertificate);
}
