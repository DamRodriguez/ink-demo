"use client";

import clsx from "clsx";
import Image, { type ImageProps } from "next/image";

type CustomImageProps = ImageProps & {
  imageClassName?: string;
};

export default function CustomImage({
  alt,
  className,
  imageClassName,
  fill,
  priority = false,
  loading,
  placeholder = "blur",
  ...props
}: CustomImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      fill={fill}
      priority={priority}
      blurDataURL="/images/placeholder.svg"
      loading={priority ? undefined : (loading ?? "lazy")}
      placeholder={placeholder}
      className={clsx(
        fill && "bg-placeholder object-cover",
        imageClassName,
        className,
      )}
    />
  );
}
