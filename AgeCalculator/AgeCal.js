document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.querySelector('.calculate');
    const resetButton = document.querySelector('.reset');
    const display = document.querySelector('.calculator-display');

    function calculateAge() {
        const dobInputs = document.querySelectorAll('.date-of-birth input');
        const todayInputs = document.querySelectorAll('.age-on-this-date input');

        const dob = new Date(`${dobInputs[2].value}-${dobInputs[1].value}-${dobInputs[0].value}`);
        const today = new Date(`${todayInputs[2].value}-${todayInputs[1].value}-${todayInputs[0].value}`);
        
        let ageYear = today.getFullYear() - dob.getFullYear();
        let ageMonth = today.getMonth() - dob.getMonth();
        let ageDay = today.getDate() - dob.getDate();

        if (ageDay < 0) {
            ageMonth--;
            ageDay += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); 
        }
        
        if (ageMonth < 0) {
            ageYear--;
            ageMonth += 12;
        }

        display.textContent = `${ageYear} Years, ${ageMonth} Months, ${ageDay} Days`;
        display.style.display = 'block';

        setTimeout(() => {
            display.style.display = 'none';
        }, 30000);
    }

    function resetInputs() {
        const dobInputs = document.querySelectorAll('.date-of-birth input');
        const todayInputs = document.querySelectorAll('.age-on-this-date input');
        dobInputs.forEach(input => input.value = "");
        todayInputs.forEach(input => input.value = "");
        display.textContent = '';
        display.style.display = 'none';
    }

    calculateButton.addEventListener('click', calculateAge);
    resetButton.addEventListener('click', resetInputs);
});
