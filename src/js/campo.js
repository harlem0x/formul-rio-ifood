document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Por favor, preencha todos os campos.');
    } else {
        
        alert('Formulário enviado com sucesso!');
    }
});
