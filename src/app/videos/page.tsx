const videoPlaceholders = [
  {
    title: "Explainer Series",
    text: "A future YouTube embed for short, focused cyber explainers.",
  },
  {
    title: "Project Walkthroughs",
    text: "A future YouTube embed for demos, builds, and lab notes.",
  },
];

export default function VideosPage() {
  return (
    <main className="page-shell">
      <section className="site-container section-stack">
        <p className="eyebrow">Videos</p>
        <h1 className="display-heading">Cinematic lessons, ready for video.</h1>
        <p className="lead-text">
          Responsive YouTube embed placeholders are set up here. Real video IDs
          can be added when the channel content is ready.
        </p>
        <div className="gold-divider" />

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {videoPlaceholders.map((video) => (
            <article className="content-card" key={video.title}>
              <div className="video-frame flex items-center justify-center p-6 text-center">
                <div>
                  <p className="eyebrow">YouTube Embed</p>
                  <h2 className="card-title mt-3">{video.title}</h2>
                  <p className="card-text">{video.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
