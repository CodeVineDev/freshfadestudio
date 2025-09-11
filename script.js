// simulated staff schedules (daily available windows)
const staffSchedules = {
olalekan: { start: 9, end: 17 },
freddie: { start: 10, end: 18 },
james: { start: 8, end: 16 }
};


// simulated booked slots (to demonstrate blocking)
// format: 'YYYY-MM-DD': { staff: ['HH:MM', ...] }
const booked = {
// example: '2025-09-15': { olalekan: ['10:00', '11:00'] }
};


const serviceSelect = document.getElementById('service');
const staffSelect = document.getElementById('staff');
const dateInput = document.getElementById('date');
const timesEl = document.getElementById('times');
const summaryService = document.getElementById('summaryService');
const summaryStaff = document.getElementById('summaryStaff');
const summaryTime = document.getElementById('summaryTime');
const summaryDuration = document.getElementById('summaryDuration');


// init flatpickr
flatpickr(dateInput, {
altInput: true,
altFormat: 'F j, Y',
dateFormat: 'Y-m-d',
minDate: 'today',
onChange: generateTimes
});


serviceSelect.addEventListener('change', () => {
const duration = serviceSelect.selectedOptions[0].dataset.duration;
summaryDuration.textContent = duration + ' min';
summaryService.textContent = serviceSelect.selectedOptions[0].textContent;
generateTimes();
});


staffSelect.addEventListener('change', () => {
summaryStaff.textContent = staffSelect.value.charAt(0).toUpperCase() + staffSelect.value.slice(1);
generateTimes();
});


function timeToMinutes(t) {
const [h,m] = t.split(':').map(Number);
return h*60 + m;
}


function minutesToTime(m) {
const hh = String(Math.floor(m/60)).padStart(2,'0');
const mm = String(m%60).padStart(2,'0');
}