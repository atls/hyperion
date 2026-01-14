package com.atls.hyperion.ui.fragment.datepicker.lib

import kotlinx.datetime.Month
import kotlinx.datetime.YearMonth

fun YearMonth.previous(): YearMonth =
    if (month == Month.JANUARY)
        YearMonth(year - 1, Month.DECEMBER)
    else
        YearMonth(year, Month.entries[month.ordinal - 1])
