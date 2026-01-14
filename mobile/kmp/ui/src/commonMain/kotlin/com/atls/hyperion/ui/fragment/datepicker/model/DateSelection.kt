package com.atls.hyperion.ui.fragment.datepicker.model

import kotlinx.datetime.LocalDate

sealed interface DateSelection {

    data class Single(
        val date: LocalDate? = null
    ) : DateSelection

    data class Range(
        val start: LocalDate? = null,
        val end: LocalDate? = null
    ) : DateSelection
}
