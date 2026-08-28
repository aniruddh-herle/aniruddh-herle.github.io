import React from 'react';
import { Chrono } from 'react-chrono';
import '../styles/timeline.css';

const entries = [
  {
    title: '2017',
    cardTitle: 'B.E. Electrical & Electronics Engineering',
    cardSubtitle: 'M. S. Ramaiah Institute of Technology, India',
    cardDetailedText:
      'Began undergraduate studies in Electrical and Electronics Engineering, developing a strong foundation in mathematics, electronics, programming, and quantitative methods.',
    date: '2017'
  },
  {
    title: '2020',
    cardTitle: 'Research & Machine Learning',
    cardSubtitle: 'Early research experience',
    cardDetailedText:
      'Began working on research projects applying machine learning and statistical methods to scientific and engineering problems, leading to several publications.',
    date: '2020'
  },
  {
    title: '2021',
    cardTitle: 'MSc Astrophysics',
    cardSubtitle: 'Ludwig Maximilian University of Munich, Germany',
    cardDetailedText:
      'Started an MSc in Astrophysics at LMU Munich, moving towards research in astrophysics, cosmology, and computational methods.',
    date: '2021'
  },
  {
    title: '2023',
    cardTitle: 'PhD in Cosmology',
    cardSubtitle: 'Leiden Observatory, Leiden University',
    cardDetailedText:
      'Started a PhD in Cosmology at Leiden Observatory under the supervision of Henk Hoekstra and Elisa Chisari. Research focuses on intrinsic alignments, galaxy–halo connections, weak lensing statistics, and hydrodynamical simulations.',
    date: '2023'
  },
  {
    title: '2024',
    cardTitle: 'FLAMINGO & Intrinsic Alignments',
    cardSubtitle: 'Large-scale structure and hydrodynamical simulations',
    cardDetailedText:
      'Developed a programme of research using the FLAMINGO simulations to investigate halo shapes, galaxy alignments, and the impact of astrophysical processes on weak-lensing analyses.',
    date: '2024'
  },
  {
    title: '2025',
    cardTitle: 'Halo Shapes & Satellite Sampling',
    cardSubtitle: 'Statistical methods for halo shape measurements',
    cardDetailedText:
      'Developed a statistically unbiased method for recovering dark-matter halo shapes from sparsely sampled satellite galaxies, with applications to weak lensing and halo occupation modelling.',
    date: '2025'
  },
  {
    title: '2026',
    cardTitle: 'Intrinsic Alignment Modelling',
    cardSubtitle: 'TATT-M, assembly bias & redshift evolution',
    cardDetailedText:
      'Developed the mass-dependent TATT-M intrinsic-alignment model and studied the redshift and assembly-history dependence of galaxy alignments. Current work also investigates intrinsic alignments around cosmic voids.',
    date: '2026'
  },
  {
    title: '2027',
    cardTitle: 'PhD Completion',
    cardSubtitle: 'Leiden Observatory',
    cardDetailedText:
      'Completing the PhD research programme, bringing together intrinsic alignments, hydrodynamical simulations, large-scale structure statistics, and applications to next-generation weak-lensing surveys.',
    date: '2027'
  }
];

const Timeline = () => {
  return (
    <Chrono
      items={entries}
      mode="VERTICAL_ALTERNATING"
      slideShow={false}
      hideControls={true}
      allowDynamicUpdate={true}
      titleDateFormat="YYYY"
      scrollable={false}
      cardHeight={180}
      theme={{
        primary: '#000000',
        secondary: '#ffffff',
        cardBgColor: '#ffffff',
        cardForeColor: '#000000',
        titleColor: '#000000',
        titleColorActive: '#000000'
      }}
    />
  );
};

export default Timeline;
