var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
for (var x = 0; x <topics.length; x++) {
    console.log(topics[x]);
 }
}

function selectTopic () {
if (randomTopic[0] === 'HTML') {
  console.log("Let's study HTML!");
} else if (randomTopic[0] === 'CSS') {
  console.log("Let's study CSS!");
} else if (randomTopic[0] === 'Git') {
  console.log("Let's study Git!");
} else if (randomTopic[0] === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
 }
}

console.log('Here are some of the topics we are learning through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();