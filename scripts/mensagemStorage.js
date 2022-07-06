
var mensagemStorage = (function() {

    //Constructor
    let storageMessage = [];
    
    if (localStorage.getItem('messages')) {
        storageMessage = JSON.parse(localStorage.getItem('messages'));
    }

    /**
     * Add uma nova mensagem ao banco de dados
     * 
     * @param {Mensagem a ser adicionada} message 
     */
    function _add(message) {

        //Id
        //let count = Object.keys(storageMessage).length;
        let count = storageMessage.length;
        let id = count + 1;
        //Data de add
        let data = new Date();
        let options = {   
            day: 'numeric',
            month: 'long', 
            year: 'numeric'
        };
        let dateStr = data.toLocaleDateString('pt-br', options);

        let newItem = {
            'id': id,
            'message': message,
            'date': dateStr,
        };

        storageMessage.push([newItem]);

        //Save
        let strStorageMessage = JSON.stringify(storageMessage);
        localStorage.setItem('messages', strStorageMessage);

        return newItem;

    }

    function _getAll() {
        return storageMessage;
    }

    return {
        add: function(message) {
            return _add(message);
        },
        delete: function(item) {

        },
        get: function() {

        },
        getAll: function() {
            return _getAll();
        }
    }

})();

// var textMensagem = JSON.stringify(mensagem);
// var mensagem = JSON.parse(textMensagem);