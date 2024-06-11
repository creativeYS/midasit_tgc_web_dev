package com.creative.todoApi.dto;

import com.creative.todoApi.entity.Todo;

import lombok.Data;

@Data
public class TodoDto {
    Long id;
    String content;
    String desc;
    Boolean done;

    static public TodoDto of(Todo t) {
        TodoDto r = new TodoDto();
        r.setId(t.getId());
        r.setContent(t.getContent());
        r.setDesc(t.getDesc());
        r.setDone(t.getDone());
        return r;
    }
}
