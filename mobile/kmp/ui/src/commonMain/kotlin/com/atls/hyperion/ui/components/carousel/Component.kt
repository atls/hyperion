package com.atls.hyperion.ui.components.carousel

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.pager.HorizontalPager
import androidx.compose.foundation.pager.PagerState
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.atls.hyperion.ui.components.carousel.style.shape.CarouselShape
import com.atls.hyperion.ui.components.carousel.style.shape.default

@Composable
fun Carousel(
    modifier: Modifier = Modifier,
    pageCount: Int,
    shape: CarouselShape = CarouselShape.default(),
    pagerState: PagerState = rememberPagerState(pageCount = {
        pageCount
    }),
    content: @Composable (page: Int) -> Unit
) {

    HorizontalPager(
        state = pagerState,
        contentPadding = PaddingValues(horizontal = shape.peekWidth + shape.padding),
        modifier = modifier.fillMaxWidth(),
        pageSpacing = shape.padding
    ) { page ->
        Box(
            modifier = Modifier
                .fillMaxWidth()
        ) {
            content(page)
        }
    }
}
