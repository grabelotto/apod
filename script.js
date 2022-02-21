//Função utilizada para chamar a NASA
function callNasa() {
  //Aqui criamos um XMLHttpRequest, um objeto do Javascript responsável por enviar/receber dados de outros servidores.
  var xhttp = new XMLHttpRequest()
  var url =
    'https://api.nasa.gov/planetary/apod?api_key=9ANE9r5LlI2M3QNrymMKDKoz2HYqAMcqW4OF5wxc'

  var nasa = document.getElementById('nasa')
  var date = document.getElementById('date')

  url += '&date=' + date.value
  console.log(url)
  xhttp.onreadystatechange = function () {
    //Se estamos na etapa final da requisição de dados (this.readyState == 4) e recebemos um status 200 (que significa que foi um sucesso a conexão), então...
    if (this.readyState == 4 && this.status == 200) {
      //Mudamos os atributos "src" e "alt" com o endereço da imagem da NASA + o título da foto.
      nasa.src = JSON.parse(this.responseText).url
      nasa.alt = JSON.parse(this.responseText).title
    }

    //Para pegar os dados acima, estamos utilizando o JSON.parse(). Estamos fazendo isto pois a resposta que recebemos de um servidor é 99% das vezes uma string (texto) e esta função nos permite "desmontar" esta string e transformar em um objeto Javascript, que podemos manipular seus atributos.
  }

  //Aqui criamos (função open()) e enviamos a requisição (função send()) a NASA, dizendo que estamos buscando dados ("GET") na URL deles, passando os seguintes parametros: api_key (a chave da nossa conta na NASA) e date (a data da imagem). O "true" ali é para definirmos se queremos uma chamada assíncrona ou síncrona (true para assíncrona, false para síncrona).
  xhttp.open('GET', url, true)
  xhttp.send()
}
