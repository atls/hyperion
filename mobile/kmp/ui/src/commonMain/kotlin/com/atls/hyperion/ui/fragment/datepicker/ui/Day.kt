package com.atls.hyperion.ui.fragment.datepicker.ui

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import com.atls.hyperion.ui.fragment.datepicker.style.appearance.DatepickerAppearance
import com.atls.hyperion.ui.fragment.datepicker.style.shape.DatepickerShape
import com.atls.hyperion.ui.primitives.Text
import com.atls.hyperion.ui.shared.layout.aspectSquare
import com.atls.hyperion.ui.theme.tokens.colors.Colors
import com.kizitonwose.calendar.core.CalendarDay
import com.kizitonwose.calendar.core.DayPosition
import kotlinx.datetime.LocalDate

@Composable
fun Day(
    day: CalendarDay,
    isSelected: Boolean,
    isInRange: Boolean,
    isRangeStart: Boolean,
    isRangeEnd: Boolean,
    appearance: DatepickerAppearance,
    shape: DatepickerShape,
    onClick: (LocalDate) -> Unit,
) {
    val isCurrentMonth = day.position == DayPosition.MonthDate
    if (!isCurrentMonth) {
        Box(modifier = Modifier.aspectSquare())
        return
    }

    val date = LocalDate(day.date.year, day.date.monthNumber, day.date.dayOfMonth)

    val backgroundColor = when {
        isSelected || isRangeStart || isRangeEnd -> appearance.cellActiveBackgroundColor
        isInRange -> appearance.cellInRangeBackgroundColor
        else -> appearance.cellBackgroundColor
    }

    val textColor = when {
        isSelected || isRangeStart || isRangeEnd -> appearance.cellActiveTextColor
        isInRange -> appearance.cellInRangeTextColor
        else -> appearance.cellTextColor
    }

    val containerModifier = Modifier
        .aspectSquare()
        .padding(shape.cellSpacing)
        .clip(shape.cellShape ?: RoundedCornerShape(shape.cellCornerRadius))
        .background(backgroundColor)
        .padding(shape.cellPadding)
        .then(
            if ((isSelected || isRangeStart || isRangeEnd) && appearance.cellActiveBorderColor != Colors.Palette.transparent)
                Modifier.border(
                    shape.cellBorderWidth,
                    appearance.cellActiveBorderColor,
                    shape.cellShape ?: RoundedCornerShape(shape.cellCornerRadius)
                )
            else if (isInRange && appearance.cellInRangeBorderColor != Colors.Palette.transparent)
                Modifier.border(
                    shape.cellBorderWidth,
                    appearance.cellInRangeBorderColor,
                    shape.cellShape ?: RoundedCornerShape(shape.cellCornerRadius)
                )
            else if (appearance.cellBorderColor != Colors.Palette.transparent)
                Modifier.border(
                    shape.cellBorderWidth,
                    appearance.cellBorderColor,
                    shape.cellShape ?: RoundedCornerShape(shape.cellCornerRadius)
                )
            else Modifier
        )
        .clickable { onClick(date) }


    Box(
        modifier = containerModifier,
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = day.date.dayOfMonth.toString(),
            color = textColor,
            typography = shape.cellTypography
        )
    }
}
