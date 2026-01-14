package com.atls.hyperion.ui.fragment.datepicker.style.shape.variants

import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.fragment.datepicker.style.shape.CalendarShape
import com.atls.hyperion.ui.fragment.datepicker.style.shape.CellShape
import com.atls.hyperion.ui.fragment.datepicker.style.shape.DatePickerShape
import com.atls.hyperion.ui.fragment.datepicker.style.shape.HeaderShape

@Composable
fun DatePickerShape.Companion.default(): DatePickerShape =
    DatePickerShape(
        cellShape = CellShape.default(),
        headerShape = HeaderShape.default(),
        calendarShape = CalendarShape.default()
    )
