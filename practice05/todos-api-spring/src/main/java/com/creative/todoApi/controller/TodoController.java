package com.creative.todoApi.controller;

import com.creative.todoApi.dto.TodoDto;
import com.creative.todoApi.service.TodoService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import java.time.LocalDateTime;

@RestController
@AllArgsConstructor
public class TodoController {
    private final TodoService todoService;

    @GetMapping("/todo/{id}")
    public TodoDto getTodo(@PathVariable Long id) {
        return todoService.findTodo(id);
    }

    @GetMapping("/todo")
    public List<TodoDto> getTodos() {
        return todoService.findAll();
    }

    @PostMapping("/todo")
    public void postTodos(@RequestBody TodoDto todoDto) {
        todoService.insert(todoDto.getContent(), todoDto.getEndDate());
    }

    @DeleteMapping("/todo/{id}")
    public void deleteTodo(@PathVariable Long id) {
        todoService.deleteTodo(id);
    }

    @PutMapping("/todo")
    public TodoDto putTodos(@RequestBody TodoDto todoDto) {
        LocalDateTime curTime = LocalDateTime.now();
        todoService.updateTodo(
            todoDto.getId(),
            Optional.ofNullable(todoDto.getContent()),
            Optional.ofNullable(todoDto.getDone()),
            Optional.ofNullable(todoDto.getDone() ? curTime : null));
        return todoDto;
    }
}
