import type {
  ComponentPropsWithoutRef,
  ElementType,
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

type PolymorphicProps<T extends ElementType> = {
  as?: T;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "className">;

const createHeading = <TDefault extends ElementType>(
  defaultTag: TDefault,
  baseClasses: string,
) => {
  return <TExtends extends ElementType = TDefault>({
    as,
    className,
    ...props
  }: PolymorphicProps<TExtends>) => {
    const Component = (as ?? defaultTag) as ElementType;

    return <Component className={cn(baseClasses, className)} {...props} />;
  };
};

export const H2 = createHeading(
  "h2",
  "mb-6 text-luxury-black",
);

export const H3 = createHeading(
  "h3",
  "mb-4 text-luxury-black",
);
