package com.atls.hyperion.ui.components.carousel.stories

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.atls.hyperion.storybook.shared.model.ComponentExample

class CarouselStory : ComponentExample {
    override val name: String = "Carousel"

    @Composable
    override fun Content() {
        Column(
            modifier = Modifier.verticalScroll(rememberScrollState())
        ) {
            DefaultCarouselVariants()
            CarouselWithPaginationVariants()
            InfiniteOverlayCarouselVariants()
        }
    }
}
