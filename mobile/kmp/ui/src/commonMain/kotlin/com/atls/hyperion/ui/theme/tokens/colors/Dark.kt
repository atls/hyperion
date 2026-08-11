package com.atls.hyperion.ui.theme.tokens.colors

import androidx.compose.ui.graphics.Color

val darkColors = Colors(
    action = ActionColors(
        base = Color(0xFF5F8FFF),
        hover = Color(0xFF7AA7FF),
        pressed = Color(0xFF3F74FF),
        disabled = Color(0xFF5F8FFF),
        subtle = Color(0xFF394A6B)
    ),
    surface = SurfaceColors(
        base = Color(0xFF111111),
        subtle = Color(0xFF171717),
        muted = Color(0xFF1F1F1F),
        soft = Color(0xFFFFFFFF),
        inverse = Color(0xFFF8F9FF)
    ),
    text = TextColors(
        primary = Color(0xFFF2F4F7),
        secondary = Color(0xFFC9D0DA),
        tertiary = Color(0xFF9AA3B2),
        muted = Color(0xFF6B7485),
        inverse = Color(0xFF121417)
    ),
    status = StatusColors(
        success = Color(0xFF4AD27F),
        warning = Color(0xFFF2B84B),
        error = Color(0xFFFF5C5C),
        info = Color(0xFF5B8CFF)
    ),
    elevation = ElevationColors(
        xs = Color(0x59000000),
        sm = Color(0x66000000),
        md = Color(0x73000000),
        lg = Color(0x99000000)
    )
)
