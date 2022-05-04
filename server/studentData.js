const sampleStudents = [
  {
    fName: "Almira",
    lName: "Fitzharris",
    email: "afitzharris0@1688.com",
    imageUrl: "http://dummyimage.com/227x100.png/dddddd/000000",
    gpa: 2.3,
    campusId: 7,
  },
  {
    fName: "Giavani",
    lName: "Ternott",
    email: "gternott1@angelfire.com",
    imageUrl: "http://dummyimage.com/244x100.png/dddddd/000000",
    gpa: 2.97,
    campusId: 3,
  },
  {
    fName: "Ella",
    lName: "Manoelli",
    email: "emanoelli2@constantcontact.com",
    imageUrl: "http://dummyimage.com/136x100.png/ff4444/ffffff",
    gpa: 1.01,
    campusId: 5,
  },
  {
    fName: "Antoni",
    lName: "Matuszkiewicz",
    email: "amatuszkiewicz3@hugedomains.com",
    imageUrl: "http://dummyimage.com/118x100.png/cc0000/ffffff",
    gpa: 0.92,
    campusId: 3,
  },
  {
    fName: "Emeline",
    lName: "Pinder",
    email: "epinder4@ft.com",
    imageUrl: "http://dummyimage.com/190x100.png/ff4444/ffffff",
    gpa: 0.22,
    campusId: 8,
  },
  {
    fName: "Gibby",
    lName: "Guilloud",
    email: "gguilloud5@cargocollective.com",
    imageUrl: "http://dummyimage.com/177x100.png/dddddd/000000",
    gpa: 0.21,
    campusId: 7,
  },
  {
    fName: "Margalit",
    lName: "Denholm",
    email: "mdenholm6@clickbank.net",
    imageUrl: "http://dummyimage.com/167x100.png/cc0000/ffffff",
    gpa: 2.19,
    campusId: 8,
  },
  {
    fName: "Moshe",
    lName: "Jouandet",
    email: "mjouandet7@netlog.com",
    imageUrl: "http://dummyimage.com/207x100.png/dddddd/000000",
    gpa: 1.23,
    campusId: 6,
  },
  {
    fName: "Gunilla",
    lName: "Aspray",
    email: "gaspray8@census.gov",
    imageUrl: "http://dummyimage.com/108x100.png/dddddd/000000",
    gpa: 3.07,
    campusId: 3,
  },
  {
    fName: "Gennifer",
    lName: "Tuting",
    email: "gtuting9@multiply.com",
    imageUrl: "http://dummyimage.com/110x100.png/5fa2dd/ffffff",
    gpa: 1.41,
    campusId: 7,
  },
  {
    fName: "Calida",
    lName: "Coleshill",
    email: "ccoleshilla@slashdot.org",
    imageUrl: "http://dummyimage.com/176x100.png/cc0000/ffffff",
    gpa: 0.04,
    campusId: 3,
  },
  {
    fName: "Alida",
    lName: "MacLoughlin",
    email: "amacloughlinb@tripadvisor.com",
    imageUrl: "http://dummyimage.com/183x100.png/5fa2dd/ffffff",
    gpa: 2.66,
    campusId: 10,
  },
  {
    fName: "Madlen",
    lName: "Skeats",
    email: "mskeatsc@gmpg.org",
    imageUrl: "http://dummyimage.com/190x100.png/5fa2dd/ffffff",
    gpa: 3.22,
    campusId: 8,
  },
  {
    fName: "Ambrosius",
    lName: "Burchnall",
    email: "aburchnalld@theguardian.com",
    imageUrl: "http://dummyimage.com/201x100.png/dddddd/000000",
    gpa: 3.16,
    campusId: 3,
  },
  {
    fName: "Helenka",
    lName: "Pauletto",
    email: "hpaulettoe@mysql.com",
    imageUrl: "http://dummyimage.com/201x100.png/dddddd/000000",
    gpa: 0.47,
    campusId: 6,
  },
  {
    fName: "Alvira",
    lName: "Grcic",
    email: "agrcicf@google.es",
    imageUrl: "http://dummyimage.com/141x100.png/5fa2dd/ffffff",
    gpa: 0.46,
    campusId: 9,
  },
  {
    fName: "Claudette",
    lName: "Garton",
    email: "cgartong@bloglines.com",
    imageUrl: "http://dummyimage.com/188x100.png/cc0000/ffffff",
    gpa: 0.7,
    campusId: 3,
  },
  {
    fName: "Pepita",
    lName: "Wint",
    email: "pwinth@imageshack.us",
    imageUrl: "http://dummyimage.com/225x100.png/ff4444/ffffff",
    gpa: 2.1,
    campusId: 2,
  },
  {
    fName: "Lyell",
    lName: "Cinelli",
    email: "lcinellii@msu.edu",
    imageUrl: "http://dummyimage.com/225x100.png/dddddd/000000",
    gpa: 2.19,
    campusId: 7,
  },
  {
    fName: "Sapphira",
    lName: "Matthias",
    email: "smatthiasj@themeforest.net",
    imageUrl: "http://dummyimage.com/248x100.png/cc0000/ffffff",
    gpa: 3.13,
    campusId: 6,
  },
  {
    fName: "Donn",
    lName: "Ivanuschka",
    email: "divanuschkak@cbc.ca",
    imageUrl: "http://dummyimage.com/132x100.png/dddddd/000000",
    gpa: 3.5,
    campusId: 6,
  },
  {
    fName: "Wilden",
    lName: "Blunsum",
    email: "wblunsuml@ox.ac.uk",
    imageUrl: "http://dummyimage.com/200x100.png/dddddd/000000",
    gpa: 3.26,
    campusId: 2,
  },
  {
    fName: "Herminia",
    lName: "Snoday",
    email: "hsnodaym@163.com",
    imageUrl: "http://dummyimage.com/121x100.png/5fa2dd/ffffff",
    gpa: 2.31,
    campusId: 10,
  },
  {
    fName: "Silvain",
    lName: "Davidovsky",
    email: "sdavidovskyn@nyu.edu",
    imageUrl: "http://dummyimage.com/170x100.png/5fa2dd/ffffff",
    gpa: 2.67,
    campusId: 5,
  },
  {
    fName: "Justina",
    lName: "Hasselby",
    email: "jhasselbyo@purevolume.com",
    imageUrl: "http://dummyimage.com/177x100.png/dddddd/000000",
    gpa: 2.07,
    campusId: 8,
  },
  {
    fName: "Reeta",
    lName: "Mannakee",
    email: "rmannakeep@quantcast.com",
    imageUrl: "http://dummyimage.com/146x100.png/cc0000/ffffff",
    gpa: 2.65,
    campusId: 9,
  },
  {
    fName: "Blithe",
    lName: "Raoul",
    email: "braoulq@simplemachines.org",
    imageUrl: "http://dummyimage.com/199x100.png/ff4444/ffffff",
    gpa: 2.91,
    campusId: 7,
  },
  {
    fName: "Walton",
    lName: "Fergie",
    email: "wfergier@youtu.be",
    imageUrl: "http://dummyimage.com/127x100.png/dddddd/000000",
    gpa: 3.06,
    campusId: 4,
  },
  {
    fName: "Maynard",
    lName: "Thurlborn",
    email: "mthurlborns@examiner.com",
    imageUrl: "http://dummyimage.com/116x100.png/cc0000/ffffff",
    gpa: 2.05,
    campusId: 3,
  },
  {
    fName: "Sasha",
    lName: "Deeny",
    email: "sdeenyt@europa.eu",
    imageUrl: "http://dummyimage.com/126x100.png/dddddd/000000",
    gpa: 1.64,
    campusId: 9,
  },
];
module.exports = {
  sampleStudents,
};
