import { formatTime } from "@/lib/formatTime";
import { PodcastProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  popularPodcasts: PodcastProps[];
};

const PopularPodcasts = ({ popularPodcasts }: Props) => {
  return (
    <div className="flex flex-col gap-5 text-white-1 mt-8 mb-8">
      <h1 className="text-20 font-bold text-white-1">Most Popular Podcasts</h1>
      {popularPodcasts.map((podcast, index) => (
        <Link
          key={podcast._id}
          href={`/podcasts/${podcast._id}`}
          className="flex items-center justify-start gap-5 md:flex-row"
        >
          <div className="flex items-center gap-3">
            <span className="hidden md:block font-16 font-bold">
              {index + 1}
            </span>
            <Image
              src={podcast.imageUrl!}
              width={80}
              height={80}
              alt="podcast thumbnail"
            />
          </div>
          <div className="flex flex-col w-full items-start justify-beetween gap-2 ml-3 md:flex-row md:justify-between">
            <section className="flex ml-2 items-center gap-4">
              <h1 className="text-16 font-bold">{podcast.podcastTitle}</h1>
            </section>
            <section className="flex items-center gap-4 md:gap-12">
              <div className="flex items-center gap-4">
                <Image
                  src={"/icons/headphone.svg"}
                  alt="headphone"
                  width={24}
                  height={24}
                />
                <p className="font-bold">{podcast.views}</p>
              </div>
              <div className="flex justify-start w-[100px] items-center gap-4">
                <Image
                  src={"/icons/clock.webp"}
                  width={24}
                  height={24}
                  alt="duration"
                />
                <p className="font-bold">{formatTime(podcast.audioDuration)}</p>
              </div>
            </section>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PopularPodcasts;
