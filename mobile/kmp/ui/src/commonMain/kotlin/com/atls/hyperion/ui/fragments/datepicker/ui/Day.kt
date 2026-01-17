package com.atls.hyperion.ui.fragments.datepicker.ui

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import com.atls.hyperion.ui.fragments.datepicker.style.appearance.DatePickerAppearance
import com.atls.hyperion.ui.fragments.datepicker.style.shape.DatePickerShape
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
    appearance: DatePickerAppearance,
    shape: DatePickerShape,
    onClick: (LocalDate) -> Unit,
) {
    val isCurrentMonth = day.position == DayPosition.MonthDate
    if (!isCurrentMonth) {
        Box(modifier = Modifier.aspectSquare())
        return
    }

    val date = LocalDate(day.date.year, day.date.monthNumber, day.date.dayOfMonth)

    val backgroundColor = when {
        isSelected || isRangeStart || isRangeEnd -> appearance.cellAppearance.activeBackgroundColor
        isInRange -> appearance.cellAppearance.inRangeBackgroundColor
        else -> appearance.cellAppearance.backgroundColor
    }

    val cellShape = when {
        isSelected -> shape.cellShape.activeShape
        isInRange -> shape.cellShape.rangeShape
        else -> shape.cellShape.shape
    }

    val textColor = when {
        isSelected || isRangeStart || isRangeEnd -> appearance.cellAppearance.activeTextColor
        isInRange -> appearance.cellAppearance.inRangeTextColor
        else -> appearance.cellAppearance.textColor
    }


    val containerModifier = Modifier
        .aspectSquare()
        .padding(shape.cellShape.spacing)
        .clip(cellShape)
        .background(backgroundColor)
        .padding(shape.cellShape.padding)
        .then(
            if ((isSelected || isRangeStart || isRangeEnd) && appearance.cellAppearance.activeBorderColor != Colors.Palette.transparent)
                Modifier.border(
                    shape.cellShape.borderWidth,
                    appearance.cellAppearance.activeBorderColor,
                    cellShape
                )
            else if (isInRange && appearance.cellAppearance.inRangeBorderColor != Colors.Palette.transparent)
                Modifier.border(
                    shape.cellShape.borderWidth,
                    appearance.cellAppearance.inRangeBorderColor,
                    cellShape
                )
            else if (appearance.cellAppearance.borderColor != Colors.Palette.transparent)
                Modifier.border(
                    shape.cellShape.borderWidth,
                    appearance.cellAppearance.borderColor,
                    cellShape
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
            typography = shape.cellShape.typography
        )
    }
}
