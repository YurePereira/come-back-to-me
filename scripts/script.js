
//Guardar dados no banco
function enviarMensagem(mensagem) {

  mensagemStorage.add(mensagem);

}

const btnEnviar = document.querySelector('#btn_enviar');

btnEnviar.addEventListener('click', function(event) {

  event.preventDefault();
  
  //Pegar formulário e seus dados.
  var frm = document.querySelector('#frm_motivos');
  var frmData = new FormData(frm);
  var mensagem = frmData.get('txt_mensagem');
  frm.reset();
  
  enviarMensagem(mensagem);
  
});

window.addEventListener('load', function() {

  let tableSelector = document.querySelector('#tb_dados tbody');
  let mensagens = mensagemStorage.getAll();

  //Preencher a tabela com os dados
  if (mensagens.length > 0) {

    tableSelector.innerHTML = '';

    mensagens.forEach(function(element) {

      console.log(element);

      tableSelector.innerHTML += `
      <tr>
        <td> ${element[0].id} </td>
        <td> ${element[0].message} </td>
        <td> ${element[0].date} </td>
      </tr>`;

    });

  }

});
