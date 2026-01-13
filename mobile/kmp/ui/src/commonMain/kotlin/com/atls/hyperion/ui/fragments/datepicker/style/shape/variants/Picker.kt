package com.atls.hyperion.ui.fragments.datepicker.style.shape.variants

import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.fragments.datepicker.style.shape.CalendarShape
import com.atls.hyperion.ui.fragments.datepicker.style.shape.CellShape
import com.atls.hyperion.ui.fragments.datepicker.style.shape.DatePickerShape
import com.atls.hyperion.ui.fragments.datepicker.style.shape.HeaderShape

@Composable
fun DatePickerShape.Companion.default(): DatePickerShape =
    DatePickerShape(
        cellShape = CellShape.default(),
        headerShape = HeaderShape.Companion.default(),
        calendarShape = CalendarShape.default()
    )
