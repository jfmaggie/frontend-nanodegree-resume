var bio = {
	"name" : "Meichen Zhou",
	"role" : "Web Developer",	
	"contacts" : {
		"mobile" : "1234567890",
		"email" : "jfmaggie@gmail.com",
		"github" : "jfmaggie",
		"twitter" : "@jfmaggie",
		"location" : "Vancouver"
	},
	"welcomeMessage" : "Welcome to my page!",
	"skills" : ["html","css","javacript","python"],
	"biopic" : "images/fry.jpg"
};

bio.display = function() {
	// TODO: to display bio object in HTML
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	$("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
	$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
	$("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
	$("#topContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
	$("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));

	$("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
	$("#header").append(HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage));

	$("#header").append(HTMLskillsStart);
	for (var skill in bio.skills) {
		$("#header").append(HTMLskills.replace("%data%",bio.skills[skill]));
	};
	
}

var education = {
	"schools" : [
	{
		"name" : "UFV",
		"location" : "Abbotsford, BC",
		"degree" : "Bachelor",
		"majors" : ["CIS","Science"],
		"dates" : "Dec 30, 2012",
		"url" : "http://www.ufv.ca"
	},
	{
		"name" : "USST",
		"location" : "Shanghai, China",
		"degree" : "Bachelor",
		"majors" : ["Network Engieerning"],
		"dates" : "Jun 1, 2012",
		"url" : "http://www.usst.edu.cn"
	}
	],
	"onlineCourses" : [
	{
		"title" : "Javascript Basic",
		"school" : "Udacity",
		"dates" : "Dec 1, 2014",
		"url" : "http://www.udacity.com"
	},
	{
		"title" : "Intro to JQuery",
		"school" : "Udacity",
		"dates" : "Dec 1, 2014",
		"url" : "http://www.udacity.com"}
	]
};

education.display = function() {
	// TODO: to display education object in HTML

}

var work = {
	"jobs" : [
	{
		"employer" : "UFV",
		"title" : "IT Technician",
		"location" : "Abbotsford, BC",
		"dates" : "Sep 1, 2012",
		"description" : "Working in ITS."
	},
	{
		"employer" : "GSI",
		"title" : "System Specialist",
		"location" : "Abbotsford, BC",
		"dates" : "May 15, 2013",
		"description" : "Working in ITS."
	}
	]
};

work.display = function() {
	// TODO: to display work object in HTML

}

var projects = {
	"projects" : [
	{
		"title" : "mockup",
		"dates" : "Feb 9",
		"description" : "first project of udacity",
		"images" : ["/images/mug.png"]
	}
	]
};

projects.display = function() {
	// TODO: to display projects object in HTML

}

bio.display();
education.display();
work.display();
projects.display();

