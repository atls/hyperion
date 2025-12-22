import org.jetbrains.kotlin.gradle.dsl.JvmTarget

plugins {
    alias(libs.plugins.kotlinMultiplatform)
    alias(libs.plugins.androidApplication)
    alias(libs.plugins.composeMultiplatform)
    alias(libs.plugins.composeCompiler)
}

kotlin {
    androidTarget {
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
            baseName = "Sample"
            isStatic = true
        }
    }
    
    sourceSets {
        commonMain.dependencies {
            implementation(project(":ui"))
            implementation(compose.runtime)
            implementation(compose.foundation)
            implementation(compose.material)
            implementation(compose.ui)
            implementation(compose.components.resources)
            implementation(compose.components.uiToolingPreview)
        }
        
        androidMain.dependencies {
            implementation(libs.androidx.activity.compose)
        }
    }
}

android {
    namespace = "com.atls.hyperion.sample"

    val compileSdkValue = System.getenv(Versions.COMPILE_SDK_KEY)?.toInt()
        ?: (extra[Versions.COMPILE_SDK_KEY] as String).toInt()
    val minSdkValue = System.getenv(Versions.MIN_SDK_KEY)?.toInt()
        ?: (extra[Versions.MIN_SDK_KEY] as String).toInt()
    val targetSdkValue = System.getenv(Versions.TARGET_SDK_KEY)?.toInt()
        ?: (extra[Versions.TARGET_SDK_KEY] as String).toInt()
    val javaTargetValue = System.getenv(Versions.JAVA_TARGET_KEY)?.toInt()
        ?: (extra[Versions.JAVA_TARGET_KEY] as String).toInt()

    compileSdk = compileSdkValue

    defaultConfig {
        applicationId = "com.atls.hyperion.sample"
        minSdk = minSdkValue
        targetSdk = targetSdkValue
        versionCode = 1
        versionName = "1.0"
    }
    packaging {
        resources {
            excludes += "/META-INF/{AL2.0,LGPL2.1}"
        }
    }
    buildTypes {
        getByName("release") {
            isMinifyEnabled = false
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.toVersion(javaTargetValue)
        targetCompatibility = JavaVersion.toVersion(javaTargetValue)
    }
}
