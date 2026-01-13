package com.atls.hyperion.ui.components.tooltip

import androidx.compose.foundation.MutatePriority
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.RichTooltip
import androidx.compose.material3.TooltipAnchorPosition
import androidx.compose.material3.TooltipBox
import androidx.compose.material3.TooltipDefaults
import androidx.compose.material3.TooltipState
import androidx.compose.material3.rememberTooltipState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Modifier
import androidx.compose.ui.window.PopupPositionProvider
import com.atls.hyperion.ui.components.tooltip.style.appearance.TooltipAppearance
import com.atls.hyperion.ui.components.tooltip.style.appearance.default
import com.atls.hyperion.ui.components.tooltip.style.shape.TooltipShape
import com.atls.hyperion.ui.components.tooltip.style.shape.default
import kotlinx.coroutines.launch

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun Tooltip(
    modifier: Modifier = Modifier,
    appearance: TooltipAppearance = TooltipAppearance.default(),
    shape: TooltipShape = TooltipShape.default(),
    positionProvider: PopupPositionProvider = TooltipDefaults.rememberTooltipPositionProvider(
        TooltipAnchorPosition.Below
    ),
    tooltipState: TooltipState = rememberTooltipState(),
    tooltipContent: @Composable () -> Unit,
    content: @Composable () -> Unit
) {
    val scope = rememberCoroutineScope()

    TooltipBox(
        positionProvider = positionProvider,
        state = tooltipState,
        onDismissRequest = {
            tooltipState.dismiss()
        },
        tooltip = {
            RichTooltip(
                shape = RoundedCornerShape(shape.cornerRadius),
                colors = TooltipDefaults.richTooltipColors().copy(
                    containerColor = appearance.backgroundColor
                ),
                caretShape = TooltipDefaults.caretShape(shape.caretSize),
                text = {
                    Box(
                        modifier = Modifier.padding(shape.padding)
                    ) {
                        tooltipContent()
                    }
                }
            )
        },
        content = {
            Box(
                modifier = modifier
                    .clickable {
                        scope.launch {
                            tooltipState.show(MutatePriority.PreventUserInput)
                        }
                    }
            ) {
                content()
            }
        }
    )
}
