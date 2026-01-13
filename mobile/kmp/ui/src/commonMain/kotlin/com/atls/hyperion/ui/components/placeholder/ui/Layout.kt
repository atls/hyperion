package com.atls.hyperion.ui.components.placeholder.ui

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.width
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import com.atls.hyperion.ui.components.placeholder.model.PlaceholderOrientation
import com.atls.hyperion.ui.components.placeholder.styles.appearance.PlaceholderAppearance
import com.atls.hyperion.ui.components.placeholder.styles.shape.PlaceholderShape
import com.atls.hyperion.ui.generated.resources.Res
import com.atls.hyperion.ui.generated.resources.placeholder
import com.atls.hyperion.ui.primitives.icon.Icon
import org.jetbrains.compose.resources.painterResource

@Composable
fun PlaceholderLayout(
    modifier: Modifier = Modifier,
    appearance: PlaceholderAppearance,
    shape: PlaceholderShape,
    text: String? = null,
    orientation: PlaceholderOrientation = PlaceholderOrientation.Horizontal,
    content: @Composable () -> Unit = {
        Icon(
            icon = painterResource(Res.drawable.placeholder),
            color = appearance.iconColor,
            size = shape.iconSize
        )
    }
) {
    Box(
        modifier = modifier
            .background(appearance.backgroundColor),
        contentAlignment = Alignment.Center
    ) {
        if (text == null) {
            content()
        } else {
            when (orientation) {
                PlaceholderOrientation.Horizontal -> {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.Center
                    ) {
                        content()
                        Spacer(modifier = Modifier.width(shape.spacing))
                        Text(
                            text = text,
                            style = shape.typography,
                            color = appearance.textColor
                        )
                    }
                }

                PlaceholderOrientation.Vertical -> {
                    Column(
                        horizontalAlignment = Alignment.CenterHorizontally,
                        verticalArrangement = Arrangement.Center
                    ) {
                        content()
                        Spacer(modifier = Modifier.height(shape.spacing))
                        Text(
                            text = text,
                            style = shape.typography,
                            color = appearance.textColor
                        )
                    }
                }
            }
        }
    }
}
