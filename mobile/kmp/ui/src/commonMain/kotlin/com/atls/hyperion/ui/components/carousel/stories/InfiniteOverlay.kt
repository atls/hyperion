package com.atls.hyperion.ui.components.carousel.stories

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.carousel.InfiniteOverlayCarousel
import com.atls.hyperion.ui.theme.tokens.layout.Space

@Composable
fun InfiniteOverlayCarouselVariants() {
    val centerIndexState = remember { mutableStateOf(0) }
    ComponentVariants(
        name = "Infinite Overlay Carousel",
        appearances = listOf(
            "Default" to { Unit }
        ),
        shapes = listOf(
            "Default" to { Unit }
        )
    ) { _, _ ->
        InfiniteOverlayCarousel(
            items = listOf(Color.Red, Color.Green, Color.Blue, Color.Yellow, Color.Cyan),
            baseCardSize = Space.xl3,
            sizeStep = Space.lg,
            visibleItemCount = 3,
            alphaStep = 0.2f,
            minAlpha = 0.5f,
            centerIndexState = centerIndexState,
            modifier = Modifier.fillMaxWidth().height(Space.xl3)
        ) { color, size, alpha, _ ->
            Box(
                modifier = Modifier
                    .height(size)
                    .fillMaxWidth()
                    .padding(horizontal = Space.sm)
                    .background(color.copy(alpha = alpha)),
                contentAlignment = Alignment.Center
            ) {
                androidx.compose.material.Text("Item", color = Color.White)
            }
        }
    }
}
