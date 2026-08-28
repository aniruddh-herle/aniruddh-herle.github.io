import React from 'react';
import '../styles/projects.css';

const Projects = () => {

  const projects = [

    {
      year: '2026',
      title: 'Assembly bias and the redshift evolution of intrinsic alignments for LRGs',
      description:
        'I investigated the redshift evolution of intrinsic alignments for luminous red galaxies using the FLAMINGO hydrodynamical simulations. The work provides an empirical model for the evolution of the alignment amplitude with halo mass and redshift, and demonstrates that galaxy formation history introduces an additional dependence of the alignment signal, commonly referred to as assembly bias.',
      type: 'First-author publication',
      buttonText: 'Google Scholar',
      buttonLink:
        'https://scholar.google.com/citations?user=_hhU_nMAAAAJ&hl=en'
    },

    {
      year: '2026',
      title: 'Intrinsic alignments in the FLAMINGO simulations with two-point statistics',
      description:
        'A comprehensive study of intrinsic alignments in the FLAMINGO simulations, covering mass dependence, redshift evolution, feedback and higher-order contributions. I developed the TATT-M model, which exploits relationships between the higher-order TATT terms to retain model flexibility while reducing the number of free parameters. TATT-M has been selected as the fiducial intrinsic-alignment model for Euclid.',
      type: 'First-author publication',
      buttonText: 'Google Scholar',
      buttonLink:
        'https://scholar.google.com/citations?user=_hhU_nMAAAAJ&hl=en'
    },

    {
      year: '2025',
      title: 'Unbiased estimates of the shapes of haloes using the positions of satellite galaxies',
      description:
        'I developed a statistically unbiased method for estimating dark-matter halo shapes from the positions of satellite galaxies. Using the multiple-resolution FLAMINGO simulations, I quantified and corrected sampling noise arising from sparse satellite populations, recovering halo shapes to substantially lower masses than are accessible through weak lensing.',
      type: 'First-author publication',
      buttonText: 'Google Scholar',
      buttonLink:
        'https://scholar.google.com/citations?user=_hhU_nMAAAAJ&hl=en'
    },

    {
      year: '2023',
      title: 'Selection functions of strong lens finding neural networks',
      description:
        'During my MSc in Astrophysics at LMU Munich, I investigated the selection functions of neural networks used to identify strong gravitational lenses. The work quantified detection biases introduced by machine-learning-based lens searches and their implications for astronomical surveys.',
      type: 'First-author publication',
      buttonText: 'Google Scholar',
      buttonLink:
        'https://scholar.google.com/citations?user=_hhU_nMAAAAJ&hl=en'
    },

    {
      year: '2026',
      title: 'Can’t aVOID IA: intrinsic alignments of galaxies around voids',
      description:
        'I am leading an ongoing study of galaxy alignments around cosmic voids using hydrodynamical simulations. This work provides the first detection of galaxy–void alignments in a hydrodynamical simulation and investigates their dependence on feedback and environment.',
      type: 'In preparation',
      buttonText: 'Google Scholar',
      buttonLink:
        'https://scholar.google.com/citations?user=_hhU_nMAAAAJ&hl=en'
    },

    {
      year: '2026',
      title: 'Halo inertia tensors as random matrices',
      description:
        'An interdisciplinary project applying ideas from random matrix theory to the statistics of dark-matter halo shapes. I contribute hydrodynamical simulation expertise, catalogue construction and the interpretation of the resulting models in the context of halo formation and intrinsic-alignment mitigation.',
      type: 'In preparation',
      buttonText: 'Google Scholar',
      buttonLink:
        'https://scholar.google.com/citations?user=_hhU_nMAAAAJ&hl=en'
    }

  ];

  return (
    <div className="projects-grid">

      {projects.map((project, index) => (

        <div className="project-card" key={index}>

          <div className="project-year">
            {project.year}
          </div>

          <div className="project-content">

            <div className="project-type">
              {project.type}
            </div>

            <h2>{project.title}</h2>

            <p>
              {project.description}
            </p>

            <a
              href={project.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              {project.buttonText}
            </a>

          </div>

        </div>

      ))}

    </div>
  );
};

export default Projects;