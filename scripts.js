document.addEventListener('DOMContentLoaded', () => {
    const horaSelect = document.getElementById('hora');
    const quantidadeInput = document.getElementById('quantidade');
    const enderecosAdicionaisDiv = document.getElementById('enderecos_adicionais');

    // Popula os horários de 45 em 45 minutos
    const populateHorarios = () => {
        const horarios = [];
        for (let h = 0; h < 24; h++) {
            for (let m = 0; m < 60; m += 45) {
                const hora = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
                horarios.push(hora);
            }
        }
        horarios.forEach(hora => {
            const option = document.createElement('option');
            option.value = hora;
            option.textContent = hora;
            horaSelect.appendChild(option);
        });
    };

    populateHorarios();

    // Adiciona campos de endereço adicional conforme a quantidade de pessoas
    quantidadeInput.addEventListener('input', () => {
        const quantidade = parseInt(quantidadeInput.value);
        enderecosAdicionaisDiv.innerHTML = '';
        for (let i = 1; i < quantidade; i++) {
            const label = document.createElement('label');
            label.textContent = `Endereço Adicional ${i + 1}:`;
            const input = document.createElement('input');
            input.type = 'text';
            input.name = `endereco_adicional_${i}`;
            input.required = true;
            enderecosAdicionaisDiv.appendChild(label);
            enderecosAdicionaisDiv.appendChild(input);
        }
    });

    // Evento de submissão do formulário
    document.getElementById('agendamento-form').addEventListener('submit', (event) => {
        event.preventDefault();
        // Lógica para salvar agendamentos e atualizar a interface
        // Esta lógica precisa ser implementada com armazenamentoEntendido. Vamos corrigir os problemas apresentados para que as horas apareçam corretamente de 45 em 45 minutos e os links para as páginas "Horários Marcados" e "Calendário" funcionem corretamente.

### Estrutura do Projeto

A estrutura do projeto deve incluir:
- `index.html` (Página principal de agendamento)
- `horarios.html` (Página de horários marcados)
- `calendario.html` (Página de calendário)
- `styles.css` (Arquivo CSS)
- `script.js` (Arquivo JavaScript)

### Arquivo `index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agendamento de Transporte com Anésio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Agendamento de Transporte com Anésio</h1>
        <nav>
            <ul>
                <li><a href="index.html">Agendar</a></li>
                <li><a href="horarios.html">Horários Marcados</a></li>
                <li><a href="calendario.html">Calendário</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2>Agende seu Horário</h2>
        <form id="agendamento-form">
            <label for="data">Data:</label>
            <input type="date" id="data" name="data" required>
            
            <label for="hora">Hora:</label>
            <select id="hora" name="hora" required>
                <!-- Opções de horários a cada 45 minutos serão preenchidas pelo JavaScript -->
            </select>
            
            <label for="endereco-partida">Endereço de Partida:</label>
            <input type="text" id="endereco-partida" name="endereco-partida" required>
            
            <label for="endereco-destino">Destino Final:</label>
            <input type="text" id="endereco-destino" name="endereco-destino" required>
            
            <label for="quantidade">Quantidade de Pessoas (Máx. 6):</label>
            <input type="number" id="quantidade" name="quantidade" min="1" max="6" required>
            
            <div id="enderecos-adicionais">
                <!-- Endereços adicionais serão adicionados aqui pelo JavaScript -->
            </div>
            
            <p>Chave Pix para Pagamento: 99292-2248</p>
            
            <button type="submit">Agendar</button>
        </form>
    </main>
    <script src="script.js"></script>
</body>
</html>
