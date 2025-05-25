package com.example.shopmanager.config;

import org.modelmapper.Conditions;
import org.modelmapper.ModelMapper;
import org.modelmapper.config.Configuration.AccessLevel;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelMapperConfig {

    @Bean
    public ModelMapper modelMapper() {
        ModelMapper mapper = new ModelMapper();

        // Chỉ map những property không-null
        mapper.getConfiguration()
              .setPropertyCondition(Conditions.isNotNull())
              .setFieldMatchingEnabled(true)
              .setFieldAccessLevel(AccessLevel.PRIVATE);

        // TODO: nếu cần custom mapping, dùng mapper.typeMap(...)
        return mapper;
    }
}