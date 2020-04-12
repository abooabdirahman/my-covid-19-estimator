const covid19ImpactEstimator = (data) => {
    const input = data;
    return {
        data: input,
        impact: {},
        minimalImpact: {},
        severeImpact: {}
    };
};

export default covid19ImpactEstimator;
