# plotly-challenge
Belly Button Biodiversity

*Collaborators: Sy Flores*

---

## **Table of Contents**
- [Abstract](#abstract)
- [Repository](#repository)

---

## Abstract
We are intending to build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels. This will be done primarily through the [Plotly.js](https://plotly.com/javascript/) charting library.
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Repository
This section serves as a means to navigate the project/repository.

- **data**
    - samples.json
        - This file contains the data used in the project, originating from [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/)
- **images**
    - bacteria.jpg
        - .jpg file used in the instructions of the assignment
    - bubble_chart.png
        - Example of what the bubble chart should look like
    - dashboard_part1.png
        - Part 1 of an example of what a complete dashboard should look like
    - dashboard_part2.png
        - Part 2 of an example of what a complete dashboard should look like
    - database_connection.png
        - An example of what the database connection for Heroku should look like (uncertain if this is applicable)
    - database_url.png
        - An example of what the database url for Heroku should look like, specifically in how it would connect to Postgres (uncertain if this is applicable)
    - deploy01.png
        - An example that shows which Heroku add-on should be used to connect to Postgres (uncertain if this is applicable)
    - deploy05.png
        - Basic instructions on how to download and use Heroku Git (uncertain if this is applicable)
    - dropdown.png
        - An example of how the dropdown for selecting the id should relatively look like when an id is selected
    - gauge.png
        - An example of how the gauge in the dashboard should look like
    - hw01.png
        - An example of how the horizontal barchart displaying top 10 OTUs should look like
    - hw02.png
        - An example of what the complete dashboard should look like
    - hw03.png
        - An example of the how the demographic info should be displayed when a certain id is selected
    - pie_chart.png
        - An example of a pie chart that doesn't appear to be referenced anywhere else
    - provision_database.png
        - An example of provisioning Heroku Postgres (uncertain if this is applicable)
- **static**
    - app.js 
        - This includes the primary JavaScript code that will contain the Plotly.js charts and other D3 actions
- index.html
  - This is both the home page and landing page for the website
  - This page will display the dashboard including all visualizations 
- README.md
  - The primary use of this file is to explain how to navigate the project and repository

---