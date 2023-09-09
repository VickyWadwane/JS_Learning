// Create the professor object with properties
let professor = {
    name: 'Dr. Vaishnavi Wadwane',
    age: 25,
    department: 'Computer Science',
    specialization: 'Machine Learning',
    experienceInYears: 12,
    teachingSubjects: ['Computer Vision', 'Deep Learning', 'Data Science'],
    degrees: {
      engineering: 'CSS',
      phd: 'Adv Computing',
      additional: 'Data Science'
    },
    certificates: [
      'HackerRank Participation',
      'Certificate in IFE Course',
      'Certificate in Advanced Programming'
    ],
    
    // Function to concatenate degrees
    getTeacherDegrees: function() {
      const degreesArray = Object.values(this.degrees);
      const degreeString = degreesArray.join(', ');
      console.log('Teacher degrees: ' + degreeString);
      return degreeString;
    }
  };
  
  // Add totalExperience property and log it
  let experience = professor.totalExperience = '14 Years';
  console.log(experience);
  
  // Modify the age property
  let age = professor.age = 28;
  console.log(age);
  
  // Add a new certificate to the end of the certificates array
  let array = professor.certificates.push('Oracle Certified');
  console.log(array);
  // Log the last element of the certificates array
  let lastCertificate = professor.certificates[professor.certificates.length - 1];
  console.log('Last Certificate:', lastCertificate);
  