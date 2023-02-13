# belly-button-challenge


This assignment builds an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels. The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

D3 is a JavaScript library and framework for creating visualizations. D3 creates visualizations by binding the data and graphical elements to the Document Object Model (DOM). D3 associates (binding) the data (stuff you want to visualize) with the DOM. This allows the user to manipulate, change or add to the DOM.


Download starter code files and store them in cloned github folder on personal computer.
Use Visual studio to develope and execute code. Right click on index.html and select "open with live server" to run code 


samples.jason is a JSON file which contains sample date used.
JSON files  contain JSON objects which have zero, one, or more key-value pairs, also known as properties. The object is within curly braces {} and every every key-value pair is separated by a comma. key-value pair do not have to be stored in order.



The HTML file:

	 contains a refernce to the sample.js file 

	"https://d3js.org/d3.v5.min.js"     			imports the d3js library
	
  	"https://cdn.plot.ly/plotly-latest.min.js  		imports  charting library plotly.js which includes over 40 chart types, including 3D charts,   
	                                                        statistical graphs, SVG maps and dashboards.
								
  	"./static/js/app.js"					imports the app.js files where the D3.js code is implimented
  	
	"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"     	imports bootstrap capabilities into the html file 
	
	CDN stands for Content Delivery Network or Content Distribution Network. It helps us to improve the rendering time and website performance and is an open
	source front-end development framework for the creation of websites and web apps. Enables responsive development of mobile-first website and provides a 
	collection of syntax for template designs.


D3 library is used to read in samples.json into the sample.js where it is manipulated for analysis purposes using D3.js (Java Script)

In the app.js file  

For each sample a drop down menu showing Sample ID, is used to displayed information from that perticular sample in a horizontal bar chart, gauge chart, buble chart and a  metadata of an individual's demographic information in a information box.

 Horizontal bar chart of of the the top 10 OTUs found in that individual:

 	sample_values used as the values 

 	otu_ids as the labels 

	otu_labels as the hovertext over each bar

Bubble chart:

	otu_ids for the x values

	sample_values for the y values

	sample_values for the marker size

	otu_ids for the marker colors

	otu_labels for the hovertext text values


An individual's demographic information:

	id
        ethnicity 
	age
	gender
	location 
	wfreq
	bbtype

Gauge Chart:

	wFreq


Test Subject Id Number dropdown chart

	The ID number of each sample



Bar Chart, Bubble chart. An individual's demographic information, Gauge Chart and Test Subject Id Number dropdown chart are all displayed in a dashboard

	




