# Belly Button Biodiversity Dashboard

## Overview

This project is an interactive dashboard that explores the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels. The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Features

- **Interactive Dropdown**: Select a sample from the dropdown to view the related data.
- **Metadata Panel**: Displays demographic information for the selected sample.
- **Bar Chart**: Visualizes the top 10 OTUs found in the selected sample.
- **Bubble Chart**: Shows the sample values for each OTU ID in the selected sample.

## Files

- `index.html`: The main HTML file that sets up the structure of the dashboard.
- `samples.json`: The dataset containing information about the samples.
- `static/js/app.js`: The JavaScript file containing the logic for fetching data and building the charts.
- `static/css/style.css`: (Optional) CSS file for styling the dashboard.

## Getting Started

### Prerequisites

- Web browser (e.g., Chrome, Firefox)
- Text editor (e.g., VS Code, Sublime Text)

### Installation

1. **Clone the repository**:
    ```sh
    git clone git@github.com:Alliekj/Dashboard-Challenge.git
    ```
2. **Navigate to the project directory**:
    ```sh
    cd Dashboard-Challenge
    ```

### Running the Dashboard

1. Open `index.html` in a web browser.

### Development

#### Setup

1. **Install D3 and Plotly**:
    ```sh
    npm install d3 plotly.js
    ```

#### Editing

- **HTML**: Open `index.html` in your text editor to make changes to the structure of the dashboard.
- **JavaScript**: Open `static/js/app.js` to modify the data fetching and chart rendering logic.
- **CSS**: Open `static/css/style.css` to change the styling of the dashboard.

### Deployment

1. **Push changes to GitHub**:
    ```sh
    git add .
    git commit -m "Your commit message"
    git push origin main
    ```

2. **Deploy to GitHub Pages**:
    - Go to your `Dashboard-Challenge` repository on GitHub.
    - Click on **Settings**.
    - Scroll down to the **Pages** section.
    - Under **Source**, select the `main` branch and the `/root` directory.
    - Click **Save**.

Your site will be published at `https://your-username.github.io/Dashboard-Challenge`.

## Usage

1. **Select a sample** from the dropdown menu.
2. **View the metadata** for the selected sample in the metadata panel.
3. **Explore the bar chart** to see the top 10 OTUs found in the selected sample.
4. **Interact with the bubble chart** to analyze the sample values for each OTU ID.


## Acknowledgments

- This project was developed as part of a data visualization challenge.
- Data source: [Belly Button Biodiversity dataset](https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json)



