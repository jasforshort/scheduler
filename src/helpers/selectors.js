export default function getAppointmentsForDay(state, name) {
  //I can also use find instead of filter
  const filteredDays = state.days.filter(day => day.name === name);
  // console.log("filteredDays: ",filteredDays);
  if(state.days.length===0 || filteredDays.length===0){
    return [];
  }

  //get the appointments
  const appointmentsFromDays = filteredDays[0].appointments;
  let filteredAppointments = [];
  for(let appointment of appointmentsFromDays) {
    filteredAppointments.push(state.appointments[appointment]);
  }
  return filteredAppointments;
}