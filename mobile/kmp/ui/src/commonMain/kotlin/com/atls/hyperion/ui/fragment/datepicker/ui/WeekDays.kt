package com.atls.hyperion.ui.fragment.datepicker.ui

import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextAlign
import com.atls.hyperion.ui.fragment.datepicker.config.DAYS_IN_WEEK
import com.atls.hyperion.ui.fragment.datepicker.style.appearance.DatePickerAppearance
import com.atls.hyperion.ui.fragment.datepicker.style.shape.DatePickerShape
import com.atls.hyperion.ui.primitives.Text
import com.atls.hyperion.ui.theme.tokens.layout.Weight
import kotlinx.datetime.DayOfWeek
import kotlinx.datetime.format.DayOfWeekNames

@Composable
fun WeekDays(
    weekDays: List<DayOfWeek>,
    appearance: DatePickerAppearance,
    shape: DatePickerShape,
    dayNames: List<String> = DayOfWeekNames.ENGLISH_ABBREVIATED.names
) {
    require(dayNames.size == DAYS_IN_WEEK) { "dayNames must contain exactly 7 elements (Mon → Sun)" }

    Row(modifier = Modifier.fillMaxWidth()) {
        weekDays.forEach { dayOfWeek ->
            val nameIndex = (dayOfWeek.ordinal - weekDays.first().ordinal + DAYS_IN_WEEK) % DAYS_IN_WEEK
            val shortName = dayNames[nameIndex]

            Text(
                modifier = Modifier.weight(Weight.full),
                textAlign = TextAlign.Center,
                text = shortName,
                typography = shape.dayHeaderTypography,
                color = appearance.weekDaysTextColor,
            )
        }
    }
}
