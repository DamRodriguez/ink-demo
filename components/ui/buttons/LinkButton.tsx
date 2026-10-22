import clsx from "clsx";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import RollText from "@/components/gsap/RollText";
import {
  buttonClass,
  buttonTextColors,
  type ButtonVariant,
} from "./button.style";

type LinkButtonProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "className"
> & {
  children: ReactNode;
  variant?: ButtonVariant;
  full?: boolean;
  small?: boolean;
  className?: string;
  external?: boolean;
  text?: string;
  textMainClassName?: string;
  textHoverClassName?: string;
};

export function LinkButton({
  children,
  variant,
  full,
  small,
  className,
  external = false,
  target,
  rel,
  text,
  textMainClassName,
  textHoverClassName,
  ...props
}: LinkButtonProps) {
  const textColors = buttonTextColors(variant);

  return (
    <a
      {...props}
      target={external ? "_blank" : target}
      rel={external ? "noopener noreferrer" : rel}
      className={clsx(buttonClass({ variant, full, small }), className)}
    >
      {text ? (
        <RollText
          text={text}
          mainClassName={textMainClassName ?? textColors.main}
          hoverClassName={textHoverClassName ?? textColors.hover}
        />
      ) : (
        children
      )}
    </a>
  );
}
