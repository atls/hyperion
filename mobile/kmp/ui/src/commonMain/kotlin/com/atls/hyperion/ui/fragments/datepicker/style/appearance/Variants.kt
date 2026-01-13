package com.atls.hyperion.ui.fragments.datepicker.style.appearance

import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.components.divider.style.appearance.DividerAppearance
import com.atls.hyperion.ui.components.divider.style.appearance.default
import com.atls.hyperion.ui.components.modal.style.appearance.ModalAppearance
import com.atls.hyperion.ui.components.modal.style.appearance.default
import com.atls.hyperion.ui.theme.tokens.colors.Colors as TokenColors

@Composable
fun DatePickerAppearance.Companion.default(): DatePickerAppearance =
    DatePickerAppearance(
        cellBackgroundColor = TokenColors.Palette.transparent,
        cellTextColor = TokenColors.Text.black,
        cellActiveBackgroundColor = TokenColors.Palette.blue,
        cellActiveTextColor = TokenColors.Text.white,
        cellInRangeBackgroundColor = TokenColors.Palette.lightPurple,
        cellInRangeTextColor = TokenColors.Text.black,
        cellHeaderTextColor = TokenColors.Text.gray,
        backgroundColor = TokenColors.Palette.white,
        headerTextColor = TokenColors.Text.black,
        arrowColor = TokenColors.Text.black,
        dividerColor = TokenColors.Palette.gray,
        weekDaysTextColor = TokenColors.Text.black,
        dividerAppearance = DividerAppearance.default(),
        modalAppearance = ModalAppearance.default()
    )
