package com.creative.eduSurvey.controller;

import com.creative.eduSurvey.dto.TodoDto;
import com.creative.eduSurvey.service.TodoService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.ArrayList;
import java.util.Optional;
import java.util.stream.Collectors;

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
        todoService.insert(todoDto.getContent());
    }

    @DeleteMapping("/todo/{id}")
    public void deleteTodo(Long id) {
        todoService.deleteTodo(id);
    }

    @PutMapping("/todo/{id}")
    public TodoDto putTodos(@PathVariable Long id,
                            @RequestBody TodoDto todoDto) {
        todoDto.setId(id);
        todoService.updateTodo(id, Optional.ofNullable(todoDto.getContent()),
                Optional.ofNullable(todoDto.getDone()));
        return todoDto;
    }
}
