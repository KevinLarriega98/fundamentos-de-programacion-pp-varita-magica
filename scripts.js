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

document.addEventListener('click', (event) => {
  event.preventDefault()

  const clickedElement = event.target

  if (clickedElement.matches('img')) {
    clickedElement.src = getRandom(magicGifs)
  } else if (clickedElement.matches('p')) {
    clickedElement.style.color = getRandom(paragraphColors)
    clickedElement.style.backgroundColor = getRandom(paragraphColors)
  } else if (clickedElement.matches('article, section')) {
    clickedElement.style.backgroundColor = getRandom(blockColors)
  }
})

const images = document.querySelectorAll('img')

images.forEach((image) => {
  let srcBeforeHover

  image.addEventListener('mouseenter', () => {
    srcBeforeHover = image.getAttribute('src')
    image.setAttribute('src', 'assets/abracadabra.gif')
  })

  image.addEventListener('mouseleave', () => {
    const wasChangedByClick = image.getAttribute('src') !== 'assets/abracadabra.gif'

    if (!wasChangedByClick) {
      image.setAttribute('src', srcBeforeHover)
    }
  })
})

const paragraphs = document.querySelectorAll('p')

paragraphs.forEach((paragraph) => {
  let colorBeforeHover
  let backgroundBeforeHover
  let wasChangedByClick

  paragraph.addEventListener('mouseenter', () => {
    colorBeforeHover = paragraph.style.color
    backgroundBeforeHover = paragraph.style.backgroundColor
    wasChangedByClick = false

    paragraph.style.color = getRandom(paragraphColors)
    paragraph.style.backgroundColor = getRandom(paragraphColors)
  })

  paragraph.addEventListener('click', (event) => {
    if (event.target === paragraph) {
      wasChangedByClick = true
    }
  })

  paragraph.addEventListener('mouseleave', () => {
    if (!wasChangedByClick) {
      paragraph.style.color = colorBeforeHover
      paragraph.style.backgroundColor = backgroundBeforeHover
    }
  })
})

const blocks = document.querySelectorAll('article, section')

blocks.forEach((block) => {
  let backgroundBeforeHover
  let wasChangedByClick

  block.addEventListener('mouseenter', () => {
    backgroundBeforeHover = block.style.backgroundColor
    wasChangedByClick = false

    block.style.backgroundColor = getRandom(blockColors)
  })

  block.addEventListener('click', (event) => {
    if (event.target === block) {
      wasChangedByClick = true
    }
  })

  block.addEventListener('mouseleave', () => {
    if (!wasChangedByClick) {
      block.style.backgroundColor = backgroundBeforeHover
    }
  })
})
