import Image, { getImageProps, type ImageProps } from "next/image";

type EditorialImageProps = ImageProps & {
  // Include the width needed by object-cover before the image is cropped.
  desktopSizes: string;
  desktopSrc?: string;
};

/** Keep the mobile source; let desktop optimize the full-resolution photo. */
export function EditorialImage({
  desktopSizes,
  desktopSrc,
  ...imageProps
}: EditorialImageProps) {
  let source = desktopSrc ?? imageProps.src;

  if (
    typeof source === "string" &&
    source.startsWith("https://images.pexels.com/")
  ) {
    const url = new URL(source);
    // Upsizing a 350px Pexels derivative cannot recover the original detail.
    url.searchParams.delete("w");
    url.searchParams.delete("h");
    source = url.toString();
  }

  const { props: desktop } = getImageProps({
    ...imageProps,
    src: source,
    sizes: desktopSizes,
  });

  return (
    <picture className="contents">
      <source
        media="(min-width: 1024px)"
        srcSet={desktop.srcSet}
        sizes={desktop.sizes}
      />
      <Image {...imageProps} />
    </picture>
  );
}
