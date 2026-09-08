import React from 'react';
import '../styles/projects.css';

const publications = [
    {
        year: '2026',
        title: 'Assembly bias and the redshift evolution of intrinsic alignments for LRGs',
        context:
            'Using the FLAMINGO hydrodynamical simulations, I investigate how intrinsic alignments depend on halo formation history in addition to halo mass. The work demonstrates an assembly-bias signal in galaxy and halo alignments and develops an empirical model for their mass and redshift evolution.',
        link: 'https://ui.adsabs.harvard.edu/abs/2026arXiv260700785H/abstract',
        journal: 'arXiv',
    },
    {
        year: '2026',
        title: 'Intrinsic alignments in the FLAMINGO simulations with two-point statistics',
        context:
            'A comprehensive study of intrinsic alignments in the FLAMINGO simulations using galaxy clustering and position–shape two-point statistics. I introduce TATT-M, a mass-dependent extension of the TATT model that retains its flexibility while reducing the number of free parameters.',
        link: 'https://ui.adsabs.harvard.edu/abs/2026A%26A...711A.235H/abstract',
        journal: 'Astronomy & Astrophysics',
    },
    {
        year: '2025',
        title: 'Unbiased estimates of the shapes of haloes using the positions of satellite galaxies',
        context:
            'I develop a statistically motivated method to correct biases in dark matter halo shapes measured from sparsely sampled satellite galaxies. The method accounts for sampling noise and enables more reliable halo-shape measurements at lower satellite counts and halo masses.',
        link: 'https://ui.adsabs.harvard.edu/abs/2025A%26A...699A.192H/abstract',
        journal: 'Astronomy & Astrophysics',
    },
    {
        year: '2024',
        title: 'Selection functions of strong lens finding neural networks',
        context:
            'During my MSc, I investigated selection biases introduced by convolutional neural networks used to identify strong gravitational lenses. The work showed that lens-finding networks preferentially select systems with larger Einstein radii and more concentrated sources, with implications for future wide-field surveys.',
        link: 'https://ui.adsabs.harvard.edu/abs/2024MNRAS.534.1093H/abstract',
        journal: 'Monthly Notices of the Royal Astronomical Society',
    },
];

const Projects = () => {
    return (
        <div className="publication-grid">

            {publications.map((paper, index) => (
                <article className="publication-card" key={index}>

                    <div className="publication-year">
                        {paper.year}
                    </div>

                    <div className="publication-content">

                        <div className="publication-journal">
                            {paper.journal}
                        </div>

                        <h2>
                            {paper.title}
                        </h2>

                        <p>
                            {paper.context}
                        </p>

                        <a
                            href={paper.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="publication-link"
                        >
                            Read paper →
                        </a>

                    </div>

                </article>
            ))}

        </div>
    );
};

export default Projects;