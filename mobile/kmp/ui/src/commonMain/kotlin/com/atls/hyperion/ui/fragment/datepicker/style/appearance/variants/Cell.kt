package com.atls.hyperion.ui.fragment.datepicker.style.appearance.variants

import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.fragment.datepicker.style.appearance.CellAppearance
import com.atls.hyperion.ui.theme.tokens.colors.Colors as TokenColors

@Composable
fun CellAppearance.Companion.default(): CellAppearance =
    CellAppearance(
        backgroundColor = TokenColors.Palette.transparent,
        textColor = TokenColors.Text.black,
        activeBackgroundColor = TokenColors.Palette.blue,
        activeTextColor = TokenColors.Text.white,
        inRangeBackgroundColor = TokenColors.Palette.lightPurple,
        inRangeTextColor = TokenColors.Text.black,
        headerTextColor = TokenColors.Text.gray
    )
