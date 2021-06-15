// Step 1:  Use the D3 Library to read in samples.json
var filePath = "data/samples.json";

function chartLoad(otuChoice) {
    d3.json(filePath).then(function(data) {
        console.log(data);
        var dataBB = data;
        var names = data.names;
        var metadata = data.metadata[0];
        var filterSamples = data.samples.filter(filterino => filterino.id === otuChoice);
        var samples = filterSamples[0];

        var sampleValues = samples.sample_values;
        console.log(sampleValues);
        
        var otuIds = samples.otu_ids;
        console.log(otuIds);
        
        var otuLabels = samples.otu_labels;
        console.log(otuLabels);

        // Step 2: Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual
        // Use sample_values as the values for the bar chart
        // Use otu_ids as the labels for the bar chart
        // Use otu_labels as the hovertext for the chart

        // Sample values are already in descending order so all we have to do is select the first 10 instances
        // Since the barchart places these in order from bottom to top, will have to use .reverse() on every passed argument to flip the order on the chart

        // We need to convert otuIDs to a string in order to more properly position the tickmarks on the y-axis
        // Otherwise, the tick marks will be positioned at the integer value
        var otuIdsStr = otuIds.slice(0, 10).map(id => `OTU ${id}`);

        var traceBar = [{
            x : sampleValues.slice(0, 10).reverse(),
            y : otuIdsStr.reverse(),
            text : otuLabels.slice(0, 10).reverse(),
            orientation : "h",
            type : "bar"
        }];

        var layoutBar = {
            // It appears unnecessary to specify a layout as the output matches what we see in the example
        };

        Plotly.newPlot(
            "bar", traceBar
            // ,layoutBar
        );


        // Step 3: Create a bubble chart that displays each sample
        // Use otu_ids for the x values
        // Use sample_values for the y values
        // Use sample_values for the marker size
        // Use otu_ids for the marker colors
        // Use otuloabels for the text values

        var traceBubble = [{
            x : otuIds,
            y : sampleValues,
            text : otuLabels,
            mode : "markers",
            marker : {
                size : sampleValues,
                color : otuIds
            }
        }];

        var layoutBubble = {
            xaxis : {title : "OTU ID"}
        };

        Plotly.newPlot("bubble", traceBubble, layoutBubble);

        // Step 5: Display each key-value pair from the metadata JSON object somewhere on the Demographic Info section

    });

};

// Step 4: Display the sample metadata, i.e., an individual's demographic information
// We'll have to make every otuIds selectable in the dropdown and have it pass into a variable that will call back into the bubble chart and filter
// We'll have to do this outside of this (function) and call all other things, encluding the eventual data metadata display

// This will be called below so it'll filter on this when the page loads
function dataLoad() {
    var dropDown = d3.select(selDataset);

    d3.json(filePath).then((data) => {

        var dataBB = data;
        var names = data.names;
        var metadata = data.metadata[0];
        var samples = data.samples[0];

        names.forEach((name) => {
            dropDown.append("option").text(name).property("value", name)
        });

        // Will need to call placeholder data into other functions to build out plots on the selected dropdown
        // This is so it loads on something
        var pass = names[0];
        chartLoad(pass);

    });
};

function optionChanged(sickNewId) {
    chartLoad(sickNewId);
};



// Step 6: Update all of the plots any time that new sample is selected
// This will be done by filtering on the specified Id and then calling back on all the plot functions with the new data

dataLoad();