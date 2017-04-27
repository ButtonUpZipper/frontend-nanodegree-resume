/*
This is empty on purpose! Your code to build the resume will go here.


$("#main").append([string]);
[string].replace([old],[new]);
*/



/*
//internationalize button
$("#main").prepend(internationalizeButton);

function inName() {
  //split full name into array
  var iNArray = bio.name.split(" ");

  //uppercase first letter & lowercase the rest of first name
  iNArray[0] = iNArray[0].slice(0,1).toUpperCase() + iNArray[0].slice(1).toLowerCase();

  //uppercase last name
  iNArray[1] = iNArray[1].toUpperCase();

  return (iNArray[0] + " " + iNArray[1]);
};
*/



/*
//track clicks
$(document).click(function(loc) {
  // your code goes here!
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});
*/



//BIO
var bio = {
  "name" : "sebastian thrun",
  "role" : "Phthalo Green Wizard",
  "welcomeMessage" : "Morbi posuere enim et dui porta, feugiat pharetra nulla varius.",
  "biopic" : "images/me.jpg",
  "contacts" : {
    "mobile" : "mPHone#",
    "email" : "email@email.com",
    "github" : "github username",
    "twitter" : "twitter handle",
    "location" : "Grand Rapids, MI"
  },
  "skills" : [
    "lorem ipsum",
    "dolor sit",
    "consectetur",
    "adipiscing elit"
  ]
};



bio.display = function() {
  //append name to header
  formattedName = HTMLheaderName.replace("%data%",bio.name);
  $("#header").append(formattedName);

  //append role to header
  formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  $("#header").append(formattedRole);

  //append mobile contact to header
  formattedMobileContact = HTMLmobile.replace("%data%",bio.contacts.mobile);
  $("#header").append(formattedMobileContact);

  //append email contact to header
  formattedEmailContact = HTMLemail.replace("%data%",bio.contacts.email);
  $("#header").append(formattedEmailContact);

  //append biopic to header
  formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
  $("#header").append(formattedBioPic);

  //append welcome message to header
  formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
  $("#header").append(formattedWelcomeMsg);

  //append skills to header after checking if it's empty
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    bio.skills.forEach(function(item,indexSkills) {
      var formattedSkill = HTMLskills.replace("%data%",bio.skills[indexSkills]);
      $("#skills").append(formattedSkill);
    });
  };
};

bio.display();



//WORK
var work = {
  "jobs" : [
    {
      "employer" : "Lord FizzBuzz",
      "title" : "Fizzbuster",
      "location" : "Seattle, WA",
      "dates" : "1985 - 1995",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem vitae felis maximus fermentum id sed mauris. In eu maximus diam. Quisque sed est condimentum lectus fermentum gravida ac vel massa. Pellentesque volutpat lacinia urna sed tempus. Aliquam congue ligula et enim dignissim tincidunt. Phasellus accumsan, sem eu tempus vehicula, nulla nisl consequat risus, vel maximus nisl massa eget eros. Ut ultrices in nisl sit amet sagittis. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris id cursus velit."
    },
    {
      "employer" : "The Dark One",
      "title" : "Wizard",
      "location" : "Dallas, TX",
      "dates" : "32 - 85",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem vitae felis maximus fermentum id sed mauris. In eu maximus diam. Quisque sed est condimentum lectus fermentum gravida ac vel massa. Pellentesque volutpat lacinia urna sed tempus. Aliquam congue ligula et enim dignissim tincidunt. Phasellus accumsan, sem eu tempus vehicula, nulla nisl consequat risus, vel maximus nisl massa eget eros. Ut ultrices in nisl sit amet sagittis. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris id cursus velit."
    }
  ]
};

if (work.jobs.length > 0) {
  work.display = function() {
    //check, replace & append
    work.jobs.forEach(function(item,indexWork) {
      $("#workExperience").append(HTMLworkStart);

      if (work.jobs[indexWork].hasOwnProperty("employer") && work.jobs[indexWork].hasOwnProperty("title")) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[indexWork].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[indexWork].title);

        $(".work-entry:last").append(formattedEmployer + formattedTitle);
      }

      if (work.jobs[indexWork].hasOwnProperty("dates")) {
        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[indexWork].dates);

        $(".work-entry:last").append(formattedDates);
      }

      if (work.jobs[indexWork].hasOwnProperty("description")) {
        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[indexWork].description);

        $(".work-entry:last").append(formattedDescription);
      }
    });
  };

  work.display();
};



