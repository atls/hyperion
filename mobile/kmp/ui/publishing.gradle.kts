import org.gradle.api.publish.PublishingExtension
import org.gradle.api.publish.maven.MavenPublication
import java.net.URI

configure<PublishingExtension> {
    publications {
        named<MavenPublication>("kotlinMultiplatform") {
            groupId = project.group.toString()
            artifactId = "hyperion"
            version = project.version.toString()

            pom {
                name.set("Hyperion")
                description.set("Highly ordered User Interface Kit")
                url.set("https://github.com/atls/hyperion")

                licenses {
                    license {
                        name.set("The Apache License, Version 2.0")
                        url.set("https://www.apache.org/licenses/LICENSE-2.0.txt")
                    }
                }

                developers {
                    developer {
                        id.set("atls")
                        name.set("Atlantis Team")
                        email.set("me@atls.team")
                    }
                }

                scm {
                    connection.set("scm:git:git://github.com/atls/hyperion.git")
                    developerConnection.set("scm:git:ssh://github.com:atls/hyperion.git")
                    url.set("https://github.com/atls/hyperion/tree/master/mobile/kmp")
                }
            }
        }
    }

    repositories {
        maven {
            name = "GitHubPackages"
            url = URI.create("https://maven.pkg.github.com/atls/hyperion")
            credentials {
                username = System.getenv("GITHUB_ACTOR") ?: project.findProperty("gpr.user") as String?
                password = System.getenv("GITHUB_TOKEN") ?: project.findProperty("gpr.key") as String?
            }
        }
    }
}
