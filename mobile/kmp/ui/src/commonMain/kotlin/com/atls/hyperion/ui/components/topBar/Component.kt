package com.atls.hyperion.ui.components.topBar

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.onGloballyPositioned
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import com.atls.hyperion.ui.components.topBar.style.appearance.TopBarAppearance
import com.atls.hyperion.ui.components.topBar.style.appearance.default
import com.atls.hyperion.ui.components.topBar.style.shape.TopBarShape
import com.atls.hyperion.ui.components.topBar.style.shape.default
import com.atls.hyperion.ui.primitives.Text
import com.atls.hyperion.ui.theme.tokens.layout.Space
import com.atls.hyperion.ui.theme.tokens.layout.Weight

@Composable
fun TopBar(
    modifier: Modifier = Modifier,
    text: String,
    appearance: TopBarAppearance = TopBarAppearance.default(),
    shape: TopBarShape = TopBarShape.default(),
    centerContent: (@Composable () -> Unit)? = null,
    beforeContent: @Composable () -> Unit = {},
    afterContent: @Composable () -> Unit = {}
) {
    val density = LocalDensity.current
    var beforeWidthPx by remember { mutableStateOf(0) }
    var afterWidthPx by remember { mutableStateOf(0) }
    var rowHeightPx by remember { mutableStateOf(0) }

    BoxWithConstraints(
        modifier = modifier
            .fillMaxWidth()
            .background(appearance.backgroundColor)
            .padding(shape.paddings)
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .onGloballyPositioned { rowHeightPx = it.size.height },
            verticalAlignment = Alignment.CenterVertically
        ) {
            Box(
                modifier = Modifier.onGloballyPositioned { beforeWidthPx = it.size.width },
                contentAlignment = Alignment.CenterStart
            ) { beforeContent() }

            Spacer(Modifier.weight(Weight.full))

            Box(
                modifier = Modifier.onGloballyPositioned { afterWidthPx = it.size.width },
                contentAlignment = Alignment.CenterEnd
            ) { afterContent() }
        }

        val horizontalPadding =
            with(density) { maxOf(beforeWidthPx, afterWidthPx).toDp() } + Space.sm
        val rowHeight = with(density) { rowHeightPx.toDp() }

        Box(
            modifier = Modifier
                .fillMaxWidth()
                .padding(start = horizontalPadding, end = horizontalPadding)
                .then(
                    if (rowHeight > 0.dp)
                        Modifier.heightIn(
                            min = rowHeight
                        )
                    else Modifier
                ),
            contentAlignment = Alignment.Center
        ) {
            if (centerContent == null) {
                Text(
                    text = text,
                    textAlign = TextAlign.Center,
                    typography = shape.typography,
                    color = appearance.textColor
                )
            } else centerContent()
        }
    }
}
