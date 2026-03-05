package com.atls.hyperion.ui.components.toast

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Snackbar
import androidx.compose.material3.SnackbarHost
import androidx.compose.material3.SnackbarHostState
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.onGloballyPositioned
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.text.style.TextAlign
import com.atls.hyperion.ui.components.toast.styles.appearance.ToastAppearance
import com.atls.hyperion.ui.components.toast.styles.appearance.default
import com.atls.hyperion.ui.components.toast.styles.shape.ToastShape
import com.atls.hyperion.ui.components.toast.styles.shape.default
import com.atls.hyperion.ui.primitives.layout.row.Row
import com.atls.hyperion.ui.theme.tokens.layout.Weight

@Composable
fun Toast(
    hostState: SnackbarHostState,
    modifier: Modifier = Modifier,
    appearance: ToastAppearance = ToastAppearance.default(),
    shape: ToastShape = ToastShape.default(),
    leadingContent: (@Composable () -> Unit)? = null,
    trailingContent: (@Composable () -> Unit)? = null
) {
    var leadingWidthPx by remember { mutableStateOf(0) }
    var trailingWidthPx by remember { mutableStateOf(0) }
    val density = LocalDensity.current

    Box(
        modifier = Modifier.fillMaxWidth(),
        contentAlignment = Alignment.BottomCenter
    ) {
        SnackbarHost(hostState = hostState) { data ->
            Snackbar(
                modifier = modifier
                    .border(
                        BorderStroke(shape.borderStroke, appearance.borderColor),
                        RoundedCornerShape(shape.cornerRadius)
                    )
                    .fillMaxWidth(),
                shape = RoundedCornerShape(shape.cornerRadius),
                containerColor = appearance.backgroundColor,
                contentColor = appearance.textColor,
                action = {}
            ) {
                BoxWithConstraints(
                    modifier = Modifier
                        .background(appearance.backgroundColor)
                        .padding(shape.paddings)
                ) {
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Box(
                            modifier = Modifier
                                .onGloballyPositioned { leadingWidthPx = it.size.width },
                            contentAlignment = Alignment.CenterStart
                        ) {
                            leadingContent?.invoke()
                        }

                        Spacer(Modifier.weight(Weight.full))

                        Box(
                            modifier = Modifier.onGloballyPositioned { trailingWidthPx = it.size.width },
                            contentAlignment = Alignment.CenterEnd
                        ) {
                            trailingContent?.invoke()
                        }
                    }

                    val horizontalPadding = with(density) { maxOf(leadingWidthPx, trailingWidthPx).toDp() }

                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(start = horizontalPadding, end = horizontalPadding),
                        contentAlignment = Alignment.Center
                    ) {
                        Text(
                            text = data.visuals.message,
                            style = shape.typography,
                            textAlign = TextAlign.Center,
                            color = appearance.textColor
                        )
                    }
                }
            }
        }
    }
}
