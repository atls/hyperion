package com.atls.hyperion.ui.components.topBar.style.shape

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.runtime.Composable
import androidx.compose.ui.text.TextStyle
import com.atls.hyperion.ui.theme.tokens.layout.Space
import com.atls.hyperion.ui.theme.typography.FontSize
import com.atls.hyperion.ui.theme.typography.FontWeight
import com.atls.hyperion.ui.theme.typography.NunitoSansFontFamily

@Composable
fun TopBarShape.Companion.default(): TopBarShape =
    TopBarShape(
        paddings = PaddingValues(
            horizontal = Space.xl3,
            vertical = Space.zero
        ),
        typography = TextStyle(
            fontWeight = FontWeight.bold,
            fontSize = FontSize.xl4,
            fontFamily = NunitoSansFontFamily()
        )
    )
