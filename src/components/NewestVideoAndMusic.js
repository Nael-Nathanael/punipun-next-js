import React from 'react';

export default function NewestVideoAndMusic() {
  return (
    <div className="card shadow-sm mb-5">
      <div className="card-header bg-transparent border-bottom-0">
        <h2 className="exo2 light mb-0">Newest Video and Music</h2>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-lg-6 mb-2">
            <div className="w-100">
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                height="380"
                src="https://www.youtube.com/embed/AwBKv01Vvfc"
                title="YouTube video player"
                width="100%"
              ></iframe>
            </div>
          </div>
          <div className="col-lg-6 mb-2">
            <div className="w-100">
              <iframe
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                height="380"
                src="https://open.spotify.com/embed/artist/0jtLtQ8moQG460uUUiRbby"
                width="100%"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};