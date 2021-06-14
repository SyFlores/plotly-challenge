// Step 1:  Use the D3 Library to read in samples.json
var filePath = "data/samples.json";
d3.json(filePath).then(function(data) {
    console.log(data);
    var dataBB = data;
    var names = data.names;
    var metadata = data.metadata;
    var samples = data.samples;
});


// Step 2: Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual
// Use sample_values as the values for the bar chart
// Use otu_ids as the labels for the bar chart
// Use otu_labels as the hovertext for the chart



// Step 3: Create a bubble chart that displays each sample
// Use otu_ids for the x values
// Use sample_values for the y values
// Use sample_values for the marker size
// Use otu_ids for the marker colors
// Use otuloabels for the text values



// Step 4: Display the sample metadata, i.e., an individual's demographic information



// Step 5: Display each key-value pair from the metadata JSON object somewhere on the Demographic Info section



// Step 6: Update all of the plots any time that new sample is selected
// This will be done by filtering on the specified Id and then calling back on all the plot functions with the new data