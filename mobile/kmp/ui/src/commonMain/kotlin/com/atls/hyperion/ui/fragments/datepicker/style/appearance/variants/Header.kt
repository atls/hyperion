package com.atls.hyperion.ui.fragments.datepicker.style.appearance.variants

import androidx.compose.runtime.Composable
import com.atls.hyperion.ui.fragments.datepicker.style.appearance.HeaderAppearance
import com.atls.hyperion.ui.theme.tokens.colors.Colors as TokenColors

@Composable
fun HeaderAppearance.Companion.default(): HeaderAppearance =
    HeaderAppearance(
        textColor = TokenColors.Text.black,
        arrowColor = TokenColors.Text.black
    )
