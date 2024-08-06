import { DatePickerProps }  from 'react-datepicker'

import { AppearanceStyles } from './utils/index.js'
import { ShapeStyles }      from './utils/index.js'

export type DatepickerProps = DatePickerProps & AppearanceStyles & ShapeStyles
