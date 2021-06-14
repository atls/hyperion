export const createCellShapeStyles = (
  margin: number | string,
  padding: number | string,
  borderRadius: number | string
) => ({
  '.react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name': {
    margin,
    padding,
    borderRadius,
  },
  '.react-datepicker__day-name:hover, .react-datepicker__day:hover, .react-datepicker__time-name:hover':
    {
      borderRadius,
    },
})
