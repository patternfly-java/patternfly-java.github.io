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
package elemental2.webstorage;

import elemental2.dom.Event;
import elemental2.dom.EventInit;
import elemental2.dom.URL;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import org.jspecify.annotations.Nullable;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class StorageEvent extends Event {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface InitStorageEventUrlArgUnionType {
    @JsOverlay
    static StorageEvent.InitStorageEventUrlArgUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default URL asURL() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }

    @JsOverlay
    default boolean isURL() {
      return (Object) this instanceof URL;
    }
  }

  public String key;
  public @Nullable String newValue;
  public @Nullable String oldValue;
  public @Nullable Storage storageArea;
  public String url;

  public StorageEvent(String type, StorageEventInit eventInitDict) {
    // This super call is here only for the code to compile; it is never executed.
    super((String) null, (@Nullable EventInit) null);
  }

  public StorageEvent(String type) {
    // This super call is here only for the code to compile; it is never executed.
    super((String) null, (@Nullable EventInit) null);
  }

  public native void initStorageEvent(
      String typeArg,
      boolean canBubbleArg,
      boolean cancelableArg,
      String keyArg,
      @Nullable String oldValueArg,
      @Nullable String newValueArg,
      StorageEvent.InitStorageEventUrlArgUnionType urlArg,
      @Nullable Storage storageAreaArg);

  @JsOverlay
  public final void initStorageEvent(
      String typeArg,
      boolean canBubbleArg,
      boolean cancelableArg,
      String keyArg,
      @Nullable String oldValueArg,
      @Nullable String newValueArg,
      String urlArg,
      @Nullable Storage storageAreaArg) {
    initStorageEvent(
        typeArg,
        canBubbleArg,
        cancelableArg,
        keyArg,
        oldValueArg,
        newValueArg,
        Js.<StorageEvent.InitStorageEventUrlArgUnionType>uncheckedCast(urlArg),
        storageAreaArg);
  }

  @JsOverlay
  public final void initStorageEvent(
      String typeArg,
      boolean canBubbleArg,
      boolean cancelableArg,
      String keyArg,
      @Nullable String oldValueArg,
      @Nullable String newValueArg,
      URL urlArg,
      @Nullable Storage storageAreaArg) {
    initStorageEvent(
        typeArg,
        canBubbleArg,
        cancelableArg,
        keyArg,
        oldValueArg,
        newValueArg,
        Js.<StorageEvent.InitStorageEventUrlArgUnionType>uncheckedCast(urlArg),
        storageAreaArg);
  }
}
