const covid19ImpactEstimator = (data) => {
    const input = data;
  impact.currentlyInfected = data.currentlyInfected * 10;
  severeImpact.currentlyInfected = data.reportedCases * 50;
  infectionsByRequestedTime =
  data.impact * 1024
  data.severeImpact * 1024
  data.currentlyInfected * 1024;
  return {
        data: input,
        impact: {},
        severeImpact: {},
        reportedCases: {},
        currentlyInfected: {}
    };

};

export default covid19ImpactEstimator;
