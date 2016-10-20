'use strict';

angular.module('joebloggs', []);

'use strict';

/*global window: false */

angular.module('joebloggs')
  .controller('MainCtrl', function($scope) {
    $scope.cv = {
      avatar: 'assets/images/avatar.jpg',
      firstName: 'Adam',
      surname: 'Knight',
      title: 'Senior Java Developer',
      dob: '11th June 1984',
      email: 'adamknight84@gmail.com',
      website: 'http://www.codeecho.co.uk',
      links: {
        github: 'http://github.com/codeecho'
      },
      introduction: 'A Computer Science graduate from the University of Southampton, with 10 years of software development experience. Working at the forefront of modern development trends, I am committed to developing innovative and creative software solutions using the latest technologies.\nI am able to manage the full lifecycle of software development, from development and testing, to deployment and monitoring of applications in a scalable, cloud based infrastructure.',
      qualifications: [
        {
          title: 'Degree in Computer Science',
          location: 'University Of Southampton',
          date: '2002-2005',
          description: 'I graduated from the University of Southampton in 2005 with a 2.1 BSc Degree in Computer Science.'
        }
      ],
      work:[
        {
          company: 'Vetspace Ltd',
          date: '2015-Present',
          title: 'Senior Java Developer',
          description: 'Vetspace are leading providers of practice management software in the vetinary industry. Working as part of a medium sized team in an Agile environment I have lead development on several key projects'
        },
        {
          company: 'Revolutionary Systems',
          date: '2014-2015',
          title: 'Founder/Senior Java Developer',
          description: 'Together with two colleages I founded Revolutionary Systems in 2014. Working as the lead software developer building and maintaining pioneering software solutions for businesses, I am responsible for ensuring that we can deliver efficient, scalable solutions rapidly. I am responsible for maintaining a large number of open source projects which we use throughout out solutions.'
        },{
          company: 'Open Square Ltd',
          date: '2006-2014',
          title: 'Senior Java Developer',
          description: 'I joined Open Square in 2006 as part of a small team and lead development for many of their back end systems from the ground up, helping them grow into a major competitor in the Insurance software market. Being part of a small team meant that I took on many roles at Open Square, from coding large, scalable backend systems, to producing frontend websites and UIs, to managing deployment and monitoring of live systems.'
        }
      ],
      skills:{
        'Java': 100,
        'MYSQL': 80,
        'MongoDB': 80,
        'HTML / Javascript / CSS': 80,
        'JQuery': 80,
        'AngularJS': 80,
        'TypeScript': 80,
        'NodeJS': 80,
        'Android': 50,
        'Git': 80,
        'Amazon Web Services': 80,
        'Python/Jython': 70
      },
      interests: 'I enjoy playing sports, and regularly play football, tennis, badminton and squash. I\'m a keen guitarist and play lead guitar in a covers band, playing local pubs and festivals. I like to keep up with the latest development trends and technologies and maintain a small number of open source software projects which I like to work on and experiment with in my spare time.'
    };
    window.document.title = $scope.cv.firstName + ' ' + $scope.cv.surname;
  });