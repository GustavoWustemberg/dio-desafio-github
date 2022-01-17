const calcular = document.getElementById('calc')
calcular.addEventListener('click', mediaNotas)
function mediaNotas() {
  const nota1 = parseFloat(document.getElementById('n1').value)
  const nota2 = parseFloat(document.getElementById('n2').value)
  const nota3 = parseFloat(document.getElementById('n3').value)
  const nota4 = parseFloat(document.getElementById('n4').value)
  const nota5 = parseFloat(document.getElementById('n5').value)
  let media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5
  const nF = (document.getElementById('nFinal').value = media)
  let nFcolor = document.querySelector('#nFinal')
  if (media >= 5) {
    nFcolor.classList.add('notaAzul')
    alert('Você foi aprovado!!!')
  } else {
    nFcolor.classList.add('notaVermelha')
    alert('Infelismente você foi reprovado.')
  }
}
