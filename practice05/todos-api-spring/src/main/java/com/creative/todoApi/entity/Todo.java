package com.creative.todoApi.entity;

import java.time.LocalDateTime;

import lombok.Getter;

import javax.persistence.*;

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
    @Column
    private Boolean done;
    @Column
    private LocalDateTime startDate;
    @Column
    private LocalDateTime endDate;

    ////////////////////////////////////////////////////////

    public static Todo create(String content, LocalDateTime endDate) {
        Todo inst = new Todo();
        inst.content = content;
        inst.done = false;
        inst.startDate = LocalDateTime.now();
        inst.endDate = endDate;
        return inst;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setDone(Boolean done) {
        this.done = done;
    }

    public void setStartDate(LocalDateTime date) {
        this.startDate = date;
    }

    public void setEndDate(LocalDateTime date) {
        this.endDate = date;
    }
}
