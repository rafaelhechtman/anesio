document.addEventListener('DOMContentLoaded', () => {
    const agendamentoForm = document.getElementById('agendamento-form');
    const horariosTabela = document.getElementById('horarios-tabela').getElementsByTagName('tbody')[0];
    const quantidadeInput = document.getElementById('quantidade');
    const enderecosAdicionaisDiv = document.getElementById('enderecos-adicionais');
    const calendarContainer = document.getElementById('calendar-container');
    const linkAgendar = document.getElementById('link-agendar');
    const linkHorarios = document.getElementById('link-horarios');
    const linkCalendario = document.getElementById('link-calendario');

    const sections = {
        agendamento: document.getElementById('agendamento'),
        horarios: document.getElementById('horarios'),
        calendario: document.getElementById('calendario')
    };

    const showSection = (section) => {
        Object.values(sections).forEach(s => s.classList.add('hidden'));
        section.classList.remove('hidden');
    };

    linkAgendar.addEventListener('click', () => showSection(sections.agendamento));
    linkHorarios.addEventListener('click', () => showSection(sections.horarios));
    linkCalendario.addEventListener('click', () => showSection(sections.calendario));

    // Popula os horários de 45 em 45 minutos
    const horaSelect = document.getElementById('hora');
    for (let h = 0; h < 24; h++) {
        for (let m = 0; m < 60; m += 45) {
            const hora = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
            const option = document.createElement('option');
            option.value = hora;
            option.textContent = hora;
            horaSelect.appendChild(option);
        }
    }

    // Adiciona campos de endereço adicional conforme a quantidade de pessoas
    quantidadeInput.addEventListener('input', () => {
        const quantidade = parseInt(quantidadeInput.value);
        enderecosAdicionaisDiv.innerHTML = '';
        for (let i = 1; i < quantidade; i++) {
            const label = document.createElement('label');
            label.textContent = `Endereço Adicional ${i + 1}:`;
            const input = document.createElement('input');
            input.type = 'text';
            input.name = `endereco-adicional-${i}`;
            input.required = true;
            enderecosAdicionaisDiv.appendChild(label);
            enderecosAdicionaisDiv.appendChild(input);
        }
    });

    // Carrega os horários marcados do localStorage
    const horariosMarcados = JSON.parse(localStorage.getItem('horariosMarcados')) || [];

    // Atualiza a tabela de horários marcados
    const atualizarTabela = () => {
        horariosTabela.innerHTML = '';
        horariosMarcados.forEach(horario => {
            const row = horariosTabela.insertRow();
            row.insertCell(0).textContent = horario.data;
            row.insertCell(1).textContent = horario.hora;
            row.insertCell(2).textContent = horario.enderecoPartida;
            row.insertCell(3).textContent = horario.enderecoDestino;
            row.insertCell(4).textContent = horario.enderecosAdicionais.join(', ');
            row.insertCell(5).textContent = horario.quantidade;
        });
    };

    // Atualiza o calendário de agendamentos
    const atualizarCalendario = () => {
        // Lógica para atualizar o calendário com base nos horários marcados
    };

    // Adiciona um novo agendamento
    agendamentoForm.addEventListener('submit### Código HTML

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
                <li><a href="#" id="link-agendar">Agendar</a></li>
                <li><a href="#" id="link-horarios">Horários Marcados</a></li>
                <li><a href="#" id="link-calendario">Calendário</a></li>
            </ul>
        </nav>
    </header>

    <main id="agendamento" class="active">
        <h2>Agende seu Horário</h2>
        <form id="agendamento-form">
            <label for="data">Data:</label>
            <input type="date" id="data" name="data" required>
            
            <label for="hora">Hora:</label>
            <select id="hora" name="hora" required>
                <!-- Opções de horários a cada 45 minutos serão preenchidas aqui -->
            </select>
            
            <label for="endereco-partida">Endereço de Partida:</label>
            <input type="text" id="endereco-partida" name="endereco-partida" required>
            
            <label for="endereco-destino">Destino Final:</label>
            <input type="text" id="endereco-destino" name="endereco-destino" required>
            
            <label for="quantidade">Quantidade de Pessoas (Máx. 6):</label>
            <input type="number" id="quantidade" name="quantidade" min="1" max="6" required>
            
            <div id="enderecos-adicionais">
                <!-- Endereços adicionais serão adicionados aqui -->
            </div>
            
            <p>Chave Pix para Pagamento: 99292-2248</p>
            
            <button type="submit">Agendar</button>
        </form>
    </main>

    <main id="horarios" class="hidden">
        <h2>Horários Marcados</h2>
        <table id="horarios-tabela">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Hora</th>
                    <th>Endereço de Partida</th>
                    <th>Destino Final</th>
                    <th>Endereços Adicionais</th>
                    <th>Quantidade de Pessoas</th>
                </tr>
            </thead>
            <tbody>
                <!-- Horários marcados aparecerão aqui -->
            </tbody>
        </table>
    </main>

    <main id="calendario" class="hidden">
        <h2>Calendário de Agendamentos</h2>
        <div id="calendar-container">
            <!-- O calendário será gerado aqui -->
        </div>
    </main>

    <script src="script.js"></script>
</body>
</html>
