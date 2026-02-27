import Image from "next/image";

interface Photo {
  src: string;
  alt: string;
}

interface Props {
  photos: Photo[];
  slug: string;
}

export default function PhotoGrid({ photos, slug }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {photos.map((photo, i) => (
        <div
          key={i}
          className="aspect-[4/3] bg-ocean-100 rounded-xl overflow-hidden relative"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
