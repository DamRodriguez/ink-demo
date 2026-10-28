import CustomImage from "@/components/image/CustomImage";

type DemoImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

const PLACEHOLDER_SRC = "/images/placeholder.webp";

export function DemoImage({
  src,
  alt,
  className,
  sizes = "100vw",
  priority,
}: DemoImageProps) {
  return (
    <CustomImage
      src={src || PLACEHOLDER_SRC}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
