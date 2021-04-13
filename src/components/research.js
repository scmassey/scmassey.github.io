import React from 'react';

const Research = () => (
  <section id="research" className="section">
    <div className="container">
      <h2 className="title">My Research</h2>
      <div className="content">
        <p className="subtitle">
          Assessing the impact of drug delivery versus sensitivity in glioblastoma treatment response
        </p>
        <div className="content is-size-5">
          <p>
            Glioblastoma is the most common type of brain cancer (and also the most aggressive). As part of a multi-center effort, we are trying to determine how the incomplete breakdown of the blood-brain barrier affects drug distribution in tumors. There are many ways we are studying this question, but my particular role has been using noninvasive imaging data from preclinical models to quantitatively assess the contributions of drug distribution and resistance to heterogeneous treatment outcomes.
          </p>
          <p>As a former patient caregiver, I am also interested in philosophy of medicine and support efforts toward improved quality of life and early incorporation of palliative care and social support for patients and their families.</p>
          <p>I earned my Ph.D. in Applied Mathematics from the University of Washington in 2016. Further details about my education, training, awards, teaching and mentorship can be found in my CV.</p>
        </div>
        <p className="subtitle">Environmentally-driven glioma growth via paracrine PDGF signaling</p>
        <div className="content is-size-5">
          <p>
            Glioblastoma is the most common type of brain cancer (and also the most aggressive). As part of a multi-center effort, we are trying to determine how the incomplete breakdown of the blood-brain barrier affects drug distribution in tumors. There are many ways we are studying this question, but my particular role has been using noninvasive imaging data from preclinical models to quantitatively assess the contributions of drug distribution and resistance to heterogeneous treatment outcomes.
          </p>
        </div>
        <p className="subtitle">
          Sensitivity analysis via Latin hypercube sampling and partial rank correlation coefficients
        </p>
        <div className="content is-size-5">
          <p>
            As part of model development, it can be helpful to study the sensitivity of the model outputs to the parameters. This is particularly true for parameter values that naturally vary according to some distribution or for parameters values that are difficult to estimate experimentally. One approach for investingating this sensitivity is to use Latin hypercube sampling of the model parameters to run monte carlo simulations and then assessing the partial rank correlation of the parameters with simulation results. I have applied this method for a number of models and am developing resources to make this technique easier to learn and utilize. Available on my GitHub page!
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Research;
