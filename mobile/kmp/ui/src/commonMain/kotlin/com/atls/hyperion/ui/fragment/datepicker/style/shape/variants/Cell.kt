package com.atls.hyperion.ui.fragment.datepicker.style.shape.variants

import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.ui.text.TextStyle
import com.atls.hyperion.ui.fragment.datepicker.style.shape.CellShape
import com.atls.hyperion.ui.theme.tokens.layout.CornerRadius
import com.atls.hyperion.ui.theme.tokens.layout.Space
import com.atls.hyperion.ui.theme.typography.FontSize
import com.atls.hyperion.ui.theme.typography.FontWeight

@Composable
fun CellShape.Companion.default(): CellShape =
    CellShape(
        spacing = Space.zero,
        padding = Space.g8,
        shape = RoundedCornerShape(CornerRadius.xs2),
        typography = TextStyle(
            fontSize = FontSize.xs,
            fontWeight = FontWeight.regular,
        ),
        headerTypography = TextStyle(
            fontSize = FontSize.xs2,
            fontWeight = FontWeight.medium,
        )
    )
