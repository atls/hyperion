package com.atls.hyperion.ui.components.toast

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Snackbar
import androidx.compose.material3.SnackbarHost
import androidx.compose.material3.SnackbarHostState
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextAlign
import com.atls.hyperion.ui.components.toast.styles.appearance.ToastAppearance
import com.atls.hyperion.ui.components.toast.styles.appearance.default
import com.atls.hyperion.ui.components.toast.styles.shape.ToastShape
import com.atls.hyperion.ui.components.toast.styles.shape.default

@Composable
fun Toast(
    hostState: SnackbarHostState,
    appearance: ToastAppearance = ToastAppearance.default(),
    shape: ToastShape = ToastShape.default(),
) {
    Box(
        modifier = Modifier.fillMaxWidth(),
        contentAlignment = Alignment.BottomCenter
    ) {
        SnackbarHost(
            hostState = hostState
        ) { data ->
            Snackbar(
                modifier = Modifier
                    .border(
                        BorderStroke(shape.borderStroke, appearance.borderColor),
                        RoundedCornerShape(shape.cornerRadius)
                    ),
                shape = RoundedCornerShape(shape.cornerRadius),
                containerColor = appearance.backgroundColor,
                contentColor = appearance.textColor,
                action = {}
            ) {
                Text(
                    text = data.visuals.message,
                    style = shape.typography,
                    textAlign = TextAlign.Center,
                    modifier = Modifier
                        .background(appearance.backgroundColor)

                        .padding(shape.paddings)
                )
            }
        }
    }
}
