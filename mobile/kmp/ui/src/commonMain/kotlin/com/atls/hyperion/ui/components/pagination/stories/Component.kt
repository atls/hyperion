package com.atls.hyperion.ui.components.pagination.stories

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.carousel.CarouselWithPagination
import com.atls.hyperion.ui.components.pagination.Pagination
import com.atls.hyperion.ui.components.pagination.style.appearance.PaginationAppearance
import com.atls.hyperion.ui.components.pagination.style.appearance.default
import com.atls.hyperion.ui.components.pagination.style.shape.PaginationShape
import com.atls.hyperion.ui.components.pagination.style.shape.circle
import com.atls.hyperion.ui.components.pagination.style.shape.rectangle
import com.atls.hyperion.ui.primitives.VerticalSpacer
import com.atls.hyperion.ui.theme.tokens.layout.Space

class PaginationStory : ComponentExample {
    override val name: String = "Pagination"

    @Composable
    override fun Content() {
        var currentPage by remember { mutableStateOf(1) }

        Column {
            ComponentVariants(
                name = "Pagination (Clickable)",
                appearances = listOf(
                    "Default" to { PaginationAppearance.default() }
                ),
                shapes = listOf(
                    "Circle" to { PaginationShape.circle() },
                    "Rectangle" to { PaginationShape.rectangle() }
                )
            ) { appearance: PaginationAppearance, shape: PaginationShape ->
                Pagination(
                    currentPage = currentPage,
                    count = 5,
                    appearance = appearance,
                    shape = shape,
                    onPageClick = { currentPage = it }
                )
            }

            VerticalSpacer(Space.g24)

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
                    modifier = Modifier.height(100.dp)
                ) { page ->
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .height(100.dp)
                            .background(if (page % 2 == 0) Color.LightGray else Color.Gray),
                        contentAlignment = Alignment.Center
                    ) {
                        Text(text = "Page $page")
                    }
                }
            }
        }
    }
}
