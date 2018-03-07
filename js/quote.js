qArray = ['Try not to become a man of success,  but rather try to become a man of value. - Albert Einstein', 'Education is what remains after one has forgotten what one has learned in school. - Albert Einstein',
  'The only source of knowledge is experience. - Albert Einstein', 'You can&rsquo;t blame gravity for falling in love. - Albert Einstein', 'Astronomy compels the soul to look upwards and leads us from this world to another. - Plato',
  'I think you should always bear in mind that entropy is not on your side. - Elon Musk', 'America is the spirit of human exploration distilled. - Elon Musk',
  'I would like to die on Mars. Just not on impact. - Elon Musk'
];

var rand = qArray[Math.floor(Math.random() * qArray.length)];
document.getElementById("quote").innerHTML = rand;
