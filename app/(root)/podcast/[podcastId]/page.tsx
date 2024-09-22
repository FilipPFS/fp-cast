import React from "react";

type Props = {};

const SinglePodcast = ({ params }: { params: { podcastId: string } }) => {
  return <p className="text-white-1">PodcastDetails for {params.podcastId}</p>;
};

export default SinglePodcast;
