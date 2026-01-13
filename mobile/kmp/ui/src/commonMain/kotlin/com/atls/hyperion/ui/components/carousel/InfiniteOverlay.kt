package com.atls.hyperion.ui.components.carousel

import androidx.compose.foundation.gestures.snapping.rememberSnapFlingBehavior
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.runtime.snapshotFlow
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.zIndex
import com.atls.hyperion.ui.components.carousel.ui.calculateDistance
import com.atls.hyperion.ui.components.carousel.ui.centerOfItem
import com.atls.hyperion.ui.components.carousel.ui.centerOfViewport
import com.atls.hyperion.ui.components.carousel.ui.normalizedStartIndex
import com.atls.hyperion.ui.theme.tokens.colors.Alpha
import com.atls.hyperion.ui.theme.tokens.layout.Space
import kotlin.math.abs

@Composable
fun <T> InfiniteOverlayCarousel(
    items: List<T>,
    modifier: Modifier = Modifier,
    baseCardSize: Dp,
    sizeStep: Dp,
    visibleItemCount: Int,
    alphaStep: Float,
    minAlpha: Float,
    centerIndexState: MutableState<Int>,
    itemContent: @Composable (item: T, size: Dp, alpha: Float, zIndex: Float) -> Unit
) {
    require(items.isNotEmpty()) { "Items list must not be empty" }
    require(visibleItemCount > 0) { "Visible item count must be positive" }
    require(visibleItemCount % 2 == 1) { "Visible item count should be odd for symmetrical layout" }

    val startIndex = remember(items) {
        normalizedStartIndex(centerIndexState.value, items.size)
    }

    val listState = rememberLazyListState(initialFirstVisibleItemIndex = startIndex)
    val density = LocalDensity.current
    val halfCount = (visibleItemCount - 1) / 2

    BoxWithConstraints(modifier = modifier
        .height(baseCardSize)) {
        val screenWidth = maxWidth
        val screenWidthPx = with(density) { screenWidth.toPx() }
        val baseCardSizePx = with(density) { baseCardSize.toPx() }

        val spacingPx = if (visibleItemCount == 1) {
            0f
        } else {
            (screenWidthPx - visibleItemCount * baseCardSizePx) / (visibleItemCount)
        }

        val spacing = with(density) { spacingPx.toDp() }
        val itemStepPx = baseCardSizePx + spacingPx

        val flingBehavior = rememberSnapFlingBehavior(lazyListState = listState)

        val viewportCenter by remember {
            derivedStateOf {
                centerOfViewport(
                    listState.layoutInfo.viewportStartOffset,
                    listState.layoutInfo.viewportSize.width
                )
            }
        }

        val currentCenterIndex by remember {
            derivedStateOf {
                val visibleItems = listState.layoutInfo.visibleItemsInfo
                visibleItems.minByOrNull { info ->
                    abs(centerOfItem(info.offset, info.size) - viewportCenter)
                }?.index ?: listState.firstVisibleItemIndex
            }
        }

        LaunchedEffect(currentCenterIndex) {
            centerIndexState.value = currentCenterIndex
        }

        LaunchedEffect(listState) {
            snapshotFlow { listState.layoutInfo.visibleItemsInfo.isNotEmpty() }
                .collect { ready ->
                    if (ready && !listState.isScrollInProgress) {
                        val visibleItems = listState.layoutInfo.visibleItemsInfo
                        val centerItemInfo = visibleItems.minByOrNull { info ->
                            abs(centerOfItem(info.offset, info.size) - viewportCenter)
                        }
                        centerItemInfo?.let { info ->
                            val realIndex = info.index % items.size
                            val middle = Int.MAX_VALUE / 2 - (Int.MAX_VALUE / 2) % items.size
                            val targetIndex = middle + realIndex
                            val offset = (info.size / 2) - (listState.layoutInfo.viewportSize.width / 2)
                            listState.scrollToItem(targetIndex, offset)
                        }
                    }
                }
        }

        val startDrawIndex by remember {
            derivedStateOf { currentCenterIndex - halfCount }
        }
        val endDrawIndex by remember {
            derivedStateOf { currentCenterIndex + halfCount }
        }

        LazyRow(
            state = listState,
            flingBehavior = flingBehavior,
            contentPadding = PaddingValues(Space.zero),
            horizontalArrangement = Arrangement.spacedBy(spacing),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            items(
                count = Int.MAX_VALUE,
                key = { it }
            ) { index ->
                if (index !in startDrawIndex..endDrawIndex) {
                    Spacer(Modifier.width(baseCardSize))
                    return@items
                }

                val currentItemInfo =
                    listState.layoutInfo.visibleItemsInfo.firstOrNull { it.index == index }
                val distance = currentItemInfo?.let { info ->
                    calculateDistance(
                        centerOfItem(info.offset, info.size),
                        viewportCenter,
                        itemStepPx
                    )
                } ?: abs(index - currentCenterIndex).toFloat()

                val clampedDistance = distance.coerceAtMost(halfCount.toFloat())
                val size = baseCardSize - (sizeStep * clampedDistance)
                val alpha = (Alpha.full - (alphaStep * clampedDistance)).coerceAtLeast(minAlpha)
                val zIndex = (visibleItemCount - clampedDistance)

                val item = items[index % items.size]

                Box(
                    modifier = Modifier
                        .width(baseCardSize)
                        .zIndex(zIndex),
                    contentAlignment = Alignment.Center
                ) {
                    itemContent(item, size, alpha, zIndex)
                }
            }
        }
    }
}
