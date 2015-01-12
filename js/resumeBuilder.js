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
	
	$("#footerContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
	$("#footerContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
	$("#footerContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
	$("#footerContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
	$("#footerContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));	
}

var education = {
	"schools" : [
	{
		"name" : "UFV",
		"location" : "Abbotsford, BC",
		"degree" : "Bachelor",
		"majors" : ["Computer Information System"],
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
	
	$("#education").append(HTMLschoolStart);
	for (var sch in education.schools) {
		var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[sch].name) + HTMLschoolDegree.replace("%data%",education.schools[sch].degree);
		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[sch].dates));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[sch].location));
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[sch].majors));
	};
	
	$(".education-entry").append(HTMLonlineClasses);	
	for (var cla in education.onlineCourses) {
		var fomattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[cla].title) + HTMLonlineSchool.replace("%data%",education.onlineCourses[cla].school);
		$(".education-entry:last").append(fomattedOnlineTitle);
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%",education.onlineCourses[cla].dates));
		$(".education-entry:last").append(HTMLonlineURL.replace("%data%",education.onlineCourses[cla].url));
	};
	
}

var work = {
	"jobs" : [
	{
		"employer" : "GSI",
		"title" : "System Specialist",
		"location" : "Abbotsford, BC",
		"dates" : "May 15, 2013 - Current",
		"description" : "Working in ITS."
	},
	{
		
		"employer" : "UFV",
		"title" : "IT Technician",
		"location" : "Abbotsford, BC",
		"dates" : "Sep 1, 2012 - Apr 30, 2013",
		"description" : "Working in ITS."
	}
	]
};

work.display = function() {
	// TODO: to display work object in HTML
	$("#workExperience").append(HTMLworkStart);
	for (var job in work.jobs) {
		var fomattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer) + HTMLworkTitle.replace("%data%",work.jobs[job].title);
		$(".work-entry:last").append(fomattedEmployer);
		$(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[job].dates));
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[job].location));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[job].description));
	};
}

var projects = {
	"projects" : [
	{
		"title" : "Mockup to Website",
		"dates" : "2014",
		"description" : "first project of udacity",
		"images" : ["images/mug.png","images/mug.png"]
	}
	]
};

projects.display = function() {
	// TODO: to display projects object in HTML
	$("#projects").append(HTMLprojectStart);
	for (var pro in projects.projects) {
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[pro].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[pro].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[pro].description));
		$(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.projects[pro].images[pro]));
		$(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.projects[pro].images[pro]));
	};
}


bio.display();
work.display();
projects.display();
education.display();

function inName(name){
  name = bio.name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);
