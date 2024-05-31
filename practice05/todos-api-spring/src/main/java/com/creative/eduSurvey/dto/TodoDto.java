package com.creative.eduSurvey.dto;

import com.creative.eduSurvey.entity.Todo;

import lombok.Data;

@Data
public class TodoDto {
    Long id;
    String content;
    Boolean done;

    static public TodoDto of(Todo t) {
        TodoDto r = new TodoDto();
        r.setId(t.getId());
        r.setContent(t.getContent());
        r.setDone(t.getDone());
        return r;
    }
}
