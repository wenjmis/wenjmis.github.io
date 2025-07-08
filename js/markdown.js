// 需要使用到markdown-it.js
const md = window.markdownit()

fetch('./public/selfintro.md')
  .then(res => res.text())
  .then(text => {
    document.getElementById('about-text').innerHTML = md.render(text)
  })
  .catch(err => {
    document.getElementById('about-text').innerText = '載入失敗。'
    console.error(err)
  })