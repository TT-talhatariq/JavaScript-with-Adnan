let quoteBox = document.querySelector('.quote')
let quoteBtn = document.querySelector('.newQuote')

// logic
const motivationalQuotes = [
  "Believe you can and you're halfway there. -Theodore Roosevelt",
  "Your time is limited, don't waste it living someone else's life. -Steve Jobs",
  'Success is not final, failure is not fatal: It is the courage to continue that counts. -Winston Churchill',
  'The only limit to our realization of tomorrow will be our doubts of today. -Franklin D. Roosevelt',
  'The only way to achieve the impossible is to believe it is possible. -Charles Kingsleigh (Alice in Wonderland)',
  'You are never too old to set another goal or to dream a new dream. -C.S. Lewis',
  'The only place where success comes before work is in the dictionary. -Vidal Sassoon',
  "Don't watch the clock; do what it does. Keep going. -Sam Levenson",
  'It does not matter how slowly you go as long as you do not stop. -Confucius',
  "You miss 100% of the shots you don't take. -Wayne Gretzky",
  'The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt',
  'The only person you are destined to become is the person you decide to be. -Ralph Waldo Emerson',
  'Your life does not get better by chance, it gets better by change. -Jim Rohn',
  'The only way to do great work is to love what you do. -Steve Jobs',
  'The best time to plant a tree was 20 years ago. The second best time is now. -Chinese Proverb',
]

function changeQuote() {
  let number = Math.floor(Math.random() * 15)

  quoteBox.innerHTML = motivationalQuotes[number]
}

quoteBtn.addEventListener('click', changeQuote)
