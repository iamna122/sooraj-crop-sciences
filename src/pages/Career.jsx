import React from "react";

export default function CareerPage() {
  const tags = [
    "View all",
    "Agriculture",
    "Field Operations",
    "Research",
    "Crop Science",
    "Production",
    "Management",
  ];

  const jobs = [
    {
      title: "Field Agronomist",
      desc: "We’re looking for an agronomist to support farmers with crop guidance and field visits.",
      type1: "On-field",
      type2: "Full-time",
    },
    {
      title: "Crop Protection Specialist",
      desc: "Help farmers diagnose crop diseases and recommend biological & chemical solutions.",
      type1: "On-field",
      type2: "Full-time",
    },
    {
      title: "Farm Outreach Coordinator",
      desc: "Connect with farmers, organize events, and spread awareness about our products.",
      type1: "Hybrid",
      type2: "Full-time",
    },
  ];

  return (
    <>
      <style>{`
        .career-page {
          font-family: Arial, sans-serif;
          background: #f7f6f3;
          min-height: 100vh;
          color: #1a1a1a;
          padding-bottom: 50px;
        }

        /* HERO SECTION REDUCED HEIGHT */
        .hero {
          width: 100%;
          height: 50vh; /* Reduced from 80vh */
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(to right, #d9f2d9, #f2fdf2);
          padding: 20px;
        }

        .hero-title {
          font-size: 36px;
          font-weight: bold;
          color: #145814;
          margin-bottom: 10px;
          text-align: center;
        }

        .hero-text {
          font-size: 16px;
          color: #145814;
          max-width: 700px;
          text-align: center;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-top: 20px;
        }

        .tag {
          padding: 8px 18px;
          border-radius: 30px;
          border: 1px solid #ccc;
          background: #fff;
          cursor: pointer;
          transition: 0.3s;
          font-weight: 500;
        }

        .tag:hover {
          background: #e6f7e6;
        }

        .jobs {
          max-width: 800px;
          margin: 40px auto;
          padding: 0 20px;
        }

        .job-card {
          background: #fff;
          padding: 25px;
          border-radius: 20px;
          border: 1px solid #ddd;
          margin-bottom: 25px;
          transition: 0.3s;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }

        .job-card:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
        }

        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .job-title {
          font-size: 24px;
          font-weight: 600;
        }

        .apply {
          color: #1b752e;
          font-weight: 600;
          text-decoration: none;
        }

        .apply:hover {
          text-decoration: underline;
        }

        .job-desc {
          color: #555;
          margin-top: 10px;
        }

        .job-types {
          display: flex;
          gap: 12px;
          margin-top: 15px;
        }

        .job-type {
          padding: 6px 14px;
          background: #e6f7e6;
          color: #145814;
          border-radius: 30px;
          font-weight: 600;
          font-size: 14px;
        }
      `}</style>

      <div className="career-page">
        <div className="hero">
          <h1 className="hero-title">Be part of our mission</h1>
          <p className="hero-text">
            At Sooraj Crop Sciences, we empower farmers with innovation. Join our
            mission to improve agriculture with sustainable crop solutions.
          </p>
          <div className="tags">
            {tags.map((tag) => (
              <button key={tag} className="tag">{tag}</button>
            ))}
          </div>
        </div>

        <section className="jobs">
          {jobs.map((job) => (
            <div className="job-card" key={job.title}>
              <div className="job-header">
                <h2 className="job-title">{job.title}</h2>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apply"
                >
                  Apply ↗
                </a>
              </div>
              <p className="job-desc">{job.desc}</p>
              <div className="job-types">
                <span className="job-type">{job.type1}</span>
                <span className="job-type">{job.type2}</span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}