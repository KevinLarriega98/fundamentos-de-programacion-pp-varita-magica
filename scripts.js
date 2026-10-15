const paragraphColors = [
  '#ff595e',
  '#ffca3a',
  '#8ac926',
  '#1982c4',
  '#6a4c93',
]

const blockColors = [
  '#f72585',
  '#b5179e',
  '#7209b7',
  '#3a0ca3',
  '#4361ee',
]

const magicGifs = [
  'assets/magic-1.gif',
  'assets/magic-2.gif',
  'assets/magic-3.gif',
  'assets/magic-4.gif',
  'assets/magic-5.gif',
  'assets/magic-6.gif',
]

const getRandom = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length)

  return array[randomIndex]
}
