import VanillaCalendar from 'vanilla-calendar-pro';

const staticSpecifiedDates = ['2024-04-15', '2024-04-13', '2024-04-19'];

const calendarHandler = ({ eventDates }) => {
  const options = {
    settings: {
      visibility: {
        theme: 'light',
      },
      selection: {
        day: false,
      },
      selected: {
        dates: eventDates,
        month: 3,
        year: 2024,
      },
    },
    CSSClasses: {
      calendar: 'calendar-container',
    },
  };

  const calendar = new VanillaCalendar('#calendar', options);
  calendar.init();
};

calendarHandler({
  eventDates: staticSpecifiedDates,
});
