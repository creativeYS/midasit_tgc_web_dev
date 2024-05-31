package com.creative.eduSurvey.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springdoc.core.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {
    @Bean
    public OpenAPI openAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("api doc")
                );
    }

    @Bean
    public GroupedOpenApi api() {
        String[] paths = {"/**"};
        String[] packagesToscan = {"com.creative.eduSurvey.controller"};

        return GroupedOpenApi.builder().group("api")
                .pathsToMatch(paths)
                .packagesToScan(packagesToscan)
                .build();
    }
}
