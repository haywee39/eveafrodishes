
// This js is used to call the company name section on all pages 

fetch("companyname/companyname.html")
			.then(response => response.text())
			.then(data => {
			document.getElementById("company-name").innerHTML = data;
			})
			.catch(error => console.error("Error loading footer:", error));
