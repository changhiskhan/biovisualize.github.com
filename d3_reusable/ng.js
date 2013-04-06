
function BarChart($scope) {

  var chart = d3.custom.barChart(),
      conf = {gap: {label: "Gap %", value: "0", min: 0, max: 90},
              height: {label: "Height", value: "400", min: 50, max: 400}};

  function randomDataset(){
    return d3.range(~~(Math.random()*50)+1).map(function(d, i){return ~~(Math.random()*1000);});
  }

  function updateChartOption(opt, value){
    chart[opt].call(chart, value)
    d3.select('.chart').call(chart);
  }

  function updateChartData(){
    d3.select('.chart')
    .datum(randomDataset())
    .call(chart);
  }

  $scope.configurables = conf;
  $scope.ease = {bounce: "Bounce",
                 back: "Back",
                 "cubic-in-out": "Cubic"};

  var height = $scope.configurables.height.value,
      onhover = function(d, i){ d3.select('#message').text(d); };

  chart.width(500)
  .height(height)
  .on('customHover', onhover);

  updateChartData();

  $scope.update_option = function (opt) {
    updateChartOption(opt, $scope.configurables[opt].value);
  }

  $scope.effect = function (eff, value) {
    updateChartOption(eff, value);
    updateChartData();
  }
}