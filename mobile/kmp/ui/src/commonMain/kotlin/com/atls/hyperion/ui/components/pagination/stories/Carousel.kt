package com.atls.hyperion.ui.components.pagination.stories

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.carousel.CarouselWithPagination
import com.atls.hyperion.ui.components.pagination.style.appearance.PaginationAppearance
import com.atls.hyperion.ui.components.pagination.style.appearance.default
import com.atls.hyperion.ui.components.pagination.style.shape.PaginationShape
import com.atls.hyperion.ui.components.pagination.style.shape.circle
import com.atls.hyperion.ui.components.pagination.style.shape.rectangle
import com.atls.hyperion.ui.theme.tokens.layout.Space

@Composable
fun CarouselPaginationVariants() {
    ComponentVariants(
        name = "Pagination with Carousel",
        appearances = listOf(
            "Default" to { PaginationAppearance.default() }
        ),
        shapes = listOf(
            "Circle" to { PaginationShape.circle() },
            "Rectangle" to { PaginationShape.rectangle() }
        )
    ) { appearance, shape ->
        CarouselWithPagination(
            pageCount = 5,
            paginationAppearance = appearance,
            paginationShape = shape,
            modifier = Modifier.height(Space.xl3)
        ) { page ->
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(Space.xl3)
                    .background(if (page % 2 == 0) Color.LightGray else Color.Gray),
                contentAlignment = Alignment.Center
            ) {
                Text(text = "Page $page")
            }
        }
    }
}
