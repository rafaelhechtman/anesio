console.log("Script carregado");

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM completamente carregado e analisado");

    const calendar = document.getElementById('calendar');
    const monthYearDisplay = document.getElementById('calendar-month-year');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');

    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

    function getMonthName(monthIndex) {
        const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
                        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        return months[monthIndex];
    }

    function renderCalendar(month, year) {
        console.log(`Renderizando calendário para ${month + 1}/${year}`);
        calendar.innerHTML = '';
        monthYearDisplay.textContent = `${getMonthName(month)} ${year}`;

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const headerRow = document.createElement('tr');
        daysOfWeek.forEach(day => {
            const th = document.createElement('th');
            th.textContent = day;
            headerRow.appendChild(th);
        });
        calendar.appendChild(headerRow);

        let date = 1;
        for (let i = 0; i < 6; i++) {
            const row = document.createElement('tr');

            for (let j = 0; j < 7; j++) {
                const cell = document.createElement('td');
                if (i === 0 && j < firstDay) {
                    cell.textContent = "";
                } else if (date > daysInMonth) {
                    break;
                } else {
                    cell.textContent = date;
                    const button = document.createElement('button');
                    button.type = 'button';
                    button.classList.add('mark-button');
                    button.textContent = 'Agende aqui';
                    button.dataset.date = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
                    button.addEventListener('click', () => {
                        console.log(`Data selecionada: ${button.dataset.date}`);
                        window.location.href = `agendamento.html?date=${button.dataset.date}`;
                    });
                    cell.appendChild(button);
                    date++;
                }
                row.appendChild(cell);
            }
            calendar.appendChild(row);
        }
    }

    prevMonthBtn.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentMonth, currentYear);
    });

    nextMonthBtn.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentMonth, currentYear);
    });

    renderCalendar(currentMonth, currentYear);
});
