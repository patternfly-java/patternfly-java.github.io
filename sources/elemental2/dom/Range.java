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
public class Range {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface CreateContextualFragmentP0UnionType {
    @JsOverlay
    static Range.CreateContextualFragmentP0UnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default TrustedHTML asTrustedHTML() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }

    @JsOverlay
    default boolean isTrustedHTML() {
      return (Object) this instanceof TrustedHTML;
    }
  }

  @JsOverlay public static final int END_TO_END = Range__Constants.END_TO_END;
  @JsOverlay public static final int END_TO_START = Range__Constants.END_TO_START;
  @JsOverlay public static final int START_TO_END = Range__Constants.START_TO_END;
  @JsOverlay public static final int START_TO_START = Range__Constants.START_TO_START;
  public boolean collapsed;
  public @Nullable Node commonAncestorContainer;
  public @Nullable Node endContainer;
  public double endOffset;
  public @Nullable Node startContainer;
  public double startOffset;

  public native @Nullable DocumentFragment cloneContents();

  public native @Nullable Range cloneRange();

  public native void collapse(boolean toStart);

  public native int compareBoundaryPoints(int how, @Nullable Range sourceRange);

  public native double comparePoint(@Nullable Node p0, double p1);

  public native @Nullable DocumentFragment createContextualFragment(
      Range.CreateContextualFragmentP0UnionType p0);

  @JsOverlay
  public final @Nullable DocumentFragment createContextualFragment(String p0) {
    return createContextualFragment(
        Js.<Range.CreateContextualFragmentP0UnionType>uncheckedCast(p0));
  }

  @JsOverlay
  public final @Nullable DocumentFragment createContextualFragment(TrustedHTML p0) {
    return createContextualFragment(
        Js.<Range.CreateContextualFragmentP0UnionType>uncheckedCast(p0));
  }

  public native double deleteContents();

  public native void detach();

  public native @Nullable DocumentFragment extractContents();

  public native DOMRect getBoundingClientRect();

  public native ClientRectList getClientRects();

  public native @Nullable DocumentFragment insertNode(@Nullable Node newNode);

  public native boolean intersectsNode(@Nullable Node p0);

  public native boolean isPointInRange(@Nullable Node p0, double p1);

  public native void selectNode(@Nullable Node refNode);

  public native void selectNodeContents(@Nullable Node refNode);

  public native void setEnd(@Nullable Node refNode, int offset);

  public native void setEndAfter(@Nullable Node refNode);

  public native void setEndBefore(@Nullable Node refNode);

  public native void setStart(@Nullable Node refNode, int offset);

  public native void setStartAfter(@Nullable Node refNode);

  public native void setStartBefore(@Nullable Node refNode);

  public native void surroundContents(@Nullable Node newParent);
}
