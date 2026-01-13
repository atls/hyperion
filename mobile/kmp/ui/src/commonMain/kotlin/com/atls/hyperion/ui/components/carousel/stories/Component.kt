package com.atls.hyperion.ui.components.carousel.stories

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.atls.hyperion.storybook.shared.model.ComponentExample
import com.atls.hyperion.storybook.shared.ui.ComponentVariants
import com.atls.hyperion.ui.components.carousel.Carousel
import com.atls.hyperion.ui.components.carousel.CarouselWithPagination
import com.atls.hyperion.ui.components.carousel.InfiniteOverlayCarousel
import com.atls.hyperion.ui.components.carousel.style.shape.CarouselShape
import com.atls.hyperion.ui.components.carousel.style.shape.default
import com.atls.hyperion.ui.components.pagination.style.appearance.PaginationAppearance
import com.atls.hyperion.ui.components.pagination.style.appearance.default
import com.atls.hyperion.ui.components.pagination.style.shape.PaginationShape
import com.atls.hyperion.ui.components.pagination.style.shape.circle

class CarouselStory : ComponentExample {
    override val name: String = "Carousel"

    @Composable
    override fun Content() {
        Column(
            modifier = Modifier.verticalScroll(rememberScrollState())
        ) {
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
                    modifier = Modifier.height(200.dp)
                ) { page: Int ->
                    CarouselItem(page)
                }
            }

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
                    modifier = Modifier.height(200.dp)
                ) { page: Int ->
                    CarouselItem(page)
                }
            }

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
                    baseCardSize = 200.dp,
                    sizeStep = 20.dp,
                    visibleItemCount = 3,
                    alphaStep = 0.2f,
                    minAlpha = 0.5f,
                    centerIndexState = centerIndexState,
                    modifier = Modifier.fillMaxWidth().height(220.dp)
                ) { color, size, alpha, _ ->
                    Box(
                        modifier = Modifier
                            .height(size)
                            .fillMaxWidth()
                            .padding(horizontal = 8.dp)
                            .background(color.copy(alpha = alpha)),
                        contentAlignment = Alignment.Center
                    ) {
                        Text("Item", color = Color.White)
                    }
                }
            }
        }
    }

    @Composable
    private fun CarouselItem(page: Int) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .height(200.dp)
                .background(if (page % 2 == 0) Color.LightGray else Color.Gray),
            contentAlignment = Alignment.Center
        ) {
            Text(text = "Page $page")
        }
    }
}
