let express = require('express');
let router = express.Router();
let parser = require('body-parser');

let items  = [
    {
      id: 1, 
      image: 'eva.png',
      name: 'Eva',
      memberTime: '5 months',
      lastSeen: 'Saturday afternoon',
      activityLevel: 2,
      additionalProfileInfo: {
        peers: 46,
        discussions: 29,
        findings: 19,
        questions: 10,
        conversation: 3,
        upvotes: 19
      },
      activity : {
        discussedTime: 1,
        question:  'Will insuin make my patient gain weight ?',
        details: 'All my patients with diabetes should see an opthalmologist yearly for a dialeted eye examination- begining at diagnosis inpeople with 2 type diabetes, and after 5 years in people with type 1 diabetes after puberty. Patients wit know eye disease, symptoms of blurred vision in one eye, or blind sponts may need to see their ophthalmologist more frequently',
        relatedDiscussion: 1,
        peers: 6,
        conversation: 3,
        answers: [

          {
            id: 1,
            name: 'Patricia',
            img: 'patricia.png',
            date: 'yesterday',
            answer: 'Numbers or tingling in your feet should be reported to your doctor at your regular visits',
            comment: 1
          },
           {

            id: 2,
            name: 'Dawid',
            img: 'david.png',
            date: 'yesterday',
            comment: 'You should check your feet daily for redness, caluses, cracks or skin breakdown'
          },
          {
            id: 3,
            name: 'Joseph',
            img: 'joseph.png',
            date: 'two days',
            answer: 'When your blood sugar is low, your body gives out signs that you nedd food. Different people have differend symptoms. You will learn to know your symptoms',
            comment: null
          }
        ],
        numberOfAnswers: 2
      } 
    },
     {
      id: 2, 
      image: 'andrew.png',
      name: 'Andrew',
      memberTime: '4 months',
      lastSeen: 'Saturday afternoon',
      activityLevel: 2,
      additionalProfileInfo: {
        peers: 46,
        discussions: 29,
        findings: 19,
        questions: 10,
        conversation: 3,
        upvotes: 19
      },
      activity : {
        discussedTime: 1,
        question:  'Vegan diet is diabetes treatment ?',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris felis justo, tristique accumsan fermentum fermentum, aliquam nec enim. Aenean imperdiet, ipsum eget porta vehicula, turpis sem imperdiet sapien, eget volutpat turpis nibh vitae risus. Nunc justo tellus, euismod vel tempor ut, consectetur et massa. Sed tincidunt lorem lacus, et maximus eros iaculis vel. Donec sit amet semper lacus, at suscipit tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        relatedDiscussion: 1,
        peers: 6,
        conversation: 3,
        upvotes: 19,
        answers: [

          {
            name: 'Patricia',
            img: 'patricia.png',
            date: 'yesterday',
            answer: 'Numbers or tingling in your feet shuld be reported to your doctor at your regular visits',
            comment: 1
          },
           {
            name: 'Dawid',
            img: 'dawid.png',
            date: 'yesterday',
            comment: 'You should check your feet daily for redness, caluses, cracks or skin breakdown'
          },
          {
            name: 'Joseph',
            img: 'joseph.png',
            date: 'two days',
            answer: 'When your blood sugar is low, your body gives out signs that you nedd food. Different people have differend symptoms. You will learn to know your symptoms',
            comment: null
          }
        ],
        numberOfAnswers: 2
      } 
    },
     {
      id: 3, 
      image: 'joseph.png',
      name: 'Joseph',
      memberTime: '3 months',
      lastSeen: 'Saturday afternoon',
      activityLevel: 2,
      additionalProfileInfo: {
        peers: 46,
        discussions: 29,
        findings: 19,
        questions: 10,
        conversation: 3,
        upvotes: 19
      },
      activity : {
        discussedTime: 1,
        question:  'Vegan diet to stop diabetes progres',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris felis justo, tristique accumsan fermentum fermentum, aliquam nec enim. Aenean imperdiet, ipsum eget porta vehicula, turpis sem imperdiet sapien, eget volutpat turpis nibh vitae risus. Nunc justo tellus, euismod vel tempor ut, consectetur et massa. Sed tincidunt lorem lacus, et maximus eros iaculis vel. Donec sit amet semper lacus, at suscipit tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        relatedDiscussion: 1,
        peers: 6,
        conversation: 3,
        upvotes: 19,
        answers: [

          {
            name: 'Patricia',
            img: 'patricia.png',
            date: 'yesterday',
            answer: 'Numbers or tingling in your feet shuld be reported to your doctor at your regular visits',
            comment: 1
          },
           {
            name: 'Dawid',
            img: 'david.png',
            date: 'yesterday',
            comment: 'You should check your feet daily for redness, caluses, cracks or skin breakdown'
          },
          {
            name: 'Joseph',
            img: 'joseph.png',
            date: 'two days',
            answer: 'When your blood sugar is low, your body gives out signs that you nedd food. Different people have differend symptoms. You will learn to know your symptoms',
            comment: null
          }
        ],
        numberOfAnswers: 2
      } 
    },
      {
      id: 4, 
      image: 'eve.png',
      name: 'Eva',
      memberTime: '5 months',
      lastSeen: 'Saturday afternoon',
      activityLevel: 2,
      additionalProfileInfo: {
        peers: 46,
        discussions: 29,
        findings: 19,
        questions: 10,
        conversation: 3,
        upvotes: 19
      },
      activity : {
        discussedTime: 1,
        question:  'Will insuin make my patient gain weight ?',
        details: 'All my patients with diabetes should see an opthalmologist yearly for a dialeted eye examination- begining at diagnosis inpeople with 2 type diabetes, and after 5 years in people with type 1 diabetes after puberty. Patients wit know eye disease, symptoms of blurred vision in one eye, or blind sponts may need to see their ophthalmologist more frequently',
        relatedDiscussion: 1,
        peers: 6,
        conversation: 3,
        upvotes: 19,
        answers: [

          {
            name: 'Patricia',
            img: 'paticia.png',
            date: 'yesterday',
            answer: 'Numbers or tingling in your feet shuld be reported to your doctor at your regular visits',
            comment: 1
          },
           {
            name: 'Dawid',
            img: 'david.png',
            date: 'yesterday',
            comment: 'You should check your feet daily for redness, caluses, cracks or skin breakdown'
          },
          {
            name: 'Joseph',
            img: 'joseph.png',
            date: 'two days',
            answer: 'When your blood sugar is low, your body gives out signs that you nedd food. Different people have differend symptoms. You will learn to know your symptoms',
            comment: null
          }
        ],
        numberOfAnswers: 2
      } 
    },
    {
      id: 5, 
      image: 'andrew.png',
      name: 'Andrew',
      memberTime: '4 months',
      lastSeen: 'Saturday afternoon',
      activityLevel: 2,
      additionalProfileInfo: {
        peers: 46,
        discussions: 29,
        findings: 19,
        questions: 10,
        conversation: 3,
        upvotes: 19
      },
      activity : {
        discussedTime: 1,
        question:  'Vegan diet is diabetes treatment ?',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris felis justo, tristique accumsan fermentum fermentum, aliquam nec enim. Aenean imperdiet, ipsum eget porta vehicula, turpis sem imperdiet sapien, eget volutpat turpis nibh vitae risus. Nunc justo tellus, euismod vel tempor ut, consectetur et massa. Sed tincidunt lorem lacus, et maximus eros iaculis vel. Donec sit amet semper lacus, at suscipit tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        relatedDiscussion: 1,
        peers: 6,
        conversation: 3,
        upvotes: 19,
        answers: [

          {
            name: 'Patricia',
            img: 'patricia.png',
            date: 'yesterday',
            answer: 'Numbers or tingling in your feet shuld be reported to your doctor at your regular visits',
            comment: 1
          },
           {
            name: 'Dawid',
            img: 'dawid.png',
            date: 'yesterday',
            comment: 'You should check your feet daily for redness, caluses, cracks or skin breakdown'
          },
          {
            name: 'Joseph',
            img: 'joseph.png',
            date: 'two days',
            answer: 'When your blood sugar is low, your body gives out signs that you nedd food. Different people have differend symptoms. You will learn to know your symptoms',
            comment: null
          }
        ],
        numberOfAnswers: 2
      } 
    },
    {
      id: 6, 
      image: 'joseph.png',
      name: 'Joseph',
      memberTime: '3 months',
      lastSeen: 'Saturday afternoon',
      activityLevel: 2,
      additionalProfileInfo: {
        peers: 46,
        discussions: 29,
        findings: 19,
        questions: 10,
        conversation: 3,
        upvotes: 19
      },
      activity : {
        discussedTime: 1,
        question:  'Vegan diet to stop diabetes progres',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris felis justo, tristique accumsan fermentum fermentum, aliquam nec enim. Aenean imperdiet, ipsum eget porta vehicula, turpis sem imperdiet sapien, eget volutpat turpis nibh vitae risus. Nunc justo tellus, euismod vel tempor ut, consectetur et massa. Sed tincidunt lorem lacus, et maximus eros iaculis vel. Donec sit amet semper lacus, at suscipit tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        relatedDiscussion: 1,
        peers: 6,
        conversation: 3,
        upvotes: 19,
        answers: [

          {
            name: 'Patricia',
            img: 'patricia.png',
            date: 'yesterday',
            answer: 'Numbers or tingling in your feet shuld be reported to your doctor at your regular visits',
            comment: 1
          },
           {
            name: 'Dawid',
            img: 'david.png',
            date: 'yesterday',
            comment: 'You should check your feet daily for redness, caluses, cracks or skin breakdown'
          },
          {
            name: 'Joseph',
            img: 'joseph.png',
            date: 'two days',
            answer: 'When your blood sugar is low, your body gives out signs that you nedd food. Different people have differend symptoms. You will learn to know your symptoms',
            comment: null
          }
        ],
        numberOfAnswers: 2
      } 
    },
    {
      id: 7, 
      image: 'eve.png',
      name: 'Eva',
      memberTime: '5 months',
      lastSeen: 'Saturday afternoon',
      activityLevel: 2,
      additionalProfileInfo: {
        peers: 46,
        discussions: 29,
        findings: 19,
        questions: 10,
        conversation: 3,
        upvotes: 19
      },
      activity : {
        discussedTime: 1,
        question:  'Will insuin make my patient gain weight ?',
               details: 'All my patients with diabetes should see an opthalmologist yearly for a dialeted eye examination- begining at diagnosis inpeople with 2 type diabetes, and after 5 years in people with type 1 diabetes after puberty. Patients wit know eye disease, symptoms of blurred vision in one eye, or blind sponts may need to see their ophthalmologist more frequently',
        relatedDiscussion: 1,
        peers: 6,
        conversation: 3,
        upvotes: 19,
        answers: [

          {
            name: 'Patricia',
            img: 'paticia.png',
            date: 'yesterday',
            answer: 'Numbers or tingling in your feet shuld be reported to your doctor at your regular visits',
            comment: 1
          },
           {
            name: 'Dawid',
            img: 'david.png',
            date: 'yesterday',
            comment: 'You should check your feet daily for redness, caluses, cracks or skin breakdown'
          },
          {
            name: 'Joseph',
            img: 'joseph.png',
            date: 'two days',
            answer: 'When your blood sugar is low, your body gives out signs that you nedd food. Different people have differend symptoms. You will learn to know your symptoms',
            comment: null
          }
        ],
        numberOfAnswers: 2
      } 
    },
    {
      id: 8, 
      image: 'andrew.png',
      name: 'Andrew',
      memberTime: '4 months',
      lastSeen: 'Saturday afternoon',
      activityLevel: 2,
      additionalProfileInfo: {
        peers: 46,
        discussions: 29,
        findings: 19,
        questions: 10,
        conversation: 3,
        upvotes: 19
      },
      activity : {
        discussedTime: 1,
        question:  'Vegan diet is diabetes treatment ?',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris felis justo, tristique accumsan fermentum fermentum, aliquam nec enim. Aenean imperdiet, ipsum eget porta vehicula, turpis sem imperdiet sapien, eget volutpat turpis nibh vitae risus. Nunc justo tellus, euismod vel tempor ut, consectetur et massa. Sed tincidunt lorem lacus, et maximus eros iaculis vel. Donec sit amet semper lacus, at suscipit tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        relatedDiscussion: 1,
        peers: 6,
        conversation: 3,
        upvotes: 19,
        answers: [

          {
            name: 'Patricia',
            img: 'patricia.png',
            date: 'yesterday',
            answer: 'Numbers or tingling in your feet shuld be reported to your doctor at your regular visits',
            comment: 1
          },
           {
            name: 'Dawid',
            img: 'dawid.png',
            date: 'yesterday',
            comment: 'You should check your feet daily for redness, caluses, cracks or skin breakdown'
          },
          {
            name: 'Joseph',
            img: 'joseph.png',
            date: 'two days',
            answer: 'When your blood sugar is low, your body gives out signs that you nedd food. Different people have differend symptoms. You will learn to know your symptoms',
            comment: null
          }
        ],
        numberOfAnswers: 2
      } 
    },
    {
      id: 9, 
      image: 'joseph.png',
      name: 'Joseph',
      memberTime: '3 months',
      lastSeen: 'Saturday afternoon',
      activityLevel: 2,
      additionalProfileInfo: {
        peers: 46,
        discussions: 29,
        findings: 19,
        questions: 10,
        conversation: 3,
        upvotes: 19
      },
      activity : {
        discussedTime: 1,
        question:  'Vegan diet to stop diabetes progres',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris felis justo, tristique accumsan fermentum fermentum, aliquam nec enim. Aenean imperdiet, ipsum eget porta vehicula, turpis sem imperdiet sapien, eget volutpat turpis nibh vitae risus. Nunc justo tellus, euismod vel tempor ut, consectetur et massa. Sed tincidunt lorem lacus, et maximus eros iaculis vel. Donec sit amet semper lacus, at suscipit tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        relatedDiscussion: 1,
        peers: 6,
        conversation: 3,
        upvotes: 19,
        answers: [

          {
            name: 'Patricia',
            img: 'patricia.png',
            date: 'yesterday',
            answer: 'Numbers or tingling in your feet shuld be reported to your doctor at your regular visits',
            comment: 1
          },
           {
            name: 'Dawid',
            img: 'david.png',
            date: 'yesterday',
            comment: 'You should check your feet daily for redness, caluses, cracks or skin breakdown'
          },
          {
            name: 'Joseph',
            img: 'joseph.png',
            date: 'two days',
            answer: 'When your blood sugar is low, your body gives out signs that you nedd food. Different people have differend symptoms. You will learn to know your symptoms',
            comment: null
          }
        ],
        numberOfAnswers: 2
      } 
    }   
];



router.get('/items', function(req, res) {
	res.json(items);
});

module.exports = router;

