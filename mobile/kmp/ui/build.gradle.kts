import org.jetbrains.kotlin.gradle.dsl.JvmTarget

plugins {
    alias(libs.plugins.kotlinMultiplatform)
    alias(libs.plugins.androidLibrary)
    alias(libs.plugins.composeMultiplatform)
    alias(libs.plugins.composeCompiler)
    `maven-publish`
    base
}

group = "com.atls.hyperion"
version = "0.6.0"
description = "Highly ordered User Interface Kit"

base {
    archivesName.set("hyperion")
}

kotlin {
    androidTarget {
        publishLibraryVariants("release")

        compilerOptions {
            jvmTarget.set(JvmTarget.JVM_21)
        }
    }

    listOf(
        iosX64(),
        iosArm64(),
        iosSimulatorArm64()
    ).forEach { iosTarget ->
        iosTarget.binaries.framework {
            baseName = "ui"
            isStatic = true
        }
    }

    sourceSets {
        commonMain.dependencies {
            implementation(project(":storybook"))
            implementation(compose.runtime)
            implementation(compose.foundation)
            implementation(compose.material)
            implementation(compose.material3)
            implementation(compose.ui)
            implementation(compose.components.resources)
            implementation(compose.components.uiToolingPreview)
            implementation(libs.compose.shadow)
            implementation(libs.coil.compose)
            implementation(libs.coil.network.ktor)
            implementation(libs.compose.calendar)
            api(libs.kotlinx.datetime)
        }

        androidMain {
            dependencies {
                implementation(libs.ktor.client.okhttp)
            }
        }

        iosMain {
            dependencies {
                implementation(libs.ktor.client.darwin)
            }
        }
    }
}

compose.resources {
    publicResClass = false
    generateResClass = auto
}

android {
    namespace = "com.atls.hyperion.ui"

    val compileSdkValue = System.getenv(Versions.COMPILE_SDK_KEY)?.toInt()
        ?: (extra[Versions.COMPILE_SDK_KEY] as String).toInt()
    val minSdkValue = System.getenv(Versions.MIN_SDK_KEY)?.toInt()
        ?: (extra[Versions.MIN_SDK_KEY] as String).toInt()
    val javaTargetValue = System.getenv(Versions.JAVA_TARGET_KEY)?.toInt()
        ?: (extra[Versions.JAVA_TARGET_KEY] as String).toInt()

    compileSdk = compileSdkValue
    defaultConfig {
        minSdk = minSdkValue
    }
    compileOptions {
        sourceCompatibility = JavaVersion.toVersion(javaTargetValue)
        targetCompatibility = JavaVersion.toVersion(javaTargetValue)
    }
    publishing {
        singleVariant("release") {
            withSourcesJar()
        }
    }
}

apply(from = "publishing.gradle.kts")
