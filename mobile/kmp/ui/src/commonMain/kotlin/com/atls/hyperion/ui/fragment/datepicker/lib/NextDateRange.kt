package com.atls.hyperion.ui.fragment.datepicker.lib

import com.atls.hyperion.ui.fragment.datepicker.model.DateSelection
import kotlinx.datetime.LocalDate

fun DateSelection.Range.next(clicked: LocalDate): DateSelection.Range =
    when {
        start == null || end != null ->
            copy(start = clicked, end = null)

        clicked < start ->
            copy(start = clicked, end = start)

        else ->
            copy(end = clicked)
    }
