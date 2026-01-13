package com.atls.hyperion.ui.components.carousel

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.pager.PagerState
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import com.atls.hyperion.ui.components.carousel.style.shape.CarouselShape
import com.atls.hyperion.ui.components.carousel.style.shape.default
import com.atls.hyperion.ui.components.pagination.Pagination
import com.atls.hyperion.ui.components.pagination.style.appearance.PaginationAppearance
import com.atls.hyperion.ui.components.pagination.style.appearance.default
import com.atls.hyperion.ui.components.pagination.style.shape.PaginationShape
import com.atls.hyperion.ui.components.pagination.style.shape.circle
import com.atls.hyperion.ui.primitives.VerticalSpacer
import com.atls.hyperion.ui.theme.tokens.layout.Space

@Composable
fun CarouselWithPagination(
    modifier: Modifier = Modifier,
    pageCount: Int,
    shape: CarouselShape = CarouselShape.default(),
    pagerState: PagerState = rememberPagerState(pageCount = {
        pageCount
    }),
    paginationAppearance: PaginationAppearance = PaginationAppearance.default(),
    paginationShape: PaginationShape = PaginationShape.circle(),
    content: @Composable (page: Int) -> Unit
) {
    Column(
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Carousel(
            pageCount = pageCount,
            modifier = modifier,
            shape = shape,
            pagerState = pagerState,
            content = content
        )

        VerticalSpacer(Space.g12)

        Pagination(
            currentPage = pagerState.currentPage,
            count = pageCount,
            appearance = paginationAppearance,
            shape = paginationShape
        )
    }
}
