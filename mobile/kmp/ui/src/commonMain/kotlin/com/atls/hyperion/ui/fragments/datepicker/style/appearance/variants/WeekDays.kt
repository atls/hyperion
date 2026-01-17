package com.atls.hyperion.ui.fragments.datepicker.style.appearance.variants

import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.fragments.datepicker.style.appearance.WeekDaysAppearance
import com.atls.hyperion.ui.theme.tokens.colors.Colors as TokenColors

@Composable
fun WeekDaysAppearance.Companion.default(): WeekDaysAppearance =
    WeekDaysAppearance(
        textColor = TokenColors.Text.black
    )
