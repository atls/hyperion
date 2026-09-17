package com.atls.hyperion.ui.components.input.typed.phone

import kotlin.test.Test
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class ValidationTest {
    @Test
    fun acceptsEmptyAndValidInternationalNumber() {
        assertTrue(isValidPhoneNumber("", "US"))
        assertTrue(isValidPhoneNumber("+1 650 253 0000", "US"))
        assertTrue(isValidPhoneNumber("+33 6 89 01 73 83", "US"))
        assertTrue(isValidPhoneNumber("6297062979", "IN"))
    }

    @Test
    fun rejectsIncompleteNumber() {
        assertFalse(isValidPhoneNumber("+1 650", "US"))
    }

    @Test
    fun rejectsMalformedNumbersWithoutThrowing() {
        listOf(
            "a",
            "+",
            "1",
            "00",
            "123abc",
            "+999999",
            "++1",
            "(650)"
        ).forEach { value ->
            assertFalse(isValidPhoneNumber(value, "US"))
        }
    }
}
