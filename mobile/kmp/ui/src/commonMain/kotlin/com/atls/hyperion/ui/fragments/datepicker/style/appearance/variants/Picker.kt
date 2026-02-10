package com.atls.hyperion.ui.fragments.datepicker.style.appearance.variants

import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.components.divider.style.appearance.DividerAppearance
import com.atls.hyperion.ui.components.divider.style.appearance.default
import com.atls.hyperion.ui.components.modal.style.appearance.ModalAppearance
import com.atls.hyperion.ui.components.modal.style.appearance.default
import com.atls.hyperion.ui.fragments.datepicker.style.appearance.CellAppearance
import com.atls.hyperion.ui.fragments.datepicker.style.appearance.DatePickerAppearance
import com.atls.hyperion.ui.fragments.datepicker.style.appearance.HeaderAppearance
import com.atls.hyperion.ui.fragments.datepicker.style.appearance.WeekDaysAppearance
import com.atls.hyperion.ui.theme.tokens.colors.Colors as TokenColors

@Composable
fun DatePickerAppearance.Companion.default(): DatePickerAppearance =
    DatePickerAppearance(
        cellAppearance = CellAppearance.Companion.default(),
        headerAppearance = HeaderAppearance.default(),
        weekDaysAppearance = WeekDaysAppearance.default(),
        backgroundColor = TokenColors.Palette.white,
        dividerColor = TokenColors.Palette.gray,
        dividerAppearance = DividerAppearance.default(),
        modalAppearance = ModalAppearance.default()
    )
