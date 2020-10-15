import React from "react";
import Card from "components/Card";
import Button from "components/Button";

export default function FeatureVideos(props) {
  return (
    <>
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-8">
          <div className="section-title">
            <h4>{props.feature_title}</h4>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4">
          <div className="btn__all">
            <Button to="/" className="primary-btn">
              View All <span className="arrow_right"></span>
            </Button>
          </div>
        </div>
      </div>
      <div className="row">
        {props.videos.map((video, index) => (
          <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
            <Card
              episode={video.episode}
              comments={video.comments}
              views={video.views}
              categories={video.categories}
              title={video.title}
              image={video.image}
              type="1"
            />
          </div>
        ))}
      </div>
    </>
  );
}