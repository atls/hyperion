package com.atls.hyperion.ui.components.card

import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxScope
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Surface
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import com.atls.hyperion.ui.components.card.style.appearance.CardAppearance
import com.atls.hyperion.ui.components.card.style.shape.CardShape

@Composable
fun Card(
    modifier: Modifier = Modifier,
    shape: CardShape,
    appearance: CardAppearance,
    contentAlignment: Alignment = Alignment.TopCenter,
    content: @Composable BoxScope.() -> Unit
) {
    Surface(
        modifier = modifier,
        shape = RoundedCornerShape(shape.cornerRadius),
        color = appearance.backgroundColor,
        elevation = appearance.elevation
    ) {
        Box(
            modifier = Modifier
                .border(
                    width = shape.borderWidth,
                    color = appearance.borderColor,
                    shape = RoundedCornerShape(shape.cornerRadius)
                )
                .padding(shape.padding),
            contentAlignment = contentAlignment
        ) {
            content()
        }
    }
}
