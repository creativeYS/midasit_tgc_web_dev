package com.creative.todoApi.dto;

import com.creative.todoApi.entity.Todo;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class TodoDto {
    Long id;
    String content;
    Boolean done;
    LocalDateTime startDate;
    LocalDateTime endDate;

    static public TodoDto of(Todo t) {
        TodoDto r = new TodoDto();
        r.setId(t.getId());
        r.setContent(t.getContent());
        r.setDone(t.getDone());
        r.setStartDate(t.getStartDate());
        r.setEndDate(t.getEndDate());
        return r;
    }
}
