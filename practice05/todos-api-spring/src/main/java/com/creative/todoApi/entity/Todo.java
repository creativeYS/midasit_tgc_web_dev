package com.creative.todoApi.entity;

import lombok.Getter;

import javax.persistence.*;

import com.creative.todoApi.dto.TodoDto;

@Entity
@Getter
public class Todo {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long id;
    @Column(
            length = 512,
            nullable = false
    )
    private String content;
    @Column(
            length = 512,
            nullable = false
    )
    private String description;
    @Column
    private Boolean done;

    ////////////////////////////////////////////////////////

    public static Todo create(TodoDto dto) {
        Todo inst = new Todo();
        inst.content = dto.getContent();
        inst.description = dto.getDescription();
        inst.done = false;
        return inst;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setDone(Boolean done) {
        this.done = done;
    }
}
