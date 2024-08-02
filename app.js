const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

function createBarChart(sample) {
    d3.json(url).then(function(data) {
        let samples = data.samples.filter(s => s.id === sample)[0];
        let sample_values = samples.sample_values.slice(0, 10).reverse();
        let otu_ids = samples.otu_ids.slice(0, 10).reverse().map(id => `OTU ${id}`);
        let otu_labels = samples.otu_labels.slice(0, 10).reverse();

        let trace = {
            x: sample_values,
            y: otu_ids,
            text: otu_labels,
            type: 'bar',
            orientation: 'h'
        };

        let layout = {
            title: 'Top 10 OTUs Found',
            margin: { t: 30, l: 150 }
        };

        Plotly.newPlot('bar', [trace], layout);
    });
}

function createBubbleChart(sample) {
    d3.json(url).then(function(data) {
        let samples = data.samples.filter(s => s.id === sample)[0];
        let otu_ids = samples.otu_ids;
        let sample_values = samples.sample_values;
        let otu_labels = samples.otu_labels;

        let trace = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: 'markers',
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: 'Earth'
            }
        };

        let layout = {
            title: 'OTU ID vs. Sample Value',
            showlegend: false,
            height: 600,
            width: 1200
        };

        Plotly.newPlot('bubble', [trace], layout);
    });
}

function displayMetadata(sample) {
    d3.json(url).then(function(data) {
        let metadata = data.metadata.filter(m => m.id == sample)[0];
        let sampleMetadata = d3.select("#sample-metadata");
        sampleMetadata.html("");

        Object.entries(metadata).forEach(([key, value]) => {
            sampleMetadata.append("h6").text(`${key.toUpperCase()}: ${value}`);
        });
    });
}

function optionChanged(sample) {
    createBarChart(sample);
    createBubbleChart(sample);
    displayMetadata(sample);
}

function init() {
    d3.json(url).then(function(data) {
        let sampleNames = data.names;
        let dropdownMenu = d3.select("#selDataset");

        sampleNames.forEach((sample) => {
            dropdownMenu.append("option").text(sample).property("value", sample);
        });

        let firstSample = sampleNames[0];
        createBarChart(firstSample);
        createBubbleChart(firstSample);
        displayMetadata(firstSample);
    });
}

init();

