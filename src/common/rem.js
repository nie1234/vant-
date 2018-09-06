(function (d, w) {
  const doc = d.documentElement
  function rem () {
    const width = Math.min(doc.getBoundingClientRect().width, 768)
    console.log(width)
    doc.style.fontSize = width / 10 + 'px'
    console.log(doc.style.fontSize)
    return doc.style.fontSize
  }
  rem()
  w.addEventListener('resize', rem)
})(document, window)
