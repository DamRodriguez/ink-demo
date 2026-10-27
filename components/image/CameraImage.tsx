import CustomImage from "@/components/image/CustomImage";
import clsx from "clsx";

type CameraImageProps = {
  src: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
  width?: number;
  height?: number;
};

export function CameraImage({
  src,
  alt = "Imagen decorativa",
  className,
  imageClassName,
  width = 400,
  height = 400,
}: CameraImageProps) {
  return (
    <div
      className={clsx(
        "border-[1rem] border-b-[5rem] border-paper shadow-s5 outline outline-primary-on-light-text/20 xl:border-[1.5rem] xl:border-b-[8rem]",
        className,
      )}
    >
      <CustomImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={clsx(
          "block h-[10rem] w-[15rem] object-cover xl:h-[18rem] xl:w-[25rem]",
          imageClassName,
        )}
      />
    </div>
  );
}
