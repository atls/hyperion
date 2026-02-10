package com.atls.hyperion.ui.fragments.datepicker.ui

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Modifier
import com.atls.hyperion.ui.fragments.datepicker.config.DAYS_IN_WEEK
import com.atls.hyperion.ui.fragments.datepicker.config.WEEK_RANGE
import com.atls.hyperion.ui.fragments.datepicker.lib.next
import com.atls.hyperion.ui.fragments.datepicker.lib.previous
import com.atls.hyperion.ui.fragments.datepicker.model.DateSelection
import com.atls.hyperion.ui.fragments.datepicker.style.appearance.DatePickerAppearance
import com.atls.hyperion.ui.fragments.datepicker.style.shape.DatePickerShape
import com.atls.hyperion.ui.primitives.layout.column.Column
import com.kizitonwose.calendar.compose.HorizontalCalendar
import com.kizitonwose.calendar.compose.rememberCalendarState
import com.kizitonwose.calendar.core.firstDayOfWeekFromLocale
import kotlinx.coroutines.launch
import kotlinx.datetime.DayOfWeek
import kotlinx.datetime.TimeZone
import kotlinx.datetime.YearMonth
import kotlinx.datetime.toLocalDateTime
import kotlin.time.Clock
import kotlin.time.ExperimentalTime

@OptIn(ExperimentalTime::class)
@Composable
fun DatePickerContent(
    modifier: Modifier = Modifier,
    selection: DateSelection,
    onSelectionChange: (DateSelection) -> Unit,
    appearance: DatePickerAppearance,
    shape: DatePickerShape,
) {
    val today = remember {
        Clock.System.now()
            .toLocalDateTime(TimeZone.currentSystemDefault())
            .date
    }

    val currentMonth = remember { YearMonth(today.year, today.month) }
    val startMonth = remember { YearMonth(1, today.month) }
    val endMonth = remember { YearMonth(2200, today.month) }
    val firstDayOfWeek = remember { firstDayOfWeekFromLocale() }

    val state = rememberCalendarState(
        startMonth = startMonth,
        endMonth = endMonth,
        firstVisibleMonth = currentMonth,
        firstDayOfWeek = firstDayOfWeek
    )

    val coroutineScope = rememberCoroutineScope()

    Column(modifier = modifier.background(appearance.backgroundColor)) {

        val visibleMonth = state.firstVisibleMonth.yearMonth
        val monthName =
            visibleMonth.month.name.lowercase().replaceFirstChar { it.uppercase() }

        CalendarHeader(
            monthName = "$monthName ${visibleMonth.year}",
            appearance = appearance,
            shape = shape,
            onPrevMonth = {
                coroutineScope.launch {
                    state.animateScrollToMonth(visibleMonth.previous())
                }
            },
            onNextMonth = {
                coroutineScope.launch {
                    state.animateScrollToMonth(visibleMonth.next())
                }
            }
        )

        HorizontalCalendar(
            modifier = Modifier
                .fillMaxWidth()
                .padding(shape.calendarShape.padding),

            state = state,
            dayContent = { day ->
                val date = day.date

                val isSelected = when (selection) {
                    is DateSelection.Single -> selection.date == date
                    is DateSelection.Range -> false
                }

                val isRangeStart = when (selection) {
                    is DateSelection.Range -> selection.start == date
                    else -> false
                }

                val isRangeEnd = when (selection) {
                    is DateSelection.Range -> selection.end == date
                    else -> false
                }

                val isInRange = when (selection) {
                    is DateSelection.Range ->
                        selection.start != null &&
                            selection.end != null &&
                            date > selection.start &&
                            date < selection.end

                    else -> false
                }

                Day(
                    day = day,
                    isSelected = isSelected,
                    isInRange = isInRange,
                    isRangeStart = isRangeStart,
                    isRangeEnd = isRangeEnd,
                    appearance = appearance,
                    shape = shape,
                    onClick = { clicked ->
                        onSelectionChange(
                            when (selection) {
                                is DateSelection.Single ->
                                    selection.copy(date = clicked)

                                is DateSelection.Range ->
                                    selection.next(clicked)
                            }
                        )
                    }
                )
            },

            monthHeader = {
                WeekDays(
                    weekDays = state.firstDayOfWeek.let { first ->
                        WEEK_RANGE.map {
                            DayOfWeek.entries[(first.ordinal + it) % DAYS_IN_WEEK]
                        }
                    },
                    appearance = appearance,
                    shape = shape
                )
            }
        )
    }
}
