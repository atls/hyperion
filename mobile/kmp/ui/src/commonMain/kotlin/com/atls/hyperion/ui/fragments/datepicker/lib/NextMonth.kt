package com.atls.hyperion.ui.fragments.datepicker.lib

import kotlinx.datetime.Month
import kotlinx.datetime.YearMonth

fun YearMonth.next(): YearMonth =
    if (month == Month.DECEMBER)
        YearMonth(year + 1, Month.JANUARY)
    else
        YearMonth(year, Month.entries[month.ordinal + 1])
