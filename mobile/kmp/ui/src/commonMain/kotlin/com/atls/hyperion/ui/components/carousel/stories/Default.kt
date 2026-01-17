package com.atls.hyperion.ui.components.carousel.stories

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.carousel.Carousel
import com.atls.hyperion.ui.components.carousel.style.shape.CarouselShape
import com.atls.hyperion.ui.components.carousel.style.shape.default
import com.atls.hyperion.ui.theme.tokens.layout.Space

@Composable
fun DefaultCarouselVariants() {
    ComponentVariants(
        name = "Carousel",
        appearances = listOf(
            "Default" to { Unit }
        ),
        shapes = listOf(
            "Default" to { CarouselShape.default() }
        )
    ) { _, shape ->
        Carousel(
            pageCount = 5,
            shape = shape,
            modifier = Modifier.height(Space.xl3)
        ) { page: Int ->
            CarouselItem(page)
        }
    }
}

@Composable
private fun CarouselItem(page: Int) {
    androidx.compose.foundation.layout.Box(
        modifier = Modifier
            .fillMaxWidth()
            .height(Space.xl3)
            .background(if (page % 2 == 0) androidx.compose.ui.graphics.Color.LightGray else androidx.compose.ui.graphics.Color.Gray),
        contentAlignment = androidx.compose.ui.Alignment.Center
    ) {
        androidx.compose.material.Text(text = "Page $page")
    }
}
