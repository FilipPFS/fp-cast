"use client";
import PodcastCard from "@/components/PodcastCard";
import { Button } from "@/components/ui/button";
import React from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import PopularPodcasts from "@/components/PopularPodcasts";
import LoaderSpinner from "@/components/LoaderSpinner";

const Home = () => {
  const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);
  const popularPodcasts = useQuery(api.podcasts.getPodcastsByViews);

  if (!popularPodcasts) {
    return <LoaderSpinner />;
  }

  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>

        <div className="podcast_grid">
          {trendingPodcasts?.map(
            ({ _id, imageUrl, podcastTitle, podcastDescription }) => {
              return (
                <PodcastCard
                  key={_id}
                  imgUrl={imageUrl!}
                  title={podcastTitle}
                  description={podcastDescription}
                  podcastId={_id}
                />
              );
            }
          )}
        </div>
        <PopularPodcasts popularPodcasts={popularPodcasts} />
      </section>
    </div>
  );
};

export default Home;
