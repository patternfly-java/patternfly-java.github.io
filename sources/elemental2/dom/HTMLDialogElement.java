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
public class HTMLDialogElement extends HTMLElement {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ShowAnchorUnionType {
    @JsOverlay
    static HTMLDialogElement.@Nullable ShowAnchorUnionType of(@Nullable Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default @Nullable Element asElement() {
      return Js.cast(this);
    }

    @JsOverlay
    default @Nullable MouseEvent asMouseEvent() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isElement() {
      return (Object) this instanceof Element;
    }

    @JsOverlay
    default boolean isMouseEvent() {
      return (Object) this instanceof MouseEvent;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ShowModalAnchorUnionType {
    @JsOverlay
    static HTMLDialogElement.@Nullable ShowModalAnchorUnionType of(@Nullable Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default @Nullable Element asElement() {
      return Js.cast(this);
    }

    @JsOverlay
    default @Nullable MouseEvent asMouseEvent() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isElement() {
      return (Object) this instanceof Element;
    }

    @JsOverlay
    default boolean isMouseEvent() {
      return (Object) this instanceof MouseEvent;
    }
  }

  public boolean open;
  public String returnValue;

  public native void close();

  public native void close(String returnValue);

  public native void show();

  @JsOverlay
  public final void show(Element anchor) {
    show(Js.<HTMLDialogElement.@Nullable ShowAnchorUnionType>uncheckedCast(anchor));
  }

  @JsOverlay
  public final void show(MouseEvent anchor) {
    show(Js.<HTMLDialogElement.@Nullable ShowAnchorUnionType>uncheckedCast(anchor));
  }

  public native void show(HTMLDialogElement.@Nullable ShowAnchorUnionType anchor);

  public native void showModal();

  @JsOverlay
  public final void showModal(Element anchor) {
    showModal(Js.<HTMLDialogElement.@Nullable ShowModalAnchorUnionType>uncheckedCast(anchor));
  }

  @JsOverlay
  public final void showModal(MouseEvent anchor) {
    showModal(Js.<HTMLDialogElement.@Nullable ShowModalAnchorUnionType>uncheckedCast(anchor));
  }

  public native void showModal(HTMLDialogElement.@Nullable ShowModalAnchorUnionType anchor);
}