//PROJECTS
var projects = {
  "projects" : [
    {
      "title" : "Aenean varius nulla",
      "dates" : "503-600",
      "description" : "Integer tempor nisi sit amet ipsum rhoncus auctor. Integer dapibus fermentum nisl, tincidunt dictum metus ornare dignissim.",
      "images" : ["images/fry.jpg", "images/fry.jpg"]
    },
    {
      "title" : "Vivamus aliquam neque",
      "dates" : "200-250",
      "description" : "Donec eu condimentum est. Pellentesque et risus venenatis ligula varius ultricies. Nulla tempus varius justo ac sodales. In efficitur sem in placerat semper.",
      "images" : ["images/fry.jpg", "images/fry.jpg"]
    }
  ]
};

if (projects.projects.length > 0) {
  projects.display = function() {
    //check, replace & append
    projects.projects.forEach(function(item,indexProjects) {
      $("#projects").append(HTMLprojectStart);

      if (projects.projects[indexProjects].hasOwnProperty("title")) {
        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[indexProjects].title);
        $(".project-entry:last").append(formattedTitle);
      }

      if (projects.projects[indexProjects].hasOwnProperty("dates")) {
        var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[indexProjects].dates);
        $(".project-entry:last").append(formattedDates);
      }

      if (projects.projects[indexProjects].hasOwnProperty("description")) {
        var formattedDesc = HTMLprojectDescription.replace("%data%",projects.projects[indexProjects].description);
        $(".project-entry:last").append(formattedDesc);
      }

      if (projects.projects[indexProjects].hasOwnProperty("images")) {
        projects.projects[indexProjects].images.forEach(function(item,indexImages) {
          var formattedImages = HTMLprojectImage.replace("%data%",projects.projects[indexProjects].images[indexImages]);
          $(".project-entry:last").append(formattedImages);
        });
      }
    });
  };

  projects.display();
};



//EDUCATION
var education = {
  "schools" : [
    {
      "name" : "Orthanc (satellite campus)",
      "location" : "Tampa, FL",
      "degreeDates" : "200-250",
      "url" : "www.school.com",
      "majors" : ["EET","CompSci"]
    },
    {
      "name" : "Orthanc (satellite campus)",
      "location" : "Mosul, Iraq",
      "degreeDates" : "200-250",
      "url" : "www.school.com",
      "majors" : ["EE","Business"]
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Web Stuff",
      "school" : "Online School",
      "dates" : "1600-4585",
      "url" : "www.coolschool.com"
    },
    {
      "title" : "Web Stuff",
      "school" : "Online School",
      "dates" : "1600-4585",
      "url" : "www.coolschool.com"
    }
  ]
};

if (education.schools.length > 0) {
  education.display = function() {
    //check, replace & append
    education.schools.forEach(function(item,indexSchools) {
      $("#education").append(HTMLschoolStart);

      if (education.schools[indexSchools].hasOwnProperty("name") && education.schools[indexSchools].hasOwnProperty("url")) {
        var formattedName = HTMLschoolName.replace("%data%",education.schools[indexSchools].name);
        var formattedURL = HTMLschoolDegree.replace("%data%",education.schools[indexSchools].url);
        $(".education-entry:last").append(formattedName + formattedURL);
      }
      if (education.schools[indexSchools].hasOwnProperty("location")) {
        var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[indexSchools].location);
        $(".education-entry:last").append(formattedLocation);
      }
      if (education.schools[indexSchools].hasOwnProperty("degreeDates")) {
        var formattedDates = HTMLschoolDates.replace("%data%",education.schools[indexSchools].degreeDates);
        $(".education-entry:last").append(formattedDates);
      }
      if (education.schools[indexSchools].majors.length > 0) {
        education.schools[indexSchools].majors.forEach(function(item,indexMajors) {
          var formattedMajors = HTMLschoolMajor.replace("%data%",education.schools[indexSchools].majors[indexMajors]);
          $(".education-entry:last").append(formattedMajors);
        });
      }
    });
  };

  education.display();
};



//MAP
$("#mapDiv").append(googleMap);
