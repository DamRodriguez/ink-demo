"use client";

import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import RollText from "@/components/gsap/RollText";
import {
  buttonClass,
  buttonTextColors,
  type ButtonVariant,
} from "./button.style";

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
  children: ReactNode;
  variant?: ButtonVariant;
  full?: boolean;
  small?: boolean;
  className?: string;
  text?: string;
  textMainClassName?: string;
  textHoverClassName?: string;
};

export function Button({
  children,
  variant,
  full,
  small,
  className,
  type = "button",
  text,
  textMainClassName,
  textHoverClassName,
  ...props
}: ButtonProps) {
  const textColors = buttonTextColors(variant);
  const isDisabled = props.disabled ?? false;

  return (
    <button
      {...props}
      type={type}
      className={clsx(
        buttonClass({ variant, full, small, disabled: isDisabled }),
        className,
      )}
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
    </button>
  );
}
