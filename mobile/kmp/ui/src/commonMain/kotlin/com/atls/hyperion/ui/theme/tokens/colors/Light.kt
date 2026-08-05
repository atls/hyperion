package com.atls.hyperion.ui.theme.tokens.colors

import androidx.compose.ui.graphics.Color

val lightColors = Colors(
    action = ActionColors(
        base = Color(0xFF1E56C7),
        hover = Color(0xFF1643A3),
        pressed = Color(0xFF12357F),
        disabled = Color(0x401E56C7),
        subtle = Color(0xFF6B86C8)
    ),
    surface = SurfaceColors(
        base = Color(0xFFF8F9FF),
        subtle = Color(0xFFEFF1FF),
        muted = Color(0xFFD4D8F0),
        soft = Color(0xFFFFFFFF),
        inverse = Color(0xFF111111)
    ),
    text = TextColors(
        primary = Color(0xFF0C0F1E),
        secondary = Color(0xFF2A3152),
        tertiary = Color(0xFF6B7DB3),
        muted = Color(0xFF9BA8C8),
        inverse = Color(0xFFFFFFFF)
    ),
    status = StatusColors(
        success = Color(0xFF10B981),
        warning = Color(0xFFF59E0B),
        error = Color(0xFFEF4444),
        info = Color(0xFF60A5FA)
    ),
    elevation = ElevationColors(
        xs = Color(0x14000000),
        sm = Color(0x1A000000),
        md = Color(0x1F000000),
        lg = Color(0x4D000000)
    )
)
