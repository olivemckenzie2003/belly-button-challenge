

function init() {
  // Grab a dataset for the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
  });
}


function buildCharts(sample) {

  // Use `d3.json` to fetch the sample data for the plots
  d3.json("samples.json").then((data) => {
    var samples= data.samples;
    var resultsarray= samples.filter(sampleobject => 
        sampleobject.id == sample);
    var result= resultsarray[0]
  
    var ids = result.otu_ids;
    var labels = result.otu_labels;
    var Sample_Values = result.sample_values;

   // https://github.com/whitneylosinski/Belly_Button_Biodiversity/blob/master/charts.js    modified code for gauge
    
   // Create a variable that holds the metadata array.
    var metadata = data.metadata;
    // Create a variable that filters the metadata array for the object with the desired sample number.
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    // Create a variable that holds the first sample in the metadata array.
    var Result = resultArray[0];
    // Create a variable that holds the washing frequency.
    var wFreq = parseFloat(Result.wfreq);


    var gaugeData = {
    type: "indicator",
    value: wFreq,
    mode: "gauge+number",
    gauge: {
      axis: {range: [0,10], dtick: 2},
      
      bar: {color: "darkblue"},
      steps: [
        {range: [0,2], color: "red"},
        {range: [2,4], color: "orange"},
        {range: [4,6], color: "yellow"},
        {range: [6,8], color: "yellowgreen"},
        {range: [8,10], color: "green"}
      ],
    }
  };   
  // Create the layout for the gauge chart.
  var gaugeLayout = { 
    title: {
      text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week",
      y: 0.75,
    },
    margin: {
      l: 50,
      r: 50,
      b: 0,
      t: 50,
      pad: 50
    },
  };
  // Use Plotly to plot the gauge data and layout.
  Plotly.newPlot("gauge", [gaugeData], gaugeLayout);

  
  // Buble chart
    var LayoutBubble = {
      margin: { t: 0 },
      xaxis: { title: "OTU ID" },
      hovermode: "closest",
      };
  
      var DataBubble = [ 
      {
        x: ids,
        y: Sample_Values,
        text: labels,
        mode: "markers",
        marker: {
          color: ids,
          size: Sample_Values,
          }
      }
    ];

   // Plot bubble 
    Plotly.newPlot("bubble", DataBubble, LayoutBubble);  
   

    //Bar Chart
    var bar_data =[
      {
        y:ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
        x:Sample_Values.slice(0,10).reverse(),
        text:labels.slice(0,10).reverse(),
        type:"bar",
        orientation:"h"
  
      }
    ];
  
    //Plot Bar Chart
    var barLayout = {
      title: "Top 10 Bacteria Cultures Found",
      margin: { t: 30, l: 150 }
    };
  
    Plotly.newPlot("bar", bar_data, barLayout);
  });

}

  
  function init() {
  // reference to the dropdown select element
  var selector = d3.select("#selDataset");
  
  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
  
    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });

  
}

  function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
  
  // Initialize the dashboard
  init();
  }