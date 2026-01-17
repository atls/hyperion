package com.atls.hyperion.ui.components.carousel.stories

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.carousel.CarouselWithPagination
import com.atls.hyperion.ui.components.pagination.style.appearance.PaginationAppearance
import com.atls.hyperion.ui.components.pagination.style.appearance.default
import com.atls.hyperion.ui.components.pagination.style.shape.PaginationShape
import com.atls.hyperion.ui.components.pagination.style.shape.circle
import com.atls.hyperion.ui.theme.tokens.layout.Space

@Composable
fun CarouselWithPaginationVariants() {
    ComponentVariants(
        name = "Carousel With Pagination",
        appearances = listOf(
            "Default" to { PaginationAppearance.default() }
        ),
        shapes = listOf(
            "Circle" to { PaginationShape.circle() }
        )
    ) { appearance, shape ->
        CarouselWithPagination(
            pageCount = 5,
            paginationAppearance = appearance,
            paginationShape = shape,
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
