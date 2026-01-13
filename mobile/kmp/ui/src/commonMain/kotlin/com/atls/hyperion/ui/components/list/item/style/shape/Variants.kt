package com.atls.hyperion.ui.components.list.item.style.shape

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.runtime.Composable
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.style.TextAlign
import com.atls.hyperion.ui.theme.tokens.layout.CornerRadius
import com.atls.hyperion.ui.theme.tokens.layout.Space
import com.atls.hyperion.ui.theme.typography.FontSize
import com.atls.hyperion.ui.theme.typography.FontWeight
import com.atls.hyperion.ui.theme.typography.NunitoSansFontFamily

@Composable
fun TextListItemShape.Companion.default(): TextListItemShape =
    TextListItemShape(
        cornerRadius = CornerRadius.xl2,
        paddings = PaddingValues(
            horizontal = Space.g12,
            vertical = Space.g8
        ),
        textPaddings = PaddingValues(
            horizontal = Space.g4,
            vertical = Space.zero
        ),
        typography = TextStyle(
            fontSize = FontSize.xs,
            fontWeight = FontWeight.medium,
            fontFamily = NunitoSansFontFamily()
        ),
        textAlign = TextAlign.Start
    )
