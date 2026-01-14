package com.atls.hyperion.ui.components.checkbox.styles.shape

import com.atls.hyperion.ui.components.checkbox.styles.CheckboxSize
import com.atls.hyperion.ui.theme.tokens.layout.BorderStroke
import com.atls.hyperion.ui.theme.tokens.layout.CornerRadius

fun CheckboxShape.Companion.small(): CheckboxShape =
    CheckboxShape(
        size = CheckboxSize.small,
        cornerRadius = CornerRadius.xs3,
        borderStroke = BorderStroke.tiny
    )

fun CheckboxShape.Companion.medium(): CheckboxShape =
    CheckboxShape(
        size = CheckboxSize.medium,
        cornerRadius = CornerRadius.xs3,
        borderStroke = BorderStroke.tiny
    )

fun CheckboxShape.Companion.large(): CheckboxShape =
    CheckboxShape(
        size = CheckboxSize.large,
        cornerRadius = CornerRadius.xs3,
        borderStroke = BorderStroke.tiny
    )
