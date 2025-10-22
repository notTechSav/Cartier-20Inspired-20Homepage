import { CSSProperties } from "react";

export const commonStyles = {
  fullSize: {
    width: "100%",
    height: "100%",
  } as CSSProperties,

  fullWidth: {
    width: "100%",
  } as CSSProperties,

  fullHeight: {
    height: "100%",
  } as CSSProperties,

  fullCover: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
  } as CSSProperties,

  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as CSSProperties,

  flexBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  } as CSSProperties,

  flexCol: {
    display: "flex",
    flexDirection: "column" as const,
  } as CSSProperties,

  absoluteInset: {
    position: "absolute" as const,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  } as CSSProperties,

  absoluteOverlay: (bgColor?: string) =>
    ({
      position: "absolute" as const,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: bgColor || "rgba(0, 0, 0, 0.3)",
    }) as CSSProperties,

  relativePosition: {
    position: "relative" as const,
  } as CSSProperties,

  containerPadding: {
    paddingLeft: "var(--outer-gutter)",
    paddingRight: "var(--outer-gutter)",
  } as CSSProperties,

  sectionPadding: {
    paddingTop: "var(--spacer-block-top)",
    paddingBottom: "var(--spacer-block-bottom)",
  } as CSSProperties,
};

export function mergeStyles(
  ...styles: (CSSProperties | undefined)[]
): CSSProperties {
  return Object.assign({}, ...styles.filter(Boolean));
}
