const covid19ImpactEstimator = (data) => {
  const data = input;
  return {
    data: input,
    impact: {
      currentlyInfected: (data.reportedCases * 10) * (2 ** variation)
    },
    severeImpact: {
      currentlyInfected: data.reportedCases * 50,
      infectionByRequestedTime: (data.reportedCases * 50) * (2 ** variation)
    }
  } ;

};
export default covid19ImpactEstimator;
const variation = () => {
  let multiplier;
  const converter = data.periodType.toLowerCase()
  if (converter === "days") {
    multiplier = 1;
  }else if (converter === "weeks") {
    multiplier = 7;
  }else if (converter === "month") {
    multiplier = 30;
  }
  return Math.floor((variation * data.typeToElaspe) / 3);
}
